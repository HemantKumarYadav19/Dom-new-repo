let s1="abc de";
let s2="edb  ca";

let a1=s1.replaceAll(" ","").split('').sort();
let a2=s2.replaceAll(" ",'').split('').sort();

if(a1.join('')===a2.join('')){
   console.log(true);
   
}else{
    console.log(false);
    
}

s=s1.split('');
console.log(s);

