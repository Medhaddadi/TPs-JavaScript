//console.log(typeof(n))  : String
function unites(n){
  var s="";
  if(n==0){
    s=s+"zero";
  }
  if(n==1){
    s=s+"un";
  }
  if(n==2){
    s=s+"deux";
  }if(n==3){
    s=s+"trois";
  }
  if(n==4){
    s=s+"quatre";
  }
  if(n==5){
    s=s+"cinq";
  }
  if(n==6){
    s=s+"six";
  }
  if(n==7){
    s=s+"sept";
  }
  if(n==8){
    s=s+"huit";
  }
  if(n==9){
    s=s+"neuf";
  }
  return s;
}


function dizaines(n){
  var s="";
  if(n==2){
    s=s+"vingt";
  }if(n==3){
    s=s+"trent";
  }
  if(n==4){
    s=s+"quarante";
  }
  if(n==5){
    s=s+"cinquante";
  }
  if(n==6){
    s=s+"soixante";
  }

  if(n==8){
    s=s+"quatre-vingt";
  }
  // 1 et 7 et 9 sont a traiter d'une autre facon
  return s;
}

function centaines(n){
  var s="";
  if(n==1){
    s=s+"cent";
  }
  if(n==2){
    s=s+"deux-cent";
  }if(n==3){
    s=s+"trois-cent";
  }
  if(n==4){
    s=s+"quatre-cent";
  }
  if(n==5){
    s=s+"cinq-cent";
  }
  if(n==6){
    s=s+"six-cent";
  }
  if(n==7){
    s=s+"sept-cent";
  }
  if(n==8){
    s=s+"huit-cent";
  }
  if(n==9){
    s=s+"neuf-cent";
  }
  return s;
}



function conversionNum(n){
  var l = n.length;
  let arr = Array.from(n);
  var s="";
  if(l==1){
    s=s+unites(n);
  }
  if(l==2){
     if(arr[0]==1){
       var tab = {
              '11':'onze','12':'douze','13':'treize','14':'quatorze','15':'quinze','16':'seize','17':'dix-sept','18':'dix-huit','19':'dix-neuf'
        }
        if(n in tab){
          s=tab[n];
        }
      }else if(arr[0]==7){
             var tab = {
                    '70':'soixante-dix','71':'soixante-onze','72':'soixante-douze','73':'soixante-treize','74':'soixante-quatorze','75':'soixante-quinze','76':'soixante-seize','77':'soixante-dix-sept','78':'soixante-dix-huit','79':'soixante-dix-neuf'
              }
              if(n in tab){
                s=tab[n];
              }
      }else if(arr[0]==9){
                  var tab = {
                      '90':'quatre-vingt-dix ','91':'quatre-vingt-onze','92':'quatre-vingt-douze','93':'quatre-vingt-treize','94':'quatre-vingt-quatorze','95':'quatre-vingt-quinze','96':'quatre-vingt-seize','97':'quatre-vingt-dix-sept','98':'quatre-vingt-dix-huit','99':'quatre-vingt-dix-neuf'
                    }
                  if(n in tab){
                      s=tab[n];
                  }

      }else{
      s=s+dizaines(arr[0])+"-"+unites(arr[1]);
      }
  }
  if(l==3){
    if(arr[2]!=0){
      if(arr[1]==1){
        var tab = {
               '11':'onze','12':'douze','13':'treize','14':'quatorze','15':'quinze','16':'seize','17':'dix-sept','18':'dix-huit','19':'dix-neuf'
         }
         if(arr[1]+arr[2] in tab){
           s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
         }
       }else if(arr[1]==7){
              var tab = {
                     '70':'soixante-dix','71':'soixante-onze','72':'soixante-douze','73':'soixante-treize','74':'soixante-quatorze','75':'soixante-quinze','76':'soixante-seize','77':'soixante-dix-sept','78':'soixante-dix-huit','79':'soixante-dix-neuf'
               }
               if(arr[1]+arr[2] in tab){
                 s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
               }
       }else if(arr[1]==9){
                   var tab = {
                       '90':'quatre-vingt-dix ','91':'quatre-vingt-onze','92':'quatre-vingt-douze','93':'quatre-vingt-treize','94':'quatre-vingt-quatorze','95':'quatre-vingt-quinze','96':'quatre-vingt-seize','97':'quatre-vingt-dix-sept','98':'quatre-vingt-dix-huit','99':'quatre-vingt-dix-neuf'
                     }
                   if(arr[1]+arr[2] in tab){
                       s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
                   }

       }else{
       s=s+centaines(arr[0])+"-"+dizaines(arr[1])+"-"+unites(arr[2]);
       }
     }else{
       if(arr[1]==1){
         var tab = {
                '11':'onze','12':'douze','13':'treize','14':'quatorze','15':'quinze','16':'seize','17':'dix-sept','18':'dix-huit','19':'dix-neuf'
          }
          if(arr[1]+arr[2] in tab){
            s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
          }
        }else if(arr[1]==7){
               var tab = {
                      '70':'soixante-dix','71':'soixante-onze','72':'soixante-douze','73':'soixante-treize','74':'soixante-quatorze','75':'soixante-quinze','76':'soixante-seize','77':'soixante-dix-sept','78':'soixante-dix-huit','79':'soixante-dix-neuf'
                }
                if(arr[1]+arr[2] in tab){
                  s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
                }
        }else if(arr[1]==9){
                    var tab = {
                        '90':'quatre-vingt-dix ','91':'quatre-vingt-onze','92':'quatre-vingt-douze','93':'quatre-vingt-treize','94':'quatre-vingt-quatorze','95':'quatre-vingt-quinze','96':'quatre-vingt-seize','97':'quatre-vingt-dix-sept','98':'quatre-vingt-dix-huit','99':'quatre-vingt-dix-neuf'
                      }
                    if(arr[1]+arr[2] in tab){
                        s=s+centaines(arr[0])+"-"+tab[arr[1]+arr[2]];
                    }

        }else{
          s=s+centaines(arr[0])+"-"+dizaines(arr[1]);
        }
     }
  }
  return s;
}

function play(){
var n = prompt("Enter a number between 0 and 999 to convert : ");
console.log(conversionNum(n));
}
