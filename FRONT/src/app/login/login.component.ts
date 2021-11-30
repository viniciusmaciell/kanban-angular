import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { KanbanService } from "../service/kanban.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  singUpForm!: FormGroup;

  constructor(private kanbanService: KanbanService,
    private route: Router) {}

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  getAuth() {
    this.kanbanService.sendAuthRequest(this.singUpForm.value.username, this.singUpForm.value.password).subscribe((data)=> {
      if(data) {
        this.kanbanService.isAuth = true;
        this.kanbanService.saveToken(data);
        this.route.navigateByUrl("/board");

      } else alert(`Usuário ou senha Inválidos!`)
    })}

  }
