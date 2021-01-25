import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {OwnerComponent} from './components/owner/owner.component';
import {CarComponent} from './components/car/car.component';
import {CarsComponent} from './components/cars/cars.component';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    OwnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/cars', component: CarsComponent, children: [
        {
          path: ':id/owner', component: OwnerComponent
        }
      ]
    },
      {
        path: 'link/home', component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
