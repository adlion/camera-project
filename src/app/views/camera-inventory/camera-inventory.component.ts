import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { HttpsRequestService } from 'src/app/services/https-requests.service';
import { ToastrService } from 'src/app/services/toastr.service.ts';

@Component({
  selector: 'app-camera-inventory',
  templateUrl: './camera-inventory.component.html',
  styleUrls: ['./camera-inventory.component.scss'],
})
export class CameraInventoryComponent implements OnInit, OnDestroy {
  constructor(private httpRequestService: HttpsRequestService,private toastrService:ToastrService) {}

  httpGetSubscription: Subscription;
  httpDeleteSubscription: Subscription;

  respData: any = [];
  ngOnInit() {
    this.httpGetSubscription = this.httpRequestService
      .getAllCameras()
      .subscribe((res) => {
        console.log(res);
        this.respData = res;
      });
  }

  onClickDelete(id: string, index: number) {
    this.httpDeleteSubscription = this.httpRequestService
      .deleteCamera(id)
      .subscribe((res) => {
        if(res.status==='S1000'){
          this.toastrService.showToastr(res.message,"green",true)
          this.respData.splice(index, 1);
        }else{
          console.log(res)
          this.toastrService.showToastr("An error Ocurred!","red",true)
        }
      });
  }

  ngOnDestroy() {
    this.httpGetSubscription ? this.httpGetSubscription.unsubscribe() : null;
    this.httpDeleteSubscription
      ? this.httpDeleteSubscription.unsubscribe()
      : null;
  }
}
