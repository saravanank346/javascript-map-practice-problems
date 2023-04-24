
// 1st problem
arr=[3,5,6,7]
 const result=arr.map(x=>x*2)// arr=[3,5,6,7]
 //  const result=arr.map(x=>x*2)
 //  console.log(result)
 
 console.log(result)

//  2nd problem
 let names =[
    {
        val:"saravanan"
    
    },
    {
        val:"gokul"
    }

 ]
  result1=names.map(x=>(x.val).toUpperCase())
  console.log(result1)

  //3rd problem

  arr=["apple","mango","apple","mango","jackfruit"]
  let obj = []
  arr.map(x=>{
    if(x in obj){
        return obj[x]+=1;
    }
    else{
        return obj[x]=1;
    }
  }
    )
 console.log(obj)


 //4th 
 
 arr="saravanan"
 splitt=arr.split("")
 obj=[]
 splitt.map(x=>{
  if(x in obj){
    obj[x]+=1
  }
  else{
    obj[x]=1
  }
 })

 console.log(obj)

 //5.Write a function that takes an array of objects with a category property and returns anobject where the keys are the categories, and the values are arrays of objects with that category//

 arr=[
  {
    name:"saravanan",
    age:25,
    subject:"maths"
    
  },
  {
    name:"vignesu",
    age:21,
    subject:"tamil"
    
  },
  {
    name:"ragul",
    age:25,
    subject:"maths"
    
  },
  {
    name:"kishore",
    age:22,
    subject:"tamil"
    
  }
 ]

 console.log(arr.filter(x=>x.age==25))


 
