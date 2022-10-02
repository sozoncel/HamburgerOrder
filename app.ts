let marul_tursu:number=5;
let paket_sos:number=5;
let sogan:number=5;
let kofte:number=5;
let tavuk:number=5;
let domates:number=5;
let ekmek:number=5;
let patates:number=5;
let cola:number=5;
let patateskontrol:boolean = false;

function siparisver(){
    if(marul_tursu>0 ){//Hamburgerlerde malzeme  çıkarma senaryosu olmadığı için stoktaki tek ürünü kontrol etmemiz yeterli olacaktır.
        document.getElementById('etsecim').style.display="block";
        document.getElementById('siparisverbutton').style.display="none";
        document.getElementById('coladurum').style.display="block";
    document.getElementById('coladurum')?.innerHTML = "İçeceğiniz Hazırlanıyor.";
    setTimeout(function() { colahazir(); }, 2000);
    document.getElementById('patatesdurum').style.display="block";
    document.getElementById('patatesdurum')?.innerHTML = "Patatesiniz Hazırlanıyor.";
    setTimeout(function() { patateshazir(); }, 5000);
    }else{
        alert("Malzemelerimiz yetersiz olduğu için sizlere yardımcı olamıyoruz.")
    }
}
function koftesec(){
    document.getElementById('koftesecim').style.display="block";
}
function azpismis(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Az Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function() {servistepsisi(); }, 3000);
}
    function ortapismis(){
        document.getElementById('Siparisdurumu')?.innerHTML = "Orta Pişmiş Köfteniz Hazırlanıyor.";
        setTimeout(function() { servistepsisi(); }, 3000);
    }
        function cokpismis(){
            document.getElementById('Siparisdurumu')?.innerHTML = "Çok Pişmiş Köfteniz Hazırlanıyor.";
            setTimeout(function() { servistepsisi(); }, 3000);
}
function tavuksec(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Tavuk menünüz hazırlanıyor.";
    setTimeout(function() { servistepsisi(); }, 3000);
    
}
function colahazir(){
    
    document.getElementById('coladurum')?.innerHTML = "İçeceğiniz Hazır.";
}
function patateshazir(){
    patateskontrol = true ;
    document.getElementById('patatesdurum')?.innerHTML = "Patatesiniz Hazır.";
}
function siparishazir(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Siparişiniz Hazır.Yeni Sipariş işlemleri başlatılıyor.";
    document.getElementById('etsecim').style.display="none";
    document.getElementById('coladurum').style.display="none";
    document.getElementById('patatesdurum').style.display="none";
    document.getElementById('koftesecim').style.display="none";
    document.getElementById('yardim').style.display="none";
    marul_tursu = marul_tursu-1;
    setTimeout(function(){yenisiparis();},3000)
}
function servistepsisi(){
    if(patateskontrol == true){
    document.getElementById('Siparisdurumu')?.innerHTML = "Soslarınız ve Ürünleriniz Servis Tepsisine Koyuluyor.";
    setTimeout(function(){serviset();},1000);
    patateskontrol=false;
    }else{
        setTimeout(function(){servistepsisi();},0000);
    }
}
function serviset(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Siparişinizi bir saniye sonra alabilirsiniz.";
    setTimeout(function(){siparishazir();},1000)
   
}
function yenisiparis(){
    document.getElementById('siparisverbutton').style.display="block";
    document.getElementById('Siparisdurumu')?.innerHTML = "Sipariş Bilgileriniz Alınıyor.";
}
