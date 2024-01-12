 
 
 $(function(){

      var  $mainMenuItems = $("#main-menu ul").children("li") ,
      totalMainMenuItems = $mainMenuItems.length ,
      openedIndex = 2 ,
      init = function(){

           bindEvents(); 
             if(validIndex(openedIndex))
             {
                animateItem($mainMenuItems.eq(openedIndex),true,700);
             }
    
      },
      bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){ 
            var $newIndex = $(this).parent().index();  
            checkAnimateItem ($newIndex);
                    
                   /*  $colorImage = $item.find(".color"); */
                   /*  $item = $mainMenuItems.eq($newIndex);
                   if (openedIndex === $newIndex)
                   {
                    animateItem($item,false,250);
                    openedIndex=-1;
                   }
                   else
                   {
                    if(validIndex($newIndex))
                            {
                                animateItem( $mainMenuItems.eq(openedIndex),false,250);
                                openedIndex = $newIndex;
                                animateItem($item,true,250);
                            }

                   } */
                    /* animateItem($item,true,250); */
                    /* $colorImage.animate({left:"0px"},250);
                    $item.animate({whidth:"420"},250); */
                    /* openedIndex = $newIndex; */


        });
              $(".button").hover(
                 function(){
                      $(this).addClass('hovered');

                 },
                 function(){
                      $(this).removeClass('hovered');
                    
                 }

              );
              $('.button').click(function(){
                var $newIndex = $(this).index();
                checkAnimateItem ($newIndex);
              });

      },

      validIndex = function(indextoCheck){
        return (indextoCheck >= 0) && (indextoCheck < totalMainMenuItems);
      },
      animateItem = function($item , toOpen , speed){
         var $colorImage = $item.find(".color"),
             $itemParam = toOpen ? {width:"420px"} : {width:"140px"} ,
             $colorImageParam = toOpen ? {left:"0px"} : {left:"140px"} ;
             $colorImage.animate($colorImageParam ,speed);
             $item.animate($itemParam,speed);
            
      };

      

      init();
      checkAnimateItem = function(nouvelle_valeur)
      {
        if (openedIndex === nouvelle_valeur)
                   {
                    animateItem($mainMenuItems.eq(nouvelle_valeur),false,250);
                    openedIndex=-1;
                   }
                   else
                   {
                    if(validIndex(nouvelle_valeur))
                            {
                                animateItem( $mainMenuItems.eq(openedIndex),false,250);
                                openedIndex = nouvelle_valeur;
                                animateItem($mainMenuItems.eq(nouvelle_valeur),true,250);
                            }

                   }
      }; 


});