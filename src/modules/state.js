import { storage } from "./storage";

class State {

  constructor() {
    this.selectedProject = null;
    this.items = [];
  }

  load() {
    storage.all().forEach((element, index) => {
      // storage.getProject()
    })
  }

}