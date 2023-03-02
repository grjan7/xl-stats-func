# xl-stats-func

A library of statistical functions to perform statistical analysis on the data.

## Summary 

| Functions                                                                                            ||
|:-------------------------|:---------------------------------------------------------------------------|
| number                   | [**avg()**](#avg)                                                          |
|                          | Returns the average (arithmetic mean) of the arguments.                    |
| number                   | [**correl()**](#correl)                                                    |
|                          | Returns the correlation coefficient between the two arrays of numbers.     |
| number                   | [**count()**](#count)                                                      |
|                          | Returns the total count of the item specified in an array.                 |
| number                   | [**countArr()**](#countArr)                                                |
|                          | Returns the total count of each item in an array.                          |
| number                   | [**covariance()**](#covariance)                                            |
|                          | Returns population covariance, the average of the products of deviations for each data point pair in two data sets.                                                              |
| number                   | [**devSq()**](#devSq)                                                      |
|                          | Returns the sum of squares of deviations of data points from their sample mean.                                                                                                   |
| number                   | [**forecast()**](#forecast)                                                |
|                          | Calculates, or predicts, a future value by using existing values.          |
| number                   | [**frequencyN()**](#frequencyN)                                            |
|                          | Calculates how often values occur within a population, and then returns a vertical array of numbers.                                                                              |
| number                   | [**frequencyS()**](#frequencyS)                                            |
|                          | Calculates how often values occur within a sample values, and then returns a vertical array of numbers.                                                                            |
| number                   | [**intercept()**](#intercept)                                              |
|                          | Calculates the point at which a line will intersect the y-axis by using existing x-values and y-values.                                                                         |
| number                   | [**large()**](#large)                                                      |
|                          | Returns the k-th largest value in a data set.                              |
| number                   | [**max()**](#max)                                                          |
|                          | Returns the largest value in a set of values.                              |
| number                   | [**median()**](#median)                                                    |
|                          | Returns the median of the given numbers.                                   |
| number                   | [**min()**](#min)                                                          |
|                          | Returns the smallest value from the given numbers.                         |
| number                   | [**mode()**](#mode)                                                        |
|                          | Returns the mode of the given numbers.                                     |
| number                   | [**rankAvg()**](#rankAvg)                                                  |
|                          | Returns the rank of a number in a list of numbers.                         |
| number                   | [**rankEq()**](#rankEq)                                                    |
|                          | Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned.       |
| number                   | [**slope()**](#slope)                                                      |
|                          | Returns the slope of the linear regression line through data points in known_y's and known_x's.                                                                                |
| number                   | [**small()**](#small)                                                      |
|                          | Returns the k-th smallest value in a data set.                             |
| number                   | [**stdDev()**](#stdDev)                                                    |
|                          | Returns the standard deviation of an array of numbers.                     |
| number                   | [**sum()**](#sum)                                                          |
|                          | Returns the sum of arguments or an an array of numbers.                    |
| number                   | [**varP()**](#varP)                                                        |
|                          | Calculates variance based on the entire population.                        |
|                                                                                                      ||
          
## avg(...args: number | number[]): number

## correl(...args: number[]): number

## count(arr: string[] | number[], item: string|number): number

## countArr(arr: string[] | number[]): object

## covariance(arrX: number[], arrY: number[]): number

## devSq(...args: number | number[]): number

## forecast(arrX: number[], arrY: number[]): number

## frequencyN()

## frequencyS()

## intercept()

## large()

## max()

## median()

## min()

## mode()

## rankAvg()

## rankEq()

## slope()

## small()

## stdDev()

## sum()

## varP()