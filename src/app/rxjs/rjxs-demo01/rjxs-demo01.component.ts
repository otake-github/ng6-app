import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import { RxjsItem } from 'common/resources/rxjs-entity';

@Component({
    selector: 'app-rjxs-demo01',
    templateUrl: './rjxs-demo01.component.html',
    styleUrls: ['./rjxs-demo01.component.css']
})
export class RjxsDemo01Component implements OnInit {

    displayedColumns: string[] = [
        'id', 'name',
    ];
    dataSource: RxjsItem[];

    constructor(private service: RxjsService) { }

    ngOnInit() {
    }

    onClick() {
        console.log(`${RjxsDemo01Component.name}#onClick()`);

        const subscription = this.service.getItems()
            .subscribe(response => {
                console.log('onClick() -> subscribe(): response=%o', response);
                this.dataSource = response.items ? response.items : [];
            });

        console.log('subscription.closed=%s', subscription.closed);
    }
}
