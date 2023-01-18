"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CASANARE_CANDIDATO = void 0;
exports.SQL_CASANARE_CANDIDATO = {
    VIEWCA: "SELECT nombre_cor, nombre_partido, nombre_candidato, sum(votos) as votos \
from casanare \
WHERE nombre_candidato = $1 \
group by nombre_cor,nombre_partido,nombre_candidato \
order by votos DESC",
};
