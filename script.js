function updateTime()
{
  var clock = new Date();

  // Здесь должен быть элемент hours 
  var hour = document.getElementById("hours");
  // Здесь должен быть элемент minutes 
  var min = document.getElementById("minutes");
  // Здесь должен быть элемент seconds
  var sec = document.getElementById("seconds");

  // getHours()
  var clock1 = clock.getHours();
  // getMinutes()
  var clock2 = clock.getMinutes();
  // getSeconds()
  var clock3 = clock.getSeconds(); 

  if(clock1 < 10) {
    clock1 = "0"+ clock1;
  }

  if(clock2 < 10) {
    clock2 = "0"+ clock2;
  }

  if(clock3 < 10) {
    clock3 = "0"+ clock3;
  }  

  hour.innerHTML = clock1;
  min.innerHTML = clock2;
  sec.innerHTML = clock3;
}
setInterval("updateTime()", 1000);
