import { Component, OnInit } from "@angular/core";
import { faKey, faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  faEye = faEye;
  faKey = faKey;
  faUserCircle = faUserCircle;
  constructor() {}

  ngOnInit() {}
}
