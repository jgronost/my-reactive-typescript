import {Observable} from "rxjs/Observable";
import {Scheduler} from "rxjs/Rx";
import 'rxjs/add/operator/observeOn'

function myAsyncScheduler() {
    const observable = Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    }).observeOn(Scheduler.async);

    console.log('just before subscribe');
    observable.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
    });
    console.log('just after subscribe');
}

myAsyncScheduler();