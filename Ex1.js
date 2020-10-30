function reverseArray (array) {
  let emptyArray = [];
  let value = array.length - 1;

  for (let i = value; i >= 0; i--) {
    emptyArray.push (array[i]);
  }

  return emptyArray;
}

console.log (reverseArray (['MAMA', 'PAPA', 'GRANDMA', 'GRANDPA']));

function reverseInPlace (array) {
  let lenghtOfArray = Math.floor (array.length / 2);

  for (let i = 0; i < lenghtOfArray; i++) {
    let value = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = value;
  }

  return array;
}

let theArrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log (reverseInPlace (theArrayValue));

function range (start, end) {
  let emptyArray = [];
  let step = start < end ? 1 : -1;

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      emptyArray.push (i);
    }
  } else {
    for (let j = start; j >= end; j += step) {
      emptyArray.push (j);
    }
  }
  return emptyArray;
}

function sum (array) {
  let total = 0;

  for (let x of array) {
    total += x;
  }

  return total;
}

console.log (range (1, 100));
console.log (sum (range (1, 100)));
