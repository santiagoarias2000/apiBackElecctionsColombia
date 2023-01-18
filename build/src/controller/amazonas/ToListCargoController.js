"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toListCargo_1 = require("./../../repository/amazonas/sql_toListCargo");
const ToListCargo_1 = __importDefault(require("../../daos/amazonas/ToListCargo"));
class CargoControllerGet extends ToListCargo_1.default {
    getMeCargo(req, res) {
        CargoControllerGet.getCargo(sql_toListCargo_1.SQL_CARGO_TOLIST.VIEWCARGO, [], res);
    }
}
const cargoControllerGet = new CargoControllerGet();
exports.default = cargoControllerGet;
