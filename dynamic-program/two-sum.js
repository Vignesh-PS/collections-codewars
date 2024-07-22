// https://leetcode.com/problems/two-sum/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let matched = [];
    nums.forEach((num, ind) => {
        const indOne = ind;
        const targetNum = target - num;

        const existNums = [...nums];
        existNums.splice(indOne, 1);
        const isResExist = existNums.indexOf(targetNum);
        if(isResExist != -1){
            matched = [indOne, isResExist];
        }
    });

    return matched.sort((a, b) => a-b);
};


const output = twoSum([1, 2, 0, 0], 0)

console.log('output :>> ', output);
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]