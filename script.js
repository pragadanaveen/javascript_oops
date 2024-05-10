class polymorphism{
    // constructor()
    // {

    // }
    add(a,b,c)
    {
        return a+b+c;
    }
    add(a,b) {
        return a+b;
    }
 

}

 naa = new polymorphism();
document.write(naa.add(1,2,3));
console.log(naa.add(2,5,4));

// bankaccount
class bankaccount{
    balance;
    previousTransaction;
    customerName;
    customerId;
    constructor(cname,cid) {
        customerName = cname;
        customerId = cid;
    }
    deposit(amount)
    {
       if(amount != 0)
        balance = balance +amount;
    }
    withdraw(amount)
    {
        if(amount != 0)
        balance = balance - amount;
        previousTransaction =- amount;
    }
    getPreviousTransaction(){
        if(previousTransaction>0)
        console.log("Deposited: " + Math.abs(previousTransaction));
        else if(previousTransaction < 0)
        console.log("Withdrawn: " + Math.abs(previousTransaction));
        else
        console.log("No transaction occured");
    }
    showMenu()
    {
        option = '\0';
        
    }
}