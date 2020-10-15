"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var jwt = __importStar(require("jsonwebtoken"));
var token_1 = __importDefault(require("../config/token"));
var database_1 = __importDefault(require("../database"));
exports.default = {
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, product_name, product_price, product_amount, departaments_iddepartament, token, decoded, user_iduser, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, product_name = _a.product_name, product_price = _a.product_price, product_amount = _a.product_amount, departaments_iddepartament = _a.departaments_iddepartament;
                        token = req.headers["auth"];
                        if (!product_name || !departaments_iddepartament) {
                            return [2 /*return*/, res.status(400).json({ error: "Falta dados" })];
                        }
                        try {
                            decoded = jwt.verify(token, token_1.default.secret);
                        }
                        catch (error) {
                            return [2 /*return*/, res.status(401).json({ error: "Usuário sem autorização" })];
                        }
                        user_iduser = decoded.iduser;
                        return [4 /*yield*/, database_1.default("product")
                                .insert({
                                product_name: product_name,
                                product_price: product_price,
                                product_amount: product_amount,
                                user_iduser: user_iduser,
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        product = _b.sent();
                        return [4 /*yield*/, database_1.default('departaments_has_products').insert({ departaments_iddepartament: departaments_iddepartament, products_idproducts: product[0] })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.json({
                                idproduct: product[0],
                                product_name: product_name || 0,
                                product_price: product_price || 0,
                                product_amount: product_amount || 1,
                            })];
                }
            });
        });
    },
    read: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, sort, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, database_1.default('product').select('*').where({ idproduct: id }).innerJoin('products_photos', 'product.idproduct', 'products_photos.products_idproduct')];
                    case 1:
                        product = _a.sent();
                        sort = product.sort(function (a, b) {
                            if (a.idproduct < b.idproduct) {
                                return -1;
                            }
                            else if (a.idproduct > b.idproduct) {
                                return 1;
                            }
                            return 0;
                        }).reduce(function (prev, curr, currindex) {
                            if (prev.idproduct === curr.idproduct) {
                                console.log('igual');
                            }
                        });
                        console.log(sort);
                        return [2 /*return*/, res.json({ id: id, product: product })];
                    case 2: return [4 /*yield*/, database_1.default('product').select('*').innerJoin('products_photos', 'product.idproduct', 'products_photos.products_idproduct')];
                    case 3:
                        products = _a.sent();
                        return [2 /*return*/, res.json({ id: id, product: products })];
                }
            });
        });
    },
    upload: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var products_idproduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        products_idproduct = req.body.products_idproduct;
                        return [4 /*yield*/, database_1.default('products_photos').insert({ products_photos_dir: "/temp/img/" + req.file.filename, products_idproduct: products_idproduct })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ error: false, status: 'Fotos inseridas com sucesso!' })];
                }
            });
        });
    }
};
