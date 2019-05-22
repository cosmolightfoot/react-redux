import { 
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_CHIPS,
  RMV_DRINK,
  RMV_SANDWICH,
  RMV_CHIPS
} from './index';

export function addDrink(drink) {
  return { type: ADD_DRINK, payload: drink };
}

export function addSandwich(sandwich) {
  return { type: ADD_SANDWICH, payload: sandwich };
}

export function addChips(chips) {
  return { type: ADD_CHIPS, payload: chips };
}

export function removeDrink(drink) {
  return { type: RMV_DRINK, payload: drink };
}

export function removeSandwich(sandwich) {
  return { type: RMV_SANDWICH, payload: sandwich };
}

export function removeChips(chips) {
  return { type: RMV_CHIPS, payload: chips };
}
