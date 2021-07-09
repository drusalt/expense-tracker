const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99,
  25.8,
  144.39,
  12.98,
  4.99,
  38.75,
  14.5,
  99.99,
  75.4,
  4.75,
  62.88
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}
// Write showMinMax function here

const showMinMax = function (expenses) {
  // assigns smallest # in array to "min"
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);

  const listItem1 = document.createElement("li");
  listItem1.innerText = `Min:  $ ${min}`;

  const listItem2 = document.createElement("li");
  listItem2.innerText = `Max:  $ ${max}`;

  results.append(listItem1);
  results.append(listItem2);

  results.classList.remove("hide");
};

// Write click event listener for 'button' and call the showMinMax function

button.addEventListener("click", function () {
  showMinMax(expenses);
  button.disabled = true;
});
