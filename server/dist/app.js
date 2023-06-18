"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PORT = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// const envFileAbsPath = path.resolve(__dirname, "../../.env");
console.log(__dirname);
console.log(path_1.default.join(__dirname + "/../.env"));
const dotenv_1 = __importDefault(require("dotenv"));
// dotenv.config({ path: envFileAbsPath });
dotenv_1.default.config({ path: path_1.default.join(__dirname + "/../.env") });
exports.PORT = process.env.PORT;
exports.HOST = process.env.HOST;
// in readme remember to instruct how to set up env variables to run application
app.use((0, cors_1.default)({ origin: `*` }));
app.use(express_1.default.json());
app.use(router_1.default);
exports.default = app;
