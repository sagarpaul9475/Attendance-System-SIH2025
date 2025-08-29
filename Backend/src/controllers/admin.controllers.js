import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { ApprovedFaculty } from "../models/approvedFaculty.model.js";

const approveFacultyId = asyncHandler(async (req, res) => {
    const { teacherId } = req.body;

    if (!teacherId) {
        throw new ApiError(400, "Teacher ID is required.");
    }

    const existingId = await ApprovedFaculty.findOne({ teacherId });
    if (existingId) {
        throw new ApiError(409, "This Teacher ID is already on the approved list.");
    }

    // req.user._id comes from an admin-only authentication middleware
    await ApprovedFaculty.create({ teacherId, approvedBy: req.user._id });

    return res.status(201).json(
        new apiResponse(201, {}, `Teacher ID ${teacherId} has been approved for registration.`)
    );
});

export { approveFacultyId };