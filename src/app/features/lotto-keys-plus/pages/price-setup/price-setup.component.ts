import { Component, OnInit } from "@angular/core";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { BasePrizeComponent } from "src/app/shared/components/base-prize/base-prize.component";
import { LottoKeysService } from "../../services/lotto-keys.service";

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
      this.loadPriceSetup();
    }
  
    constructor( private lottoKeySvc: LottoKeysService) {
      super();
    }
  
    updatePrizes(price: any): void {
      this.lottoKeySvc.createPrice(price[0]).subscribe({
        next: (result) => {
          console.log("Price created:", result);
        },
        error: (err) => {
          console.error("Error creating price:", err);
        },
      })
    }
  
    loadPriceSetup() {
      this.lottoKeySvc.getPriceInfo(SERVICE_TYPES.LottoKeys).subscribe({
        next: ({ result }) => {
          this.prizes = [
            {
              ...result,
              serviceType: SERVICE_TYPES.LottoKeys,
              previousPrice: +result.previousPrice,
              currentPrice: +result.currentPrice,
              newPrice: +result.currentPrice,
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
