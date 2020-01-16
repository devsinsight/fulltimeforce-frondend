import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpleadoRoutingModule } from "./empleado-routing.module";
import { EmpleadoFormComponent } from "./empleado-form/empleado-form.component";
import { EmpleadoService } from "./empleado.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EmpleadoFormComponent],
  imports: [CommonModule, EmpleadoRoutingModule, FormsModule],
  exports: [],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
