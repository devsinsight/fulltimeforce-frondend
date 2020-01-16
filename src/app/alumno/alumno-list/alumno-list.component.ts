import { Component, OnInit } from "@angular/core";
import { AlumnoService } from "../alumno.service";

@Component({
  selector: "alumno-list",
  templateUrl: "./alumno-list.component.html",
  styleUrls: ["./alumno-list.component.scss"]
})
export class AlumnoListComponent implements OnInit {
  alumnosAprobados = [];
  alumnosDesaprobados = [];
  promedioNotas: number;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    Promise.all([
      this.alumnoService.getAlumnosAprobados(),
      this.alumnoService.getAlumnosDesaprobados(),
      this.alumnoService.getPromedioNotas()
    ]).then((responses: any) => {
      console.log(responses);
      this.alumnosAprobados = responses[0];
      this.alumnosDesaprobados = responses[1];
      this.promedioNotas = responses[2];
    });
  }
}
