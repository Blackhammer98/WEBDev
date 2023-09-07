/*/const parent ={
    health:50,
    getHealth:function(){
        return this.health;
    },
    addHealth:function(a,b){
        this.health+=(a+b);
    }
}


const child={
    health:30,

}
parent.addHealth(10,20)

const health=parent.getHealth();
console.log(health);
//fn.call(ref,parameters)
//parent.addHealth.call(child,10,20);
//fn.apply(ref,[parameters])
parent.addHealth.apply(child,[10,20]);
const anotherHealth= parent.getHealth.call(child);
console.log(anotherHealth);




Function

function add(a,b){
    return(a+b)

}

let sum = add(10,20);
console.log(sum);/*/

//Bind() Method

/*/let runner ={
    name: "runner",
    run: function(speed,town){
        console.log(this.name +" runs at " + speed+" mph on the roads of "+town);
    }
};
let flyer={
    name:"tony",
    fly: function(speed,town){
        console.log(this.name+"flies at " + speed+"mph on the roads of"+town)
    }
};
const newRun=runner.run.bind(flyer);
newRun(20,"queens");/*/

