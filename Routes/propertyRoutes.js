import express from 'express';
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js';

const router = express.Router();

// In propertyRoutes.js
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.post('/', createProperty);  // Changed from '/add-property'
router.put('/:id', updateProperty); // Changed from '/update-property/:id'
router.delete('/:id', deleteProperty); // Changed from '/delete-property/:id'

export default router;
