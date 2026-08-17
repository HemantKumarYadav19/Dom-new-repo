setInterval(()=>{
    let date=new  Date();
    let time=date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
     console.log(time); 
},1000)