let num = 95;
function easyNumber() {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        console.log(num + ' - простое число')
        break;
      } else {
        console.log(num + ' - составное число')
        break;
      }
    }
  };
if (num <= 1000) {
  easyNumber();
} else {
  console.log('Данные неверны')
}