const repeatHello = (callBack) => {
    let id = setInterval(callBack, 1000);
    setTimeout(() => clearInterval(id), 1000);
}
     repeatHello(() => console.log("Hello"), 1000);
   