import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsModule' },
    { path: 'tabs-demo', loadChildren: './tabs-demo/tabs.module#TabsModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
