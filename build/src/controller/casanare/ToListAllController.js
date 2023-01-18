"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_all_1 = require("./../../repository/casanare/sql_toList_all");
const ToListAll_1 = __importDefault(require("../../daos/casanare/ToListAll"));
class CasanareControllerGet extends ToListAll_1.default {
    getMeListCasanare(req, res) {
        CasanareControllerGet.getListCasanare(sql_toList_all_1.SQL_CASANARE_ALL.DATALL, [], res);
    }
}
const casanareControllerGet = new CasanareControllerGet();
exports.default = casanareControllerGet;
