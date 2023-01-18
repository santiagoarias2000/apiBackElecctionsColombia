"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CASANARE_CARGO = void 0;
exports.SQL_CASANARE_CARGO = {
    VIEWC: "SELECT nombre_cor, nombre_partido, nombre_candidato, sum(votos) as votos \
    from casanare \
        WHERE code_cor = $1 \
        group by nombre_cor, nombre_partido,nombre_candidato \
        order by votos DESC"
};
