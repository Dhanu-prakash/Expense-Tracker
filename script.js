let expenseList = JSON.parse(localStorage.getItem("expense")) || [];

// Render Function
function render() {
  let ul = document.querySelector("#myList");
  ul.innerHTML = "";

  for (let i = 0; i < expenseList.length; i++) {
    let li = document.createElement("li");
    

    li.textContent = `Rs${expenseList[i].amount}        x${expenseList[i].quantity}       ${expenseList[i].desc}`;

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
    ul.appendChild(li); // 
  //total Amount
  let totalAmount = 0;
  totalAmount += expenseList[i].amount * expenseList[i].quantity;
 
let total = document.querySelector(".totalh1");
total.innerHTML = `Total : Rs.${totalAmount}`;
    
  }
}

// Add Task Handler

// Add Button Event Listener
let addExpense = document.querySelector("#Add");
addExpense.addEventListener("click", function(){
 let inputAmount = document.querySelector(".input--amount");
  let inputDesc = document.querySelector(".input--desc");
  let inputQuantity = document.querySelector(".input--quantity")

  let inputAmountTrim = parseInt(inputAmount.value.trim());
  let inputDescTrim = inputDesc.value.trim();
  let inputQuantityTrim = parseInt(inputQuantity.value.trim());
 
  let quantityIfZero = inputQuantityTrim || 1;
  if (inputAmountTrim > 0 && inputDescTrim !== "" && inputAmountTrim >= 1) {
     
    expenseList.push({ 
      amount: inputAmountTrim,
      quantity: quantityIfZero,
      desc: inputDescTrim 
    });
    localStorage.setItem("expense", JSON.stringify(expenseList));
    inputAmount.value = "";
    inputDesc.value = "";
    inputQuantity.value = "";
    render();
  }
}); // ✅ Function reference only

// Initial render
render();
