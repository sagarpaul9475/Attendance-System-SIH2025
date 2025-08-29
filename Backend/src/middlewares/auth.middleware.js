import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { Faculty } from "../models/faculty.model.js"; // Import Faculty model for future use
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.headers?.authorization?.split(" ")[1];

    if (!token) {
        throw new ApiError(401, "Unauthorized request. Please log in.");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    let user;
    // This is the crucial part: check the user's role from the token
    if (decoded.userType === 'student') {
        user = await User.findById(decoded.id).select("-password");
    } else if (decoded.userType === 'faculty') {
        // This part will work automatically when you create the Faculty model
        user = await Faculty.findById(decoded.id).select("-password");
    }

    if (!user) {
        throw new ApiError(401, "Invalid access token. User not found.");
    }

    req.user = user;
    next();
});