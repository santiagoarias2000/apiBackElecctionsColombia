"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AMAZONAS_VIEW = void 0;
exports.SQL_AMAZONAS_VIEW = {
    VIEW: "select id_election, nombre_departamento, nombre_municipio, nombre_puesto, nombre_cor, nombre_partido,nombre_candidato, sum(votos) as votos from amanzonas group by id_election, nombre_departamento, nombre_municipio, nombre_puesto, nombre_cor, nombre_partido,nombre_candidato; ",
    VIEWLETICIA: "select  nombre_municipio, nombre_cor, nombre_partido,nombre_candidato, sum(votos) as votos from amanzonas where nombre_municipio='LETICIA' group by nombre_municipio, nombre_cor, nombre_partido,nombre_candidato order by nombre_cor ASC, nombre_candidato ASC;",
    VIEWGOBERNADOR: "select nombre_cor,nombre_candidato,nombre_partido,sum(votos) as votos from amanzonas  where code_cor = $1 GROUP by nombre_candidato,nombre_partido, nombre_cor order by nombre_cor DESC, votos ASC;",
    VIEWARCESIO: "select nombre_candidato,nombre_partido, nombre_puesto,sum(votos)as votos from amanzonas where nombre_candidato='ARCESIO RENDON GONZALEZ' group by nombre_candidato,nombre_partido, nombre_puesto order by votos ASC;",
};
