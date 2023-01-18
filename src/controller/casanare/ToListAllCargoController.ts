import { SQL_ONETOONE_CARGO } from './../../repository/casanare/sql_cargo';
import { SQL_CASANARE_CARGO } from './../../repository/casanare/sql_toList_cargo';
import { Request } from 'express';
import { Response } from 'express';
import CasanareToListCargo from '../../daos/casanare/ToListAllCargo';


class CasanareCargoControllerGet extends CasanareToListCargo{
    public getMeListAllCargo(req: Request, res: Response): void{
        const code_cor = req.params.codeCor;
        const parameter = [code_cor];
        CasanareCargoControllerGet.getListCargo(SQL_CASANARE_CARGO.VIEWC,parameter,res);
    }
    public getMeListOneCargo(req: Request, res: Response): void{
        CasanareCargoControllerGet.getListCargo(SQL_ONETOONE_CARGO.VIEWCARGO,[],res);
    }
}
const casanareCargoControllerGet = new CasanareCargoControllerGet();
export default casanareCargoControllerGet;