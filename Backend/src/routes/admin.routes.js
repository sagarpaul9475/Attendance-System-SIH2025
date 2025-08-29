import { Router } from 'express';
const router = Router();
import { approveFacultyId } from '../controllers/admin.controllers.js';
import { protectAdmin } from '../middlewares/adminAuth.middleware.js'; // Note: A new middleware

// Base path will be '/api/v1/admin'
router.route("/approve-faculty").post(protectAdmin, approveFacultyId);

export default router;