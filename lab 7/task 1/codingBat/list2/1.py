def count_evens(nums):
  count = 0
  for i in nums:
    count -= i%2 - 1
  return count
