export const SQL_ONETOONE_CANDIDATO = {
    VIEWCANDIDA:"select code_candidato, nombre_candidato from casanare \
    where code_cor = 1 \
    group by code_candidato, nombre_candidato"
}