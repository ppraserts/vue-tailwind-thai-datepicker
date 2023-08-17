import { d as _ } from "./entry.b864b59f.mjs";
import "vue";
var l = {
  name: "ca",
  weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
  weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
  weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
  months: "Gener_Febrer_Mar\xE7_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
  monthsShort: "Gen._Febr._Mar\xE7_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"),
  weekStart: 1,
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [de] YYYY",
    LLL: "D MMMM [de] YYYY [a les] H:mm",
    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY, H:mm",
    llll: "ddd D MMM YYYY, H:mm"
  },
  relativeTime: {
    future: "d'aqu\xED %s",
    past: "fa %s",
    s: "uns segons",
    m: "un minut",
    mm: "%d minuts",
    h: "una hora",
    hh: "%d hores",
    d: "un dia",
    dd: "%d dies",
    M: "un mes",
    MM: "%d mesos",
    y: "un any",
    yy: "%d anys"
  },
  ordinal: function(e) {
    var s;
    return e === 1 || e === 3 ? s = "r" : e === 2 ? s = "n" : e === 4 ? s = "t" : s = "\xE8", "" + e + s;
  }
};
_.locale(l, null, !0);
export {
  l as default
};
