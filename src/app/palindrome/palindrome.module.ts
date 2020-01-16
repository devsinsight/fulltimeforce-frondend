import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PalindromeService } from "./palindrome.service";
import { PalindromePageComponent } from "./palindrome-page/palindrome-page.component";
import { PalindromeRoutingModule } from './palindrome-rounting.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PalindromePageComponent],
  imports: [CommonModule, PalindromeRoutingModule, FormsModule],
  exports: [],
  providers: [PalindromeService]
})
export class PalindromeModule {}
