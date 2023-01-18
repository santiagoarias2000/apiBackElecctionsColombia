"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CARGO_TOLIST = void 0;
exports.SQL_CARGO_TOLIST = {
    VIEWCARGO: "select code_cor, nombre_cor from amanzonas GROUP by code_cor, nombre_cor order by code_cor ASC;"
};
