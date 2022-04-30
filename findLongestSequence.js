const myList = [1,2,3,4,6,7,8,9];
//const myList = [1];

function solveFunctionalWay(lst)
{
  const reduceResult = lst.reduce((prev, curr, currentIndex) => {
    if (0 === currentIndex)
      return { lst: prev.lst, min: curr, max: curr };
  
    if (prev.max + 1 === curr)
      return { lst: prev.lst, min: prev.min, max: curr };
  
    if (prev.lst.length === 0 || prev.max - prev.min > prev.lst[0].max - prev.lst[0].min)
      return { lst: [{ min: prev.min, max: prev.max }], min: curr, max: curr};
  
    return { lst: prev.list, min: curr, max: curr };
  }, { lst:[], min: 0, max: 0});

  if (reduceResult.lst.length === 0 || reduceResult.max - reduceResult.min > reduceResult.lst[0].max - reduceResult.lst[0].min)
    return `${reduceResult.min} ${reduceResult.max}`;

  return `${reduceResult.lst[0].min} ${reduceResult.lst[0].max}`;
}

function solveIterativeWay(lst)
{
  let min = 0;
  let nbSequence = 0;
  let maxNbSequence = 0;
  let bestMinValue = 0;
  for (let i = 0; i < lst.length; ++i) {
    if (i === 0 || lst[i-1]+1 !== lst[i])
    {
      updateBestPosition();
      min = lst[i];
      nbSequence = 1;
    }
    else
    {
      ++nbSequence;
    }
  }
  
  updateBestPosition();
  
  return `${bestMinValue} ${bestMinValue + maxNbSequence - 1}`;

  function updateBestPosition()
  {
    if (nbSequence > maxNbSequence)
    {
      bestMinValue = min;
      maxNbSequence = nbSequence;
    }
  }
}

console.log(solveFunctionalWay(myList));
console.log(solveIterativeWay(myList));