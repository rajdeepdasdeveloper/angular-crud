import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardComponents, DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { CrudUsersService } from './services/crud-users/crud-users.service';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    dashboardComponents,
    EditUsersComponent,
    CreateUsersComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [CrudUsersService]
})
export class DashboardModule { }
