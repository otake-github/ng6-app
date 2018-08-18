import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { NavComponent } from './nav/nav.component';
import { RjxsDemo01Component } from './rjxs-demo01/rjxs-demo01.component';
import { RjxsDemo02Component } from './rjxs-demo02/rjxs-demo02.component';
import { RjxsDemo03Component } from './rjxs-demo03/rjxs-demo03.component';
import { MatCardModule, MatTabsModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule,
        RxjsRoutingModule,
    ],
    declarations: [
        NavComponent,
        RjxsDemo01Component,
        RjxsDemo02Component,
        RjxsDemo03Component,
    ]
})
export class RxjsModule { }
