"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ONETOONE_CANDIDATO = void 0;
exports.SQL_ONETOONE_CANDIDATO = {
    VIEWCANDIDA: "select code_candidato, nombre_candidato from casanare \
    where code_cor = 1 \
    group by code_candidato, nombre_candidato"
};
