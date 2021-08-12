export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function $$(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
export function on(target, eventName, handler) {
  return target.addEventListener(eventName, handler);
}
