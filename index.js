 
 let data = document.querySelector("#data");

  document.querySelector('#botao').addEventListener('click', function(event) {
        
   
   let d = new Date(data.value);
      d.setDate(d.getDate() + 45);
      var Today2 = d.toLocaleDateString();
      var dataTracinho = Today2.replace(new RegExp("/","g"), "-"); 

      let d2 = new Date(data.value);
      d2.setDate(d2.getDate() + 90);
      var Today3 = d2.toLocaleDateString();
      var dataTracinho2 = Today3.replace(new RegExp("/","g"), "-");


      alert(`45 dias: ${dataTracinho}, 90 dias: ${dataTracinho2}`);
  });
   
 
















   //let d = new Date(data.value);
  // d.setDate(d.getDate() + 45);



  
 
  

