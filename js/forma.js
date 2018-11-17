$(document).ready(function() {
    $("#articulo-url").hide();
    $("#otro").hide();
    $("#msgtema").change(function(){
        var selected = $(this).val();
        if(selected == 'articulo'){
            $('#articulo-url').show();
            $('#otro').hide();
        }
        else if (selected == 'otro'){
            $('#otro').show();
            $('#articulo-url').hide();
        }
        else {
            $('#articulo-url').hide();
            $('#otro').hide();
        }
    });
});