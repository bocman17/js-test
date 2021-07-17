$(function() {
    $("#inc").click(function() {
        $("#counter").html(function(i, val) {
            return +val+1;
        })
    })
    $("#dec").click(function() {
        $("#counter").html(function(i, val) {
            return +val-2;
        })
    })
    
})