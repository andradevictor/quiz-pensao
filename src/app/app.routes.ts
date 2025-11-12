import { Routes } from '@angular/router';

import { QuestionsComponent } from './pages/questions/questions.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calculo', component: QuestionsComponent }
];
