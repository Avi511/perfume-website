import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/start", async (req, res) => {
    try {
        const {
            order_id,
            amount,
            currency = "LKR",
            items,
            first_name,
            last_name,
            email,
            phone,
            address,
            city,
            country = "Sri Lanka",
        } = req.body;

        const merchant_id = process.env.PAYHERE_MERCHANT_ID?.trim();
        const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET?.trim();
        const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";
        const backend_url = process.env.BACKEND_URL || "http://localhost:5000";
        const isSandbox = process.env.PAYHERE_SANDBOX === "true";

        if (!merchant_id || !merchant_secret) {
            return res.status(500).json({ message: "PayHere configuration missing" });
        }

        if (!order_id || !amount) {
            return res.status(400).json({ message: "order_id and amount are required" });
        }

        const amountFormatted = Number(amount).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '');

        const secretHash = crypto
            .createHash("md5")
            .update(merchant_secret)
            .digest("hex")
            .toUpperCase();

        const hash = crypto
            .createHash("md5")
            .update(merchant_id + order_id + amountFormatted + currency + secretHash)
            .digest("hex")
            .toUpperCase();

        return res.json({
            merchant_id,
            hash,
            amount: amountFormatted,
            currency,
            payment: {
                sandbox: isSandbox,
                merchant_id,
                return_url: `${frontend_url}/payment-success`,
                cancel_url: `${frontend_url}/payment-cancel`,
                notify_url: `${backend_url}/api/payhere/notify`,
                order_id,
                items,
                amount: amountFormatted,
                currency,
                first_name,
                last_name,
                email,
                phone,
                address,
                city,
                country,
                hash,
            },
        });
    } catch (error) {
        console.error("PayHere start error:", error);
        return res.status(500).json({ message: "Failed to initialize PayHere payment" });
    }
});

router.post("/notify", express.urlencoded({ extended: false }), async (req, res) => {
    try {
        const {
            merchant_id,
            order_id,
            payhere_amount,
            payhere_currency,
            status_code,
            md5sig,
        } = req.body;

        const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET;

        const localMd5sig = crypto
            .createHash("md5")
            .update(
                merchant_id +
                order_id +
                payhere_amount +
                payhere_currency +
                status_code +
                crypto.createHash("md5").update(merchant_secret).digest("hex").toUpperCase()
            )
            .digest("hex")
            .toUpperCase();

        if (localMd5sig === md5sig && status_code === "2") {
            console.log(`PayHere payment success for order ${order_id}`);

            return res.sendStatus(200);
        }

        console.log(`PayHere payment verification failed for order ${order_id}`);
        return res.sendStatus(400);
    } catch (error) {
        console.error("PayHere notify error:", error);
        return res.sendStatus(500);
    }
});

export default router;