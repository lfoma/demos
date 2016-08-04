 window.addEventListener('load', function() {
     //вытаскиваем кнопку,поле,колонки сохраняем в переменные
     var button = document.querySelector(".startNewGame");
     var field = document.querySelector('.field');
     var winnerMessage = document.querySelector(".winner-message")
     var cells = document.querySelectorAll('.cell')

     var nextMove = "x";

     //ставим обработчик на кнопку
     button.addEventListener('click', function startNewGame() {

         //очищаем поле
         for (var i = 0; i < cells.length; i++) {
             cells[i].classList.remove('x')
             cells[i].classList.remove('o')
         }
         nextMove = "x";
         winnerMessage.innerHTML = '';
     });

     //вещаем слушателя на все поле

     field.addEventListener("click", function handleCellClick(e) {
         if (!e.target.classList.contains('cell')||
         	e.target.classList.contains('x')||
         	e.target.classList.contains('o')) {
             return;
         }
         if (getWinner()) {
             return;
         }

         e.target.classList.add(nextMove);
         if (nextMove === "x") {
             nextMove = "o";
         } else {
             nextMove = "x";
         }
         var winner = getWinner();

         if (winner) {
         	if(winner === "x"){
             winnerMessage.innerHTML = "Крестик победил";
         	}else {
             winnerMessage.innerHTML = "Нолик победил";
         }


         } 





     })
 })
