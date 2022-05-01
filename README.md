# findLongestSequence.js
Find the longest sequence of successive numbers in a list and return the smallest and the biggest numbers from this longuest sequence.
The list contains at least 1 item.
Example:
[1,2,3,4,6,7] => "1 4"
[1,2,3,4,5,6,7] => "1 7"
[2,4,6] => "2 2"
[0] => "0 0"

# findItemInSortedList.js
Find an item into a sorted list and return an array containing 2 items
1. A boolean that is true if the item has been found. False otherwise.
2. The index of the item found. If no item was found return -1.
Example:
list is [] and searchedItem is 1 => [ false, -1]
list is [7] and searchedItem is 7 => [ true, 0]
list is [1,3,5] and searchedItem is 4 => [ false, -1]
list is [1,3,5] and searchedItem is 5 => [ true, 2]
