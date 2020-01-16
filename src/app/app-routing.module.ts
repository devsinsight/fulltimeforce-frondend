import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./empleado/empleado.module#EmpleadoModule" },
  { path: "alumnos", loadChildren: "./alumno/alumno.module#AlumnoModule" },
  { path: "palindrome", loadChildren: "./palindrome/palindrome.module#PalindromeModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
