export function getRandomElement(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  return array[Math.floor(Math.random() * array.length)];
}

const arr = {
  getRandomElement,
};

export default arr;
