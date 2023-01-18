import { Router } from "express";
import cargoControllerGet from "../controller/amazonas/ToListCargoController";
import amazonasControllerGet from "../controller/amazonas/ToListController";

class AmazonasRoutes {
  public routesApiAmazonas: Router;
  constructor() {
    this.routesApiAmazonas = Router();
    this.setting();
  }
  public setting() {
    this.routesApiAmazonas.get("/view", amazonasControllerGet.getMeListAmazonas);
    this.routesApiAmazonas.get("/viewleticia", amazonasControllerGet.getMeListLeticia);
    this.routesApiAmazonas.get("/viewgobernador/:codeCor", amazonasControllerGet.getMeListGobernador);
    this.routesApiAmazonas.get("/viewarcesio", amazonasControllerGet.getMeListArcesio);

    this.routesApiAmazonas.get("/viewcargo", cargoControllerGet.getMeCargo);
  }
}
const amazonasRoutes = new AmazonasRoutes();
export default amazonasRoutes.routesApiAmazonas;
