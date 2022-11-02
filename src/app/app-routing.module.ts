import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageHomeComponent} from "./pages/page-home/page-home.component";
import {PageConteneurComponent} from "./pages/page-conteneur/page-conteneur.component"
import {PageUtlilisateurComponent} from "./pages/page-utlilisateur/page-utlilisateur.component"
import {PageParametreComponent} from "./pages/page-parametre/page-parametre.component";
import {PageAideComponent} from "./pages/page-aide/page-aide.component";
import {PageModalFsComponent} from "./pages/page-modal-fs/page-modal-fs.component";
import {PageModalWebComponent} from "./pages/page-modal-web/page-modal-web.component";
import {PageModalDbComponent} from "./pages/page-modal-db/page-modal-db.component";
import {PageModalSettingComponent} from "./pages/page-modal-setting/page-modal-setting.component";
import {SettingsComponent} from "./pages/page-modal-setting/settings/settings.component";
import {SchedulingComponent} from "./pages/page-modal-setting/scheduling/scheduling.component";
import {CommentsComponent} from "./pages/page-modal-setting/comments/comments.component";
import {PropertiesComponent} from "./pages/page-modal-setting/properties/properties.component";
import {AuthGuard} from "./helpers/auth.guard";
import {LoginComponent} from "./composants/login/login.component";
import {RegisterComponent} from "./composants/register/register.component";
import {ERole} from "./services/model/ERole";
import {PageProfilComponent} from "./pages/page-profil/page-profil.component";
import {PageLogOutComponent} from "./pages/page-log-out/page-log-out.component";
import {PageCollectionComponent} from "./pages/page-collection/page-collection.component";
import {NotFoundComponent} from "./composants/error/not-found/not-found.component"

const routes: Routes = [


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
        path: 'home',
        component: PageHomeComponent,

        children: [
          {
            path: "dialog",
            component: PageModalSettingComponent,
            children: [
              {
                path: 'setting',
                component: SettingsComponent
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

              {
                path: '**',
                redirectTo: 'setting'
              }
            ]
          }
        ]

      },
      {
        path: 'home',
        component: PageHomeComponent
       
      },

      {path:'r',component:RegisterComponent},

      {
        path: 'connectors',
        component: PageConteneurComponent,
       
      },
      {
        path: 'logout',
        component: PageLogOutComponent,

      },
      {
        path: 'users',
        component: PageUtlilisateurComponent,
      
      },

      {
        path: 'profile',
        component: PageProfilComponent,
      
      },
      {
        path: 'collection',
        component: PageCollectionComponent,
       
      },
      {
        path: 'setting',
        component: PageParametreComponent,
        canActivate: [AuthGuard]

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
