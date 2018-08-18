import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    links = [
        { path: 'demo01', label: 'demo01' },
        { path: 'demo02', label: 'demo02' },
        { path: 'demo03', label: 'demo03' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
