$(function(){

    $("#start").click(function(){
    $("#div2").load("demo.txt");
  });

});

 


/* $(function(){
   
      $("#start").click(function(){
        $("p").filter(".special").css("border-color","red");
      });
      //parents(): fonction permettant d'appliquer une proprieter sur le parent de selecteur qui est l'enfant sélectionner 
      //parents(.class): s'applique uniquement sur la balise qui porte la classe
       // children : selectione les enfants 
       //find(balise)=$("balise"):  selectionne tous les petits enfants
       //siblings() : selectionne les autres freres de celui choisie
       //first(): selectionne le premier element 
       //last(): selectionne le dernier element
       //filter(class) : selectionne unique ceux qui ont la class
       //not (class) : est le contrait de filter();
        //eq(nombre): selectionne un élément grace à l'indice entre
       //next() : selectionne le prochain frère de celui qui a été choisie
}); */


/*$(function(){

// jquery et html

 $('#button2').click(function(){
  $('#button1').height(150);
  $('#button1').width(150);
  console.log($('#button2').width());}); 
   
 $("#button1").click(function(){
  console.log($("#par1,#par2").css(
    {
      "color": "Red",
      "font-weight" : "blod",
      "background" :"yellow"
    }
  )); 
});*/


  /* $("#button1").click(function(){
  $("#par1,#par2").toggleClass("red");
}); */


// fonction sur l'attribut css permettant d'ajouter une couleur sur le paragraphe
 /*  $("#button1").click(function(){
      $("#par1,#par2").addClass("red");
   });

   // fonction sur l'attribut css permettant de retiré une couleur sur le paragraphe
   $("#button2").click(function(){
    $("#par1,#par2").removeClass("red");
  }); */

 
     // before : 
     // after :
     // append :
     // prepend :
     // remove :
     // empty :

     
     // permet de changer 
     //$('#myInput').val('nouveau texte');
     //$('div').after("<p>bonjoue jeune gens</p>"); // permet d'ajouter un paragraphe au avant de la div
     //$('div').before(); // permet d'ajouter un paragraphe apres de la div
     //$('div').empty("<p>bonjoue jeune gens</p>"); // permet de vider les élément de la div
   //$('div').remove("<p>bonjoue jeune gens</p>"); // permet de supprimer les élément de la div
   //$('div').prepend("<p>bonjoue jeune gens</p>"); // permet d'ajouter un paragraphe à la fin dans la div
   // $('div').append("<p>bonjoue jeune gens</p>"); // permet d'ajouter un paragraphe au début dans la div
  /*   var myvar= $("div").attr("style");
    console.log(myvar);   */
    // val : récupère des informations
    // attr : permet de retourner la valeur d'un attribut dans une balise en prenant un attribut
   /* }); */




  /*  var myvar=$("#par1").text(); // renvoie dans la console le paragraphe sans balise html
   var myvar1=$("#par2").html();   // renvoie dans la console le paragraphe avec balise html
   console.log(myvar,myvar1); */

  /* $("#star").click(function(){
    
    $("div").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
   
 }); */



 /*  $("#star").click(function(){
    
     $("div").animate({left:'600px'},3000);
     $("div").animate({opacity:'0.2'},3000);
     $("div").animate({width:'200px'},3000);
     $("div").animate({height:'200px'},3000);
    
  });

  $("#stop").click(function(){
    
     $("div").stop(1,1);
  }); */
  


 /*  $("button").click(function(){
    $("div").animate({
      left: '600px',
      opacity: 0.2,
      width:'+=200px',
      height:'+=200px'
  }, 3000, function(){
      $("div").hide();
    }); 
  }); */
  // animation à la suite des autres
/* $("button").click(function(){
  $("div").animate({
    left: '600px',
    opacity: '0.2',
    width:'+=200px',
    height:'+=200px'
}, 3000, function(){
    $("div").hide();
  });
}); */


// fadeTo() permet de caler un élément à une opassiter 
// fadeToggle() = fadeOut () et fadeIn ()
// fadeOut () : permet de masquer un élément en dimuniant l'opasité 
// fadeIn () : permet  d' afficher un élément en augmentant l'opasité
//toggle() : permet d'afficher ou masquer un élément 
//call back : c'est lorsque un effet contient une autre argument qui est une fonction

/* $("#par1").click(function()
{
  $("#par5").fadeTo(3000,0.5);
}); */
  /* $("#par1").click(function()
  {
     $("#par5").hide(3000,function(){
      $("#par4").hide(3000,function(){
        $("#par3").hide(3000);  
      });
    });
  }); */
  

  // puissance du  "on"
   /* $("#par1").on({ 

    mouseenter : function (){ $("#par5").hide(); },
    mouseleave : function(){$("#par5").show();},
    click : function(){$("#par4").hide();}
  }); */
      
   

 // evenement de survole avec la souri
  /*   $("#par1").hover(
      function(){
        $('#par5').hide();
          },
      function(){
          $('#par5').show();
            }
    ); */
    
/* });  */