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
    console.log(this.vehicle);

    this._vehiclesService.processVehicle(this.vehicle)
      .subscribe( (data: ProcessVehicleResponse) => {

        let result = '';
        /*if (data.resultCode === VehicleValidationResultCode.Valid ) {
          console.log('Valid');
          this.message = 'Valid';
        } else {
          console.log('Invalid');
          this.message = 'Invalid';
        }*/
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
