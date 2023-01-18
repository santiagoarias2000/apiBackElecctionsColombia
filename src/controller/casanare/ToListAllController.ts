import { SQL_CASANARE_ALL } from './../../repository/casanare/sql_toList_all';
import { Request } from 'express';
import { Response } from 'express';
import CasanareToList from '../../daos/casanare/ToListAll';


class CasanareControllerGet extends CasanareToList{
    public getMeListCasanare(req: Request, res: Response): void{
        CasanareControllerGet.getListCasanare(SQL_CASANARE_ALL.DATALL,[],res);
    }
}
const casanareControllerGet = new CasanareControllerGet();
export default casanareControllerGet;