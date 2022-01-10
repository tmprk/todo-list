export default class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }

  get identifier() {
    return this.identifier;
  }

  addTodo(data) {
    const title = data.title;
    this.todos.push(data);
    
    // storage setItem stringify
  }

  removeTodo(identifier) {
    console.log(identifier);
  }
  
}