
let n="";
let nbPair=0;
let nbImpair=0;
let nbIteratorFaulse=0;
give();
function give(){
    let  j=0;
    while (j<7){
        let m= Number(prompt("saisir le "+(j+1)+" number : "));
        if (isExist(m))
        {
            alert("the number alredy exist ");
            nbIteratorFaulse++;
        }
        else if (m>99 || m<9){
            alert("the number out of borns ");
            nbIteratorFaulse++;
        }

        else
        {
            m%2===0?nbPair++:nbImpair++;
            n+=m+" ";
            j++;
        }
    }
    alert("the numver saisir is : "+n+"\n le nombre de pair :"+nbPair+"\n le nombre des impair :"+nbImpair);
}

function isExist(i){
    let tab=n.split(" ");
    for (const nKey of tab) {
        if (i===Number(nKey))
            return true;
    }
    return false;
}
