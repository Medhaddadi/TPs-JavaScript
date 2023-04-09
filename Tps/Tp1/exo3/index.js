

function isPremier( n ){
    let i=Number(n);
    if (i%2!==0){
        let j=2;
        while (j<Math.sqrt(i)){
            if(i%j===0)
                return false;
            j++;
        }
        return true;
    }else
        return false;
}
function NumberPremier(n){
    console.log("les nombre premier de 0 a 100 \n");
    for (let i = 0; i < n; i++) {
        if (isPremier(i))
            console.log(i+" ");
    }
}

NumberPremier(100);