// Previously considered sorting algorithms are comparison-based algorithms
// Radix sort is not
// It works with only numbers (or string / images represented as binary numbers)
// It exploits the fact that the size of number is encoded in the number of digits.

// It groups numbers based on their individual digits, starting from the least significant digit to the most significant digit.

// 1, 23, 456, 7, 11, 0

// 1. Comparing the least significant digit (rightmost digit) of each number.
//       11
//  0    1        23            456    7      
//  0    1    2    3    4    5    6    7    8    9

// 0, 1, 11, 23, 456, 7

// 2. Comparing the 2nd least significant digit (from right to left) of each number.
//  7
//  1
//  0   11        23        456
//  0    1    2    3    4    5    6    7    8    9

// 0, 1, 7, 11, 23, 456

// 3. Comparing the 3rd least significant digit (from right to left) of each number.
// 23
// 11
//  7
//  1
//  0                   456   
//  0    1    2    3    4    5    6    7    8    9

// 0, 1, 7, 11, 23, 456