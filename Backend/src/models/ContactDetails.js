import mongoose from "mongoose";

const contactDetailsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["unseen", "seen", "replied"],
        default: "unseen"
    }
}, {
    timestamps: true
});

const ContactDetails = mongoose.model("ContactDetails", contactDetailsSchema);
export default ContactDetails;