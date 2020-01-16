import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlumnoService } from "./alumno.service";
import { AlumnoListComponent } from "./alumno-list/alumno-list.component";
import { AlumnoRoutingModule } from "./alumno.routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AlumnoListComponent],
  imports: [CommonModule, AlumnoRoutingModule, FormsModule],
  exports: [],
  providers: [AlumnoService]
})
export class AlumnoModule {}
