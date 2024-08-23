import { donationService } from "../services/donation.service.js";
import { handleError } from "../utils/errorCatch.js";

export const donationController = {
    async createDonation(req, res) {
        try {
            const donationData = req.body;
            const newDonation = await donationService.createDonation(donationData);
            res.status(201).json({ message: "Donación creada", newDonation });
        } catch (error) {
            handleError(error, res, "Error al crear la donación");
        };
    },

    async getDonations(_req, res) {
        try {
            const donations = await donationService.getDonations();
            res.status(200).json(donations);
        } catch (error) {
            handleError(error, res, "Error al obtener donaciones");
        };
    },

    async getDonationById(req, res) {
        try {
            const { id } = req.params;
            const donation = await donationService.getDonationById(id);
            res.status(200).json(donation);
        } catch (error) {
            handleError(error, res, `Error al obtener la donación con id ${id}`);
        };
    },

    async deleteDonation(req, res) {
        try {
            const { id } = req.params;
            const donationDeleted = await donationService.deleteDonation(id);
            res.status(200).json(donationDeleted);
        } catch (error) {
            handleError(error, res, `Error al eliminar donación con id ${id}`);
        };
    },
};