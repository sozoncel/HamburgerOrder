var marul_tursu = 5;
var paket_sos = 5;
var sogan = 5;
var kofte = 5;
var tavuk = 5;
var domates = 5;
var ekmek = 5;
var patates = 5;
var cola = 5;
function siparisver() {
    if (marul_tursu > 0) {
        document.getElementById('etsecim').style.display = "block";
        document.getElementById('siparisverbutton').style.display = "none";
    }
    else {
        alert("Malzemelerimiz yetersiz olduğu için sizlere yardımcı olamıyoruz.");
    }
}
function koftesec() {
    document.getElementById('koftesecim').style.display = "block";
}
function azpismis() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Az Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function () { siparishazir(); }, 3000);
}
function ortapismis() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Orta Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function () { siparishazir(); }, 3000);
}
function cokpismis() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Çok Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function () { siparishazir(); }, 3000);
}
function tavuksec() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Tavuk menünüz hazırlanıyor.";
    setTimeout(function () { siparishazir(); }, 3000);
}
function siparishazir() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Siparişiniz Hazır.";
    document.getElementById('etsecim').style.display = "none";
    document.getElementById('koftesecim').style.display = "none";
    document.getElementById('yardim').style.display = "none";
}
function yenisiparis() {
    document.getElementById('siparisverbutton').style.display = "block";
}
function changeText() {
    document.getElementById('Label1').innerHTML = 'Merhaba Hoşgeldiniz Siparişinizi Alabilir miyim ? ';
    var nane = document.getElementById("Label2").value;
    cola = cola - 1;
    document.getElementById("Label2").value = nane + cola;
    alert(nane);
}
