import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './globalComponents/page-not-found/page-not-found.component';
import { CustomPreloadingService } from './globalServices/custom-module-preloading/custom-preloading.service';
import { AuthGaurdService } from './globalServices/auth-gaurd/auth-gaurd.service';
import { DashboardResolverService } from './modules/dashboard/services/dashboard-resolver/dashboard-resolver.service';
import { OuterGuardService } from './globalServices/outer-guard/outer-guard.service';


const routes: Routes = [
  { path: '', loadChildren: '../app/modules/signin-signup/signin-signup.module#SigninSignupModule', canActivate: [OuterGuardService]},
  { path: 'dashboard', 
    loadChildren: '../app/modules/dashboard/dashboard.module#DashboardModule',
    data: { customPreload : false }, // customPreload : true = Enabled Preloading strategy & customPreload : false = Disable Preloading strategy 
    canActivate: [AuthGaurdService],
    resolve: { ResolveDashboardDataService: DashboardResolverService } 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule],
  providers: [AuthGaurdService]
})
export class AppRoutingModule { }

export const globalPages = [
  PageNotFoundComponent
]
