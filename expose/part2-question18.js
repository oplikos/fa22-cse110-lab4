function countSeconds(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}
setInterval(countSeconds,1000);
