
function fib(n) {

let arr = [0,1]

if (n == 0)
{
  return [0];
}

if (n == 1)
{
  return arr;
}
else
{
  for(let i=2;i<=n;i++)
  {
    arr.push(arr[i-1]+arr[i-2])
    //console.log(arr)
  }
}
return arr;

}
//fib(7)
//console.log(fib(7))
