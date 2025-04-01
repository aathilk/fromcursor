import { Expense } from './models/Expense';

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: Date;
    category: string;
}

export class ExpenseTracker {
    async addExpense(description: string, amount: number, category: string): Promise<Expense> {
        const expense = new Expense({
            description,
            amount,
            category
        });
        await expense.save();
        return {
            id: expense._id.toString(),
            description: expense.description,
            amount: expense.amount,
            date: expense.date,
            category: expense.category
        };
    }

    async getExpenses(): Promise<Expense[]> {
        const expenses = await Expense.find().sort({ date: -1 });
        return expenses.map(expense => ({
            id: expense._id.toString(),
            description: expense.description,
            amount: expense.amount,
            date: expense.date,
            category: expense.category
        }));
    }

    async deleteExpense(id: string): Promise<boolean> {
        try {
            await Expense.findByIdAndDelete(id);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getTotalExpenses(): Promise<number> {
        const result = await Expense.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        return result[0]?.total || 0;
    }

    async getExpensesByCategory(): Promise<{ [key: string]: number }> {
        const result = await Expense.aggregate([
            { $group: { _id: "$category", total: { $sum: "$amount" } } }
        ]);
        return result.reduce((acc, curr) => {
            acc[curr._id] = curr.total;
            return acc;
        }, {} as { [key: string]: number });
    }
} 