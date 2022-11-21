import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageHomeComponent} from "./pages/page-home/page-home.component";
import {PageConteneurComponent} from "./pages/page-conteneur/page-conteneur.component"
import {PageUtlilisateurComponent} from "./pages/page-utlilisateur/page-utlilisateur.component"
import {PageAideComponent} from "./pages/page-aide/page-aide.component";
import {PageModalSettingComponent} from "./pages/page-modal-setting/page-modal-setting.component";
import {SchedulingComponent} from "./pages/page-modal-setting/scheduling/scheduling.component";
import {CommentsComponent} from "./pages/page-modal-setting/comments/comments.component";
import {PropertiesComponent} from "./pages/page-modal-setting/properties/properties.component";
import {AuthGuard} from "./helpers/auth.guard";
import {RegisterComponent} from "./composants/register/register.component";
import {PageProfilComponent} from "./pages/page-profil/page-profil.component";
import {NotFoundComponent} from "./composants/error/not-found/not-found.component"
import { EmailComponent } from './composants/Email/email/email.component';
import { ExamComponent } from './composants/Exam/exam/exam.component';
import { DashbordExamComponent } from './composants/Exam/dashbord-exam/dashbord-exam.component';
import { QuestionExamComponent } from './composants/Exam/question-exam/question-exam.component';
import { MerciComponent } from './composants/Exam/merci/merci.component';
import { PageQuestionQuizComponent } from './pages/page-question-quiz/page-question-quiz.component';
import { TutoComponent } from './composants/regles/tuto/tuto.component';

const routes: Routes = [



  {
    path:'Exam',
    component:ExamComponent
  },

  {
    path :'regles',
    component:TutoComponent
  }
   ,
  {
    path:'dashbordxam/:id',
    component:DashbordExamComponent
  },

  {
    path:'examQuestion',
    component:QuestionExamComponent
  },

  {
    path:'MerciComponent',
    component:MerciComponent
  },


  {
    path:'la',
    component:NotFoundComponent
  },
  {
    path:'',
    component: PageLoginComponent
  },
  {
    path: 'accounts/emailsignup',
    component: PageInscriptionComponent
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent,

    children: [

      {
        path:"question/:id",
        component:PageQuestionQuizComponent
      },
      {
        path: 'home',
        component: PageHomeComponent,



        children: [
          {
            path: "dialog",
            component: PageModalSettingComponent,
            children: [
              {
                path: 'PageQuestionQuizComponent',
                component: PageQuestionQuizComponent
              },

              {

                path:'EmailComponent',
                component:EmailComponent


              },

              {
                path: 'scheduling',
                component: SchedulingComponent
              },
              {
                path: 'comments',
                component: CommentsComponent
              },
              {
                path: 'properties',
                component: PropertiesComponent
              },

            ]
          }
        ]

      },
      {
        path: '1',
        component: PageQuestionQuizComponent

      },

      {path:'r',component:RegisterComponent},

      {
        path: 'domaines',
        component: PageConteneurComponent,

      },

      {
        path: 'usersKaligame',
        component: PageUtlilisateurComponent,

      },

      {
        path: 'profile',
        component: PageProfilComponent,

      },
      {
        path: 'collection',
        component: EmailComponent,

      },

      {
        path: 'help',
        component: PageAideComponent,


      },
      {
        path: 'accounts/login',
        redirectTo: 'accounts/login',

      }
    ]
  },


  {
    path:'app-page-utlilisateur',
    component:PageUtlilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
