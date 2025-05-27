let expenseList = JSON.parse(localStorage.getItem("expense")) || [];

// Render Function
function render() {
  let ul = document.querySelector("#myList");
  ul.innerHTML = "";

  for (let i = 0; i < expenseList.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Rs${expenseList[i].amount} ${expenseList[i].desc}`;

    // Delete Button
    let delBtn = document.createElement("button");
    let delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-trash");

    delBtn.appendChild(delIcon);
    delBtn.addEventListener("click", function () {
      expenseList.splice(i, 1);
      localStorage.setItem("expense", JSON.stringify(expenseList));
      render();
    });

    li.appendChild(delBtn);
    ul.appendChild(li); // ✅ Append li to ul
  }
}

// Add Task Handler

// Add Button Event Listener
let addExpense = document.querySelector("#Add");
addExpense.addEventListener("click", function(){
 let inputAmount = document.querySelector(".input--amount");
  let inputDesc = document.querySelector(".input--desc");

  let inputAmountTrim = parseInt(inputAmount.value.trim());
  let inputDescTrim = inputDesc.value.trim();

  if (inputAmountTrim > 0 && inputDescTrim !== "") {
    expenseList.push({ amount: inputAmountTrim, desc: inputDescTrim });
    localStorage.setItem("expense", JSON.stringify(expenseList));
    inputAmount.value = "";
    inputDesc.value = "";
    render();
  }
}); // ✅ Function reference only

// Initial render
render();
