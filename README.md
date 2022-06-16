1 - Non-Constructible Change
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

Sample Input
  coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
 20
Test Case 1
{
  "coins": [5, 7, 1, 1, 2, 3, 22]
}
Output
20
Test Case 2
{
  "coins": [1, 1, 1, 1, 1]
}
Output
6
Test Case 3
{
   "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]
}
Output
55
