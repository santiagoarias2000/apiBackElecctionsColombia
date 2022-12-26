import { Request } from 'express';
import { Response } from 'express';
import AmazonasToList from '../../daos/amazonas/ToList';
import { SQL_AMAZONAS_VIEW } from '../../repository/amazonas/sql_toList';



class AmazonasControllerGet extends AmazonasToList{
    public getMeListAmazonas(req: Request, res: Response): void{
        AmazonasControllerGet.getListAmazonas(SQL_AMAZONAS_VIEW.VIEW,[],res);
    }
}
const amazonasControllerGet = new AmazonasControllerGet();
export default amazonasControllerGet;