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
var database_1 = __importDefault(require("../database"));
exports.default = {
    list: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var productInCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default("products_has_user")
                            .select("product.*")
                            .select("products_photos.products_photos_dir")
                            .select("products_has_user.*")
                            .select("user.user_name")
                            .select("user.user_lastname")
                            .where("products_has_user.user_iduser", req.iduser)
                            .innerJoin("product", "products_has_user.products_idproducts", "product.idproduct")
                            .innerJoin("products_photos", "products_has_user.products_idproducts", "products_photos.products_idproduct")
                            .innerJoin("user", "product.user_iduser", "user.iduser")];
                    case 1:
                        productInCart = _a.sent();
                        return [2 /*return*/, res.json({ message: productInCart })];
                }
            });
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var now, _a, products_idproducts, product_qtd, products_has_user_qtd, productUser, _b, Qtd, productId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        now = new Date();
                        _a = req.body, products_idproducts = _a.products_idproducts, product_qtd = _a.product_qtd;
                        if (!products_idproducts) {
                            return [2 /*return*/, res.json({ error: true, message: "Falta selecionar o produto." })];
                        }
                        products_has_user_qtd = !!product_qtd ? product_qtd : 1;
                        return [4 /*yield*/, database_1.default("products_has_user")
                                .select("*")
                                .where({ user_iduser: req.iduser, products_idproducts: products_idproducts })];
                    case 1:
                        productUser = _c.sent();
                        console.log(productUser);
                        if (!(productUser.length >= 1)) return [3 /*break*/, 3];
                        _b = productUser[0], Qtd = _b.products_has_user_qtd, productId = _b.products_idproducts;
                        return [4 /*yield*/, database_1.default("products_has_user")
                                .update({
                                products_has_user_qtd: Number(Qtd) + Number(products_has_user_qtd),
                            })
                                .where({ products_idproducts: productId })
                                .catch(function (err) {
                                if (err.code === "ER_NO_REFERENCED_ROW_2") {
                                    return res
                                        .status(401)
                                        .json({ error: true, message: "Produto inexistente" });
                                }
                                console.log(err);
                                res.status(500).json({
                                    error: true,
                                    message: "Aconteceu um erro fatal com o servidor, por favor, tesnte mais tarde.",
                                });
                            })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, res.json({
                                message: "Produto adicionado ao carrinho com sucesso.",
                            })];
                    case 3: return [4 /*yield*/, database_1.default("products_has_user")
                            .insert({
                            products_idproducts: products_idproducts,
                            user_iduser: req.iduser,
                            products_has_user_date: now,
                            products_has_user_qtd: products_has_user_qtd,
                        })
                            .catch(function (err) {
                            if (err.code === "ER_NO_REFERENCED_ROW_2") {
                                return res
                                    .status(401)
                                    .json({ error: true, message: "Produto inexistente" });
                            }
                            console.log(err);
                            res.status(500).json({
                                error: true,
                                message: "Aconteceu um erro fatal com o servidor, por favor, tesnte mais tarde.",
                            });
                        })];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, res.json({ message: "Produto adicionado ao carrinho com sucesso!" })];
                }
            });
        });
    },
    remove: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, products_idproducts, qtd, productQtd;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, products_idproducts = _a.products_idproducts, qtd = _a.qtd;
                        if (!qtd || !products_idproducts) {
                            return [2 /*return*/, res.status(401).json({ error: true, message: "Faltam dados" })];
                        }
                        return [4 /*yield*/, database_1.default("products_has_user")
                                .select("products_has_user_qtd")
                                .where({ products_idproducts: products_idproducts, user_iduser: req.iduser })];
                    case 1:
                        productQtd = _b.sent();
                        if (!productQtd.length) {
                            return [2 /*return*/, res.status(404).json({ message: "Produto Inexistente" })];
                        }
                        if (!(Number(qtd) > Number(productQtd[0].products_has_user_qtd) - 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, database_1.default("products_has_user")
                                .delete("*")
                                .where({ user_iduser: req.iduser, products_idproducts: products_idproducts })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.json({ message: "Produto apagado com sucesso" })];
                    case 3: return [4 /*yield*/, database_1.default("products_has_user")
                            .update({
                            products_has_user_qtd: productQtd[0].products_has_user_qtd - Number(qtd),
                        })
                            .where({ user_iduser: req.iduser, products_idproducts: products_idproducts })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, res.json({ message: "Produto apagado com sucesso" })];
                }
            });
        });
    },
};
