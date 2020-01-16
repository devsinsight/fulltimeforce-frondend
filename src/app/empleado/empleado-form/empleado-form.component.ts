import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "../empleado.service";

@Component({
  selector: "empleado-form",
  templateUrl: "./empleado-form.component.html",
  styleUrls: ["./empleado-form.component.scss"]
})
export class EmpleadoFormComponent implements OnInit {
  nombre: string = "";
  precio: number = 0;
  horas: number = 0;
  aniosTrabajados: number = 0;
  result: string = "";

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  calcular() {
    this.empleadoService
      .calculateTaxes({
        Name: this.nombre,
        MonthHours: this.horas,
        Price: this.precio,
        Years: this.aniosTrabajados
      })
      .subscribe(result => {
        this.result = result.toString();
      });
  }
}
