const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : '/api';

document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
    loadSummary();

    document.getElementById('expenseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;

        await addExpense({ description, amount, category });
        
        // Reset form
        e.target.reset();
        
        // Reload data
        loadExpenses();
        loadSummary();
    });
});

async function loadExpenses() {
    try {
        const response = await fetch(`${API_URL}/expenses`);
        const expenses = await response.json();
        displayExpenses(expenses);
    } catch (error) {
        console.error('Error loading expenses:', error);
    }
}

async function loadSummary() {
    try {
        const [totalResponse, categoryResponse] = await Promise.all([
            fetch(`${API_URL}/expenses/total`),
            fetch(`${API_URL}/expenses/by-category`)
        ]);

        const { total } = await totalResponse.json();
        const categories = await categoryResponse.json();

        displayTotal(total);
        displayCategories(categories);
    } catch (error) {
        console.error('Error loading summary:', error);
    }
}

async function addExpense(expense) {
    try {
        await fetch(`${API_URL}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        });
    } catch (error) {
        console.error('Error adding expense:', error);
    }
}

async function deleteExpense(id) {
    try {
        await fetch(`${API_URL}/expenses/${id}`, {
            method: 'DELETE'
        });
        loadExpenses();
        loadSummary();
    } catch (error) {
        console.error('Error deleting expense:', error);
    }
}

function displayExpenses(expenses) {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach(expense => {
        const expenseElement = document.createElement('div');
        expenseElement.className = 'expense-item';
        expenseElement.innerHTML = `
            <div>
                <strong>${expense.description}</strong>
                <span>(${expense.category})</span>
                <span>$${expense.amount.toFixed(2)}</span>
                <span>${new Date(expense.date).toLocaleDateString()}</span>
            </div>
            <button onclick="deleteExpense('${expense.id}')">Delete</button>
        `;
        expensesList.appendChild(expenseElement);
    });
}

function displayTotal(total) {
    document.getElementById('totalExpenses').textContent = total.toFixed(2);
}

function displayCategories(categories) {
    const categoryBreakdown = document.getElementById('categoryBreakdown');
    categoryBreakdown.innerHTML = '<h3>Category Breakdown:</h3>';

    Object.entries(categories).forEach(([category, amount]) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-item';
        categoryElement.innerHTML = `
            <span>${category}</span>
            <span>$${amount.toFixed(2)}</span>
        `;
        categoryBreakdown.appendChild(categoryElement);
    });
} 