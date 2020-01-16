import { Injectable } from "@angular/core";
import { CustomHttpService } from "../shared/services/custom-http.service";

@Injectable()
export class AlumnoService {
  constructor(private http: CustomHttpService) {}

  getAlumnosAprobados() {
    return this.http.get("/api/alumno/aprobados").toPromise();
  }
  getAlumnosDesaprobados() {
    return this.http.get("/api/alumno/desaprobados").toPromise();
  }
  getPromedioNotas() {
    return this.http.get("/api/alumno/promedio").toPromise();
  }
}
