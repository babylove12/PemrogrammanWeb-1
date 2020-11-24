function hitungtotal() {
        var nama = (document.fform.inama.value);
        var barang = (document.fform.ibarang.value);
        var member = (document.fform.imember.value);
        var jumlahbarang = (document.fform.ijumlahpaket.value);

        var ht = 0.0;
        var sub = 0.0;
        var diskon = 0.0;
        var total = 0.0;

        if (barang=="0") {
            ht = 0;
        }

        else if (barang=="cpu") {
            ht = 5000000;
        }

        else if (barang=="monitor") {
            ht = 3000000;
        }

        else if (barang=="keyboard"){
            ht =500000;
        }

        else if (barang=="rom"){
            ht =500000;
        }

        else if (barang=="ssd"){
            ht =1500000;
        }

        else if (barang=="hardisk"){
            ht =2000000;
        }

        else if (barang=="mouse"){
            ht =300000;
        }

        else if (barang=="lengkap"){
            ht =250000000;
        }
        sub = jumlahbarang*ht;

        if (member=="normal") {
            diskon=0.1*sub;
        }
        else{
            diskon=0.5*sub;
        }
        total=sub-diskon;
        document.fform.otiket.value=eval(ht);
        document.fform.osub.value=eval(sub);
        document.fform.odiskon.value=eval(diskon);
        document.fform.ototal.value=eval(total);
        document.fform.onama.value=eval(nama);
    }

function logout(){

    var jawab = confirm('Apakah Anda Yakin Ingin Keluar ?');

    if(jawab == true){

        window.open("index.html", "_parent");

    }else{

        
    }
}