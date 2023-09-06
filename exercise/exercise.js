const repeatHello = (callBack) => {
    let id = setInterval(callBack, 1000);
    setTimeout(() => clearInterval(id),);
}
     repeatHello(() => console.log("Hello"), 1000);
   