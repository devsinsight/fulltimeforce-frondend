import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

const routes: Routes = [
    { path: '', component: EmpleadoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpleadoRoutingModule {}
