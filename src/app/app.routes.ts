import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { A1 } from './a1/a1';
import { A2 } from './a2/a2';
import { A3 } from './a3/a3';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: App,
  },
  {
    path: 'about',
    component: About,
    children: [
      { path: '', redirectTo: 'a1', pathMatch: 'full' },
      { path: 'a1', component: A1 },
      { path: 'a2', component: A2 },
      { path: 'a3', component: A3 },
    ],
  },
  {
    path: 'contact',
    component: Contact,
  },
];
