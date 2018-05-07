import {ReplaySubject} from "rxjs/index";

function myReplaySubject() {

    var subject = new ReplaySubject(3); //  buffer 3 values for new subscribers

    subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    subject.next(0);
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });

    subject.next(4);
}

myReplaySubject();