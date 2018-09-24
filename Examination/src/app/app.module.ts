import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExamComponent } from './exam/exam.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component'


const routes = [{
  path: '',
  component: HomeComponent
  },
  {
    path: 'exam',
    component: ExamComponent
  },
  
{
  path: 'quiz',
  component: QuizComponent
},

 { path: 'result',
  component:  ResultComponent},

  { path: 'home',
  component:  HomeComponent},
  {
    path:'view',
    component:ViewComponent
  },
 {path:'Update',
    component:UpdateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuizComponent,
    ResultComponent,
    ExamComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
