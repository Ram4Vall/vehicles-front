import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { VehicleRequest } from '../../classes/vehicle-request';
import { VehiclesService } from '../../services/vehicles.service';
import { ProcessVehicleResponse } from '../../classes/process-vehicle-response';
import { VehicleValidationResultCode } from '../../classes/vehicle-validation-result-code';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.sass'],
  providers: [VehiclesService]
})
export class VehicleFormComponent {

  public vehicle = new VehicleRequest();

  constructor(private _vehiclesService: VehiclesService) { }

  onSubmit(model: NgForm) {
    console.log(this.vehicle);

    this._vehiclesService.processVehicle(this.vehicle)
      .subscribe( (data: ProcessVehicleResponse) => {

        // const pru: VehicleValidationResultCode = data.resultCode;

        if (data.resultCode === VehicleValidationResultCode.Valid ) {
          console.log('Valid');
        } else {
          console.log('Invalid');
        }
      },
      error => {
        console.log(error);
      });
  }
}
