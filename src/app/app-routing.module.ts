import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent,title:'Home'},
  
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portofolio', component: PortofolioComponent, title: 'portofolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  {path:'**',component:NotfoundComponent,title:'Not Found'},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
