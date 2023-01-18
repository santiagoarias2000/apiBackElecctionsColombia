"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListAllCandidatoContoller_1 = __importDefault(require("../controller/casanare/ToListAllCandidatoContoller"));
const ToListAllCargoController_1 = __importDefault(require("../controller/casanare/ToListAllCargoController"));
const ToListAllController_1 = __importDefault(require("../controller/casanare/ToListAllController"));
const ToListAllMunicipioController_1 = __importDefault(require("../controller/casanare/ToListAllMunicipioController"));
class CasanareRoutes {
    constructor() {
        this.routesApiCasanare = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        //Route public to view all data from eletions
        this.routesApiCasanare.get("/viewall", ToListAllController_1.default.getMeListCasanare);
        this.routesApiCasanare.get("/viewmunicipio/:codeMunicipio", ToListAllMunicipioController_1.default.getMeListAllMunicipio);
        this.routesApiCasanare.get("/viewcargo/:codeCor", ToListAllCargoController_1.default.getMeListAllCargo);
        this.routesApiCasanare.get("/viewcandidato", ToListAllCandidatoContoller_1.default.getMeListCandidato);
        //Route public to view information to access menu from infomation select
        this.routesApiCasanare.get('/municipio', ToListAllMunicipioController_1.default.getMeListMunicipio);
        this.routesApiCasanare.get('/cargo', ToListAllCargoController_1.default.getMeListOneCargo);
        this.routesApiCasanare.get('/candidato', ToListAllCandidatoContoller_1.default.getMeListOneCandidato);
    }
}
const casanareRoutes = new CasanareRoutes();
exports.default = casanareRoutes.routesApiCasanare;
/*
1. Presentacion de proyecto: hitData Dev
-En la presentacion lo primero es presentar la vision de la empresa la vision de la empresa de desarrollo, p cris

*/ 
