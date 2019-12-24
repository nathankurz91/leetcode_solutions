# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#
# Dev: Nathan Kurz
# Dev: Jaiklen - https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/458988/Simplest-python-solution

# I'm not great with python so I looked up how someone else did it to get a sense of how python works.
# It looks like we are defining a function that will take a ListNode and return an int value
# We create a string from the values in our list and return the integer representation using int()

class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        s = ""
        while (head != None):
            s = s + str(head.val)
            head = head.next
        return int(s, 2) # the two specifies that the string is binary