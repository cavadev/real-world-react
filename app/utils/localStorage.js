const STORED_STATE = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORED_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORED_STATE, serializedState);
  } catch {
    // ignore write errors
  }
};
