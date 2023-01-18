export const SQL_CASANARE_ALL ={
    DATALL : "SELECT nombre_municipio, nombre_puesto, nombre_cor,nombre_partido, nombre_candidato, sum(votos) as votos \
    from casanare \
    group by nombre_municipio, nombre_puesto,nombre_cor,nombre_partido,nombre_candidato"
   }