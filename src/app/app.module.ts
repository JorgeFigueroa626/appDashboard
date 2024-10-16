import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
//
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/static/welcome/welcome.component';
import { NotFoundComponent } from './pages/static/not-found/not-found.component';
import { ViewComponent } from './pages/admin/categoria/view/view.component';
import { AddComponent } from './pages/admin/categoria/add/add.component';
import { ViewExamenComponent } from './pages/admin/examen/view-examen/view-examen.component';
import { AddExamenComponent } from './pages/admin/examen/add-examen/add-examen.component';
import { UpdateExamenComponent } from './pages/admin/examen/update-examen/update-examen.component';
import { ExamenManageComponent } from './pages/admin/examen/examen-manage/examen-manage.component';
import { QuestionsExamenComponent } from './pages/admin/examen/questions-examen/questions-examen.component';
import { AddQuestionsComponent } from './pages/admin/examen/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/admin/examen/update-question/update-question.component';
import { SidebarComponent as UserSidebarComponent } from './pages/user/sidebar/sidebar.component';
import { ViewExamensComponent } from './pages/user/examens/view-examens/view-examens.component';
import { InstructionExamComponent } from './pages/user/examens/instruction-exam/instruction-exam.component';
import { StartExamComponent } from './pages/user/examens/start-exam/start-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    NotFoundComponent,
    ViewComponent,
    AddComponent,
    ViewExamenComponent,
    AddExamenComponent,
    UpdateExamenComponent,
    ExamenManageComponent,
    QuestionsExamenComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,

    //
    UserSidebarComponent,
    ViewExamensComponent,
    InstructionExamComponent,
    StartExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    //
    HttpClientModule,
    //
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
