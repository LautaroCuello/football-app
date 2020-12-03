const MAX_NAME_LENGTH = 25;
const MAX_SCORE = 10;
const MIN_SCORE = 1;

function validateName(newValue) { 
  return newValue.length <= MAX_NAME_LENGTH;
}

function validateScore(newValue) {
  return newValue >= MIN_SCORE && newValue <= MAX_SCORE;
}

export {
  validateName,
  validateScore
}