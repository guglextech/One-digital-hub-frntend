import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import {  RouterOutlet } from "@angular/router";
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
})
export class LayoutPage{}
