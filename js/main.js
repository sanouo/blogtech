function valide()
{
  var msg ="confirmer";
  confirm(msg);
}

setInterval(function()
{
  document.getElementById('time').innerHTML = new Date().toLocaleDateString();
}, 1000);
