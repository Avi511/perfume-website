import multer from "multer";

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|webp|gif/;

    const extname = filetypes.test(
        file.originalname.toLowerCase().split(".").pop()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error("Validation Error: You can only upload image files!"));
    }
}

const storage = multer.memoryStorage();

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});