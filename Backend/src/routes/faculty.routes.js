import { Router } from 'express';
const router = Router();
import { registerFaculty, updateFacultyDetails, getCurrentFaculty } from '../controllers/faculty.controllers.js';
import { protect } from '../middlewares/auth.middleware.js';


router.route("/register").post(registerFaculty);

// Routes for the currently logged-in faculty
router.route("/me").get(protect, getCurrentFaculty);
router.route("/me/update").patch(protect, updateFacultyDetails);

export default router;