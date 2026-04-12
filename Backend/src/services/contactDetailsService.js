import ContactDetails from "../models/ContactDetails.js";

export const createContactDetails = async (data) => {
    const contact = new ContactDetails(data);
    return await contact.save();
};

export const getAllContactDetailsService = async () => {
    return await ContactDetails.find().sort({ createdAt: -1 });
};

export const getContactDetailByIdService = async (id) => {
    return await ContactDetails.findById(id);
};

export const deleteContactDetailsService = async (id) => {
    return await ContactDetails.findByIdAndDelete(id);
};

