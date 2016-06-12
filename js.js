//By https://github.com/EvilKit 
$(document).ready(function(){
    //------------------------переменные--------------
    var paym=20;
    var pays=20;
    var payb=20;
    var c=0;//score
    var damage=10;//урон от клика
    var intervalCounterSw=1000;//счетчик для меча
    var intervalCounterBw=750;//Счетчик для лука
    var health=100;//здоровье противника
    var gold=0;//золото
    function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var mprice=20;//цена клика
    var sprice=20;//цена меча
    var bprice=20;//цена лука
    //-------------------------логика-----------------
    $('#enemy').click(function on(){
    c++;//counter
    
    health=health-damage ;
         console.log();
        if(health<=0){//kill enemy
            $('#enemy').attr('src','img/enemy'+getRandomInt(0, 10)+'.png'); 
            health=100;
            health=health-damage;
            gold=gold+20;
        }
        
           // function boss(){ //---------boss
            if(c>=1000){
            $('#enemy').attr('src','img/boss.png'); 
            health=300;
            health=health-damage;
            if(health<=0){
            alert("you have won!");
            }
          }
        //}
        
    $('#hp').css('width',health);//полоса здоровья
    $('output').html(c);
    $('#out').html(gold);
    if(c==10){//unlock sword
        $('#sword').css('display','block');
        setInterval(on,intervalCounterSw);
    }
           if(c==50){//unlock bow
        $('#bow').css('display','block');
        setInterval(on,intervalCounterBw);
    }
    //   boss();
    })
  
    //-----------------upgrade buttons----------------------------
    $('#mouseup').click(function(){//for clicks
        console.log(damage);
       if(gold>=mprice){
           gold=gold-mprice;
           mprice=mprice+paym;
           paym=paym+100;
           damage++;
       }
        else if(gold<=mprice){
            alert("You don't have enough gold");
        }
    })
    
      $('#swordup').click(function(){//for sword
       if(gold>=sprice){
           gold=gold-sprice;
           sprice=sprice+pays;
           pays=pays+100;
           intervalCounterSw--;
           console.log(intervalCounterSw);
           if(intervalCounterSw<=1){//если интервал меньше 1 
               intervalCounterSw=1;
               alert("it's maximum speed")
           }
       }
        else if(gold<=sprice){
            alert("You don't have enough gold");
        }
    })
      
      $('#bowup').click(function(){//for bow
       if(gold>=bprice){
           gold=gold-bprice;
           bprice=bprice+payb;
           payb=payb+100;
           intervalCounterBw--;
            if(intervalCounterBw<=1){//если интервал меньше 1 
               intervalCounterBw=1;
               alert("it's maximum speed")
           }
       }
        else if(gold<=bprice){
            alert("You don't have enough gold");
        }
    })
      
    //-----------------------------------------------
    });