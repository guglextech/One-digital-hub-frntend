import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-base-prize",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./base-prize.component.html",
  styleUrl: "./base-prize.component.scss",
})
export class BasePrizeComponent {
  @Input() prizes: any[] = [];
  @Input() title = "Prices Setup";
  @Output() updatedPrizes = new EventEmitter<any[]>();
  isEditing: boolean = false;
  date = new Date();


  toggleEdit() {
 
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.saveChanges();
    }
  }

  saveChanges() {
    const transformedPrizes = this.prizes.map((prize) => ({
      serviceType: prize.serviceType,
      currentPrice: parseFloat(prize.currentPrice),
      newPrice: parseFloat(prize.newPrice),
      description: prize.description,
    }));

    this.updatedPrizes.emit(transformedPrizes);
  }
}
