import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagePageComponent } from './image-page/image-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
    { path: '', component: HomeComponentComponent },
   { path: 'image-page', component: ImagePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
