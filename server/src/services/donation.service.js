import { Donation } from "../models/donation.js";
import { Post } from "../models/post.js";
import { DonationHistory } from "../models/donationHistory.js";

export const donationService = {

    async createDonation(donationData, userId) {
        try {
            // const { donor_id, post_id, amount } = donationData;
            const { post_id, amount } = donationData;

            const post = await Post.findByPk(post_id);
            if (!post) {
                throw new Error("Publicación no encontrada");
            }

            // Crea la donación
            const donation = await Donation.create({
                donor_id: userId,
                post_id,
                amount
            });

            post.current_amount += parseFloat(amount);
            await post.save();

            await DonationHistory.create({
                donation_id: donation.id,
                type: 'donated'
            });

            await DonationHistory.create({
                donation_id: donation.id,
                type: 'received'
            });

            return donation;
        } catch (error) {
            throw new Error(`Error al crear la donación: ${error.message}`);
        };
    },

    async getDonations() {
        try {
            return await Donation.findAll();
        } catch (error) {
            throw new Error("Error al obtener donaciones");
        };
    },

    async getDonationById(id) {
        try {
            const donation = await Donation.findByPk(id);
            if (!donation) {
                return "Donación no encontrada";
            };
            return donation;
        } catch (error) {
            throw new Error("Error al obtener la donación");
        };
    },

    async deleteDonation(id) {
        try {
            const donation = await this.getDonationById(id);
            if (!donation) {
                return "Donación no encontrada";
            };

            await donation.destroy();
            return { message: 'Donación eliminada' };
        } catch (error) {
            throw new Error(`Error al eliminar la donación: ${error.message}`);
        };
    },
};