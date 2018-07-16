$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(){
    $("#popUpChatTrigger").show();
    $("#popUpConainerTrigger").hide();
}

function PopUpHide(){
    $("#popUpChatTrigger").hide();
    $("#popUpConainerTrigger").show();
}