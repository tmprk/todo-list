export default class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.identifier = new Date();
  }

  get name() {
    return this.title;
  }

  get description() {
    return this.description;
  }
  
  get date() {
    return this.date;
  }

  set name(title) {
    this.title = title;
  }

  set description(newDescription) {
    this.description = newDescription;
  }

  set date(newDate) {
    this.date = newDate;
  }
  
}