import { Injectable } from '@angular/core';
import {AppModule} from './app.module';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
@Injectable ()
export class ListdataService {
  constructor() { }
  subject = new Subject();
  data: any = [
    {text: 'aaa', checked: true},
    {text: 'bbb', checked: false},
  ];
  setData(data) {
    this.data.push(data);
    this.subject.next(this.data);
  }
  getData() {
    return this.data;
  }
  removeData(num) {
    this.data.split(num, 1);
  }
  finishFilter() {
    return this.data.filter((listdata) => {
      return listdata.checked === true;
    });
  }
  unfinishFilter() {
    return this.data.filter((listdata) => {
      return listdata.checked === false;
    });
  }
}
