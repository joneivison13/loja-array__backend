"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var index_1 = __importDefault(require("../database/index"));
var token_js_1 = __importDefault(require("../config/token.js"));
exports.default = {
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_name, user_lastname, user_cpf, user_email, user_pass, user_whatsapp, user_photo, user_city, user_state, user_district, user_postalcode, salt, hash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, user_name = _a.user_name, user_lastname = _a.user_lastname, user_cpf = _a.user_cpf, user_email = _a.user_email, user_pass = _a.user_pass, user_whatsapp = _a.user_whatsapp, user_photo = _a.user_photo, user_city = _a.user_city, user_state = _a.user_state, user_district = _a.user_district, user_postalcode = _a.user_postalcode;
                        if (!user_name ||
                            !user_lastname ||
                            !user_cpf ||
                            !user_email ||
                            !user_pass) {
                            return [2 /*return*/, res.status(400).json({ error: "Falta dados" })];
                        }
                        salt = bcryptjs_1.default.genSaltSync(12);
                        return [4 /*yield*/, bcryptjs_1.default.hashSync(user_pass, salt)];
                    case 1:
                        hash = _b.sent();
                        return [4 /*yield*/, index_1.default("user")
                                .insert({
                                user_name: user_name,
                                user_lastname: user_lastname,
                                user_cpf: user_cpf,
                                user_email: user_email,
                                user_pass: hash,
                                user_whatsapp: user_whatsapp,
                                user_photo: user_photo,
                                user_city: user_city,
                                user_state: user_state,
                                user_district: user_district,
                                user_postalcode: user_postalcode,
                            })
                                .catch(function (err) {
                                if (err.code === "ER_DUP_ENTRY") {
                                    return res.status(400).json({ error: "usuário já cadastrado" });
                                }
                                else {
                                    console.log(err);
                                    return res
                                        .status(500)
                                        .json({
                                        error: "Aconteceu um erro inesperado no servidor.\n Por favor, retorne mais tarde",
                                    });
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.json({
                                user_name: user_name,
                                user_lastname: user_lastname,
                                user_cpf: user_cpf,
                                user_email: user_email,
                                user_whatsapp: user_whatsapp,
                                user_photo: user_photo,
                                user_city: user_city,
                                user_state: user_state,
                                user_district: user_district,
                                user_postalcode: user_postalcode,
                            })];
                }
            });
        });
    },
    read: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user_1, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, index_1.default("user").select("*").where({ iduser: id })];
                    case 1:
                        user_1 = _a.sent();
                        return [2 /*return*/, res.json({ user: user_1[0] })];
                    case 2: return [4 /*yield*/, index_1.default("user").select("*")];
                    case 3:
                        user = _a.sent();
                        return [2 /*return*/, res.json({ user: user })];
                }
            });
        });
    },
    login: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_email, user_pass, user, password, user_name, email, user_whatsapp, user_photo, user_city, user_state, user_district, user_postalcode, user_cpf, user_lastname, iduser, matchPass, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, user_email = _a.user_email, user_pass = _a.user_pass;
                        if (!user_email || !user_pass) {
                            return [2 /*return*/, res.status(400).json({ error: "usuário não existe" })];
                        }
                        return [4 /*yield*/, index_1.default("user").select("*").where({ user_email: user_email }).first()];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ error: "Usuário inexistente." })];
                        }
                        password = user.user_pass, user_name = user.user_name, email = user.user_email, user_whatsapp = user.user_whatsapp, user_photo = user.user_photo, user_city = user.user_city, user_state = user.user_state, user_district = user.user_district, user_postalcode = user.user_postalcode, user_cpf = user.user_cpf, user_lastname = user.user_lastname, iduser = user.iduser;
                        return [4 /*yield*/, bcryptjs_1.default.compareSync(user_pass, password)];
                    case 2:
                        matchPass = _b.sent();
                        if (!matchPass) {
                            return [2 /*return*/, res.status(404).json({ error: 'usuário/senha incorretos.' })];
                        }
                        token = jsonwebtoken_1.default.sign({
                            user_pass: password,
                            user_name: user_name,
                            user_email: email,
                            user_whatsapp: user_whatsapp,
                            user_photo: user_photo,
                            user_city: user_city,
                            user_state: user_state,
                            user_district: user_district,
                            user_postalcode: user_postalcode,
                            user_cpf: user_cpf,
                            user_lastname: user_lastname,
                            iduser: iduser,
                        }, token_js_1.default.secret, { expiresIn: "7d" });
                        return [2 /*return*/, res.json({
                                user: {
                                    iduser: iduser,
                                    user_name: user_name,
                                    email: email,
                                    user_whatsapp: user_whatsapp,
                                    user_photo: user_photo,
                                    user_city: user_city,
                                    user_state: user_state,
                                    user_district: user_district,
                                    user_postalcode: user_postalcode,
                                    user_cpf: user_cpf,
                                    user_lastname: user_lastname,
                                }, token: token
                            })];
                }
            });
        });
    },
    detele: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, index_1.default('user').delete('*').where({ iduser: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ message: 'usuário apagado com sucesso.' })];
                }
            });
        });
    }
};
