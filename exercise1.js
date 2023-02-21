let people = ["Greg", "Mary", "Devon", "James"];
for (let i=0; i<people.length; i++){             //1.
    console.log(people[i]);
}

people.forEach(function (data) {                 //2.
    console.log(data)
});

people.shift();                                  //3

people.pop();                                    //4

people.unshift("Matt");                          //5

people.push("BERLIN");      //6

let y=0;                                         //7
switch(y<people.length){
    case people[y]!=="Mary":
        console.log(people[y]);
        break;
    case people[y]=="Mary":
        break;
}

let copy = people.slice(1,4);                    //8
console.log(copy);

people.splice(2,1, "Elizabeth", "Artie");        //9

let withBob = ["Bob"];                           //10
let result = people.concat(withBob);
console.log(result);