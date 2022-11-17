function daftar(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var alamat = document.getElementById('alamat').value;
  if ( name == "" && email == "" && alamat == "") {
        alert('silakan isi dengan lengkap')
    }else{
        alert('informasi sukses')   
    } 
}
