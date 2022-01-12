// https://github.com/prof3ssorSt3v3/pubsub-demo/

export const pubsub = {
  events: {},
  sub: (eventName, func) => {
    pubsub.events[eventName] = pubsub.events[eventName] || [];
    pubsub.events[eventName].push(func);
    console.log(`someone subscribed to ${eventName}, which will run ${func.name}`)
  },
  pub: (eventName, data) => {
    if (pubsub.events[eventName]) {
      pubsub.events[eventName].forEach(func => {
        (data !== null) ? func(data) : func();
        // console.log(`${eventName} was published, which will run ${func}`);
      });
    }
  },
}