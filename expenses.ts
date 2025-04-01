interface Expense {
    id: number;
    description: string;
    amount: number;
    date: Date;
    category: string;
}

class ExpenseTracker {
    private expenses: Expense[] = [];
    private nextId: number = 1;

    addExpense(description: string, amount: number, category: string): void {
        const expense: Expense = {
            id: this.nextId++,
            description,
            amount,
            date: new Date(),
            category
        };
        this.expenses.push(expense);
    }

    getExpenses(): Expense[] {
        return this.expenses;
    }

    getTotalExpenses(): number {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    getExpensesByCategory(): { [key: string]: number } {
        return this.expenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {} as { [key: string]: number });
    }
}

// Example usage
const tracker = new ExpenseTracker();

// Adding some sample expenses
tracker.addExpense("Groceries", 150.50, "Food");
tracker.addExpense("Gas", 45.00, "Transportation");
tracker.addExpense("Movie tickets", 30.00, "Entertainment");
tracker.addExpense("Internet bill", 89.99, "Utilities");

// Display all expenses
console.log("All Expenses:");
tracker.getExpenses().forEach(expense => {
    console.log(`ID: ${expense.id}`);
    console.log(`Description: ${expense.description}`);
    console.log(`Amount: $${expense.amount.toFixed(2)}`);
    console.log(`Date: ${expense.date.toLocaleDateString()}`);
    console.log(`Category: ${expense.category}`);
    console.log("-------------------");
});

// Display total expenses
console.log(`\nTotal Expenses: $${tracker.getTotalExpenses().toFixed(2)}`);

// Display expenses by category
console.log("\nExpenses by Category:");
const expensesByCategory = tracker.getExpensesByCategory();
for (const category in expensesByCategory) {
    if (expensesByCategory.hasOwnProperty(category)) {
        console.log(`${category}: $${expensesByCategory[category].toFixed(2)}`);
    }
} 