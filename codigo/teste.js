function check(){
    var c = 0;
    var q1 =      document.findpet.questao1.value;
    var q2 =      document.findpet.questao2.value;
    var q3 =      document.findpet.questao3.value;
    var q4 =      document.findpet.questao4.value;
    var result1 = document.getElementById('result1');
    var result2 = document.getElementById('result2');
    var findpet = document.getElementById('findpet');

    
    if (q1 == "Cachorros"){c+=1}
    if (q1 == "Gatos"){c+=20}
    if (q1 == "Pássaros"){c+=50}
    if (q1 == "Outros..."){c+=100}

  
  
    if (q2 == "Caseiro"){c+=1}
    if (q2 == "Baladeiro"){c+=1}
    if (q2 == "Amante da Natureza"){c+=1}
    if (q2 == "Viajante"){c+=1}
  
    if (q3 == "Casa"){c+=1}
    if (q3 == "Apartamento"){c+=10}
  
    if (q4 == "Menos de duas 2 horas"){c+=2}
    if (q4 == "Entre 2 e 3 horas"){c+=5}
    if (q4 == "Mais de 3 horas"){c+=10}
 
    findpet.style.play = "none";

  if ( 5 <= c && c <= 8 ){
      result1.textContent = "Cachorro - Grande porte - Calmo"
      result2.textContent = "Talvez o que mais combine com você seja um cachorro, o melhor amigo do homem. Porém, o que mais combinaria com você seria um cachorro, de qualquer sexo, de grande porte, devido ao tamanho do ambiente que você tem, e mais calmo, assim não necessitando de tanto tempo e atenção como os outros."
   
    }

      else if ( 14 <= c && c <= 17 ){
       result1.textContent = "Cachorro - Pequeno porte - Calmo"
       result2.textContent = "Talvez o que mais combine com você seja um cachorro, o melhor amigo do homem. Porém, o que mais combinaria com você seria um cachorro, de qualquer sexo, de pequeno porte, devido ao tamanho do ambiente que você tem, e mais calmo, assim não necessitando de tanto tempo e atenção como os outros."
    }
  
    else if ( c == 22 ){
     result1.textContent = "Cachorro - Pequeno porte - Com energia"
     result2.textContent = "Talvez o que mais combine com você seja um cachorro, o melhor amigo do homem. Porém, o que mais combinaria com você seria um cachorro, de qualquer sexo, de pequeno porte, devido ao tamanho do ambiente que você tem, e mais agitado, já que você pode dedicar uma parte maior do seu tempo a ele, levando para passeios, brincando, ensinando truques e etc."
    } 
    else if ( c == 13 ){
      result1.textContent = "Cachorro - Grande porte - Com Energia"
      result2.textContent = "Talvez o que mais combine com você seja um cachorro, o melhor amigo do homem. Porém, o que mais combinaria com você seria um cachorro, de qualquer sexo, de grande porte, devido ao tamanho do ambiente que você tem, e mais agitado, já que você pode dedicar uma parte maior do seu tempo a ele, levando para passeios, brincando, ensinando truques e etc."
    }
  
    else if ( 24 <= c  && c <= 41 ){
      result1.textContent = "Gato"
      result2.textContent = "Talvez o animal ideal para você seja um gato, já que eles geralmente são menos agitados que os cachorros, muitas vezes não necessitam da mesma atenção, do mesmo espaço, etc. Mas mesmo assim não podem ser deixados de lado."
    }
      
    else if ( 54 <= c && c <= 71 ){
      result1.textContent = "Pássaro"
      result2.textContent = "Talvez você seja o tipo de pessoa que está atrás de adotar um animal, porém não se da muito bem com gatos ou cachorros, prefere um animal menor, ou apenas gosta de aves. Um pássaro pode ser o ideal para você, mas lembre-se, mesmo sendo menor ele ainda necessita de muito cuidado."
    }
    else if ( 104 <= c && c <= 121 ){
      result1.textContent = "Outro..."
      result2.textContent = "Talvez você seja o tipo de pessoa que está atrás de adotar um animal não muito convencional. Mas para isso saiba que eles demandam mais tempo, atenção, dinheiro, cuidado e às vezes até mesmo licença do IBAMA."
    }

}
