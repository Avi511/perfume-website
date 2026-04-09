import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    try {
        const { product, rating, comment } = req.body;

        if (!rating || !comment) {
            return res.status(400).json({ error: "Rating and comment are required" });
        }

        const review = new Review({
            user: req.user._id,
            name: `${req.user.firstName} ${req.user.lastName}`,
            product,
            rating,
            comment,
        });

        const createdReview = await review.save();
        res.status(201).json(createdReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReviewsByProduct = async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.productId }).populate("user", "firstName lastName email");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReviewsByUser = async (req, res) => {
    try {
        const reviews = await Review.find({ user: req.params.userId }).populate("product", "name");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate("user", "firstName lastName email").populate("product", "name");

        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }

        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }

        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ error: "Not authorized to update this review" });
        }

        const { rating, comment } = req.body;

        if (rating) review.rating = rating;
        if (comment) review.comment = comment;

        const updatedReview = await review.save();
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }

        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ error: "Not authorized to delete this review" });
        }

        await review.remove();
        res.json({ message: "Review removed" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ product: null })
            .populate("user", "firstName lastName email")
            .populate("product", "name");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
