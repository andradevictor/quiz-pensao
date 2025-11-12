import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';
import { SurveyModule } from 'survey-angular-ui';

import quizJson from '../../../assets/questions.json';
import "survey-core/survey-core.min.css";


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [SurveyModule],
  template: `
    <div class="quiz-container">
      <survey [model]="surveyModel"></survey>
    </div>
  `,
  styles: [`
    .quiz-container {
      max-width: 700px;
      margin: 2rem auto;
      background: #fff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class QuestionsComponent implements OnInit {
  surveyModel!: Model;

  ngOnInit() {
    this.surveyModel = new Model(quizJson as any);

    this.surveyModel['nextText'] = 'Continuar';
    this.surveyModel['completeText'] = 'Finalizar';
    this.surveyModel['showProgressBar'] = 'top';
    this.surveyModel['progressBarType'] = 'questions';

    this.surveyModel.onValueChanged.add((sender, options) => {
      if (options.name === 'q1') {
        const v = options.value;
      }
    });

    this.surveyModel.onComplete.add((sender) => {
      console.log('Resultado do quiz:', sender.data);
    });
  }
}
