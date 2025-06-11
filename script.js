let expenses = [];

function addExpense() {
    const title = document.getElementById("title").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const date = document.getElementById("date").value;

    if (!title || isNaN(amount) || !date) {
        alert("Please fill all fields correctly.");
        return;
    }

    const expense = {
        id: Date.now(),
        title,
        amount,
        date
    };

    expenses.push(expense);
    renderExpenses();
    clearInputs();
}

function renderExpenses() {
    const expensesList = document.getElementById("expensesList");
    expensesList.innerHTML = "";

    let total = 0;

    expenses.forEach((expense) => {
        total += expense.amount;

        const card = document.createElement("div");
        card.className = "expense-card";

        card.innerHTML = `
            <div class="expense-info">
                <span class="expense-title">${expense.title}</span>
                <span class="expense-date">${expense.date}</span>
            </div>
            <div class="expense-amount">₹${expense.amount.toFixed(2)}</div>
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
        `;

        expensesList.appendChild(card);
    });

    document.getElementById("totalAmount").innerText = `Total: ₹${total.toFixed(2)}`;
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    renderExpenses();
}

function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}
