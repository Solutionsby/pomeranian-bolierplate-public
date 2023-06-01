import db from '../db.json';
import { rand } from './RandFunction';

export const NameLottery = () => {};

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const radomIndex = rand(0, i);
    const currentIndex = i - 1;
    swap(array, currentIndex, radomIndex);
  }
  return array;
}
