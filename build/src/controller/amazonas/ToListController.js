"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToList_1 = __importDefault(require("../../daos/amazonas/ToList"));
const sql_toList_1 = require("../../repository/amazonas/sql_toList");
class AmazonasControllerGet extends ToList_1.default {
    getMeListAmazonas(req, res) {
        AmazonasControllerGet.getListAmazonas(sql_toList_1.SQL_AMAZONAS_VIEW.VIEW, [], res);
    }
    getMeListLeticia(req, res) {
        AmazonasControllerGet.getListAmazonas(sql_toList_1.SQL_AMAZONAS_VIEW.VIEWLETICIA, [], res);
    }
    getMeListGobernador(req, res) {
        const code_cor = req.params.codeCor;
        const parametro = [code_cor];
        AmazonasControllerGet.getListAmazonas(sql_toList_1.SQL_AMAZONAS_VIEW.VIEWGOBERNADOR, parametro, res);
    }
    getMeListArcesio(req, res) {
        AmazonasControllerGet.getListAmazonas(sql_toList_1.SQL_AMAZONAS_VIEW.VIEWARCESIO, [], res);
    }
}
const amazonasControllerGet = new AmazonasControllerGet();
exports.default = amazonasControllerGet;
