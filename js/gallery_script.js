let offset=0;
const slider_line = document.querySelector('.slider_line');
document.querySelector('.slider_next').addEventListener('click', function(){
  offset=offset-256;
  if(offset<-256*4)
  {
    offset=0;
  }
  slider_line.style.left=offset+'px';
});
document.querySelector('.slider_prev').addEventListener('click', function(){
  offset=offset+256;
  if(offset>0)
  {
    offset=-256*4;
  }
  slider_line.style.left=offset+'px';
});
