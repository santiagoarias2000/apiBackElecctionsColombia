"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_candidato_1 = require("./../../repository/casanare/sql_candidato");
const sql_toList_candidato_1 = require("./../../repository/casanare/sql_toList_candidato");
const ToListAllCandidato_1 = __importDefault(require("../../daos/casanare/ToListAllCandidato"));
class CasanareCandidatoControllerGet extends ToListAllCandidato_1.default {
    getMeListCandidato(req, res) {
        const nombre_candidato = req.params.nombreCandidato;
        const parameter = [nombre_candidato];
        CasanareCandidatoControllerGet.getListCandidato(sql_toList_candidato_1.SQL_CASANARE_CANDIDATO.VIEWCA, parameter, res);
    }
    getMeListOneCandidato(req, res) {
        CasanareCandidatoControllerGet.getListCandidato(sql_candidato_1.SQL_ONETOONE_CANDIDATO.VIEWCANDIDA, [], res);
    }
}
const casanareCandidatoControllerGet = new CasanareCandidatoControllerGet();
exports.default = casanareCandidatoControllerGet;
