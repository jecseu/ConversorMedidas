$(function(){
    $('#calcular').click(function(){
        if ($('#milhas').val()){
            $('#milhas').css({'border' : ''})
            const milhas = parseFloat($('#milhas').val())
            const metrosCalc = 1609.34 * milhas

            $('#metros').val(metrosCalc.toFixed(2))
        }else{
            $('#milhas').css({'border' : '3px solid #000000'})
        }
                        
    })
}) 
