var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function (req, res) {
  res.render('anasayfa', 
  { "baslik": 'Ana sayfa',
    "sayfaBaslik":{
      "siteAd":"mekanbul",
      "slogan":"Civardaki Mekanları Kesfet"
    },
    "mekanlar":[
      {
        "ad":"Barida Kafe",
        "adres":"Sdü Batı Kampüs",
        "puan":"4",
        "mesafe":"2km",
        "imkanlar":["Kahve","Çay"]
      },
      {
        "ad":"Gloria",
        "adres":"Sdü Doğu Kampüs",
        "puan":"4",
        "mesafe":"100m",
        "imkanlar":["Kahve","Çay","Kek"]
      }
    ]
  
});
};

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi', 
  { "baslik": 'Mekan bilgisi',
    "mekanBaslik":"Gloria",
    "mekanDetay":{
      "ad":"Starbucks",
      "adres":"Centrum Garden",
      "puan":"4",
      "saatler":[
        {
          "gunler":"Pazartesi-Cuma",
          "acilis":"09:00",
          "kapanis":"23:00",
          "kapali":"false",
        },
        {
          "gunler":"Cumartesi-Pazar",
          "acilis":"10:00",
          "kapanis":"23:00",
          "kapali":"false",
        }
      ],
      "imkanlar":["kahve","çay","kek"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "yorumlar":[
        {
          "yorumYapan":"Sinan",
          "puan":"1",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Çok berbat"
        },
        {
          "yorumYapan":"Ali",
          "puan":"5",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Süper"
        }
      ]
    }

});
};

const yorumEkle = function (req, res) {
  res.render('yorumekle', { title: 'Yorum ekle' });
}

module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,

}
