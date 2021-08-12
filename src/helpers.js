export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function $$(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
export function on(target, eventName, handler) {
 if (target.length) {
   target.forEach((node) => {
     node.addEventListener(eventName, handler);
   })
   return;
 }
  return target.addEventListener(eventName, handler);
}
