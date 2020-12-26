function detectWord(str) {
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) continue;
    word += str[i];
  }
  return word;
  // const detectWord = str => str.replace(/[A-Z]/g, '');
  // return [...str].filter(c => c.toLowerCase()===c).join('')
}

function stringCycling(a, b) {
  let word = '';
  for (let i = 0; i < b.length; i++) {
    word += a[i % a.length];
  }
  return word;
  // return a.repeat(b.length).substring(0, b.length);
  // const stringCycling = (a, b) => "".padEnd(b.length, a);
}

function largestSwap(num) {
  return +num.toString()[0] >= +num.toString()[1];
  // return num / 10 > num % 10
}

function ohmsLaw(v, r, i) {
  let nullCount = [v, r, i].filter((f) => f === '' || f === null).length;
  if (nullCount > 1 || null === 0) return 'Invalid';
  return v === ''
    ? Math.round(r * i * 100 + Number.EPSILON) / 100
    : r === ''
    ? Math.round((v / i) * 100 + Number.EPSILON) / 100
    : Math.round((v / r) * 100 + Number.EPSILON) / 100;
  // (r * i).toFixed(2)
}

function potatoes(str) {
  return (str.match(/potato/g) || []).length;
  // const potatoes = s => s.match(/potato/g).length;
}

function checkTitle(title) {
  return title.split(' ').length === title.match(/[A-Z]/g).length;
  // return !title.split(" ").map(x => x[0] == x[0].toUpperCase()).includes(false)
}

function isTrue(relation) {
  let x = relation;
  if (relation.match(/=/g)) {
    const pos = relation.indexOf('=');
    x = relation.substring(0, pos) + '==' + relation.substring(pos);
  }
  return eval(x);
  // return eval(relation.replace('=', '==='))
}

function error(n) {
  const dict = {
    1: 'Check the fan: e1',
    2: 'Emergency stop: e2',
    3: 'Pump Error: e3',
    4: 'c: e4',
    5: 'Temperature Sensor Error: e5',
  };
  return n <= 5 && n > 0 ? dict[n] : 101;

  // return {
  //   1: 'Check the fan: e1',
  //   2: 'Emergency stop: e2',
  //   3: 'Pump Error: e3',
  //   4: 'c: e4',
  //   5: 'Temperature Sensor Error: e5',
  // }[n] || 101
}

function findSingleNumber(numbers) {
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return numbers[0];

  const set = new Set([...numbers]); // const unique = [...new Set(numbers)];
  let index = 0;
  for (let i = 0; i < set.size; i++) {
    let count = 0;

    for (let j = 0; j < numbers.length; j++) if ([...set][i] === numbers[j]) count++;

    if (count === 1) {
      index = i;
      break;
    }
  }
  console.log(set);
  return [...set][index];
  // ~~ is a substitue for Math.floor if efficiency is a concern, the speed gain is less than minimal.
  // let findSingleNumber =n=> n.filter(a=> n.indexOf(a) == n.lastIndexOf(a))[0] || null;
}

function charCount(myChar, str) {
  return [...str].filter((f) => f === myChar).length;
}

console.log(charCount('c', 'Chamber of secrets'));
