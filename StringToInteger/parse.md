# parseInt() reloaded

## Problem Domain

- In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

## Examples

    "one" => 1
    "twenty" => 20
    "two hundred forty-six" => 246
    "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

## Additional Notes

- The minimum number is "zero" (inclusively)
- The maximum number, which must be supported is 1 million (inclusively)
- The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not

## Approach and Efficiency

- First is to set up strings that represents number and set them related to an actual integer within an object (EX: mapObj = {"one":1, "two":2})

- Next is to set two separate results for simple number structures function and complex number structures function.

- Declare the parseInt() function, and return the call both simple and complex numbers functions with the numbers set as an argument.

## [Solution](parse.js)
