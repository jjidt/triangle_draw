var currentTri = "";
$(document).ready(function() {
  $("#selector").submit(function(event){
    event.preventDefault();
    var inputtedSide1 = parseInt($("#sideA").val());
    var temp;

    if (parseInt($("#sideB").val()) < parseInt($("#sideC").val())) {
      var inputtedSide3 = parseInt($("#sideB").val());
      var inputtedSide2 = parseInt($("#sideC").val());
    } else {
      var inputtedSide2 = parseInt($("#sideB").val());
      var inputtedSide3 = parseInt($("#sideC").val());
    }

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
      },
      area: function(){
        var a = this.side1;
        var b = this.side2;
        var c = this.side3;
        var p = (a + b + c)/2;
        return Math.sqrt(p*(p-a)*(p-b)*(p-c));
      }
    }

    $("#numbers").empty().append(newTriangle.area().toFixed(2))

    if (!newTriangle.triangleCheck()) {
      alert("Please Enter a Valid Triangle");
    } else {
      $("li").removeClass("selected");
      $("ul#"+ newTriangle.type()).append("<li class='selected'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3+"</li>");
    }
    $("input").val("");
    //$("#show").show();
    var right =((newTriangle.side1 + newTriangle.side2 + newTriangle.side3) *10).toString();
    var up =(newTriangle.side3*10).toString();
    var realign = 0;

    // if (newTriangle.type() === "scalene" && newTriangle.side1 < newTriangle.side2) {
    //   alert("scalene");
    //   right = ((newTriangle.side1+newTriangle.side2)*10).toString();
    //   realign = right/2;
    // } else {
    //   right = (newTriangle.side1*20).toString()
    //   realign = right/20;
    // }

    // if (newTriangle.side2>newTriangle.side3) {
    //   var temp = newTriangle.side3
    //   newTriangle.side3=newTriangle.side2;
    //   newTriangle.side2= temp;
    // }

    $("#canvas-box").empty().append("<canvas id='myCanvas' width=" + right + " height=" + up +"></canvas>")

    var a2 = newTriangle.side1*10;
    var b2 = newTriangle.side2*10;
    var c2 = newTriangle.side3*10;


    var triangleDraw = function(a, b, c){
      var canvas=document.getElementById('myCanvas');
      var ctx=canvas.getContext('2d');
      var x = (Math.pow(b, 2) + Math.pow(a,2) - Math.pow(c, 2))/(2*a);
      var y = Math.sqrt(Math.pow(b, 2) - Math.pow(x, 2));
        // ctx.clearRect ( 1000 , 1000 , 1000 , 1000 )
      ctx.beginPath();
      ctx.moveTo(realign,0);
      ctx.lineTo(a + realign, 0);
      ctx.lineTo(x + realign,y);
      ctx.lineTo(realign,0);
      ctx.globalAlpha = .5;
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.stroke();

    };

    triangleDraw(a2, b2, c2);

    $("li").on("mouseover", function(){
      $("li").removeClass("selected");
      $(this).addClass("selected");
      //currentTri.animate({"font-size": "15px"})
      //alert(currentTri);
      var tempArr = $(this).text().split(",");
      var a1 = tempArr[0]*10;
      var b1 = tempArr[1]*10;
      var c1 = tempArr[2]*10;
      newTriangle.side1= parseInt(tempArr[0]);
      newTriangle.side2= parseInt(tempArr[1]);
      newTriangle.side3= parseInt(tempArr[2]);
      var right1 = (a1+b1+c1).toString();
      var up1 =c1.toString();
      $("#canvas-box").empty().append("<canvas id='myCanvas' width=" + right1 + " height=" + up1 +"></canvas>")
      triangleDraw(a1, b1, c1);
      $("#numbers").empty().append(newTriangle.area().toFixed(2))
    });
  });
});
