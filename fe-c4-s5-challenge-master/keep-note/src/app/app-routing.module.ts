import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CanactivateGuard } from './services/canactivate.guard';
import { CandeactivateGuard } from './services/candeactivate.guard';



const routes: Routes = [{
  path: "home",
  component: LoginComponent,
  canActivate:[CanactivateGuard]
},
{
  path: "edit-note/:id",
  component: EditNoteComponent,
  canDeactivate:[CandeactivateGuard]

},
{
  path: "dashBoard",
  component:DashboardComponent
},
{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "**",
  component: NotfoundComponent
}]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



