$(function(){
   $('#fecha').pickadate({
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Cerrar',      
   });

   $('#submit').click(function(e){
      data();

      e.preventDefault();
   });

   function data() {
    numero = $('#val').val();
    fecha = $('#fecha').val().replace(',','').replace('20',"").split(" ");

    $('#valor').text(nt(numero.toString()));
    $('#destinatario').text($('#dest').val());
    $('#monto').text(dotDecimal(numero.toString()));
    $('#fecha-dia').text(fecha[0]);
    $('#fecha-mes').text(fecha[1]);
    $('#fecha-ano').text(fecha[2]);
   };

   function dotDecimal(numero){
      var num = [];
      num= numero.split("").reverse();
      num.forEach(function(v,i){
         if((i+1) == num.length){return false; }
         if((i+1) %3 == 0 ){num[i]="."+num[i]}
      }
   )
      return num.reverse().join('');
   }   
});