import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubC01Component } from './sub-c01/sub-c01.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { NavComponent } from './nav/nav.component';
import { StatusCreateComponent } from './status-create/status-create.component';

const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            { path: 'sub-c01', component: SubC01Component },
            { path: 'progress-demo', component: ProgressDemoComponent },
            { path: 'rxjs-demo', component: RxjsDemoComponent },
            { path: 'status-create', component: StatusCreateComponent },
            { path: '**', redirectTo: 'sub-c01' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
