$(function() {

   $(document).ready(function() {

    var menu = $("#my-menu").mmenu();
    var icon = $("#mmenu-icon");
    var API = menu.data( "mmenu" );

    icon.on( "click", function() {
        API.open();
    });


    API.bind( "opened", function() {

       icon.addClass( "is-active" );
       console.log(icon);
       icon.on( "click", function() {
       	console.log(icon);
          API.close();
       });

   });

   API.bind( "closed", function() {

      setTimeout(function() {
        icon.removeClass( "is-active" );
      }, 100);

      icon.on( "click", function() {
         API.open();
      });

   });


});





});
