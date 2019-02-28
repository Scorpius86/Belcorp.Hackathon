import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSource = new Subject<boolean>();
  private isShowing: boolean;

  loading$ = this.loadingSource.asObservable();

  constructor() {
    this.isShowing = false;
  }

  show() {
    if (!this.isShowing) {
      this.isShowing = true;
      this.loadingSource.next(this.isShowing);
    }
  }

  hide() {
    if (this.isShowing) {
      this.isShowing = false;
      this.loadingSource.next(this.isShowing);
    }
  }
}
