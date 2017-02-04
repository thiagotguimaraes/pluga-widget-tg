/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { AppState } from './app.service'
import { AppConstantService } from './service/app-constant-service';
import { AutomationGroup } from './model/entities/automation-group';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';



/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: Array<Object>;
  public currentObject: AutomationGroup;
  public dataLoaded: Boolean = false;
  public targetObject: AutomationGroup;
  public source: string;
  public pageNotFound: Boolean;
  public url: string = AppConstantService.API().MOCK.API_MOCK;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public appService: AppState
  ) { }

  public ngOnInit() {
    this.router.events.map((event) => {
      if (event instanceof NavigationEnd) {
        this.source = event.urlAfterRedirects.slice(1);
        return this.source;
      }
      return null;
    }).subscribe((res) => {
      if (res != null) {
        if (this._dataDidLoaded()) {
          this._getTargetAutomationGroup(this.data);
        } else {
          this.appService.getMockData(this.url).subscribe(data => {
            this.data = data;
            this.dataLoaded = true;
            this._getTargetAutomationGroup(data);
          }, error => {
            console.log("Erro: " + error);
            this.dataLoaded = false;
            this.pageNotFound = true;
          })
        }

      }
    });
  }


  private _getTargetAutomationGroup(data) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['app_id'] === this.source) {
          this.targetObject = data[i];
          this.pageNotFound = false;
          break;
        }
        this.pageNotFound = true;
      }
      this.currentObject = this.targetObject;
    }
  }


  private _dataDidLoaded(): Boolean {
    if (this.dataLoaded) {
      return true;
    } else {
      return false
    }
  }
}



/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
