"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const node_path_1 = __importDefault(require("node:path"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const TMP_FOLDER = node_path_1.default.resolve(__dirname, "..", "..", "tmp"); // manipula primeiro do back pra dps salvar certinho
const UPLOADS_FOLDER = node_path_1.default.resolve(TMP_FOLDER, "uploads");
const MAX_SIZE = 3; //3MB
const MAX_FILE_SIZE = 1024 * 1024 * MAX_SIZE; // 3mb
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];
// Configura o armazenamento local do Multer
const MULTER = {
    storage: multer_1.default.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = node_crypto_1.default.randomBytes(10).toString("hex");
            const fileName = `${fileHash}=${file.originalname}`;
            return callback(null, fileName);
        },
    }),
};
exports.default = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
    MAX_FILE_SIZE,
    ACCEPTED_IMAGE_TYPES,
    MAX_SIZE,
};
