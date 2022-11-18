function daftar(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;
  
    if ( name == '') {
          alert('silakan isi dengan lengkap')
      }else if( email == ''){
          alert('silakan isi dengan lengkap')
      }else if (alamat == '') {
          alert('silakan isi dengan lengkap')
      }
       
       else if (name.length > 20){
          alert('nama lengkap tidak boleh lebih 20 kata')
      }else if( alamat.length > 100){
          alert('alamat tidak boleh lebih dari 100 kata')
      }else{
          alert('sukses')
      }
   }
