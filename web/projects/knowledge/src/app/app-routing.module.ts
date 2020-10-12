import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'scopes', loadChildren: () => import('./pages/scopes/scopes.module').then(m => m.ScopesModule) },
  { path: 'notes', loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
