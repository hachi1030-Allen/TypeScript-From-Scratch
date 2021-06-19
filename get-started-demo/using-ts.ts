const button = document.querySelector('button');
const input1 = document.getElementById('InputNumber1')! as HTMLInputElement;
const input2 = document.getElementById('InputNumber2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
