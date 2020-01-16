import { Injectable } from "@angular/core";
import { CustomHttpService } from "../shared/services/custom-http.service";

@Injectable()
export class EmpleadoService {
  constructor(private http: CustomHttpService) {}

  getTest() {
    return this.http.get("/api/values");
  }

  calculateTaxes(params: any) {
    return this.http.post("/api/empleado/calculate", params);
  }
}
