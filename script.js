function german() {
  document.getElementById("text1").innerHTML = "DIE BESTEN RAMEN DER STADT";
  document.getElementById("text2").innerHTML = "WIE BESTELLE ICH?";
  document.getElementById("noodle").innerHTML = "Wählen Sie Ihre Nudeln";
  document.getElementById("broth").innerHTML = "Wählen Sie Ihre Brühe";
  document.getElementById("toppings").innerHTML = "Füge deine Toppings hinzu";
  document.getElementById("text3").innerHTML = "UNSERE SPEISEKARTE";
  document.getElementById("loc").innerHTML = "FINDEN SIE UNS UNTER";
}
function english() {
  document.getElementById("text1").innerHTML = "THE BEST RAMEN IN TOWN";
  document.getElementById("text2").innerHTML = "HOW TO ORDER";
  document.getElementById("noodle").innerHTML = "Pick your noodle";
  document.getElementById("broth").innerHTML = "Pick your broth";
  document.getElementById("toppings").innerHTML = "Add your toppings";
  document.getElementById("text3").innerHTML = "OUR MENU";
  document.getElementById("loc").innerHTML = "FIND US AT";
}
function showMenu() {
  document.getElementById("menuoverlay").classList.add("show-overlay-menu");
}
function closeMenu() {
  document.getElementById("menuoverlay").classList.remove("show-overlay-menu");
}
