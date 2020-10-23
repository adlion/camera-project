import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCameraComponent } from './views/add-camera/add-camera.component';
import { CameraInventoryComponent } from './views/camera-inventory/camera-inventory.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: CameraInventoryComponent,
  },
  {
    path: 'add-camera',
    component: AddCameraComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
