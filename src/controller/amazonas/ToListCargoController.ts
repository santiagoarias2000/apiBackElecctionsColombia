import { SQL_CARGO_TOLIST } from './../../repository/amazonas/sql_toListCargo';
import { Request } from 'express';
import { Response } from 'express';
import ToListCargo from '../../daos/amazonas/ToListCargo';


class CargoControllerGet extends ToListCargo{
    public getMeCargo(req: Request, res: Response): void{
        CargoControllerGet.getCargo(SQL_CARGO_TOLIST.VIEWCARGO,[],res);
    }
}
const cargoControllerGet = new CargoControllerGet();
export default cargoControllerGet;