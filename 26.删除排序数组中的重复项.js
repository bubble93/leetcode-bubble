/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let tag;
    for(let i = nums.length - 1;i >= 0 ;i--) {
        if(tag === nums[i]) {
            nums.splice(i, 1);
        }else {
            tag = nums[i]
        }
    }
};
// @lc code=end

