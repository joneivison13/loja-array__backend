"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var path_1 = __importDefault(require("path"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.resolve(__dirname, '..', '..', 'temp', 'img'));
    },
    filename: function (req, file, cb) {
        cb(null, crypto_1.default.randomBytes(16).toString('hex') + "-" + file.originalname);
    },
});
exports.default = storage;
