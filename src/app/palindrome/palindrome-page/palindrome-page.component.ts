import { Component, OnInit } from "@angular/core";
import { PalindromeService } from "../palindrome.service";

@Component({
  selector: "palindrome-page",
  templateUrl: "./palindrome-page.component.html",
  styleUrls: ["./palindrome-page.component.scss"]
})
export class PalindromePageComponent implements OnInit {
  result: string;
  texto: string = "";

  constructor(private palindromeService: PalindromeService) {}

  ngOnInit(): void {}

  checkText() {
    console.log(this.texto);
    if (this.palindromeService.checkPalindrom(this.texto)) {
      this.result = "Es palindrome";
    } else {
      this.result = "No es palindrome";
    }

    this.palindromeService
      .savePalindrome({
        Texto: this.texto,
        Resultado: this.result
      })
      .subscribe(result => {
        alert("grabado correctamente");
      });
  }
}
