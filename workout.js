// Truth table examples 
function equalTo() { // equal to comparison operator
  let _grade1 = 20;
  let _grade2 = '20';
  if ( _grade1 == _grade2) {
     console.log(true);
  }
  else {
    console.log(false);
  }
}
equalTo();

function equalValueType() { // equal value and data type to comparison operator
  let _grade1 = 20;
  let _grade2 = 20;
  if ( _grade1 === _grade2) {
     console.log('this is true');
  }
  else {
    console.log('this is false');
  }
}
equalValueType();

function notEqual() { // if its not the same value it returns true
  let _grade1 = 21;
  let _grade2 = '21';
  if ( _grade1 != _grade2) {
     console.log(true);
  }
  else {
    console.log(false);
  }
}
notEqual();

function notEqualValueData() { // if its not the same data or value it returns true
  let _grade1 = '20';
  let _grade2 = '20';
  if ( _grade1 !== _grade2) {
     console.log('okay, true');
  }
  else {
    console.log('okay, false');
  }
}
notEqualValueData();



