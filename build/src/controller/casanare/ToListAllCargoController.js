"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListAllController_1 = __importDefault(require("../controller/casanare/ToListAllController"));
class CasanareRoutes {
    constructor() {
        this.routesApiCasanare = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCasanare.get("/view", ToListAllController_1.default.getMeListCasanare);
    }
}
const casanareRoutes = new CasanareRoutes();
exports.default = casanareRoutes.routesApiCasanare;
                                                                                                                                                                                                                                                                                                                             