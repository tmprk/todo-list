export const pubsub = {
  events: {},
  sub: (eventName, func) => {
    console.log('sub');
  },
  pub: (eventName, func) => {
    console.log('pub');
  },
}