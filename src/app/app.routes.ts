import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/main/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/main/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailProjectComponent } from './pages/main/detail-project/detail-project.component';
import { ContactComponent } from './pages/main/contact/contact.component';

export const routes: Routes = [
    { path: 'login',title: 'Login ', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'home',
                title: 'Home',
                component: HomeComponent
            },
            {
                path: 'detail',
                title: 'Detail',
                component: DetailProjectComponent
            },
            {
                path: 'about',
                title: 'About',
                component: AboutComponent
            },
            {
                path: 'contact',
                title: 'Contact',
                component: ContactComponent
            },
        ]
    },
    { path: '**', component: NotFoundComponent },

];
