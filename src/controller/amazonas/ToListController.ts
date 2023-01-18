import { Request } from 'express';
import { Response } from 'express';
import AmazonasToList from '../../daos/amazonas/ToList';
import { SQL_AMAZONAS_VIEW } from '../../repository/amazonas/sql_toList';



class AmazonasControllerGet extends AmazonasToList{
    public getMeListAmazonas(req: Request, res: Response): void{
        AmazonasControllerGet.getListAmazonas(SQL_AMAZONAS_VIEW.VIEW,[],res);
    }
    public getMeListLeticia(req: Request, res: Response): void{
        AmazonasControllerGet.getListAmazonas(SQL_AMAZONAS_VIEW.VIEWLETICIA,[],res);
    }
    public getMeListGobernador(req: Request, res: Response): void{
        const code_cor = req.params.codeCor;
        const parametro = [code_cor];
        AmazonasControllerGet.getListAmazonas(SQL_AMAZONAS_VIEW.VIEWGOBERNADOR,parametro,res);
    }
    public getMeListArcesio(req: Request, res: Response): void{
        AmazonasControllerGet.getListAmazonas(SQL_AMAZONAS_VIEW.VIEWARCESIO,[],res);
    }
}
const amazonasControllerGet = new AmazonasControllerGet();
export default amazonasControllerGet;