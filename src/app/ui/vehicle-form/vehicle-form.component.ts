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
  public message = '';

  constructor(private _vehiclesService: VehiclesService) { }

  onSubmit(model: NgForm) {
    this.message = '';
    if (!model.invalid) {
      this._vehiclesService.processVehicle(this.vehicle)
      .subscribe( (data: ProcessVehicleResponse) => {

        let result = '';
        switch (data.resultCode) {
          case VehicleValidationResultCode.Valid:
            result = 'Valid';
          break;
          case VehicleValidationResultCode.Invalid:
            result = 'Invalid';
          break;
          case VehicleValidationResultCode.NotSpecified :
          default :
            result = 'Validation Error';
          break;
        }
        this.message =  result + ' form for vehicle id: ' + data.vehicleId;
      },
      error => {
        console.log(error);
      });
    }
  }
}
