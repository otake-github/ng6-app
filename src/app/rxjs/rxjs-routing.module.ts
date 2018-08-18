import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { RjxsDemo01Component } from './rjxs-demo01/rjxs-demo01.component';
import { RjxsDemo02Component } from './rjxs-demo02/rjxs-demo02.component';
import { RjxsDemo03Component } from './rjxs-demo03/rjxs-demo03.component';

const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            { path: 'demo01', component: RjxsDemo01Component },
            { path: 'demo02', component: RjxsDemo02Component },
            { path: 'demo03', component: RjxsDemo03Component },
            { path: '**', redirectTo: 'demo01' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule { }
