

var show1 = $("#show1");
var srch1 = $(".srch1-content");
var dwn = $("#dwn");

show1.on("click",function(){
    srch1.toggle().css({"background-color":"#B9B2B0",
    "margin-left":"82px","width":"280px","z-index":"1","margin-top":"-2px"});
    fashCont.css({"display":"none"});
})

$("#elec").on("mouseover",function(){
    $(".elecContent").css({"display":"block","background-color":"whitesmoke",
"z-index":"8","position":"relative","left":"362px","top":"-500px"})
})


var fash = $("#fash");
var fashCont = $(".elecContent");

fash.on("mouseover",function(){
    fashCont.css({"display":"block","background-color":"whitesmoke",
    "z-index":"9","position":"relative","left":"362px","top":"-440px"})
})

// var seacrh1Cont = $(".srch1-content");
// seacrh1Cont.on("mouseleave",function(){
//     fashCont.css({"display":"none"});
//     srch1.css({"display":})
// })

var womFash = $("#wom-fash");
womFash.on("mouseover",function(){
    fashCont.css({"display":"block","background-color":"whitesmoke",
    "z-index":"9","position":"relative","left":"362px","top":"-370px"})
})

var other = $("#other");
other.on("mouseover",function(){
    fashCont.css({"display":"block","background-color":"whitesmoke",
    "z-index":"9","position":"relative","left":"362px","top":"-300px"})
})

