function findItem(lst, searchedItem)
{
  const nbItems = lst.length;
  if (nbItems == 0
    || searchedItem < lst[0]
    || searchedItem > lst[nbItems-1])
    return [false, -1];

  return searchItem(0, nbItems-1);

  function searchItem(minIndex, maxIndex)
  {
    while(maxIndex - minIndex > 1)
    {
      const midIndex = reduceRange();
      if (lst[midIndex] === searchedItem)
        return [true, midIndex];
    }

    if (lst[minIndex] === searchedItem)
      return [true, minIndex];

    if (lst[maxIndex] === searchedItem)
      return [true, maxIndex];

    return [false, -1];

    function reduceRange()
    {
      const midIndex = Math.floor((minIndex + maxIndex) / 2);
      if (searchedItem < lst[midIndex])
        maxIndex = midIndex;
      else
        minIndex = midIndex;
      return midIndex;
    }
  }
}

let sortedItems = [1, 7, 9];
console.log(findItem(sortedItems, 1));