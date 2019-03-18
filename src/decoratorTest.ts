import {logger} from './decoratorFuncs'; 

export class DecoratorTest {
  
  @logger
  doubleNumber(input: number) {
    return input * 2;
  }

  @logger 
  multply(multer: number, multee: number) {
    return multer*multee;
  }
}