import modes from './modes.json';
function gamble() {
  return {
    modifier: getRandomFromArray(modes.modifier),
    basis: getRandomFromArray(modes.basis),
    special: getRandomFromArray(modes.special),
  };
}

function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export { gamble };

