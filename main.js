let num = Number(prompt('Вкажіть число', 'ціле число'))
let deg = Number(prompt('Вкажіть ступінь', 'ціле число'))

function power(num, deg) {
  if (deg === 0) {
    return 1;
  } else {
    return num * power(num, deg - 1);
  }
}

res = power(num, deg)
console.log(res)