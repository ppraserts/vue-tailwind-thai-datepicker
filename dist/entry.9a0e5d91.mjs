import { openBlock as W, createElementBlock as K, createElementVNode as V, withDirectives as fe, vShow as pe, toDisplayString as le, Fragment as we, renderList as ze, inject as ne, createVNode as ee, TransitionGroup as Ft, withCtx as Ye, normalizeClass as Oe, Transition as ft, unref as ue, createCommentVNode as he, withModifiers as _e, cloneVNode as Lt, h as ve, provide as se, ref as q, onMounted as et, watchEffect as ke, computed as de, defineComponent as $e, onUnmounted as Xe, Teleport as Nt, reactive as pt, shallowRef as It, nextTick as Ie, watch as Ht, isProxy as Rt, createBlock as He, renderSlot as Ut, mergeProps as zt } from "vue";
const Wt = { class: "flex justify-between items-center px-2 py-1.5" }, Jt = { class: "flex-shrink-0" }, Gt = { class: "inline-flex rounded-full" }, Zt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = ["d"], qt = { class: "px-1.5 space-x-1.5 flex flex-1" }, Xt = { class: "flex-1 flex rounded-md" }, Qt = ["textContent"], er = { class: "flex-1 flex rounded-md" }, tr = ["textContent"], rr = { class: "flex-shrink-0" }, ar = { class: "inline-flex rounded-full" }, or = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, nr = ["d"], We = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object,
    buddhistEnable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const s = t, n = (e) => s.buddhistEnable ? e === "Jan" || e === "\u0E21.\u0E04." ? "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21" : e === "Feb" || e === "\u0E01.\u0E1E." ? "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C" : e === "Mar" || e === "\u0E21\u0E35.\u0E04." ? "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21" : e === "Apr" || e === "\u0E40\u0E21.\u0E22." ? "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19" : e === "May" || e === "\u0E1E.\u0E04." ? "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21" : e === "Jun" || e === "\u0E21\u0E34.\u0E22." ? "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19" : e === "Jul" || e === "\u0E01.\u0E04." ? "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21" : e === "Aug" || e === "\u0E2A.\u0E04." ? "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21" : e === "Sep" || e === "\u0E01.\u0E22." ? "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19" : e === "Oct" || e === "\u0E15.\u0E04." ? "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21" : e === "Nov" || e === "\u0E1E.\u0E22." ? "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19" : e === "Dec" || e === "\u0E18.\u0E04." ? "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21" : "Invalid month" : e;
    return (e, a) => (W(), K("div", Wt, [
      V("div", Jt, [
        fe(V("span", Gt, [
          V("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (l) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (W(), K("svg", Zt, [
              V("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Kt)
            ]))
          ])
        ], 512), [
          [pe, t.panel.calendar || t.panel.year]
        ])
      ]),
      V("div", qt, [
        V("span", Xt, [
          V("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: le(n(t.calendar.month)),
            onClick: a[1] || (a[1] = (l) => t.calendar.openMonth())
          }, null, 8, Qt)
        ]),
        V("span", er, [
          V("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: le(t.calendar.year + (s.buddhistEnable ? 543 : 0)),
            onClick: a[2] || (a[2] = (l) => t.calendar.openYear())
          }, null, 8, tr)
        ])
      ]),
      V("div", rr, [
        fe(V("span", ar, [
          V("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (l) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (W(), K("svg", or, [
              V("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, nr)
            ]))
          ])
        ], 512), [
          [pe, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, sr = { class: "flex flex-wrap mt-1.5" }, lr = { class: "flex rounded-md mt-1.5" }, ur = ["textContent", "onClick"], Je = {
  __name: "Month",
  props: {
    months: Array,
    buddhistEnable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:month"],
  setup(t, { emit: s }) {
    const n = t, e = (a) => n.buddhistEnable ? a === "Jan" || a === "\u0E21.\u0E04." ? "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21" : a === "Feb" || a === "\u0E01.\u0E1E." ? "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C" : a === "Mar" || a === "\u0E21\u0E35.\u0E04." ? "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21" : a === "Apr" || a === "\u0E40\u0E21.\u0E22." ? "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19" : a === "May" || a === "\u0E1E.\u0E04." ? "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21" : a === "Jun" || a === "\u0E21\u0E34.\u0E22." ? "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19" : a === "Jul" || a === "\u0E01.\u0E04." ? "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21" : a === "Aug" || a === "\u0E2A.\u0E04." ? "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21" : a === "Sep" || a === "\u0E01.\u0E22." ? "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19" : a === "Oct" || a === "\u0E15.\u0E04." ? "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21" : a === "Nov" || a === "\u0E1E.\u0E22." ? "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19" : a === "Dec" || a === "\u0E18.\u0E04." ? "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21" : "Invalid month" : a;
    return (a, l) => (W(), K("div", sr, [
      (W(!0), K(we, null, ze(t.months, (h, u) => (W(), K("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        V("span", lr, [
          V("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: le(e(h)),
            onClick: (p) => s("update:month", u)
          }, null, 8, ur)
        ])
      ]))), 128))
    ]));
  }
}, ir = { class: "grid grid-cols-7 py-2 mt-0.5" }, dr = ["textContent"], Ge = {
  __name: "Week",
  props: {
    weeks: Array,
    buddhistEnable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const s = t, n = (e) => s.buddhistEnable ? e === "Mon" ? "\u0E08." : e === "Tue" ? "\u0E2D." : e === "Wed" ? "\u0E1E." : e === "Thu" ? "\u0E1E\u0E24." : e === "Fri" ? "\u0E28." : e === "Sat" ? "\u0E2A." : e === "Sun" ? "\u0E2D\u0E32." : "Invalid day" : e;
    return (e, a) => (W(), K("div", ir, [
      (W(!0), K(we, null, ze(t.weeks, (l, h) => (W(), K("div", {
        key: h,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        V("span", {
          textContent: le(n(l))
        }, null, 8, dr)
      ]))), 128))
    ]));
  }
}, cr = { class: "flex flex-wrap" }, fr = { class: "flex rounded-md mt-1.5" }, pr = ["textContent", "onClick"], Ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array,
    buddhistEnable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:year"],
  setup(t, { emit: s }) {
    const n = t;
    return (e, a) => (W(), K("div", cr, [
      (W(!0), K(we, null, ze(t.years, (l, h) => (W(), K("div", {
        key: h,
        class: "w-1/2 px-0.5"
      }, [
        V("span", fr, [
          V("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: le(l + (n.buddhistEnable ? 543 : 0)),
            onClick: (u) => s("update:year", l, t.asPrevOrNext)
          }, null, 8, pr)
        ])
      ]))), 128))
    ]));
  }
}, vr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, mr = ["data-tooltip"], hr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ke = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: s }) {
    const n = ne("isBetweenRange"), e = ne("betweenRangeClasses"), a = ne("datepickerClasses"), l = ne("atMouseOver");
    return (h, u) => (W(), K("div", vr, [
      ee(Ft, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ye(() => [
          (W(!0), K(we, null, ze(t.calendar.date(), (p, f) => (W(), K("div", {
            key: f,
            class: Oe(["relative", { "vtd-tooltip": t.asRange && p.duration() }]),
            "data-tooltip": `${p.duration()}`
          }, [
            ee(ft, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ye(() => [
                ue(n)(p) || p.hovered() ? (W(), K("span", {
                  key: 0,
                  class: Oe(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", ue(e)(p)])
                }, null, 2)) : he("", !0)
              ]),
              _: 2
            }, 1024),
            V("button", {
              type: "button",
              class: Oe(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [ue(a)(p), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: p.disabled || p.inRange(),
              onClick: ($) => s("update:date", p, t.asPrevOrNext),
              onMouseenter: ($) => ue(l)(p),
              onFocusin: ($) => ue(l)(p),
              textContent: le(p.date()),
              "data-date": p.toDate()
            }, null, 42, hr)
          ], 10, mr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, yr = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, br = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, gr = ["onClick", "textContent"], xr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, it = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const s = t, n = ne("setToToday"), e = ne("setToYesterday"), a = ne("setToLastDay"), l = ne("setToThisMonth"), h = ne("setToLastMonth"), u = ne("setToCustomShortcut"), p = () => typeof s.shortcuts == "function" ? s.shortcuts() : !1;
    return (f, $) => s.asRange && s.asSingle || s.asRange && !s.asSingle ? (W(), K("div", yr, [
      p() ? (W(), K("ol", br, [
        (W(!0), K(we, null, ze(p(), (w, O) => (W(), K("li", { key: O }, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: _e((E) => ue(u)(w, t.close), ["prevent"]),
            textContent: le(w.label)
          }, null, 8, gr)
        ]))), 128))
      ])) : (W(), K("ol", xr, [
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[0] || ($[0] = _e((w) => ue(n)(t.close), ["prevent"]))
          }, le(s.i18n.today), 1)
        ]),
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[1] || ($[1] = _e((w) => ue(e)(t.close), ["prevent"]))
          }, le(s.i18n.yesterday), 1)
        ]),
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[2] || ($[2] = _e((w) => ue(a)(7, t.close), ["prevent"]))
          }, le(s.i18n.past(7)), 1)
        ]),
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[3] || ($[3] = _e((w) => ue(a)(30, t.close), ["prevent"]))
          }, le(s.i18n.past(30)), 1)
        ]),
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[4] || ($[4] = _e((w) => ue(l)(t.close), ["prevent"]))
          }, le(s.i18n.currentMonth), 1)
        ]),
        V("li", null, [
          V("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: $[5] || ($[5] = _e((w) => ue(h)(t.close), ["prevent"]))
          }, le(s.i18n.pastMonth), 1)
        ])
      ]))
    ])) : he("", !0);
  }
};
function Se(t, s, ...n) {
  if (t in s) {
    let a = s[t];
    return typeof a == "function" ? a(...n) : a;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(s).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, Se), e;
}
var Re = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Re || {}), kr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(kr || {});
function De({ visible: t = !0, features: s = 0, ourProps: n, theirProps: e, ...a }) {
  var l;
  let h = mt(e, n), u = Object.assign(a, { props: h });
  if (t || s & 2 && h.static)
    return ot(u);
  if (s & 1) {
    let p = (l = h.unmount) == null || l ? 0 : 1;
    return Se(p, { [0]() {
      return null;
    }, [1]() {
      return ot({ ...a, props: { ...h, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ot(u);
}
function ot({ props: t, attrs: s, slots: n, slot: e, name: a }) {
  var l, h;
  let { as: u, ...p } = wr(t, ["unmount", "static"]), f = (l = n.default) == null ? void 0 : l.call(n, e), $ = {};
  if (e) {
    let w = !1, O = [];
    for (let [E, N] of Object.entries(e))
      typeof N == "boolean" && (w = !0), N === !0 && O.push(E);
    w && ($["data-headlessui-state"] = O.join(" "));
  }
  if (u === "template") {
    if (f = vt(f != null ? f : []), Object.keys(p).length > 0 || Object.keys(s).length > 0) {
      let [w, ...O] = f != null ? f : [];
      if (!$r(w) || O.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(s)).map((M) => M.trim()).filter((M, T, j) => j.indexOf(M) === T).sort((M, T) => M.localeCompare(T)).map((M) => `  - ${M}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((M) => `  - ${M}`).join(`
`)].join(`
`));
      let E = mt((h = w.props) != null ? h : {}, p), N = Lt(w, E);
      for (let M in E)
        M.startsWith("on") && (N.props || (N.props = {}), N.props[M] = E[M]);
      return N;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return ve(u, Object.assign({}, p, $), { default: () => f });
}
function vt(t) {
  return t.flatMap((s) => s.type === we ? vt(s.children) : [s]);
}
function mt(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let s = {}, n = {};
  for (let e of t)
    for (let a in e)
      a.startsWith("on") && typeof e[a] == "function" ? (n[a] != null || (n[a] = []), n[a].push(e[a])) : s[a] = e[a];
  if (s.disabled || s["aria-disabled"])
    return Object.assign(s, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])));
  for (let e in n)
    Object.assign(s, { [e](a, ...l) {
      let h = n[e];
      for (let u of h) {
        if (a instanceof Event && a.defaultPrevented)
          return;
        u(a, ...l);
      }
    } });
  return s;
}
function wr(t, s = []) {
  let n = Object.assign({}, t);
  for (let e of s)
    e in n && delete n[e];
  return n;
}
function $r(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let Mr = 0;
function jr() {
  return ++Mr;
}
function Ce() {
  return jr();
}
var Ae = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Ae || {});
function H(t) {
  var s;
  return t == null || t.value == null ? null : (s = t.value.$el) != null ? s : t.value;
}
let ht = Symbol("Context");
var Ve = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ve || {});
function yt() {
  return ne(ht, null);
}
function Sr(t) {
  se(ht, t);
}
function dt(t, s) {
  if (t)
    return t;
  let n = s != null ? s : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Dr(t, s) {
  let n = q(dt(t.value.type, t.value.as));
  return et(() => {
    n.value = dt(t.value.type, t.value.as);
  }), ke(() => {
    var e;
    n.value || H(s) && H(s) instanceof HTMLButtonElement && !((e = H(s)) != null && e.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Ar = Object.defineProperty, Or = (t, s, n) => s in t ? Ar(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n, ct = (t, s, n) => (Or(t, typeof s != "symbol" ? s + "" : s, n), n);
class Pr {
  constructor() {
    ct(this, "current", this.detect()), ct(this, "currentId", 0);
  }
  set(s) {
    this.current !== s && (this.currentId = 0, this.current = s);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let tt = new Pr();
function Pe(t) {
  if (tt.isServer)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let s = H(t);
    if (s)
      return s.ownerDocument;
  }
  return document;
}
let nt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Me = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Me || {}), Qe = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(Qe || {}), Tr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(Tr || {});
function rt(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(nt)).sort((s, n) => Math.sign((s.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var lt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(lt || {});
function bt(t, s = 0) {
  var n;
  return t === ((n = Pe(t)) == null ? void 0 : n.body) ? !1 : Se(s, { [0]() {
    return t.matches(nt);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(nt))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
var _r = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(_r || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Er = ["textarea", "input"].join(",");
function Vr(t) {
  var s, n;
  return (n = (s = t == null ? void 0 : t.matches) == null ? void 0 : s.call(t, Er)) != null ? n : !1;
}
function Yr(t, s = (n) => n) {
  return t.slice().sort((n, e) => {
    let a = s(n), l = s(e);
    if (a === null || l === null)
      return 0;
    let h = a.compareDocumentPosition(l);
    return h & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : h & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(t, s, { sorted: n = !0, relativeTo: e = null, skipElements: a = [] } = {}) {
  var l;
  let h = (l = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? l : document, u = Array.isArray(t) ? n ? Yr(t) : t : rt(t);
  a.length > 0 && u.length > 1 && (u = u.filter((N) => !a.includes(N))), e = e != null ? e : h.activeElement;
  let p = (() => {
    if (s & 5)
      return 1;
    if (s & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (s & 1)
      return 0;
    if (s & 2)
      return Math.max(0, u.indexOf(e)) - 1;
    if (s & 4)
      return Math.max(0, u.indexOf(e)) + 1;
    if (s & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), $ = s & 32 ? { preventScroll: !0 } : {}, w = 0, O = u.length, E;
  do {
    if (w >= O || w + O <= 0)
      return 0;
    let N = f + w;
    if (s & 16)
      N = (N + O) % O;
    else {
      if (N < 0)
        return 3;
      if (N >= O)
        return 1;
    }
    E = u[N], E == null || E.focus($), w += p;
  } while (E !== h.activeElement);
  return s & 6 && Vr(E) && E.select(), 2;
}
function qe(t, s, n) {
  tt.isServer || ke((e) => {
    document.addEventListener(t, s, n), e(() => document.removeEventListener(t, s, n));
  });
}
function gt(t, s, n) {
  tt.isServer || ke((e) => {
    window.addEventListener(t, s, n), e(() => window.removeEventListener(t, s, n));
  });
}
function Cr(t, s, n = de(() => !0)) {
  function e(l, h) {
    if (!n.value || l.defaultPrevented)
      return;
    let u = h(l);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let p = function f($) {
      return typeof $ == "function" ? f($()) : Array.isArray($) || $ instanceof Set ? $ : [$];
    }(t);
    for (let f of p) {
      if (f === null)
        continue;
      let $ = f instanceof HTMLElement ? f : H(f);
      if ($ != null && $.contains(u) || l.composed && l.composedPath().includes($))
        return;
    }
    return !bt(u, lt.Loose) && u.tabIndex !== -1 && l.preventDefault(), s(l, u);
  }
  let a = q(null);
  qe("pointerdown", (l) => {
    var h, u;
    n.value && (a.value = ((u = (h = l.composedPath) == null ? void 0 : h.call(l)) == null ? void 0 : u[0]) || l.target);
  }, !0), qe("mousedown", (l) => {
    var h, u;
    n.value && (a.value = ((u = (h = l.composedPath) == null ? void 0 : h.call(l)) == null ? void 0 : u[0]) || l.target);
  }, !0), qe("click", (l) => {
    a.value && (e(l, () => a.value), a.value = null);
  }, !0), qe("touchend", (l) => e(l, () => l.target instanceof HTMLElement ? l.target : null), !0), gt("blur", (l) => e(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Be = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Be || {});
let Ue = $e({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: s, attrs: n }) {
  return () => {
    let { features: e, ...a } = t, l = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return De({ ourProps: l, theirProps: a, slot: {}, attrs: n, slots: s, name: "Hidden" });
  };
} });
var je = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(je || {});
function xt() {
  let t = q(0);
  return gt("keydown", (s) => {
    s.key === "Tab" && (t.value = s.shiftKey ? 1 : 0);
  }), t;
}
function Br(t, s, n, e) {
  tt.isServer || ke((a) => {
    t = t != null ? t : window, t.addEventListener(s, n, e), a(() => t.removeEventListener(s, n, e));
  });
}
let kt = Symbol("ForcePortalRootContext");
function Fr() {
  return ne(kt, !1);
}
$e({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(t, { slots: s, attrs: n }) {
  return se(kt, t.force), () => {
    let { force: e, ...a } = t;
    return De({ theirProps: a, ourProps: {}, slot: {}, slots: s, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Lr(t) {
  let s = Pe(t);
  if (!s) {
    if (t === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`);
  }
  let n = s.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let e = s.createElement("div");
  return e.setAttribute("id", "headlessui-portal-root"), s.body.appendChild(e);
}
$e({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: s, attrs: n }) {
  let e = q(null), a = de(() => Pe(e)), l = Fr(), h = ne(wt, null), u = q(l === !0 || h == null ? Lr(e.value) : h.resolveTarget());
  ke(() => {
    l || h != null && (u.value = h.resolveTarget());
  });
  let p = ne(st, null);
  return et(() => {
    let f = H(e);
    f && p && Xe(p.register(f));
  }), Xe(() => {
    var f, $;
    let w = (f = a.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    w && u.value === w && u.value.children.length <= 0 && (($ = u.value.parentElement) == null || $.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let f = { ref: e, "data-headlessui-portal": "" };
    return ve(Nt, { to: u.value }, De({ ourProps: f, theirProps: t, slot: {}, attrs: n, slots: s, name: "Portal" }));
  };
} });
let st = Symbol("PortalParentContext");
function Nr() {
  let t = ne(st, null), s = q([]);
  function n(l) {
    return s.value.push(l), t && t.register(l), () => e(l);
  }
  function e(l) {
    let h = s.value.indexOf(l);
    h !== -1 && s.value.splice(h, 1), t && t.unregister(l);
  }
  let a = { register: n, unregister: e, portals: s };
  return [s, $e({ name: "PortalWrapper", setup(l, { slots: h }) {
    return se(st, a), () => {
      var u;
      return (u = h.default) == null ? void 0 : u.call(h);
    };
  } })];
}
let wt = Symbol("PortalGroupContext");
$e({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: s, slots: n }) {
  let e = pt({ resolveTarget() {
    return t.target;
  } });
  return se(wt, e), () => {
    let { target: a, ...l } = t;
    return De({ theirProps: l, ourProps: {}, slot: {}, attrs: s, slots: n, name: "PortalGroup" });
  };
} });
function Ir({ defaultContainers: t = [], portals: s, mainTreeNodeRef: n } = {}) {
  let e = q(null), a = Pe(e);
  function l() {
    var h;
    let u = [];
    for (let p of t)
      p !== null && (p instanceof HTMLElement ? u.push(p) : "value" in p && p.value instanceof HTMLElement && u.push(p.value));
    if (s != null && s.value)
      for (let p of s.value)
        u.push(p);
    for (let p of (h = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? h : [])
      p !== document.body && p !== document.head && p instanceof HTMLElement && p.id !== "headlessui-portal-root" && (p.contains(H(e)) || u.some((f) => p.contains(f)) || u.push(p));
    return u;
  }
  return { resolveContainers: l, contains(h) {
    return l().some((u) => u.contains(h));
  }, mainTreeNodeRef: e, MainTreeNode() {
    return n != null ? null : ve(Ue, { features: Be.Hidden, ref: e });
  } };
}
function Hr() {
  let t = q(null);
  return { mainTreeNodeRef: t, MainTreeNode() {
    return ve(Ue, { features: Be.Hidden, ref: t });
  } };
}
var Rr = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Rr || {});
let $t = Symbol("PopoverContext");
function at(t) {
  let s = ne($t, null);
  if (s === null) {
    let n = new Error(`<${t} /> is missing a parent <${Dt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, at), n;
  }
  return s;
}
let Mt = Symbol("PopoverGroupContext");
function jt() {
  return ne(Mt, null);
}
let St = Symbol("PopoverPanelContext");
function Ur() {
  return ne(St, null);
}
let Dt = $e({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: s, attrs: n, expose: e }) {
  var a;
  let l = q(null);
  e({ el: l, $el: l });
  let h = q(1), u = q(null), p = q(null), f = q(null), $ = q(null), w = de(() => Pe(l)), O = de(() => {
    var C, d;
    if (!H(u) || !H($))
      return !1;
    for (let _ of document.querySelectorAll("body > *"))
      if (Number(_ == null ? void 0 : _.contains(H(u))) ^ Number(_ == null ? void 0 : _.contains(H($))))
        return !0;
    let r = rt(), x = r.indexOf(H(u)), Y = (x + r.length - 1) % r.length, A = (x + 1) % r.length, z = r[Y], Z = r[A];
    return !((C = H($)) != null && C.contains(z)) && !((d = H($)) != null && d.contains(Z));
  }), E = { popoverState: h, buttonId: q(null), panelId: q(null), panel: $, button: u, isPortalled: O, beforePanelSentinel: p, afterPanelSentinel: f, togglePopover() {
    h.value = Se(h.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    h.value !== 1 && (h.value = 1);
  }, close(C) {
    E.closePopover();
    let d = (() => C ? C instanceof HTMLElement ? C : C.value instanceof HTMLElement ? H(C) : H(E.button) : H(E.button))();
    d == null || d.focus();
  } };
  se($t, E), Sr(de(() => Se(h.value, { [0]: Ve.Open, [1]: Ve.Closed })));
  let N = { buttonId: E.buttonId, panelId: E.panelId, close() {
    E.closePopover();
  } }, M = jt(), T = M == null ? void 0 : M.registerPopover, [j, D] = Nr(), k = Ir({ mainTreeNodeRef: M == null ? void 0 : M.mainTreeNodeRef, portals: j, defaultContainers: [u, $] });
  function I() {
    var C, d, r, x;
    return (x = M == null ? void 0 : M.isFocusWithinPopoverGroup()) != null ? x : ((C = w.value) == null ? void 0 : C.activeElement) && (((d = H(u)) == null ? void 0 : d.contains(w.value.activeElement)) || ((r = H($)) == null ? void 0 : r.contains(w.value.activeElement)));
  }
  return ke(() => T == null ? void 0 : T(N)), Br((a = w.value) == null ? void 0 : a.defaultView, "focus", (C) => {
    var d, r;
    C.target !== window && C.target instanceof HTMLElement && h.value === 0 && (I() || u && $ && (k.contains(C.target) || (d = H(E.beforePanelSentinel)) != null && d.contains(C.target) || (r = H(E.afterPanelSentinel)) != null && r.contains(C.target) || E.closePopover()));
  }, !0), Cr(k.resolveContainers, (C, d) => {
    var r;
    E.closePopover(), bt(d, lt.Loose) || (C.preventDefault(), (r = H(u)) == null || r.focus());
  }, de(() => h.value === 0)), () => {
    let C = { open: h.value === 0, close: E.close };
    return ve(we, [ve(D, {}, () => De({ theirProps: { ...t, ...n }, ourProps: { ref: l }, slot: C, slots: s, attrs: n, name: "Popover" })), ve(k.MainTreeNode)]);
  };
} }), zr = $e({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Ce()}` } }, inheritAttrs: !1, setup(t, { attrs: s, slots: n, expose: e }) {
  let a = at("PopoverButton"), l = de(() => Pe(a.button));
  e({ el: a.button, $el: a.button }), et(() => {
    a.buttonId.value = t.id;
  }), Xe(() => {
    a.buttonId.value = null;
  });
  let h = jt(), u = h == null ? void 0 : h.closeOthers, p = Ur(), f = de(() => p === null ? !1 : p.value === a.panelId.value), $ = q(null), w = `headlessui-focus-sentinel-${Ce()}`;
  f.value || ke(() => {
    a.button.value = $.value;
  });
  let O = Dr(de(() => ({ as: t.as, type: s.type })), $);
  function E(k) {
    var I, C, d, r, x;
    if (f.value) {
      if (a.popoverState.value === 1)
        return;
      switch (k.key) {
        case Ae.Space:
        case Ae.Enter:
          k.preventDefault(), (C = (I = k.target).click) == null || C.call(I), a.closePopover(), (d = H(a.button)) == null || d.focus();
          break;
      }
    } else
      switch (k.key) {
        case Ae.Space:
        case Ae.Enter:
          k.preventDefault(), k.stopPropagation(), a.popoverState.value === 1 && (u == null || u(a.buttonId.value)), a.togglePopover();
          break;
        case Ae.Escape:
          if (a.popoverState.value !== 0)
            return u == null ? void 0 : u(a.buttonId.value);
          if (!H(a.button) || (r = l.value) != null && r.activeElement && !((x = H(a.button)) != null && x.contains(l.value.activeElement)))
            return;
          k.preventDefault(), k.stopPropagation(), a.closePopover();
          break;
      }
  }
  function N(k) {
    f.value || k.key === Ae.Space && k.preventDefault();
  }
  function M(k) {
    var I, C;
    t.disabled || (f.value ? (a.closePopover(), (I = H(a.button)) == null || I.focus()) : (k.preventDefault(), k.stopPropagation(), a.popoverState.value === 1 && (u == null || u(a.buttonId.value)), a.togglePopover(), (C = H(a.button)) == null || C.focus()));
  }
  function T(k) {
    k.preventDefault(), k.stopPropagation();
  }
  let j = xt();
  function D() {
    let k = H(a.panel);
    if (!k)
      return;
    function I() {
      Se(j.value, { [je.Forwards]: () => Ee(k, Me.First), [je.Backwards]: () => Ee(k, Me.Last) }) === Qe.Error && Ee(rt().filter((C) => C.dataset.headlessuiFocusGuard !== "true"), Se(j.value, { [je.Forwards]: Me.Next, [je.Backwards]: Me.Previous }), { relativeTo: H(a.button) });
    }
    I();
  }
  return () => {
    let k = a.popoverState.value === 0, I = { open: k }, { id: C, ...d } = t, r = f.value ? { ref: $, type: O.value, onKeydown: E, onClick: M } : { ref: $, id: C, type: O.value, "aria-expanded": a.popoverState.value === 0, "aria-controls": H(a.panel) ? a.panelId.value : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: E, onKeyup: N, onClick: M, onMousedown: T };
    return ve(we, [De({ ourProps: r, theirProps: { ...s, ...d }, slot: I, attrs: s, slots: n, name: "PopoverButton" }), k && !f.value && a.isPortalled.value && ve(Ue, { id: w, features: Be.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D })]);
  };
} }), Wr = $e({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: s, slots: n }) {
  let e = at("PopoverOverlay"), a = `headlessui-popover-overlay-${Ce()}`, l = yt(), h = de(() => l !== null ? (l.value & Ve.Open) === Ve.Open : e.popoverState.value === 0);
  function u() {
    e.closePopover();
  }
  return () => {
    let p = { open: e.popoverState.value === 0 };
    return De({ ourProps: { id: a, "aria-hidden": !0, onClick: u }, theirProps: t, slot: p, attrs: s, slots: n, features: Re.RenderStrategy | Re.Static, visible: h.value, name: "PopoverOverlay" });
  };
} }), Jr = $e({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Ce()}` } }, inheritAttrs: !1, setup(t, { attrs: s, slots: n, expose: e }) {
  let { focus: a } = t, l = at("PopoverPanel"), h = de(() => Pe(l.panel)), u = `headlessui-focus-sentinel-before-${Ce()}`, p = `headlessui-focus-sentinel-after-${Ce()}`;
  e({ el: l.panel, $el: l.panel }), et(() => {
    l.panelId.value = t.id;
  }), Xe(() => {
    l.panelId.value = null;
  }), se(St, l.panelId), ke(() => {
    var T, j;
    if (!a || l.popoverState.value !== 0 || !l.panel)
      return;
    let D = (T = h.value) == null ? void 0 : T.activeElement;
    (j = H(l.panel)) != null && j.contains(D) || Ee(H(l.panel), Me.First);
  });
  let f = yt(), $ = de(() => f !== null ? (f.value & Ve.Open) === Ve.Open : l.popoverState.value === 0);
  function w(T) {
    var j, D;
    switch (T.key) {
      case Ae.Escape:
        if (l.popoverState.value !== 0 || !H(l.panel) || h.value && !((j = H(l.panel)) != null && j.contains(h.value.activeElement)))
          return;
        T.preventDefault(), T.stopPropagation(), l.closePopover(), (D = H(l.button)) == null || D.focus();
        break;
    }
  }
  function O(T) {
    var j, D, k, I, C;
    let d = T.relatedTarget;
    d && H(l.panel) && ((j = H(l.panel)) != null && j.contains(d) || (l.closePopover(), ((k = (D = H(l.beforePanelSentinel)) == null ? void 0 : D.contains) != null && k.call(D, d) || (C = (I = H(l.afterPanelSentinel)) == null ? void 0 : I.contains) != null && C.call(I, d)) && d.focus({ preventScroll: !0 })));
  }
  let E = xt();
  function N() {
    let T = H(l.panel);
    if (!T)
      return;
    function j() {
      Se(E.value, { [je.Forwards]: () => {
        var D;
        Ee(T, Me.First) === Qe.Error && ((D = H(l.afterPanelSentinel)) == null || D.focus());
      }, [je.Backwards]: () => {
        var D;
        (D = H(l.button)) == null || D.focus({ preventScroll: !0 });
      } });
    }
    j();
  }
  function M() {
    let T = H(l.panel);
    if (!T)
      return;
    function j() {
      Se(E.value, { [je.Forwards]: () => {
        let D = H(l.button), k = H(l.panel);
        if (!D)
          return;
        let I = rt(), C = I.indexOf(D), d = I.slice(0, C + 1), r = [...I.slice(C + 1), ...d];
        for (let x of r.slice())
          if (x.dataset.headlessuiFocusGuard === "true" || k != null && k.contains(x)) {
            let Y = r.indexOf(x);
            Y !== -1 && r.splice(Y, 1);
          }
        Ee(r, Me.First, { sorted: !1 });
      }, [je.Backwards]: () => {
        var D;
        Ee(T, Me.Previous) === Qe.Error && ((D = H(l.button)) == null || D.focus());
      } });
    }
    j();
  }
  return () => {
    let T = { open: l.popoverState.value === 0, close: l.close }, { id: j, focus: D, ...k } = t, I = { ref: l.panel, id: j, onKeydown: w, onFocusout: a && l.popoverState.value === 0 ? O : void 0, tabIndex: -1 };
    return De({ ourProps: I, theirProps: { ...s, ...k }, attrs: s, slot: T, slots: { ...n, default: (...C) => {
      var d;
      return [ve(we, [$.value && l.isPortalled.value && ve(Ue, { id: u, ref: l.beforePanelSentinel, features: Be.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: N }), (d = n.default) == null ? void 0 : d.call(n, ...C), $.value && l.isPortalled.value && ve(Ue, { id: p, ref: l.afterPanelSentinel, features: Be.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M })])];
    } }, features: Re.RenderStrategy | Re.Static, visible: $.value, name: "PopoverPanel" });
  };
} });
$e({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: s, slots: n, expose: e }) {
  let a = q(null), l = It([]), h = de(() => Pe(a)), u = Hr();
  e({ el: a, $el: a });
  function p(O) {
    let E = l.value.indexOf(O);
    E !== -1 && l.value.splice(E, 1);
  }
  function f(O) {
    return l.value.push(O), () => {
      p(O);
    };
  }
  function $() {
    var O;
    let E = h.value;
    if (!E)
      return !1;
    let N = E.activeElement;
    return (O = H(a)) != null && O.contains(N) ? !0 : l.value.some((M) => {
      var T, j;
      return ((T = E.getElementById(M.buttonId.value)) == null ? void 0 : T.contains(N)) || ((j = E.getElementById(M.panelId.value)) == null ? void 0 : j.contains(N));
    });
  }
  function w(O) {
    for (let E of l.value)
      E.buttonId.value !== O && E.close();
  }
  return se(Mt, { registerPopover: f, unregisterPopover: p, isFocusWithinPopoverGroup: $, closeOthers: w, mainTreeNodeRef: u.mainTreeNodeRef }), () => ve(we, [De({ ourProps: { ref: a }, theirProps: { ...t, ...s }, slot: {}, attrs: s, slots: n, name: "PopoverGroup" }), ve(u.MainTreeNode)]);
} });
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    var n = 1e3, e = 6e4, a = 36e5, l = "millisecond", h = "second", u = "minute", p = "hour", f = "day", $ = "week", w = "month", O = "quarter", E = "year", N = "date", M = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, j = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
      var g = ["th", "st", "nd", "rd"], y = _ % 100;
      return "[" + _ + (g[(y - 20) % 10] || g[y] || g[0]) + "]";
    } }, k = function(_, g, y) {
      var S = String(_);
      return !S || S.length >= g ? _ : "" + Array(g + 1 - S.length).join(y) + _;
    }, I = { s: k, z: function(_) {
      var g = -_.utcOffset(), y = Math.abs(g), S = Math.floor(y / 60), P = y % 60;
      return (g <= 0 ? "+" : "-") + k(S, 2, "0") + ":" + k(P, 2, "0");
    }, m: function _(g, y) {
      if (g.date() < y.date())
        return -_(y, g);
      var S = 12 * (y.year() - g.year()) + (y.month() - g.month()), P = g.clone().add(S, w), B = y - P < 0, F = g.clone().add(S + (B ? -1 : 1), w);
      return +(-(S + (y - P) / (B ? P - F : F - P)) || 0);
    }, a: function(_) {
      return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
    }, p: function(_) {
      return { M: w, y: E, w: $, d: f, D: N, h: p, m: u, s: h, ms: l, Q: O }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
    }, u: function(_) {
      return _ === void 0;
    } }, C = "en", d = {};
    d[C] = D;
    var r = function(_) {
      return _ instanceof z;
    }, x = function _(g, y, S) {
      var P;
      if (!g)
        return C;
      if (typeof g == "string") {
        var B = g.toLowerCase();
        d[B] && (P = B), y && (d[B] = y, P = B);
        var F = g.split("-");
        if (!P && F.length > 1)
          return _(F[0]);
      } else {
        var J = g.name;
        d[J] = g, P = J;
      }
      return !S && P && (C = P), P || !S && C;
    }, Y = function(_, g) {
      if (r(_))
        return _.clone();
      var y = typeof g == "object" ? g : {};
      return y.date = _, y.args = arguments, new z(y);
    }, A = I;
    A.l = x, A.i = r, A.w = function(_, g) {
      return Y(_, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
    };
    var z = function() {
      function _(y) {
        this.$L = x(y.locale, null, !0), this.parse(y);
      }
      var g = _.prototype;
      return g.parse = function(y) {
        this.$d = function(S) {
          var P = S.date, B = S.utc;
          if (P === null)
            return new Date(NaN);
          if (A.u(P))
            return new Date();
          if (P instanceof Date)
            return new Date(P);
          if (typeof P == "string" && !/Z$/i.test(P)) {
            var F = P.match(T);
            if (F) {
              var J = F[2] - 1 || 0, G = (F[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(F[1], J, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, G)) : new Date(F[1], J, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, G);
            }
          }
          return new Date(P);
        }(y), this.$x = y.x || {}, this.init();
      }, g.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, g.$utils = function() {
        return A;
      }, g.isValid = function() {
        return this.$d.toString() !== M;
      }, g.isSame = function(y, S) {
        var P = Y(y);
        return this.startOf(S) <= P && P <= this.endOf(S);
      }, g.isAfter = function(y, S) {
        return Y(y) < this.startOf(S);
      }, g.isBefore = function(y, S) {
        return this.endOf(S) < Y(y);
      }, g.$g = function(y, S, P) {
        return A.u(y) ? this[S] : this.set(P, y);
      }, g.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, g.valueOf = function() {
        return this.$d.getTime();
      }, g.startOf = function(y, S) {
        var P = this, B = !!A.u(S) || S, F = A.p(y), J = function(oe, ae) {
          var ce = A.w(P.$u ? Date.UTC(P.$y, ae, oe) : new Date(P.$y, ae, oe), P);
          return B ? ce : ce.endOf(f);
        }, G = function(oe, ae) {
          return A.w(P.toDate()[oe].apply(P.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), P);
        }, te = this.$W, re = this.$M, ie = this.$D, be = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case E:
            return B ? J(1, 0) : J(31, 11);
          case w:
            return B ? J(1, re) : J(0, re + 1);
          case $:
            var ye = this.$locale().weekStart || 0, ge = (te < ye ? te + 7 : te) - ye;
            return J(B ? ie - ge : ie + (6 - ge), re);
          case f:
          case N:
            return G(be + "Hours", 0);
          case p:
            return G(be + "Minutes", 1);
          case u:
            return G(be + "Seconds", 2);
          case h:
            return G(be + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, g.endOf = function(y) {
        return this.startOf(y, !1);
      }, g.$set = function(y, S) {
        var P, B = A.p(y), F = "set" + (this.$u ? "UTC" : ""), J = (P = {}, P[f] = F + "Date", P[N] = F + "Date", P[w] = F + "Month", P[E] = F + "FullYear", P[p] = F + "Hours", P[u] = F + "Minutes", P[h] = F + "Seconds", P[l] = F + "Milliseconds", P)[B], G = B === f ? this.$D + (S - this.$W) : S;
        if (B === w || B === E) {
          var te = this.clone().set(N, 1);
          te.$d[J](G), te.init(), this.$d = te.set(N, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          J && this.$d[J](G);
        return this.init(), this;
      }, g.set = function(y, S) {
        return this.clone().$set(y, S);
      }, g.get = function(y) {
        return this[A.p(y)]();
      }, g.add = function(y, S) {
        var P, B = this;
        y = Number(y);
        var F = A.p(S), J = function(re) {
          var ie = Y(B);
          return A.w(ie.date(ie.date() + Math.round(re * y)), B);
        };
        if (F === w)
          return this.set(w, this.$M + y);
        if (F === E)
          return this.set(E, this.$y + y);
        if (F === f)
          return J(1);
        if (F === $)
          return J(7);
        var G = (P = {}, P[u] = e, P[p] = a, P[h] = n, P)[F] || 1, te = this.$d.getTime() + y * G;
        return A.w(te, this);
      }, g.subtract = function(y, S) {
        return this.add(-1 * y, S);
      }, g.format = function(y) {
        var S = this, P = this.$locale();
        if (!this.isValid())
          return P.invalidDate || M;
        var B = y || "YYYY-MM-DDTHH:mm:ssZ", F = A.z(this), J = this.$H, G = this.$m, te = this.$M, re = P.weekdays, ie = P.months, be = P.meridiem, ye = function(ae, ce, me, xe) {
          return ae && (ae[ce] || ae(S, B)) || me[ce].slice(0, xe);
        }, ge = function(ae) {
          return A.s(J % 12 || 12, ae, "0");
        }, oe = be || function(ae, ce, me) {
          var xe = ae < 12 ? "AM" : "PM";
          return me ? xe.toLowerCase() : xe;
        };
        return B.replace(j, function(ae, ce) {
          return ce || function(me) {
            switch (me) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return A.s(S.$y, 4, "0");
              case "M":
                return te + 1;
              case "MM":
                return A.s(te + 1, 2, "0");
              case "MMM":
                return ye(P.monthsShort, te, ie, 3);
              case "MMMM":
                return ye(ie, te);
              case "D":
                return S.$D;
              case "DD":
                return A.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return ye(P.weekdaysMin, S.$W, re, 2);
              case "ddd":
                return ye(P.weekdaysShort, S.$W, re, 3);
              case "dddd":
                return re[S.$W];
              case "H":
                return String(J);
              case "HH":
                return A.s(J, 2, "0");
              case "h":
                return ge(1);
              case "hh":
                return ge(2);
              case "a":
                return oe(J, G, !0);
              case "A":
                return oe(J, G, !1);
              case "m":
                return String(G);
              case "mm":
                return A.s(G, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return A.s(S.$s, 2, "0");
              case "SSS":
                return A.s(S.$ms, 3, "0");
              case "Z":
                return F;
            }
            return null;
          }(ae) || F.replace(":", "");
        });
      }, g.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, g.diff = function(y, S, P) {
        var B, F = this, J = A.p(S), G = Y(y), te = (G.utcOffset() - this.utcOffset()) * e, re = this - G, ie = function() {
          return A.m(F, G);
        };
        switch (J) {
          case E:
            B = ie() / 12;
            break;
          case w:
            B = ie();
            break;
          case O:
            B = ie() / 3;
            break;
          case $:
            B = (re - te) / 6048e5;
            break;
          case f:
            B = (re - te) / 864e5;
            break;
          case p:
            B = re / a;
            break;
          case u:
            B = re / e;
            break;
          case h:
            B = re / n;
            break;
          default:
            B = re;
        }
        return P ? B : A.a(B);
      }, g.daysInMonth = function() {
        return this.endOf(w).$D;
      }, g.$locale = function() {
        return d[this.$L];
      }, g.locale = function(y, S) {
        if (!y)
          return this.$L;
        var P = this.clone(), B = x(y, S, !0);
        return B && (P.$L = B), P;
      }, g.clone = function() {
        return A.w(this.$d, this);
      }, g.toDate = function() {
        return new Date(this.valueOf());
      }, g.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, g.toISOString = function() {
        return this.$d.toISOString();
      }, g.toString = function() {
        return this.$d.toUTCString();
      }, _;
    }(), Z = z.prototype;
    return Y.prototype = Z, [["$ms", l], ["$s", h], ["$m", u], ["$H", p], ["$W", f], ["$M", w], ["$y", E], ["$D", N]].forEach(function(_) {
      Z[_[1]] = function(g) {
        return this.$g(g, _[0], _[1]);
      };
    }), Y.extend = function(_, g) {
      return _.$i || (_(g, z, Y), _.$i = !0), Y;
    }, Y.locale = x, Y.isDayjs = r, Y.unix = function(_) {
      return Y(1e3 * _);
    }, Y.en = d[C], Y.Ls = d, Y.p = {}, Y;
  });
})(At);
const i = At.exports;
var Ot = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    return function(n, e) {
      var a = e.prototype, l = a.format;
      a.format = function(h) {
        var u = this, p = (h || "YYYY-MM-DDTHH:mm:ssZ").replace(/(\[[^\]]+])|BBBB|BB/g, function(f, $) {
          var w, O = String(u.$y + 543), E = f === "BB" ? [O.slice(-2), 2] : [O, 4];
          return $ || (w = u.$utils()).s.apply(w, E.concat(["0"]));
        });
        return l.bind(this)(p);
      };
    };
  });
})(Ot);
const Gr = Ot.exports;
var Pt = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    return function(n, e, a) {
      var l = e.prototype, h = function(w) {
        return w && (w.indexOf ? w : w.s);
      }, u = function(w, O, E, N, M) {
        var T = w.name ? w : w.$locale(), j = h(T[O]), D = h(T[E]), k = j || D.map(function(C) {
          return C.slice(0, N);
        });
        if (!M)
          return k;
        var I = T.weekStart;
        return k.map(function(C, d) {
          return k[(d + (I || 0)) % 7];
        });
      }, p = function() {
        return a.Ls[a.locale()];
      }, f = function(w, O) {
        return w.formats[O] || function(E) {
          return E.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, M, T) {
            return M || T.slice(1);
          });
        }(w.formats[O.toUpperCase()]);
      }, $ = function() {
        var w = this;
        return { months: function(O) {
          return O ? O.format("MMMM") : u(w, "months");
        }, monthsShort: function(O) {
          return O ? O.format("MMM") : u(w, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return w.$locale().weekStart || 0;
        }, weekdays: function(O) {
          return O ? O.format("dddd") : u(w, "weekdays");
        }, weekdaysMin: function(O) {
          return O ? O.format("dd") : u(w, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(O) {
          return O ? O.format("ddd") : u(w, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(O) {
          return f(w.$locale(), O);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      l.localeData = function() {
        return $.bind(this)();
      }, a.localeData = function() {
        var w = p();
        return { firstDayOfWeek: function() {
          return w.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(O) {
          return f(w, O);
        }, meridiem: w.meridiem, ordinal: w.ordinal };
      }, a.months = function() {
        return u(p(), "months");
      }, a.monthsShort = function() {
        return u(p(), "monthsShort", "months", 3);
      }, a.weekdays = function(w) {
        return u(p(), "weekdays", null, null, w);
      }, a.weekdaysShort = function(w) {
        return u(p(), "weekdaysShort", "weekdays", 3, w);
      }, a.weekdaysMin = function(w) {
        return u(p(), "weekdaysMin", "weekdays", 2, w);
      };
    };
  });
})(Pt);
const Zr = Pt.exports;
var Tt = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, a, l) {
      var h = a.prototype, u = h.format;
      l.en.formats = n, h.format = function(p) {
        p === void 0 && (p = "YYYY-MM-DDTHH:mm:ssZ");
        var f = this.$locale().formats, $ = function(w, O) {
          return w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, N, M) {
            var T = M && M.toUpperCase();
            return N || O[M] || n[M] || O[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, D, k) {
              return D || k.slice(1);
            });
          });
        }(p, f === void 0 ? {} : f);
        return u.call(this, $);
      };
    };
  });
})(Tt);
const Kr = Tt.exports;
var _t = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, l = /\d\d?/, h = /\d*[^-_:/,()\s\d]+/, u = {}, p = function(M) {
      return (M = +M) + (M > 68 ? 1900 : 2e3);
    }, f = function(M) {
      return function(T) {
        this[M] = +T;
      };
    }, $ = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
      (this.zone || (this.zone = {})).offset = function(T) {
        if (!T || T === "Z")
          return 0;
        var j = T.match(/([+-]|\d\d)/g), D = 60 * j[1] + (+j[2] || 0);
        return D === 0 ? 0 : j[0] === "+" ? -D : D;
      }(M);
    }], w = function(M) {
      var T = u[M];
      return T && (T.indexOf ? T : T.s.concat(T.f));
    }, O = function(M, T) {
      var j, D = u.meridiem;
      if (D) {
        for (var k = 1; k <= 24; k += 1)
          if (M.indexOf(D(k, 0, T)) > -1) {
            j = k > 12;
            break;
          }
      } else
        j = M === (T ? "pm" : "PM");
      return j;
    }, E = { A: [h, function(M) {
      this.afternoon = O(M, !1);
    }], a: [h, function(M) {
      this.afternoon = O(M, !0);
    }], S: [/\d/, function(M) {
      this.milliseconds = 100 * +M;
    }], SS: [a, function(M) {
      this.milliseconds = 10 * +M;
    }], SSS: [/\d{3}/, function(M) {
      this.milliseconds = +M;
    }], s: [l, f("seconds")], ss: [l, f("seconds")], m: [l, f("minutes")], mm: [l, f("minutes")], H: [l, f("hours")], h: [l, f("hours")], HH: [l, f("hours")], hh: [l, f("hours")], D: [l, f("day")], DD: [a, f("day")], Do: [h, function(M) {
      var T = u.ordinal, j = M.match(/\d+/);
      if (this.day = j[0], T)
        for (var D = 1; D <= 31; D += 1)
          T(D).replace(/\[|\]/g, "") === M && (this.day = D);
    }], M: [l, f("month")], MM: [a, f("month")], MMM: [h, function(M) {
      var T = w("months"), j = (w("monthsShort") || T.map(function(D) {
        return D.slice(0, 3);
      })).indexOf(M) + 1;
      if (j < 1)
        throw new Error();
      this.month = j % 12 || j;
    }], MMMM: [h, function(M) {
      var T = w("months").indexOf(M) + 1;
      if (T < 1)
        throw new Error();
      this.month = T % 12 || T;
    }], Y: [/[+-]?\d+/, f("year")], YY: [a, function(M) {
      this.year = p(M);
    }], YYYY: [/\d{4}/, f("year")], Z: $, ZZ: $ };
    function N(M) {
      var T, j;
      T = M, j = u && u.formats;
      for (var D = (M = T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Y, A, z) {
        var Z = z && z.toUpperCase();
        return A || j[z] || n[z] || j[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(_, g, y) {
          return g || y.slice(1);
        });
      })).match(e), k = D.length, I = 0; I < k; I += 1) {
        var C = D[I], d = E[C], r = d && d[0], x = d && d[1];
        D[I] = x ? { regex: r, parser: x } : C.replace(/^\[|\]$/g, "");
      }
      return function(Y) {
        for (var A = {}, z = 0, Z = 0; z < k; z += 1) {
          var _ = D[z];
          if (typeof _ == "string")
            Z += _.length;
          else {
            var g = _.regex, y = _.parser, S = Y.slice(Z), P = g.exec(S)[0];
            y.call(A, P), Y = Y.replace(P, "");
          }
        }
        return function(B) {
          var F = B.afternoon;
          if (F !== void 0) {
            var J = B.hours;
            F ? J < 12 && (B.hours += 12) : J === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(A), A;
      };
    }
    return function(M, T, j) {
      j.p.customParseFormat = !0, M && M.parseTwoDigitYear && (p = M.parseTwoDigitYear);
      var D = T.prototype, k = D.parse;
      D.parse = function(I) {
        var C = I.date, d = I.utc, r = I.args;
        this.$u = d;
        var x = r[1];
        if (typeof x == "string") {
          var Y = r[2] === !0, A = r[3] === !0, z = Y || A, Z = r[2];
          A && (Z = r[2]), u = this.$locale(), !Y && Z && (u = j.Ls[Z]), this.$d = function(S, P, B) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * S);
              var F = N(P)(S), J = F.year, G = F.month, te = F.day, re = F.hours, ie = F.minutes, be = F.seconds, ye = F.milliseconds, ge = F.zone, oe = new Date(), ae = te || (J || G ? 1 : oe.getDate()), ce = J || oe.getFullYear(), me = 0;
              J && !G || (me = G > 0 ? G - 1 : oe.getMonth());
              var xe = re || 0, Fe = ie || 0, Le = be || 0, Ne = ye || 0;
              return ge ? new Date(Date.UTC(ce, me, ae, xe, Fe, Le, Ne + 60 * ge.offset * 1e3)) : B ? new Date(Date.UTC(ce, me, ae, xe, Fe, Le, Ne)) : new Date(ce, me, ae, xe, Fe, Le, Ne);
            } catch {
              return new Date("");
            }
          }(C, x, d), this.init(), Z && Z !== !0 && (this.$L = this.locale(Z).$L), z && C != this.format(x) && (this.$d = new Date("")), u = {};
        } else if (x instanceof Array)
          for (var _ = x.length, g = 1; g <= _; g += 1) {
            r[1] = x[g - 1];
            var y = j.apply(this, r);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            g === _ && (this.$d = new Date(""));
          }
        else
          k.call(this, I);
      };
    };
  });
})(_t);
const qr = _t.exports;
var Et = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    return function(n, e, a) {
      e.prototype.isToday = function() {
        var l = "YYYY-MM-DD", h = a();
        return this.format(l) === h.format(l);
      };
    };
  });
})(Et);
const Xr = Et.exports;
var Vt = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    return function(n, e, a) {
      e.prototype.isBetween = function(l, h, u, p) {
        var f = a(l), $ = a(h), w = (p = p || "()")[0] === "(", O = p[1] === ")";
        return (w ? this.isAfter(f, u) : !this.isBefore(f, u)) && (O ? this.isBefore($, u) : !this.isAfter($, u)) || (w ? this.isBefore(f, u) : !this.isAfter(f, u)) && (O ? this.isAfter($, u) : !this.isBefore($, u));
      };
    };
  });
})(Vt);
const Qr = Vt.exports;
var Yt = { exports: {} };
(function(t, s) {
  (function(n, e) {
    t.exports = e();
  })(Te, function() {
    var n, e, a = 1e3, l = 6e4, h = 36e5, u = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = 31536e6, $ = 2592e6, w = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, O = { years: f, months: $, days: u, hours: h, minutes: l, seconds: a, milliseconds: 1, weeks: 6048e5 }, E = function(d) {
      return d instanceof I;
    }, N = function(d, r, x) {
      return new I(d, x, r.$l);
    }, M = function(d) {
      return e.p(d) + "s";
    }, T = function(d) {
      return d < 0;
    }, j = function(d) {
      return T(d) ? Math.ceil(d) : Math.floor(d);
    }, D = function(d) {
      return Math.abs(d);
    }, k = function(d, r) {
      return d ? T(d) ? { negative: !0, format: "" + D(d) + r } : { negative: !1, format: "" + d + r } : { negative: !1, format: "" };
    }, I = function() {
      function d(x, Y, A) {
        var z = this;
        if (this.$d = {}, this.$l = A, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y)
          return N(x * O[M(Y)], this);
        if (typeof x == "number")
          return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object")
          return Object.keys(x).forEach(function(g) {
            z.$d[M(g)] = x[g];
          }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var Z = x.match(w);
          if (Z) {
            var _ = Z.slice(2).map(function(g) {
              return g != null ? Number(g) : 0;
            });
            return this.$d.years = _[0], this.$d.months = _[1], this.$d.weeks = _[2], this.$d.days = _[3], this.$d.hours = _[4], this.$d.minutes = _[5], this.$d.seconds = _[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = d.prototype;
      return r.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, A) {
          return Y + (x.$d[A] || 0) * O[A];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = j(x / f), x %= f, this.$d.months = j(x / $), x %= $, this.$d.days = j(x / u), x %= u, this.$d.hours = j(x / h), x %= h, this.$d.minutes = j(x / l), x %= l, this.$d.seconds = j(x / a), x %= a, this.$d.milliseconds = x;
      }, r.toISOString = function() {
        var x = k(this.$d.years, "Y"), Y = k(this.$d.months, "M"), A = +this.$d.days || 0;
        this.$d.weeks && (A += 7 * this.$d.weeks);
        var z = k(A, "D"), Z = k(this.$d.hours, "H"), _ = k(this.$d.minutes, "M"), g = this.$d.seconds || 0;
        this.$d.milliseconds && (g += this.$d.milliseconds / 1e3);
        var y = k(g, "S"), S = x.negative || Y.negative || z.negative || Z.negative || _.negative || y.negative, P = Z.format || _.format || y.format ? "T" : "", B = (S ? "-" : "") + "P" + x.format + Y.format + z.format + P + Z.format + _.format + y.format;
        return B === "P" || B === "-P" ? "P0D" : B;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(x) {
        var Y = x || "YYYY-MM-DDTHH:mm:ss", A = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(p, function(z, Z) {
          return Z || String(A[z]);
        });
      }, r.as = function(x) {
        return this.$ms / O[M(x)];
      }, r.get = function(x) {
        var Y = this.$ms, A = M(x);
        return A === "milliseconds" ? Y %= 1e3 : Y = A === "weeks" ? j(Y / O[A]) : this.$d[A], Y === 0 ? 0 : Y;
      }, r.add = function(x, Y, A) {
        var z;
        return z = Y ? x * O[M(Y)] : E(x) ? x.$ms : N(x, this).$ms, N(this.$ms + z * (A ? -1 : 1), this);
      }, r.subtract = function(x, Y) {
        return this.add(x, Y, !0);
      }, r.locale = function(x) {
        var Y = this.clone();
        return Y.$l = x, Y;
      }, r.clone = function() {
        return N(this.$ms, this);
      }, r.humanize = function(x) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, d;
    }(), C = function(d, r, x) {
      return d.add(r.years() * x, "y").add(r.months() * x, "M").add(r.days() * x, "d").add(r.hours() * x, "h").add(r.minutes() * x, "m").add(r.seconds() * x, "s").add(r.milliseconds() * x, "ms");
    };
    return function(d, r, x) {
      n = x, e = x().$utils(), x.duration = function(z, Z) {
        var _ = x.locale();
        return N(z, { $l: _ }, Z);
      }, x.isDuration = E;
      var Y = r.prototype.add, A = r.prototype.subtract;
      r.prototype.add = function(z, Z) {
        return E(z) ? C(this, z, 1) : Y.bind(this)(z, Z);
      }, r.prototype.subtract = function(z, Z) {
        return E(z) ? C(this, z, -1) : A.bind(this)(z, Z);
      };
    };
  });
})(Yt);
const ea = Yt.exports;
function ta() {
  const t = (u) => {
    const p = [], f = u.localeData().firstDayOfWeek();
    for (let $ = 0; $ <= u.date(0 - f).day(); $++)
      p.push(u.date(0).subtract($, "day"));
    return p.sort(($, w) => $.date() - w.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (u) => Array.from(
      {
        length: u.daysInMonth()
      },
      (p, f) => u.date(f + 1)
    ),
    useNextDate: (u) => {
      const p = [];
      for (let f = 1; f <= 42 - (t(u).length + u.daysInMonth()); f++)
        p.push(u.date(f).month(u.month()).add(1, "month"));
      return p;
    },
    useDisableDate: (u, { disableDate: p }) => typeof p == "function" ? p(u.toDate()) : !1,
    useBetweenRange: (u, { previous: p, next: f }) => {
      let $;
      return p.isAfter(f, "date") ? $ = "(]" : $ = "[)", !!(u.isBetween(p, f, "date", $) && !u.off);
    },
    useToValueFromString: (u, { formatter: p }) => u.format(p.date),
    useToValueFromArray: ({ previous: u, next: p }, { formatter: f, separator: $ }) => `${u.format(f.date)}${$}${p.format(f.date)}`
  };
}
function ra() {
  return {
    useVisibleViewport: (s) => {
      if (s) {
        const { right: n } = s.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return n > e;
      } else
        return null;
    }
  };
}
const aa = ["disabled", "placeholder", "value"], oa = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, na = ["disabled"], sa = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, la = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, ua = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, ia = { class: "flex flex-wrap lg:flex-nowrap" }, da = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, ca = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, fa = /* @__PURE__ */ V("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), pa = [
  fa
], va = { class: "px-0.5 sm:px-2" }, ma = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, ha = { class: "px-0.5 sm:px-2" }, ya = { key: 0 }, ba = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, ga = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, xa = ["disabled", "onClick", "textContent"], ka = ["onClick", "textContent"], wa = {
  key: 1,
  class: "sm:hidden"
}, $a = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ma = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, ja = ["onClick", "textContent"], Sa = {
  key: 1,
  class: "flex"
}, Da = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, Aa = { class: "flex flex-wrap lg:flex-nowrap" }, Oa = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Pa = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Ta = /* @__PURE__ */ V("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), _a = [
  Ta
], Ea = { class: "px-0.5 sm:px-2" }, Va = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Ya = { class: "px-0.5 sm:px-2" }, Ca = { key: 0 }, Ba = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Fa = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, La = ["disabled", "textContent"], Na = {
  __name: "VueTailwindThaiDatePicker",
  props: {
    noInput: Boolean,
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: !1
    },
    i18n: {
      type: String,
      default: "en"
    },
    inputClasses: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableInRange: {
      type: Boolean,
      default: !0
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: !1
    },
    autoApply: {
      type: Boolean,
      default: !0
    },
    shortcuts: {
      type: [Boolean, Function],
      default: !0
    },
    separator: {
      type: String,
      default: " ~ "
    },
    formatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    buddhistEnable: {
      type: Boolean,
      default: !0
    },
    locale: {
      type: String,
      default: "th"
    },
    displayFormatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: () => []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    weekdaysSize: {
      type: String,
      default: "short"
    },
    options: {
      type: Object,
      default: () => ({
        shortcuts: {
          today: "Today",
          yesterday: "Yesterday",
          past: (t) => `Last ${t} Days`,
          currentMonth: "This Month",
          pastMonth: "Last Month"
        },
        footer: {
          apply: "Apply",
          cancel: "Cancel"
        }
      })
    }
  },
  emits: [
    "update:modelValue",
    "select:month",
    "select:year",
    "select:right:month",
    "select:right:year",
    "click:prev",
    "click:next",
    "click:right:prev",
    "click:right:next"
  ],
  setup(t, { expose: s, emit: n }) {
    const e = t, {
      useCurrentDate: a,
      useDisableDate: l,
      useBetweenRange: h,
      useNextDate: u,
      usePreviousDate: p,
      useToValueFromArray: f,
      useToValueFromString: $
    } = ta(), { useVisibleViewport: w } = ra();
    i.extend(Zr), i.extend(Kr), i.extend(qr), i.extend(Xr), i.extend(Qr), i.extend(ea), i.extend(Gr);
    const O = q(null), E = q(null), N = q(null), M = q(""), T = q(null), j = q(""), D = q([]), k = q([]), I = q(null), C = q(null), d = pt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), r = q({
      previous: i(),
      next: i().add(1, "month"),
      year: {
        previous: i().year(),
        next: i().year()
      },
      weeks: e.weekdaysSize === "min" ? i.weekdaysMin() : i.weekdaysShort(),
      months: e.formatter.month === "MMM" ? i.monthsShort() : i.months()
    }), x = de(() => r.value.weeks), Y = de(() => r.value.months), A = de(() => {
      const { previous: c, next: v, year: b } = ue(r);
      return {
        previous: {
          date: () => p(c).concat(a(c)).concat(u(c)).map((o) => (o.today = o.isToday(), o.active = c.month() === o.month(), o.off = c.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = l(o, e) && !P(o), o.inRange = () => {
            if (e.asSingle && !e.useRange)
              return c.month() !== o.month();
          }, o.hovered = () => S() && D.value.length > 1 ? (o.isBetween(D.value[0], D.value[1], "date", "()") || o.isBetween(D.value[1], D.value[0], "date", "(]")) && c.month() === o.month() : !1, o.duration = () => !1, o)),
          month: c && c.format(e.formatter.month),
          year: c && c.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => b.previous + m
          ),
          onPrevious: () => {
            r.value.previous = c.subtract(1, "month"), n("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = c.add(1, "month"), c.diff(v, "month") === -1 && (r.value.next = v.add(1, "month")), n("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            d.previous.month = !d.previous.month, d.previous.year = !1, d.previous.calendar = !d.previous.month;
          },
          setMount: (o) => {
            r.value.previous = c.month(o), d.previous.month = !d.previous.month, d.previous.year = !1, d.previous.calendar = !d.previous.month, n("select:month", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            d.previous.year = !d.previous.year, d.previous.month = !1, d.previous.calendar = !d.previous.year;
          },
          setYear: (o, m) => {
            m || (r.value.previous = c.year(o), d.previous.year = !d.previous.year, d.previous.calendar = !d.previous.year, n("select:year", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => p(v).concat(a(v)).concat(u(v)).map((o) => (o.today = o.isToday(), o.active = v.month() === o.month(), o.off = v.month() !== o.month(), o.sunday = o.day() === 0, o.disabled = l(o, e) && !P(o), o.inRange = () => {
            if (e.asSingle && !e.useRange)
              return v.month() !== o.month();
          }, o.hovered = () => D.value.length > 1 ? (o.isBetween(D.value[0], D.value[1], "date", "()") || o.isBetween(D.value[1], D.value[0], "date", "(]")) && v.month() === o.month() : !1, o.duration = () => !1, o)),
          month: v && v.format(e.formatter.month),
          year: v && v.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (o, m) => b.next + m
          ),
          onPrevious: () => {
            r.value.next = v.subtract(1, "month"), v.diff(c, "month") === 1 && (r.value.previous = c.subtract(1, "month")), n("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = v.add(1, "month"), n("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            d.next.month = !d.next.month, d.next.year = !1, d.next.calendar = !d.next.month;
          },
          setMount: (o) => {
            r.value.next = v.month(o), d.next.month = !d.next.month, d.next.year = !1, d.next.calendar = !d.next.month, n("select:right:month", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            d.next.year = !d.next.year, d.next.month = !1, d.next.calendar = !d.next.year;
          },
          setYear: (o, m) => {
            m && (r.value.next = v.year(o), d.next.year = !d.next.year, d.next.month = !1, d.next.calendar = !d.next.year, n("select:right:year", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), z = q(!1);
    setTimeout(() => {
      z.value = !0;
    }, 250);
    const Z = () => i().localeData().firstDayOfWeek(), _ = (c) => {
      const v = [...c], b = v.shift();
      return [...v, b];
    }, g = () => Array.isArray(e.modelValue), y = () => typeof e.modelValue == "object", S = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), P = (c) => {
      if (e.disableInRange || j.value === "")
        return !1;
      let v, b;
      if (g()) {
        const [o, m] = e.modelValue;
        v = o, b = m;
      } else if (y()) {
        if (e.modelValue) {
          const [o, m] = Object.values(e.modelValue);
          v = o, b = m;
        }
      } else {
        const [o, m] = e.modelValue.split(e.separator);
        v = o, b = m;
      }
      return c.isBetween(i(v, e.formatter.date, !0), i(b, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      I.value = null, C.value = null, D.value = [], T.value = null;
    }, F = () => {
      if (j.value = "", g())
        n("update:modelValue", []);
      else if (y()) {
        const c = {}, [v, b] = Object.keys(e.modelValue);
        c[v] = "", c[b] = "", n("update:modelValue", c);
      } else
        n("update:modelValue", "");
      k.value = [], E.value && E.value.focus();
    };
    s({ clearPicker: F });
    const J = () => {
      if (S()) {
        const [c, v] = j.value.split(e.separator), [b, o] = [i(c, e.formatter.date, !0), i(v, e.formatter.date, !0)];
        if (b.isValid() && o.isValid())
          if (G(b), G(o), g())
            n("update:modelValue", [c, v]);
          else if (y()) {
            const m = {}, [L, R] = Object.keys(e.modelValue);
            m[L] = c, m[R] = v, n("update:modelValue", m);
          } else
            n(
              "update:modelValue",
              f(
                {
                  previous: b,
                  next: o
                },
                e
              )
            );
      } else {
        const c = i(j.value, e.formatter.date, !0);
        if (c.isValid())
          if (G(c), g())
            n("update:modelValue", [j.value]);
          else if (y()) {
            const v = {}, [b] = Object.keys(e.modelValue);
            v[b] = j.value, n("update:modelValue", v);
          } else
            n("update:modelValue", j.value);
      }
    }, G = (c, v, b) => {
      if (S())
        if (I.value)
          if (C.value = c, e.autoApply) {
            c.isBefore(I.value) ? j.value = f(
              {
                previous: c,
                next: I.value
              },
              e
            ) : j.value = f(
              {
                previous: I.value,
                next: c
              },
              e
            );
            const [o, m] = j.value.split(e.separator);
            if (g())
              n("update:modelValue", [
                i(o, e.formatter.date, !0).format(e.formatter.date),
                i(m, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (y()) {
              const L = {}, [R, Q] = Object.keys(e.modelValue);
              L[R] = o, L[Q] = m, n("update:modelValue", L);
            } else
              n(
                "update:modelValue",
                f(
                  {
                    previous: i(o, e.formatter.date, !0),
                    next: i(m, e.formatter.date, !0)
                  },
                  e
                )
              );
            b && b(), k.value = [], i(o, e.formatter.date, !0).isSame(i(m, e.formatter.date, !0), "month") || (r.value.previous = i(o, e.formatter.date, !0), r.value.next = i(m, e.formatter.date, !0)), B();
          } else {
            I.value.isAfter(c, "month") ? k.value = [c, I.value] : k.value = [I.value, c];
            const [o, m] = k.value;
            o.isSame(m, "month") || (r.value.previous = o, r.value.next = m), B();
          }
        else
          k.value = [], I.value = c, T.value = c, D.value.push(c), k.value.push(c), v ? (r.value.next = c, r.value.previous.isSame(c, "month") && (r.value.next = c.add(1, "month"))) : (r.value.previous = c, r.value.next.isSame(c, "month") && (r.value.previous = r.value.next, r.value.next = c.add(1, "month")));
      else if (e.autoApply) {
        if (j.value = $(c, e), g())
          n("update:modelValue", [j.value]);
        else if (y()) {
          const o = {}, [m] = Object.keys(e.modelValue);
          o[m] = j.value, n("update:modelValue", o);
        } else
          n("update:modelValue", j.value);
        b && b(), k.value = [], B();
      } else
        k.value = [c], B();
    }, te = (c) => {
      if (k.value.length < 1)
        return !1;
      let v;
      if (S()) {
        const [b, o] = k.value;
        o.isBefore(b) ? v = f(
          {
            previous: o,
            next: b
          },
          e
        ) : v = f(
          {
            previous: b,
            next: o
          },
          e
        );
      } else {
        const [b] = k.value;
        v = b;
      }
      if (S()) {
        const [b, o] = v.split(e.separator);
        if (g())
          n("update:modelValue", [
            i(b, e.formatter.date, !0).format(e.formatter.date),
            i(o, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (y()) {
          const m = {}, [L, R] = Object.keys(e.modelValue);
          m[L] = b, m[R] = o, n("update:modelValue", m);
        } else
          n(
            "update:modelValue",
            f(
              {
                previous: i(b, e.formatter.date, !0),
                next: i(o, e.formatter.date, !0)
              },
              e
            )
          );
        j.value = v;
      } else if (j.value = v.format(e.formatter.date), g())
        n("update:modelValue", [j.value]);
      else if (y()) {
        const b = {}, [o] = Object.keys(e.modelValue);
        b[o] = j.value, n("update:modelValue", b);
      } else
        n("update:modelValue", j.value);
      c && c();
    }, re = (c) => {
      if (!S())
        return !1;
      if (I.value)
        D.value = [I.value, c];
      else
        return D.value = [], !1;
    }, ie = (c) => {
      if (I.value && e.autoApply)
        return !1;
      let v, b;
      if (D.value.length > 1) {
        const [o, m] = D.value;
        v = i(o, e.formatter.date, !0), b = i(m, e.formatter.date, !0);
      } else if (g())
        if (e.autoApply) {
          const [o, m] = e.modelValue;
          v = o && i(o, e.formatter.date, !0), b = m && i(m, e.formatter.date, !0);
        } else {
          const [o, m] = k.value;
          v = i(o, e.formatter.date, !0), b = i(m, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [o, m] = Object.values(e.modelValue);
            v = o && i(o, e.formatter.date, !0), b = m && i(m, e.formatter.date, !0);
          }
        } else {
          const [o, m] = k.value;
          v = i(o, e.formatter.date, !0), b = i(m, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [o, m] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        v = o && i(o, e.formatter.date, !0), b = m && i(m, e.formatter.date, !0);
      } else {
        const [o, m] = k.value;
        v = i(o, e.formatter.date, !0), b = i(m, e.formatter.date, !0);
      }
      return v && b ? h(c, {
        previous: v,
        next: b
      }) : !1;
    }, be = (c) => {
      const { today: v, active: b, off: o, disabled: m } = c;
      let L, R, Q;
      if (S())
        if (g())
          if (T.value) {
            const [U, X] = D.value;
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue;
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          } else {
            const [U, X] = k.value;
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          }
        else if (y())
          if (T.value) {
            const [U, X] = D.value;
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          } else {
            const [U, X] = k.value;
            R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
          }
        else if (T.value) {
          const [U, X] = D.value;
          R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, X] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
        } else {
          const [U, X] = k.value;
          R = U && i(U, e.formatter.date, !0), Q = X && i(X, e.formatter.date, !0);
        }
      else if (g())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            R = i(U, e.formatter.date, !0);
          }
        } else {
          const [U] = k.value;
          R = U && i(U, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            R = i(U, e.formatter.date, !0);
          }
        } else {
          const [U] = k.value;
          R = U && i(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          R = i(U, e.formatter.date, !0);
        }
      } else {
        const [U] = k.value;
        R = U && i(U, e.formatter.date, !0);
      }
      return b && (L = v ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : m ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : c.isBetween(R, Q, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), o && (L = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), R && Q && !o ? (c.isSame(R, "date") && (L = Q.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", R.isSame(Q, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), c.isSame(Q, "date") && (L = Q.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", R.isSame(Q, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : R && c.isSame(R, "date") && !o && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), L;
    }, ye = (c) => {
      let v, b, o;
      if (v = "", !S())
        return v;
      if (g())
        if (D.value.length > 1) {
          const [m, L] = D.value;
          b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [m, L] = e.modelValue;
          b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
        } else {
          const [m, L] = k.value;
          b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
        }
      else if (y())
        if (D.value.length > 1) {
          const [m, L] = D.value;
          b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [m, L] = Object.values(e.modelValue);
            b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
          }
        } else {
          const [m, L] = k.value;
          b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
        }
      else if (D.value.length > 1) {
        const [m, L] = D.value;
        b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [m, L] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
      } else {
        const [m, L] = k.value;
        b = m && i(m, e.formatter.date, !0), o = L && i(L, e.formatter.date, !0);
      }
      return b && o && (c.isSame(b, "date") ? (o.isBefore(b) && (v += " rounded-r-full inset-0"), b.isBefore(o) && (v += " rounded-l-full inset-0")) : c.isSame(o, "date") ? (o.isBefore(b) && (v += " rounded-l-full inset-0"), b.isBefore(o) && (v += " rounded-r-full inset-0")) : v += " inset-0"), v;
    }, ge = (c, v) => {
      r.value.previous = i(c, e.formatter.date, !0), r.value.next = i(v, e.formatter.date, !0), (i.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || i.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && i.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, oe = (c, v) => {
      if (S())
        if (e.autoApply) {
          if (g())
            n("update:modelValue", [c, v]);
          else if (y()) {
            const b = {}, [o, m] = Object.keys(e.modelValue);
            b[o] = c, b[m] = v, n("update:modelValue", b);
          } else
            n(
              "update:modelValue",
              f(
                {
                  previous: i(c, e.formatter.date, !0),
                  next: i(v, e.formatter.date, !0)
                },
                e
              )
            );
          j.value = `${c}${e.separator}${v}`;
        } else
          k.value = [i(c, e.formatter.date, !0), i(v, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (g())
          n("update:modelValue", [c]);
        else if (y()) {
          const b = {}, [o] = Object.keys(e.modelValue);
          b[o] = c, n("update:modelValue", b);
        } else
          n("update:modelValue", c);
        j.value = c;
      } else
        k.value = [i(c, e.formatter.date, !0), i(v, e.formatter.date, !0)];
      ge(c, v);
    }, ae = (c) => {
      const v = i().format(e.formatter.date), b = i().format(e.formatter.date);
      oe(v, b), c && c();
    }, ce = (c) => {
      const v = i().subtract(1, "day").format(e.formatter.date), b = i().subtract(1, "day").format(e.formatter.date);
      oe(v, b), c && c();
    }, me = (c, v) => {
      const b = i().subtract(c - 1, "day").format(e.formatter.date), o = i().format(e.formatter.date);
      oe(b, o), v && v();
    }, xe = (c) => {
      const v = i().date(1).format(e.formatter.date), b = i().date(i().daysInMonth()).format(e.formatter.date);
      oe(v, b), c && c();
    }, Fe = (c) => {
      const v = i().date(1).subtract(1, "month").format(e.formatter.date), b = i().date(0).format(e.formatter.date);
      oe(v, b), c && c();
    }, Le = (c, v) => {
      let b, o;
      const [m, L] = c.atClick();
      b = i(m).format(e.formatter.date), o = i(L).format(e.formatter.date), oe(b, o), v && v();
    };
    Ht(
      () => k.value,
      (c) => {
        c.length > 0 && (d.previous.calendar = !0, d.previous.month = !1, d.previous.year = !1, d.next.calendar = !0, d.next.month = !1, d.next.year = !1);
      }
    ), ke(() => {
      e.placeholder ? M.value = e.placeholder : S() ? M.value = `${e.displayFormatter.date}${e.separator}${e.displayFormatter.date}` : M.value = e.displayFormatter.date;
    }), ke(() => {
      const c = e.i18n;
      Ie(() => {
        const v = /* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af.ee7bc0c2.mjs"), "./locale/am.js": () => import("./am.1adfb559.mjs"), "./locale/ar-dz.js": () => import("./ar-dz.df198454.mjs"), "./locale/ar-iq.js": () => import("./ar-iq.2f07fae1.mjs"), "./locale/ar-kw.js": () => import("./ar-kw.ecacadc8.mjs"), "./locale/ar-ly.js": () => import("./ar-ly.a9460c72.mjs"), "./locale/ar-ma.js": () => import("./ar-ma.f5419466.mjs"), "./locale/ar-sa.js": () => import("./ar-sa.59e297b1.mjs"), "./locale/ar-tn.js": () => import("./ar-tn.9ca0cb36.mjs"), "./locale/ar.js": () => import("./ar.891dbf5c.mjs"), "./locale/az.js": () => import("./az.04aaafdd.mjs"), "./locale/be.js": () => import("./be.9876342d.mjs"), "./locale/bg.js": () => import("./bg.794c1679.mjs"), "./locale/bi.js": () => import("./bi.4e9d4d2d.mjs"), "./locale/bm.js": () => import("./bm.d605e25c.mjs"), "./locale/bn-bd.js": () => import("./bn-bd.5924936e.mjs"), "./locale/bn.js": () => import("./bn.0fd13a78.mjs"), "./locale/bo.js": () => import("./bo.ca55dd01.mjs"), "./locale/br.js": () => import("./br.c8710a4b.mjs"), "./locale/bs.js": () => import("./bs.e405f4d9.mjs"), "./locale/ca.js": () => import("./ca.b8b42ffa.mjs"), "./locale/cs.js": () => import("./cs.f44a29a0.mjs"), "./locale/cv.js": () => import("./cv.227c1553.mjs"), "./locale/cy.js": () => import("./cy.b98ea71c.mjs"), "./locale/da.js": () => import("./da.862aa8d3.mjs"), "./locale/de-at.js": () => import("./de-at.74a7699a.mjs"), "./locale/de-ch.js": () => import("./de-ch.e094027a.mjs"), "./locale/de.js": () => import("./de.e985d219.mjs"), "./locale/dv.js": () => import("./dv.335008c1.mjs"), "./locale/el.js": () => import("./el.7b08d5f1.mjs"), "./locale/en-au.js": () => import("./en-au.f9a11343.mjs"), "./locale/en-ca.js": () => import("./en-ca.989947b4.mjs"), "./locale/en-gb.js": () => import("./en-gb.752ed817.mjs"), "./locale/en-ie.js": () => import("./en-ie.524331d3.mjs"), "./locale/en-il.js": () => import("./en-il.716db76b.mjs"), "./locale/en-in.js": () => import("./en-in.81e69fbe.mjs"), "./locale/en-nz.js": () => import("./en-nz.f50f530c.mjs"), "./locale/en-sg.js": () => import("./en-sg.be30967b.mjs"), "./locale/en-tt.js": () => import("./en-tt.e39949ac.mjs"), "./locale/en.js": () => import("./en.c289298e.mjs"), "./locale/eo.js": () => import("./eo.0aafc456.mjs"), "./locale/es-do.js": () => import("./es-do.8969a745.mjs"), "./locale/es-mx.js": () => import("./es-mx.1ed9dabd.mjs"), "./locale/es-pr.js": () => import("./es-pr.90a71cb7.mjs"), "./locale/es-us.js": () => import("./es-us.d0955515.mjs"), "./locale/es.js": () => import("./es.1bb49bdb.mjs"), "./locale/et.js": () => import("./et.d2d31bbf.mjs"), "./locale/eu.js": () => import("./eu.bc5a113d.mjs"), "./locale/fa.js": () => import("./fa.a2c07a5b.mjs"), "./locale/fi.js": () => import("./fi.f2033dcb.mjs"), "./locale/fo.js": () => import("./fo.ebe7f987.mjs"), "./locale/fr-ca.js": () => import("./fr-ca.b4feb310.mjs"), "./locale/fr-ch.js": () => import("./fr-ch.ca153851.mjs"), "./locale/fr.js": () => import("./fr.8ee78584.mjs"), "./locale/fy.js": () => import("./fy.281c86ef.mjs"), "./locale/ga.js": () => import("./ga.7abe346c.mjs"), "./locale/gd.js": () => import("./gd.8571730a.mjs"), "./locale/gl.js": () => import("./gl.64adf393.mjs"), "./locale/gom-latn.js": () => import("./gom-latn.ce7d0d66.mjs"), "./locale/gu.js": () => import("./gu.d752cd8f.mjs"), "./locale/he.js": () => import("./he.3307153f.mjs"), "./locale/hi.js": () => import("./hi.9a23648e.mjs"), "./locale/hr.js": () => import("./hr.673c7a54.mjs"), "./locale/ht.js": () => import("./ht.4d948281.mjs"), "./locale/hu.js": () => import("./hu.c81449ed.mjs"), "./locale/hy-am.js": () => import("./hy-am.0afc9678.mjs"), "./locale/id.js": () => import("./id.0b4f3cde.mjs"), "./locale/is.js": () => import("./is.c74fd19f.mjs"), "./locale/it-ch.js": () => import("./it-ch.c1a82567.mjs"), "./locale/it.js": () => import("./it.c4514d8d.mjs"), "./locale/ja.js": () => import("./ja.30a63626.mjs"), "./locale/jv.js": () => import("./jv.78885da4.mjs"), "./locale/ka.js": () => import("./ka.aab99422.mjs"), "./locale/kk.js": () => import("./kk.cafe2435.mjs"), "./locale/km.js": () => import("./km.64c7e55a.mjs"), "./locale/kn.js": () => import("./kn.14bb390a.mjs"), "./locale/ko.js": () => import("./ko.e2ebf500.mjs"), "./locale/ku.js": () => import("./ku.2ef4accd.mjs"), "./locale/ky.js": () => import("./ky.d9ad164c.mjs"), "./locale/lb.js": () => import("./lb.3d8c00c7.mjs"), "./locale/lo.js": () => import("./lo.8e31aa18.mjs"), "./locale/lt.js": () => import("./lt.d2961c40.mjs"), "./locale/lv.js": () => import("./lv.d8165d96.mjs"), "./locale/me.js": () => import("./me.4f626b1a.mjs"), "./locale/mi.js": () => import("./mi.2f4bab90.mjs"), "./locale/mk.js": () => import("./mk.8f5db091.mjs"), "./locale/ml.js": () => import("./ml.825cd1f7.mjs"), "./locale/mn.js": () => import("./mn.1ffd6681.mjs"), "./locale/mr.js": () => import("./mr.81594fc8.mjs"), "./locale/ms-my.js": () => import("./ms-my.3411fe94.mjs"), "./locale/ms.js": () => import("./ms.ec98919b.mjs"), "./locale/mt.js": () => import("./mt.5f9b4f41.mjs"), "./locale/my.js": () => import("./my.ec42a23a.mjs"), "./locale/nb.js": () => import("./nb.a98a77c8.mjs"), "./locale/ne.js": () => import("./ne.e59775fa.mjs"), "./locale/nl-be.js": () => import("./nl-be.0db7b40a.mjs"), "./locale/nl.js": () => import("./nl.04f064d1.mjs"), "./locale/nn.js": () => import("./nn.5798bd8e.mjs"), "./locale/oc-lnc.js": () => import("./oc-lnc.dc963ef3.mjs"), "./locale/pa-in.js": () => import("./pa-in.1d82aedf.mjs"), "./locale/pl.js": () => import("./pl.84e5217a.mjs"), "./locale/pt-br.js": () => import("./pt-br.8c1e8d39.mjs"), "./locale/pt.js": () => import("./pt.aa41cf46.mjs"), "./locale/rn.js": () => import("./rn.5dd40e86.mjs"), "./locale/ro.js": () => import("./ro.9a4c73d9.mjs"), "./locale/ru.js": () => import("./ru.97119baa.mjs"), "./locale/rw.js": () => import("./rw.30a83bda.mjs"), "./locale/sd.js": () => import("./sd.d1ad89ed.mjs"), "./locale/se.js": () => import("./se.8d607088.mjs"), "./locale/si.js": () => import("./si.80d2aa93.mjs"), "./locale/sk.js": () => import("./sk.7aeeefe4.mjs"), "./locale/sl.js": () => import("./sl.a152e14b.mjs"), "./locale/sq.js": () => import("./sq.24adbc40.mjs"), "./locale/sr-cyrl.js": () => import("./sr-cyrl.dffa15b1.mjs"), "./locale/sr.js": () => import("./sr.d8d5486b.mjs"), "./locale/ss.js": () => import("./ss.c5ff27bf.mjs"), "./locale/sv-fi.js": () => import("./sv-fi.0feb7837.mjs"), "./locale/sv.js": () => import("./sv.895754b7.mjs"), "./locale/sw.js": () => import("./sw.44434c6f.mjs"), "./locale/ta.js": () => import("./ta.bc95e811.mjs"), "./locale/te.js": () => import("./te.e978251f.mjs"), "./locale/tet.js": () => import("./tet.4a2ef7db.mjs"), "./locale/tg.js": () => import("./tg.f302cad7.mjs"), "./locale/th.js": () => import("./th.67953592.mjs"), "./locale/tk.js": () => import("./tk.3a081d6f.mjs"), "./locale/tl-ph.js": () => import("./tl-ph.b124b59f.mjs"), "./locale/tlh.js": () => import("./tlh.ccd48bb5.mjs"), "./locale/tr.js": () => import("./tr.3ea9f946.mjs"), "./locale/tzl.js": () => import("./tzl.f216c602.mjs"), "./locale/tzm-latn.js": () => import("./tzm-latn.9932906b.mjs"), "./locale/tzm.js": () => import("./tzm.1d9562e7.mjs"), "./locale/ug-cn.js": () => import("./ug-cn.707bb34a.mjs"), "./locale/uk.js": () => import("./uk.df29c299.mjs"), "./locale/ur.js": () => import("./ur.6ec1af83.mjs"), "./locale/uz-latn.js": () => import("./uz-latn.caaed2ec.mjs"), "./locale/uz.js": () => import("./uz.fe6812f0.mjs"), "./locale/vi.js": () => import("./vi.ba0267f8.mjs"), "./locale/x-pseudo.js": () => import("./x-pseudo.d5145526.mjs"), "./locale/yo.js": () => import("./yo.99d03a30.mjs"), "./locale/zh-cn.js": () => import("./zh-cn.6f3a9984.mjs"), "./locale/zh-hk.js": () => import("./zh-hk.7d812575.mjs"), "./locale/zh-tw.js": () => import("./zh-tw.253313a2.mjs"), "./locale/zh.js": () => import("./zh.5e04a64b.mjs") });
        for (const b in v)
          v[b]().then(() => {
            i.locale(c);
            let o, m;
            if (S()) {
              if (g()) {
                if (e.modelValue.length > 0) {
                  const [R, Q] = e.modelValue;
                  o = i(R, e.formatter.date, !0), m = i(Q, e.formatter.date, !0);
                }
              } else if (y()) {
                if (!Rt(e.modelValue))
                  try {
                    Object.keys(e.modelValue);
                  } catch {
                    console.warn(
                      "[Vue Tailwind Thai Datepicker]: It looks like you want to use Object as the argument %cv-model",
                      "font-style: italic; color: #42b883;",
                      ", but you pass it undefined or null."
                    ), console.warn(
                      "[Vue Tailwind Thai Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                      "font-style: italic; color: #42b883;",
                      ", but you can replace manually."
                    ), n("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [R, Q] = Object.values(e.modelValue);
                  o = R && i(R, e.formatter.date, !0), m = Q && i(Q, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [R, Q] = e.modelValue.split(e.separator);
                o = i(R, e.formatter.date, !0), m = i(Q, e.formatter.date, !0);
              }
              o && m ? (j.value = f(
                {
                  previous: o,
                  next: m
                },
                e
              ), m.isBefore(o, "month") ? (r.value.previous = m, r.value.next = o, r.value.year.previous = m.year(), r.value.year.next = o.year()) : m.isSame(o, "month") ? (r.value.previous = o, r.value.next = m.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year()) : (r.value.previous = o, r.value.next = m, r.value.year.previous = o.year(), r.value.year.next = m.year()), e.autoApply || (k.value = [o, m])) : (r.value.previous = i(e.startFrom), r.value.next = i(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (g()) {
                if (e.modelValue.length > 0) {
                  const [R] = e.modelValue;
                  o = i(R, e.formatter.date, !0);
                }
              } else if (y()) {
                if (e.modelValue) {
                  const [R] = Object.values(e.modelValue);
                  o = i(R, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [R] = e.modelValue.split(e.separator);
                o = i(R, e.formatter.date, !0);
              }
              o && o.isValid() ? (j.value = $(o, e), r.value.previous = o, r.value.next = o.add(1, "month"), r.value.year.previous = o.year(), r.value.year.next = o.add(1, "year").year(), e.autoApply || (k.value = [o])) : (r.value.previous = i(e.startFrom), r.value.next = i(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const L = e.weekdaysSize === "min" ? i.weekdaysMin() : i.weekdaysShort();
            r.value.weeks = Z() ? _(L) : L, r.value.months = e.formatter.month === "MMM" ? i.monthsShort() : i.months();
          }).catch((o) => {
            console.warn(o.message);
          });
      });
    });
    const Ne = (c) => (c && N.value === null && (N.value = w(O.value)), c && N.value ? "place-right" : "place-left"), ut = (c) => (c && N.value === null && (N.value = w(O.value)), N.value ? "left-auto right-0" : "left-0 right-auto");
    se("isBetweenRange", ie), se("betweenRangeClasses", ye), se("datepickerClasses", be), se("atMouseOver", re), se("setToToday", ae), se("setToYesterday", ce), se("setToLastDay", me), se("setToThisMonth", xe), se("setToLastMonth", Fe), se("setToCustomShortcut", Le);
    const Bt = (c) => {
      if (Object.keys(e.modelValue).length === 0)
        return F(), "";
      if (c) {
        if (S()) {
          const [v, b] = c.split(e.separator), [o, m] = [i(v, e.formatter.date, !0), i(b, e.formatter.date, !0)];
          if (o.isValid() && m.isValid()) {
            i.locale(e.locale);
            let L = i(v, e.formatter.date, !0).format(e.displayFormatter.date.replaceAll("Y", e.buddhistEnable ? "B" : "Y")) + "" + e.separator + i(b, e.formatter.date, !0).format(e.displayFormatter.date.replaceAll("Y", e.buddhistEnable ? "B" : "Y"));
            return e.locale === "th" && (L = L.replaceAll("January", "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21").replaceAll("Jan", "\u0E21.\u0E04.").replaceAll("February", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C").replaceAll("Feb", "\u0E01.\u0E1E.").replaceAll("March", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21").replaceAll("Mar", "\u0E21\u0E35.\u0E04.").replaceAll("April", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19").replaceAll("Apr", "\u0E40\u0E21.\u0E22.").replaceAll("May", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21").replaceAll("June", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19").replaceAll("Jun", "\u0E21\u0E34.\u0E22.").replaceAll("July", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21").replaceAll("Jul", "\u0E01.\u0E04.").replaceAll("August", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21").replaceAll("Aug", "\u0E2A.\u0E04.").replaceAll("September", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19").replaceAll("Sep", "\u0E01.\u0E22.").replaceAll("October", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21").replaceAll("Oct", "\u0E15.\u0E04.").replaceAll("November", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19").replaceAll("Nov", "\u0E1E.\u0E22.").replaceAll("December", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21").replaceAll("Dec", "\u0E18.\u0E04.")), L;
          }
        } else if (i(c, e.formatter.date, !0).isValid()) {
          i.locale(e.locale);
          let b = i(c, e.formatter.date, !0).format(e.displayFormatter.date.replaceAll("Y", e.buddhistEnable ? "B" : "Y"));
          return e.locale === "th" && (b = b.replaceAll("January", "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21").replaceAll("Jan", "\u0E21.\u0E04.").replaceAll("February", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C").replaceAll("Feb", "\u0E01.\u0E1E.").replaceAll("March", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21").replaceAll("Mar", "\u0E21\u0E35.\u0E04.").replaceAll("April", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19").replaceAll("Apr", "\u0E40\u0E21.\u0E22.").replaceAll("May", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21").replaceAll("June", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19").replaceAll("Jun", "\u0E21\u0E34.\u0E22.").replaceAll("July", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21").replaceAll("Jul", "\u0E01.\u0E04.").replaceAll("August", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21").replaceAll("Aug", "\u0E2A.\u0E04.").replaceAll("September", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19").replaceAll("Sep", "\u0E01.\u0E22.").replaceAll("October", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21").replaceAll("Oct", "\u0E15.\u0E04.").replaceAll("November", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19").replaceAll("Nov", "\u0E1E.\u0E22.").replaceAll("December", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21").replaceAll("Dec", "\u0E18.\u0E04.")), b;
        }
      }
      return c === "" ? M.value : c;
    };
    return (c, v) => e.noInput ? z.value ? (W(), K("div", Sa, [
      V("div", Da, [
        V("div", Aa, [
          e.shortcuts ? (W(), He(it, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": S(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : he("", !0),
          V("div", Oa, [
            S() && !e.asSingle ? (W(), K("div", Pa, _a)) : he("", !0),
            V("div", {
              class: Oe(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": S() && !e.asSingle
              }])
            }, [
              ee(We, {
                panel: d.previous,
                calendar: A.value.previous,
                "buddhist-enable": e.buddhistEnable
              }, null, 8, ["panel", "calendar", "buddhist-enable"]),
              V("div", Ea, [
                fe(ee(Je, {
                  months: Y.value,
                  "onUpdate:month": A.value.previous.setMount,
                  "buddhist-enable": e.buddhistEnable
                }, null, 8, ["months", "onUpdate:month", "buddhist-enable"]), [
                  [pe, d.previous.month]
                ]),
                fe(ee(Ze, {
                  years: A.value.previous.years(),
                  "onUpdate:year": A.value.previous.setYear,
                  "buddhist-enable": e.buddhistEnable
                }, null, 8, ["years", "onUpdate:year", "buddhist-enable"]), [
                  [pe, d.previous.year]
                ]),
                fe(V("div", null, [
                  ee(Ge, {
                    weeks: x.value,
                    "buddhist-enable": e.buddhistEnable
                  }, null, 8, ["weeks", "buddhist-enable"]),
                  ee(Ke, {
                    calendar: A.value.previous,
                    weeks: x.value,
                    "as-range": S(),
                    "onUpdate:date": v[1] || (v[1] = (b, o) => G(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [pe, d.previous.calendar]
                ])
              ])
            ], 2),
            S() && !e.asSingle ? (W(), K("div", Va, [
              ee(We, {
                "as-prev-or-next": "",
                panel: d.next,
                calendar: A.value.next,
                "buddhist-enable": e.buddhistEnable
              }, null, 8, ["panel", "calendar", "buddhist-enable"]),
              V("div", Ya, [
                fe(ee(Je, {
                  months: Y.value,
                  "onUpdate:month": A.value.next.setMount,
                  "buddhist-enable": e.buddhistEnable
                }, null, 8, ["months", "onUpdate:month", "buddhist-enable"]), [
                  [pe, d.next.month]
                ]),
                fe(ee(Ze, {
                  "as-prev-or-next": "",
                  years: A.value.next.years(),
                  "onUpdate:year": A.value.next.setYear,
                  "buddhist-enable": e.buddhistEnable
                }, null, 8, ["years", "onUpdate:year", "buddhist-enable"]), [
                  [pe, d.next.year]
                ]),
                fe(V("div", null, [
                  ee(Ge, {
                    weeks: x.value,
                    "buddhist-enable": e.buddhistEnable
                  }, null, 8, ["weeks", "buddhist-enable"]),
                  ee(Ke, {
                    "as-prev-or-next": "",
                    calendar: A.value.next,
                    weeks: x.value,
                    "as-range": S(),
                    "onUpdate:date": v[2] || (v[2] = (b, o) => G(b, o))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [pe, d.next.calendar]
                ])
              ])
            ])) : he("", !0)
          ])
        ]),
        e.autoApply ? he("", !0) : (W(), K("div", Ca, [
          V("div", Ba, [
            V("div", Fa, [
              V("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? k.value.length < 1 : k.value.length < 2,
                onClick: v[3] || (v[3] = (b) => te()),
                textContent: le(e.options.footer.apply)
              }, null, 8, La)
            ])
          ])
        ]))
      ])
    ])) : he("", !0) : (W(), He(ue(Dt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: Ye(({ open: b }) => [
        e.overlay && !e.disabled ? (W(), He(ue(Wr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : he("", !0),
        ee(ue(zr), {
          as: "label",
          class: "relative block"
        }, {
          default: Ye(() => [
            Ut(c.$slots, "default", {
              value: j.value,
              placeholder: M.value,
              clear: F
            }, () => [
              V("input", zt({
                ref_key: "VtdInputRef",
                ref: E,
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, c.$attrs, {
                placeholder: M.value,
                onKeyup: J,
                value: Bt(j.value)
              }), null, 16, aa),
              V("div", oa, [
                V("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: Oe([e.disabled ? "cursor-default opacity-50" : "opacity-100", "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"]),
                  onClick: v[0] || (v[0] = (o) => e.disabled ? !1 : j.value ? F() : c.$refs.VtdInputRef.focus())
                }, [
                  (W(), K("svg", sa, [
                    j.value ? (W(), K("path", la)) : (W(), K("path", ua))
                  ]))
                ], 10, na)
              ])
            ])
          ]),
          _: 3
        }),
        ee(ft, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Ye(() => [
            e.disabled ? he("", !0) : (W(), He(ue(Jr), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Ye(({ close: o }) => [
                V("div", {
                  class: Oe(["absolute z-50 top-full sm:mt-2.5", ut(b)])
                }, [
                  V("div", {
                    ref_key: "VtdRef",
                    ref: O,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    V("div", {
                      class: Oe(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Ne(b)])
                    }, [
                      V("div", ia, [
                        e.shortcuts ? (W(), He(it, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": S(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: o
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : he("", !0),
                        V("div", da, [
                          S() && !e.asSingle ? (W(), K("div", ca, pa)) : he("", !0),
                          V("div", {
                            class: Oe(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": S() && !e.asSingle,
                              "w-full": !S() && e.asSingle
                            }])
                          }, [
                            ee(We, {
                              panel: d.previous,
                              calendar: A.value.previous,
                              "buddhist-enable": e.buddhistEnable
                            }, null, 8, ["panel", "calendar", "buddhist-enable"]),
                            V("div", va, [
                              fe(ee(Je, {
                                months: Y.value,
                                "onUpdate:month": A.value.previous.setMount,
                                "buddhist-enable": e.buddhistEnable
                              }, null, 8, ["months", "onUpdate:month", "buddhist-enable"]), [
                                [pe, d.previous.month]
                              ]),
                              fe(ee(Ze, {
                                years: A.value.previous.years(),
                                "onUpdate:year": A.value.previous.setYear,
                                "buddhist-enable": e.buddhistEnable
                              }, null, 8, ["years", "onUpdate:year", "buddhist-enable"]), [
                                [pe, d.previous.year]
                              ]),
                              fe(V("div", null, [
                                ee(Ge, {
                                  weeks: x.value,
                                  "buddhist-enable": e.buddhistEnable
                                }, null, 8, ["weeks", "buddhist-enable"]),
                                ee(Ke, {
                                  calendar: A.value.previous,
                                  weeks: x.value,
                                  "as-range": S(),
                                  "onUpdate:date": (m, L) => G(m, L, o),
                                  "buddhist-enable": e.buddhistEnable
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date", "buddhist-enable"])
                              ], 512), [
                                [pe, d.previous.calendar]
                              ])
                            ])
                          ], 2),
                          S() && !e.asSingle ? (W(), K("div", ma, [
                            ee(We, {
                              "as-prev-or-next": "",
                              panel: d.next,
                              calendar: A.value.next,
                              "buddhist-enable": e.buddhistEnable
                            }, null, 8, ["panel", "calendar", "buddhist-enable"]),
                            V("div", ha, [
                              fe(ee(Je, {
                                months: Y.value,
                                "onUpdate:month": A.value.next.setMount,
                                "buddhist-enable": e.buddhistEnable
                              }, null, 8, ["months", "onUpdate:month", "buddhist-enable"]), [
                                [pe, d.next.month]
                              ]),
                              fe(ee(Ze, {
                                "as-prev-or-next": "",
                                years: A.value.next.years(),
                                "onUpdate:year": A.value.next.setYear,
                                "buddhist-enable": e.buddhistEnable
                              }, null, 8, ["years", "onUpdate:year", "buddhist-enable"]), [
                                [pe, d.next.year]
                              ]),
                              fe(V("div", null, [
                                ee(Ge, {
                                  weeks: x.value,
                                  "buddhist-enable": e.buddhistEnable
                                }, null, 8, ["weeks", "buddhist-enable"]),
                                ee(Ke, {
                                  "as-prev-or-next": "",
                                  calendar: A.value.next,
                                  weeks: x.value,
                                  "as-range": S(),
                                  "onUpdate:date": (m, L) => G(m, L, o)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [pe, d.next.calendar]
                              ])
                            ])
                          ])) : he("", !0)
                        ])
                      ]),
                      e.autoApply ? (W(), K("div", wa, [
                        V("div", $a, [
                          V("div", Ma, [
                            V("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: le(e.options.footer.cancel)
                            }, null, 8, ja)
                          ])
                        ])
                      ])) : (W(), K("div", ya, [
                        V("div", ba, [
                          V("div", ga, [
                            V("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? k.value.length < 1 : k.value.length < 2,
                              onClick: (m) => te(o),
                              textContent: le(e.options.footer.apply)
                            }, null, 8, xa),
                            V("button", {
                              type: "button",
                              onClick: (m) => o(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: le(e.options.footer.cancel)
                            }, null, 8, ka)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}, Ct = /* @__PURE__ */ (() => {
  const t = Na;
  return t.install = (s) => {
    s.component("VueTailwindThaiDatePicker", t);
  }, t;
})(), Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ct
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Ia).forEach(([t, s]) => {
  t !== "default" && (Ct[t] = s);
});
export {
  Ct as c,
  i as d
};
