/*
=====================================
SLIDING WINDOW - FROM ZERO TO HERO
=====================================

Don't worry! Sliding window is confusing at first.
Let me explain it like you're 5 years old, then we'll build up!

=====================================
PART 1: THE BASIC IDEA (ELI5)
=====================================

Imagine you're looking through a WINDOW at houses on a street.

Houses: [1, 2, 3, 4, 5, 6, 7]
        ─────
Window:  │3│  (size k=3, you can see 3 houses)

The window can SLIDE to the right:

Step 1: [1, 2, 3, 4, 5, 6, 7]
         ─────
         │1,2,3│  Sum = 6

Step 2: [1, 2, 3, 4, 5, 6, 7]
            ─────
            │2,3,4│  Sum = 9

Step 3: [1, 2, 3, 4, 5, 6, 7]
               ─────
               │3,4,5│  Sum = 12

SLIDING means:
- Remove the LEFT element (that's leaving the window)
- Add the RIGHT element (that's entering the window)

=====================================
PROBLEM 1: MAXIMUM SUM OF K ELEMENTS
=====================================

Problem: Find the maximum sum of any k consecutive elements.

Example:
arr = [1, 2, 3, 4, 5]
k = 3

Find max sum of 3 consecutive elements.

BRUTE FORCE (The Hard Way):
*/

function maxSumBruteForce(arr, k) {
    let maxSum = -Infinity;
    
    // Try every possible window
    for(let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        // Calculate sum of this window
        for(let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
}

/*
TRACE BRUTE FORCE:
arr = [1, 2, 3, 4, 5], k = 3

i=0: sum(1,2,3) = 6
i=1: sum(2,3,4) = 9
i=2: sum(3,4,5) = 12  ← Maximum!

Answer: 12 ✅

BUT: Time O(n*k) - Too slow!
We're recalculating the sum each time!

=====================================
SLIDING WINDOW (The Smart Way):
=====================================

KEY INSIGHT:
When window slides from [1,2,3] to [2,3,4]:
- Don't recalculate everything!
- Just remove 1 and add 4!

New sum = Old sum - element leaving + element entering
        = 6 - 1 + 4 = 9

This is MUCH faster!
*/

function maxSumSlidingWindow(arr, k) {
    
    // STEP 1: Calculate sum of FIRST window
    let windowSum = 0;
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    
    // STEP 2: Slide the window
    for(let i = k; i < arr.length; i++) {
        // Remove element leaving window (leftmost)
        windowSum -= arr[i - k];
        
        // Add element entering window (rightmost)
        windowSum += arr[i];
        
        // Update max
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

/*
DETAILED TRACE:
arr = [1, 2, 3, 4, 5], k = 3

STEP 1: Calculate first window
windowSum = 1 + 2 + 3 = 6
maxSum = 6

Window: [1, 2, 3] 4, 5
         ─────
         
STEP 2: Slide window
i=3 (element 4 entering):
  Remove arr[3-3] = arr[0] = 1  (leaving)
  Add arr[3] = 4  (entering)
  windowSum = 6 - 1 + 4 = 9
  maxSum = max(6, 9) = 9
  
  Window: 1, [2, 3, 4] 5
             ─────

i=4 (element 5 entering):
  Remove arr[4-3] = arr[1] = 2  (leaving)
  Add arr[4] = 5  (entering)
  windowSum = 9 - 2 + 5 = 12
  maxSum = max(9, 12) = 12
  
  Window: 1, 2, [3, 4, 5]
                ─────

Final: maxSum = 12 ✅

Time: O(n) - Much faster! ✅
*/

/*
=====================================
VISUAL STEP-BY-STEP
=====================================

Array: [1, 2, 3, 4, 5], k=3

Initial Window (Step 1):
┌───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │
└───┴───┴───┴───┴───┘
 └─────────┘
  sum = 6

Slide Right (Step 2):
Remove 1, Add 4
┌───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │
└───┴───┴───┴───┴───┘
 ❌   └─────────┘ ✅
     sum = 6-1+4 = 9

Slide Right (Step 3):
Remove 2, Add 5
┌───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │
└───┴───┴───┴───┴───┘
     ❌   └─────────┘ ✅
         sum = 9-2+5 = 12

=====================================
THE PATTERN - FIXED WINDOW
=====================================

STEPS:
1. Calculate sum/result of FIRST window (size k)
2. For remaining elements:
   - Remove element leaving (at i-k)
   - Add element entering (at i)
   - Update result

CODE TEMPLATE:
*/

function fixedWindowTemplate(arr, k) {
    // Step 1: First window
    let windowValue = 0;
    for(let i = 0; i < k; i++) {
        windowValue += arr[i];  // Or whatever operation
    }
    
    let result = windowValue;
    
    // Step 2: Slide window
    for(let i = k; i < arr.length; i++) {
        windowValue -= arr[i - k];  // Remove leaving
        windowValue += arr[i];       // Add entering
        result = Math.max(result, windowValue);  // Update result
    }
    
    return result;
}

/*
=====================================
PROBLEM 2: MINIMUM SUM OF K ELEMENTS
=====================================

Same logic, just find minimum instead of maximum!
*/

function minSumSlidingWindow(arr, k) {
    
    // First window
    let windowSum = 0;
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let minSum = windowSum;
    
    // Slide window
    for(let i = k; i < arr.length; i++) {
        windowSum -= arr[i - k];  // Remove
        windowSum += arr[i];       // Add
        minSum = Math.min(minSum, windowSum);  // Find min
    }
    
    return minSum;
}

/*
Example:
arr = [5, 2, 1, 8, 3], k = 3

Window 1: [5,2,1] = 8
Window 2: [2,1,8] = 11
Window 3: [1,8,3] = 12

Minimum: 8 ✅
*/

/*
=====================================
PROBLEM 3: AVERAGE OF K ELEMENTS
=====================================
*/

function averageOfSubarray(arr, k) {
    
    const result = [];
    let windowSum = 0;
    
    // First window
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    result.push(windowSum / k);
    
    // Slide window
    for(let i = k; i < arr.length; i++) {
        windowSum -= arr[i - k];
        windowSum += arr[i];
        result.push(windowSum / k);
    }
    
    return result;
}

/*
Example:
arr = [1, 3, 2, 6, -1, 4], k = 3

Window 1: [1,3,2] → avg = 6/3 = 2
Window 2: [3,2,6] → avg = 11/3 = 3.67
Window 3: [2,6,-1] → avg = 7/3 = 2.33
Window 4: [6,-1,4] → avg = 9/3 = 3

Result: [2, 3.67, 2.33, 3] ✅
*/

/*
=====================================
JAVA VERSION - MAXIMUM SUM
=====================================
*/

/*
class Solution {
    public int maxSum(int[] arr, int k) {
        
        // Step 1: First window
        int windowSum = 0;
        for(int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        
        int maxSum = windowSum;
        
        // Step 2: Slide window
        for(int i = k; i < arr.length; i++) {
            windowSum -= arr[i - k];  // Remove
            windowSum += arr[i];       // Add
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
}
*/

/*
=====================================
WHY IS IT CALLED "SLIDING WINDOW"?
=====================================

Think of a physical window sliding along a wall:

Wall (Array):  [1, 2, 3, 4, 5, 6]
               
Step 1:        [═══]              Window sees 1,2,3
Step 2:           [═══]           Window sees 2,3,4
Step 3:              [═══]        Window sees 3,4,5
Step 4:                 [═══]     Window sees 4,5,6

The window "slides" to the right!
- Size stays same (k elements)
- Moves one position at a time
- Old element leaves, new element enters

=====================================
KEY INSIGHTS
=====================================

1. FIXED WINDOW SIZE (k elements)
   - Window size never changes
   - Always contains exactly k elements

2. EFFICIENCY
   - Don't recalculate from scratch
   - Remove old, add new (constant time!)
   - O(n) instead of O(n*k)

3. TWO PARTS
   - Part 1: Calculate first window
   - Part 2: Slide and update

4. THE FORMULA
   new_value = old_value - leaving + entering

=====================================
COMMON MISTAKES
=====================================

❌ MISTAKE 1: Recalculating entire sum each time
for each window:
    sum = 0
    for element in window:
        sum += element
This is O(n*k) - TOO SLOW!

✅ CORRECT: Update incrementally
windowSum -= arr[i-k]  // Remove old
windowSum += arr[i]     // Add new

❌ MISTAKE 2: Wrong loop range
for(let i = 0; i < arr.length; i++)  // Wrong!
Should start from k:
for(let i = k; i < arr.length; i++)  // Correct!

❌ MISTAKE 3: Forgetting to initialize first window
Must calculate first k elements before sliding!

=====================================
PRACTICE PROBLEMS
=====================================
*/

// Problem 1: Max sum of k elements
console.log("Problem 1:");
console.log(maxSumSlidingWindow([1,2,3,4,5], 3));  // 12

// Problem 2: Min sum of k elements
console.log("\nProblem 2:");
console.log(minSumSlidingWindow([5,2,1,8,3], 3));  // 8

// Problem 3: Average of k elements
console.log("\nProblem 3:");
console.log(averageOfSubarray([1,3,2,6,-1,4], 3));
// [2, 3.67, 2.33, 3]

/*
=====================================
STEP-BY-STEP CHECKLIST
=====================================

When solving sliding window problems:

□ Identify window size k
□ Calculate first window (loop 0 to k-1)
□ Store initial result
□ Loop from k to end of array
□ For each step:
  □ Remove element at (i-k) - leaving window
  □ Add element at (i) - entering window
  □ Update result
□ Return result

=====================================
THE MENTAL MODEL
=====================================

Think of it like a train:

Train (Window): [🚂][🚃][🚃]
Track (Array):  1  2  3  4  5

Move forward:
- Last car (🚃) falls off back
- New car added to front
- Train always has 3 cars (k=3)

Step 1: [1][2][3]  4  5
Step 2:  1 [2][3][4] 5
Step 3:  1  2 [3][4][5]

=====================================
SUMMARY
=====================================

WHAT: Move a fixed-size window across an array
WHY: Avoid recalculating everything each time
HOW: Remove old element, add new element

FORMULA:
new_sum = old_sum - element_leaving + element_entering

TIME: O(n) - Visit each element once
SPACE: O(1) - Only store window sum

TWO STEPS:
1. Calculate first window (0 to k-1)
2. Slide window (k to n-1)
   - Remove arr[i-k]
   - Add arr[i]
   - Update result

WHEN TO USE:
- Fixed window size problems
- Maximum/minimum/average of k elements
- Subarray problems with fixed length

You got this! Practice with the problems above! 💪
*/