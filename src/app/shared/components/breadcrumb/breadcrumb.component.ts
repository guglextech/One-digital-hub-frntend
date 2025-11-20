import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from "@angular/router";
import { filter } from "rxjs/operators";

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  imports: [RouterModule, CommonModule],
  standalone: true,
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    if (route.children.length === 0) return breadcrumbs;
  
    for (const child of route.children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      if (routeURL !== "") {
        url += `/${routeURL}`;
      }
  
      if (child.snapshot.data["breadcrumb"]) {
        breadcrumbs.push({ label: child.snapshot.data["breadcrumb"], url });
        // console.log("Added breadcrumb:", { label: child.snapshot.data["breadcrumb"], url });
      }
  
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  
    return breadcrumbs;
  }
}
