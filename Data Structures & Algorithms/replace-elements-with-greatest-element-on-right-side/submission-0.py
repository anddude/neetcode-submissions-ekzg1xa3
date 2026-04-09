class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        
        for i in range(len(arr)):
            greatest_num = -1
            if i == len(arr) - 1:
                arr[i] = -1
                return arr
            for j in range(i + 1, len(arr)):
                if arr[j] > greatest_num:
                    greatest_num = arr[j]
            arr[i] = greatest_num