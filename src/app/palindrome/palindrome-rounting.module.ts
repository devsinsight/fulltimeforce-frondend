import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PalindromePageComponent } from "./palindrome-page/palindrome-page.component";

const routes: Routes = [{ path: "", component: PalindromePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalindromeRoutingModule {}
