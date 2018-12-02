import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule } from '@angular/forms';
import { VehiclesService } from '../services/vehicles.service';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, VehicleFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [VehiclesService],
  exports: [LayoutComponent, VehicleFormComponent]
})
export class UiModule { }
