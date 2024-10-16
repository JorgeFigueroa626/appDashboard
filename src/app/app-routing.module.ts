import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { userGuard } from './guard/user.guard';
import { adminGuard } from './guard/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/static/welcome/welcome.component';
import { ViewComponent } from './pages/admin/categoria/view/view.component';
import { AddComponent } from './pages/admin/categoria/add/add.component';
import { ViewExamenComponent } from './pages/admin/examen/view-examen/view-examen.component';
import { AddExamenComponent } from './pages/admin/examen/add-examen/add-examen.component';
import { UpdateExamenComponent } from './pages/admin/examen/update-examen/update-examen.component';
import { ExamenManageComponent } from './pages/admin/examen/examen-manage/examen-manage.component';
import { QuestionsExamenComponent } from './pages/admin/examen/questions-examen/questions-examen.component';
import { AddQuestionsComponent } from './pages/admin/examen/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/admin/examen/update-question/update-question.component';
import { ViewExamensComponent } from './pages/user/examens/view-examens/view-examens.component';
import { InstructionExamComponent } from './pages/user/examens/instruction-exam/instruction-exam.component';
import { StartExamComponent } from './pages/user/examens/start-exam/start-exam.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    // pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    // pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch: 'full',
    canActivate: [adminGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'categorias',
        component: ViewComponent
      },
      {
        path: 'add-categoria',
        component: AddComponent
      },
      {
        path: 'examenes',
        component: ViewExamenComponent
      },
      {
        path: 'add-examen',
        component: AddExamenComponent
      },
      {
        path: 'examen/:examenId',
        component: UpdateExamenComponent
      },
      {
        path: 'questions-examen/:examenId/:titulo',
        component: QuestionsExamenComponent
      },
      {
        path: 'add-questions/:examenId/:titulo',
        component: AddQuestionsComponent
      },
      {
        path: 'update-question/:preguntaId',
        component: UpdateQuestionComponent
      },
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    // pathMatch: 'full',
    canActivate: [userGuard],
    children: [
      {
        path: ':categoryId',
        component:ViewExamensComponent
      },
      {
        path: 'instruction/:examId',
        component: InstructionExamComponent
      }
    ]
  },
  {
    path:'start/:examId',
    component:StartExamComponent,
    canActivate: [userGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
