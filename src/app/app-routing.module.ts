import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth/auth-guard';
import { ClientesComponent } from './components/clientes/clientes.component';

const appRoutes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'login', component: AuthComponent },
    {
        path: 'clientes',
        component: ClientesComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/login' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule { }
