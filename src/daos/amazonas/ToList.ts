import { Response } from 'express';
import pool from '../../config/connection/connectionDB';
class AmazonasToList{
    public static async getListAmazonas(sqlConsult: string, parameter:any, res: Response): Promise<any>{
        console.log(parameter);
        
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((myErr)=>{
            console.log('Error in daos: ', myErr);
            res.status(400).json({respuesta:'No esta trabajando el daos en amazonas'});
        });
    }

    protected static async detailsById(sqlSearch: string, params: any, res: Response): Promise<any> {
        console.log(params);
        
        await pool.one(sqlSearch, params)
            .then((dato)=>{
                return res.status(200).json(dato);
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error search from VehiclesDetails'});
            });
    }
}
export default AmazonasToList;