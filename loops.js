function toUpper(stringArr) {
    let result =[];

    stringArr.forEach(function (str) {
        result.push(str.toUpperCase());
    });

    console.log(result);
}
   toUpper(['hello','world']);

   function arrayDouble(stringArr) {
    let result = [];
  
    stringArr.forEach(function (str) {
      result.push(str);
      result.push(str);
    });
  
    console.log(result);
  }
  arrayDouble(['bark', 'meow']);


  function arraySum(numArray) {
      let total =0;
      
   numArray.forEach(function (num) {
       total = total + num;
  });
console.log(total);
  }
  arraySum([1,2,3]);
  arraySum([5,-2,7,0]);
