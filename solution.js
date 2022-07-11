// arr = array of numbers
function major(arr)
{
  //your code here
  let hm = new Array();
  var maxLength = 0;
  for(var i=0; i<arr.length; i++){
    hm[arr[i]]++;
    if(arr[i] > maxLength){
      maxLength=arr[i];
    }
  }
  const major = arr.length/2;
  for(var i=0; i<=maxLength; i++){
    if(hm[i] > major){
      return hm[i];
    }
  }
}
module.exports=major;
