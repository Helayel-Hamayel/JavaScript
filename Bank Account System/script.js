class BankAccount {

    #name;
    #balance;
    #allowDeposit;
    #allowWithdraw;

    constructor(name, balance) {
        this.#name = name

        if (balance < 0) {
            this.#balance = 0
        } else {
            this.#balance = balance
        }

        
        this.#allowDeposit = true
        this.#allowWithdraw = true
    }

    deposit(amount){
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("You tried depositing a NEGATIVE value");
        }
    }

    withdraw(amount){
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            console.log("You cant overdraw more than your current balance");
        }
    }

    getBalance(){
        console.log(`Your balance is ${this.#balance}`);
    }
    
}

// =========== Part 3 ===========
const account = new BankAccount("Ali", 100);
account.withdraw(150);
account.getBalance()

/*
Answer:
Because we didnt add check for withdrawing, you withdrawn more than the balance so i added a check to prevent
overdrawing
*/

// =========== Part 5 ===========

account.balance = -1000;
account.getBalance()

/*
Answer:
To prevent direct maniuplation we make balance (and others) a private variable
(this.#balance)
*/

