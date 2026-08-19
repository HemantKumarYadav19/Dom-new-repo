setInterval(()=>{
    let date=new  Date();
    let time=date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
      process.stdout.write(`\r${time}`); 
},1000)

 