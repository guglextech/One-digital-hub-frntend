import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, NavigationEnd } from "@angular/router";
import { BehaviorSubject, filter } from "rxjs";

interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: "root" })
export class BreadcrumbService {
  private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  currentBreadcrumbs$ = this.breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.updateBreadcrumbs());
  }

  private updateBreadcrumbs() {
    const rootRoute = this.router.routerState.snapshot.root;
    const pathFromRoot = rootRoute.pathFromRoot;
    const breadcrumbs: Breadcrumb[] = [];
    let currentPathSegments: any[] = [];

    pathFromRoot.forEach((route: ActivatedRouteSnapshot) => {
      // Use resolveData to get the resolved data object
      const data = route.routeConfig?.data; // Get the static data object
      if (data && data['breadcrumb']) {
        currentPathSegments = currentPathSegments.concat(route.url);
        const fullPath = currentPathSegments
          .map(segment => segment.toString())
          .join("/");
        breadcrumbs.push({
          label: data['breadcrumb'],
          url: fullPath
        });
      } else {
        currentPathSegments = currentPathSegments.concat(route.url);
      }
    });

    this.breadcrumbs$.next(breadcrumbs);
  }
}