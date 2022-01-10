import { pubsub } from "./pubsub";

export const storage = {
  initialize: function() {
    const dummyData = {
      'projectTitle': 'example',
      'todos': [
        {
          'identifier': 'ABC',
          'todoTitle': 'Test 1',
          'description': 'This is a todo',
          'date': '2015-03-25'
        },
        {
          'identifier': 'DEF',
          'todoTitle': 'Test 2',
          'description': 'This is a todo',
          'date': '2015-03-26'
        },
        {
          'identifier': 'GHI',
          'todoTitle': 'Test 3',
          'description': 'This is a todo',
          'date': '2015-03-27'
        },
      ]
    };

    var uuid = Math.random().toString(36).slice(-6);
    localStorage.setItem(uuid, JSON.stringify(dummyData));
  },
  all: () => {
    return Object.keys(localStorage);
  },
  getProject: (uuid) => {
    const project = JSON.parse(localStorage.getItem(uuid));
    return project;
  },
  set: (projectID, data) => {
    localStorage.setItem(projectID, data);
  },
  keys: () => {
    return Object.keys(localStorage);
  },
  update: () => {
    // localStorage.setItem
  }
}