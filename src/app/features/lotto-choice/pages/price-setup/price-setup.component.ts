import { Component, OnInit } from "@angular/core";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { BasePrizeComponent } from "src/app/shared/components/base-prize/base-prize.component";
import { IPriceSetupPayload } from "src/app/core/models/types.services";
import { LottoChoiceService } from "../../services/lotto-choice.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-price-setup",
  standalone: true,
  imports: [BasePrizeComponent],
  templateUrl: "./price-setup.component.html",
  styleUrl: "./price-setup.component.scss",
})
export class PriceSetupComponent extends BasePrizeComponent implements OnInit {
  override title = "";

  ngOnInit(): void {
    //  this.fetchData();
    this.loadPriceSetup();
  }

  constructor(
        private lottoChoiceSvc: LottoChoiceService,
        private toastSvc : ToastrService

  ) {
    super();
  }

  updatePrizes(price: any): void {
    this.lottoChoiceSvc.createPrice(price[0]).subscribe({
      next: (result) => {
        console.log("Price created:", result);
        this.toastSvc.success("Price updated successfully!");
        this.loadPriceSetup();
      },
      error: (err) => {
        console.error("Error creating price:", err);
        this.toastSvc.error("Failed to update price. Please try again.");
      },
    })
  }

  loadPriceSetup() {
    this.lottoChoiceSvc.getPriceInfo(SERVICE_TYPES.LottoChoice).subscribe({
      next: ({ result }) => {
        this.prizes = [
          {
            ...result,
            serviceType: SERVICE_TYPES?.LottoChoice,
            previousPrice: +result?.previousPrice,
            currentPrice: +result?.currentPrice,
            newPrice: +result?.currentPrice,
          },
        ];
      },
      error: (err) => {
        console.error("Error loading price setup:", err);
        this.prizes = [];
      },
    });
  }
}
