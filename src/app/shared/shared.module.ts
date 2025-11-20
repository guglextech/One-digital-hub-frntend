// Angular Import
import "hammerjs";
import "mousetrap";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgScrollbarModule } from "ngx-scrollbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataFilterPipe } from "../core/utils/filter/data-filter.pipe";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgScrollbarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataFilterPipe,
    SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgScrollbarModule,
  ],
  declarations: [DataFilterPipe, SpinnerComponent],
})
export class SharedModule {}
