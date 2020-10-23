import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpsRequestService } from 'src/app/services/https-requests.service';
import { ToastrService } from 'src/app/services/toastr.service.ts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(
    private httpRequestService: HttpsRequestService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {}

  searchFG: FormGroup;
  httpGetSubscription: Subscription;
  httpDeleteSubscription: Subscription;

  respData: any = [];

  ngOnInit() {
    this.searchFG = this.fb.group({
      radioFC: this.fb.control('name', [Validators.required]),
      searchFC: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
    });
  }

  onClickSearch() {
    console.log(this.searchFG.value);
    this.httpGetSubscription = this.httpRequestService
      .searchCamera(
        `${this.searchFG.value.radioFC}/${this.searchFG.value.searchFC}`
      )
      .subscribe((res) => {
        this.respData = res;
      });
  }

  onClickDelete(id: string, index: number) {
    this.httpDeleteSubscription = this.httpRequestService
      .deleteCamera(id)
      .subscribe((res) => {
        if (res.status === 'S1000') {
          this.toastrService.showToastr(res.message, 'green', true);
          this.respData.splice(index, 1);
        } else {
          console.log(res);
          this.toastrService.showToastr('An error Ocurred!', 'red', true);
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
