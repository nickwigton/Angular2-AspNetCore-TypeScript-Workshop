import {Injectable} from "@angular/core";
import {Expense} from "../../expenses/expense";

@Injectable()
export class ExpenseService {
    getExpenses() : Expense[] {
        return [
        {
            Amount: 100.43,
            AmountReimbursable: 100.43,
            ApprovedBy: undefined,
            Description: "Laptop adapter",
            ExpenseDate: new Date(2016, 4, 23)
        },
        {
            Amount: 77.41,
            AmountReimbursable: 77.41,
            ApprovedBy: {FirstName: "Gary", LastName: "Sandberg"},
            Description: "Lunch w/ client",
            ExpenseDate: new Date(2016, 4, 26)
        },
        {
            Amount: 35.71,
            AmountReimbursable: 22.45,
            ApprovedBy: {FirstName: "John", LastName: "Lackey"},
            Description: "Gas",
            ExpenseDate: new Date(2016, 4, 24)
        },
        {
            Amount: 11.23,
            AmountReimbursable: 11.23,
            ApprovedBy: {FirstName: "Jeff", LastName: "Grauss"},
            Description: "Chipotle",
            ExpenseDate: new Date(2016, 4, 29)
        },
        {
            Amount: -11.23,
            AmountReimbursable: 0,
            ApprovedBy: {FirstName: "Jeff", LastName: "Grauss"},
            Description: "Refund for double charge",
            ExpenseDate: new Date(2016, 4, 29)
        },
        {
            Amount: 246.75,
            AmountReimbursable: 150.75,
            ApprovedBy: {FirstName: "Morgan", LastName: "Trellman"},
            Description: "Development software",
            ExpenseDate: new Date(2016, 4, 21)
        },
        {
            Amount: 327.55,
            AmountReimbursable: 327.55,
            ApprovedBy: undefined,
            Description: "Monitors",
            ExpenseDate: new Date(2016, 4, 22)
        },
        {
            Amount: -114.33,
            AmountReimbursable: 0,
            ApprovedBy: undefined,
            Description: "Refund from Amazon",
            ExpenseDate: new Date(2016, 4, 22)
        },
    ];
    }
}