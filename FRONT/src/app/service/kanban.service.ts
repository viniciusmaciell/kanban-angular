import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthGuardService } from "../guards/auth-guard";
import { Card } from "../model/card.model";

@Injectable({
  providedIn: "root",
})
export class KanbanService {
  private baseUrl = "http://0.0.0.0:5000";

  cards!: Card[];

  isAuth: boolean = false;
  token!: any;

  cardsChange = new Subject();

  constructor(private http: HttpClient) {}

  sendAuthRequest(login: string, senha: string) {
    return this.http.post(this.baseUrl + "/login", {
      login: login,
      senha: senha,
    });
  }

  saveToken(data: any) {
    this.isAuth = true;
    localStorage.setItem("token", data);
    this.token = data;
  }
  isUserAuth() {
    return this.isAuth;
  }

  getCards() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.get<Card[]>(this.baseUrl + "/cards", { headers: headers });
  }

  postCards(titulo: string, conteudo: string) {
    let card = new Card("", titulo, conteudo, "todo");
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.post<Card[]>(this.baseUrl + "/cards/", card, {
      headers: headers,
    });
  }
  deleteCards(id: any) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.http.delete<Card>(this.baseUrl + "/cards/" + id, {
      headers: headers,
    });
  }
  changeCards(id: string, titulo: string, conteudo: string, lista: string) {
    let card = new Card(id, titulo, conteudo, lista);
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.http.put<Card[]>(this.baseUrl + "/cards/" + id, card, {
      headers: headers,
    });
  }

  getCardsTodo(card: Card[]) {
    return card.filter((c) => c.lista === "todo");
  }
  getCardsDoing(card: Card[]) {
    return card.filter((c) => c.lista === "doing");
  }
  getCardsDone(card: Card[]) {
    return card.filter((c) => c.lista === "done");
  }
}
