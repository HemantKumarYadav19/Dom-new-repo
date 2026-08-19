// console.log('A');
// setTimeout(()=>{
//     console.log('B');  
// },0)
// console.log('C');

function getUserData(){
    let data={
        name:"Hemant",
        age:20,
        adress:"Parul"
    }
    setTimeout(()=>{
        console.log("User Data:",data);
        getOrder();
        
    },2000)
}

function getOrder(userId){
    let data={
        orderId:67,
        orders:["Banana,Apple,Bhindi,Aalu,Pyazzz,Daal"]
    }
    setTimeout(()=>{
        console.log("Order Details:",data);
        getPayment()
        
    },1000)
}

function getPayment(orderId){
    let data={
        status:"Success",
        amount:1000
    }
    setTimeout(()=>{
        console.log("Payment Status:",data);
        
    },1000)
}
getUserData()
