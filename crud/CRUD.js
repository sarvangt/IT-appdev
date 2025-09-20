//CREATE -make the array 
let arr =[10,20,30,40];
console.log("Initial Array;",arr);


//READ-print each element 
console.log("Reading elements :");
arr.forEach((val, index)=>
    console.log(index,":", val));


//UPDATE-change the second element
arr[1]=25;
console.log("After Update:",arr);

//DELETE- remove the last element
arr.pop();
console.log("After Delete:",arr);
