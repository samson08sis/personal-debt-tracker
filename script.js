const debtsOwedToMeTable = document
  .getElementById("debtsOwedToMe")
  .getElementsByTagName("tbody")[0];
const debtsIOweTable = document
  .getElementById("debtsIOwe")
  .getElementsByTagName("tbody")[0];
const debtForm = document.getElementById("debtForm");

debtForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const debtType = document.getElementById("debtType").value;

  if (debtType === "owedToMe") {
    // Add to debts owed to me
    const newRow = debtsOwedToMeTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = amount;
    newRow.insertCell(2).innerText = date;
  } else if (debtType === "iOwe") {
    // Add to debts I owe
    const newRow = debtsIOweTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = amount;
    newRow.insertCell(2).innerText = date;
  }

  // Clear the form
  debtForm.reset();

  // Redirect to the index page
  window.location.href = "index.html";
});
