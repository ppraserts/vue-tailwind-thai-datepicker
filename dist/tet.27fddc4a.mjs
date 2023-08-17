import { d as _ } from "./entry.b864b59f.mjs";
import "vue";
var u = {
  name: "tet",
  weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
  months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xF1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
  weekStart: 1,
  weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
  monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
  weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
  ordinal: function(a) {
    return a;
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  relativeTime: {
    future: "iha %s",
    past: "%s liuba",
    s: "minutu balun",
    m: "minutu ida",
    mm: "minutu %d",
    h: "oras ida",
    hh: "oras %d",
    d: "loron ida",
    dd: "loron %d",
    M: "fulan ida",
    MM: "fulan %d",
    y: "tinan ida",
    yy: "tinan %d"
  }
};
_.locale(u, null, !0);
export {
  u as default
};
