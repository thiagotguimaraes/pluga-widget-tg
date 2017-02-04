import {
  async,
  inject,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';
import { LocalStorage, WEB_STORAGE_PROVIDERS } from 'h5webstorage';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { Observable } from 'rxjs/Observable';

class MockRouter {
  public ne = new NavigationEnd(0, 'http://localhost:3000/#/', 'http://localhost:3000/#/');
  public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  });
}
