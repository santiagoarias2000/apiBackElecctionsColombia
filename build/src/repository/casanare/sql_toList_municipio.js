"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CASANARE_MUNICIPIO = void 0;
exports.SQL_CASANARE_MUNICIPIO = {
    VIEWM: "SELECT nombre_puesto, nombre_cor,nombre_partido, nombre_candidato, sum(votos) as votos \
    from casanare \
	WHERE code_municipio =  $1 \
    group by nombre_puesto,nombre_cor,nombre_partido,nombre_candidato \
	order by votos DESC"
};
