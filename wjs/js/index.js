///**
// * Created by hp on 2018/9/7.
// */
//$(function(){
//   var items = $(".carousel-inner .item");
//    console.log(items);
//    $(window).on("resize",function(){
//
//        var width = $(window).width();
//
//        if(width>=768){
//
//            $(items).each(function(index,value) {
//                console.log(value);
//                var item=$(this);
//                console.log(item);
//              var imgSrc = item.attr("ata-large-image");
//                console.log(imgSrc);
//                item.html($('<a href="javascript:;" class="pcimg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
//            });
//        }
//        else{
//            $(items).each(function(index,value){
//                var item=$(this);
//                var imgSrc=item.data("smallImage");
//                console.log(imgSrc);
//                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
//            });
//        }
//    }).trigger("resize");
//})




































$(function(){
    $('[data-toggle="tooltip"]').tooltip();







    var times = $(".carousel-inner .item");

    $(window).on("resize",function(){
        var width = $(window).width();
        console.log(width);
        if(width>=768){
            times.each(function(index,value){
                var time = $(this);
               var imgScr = time.attr("ata-large-image");
                time.html($('<a href="javascript:;" class="pcimg"></a>').css("background-image","url('"+imgScr+"')"));

            })
        }
        else{
            times.each(function(index,value){
                var time=$(this);
                var imgScr = time.data("smallImage");
                console.log(imgScr);
                time.html('<a href="javascript:;" class="mobileImg"><img src="'+imgScr+'" alt="..."></a>');})
        }
    }).trigger("resize");



   var uls = $(".wjs-product .nav-tabs");
    var lis = uls.find("li");
    var totalWidth=0;
    lis.each(function(index,value){
       totalWidth+=totalWidth+$(value).innerWidth();

    })
    uls.width(totalWidth);
  var  myScroll= new IScroll(".tabs-parent",{
      scrollX:true, scrollY: false
  })

})