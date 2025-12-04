import { Component, OnInit } from "@angular/core";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { BasePrizeComponent } from "src/app/shared/components/base-prize/base-prize.component";
import { JobsLordService } from "../../services/jobs-lord.service";
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
    private jobsLordSvc: JobsLordService,
    private toastrSvc : ToastrService
  ) {
    super();
  }

  updatePrizes(price: any): void {
    this.jobsLordSvc.createPrice(price[0]).subscribe({
      next: (result) => {
        console.log("Price created:", result);
        this.toastrSvc.success("Price updated successfully!");
        this.loadPriceSetup();
      },
      error: (err) => {
        console.error("Error creating price:", err);
        this.toastrSvc.error("Failed to update price. Please try again.");
        this.prizes = [];
      },
    })
  }

  loadPriceSetup() {
    this.jobsLordSvc.getPriceInfo(SERVICE_TYPES.Jobs).subscribe({
      next: ({ result }) => {
        this.prizes = [
          {
            ...result,
            serviceType: SERVICE_TYPES?.Jobs,
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

