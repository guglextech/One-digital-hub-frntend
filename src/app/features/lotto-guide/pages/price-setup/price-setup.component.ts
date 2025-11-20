import { Component, OnInit } from "@angular/core";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { BasePrizeComponent } from "src/app/shared/components/base-prize/base-prize.component";
import { LottoGuideService } from "../../services/lotto-guide.service";
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
    this.loadPriceSetup();
  }

  constructor(
    private lottoGuideSvc: LottoGuideService,
    private toastSvc : ToastrService
  ) {
    super();
  }

  updatePrizes(price: any): void {
    this.lottoGuideSvc.createPrice(price[0]).subscribe({
      next: (result) => {
       this.toastSvc.success("Price updated successfully!");
       this.loadPriceSetup();
      },
      error: (err) => {
        console.error("Error creating price:", err);
      },
    })
  }

  loadPriceSetup() {
    this.lottoGuideSvc.getPriceInfo(SERVICE_TYPES.LottoGuide).subscribe({
      next: ({ result }) => {
        this.prizes = [
          {
            ...result,
            serviceType: SERVICE_TYPES.LottoGuide,
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
