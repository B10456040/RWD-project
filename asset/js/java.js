function btnDivShow_onclick() 
{
	div1.style.display='';
}
function btnDivHide_onclick() 
{
	div1.style.display='none';
}
function imgDivShow_onclick() 
{
	div2.style.display='';
	div3.style.display='none';
}
function imgDivHide_onclick() 
{
	div2.style.display='none';
}
function img2DivShow_onclick() 
{
	div3.style.display='';
	div2.style.display='none';
}
function img2DivHide_onclick() 
{
	div3.style.display='none';
}

$('.carousel').carousel({
	interval: 100
  })
	