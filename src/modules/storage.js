import { pubsub } from "./pubsub";

export const storage = {
  initialize: function() {
    localStorage.setItem('')
  },
  get: (project) => {
    console.log(project)
  },
  set: (project, data) => {
    console.log(project, data)
  }
}