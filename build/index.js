"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var db_1 = require("./db");
dotenv_1.default.config();
var app = express_1.default();
db_1.initMongoDB();
app.use(cors_1.default());
app.use(helmet_1.default());
app.get('./', function (req, res) {
    console.log(req.originalUrl);
    res.send('hello World');
});
var port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, function () {
    console.log("Listening on port " + port);
});
