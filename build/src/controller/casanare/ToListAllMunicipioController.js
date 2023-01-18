"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_municipio_1 = require("./../../repository/casanare/sql_municipio");
const ToListAllMunicipio_1 = __importDefault(require("../../daos/casanare/ToListAllMunicipio"));
const sql_toList_municipio_1 = require("../../repository/casanare/sql_toList_municipio");
class CasanareMunicipioControllerGet extends ToListAllMunicipio_1.default {
    getMeListAllMunicipio(req, res) {
        const code_municipio = req.params.codeMunicipio;
        const parameter = [code_municipio];
        CasanareMunicipioControllerGet.getListMunicipio(sql_toList_municipio_1.SQL_CASANARE_MUNICIPIO.VIEWM, parameter, res);
    }
    getMeListMunicipio(req, res) {
        CasanareMunicipioControllerGet.getListMunicipio(sql_municipio_1.SQL_ONETOONE_MUNICIPIO.VIEWMUNI, [], res);
    }
}
const casanareMunicipioControllerGet = new CasanareMunicipioControllerGet();
exports.default = casanareMunicipioControllerGet;
