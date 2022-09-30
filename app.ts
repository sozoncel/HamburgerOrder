let marul_tursu:number=5;
let paket_sos:number=5;
let sogan:number=5;
let kofte:number=5;
let tavuk:number=5;
let domates:number=5;
let ekmek:number=5;
let patates:number=5;
let cola:number=5;
function siparisver(){
    if(marul_tursu>0 ){
        document.getElementById('etsecim').style.display="block";
        document.getElementById('siparisverbutton').style.display="none";
    }else{
        alert("Malzemelerimiz yetersiz olduğu için sizlere yardımcı olamıyoruz.")
    }
}
function koftesec(){
    document.getElementById('koftesecim').style.display="block";
}
function azpismis(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Az Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function() { siparishazir(); }, 3000);
}
    function ortapismis(){
        document.getElementById('Siparisdurumu')?.innerHTML = "Orta Pişmiş Köfteniz Hazırlanıyor.";
        setTimeout(function() { siparishazir(); }, 3000);
    }
        function cokpismis(){
            document.getElementById('Siparisdurumu')?.innerHTML = "Çok Pişmiş Köfteniz Hazırlanıyor.";
            setTimeout(function() { siparishazir(); }, 3000);
}
function tavuksec(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Tavuk menünüz hazırlanıyor.";
    setTimeout(function() { siparishazir(); }, 3000);
    
}
function siparishazir(){
    document.getElementById('Siparisdurumu')?.innerHTML = "Siparişiniz Hazır.";
    document.getElementById('etsecim').style.display="none";
    document.getElementById('koftesecim').style.display="none";
    document.getElementById('yardim').style.display="none";
}
function yenisiparis(){
    document.getElementById('siparisverbutton').style.display="block";
}
