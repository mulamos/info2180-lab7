/* global $ */
$(document).ready(function(){
    
    $("#lookup").click(function(){
    
        if ($("#checkbox").is(":checked")) {
            
            forall();
        }
        else if ($('#country').val() != '') {
            
            find($('#country').val());
        }
    });
    
    function find (query) {
        var link = 'https://info2180-lab7-mulamos.c9users.io/world.php?country='+ query;
        
        $.ajax(link, {
            method: 'GET',
        }).done(function(res) {
            $('#result').html(res);
        }).fail(function(fail) {
            $('#result').html('<b> PROCESSING ERROR!!</b>');
        })
    }
    
    function forall () {
        var link = 'https://info2180-lab7-mulamos.c9users.io/world.php?all=true';
        
        $.ajax(link, {
            method: 'GET',
        }).done(function(res){
            $('#result').html(res);
        }).fail(function(fail){
            $('#result').html('<b> PROCESSING ERROR!!</b>');
        })
    }
});