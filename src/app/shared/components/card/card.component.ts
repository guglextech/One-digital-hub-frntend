import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card-active",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() status: any;
  @Input() pageTitle : any;
  @Input() labels: { [key: string]: string } = {};
  @Output() detailsEvent = new EventEmitter<any>();

  ngOnInit(): void {}

  constructor() {}

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj).filter(key => this.labels[key]) : [];
  }
  

  formatValue(value: any): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'number') {
      return value.toString();
    } else if (typeof value === 'string') {
      return value;
    } else if (value instanceof Date) {
      return value.toLocaleString();
    }
    return JSON.stringify(value);
  }

  details() {
    this.detailsEvent.emit(this.data);
  }
}
