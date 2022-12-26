"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/amazonas/ToListController"));
class AmazonasRoutes {
    constructor() {
        this.routesApiAmazonas = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAmazonas.get("/view", ToListController_1.default.getMeListAmazonas);
    }
}
const amazonasRoutes = new AmazonasRoutes();
exports.default = amazonasRoutes.routesApiAmazonas;
