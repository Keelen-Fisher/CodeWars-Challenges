# Find The Parity Outlier

## Problem Domain

- You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

## Examples

    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)

## Approach and Efficiency

- Set new empty arrays for both even and odd numbers then loop through the ***integers array*** to test for even numbers and odd numbers.

- Push the values of the even numbers to the even array, and the odd values to the odd array.

- Test the size of both the length of the even array and the odd array that returns the odd number if the length of the even array is greater than the odd array. If not, return the value of the even array at element 0.

## Solution (With the help from [link](https://stackoverflow.com/questions/35657137/the-integers-in-the-array-are-either-entirely-odd-or-entirely-even-except-for-a)) to the [problem](parity.js)
