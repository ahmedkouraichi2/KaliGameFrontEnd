import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import {MatButtonModule} from '@angular/material/button';
import { PageConteneurComponent } from './pages/page-conteneur/page-conteneur.component';
import { PageUtlilisateurComponent } from './pages/page-utlilisateur/page-utlilisateur.component';
import { PageAideComponent } from './pages/page-aide/page-aide.component';
import {DetailConteneurComponent} from "./composants/detail-conteneur/detail-conteneur.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {ButtonActionComponent} from "./composants/button-action/button-action.component";
import { PageHomeComponent } from './pages/page-home/page-home.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TableConnecorComponent} from"./composants/table-connecor/table-connecor.component";
import {TableSettingComponent} from "./composants/table-setting/table-setting.component";
import {SettingsComponent} from "./pages/page-modal-setting/settings/settings.component";
import {SchedulingComponent} from "./pages/page-modal-setting/scheduling/scheduling.component";
import {CommentsComponent} from "./pages/page-modal-setting/comments/comments.component";
import {PropertiesComponent} from "./pages/page-modal-setting/properties/properties.component";
import {MatTabsModule} from "@angular/material/tabs";
import {PageModalSettingComponent}from"./pages/page-modal-setting/page-modal-setting.component"
import {DialogWrapperComponent}from "./pages/page-modal-setting/page-modal-setting-wapper.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import{AddPropertyComponent} from "./pages/page-modal-setting/add-property/add-property.component";
import {PageProfilComponent} from "./pages/page-profil/page-profil.component";
import {SidebarModule } from 'ng-cdbangular';
import {SidenavCollapceComponent} from './composants/sidenav-collapce/sidenav-collapce.component';
import {BodyComponent} from './composants/body/body.component';
import {HeaderBodyComponent} from './composants/header-body/header-body.component';
import {TableTestComponent} from './composants/table-test/table-test.component';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {PageModalSettingUpdateComponent} from "./pages/page-modal-setting-update/page-modal-setting-update.component";
import {PageModalSettingUpdateWapperComponent} from "./pages/page-modal-setting-update/page-modal-setting-update-wapper.component";
import {SettingsUpdateComponent} from "./pages/page-modal-setting-update/settings-update/settings-update.component"
import {
  SchedulingUpdateComponent
} from "./pages/page-modal-setting-update/scheduling-update/scheduling-update.component";
import {
  PropertiesUpdateComponent
} from "./pages/page-modal-setting-update/properties-update/properties-update.component";
import {CommentsUpdateComponent} from "./pages/page-modal-setting-update/comments-update/comments-update.component";
import {
  AddPropertyUpdateComponent
} from "./pages/page-modal-setting-update/add-property-update/add-property-update.component";
import {RegisterComponent} from "./composants/register/register.component";

import {AuthGuard} from "./helpers/auth.guard";
import {TableUserComponent} from "./composants/table-user/table-user.component";
import {AuthInterceptor} from "./helpers/auth.interceptor";
import {ErrorInterceptorService} from "./helpers/error-interceptor.service";
import {PageModalDeleteComponent} from "./pages/page-modal-delete/page-modal-delete.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {PageModalUserComponent} from "./pages/page-modal-user/page-modal-user.component";
import {PageModalDeleteUserComponent} from "./pages/page-modal-delete-user/page-modal-delete-user.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ChartsModule } from 'ng2-charts';
import {PageModalUserUpdateComponent} from "./pages/page-modal-user-update/page-modal-user-update.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {FileUploadComponent} from "./composants/file-upload/file-upload.component";
import {PageCollectionComponent} from "./pages/page-collection/page-collection.component";
import { NotFoundComponent } from './composants/error/not-found/not-found.component';
import { EmailComponent } from './composants/Email/email/email.component';



import {MatRadioModule} from '@angular/material/radio';
import { EmailEnvoyerComponent } from './composants/Email/email-envoyer/email-envoyer.component';
import { ExamComponent } from './composants/Exam/exam/exam.component';
import { DashbordExamComponent } from './composants/Exam/dashbord-exam/dashbord-exam.component';
import { TutoInfoExamComponent } from './composants/Exam/tuto-info-exam/tuto-info-exam.component';
import { OpenDialogComponent } from './composants/Exam/open-dialog/open-dialog.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { QuestionExamComponent } from './composants/Exam/question-exam/question-exam.component';
import { MerciComponent } from './composants/Exam/merci/merci.component';
import { TempsComponent } from './composants/Exam/temps/temps.component';
import { PageAddDomaineComponent } from './pages/page-add-domaine/page-add-domaine.component';
import { PageDeleteDomaineComponent } from './pages/page-delete-domaine/page-delete-domaine.component';
import { PageUpdateDomaineComponent } from './pages/page-update-domaine/page-update-domaine.component';
import { PageQuestionQuizComponent } from './pages/page-question-quiz/page-question-quiz.component';
import { PageAddQuestionComponent } from './pages/page-add-question/page-add-question.component';
import { ButtonActionQuestionComponent } from './composants/button-action-question/button-action-question.component';
import { TutoComponent } from './composants/regles/tuto/tuto.component';
import { TutoDeatilsComponent } from './composants/regles/tuto/tuto-deatils/tuto-deatils.component';
import { TutoListComponent } from './composants/regles/tuto/tuto-list/tuto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageHomeComponent,
    TutoDeatilsComponent,


    PageConteneurComponent,
    PageUtlilisateurComponent,
    DialogWrapperComponent,
    PageAideComponent,
    DetailConteneurComponent,
    ButtonActionComponent,



    TableConnecorComponent,
    TableSettingComponent,
    SettingsComponent,
    SchedulingComponent,
    CommentsComponent,
    PropertiesComponent,
    PageModalSettingComponent,
    AddPropertyComponent,
    PageProfilComponent,
    SidenavCollapceComponent,
    BodyComponent,
    HeaderBodyComponent,
    TableTestComponent,
    DialogWrapperComponent,
    PageModalSettingUpdateComponent,
    PageModalSettingUpdateWapperComponent,
    SettingsUpdateComponent,
    SchedulingUpdateComponent,
    PropertiesUpdateComponent,
    CommentsUpdateComponent,
    AddPropertyUpdateComponent,
    RegisterComponent,
    TableUserComponent,
    PageModalDeleteComponent,
    PageModalUserComponent,
    PageModalDeleteUserComponent,
    PageProfilComponent,
    PageModalUserUpdateComponent,
    FileUploadComponent,

    PageCollectionComponent,
    NotFoundComponent,
    EmailComponent,
    EmailEnvoyerComponent,
    ExamComponent,
    DashbordExamComponent,
    TutoInfoExamComponent,
    OpenDialogComponent,
    QuestionExamComponent,
    MerciComponent,
    TempsComponent,
    PageAddDomaineComponent,
    PageDeleteDomaineComponent,
    PageUpdateDomaineComponent,
    PageQuestionQuizComponent,
    PageAddQuestionComponent,
    ButtonActionQuestionComponent,
    TutoComponent,
    TutoListComponent,
    





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule,
    MatTableModule,


    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgbModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    SidebarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ChartsModule,
    NgApexchartsModule,

    MatRadioModule,
    MatGridListModule


  ],
  providers: [AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
