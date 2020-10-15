"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var routes_1 = __importDefault(require("./routes"));
app.use(cors_1.default());
app.use('/temp', express_1.default.static('temp'));
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use(routes_1.default);
app.listen(3333, function () {
    console.log('servidor rodando');
});
