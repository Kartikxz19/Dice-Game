function myFunction()
{
  var arr=["C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice1.png","C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice2.png","C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice3.png","C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice4.png","C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice5.png","C:/Users/karti/OneDrive/Documents/Web Development/Dicee Challenge-MyVersion/images/dice6.png"];

  var x=Math.floor(Math.random()*6);
  var y=Math.floor(Math.random()*6);
  document.querySelector("#p1").setAttribute("src",arr[x]);
  document.querySelector("#p2").setAttribute("src",arr[y]);
  if(x>y)
  {
    document.querySelector("h1").innerHTML="PLAYER 1 Wins !👀";
  }
  else if(y>x)
  {
    document.querySelector("h1").innerHTML="PLAYER 2 Wins !👀";
  }
  else
  {
    document.querySelector("h1").innerHTML="OOPS, A Draw😭";
  }
}
window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
