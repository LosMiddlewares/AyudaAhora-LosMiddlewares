import { Router } from 'express';
import { donationController } from '../controllers/donation.controller.js';
import { validator } from '../middlewares/validator.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const routerDonation = Router();

routerDonation.get('/', donationController.getDonations);

routerDonation.get('/:id', donationController.getDonations);

routerDonation.post('/:post_id', authenticateUser, validator, donationController.createDonation);

routerDonation.delete('/:id', donationController.deleteDonation);

export default routerDonation;