import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppConstantService {

  constructor() {
  }

  public static API() {
    return {
      MOCK: {
        API_MOCK: 'https://demo4475807.mockable.io/templates_by_apps',
      },
    }
  }

  public static GENDER() {
    return {
      "Pluga": "female",
      "iugu": "female",
      "Pagar.me": "male",
      "PagSeguro": "male",
      "Moip": "male",
      "Stripe": "male",
      "PayPal": "male",
      "MercadoPago": "male",
      "GoogleSheets": "male",
      "Nibo": "male",
      "Slack": "male",
      "Mandrill": "male",
      "Mailchimp": "male",
      "RD Station": "male",
      "NFe.io": "male",
      "Typeform": "male",
      "Pipedrive": "male",
      "BoletoSimples": "male",
      "PlugCRM": "male",
      "LAHAR": "male",
      "TotalVoice": "male"
    }
  }
}
