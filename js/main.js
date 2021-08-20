$(document).ready(function () {
  var currentFloor=2;//текущий этаж
  var counterUp=$(".counter-up"); //кнопка увеличения этажей
  var counterDown=$(".counter-down");//кнопка уменьшения этажей
  var floorPAth=$(".home-image path");//отдельный этаж в svg
  var modal=$(".modal");
  var modalCloseButton=$(".modal-close-button");
  var viewFlatsButton=$(".view-flats");

  function toggleModel() {//функция открытия-закрытия окна
    modal.toggleClass("is-open")
  };
  floorPAth.on("click",toggleModel);
  modalCloseButton.on("click",toggleModel);
  viewFlatsButton.on("click",toggleModel);

  //функция при наведении на этаж
  floorPAth.on("mouseover",function(){
    floorPAth.removeClass("current-floor");//удаление активного класса
    currentFloor=$(this).attr("data-floor");//получаем значение текущего этажа
    $(".counter").text(currentFloor)//запись значения в счетчик
  });
//функция для кнопки вверх
  counterUp.on("click", function(){
    if (currentFloor<18){
    currentFloor++;
    usCurrentFloor=currentFloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});//форматирование счетчика
    $(".counter").text(usCurrentFloor);
    floorPAth.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
  }
  });
//функция для кнопки вниз
  counterDown.on("click", function(){
    if (currentFloor>2){
    currentFloor--;
    usCurrentFloor=currentFloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});
    $(".counter").text(usCurrentFloor);
    floorPAth.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  }
});
});