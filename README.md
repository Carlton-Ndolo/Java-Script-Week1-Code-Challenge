# Java-Script-Week1-Code-Challenge
to run script for grading

```
node grade.js
```
Here in grade.js we will use the if and else if conditionals to meet our required grade targets whereby we'll later try to test if it works for example by how we gave the value 80 and got a return grade of 'A'.This JavaScript function, `calculateGrade`, it basically grades a student's marks and assigns the respective grade.A mark that is less than zero and greater than a hundred will result in the function returning 'not existent'.For each mark that we assign, we will get the response `The student's grade is:' combined with the grade letter.

to run script for speed-detector

```

node speed-detector.js

```
This is a simple JavaScript function `checkDemeritPoints` that we will use to calcute what happens if a car exceeds the said speedlimit which is 70.
We will then take the demerit points and console log. If the checked demerit points are more than 12, the function will logs "License suspended"
If we use a value that will give us less than 12 points,like we have with our speed which is 80,  we will calculate the demerit points and log "Points: 2" because (80 - 70) / 5 = 2. Since the calculated demerit points are not greater than 12, it won't log "License suspended" but instead log the number of demerit points which is 2.


to run script for netsalarycalc

```

node netsalarycalc.js

```
A simple payroll calculator is provided by this JavaScript application. The net wage is calculated by taking the employee's gross pay as input and deducting various amounts for PAYE (Pay As You Earn), NSSF (National Social Security Fund), and NHIF (National Hospital Insurance Fund).

Setting the employee's gross salary is the first step in the program. This figure shows the employee's whole earnings before any deductions.

Based on the employee's taxable income, the `Paye()` function determines the PAYE tax. It applies matching tax rates to each tax bracket after dividing the income into separate ones.

The NHIF deduction is calculated by the {NHIF()} function using the gross salary as a basis. Various deduction amounts are assigned based on predetermined income ranges.


The NSSF contribution is calculated using the `NSSF()` function using the gross salary as a basis. It uses a set proportion of pensionable pay, with various rates according to income levels.


The taxable income is determined by deducting the NSSF and NHIF deductions from the gross salary using the {TaxableIncome()} function. The income subject to PAYE tax is represented by this amount.


Subtracting the PAYE tax from the taxable income is how the `NetSalary()` function finally determines the net salary. The amount an employee keeps after all deductions is known as their net salary.
That is what we worked on in this project.





