export const SQL_CASANARE_CANDIDATO ={
VIEWCA:"SELECT nombre_cor, nombre_partido, nombre_candidato, sum(votos) as votos \
from casanare \
WHERE nombre_candidato = 'SALOMON ANDRES SANABRIA CHACON' \
group by nombre_cor,nombre_partido,nombre_candidato \
order by votos DESC",
}