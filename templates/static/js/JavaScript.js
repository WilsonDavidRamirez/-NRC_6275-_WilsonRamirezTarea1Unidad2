
$(function() { //Inicio de la funcion que contendra nuestras validaciones
  
  $("form[name='registration']").validate({ //relacion con nuestro formulario en HTML
   
    rules: { // Campos/Id a revisar e intrucciones a cumplir 
      
      primerNombre:{ //id del campo nombre con la instruccion de ser oligatorio para el formulario
        required: true
      },

      apellido: { //id del campo apellido con la instruccion de ser oligatorio para el formulario
        required: true
      },

      edad:{ //id del campo edad con la instruccion de ser oligatorio para el formulario ademas de mayor a 18
          required: true,
          min:18
      },

      email: { //id del campo email con la instruccion de ser oligatorio para el formulario ademas de ingresar una nomenclatura de correo real
        required: true,
        email: true
      },

     
    },
   
    messages: { //mensajes a mostrar su ni se cumplen o ingresan los datos requeridos en los campos
      primerNombre: {
        required:"Por favor, introduzca su nombre"}, //mensajes para el campo nombre
      apellido: {
        required:"Por favor, introduzca su apellido",//mensajes para el campo apellido
      },
      edad: {
        required:"Por favor, introduzca su edad",//mensajes para el campo edad
        min: "mayor de edad"//mensajes para el campo edad si no se ingresa un numero igual o mayor a 18
      },
      email: {
        required:"Por favor, introduce una dirección de correo",//mensajes para el campo nombre
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});