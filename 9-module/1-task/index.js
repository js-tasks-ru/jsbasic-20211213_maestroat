export default function promiseClick(button) {
  // ваш код...
  let promise = new Promise((resolve, reject) => {
    button.addEventListener('click', function(event) {
      resolve(event);
    }, {once: true});
  });
  return promise;
}
