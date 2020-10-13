import multer from "multer";
import crypto from 'crypto';
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', 'temp', 'img'));
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomBytes(16).toString('hex') + "-" + file.originalname);
  },
});


export default storage;