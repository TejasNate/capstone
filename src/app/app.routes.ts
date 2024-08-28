import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './User/Auth/login/login.component';
import { NavbarComponent } from './User/Auth/navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // other routes
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [NavbarComponent, LoginComponent],
  exports: [RouterModule],
})
export class AppConfigModule {}
