export default class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }

  get name() {
    return this.title;
  }

  set name(title) {
    this.title = title;
  }

  get description() {
    return this.description;
  }

  set description(newDescription) {
    this.description = newDescription;
  }

  get date() {
    return this.date;
  }

  set date(newDate) {
    this.date = newDate;
  }
  
}