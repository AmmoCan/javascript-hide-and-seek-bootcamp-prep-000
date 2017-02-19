function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  const target = document.querySelector('#nested .target');
  return target;
}

function deepestChild() {
  const parent = document.getElementById('grand-node').lastElementChild;
  const child = parent.lastElementChild;
  return child;
}

function increaseRankBy(n) {
  const lists = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = lists.length; i < l; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}
