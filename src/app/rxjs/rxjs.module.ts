import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { NavComponent } from './nav/nav.component';
import { RjxsDemo01Component } from './rjxs-demo01/rjxs-demo01.component';
import { RjxsDemo02Component } from './rjxs-demo02/rjxs-demo02.component';
import { RjxsDemo03Component } from './rjxs-demo03/rjxs-demo03.component';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RxjsInMemoryDbService } from './services/rxjs-in-memory-db.service';

@NgModule({
    imports: [
        CommonModule,
        // HttpClientModule,
        MatTabsModule,
        MatCardModule,
        RxjsRoutingModule,
        HttpClientInMemoryWebApiModule.forRoot(RxjsInMemoryDbService, {
            delay: 500,
            dataEncapsulation: false,
            // host: 'localhost:4200',
            // apiBase: 'api/rxjs/',
        }),
    ],
    declarations: [
        NavComponent,
        RjxsDemo01Component,
        RjxsDemo02Component,
        RjxsDemo03Component,
    ]
})
export class RxjsModule { }
