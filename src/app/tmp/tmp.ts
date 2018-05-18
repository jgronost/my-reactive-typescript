
function myVarious() {

    let myArray: Array<string> = ["1", "2"];
    let myArray2: Array<number> = new Array<number>();
    myArray2[0] = 1;
    let myTouple: [number, string] = [1,"two"];
    myTouple[2] = 3;
    myTouple[3] = "four";

    console.log(myArray);
    console.log(myArray2);
    console.log(myTouple);

    let box: Box = {height: 5, width: 6, scale: 10};
    console.log(box);

    let someString: string = LogAndReturn<string>('log this');

    let medals: string[] = ['gold', 'silver', 'bronze'];
    let [first, second, third] = medals;
    console.log(`${first}, ${second}, ${third}`);

    let person = {
        name: 'Audrey',
        address: '123 Main Street',
        phone: '555-1212'
    };

    let { name, address, phone } = person;
    console.log(`${name} ${address} ${phone}`);

    let newBookIDs = [10, 20];
    let allBookIDs = [1, 2, 3, ...newBookIDs];
    newBookIDs[0] = 666;
    console.log(allBookIDs);

}

myVarious();

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

function LogAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

