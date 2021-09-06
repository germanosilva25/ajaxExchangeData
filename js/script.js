

//$(document).ready(function(){
//    $("#usr").blur(function(){ 
//        var nome = $("#usr").val();
//        $.ajax({
//            
//            url: "./ajax/ajax.php",
//            type: "POST",
//            data: {method: 'verificaNome', data : nome},
//            success: function(response){
//               // alert('post feito com sucesso')
//            }
//        });
//
//    }); 
//});
//
//$(document).ready(function(){
//    $("#pwd").blur(function(){ 
//        var pwd = $("#pwd").val();
//        $.ajax({
//            
//            url: "./ajax/ajax.php",
//            type: "POST",
//            data: {method: 'verificaSenhas', data : pwd},
//            success: function(response){
//               // alert('post feito com sucesso')
//            }
//        });
//
//    }); 
//});

$(document).ready(function(){
    $("button.btn.btn-primary").click(function(){
        alert('submit');

        
        var nome = $("#usr").val();
        $.ajax({
            
            url: "./ajax/ajax.php",
            type: "POST",
            data: {method: 'verificaNome', data : nome},
            success: function(response){
               // alert('post feito com sucesso')
            }
        });

    




        
        var pwd = $("#pwd").val();
        $.ajax({
            
            url: "./ajax/ajax.php",
            type: "POST",
            data: {method: 'verificaSenhas', data : pwd},
            success: function(response){
               // alert('post feito com sucesso')
            }
        });

    




    });
});