</style>

<script type="text/javascript">
 function show(e, divID) {
  target = e.target;
  console.log(target);
  
  var elements = document.getElementsByClassName('hidden-area');
  var item = document.getElementById(divID);
  var navbuttons = document.getElementsByClassName('navbutton');
  
  // hide all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
    navbuttons[i].classList.remove('active');

  }
  
  // if we got it, show it
  if (item) {
    item.classList.remove('hidden');
    item.classList.add('unhidden');
    target.classList.add('active');
  }
}
</script>