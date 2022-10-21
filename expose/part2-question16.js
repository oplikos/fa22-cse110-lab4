 let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(let key in statistics){
    if(key[0]=='r') {  
        //console.log(`${key}: ${statistics[key]}`); //this is nice way to do the loop 
        console.log(statistics[key]);//but this will saticfy the assigment 
    }
}