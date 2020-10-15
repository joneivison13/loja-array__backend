"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var ProductController_1 = __importDefault(require("./controller/ProductController"));
var UserController_1 = __importDefault(require("./controller/UserController"));
var token_1 = require("./middlewares/token");
var upload_1 = __importDefault(require("./middlewares/upload"));
var routes = express_1.Router();
var upload = multer_1.default({ storage: upload_1.default });
routes.get('/', function (req, res) {
    res.json({ message: 'servidor rodando com sucesso' });
});
// user
routes.post('/user', UserController_1.default.create);
routes.post('/login', UserController_1.default.login);
routes.get('/user', UserController_1.default.read);
routes.get('/user/:id', UserController_1.default.read);
routes.delete('/user/:id', token_1.checkJwt, UserController_1.default.detele);
// products
routes.post('/product', token_1.checkJwt, ProductController_1.default.create);
routes.get('/product', ProductController_1.default.read);
routes.get('/product/:id', token_1.checkJwt, ProductController_1.default.read);
// products ------ images
routes.post('/image', token_1.checkJwt, upload.single('file'), ProductController_1.default.upload);
exports.default = routes;
