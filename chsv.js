// var num =0;
// function step (t){
//     if(t.innerHTML ==""){
//         if ( num % 2 ==0){
//             t.innerHTML ="X"
//         }
//         else {
//             t.innerHTML = "O"
//         }
//         num++;
        

//         analiz(t);
//     }
//     else{
//         alert("Клетка занята . Выберите другую клетку!")
//     }
// }


// function analiz (t){
//      var tr = t.parentNODE.parentNODE;
//      var el = new Array();
//      for (var i = 0 ; i <9; i++){
//         el[i] = tr.getElementByTagName('td')[i].innerHTML;
//      }

//      var win = false;if (el[0]== el[1] && el[1]== el[2] && el[0]== el[2] && (el[0]== 'X' || el[0]== 'O'))
//      {
//         alert(el[0] + 'win!');
//         win = true;
//      }

//      if (el[3]== el[4] && el[4]== el[5] && el[3]== el[5] && (el[3]== 'X' || el[3]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }




//      if (el[6]== el[7] && el[7]== el[8] && el[6]== el[8] && (el[6]== 'X' || el[6]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }


//      if (el[0]== el[3] && el[3]== el[6] && el[0]== el[6] && (el[0]== 'X' || el[0]== 'O'))
//      {
//         alert(el[0] + 'win!');
//         win = true;
//      }


//      if (el[1]== el[4] && el[4]== el[7] && el[1]== el[7] && (el[1]== 'X' || el[1]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }



//      if (el[2]== el[5] && el[5]== el[8] && el[5]== el[8] && (el[2]== 'X' || el[2]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }


//      if (el[0]== el[4] && el[4]== el[8] && el[0]== el[8] && (el[0]== 'X' || el[0]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }



//      if (el[2]== el[4] && el[4]== el[6] && el[2]== el[6] && (el[2]== 'X' || el[2]== 'O'))
//      {
//         alert(el[3] + 'win!');
//         win = true;
//      }

//      if (win = true ){
//         for (var i = 0 ; i <9;i++){
//             tr.getElementByTagNAme('td')[i].innerHTML
//         }
//      }
//      win = false;
//      num = 0;
// }





var num = 0; //отвечает за то, кто ходит: чет - ходит крестик, нечет - нолик
function step(t) {
    //t - ячейка, по которой кликнули
    if (t.innerHTML == "") {//проверяем, является ли клетка пустой
        //если клетка пустая
        //проверяем, кто будет ходить
        if (num % 2 == 0) {
            t.innerHTML = "X";
        }
        else {
            t.innerHTML = "O";
        }
        num++; //переходим к следующему игроку 

        //проверяем, может кто-то выиграл
        analiz(t);
    }
    else//если клетка занята
    { alert("Клетка занята. Выберите другую клетку"); }
}

function analiz(t) {// функция проверки на выигрыш
    var tr = t.parentNode.parentNode;//зная ячеку, получаем доступ к таблице
    var el = new Array();//массив, в котором будем хранить крестики и нолики
    for (var i = 0; i < 9; i++) {//запоминаем, где стоит крестик, где нолик
        //номер элемента массива совпадает с номером ячейки
        el[i] = tr.getElementsByTagName("td")[i].innerHTML;
    }
    var win = false; //признак победы
    //проверям заполненность поля и определяем победителя
    if (el[0] == el[1] && el[1] == el[2] && el[0] == el[2] &&
        (el[0] == "X" || el[0] == "O"))//заполнена первая строка
    {
        alert(el[0] + " win!");
        win = true;//победа!
    }
    if (el[3] == el[4] && el[4] == el[5] && el[3] == el[5] && (el[3] == "X" || el[3]
        == "O"))//заполнена вторая строка
    {
        alert(el[3] + " win!");
        win = true;
    }
    if (el[6] == el[7] && el[7] == el[8] && el[6] == el[8] && (el[6] == "X" || el[6]
        == "O"))//заполнена третья строка
    {
        alert(el[6] + " win!");
        win = true;
    }
    if (el[0] == el[3] && el[3] == el[6] && el[0] == el[6] && (el[0] == "X" || el[0]
        == "O"))//заполнен первый столбец
    {
        alert(el[0] + " win!");
        win = true;
    }
    if (el[1] == el[4] && el[4] == el[7] && el[1] == el[7] && (el[1] == "X" || el[1]
        == "O"))//заполнен второй столбец
    {
        alert(el[1] + " win!");
        win = true;
    }
    if (el[2] == el[5] && el[5] == el[8] && el[2] == el[8] && (el[2] == "X" || el[2]
        == "O"))//заполнен третий столбец
    {
        alert(el[2] + " win!");
        win = true;
    }
    if (el[0] == el[4] && el[4] == el[8] && el[0] == el[8] && (el[0] == "X" || el[0]
        == "O"))//заполнена главная диагональ
    {
        alert(el[0] + " win!");
        win = true;
    }
    if (el[2] == el[4] && el[4] == el[6] && el[2] == el[6] && (el[2] == "X" || el[2]
        == "O"))//заполнена главная диагональ
    {
        alert(el[2] + " win!");
        win = true;
    }
    if (win == true) {//если победа
        for (var i = 0; i < 9; i++) {
            tr.getElementsByTagName("td")[i].innerHTML
                = "";//очищаем каждую ячейку от крестика или нолика
        }
        win = false; //говорим, что победы нет - начинаем новую игру
        num = 0;
    }
}