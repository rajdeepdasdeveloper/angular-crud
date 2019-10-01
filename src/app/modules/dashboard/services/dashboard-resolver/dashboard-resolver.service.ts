import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ResolveDashboardDataService } from '../resolve-dashboard-data/resolve-dashboard-data.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolverService implements Resolve<any> {
  constructor(private _resolveDashboardData : ResolveDashboardDataService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._resolveDashboardData.resolveDasboardUsersListing();
  }
}