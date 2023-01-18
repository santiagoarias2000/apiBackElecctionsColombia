import { Response } from "express";
import pool from "../../config/connection/connectionDB";

class ToListCargo{
    protected static async getCargo(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlSearch, params)
            .then((dato)=>{
                return res.status(200).json(dato.rows);
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error search from ToListCargo'});
            });
    }
}
export default ToListCargo;