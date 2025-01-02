const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000

app.get('/favicon.ico', (req, res) => res.status(204).end());


const IncomeRouter = require('./routes/income');
const ExpenseRouter = require('./routes/expense');
const SavingsRouter = require('./routes/savings');
const InvestmentsRouter = require('./routes/investments');
const BorrowedRouter = require('./routes/borrowed');
const LentRouter = require('./routes/lent');
const AnalysisRouter = require('./routes/analysis')

app.use(bodyParser.json());
app.use('/addincome', IncomeRouter)
app.use('/addexpense', ExpenseRouter)
app.use('/addsavings', SavingsRouter)
app.use('/addinvestments', InvestmentsRouter)
app.use('/addborrowed', BorrowedRouter)
app.use('/addlent', LentRouter)
app.use('/', AnalysisRouter)

app.listen(port, () => {
    console.log('Server running')
});

