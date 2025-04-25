import { Routes } from '@angular/router';
import {SurveyComponent} from './components/survey.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {path: '', component: SurveyComponent},

    ]
  }
];
