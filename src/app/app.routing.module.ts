import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SigninComponent } from './home/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashScreenComponent } from './home/splashScreen/splash-screen.component';
import { SignupComponent } from './home/signup/signup.component';
import { NovaPerguntaComponent } from './pergunta/nova-pergunta/nova-pergunta.component';
import { ListaPerguntasComponent } from './pergunta/lista-perguntas/lista-perguntas.component';
import { VerPerguntaComponent } from './pergunta/ver-pergunta/ver-pergunta.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'start',
    component: SplashScreenComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'cadastrar',
    component: SignupComponent,
  },
  {
    path: 'pergunta/nova',
    component: NovaPerguntaComponent,
  },
  {
    path: 'pergunta/:perguntaId',
    component: VerPerguntaComponent,
  },
  {
    path: 'perguntas',
    component: ListaPerguntasComponent,
  },
  {
    path: 'perfil/:userName',
    component: PerfilComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
