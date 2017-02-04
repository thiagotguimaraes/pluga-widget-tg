import { Injectable } from '@angular/core';
import { AppConstantService } from './app-constant-service';

@Injectable()
export class AutomationGroupService {

    private genderObjetc: Object = AppConstantService.GENDER();


    public computeGenderLetter(name) {
        let gender = this.genderObjetc[name];
        if (gender === "male") return "o";
        return "a";
    }

    public computeApiId(api_id) {
        if (api_id != "popular") {
            return api_id;
        }
        return null;
    }
}