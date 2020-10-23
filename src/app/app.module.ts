import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraInventoryComponent } from './views/camera-inventory/camera-inventory.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddCameraComponent } from './views/add-camera/add-camera.component';
import { SearchComponent } from './views/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CameraInventoryComponent,
    NavigationComponent,
    AddCameraComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
