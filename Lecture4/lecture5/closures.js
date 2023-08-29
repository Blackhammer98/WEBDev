function grandfather(){
    let a=5;

    function parent(){
        let b =6;

        function child(){
            let c = 7;
            return a+b+c;
        }
        return child;

    }
    return parent;

}
let parent=grandfather();
let child=parent();
let ans=child();
console.log(ans);