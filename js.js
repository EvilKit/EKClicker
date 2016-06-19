//By https://github.com/EvilKit 
$(document).ready(function(){
    //------------------------переменные--------------
    var paym=10;
    var pays=20;
    var payb=50;
    var payt=100;
    var paya=500;
	var payg=40;
    var c=0;//score
	var goldAdd=20;
    var damage=10;//урон от клика
    var intervalCounterSw=1000;//счетчик для меча
    var intervalCounterBw=750;//Счетчик для лука
	var intervalCounterTw=500;//Счетчик для факела
	var intervalCounterAw=250;//Счетчик для топора
    var health=100;//здоровье противника
    var hAdd=0;//прибавка к здоровью
    var gold=0;//золото
    function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var mprice=20;//цена клика
    var sprice=20;//цена меча
    var bprice=20;//цена лука
    var tprice=20;//цена факела
    var aprice=20;//цена топора
    var gprice=20;//цена монет
    //-------------------------логика-----------------
    $('#enemy').click(function on(){
    c++;//counter
    health=health-damage ;
         console.log();
        if(health<=0){//kill enemy
            $('#enemy').attr('src','img/enemy'+getRandomInt(0, 10)+'.png'); 
            hAdd++;
			health=100+hAdd;
            health=health-damage;
            gold=gold+goldAdd;
			if(hAdd>=190){
			hAdd=190;
		  }
        }  
    $('#hp').css('width',health);//полоса здоровья
    $('output').html(c);
    $('#out').html(gold);
    if(c==10){//unlock sword
        $('#sword').css('display','block');
		$('#swordup').css('display','block');
        setInterval(on,intervalCounterSw);
    } 
	if(c==10){//unlock gold
        $('#gold').css('display','block');
		$('#goldup').css('display','block');
    }
           if(c==50){//unlock bow
        $('#bow').css('display','block');
		$('#bowup').css('display','block');
        setInterval(on,intervalCounterBw);
    }
         if(c==250){//unlock torch
        $('#torch').css('display','block');
		$('#torchup').css('display','block');
        setInterval(on,intervalCounterTw);
    }        
      	if(c==500){//unlock axe
        $('#axe').css('display','block');
		$('#axeup').css('display','block');
        setInterval(on,intervalCounterAw);
    }

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
           intervalCounterSw= intervalCounterSw-10;
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
		   console.log(intervalCounterBw);
           intervalCounterBw=intervalCounterBw-5;
            if(intervalCounterBw<=1){//если интервал меньше 1 
               intervalCounterBw=1;
               alert("it's maximum speed")
           }
       }
        else if(gold<=bprice){
            alert("You don't have enough gold");
        }
    })
       $('#torchup').click(function(){//for torch
       if(gold>=tprice){
           gold=gold-tprice;
           tprice=tprice+payt;
           payt=payt+100;
		   console.log(intervalCounterTw);
           intervalCounterTw=intervalCounterTw-4;
            if(intervalCounterTw<=1){//если интервал меньше 1 
               intervalCounterTw=1;
               alert("it's maximum speed")
           }
       }
        else if(gold<=tprice){
            alert("You don't have enough gold");
        }
    })      
	    $('#axeup').click(function(){//for axe
       if(gold>=aprice){
           gold=gold-aprice;
           aprice=aprice+paya;
           paya=paya+100;
		   console.log(intervalCounterAw);
           intervalCounterAw=intervalCounterAw-3;
            if(intervalCounterAw<=1){//если интервал меньше 1 
               intervalCounterAw=1;
               alert("it's maximum speed")
           }
       }
        else if(gold<=aprice){
            alert("You don't have enough gold");
        }
    })    
	    $('#goldup').click(function(){//for axe
       if(gold>=gprice){
           gold=gold-gprice;
           gprice=gprice+payg;
           payg=payg+100;
		   goldAdd=goldAdd+5;
          
	    }
        else if(gold<=gprice){
            alert("You don't have enough gold");
        }
    })
    //-----------------------------------------------
    });