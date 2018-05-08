import {of} from "rxjs/observable/of";
import {catchError, concatMap, delay, timeout} from "rxjs/operators";

function myTimeout() {
    // simulate request
    function makeRequest(timeToDelay) {
        return of('Request Complete!').pipe(delay(timeToDelay));
    }

    of(4000, 3000, 2000)
        .pipe(
            concatMap(duration =>
                makeRequest(duration).pipe(
                    timeout(2500),
                    catchError(error => of(`Request timed out after: ${duration}`))
                )
            )
        )
        .subscribe(val => console.log(val));
}

myTimeout();