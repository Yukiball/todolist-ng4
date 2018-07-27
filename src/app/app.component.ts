import { Component } from '@angular/core';
import { ListdataService } from './listdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '任务计划列表';
  constructor(
    private service: ListdataService
  ) {}
  onKey(event: any) {
    if ( event.which === 13 && event.path[0].value.trim() !== '') {
      const dom: any = document.getElementsByClassName('task-input')[0];
      const obj = {text: dom.value, checked: false};
      this.service.setData( obj );
      dom.value = '';
    }
  }
}
