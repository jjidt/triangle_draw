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
      $("li").removeClass("selected");
      $("ul#"+ newTriangle.type()).append("<li class='selected'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3+"</li>");
    }
    $("input").val("");
    //$("#show").show();
    var right = (newTriangle.side1*10).toString();
    var up =(newTriangle.side3*10).toString();

    $("#canvas-box").empty().append("<canvas id='myCanvas' width=" + right + " height=" + up +"></canvas>")

    var triangleDraw = function(a, b, c){
      var canvas=document.getElementById('myCanvas');
      var ctx=canvas.getContext('2d');
      var x = (Math.pow(b, 2) + Math.pow(a,2) - Math.pow(c, 2))/(2*a);
      var y = Math.sqrt(Math.pow(b, 2) - Math.pow(x, 2));
        ctx.clearRect ( 1000 , 1000 , 1000 , 1000 )
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(a, 0);
        ctx.lineTo(x,y);
        ctx.fill();
      event.preventDefault();
    };
      var a = newTriangle.side1*10;
      var b = newTriangle.side2*10;
      var c = newTriangle.side3*10;

    triangleDraw(a, b, c);

    $("li").off("mouseover").on("mouseover", function(event){
      $("li").removeClass("selected");
      $(this).addClass("selected");
      var tempArr = $(this).text().split(",");
      var a1 = tempArr[0]*10;
      var b1 = tempArr[1]*10;
      var c1 = tempArr[2]*10;
      event.preventDefault;
      var right1 = a1.toString();
      var up1 =c1.toString();
      $("#canvas-box").empty().append("<canvas id='myCanvas' width=" + right1 + " height=" + up1 +"></canvas>")
      triangleDraw(a1, b1, c1);
    });
  });
});
