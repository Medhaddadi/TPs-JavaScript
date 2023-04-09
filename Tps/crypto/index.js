let  lettres="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function  crypter(messagecrepter){

    let texts=[];
    messagecrepter=messagecrepter.toUpperCase();

    for (let i = 0; i < 26; i++) {
        let text="";
        for (const l of messagecrepter) {


            let index=lettres.indexOf(l);
            let newindex=(index+(26-i))%26;
            text+=lettres[newindex];

        }
        texts.push(text);
    }
    for (let i = 0; i < texts.length; i++) {
        console.log("index :"+i+" la valeur :"+texts[i]);
    }
}
function crypter1(message){
    message=message.toUpperCase();
    let messageClair="";
    for (const key of message) {
        messageClair+=lettres[(lettres.indexOf(key)+16)%26];
    }
    return messageClair;
}
console.log(crypter1("SVOXFYIKNKXCVKVSQEBSOKMRODOBNOCCYVNKDC"));


function hill(message){
    let key=[
        [1,2,3,0],
        [2,0,1,0],
        [3,1,2,0],
        [0,0,0,1]
    ]
    message=message.toUpperCase();

}