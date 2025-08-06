function Kalkulator(){
    let x = document.getElementById('1liczba').value;
    x = parseInt(x);
    let y = document.getElementById('2liczba').value;
    y = parseInt(y);
    let wybor1 = document.getElementById('dodawanie').checked;
    let wybor2 = document.getElementById('odejmowanie').checked;
    let wybor3 = document.getElementById('mnozenie').checked;
    let wybor4 = document.getElementById('dzielenie').checked;
    let wybor5 = document.getElementById('potegowanie').checked;
    let wybor6 = document.getElementById('pierwiastkowanie').checked;
    let wykonaj = document.getElementById('wykonaj').onclick;
    const suma = x + y;
    let różnica = x - y;
    let iloczyn = x * y;
    let iloraz = x / y;
    let potega = Math.pow(x,y);
    let pierwiastek = Math.sqrt(x);
    if(wybor1 == true){    
        let wynik = (`Suma liczb ${x} i ${y} to ${suma}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor2 == true){
        let wynik = (`Różnica ${x} i ${y} to ${różnica}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor3 == true){
        let wynik = (`Iloczyn licz ${x} i ${y} to ${iloczyn}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor4 == true){
        let wynik = (`Iloraz liczb ${x} i ${y} to ${iloraz}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor5 == true){
        let wynik = (`Potęga liczby ${x} do ${y} to ${potega}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor6 == true){
        const y = 2;
        let wynik = (`Pierwiastek liczby ${x} do ${y} to ${pierwiastek}`);
        let wypisz = document.getElementById('wynik').innerHTML = wynik; 
    }
    else if(wybor1 == false || wybor2 == false || wybor3 == false || wybor4 == false || wybor5 == false || wybor6 == false){
        alert(`*HINT DLA UPOSI: (WYBIERZ JEDNĄ Z OPCJI)`);
    }

}
