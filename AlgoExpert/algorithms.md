### Arrays 

#### [Two Number Sum](https://www.algoexpert.io/questions/two-number-sum)

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

Note that the target sum has to be obtained by summming two different integers in the array; you can't add a single integer to itself in order to obtain the target sum. 

You can assume that there will be at most one pair of number summing up to the target sum. 

**Solution** : 
```
function twoNumberSum(array, targetSum) {
  const seen = {};

  for (const num of array) {
    const complement = targetSum - num; 

    if (complement in seen) {
      return [num, complement];
    } else {
      seen[num] = true;
    }
  }
    return [];
}
```

#### [Validate Subsequence](https://www.algoexpert.io/questions/validate-subsequence)

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. 

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers ``` [1, 3, 4] ``` form a subsequence of the array ``` [1, 2, 3, 4] ``` and so do the numbers ``` [2, 4] ```. Note that a single number in an array and the array itself are both valid subsequences of the array. 

**Solution :**
```
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0; 
  let sequenceIndex = 0; 

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }  
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}
```

#### [Sorted Squared Array](https://www.algoexpert.io/questions/sorted-squared-array)

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

**Solution : **
```
function sortedSquaredArray(array) {
  const squaredArray = array.map(num => num * num);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}
```

_14 Aug 2023_

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robing, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition, there's always one winnger and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is th team that receives the most amount of points. 

Given an array of pairs representing teams that have competed against ech other, and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. The `results` array contains information about the winner of each corresponding competition in the `competitions` array. Specifically, `results[i]` denotes the winner of `competitions[i]`, where a 1 in the `results` array means that the home team in the corresponding competition won and a 0 means that the team won. 

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will aways have at least two teams. 

**Sample Input : **

```
competitions = [
["HTML", "C#"],
["C#", "Python"],
["Python","HTML"],
]
results = [0, 0, 1]
```

**Solution : **
```
function tournamentWinner(competitions, results) {
  const teamPoints = {};

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winner = results[i] === 1 ? homeTeam : awayTeam; 

    if (!teamPoints[winner]) {
      teamPoints[winner] = 0; 
    }

    teamPoints[winner] += 3;
  }
  
  let winnerTeam = '';
  let maxPoints = 0; 

  for (let team in teamPoints) {
    if (teamPoints[team] > maxPoints) {
    maxPoints = teamPoints[team];
    winnerTeam = team;
  }
}
  return winnerTeam;
}
```