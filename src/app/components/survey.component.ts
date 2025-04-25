import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Model} from "survey-core";
import {SurveyModule} from 'survey-angular-ui';
import {SurveyService} from '../service/survey.service';

@Component({
  selector: 'app-survey',
  imports: [
    SurveyModule
  ],
  template: `
    <h1 style="text-align: center">My Test Survey</h1>
    <survey [model]="surveyModel"></survey>
    @if (isSurveyCompleted) {
      <div style="padding-top: 2rem; display: flex; justify-content: center; align-items: center;">
        <div #paymentRef></div>
      </div>

    }
  `
})
export class SurveyComponent implements OnInit {

  @ViewChild('paymentRef') paymentRef!: ElementRef;

  surveyModel!: Model;
  surveyData: any;

  isSurveyCompleted: boolean = false;

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit(): void {
    this.initSurveyModel();
  }

  initSurveyModel() {
    this.surveyService.getSurveyJson().subscribe(surveyJson => {
      const survey = new Model(surveyJson);
      this.surveyModel = survey;
      survey.onComplete.add(this.surveyComplete);
      console.log(this.surveyModel);
    });
  }

  private surveyComplete = (surveyData: any) => {
    console.log(surveyData.data);
    this.surveyData = surveyData;
    this.isSurveyCompleted = true;
    this.initPayPalButton();
  }

  private initPayPalButton() {
    setTimeout(() => {
      window.paypal.Buttons(
        {
          style: {
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create(
              {
                purchase_units: [
                  {
                    amount: {
                      value: '10.00',
                      currency_code: 'EUR'
                    }
                  }
                ]
              }
            )
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              console.log(details);
              if (details.status === 'COMPLETED') {
                console.log('Save to DB');
                console.log(this.surveyData);
                this.isSurveyCompleted = false;
                this.initSurveyModel();
              }
            });
          },
          onError: (err: any) => {
            console.log(err);
            this.isSurveyCompleted = false;
            this.initSurveyModel();
          },
          onCancel: (data: any) => {
            this.isSurveyCompleted = false;
            this.initSurveyModel();
            console.log(data);
          }
        }
      ).render(this.paymentRef.nativeElement);
    });
  }


}
