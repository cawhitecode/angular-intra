import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectoryService } from './services/directory.service';
import { TrainingComponent } from './components/training/training.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';



const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DirectoryComponent },
        { path: 'training', component: TrainingComponent },
        { path: 'directory', component: DirectoryComponent },
        { path: 'dispatch', component: DispatchComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), NgMultiSelectDropDownModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, DirectoryComponent, NavbarComponent, TrainingComponent, DispatchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DirectoryService], 
  exports: [RouterModule]
})
export class AppModule { }
