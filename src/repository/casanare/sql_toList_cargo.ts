export const SQL_CASANARE_CARGO ={
    VIEWC: "SELECT nombre_cor, nombre_partido, nombre_candidato, sum(votos) as votos \
    from casanare \
        WHERE code_cor = $1 \
        group by nombre_cor, nombre_partido,nombre_candidato \
        order by votos DESC"
}