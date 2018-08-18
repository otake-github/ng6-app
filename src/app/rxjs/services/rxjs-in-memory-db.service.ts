import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class RxjsInMemoryDbService implements InMemoryDbService {

    constructor() { }

    createDb(reqInfo?: RequestInfo) {
        const items = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' },
            { id: 4, name: 'Tornado' }
        ];

        return { items };
    }
}
