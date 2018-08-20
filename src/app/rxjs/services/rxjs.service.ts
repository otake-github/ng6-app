import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RxjsItem } from 'common/resources/rxjs-entity';
// import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RxjsService {

    constructor(private http: HttpClient) { }
    // constructor() { }

    // getItems() {
    //     return from<RxjsItem[]>([]);
    // }
    getItems() {
        return this.http.get<RxjsItem[]>('api/items');
        // return this.http.get<RxjsItem[]>('api/rxjs/demo01/items');
        // return this.http.get<RxjsItem[]>('api/rxjs/items');
    }
}
