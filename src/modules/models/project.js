export default class Project {
  constructor(identifier, todos = []) {
    this.identifier = identifier;
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

  removeTodo()

}