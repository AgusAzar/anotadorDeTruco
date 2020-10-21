$(document).ready(function() { 
    var puntajeEquipo1 = 0;
    var  puntajeEquipo2 =0;
    var totalPuntos = 30;
    $('#botonA24').on('click',function(){
        $('#botonA24').removeClass('desactivado');
        $('#botonA30').addClass('desactivado');
        totalPuntos = 24; });
    $('#botonA30').on('click',function(){
        $('#botonA24').addClass('desactivado');
        $('#botonA30').removeClass('desactivado');
        totalPuntos = 30;
    });
    $('#iniciar').on('click',function(){
        $('#nombre1').text($('#nombreEquipo1').val());
        $('#nombre2').text($('#nombreEquipo2').val());
        $('#meta').text('a '+totalPuntos);
        $('img').attr('src','imagenes/0.png');
        alternarPantallas();
        actualizarPuntos();
    });
    $('#fin').on('click',function(){
        puntajeEquipo1 = 0;
        puntajeEquipo2 = 0;
        alternarPantallas();
    });
    $('#sumarE1').on('click',function(){
        if(puntajeEquipo1 < totalPuntos){
            puntajeEquipo1 ++;
            actualizarPuntos(1);
        }
    })
    $('#sumarE2').on('click',function(){
        if(puntajeEquipo2 < totalPuntos){
            puntajeEquipo2 ++;
            actualizarPuntos(2);
        }
    })
    $('#restarE1').on('click',function(){
        if(puntajeEquipo1 > 0){
            puntajeEquipo1 --;
            actualizarPuntos(1);
        }
    })
    $('#restarE2').on('click',function(){
        if(puntajeEquipo2 > 0){
            puntajeEquipo2 --;
            actualizarPuntos(2);
        }
    })

    function alternarPantallas(){
        if($('#pantalla1').hasClass('visible')){
            $('#pantalla1').addClass('oculto').removeClass('visible');
            $('#pantalla2').addClass('visible').removeClass('oculto');
        }else{
            $('#pantalla1').addClass('visible').removeClass('oculto');
            $('#pantalla2').addClass('oculto').removeClass('visible');
        }                   
    }

    function actualizarPuntos(equipo){
        $('#puntosE1').text(puntajeEquipo1);
        $('#puntosE2').text(puntajeEquipo2);
        switch(totalPuntos){
            case 30:
                var puntosMedios1 = puntajeEquipo1%5;
                var cuadradosEnteros1 = (puntajeEquipo1 - puntosMedios1)/5;
                var puntosMedios2 = puntajeEquipo2%5;
                var cuadradosEnteros2 = (puntajeEquipo2 - puntosMedios2)/5;
                for(var i = 0; i< cuadradosEnteros1; i++){
                    $('#e1i'+i).attr('src','imagenes/5.png');
                }
                $('#e1i'+cuadradosEnteros1).attr('src','imagenes/'+puntosMedios1+'.png');
                for(var i = 0; i< cuadradosEnteros2; i++){
                    $('#e2i'+i).attr('src','imagenes/5.png');
                }
                $('#e2i'+cuadradosEnteros2).attr('src','imagenes/'+puntosMedios2+'.png');
                break;
            case 24:
                if(puntajeEquipo1 > totalPuntos/2)
                {
                    $('#e1i0').attr('src','imagenes/5.png');
                    $('#e1i1').attr('src','imagenes/5.png');
                    $('#e1i2').attr('src','imagenes/2.png');
                    var nuevoPuntaje = puntajeEquipo1 - 12;
                    var puntosMedios1 = nuevoPuntaje%5;
                    var cuadradosEnteros1 = (nuevoPuntaje-puntosMedios1)/5;
                    var numImagen = cuadradosEnteros1 + 3;
                    for(var i = 0; i< cuadradosEnteros1; i++){
                        numImagen = i + 3;
                        $('#e1i'+numImagen).attr('src','imagenes/5.png');
                    }
                    numImagen = cuadradosEnteros1 + 3;
                    $('#e1i'+numImagen).attr('src','imagenes/'+puntosMedios1+'.png');
                }else{
                    var puntosMedios1 = puntajeEquipo1%5;
                    var cuadradosEnteros1 = (puntajeEquipo1 - puntosMedios1)/5;
                    for(var i = 0; i< cuadradosEnteros1; i++){
                        $('#e1i'+i).attr('src','imagenes/5.png');
                    }
                    $('#e1i'+cuadradosEnteros1).attr('src','imagenes/'+puntosMedios1+'.png');
                }
                if(puntajeEquipo2 > 11){
                    $('#e2i0').attr('src','imagenes/5.png');
                    $('#e2i1').attr('src','imagenes/5.png');
                    $('#e2i2').attr('src','imagenes/2.png');
                    var nuevoPuntaje = puntajeEquipo2 - 12;
                    var puntosMedios2 = nuevoPuntaje%5;
                    var cuadradosEnteros2 = (nuevoPuntaje-puntosMedios2)/5;
                    var numImagen = cuadradosEnteros2 + 3;
                    for(var i = 0; i< cuadradosEnteros2; i++){
                        numImagen = i + 3;
                        $('#e2i'+numImagen).attr('src','imagenes/5.png');
                    }
                    numImagen = cuadradosEnteros2 + 3;
                    $('#e2i'+numImagen).attr('src','imagenes/'+puntosMedios2+'.png');
                }else{
                    var puntosMedios2 = puntajeEquipo2%5;
                    var cuadradosEnteros2 = (puntajeEquipo2 - puntosMedios2)/5;
                    for(var i = 0; i< cuadradosEnteros2; i++){
                        $('#e2i'+i).attr('src','imagenes/5.png');
                    }
                    $('#e2i'+cuadradosEnteros2).attr('src','imagenes/'+puntosMedios2+'.png');
                }
                break;
        }
        $('#puntosE1').text(puntajeEquipo1);
        $('#puntosE2').text(puntajeEquipo2);
    }
});
