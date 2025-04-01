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
        if (!response.ok) throw new Error('Failed to fetch expenses');
        const expenses = await response.json();
        displayExpenses(expenses);
    } catch (error) {
        console.error('Error loading expenses:', error);
        showError('Failed to load expenses. Please try again later.');
    }
}

async function loadSummary() {
    try {
        const [totalResponse, categoryResponse] = await Promise.all([
            fetch(`${API_URL}/expenses/total`),
            fetch(`${API_URL}/expenses/by-category`)
        ]);

        if (!totalResponse.ok || !categoryResponse.ok) 
            throw new Error('Failed to fetch summary');

        const { total } = await totalResponse.json();
        const categories = await categoryResponse.json();

        displayTotal(total);
        displayCategories(categories);
    } catch (error) {
        console.error('Error loading summary:', error);
        showError('Failed to load summary. Please try again later.');
    }
}

async function addExpense(expense) {
    try {
        const response = await fetch(`${API_URL}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        });
        
        if (!response.ok) throw new Error('Failed to add expense');
    } catch (error) {
        console.error('Error adding expense:', error);
        showError('Failed to add expense. Please try again.');
    }
}

async function deleteExpense(id) {
    try {
        const response = await fetch(`${API_URL}/expenses/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete expense');
        
        loadExpenses();
        loadSummary();
    } catch (error) {
        console.error('Error deleting expense:', error);
        showError('Failed to delete expense. Please try again.');
    }
}

function displayExpenses(expenses) {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    if (expenses.length === 0) {
        expensesList.innerHTML = '<p>No expenses found. Add your first expense!</p>';
        return;
    }

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

    if (Object.keys(categories).length === 0) {
        categoryBreakdown.innerHTML += '<p>No categories found.</p>';
        return;
    }

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

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.insertBefore(errorDiv, document.body.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
} 