import { makeObservable, observable, action } from "mobx";

class SomeClass {
  constructor() {
    makeObservable(this, {});
  }
}

const ExportClass = new SomeClass();
export default ExportClass;
