import { Router } from "express";
import amazonasControllerGet from "../controller/amazonas/ToListController";

class AmazonasRoutes {
  public routesApiAmazonas: Router;
  constructor() {
    this.routesApiAmazonas = Router();
    this.setting();
  }
  public setting() {
    this.routesApiAmazonas.get("/view", amazonasControllerGet.getMeListAmazonas);
  }
}
const amazonasRoutes = new AmazonasRoutes();
export default amazonasRoutes.routesApiAmazonas;
