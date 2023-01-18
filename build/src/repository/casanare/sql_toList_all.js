"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CASANARE_ALL = void 0;
exports.SQL_CASANARE_ALL = {
    DATALL: "SELECT nombre_municipio, nombre_puesto, nombre_cor,nombre_partido, nombre_candidato, sum(votos) as votos \
    from casanare \
    group by nombre_municipio, nombre_puesto,nombre_cor,nombre_partido,nombre_candidato"
};
