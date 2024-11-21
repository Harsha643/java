// 1. Scenario: Library System
// You are creating a system to manage books in a library. Each book has a title, author, and ISBN. The system needs to allow updating the book’s availability status (whether it’s checked out or not) and updating its title.
// •Question:
// How would you define a Book class with properties title, author, and isbn?
// –What methods would you include to:
// •Change the availability status (e.g., checkOut() and returnBook() methods)?
// •Update the book’s title (e.g., updateTitle(newTitle) method)?
class Book{
 title;
 auther;
ISBN;

 constructor(title, auther ,ISBN){
this.title = title;
this.auther = auther;
this.ISBN = ISBN;

 }
checkout(){
 console.log("this.title","taken rich")
 }
 returnbook(){
console.log("this.title","return book");
 }
 update(newtitle){
    this.title = newtitle;
 }
}
var bookone = new Book ("rich", "robot" ,"201" ) 
console.log(bookone);
bookone.checkout();
bookone.returnbook();
bookone.update("poor");


// script.js:25 Book ISBN: "201"auther: "robot"title: "poor"
// script.js:13 this.title taken rich
// script.js:17 this.title return book


//////////////////////////////////////////////////////////////////////////////////////////


// 2. Scenario: Product with Discount
// You are creating an e-commerce platform, and each product has a name, price, and category. You need to be able to apply a discount to the product and retrieve its final price after applying the discount.
// •Question:
// How would you defin2e a Product class with properties name, price, and category?
// –What methods would you include to:
// •Apply a discount to the product (e.g., applyDiscount(amount) method)?
// •Retrieve the price after discount (e.g., getPriceAfterDiscount() method)?
class product {
name;
price;
 category;
 constructor(name,price,category){
this.name = name;
this.price = price;
 this.category = category;
}
applydiscount(dis){
console.log(dis);
}
getpriceafterdiscount(dis){

 console.log(this.price-dis);
}
change(paddy){
 this.category=paddy;
}

} 
var product1 = new product ("biscuit","50","wheat")
console.log(product1);
 product1.applydiscount(10);
  product1.getpriceafterdiscount(10);
  product1.change("paddy");// change the category/

// script.js:27 product {name: 'biscuit', price: '50', category: 'wheat'}
// category: "paddy"
// name: "biscuit"
// price: "50"
// script.js:13 10 
// script.js:17 40


/////////////////////////////////////////////////////////////////////////


// 3. Scenario: Bank Account System
// You are designing a banking system. Each account has an account holder name, account number, and balance. You need to be able to deposit, withdraw, and check the balance of the account.
// •Question:
// How would you define a BankAccount class with properties accountHolderName, accountNumber, and balance?
// –What methods would you include to:
// •Deposit money into the account (e.g., deposit(amount) method)?
// •Withdraw money from the account (e.g., withdraw(amount) method)?
// •Check the current balance (e.g., getBalance() method)?
class BankAccount{
accountholdername;
 accountnumber;
 balance;

 constructor(accountholdername,accountnumber,balance){
 this.accountholdername = accountholdername;
this.accountnumber = accountnumber;
this.balance = balance;
 }
deposit(add){
 console.log(add);
 this.balance= this.balance+add;
 console.log(this.balance)

 }
 withdraw(sub){
 console.log(sub);
 this.balance = this.balance - sub;
 console.log(this.balance);

 }
getbalance(){
console.log(this.balance);
}
changename(update){
 this.accountholdername=update;
}
}
var union = new BankAccount("harsha","123XXXX456",0)
console.log(union);
union.deposit(500);
union.withdraw("200");
union.getbalance();
union.changename("vardhan");
console.log(union);


// script.js:35 BankAccount {accountholdername: 'harsha', accountnumber: '123XXXX456', balance: '0'}
// script.js:13 500
// script.js:15 0500
// script.js:20 200
// script.js:22 300
// script.js:26 300
// script.js:40 BankAccount {accountholdername: 'vardhan', accountnumber: '123XXXX456', balance: 300}

///////////////////////////////////////////////////////////////////////////////////


// 4. Scenario: Vehicle Management
// You are managing a fleet of vehicles. Each vehicle has a model, license plate, and mileage. You need to track the mileage whenever the vehicle is driven.
// •Question:
// How would you define a Vehicle class with properties model, licensePlate, and mileage?
// –What methods would you include to:
// •Simulate driving the vehicle (e.g., drive(miles) method, which increases the mileage)?
// •Get the current mileage of the vehicle (e.g., getMileage() method)?


class vehicle {
 model;
 licenseplate;
 mileage;

constructor(model,licenseplate,mileage){
this.model=model;
this.licenseplate=licenseplate;
 this.mileage=mileage;
 }
startdriving(mile){
 console.log(mile,"miles");
 this.mileage=mile;
 }
getmileage(){
    console.log(this.mileage)
}
}
var hero = new vehicle("2018","TS 16 UB 5539","43.4miles")
console.log(hero);
hero.startdriving(50);
hero.getmileage();
console.log(hero);


// script.js:23 vehicle {model: '2018', licenseplate: 'TS 16 UB 5539', mileage: '43.4miles'}
// script.js:12 50 'miles'
// script.js:16 50
// script.js:26 vehicle {model: '2018', licenseplate: 'TS 16 UB 5539', mileage: 50}

///////////////////////////////////////////////////////////////////////////////////////////


// 5. Scenario: Grading System
// You are creating a system for students where each student has a name and a grade for a subject. The system should allow updating the student’s grade.
// •Question:
// How would you define a Student class with properties name and grade?
// –What methods would you include to:
// •Set or update the grade for the student (e.g., setGrade(newGrade) method)?
// •Retrieve the student’s current grade (e.g., getGrade() method)?

class student{
 name;
 grade;

constructor(name,grade){
this.name=name;
 this.grade=grade;
 }
 //method
 SetGrade(update){
console.log(update);
 this.grade=update,"change the grade";
 
 }
getGrade(){
 console.log(this.grade,"updated the data");
}
}
var s1 = new student ("harsha", "B+")
console.log(s1);
s1.SetGrade("A");
s1.getGrade();
console.log(s1);

// script.js:22 student {name: 'harsha', grade: 'B+'}
// script.js:12 A
// script.js:17 A updated the data
// script.js:25 student {name: 'harsha', grade: 'A'}




