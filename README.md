# Sum N' Average
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Create a program that takes in an operation to perform ("sum" or "avg"), and a set of numbers as arguments. The program should print out the result of the calculation to the terminal.

- **work in `solution.js`**

## Constraints:

- The first argument can only either be the string `"sum"` or the string `"avg"`. In case it is not, the program should exit and print a message to the user (see examples below).

- Any following arguments must be numbers. In case one of the is not a number, the program should exit and print a message to the user (see examples below).

## Examples:

### 1. Calculating the sum

```bash
$ node solution.js sum 1 2 3 4
> 10
```

### 2. Calculating the average

```bash
$ node solution.js avg 1 2 3 4
> 2.5
```

### 3. Wrong operation name

```bash
$ node solution.js oops 1 2 3 4
> 'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
```

### 4. Wrong type

```bash
$ node solution.js sum 1 hello 3 4
> "Sorry, the argument 'hello' is not a number, please try again"
```

## Bonus:

Add support for an additional operation, `"med"`, which calculates the [**_Median_**](https://en.wikipedia.org/wiki/Median) number in the set. To calculate the median you will have to follow the steps below:

1. Sort the set of numbers
2. Get the index of the middle number by dividing the last index of the set by two: `<last index> / 2`
3. If the resulting index is a whole number (e.g. 7) then the median of the set is the value in that index.
4. Otherwise (if the number is a fraction, e.g. 7.5) then the median is calculated by adding the two values in the indexes around it (for 7.5 it would be 7, and 8) and dividing them by two.

**_Example (a)_**: For the set 4 ,7, 8, 11, 24 the median index would be 2 (last index: 4, 4 / 2 = 2) and the median value is 8 (the number at position 2).

**_Example (b)_**: For the set 1, 12, 15, 21 the median index would be 1.5 (last index: 3, 3 / 2 = 1.5) and the median value would be 13.5 (the number at position 1: **12** + the number at position 2: **15** = **27**, 27 / 2 = 13.5).

### Examples

#### Odd amount of numbers

```bash
$ node solution.js med 1 2 5 6 12
> 5
```

#### Even amount of numbers

```bash
$ node solution.js med 1 2 3 4 5 6
> 3.5
```

#### Unsorted set

```bash
$ node solution.js med 1 2 12 13 5 6
> 5.5
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Calculating the sum

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | program outputs sum when passed 'sum' and number arguments |

### 2. Calculating the average

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | program outputs average when passed 'avg' and number arguments |

### 3. Wrong operation name

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | program outputs warning when passed non-existent operation name |

### 4. Wrong type

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | program outputs warning when passed a non-number as subsequent argument |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Node-process-sum-n-average)


[//]: # (autograding info end)