var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.expenses = [];
        this.nextId = 1;
    }
    ExpenseTracker.prototype.addExpense = function (description, amount, category) {
        var expense = {
            id: this.nextId++,
            description: description,
            amount: amount,
            date: new Date(),
            category: category
        };
        this.expenses.push(expense);
    };
    ExpenseTracker.prototype.getExpenses = function () {
        return this.expenses;
    };
    ExpenseTracker.prototype.getTotalExpenses = function () {
        return this.expenses.reduce(function (total, expense) { return total + expense.amount; }, 0);
    };
    ExpenseTracker.prototype.getExpensesByCategory = function () {
        return this.expenses.reduce(function (acc, expense) {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {});
    };
    return ExpenseTracker;
}());
// Example usage
var tracker = new ExpenseTracker();
// Adding some sample expenses
tracker.addExpense("Groceries", 150.50, "Food");
tracker.addExpense("Gas", 45.00, "Transportation");
tracker.addExpense("Movie tickets", 30.00, "Entertainment");
tracker.addExpense("Internet bill", 89.99, "Utilities");
// Display all expenses
console.log("All Expenses:");
tracker.getExpenses().forEach(function (expense) {
    console.log("ID: ".concat(expense.id));
    console.log("Description: ".concat(expense.description));
    console.log("Amount: $".concat(expense.amount.toFixed(2)));
    console.log("Date: ".concat(expense.date.toLocaleDateString()));
    console.log("Category: ".concat(expense.category));
    console.log("-------------------");
});
// Display total expenses
console.log("\nTotal Expenses: $".concat(tracker.getTotalExpenses().toFixed(2)));
// Display expenses by category
console.log("\nExpenses by Category:");
var expensesByCategory = tracker.getExpensesByCategory();
for (var category in expensesByCategory) {
    if (expensesByCategory.hasOwnProperty(category)) {
        console.log("".concat(category, ": $").concat(expensesByCategory[category].toFixed(2)));
    }
}
