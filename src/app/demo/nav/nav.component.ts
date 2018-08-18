import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    links = [
        { path: 'sub-c01', label: 'sub-c01' },
        { path: 'progress-demo', label: 'progress-demo' },
        { path: 'rxjs-demo', label: 'rxjs-demo' },
        { path: 'status-create', label: 'status-create' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
