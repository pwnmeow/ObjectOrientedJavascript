  let x = 10;
  let y = x;

  x = 20; // x dont change in primitive types copied by the value

  let a = { value: 10 };
  let b = a;

  a = a.value = 30; // a's value changes  beacuse refrece types they are copied by a reffrence 