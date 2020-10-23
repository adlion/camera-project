import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpsRequestService } from 'src/app/services/https-requests.service';
import { ToastrService } from 'src/app/services/toastr.service.ts';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.scss'],
})
export class AddCameraComponent implements OnInit {
  cameraFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpRequestService: HttpsRequestService,
    private toastrService:ToastrService
  ) {}
  ngOnInit() {
    this.cameraFG = this.fb.group({
      nameFC: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      modelFC: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      resolutionFC: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      ipFC: this.fb.control(null, [
        Validators.required,
        Validators.pattern(
          /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm
        ),
      ]),
    });
  }

  onSubmitAddCamera() {
    if (this.cameraFG.valid) {
      const jsonObj = {
        name: this.cameraFG.value.nameFC,
        model: this.cameraFG.value.modelFC,
        resolution: this.cameraFG.value.resolutionFC,
        ipAddress: this.cameraFG.value.ipFC,
      };
      this.httpRequestService.addCamera(JSON.stringify(jsonObj)).subscribe(res=>{
        if(res.status==='S1000'){
          this.toastrService.showToastr(res.message,"green",true)
          this.cameraFG.reset()
        }else{
          this.toastrService.showToastr("An error Ocurred!","red",true)
        }
      });
    }
  }
}
