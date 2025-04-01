import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { ExpenseTracker } from './expenseTracker';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Initialize expense tracker
const tracker = new ExpenseTracker();

// API Routes
app.get('/api/expenses', async (req, res) => {
    try {
        const expenses = await tracker.getExpenses();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
});

app.post('/api/expenses', async (req, res) => {
    try {
        const { description, amount, category } = req.body;
        const expense = await tracker.addExpense(description, amount, category);
        res.json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
});

app.delete('/api/expenses/:id', async (req, res) => {
    try {
        const success = await tracker.deleteExpense(req.params.id);
        res.json({ success });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete expense' });
    }
});

app.get('/api/expenses/total', async (req, res) => {
    try {
        const total = await tracker.getTotalExpenses();
        res.json({ total });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch total expenses' });
    }
});

app.get('/api/expenses/by-category', async (req, res) => {
    try {
        const categories = await tracker.getExpensesByCategory();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses by category' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 