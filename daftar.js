function daftar(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var alamat = document.getElementById('alamat').value;
  
  if ( name == "") {
        alert('silakan isi dengan lengkap')
    }else if( email == ''){
        alert('silakan isi dengan lengkap')
    }else if (alamat == '') {
        alert('silakan isi dengan lengkap')
    }else{
        alert('sukses')
    }
}
