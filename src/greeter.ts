import {classDecorator} from './decoratorFuncs';

@classDecorator
export class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}