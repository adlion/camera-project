import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from './services/toastr.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private toastrService: ToastrService) {}

  title = 'Camera Inventroy';
  toastrData:any={}
  toastrSubscription: Subscription;
  ngOnInit() {
    this.toastrService.toastr$.subscribe((t) => {
      t ? (this.toastrData = t) : null;
    });
  }

  ngOnDestroy() {
    this.toastrSubscription ? this.toastrSubscription.unsubscribe : null;
  }
}
