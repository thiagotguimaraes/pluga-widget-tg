import { AutomationGroup } from './../model/entities/automation-group';
import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { AppConstantService } from '../service/app-constant-service';
import { AutomationGroupService } from '../service/automation-group-service';

console.log('`Widget` component loaded asynchronously');

@Component({
  selector: 'widget',
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./widget.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnChanges {
  @Input() currentObject: AutomationGroup;
  private _currentObject: AutomationGroup;
  public currentList: Array<Object>;
  public appConstantService: AppConstantService;


  // TypeScript public modifiers
  constructor(public automationGroupService: AutomationGroupService) { }

  public ngOnChanges(changes: SimpleChanges) {
    const currentObject: SimpleChange = changes['currentObject'];
    if (currentObject.currentValue != undefined) {
      this.currentList = currentObject.currentValue.automationList;
      this._currentObject = currentObject.currentValue;
    }
  }

  // Function used to compute url parameter in button "Ver todas as automatizações do....."
  private _computeApiId(api_id) {
    this.automationGroupService.computeApiId(api_id);
  }

  private _computeGenderLetter(name) {
    return this.automationGroupService.computeGenderLetter(name);
  }
}
