import { Injectable } from "@angular/core";
import { CustomHttpService } from "../shared/services/custom-http.service";

@Injectable()
export class PalindromeService {
  constructor(private http: CustomHttpService) {}

  checkPalindrom(str) {
    return (
      str ==
      str
        .split("")
        .reverse()
        .join("")
    );
  }

  savePalindrome(palindrome: any) {
    return this.http.post("/api/palindrome/save", palindrome);
  }
}
