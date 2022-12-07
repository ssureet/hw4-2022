function alternate(){
    colsno = window.getComputedStyle(document.getElementById("grid")).gridTemplateColumns.split(' ').length;
    smallgrids = document.getElementsByClassName("smallgrid");
    for(i=0;i<smallgrids.length;i++){
      thisrow = Math.floor(i/colsno);
      thiscol = i%colsno;
      if((thisrow+thiscol)%2==1){
        smallgrids[i].setAttribute('class', 'smallgrid even');
      }else{
        smallgrids[i].setAttribute('class', 'smallgrid odd');
      }
    }
  }
  
  window.onload = alternate();
  window.addEventListener("resize", alternate);