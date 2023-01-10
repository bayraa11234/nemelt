
let n = 10;
let t;
function baba(){
for(let i = 0; i<=n ; i++){
    console.log(i);
}
}

baba();

function niilber(){
    let g = 0;
    let h = 10
    for(let i = 0;i<=h; i++){
        g+=i
    }console.log(g);
}
niilber();
document.querySelector("#target").innerHTML = niilber();
const del = document.getElementById("target");
del.innerHTML = niilber();




