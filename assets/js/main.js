$(document).ready(function(){	
 let sliderCart = $(".image").owlCarousel({
                 items:1,
                 margin:0,
                 nav:false,
                 autoHeight:true,
             });
    
    
    
    
    $(".thumbnails .item-thumb").each(function(i){
        $(this).on("click",function(){
            $(".thumbnails .item-thumb").addClass("op")
            $(this).removeClass("op")
            sliderCart.trigger('to.owl.carousel', i+1)
            
        });
    });
    
    
    
    
    
    
    $(".bay-click").on("click",function(){
        $("#bg-modal").fadeIn(500);
    });
    
    $("#bg-modal .close").on("click",function(){
        $("#bg-modal").fadeOut(500);
    });
    
    
    
    
    
    var val_quantity = $(".quantity input").val();
    
    
   
    $(".quantity .plus").on('click',function(){
        val_quantity = Number(val_quantity)+1
         $(".quantity input").val(val_quantity);
        
    })
    
    $(".quantity .minus").on('click',function(){
        
        if(val_quantity > 1){
            val_quantity = Number(val_quantity)-1
        
        }
        $(".quantity input").val(val_quantity);
    })
    
    
    
     $(".menu-mob").on('click',function(){
        
        if(val_quantity > 1){
            val_quantity = Number(val_quantity)-1
        
        }
        $(".quantity input").val(val_quantity);
    })
    
    
    
     $(".btn-burger").on('click',function(){
        $(".menu-mob").addClass("move_menu");
        
    })
    
    
    $(".menu-mob .close").on('click',function(){
        $(".menu-mob").removeClass("move_menu");
        
    })
    
    
    
    
    
});