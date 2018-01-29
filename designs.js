$(function () {
    // Select color input
    // Select size input

    // When size is submitted by the user, call makeGrid()

    
    var submit = $('input[type="submit"]');

    function makeGrid() {
        var inputHeight = $('#inputHeight').val();
        var inputWidth = $('#inputWeight').val();
        var td = $('<td>');
        var tr = $('<tr>');
        var table = $('#pixelCanvas');

        for (var i=0; i<inputHeight; i++) {
            table.append(tr);
        }
        for (var j=0; j<inputWidth; j++) {
            tr.append(td);
        }
        console.log(inputHeight, inputWidth);
    }
    
    submit.on('click', function(e){
        e.preventDefault();
        makeGrid();
        
    });


    
    
});