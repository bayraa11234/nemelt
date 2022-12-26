

function pyramid(rowLenght){
    let result ='';
    for(let i = 1;i<=rowLenght;i++){
        for(let j = 0; j<=rowLenght-i; j++){
            result +=' ';   
        }
        for (let j = 0; j < i; j++) {
            result += ' *';
        }
        result+='\n';
    }
    console.log(result);
}
pyramid(10);

function gurvaljin(rowLenght){
let result = '';
for( let i = 0; i<=rowLenght;i++ ){
    for(let j =0; j<=rowLenght-i;j++){
        result+=' ';
    }
    for(let j = 0;j<i;j++){
        result+=' *';
    }
    result+='\n';
}console.log(result);
}gurvaljin(10);

function dorviljin(rowLenght){
    let result = '';
    for(let i = 0; i<=rowLenght; i++){
        for(let d = 0; d<=rowLenght-i; d++){
            result+=' *';
        }
        for( let d = 0;d < i; d++){
            result+=' *';
        }
        result+='\n';
    }console.log(result);
}dorviljin(10);

let r = 10;
let s = '';
for(let i=0; i<=r; i++){
    for(let j = 0; j<=r-i;j++){
        s+=' -';
    }
    for(let j = 0; j<=i;j++){
        s+=' *';
    }
    s+='\n';
}console.log(s);

let A = 20;
let G = 1;
let I = 1;
while (I<=A) {
    G=G*I;
    I++;
} console.log(G);
