import * as contactDetailsService from "../services/contactDetailsService.js";

export const createContactDetails = async (req, res) => {
    try {
        const contactDetails = await contactDetailsService.createContactDetails(req.body);
        return res.status(201).json(contactDetails);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error creating contact details" });
    }
}

export const getContactDetails = async (req, res) => {
    try {
        const contactDetails = await contactDetailsService.getAllContactDetailsService();
        return res.status(200).json(contactDetails);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error getting contact details" });
    }
}

export const getContactDetailById = async (req, res) => {
    try {
        const contactDetails = await contactDetailsService.getContactDetailByIdService(req.params.id);
        if (!contactDetails) {
            return res.status(404).json({ error: "Contact details not found" });
        }
        return res.status(200).json(contactDetails);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error getting contact details" });
    }
}

export const deleteContactDetails = async (req, res) => {
    try {
        const contactDetails = await contactDetailsService.deleteContactDetailsService(req.params.id);
        if (!contactDetails) {
            return res.status(404).json({ error: "Contact details not found" });
        }
        return res.status(200).json({ message: "Contact details deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error deleting contact details" });
    }
}
export const updateContactStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const contactDetails = await contactDetailsService.updateContactStatusService(req.params.id, status);
        if (!contactDetails) {
            return res.status(404).json({ error: "Contact details not found" });
        }
        return res.status(200).json(contactDetails);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error updating contact status" });
    }
}
