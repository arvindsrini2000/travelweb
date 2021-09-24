var curr = 1;


$(".carousel-control-next").click(function(){
  var current = curr.toString();
  current = "."+current;
  $(current).removeClass("active");
  curr++;
  if(curr==7)
  {
    curr=1;
  }
  current = curr.toString();
  current = "."+current;
  $(current).addClass("active");
})


$(".carousel-control-prev").click(function(){
  var current = curr.toString();
  current = "."+current;
  $(current).removeClass("active");
  curr--;
  if(curr==0)
  {
    curr=6;
    console.log(curr);
  }
  current = curr.toString();
  current = "."+current;
  $(current).addClass("active");
})
