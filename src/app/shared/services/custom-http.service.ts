import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const baseUrl = "https://localhost:5001";

@Injectable()
export class CustomHttpService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(baseUrl + url);
  }

  post(url: string, params: any) {
    return this.http.post(baseUrl + url, params);
  }
}
