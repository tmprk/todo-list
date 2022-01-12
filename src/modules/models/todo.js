export default class Todo {
  constructor(title, description, date) {
    this.identifier = new Date().valueOf();
    this.title = title;
    this.description = description;
    this.date = date;
  }

  // get name() {
  //   return this.title;
  // }

  // get description() {
  //   return this.description;
  // }
  
  // get date() {
  //   return this.date;
  // }

  // set name(title) {
  //   this.title = title;
  // }

  // set description(newDescription) {
  //   this.description = newDescription;
  // }

  // set date(newDate) {
  //   this.date = newDate;
  // }

  static from(json) {
    return Object.assign(new Todo(), json);
  }
  
}