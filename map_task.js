
// // 1st problem
// arr=[3,5,6,7]
//  const result=arr.map(x=>x*2)// arr=[3,5,6,7]
//  //  const result=arr.map(x=>x*2)
//  //  console.log(result)
 
//  console.log(result)

// //  2nd problem
//  let names =[
//     {
//         val:"saravanan"
    
//     },
//     {
//         val:"gokul"
//     }

//  ]
//   result1=names.map(x=>(x.val).toUpperCase())
//   console.log(result1)

  //3rd problem

//   arr=["apple","mango","apple","mango","jackfruit"]
//   let obj = []
//   arr.map(x=>{
//     if(x in obj){
//         return obj[x]+=1;
//     }
//     else{
//         return obj[x]=1;
//     }
//   }
//     )
//  console.log(obj)


 //4th 
 
//  arr="saravanan"
//  splitt=arr.split("")
//  obj=[]
//  splitt.map(x=>{
//   if(x in obj){
//     obj[x]+=1
//   }
//   else{
//     obj[x]=1
//   }
//  })

//  console.log(obj)

//  //5.Write a function that takes an array of objects with a category property and returns anobject where the keys are the categories, and the values are arrays of objects with that category//

//  arr=[
//   {
//     name:"saravanan",
//     age:25,
//     subject:"maths"
    
//   },
//   {
//     name:"vignesu",
//     age:21,
//     subject:"tamil"
    
//   },
//   {
//     name:"ragul",
//     age:25,
//     subject:"maths"
    
//   },
//   {
//     name:"kishore",
//     age:22,
//     subject:"tamil"
    
//   }
//  ]
//  console.log(arr.filter(x=>x.age==25))

//6.Write a function that takes an array of strings and returns a new array with only the unique strings. Use the Map object to accomplish this.

// arr=["saravanan","vignesh","gokul","ragul","kishore","gokul"]
// let obj=[]
// let result=arr.map(x=>{
//   if (!(obj.includes(x))){
//     obj.push(x)
//   }
// })
// console.log(obj)


// 8.Write a function that takes an array of objects with a name and age property and returns
//an object where the keys are the age and the values are arrays of objects with that age.
//Use the Map object to accomplish this.


let info=[
  {
    name:"saravanan",
    age:20
  },
  {
    name:"ragul",
    age:21
  },
  {
    name:"gokul",
    age:20
  },
  {
    name:"arun",
    age:22
  },
]

object={}
result=info.map(x=>{
  if(!(x.age in object)){
    object[x.age]=[]
  }
    object[x.age].push(x)
})

console.log(object)



// 9.Write a function that takes an array of strings and returns an object where the keys are
//the strings sorted alphabetically and the values are arrays of the original strings that are
//anagrams of each other. Use the Map object to accomplish this.

arr =["cat","act","madam","tea","ate"]
obj=[]
arr.map(x=>{
  splitt=x.split("").sort().join();
  console.log(splitt)
  
  if(!(obj[splitt])){
    obj[splitt]=[]
  }

    obj[splitt].push(x)
  

  
   
})
console.log(obj)



//10. Write a function that takes an array of objects with a date property and returns an object
//where the keys are the year and the values are arrays of objects with that year. Use the
//Map object to accomplish this.




 
