import { Router } from 'express';
const router = Router();
import { registerUser, updateUserDetails, getCurrentUser } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/auth.middleware.js';



router.route("/register").post(registerUser);

// Routes for the currently logged-in user
router.route("/me").get(protect, getCurrentUser);
router.route("/me/update").patch(protect, updateUserDetails);

export default router;