import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { Faculty } from "../models/faculty.model.js";
import { ApprovedFaculty } from "../models/approvedFaculty.model.js"; // For secure registration

const registerFaculty = asyncHandler(async (req, res) => {
    const { teacherId, name, gmail, password } = req.body;

    if ([teacherId, name, gmail, password].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Secure Registration Check
    const approvedEntry = await ApprovedFaculty.findOne({ teacherId });
    if (!approvedEntry) {
        throw new ApiError(403, "This Teacher ID has not been approved for registration.");
    }
    if (approvedEntry.isRegistered) {
        throw new ApiError(409, "This Teacher ID has already been used to register an account.");
    }

    const existedFaculty = await Faculty.findOne({ $or: [{ teacherId }, { gmail }] });
    if (existedFaculty) {
        throw new ApiError(409, "Faculty with given Teacher ID or Gmail already exists");
    }

    const faculty = await Faculty.create({ teacherId, name, gmail, password });
    const accessToken = faculty.generateAccessToken();

    // Mark the ID as registered
    approvedEntry.isRegistered = true;
    await approvedEntry.save();

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    };

    const facultyData = faculty.toObject();
    delete facultyData.password;

    return res.status(201)
        .cookie("accessToken", accessToken, options)
        .json(new apiResponse(201, { user: facultyData }, "Faculty registered successfully"));
});

const updateFacultyDetails = asyncHandler(async (req, res) => {
    const { name, gmail } = req.body;

    if (!name && !gmail) {
        throw new ApiError(400, "At least one field (name or gmail) is required to update.");
    }

    const updatedFaculty = await Faculty.findByIdAndUpdate(
        req.user._id,
        { $set: { name, gmail } },
        { new: true }
    ).select("-password");

    return res.status(200).json(
        new apiResponse(200, updatedFaculty, "Faculty details updated successfully")
    );
});

const getCurrentFaculty = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new apiResponse(200, req.user, "Current faculty fetched successfully")
    );
});

export { registerFaculty, updateFacultyDetails, getCurrentFaculty };