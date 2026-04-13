var e=`---
title: "Classes + Objects"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "ZDa-Z5JzLYM"
    title: "Python OOP Tutorial 1: Classes and Instances — Corey Schafer"
  - id: "rfscVS0vtbw"
    title: "Learn Python – Full Course for Beginners — freeCodeCamp"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is self in a Python class method?"
      options: ["A keyword that means 'this file'", "A reference to the current instance of the class", "The class itself", "A reserved variable for errors"]
      answer: 1
      explanation: "self refers to the specific object the method is being called on. It's how an instance accesses its own attributes."
    - type: multiple-choice
      question: "What is __init__ used for?"
      options: ["To destroy an object", "To run code when a module is imported", "To initialise an object's attributes when it's created", "To define a class variable"]
      answer: 2
      explanation: "__init__ is the constructor. It runs automatically when you create a new instance with ClassName()."
    - type: fill-blank
      question: "To create an instance of a class called Car, you write ___"
      answer: "Car()"
      explanation: "Calling the class name with parentheses creates a new instance and calls __init__ automatically."
---

## Phase 1 — Learn (45 min)

**Why this matters:** Classes let you model real-world things as code — a BankAccount, a User, a Product. Without classes, related data and the functions that operate on it float around separately. Classes bundle them together so your code mirrors how you think about the problem.

- **class keyword** — defines a blueprint: \`class BankAccount:\`. The class is the blueprint, instances are the actual objects created from it.
- **__init__ method** — the constructor, called automatically when you create an instance. It sets up the initial state: \`def __init__(self, owner, balance=0):\`.
- **self** — the first parameter of every instance method. It's a reference to "this specific object." Python passes it automatically — you don't include it when calling.
- **Instance attributes** — \`self.balance = balance\` stores data on the specific instance. Each object has its own copy.
- **Instance methods** — regular functions inside a class that take \`self\`. They can read and modify the instance's attributes.
- **Creating instances** — \`acc = BankAccount("Alice", 1000)\`. This calls \`__init__\` with \`owner="Alice"\` and \`balance=1000\`.
- **Accessing attributes** — \`acc.balance\` reads the balance. \`acc.deposit(200)\` calls the method.

> **Key insight:** A class is a template. An instance is the real thing built from that template. You can have 100 different \`BankAccount\` objects, each with their own owner and balance, all using the same class code.

## Phase 2 — Do (45 min)

- Build a \`BankAccount\` class with:
  - \`__init__(self, owner, balance=0)\` — sets up owner and balance
  - \`deposit(self, amount)\` — adds to balance, prints confirmation
  - \`withdraw(self, amount)\` — subtracts from balance if sufficient funds, otherwise prints "Insufficient funds"
  - \`get_balance(self)\` — returns the current balance
- Create 2 different instances with different owners and test all methods on both
- Try to withdraw more than the balance — confirm the guard works

## Review

What is the difference between a class and an instance? If you have a \`Dog\` class, are two different Dog objects the same object? How do you verify?
`;export{e as default};