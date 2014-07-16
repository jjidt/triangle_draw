$(document).ready(function() {
  $("#selector").submit(function(event){
    var inputtedSide1 = parseInt($("#sideA").val());
    var inputtedSide2 = parseInt($("#sideB").val());
    var inputtedSide3 = parseInt($("#sideC").val());

    var newTriangle = {
      side1: inputtedSide1,
      side2: inputtedSide2,
      side3: inputtedSide3,
      triangleCheck: function(){
       return ((this.side1+this.side2>this.side3)&&(this.side2+this.side3>this.side1)&&(this.side1+this.side3>this.side2));
      },
      type: function(){
            if(this.side1===this.side2 && this.side2===this.side3) {
              return "equilateral";
            } else if (this.side1===this.side2 || this.side2===this.side3 || this.side1===this.side3) {
              return "isosceles";
            } else {
              return "scalene";
            }
      }
    }
  if (!newTriangle.triangleCheck()) {
    alert("Please Enter a Valid Triangle");
  } else {
    $("ul#"+ newTriangle.type()).append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3+"</li>");
  }
  $("input").val("");
  //$("#show").show();
  var canvas=document.getElementById('myCanvas');
  var ctx=canvas.getContext('2d');
  var a = newTriangle.side1*10;
  var b = newTriangle.side2*10;
  var c = newTriangle.side3*10;
  var x = (Math.pow(b, 2) + Math.pow(a,2) - Math.pow(c, 2))/(2*a);
  var y = Math.sqrt(Math.pow(b, 2) - Math.pow(x, 2));
    ctx.clearRect ( 1000 , 1000 , 1000 , 1000 )
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(a, 0);
    ctx.lineTo(x,y);
    ctx.fill();
  event.preventDefault();
  });


});
