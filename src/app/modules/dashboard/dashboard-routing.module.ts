import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

    { path: '',  component: DashboardComponent},
    { path: 'edit/:id', component: EditUsersComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'create-users', component: CreateUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

// Pages
export const dashboardComponents = [
    DashboardComponent,
    EditUsersComponent,
    CreateUsersComponent,
    DetailsComponent
];