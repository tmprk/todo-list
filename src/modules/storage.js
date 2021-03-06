import { pubsub } from "./pubsub";

export const storage = {
  initialize: function() {
    var uuid = Math.random().toString(36).slice(-6);
    const dummyData = {
      'title': 'example',
      'todos': [
        {
          'identifier': 123,
          'title': 'Test 1',
          'description': 'This is a todo',
          'date': '2015-03-25',
          'parent': `${uuid}`,
          'this.complete': false
        },
        {
          'identifier': 456,
          'title': 'Test 2',
          'description': 'This is a todo',
          'date': '2015-03-26',
          'parent': `${uuid}`,
          'this.complete': false
        },
        {
          'identifier': 789,
          'title': 'Test 3',
          'description': 'This is a todo',
          'date': '2015-03-27',
          'parent': `${uuid}`,
          'this.complete': false
        },
      ]
    };
    localStorage.setItem(uuid, JSON.stringify(dummyData));
  },
  all: () => {
    return Object.keys(localStorage);
  },
  getProject: (uuid) => {
    const project = JSON.parse(localStorage.getItem(uuid));
    return project;
  },
  todoCount: (uuid) => {
    return storage.getProject(uuid).todos.length;
  },
  create: (uuid, emptyProject) => {
    localStorage.setItem(uuid, emptyProject);
  },
  add: (projectID, newData) => {
    const current = JSON.parse(localStorage.getItem(projectID));
    current.todos.push(newData);
    localStorage.setItem(projectID, JSON.stringify(current));
  },
  toggle: (projectID, dataID) => {
    console.log(dataID);
    const current = JSON.parse(localStorage.getItem(projectID));
    const todo = current.todos.find(function(v) {
      return v.identifier === Number(dataID)
    });
    todo.complete = !todo.complete;
    localStorage.setItem(projectID, JSON.stringify(current));
    // pubsub.pub('updateListView', projectID);
  }
}