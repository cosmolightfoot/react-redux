import lunchReducer from './lunchReducer';
import {
  addSandwich,
  removeSandwich, 
  addDrink,
  removeDrink,
  addChips,
  removeChips
} from '../actions/lunchActions';

const state = { 
  drink: [],
  sandwich: [],
  chips: []
};

const stateFullLunch = {
  drink: ['mimosa'],
  sandwich: ['ham sandwich'],
  chips: ['potato chips']
};


describe('Lunch Reducer Tests', () => {
  it('adds a sandwich', () => {
    expect(lunchReducer(state, addSandwich('ham sandwich'))).toEqual(
      {
        drink: [],
        sandwich: ['ham sandwich'],
        chips: []
      }
    );
  });
  it('adds a drink', () => {
    expect(lunchReducer(state, addDrink('mimosa'))).toEqual(
      {
        drink: ['mimosa'],
        sandwich: [],
        chips: []
      }
    );
  });
  it('adds a chips', () => {
    expect(lunchReducer(state, addChips('potato chips'))).toEqual(
      {
        drink: [],
        sandwich: [],
        chips: ['potato chips']
      }
    );
  });
  it('removes a sandwich', () => {
    expect(lunchReducer(stateFullLunch, removeSandwich('ham sandwich'))).toEqual(
      {
        drink: ['mimosa'],
        sandwich: [],
        chips: ['potato chips']
      }
    );
  });
  it('removes a drink', () => {
    expect(lunchReducer(stateFullLunch, removeDrink('mimosa'))).toEqual(
      {
        drink: [],
        sandwich: ['ham sandwich'],
        chips: ['potato chips']
      }
    );
  });
  it('removes a chips', () => {
    expect(lunchReducer(stateFullLunch, removeChips('potato chips'))).toEqual(
      {
        drink: ['mimosa'],
        sandwich: ['ham sandwich'],
        chips: []
      }
    );
  });
});
