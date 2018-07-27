import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FinishComponent } from './finish/finish.component';
import { UnfinishComponent } from './unfinish/unfinish.component';
import { ListdataService } from './listdata.service';


const appRouter: Routes = [
  {
    path: 'all',
    component: ListComponent,
  },
  {
    path: 'finish',
    component: FinishComponent,

  },
  {
    path: 'unfinish',
    component: UnfinishComponent,

  },
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FinishComponent,
    UnfinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRouter,
    )
  ],
  providers: [
    ListdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
