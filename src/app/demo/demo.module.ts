import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { DemoRoutingModule } from './demo-routing.module';
import { NavComponent } from './nav/nav.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { SubC01Component } from './sub-c01/sub-c01.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatTabsModule,
        DemoRoutingModule,
    ],
    declarations: [
        NavComponent,
        SubC01Component,
        ProgressDemoComponent,
        RxjsDemoComponent,
    ]
})
export class DemoModule { }
