import { Component, OnInit } from '@angular/core';
import { ListdataService } from '../listdata.service';

@Component({
  selector: 'app-unfinish',
  templateUrl: './unfinish.component.html',
  styleUrls: ['./unfinish.component.css']
})
export class UnfinishComponent implements OnInit {
  divdom = document.getElementsByClassName('view');
  inpdom = document.getElementsByClassName('edit');
  data = [];
  constructor(
    private service: ListdataService
  ) {}
  ngOnInit() {
    this.data = this.service.unfinishFilter();
    this.service.subject.subscribe((data: any) => {
      this.data = data.filter(listData => listData.checked === false);
    })
  }
  ngDoCheck(){
    // this.data = this.service.unfinishFilter();
  }
  dbclick(text: string) {
    Array.from(this.inpdom).map((dom: HTMLInputElement) => {
      if ( dom.value === text) {
        dom.setAttribute('class', 'edit block');
        dom.nextElementSibling.setAttribute('class', 'view none');
      }
    });
  }
  changeKeyup(event: any, text: string) {
    if ( event.which === 13 && event.path[0].value.trim() !== '') {
      this.service.data.map((data) => {
        if (data.text === text) {
          data.text = event.path[0].value;
          data.checked = false;
        }
      });
      event.path[0].setAttribute('class', 'edit none');
      event.path[0].nextElementSibling.setAttribute('class', 'view block');
    }
  }
  del(text: string) {
    let num = 0;
    Array.from(this.inpdom).map((dom: HTMLInputElement) => {
      if ( dom.value === text) {
        this.service.removeData(num);
      }
      num ++;
    });
  }
}
