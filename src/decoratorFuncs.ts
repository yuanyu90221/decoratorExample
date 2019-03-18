export function logger(target: any, key: string, descriptor: any) {
  return {
    value: function (...args: any[]) {
      let footParameter = args.map(a => JSON.stringify(a)).join();
      let result = descriptor.value.apply(this, args);
      console.log(`Call : ${key}(${footParameter}) => ${result}`);
      return result;
    }
  };
}

export function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}; 