import {DecoratorTest} from './decoratorTest';
import {Greeter} from './greeter';
let testDecorator = new DecoratorTest().doubleNumber(2);
let testMul = new DecoratorTest().multply(1,2);

let test = new Greeter("world");
console.log(test);