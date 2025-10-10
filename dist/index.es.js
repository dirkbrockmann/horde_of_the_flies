(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_pb0r4_1,._controlPanel_pb0r4_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_pb0r4_1>canvas,._displayPanel_pb0r4_1>svg,._controlPanel_pb0r4_8>svg,._controlPanel_pb0r4_8>canvas{display:block;box-sizing:border-box}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Lu = {
  display_type: "canvas",
  debug: !1,
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 500, height: 500 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function en(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qu(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function No(t) {
  let e, n, r;
  t.length !== 2 ? (e = en, n = (s, c) => en(t(s), c), r = (s, c) => t(s) - c) : (e = t === en || t === qu ? t : Xu, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Xu() {
  return 0;
}
function Hu(t) {
  return t === null ? NaN : +t;
}
const Bu = No(en), Uu = Bu.right;
No(Hu).center;
const Yu = Math.sqrt(50), Gu = Math.sqrt(10), Vu = Math.sqrt(2);
function dn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Yu ? 10 : a >= Gu ? 5 : a >= Vu ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? dn(t, e, n * 2) : [s, c, u];
}
function Ku(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? dn(e, t, n) : dn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function xr(t, e, n) {
  return e = +e, t = +t, n = +n, dn(t, e, n)[2];
}
function Wu(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? xr(e, t, n) : xr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Zu = { value: () => {
} };
function So() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new nn(n);
}
function nn(t) {
  this._ = t;
}
function Ju(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
nn.prototype = So.prototype = {
  constructor: nn,
  on: function(t, e) {
    var n = this._, r = Ju(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Qu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = qi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = qi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new nn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function Qu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function qi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Zu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Mr = "http://www.w3.org/1999/xhtml";
const Xi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Mr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function In(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Xi.hasOwnProperty(e) ? { space: Xi[e], local: t } : t;
}
function tc(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Mr && e.documentElement.namespaceURI === Mr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function ec(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ko(t) {
  var e = In(t);
  return (e.local ? ec : tc)(e);
}
function nc() {
}
function ai(t) {
  return t == null ? nc : function() {
    return this.querySelector(t);
  };
}
function rc(t) {
  typeof t != "function" && (t = ai(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new L(r, this._parents);
}
function ic(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ac() {
  return [];
}
function Po(t) {
  return t == null ? ac : function() {
    return this.querySelectorAll(t);
  };
}
function oc(t) {
  return function() {
    return ic(t.apply(this, arguments));
  };
}
function sc(t) {
  typeof t == "function" ? t = oc(t) : t = Po(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new L(r, i);
}
function Eo(t) {
  return function() {
    return this.matches(t);
  };
}
function Oo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var uc = Array.prototype.find;
function cc(t) {
  return function() {
    return uc.call(this.children, t);
  };
}
function lc() {
  return this.firstElementChild;
}
function fc(t) {
  return this.select(t == null ? lc : cc(typeof t == "function" ? t : Oo(t)));
}
var hc = Array.prototype.filter;
function dc() {
  return Array.from(this.children);
}
function pc(t) {
  return function() {
    return hc.call(this.children, t);
  };
}
function gc(t) {
  return this.selectAll(t == null ? dc : pc(typeof t == "function" ? t : Oo(t)));
}
function bc(t) {
  typeof t != "function" && (t = Eo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new L(r, this._parents);
}
function zo(t) {
  return new Array(t.length);
}
function yc() {
  return new L(this._enter || this._groups.map(zo), this._parents);
}
function pn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
pn.prototype = {
  constructor: pn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function _c(t) {
  return function() {
    return t;
  };
}
function vc(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new pn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function mc(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new pn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function wc(t) {
  return t.__data__;
}
function xc(t, e) {
  if (!arguments.length) return Array.from(this, wc);
  var n = e ? mc : vc, r = this._parents, i = this._groups;
  typeof t != "function" && (t = _c(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = Mc(t.call(l, l && l.__data__, u, r)), g = d.length, y = s[u] = new Array(g), m = o[u] = new Array(g), x = c[u] = new Array(f);
    n(l, h, y, m, x, d, e);
    for (var p = 0, M = 0, b, v; p < g; ++p)
      if (b = y[p]) {
        for (p >= M && (M = p + 1); !(v = m[M]) && ++M < g; ) ;
        b._next = v || null;
      }
  }
  return o = new L(o, r), o._enter = s, o._exit = c, o;
}
function Mc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ac() {
  return new L(this._exit || this._groups.map(zo), this._parents);
}
function $c(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Tc(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new L(s, this._parents);
}
function Nc() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Sc(t) {
  t || (t = kc);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new L(i, this._parents).order();
}
function kc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Pc() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ec() {
  return Array.from(this);
}
function Oc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function zc() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Cc() {
  return !this.node();
}
function Ic(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Rc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Dc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Lc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function qc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Xc(t, e) {
  var n = In(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? jc : Rc : typeof e == "function" ? n.local ? qc : Lc : n.local ? Dc : Fc)(n, e));
}
function Co(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Hc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Bc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Uc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Yc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Hc : typeof e == "function" ? Uc : Bc)(t, e, n ?? "")) : Zt(this.node(), t);
}
function Zt(t, e) {
  return t.style.getPropertyValue(e) || Co(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Gc(t) {
  return function() {
    delete this[t];
  };
}
function Vc(t, e) {
  return function() {
    this[t] = e;
  };
}
function Kc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Wc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Gc : typeof e == "function" ? Kc : Vc)(t, e)) : this.node()[t];
}
function Io(t) {
  return t.trim().split(/^|\s+/);
}
function oi(t) {
  return t.classList || new Ro(t);
}
function Ro(t) {
  this._node = t, this._names = Io(t.getAttribute("class") || "");
}
Ro.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function jo(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Fo(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Zc(t) {
  return function() {
    jo(this, t);
  };
}
function Jc(t) {
  return function() {
    Fo(this, t);
  };
}
function Qc(t, e) {
  return function() {
    (e.apply(this, arguments) ? jo : Fo)(this, t);
  };
}
function tl(t, e) {
  var n = Io(t + "");
  if (arguments.length < 2) {
    for (var r = oi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Qc : e ? Zc : Jc)(n, e));
}
function el() {
  this.textContent = "";
}
function nl(t) {
  return function() {
    this.textContent = t;
  };
}
function rl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function il(t) {
  return arguments.length ? this.each(t == null ? el : (typeof t == "function" ? rl : nl)(t)) : this.node().textContent;
}
function al() {
  this.innerHTML = "";
}
function ol(t) {
  return function() {
    this.innerHTML = t;
  };
}
function sl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ul(t) {
  return arguments.length ? this.each(t == null ? al : (typeof t == "function" ? sl : ol)(t)) : this.node().innerHTML;
}
function cl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ll() {
  return this.each(cl);
}
function fl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function hl() {
  return this.each(fl);
}
function dl(t) {
  var e = typeof t == "function" ? t : ko(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function pl() {
  return null;
}
function gl(t, e) {
  var n = typeof t == "function" ? t : ko(t), r = e == null ? pl : typeof e == "function" ? e : ai(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function bl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function yl() {
  return this.each(bl);
}
function _l() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function vl() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ml(t) {
  return this.select(t ? vl : _l);
}
function wl(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function xl(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ml(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Al(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function $l(t, e, n) {
  return function() {
    var r = this.__on, i, a = xl(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Tl(t, e, n) {
  var r = Ml(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? $l : Al, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Do(t, e, n) {
  var r = Co(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Nl(t, e) {
  return function() {
    return Do(this, t, e);
  };
}
function Sl(t, e) {
  return function() {
    return Do(this, t, e.apply(this, arguments));
  };
}
function kl(t, e) {
  return this.each((typeof e == "function" ? Sl : Nl)(t, e));
}
function* Pl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Lo = [null];
function L(t, e) {
  this._groups = t, this._parents = e;
}
function Oe() {
  return new L([[document.documentElement]], Lo);
}
function El() {
  return this;
}
L.prototype = Oe.prototype = {
  constructor: L,
  select: rc,
  selectAll: sc,
  selectChild: fc,
  selectChildren: gc,
  filter: bc,
  data: xc,
  enter: yc,
  exit: Ac,
  join: $c,
  merge: Tc,
  selection: El,
  order: Nc,
  sort: Sc,
  call: Pc,
  nodes: Ec,
  node: Oc,
  size: zc,
  empty: Cc,
  each: Ic,
  attr: Xc,
  style: Yc,
  property: Wc,
  classed: tl,
  text: il,
  html: ul,
  raise: ll,
  lower: hl,
  append: dl,
  insert: gl,
  remove: yl,
  clone: ml,
  datum: wl,
  on: Tl,
  dispatch: kl,
  [Symbol.iterator]: Pl
};
function Ol(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], Lo);
}
function si(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function qo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ze() {
}
var me = 0.7, gn = 1 / me, Gt = "\\s*([+-]?\\d+)\\s*", we = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", zl = /^#([0-9a-f]{3,8})$/, Cl = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), Il = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Rl = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${we}\\)$`), jl = new RegExp(`^rgba\\(${nt},${nt},${nt},${we}\\)$`), Fl = new RegExp(`^hsl\\(${we},${nt},${nt}\\)$`), Dl = new RegExp(`^hsla\\(${we},${nt},${nt},${we}\\)$`), Hi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
si(ze, zt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: Ll,
  formatHsl: ql,
  formatRgb: Ui,
  toString: Ui
});
function Bi() {
  return this.rgb().formatHex();
}
function Ll() {
  return this.rgb().formatHex8();
}
function ql() {
  return Xo(this).formatHsl();
}
function Ui() {
  return this.rgb().formatRgb();
}
function zt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = zl.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Yi(e) : n === 3 ? new R(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? De(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? De(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Cl.exec(t)) ? new R(e[1], e[2], e[3], 1) : (e = Il.exec(t)) ? new R(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Rl.exec(t)) ? De(e[1], e[2], e[3], e[4]) : (e = jl.exec(t)) ? De(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Fl.exec(t)) ? Ki(e[1], e[2] / 100, e[3] / 100, 1) : (e = Dl.exec(t)) ? Ki(e[1], e[2] / 100, e[3] / 100, e[4]) : Hi.hasOwnProperty(t) ? Yi(Hi[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Yi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function De(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new R(t, e, n, r);
}
function Xl(t) {
  return t instanceof ze || (t = zt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function bn(t, e, n, r) {
  return arguments.length === 1 ? Xl(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
si(R, bn, qo(ze, {
  brighter(t) {
    return t = t == null ? gn : Math.pow(gn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? me : Math.pow(me, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(Pt(this.r), Pt(this.g), Pt(this.b), yn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Gi,
  // Deprecated! Use color.formatHex.
  formatHex: Gi,
  formatHex8: Hl,
  formatRgb: Vi,
  toString: Vi
}));
function Gi() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}`;
}
function Hl() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}${St((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Vi() {
  const t = yn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pt(this.r)}, ${Pt(this.g)}, ${Pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function yn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function St(t) {
  return t = Pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ki(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new V(t, e, n, r);
}
function Xo(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof ze || (t = zt(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new V(o, s, c, t.opacity);
}
function Bl(t, e, n, r) {
  return arguments.length === 1 ? Xo(t) : new V(t, e, n, r ?? 1);
}
function V(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
si(V, Bl, qo(ze, {
  brighter(t) {
    return t = t == null ? gn : Math.pow(gn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? me : Math.pow(me, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new R(
      ur(t >= 240 ? t - 240 : t + 120, i, r),
      ur(t, i, r),
      ur(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(Wi(this.h), Le(this.s), Le(this.l), yn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = yn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Wi(this.h)}, ${Le(this.s) * 100}%, ${Le(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Wi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Le(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ur(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ui = (t) => () => t;
function Ul(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Yl(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Gl(t) {
  return (t = +t) == 1 ? Ho : function(e, n) {
    return n - e ? Yl(e, n, t) : ui(isNaN(e) ? n : e);
  };
}
function Ho(t, e) {
  var n = e - t;
  return n ? Ul(t, n) : ui(isNaN(t) ? e : t);
}
const Mt = function t(e) {
  var n = Gl(e);
  function r(i, a) {
    var o = n((i = bn(i)).r, (a = bn(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Ho(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Vl(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Kl(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Wl(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Rn(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Zl(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Y(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Jl(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Rn(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Ar = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cr = new RegExp(Ar.source, "g");
function Ql(t) {
  return function() {
    return t;
  };
}
function tf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Bo(t, e) {
  var n = Ar.lastIndex = cr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Ar.exec(t)) && (i = cr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Y(r, i) })), n = cr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? tf(c[0].x) : Ql(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function Rn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ui(e) : (n === "number" ? Y : n === "string" ? (r = zt(e)) ? (e = r, Mt) : Bo : e instanceof zt ? Mt : e instanceof Date ? Zl : Kl(e) ? Vl : Array.isArray(e) ? Wl : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Jl : Y)(t, e);
}
function ef(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Zi = 180 / Math.PI, $r = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Uo(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Zi,
    skewX: Math.atan(c) * Zi,
    scaleX: o,
    scaleY: s
  };
}
var qe;
function nf(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? $r : Uo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function rf(t) {
  return t == null || (qe || (qe = document.createElementNS("http://www.w3.org/2000/svg", "g")), qe.setAttribute("transform", t), !(t = qe.transform.baseVal.consolidate())) ? $r : (t = t.matrix, Uo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Yo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: Y(u, h) }, { i: y - 2, x: Y(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: Y(u, h) }, { i: y - 2, x: Y(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, y = f.length, m; ++g < y; ) h[(m = f[g]).i] = m.x(d);
      return h.join("");
    };
  };
}
var af = Yo(nf, "px, ", "px)", "deg)"), of = Yo(rf, ", ", ")", ")");
function Xe(t, e) {
  e === void 0 && (e = t, t = Rn);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Jt = 0, he = 0, ue = 0, Go = 1e3, _n, de, vn = 0, Ct = 0, jn = 0, xe = typeof performance == "object" && performance.now ? performance : Date, Vo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Fn() {
  return Ct || (Vo(sf), Ct = xe.now() + jn);
}
function sf() {
  Ct = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = Ko.prototype = {
  constructor: Me,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Fn() : +n) + (e == null ? 0 : +e), !this._next && de !== this && (de ? de._next = this : _n = this, de = this), this._call = t, this._time = n, Tr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Tr());
  }
};
function Ko(t, e, n) {
  var r = new Me();
  return r.restart(t, e, n), r;
}
function uf() {
  Fn(), ++Jt;
  for (var t = _n, e; t; )
    (e = Ct - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Jt;
}
function Ji() {
  Ct = (vn = xe.now()) + jn, Jt = he = 0;
  try {
    uf();
  } finally {
    Jt = 0, lf(), Ct = 0;
  }
}
function cf() {
  var t = xe.now(), e = t - vn;
  e > Go && (jn -= e, vn = t);
}
function lf() {
  for (var t, e = _n, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : _n = n);
  de = t, Tr(r);
}
function Tr(t) {
  if (!Jt) {
    he && (he = clearTimeout(he));
    var e = t - Ct;
    e > 24 ? (t < 1 / 0 && (he = setTimeout(Ji, t - xe.now() - jn)), ue && (ue = clearInterval(ue))) : (ue || (vn = xe.now(), ue = setInterval(cf, Go)), Jt = 1, Vo(Ji));
  }
}
function Qi(t, e, n) {
  var r = new Me();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function ff(t, e, n) {
  var r = new Me(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Fn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var hf = So("start", "end", "cancel", "interrupt"), df = [], Wo = 0, ta = 1, Nr = 2, rn = 3, ea = 4, Sr = 5, an = 6;
function Dn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  pf(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: hf,
    tween: df,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Wo
  });
}
function ci(t, e) {
  var n = J(t, e);
  if (n.state > Wo) throw new Error("too late; already scheduled");
  return n;
}
function at(t, e) {
  var n = J(t, e);
  if (n.state > rn) throw new Error("too late; already running");
  return n;
}
function J(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function pf(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Ko(a, 0, n.time);
  function a(u) {
    n.state = ta, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== ta) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === rn) return Qi(o);
        d.state === ea ? (d.state = an, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = an, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Qi(function() {
      n.state === rn && (n.state = ea, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Nr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Nr) {
      for (n.state = rn, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Sr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Sr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = an, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function gf(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Nr && r.state < Sr, r.state = an, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function bf(t) {
  return this.each(function() {
    gf(this, t);
  });
}
function yf(t, e) {
  var n, r;
  return function() {
    var i = at(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function _f(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = at(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function vf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? yf : _f)(n, t, e));
}
function li(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[e];
  };
}
function Zo(t, e) {
  var n;
  return (typeof e == "number" ? Y : e instanceof zt ? Mt : (n = zt(e)) ? (e = n, Mt) : Bo)(t, e);
}
function mf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function wf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function xf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Mf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Af(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function $f(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Tf(t, e) {
  var n = In(t), r = n === "transform" ? of : Zo;
  return this.attrTween(t, typeof e == "function" ? (n.local ? $f : Af)(n, r, li(this, "attr." + t, e)) : e == null ? (n.local ? wf : mf)(n) : (n.local ? Mf : xf)(n, r, e));
}
function Nf(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Sf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function kf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Sf(t, a)), n;
  }
  return i._value = e, i;
}
function Pf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Nf(t, a)), n;
  }
  return i._value = e, i;
}
function Ef(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = In(t);
  return this.tween(n, (r.local ? kf : Pf)(r, e));
}
function Of(t, e) {
  return function() {
    ci(this, t).delay = +e.apply(this, arguments);
  };
}
function zf(t, e) {
  return e = +e, function() {
    ci(this, t).delay = e;
  };
}
function Cf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Of : zf)(e, t)) : J(this.node(), e).delay;
}
function If(t, e) {
  return function() {
    at(this, t).duration = +e.apply(this, arguments);
  };
}
function Rf(t, e) {
  return e = +e, function() {
    at(this, t).duration = e;
  };
}
function jf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? If : Rf)(e, t)) : J(this.node(), e).duration;
}
function Ff(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    at(this, t).ease = e;
  };
}
function Df(t) {
  var e = this._id;
  return arguments.length ? this.each(Ff(e, t)) : J(this.node(), e).ease;
}
function Lf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    at(this, t).ease = n;
  };
}
function qf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Lf(this._id, t));
}
function Xf(t) {
  typeof t != "function" && (t = Eo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new dt(r, this._parents, this._name, this._id);
}
function Hf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new dt(o, this._parents, this._name, this._id);
}
function Bf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Uf(t, e, n) {
  var r, i, a = Bf(e) ? ci : at;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function Yf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? J(this.node(), n).on.on(t) : this.each(Uf(n, t, e));
}
function Gf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Vf() {
  return this.on("end.remove", Gf(this._id));
}
function Kf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ai(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Dn(u[f], e, n, f, u, J(l, n)));
  return new dt(a, this._parents, e, n);
}
function Wf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Po(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = J(l, n), y = 0, m = f.length; y < m; ++y)
          (d = f[y]) && Dn(d, e, n, y, f, g);
        a.push(f), o.push(l);
      }
  return new dt(a, o, e, n);
}
var Zf = Oe.prototype.constructor;
function Jf() {
  return new Zf(this._groups, this._parents);
}
function Qf(t, e) {
  var n, r, i;
  return function() {
    var a = Zt(this, t), o = (this.style.removeProperty(t), Zt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Jo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function th(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Zt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function eh(t, e, n) {
  var r, i, a;
  return function() {
    var o = Zt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Zt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function nh(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = at(this, t), u = c.on, l = c.value[a] == null ? s || (s = Jo(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function rh(t, e, n) {
  var r = (t += "") == "transform" ? af : Zo;
  return e == null ? this.styleTween(t, Qf(t, r)).on("end.style." + t, Jo(t)) : typeof e == "function" ? this.styleTween(t, eh(t, r, li(this, "style." + t, e))).each(nh(this._id, t)) : this.styleTween(t, th(t, r, e), n).on("end.style." + t, null);
}
function ih(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ah(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && ih(t, o, n)), r;
  }
  return a._value = e, a;
}
function oh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, ah(t, e, n ?? ""));
}
function sh(t) {
  return function() {
    this.textContent = t;
  };
}
function uh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function ch(t) {
  return this.tween("text", typeof t == "function" ? uh(li(this, "text", t)) : sh(t == null ? "" : t + ""));
}
function lh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function fh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && lh(i)), e;
  }
  return r._value = t, r;
}
function hh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, fh(t));
}
function dh() {
  for (var t = this._name, e = this._id, n = Qo(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = J(c, e);
        Dn(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new dt(r, this._parents, t, n);
}
function ph() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = at(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var gh = 0;
function dt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Qo() {
  return ++gh;
}
var st = Oe.prototype;
dt.prototype = {
  constructor: dt,
  select: Kf,
  selectAll: Wf,
  selectChild: st.selectChild,
  selectChildren: st.selectChildren,
  filter: Xf,
  merge: Hf,
  selection: Jf,
  transition: dh,
  call: st.call,
  nodes: st.nodes,
  node: st.node,
  size: st.size,
  empty: st.empty,
  each: st.each,
  on: Yf,
  attr: Tf,
  attrTween: Ef,
  style: rh,
  styleTween: oh,
  text: ch,
  textTween: hh,
  remove: Vf,
  tween: vf,
  delay: Cf,
  duration: jf,
  ease: Df,
  easeVarying: qf,
  end: ph,
  [Symbol.iterator]: st[Symbol.iterator]
};
function bh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var yh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bh
};
function _h(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function vh(t) {
  var e, n;
  t instanceof dt ? (e = t._id, t = t._name) : (e = Qo(), (n = yh).time = Fn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Dn(c, t, e, u, o, n || _h(c, e));
  return new dt(r, this._parents, t, e);
}
Oe.prototype.interrupt = bf;
Oe.prototype.transition = vh;
function mh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function mn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Qt(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function wh(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function xh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Mh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wn(t) {
  if (!(e = Mh.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new fi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
wn.prototype = fi.prototype;
function fi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ah(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ts;
function $h(t, e) {
  var n = mn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (ts = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + mn(t, Math.max(0, e + a - 1))[0];
}
function na(t, e) {
  var n = mn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ra = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: mh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => na(t * 100, e),
  r: na,
  s: $h,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ia(t) {
  return t;
}
var aa = Array.prototype.map, oa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Th(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ia : wh(aa.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ia : xh(aa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = wn(h);
    var f = h.fill, d = h.align, g = h.sign, y = h.symbol, m = h.zero, x = h.width, p = h.comma, M = h.precision, b = h.trim, v = h.type;
    v === "n" ? (p = !0, v = "g") : ra[v] || (M === void 0 && (M = 12), b = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var k = y === "$" ? n : y === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(v) ? o : "", z = ra[v], X = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(_) {
      var C = k, A = P, I, Tt, F;
      if (v === "c")
        A = z(_) + A, _ = "";
      else {
        _ = +_;
        var B = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : z(Math.abs(_), M), b && (_ = Ah(_)), B && +_ == 0 && g !== "+" && (B = !1), C = (B ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + C, A = (v === "s" ? oa[8 + ts / 3] : "") + A + (B && g === "(" ? ")" : ""), X) {
          for (I = -1, Tt = _.length; ++I < Tt; )
            if (F = _.charCodeAt(I), 48 > F || F > 57) {
              A = (F === 46 ? i + _.slice(I + 1) : _.slice(I)) + A, _ = _.slice(0, I);
              break;
            }
        }
      }
      p && !m && (_ = e(_, 1 / 0));
      var U = C.length + _.length + A.length, E = U < x ? new Array(x - U + 1).join(f) : "";
      switch (p && m && (_ = e(E + _, E.length ? x - A.length : 1 / 0), E = ""), d) {
        case "<":
          _ = C + _ + A + E;
          break;
        case "=":
          _ = C + E + _ + A;
          break;
        case "^":
          _ = E.slice(0, U = E.length >> 1) + C + _ + A + E.slice(U);
          break;
        default:
          _ = E + C + _ + A;
          break;
      }
      return a(_);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function l(h, f) {
    var d = u((h = wn(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(Qt(f) / 3))) * 3, y = Math.pow(10, -g), m = oa[8 + g / 3];
    return function(x) {
      return d(y * x) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var He, es, ns;
Nh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Nh(t) {
  return He = Th(t), es = He.format, ns = He.formatPrefix, He;
}
function Sh(t) {
  return Math.max(0, -Qt(Math.abs(t)));
}
function kh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Qt(e) / 3))) * 3 - Qt(Math.abs(t)));
}
function Ph(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Qt(e) - Qt(t)) + 1;
}
function Eh(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Oh(t) {
  return function() {
    return t;
  };
}
function zh(t) {
  return +t;
}
var sa = [0, 1];
function Bt(t) {
  return t;
}
function kr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Oh(isNaN(e) ? NaN : 0.5);
}
function Ch(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Ih(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = kr(i, r), a = n(o, a)) : (r = kr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Rh(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = kr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Uu(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function jh(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Fh() {
  var t = sa, e = sa, n = Rn, r, i, a, o = Bt, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Bt && (o = Ch(t[0], t[f - 1])), s = f > 2 ? Rh : Ih, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), Y)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, zh), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = ef, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Bt, l()) : o !== Bt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Dh() {
  return Fh()(Bt, Bt);
}
function Lh(t, e, n, r) {
  var i = Wu(t, e, n), a;
  switch (r = wn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = kh(i, o)) && (r.precision = a), ns(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Ph(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Sh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return es(r);
}
function qh(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Ku(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Lh(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = xr(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function Ce() {
  var t = Dh();
  return t.copy = function() {
    return jh(t, Ce());
  }, Eh.apply(t, arguments), qh(t);
}
var Be = bn(), Xh = Math.PI / 3, Hh = Math.PI * 2 / 3;
function Bh(t) {
  var e;
  return t = (0.5 - t) * Math.PI, Be.r = 255 * (e = Math.sin(t)) * e, Be.g = 255 * (e = Math.sin(t + Xh)) * e, Be.b = 255 * (e = Math.sin(t + Hh)) * e, Be + "";
}
function pe(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
pe.prototype = {
  constructor: pe,
  scale: function(t) {
    return t === 1 ? this : new pe(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new pe(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
pe.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function on(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Uh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function rs(t) {
  let e, n, r;
  t.length !== 2 ? (e = on, n = (s, c) => on(t(s), c), r = (s, c) => t(s) - c) : (e = t === on || t === Uh ? t : Yh, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Yh() {
  return 0;
}
function Gh(t) {
  return t === null ? NaN : +t;
}
const Vh = rs(on), Kh = Vh.right;
rs(Gh).center;
const Wh = Math.sqrt(50), Zh = Math.sqrt(10), Jh = Math.sqrt(2);
function xn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Wh ? 10 : a >= Zh ? 5 : a >= Jh ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? xn(t, e, n * 2) : [s, c, u];
}
function Qh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? xn(e, t, n) : xn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Pr(t, e, n) {
  return e = +e, t = +t, n = +n, xn(t, e, n)[2];
}
function td(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Pr(e, t, n) : Pr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ue(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function ed(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var nd = { value: () => {
} };
function hi() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new sn(n);
}
function sn(t) {
  this._ = t;
}
function rd(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
sn.prototype = hi.prototype = {
  constructor: sn,
  on: function(t, e) {
    var n = this._, r = rd(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = id(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = ua(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ua(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new sn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function id(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ua(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = nd, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Er = "http://www.w3.org/1999/xhtml";
const ca = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Er,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ln(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ca.hasOwnProperty(e) ? { space: ca[e], local: t } : t;
}
function ad(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Er && e.documentElement.namespaceURI === Er ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function od(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function is(t) {
  var e = Ln(t);
  return (e.local ? od : ad)(e);
}
function sd() {
}
function di(t) {
  return t == null ? sd : function() {
    return this.querySelector(t);
  };
}
function ud(t) {
  typeof t != "function" && (t = di(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new q(r, this._parents);
}
function cd(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ld() {
  return [];
}
function as(t) {
  return t == null ? ld : function() {
    return this.querySelectorAll(t);
  };
}
function fd(t) {
  return function() {
    return cd(t.apply(this, arguments));
  };
}
function hd(t) {
  typeof t == "function" ? t = fd(t) : t = as(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new q(r, i);
}
function os(t) {
  return function() {
    return this.matches(t);
  };
}
function ss(t) {
  return function(e) {
    return e.matches(t);
  };
}
var dd = Array.prototype.find;
function pd(t) {
  return function() {
    return dd.call(this.children, t);
  };
}
function gd() {
  return this.firstElementChild;
}
function bd(t) {
  return this.select(t == null ? gd : pd(typeof t == "function" ? t : ss(t)));
}
var yd = Array.prototype.filter;
function _d() {
  return Array.from(this.children);
}
function vd(t) {
  return function() {
    return yd.call(this.children, t);
  };
}
function md(t) {
  return this.selectAll(t == null ? _d : vd(typeof t == "function" ? t : ss(t)));
}
function wd(t) {
  typeof t != "function" && (t = os(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new q(r, this._parents);
}
function us(t) {
  return new Array(t.length);
}
function xd() {
  return new q(this._enter || this._groups.map(us), this._parents);
}
function Mn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Mn.prototype = {
  constructor: Mn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Md(t) {
  return function() {
    return t;
  };
}
function Ad(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Mn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function $d(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new Mn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function Td(t) {
  return t.__data__;
}
function Nd(t, e) {
  if (!arguments.length) return Array.from(this, Td);
  var n = e ? $d : Ad, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Md(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = Sd(t.call(l, l && l.__data__, u, r)), g = d.length, y = s[u] = new Array(g), m = o[u] = new Array(g), x = c[u] = new Array(f);
    n(l, h, y, m, x, d, e);
    for (var p = 0, M = 0, b, v; p < g; ++p)
      if (b = y[p]) {
        for (p >= M && (M = p + 1); !(v = m[M]) && ++M < g; ) ;
        b._next = v || null;
      }
  }
  return o = new q(o, r), o._enter = s, o._exit = c, o;
}
function Sd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function kd() {
  return new q(this._exit || this._groups.map(us), this._parents);
}
function Pd(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Ed(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new q(s, this._parents);
}
function Od() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function zd(t) {
  t || (t = Cd);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new q(i, this._parents).order();
}
function Cd(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Id() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Rd() {
  return Array.from(this);
}
function jd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Fd() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Dd() {
  return !this.node();
}
function Ld(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function qd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Bd(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Ud(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Yd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Gd(t, e) {
  var n = Ln(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Xd : qd : typeof e == "function" ? n.local ? Yd : Ud : n.local ? Bd : Hd)(n, e));
}
function cs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vd(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Kd(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Wd(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Zd(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Vd : typeof e == "function" ? Wd : Kd)(t, e, n ?? "")) : te(this.node(), t);
}
function te(t, e) {
  return t.style.getPropertyValue(e) || cs(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Jd(t) {
  return function() {
    delete this[t];
  };
}
function Qd(t, e) {
  return function() {
    this[t] = e;
  };
}
function t0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function e0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Jd : typeof e == "function" ? t0 : Qd)(t, e)) : this.node()[t];
}
function ls(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new fs(t);
}
function fs(t) {
  this._node = t, this._names = ls(t.getAttribute("class") || "");
}
fs.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function hs(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function ds(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function n0(t) {
  return function() {
    hs(this, t);
  };
}
function r0(t) {
  return function() {
    ds(this, t);
  };
}
function i0(t, e) {
  return function() {
    (e.apply(this, arguments) ? hs : ds)(this, t);
  };
}
function a0(t, e) {
  var n = ls(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? i0 : e ? n0 : r0)(n, e));
}
function o0() {
  this.textContent = "";
}
function s0(t) {
  return function() {
    this.textContent = t;
  };
}
function u0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function c0(t) {
  return arguments.length ? this.each(t == null ? o0 : (typeof t == "function" ? u0 : s0)(t)) : this.node().textContent;
}
function l0() {
  this.innerHTML = "";
}
function f0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function h0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function d0(t) {
  return arguments.length ? this.each(t == null ? l0 : (typeof t == "function" ? h0 : f0)(t)) : this.node().innerHTML;
}
function p0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function g0() {
  return this.each(p0);
}
function b0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function y0() {
  return this.each(b0);
}
function _0(t) {
  var e = typeof t == "function" ? t : is(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function v0() {
  return null;
}
function m0(t, e) {
  var n = typeof t == "function" ? t : is(t), r = e == null ? v0 : typeof e == "function" ? e : di(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function w0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function x0() {
  return this.each(w0);
}
function M0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function A0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function $0(t) {
  return this.select(t ? A0 : M0);
}
function T0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function N0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function S0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function k0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function P0(t, e, n) {
  return function() {
    var r = this.__on, i, a = N0(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function E0(t, e, n) {
  var r = S0(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? P0 : k0, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function ps(t, e, n) {
  var r = cs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function O0(t, e) {
  return function() {
    return ps(this, t, e);
  };
}
function z0(t, e) {
  return function() {
    return ps(this, t, e.apply(this, arguments));
  };
}
function C0(t, e) {
  return this.each((typeof e == "function" ? z0 : O0)(t, e));
}
function* I0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var gs = [null];
function q(t, e) {
  this._groups = t, this._parents = e;
}
function Ie() {
  return new q([[document.documentElement]], gs);
}
function R0() {
  return this;
}
q.prototype = Ie.prototype = {
  constructor: q,
  select: ud,
  selectAll: hd,
  selectChild: bd,
  selectChildren: md,
  filter: wd,
  data: Nd,
  enter: xd,
  exit: kd,
  join: Pd,
  merge: Ed,
  selection: R0,
  order: Od,
  sort: zd,
  call: Id,
  nodes: Rd,
  node: jd,
  size: Fd,
  empty: Dd,
  each: Ld,
  attr: Gd,
  style: Zd,
  property: e0,
  classed: a0,
  text: c0,
  html: d0,
  raise: g0,
  lower: y0,
  append: _0,
  insert: m0,
  remove: x0,
  clone: $0,
  datum: T0,
  on: E0,
  dispatch: C0,
  [Symbol.iterator]: I0
};
function O(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], gs);
}
function j0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function la(t, e) {
  if (t = j0(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const F0 = { passive: !1 }, Ae = { capture: !0, passive: !1 };
function lr(t) {
  t.stopImmediatePropagation();
}
function Vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function D0(t) {
  var e = t.document.documentElement, n = O(t).on("dragstart.drag", Vt, Ae);
  "onselectstart" in e ? n.on("selectstart.drag", Vt, Ae) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function L0(t, e) {
  var n = t.document.documentElement, r = O(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Vt, Ae), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ye = (t) => () => t;
function Or(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Or.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function q0(t) {
  return !t.ctrlKey && !t.button;
}
function X0() {
  return this.parentNode;
}
function H0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function B0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function U0() {
  var t = q0, e = X0, n = H0, r = B0, i = {}, a = hi("start", "drag", "end"), o = 0, s, c, u, l, h = 0;
  function f(b) {
    b.on("mousedown.drag", d).filter(r).on("touchstart.drag", m).on("touchmove.drag", x, F0).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(b, v) {
    if (!(l || !t.call(this, b, v))) {
      var k = M(this, e.call(this, b, v), b, v, "mouse");
      k && (O(b.view).on("mousemove.drag", g, Ae).on("mouseup.drag", y, Ae), D0(b.view), lr(b), u = !1, s = b.clientX, c = b.clientY, k("start", b));
    }
  }
  function g(b) {
    if (Vt(b), !u) {
      var v = b.clientX - s, k = b.clientY - c;
      u = v * v + k * k > h;
    }
    i.mouse("drag", b);
  }
  function y(b) {
    O(b.view).on("mousemove.drag mouseup.drag", null), L0(b.view, u), Vt(b), i.mouse("end", b);
  }
  function m(b, v) {
    if (t.call(this, b, v)) {
      var k = b.changedTouches, P = e.call(this, b, v), z = k.length, X, H;
      for (X = 0; X < z; ++X)
        (H = M(this, P, b, v, k[X].identifier, k[X])) && (lr(b), H("start", b, k[X]));
    }
  }
  function x(b) {
    var v = b.changedTouches, k = v.length, P, z;
    for (P = 0; P < k; ++P)
      (z = i[v[P].identifier]) && (Vt(b), z("drag", b, v[P]));
  }
  function p(b) {
    var v = b.changedTouches, k = v.length, P, z;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), P = 0; P < k; ++P)
      (z = i[v[P].identifier]) && (lr(b), z("end", b, v[P]));
  }
  function M(b, v, k, P, z, X) {
    var H = a.copy(), _ = la(X || k, v), C, A, I;
    if ((I = n.call(b, new Or("beforestart", {
      sourceEvent: k,
      target: f,
      identifier: z,
      active: o,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return C = I.x - _[0] || 0, A = I.y - _[1] || 0, function Tt(F, B, U) {
        var E = _, sr;
        switch (F) {
          case "start":
            i[z] = Tt, sr = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            _ = la(U || B, v), sr = o;
            break;
        }
        H.call(
          F,
          b,
          new Or(F, {
            sourceEvent: B,
            subject: I,
            target: f,
            identifier: z,
            active: sr,
            x: _[0] + C,
            y: _[1] + A,
            dx: _[0] - E[0],
            dy: _[1] - E[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Ye(!!b), f) : t;
  }, f.container = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Ye(b), f) : e;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Ye(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Ye(!!b), f) : r;
  }, f.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function gi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function bs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Re() {
}
var $e = 0.7, An = 1 / $e, Kt = "\\s*([+-]?\\d+)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Y0 = /^#([0-9a-f]{3,8})$/, G0 = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), V0 = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), K0 = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Te}\\)$`), W0 = new RegExp(`^rgba\\(${rt},${rt},${rt},${Te}\\)$`), Z0 = new RegExp(`^hsl\\(${Te},${rt},${rt}\\)$`), J0 = new RegExp(`^hsla\\(${Te},${rt},${rt},${Te}\\)$`), fa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
gi(Re, It, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: Q0,
  formatHsl: tp,
  formatRgb: da,
  toString: da
});
function ha() {
  return this.rgb().formatHex();
}
function Q0() {
  return this.rgb().formatHex8();
}
function tp() {
  return ys(this).formatHsl();
}
function da() {
  return this.rgb().formatRgb();
}
function It(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Y0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? pa(e) : n === 3 ? new j(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ge(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ge(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = G0.exec(t)) ? new j(e[1], e[2], e[3], 1) : (e = V0.exec(t)) ? new j(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = K0.exec(t)) ? Ge(e[1], e[2], e[3], e[4]) : (e = W0.exec(t)) ? Ge(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Z0.exec(t)) ? ya(e[1], e[2] / 100, e[3] / 100, 1) : (e = J0.exec(t)) ? ya(e[1], e[2] / 100, e[3] / 100, e[4]) : fa.hasOwnProperty(t) ? pa(fa[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function pa(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ge(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new j(t, e, n, r);
}
function ep(t) {
  return t instanceof Re || (t = It(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function zr(t, e, n, r) {
  return arguments.length === 1 ? ep(t) : new j(t, e, n, r ?? 1);
}
function j(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
gi(j, zr, bs(Re, {
  brighter(t) {
    return t = t == null ? An : Math.pow(An, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? $e : Math.pow($e, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Et(this.r), Et(this.g), Et(this.b), $n(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ga,
  // Deprecated! Use color.formatHex.
  formatHex: ga,
  formatHex8: np,
  formatRgb: ba,
  toString: ba
}));
function ga() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function np() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ba() {
  const t = $n(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function $n(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kt(t) {
  return t = Et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ya(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new K(t, e, n, r);
}
function ys(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof Re || (t = It(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new K(o, s, c, t.opacity);
}
function rp(t, e, n, r) {
  return arguments.length === 1 ? ys(t) : new K(t, e, n, r ?? 1);
}
function K(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
gi(K, rp, bs(Re, {
  brighter(t) {
    return t = t == null ? An : Math.pow(An, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? $e : Math.pow($e, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new j(
      fr(t >= 240 ? t - 240 : t + 120, i, r),
      fr(t, i, r),
      fr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(_a(this.h), Ve(this.s), Ve(this.l), $n(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = $n(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${_a(this.h)}, ${Ve(this.s) * 100}%, ${Ve(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function _a(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ve(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function fr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const bi = (t) => () => t;
function ip(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ap(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function op(t) {
  return (t = +t) == 1 ? _s : function(e, n) {
    return n - e ? ap(e, n, t) : bi(isNaN(e) ? n : e);
  };
}
function _s(t, e) {
  var n = e - t;
  return n ? ip(t, n) : bi(isNaN(t) ? e : t);
}
const Tn = function t(e) {
  var n = op(e);
  function r(i, a) {
    var o = n((i = zr(i)).r, (a = zr(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = _s(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function sp(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function up(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function cp(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = yi(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function lp(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function G(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function fp(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = yi(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, hr = new RegExp(Cr.source, "g");
function hp(t) {
  return function() {
    return t;
  };
}
function dp(t) {
  return function(e) {
    return t(e) + "";
  };
}
function vs(t, e) {
  var n = Cr.lastIndex = hr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Cr.exec(t)) && (i = hr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: G(r, i) })), n = hr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? dp(c[0].x) : hp(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function yi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? bi(e) : (n === "number" ? G : n === "string" ? (r = It(e)) ? (e = r, Tn) : vs : e instanceof It ? Tn : e instanceof Date ? lp : up(e) ? sp : Array.isArray(e) ? cp : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? fp : G)(t, e);
}
function pp(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var va = 180 / Math.PI, ms = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ws(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * va,
    skewX: Math.atan(c) * va,
    scaleX: o,
    scaleY: s
  };
}
var Ke;
function gp(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? ms : ws(e.a, e.b, e.c, e.d, e.e, e.f);
}
function bp(t) {
  return t == null || (Ke || (Ke = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ke.setAttribute("transform", t), !(t = Ke.transform.baseVal.consolidate())) ? ms : (t = t.matrix, ws(t.a, t.b, t.c, t.d, t.e, t.f));
}
function xs(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: G(u, h) }, { i: y - 2, x: G(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: G(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: G(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: G(u, h) }, { i: y - 2, x: G(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, y = f.length, m; ++g < y; ) h[(m = f[g]).i] = m.x(d);
      return h.join("");
    };
  };
}
var yp = xs(gp, "px, ", "px)", "deg)"), _p = xs(bp, ", ", ")", ")"), ee = 0, ge = 0, ce = 0, Ms = 1e3, Nn, be, Sn = 0, Rt = 0, qn = 0, Ne = typeof performance == "object" && performance.now ? performance : Date, As = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function _i() {
  return Rt || (As(vp), Rt = Ne.now() + qn);
}
function vp() {
  Rt = 0;
}
function kn() {
  this._call = this._time = this._next = null;
}
kn.prototype = $s.prototype = {
  constructor: kn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? _i() : +n) + (e == null ? 0 : +e), !this._next && be !== this && (be ? be._next = this : Nn = this, be = this), this._call = t, this._time = n, Ir();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ir());
  }
};
function $s(t, e, n) {
  var r = new kn();
  return r.restart(t, e, n), r;
}
function mp() {
  _i(), ++ee;
  for (var t = Nn, e; t; )
    (e = Rt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ee;
}
function ma() {
  Rt = (Sn = Ne.now()) + qn, ee = ge = 0;
  try {
    mp();
  } finally {
    ee = 0, xp(), Rt = 0;
  }
}
function wp() {
  var t = Ne.now(), e = t - Sn;
  e > Ms && (qn -= e, Sn = t);
}
function xp() {
  for (var t, e = Nn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Nn = n);
  be = t, Ir(r);
}
function Ir(t) {
  if (!ee) {
    ge && (ge = clearTimeout(ge));
    var e = t - Rt;
    e > 24 ? (t < 1 / 0 && (ge = setTimeout(ma, t - Ne.now() - qn)), ce && (ce = clearInterval(ce))) : (ce || (Sn = Ne.now(), ce = setInterval(wp, Ms)), ee = 1, As(ma));
  }
}
function wa(t, e, n) {
  var r = new kn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Mp = hi("start", "end", "cancel", "interrupt"), Ap = [], Ts = 0, xa = 1, Rr = 2, un = 3, Ma = 4, jr = 5, cn = 6;
function Xn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  $p(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Mp,
    tween: Ap,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ts
  });
}
function vi(t, e) {
  var n = Q(t, e);
  if (n.state > Ts) throw new Error("too late; already scheduled");
  return n;
}
function ot(t, e) {
  var n = Q(t, e);
  if (n.state > un) throw new Error("too late; already running");
  return n;
}
function Q(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function $p(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = $s(a, 0, n.time);
  function a(u) {
    n.state = xa, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== xa) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === un) return wa(o);
        d.state === Ma ? (d.state = cn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = cn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (wa(function() {
      n.state === un && (n.state = Ma, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Rr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Rr) {
      for (n.state = un, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = jr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === jr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = cn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Tp(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Rr && r.state < jr, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Np(t) {
  return this.each(function() {
    Tp(this, t);
  });
}
function Sp(t, e) {
  var n, r;
  return function() {
    var i = ot(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function kp(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = ot(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Pp(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Sp : kp)(n, t, e));
}
function mi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[e];
  };
}
function Ns(t, e) {
  var n;
  return (typeof e == "number" ? G : e instanceof It ? Tn : (n = It(e)) ? (e = n, Tn) : vs)(t, e);
}
function Ep(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Op(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function zp(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Cp(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ip(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Rp(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function jp(t, e) {
  var n = Ln(t), r = n === "transform" ? _p : Ns;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Rp : Ip)(n, r, mi(this, "attr." + t, e)) : e == null ? (n.local ? Op : Ep)(n) : (n.local ? Cp : zp)(n, r, e));
}
function Fp(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Dp(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Lp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Dp(t, a)), n;
  }
  return i._value = e, i;
}
function qp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Fp(t, a)), n;
  }
  return i._value = e, i;
}
function Xp(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ln(t);
  return this.tween(n, (r.local ? Lp : qp)(r, e));
}
function Hp(t, e) {
  return function() {
    vi(this, t).delay = +e.apply(this, arguments);
  };
}
function Bp(t, e) {
  return e = +e, function() {
    vi(this, t).delay = e;
  };
}
function Up(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Hp : Bp)(e, t)) : Q(this.node(), e).delay;
}
function Yp(t, e) {
  return function() {
    ot(this, t).duration = +e.apply(this, arguments);
  };
}
function Gp(t, e) {
  return e = +e, function() {
    ot(this, t).duration = e;
  };
}
function Vp(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Yp : Gp)(e, t)) : Q(this.node(), e).duration;
}
function Kp(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ot(this, t).ease = e;
  };
}
function Wp(t) {
  var e = this._id;
  return arguments.length ? this.each(Kp(e, t)) : Q(this.node(), e).ease;
}
function Zp(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ot(this, t).ease = n;
  };
}
function Jp(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Zp(this._id, t));
}
function Qp(t) {
  typeof t != "function" && (t = os(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new pt(r, this._parents, this._name, this._id);
}
function tg(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new pt(o, this._parents, this._name, this._id);
}
function eg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ng(t, e, n) {
  var r, i, a = eg(e) ? vi : ot;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function rg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Q(this.node(), n).on.on(t) : this.each(ng(n, t, e));
}
function ig(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ag() {
  return this.on("end.remove", ig(this._id));
}
function og(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = di(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Xn(u[f], e, n, f, u, Q(l, n)));
  return new pt(a, this._parents, e, n);
}
function sg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = as(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = Q(l, n), y = 0, m = f.length; y < m; ++y)
          (d = f[y]) && Xn(d, e, n, y, f, g);
        a.push(f), o.push(l);
      }
  return new pt(a, o, e, n);
}
var ug = Ie.prototype.constructor;
function cg() {
  return new ug(this._groups, this._parents);
}
function lg(t, e) {
  var n, r, i;
  return function() {
    var a = te(this, t), o = (this.style.removeProperty(t), te(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Ss(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function fg(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = te(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function hg(t, e, n) {
  var r, i, a;
  return function() {
    var o = te(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), te(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function dg(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = ot(this, t), u = c.on, l = c.value[a] == null ? s || (s = Ss(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function pg(t, e, n) {
  var r = (t += "") == "transform" ? yp : Ns;
  return e == null ? this.styleTween(t, lg(t, r)).on("end.style." + t, Ss(t)) : typeof e == "function" ? this.styleTween(t, hg(t, r, mi(this, "style." + t, e))).each(dg(this._id, t)) : this.styleTween(t, fg(t, r, e), n).on("end.style." + t, null);
}
function gg(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function bg(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && gg(t, o, n)), r;
  }
  return a._value = e, a;
}
function yg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, bg(t, e, n ?? ""));
}
function _g(t) {
  return function() {
    this.textContent = t;
  };
}
function vg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function mg(t) {
  return this.tween("text", typeof t == "function" ? vg(mi(this, "text", t)) : _g(t == null ? "" : t + ""));
}
function wg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function xg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && wg(i)), e;
  }
  return r._value = t, r;
}
function Mg(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, xg(t));
}
function Ag() {
  for (var t = this._name, e = this._id, n = ks(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = Q(c, e);
        Xn(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new pt(r, this._parents, t, n);
}
function $g() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = ot(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var Tg = 0;
function pt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ks() {
  return ++Tg;
}
var ut = Ie.prototype;
pt.prototype = {
  constructor: pt,
  select: og,
  selectAll: sg,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: Qp,
  merge: tg,
  selection: cg,
  transition: Ag,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: rg,
  attr: jp,
  attrTween: Xp,
  style: pg,
  styleTween: yg,
  text: mg,
  textTween: Mg,
  remove: ag,
  tween: Pp,
  delay: Up,
  duration: Vp,
  ease: Wp,
  easeVarying: Jp,
  end: $g,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function Ng(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Sg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ng
};
function kg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Pg(t) {
  var e, n;
  t instanceof pt ? (e = t._id, t = t._name) : (e = ks(), (n = Sg).time = _i(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Xn(c, t, e, u, o, n || kg(c, e));
  return new pt(r, this._parents, t, e);
}
Ie.prototype.interrupt = Np;
Ie.prototype.transition = Pg;
const Fr = Math.PI, Dr = 2 * Fr, Nt = 1e-6, Eg = Dr - Nt;
function Ps(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Og(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Ps;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Es {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ps : Og(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, h = s - n, f = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > Nt) if (!(Math.abs(h * c - u * l) > Nt) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - o, g = i - s, y = c * c + u * u, m = d * d + g * g, x = Math.sqrt(y), p = Math.sqrt(f), M = a * Math.tan((Fr - Math.acos((y + f - m) / (2 * x * p))) / 2), b = M / p, v = M / x;
      Math.abs(b - 1) > Nt && this._append`L${e + b * l},${n + b * h}`, this._append`A${a},${a},0,0,${+(h * d > l * g)},${this._x1 = e + v * c},${this._y1 = n + v * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - l) > Nt) && this._append`L${u},${l}`, r && (f < 0 && (f = f % Dr + Dr), f > Eg ? this._append`A${r},${r},0,1,${h},${e - s},${n - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : f > Nt && this._append`A${r},${r},0,${+(f >= Fr)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function tt() {
  return new Es();
}
tt.prototype = Es.prototype;
function zg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Pn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ne(t) {
  return t = Pn(Math.abs(t)), t ? t[1] : NaN;
}
function Cg(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Ig(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Rg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function En(t) {
  if (!(e = Rg.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new wi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
En.prototype = wi.prototype;
function wi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
wi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function jg(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Os;
function Fg(t, e) {
  var n = Pn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Os = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Pn(t, Math.max(0, e + a - 1))[0];
}
function Aa(t, e) {
  var n = Pn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const $a = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: zg,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Aa(t * 100, e),
  r: Aa,
  s: Fg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ta(t) {
  return t;
}
var Na = Array.prototype.map, Sa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Dg(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Ta : Cg(Na.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Ta : Ig(Na.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = En(h);
    var f = h.fill, d = h.align, g = h.sign, y = h.symbol, m = h.zero, x = h.width, p = h.comma, M = h.precision, b = h.trim, v = h.type;
    v === "n" ? (p = !0, v = "g") : $a[v] || (M === void 0 && (M = 12), b = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var k = y === "$" ? n : y === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(v) ? o : "", z = $a[v], X = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(_) {
      var C = k, A = P, I, Tt, F;
      if (v === "c")
        A = z(_) + A, _ = "";
      else {
        _ = +_;
        var B = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : z(Math.abs(_), M), b && (_ = jg(_)), B && +_ == 0 && g !== "+" && (B = !1), C = (B ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + C, A = (v === "s" ? Sa[8 + Os / 3] : "") + A + (B && g === "(" ? ")" : ""), X) {
          for (I = -1, Tt = _.length; ++I < Tt; )
            if (F = _.charCodeAt(I), 48 > F || F > 57) {
              A = (F === 46 ? i + _.slice(I + 1) : _.slice(I)) + A, _ = _.slice(0, I);
              break;
            }
        }
      }
      p && !m && (_ = e(_, 1 / 0));
      var U = C.length + _.length + A.length, E = U < x ? new Array(x - U + 1).join(f) : "";
      switch (p && m && (_ = e(E + _, E.length ? x - A.length : 1 / 0), E = ""), d) {
        case "<":
          _ = C + _ + A + E;
          break;
        case "=":
          _ = C + E + _ + A;
          break;
        case "^":
          _ = E.slice(0, U = E.length >> 1) + C + _ + A + E.slice(U);
          break;
        default:
          _ = E + C + _ + A;
          break;
      }
      return a(_);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function l(h, f) {
    var d = u((h = En(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ne(f) / 3))) * 3, y = Math.pow(10, -g), m = Sa[8 + g / 3];
    return function(x) {
      return d(y * x) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var We, Hn, zs;
Lg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Lg(t) {
  return We = Dg(t), Hn = We.format, zs = We.formatPrefix, We;
}
function qg(t) {
  return Math.max(0, -ne(Math.abs(t)));
}
function Xg(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ne(e) / 3))) * 3 - ne(Math.abs(t)));
}
function Hg(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ne(e) - ne(t)) + 1;
}
function Bg(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Ug(t) {
  return function() {
    return t;
  };
}
function Yg(t) {
  return +t;
}
var ka = [0, 1];
function Ut(t) {
  return t;
}
function Lr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ug(isNaN(e) ? NaN : 0.5);
}
function Gg(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Vg(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Lr(i, r), a = n(o, a)) : (r = Lr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Kg(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Lr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Kh(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Wg(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Zg() {
  var t = ka, e = ka, n = yi, r, i, a, o = Ut, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Ut && (o = Gg(t[0], t[f - 1])), s = f > 2 ? Kg : Vg, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), G)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Yg), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = pp, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ut, l()) : o !== Ut;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Jg() {
  return Zg()(Ut, Ut);
}
function Qg(t, e, n, r) {
  var i = td(t, e, n), a;
  switch (r = En(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Xg(i, o)) && (r.precision = a), zs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Hg(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = qg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Hn(r);
}
function tb(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Qh(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Qg(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Pr(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function re() {
  var t = Jg();
  return t.copy = function() {
    return Wg(t, re());
  }, Bg.apply(t, arguments), tb(t);
}
function ye(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
ye.prototype = {
  constructor: ye,
  scale: function(t) {
    return t === 1 ? this : new ye(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ye(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ye.prototype;
var Cs = typeof global == "object" && global && global.Object === Object && global, eb = typeof self == "object" && self && self.Object === Object && self, bt = Cs || eb || Function("return this")(), it = bt.Symbol, Is = Object.prototype, nb = Is.hasOwnProperty, rb = Is.toString, le = it ? it.toStringTag : void 0;
function ib(t) {
  var e = nb.call(t, le), n = t[le];
  try {
    t[le] = void 0;
    var r = !0;
  } catch {
  }
  var i = rb.call(t);
  return r && (e ? t[le] = n : delete t[le]), i;
}
var ab = Object.prototype, ob = ab.toString;
function sb(t) {
  return ob.call(t);
}
var ub = "[object Null]", cb = "[object Undefined]", Pa = it ? it.toStringTag : void 0;
function oe(t) {
  return t == null ? t === void 0 ? cb : ub : Pa && Pa in Object(t) ? ib(t) : sb(t);
}
function ie(t) {
  return t != null && typeof t == "object";
}
var lb = "[object Symbol]";
function Bn(t) {
  return typeof t == "symbol" || ie(t) && oe(t) == lb;
}
function Rs(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var W = Array.isArray, Ea = it ? it.prototype : void 0, Oa = Ea ? Ea.toString : void 0;
function js(t) {
  if (typeof t == "string")
    return t;
  if (W(t))
    return Rs(t, js) + "";
  if (Bn(t))
    return Oa ? Oa.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var fb = /\s/;
function hb(t) {
  for (var e = t.length; e-- && fb.test(t.charAt(e)); )
    ;
  return e;
}
var db = /^\s+/;
function pb(t) {
  return t && t.slice(0, hb(t) + 1).replace(db, "");
}
function ae(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var za = NaN, gb = /^[-+]0x[0-9a-f]+$/i, bb = /^0b[01]+$/i, yb = /^0o[0-7]+$/i, _b = parseInt;
function vb(t) {
  if (typeof t == "number")
    return t;
  if (Bn(t))
    return za;
  if (ae(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ae(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = pb(t);
  var n = bb.test(t);
  return n || yb.test(t) ? _b(t.slice(2), n ? 2 : 8) : gb.test(t) ? za : +t;
}
var mb = 1 / 0, wb = 17976931348623157e292;
function dr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = vb(t), t === mb || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * wb;
  }
  return t === t ? t : 0;
}
function xb(t) {
  return t;
}
var Mb = "[object AsyncFunction]", Ab = "[object Function]", $b = "[object GeneratorFunction]", Tb = "[object Proxy]";
function Fs(t) {
  if (!ae(t))
    return !1;
  var e = oe(t);
  return e == Ab || e == $b || e == Mb || e == Tb;
}
var pr = bt["__core-js_shared__"], Ca = function() {
  var t = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Nb(t) {
  return !!Ca && Ca in t;
}
var Sb = Function.prototype, kb = Sb.toString;
function Lt(t) {
  if (t != null) {
    try {
      return kb.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Pb = /[\\^$.*+?()[\]{}|]/g, Eb = /^\[object .+?Constructor\]$/, Ob = Function.prototype, zb = Object.prototype, Cb = Ob.toString, Ib = zb.hasOwnProperty, Rb = RegExp(
  "^" + Cb.call(Ib).replace(Pb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jb(t) {
  if (!ae(t) || Nb(t))
    return !1;
  var e = Fs(t) ? Rb : Eb;
  return e.test(Lt(t));
}
function Fb(t, e) {
  return t == null ? void 0 : t[e];
}
function se(t, e) {
  var n = Fb(t, e);
  return jb(n) ? n : void 0;
}
var qr = se(bt, "WeakMap"), Db = 9007199254740991, Lb = /^(?:0|[1-9]\d*)$/;
function xi(t, e) {
  var n = typeof t;
  return e = e ?? Db, !!e && (n == "number" || n != "symbol" && Lb.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Mi(t, e) {
  return t === e || t !== t && e !== e;
}
var qb = 9007199254740991;
function Ai(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= qb;
}
function Un(t) {
  return t != null && Ai(t.length) && !Fs(t);
}
function Xb(t, e, n) {
  if (!ae(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Un(n) && xi(e, n.length) : r == "string" && e in n) ? Mi(n[e], t) : !1;
}
var Hb = Object.prototype;
function Bb(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Hb;
  return t === n;
}
function Ub(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Yb = "[object Arguments]";
function Ia(t) {
  return ie(t) && oe(t) == Yb;
}
var Ds = Object.prototype, Gb = Ds.hasOwnProperty, Vb = Ds.propertyIsEnumerable, $i = Ia(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ia : function(t) {
  return ie(t) && Gb.call(t, "callee") && !Vb.call(t, "callee");
};
function Kb() {
  return !1;
}
var Ls = typeof exports == "object" && exports && !exports.nodeType && exports, Ra = Ls && typeof module == "object" && module && !module.nodeType && module, Wb = Ra && Ra.exports === Ls, ja = Wb ? bt.Buffer : void 0, Zb = ja ? ja.isBuffer : void 0, Xr = Zb || Kb, Jb = "[object Arguments]", Qb = "[object Array]", ty = "[object Boolean]", ey = "[object Date]", ny = "[object Error]", ry = "[object Function]", iy = "[object Map]", ay = "[object Number]", oy = "[object Object]", sy = "[object RegExp]", uy = "[object Set]", cy = "[object String]", ly = "[object WeakMap]", fy = "[object ArrayBuffer]", hy = "[object DataView]", dy = "[object Float32Array]", py = "[object Float64Array]", gy = "[object Int8Array]", by = "[object Int16Array]", yy = "[object Int32Array]", _y = "[object Uint8Array]", vy = "[object Uint8ClampedArray]", my = "[object Uint16Array]", wy = "[object Uint32Array]", T = {};
T[dy] = T[py] = T[gy] = T[by] = T[yy] = T[_y] = T[vy] = T[my] = T[wy] = !0;
T[Jb] = T[Qb] = T[fy] = T[ty] = T[hy] = T[ey] = T[ny] = T[ry] = T[iy] = T[ay] = T[oy] = T[sy] = T[uy] = T[cy] = T[ly] = !1;
function xy(t) {
  return ie(t) && Ai(t.length) && !!T[oe(t)];
}
function My(t) {
  return function(e) {
    return t(e);
  };
}
var qs = typeof exports == "object" && exports && !exports.nodeType && exports, _e = qs && typeof module == "object" && module && !module.nodeType && module, Ay = _e && _e.exports === qs, gr = Ay && Cs.process, Fa = function() {
  try {
    var t = _e && _e.require && _e.require("util").types;
    return t || gr && gr.binding && gr.binding("util");
  } catch {
  }
}(), Da = Fa && Fa.isTypedArray, Xs = Da ? My(Da) : xy, $y = Object.prototype, Ty = $y.hasOwnProperty;
function Ny(t, e) {
  var n = W(t), r = !n && $i(t), i = !n && !r && Xr(t), a = !n && !r && !i && Xs(t), o = n || r || i || a, s = o ? Ub(t.length, String) : [], c = s.length;
  for (var u in t)
    Ty.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xi(u, c))) && s.push(u);
  return s;
}
function Sy(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var ky = Sy(Object.keys, Object), Py = Object.prototype, Ey = Py.hasOwnProperty;
function Oy(t) {
  if (!Bb(t))
    return ky(t);
  var e = [];
  for (var n in Object(t))
    Ey.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ti(t) {
  return Un(t) ? Ny(t) : Oy(t);
}
var zy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cy = /^\w*$/;
function Ni(t, e) {
  if (W(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Bn(t) ? !0 : Cy.test(t) || !zy.test(t) || e != null && t in Object(e);
}
var Se = se(Object, "create");
function Iy() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
function Ry(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var jy = "__lodash_hash_undefined__", Fy = Object.prototype, Dy = Fy.hasOwnProperty;
function Ly(t) {
  var e = this.__data__;
  if (Se) {
    var n = e[t];
    return n === jy ? void 0 : n;
  }
  return Dy.call(e, t) ? e[t] : void 0;
}
var qy = Object.prototype, Xy = qy.hasOwnProperty;
function Hy(t) {
  var e = this.__data__;
  return Se ? e[t] !== void 0 : Xy.call(e, t);
}
var By = "__lodash_hash_undefined__";
function Uy(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Se && e === void 0 ? By : e, this;
}
function jt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
jt.prototype.clear = Iy;
jt.prototype.delete = Ry;
jt.prototype.get = Ly;
jt.prototype.has = Hy;
jt.prototype.set = Uy;
function Yy() {
  this.__data__ = [], this.size = 0;
}
function Yn(t, e) {
  for (var n = t.length; n--; )
    if (Mi(t[n][0], e))
      return n;
  return -1;
}
var Gy = Array.prototype, Vy = Gy.splice;
function Ky(t) {
  var e = this.__data__, n = Yn(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Vy.call(e, n, 1), --this.size, !0;
}
function Wy(t) {
  var e = this.__data__, n = Yn(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Zy(t) {
  return Yn(this.__data__, t) > -1;
}
function Jy(t, e) {
  var n = this.__data__, r = Yn(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = Yy;
yt.prototype.delete = Ky;
yt.prototype.get = Wy;
yt.prototype.has = Zy;
yt.prototype.set = Jy;
var ke = se(bt, "Map");
function Qy() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (ke || yt)(),
    string: new jt()
  };
}
function t_(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Gn(t, e) {
  var n = t.__data__;
  return t_(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function e_(t) {
  var e = Gn(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function n_(t) {
  return Gn(this, t).get(t);
}
function r_(t) {
  return Gn(this, t).has(t);
}
function i_(t, e) {
  var n = Gn(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function _t(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = Qy;
_t.prototype.delete = e_;
_t.prototype.get = n_;
_t.prototype.has = r_;
_t.prototype.set = i_;
var a_ = "Expected a function";
function Si(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(a_);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Si.Cache || _t)(), n;
}
Si.Cache = _t;
var o_ = 500;
function s_(t) {
  var e = Si(t, function(r) {
    return n.size === o_ && n.clear(), r;
  }), n = e.cache;
  return e;
}
var u_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, c_ = /\\(\\)?/g, l_ = s_(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(u_, function(n, r, i, a) {
    e.push(i ? a.replace(c_, "$1") : r || n);
  }), e;
});
function f_(t) {
  return t == null ? "" : js(t);
}
function Hs(t, e) {
  return W(t) ? t : Ni(t, e) ? [t] : l_(f_(t));
}
function Vn(t) {
  if (typeof t == "string" || Bn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Bs(t, e) {
  e = Hs(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Vn(e[n++])];
  return n && n == r ? t : void 0;
}
function h_(t, e, n) {
  var r = t == null ? void 0 : Bs(t, e);
  return r === void 0 ? n : r;
}
function Us(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var La = it ? it.isConcatSpreadable : void 0;
function d_(t) {
  return W(t) || $i(t) || !!(La && t && t[La]);
}
function p_(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = d_), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Us(i, s) : i[i.length] = s;
  }
  return i;
}
function g_(t) {
  var e = t == null ? 0 : t.length;
  return e ? p_(t) : [];
}
function b_() {
  this.__data__ = new yt(), this.size = 0;
}
function y_(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function __(t) {
  return this.__data__.get(t);
}
function v_(t) {
  return this.__data__.has(t);
}
var m_ = 200;
function w_(t, e) {
  var n = this.__data__;
  if (n instanceof yt) {
    var r = n.__data__;
    if (!ke || r.length < m_ - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new _t(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function lt(t) {
  var e = this.__data__ = new yt(t);
  this.size = e.size;
}
lt.prototype.clear = b_;
lt.prototype.delete = y_;
lt.prototype.get = __;
lt.prototype.has = v_;
lt.prototype.set = w_;
function x_(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function M_() {
  return [];
}
var A_ = Object.prototype, $_ = A_.propertyIsEnumerable, qa = Object.getOwnPropertySymbols, T_ = qa ? function(t) {
  return t == null ? [] : (t = Object(t), x_(qa(t), function(e) {
    return $_.call(t, e);
  }));
} : M_;
function N_(t, e, n) {
  var r = e(t);
  return W(t) ? r : Us(r, n(t));
}
function Xa(t) {
  return N_(t, Ti, T_);
}
var Hr = se(bt, "DataView"), Br = se(bt, "Promise"), Ur = se(bt, "Set"), Ha = "[object Map]", S_ = "[object Object]", Ba = "[object Promise]", Ua = "[object Set]", Ya = "[object WeakMap]", Ga = "[object DataView]", k_ = Lt(Hr), P_ = Lt(ke), E_ = Lt(Br), O_ = Lt(Ur), z_ = Lt(qr), xt = oe;
(Hr && xt(new Hr(new ArrayBuffer(1))) != Ga || ke && xt(new ke()) != Ha || Br && xt(Br.resolve()) != Ba || Ur && xt(new Ur()) != Ua || qr && xt(new qr()) != Ya) && (xt = function(t) {
  var e = oe(t), n = e == S_ ? t.constructor : void 0, r = n ? Lt(n) : "";
  if (r)
    switch (r) {
      case k_:
        return Ga;
      case P_:
        return Ha;
      case E_:
        return Ba;
      case O_:
        return Ua;
      case z_:
        return Ya;
    }
  return e;
});
var Va = bt.Uint8Array, C_ = "__lodash_hash_undefined__";
function I_(t) {
  return this.__data__.set(t, C_), this;
}
function R_(t) {
  return this.__data__.has(t);
}
function On(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new _t(); ++e < n; )
    this.add(t[e]);
}
On.prototype.add = On.prototype.push = I_;
On.prototype.has = R_;
function j_(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function F_(t, e) {
  return t.has(e);
}
var D_ = 1, L_ = 2;
function Ys(t, e, n, r, i, a) {
  var o = n & D_, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & L_ ? new On() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var g = t[h], y = e[h];
    if (r)
      var m = o ? r(y, g, h, e, t, a) : r(g, y, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!j_(e, function(x, p) {
        if (!F_(d, p) && (g === x || i(g, x, n, r, a)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === y || i(g, y, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function q_(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function X_(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var H_ = 1, B_ = 2, U_ = "[object Boolean]", Y_ = "[object Date]", G_ = "[object Error]", V_ = "[object Map]", K_ = "[object Number]", W_ = "[object RegExp]", Z_ = "[object Set]", J_ = "[object String]", Q_ = "[object Symbol]", t1 = "[object ArrayBuffer]", e1 = "[object DataView]", Ka = it ? it.prototype : void 0, br = Ka ? Ka.valueOf : void 0;
function n1(t, e, n, r, i, a, o) {
  switch (n) {
    case e1:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case t1:
      return !(t.byteLength != e.byteLength || !a(new Va(t), new Va(e)));
    case U_:
    case Y_:
    case K_:
      return Mi(+t, +e);
    case G_:
      return t.name == e.name && t.message == e.message;
    case W_:
    case J_:
      return t == e + "";
    case V_:
      var s = q_;
    case Z_:
      var c = r & H_;
      if (s || (s = X_), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= B_, o.set(t, e);
      var l = Ys(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case Q_:
      if (br)
        return br.call(t) == br.call(e);
  }
  return !1;
}
var r1 = 1, i1 = Object.prototype, a1 = i1.hasOwnProperty;
function o1(t, e, n, r, i, a) {
  var o = n & r1, s = Xa(t), c = s.length, u = Xa(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : a1.call(e, f)))
      return !1;
  }
  var d = a.get(t), g = a.get(e);
  if (d && g)
    return d == e && g == t;
  var y = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var x = t[f], p = e[f];
    if (r)
      var M = o ? r(p, x, f, e, t, a) : r(x, p, f, t, e, a);
    if (!(M === void 0 ? x === p || i(x, p, n, r, a) : M)) {
      y = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (y && !m) {
    var b = t.constructor, v = e.constructor;
    b != v && "constructor" in t && "constructor" in e && !(typeof b == "function" && b instanceof b && typeof v == "function" && v instanceof v) && (y = !1);
  }
  return a.delete(t), a.delete(e), y;
}
var s1 = 1, Wa = "[object Arguments]", Za = "[object Array]", Ze = "[object Object]", u1 = Object.prototype, Ja = u1.hasOwnProperty;
function c1(t, e, n, r, i, a) {
  var o = W(t), s = W(e), c = o ? Za : xt(t), u = s ? Za : xt(e);
  c = c == Wa ? Ze : c, u = u == Wa ? Ze : u;
  var l = c == Ze, h = u == Ze, f = c == u;
  if (f && Xr(t)) {
    if (!Xr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new lt()), o || Xs(t) ? Ys(t, e, n, r, i, a) : n1(t, e, c, n, r, i, a);
  if (!(n & s1)) {
    var d = l && Ja.call(t, "__wrapped__"), g = h && Ja.call(e, "__wrapped__");
    if (d || g) {
      var y = d ? t.value() : t, m = g ? e.value() : e;
      return a || (a = new lt()), i(y, m, n, r, a);
    }
  }
  return f ? (a || (a = new lt()), o1(t, e, n, r, i, a)) : !1;
}
function ki(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ie(t) && !ie(e) ? t !== t && e !== e : c1(t, e, n, r, ki, i);
}
var l1 = 1, f1 = 2;
function h1(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new lt(), h;
      if (!(h === void 0 ? ki(u, c, l1 | f1, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Gs(t) {
  return t === t && !ae(t);
}
function d1(t) {
  for (var e = Ti(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Gs(i)];
  }
  return e;
}
function Vs(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function p1(t) {
  var e = d1(t);
  return e.length == 1 && e[0][2] ? Vs(e[0][0], e[0][1]) : function(n) {
    return n === t || h1(n, t, e);
  };
}
function g1(t, e) {
  return t != null && e in Object(t);
}
function b1(t, e, n) {
  e = Hs(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Vn(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ai(i) && xi(o, i) && (W(t) || $i(t)));
}
function y1(t, e) {
  return t != null && b1(t, e, g1);
}
var _1 = 1, v1 = 2;
function m1(t, e) {
  return Ni(t) && Gs(e) ? Vs(Vn(t), e) : function(n) {
    var r = h_(n, t);
    return r === void 0 && r === e ? y1(n, t) : ki(e, r, _1 | v1);
  };
}
function w1(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function x1(t) {
  return function(e) {
    return Bs(e, t);
  };
}
function M1(t) {
  return Ni(t) ? w1(Vn(t)) : x1(t);
}
function A1(t) {
  return typeof t == "function" ? t : t == null ? xb : typeof t == "object" ? W(t) ? m1(t[0], t[1]) : p1(t) : M1(t);
}
function $1(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var T1 = $1();
function N1(t, e) {
  return t && T1(t, e, Ti);
}
function S1(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Un(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var k1 = S1(N1);
function P1(t, e) {
  var n = -1, r = Un(t) ? Array(t.length) : [];
  return k1(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function Qa(t, e) {
  var n = W(t) ? Rs : P1;
  return n(t, A1(e));
}
var E1 = Math.ceil, O1 = Math.max;
function z1(t, e, n, r) {
  for (var i = -1, a = O1(E1((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function C1(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Xb(e, n, r) && (n = r = void 0), e = dr(e), n === void 0 ? (n = e, e = 0) : n = dr(n), r = r === void 0 ? e < n ? 1 : -1 : dr(r), z1(e, n, r);
  };
}
var I1 = C1();
const R1 = (t, e, n = 12, r = 12) => {
  const i = re().domain([0, n]).range([0, t]), a = re().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return I1((n + 1) * (r + 1)).map(function(o) {
        return { m: o % (n + 1), n: Math.floor(o / (n + 1)), x: i(o % (n + 1)), y: a(Math.floor(o / (n + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const c = g_(Qa(s, function(u) {
        return Qa(
          o,
          function(l) {
            return { x: i(l), y: a(u) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, j1 = "_widget_9wct0_49", F1 = "_label_9wct0_69", D1 = "_lit_9wct0_74", L1 = "_button_9wct0_78", q1 = "_symbol_9wct0_78", X1 = "_radio_9wct0_79", H1 = "_radiobutton_9wct0_79", B1 = "_selected_9wct0_85", U1 = "_toggle_9wct0_86", Y1 = "_slider_9wct0_95", G1 = "_track_9wct0_95", V1 = "_track_overlay_9wct0_100", K1 = "_handle_9wct0_108", w = {
  widget: j1,
  label: F1,
  lit: D1,
  button: L1,
  symbol: q1,
  radio: X1,
  radiobutton: H1,
  selected: B1,
  toggle: U1,
  slider: Y1,
  track: G1,
  track_overlay: V1,
  handle: K1
}, Kn = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, Pi = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, W1 = (t = 1) => {
  const e = tt();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Z1 = (t = 1) => {
  const e = tt(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, J1 = (t = 1) => {
  const e = tt();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Q1 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = tt();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, tv = (t = 1) => {
  const e = tt(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, ev = (t = 1) => {
  const e = tt(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, nv = (t = 1) => {
  const e = tt(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, rv = (t = 1) => {
  var e = tt(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, iv = (t = 1) => {
  const e = tt(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Yr = (t) => {
  switch (t) {
    case "play":
      return W1;
    case "forward":
      return Z1;
    case "back":
      return J1;
    case "pause":
      return Q1;
    case "reload":
      return tv;
    case "capture":
      return ev;
    case "rewind":
      return nv;
    case "stop":
      return rv;
    case "push":
      return iv;
  }
}, Ei = () => {
  const t = "button";
  var e = Kn(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(f) {
  }, l = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % l.length, u(), O(this.parentNode).select("." + w.symbol).attr("d", Yr(l[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % l.length, u(), f.select("#button_" + e).select("." + w.symbol).attr("d", Yr(l[h])(r * n));
    }
  };
}, av = () => {
  const t = "slider", e = Hn(".3f");
  var n = Kn(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = 4, l = null, h = function(p) {
  }, f = function(p) {
  }, d = [0, 1], g = 0, y = null, m = re().domain(d).range([0, r]).clamp(!0);
  const x = function(p, M, b = d) {
    const v = p.select("#slider_" + n);
    m.domain(b), g = M, v.selectAll("." + w.handle).transition().attr("cx", m(M)), o && v.select("." + w.label).text(y + " = " + e(g)), h(), f();
  };
  return {
    type: t,
    scale: m,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? y : (y = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    girth: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    knob: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    show: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    labelpadding: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return h = p, this;
      h(p);
    },
    update_end: function(p) {
      if (typeof p == "function")
        return f = p, this;
      f(p);
    },
    range: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? g : (g = p, this);
    },
    reset: x,
    click: x
  };
}, ov = () => {
  const t = "toggle";
  var e = Kn(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, c = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? c : (c = u, this);
    },
    click: function() {
      c = !c;
      const u = O(this.parentNode);
      u.select("." + w.handle).transition().attr("cx", c ? 2 * n : 0), u.classed(w.selected, c), s();
    },
    reset: function(u, l) {
      c = l;
      const h = u.select("#toggle_" + e);
      h.selectAll("." + w.handle).transition().attr("cx", c ? 2 * n : 0), h.classed(w.selected, c), s();
    }
  };
}, sv = () => {
  const t = "radio";
  var e = Kn(), n = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, c = "right", u = null, l = function(d) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    choices: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function(d, g) {
      f = g, O(this.parentNode).selectAll("." + w.symbol).classed(w.selected, (y) => y == f), l();
    },
    reset: function(d, g) {
      f = g, d.select("#radio_" + e).selectAll("." + w.symbol).classed(w.selected, (y) => y == f), l();
    }
  };
}, uv = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = O(a).attr("class", w.widget + " " + w.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", w.background).on("click", t.click).on("mouseover", function() {
    O(this).classed(w.lit, !0), O(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(w.lit, !1), O(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), o.append("path").attr("d", Yr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", w.symbol), r) {
    const c = Pi(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", w.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Ks = (t, e) => {
  const n = tt();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, cv = (t, e) => {
  const n = Hn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = O(c).attr("class", w.widget + " " + w.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, l = (x) => {
    const p = x && x.sourceEvent ? x.sourceEvent : x;
    return p ? p.clientX != null ? p.clientX : p.touches && p.touches.length ? p.touches[0].clientX : p.changedTouches && p.changedTouches.length ? p.changedTouches[0].clientX : null : null;
  }, h = (x, p) => {
    const M = l(x);
    if (M == null) return null;
    const b = p.getBoundingClientRect(), v = M - b.left, k = p.width && p.width.baseVal ? p.width.baseVal.value : b.width, P = b.width ? k / b.width : 1;
    return v * P - u;
  };
  s.append("path").attr("d", Ks(t.size(), t.girth())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", w.track_overlay).on("click", function(x) {
    const p = h(x, this);
    if (p == null) return;
    const M = Math.max(0, Math.min(t.size(), p));
    t.value(o.invert(M)), t.update(), t.update_end(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + n(t.value()));
  }).call(
    U0().on("drag", function(x) {
      const p = h(x, this);
      if (p == null) return;
      const M = Math.max(0, Math.min(t.size(), p));
      t.value(o.invert(M)), t.update(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(x) {
      t.update_end();
    })
  );
  var f, d, g, y = "bottom";
  const m = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? d = t.labelposition().match(/bottom/i) != null ? Ue([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + m : -Ue([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - m : d = t.labelposition().match(/bottom/i) != null ? Ue([t.girth() / 2, t.knob()]) + 7 + m : -Ue([t.girth() / 2, t.knob()]) - 7 - m, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", w.label).style("text-anchor", g).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + d + ")"), c;
}, lv = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = O(o).attr("class", w.widget + " " + w.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(w.selected, t.value() == 1);
  if (s.append("path").attr("d", Ks(2 * t.size(), 2 * t.size())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", w.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Pi(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", w.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, fv = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ed(o), c = re().domain([0, o - 1]).range([0, t.size()]), u = re().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = O(l).attr("class", w.widget + " " + w.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + w.radiobutton).data(s).enter().append("g").attr("class", w.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + c(y) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), f.attr("class", w.background).on("mouseover", function() {
    O(this).classed(w.lit, !0), O(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(w.lit, !1), O(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), d.attr("class", w.symbol), d.filter((y) => y == t.value()).classed(w.selected, !0), h.on("click", t.click);
  const g = Pi(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", w.label).text(function(y, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), l;
}, Je = (t, e) => {
  switch (t.type) {
    case "button":
      return uv(t);
    case "slider":
      return cv(t);
    case "radio":
      return fv(t);
    case "toggle":
      return lv(t);
  }
}, hv = "_displayPanel_pb0r4_1", dv = "_controlPanel_pb0r4_8", to = {
  displayPanel: hv,
  controlPanel: dv
}, pv = (t, e) => {
  const n = R1(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  );
  console.log(t);
  const r = Ol("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", to.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + to.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && s.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && o.style("border", e.display_border), e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (c) => "translate(" + c.x + "," + c.y + ")").style("fill", "black"), { display: o, controls: s, grid: n };
};
var Ws = typeof global == "object" && global && global.Object === Object && global, gv = typeof self == "object" && self && self.Object === Object && self, vt = Ws || gv || Function("return this")(), $t = vt.Symbol, Zs = Object.prototype, bv = Zs.hasOwnProperty, yv = Zs.toString, fe = $t ? $t.toStringTag : void 0;
function _v(t) {
  var e = bv.call(t, fe), n = t[fe];
  try {
    t[fe] = void 0;
    var r = !0;
  } catch {
  }
  var i = yv.call(t);
  return r && (e ? t[fe] = n : delete t[fe]), i;
}
var vv = Object.prototype, mv = vv.toString;
function wv(t) {
  return mv.call(t);
}
var xv = "[object Null]", Mv = "[object Undefined]", eo = $t ? $t.toStringTag : void 0;
function qt(t) {
  return t == null ? t === void 0 ? Mv : xv : eo && eo in Object(t) ? _v(t) : wv(t);
}
function Ft(t) {
  return t != null && typeof t == "object";
}
var Av = "[object Symbol]";
function Wn(t) {
  return typeof t == "symbol" || Ft(t) && qt(t) == Av;
}
function Zn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var Z = Array.isArray, no = $t ? $t.prototype : void 0, ro = no ? no.toString : void 0;
function Js(t) {
  if (typeof t == "string")
    return t;
  if (Z(t))
    return Zn(t, Js) + "";
  if (Wn(t))
    return ro ? ro.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var $v = /\s/;
function Tv(t) {
  for (var e = t.length; e-- && $v.test(t.charAt(e)); )
    ;
  return e;
}
var Nv = /^\s+/;
function Sv(t) {
  return t && t.slice(0, Tv(t) + 1).replace(Nv, "");
}
function gt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var io = NaN, kv = /^[-+]0x[0-9a-f]+$/i, Pv = /^0b[01]+$/i, Ev = /^0o[0-7]+$/i, Ov = parseInt;
function zv(t) {
  if (typeof t == "number")
    return t;
  if (Wn(t))
    return io;
  if (gt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = gt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Sv(t);
  var n = Pv.test(t);
  return n || Ev.test(t) ? Ov(t.slice(2), n ? 2 : 8) : kv.test(t) ? io : +t;
}
var Cv = 1 / 0, Iv = 17976931348623157e292;
function yr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = zv(t), t === Cv || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Iv;
  }
  return t === t ? t : 0;
}
function Oi(t) {
  return t;
}
var Rv = "[object AsyncFunction]", jv = "[object Function]", Fv = "[object GeneratorFunction]", Dv = "[object Proxy]";
function Qs(t) {
  if (!gt(t))
    return !1;
  var e = qt(t);
  return e == jv || e == Fv || e == Rv || e == Dv;
}
var _r = vt["__core-js_shared__"], ao = function() {
  var t = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Lv(t) {
  return !!ao && ao in t;
}
var qv = Function.prototype, Xv = qv.toString;
function Xt(t) {
  if (t != null) {
    try {
      return Xv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Hv = /[\\^$.*+?()[\]{}|]/g, Bv = /^\[object .+?Constructor\]$/, Uv = Function.prototype, Yv = Object.prototype, Gv = Uv.toString, Vv = Yv.hasOwnProperty, Kv = RegExp(
  "^" + Gv.call(Vv).replace(Hv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wv(t) {
  if (!gt(t) || Lv(t))
    return !1;
  var e = Qs(t) ? Kv : Bv;
  return e.test(Xt(t));
}
function Zv(t, e) {
  return t == null ? void 0 : t[e];
}
function Ht(t, e) {
  var n = Zv(t, e);
  return Wv(n) ? n : void 0;
}
var Gr = Ht(vt, "WeakMap"), oo = function() {
  try {
    var t = Ht(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Jv(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Qv = 9007199254740991, tm = /^(?:0|[1-9]\d*)$/;
function Jn(t, e) {
  var n = typeof t;
  return e = e ?? Qv, !!e && (n == "number" || n != "symbol" && tm.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function em(t, e, n) {
  e == "__proto__" && oo ? oo(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Qn(t, e) {
  return t === e || t !== t && e !== e;
}
var nm = Object.prototype, rm = nm.hasOwnProperty;
function im(t, e, n) {
  var r = t[e];
  (!(rm.call(t, e) && Qn(r, n)) || n === void 0 && !(e in t)) && em(t, e, n);
}
var am = 9007199254740991;
function zi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= am;
}
function je(t) {
  return t != null && zi(t.length) && !Qs(t);
}
function om(t, e, n) {
  if (!gt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? je(n) && Jn(e, n.length) : r == "string" && e in n) ? Qn(n[e], t) : !1;
}
var sm = Object.prototype;
function tu(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || sm;
  return t === n;
}
function um(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var cm = "[object Arguments]";
function so(t) {
  return Ft(t) && qt(t) == cm;
}
var eu = Object.prototype, lm = eu.hasOwnProperty, fm = eu.propertyIsEnumerable, nu = so(/* @__PURE__ */ function() {
  return arguments;
}()) ? so : function(t) {
  return Ft(t) && lm.call(t, "callee") && !fm.call(t, "callee");
};
function hm() {
  return !1;
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, uo = ru && typeof module == "object" && module && !module.nodeType && module, dm = uo && uo.exports === ru, co = dm ? vt.Buffer : void 0, pm = co ? co.isBuffer : void 0, Vr = pm || hm, gm = "[object Arguments]", bm = "[object Array]", ym = "[object Boolean]", _m = "[object Date]", vm = "[object Error]", mm = "[object Function]", wm = "[object Map]", xm = "[object Number]", Mm = "[object Object]", Am = "[object RegExp]", $m = "[object Set]", Tm = "[object String]", Nm = "[object WeakMap]", Sm = "[object ArrayBuffer]", km = "[object DataView]", Pm = "[object Float32Array]", Em = "[object Float64Array]", Om = "[object Int8Array]", zm = "[object Int16Array]", Cm = "[object Int32Array]", Im = "[object Uint8Array]", Rm = "[object Uint8ClampedArray]", jm = "[object Uint16Array]", Fm = "[object Uint32Array]", N = {};
N[Pm] = N[Em] = N[Om] = N[zm] = N[Cm] = N[Im] = N[Rm] = N[jm] = N[Fm] = !0;
N[gm] = N[bm] = N[Sm] = N[ym] = N[km] = N[_m] = N[vm] = N[mm] = N[wm] = N[xm] = N[Mm] = N[Am] = N[$m] = N[Tm] = N[Nm] = !1;
function Dm(t) {
  return Ft(t) && zi(t.length) && !!N[qt(t)];
}
function Lm(t) {
  return function(e) {
    return t(e);
  };
}
var iu = typeof exports == "object" && exports && !exports.nodeType && exports, ve = iu && typeof module == "object" && module && !module.nodeType && module, qm = ve && ve.exports === iu, vr = qm && Ws.process, lo = function() {
  try {
    var t = ve && ve.require && ve.require("util").types;
    return t || vr && vr.binding && vr.binding("util");
  } catch {
  }
}(), fo = lo && lo.isTypedArray, au = fo ? Lm(fo) : Dm, Xm = Object.prototype, Hm = Xm.hasOwnProperty;
function ou(t, e) {
  var n = Z(t), r = !n && nu(t), i = !n && !r && Vr(t), a = !n && !r && !i && au(t), o = n || r || i || a, s = o ? um(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || Hm.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Jn(u, c))) && s.push(u);
  return s;
}
function su(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Bm = su(Object.keys, Object), Um = Object.prototype, Ym = Um.hasOwnProperty;
function Gm(t) {
  if (!tu(t))
    return Bm(t);
  var e = [];
  for (var n in Object(t))
    Ym.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function tr(t) {
  return je(t) ? ou(t) : Gm(t);
}
function Vm(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Km = Object.prototype, Wm = Km.hasOwnProperty;
function Zm(t) {
  if (!gt(t))
    return Vm(t);
  var e = tu(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Wm.call(t, r)) || n.push(r);
  return n;
}
function Jm(t) {
  return je(t) ? ou(t, !0) : Zm(t);
}
var Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tw = /^\w*$/;
function Ci(t, e) {
  if (Z(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Wn(t) ? !0 : tw.test(t) || !Qm.test(t) || e != null && t in Object(e);
}
var Pe = Ht(Object, "create");
function ew() {
  this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
}
function nw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var rw = "__lodash_hash_undefined__", iw = Object.prototype, aw = iw.hasOwnProperty;
function ow(t) {
  var e = this.__data__;
  if (Pe) {
    var n = e[t];
    return n === rw ? void 0 : n;
  }
  return aw.call(e, t) ? e[t] : void 0;
}
var sw = Object.prototype, uw = sw.hasOwnProperty;
function cw(t) {
  var e = this.__data__;
  return Pe ? e[t] !== void 0 : uw.call(e, t);
}
var lw = "__lodash_hash_undefined__";
function fw(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Pe && e === void 0 ? lw : e, this;
}
function Dt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Dt.prototype.clear = ew;
Dt.prototype.delete = nw;
Dt.prototype.get = ow;
Dt.prototype.has = cw;
Dt.prototype.set = fw;
function hw() {
  this.__data__ = [], this.size = 0;
}
function er(t, e) {
  for (var n = t.length; n--; )
    if (Qn(t[n][0], e))
      return n;
  return -1;
}
var dw = Array.prototype, pw = dw.splice;
function gw(t) {
  var e = this.__data__, n = er(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : pw.call(e, n, 1), --this.size, !0;
}
function bw(t) {
  var e = this.__data__, n = er(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function yw(t) {
  return er(this.__data__, t) > -1;
}
function _w(t, e) {
  var n = this.__data__, r = er(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = hw;
mt.prototype.delete = gw;
mt.prototype.get = bw;
mt.prototype.has = yw;
mt.prototype.set = _w;
var Ee = Ht(vt, "Map");
function vw() {
  this.size = 0, this.__data__ = {
    hash: new Dt(),
    map: new (Ee || mt)(),
    string: new Dt()
  };
}
function mw(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function nr(t, e) {
  var n = t.__data__;
  return mw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function ww(t) {
  var e = nr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function xw(t) {
  return nr(this, t).get(t);
}
function Mw(t) {
  return nr(this, t).has(t);
}
function Aw(t, e) {
  var n = nr(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function wt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = vw;
wt.prototype.delete = ww;
wt.prototype.get = xw;
wt.prototype.has = Mw;
wt.prototype.set = Aw;
var $w = "Expected a function";
function Ii(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError($w);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Ii.Cache || wt)(), n;
}
Ii.Cache = wt;
var Tw = 500;
function Nw(t) {
  var e = Ii(t, function(r) {
    return n.size === Tw && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Sw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kw = /\\(\\)?/g, Pw = Nw(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Sw, function(n, r, i, a) {
    e.push(i ? a.replace(kw, "$1") : r || n);
  }), e;
});
function rr(t) {
  return t == null ? "" : Js(t);
}
function ir(t, e) {
  return Z(t) ? t : Ci(t, e) ? [t] : Pw(rr(t));
}
function Fe(t) {
  if (typeof t == "string" || Wn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ri(t, e) {
  e = ir(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Fe(e[n++])];
  return n && n == r ? t : void 0;
}
function Ew(t, e, n) {
  var r = t == null ? void 0 : Ri(t, e);
  return r === void 0 ? n : r;
}
function uu(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Ow = su(Object.getPrototypeOf, Object);
function zw(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Cw(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, zw(t, e, n);
}
var Iw = "\\ud800-\\udfff", Rw = "\\u0300-\\u036f", jw = "\\ufe20-\\ufe2f", Fw = "\\u20d0-\\u20ff", Dw = Rw + jw + Fw, Lw = "\\ufe0e\\ufe0f", qw = "\\u200d", Xw = RegExp("[" + qw + Iw + Dw + Lw + "]");
function cu(t) {
  return Xw.test(t);
}
function Hw(t) {
  return t.split("");
}
var lu = "\\ud800-\\udfff", Bw = "\\u0300-\\u036f", Uw = "\\ufe20-\\ufe2f", Yw = "\\u20d0-\\u20ff", Gw = Bw + Uw + Yw, Vw = "\\ufe0e\\ufe0f", Kw = "[" + lu + "]", Kr = "[" + Gw + "]", Wr = "\\ud83c[\\udffb-\\udfff]", Ww = "(?:" + Kr + "|" + Wr + ")", fu = "[^" + lu + "]", hu = "(?:\\ud83c[\\udde6-\\uddff]){2}", du = "[\\ud800-\\udbff][\\udc00-\\udfff]", Zw = "\\u200d", pu = Ww + "?", gu = "[" + Vw + "]?", Jw = "(?:" + Zw + "(?:" + [fu, hu, du].join("|") + ")" + gu + pu + ")*", Qw = gu + pu + Jw, t3 = "(?:" + [fu + Kr + "?", Kr, hu, du, Kw].join("|") + ")", e3 = RegExp(Wr + "(?=" + Wr + ")|" + t3 + Qw, "g");
function n3(t) {
  return t.match(e3) || [];
}
function r3(t) {
  return cu(t) ? n3(t) : Hw(t);
}
function i3(t) {
  return function(e) {
    e = rr(e);
    var n = cu(e) ? r3(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Cw(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var a3 = i3("toUpperCase");
function o3(t) {
  return a3(rr(t).toLowerCase());
}
function s3() {
  this.__data__ = new mt(), this.size = 0;
}
function u3(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function c3(t) {
  return this.__data__.get(t);
}
function l3(t) {
  return this.__data__.has(t);
}
var f3 = 200;
function h3(t, e) {
  var n = this.__data__;
  if (n instanceof mt) {
    var r = n.__data__;
    if (!Ee || r.length < f3 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new wt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ft(t) {
  var e = this.__data__ = new mt(t);
  this.size = e.size;
}
ft.prototype.clear = s3;
ft.prototype.delete = u3;
ft.prototype.get = c3;
ft.prototype.has = l3;
ft.prototype.set = h3;
function d3(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function bu() {
  return [];
}
var p3 = Object.prototype, g3 = p3.propertyIsEnumerable, ho = Object.getOwnPropertySymbols, yu = ho ? function(t) {
  return t == null ? [] : (t = Object(t), d3(ho(t), function(e) {
    return g3.call(t, e);
  }));
} : bu, b3 = Object.getOwnPropertySymbols, y3 = b3 ? function(t) {
  for (var e = []; t; )
    uu(e, yu(t)), t = Ow(t);
  return e;
} : bu;
function _u(t, e, n) {
  var r = e(t);
  return Z(t) ? r : uu(r, n(t));
}
function po(t) {
  return _u(t, tr, yu);
}
function _3(t) {
  return _u(t, Jm, y3);
}
var Zr = Ht(vt, "DataView"), Jr = Ht(vt, "Promise"), Qr = Ht(vt, "Set"), go = "[object Map]", v3 = "[object Object]", bo = "[object Promise]", yo = "[object Set]", _o = "[object WeakMap]", vo = "[object DataView]", m3 = Xt(Zr), w3 = Xt(Ee), x3 = Xt(Jr), M3 = Xt(Qr), A3 = Xt(Gr), ct = qt;
(Zr && ct(new Zr(new ArrayBuffer(1))) != vo || Ee && ct(new Ee()) != go || Jr && ct(Jr.resolve()) != bo || Qr && ct(new Qr()) != yo || Gr && ct(new Gr()) != _o) && (ct = function(t) {
  var e = qt(t), n = e == v3 ? t.constructor : void 0, r = n ? Xt(n) : "";
  if (r)
    switch (r) {
      case m3:
        return vo;
      case w3:
        return go;
      case x3:
        return bo;
      case M3:
        return yo;
      case A3:
        return _o;
    }
  return e;
});
var mo = vt.Uint8Array, $3 = "__lodash_hash_undefined__";
function T3(t) {
  return this.__data__.set(t, $3), this;
}
function N3(t) {
  return this.__data__.has(t);
}
function zn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++e < n; )
    this.add(t[e]);
}
zn.prototype.add = zn.prototype.push = T3;
zn.prototype.has = N3;
function S3(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function k3(t, e) {
  return t.has(e);
}
var P3 = 1, E3 = 2;
function vu(t, e, n, r, i, a) {
  var o = n & P3, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & E3 ? new zn() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var g = t[h], y = e[h];
    if (r)
      var m = o ? r(y, g, h, e, t, a) : r(g, y, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!S3(e, function(x, p) {
        if (!k3(d, p) && (g === x || i(g, x, n, r, a)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === y || i(g, y, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function mu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function O3(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var z3 = 1, C3 = 2, I3 = "[object Boolean]", R3 = "[object Date]", j3 = "[object Error]", F3 = "[object Map]", D3 = "[object Number]", L3 = "[object RegExp]", q3 = "[object Set]", X3 = "[object String]", H3 = "[object Symbol]", B3 = "[object ArrayBuffer]", U3 = "[object DataView]", wo = $t ? $t.prototype : void 0, mr = wo ? wo.valueOf : void 0;
function Y3(t, e, n, r, i, a, o) {
  switch (n) {
    case U3:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case B3:
      return !(t.byteLength != e.byteLength || !a(new mo(t), new mo(e)));
    case I3:
    case R3:
    case D3:
      return Qn(+t, +e);
    case j3:
      return t.name == e.name && t.message == e.message;
    case L3:
    case X3:
      return t == e + "";
    case F3:
      var s = mu;
    case q3:
      var c = r & z3;
      if (s || (s = O3), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= C3, o.set(t, e);
      var l = vu(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case H3:
      if (mr)
        return mr.call(t) == mr.call(e);
  }
  return !1;
}
var G3 = 1, V3 = Object.prototype, K3 = V3.hasOwnProperty;
function W3(t, e, n, r, i, a) {
  var o = n & G3, s = po(t), c = s.length, u = po(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : K3.call(e, f)))
      return !1;
  }
  var d = a.get(t), g = a.get(e);
  if (d && g)
    return d == e && g == t;
  var y = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var x = t[f], p = e[f];
    if (r)
      var M = o ? r(p, x, f, e, t, a) : r(x, p, f, t, e, a);
    if (!(M === void 0 ? x === p || i(x, p, n, r, a) : M)) {
      y = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (y && !m) {
    var b = t.constructor, v = e.constructor;
    b != v && "constructor" in t && "constructor" in e && !(typeof b == "function" && b instanceof b && typeof v == "function" && v instanceof v) && (y = !1);
  }
  return a.delete(t), a.delete(e), y;
}
var Z3 = 1, xo = "[object Arguments]", Mo = "[object Array]", Qe = "[object Object]", J3 = Object.prototype, Ao = J3.hasOwnProperty;
function Q3(t, e, n, r, i, a) {
  var o = Z(t), s = Z(e), c = o ? Mo : ct(t), u = s ? Mo : ct(e);
  c = c == xo ? Qe : c, u = u == xo ? Qe : u;
  var l = c == Qe, h = u == Qe, f = c == u;
  if (f && Vr(t)) {
    if (!Vr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new ft()), o || au(t) ? vu(t, e, n, r, i, a) : Y3(t, e, c, n, r, i, a);
  if (!(n & Z3)) {
    var d = l && Ao.call(t, "__wrapped__"), g = h && Ao.call(e, "__wrapped__");
    if (d || g) {
      var y = d ? t.value() : t, m = g ? e.value() : e;
      return a || (a = new ft()), i(y, m, n, r, a);
    }
  }
  return f ? (a || (a = new ft()), W3(t, e, n, r, i, a)) : !1;
}
function ji(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Ft(t) && !Ft(e) ? t !== t && e !== e : Q3(t, e, n, r, ji, i);
}
var t2 = 1, e2 = 2;
function n2(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new ft(), h;
      if (!(h === void 0 ? ji(u, c, t2 | e2, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function wu(t) {
  return t === t && !gt(t);
}
function r2(t) {
  for (var e = tr(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, wu(i)];
  }
  return e;
}
function xu(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function i2(t) {
  var e = r2(t);
  return e.length == 1 && e[0][2] ? xu(e[0][0], e[0][1]) : function(n) {
    return n === t || n2(n, t, e);
  };
}
function a2(t, e) {
  return t != null && e in Object(t);
}
function Mu(t, e, n) {
  e = ir(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Fe(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && zi(i) && Jn(o, i) && (Z(t) || nu(t)));
}
function o2(t, e) {
  return t != null && Mu(t, e, a2);
}
var s2 = 1, u2 = 2;
function c2(t, e) {
  return Ci(t) && wu(e) ? xu(Fe(t), e) : function(n) {
    var r = Ew(n, t);
    return r === void 0 && r === e ? o2(n, t) : ji(e, r, s2 | u2);
  };
}
function l2(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function f2(t) {
  return function(e) {
    return Ri(e, t);
  };
}
function h2(t) {
  return Ci(t) ? l2(Fe(t)) : f2(t);
}
function Au(t) {
  return typeof t == "function" ? t : t == null ? Oi : typeof t == "object" ? Z(t) ? c2(t[0], t[1]) : i2(t) : h2(t);
}
function d2(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var p2 = d2();
function g2(t, e) {
  return t && p2(t, e, tr);
}
function b2(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!je(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var $u = b2(g2);
function y2(t) {
  return typeof t == "function" ? t : Oi;
}
function Wt(t, e) {
  var n = Z(t) ? Jv : $u;
  return n(t, y2(e));
}
function _2(t, e) {
  return Zn(e, function(n) {
    return [n, t[n]];
  });
}
function v2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var m2 = "[object Map]", w2 = "[object Set]";
function x2(t) {
  return function(e) {
    var n = ct(e);
    return n == m2 ? mu(e) : n == w2 ? v2(e) : _2(e, t(e));
  };
}
var M2 = x2(tr);
function A2(t, e) {
  var n = -1, r = je(t) ? Array(t.length) : [];
  return $u(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function ht(t, e) {
  var n = Z(t) ? Zn : A2;
  return n(t, Au(e));
}
var $2 = Object.prototype, T2 = $2.hasOwnProperty;
function N2(t, e) {
  return t != null && T2.call(t, e);
}
function Tu(t, e) {
  return t != null && Mu(t, e, N2);
}
var S2 = "[object Boolean]";
function k2(t) {
  return t === !0 || t === !1 || Ft(t) && qt(t) == S2;
}
function P2(t, e) {
  for (var n, r = -1, i = t.length; ++r < i; ) {
    var a = e(t[r]);
    a !== void 0 && (n = n === void 0 ? a : n + a);
  }
  return n;
}
var E2 = NaN;
function O2(t, e) {
  var n = t == null ? 0 : t.length;
  return n ? P2(t, e) / n : E2;
}
function Cn(t) {
  return O2(t, Oi);
}
function z2(t, e, n, r) {
  if (!gt(t))
    return t;
  e = ir(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Fe(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = gt(l) ? l : Jn(e[i + 1]) ? [] : {});
    }
    im(s, c, u), s = s[c];
  }
  return t;
}
function C2(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = Ri(t, o);
    n(s, o) && z2(a, ir(o, t), s);
  }
  return a;
}
function Fi(t, e) {
  if (t == null)
    return {};
  var n = Zn(_3(t), function(r) {
    return [r];
  });
  return e = Au(e), C2(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var I2 = Math.ceil, R2 = Math.max;
function j2(t, e, n, r) {
  for (var i = -1, a = R2(I2((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function F2(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && om(e, n, r) && (n = r = void 0), e = yr(e), n === void 0 ? (n = e, e = 0) : n = yr(n), r = r === void 0 ? e < n ? 1 : -1 : yr(r), j2(e, n, r);
  };
}
var Nu = F2();
function D2() {
  var t = arguments, e = rr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
const S = {
  widgets: {
    //fontsize:20,
    slider_size: 400,
    slider_girth: 16,
    slider_knob: 14,
    slider_gap: 2,
    slider_anchor: { x: 1, y: 7.5 },
    toggle_anchor: { x: 7, y: 4 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 7, y: 2 },
    radio_size: 150,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10,
    colormap: "vik"
  }
}, $ = {
  dt: 1,
  L: 100,
  agentsize: 2.5,
  speed: {
    range: [0, 1],
    default: 0.2
  },
  wiggle: {
    range: [0, 180],
    default: 50
  },
  interaction_radius: {
    range: [0, 5],
    default: 3
  },
  number_of_particles: {
    choices: [100, 200, 500, 1e3],
    default: 2
  },
  color_by_heading: {
    default: !1
  }
}, Di = (t) => ht(M2(t), (e) => (e[1].id = e[0], e[1].label = D2(o3(e[0]), /_/g, " "), e[1])), Li = (t, e) => Wt(t, (n, r) => n.widget = e[r]), Su = (t) => Fi(t, (e) => Tu(e, "range")), ku = (t) => Fi(t, (e) => k2(e.default)), Pu = (t) => Fi(t, (e) => Tu(e, "choices")), Yt = Ce().domain([0, 360]).range([0, 2 * Math.PI]), Eu = Ce().range([0, 360]).domain([0, 2 * Math.PI]), Ou = (t, e, n) => {
  var r = Math.abs(t.x - e.x), i = Math.abs(t.y - e.y);
  return r > n / 2 && (r = n - r), i > n / 2 && (i = n - i), Math.sqrt(r ** 2 + i ** 2);
}, zu = Di(Su($)), Cu = Di(ku($)), Iu = Di(Pu($)), ln = ht(
  zu,
  (t) => av().id(t.id).label(t.label).range(t.range).value(t.default).size(S.widgets.slider_size).girth(S.widgets.slider_girth).knob(S.widgets.slider_knob)
), ti = ht(
  Cu,
  (t) => ov().id(t.id).label(t.label).value(t.default)
), ei = ht(
  Iu,
  (t) => sv().choices(t.choices).id(t.id).value(t.default).orientation(S.widgets.radio_orientation).labelposition(S.widgets.radio_label_position)
);
Li(Cu, ti);
Li(zu, ln);
Li(Iu, ei);
const At = Ei().actions(["play", "pause"]), ar = Ei().actions(["back"]), or = Ei().actions(["rewind"]), L2 = [At, ar, or], q2 = (t, e) => {
  const n = e.position(S.widgets.slider_anchor.x, Nu(ln.length).map((a) => S.widgets.slider_anchor.y + S.widgets.slider_gap * a)), r = e.position(S.widgets.toggle_anchor.x, S.widgets.toggle_anchor.y), i = e.position(S.widgets.radio_anchor.x, S.widgets.radio_anchor.y);
  ln.forEach((a, o) => a.position(n[o])), ti[0].position(r).labelposition(S.widgets.toggle_label_pos), ei[0].position(i).size(S.widgets.radio_size).shape(S.widgets.radio_shape), At.position(e.position(S.widgets.playbutton_anchor.x, S.widgets.playbutton_anchor.y)).size(S.widgets.playbutton_size), or.position(e.position(S.widgets.backbutton_anchor.x, S.widgets.backbutton_anchor.y)), ar.position(e.position(S.widgets.resetbutton_anchor.x, S.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ln).enter().append(Je), t.selectAll(null).data(ti).enter().append(Je), t.selectAll(null).data(L2).enter().append(Je), t.selectAll(null).data(ei).enter().append(Je);
}, X2 = (t) => {
  Wt(Su($), (e) => e.widget.reset(t, e.default)), Wt(ku($), (e) => e.widget.reset(t, e.default)), Wt(Pu($), (e) => e.widget.reset(t, e.default)), $.number_of_particles.widget.update();
}, et = $.L, $o = $.dt;
var Ot = [];
const H2 = () => {
  $.timer = {}, $.tick = 0;
  const t = $.number_of_particles.choices[$.number_of_particles.widget.value()];
  Ot = ht(Nu(t), (e) => ({
    index: e,
    x: et * Math.random(),
    y: et * Math.random(),
    theta: 360 * Math.random()
  })), Wt(Ot, (e) => {
    var n = Ot.filter((a) => Ou(e, a, et) <= $.interaction_radius.widget.value()), r = Cn(ht(n, (a) => Math.cos(Yt(a.theta)))), i = Cn(ht(n, (a) => Math.sin(Yt(a.theta))));
    e.theta_neighbors = Eu(Math.atan2(i, r));
  });
}, B2 = () => {
  $.tick++, Wt(Ot, (t) => {
    var e = $o * $.speed.widget.value() * Math.cos(Yt(t.theta)), n = $o * $.speed.widget.value() * Math.sin(Yt(t.theta));
    const r = t.x + e, i = t.y + n;
    r < 0 && (e += et), i < 0 && (n += et), r > et && (e -= et), i > et && (n -= et), t.x += e, t.y += n;
    var a = Ot.filter((c) => Ou(t, c, et) <= $.interaction_radius.widget.value()), o = Cn(ht(a, (c) => Math.cos(Yt(c.theta)))), s = Cn(ht(a, (c) => Math.sin(Yt(c.theta))));
    t.theta_neighbors = Eu(Math.atan2(s, o)), t.theta = t.theta_neighbors, t.theta += $.wiggle.widget.value() * (Math.random() - 0.5), t.theta += 360, t.theta = t.theta % 360;
  });
}, tn = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, U2 = {
  roma: Xe(Mt, tn.romaO),
  vik: Xe(Mt, tn.vikO),
  broc: Xe(Mt, tn.brocO),
  bam: Xe(Mt, tn.bamO),
  sinebow: Bh
}, Ru = $.L, ni = Ce().domain([0, Ru]), ri = Ce().domain([0, Ru]), ju = U2[S.simulation.colormap];
var fn, hn, D, wr, D;
const Fu = "#888", Y2 = (t, e) => {
  wr = e, fn = wr.display_size.width, hn = wr.display_size.height, ni.range([0, fn]), ri.range([0, hn]), D = t.node().getContext("2d"), D.clearRect(0, 0, fn, hn), Ot.forEach((n) => {
    D.beginPath(), D.arc(ni(n.x), ri(n.y), $.agentsize, 0, 2 * Math.PI, !1), D.fillStyle = $.color_by_heading.widget.value() ? ju(n.theta_neighbors / 360) : Fu, D.fill();
  });
}, Du = (t) => {
  D.clearRect(0, 0, fn, hn), Ot.forEach((e) => {
    D.beginPath(), D.arc(ni(e.x), ri(e.y), $.agentsize, 0, 2 * Math.PI, !1), D.fillStyle = $.color_by_heading.widget.value() ? ju(e.theta_neighbors / 360) : Fu, D.fill(), D.closePath();
  });
};
function G2(t) {
  B2(), Du();
}
function ii(t, e) {
  H2(), Y2(t, e);
}
function V2(t) {
  Du();
}
var To = {};
const K2 = (t) => {
  At.value() == 1 ? To = ff(() => G2(), S.simulation.delay) : To.stop();
}, W2 = (t, e, n) => {
  or.update(() => X2(e)), At.update(() => K2()), ar.update(() => ii(t, n)), $.number_of_particles.widget.update(() => ii(t, n)), $.color_by_heading.widget.update(() => V2());
}, Z2 = {
  name: "@explorables/horde_of_the_flies",
  title: "Horde of the Flies",
  subtitle: "The Vicsek-Model",
  description: "This explorable illustrates a simple and beautiful model for swarms, flocks and collective motion in animal populations.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function J2(t, e = Lu) {
  const n = pv(t, e), r = n.display, i = n.controls, a = n.grid;
  return q2(i, a), W2(r, i, e), ii(r, e), {
    halt() {
      At.value() === 1 && At.press(i);
    },
    reset() {
      At.value() === 1 && At.press(i), or.press(i), ar.press(i);
    },
    config: e,
    meta: Z2
  };
}
export {
  Lu as config,
  J2 as default,
  J2 as load,
  Z2 as meta
};
