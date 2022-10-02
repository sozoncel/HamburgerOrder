var marul_tursu = 5;
var paket_sos = 5;
var sogan = 5;
var kofte = 5;
var tavuk = 5;
var domates = 5;
var ekmek = 5;
var patates = 5;
var cola = 5;
var patateskontrol = false;
function siparisver() {
    var _a, _b;
    if (marul_tursu > 0) { //Hamburgerlerde malzeme  çıkarma senaryosu olmadığı için stoktaki tek ürünü kontrol etmemiz yeterli olacaktır.
        document.getElementById('etsecim').style.display = "block";
        document.getElementById('siparisverbutton').style.display = "none";
        document.getElementById('coladurum').style.display = "block";
        (_a = document.getElementById('coladurum')) === null || _a === void 0 ? void 0 : _a.innerHTML = "İçeceğiniz Hazırlanıyor.";
        setTimeout(function () { colahazir(); }, 2000);
        document.getElementById('patatesdurum').style.display = "block";
        (_b = document.getElementById('patatesdurum')) === null || _b === void 0 ? void 0 : _b.innerHTML = "Patatesiniz Hazırlanıyor.";
        setTimeout(function () { patateshazir(); }, 5000);
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
    setTimeout(function () { servistepsisi(); }, 3000);
}
function ortapismis() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Orta Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function () { servistepsisi(); }, 3000);
}
function cokpismis() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Çok Pişmiş Köfteniz Hazırlanıyor.";
    setTimeout(function () { servistepsisi(); }, 3000);
}
function tavuksec() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Tavuk menünüz hazırlanıyor.";
    setTimeout(function () { servistepsisi(); }, 3000);
}
function colahazir() {
    var _a;
    (_a = document.getElementById('coladurum')) === null || _a === void 0 ? void 0 : _a.innerHTML = "İçeceğiniz Hazır.";
}
function patateshazir() {
    var _a;
    patateskontrol = true;
    (_a = document.getElementById('patatesdurum')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Patatesiniz Hazır.";
}
function siparishazir() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Siparişiniz Hazır.Yeni Sipariş işlemleri başlatılıyor.";
    document.getElementById('etsecim').style.display = "none";
    document.getElementById('coladurum').style.display = "none";
    document.getElementById('patatesdurum').style.display = "none";
    document.getElementById('koftesecim').style.display = "none";
    document.getElementById('yardim').style.display = "none";
    marul_tursu = marul_tursu - 1;
    setTimeout(function () { yenisiparis(); }, 3000);
}
function servistepsisi() {
    var _a;
    if (patateskontrol == true) {
        (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Soslarınız ve Ürünleriniz Servis Tepsisine Koyuluyor.";
        setTimeout(function () { serviset(); }, 1000);
        patateskontrol = false;
    }
    else {
        setTimeout(function () { servistepsisi(); }, 0000);
    }
}
function serviset() {
    var _a;
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Siparişinizi bir saniye sonra alabilirsiniz.";
    setTimeout(function () { siparishazir(); }, 1000);
}
function yenisiparis() {
    var _a;
    document.getElementById('siparisverbutton').style.display = "block";
    (_a = document.getElementById('Siparisdurumu')) === null || _a === void 0 ? void 0 : _a.innerHTML = "Sipariş Bilgileriniz Alınıyor.";
}
