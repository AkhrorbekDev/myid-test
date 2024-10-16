var vf = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var O1 = vf((L1, hf) => {
  const mf = function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
      for (const a of o) if (a.type === 'childList') for (const i of a.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i);
    }).observe(document, { childList: !0, subtree: !0 });

    function e(o) {
      const a = {};
      return o.integrity && (a.integrity = o.integrity), o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy), o.crossorigin === 'use-credentials' ? a.credentials = 'include' : o.crossorigin === 'anonymous' ? a.credentials = 'omit' : a.credentials = 'same-origin', a;
    }

    function n(o) {
      if (o.ep) return;
      o.ep = !0;
      const a = e(o);
      fetch(o.href, a);
    }
  };
  mf();

  function Rt() {
  }

  function qu(r) {
    return r();
  }

  function qs() {
    return Object.create(null);
  }

  function Rr(r) {
    r.forEach(qu);
  }

  function gf(r) {
    return typeof r == 'function';
  }

  function hn(r, t) {
    return r != r ? t == t : r !== t || r && typeof r == 'object' || typeof r == 'function';
  }

  let ho;

  function Hu(r, t) {
    return ho || (ho = document.createElement('a')), ho.href = t, r === ho.href;
  }

  function yf(r) {
    return Object.keys(r).length === 0;
  }

  function bf(r, ...t) {
    if (r == null) return Rt;
    const e = r.subscribe(...t);
    return e.unsubscribe ? () => e.unsubscribe() : e;
  }

  function Ae(r, t, e) {
    r.$$.on_destroy.push(bf(t, e));
  }

  function st(r, t, e) {
    return r.set(e), t;
  }

  function pe(r, t) {
    r.appendChild(t);
  }

  function Fn(r, t, e) {
    const n = xf(r);
    if (!n.getElementById(t)) {
      const o = we('style');
      o.id = t, o.textContent = e, wf(n, o);
    }
  }

  function xf(r) {
    if (!r) return document;
    const t = r.getRootNode ? r.getRootNode() : r.ownerDocument;
    return t && t.host ? t : r.ownerDocument;
  }

  function wf(r, t) {
    pe(r.head || r, t);
  }

  function ze(r, t, e) {
    r.insertBefore(t, e || null);
  }

  function Pe(r) {
    r.parentNode.removeChild(r);
  }

  function we(r) {
    return document.createElement(r);
  }

  function cn(r) {
    return document.createTextNode(r);
  }

  function tt() {
    return cn(' ');
  }

  function un(r, t, e, n) {
    return r.addEventListener(t, e, n), () => r.removeEventListener(t, e, n);
  }

  function re(r, t, e) {
    e == null ? r.removeAttribute(t) : r.getAttribute(t) !== e && r.setAttribute(t, e);
  }

  function _f(r) {
    return Array.from(r.childNodes);
  }

  function Kn(r, t) {
    t = '' + t, r.wholeText !== t && (r.data = t);
  }

  function fo(r, t) {
    r.value = t == null ? '' : t;
  }

  function Hs(r, t, e, n) {
    e === null ? r.style.removeProperty(t) : r.style.setProperty(t, e, n ? 'important' : '');
  }

  let po;

  function Cf() {
    if (po === void 0) {
      po = !1;
      try {
        typeof window < 'u' && window.parent && window.parent.document;
      } catch {
        po = !0;
      }
    }
    return po;
  }

  function Ef(r, t) {
    getComputedStyle(r).position === 'static' && (r.style.position = 'relative');
    const n = we('iframe');
    n.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'), n.setAttribute('aria-hidden', 'true'), n.tabIndex = -1;
    const o = Cf();
    let a;
    return o ? (n.src = 'data:text/html,<script>onresize=function(){parent.postMessage(0,\'*\')}<\/script>', a = un(window, 'message', i => {
      i.source === n.contentWindow && t();
    })) : (n.src = 'about:blank', n.onload = () => {
      a = un(n.contentWindow, 'resize', t);
    }), pe(r, n), () => {
      (o || a && n.contentWindow) && a(), Pe(n);
    };
  }

  function Cn(r, t, e) {
    r.classList[e ? 'add' : 'remove'](t);
  }

  function kf(r, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
    const o = document.createEvent('CustomEvent');
    return o.initCustomEvent(r, e, n, t), o;
  }

  let qr;

  function Ur(r) {
    qr = r;
  }

  function ju() {
    if (!qr) throw new Error('Function called outside component initialization');
    return qr;
  }

  function Xu(r) {
    ju().$$.on_mount.push(r);
  }

  function If() {
    const r = ju();
    return (t, e, { cancelable: n = !1 } = {}) => {
      const o = r.$$.callbacks[t];
      if (o) {
        const a = kf(t, e, { cancelable: n });
        return o.slice().forEach(i => {
          i.call(r, a);
        }), !a.defaultPrevented;
      }
      return !0;
    };
  }

  const Or = [], Vn = [], Ro = [], js = [], Rf = Promise.resolve();
  let ni = !1;

  function Sf() {
    ni || (ni = !0, Rf.then(Ku));
  }

  function Oo(r) {
    Ro.push(r);
  }

  const Da = new Set;
  let vo = 0;

  function Ku() {
    const r = qr;
    do {
      for (; vo < Or.length;) {
        const t = Or[vo];
        vo++, Ur(t), Af(t.$$);
      }
      for (Ur(null), Or.length = 0, vo = 0; Vn.length;) Vn.pop()();
      for (let t = 0; t < Ro.length; t += 1) {
        const e = Ro[t];
        Da.has(e) || (Da.add(e), e());
      }
      Ro.length = 0;
    } while (Or.length);
    for (; js.length;) js.pop()();
    ni = !1, Da.clear(), Ur(r);
  }

  function Af(r) {
    if (r.fragment !== null) {
      r.update(), Rr(r.before_update);
      const t = r.dirty;
      r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(Oo);
    }
  }

  const So = new Set;
  let Gn;

  function ri() {
    Gn = { r: 0, c: [], p: Gn };
  }

  function oi() {
    Gn.r || Rr(Gn.c), Gn = Gn.p;
  }

  function Xe(r, t) {
    r && r.i && (So.delete(r), r.i(t));
  }

  function ct(r, t, e, n) {
    if (r && r.o) {
      if (So.has(r)) return;
      So.add(r), Gn.c.push(() => {
        So.delete(r), n && (e && r.d(1), n());
      }), r.o(t);
    } else n && n();
  }

  function fn(r) {
    r && r.c();
  }

  function $t(r, t, e, n) {
    const { fragment: o, on_mount: a, on_destroy: i, after_update: s } = r.$$;
    o && o.m(t, e), n || Oo(() => {
      const u = a.map(qu).filter(gf);
      i ? i.push(...u) : Rr(u), r.$$.on_mount = [];
    }), s.forEach(Oo);
  }

  function Zt(r, t) {
    const e = r.$$;
    e.fragment !== null && (Rr(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
  }

  function Df(r, t) {
    r.$$.dirty[0] === -1 && (Or.push(r), Sf(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
  }

  function Nn(r, t, e, n, o, a, i, s = [-1]) {
    const u = qr;
    Ur(r);
    const c = r.$$ = {
      fragment: null,
      ctx: null,
      props: a,
      update: Rt,
      not_equal: o,
      bound: qs(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (u ? u.$$.context : [])),
      callbacks: qs(),
      dirty: s,
      skip_bound: !1,
      root: t.target || u.$$.root,
    };
    i && i(c.root);
    let l = !1;
    if (c.ctx = e ? e(r, t.props || {}, (h, f, ...d) => {
      const p = d.length ? d[0] : f;
      return c.ctx && o(c.ctx[h], c.ctx[h] = p) && (!c.skip_bound && c.bound[h] && c.bound[h](p), l && Df(r, h)), f;
    }) : [], c.update(), l = !0, Rr(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
      if (t.hydrate) {
        const h = _f(t.target);
        c.fragment && c.fragment.l(h), h.forEach(Pe);
      } else c.fragment && c.fragment.c();
      t.intro && Xe(r.$$.fragment), $t(r, t.target, t.anchor, t.customElement), Ku();
    }
    Ur(u);
  }

  class Mn {
    $destroy() {
      Zt(this, 1), this.$destroy = Rt;
    }

    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return n.push(e), () => {
        const o = n.indexOf(e);
        o !== -1 && n.splice(o, 1);
      };
    }

    $set(t) {
      this.$$set && !yf(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
    }
  }

  const sr = [];

  function aa(r, t = Rt) {
    let e;
    const n = new Set;

    function o(s) {
      if (hn(r, s) && (r = s, e)) {
        const u = !sr.length;
        for (const c of n) c[1](), sr.push(c, r);
        if (u) {
          for (let c = 0; c < sr.length; c += 2) sr[c][0](sr[c + 1]);
          sr.length = 0;
        }
      }
    }

    function a(s) {
      o(s(r));
    }

    function i(s, u = Rt) {
      const c = [s, u];
      return n.add(c), n.size === 1 && (e = t(o) || Rt), s(r), () => {
        n.delete(c), n.size === 0 && (e(), e = null);
      };
    }

    return { set: o, update: a, subscribe: i };
  }

  const Qe = aa(''), Ht = aa({ id: '', date: '', enabled: !1, nav: !0, min: 480 }), Cr = aa(r => {
    }), Yn = aa('en'), yt = { NODATA: 1, NOFACE: 16, TWOFACE: 256, TOOFAR: 4096, TOONEAR: 65536, NOTSTRAIGHT: 1048576 },
    ut = { IDLE: 0, SUCCESS: 1, COUNTING: 2, NOT_READY: -1, ERROR: -2 }, An = {};
  An[yt.NODATA] = 'Loading...';
  An[yt.NOFACE] = 'No faces detected.';
  An[yt.TWOFACE] = 'Please exclude other faces from the frame.';
  An[yt.TOOFAR] = 'Please come closer to the camera.';
  An[yt.TOONEAR] = 'Please lean away from the camera.';
  An[yt.NOTSTRAIGHT] = 'Look straight into the camera, please.';

  function Bo(r, t, e) {
    return (e - r) / (t - r);
  }

  function Ta(r, t) {
    return { _x: Bo(0, t.width, r._x), _y: Bo(0, t.height, r._y) };
  }

  const Tr = {
    position: (r, t) => {
      let e = r.alignedRect._box._x + r.alignedRect._box._width / 2, n = t.width / 2,
        o = r.alignedRect._box._y + r.alignedRect._box._height / 2, a = t.height / 2, i = Math.min(t.width, t.height);
      return Math.abs(e - n) > i / 7 || Math.abs(o - a) > i / 7 ? -1 : 0;
    },
    size: (r, t) => r.alignedRect._box._height / t.height < .4 ? -1 : r.alignedRect._box._height / t.height > .7 ? 1 : 0,
    pan: (r, t) => {
      const e = Ta(r.landmarks._positions[0], t), n = Ta(r.landmarks._positions[16], t),
        o = Ta(r.landmarks._positions[30], t), a = .2;
      return Bo(e._x, n._x, o._x) > .5 + a ? 1 : Bo(e._x, n._x, o._x) < .5 - a ? -1 : 0;
    },
  };

  function et(r, t) {
    const e = {
      uz: {
        'Sorry, camera is not supported on this device.': 'Kechirasiz, ushbu qurilma kamerani qo\'llab quvatlamaydi.',
        Authorize: '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F\u0434\u0430\u043D \u045E\u0442\u043A\u0430\u0437\u0438\u0448',
        Back: '\u041E\u0440\u049B\u0430\u0433\u0430',
        'Camera not supported.': '\u041A\u0430\u043C\u0435\u0440\u0430 \u049B\u045E\u043B\u043B\u0430\u0431-\u049B\u0443\u0432\u0432\u0430\u0442\u043B\u0430\u043D\u043C\u0430\u0439\u0434\u0438',
        'Enter your ID:': 'ID\u0438\u043D\u0433\u0438\u0437\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433',
        Date: '\u0421\u0430\u043D\u0430',
        Next: '\u041A\u0435\u0439\u0438\u043D\u0433\u0438',
        'AA1234567 | PINFL': 'AA1234567 | \u0416\u0428\u0428\u0418\u0420',
        'Try again': '\u042F\u043D\u0430 \u0443\u0440\u0438\u043D\u0438\u0431 \u043A\u045E\u0440\u0438\u043D\u0433',
        'Loading...': 'Yuklanmoqda...',
        'No faces detected.': '\u042E\u0437 \u0430\u043D\u0438\u049B\u043B\u0430\u043D\u043C\u0430\u0434\u0438',
        'Please exclude other faces from the frame.': '\u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0430\u0434\u0440\u0434\u0430 \u0431\u0438\u0442\u0442\u0430 \u044E\u0437 \u049B\u043E\u043B\u0441\u0438\u043D.',
        'Please come closer to the camera.': '\u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0430\u043C\u0435\u0440\u0430\u043D\u0438 \u044F\u049B\u0438\u043D\u0440\u043E\u049B \u043E\u043B\u0438\u0431 \u043A\u0435\u043B\u0438\u043D\u0433',
        'Please lean away from the camera.': '\u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0430\u043C\u0435\u0440\u0430\u043D\u0438 \u0443\u0437\u043E\u049B\u043B\u0430\u0448\u0442\u0438\u0440\u0438\u043D\u0433',
        'Look straight into the camera, please.': '\u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0430\u043C\u0435\u0440\u0430\u0433\u0430 \u0442\u045E\u0493\u0440\u0438 \u049B\u0430\u0440\u0430\u043D\u0433',
        'All checks passed!': '\u0411\u0430\u0440\u0447\u0430 \u0442\u0435\u043A\u0448\u0438\u0440\u0443\u0432\u043B\u0430\u0440 \u043C\u0443\u0432\u0432\u0430\u0444\u0430\u049B\u0438\u044F\u0442\u043B\u0438 \u045E\u0442\u0434\u0438!',
        'Passport / ID information is incorrect.': '\u041F\u0430\u0441\u043F\u043E\u0440\u0442/ ID \u043A\u0430\u0440\u0442\u0430 \u043C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u0438 \u043D\u043E\u0442\u045E\u0493\u0440\u0438.',
        'Liveness check failed.': '\u0425\u0430\u0439\u043E\u0442\u0438\u0439\u043B\u0438\u043A \u0442\u0430\u0441\u0434\u0438\u049B\u043B\u0430\u043D\u043C\u0430\u0434\u0438',
        'Could not recognize the face.': '\u042E\u0437 \u0430\u043D\u0438\u049B\u043B\u0430\u043D\u043C\u0430\u0434\u0438',
        'The external ID service did not respond.': '\u0414\u041F\u041C\u0434\u0430\u043D \u0436\u0430\u0432\u043E\u0431 \u049B\u0430\u0439\u0442\u043C\u0430\u0434\u0438.',
        'The user in the request is marked as deceased.': '\u041C\u0438\u0436\u043E\u0437 \u0432\u0430\u0444\u043E\u0442 \u044D\u0442\u0433\u0430\u043D. \u041C\u0438\u0436\u043E\u0437 \u0424\u04B2\u0414\u0401\u0433\u0430 \u043C\u0443\u0440\u043E\u0436\u0430\u0430\u0442 \u049B\u0438\u043B\u0438\u0448\u0438 \u043C\u0430\u049B\u0441\u0430\u0434\u0433\u0430 \u043C\u0443\u0432\u043E\u0444\u0438\u049B.',
        'The external ID service failed to provide the original photo.': '\u0414\u041F\u041C\u0434\u0430\u043D \u043C\u0438\u0436\u043E\u0437\u043D\u0438\u043D\u0433 \u0440\u0430\u0441\u043C\u0438 \u049B\u0430\u0439\u0442\u043C\u0430\u0434\u0438.',
        'MyID environment is improperly configured; please contact support.': '\u0421\u045E\u0440\u043E\u0432\u0434\u0430 \u0445\u0430\u0442\u043E \u044E\u0437\u0430\u0433\u0430 \u043A\u0435\u043B\u0434\u0438, MyID \u0442\u0435\u0445\u043D\u0438\u043A \u0436\u0430\u043C\u043E\u0430\u0441\u0438 \u0431\u0438\u043B\u0430\u043D \u0431\u043E\u0493\u043B\u0430\u043D\u0438\u043D\u0433.',
        'The request took too long to execute.': '\u0421\u045E\u0440\u043E\u0432 \u0431\u0430\u0436\u0430\u0440\u0438\u043B\u0438\u0448\u0438 \u0443\u0437\u043E\u049B \u0432\u0430\u049B\u0442 \u0434\u0430\u0432\u043E\u043C \u044D\u0442\u0434\u0438.',
        'The task took too long in the processing queue.': '\u0421\u045E\u0440\u043E\u0432 \u0431\u0430\u0436\u0430\u0440\u0438\u043B\u0438\u0448\u0438 \u0443\u0437\u043E\u049B \u0432\u0430\u049B\u0442 \u043D\u0430\u0432\u0431\u0430\u0442\u0434\u0430 \u0442\u0443\u0440\u0434\u0438.',
        'The MyID service could not process the request. Please try again later.': 'MyID \u0441\u045E\u0440\u043E\u0432\u043D\u0438 \u0431\u0430\u0436\u0430\u0440\u0430 \u043E\u043B\u043C\u0430\u0434\u0438. \u041A\u0435\u0439\u0438\u043D\u0440\u043E\u049B \u0443\u0440\u0438\u043D\u0438\u0431 \u043A\u045E\u0440\u0438\u043D\u0433.',
        'The MyID Liveness service could not process the request. Please try again later.': '\u0425\u0430\u0439\u043E\u0442\u0438\u0439\u043B\u0438\u043A \u0442\u0435\u043A\u0448\u0438\u0440\u0443\u0432\u0438 \u0431\u0430\u0436\u0430\u0440\u0438\u043B\u043C\u0430\u0434\u0438. \u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0435\u0439\u0438\u043D\u0440\u043E\u049B \u0443\u0440\u0438\u043D\u0438\u0431 \u043A\u045E\u0440\u0438\u043D\u0433.',
        'The MyID Comparison service could not process the request. Please try again later.': '\u042E\u0437\u043D\u0438 \u0442\u0430\u049B\u049B\u043E\u0441\u043B\u0430\u0448 \u0442\u0435\u043A\u0448\u0438\u0440\u0443\u0432\u0438 \u0431\u0430\u0436\u0430\u0440\u0438\u043B\u043C\u0430\u0434\u0438. \u041A\u0435\u0439\u0438\u043D\u0440\u043E\u049B \u0443\u0440\u0438\u043D\u0438\u0431 \u043A\u045E\u0440\u0438\u043D\u0433.',
        'The image is too blurry or low-quality.': '\u0420\u0430\u0441\u043C \u0445\u0438\u0440\u0430 \u0451\u043A\u0438 \u0441\u0438\u0444\u0430\u0442\u0438 \u043F\u0430\u0441\u0442.',
        'The face is not fully visible.': '\u042E\u0437 \u043A\u0430\u0434\u0440\u0433\u0430 \u0442\u045E\u043B\u0438\u049B \u0442\u0443\u0448\u043C\u0430\u0433\u0430\u043D.',
        'Multiple faces detected in the image.': '\u0420\u0430\u0441\u043C\u0434\u0430 \u0431\u0438\u0440 \u043D\u0435\u0447\u0442\u0430 \u044E\u0437 \u0430\u043D\u0438\u049B\u043B\u0430\u043D\u0434\u0438.',
        'The provided image is grayscale, please capture a color image.': '\u0411\u043E\u0448\u049B\u0430\u0442\u0434\u0430\u043D \u043C\u0438\u0436\u043E\u0437\u043D\u0438 \u0440\u0430\u0441\u043C\u0433\u0430 \u043E\u043B\u0438\u043D\u0433, \u0443\u0448\u0431\u0443 \u0440\u0430\u0441\u043C \u043A\u0443\u043B\u0440\u0430\u043D\u0433.',
        'Eyes are obstructed; please take off sunglasses.': '\u041A\u045E\u0437\u043B\u0430\u0440 \u0430\u043D\u0438\u049B\u043B\u0430\u043D\u043C\u0430\u0434\u0438. \u0418\u043B\u0442\u0438\u043C\u043E\u0441 \u043A\u045E\u0437\u043E\u0439\u043D\u0430\u043A\u0441\u0438\u0437 \u0440\u0430\u0441\u043C\u0433\u0430 \u0442\u0443\u0448\u0438\u043D\u0433',
        'The image type is not supported.': '\u0420\u0430\u0441\u043C \u0442\u0443\u0440\u0438 \u049B\u045E\u043B\u043B\u0430\u0431-\u049B\u0443\u0432\u0432\u0430\u0442\u043B\u0430\u043D\u043C\u0430\u0439\u0434\u0438.',
        'Could not detect eyes or eyes are closed.': '\u041C\u0438\u0436\u043E\u0437\u043D\u0438\u043D\u0433 \u043A\u045E\u0437\u0438 \u0430\u043D\u0438\u049B\u043B\u0430\u043D\u043C\u0430\u0434\u0438 \u0451\u043A\u0438 \u0439\u043E\u043F\u0438\u049B',
        'Please face straight; face rotation detected.': '\u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0430\u043C\u0435\u0440\u0430\u0433\u0430 \u0442\u045E\u049B\u0440\u0438 \u049B\u0430\u0440\u0430\u043D\u0433. \u0411\u043E\u0448 \u0431\u0443\u0440\u0438\u043B\u0433\u0430\u043D',
      }, ru: {
        'Sorry, camera is not supported on this device.': '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043A\u0430\u043C\u0435\u0440\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.',
        Authorize: '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F',
        Back: '\u041D\u0430\u0437\u0430\u0434',
        'Camera not supported.': '\u041A\u0430\u043C\u0435\u0440\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
        'Enter your ID:': '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435:',
        Date: '\u0414\u0430\u0442\u0430',
        Next: '\u0414\u0430\u043B\u0435\u0435',
        'AA1234567 | PINFL': 'AA1234567 | \u041F\u0418\u041D\u0424\u041B',
        'Try again': '\u0415\u0449\u0435 \u0440\u0430\u0437',
        'Loading...': '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...',
        'No faces detected.': '\u041B\u0438\u0446\u0430 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u044B.',
        'Please exclude other faces from the frame.': '\u0412 \u043A\u0430\u0434\u0440\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u043D\u043E \u043B\u0438\u0446\u043E.',
        'Please come closer to the camera.': '\u041F\u043E\u0434\u0432\u0438\u043D\u044C\u0442\u0435\u0441\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u043A\u0430\u043C\u0435\u0440\u0435.',
        'Please lean away from the camera.': '\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0442\u043E\u0434\u0432\u0438\u043D\u044C\u0442\u0435\u0441\u044C \u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B.',
        'Look straight into the camera, please.': '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u0432 \u043A\u0430\u043C\u0435\u0440\u0443.',
        'All checks passed!': '\u0412\u0441\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B!',
        'Passport / ID information is incorrect.': '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0435 / \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0438 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u0430.',
        'Liveness check failed.': '\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0436\u0438\u0437\u043D\u0435\u043D\u043E\u0441\u0442\u044C \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430',
        'Could not recognize the face.': '\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u043B\u0438\u0446\u043E',
        'The external ID service did not respond.': '\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0430',
        'The user in the request is marked as deceased.': '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043E\u0442\u043C\u0435\u0447\u0435\u043D \u043A\u0430\u043A \u0443\u043C\u0435\u0440\u0448\u0438\u0439',
        'The external ID service failed to provide the original photo.': '\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438',
        'MyID environment is improperly configured; please contact support.': '\u0421\u0440\u0435\u0434\u0430 MyID \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0430; \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438',
        'The request took too long to execute.': '\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0437\u0430\u043D\u044F\u043B\u043E \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438',
        'The task took too long in the processing queue.': '\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043E\u043B\u0433\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443',
        'The MyID service could not process the request. Please try again later.': '\u0421\u043B\u0443\u0436\u0431\u0430 MyID \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435',
        'The MyID Liveness service could not process the request. Please try again later.': '\u0421\u043B\u0443\u0436\u0431\u0430 MyID Liveness \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435',
        'The MyID Comparison service could not process the request. Please try again later.': '\u0421\u043B\u0443\u0436\u0431\u0430 MyID Comparison \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435',
        'The image is too blurry or low-quality.': '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0440\u0430\u0437\u043C\u044B\u0442\u043E \u0438\u043B\u0438 \u043D\u0438\u0437\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430',
        'The face is not fully visible.': '\u041B\u0438\u0446\u043E \u0432\u0438\u0434\u043D\u043E \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E',
        'Multiple faces detected in the image.': '\u041D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0438\u0446',
        'The provided image is grayscale, please capture a color image.': '\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0435\u0440\u044B\u043C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0446\u0432\u0435\u0442\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435',
        'Eyes are obstructed; please take off sunglasses.': '\u0413\u043B\u0430\u0437\u0430 \u043D\u0435 \u0432\u0438\u0434\u043D\u044B; \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043D\u0438\u043C\u0438\u0442\u0435 \u043E\u0447\u043A\u0438',
        'The image type is not supported.': '\u0422\u0438\u043F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
        'Could not detect eyes or eyes are closed.': '\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C \u0433\u043B\u0430\u0437\u0430 \u0438\u043B\u0438 \u0433\u043B\u0430\u0437\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B',
        'Please face straight; face rotation detected.': '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043B\u0438\u0446\u043E\u043C \u043F\u0440\u044F\u043C\u043E; \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043B\u0438\u0446\u0430',
      },
    };
    return e[t] && e[t][r] || r;
  }

  function Tf(r) {
    Fn(r, 'svelte-agraey', '.close.close.close.close.svelte-agraey{position:absolute;right:0;top:0;font-size:1em;width:3em;height:3em;display:flex;justify-content:center;align-items:center;margin:0;padding:0;background:none !important;border:none;cursor:pointer;z-index:100}.close.svelte-agraey:before{top:0 !important;margin-right:0 !important;line-height:unset !important}');
  }

  function Ff(r) {
    let t, e, n;
    return {
      c() {
        t = we('button'), re(t, 'class', 'close svelte-agraey'), Hs(t, 'color', r[0]), re(t, 'data-icon', 'clear');
      }, m(o, a) {
        ze(o, t, a), e || (n = un(t, 'click', r[1]), e = !0);
      }, p(o, [a]) {
        a & 1 && Hs(t, 'color', o[0]);
      }, i: Rt, o: Rt, d(o) {
        o && Pe(t), e = !1, n();
      },
    };
  }

  function Nf(r, t, e) {
    let n, o;
    Ae(r, Cr, s => e(2, n = s)), Ae(r, Qe, s => e(3, o = s));
    let { color: a = 'white' } = t;

    function i() {
      st(Qe, o = '', o), n({});
    }

    return r.$$set = s => {
      'color' in s && e(0, a = s.color);
    }, [a, i];
  }

  class Di extends Mn {
    constructor(t) {
      super(), Nn(this, t, Nf, Ff, hn, { color: 0 }, Tf);
    }
  }

  const Mf = '/myid_assets/logo-white.webp';

  function Pf(r) {
    Fn(r, 'svelte-ovjmmq', '.Intro.svelte-ovjmmq.svelte-ovjmmq{display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;padding:1em;background:url(\'./myid_assets/img/bg.webp\');background-position:100% center;background-size:cover}.Intro.svelte-ovjmmq div.svelte-ovjmmq{display:flex;flex-direction:column;justify-content:center;max-width:14em}img.svelte-ovjmmq.svelte-ovjmmq{max-width:50%;margin-top:1em;margin-bottom:1em;margin:0 auto;margin-bottom:4em}.button.svelte-ovjmmq.svelte-ovjmmq{background:white;border:none;border-radius:4px;color:black;padding:0.7em 1.5em;min-width:10em;cursor:pointer}.Intro.svelte-ovjmmq button.svelte-ovjmmq{font-size:1.2em;margin:0.7em 0}');
  }

  function Of(r) {
    let t, e, n, o, a, i, s, u, c = et('Authorize', r[2]) + '', l, h, f, d;
    return e = new Di({}), {
      c() {
        t = we('div'), fn(e.$$.fragment), n = tt(), o = we('img'), i = tt(), s = we('div'), u = we('button'), l = cn(c), Hu(o.src, a = Mf) || re(o, 'src', a), re(o, 'alt', 'MyID'), re(o, 'class', 'svelte-ovjmmq'), re(u, 'class', 'button svelte-ovjmmq'), re(s, 'class', 'svelte-ovjmmq'), re(t, 'class', 'Intro svelte-ovjmmq');
      }, m(p, v) {
        ze(p, t, v), $t(e, t, null), pe(t, n), pe(t, o), pe(t, i), pe(t, s), pe(s, u), pe(u, l), h = !0, f || (d = un(u, 'click', r[3]), f = !0);
      }, p(p, [v]) {
        (!h || v & 4) && c !== (c = et('Authorize', p[2]) + '') && Kn(l, c);
      }, i(p) {
        h || (Xe(e.$$.fragment, p), h = !0);
      }, o(p) {
        ct(e.$$.fragment, p), h = !1;
      }, d(p) {
        p && Pe(t), Zt(e), f = !1, d();
      },
    };
  }

  function Bf(r, t, e) {
    let n, o, a;
    return Ae(r, Ht, s => e(0, n = s)), Ae(r, Qe, s => e(1, o = s)), Ae(r, Yn, s => e(2, a = s)), [n, o, a, () => {
      n.enabled ? st(Qe, o = 'creds', o) : st(Qe, o = 'camera', o);
    }];
  }

  class Lf extends Mn {
    constructor(t) {
      super(), Nn(this, t, Bf, Of, hn, {}, Pf);
    }
  }

  function Wf(r) {
    Fn(r, 'svelte-66rssv', '.Ticker.svelte-66rssv{position:absolute;z-index:2;left:50%;transform:translateX(-50%);bottom:-1px;background:rgba(0,0,0,0.5);min-width:3em;min-height:3em;width:100%;display:flex;justify-content:center;align-items:center;padding:0.7em 1em;box-sizing:border-box;opacity:1;transition:0.2s opacity 0.4s ease;font-size:1.4em;text-align:center}.spinner.svelte-66rssv{font-size:27px;line-height:0}.hide.svelte-66rssv{opacity:0}');
  }

  function Uf(r) {
    let t, e;
    return {
      c() {
        t = we('span'), re(t, 'class', 'spinner svelte-66rssv'), re(t, 'data-icon', e = r[3][r[1]]);
      }, m(n, o) {
        ze(n, t, o);
      }, p(n, o) {
        o & 10 && e !== (e = n[3][n[1]]) && re(t, 'data-icon', e);
      }, d(n) {
        n && Pe(t);
      },
    };
  }

  function zf(r) {
    let t, e, n;
    return {
      c() {
        t = we('span'), e = cn(r[2]), n = cn('...'), re(t, 'class', 'count');
      }, m(o, a) {
        ze(o, t, a), pe(t, e), pe(t, n);
      }, p(o, a) {
        a & 4 && Kn(e, o[2]);
      }, d(o) {
        o && Pe(t);
      },
    };
  }

  function Vf(r) {
    let t = et(An[r[0]], r[4]) + '', e;
    return {
      c() {
        e = cn(t);
      }, m(n, o) {
        ze(n, e, o);
      }, p(n, o) {
        o & 17 && t !== (t = et(An[n[0]], n[4]) + '') && Kn(e, t);
      }, d(n) {
        n && Pe(e);
      },
    };
  }

  function Gf(r) {
    let t;

    function e(a, i) {
      return a[0] ? Vf : a[1] == ut.COUNTING ? zf : Uf;
    }

    let n = e(r), o = n(r);
    return {
      c() {
        t = we('div'), o.c(), re(t, 'class', 'Ticker svelte-66rssv'), Cn(t, 'hide', r[1] === ut.SUCCESS);
      }, m(a, i) {
        ze(a, t, i), o.m(t, null);
      }, p(a, [i]) {
        n === (n = e(a)) && o ? o.p(a, i) : (o.d(1), o = n(a), o && (o.c(), o.m(t, null))), i & 2 && Cn(t, 'hide', a[1] === ut.SUCCESS);
      }, i: Rt, o: Rt, d(a) {
        a && Pe(t), o.d();
      },
    };
  }

  function qf(r, t, e) {
    let n;
    Ae(r, Yn, l => e(4, n = l));
    let { stateMask: o } = t, { loginState: a = 0 } = t, i, s;
    const u = {};
    u[ut.IDLE] = 'loading', u[ut.SUCCESS] = 'check', u[ut.ERROR] = 'clear';

    function c(l) {
      l == ut.COUNTING ? (e(2, i = 3), s = setInterval(() => {
        e(2, i = i - 1);
      }, 1100)) : clearInterval(s);
    }

    return r.$$set = l => {
      'stateMask' in l && e(0, o = l.stateMask), 'loginState' in l && e(1, a = l.loginState);
    }, r.$$.update = () => {
      r.$$.dirty & 2 && c(a);
    }, [o, a, i, u, n];
  }

  class Hf extends Mn {
    constructor(t) {
      super(), Nn(this, t, qf, Gf, hn, { stateMask: 0, loginState: 1 }, Wf);
    }
  }

  function jf(r) {
    Fn(r, 'svelte-1mkpkc5', 'h1.svelte-1mkpkc5{font-size:2em}.LivenessModule.svelte-1mkpkc5{position:absolute;left:0;right:0;bottom:0;top:0;color:white;font-size:1em;background:rgba(0, 0, 0, 0.6);display:flex;flex-direction:column;justify-content:space-around;align-items:center;text-align:center;padding:1em;padding-bottom:2em;box-sizing:border-box}.LivenessModule.svelte-1mkpkc5>*{position:relative;z-index:1}.LivenessModule.svelte-1mkpkc5 svg{max-width:20em;max-height:20em;margin-bottom:2em}.button.svelte-1mkpkc5{background:white;border:none;border-radius:4px;color:black;padding:0.7em 1.5em;min-width:10em;cursor:pointer}.LivenessModule.svelte-1mkpkc5 canvas{display:block;height:100%;left:50%;transform:translateX(-50%);position:relative;position:absolute;top:0;pointer-events:none;z-index:0;opacity:0;animation:svelte-1mkpkc5-fade-in 1s normal forwards ease}@keyframes svelte-1mkpkc5-fade-in{0%{opacity:0}100%{opacity:1}}.result-icon.svelte-1mkpkc5{font-size:5em;text-shadow:0px 0px 10px 1px rgba(0,0,0,0.8)}');
  }

  function Xf(r) {
    let t, e, n, o, a = et('Try again', r[1]) + '', i, s, u;

    function c(f, d) {
      return f[3].status != 1 ? Yf : Kf;
    }

    let h = c(r)(r);
    return {
      c() {
        t = we('h1'), t.textContent = `${r[3].result}`, e = tt(), h.c(), n = tt(), o = we('button'), i = cn(a), re(t, 'class', 'svelte-1mkpkc5'), re(o, 'class', 'button svelte-1mkpkc5'), re(o, 'data-icon', 'keyboard_arrow_left');
      }, m(f, d) {
        ze(f, t, d), ze(f, e, d), h.m(f, d), ze(f, n, d), ze(f, o, d), pe(o, i), s || (u = un(o, 'click', r[7]), s = !0);
      }, p(f, d) {
        d & 2 && a !== (a = et('Try again', f[1]) + '') && Kn(i, a);
      }, d(f) {
        f && Pe(t), f && Pe(e), h.d(f), f && Pe(n), f && Pe(o), s = !1, u();
      },
    };
  }

  function Kf(r) {
    let t;
    return {
      c() {
        t = we('div'), re(t, 'class', 'result-icon svelte-1mkpkc5'), re(t, 'data-icon', 'check');
      }, m(e, n) {
        ze(e, t, n);
      }, d(e) {
        e && Pe(t);
      },
    };
  }

  function Yf(r) {
    let t;
    return {
      c() {
        t = we('div'), re(t, 'class', 'result-icon svelte-1mkpkc5'), re(t, 'data-icon', 'clear');
      }, m(e, n) {
        ze(e, t, n);
      }, d(e) {
        e && Pe(t);
      },
    };
  }

  function $f(r) {
    let t, e = r[3] && Xf(r);
    return {
      c() {
        t = we('div'), e && e.c(), re(t, 'class', 'LivenessModule svelte-1mkpkc5'), re(t, 'data-icon', r[3] ? '' : 'loading');
      }, m(n, o) {
        ze(n, t, o), e && e.m(t, null), r[8](t);
      }, p(n, [o]) {
        n[3] && e.p(n, o);
      }, i: Rt, o: Rt, d(n) {
        n && Pe(t), e && e.d(), r[8](null);
      },
    };
  }

  function Zf(r, t, e) {
    let n, o, a, i;
    Ae(r, Qe, g => e(9, n = g)), Ae(r, Cr, g => e(10, o = g)), Ae(r, Ht, g => e(11, a = g)), Ae(r, Yn, g => e(1, i = g));
    let { image: s } = t, { background: u } = t;
    const c = If();
    var l = function () {
      var g = document.createElement('canvas');
      return g.width = s.videoWidth, g.height = s.videoHeight, g.getContext('2d').drawImage(s, 0, 0, g.width, g.height), g;
    };
    let h, f = !1;

    async function d(g) {
      a.enabled ? o({
        pass_data: a.id,
        birth_date: a.date,
        photo_from_camera: { front: g },
        agreed_on_terms: !0,
      }) : o({ photo_from_camera: { front: g }, agreed_on_terms: !0 }), setTimeout(() => {
        st(Qe, n = '', n);
      }, 1e3);
    }

    let p;
    Xu(() => {
      p.insertBefore(u, p.children[0]);
    });
    const v = () => {
      c('reset');
    };

    function m(g) {
      Vn[g ? 'unshift' : 'push'](() => {
        p = g, e(0, p);
      });
    }

    return r.$$set = g => {
      'image' in g && e(4, s = g.image), 'background' in g && e(5, u = g.background);
    }, r.$$.update = () => {
      r.$$.dirty & 16 && s && e(6, h = l().toDataURL('image/jpeg', .7)), r.$$.dirty & 64 && h && d(h);
    }, [p, i, c, f, s, u, h, v, m];
  }

  class Jf extends Mn {
    constructor(t) {
      super(), Nn(this, t, Zf, $f, hn, { image: 4, background: 5 }, jf);
    }
  }

  /**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */var Yu = function (r, t) {
    return (Yu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) {
      e.__proto__ = n;
    } || function (e, n) {
      for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
    })(r, t);
  };

  function Mt(r, t) {
    function e() {
      this.constructor = r;
    }

    Yu(r, t), r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e);
  }

  function $(r, t, e, n) {
    return new (e || (e = Promise))(function (o, a) {
      function i(c) {
        try {
          u(n.next(c));
        } catch (l) {
          a(l);
        }
      }

      function s(c) {
        try {
          u(n.throw(c));
        } catch (l) {
          a(l);
        }
      }

      function u(c) {
        c.done ? o(c.value) : new e(function (l) {
          l(c.value);
        }).then(i, s);
      }

      u((n = n.apply(r, t || [])).next());
    });
  }

  function Z(r, t) {
    var e, n, o, a, i = {
      label: 0, sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      }, trys: [], ops: [],
    };
    return a = {
      next: s(0),
      throw: s(1),
      return: s(2),
    }, typeof Symbol == 'function' && (a[Symbol.iterator] = function () {
      return this;
    }), a;

    function s(u) {
      return function (c) {
        return function (l) {
          if (e) throw new TypeError('Generator is already executing.');
          for (; i;) try {
            if (e = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
            switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
              case 0:
              case 1:
                o = l;
                break;
              case 4:
                return i.label++, { value: l[1], done: !1 };
              case 5:
                i.label++, n = l[1], l = [0];
                continue;
              case 7:
                l = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                  i.label = l[1];
                  break;
                }
                if (l[0] === 6 && i.label < o[1]) {
                  i.label = o[1], o = l;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(l);
                  break;
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            l = t.call(r, i);
          } catch (h) {
            l = [6, h], n = 0;
          } finally {
            e = o = 0;
          }
          if (5 & l[0]) throw l[1];
          return { value: l[0] ? l[1] : void 0, done: !0 };
        }([u, c]);
      };
    }
  }

  var Qf = function () {
    function r(t) {
      this.global = t, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags();
    }

    return r.prototype.setPlatform = function (t, e) {
      this.platform != null && console.warn('Platform ' + this.platformName + ' has already been set. Overwriting the platform with ' + e + '.'), this.platformName = t, this.platform = e;
    }, r.prototype.registerFlag = function (t, e, n) {
      if (this.flagRegistry[t] = { evaluationFn: e, setHook: n }, this.urlFlags[t] != null) {
        var o = this.urlFlags[t];
        console.warn('Setting feature override from URL ' + t + ': ' + o + '.'), this.set(t, o);
      }
    }, r.prototype.get = function (t) {
      return t in this.flags ? this.flags[t] : (this.flags[t] = this.evaluateFlag(t), this.flags[t]);
    }, r.prototype.getNumber = function (t) {
      return this.get(t);
    }, r.prototype.getBool = function (t) {
      return this.get(t);
    }, r.prototype.getFlags = function () {
      return this.flags;
    }, Object.defineProperty(r.prototype, 'features', {
      get: function () {
        return this.flags;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.set = function (t, e) {
      if (this.flagRegistry[t] == null) throw new Error('Cannot set flag ' + t + ' as it has not been registered.');
      this.flags[t] = e, this.flagRegistry[t].setHook != null && this.flagRegistry[t].setHook(e);
    }, r.prototype.evaluateFlag = function (t) {
      if (this.flagRegistry[t] == null) throw new Error('Cannot evaluate flag \'' + t + '\': no evaluation function found.');
      return this.flagRegistry[t].evaluationFn();
    }, r.prototype.setFlags = function (t) {
      this.flags = Object.assign({}, t);
    }, r.prototype.reset = function () {
      this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
    }, r.prototype.populateURLFlags = function () {
      var t = this;
      if (this.global !== void 0 && this.global.location !== void 0 && this.global.location.search !== void 0) {
        var e, n, o = (e = this.global.location.search, n = {}, e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (a) {
          for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
          return ed(n, i[0], i[1]), i.join('=');
        }), n);
        'tfjsflags' in o && o.tfjsflags.split(',').forEach(function (a) {
          var i = a.split(':'), s = i[0], u = i[1];
          t.urlFlags[s] = function (c, l) {
            if ((l = l.toLowerCase()) === 'true' || l === 'false') return l === 'true';
            if ('' + +l === l) return +l;
            throw new Error('Could not parse value flag value ' + l + ' for flag ' + c + '.');
          }(s, u);
        });
      }
    }, r;
  }();

  function ed(r, t, e) {
    r[decodeURIComponent(t)] = decodeURIComponent(e || '');
  }

  function O() {
    return $u;
  }

  var $u = null, Lo = new Map, ai = new Map;

  function Zu(r, t) {
    var e = Qu(r, t);
    return Lo.get(e);
  }

  function td(r) {
    return ai.get(r);
  }

  function Xs(r) {
    for (var t = Lo.entries(), e = []; ;) {
      var n = t.next(), o = n.done, a = n.value;
      if (o) break;
      var i = a[0], s = a[1];
      i.split('_')[0] === r && e.push(s);
    }
    return e;
  }

  function Ju(r) {
    var t = r.kernelName, e = r.backendName, n = Qu(t, e);
    if (Lo.has(n)) throw new Error('The kernel \'' + t + '\' for backend \'' + e + '\' is already registered');
    Lo.set(n, r);
  }

  function nd(r) {
    var t = r.kernelName;
    ai.has(t) && console.warn('Overriding the gradient for \'' + t + '\''), ai.set(t, r);
  }

  function Qu(r, t) {
    return t + '_' + r;
  }

  function Ks(r) {
    for (var t = r.length, e = 0, n = 0; t > 0;) n = Math.random() * t | 0, e = r[--t], r[t] = r[n], r[n] = e;
  }

  function Wo(r, t, e) {
    return Math.max(r, Math.min(t, e));
  }

  function Ti(r) {
    return r % 2 == 0 ? r : r + 1;
  }

  function ec(r) {
    for (var t = 0, e = 0; e < r.length; e++) t += r[e];
    return t;
  }

  function k(r, t) {
    if (!r) throw new Error(typeof t == 'string' ? t : t());
  }

  function xe(r, t, e) {
    e === void 0 && (e = ''), k(Be(r, t), function () {
      return e + ' Shapes ' + r + ' and ' + t + ' must match';
    });
  }

  function er(r) {
    k(r != null, function () {
      return 'The input to the tensor constructor must be a non-null value.';
    });
  }

  function ln(r, t, e) {
    if (t === void 0 && (t = []), e === void 0 && (e = !1), t == null && (t = []), Array.isArray(r) || Je(r) && !e) for (var n = 0; n < r.length; ++n) ln(r[n], t, e); else t.push(r);
    return t;
  }

  function J(r) {
    if (r.length === 0) return 1;
    for (var t = r[0], e = 1; e < r.length; e++) t *= r[e];
    return t;
  }

  function Be(r, t) {
    if (r === t) return !0;
    if (r == null || t == null || r.length !== t.length) return !1;
    for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return !1;
    return !0;
  }

  function Te(r) {
    return r % 1 == 0;
  }

  function tc(r) {
    if (Math.tanh != null) return Math.tanh(r);
    if (r === 1 / 0) return 1;
    if (r === -1 / 0) return -1;
    var t = Math.exp(2 * r);
    return (t - 1) / (t + 1);
  }

  function Uo(r) {
    var t = Math.ceil(Math.sqrt(r));
    return [t, Math.ceil(r / t)];
  }

  function jn(r, t) {
    return t <= r.length ? r : r + ' '.repeat(t - r.length);
  }

  function ii(r, t, e) {
    return t === void 0 && (t = function (n) {
      return 0;
    }), new Promise(function (n, o) {
      var a = 0, i = function () {
        if (r()) n(); else {
          a++;
          var s = t(a);
          e != null && a >= e ? o() : setTimeout(i, s);
        }
      };
      i();
    });
  }

  function nc(r, t) {
    for (var e = 1, n = -1, o = 0; o < r.length; ++o) if (r[o] >= 0) e *= r[o]; else if (r[o] === -1) {
      if (n !== -1) throw Error('Shapes can only have 1 implicit size. Found -1 at dim ' + n + ' and dim ' + o);
      n = o;
    } else if (r[o] < 0) throw Error('Shapes can not be < 0. Found ' + r[o] + ' at dim ' + o);
    if (n === -1) {
      if (t > 0 && t !== e) throw Error('Size(' + t + ') must match the product of shape ' + r);
      return r;
    }
    if (e === 0) throw Error('Cannot infer the missing size in [' + r + '] when there are 0 elements');
    if (t % e != 0) throw Error('The implicit shape can\'t be a fractional number. Got ' + t + ' / ' + e);
    var a = r.slice();
    return a[n] = t / e, a;
  }

  function We(r, t) {
    var e = t.length;
    return k((r = r == null ? t.map(function (n, o) {
      return o;
    }) : [].concat(r)).every(function (n) {
      return n >= -e && n < e;
    }), function () {
      return 'All values in axis param must be in range [-' + e + ', ' + e + ') but got axis ' + r;
    }), k(r.every(function (n) {
      return Te(n);
    }), function () {
      return 'All values in axis param must be integers but got axis ' + r;
    }), r.map(function (n) {
      return n < 0 ? e + n : n;
    });
  }

  function _n(r, t) {
    for (var e = [], n = [], o = t != null && Array.isArray(t) && t.length === 0, a = t == null || o ? null : We(t, r).sort(), i = 0, s = 0; s < r.length; ++s) {
      if (a != null) {
        if (a[i] === s && r[s] !== 1) throw new Error('Can\'t squeeze axis ' + s + ' since its dim \'' + r[s] + '\' is not 1');
        (a[i] == null || a[i] > s) && r[s] === 1 && (e.push(r[s]), n.push(s)), a[i] <= s && i++;
      }
      r[s] !== 1 && (e.push(r[s]), n.push(s));
    }
    return { newShape: e, keptDims: n };
  }

  function Er(r, t) {
    var e = null;
    if (r == null || r === 'float32') e = new Float32Array(t); else if (r === 'int32') e = new Int32Array(t); else {
      if (r !== 'bool') throw new Error('Unknown data type ' + r);
      e = new Uint8Array(t);
    }
    return e;
  }

  function Hr(r, t) {
    var e = null;
    if (r == null || r === 'float32') e = new Float32Array(t); else if (r === 'int32') e = new Int32Array(t); else if (r === 'bool') e = new Uint8Array(t); else {
      if (r !== 'string') throw new Error('Unknown data type ' + r);
      e = new Array(t);
    }
    return e;
  }

  function rc(r, t) {
    for (var e = 0; e < r.length; e++) {
      var n = r[e];
      if (isNaN(n) || !isFinite(n)) throw Error('A tensor of type ' + t + ' being uploaded contains ' + n + '.');
    }
  }

  function oc(r) {
    return r === 'bool' || r === 'complex64' || r === 'float32' || r === 'int32' || r === 'string';
  }

  function ac(r, t) {
    return t !== 'complex64' && (t !== 'float32' || r === 'complex64') && (t !== 'int32' || r === 'float32' || r === 'complex64') && (t !== 'bool' || r !== 'bool');
  }

  function Je(r) {
    return r instanceof Float32Array || r instanceof Int32Array || r instanceof Uint8Array;
  }

  function Fi(r) {
    if (r === 'float32' || r === 'int32') return 4;
    if (r === 'complex64') return 8;
    if (r === 'bool') return 1;
    throw new Error('Unknown dtype ' + r);
  }

  function ic(r) {
    if (r == null) return 0;
    var t = 0;
    return r.forEach(function (e) {
      return t += e.length;
    }), t;
  }

  function En(r) {
    return typeof r == 'string' || r instanceof String;
  }

  function sc(r) {
    return typeof r == 'boolean';
  }

  function uc(r) {
    return typeof r == 'number';
  }

  function Sr(r) {
    return Array.isArray(r) ? Sr(r[0]) : r instanceof Float32Array ? 'float32' : r instanceof Int32Array || r instanceof Uint8Array ? 'int32' : uc(r) ? 'float32' : En(r) ? 'string' : sc(r) ? 'bool' : 'float32';
  }

  function zo(r) {
    return !!(r && r.constructor && r.call && r.apply);
  }

  function Vo(r, t) {
    for (var e = t; e < r; ++e) if (r % e == 0) return e;
    return r;
  }

  function Ft(r) {
    var t = r.length;
    if (t < 2) return [];
    var e = new Array(t - 1);
    e[t - 2] = r[t - 1];
    for (var n = t - 3; n >= 0; --n) e[n] = e[n + 1] * r[n + 1];
    return e;
  }

  function Ni(r, t, e) {
    if (t === 'string') throw new Error('Cannot convert a string[] to a TypedArray');
    if (Array.isArray(r) && (r = ln(r)), e && rc(r, t), function (a, i) {
      return a instanceof Float32Array && i === 'float32' || a instanceof Int32Array && i === 'int32' || a instanceof Uint8Array && i === 'bool';
    }(r, t)) return r;
    if (t == null || t === 'float32' || t === 'complex64') return new Float32Array(r);
    if (t === 'int32') return new Int32Array(r);
    if (t === 'bool') {
      for (var n = new Uint8Array(r.length), o = 0; o < n.length; ++o) Math.round(r[o]) !== 0 && (n[o] = 1);
      return n;
    }
    throw new Error('Unknown data type ' + t);
  }

  function si(r, t) {
    if (r.length === 0) return t[0];
    var e = r.reduce(function (n, o) {
      return n * o;
    });
    if (e === 0) return [];
    if (e !== t.length) throw new Error('[' + r + '] does not match the input size.');
    return function n(o, a, i) {
      var s = new Array;
      if (a.length === 1) for (var u = a[0], c = 0; c < u; c++) s[c] = i[o + c]; else {
        u = a[0];
        var l = a.slice(1), h = l.reduce(function (f, d) {
          return f * d;
        });
        for (c = 0; c < u; c++) s[c] = n(o + c * h, l, i);
      }
      return s;
    }(0, r, t);
  }

  function Mi(r, t) {
    for (var e = Ar(r, t), n = 0; n < e.length; n++) e[n] = 1;
    return e;
  }

  function Ar(r, t) {
    if (t == null || t === 'float32' || t === 'complex64') return new Float32Array(r);
    if (t === 'int32') return new Int32Array(r);
    if (t === 'bool') return new Uint8Array(r);
    throw new Error('Unknown data type ' + t);
  }

  function At() {
    return O().platform.now();
  }

  function Pi(r) {
    r.forEach(function (t) {
      k(Number.isInteger(t) && t >= 0, function () {
        return 'Tensor must have a shape comprised of positive integers but got shape [' + r + '].';
      });
    });
  }

  function cc(r, t) {
    return t === void 0 && (t = 'utf-8'), t = t || 'utf-8', O().platform.encode(r, t);
  }

  function jr(r, t) {
    return t === void 0 && (t = 'utf-8'), t = t || 'utf-8', O().platform.decode(r, t);
  }

  function ui(r, t, e) {
    if (t === 0) return 0;
    if (t === 1) return r[0];
    for (var n = r[r.length - 1], o = 0; o < r.length - 1; ++o) n += e[o] * r[o];
    return n;
  }

  function lc(r, t, e) {
    if (t === 0) return [];
    if (t === 1) return [r];
    for (var n = new Array(t), o = 0; o < n.length - 1; ++o) n[o] = Math.floor(r / e[o]), r -= n[o] * e[o];
    return n[n.length - 1] = r, n;
  }

  Object.freeze({
    shuffle: Ks,
    clamp: Wo,
    nearestLargerEven: Ti,
    sum: ec,
    randUniform: function (r, t) {
      var e = Math.random();
      return t * e + (1 - e) * r;
    },
    distSquared: function (r, t) {
      for (var e = 0, n = 0; n < r.length; n++) {
        var o = Number(r[n]) - Number(t[n]);
        e += o * o;
      }
      return e;
    },
    assert: k,
    assertShapesMatch: xe,
    assertNonNull: er,
    flatten: ln,
    sizeFromShape: J,
    isScalarShape: function (r) {
      return r.length === 0;
    },
    arraysEqual: Be,
    isInt: Te,
    tanh: tc,
    sizeToSquarishShape: Uo,
    createShuffledIndices: function (r) {
      for (var t = new Uint32Array(r), e = 0; e < r; ++e) t[e] = e;
      return Ks(t), t;
    },
    rightPad: jn,
    repeatedTry: ii,
    inferFromImplicitShape: nc,
    parseAxisParam: We,
    squeezeShape: _n,
    getTypedArrayFromDType: Er,
    getArrayFromDType: Hr,
    checkConversionForErrors: rc,
    isValidDtype: oc,
    hasEncodingLoss: ac,
    isTypedArray: Je,
    bytesPerElement: Fi,
    bytesFromStringArray: ic,
    isString: En,
    isBoolean: sc,
    isNumber: uc,
    inferDtype: Sr,
    isFunction: zo,
    nearestDivisor: Vo,
    computeStrides: Ft,
    toTypedArray: Ni,
    toNestedArray: si,
    makeOnesTypedArray: Mi,
    makeZerosTypedArray: Ar,
    now: At,
    assertNonNegativeIntegerDimensions: Pi,
    fetch: function (r, t) {
      return O().platform.fetch(r, t);
    },
    encodeString: cc,
    decodeString: jr,
    locToIndex: ui,
    indexToLoc: lc,
  });
  var rd = function () {
    function r(t, e) {
      this.backendTimer = t, this.logger = e, e == null && (this.logger = new od);
    }

    return r.prototype.profileKernel = function (t, e, n) {
      var o, a = this, i = this.backendTimer.time(function () {
        o = n();
      });
      return o.forEach(function (s) {
        s.data().then(function (u) {
          (function (c, l, h) {
            if (l !== 'float32') return !1;
            for (var f = 0; f < c.length; f++) {
              var d = c[f];
              if (isNaN(d) || !isFinite(d)) return console.warn('Found ' + d + ' in the result of \'' + h + '\''), !0;
            }
          })(u, s.dtype, t), i.then(function (c) {
            var l = '';
            c.getExtraProfileInfo != null && (l = c.getExtraProfileInfo()), a.logger.logKernelProfile(t, s, u, c.kernelMs, e, l);
          });
        });
      }), o;
    }, r;
  }(), od = function () {
    function r() {
    }

    return r.prototype.logKernelProfile = function (t, e, n, o, a, i) {
      var s = typeof o == 'number' ? jn(o + 'ms', 9) : o.error, u = jn(t, 25), c = e.rank, l = e.size,
        h = jn(e.shape.toString(), 14), f = '';
      for (var d in a) {
        var p = a[d].shape || e.shape, v = p.length;
        f += d + ': ' + v + 'D ' + (v > 0 ? p : '') + ' ';
      }
      console.log('%c' + u + '	%c' + s + '	%c' + c + 'D ' + h + '	%c' + l + '	%c' + f + '	%c' + i, 'font-weight:bold', 'color:red', 'color:blue', 'color: orange', 'color: green', 'color: steelblue');
    }, r;
  }(), Ys = 20, Fr = 3, Fa = 7;

  function ad(r, t, e, n) {
    var o = Ft(t), a = function (c, l, h, f) {
      var d = J(l), p = f[f.length - 1], v = new Array(p).fill(0), m = l.length, g = h === 'complex64' ? Mr(c) : c;
      if (m > 1) for (var y = 0; y < d / p; y++) for (var x = y * p, b = 0; b < p; b++) v[b] = Math.max(v[b], Nr(g[x + b], 0, h).length);
      return v;
    }(r, t, e, o), i = t.length, s = function c(l, h, f, d, p, v) {
      v === void 0 && (v = !0);
      var m = f === 'complex64' ? 2 : 1, g = h[0], y = h.length;
      if (y === 0) return f === 'complex64' ? [Nr(Mr(l)[0], 0, f)] : f === 'bool' ? [hc(l[0])] : [l[0].toString()];
      if (y === 1) {
        if (g > Ys) {
          var x = Fr * m, b = Array.from(l.slice(0, x)), w = Array.from(l.slice((g - Fr) * m, g * m));
          return f === 'complex64' && (b = Mr(b), w = Mr(w)), ['[' + b.map(function (W, V) {
            return Nr(W, p[V], f);
          }).join(', ') + ', ..., ' + w.map(function (W, V) {
            return Nr(W, p[g - Fr + V], f);
          }).join(', ') + ']'];
        }
        return ['[' + (f === 'complex64' ? Mr(l) : Array.from(l)).map(function (W, V) {
          return Nr(W, p[V], f);
        }).join(', ') + ']'];
      }
      var _ = h.slice(1), S = d.slice(1), E = d[0] * m, I = [];
      if (g > Ys) {
        for (var R = 0; R < Fr; R++) {
          var F = (D = R * E) + E;
          I.push.apply(I, c(l.slice(D, F), _, f, S, p, !1));
        }
        for (I.push('...'), R = g - Fr; R < g; R++) F = (D = R * E) + E, I.push.apply(I, c(l.slice(D, F), _, f, S, p, R === g - 1));
      } else for (R = 0; R < g; R++) {
        var D;
        F = (D = R * E) + E, I.push.apply(I, c(l.slice(D, F), _, f, S, p, R === g - 1));
      }
      var L = y === 2 ? ',' : '';
      for (I[0] = '[' + I[0] + L, R = 1; R < I.length - 1; R++) I[R] = ' ' + I[R] + L;
      var B = `,
`;
      for (R = 2; R < y; R++) B += `
`;
      return I[I.length - 1] = ' ' + I[I.length - 1] + ']' + (v ? '' : B), I;
    }(r, t, e, o, a), u = ['Tensor'];
    return n && (u.push('  dtype: ' + e), u.push('  rank: ' + i), u.push('  shape: [' + t + ']'), u.push('  values:')), u.push(s.map(function (c) {
      return '    ' + c;
    }).join(`
`)), u.join(`
`);
  }

  function Nr(r, t, e) {
    return jn(Array.isArray(r) ? parseFloat(r[0].toFixed(Fa)) + ' + ' + parseFloat(r[1].toFixed(Fa)) + 'j' : En(r) ? '\'' + r + '\'' : e === 'bool' ? hc(r) : parseFloat(r.toFixed(Fa)).toString(), t);
  }

  function hc(r) {
    return r === 0 ? 'false' : 'true';
  }

  function Mr(r) {
    for (var t = [], e = 0; e < r.length; e += 2) t.push([r[e], r[e + 1]]);
    return t;
  }

  var Xr = function () {
    function r(t, e, n) {
      var o = this;
      if (this.dtype = e, this.shape = t.slice(), this.size = J(t), n != null) {
        var a = n.length;
        k(a === this.size, function () {
          return 'Length of values \'' + a + '\' does not match the size inferred by the shape \'' + o.size + '\'.';
        });
      }
      if (e === 'complex64') throw new Error('complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).');
      this.values = n || Hr(e, this.size), this.strides = Ft(t);
    }

    return r.prototype.set = function (t) {
      for (var e = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
      n.length === 0 && (n = [0]), k(n.length === this.rank, function () {
        return 'The number of provided coordinates (' + n.length + ') must match the rank (' + e.rank + ')';
      });
      var a = this.locToIndex(n);
      this.values[a] = t;
    }, r.prototype.get = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      t.length === 0 && (t = [0]);
      for (var n = 0, o = 0, a = t; o < a.length; o++) {
        var i = a[o];
        if (i < 0 || i >= this.shape[n]) {
          var s = 'Requested out of range element at ' + t + '.   Buffer shape=' + this.shape;
          throw new Error(s);
        }
        n++;
      }
      for (var u = t[t.length - 1], c = 0; c < t.length - 1; ++c) u += this.strides[c] * t[c];
      return this.values[u];
    }, r.prototype.locToIndex = function (t) {
      if (this.rank === 0) return 0;
      if (this.rank === 1) return t[0];
      for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n];
      return e;
    }, r.prototype.indexToLoc = function (t) {
      if (this.rank === 0) return [];
      if (this.rank === 1) return [t];
      for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n) e[n] = Math.floor(t / this.strides[n]), t -= e[n] * this.strides[n];
      return e[e.length - 1] = t, e;
    }, Object.defineProperty(r.prototype, 'rank', {
      get: function () {
        return this.shape.length;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.toTensor = function () {
      return Gt().makeTensor(this.values, this.shape, this.dtype);
    }, r;
  }(), Gt = null, M = null, fc = null, Se = function () {
    function r(t, e, n, o) {
      this.kept = !1, this.isDisposedInternal = !1, this.shape = t.slice(), this.dtype = e || 'float32', this.size = J(t), this.strides = Ft(t), this.dataId = n, this.id = o, this.rankType = this.rank < 5 ? this.rank.toString() : 'higher';
    }

    return r.prototype.flatten = function () {
      return this.throwIfDisposed(), this.as1D();
    }, r.prototype.asScalar = function () {
      return this.throwIfDisposed(), k(this.size === 1, function () {
        return 'The array must have only 1 element.';
      }), this.reshape([]);
    }, r.prototype.as1D = function () {
      return this.throwIfDisposed(), this.reshape([this.size]);
    }, r.prototype.as2D = function (t, e) {
      return this.throwIfDisposed(), this.reshape([t, e]);
    }, r.prototype.as3D = function (t, e, n) {
      return this.throwIfDisposed(), this.reshape([t, e, n]);
    }, r.prototype.as4D = function (t, e, n, o) {
      return this.throwIfDisposed(), this.reshape([t, e, n, o]);
    }, r.prototype.as5D = function (t, e, n, o, a) {
      return this.throwIfDisposed(), this.reshape([t, e, n, o, a]);
    }, r.prototype.asType = function (t) {
      return this.throwIfDisposed(), M.cast(this, t);
    }, Object.defineProperty(r.prototype, 'rank', {
      get: function () {
        return this.shape.length;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.buffer = function () {
      return $(this, void 0, void 0, function () {
        var t;
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.data()];
            case 1:
              return t = e.sent(), [2, M.buffer(this.shape, this.dtype, t)];
          }
        });
      });
    }, r.prototype.bufferSync = function () {
      return M.buffer(this.shape, this.dtype, this.dataSync());
    }, r.prototype.array = function () {
      return $(this, void 0, void 0, function () {
        var t;
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.data()];
            case 1:
              return t = e.sent(), [2, si(this.shape, t)];
          }
        });
      });
    }, r.prototype.arraySync = function () {
      return si(this.shape, this.dataSync());
    }, r.prototype.data = function () {
      return $(this, void 0, void 0, function () {
        var t, e;
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return this.throwIfDisposed(), t = Gt().read(this.dataId), this.dtype !== 'string' ? [3, 2] : [4, t];
            case 1:
              e = n.sent();
              try {
                return [2, e.map(function (o) {
                  return jr(o);
                })];
              } catch {
                throw new Error('Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().');
              }
              n.label = 2;
            case 2:
              return [2, t];
          }
        });
      });
    }, r.prototype.dataSync = function () {
      this.throwIfDisposed();
      var t = Gt().readSync(this.dataId);
      if (this.dtype === 'string') try {
        return t.map(function (e) {
          return jr(e);
        });
      } catch {
        throw new Error('Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().');
      }
      return t;
    }, r.prototype.bytes = function () {
      return $(this, void 0, void 0, function () {
        var t;
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return this.throwIfDisposed(), [4, Gt().read(this.dataId)];
            case 1:
              return t = e.sent(), this.dtype === 'string' ? [2, t] : [2, new Uint8Array(t.buffer)];
          }
        });
      });
    }, r.prototype.dispose = function () {
      this.isDisposed || (Gt().disposeTensor(this), this.isDisposedInternal = !0);
    }, Object.defineProperty(r.prototype, 'isDisposed', {
      get: function () {
        return this.isDisposedInternal;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.throwIfDisposed = function () {
      if (this.isDisposed) throw new Error('Tensor is disposed.');
    }, r.prototype.toFloat = function () {
      return this.asType('float32');
    }, r.prototype.toInt = function () {
      return this.asType('int32');
    }, r.prototype.toBool = function () {
      return this.asType('bool');
    }, r.prototype.print = function (t) {
      return t === void 0 && (t = !1), M.print(this, t);
    }, r.prototype.reshape = function (t) {
      return this.throwIfDisposed(), M.reshape(this, t);
    }, r.prototype.reshapeAs = function (t) {
      return this.throwIfDisposed(), this.reshape(t.shape);
    }, r.prototype.expandDims = function (t) {
      return t === void 0 && (t = 0), M.expandDims(this, t);
    }, r.prototype.cumsum = function (t, e, n) {
      return t === void 0 && (t = 0), e === void 0 && (e = !1), n === void 0 && (n = !1), M.cumsum(this, t, e, n);
    }, r.prototype.squeeze = function (t) {
      return this.throwIfDisposed(), M.squeeze(this, t);
    }, r.prototype.clone = function () {
      return this.throwIfDisposed(), M.clone(this);
    }, r.prototype.oneHot = function (t, e, n) {
      return this.throwIfDisposed(), M.oneHot(this, t, e, n);
    }, r.prototype.toString = function (t) {
      return t === void 0 && (t = !1), ad(this.dataSync(), this.shape, this.dtype, t);
    }, r.prototype.tile = function (t) {
      return this.throwIfDisposed(), M.tile(this, t);
    }, r.prototype.gather = function (t, e) {
      return e === void 0 && (e = 0), this.throwIfDisposed(), M.gather(this, t, e);
    }, r.prototype.matMul = function (t, e, n) {
      return e === void 0 && (e = !1), n === void 0 && (n = !1), this.throwIfDisposed(), M.matMul(this, t, e, n);
    }, r.prototype.dot = function (t) {
      return this.throwIfDisposed(), M.dot(this, t);
    }, r.prototype.norm = function (t, e, n) {
      return t === void 0 && (t = 'euclidean'), e === void 0 && (e = null), n === void 0 && (n = !1), this.throwIfDisposed(), M.norm(this, t, e, n);
    }, r.prototype.slice = function (t, e) {
      return this.throwIfDisposed(), M.slice(this, t, e);
    }, r.prototype.reverse = function (t) {
      return this.throwIfDisposed(), M.reverse(this, t);
    }, r.prototype.concat = function (t, e) {
      return e === void 0 && (e = 0), this.throwIfDisposed(), t instanceof r && (t = [t]), M.concat([this].concat(t), e);
    }, r.prototype.split = function (t, e) {
      return e === void 0 && (e = 0), this.throwIfDisposed(), M.split(this, t, e);
    }, r.prototype.stack = function (t, e) {
      return e === void 0 && (e = 0), M.stack([this, t], e);
    }, r.prototype.unstack = function (t) {
      return t === void 0 && (t = 0), M.unstack(this, t);
    }, r.prototype.pad = function (t, e) {
      return e === void 0 && (e = 0), M.pad(this, t, e);
    }, r.prototype.batchNormalization = function (t, e, n, o, a) {
      return n === void 0 && (n = .001), fc('tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon'), this.batchNorm(t, e, a, o, n);
    }, r.prototype.batchNorm = function (t, e, n, o, a) {
      return a === void 0 && (a = .001), this.throwIfDisposed(), M.batchNorm(this, t, e, n, o, a);
    }, r.prototype.all = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.all(this, t, e);
    }, r.prototype.any = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.any(this, t, e);
    }, r.prototype.logSumExp = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.logSumExp(this, t, e);
    }, r.prototype.sum = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.sum(this, t, e);
    }, r.prototype.prod = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.prod(this, t, e);
    }, r.prototype.mean = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.mean(this, t, e);
    }, r.prototype.min = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.min(this, t, e);
    }, r.prototype.max = function (t, e) {
      return t === void 0 && (t = null), e === void 0 && (e = !1), this.throwIfDisposed(), M.max(this, t, e);
    }, r.prototype.argMin = function (t) {
      return t === void 0 && (t = null), this.throwIfDisposed(), M.argMin(this, t);
    }, r.prototype.argMax = function (t) {
      return t === void 0 && (t = null), this.throwIfDisposed(), M.argMax(this, t);
    }, r.prototype.cast = function (t) {
      return this.throwIfDisposed(), M.cast(this, t);
    }, r.prototype.add = function (t) {
      return this.throwIfDisposed(), M.add(this, t);
    }, r.prototype.addStrict = function (t) {
      return this.throwIfDisposed(), M.addStrict(this, t);
    }, r.prototype.atan2 = function (t) {
      return this.throwIfDisposed(), M.atan2(this, t);
    }, r.prototype.sub = function (t) {
      return this.throwIfDisposed(), M.sub(this, t);
    }, r.prototype.subStrict = function (t) {
      return this.throwIfDisposed(), M.subStrict(this, t);
    }, r.prototype.pow = function (t) {
      return this.throwIfDisposed(), M.pow(this, t);
    }, r.prototype.powStrict = function (t) {
      return this.throwIfDisposed(), M.powStrict(this, t);
    }, r.prototype.mul = function (t) {
      return this.throwIfDisposed(), M.mul(this, t);
    }, r.prototype.mulStrict = function (t) {
      return this.throwIfDisposed(), M.mulStrict(this, t);
    }, r.prototype.div = function (t) {
      return this.throwIfDisposed(), M.div(this, t);
    }, r.prototype.divNoNan = function (t) {
      return this.throwIfDisposed(), M.divNoNan(this, t);
    }, r.prototype.floorDiv = function (t) {
      return this.throwIfDisposed(), M.floorDiv(this, t);
    }, r.prototype.divStrict = function (t) {
      return this.throwIfDisposed(), M.divStrict(this, t);
    }, r.prototype.minimum = function (t) {
      return this.throwIfDisposed(), M.minimum(this, t);
    }, r.prototype.minimumStrict = function (t) {
      return this.throwIfDisposed(), M.minimumStrict(this, t);
    }, r.prototype.maximum = function (t) {
      return this.throwIfDisposed(), M.maximum(this, t);
    }, r.prototype.maximumStrict = function (t) {
      return this.throwIfDisposed(), M.maximumStrict(this, t);
    }, r.prototype.mod = function (t) {
      return this.throwIfDisposed(), M.mod(this, t);
    }, r.prototype.modStrict = function (t) {
      return this.throwIfDisposed(), M.modStrict(this, t);
    }, r.prototype.squaredDifferenceStrict = function (t) {
      return this.throwIfDisposed(), M.squaredDifferenceStrict(this, t);
    }, r.prototype.transpose = function (t) {
      return this.throwIfDisposed(), M.transpose(this, t);
    }, r.prototype.notEqual = function (t) {
      return this.throwIfDisposed(), M.notEqual(this, t);
    }, r.prototype.notEqualStrict = function (t) {
      return this.throwIfDisposed(), M.notEqualStrict(this, t);
    }, r.prototype.less = function (t) {
      return this.throwIfDisposed(), M.less(this, t);
    }, r.prototype.lessStrict = function (t) {
      return this.throwIfDisposed(), M.lessStrict(this, t);
    }, r.prototype.equal = function (t) {
      return this.throwIfDisposed(), M.equal(this, t);
    }, r.prototype.equalStrict = function (t) {
      return this.throwIfDisposed(), M.equalStrict(this, t);
    }, r.prototype.lessEqual = function (t) {
      return this.throwIfDisposed(), M.lessEqual(this, t);
    }, r.prototype.lessEqualStrict = function (t) {
      return this.throwIfDisposed(), M.lessEqualStrict(this, t);
    }, r.prototype.greater = function (t) {
      return this.throwIfDisposed(), M.greater(this, t);
    }, r.prototype.greaterStrict = function (t) {
      return this.throwIfDisposed(), M.greaterStrict(this, t);
    }, r.prototype.greaterEqual = function (t) {
      return this.throwIfDisposed(), M.greaterEqual(this, t);
    }, r.prototype.greaterEqualStrict = function (t) {
      return this.throwIfDisposed(), M.greaterEqualStrict(this, t);
    }, r.prototype.logicalAnd = function (t) {
      return this.throwIfDisposed(), M.logicalAnd(this, t);
    }, r.prototype.logicalOr = function (t) {
      return this.throwIfDisposed(), M.logicalOr(this, t);
    }, r.prototype.logicalNot = function () {
      return this.throwIfDisposed(), M.logicalNot(this);
    }, r.prototype.logicalXor = function (t) {
      return this.throwIfDisposed(), M.logicalXor(this, t);
    }, r.prototype.where = function (t, e) {
      return this.throwIfDisposed(), M.where(t, this, e);
    }, r.prototype.neg = function () {
      return this.throwIfDisposed(), M.neg(this);
    }, r.prototype.ceil = function () {
      return this.throwIfDisposed(), M.ceil(this);
    }, r.prototype.floor = function () {
      return this.throwIfDisposed(), M.floor(this);
    }, r.prototype.sign = function () {
      return this.throwIfDisposed(), M.sign(this);
    }, r.prototype.isNaN = function () {
      return this.throwIfDisposed(), M.isNaN(this);
    }, r.prototype.isInf = function () {
      return this.throwIfDisposed(), M.isInf(this);
    }, r.prototype.isFinite = function () {
      return this.throwIfDisposed(), M.isFinite(this);
    },r.prototype.exp = function () {
      return this.throwIfDisposed(), M.exp(this);
    },r.prototype.expm1 = function () {
      return this.throwIfDisposed(), M.expm1(this);
    },r.prototype.log = function () {
      return this.throwIfDisposed(), M.log(this);
    },r.prototype.log1p = function () {
      return this.throwIfDisposed(), M.log1p(this);
    },r.prototype.sqrt = function () {
      return this.throwIfDisposed(), M.sqrt(this);
    },r.prototype.rsqrt = function () {
      return this.throwIfDisposed(), M.rsqrt(this);
    },r.prototype.square = function () {
      return this.throwIfDisposed(), M.square(this);
    },r.prototype.reciprocal = function () {
      return this.throwIfDisposed(), M.reciprocal(this);
    },r.prototype.abs = function () {
      return this.throwIfDisposed(), M.abs(this);
    },r.prototype.clipByValue = function (t, e) {
      return this.throwIfDisposed(), M.clipByValue(this, t, e);
    },r.prototype.relu = function () {
      return this.throwIfDisposed(), M.relu(this);
    },r.prototype.relu6 = function () {
      return this.throwIfDisposed(), M.relu6(this);
    },r.prototype.elu = function () {
      return this.throwIfDisposed(), M.elu(this);
    },r.prototype.selu = function () {
      return this.throwIfDisposed(), M.selu(this);
    },r.prototype.leakyRelu = function (t) {
      return t === void 0 && (t = .2), this.throwIfDisposed(), M.leakyRelu(this, t);
    },r.prototype.prelu = function (t) {
      return this.throwIfDisposed(), M.prelu(this, t);
    },r.prototype.sigmoid = function () {
      return this.throwIfDisposed(), M.sigmoid(this);
    },r.prototype.logSigmoid = function () {
      return this.throwIfDisposed(), M.logSigmoid(this);
    },r.prototype.softplus = function () {
      return this.throwIfDisposed(), M.softplus(this);
    },r.prototype.zerosLike = function () {
      return this.throwIfDisposed(), M.zerosLike(this);
    },r.prototype.onesLike = function () {
      return this.throwIfDisposed(), M.onesLike(this);
    },r.prototype.sin = function () {
      return this.throwIfDisposed(), M.sin(this);
    },r.prototype.cos = function () {
      return this.throwIfDisposed(), M.cos(this);
    },r.prototype.tan = function () {
      return this.throwIfDisposed(), M.tan(this);
    },r.prototype.asin = function () {
      return this.throwIfDisposed(), M.asin(this);
    },r.prototype.acos = function () {
      return this.throwIfDisposed(), M.acos(this);
    },r.prototype.atan = function () {
      return this.throwIfDisposed(), M.atan(this);
    },r.prototype.sinh = function () {
      return this.throwIfDisposed(), M.sinh(this);
    },r.prototype.cosh = function () {
      return this.throwIfDisposed(), M.cosh(this);
    },r.prototype.tanh = function () {
      return this.throwIfDisposed(), M.tanh(this);
    },r.prototype.asinh = function () {
      return this.throwIfDisposed(), M.asinh(this);
    },r.prototype.acosh = function () {
      return this.throwIfDisposed(), M.acosh(this);
    },r.prototype.atanh = function () {
      return this.throwIfDisposed(), M.atanh(this);
    },r.prototype.erf = function () {
      return this.throwIfDisposed(), M.erf(this);
    },r.prototype.round = function () {
      return this.throwIfDisposed(), M.round(this);
    },r.prototype.step = function (t) {
      return t === void 0 && (t = 0), this.throwIfDisposed(), M.step(this, t);
    },r.prototype.softmax = function (t) {
      return t === void 0 && (t = -1), this.throwIfDisposed(), M.softmax(this, t);
    },r.prototype.logSoftmax = function (t) {
      return t === void 0 && (t = -1), this.throwIfDisposed(), M.logSoftmax(this, t);
    },r.prototype.resizeBilinear = function (t, e) {
      return e === void 0 && (e = !1), this.throwIfDisposed(), M.image.resizeBilinear(this, t, e);
    },r.prototype.resizeNearestNeighbor = function (t, e) {
      return e === void 0 && (e = !1), this.throwIfDisposed(), M.image.resizeNearestNeighbor(this, t, e);
    },r.prototype.conv1d = function (t, e, n, o, a, i) {
      return o === void 0 && (o = 'NWC'), a === void 0 && (a = 1), this.throwIfDisposed(), M.conv1d(this, t, e, n, o, a, i);
    },r.prototype.conv2d = function (t, e, n, o, a, i) {
      return o === void 0 && (o = 'NHWC'), a === void 0 && (a = [1, 1]), this.throwIfDisposed(), M.conv2d(this, t, e, n, o, a, i);
    },r.prototype.conv2dTranspose = function (t, e, n, o, a) {
      return this.throwIfDisposed(), M.conv2dTranspose(this, t, e, n, o, a);
    },r.prototype.depthwiseConv2D = function (t, e, n, o, a, i) {
      return o === void 0 && (o = 'NHWC'), a === void 0 && (a = [1, 1]), this.throwIfDisposed(), M.depthwiseConv2d(this, t, e, n, o, a, i);
    },r.prototype.separableConv2d = function (t, e, n, o, a, i) {
      return a === void 0 && (a = [1, 1]), i === void 0 && (i = 'NHWC'), this.throwIfDisposed(), M.separableConv2d(this, t, e, n, o, a, i);
    },r.prototype.avgPool = function (t, e, n, o) {
      return this.throwIfDisposed(), M.avgPool(this, t, e, n, o);
    },r.prototype.maxPool = function (t, e, n, o) {
      return this.throwIfDisposed(), M.maxPool(this, t, e, n, o);
    },r.prototype.localResponseNormalization = function (t, e, n, o) {
      return t === void 0 && (t = 5), e === void 0 && (e = 1), n === void 0 && (n = 1), o === void 0 && (o = .5), M.localResponseNormalization(this, t, e, n, o);
    },r.prototype.pool = function (t, e, n, o, a) {
      return this.throwIfDisposed(), M.pool(this, t, e, n, o, a);
    },r.prototype.variable = function (t, e, n) {
      return t === void 0 && (t = !0), this.throwIfDisposed(), Gt().makeVariable(this, t, e, n);
    },r.prototype.unsortedSegmentSum = function (t, e) {
      return this.throwIfDisposed(), M.unsortedSegmentSum(this, t, e);
    },r.prototype.batchToSpaceND = function (t, e) {
      return this.throwIfDisposed(), M.batchToSpaceND(this, t, e);
    },r.prototype.spaceToBatchND = function (t, e) {
      return this.throwIfDisposed(), M.spaceToBatchND(this, t, e);
    },r.prototype.topk = function (t, e) {
      return t === void 0 && (t = 1), e === void 0 && (e = !0), this.throwIfDisposed(), M.topk(this, t, e);
    },r.prototype.stridedSlice = function (t, e, n, o, a, i, s, u) {
      return o === void 0 && (o = 0), a === void 0 && (a = 0), i === void 0 && (i = 0), s === void 0 && (s = 0), u === void 0 && (u = 0), this.throwIfDisposed(), M.stridedSlice(this, t, e, n, o, a, i, s, u);
    },r.prototype.depthToSpace = function (t, e) {
      return this.throwIfDisposed(), M.depthToSpace(this, t, e);
    },r.prototype.fft = function () {
      return this.throwIfDisposed(), M.spectral.fft(this);
    },r.prototype.ifft = function () {
      return this.throwIfDisposed(), M.spectral.ifft(this);
    },r.prototype.rfft = function () {
      return this.throwIfDisposed(), M.spectral.rfft(this);
    },r.prototype.irfft = function () {
      return this.throwIfDisposed(), M.spectral.irfft(this);
    },r;
  }();
  Object.defineProperty(Se, Symbol.hasInstance, {
    value: function (r) {
      return !!r && r.dataId != null && r.shape != null && r.dtype != null;
    },
  });
  var $s, ci, li, hi, fi, kr = function (r) {
    function t(e, n, o, a) {
      var i = r.call(this, e.shape, e.dtype, e.dataId, a) || this;
      return i.trainable = n, i.name = o, i;
    }

    return Mt(t, r), t.prototype.assign = function (e) {
      if (e.dtype !== this.dtype) throw new Error('dtype of the new value (' + e.dtype + ') and previous value (' + this.dtype + ') must match');
      if (!Be(e.shape, this.shape)) throw new Error('shape of the new value (' + e.shape + ') and previous value (' + this.shape + ') must match');
      Gt().disposeTensor(this), this.dataId = e.dataId, Gt().incRef(this, null);
    }, t.prototype.dispose = function () {
      Gt().disposeVariable(this), this.isDisposedInternal = !0;
    }, t;
  }(Se);
  Object.defineProperty(kr, Symbol.hasInstance, {
    value: function (r) {
      return r instanceof Se && r.assign != null && r.assign instanceof Function;
    },
  }), function (r) {
    r.R0 = 'R0', r.R1 = 'R1', r.R2 = 'R2', r.R3 = 'R3', r.R4 = 'R4', r.R5 = 'R5', r.R6 = 'R6';
  }($s || ($s = {})), function (r) {
    r.float32 = 'float32', r.int32 = 'int32', r.bool = 'int32', r.complex64 = 'complex64';
  }(ci || (ci = {})), function (r) {
    r.float32 = 'float32', r.int32 = 'int32', r.bool = 'bool', r.complex64 = 'complex64';
  }(li || (li = {})), function (r) {
    r.float32 = 'float32', r.int32 = 'float32', r.bool = 'float32', r.complex64 = 'complex64';
  }(hi || (hi = {})), function (r) {
    r.float32 = 'complex64', r.int32 = 'complex64', r.bool = 'complex64', r.complex64 = 'complex64';
  }(fi || (fi = {}));
  var id = { float32: hi, int32: ci, bool: li, complex64: fi };

  function je(r, t) {
    if (r === 'string' || t === 'string') {
      if (r === 'string' && t === 'string') return 'string';
      throw new Error('Can not upcast ' + r + ' with ' + t);
    }
    return id[r][t];
  }

  function Na(r) {
    return je(r, 'int32');
  }

  function ke(r, t) {
    if (r.dtype === t.dtype) return [r, t];
    var e = je(r.dtype, t.dtype);
    return [r.cast(e), t.cast(e)];
  }

  function dc(r, t) {
    k(r.dtype === t.dtype, function () {
      return 'The dtypes of the first(' + r.dtype + ') and second(' + t.dtype + ') input must match';
    });
  }

  function Oi(r) {
    var t = [];
    return function e(n, o, a) {
      if (n != null) {
        if (n instanceof Se) return void o.push(n);
        if (i = n, !(!Array.isArray(i) && typeof i != 'object')) {
          var i, s = n;
          for (var u in s) {
            var c = s[u];
            a.has(c) || (a.add(c), e(c, o, a));
          }
        }
      }
    }(r, t, new Set), t;
  }

  var Ma;
  Object.freeze({
    makeTypesMatch: ke, assertTypesMatch: dc, isTensorInList: function (r, t) {
      return t.some(function (e) {
        return e.id === r.id;
      });
    }, getTensorsInContainer: Oi,
  });
  var Zs = function () {
    function r() {
      this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = new WeakMap, this.profiling = !1, this.activeProfile = {
        newBytes: 0,
        newTensors: 0,
        peakBytes: 0,
        kernels: [],
        result: null,
      };
    }

    return r.prototype.dispose = function () {
      for (var t in this.registeredVariables) this.registeredVariables[t].dispose();
    }, r;
  }(), sd = function () {
    function r(t) {
      this.ENV = t, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new Zs;
    }

    return r.prototype.ready = function () {
      return $(this, void 0, void 0, function () {
        var t, e, n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              if (this.pendingBackendInit != null) return [2, this.pendingBackendInit.then(function () {
              })];
              if (this.backendInstance != null) return [2];
              t = this.getSortedBackends(), e = 0, o.label = 1;
            case 1:
              return e < t.length ? (n = t[e], [4, this.initializeBackend(n).success]) : [3, 5];
            case 2:
              return o.sent() ? [4, this.setBackend(n)] : [3, 4];
            case 3:
              return o.sent(), [2];
            case 4:
              return e++, [3, 1];
            case 5:
              throw new Error('Could not initialize any backends, all backend initializations failed.');
          }
        });
      });
    }, Object.defineProperty(r.prototype, 'backend', {
      get: function () {
        if (this.pendingBackendInit != null) throw new Error('Backend \'' + this.backendName + '\' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods');
        if (this.backendInstance == null) {
          var t = this.initializeBackendsAndReturnBest(), e = t.name;
          if (t.asyncInit) throw new Error('The highest priority backend \'' + e + '\' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods');
          this.setBackend(e);
        }
        return this.backendInstance;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.backendNames = function () {
      return Object.keys(this.registryFactory);
    }, r.prototype.findBackend = function (t) {
      return !(t in this.registry) && (!(t in this.registryFactory) || this.initializeBackend(t).asyncInit) ? null : this.registry[t];
    }, r.prototype.findBackendFactory = function (t) {
      return t in this.registryFactory ? this.registryFactory[t].factory : null;
    }, r.prototype.registerBackend = function (t, e, n) {
      return n === void 0 && (n = 1), t in this.registryFactory ? (console.warn(t + ' backend was already registered. Reusing existing backend factory.'), !1) : (this.registryFactory[t] = {
        factory: e,
        priority: n,
      }, !0);
    }, r.prototype.setBackend = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n, o;
        return Z(this, function (a) {
          switch (a.label) {
            case 0:
              if (this.registryFactory[t] == null) throw new Error('Backend name \'' + t + '\' not found in registry');
              return this.backendName = t, this.registry[t] != null ? [3, 4] : (this.backendInstance = null, e = this.initializeBackend(t), n = e.success, e.asyncInit ? [4, n] : [3, 2]);
            case 1:
              return o = a.sent(), [3, 3];
            case 2:
              o = n, a.label = 3;
            case 3:
              if (!o) return [2, !1];
              a.label = 4;
            case 4:
              return this.backendInstance = this.registry[t], this.setupRegisteredKernels(), this.profiler = new rd(this.backendInstance), [2, !0];
          }
        });
      });
    }, r.prototype.setupRegisteredKernels = function () {
      var t = this;
      Xs(this.backendName).forEach(function (e) {
        e.setupFunc != null && e.setupFunc(t.backendInstance);
      });
    }, r.prototype.disposeRegisteredKernels = function (t) {
      var e = this;
      Xs(t).forEach(function (n) {
        n.disposeFunc != null && n.disposeFunc(e.registry[t]);
      });
    }, r.prototype.initializeBackend = function (t) {
      var e = this, n = this.registryFactory[t];
      if (n == null) throw new Error('Cannot initialize backend ' + t + ', no registration found.');
      try {
        var o = n.factory();
        if (Promise.resolve(o) === o) {
          var a = ++this.pendingBackendInitId, i = o.then(function (s) {
            return !(a < e.pendingBackendInitId) && (e.registry[t] = s, e.pendingBackendInit = null, !0);
          }).catch(function (s) {
            return !(a < e.pendingBackendInitId) && (e.pendingBackendInit = null, console.warn('Initialization of backend ' + t + ' failed'), console.warn(s.stack || s.message), !1);
          });
          return this.pendingBackendInit = i, { success: i, asyncInit: !0 };
        }
        return this.registry[t] = o, { success: !0, asyncInit: !1 };
      } catch (s) {
        return console.warn('Initialization of backend ' + t + ' failed'), console.warn(s.stack || s.message), {
          success: !1,
          asyncInit: !1,
        };
      }
    }, r.prototype.removeBackend = function (t) {
      if (!(t in this.registryFactory)) throw new Error(t + ' backend not found in registry');
      this.backendName === t && this.pendingBackendInit != null && this.pendingBackendInitId++, t in this.registry && (this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t]), delete this.registryFactory[t], this.backendName === t && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null);
    }, r.prototype.getSortedBackends = function () {
      var t = this;
      if (Object.keys(this.registryFactory).length === 0) throw new Error('No backend found in registry.');
      return Object.keys(this.registryFactory).sort(function (e, n) {
        return t.registryFactory[n].priority - t.registryFactory[e].priority;
      });
    }, r.prototype.initializeBackendsAndReturnBest = function () {
      for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
        var n = t[e], o = this.initializeBackend(n), a = o.success, i = o.asyncInit;
        if (i || a) return { name: n, asyncInit: i };
      }
      throw new Error('Could not initialize any backends, all backend initializations failed.');
    }, r.prototype.moveData = function (t, e) {
      var n = this.state.tensorInfo.get(e), o = n.backend, a = this.readSync(e);
      o.disposeData(e), n.backend = t, t.move(e, a, n.shape, n.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
    }, r.prototype.tidy = function (t, e) {
      var n, o = this, a = null;
      if (e == null) {
        if (typeof t != 'function') throw new Error('Please provide a function to tidy()');
        e = t;
      } else {
        if (typeof t != 'string' && !(t instanceof String)) throw new Error('When calling with two arguments, the first argument to tidy() must be a string');
        if (typeof e != 'function') throw new Error('When calling with two arguments, the 2nd argument to tidy() must be a function');
        a = t;
      }
      return this.scopedRun(function () {
        return o.startScope(a);
      }, function () {
        return o.endScope(n);
      }, function () {
        return (n = e()) instanceof Promise && console.error('Cannot return a Promise inside of tidy.'), n;
      });
    }, r.prototype.scopedRun = function (t, e, n) {
      t();
      try {
        var o = n();
        return e(), o;
      } catch (a) {
        throw e(), a;
      }
    }, r.prototype.nextTensorId = function () {
      return r.nextTensorId++;
    }, r.prototype.nextVariableId = function () {
      return r.nextVariableId++;
    }, r.prototype.clone = function (t) {
      var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype), n = { x: t };
      return this.addTapeNode(this.state.activeScope.name, n, [e], function (o) {
        return {
          x: function () {
            return o.toFloat();
          },
        };
      }, []), e;
    }, r.prototype.runKernel = function (t, e, n, o, a) {
      return this.runKernelFunc(null, e, null, t, n, o, a);
    }, r.prototype.shouldCheckForMemLeaks = function () {
      return this.ENV.getBool('IS_TEST');
    }, r.prototype.checkKernelForMemLeak = function (t, e, n) {
      var o = this.backend.numDataIds(), a = 0;
      n.forEach(function (u) {
        a += u.dtype === 'complex64' ? 3 : 1;
      });
      var i = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1], s = o - e - a - i;
      if (s > 0) throw new Error('Backend \'' + this.backendName + '\' has an internal memory leak (' + s + ' data ids) after running \'' + t + '\'');
    }, r.prototype.runKernelFunc = function (t, e, n, o, a, i, s) {
      var u, c = this;
      i === void 0 && (i = []), s === void 0 && (s = []);
      var l = [], h = this.isTapeOn();
      o == null && (o = this.state.activeScope != null ? this.state.activeScope.name : '');
      var f, d = function (y) {
        h && (l = y.map(function (x) {
          return c.keep(c.clone(x));
        }));
      }, p = this.state.numBytes, v = this.state.numTensors;
      this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
      var m, g = Zu(o, this.backendName);
      return f = g != null ? function () {
        var y = c.backend.numDataIds();
        m = g.kernelFunc({ inputs: e, attrs: a, backend: c.backend });
        var x = Array.isArray(m) ? m : [m];
        c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(o, y, x);
        var b = x.map(function (_) {
          var S = _.dataId, E = _.shape, I = _.dtype;
          return c.makeTensorFromDataId(S, E, I);
        }), w = b.filter(function (_, S) {
          return s[S];
        });
        return d((i || []).slice().concat(w)), b;
      } : function () {
        var y = c.backend.numDataIds();
        m = c.tidy(function () {
          return t(c.backend, d);
        });
        var x = Array.isArray(m) ? m : [m];
        return c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(o, y, x), x;
      }, this.scopedRun(function () {
        return c.state.kernelDepth++;
      }, function () {
        return c.state.kernelDepth--;
      }, function () {
        u = c.ENV.getBool('DEBUG') ? c.profiler.profileKernel(o, e, function () {
          return f();
        }) : f();
      }), h && this.addTapeNode(o, e, u, n, l), this.state.profiling && this.state.activeProfile.kernels.push({
        name: o,
        bytesAdded: this.state.numBytes - p,
        totalBytesSnapshot: this.state.numBytes,
        tensorsAdded: this.state.numTensors - v,
        totalTensorsSnapshot: this.state.numTensors,
        inputShapes: Object.keys(e).map(function (y) {
          return e[y].shape;
        }),
        outputShapes: u.map(function (y) {
          return y.shape;
        }),
      }), Array.isArray(m) ? u : u[0];
    }, r.prototype.makeTensor = function (t, e, n, o) {
      if (t == null) throw new Error('Values passed to engine.makeTensor() are null');
      n = n || 'float32', o = o || this.backend;
      var a = t;
      n === 'string' && En(t[0]) && (a = t.map(function (l) {
        return cc(l);
      }));
      var i = o.write(a, e, n), s = new Se(e, n, i, this.nextTensorId());
      if (this.incRef(s, o), n === 'string') {
        var u = this.state.tensorInfo.get(i), c = ic(a);
        this.state.numBytes += c - u.bytes, u.bytes = c;
      }
      return s;
    }, r.prototype.makeTensorFromDataId = function (t, e, n, o) {
      var a = new Se(e, n = n || 'float32', t, this.nextTensorId());
      return this.incRef(a, o), a;
    }, r.prototype.makeVariable = function (t, e, n, o) {
      e === void 0 && (e = !0), n = n || this.nextVariableId().toString(), o != null && o !== t.dtype && (t = t.asType(o));
      var a = new kr(t, e, n, this.nextTensorId());
      if (this.state.registeredVariables[a.name] != null) throw new Error('Variable with name ' + a.name + ' was already registered');
      return this.state.registeredVariables[a.name] = a, this.incRef(a, this.backend), a;
    }, r.prototype.incRef = function (t, e) {
      var n = this.state.tensorInfo.has(t.dataId) ? this.state.tensorInfo.get(t.dataId).refCount : 0;
      if (this.state.numTensors++, t.dtype === 'string' && this.state.numStringTensors++, n === 0) {
        this.state.numDataBuffers++;
        var o = 0;
        t.dtype !== 'complex64' && t.dtype !== 'string' && (o = t.size * Fi(t.dtype)), this.state.tensorInfo.set(t.dataId, {
          backend: e || this.backend,
          dtype: t.dtype,
          shape: t.shape,
          bytes: o,
          refCount: 0,
        }), this.state.numBytes += o;
      }
      this.state.tensorInfo.get(t.dataId).refCount++, t instanceof kr || this.track(t);
    }, r.prototype.disposeTensor = function (t) {
      if (this.state.tensorInfo.has(t.dataId)) {
        this.state.numTensors--, t.dtype === 'string' && this.state.numStringTensors--;
        var e = this.state.tensorInfo.get(t.dataId);
        e.refCount <= 1 ? (t.dtype !== 'complex64' && (this.state.numBytes -= e.bytes), this.state.numDataBuffers--, e.backend.disposeData(t.dataId), this.state.tensorInfo.delete(t.dataId)) : this.state.tensorInfo.get(t.dataId).refCount--;
      }
    }, r.prototype.disposeVariables = function () {
      for (var t in this.state.registeredVariables) {
        var e = this.state.registeredVariables[t];
        this.disposeVariable(e);
      }
    }, r.prototype.disposeVariable = function (t) {
      this.disposeTensor(t), this.state.registeredVariables[t.name] != null && delete this.state.registeredVariables[t.name];
    }, r.prototype.memory = function () {
      var t = this.backend.memory();
      return t.numTensors = this.state.numTensors, t.numDataBuffers = this.state.numDataBuffers, t.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (t.unreliable = !0, t.reasons == null && (t.reasons = []), t.reasons.push('Memory usage by string tensors is approximate (2 bytes per character)')), t;
    }, r.prototype.profile = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n;
        return Z(this, function (o) {
          return this.state.profiling = !0, e = this.state.numBytes, n = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = t(), this.state.profiling = !1, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function (a) {
            return a.totalBytesSnapshot;
          })), this.state.activeProfile.newBytes = this.state.numBytes - e, this.state.activeProfile.newTensors = this.state.numTensors - n, [2, this.state.activeProfile];
        });
      });
    }, r.prototype.isTapeOn = function () {
      return this.state.gradientDepth > 0 && this.state.kernelDepth === 0;
    }, r.prototype.addTapeNode = function (t, e, n, o, a) {
      var i = this, s = { id: this.state.nextTapeNodeId++, kernelName: t, inputs: e, outputs: n, saved: a }, u = td(t);
      u != null && (o = u.gradFunc), o != null && (s.gradient = function (c) {
        return c = c.map(function (l, h) {
          if (l == null) {
            var f = n[h], d = Ar(f.size, f.dtype);
            return i.makeTensor(d, f.shape, f.dtype);
          }
          return l;
        }), o(c.length > 1 ? c : c[0], a);
      }), this.state.activeTape.push(s);
    }, r.prototype.keep = function (t) {
      return t.kept = !0, t;
    }, r.prototype.startTape = function () {
      this.state.gradientDepth === 0 && (this.state.activeTape = []), this.state.gradientDepth++;
    }, r.prototype.endTape = function () {
      this.state.gradientDepth--;
    }, r.prototype.startScope = function (t) {
      var e = { track: [], name: 'unnamed scope', id: this.state.nextScopeId++ };
      t && (e.name = t), this.state.scopeStack.push(e), this.state.activeScope = e;
    }, r.prototype.endScope = function (t) {
      for (var e = this, n = Oi(t), o = new Set(n.map(function (u) {
        return u.id;
      })), a = 0; a < this.state.activeScope.track.length; a++) {
        var i = this.state.activeScope.track[a];
        i.kept || o.has(i.id) || i.dispose();
      }
      var s = this.state.scopeStack.pop();
      this.state.activeScope = this.state.scopeStack.length === 0 ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n.forEach(function (u) {
        u.kept || u.scopeId !== s.id || e.track(u);
      });
    }, r.prototype.gradients = function (t, e, n, o) {
      var a = this;
      if (o === void 0 && (o = !1), k(e.length > 0, function () {
        return 'gradients() received an empty list of xs.';
      }), n != null && n.dtype !== 'float32') throw new Error('dy must have \'float32\' dtype, but has \'' + n.dtype + '\'');
      var i = this.scopedRun(function () {
        return a.startTape();
      }, function () {
        return a.endTape();
      }, function () {
        return a.tidy('forward', t);
      });
      k(i instanceof Se, function () {
        return 'The result y returned by f() must be a tensor.';
      });
      var s = function (u, c, l) {
        for (var h = {}, f = {}, d = 0; d < c.length; d++) h[c[d].id] = !0;
        for (d = 0; d < u.length; d++) {
          var p = (_ = u[d]).inputs;
          for (var v in p) {
            for (var m = p[v], g = !1, y = 0; y < c.length; y++) if (h[m.id]) {
              _.outputs.forEach(function (R) {
                return h[R.id] = !0;
              }), g = !0, f[_.id] = !0;
              break;
            }
            if (g) break;
          }
        }
        var x = {};
        x[l.id] = !0;
        var b = {};
        for (d = u.length - 1; d >= 0; d--) for (p = (_ = u[d]).inputs, y = 0; y < _.outputs.length; y++) if (x[_.outputs[y].id]) {
          for (var v in p) x[p[v].id] = !0, b[_.id] = !0;
          break;
        }
        var w = [];
        for (d = 0; d < u.length; d++) {
          var _;
          if (f[(_ = u[d]).id] && b[_.id]) {
            var S = {};
            for (var v in _.inputs) {
              var E = _.inputs[v];
              h[E.id] && (S[v] = E);
            }
            var I = Object.assign({}, _);
            I.inputs = S, I.outputs = _.outputs, w.push(I);
          }
        }
        return w;
      }(this.state.activeTape, e, i);
      if (!o && s.length === 0 && e.length > 0) throw new Error('Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.');
      return this.tidy('backward', function () {
        var u, c, l = {};
        l[i.id] = n == null ? (u = i.shape, c = Mi(J(u), 'float32'), T.makeTensor(c, u, 'float32')) : n, function (f, d, p) {
          for (var v = function (g) {
            var y = d[g], x = [];
            if (y.outputs.forEach(function (S) {
              var E = f[S.id];
              E != null ? x.push(E) : x.push(null);
            }), y.gradient == null) throw new Error('Cannot compute gradient: gradient function not found for ' + y.kernelName + '.');
            var b = y.gradient(x), w = function (S) {
              if (!(S in b)) throw new Error('Cannot backprop through input ' + S + '. Available gradients found: ' + Object.keys(b) + '.');
              var E = p(function () {
                return b[S]();
              });
              if (E.dtype !== 'float32') throw new Error('Error in gradient for op ' + y.kernelName + '. The gradient of input ' + S + ' must have \'float32\' dtype, but has \'' + E.dtype + '\'');
              var I = y.inputs[S];
              if (!Be(E.shape, I.shape)) throw new Error('Error in gradient for op ' + y.kernelName + '. The gradient of input \'' + S + '\' has shape \'' + E.shape + '\', which does not match the shape of the input \'' + I.shape + '\'');
              if (f[I.id] == null) f[I.id] = E; else {
                var R = f[I.id];
                f[I.id] = R.add(E), R.dispose();
              }
            };
            for (var _ in y.inputs) w(_);
          }, m = d.length - 1; m >= 0; m--) v(m);
        }(l, s, function (f) {
          return a.tidy(f);
        });
        var h = e.map(function (f) {
          return l[f.id];
        });
        return a.state.gradientDepth === 0 && (a.state.activeTape.forEach(function (f) {
          for (var d = 0, p = f.saved; d < p.length; d++) p[d].dispose();
        }), a.state.activeTape = null), { value: i, grads: h };
      });
    }, r.prototype.customGrad = function (t) {
      var e = this;
      return k(zo(t), function () {
        return 'The f passed in customGrad(f) must be a function.';
      }), function () {
        for (var n, o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
        k(o.every(function (s) {
          return s instanceof Se;
        }), function () {
          return 'The args passed in customGrad(f)(x1, x2,...) must all be tensors';
        });
        var i = {};
        return o.forEach(function (s, u) {
          i[u] = s;
        }), e.runKernelFunc(function (s, u) {
          return k((n = t.apply(void 0, o.concat([u]))).value instanceof Se, function () {
            return 'The function f passed in customGrad(f) must return an object where `obj.value` is a tensor';
          }), k(zo(n.gradFunc), function () {
            return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.';
          }), n.value;
        }, i, function (s, u) {
          var c = n.gradFunc(s, u), l = Array.isArray(c) ? c : [c];
          k(l.length === o.length, function () {
            return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).';
          }), k(l.every(function (f) {
            return f instanceof Se;
          }), function () {
            return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.';
          });
          var h = {};
          return l.forEach(function (f, d) {
            h[d] = function () {
              return f;
            };
          }), h;
        });
      };
    }, r.prototype.readSync = function (t) {
      return this.state.tensorInfo.get(t).backend.readSync(t);
    }, r.prototype.read = function (t) {
      return this.state.tensorInfo.get(t).backend.read(t);
    }, r.prototype.time = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              return e = At(), [4, this.backend.time(t)];
            case 1:
              return (n = o.sent()).wallMs = At() - e, [2, n];
          }
        });
      });
    }, r.prototype.track = function (t) {
      return this.state.activeScope != null && (t.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t)), t;
    }, Object.defineProperty(r.prototype, 'registeredVariables', {
      get: function () {
        return this.state.registeredVariables;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.reset = function () {
      for (var t in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new Zs, this.registry) this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t];
      this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null;
    }, r.nextTensorId = 0, r.nextVariableId = 0, r;
  }(), T = function () {
    var r = function () {
      if (Ma == null) {
        var e = void 0;
        if (typeof window < 'u') e = window; else if (typeof global < 'u') e = global; else if (typeof process < 'u') e = process; else {
          if (typeof self > 'u') throw new Error('Could not find a global object');
          e = self;
        }
        Ma = e;
      }
      return Ma;
    }();
    if (r._tfengine == null) {
      var t = new Qf(r);
      r._tfengine = new sd(t);
    }
    return function (e) {
      $u = e;
    }(r._tfengine.ENV), Gt = function () {
      return r._tfengine;
    }, r._tfengine;
  }();

  function pc() {
    return typeof window < 'u' && window.document != null || typeof WorkerGlobalScope < 'u';
  }

  var rn = O();
  rn.registerFlag('DEBUG', function () {
    return !1;
  }, function (r) {
    r && console.warn('Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.');
  }), rn.registerFlag('IS_BROWSER', function () {
    return pc();
  }), rn.registerFlag('IS_NODE', function () {
    return typeof process < 'u' && process.versions !== void 0 && process.versions.node !== void 0;
  }), rn.registerFlag('IS_CHROME', function () {
    return typeof navigator < 'u' && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }), rn.registerFlag('PROD', function () {
    return !1;
  }), rn.registerFlag('TENSORLIKE_CHECK_SHAPE_CONSISTENCY', function () {
    return rn.getBool('DEBUG');
  }), rn.registerFlag('DEPRECATION_WARNINGS_ENABLED', function () {
    return !0;
  }), rn.registerFlag('IS_TEST', function () {
    return !1;
  });
  var Kr, xt, bt, Un = {}, Pa = {
    alpha: !1,
    antialias: !1,
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !1,
    depth: !1,
    stencil: !1,
    failIfMajorPerformanceCaveat: !0,
  };

  function vc(r, t) {
    Un[r] = t;
  }

  function Jt(r) {
    r in Un || (Un[r] = function (e) {
      if (e !== 1 && e !== 2) throw new Error('Cannot get WebGL rendering context, WebGL is disabled.');
      var n = function (o) {
        if (typeof OffscreenCanvas < 'u' && o === 2) return new OffscreenCanvas(300, 150);
        if (typeof document < 'u') return document.createElement('canvas');
        throw new Error('Cannot create a canvas in this context');
      }(e);
      return n.addEventListener('webglcontextlost', function (o) {
        o.preventDefault(), delete Un[e];
      }, !1), e === 1 ? n.getContext('webgl', Pa) || n.getContext('experimental-webgl', Pa) : n.getContext('webgl2', Pa);
    }(r));
    var t = Un[r];
    return t.isContextLost() ? (delete Un[r], Jt(r)) : (t.disable(t.DEPTH_TEST), t.disable(t.STENCIL_TEST), t.disable(t.BLEND), t.disable(t.DITHER), t.disable(t.POLYGON_OFFSET_FILL), t.disable(t.SAMPLE_COVERAGE), t.enable(t.SCISSOR_TEST), t.enable(t.CULL_FACE), t.cullFace(t.BACK), Un[r]);
  }

  function ia(r, t) {
    return [t, r];
  }

  function zr(r) {
    var t = J(r);
    return Uo(Math.ceil(t / 4));
  }

  function ro(r, t) {
    return [Math.max(1, Math.ceil(t / 2)), Math.max(1, Math.ceil(r / 2))];
  }

  function Bi(r, t) {
    var e, n, o, a, i, s, u, c, l, h = r;
    return O().getNumber('WEBGL_VERSION') === 2 ? (e = h.R32F, n = h.R16F, o = h.RGBA16F, a = h.RGBA32F, i = h.RED, s = 4, u = 1, c = h.HALF_FLOAT, l = h.FLOAT) : (e = r.RGBA, n = r.RGBA, o = r.RGBA, a = h.RGBA, i = r.RGBA, s = 4, u = 4, c = t != null ? t.HALF_FLOAT_OES : null, l = r.FLOAT), {
      internalFormatFloat: e,
      internalFormatHalfFloat: n,
      internalFormatPackedHalfFloat: o,
      internalFormatPackedFloat: a,
      textureFormatFloat: i,
      downloadTextureFormat: r.RGBA,
      downloadUnpackNumChannels: s,
      defaultNumChannels: u,
      textureTypeHalfFloat: c,
      textureTypeFloat: l,
    };
  }

  function Y(r, t, e) {
    var n = e();
    return t && function (o) {
      var a = o.getError();
      if (a !== o.NO_ERROR) throw new Error('WebGL Error: ' + gc(o, a));
    }(r), n;
  }

  (function (r) {
    r[r.DENSE = 0] = 'DENSE', r[r.SHARED_BATCH = 1] = 'SHARED_BATCH';
  })(Kr || (Kr = {})), function (r) {
    r[r.RENDER = 0] = 'RENDER', r[r.UPLOAD = 1] = 'UPLOAD', r[r.PIXELS = 2] = 'PIXELS', r[r.DOWNLOAD = 3] = 'DOWNLOAD';
  }(xt || (xt = {})), function (r) {
    r[r.UNPACKED_FLOAT16 = 0] = 'UNPACKED_FLOAT16', r[r.UNPACKED_FLOAT32 = 1] = 'UNPACKED_FLOAT32', r[r.PACKED_4X1_UNSIGNED_BYTE = 2] = 'PACKED_4X1_UNSIGNED_BYTE', r[r.PACKED_2X2_FLOAT32 = 3] = 'PACKED_2X2_FLOAT32', r[r.PACKED_2X2_FLOAT16 = 4] = 'PACKED_2X2_FLOAT16';
  }(bt || (bt = {}));
  var ud = 596e-10, cd = 65504;

  function mc(r) {
    return !!(O().getBool('WEBGL_RENDER_FLOAT32_ENABLED') || r === 0 || ud < Math.abs(r) && Math.abs(r) < cd);
  }

  function gc(r, t) {
    switch (t) {
      case r.NO_ERROR:
        return 'NO_ERROR';
      case r.INVALID_ENUM:
        return 'INVALID_ENUM';
      case r.INVALID_VALUE:
        return 'INVALID_VALUE';
      case r.INVALID_OPERATION:
        return 'INVALID_OPERATION';
      case r.INVALID_FRAMEBUFFER_OPERATION:
        return 'INVALID_FRAMEBUFFER_OPERATION';
      case r.OUT_OF_MEMORY:
        return 'OUT_OF_MEMORY';
      case r.CONTEXT_LOST_WEBGL:
        return 'CONTEXT_LOST_WEBGL';
      default:
        return 'Unknown error code ' + t;
    }
  }

  function Br(r, t, e) {
    return dn(r, t, function () {
      return r.getExtension(e);
    }, 'Extension "' + e + '" not supported on this browser.');
  }

  function yc(r, t, e) {
    var n = dn(r, t, function () {
      return r.createShader(r.VERTEX_SHADER);
    }, 'Unable to create vertex WebGLShader.');
    if (Y(r, t, function () {
      return r.shaderSource(n, e);
    }), Y(r, t, function () {
      return r.compileShader(n);
    }), r.getShaderParameter(n, r.COMPILE_STATUS) === !1) throw console.log(r.getShaderInfoLog(n)), new Error('Failed to compile vertex shader.');
    return n;
  }

  function bc(r, t, e) {
    var n = dn(r, t, function () {
      return r.createShader(r.FRAGMENT_SHADER);
    }, 'Unable to create fragment WebGLShader.');
    if (Y(r, t, function () {
      return r.shaderSource(n, e);
    }), Y(r, t, function () {
      return r.compileShader(n);
    }), r.getShaderParameter(n, r.COMPILE_STATUS) === !1) throw function (o, a) {
      var i = ld.exec(a);
      if (i == null) return console.log('Couldn\'t parse line number in error: ' + a), void console.log(o);
      for (var s = +i[1], u = o.split(`
`), c = u.length.toString().length + 2, l = u.map(function (m, g) {
        return jn((g + 1).toString(), c) + m;
      }), h = 0, f = 0; f < l.length; f++) h = Math.max(l[f].length, h);
      var d = l.slice(0, s - 1), p = l.slice(s - 1, s), v = l.slice(s);
      console.log(d.join(`
`)), console.log(a.split(`
`)[0]), console.log('%c ' + jn(p[0], h), 'border:1px solid red; background-color:#e3d2d2; color:#a61717'), console.log(v.join(`
`));
    }(e, r.getShaderInfoLog(n)), new Error('Failed to compile fragment shader.');
    return n;
  }

  var Ao, Do, ld = /ERROR: [0-9]+:([0-9]+):/g;

  function xc(r, t) {
    return dn(r, t, function () {
      return r.createProgram();
    }, 'Unable to create WebGLProgram.');
  }

  function wc(r, t, e) {
    if (Y(r, t, function () {
      return r.linkProgram(e);
    }), r.getProgramParameter(e, r.LINK_STATUS) === !1) throw console.log(r.getProgramInfoLog(e)), new Error('Failed to link vertex and fragment shaders.');
  }

  function To(r, t, e) {
    if (Y(r, t, function () {
      return r.validateProgram(e);
    }), r.getProgramParameter(e, r.VALIDATE_STATUS) === !1) throw console.log(r.getProgramInfoLog(e)), new Error('Shader program validation failed.');
  }

  function _c(r, t, e) {
    var n = dn(r, t, function () {
      return r.createBuffer();
    }, 'Unable to create WebGLBuffer');
    return Y(r, t, function () {
      return r.bindBuffer(r.ARRAY_BUFFER, n);
    }), Y(r, t, function () {
      return r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW);
    }), n;
  }

  function Cc(r, t, e) {
    var n = dn(r, t, function () {
      return r.createBuffer();
    }, 'Unable to create WebGLBuffer');
    return Y(r, t, function () {
      return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, n);
    }), Y(r, t, function () {
      return r.bufferData(r.ELEMENT_ARRAY_BUFFER, e, r.STATIC_DRAW);
    }), n;
  }

  function Ec(r, t) {
    return dn(r, t, function () {
      return r.createTexture();
    }, 'Unable to create WebGLTexture.');
  }

  function kc(r, t) {
    var e = O().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    if (r <= 0 || t <= 0) {
      var n = '[' + r + 'x' + t + ']';
      throw new Error('Requested texture size ' + n + ' is invalid.');
    }
    if (r > e || t > e) throw n = '[' + r + 'x' + t + ']', new Error('Requested texture size ' + n + ' greater than WebGL maximum on this browser / GPU ' + ('[' + e + 'x' + e + ']') + '.');
  }

  function Ic(r, t) {
    return dn(r, t, function () {
      return r.createFramebuffer();
    }, 'Unable to create WebGLFramebuffer.');
  }

  function di(r, t, e, n, o, a, i, s) {
    var u = r.getAttribLocation(e, n);
    return u !== -1 && (Y(r, t, function () {
      return r.bindBuffer(r.ARRAY_BUFFER, o);
    }), Y(r, t, function () {
      return r.vertexAttribPointer(u, a, r.FLOAT, !1, i, s);
    }), Y(r, t, function () {
      return r.enableVertexAttribArray(u);
    }), !0);
  }

  function Rc(r, t, e, n) {
    Fc(r, n), Y(r, t, function () {
      return r.activeTexture(r.TEXTURE0 + n);
    }), Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, e);
    });
  }

  function Sc(r, t, e, n) {
    return dn(r, t, function () {
      return r.getUniformLocation(e, n);
    }, 'uniform "' + n + '" not present in program.');
  }

  function Ac(r, t, e) {
    return r.getUniformLocation(t, e);
  }

  function Dc(r, t, e, n, o, a) {
    Y(r, t, function () {
      return Rc(r, t, n, a);
    }), Y(r, t, function () {
      return r.uniform1i(o, a);
    });
  }

  function Fo(r, t, e, n) {
    Y(r, t, function () {
      return r.bindFramebuffer(r.FRAMEBUFFER, n);
    }), Y(r, t, function () {
      return r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0);
    });
  }

  function pi(r, t, e) {
    Y(r, t, function () {
      return r.bindFramebuffer(r.FRAMEBUFFER, e);
    }), Y(r, t, function () {
      return r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, null, 0);
    });
  }

  function Lr(r) {
    var t = r.checkFramebufferStatus(r.FRAMEBUFFER);
    if (t !== r.FRAMEBUFFER_COMPLETE) throw new Error('Error binding framebuffer: ' + Tc(r, t));
  }

  function Tc(r, t) {
    switch (t) {
      case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
      case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
      case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
      case r.FRAMEBUFFER_UNSUPPORTED:
        return 'FRAMEBUFFER_UNSUPPORTED';
      default:
        return 'unknown error ' + t;
    }
  }

  function dn(r, t, e, n) {
    var o = Y(r, t, function () {
      return e();
    });
    if (o == null) throw new Error(n);
    return o;
  }

  function Fc(r, t) {
    var e = r.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, n = t + r.TEXTURE0;
    if (n < r.TEXTURE0 || n > e) throw new Error('textureUnit must be in ' + ('[gl.TEXTURE0, gl.TEXTURE' + e + ']') + '.');
  }

  function Yr(r, t) {
    return t === void 0 && (t = 2), J(r.slice(0, r.length - t));
  }

  function $r(r) {
    if (r.length === 0) throw Error('Cannot get rows and columns of an empty shape array.');
    return [r.length > 1 ? r[r.length - 2] : 1, r[r.length - 1]];
  }

  function No(r) {
    var t = [1, 1, 1];
    return r.length === 0 || r.length === 1 && r[0] === 1 || (t = [Yr(r)].concat($r(r))), t;
  }

  function Nc(r, t) {
    var e;
    t === void 0 && (t = !1);
    var n = O().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    if (t && (n *= 2, (r = r.map(function (c, l) {
      return l >= r.length - 2 ? Ti(r[l]) : r[l];
    })).length === 1 && (r = [2, r[0]])), r.length !== 2) {
      var o = _n(r);
      r = o.newShape;
    }
    var a = J(r);
    if (r.length <= 1 && a <= n) return [1, a];
    if (r.length === 2 && r[0] <= n && r[1] <= n) return r;
    if (r.length === 3 && r[0] * r[1] <= n && r[2] <= n) return [r[0] * r[1], r[2]];
    if (r.length === 3 && r[0] <= n && r[1] * r[2] <= n) return [r[0], r[1] * r[2]];
    if (r.length === 4 && r[0] * r[1] * r[2] <= n && r[3] <= n) return [r[0] * r[1] * r[2], r[3]];
    if (r.length === 4 && r[0] <= n && r[1] * r[2] * r[3] <= n) return [r[0], r[1] * r[2] * r[3]];
    if (t) {
      var i = Yr(r), s = 2, u = 2;
      return r.length && (s = (e = $r(r))[0], u = e[1]), Uo(a = i * (s / 2) * (u / 2)).map(function (c) {
        return 2 * c;
      });
    }
    return Uo(a);
  }

  function mo(r) {
    return r % 2 == 0;
  }

  function Wr(r, t) {
    if (Be(r = r.slice(-2), t = t.slice(-2)) || !r.length || !t.length || r[0] === 0 || r[1] === 0 || t[0] === 0 || t[1] === 0) return !0;
    if (r.length !== t.length) {
      var e = r.slice(-1)[0], n = t.slice(-1)[0];
      if (e === n || mo(e) && mo(n) && (r[0] === 1 || t[0] === 1)) return !0;
    }
    return r[1] === t[1] && mo(r[0]) && mo(t[0]);
  }

  function Mc(r) {
    if (Ao == null) {
      var t = Jt(r);
      Ao = t.getParameter(t.MAX_TEXTURE_SIZE);
    }
    return Ao;
  }

  function Pc(r) {
    if (Do == null) {
      var t = Jt(r);
      Do = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    }
    return Math.min(16, Do);
  }

  function Oc(r) {
    if (r === 0) return 0;
    var t = Jt(r);
    return wt(t, 'EXT_disjoint_timer_query_webgl2') && r === 2 ? 2 : wt(t, 'EXT_disjoint_timer_query') ? 1 : 0;
  }

  function wt(r, t) {
    return r.getExtension(t) != null;
  }

  function vi(r) {
    try {
      if (Jt(r) != null) return !0;
    } catch {
      return !1;
    }
    return !1;
  }

  function Bc(r) {
    if (r === 0) return !1;
    var t = Jt(r);
    if (r === 1) {
      if (!wt(t, 'OES_texture_float')) return !1;
    } else if (!wt(t, 'EXT_color_buffer_float')) return !1;
    return mi(t);
  }

  function Lc(r) {
    if (r === 0) return !1;
    var t = Jt(r);
    if (r !== 1) {
      if (wt(t, 'EXT_color_buffer_float')) return mi(t);
      if (wt(t, 'EXT_color_buffer_half_float')) {
        var e = t.getExtension('EXT_color_buffer_half_float');
        return function (n, o) {
          var a = Bi(n, o), i = n.createTexture();
          n.bindTexture(n.TEXTURE_2D, i), n.texImage2D(n.TEXTURE_2D, 0, a.internalFormatHalfFloat, 1, 1, 0, a.textureFormatFloat, a.textureTypeHalfFloat, null);
          var s = n.createFramebuffer();
          n.bindFramebuffer(n.FRAMEBUFFER, s), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, i, 0);
          var u = n.checkFramebufferStatus(n.FRAMEBUFFER) === n.FRAMEBUFFER_COMPLETE;
          return n.bindTexture(n.TEXTURE_2D, null), n.bindFramebuffer(n.FRAMEBUFFER, null), n.deleteTexture(i), n.deleteFramebuffer(s), u;
        }(t, e);
      }
      return !1;
    }
    return !!wt(t, 'OES_texture_float') && !!wt(t, 'WEBGL_color_buffer_float') && mi(t);
  }

  function mi(r) {
    var t = Bi(r), e = r.createTexture();
    r.bindTexture(r.TEXTURE_2D, e), r.texImage2D(r.TEXTURE_2D, 0, t.internalFormatFloat, 1, 1, 0, t.textureFormatFloat, t.textureTypeFloat, null);
    var n = r.createFramebuffer();
    r.bindFramebuffer(r.FRAMEBUFFER, n), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0);
    var o = r.checkFramebufferStatus(r.FRAMEBUFFER) === r.FRAMEBUFFER_COMPLETE;
    return r.bindTexture(r.TEXTURE_2D, null), r.bindFramebuffer(r.FRAMEBUFFER, null), r.deleteTexture(e), r.deleteFramebuffer(n), o;
  }

  function Wc(r) {
    return r === 2 && Jt(r).fenceSync != null;
  }

  var hd = Object.freeze({
    callAndCheck: Y,
    canBeRepresented: mc,
    getWebGLErrorMessage: gc,
    getExtensionOrThrow: Br,
    createVertexShader: yc,
    createFragmentShader: bc,
    createProgram: xc,
    linkProgram: wc,
    validateProgram: To,
    createStaticVertexBuffer: _c,
    createStaticIndexBuffer: Cc,
    getNumChannels: function () {
      return O().getNumber('WEBGL_VERSION') === 2 ? 1 : 4;
    },
    createTexture: Ec,
    validateTextureSize: kc,
    createFramebuffer: Ic,
    bindVertexBufferToProgramAttribute: di,
    bindTextureUnit: Rc,
    unbindTextureUnit: function (r, t, e) {
      Fc(r, e), Y(r, t, function () {
        return r.activeTexture(r.TEXTURE0 + e);
      }), Y(r, t, function () {
        return r.bindTexture(r.TEXTURE_2D, null);
      });
    },
    getProgramUniformLocationOrThrow: Sc,
    getProgramUniformLocation: Ac,
    bindTextureToProgramUniformSampler: Dc,
    bindCanvasToFramebuffer: function (r, t) {
      Y(r, t, function () {
        return r.bindFramebuffer(r.FRAMEBUFFER, null);
      }), Y(r, t, function () {
        return r.viewport(0, 0, r.canvas.width, r.canvas.height);
      }), Y(r, t, function () {
        return r.scissor(0, 0, r.canvas.width, r.canvas.height);
      });
    },
    bindColorTextureToFramebuffer: Fo,
    unbindColorTextureFromFramebuffer: pi,
    validateFramebuffer: Lr,
    getFramebufferErrorMessage: Tc,
    getBatchDim: Yr,
    getRowsCols: $r,
    getShapeAs3D: No,
    getTextureShapeFromLogicalShape: Nc,
    isReshapeFree: Wr,
    getWebGLMaxTextureSize: Mc,
    resetMaxTextureSize: function () {
      Ao = null;
    },
    resetMaxTexturesInShader: function () {
      Do = null;
    },
    getMaxTexturesInShader: Pc,
    getWebGLDisjointQueryTimerVersion: Oc,
    hasExtension: wt,
    isWebGLVersionEnabled: vi,
    isCapableOfRenderingToFloatTexture: Bc,
    isDownloadFloatTextureEnabled: Lc,
    isWebGLFenceEnabled: Wc,
  }), ne = O();

  function Uc(r) {
    O().getBool('DEPRECATION_WARNINGS_ENABLED') && console.warn(r + ' You can disable deprecation warnings with tf.disableDeprecationWarnings().');
  }

  function K(r, t) {
    return T.tidy(r, t);
  }

  function mt(r) {
    Oi(r).forEach(function (t) {
      return t.dispose();
    });
  }

  function fd(r) {
    return T.keep(r);
  }

  function Go() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    O().getBool('IS_TEST') || console.warn.apply(console, r);
  }

  function Kt(r, t) {
    var e = r;
    if (Je(r)) return t === 'string' ? [] : [r.length];
    if (!Array.isArray(r)) return [];
    for (var n = []; Array.isArray(e) || Je(e) && t !== "string";) n.push(e.length), e = e[0];
    return Array.isArray(r) && O().getBool('TENSORLIKE_CHECK_SHAPE_CONSISTENCY') && function o(a, i, s) {
      if (s = s || [], !Array.isArray(a) && !Je(a)) return void k(i.length === 0, function () {
        return 'Element arr[' + s.join('][') + '] is a primitive, but should be an array/TypedArray of ' + i[0] + ' elements';
      });
      k(i.length > 0, function () {
        return 'Element arr[' + s.join('][') + '] should be a primitive, but is an array of ' + a.length + ' elements';
      }), k(a.length === i[0], function () {
        return 'Element arr[' + s.join('][') + '] should have ' + i[0] + ' elements, but has ' + a.length + ' elements';
      });
      for (var u = i.slice(1), c = 0; c < a.length; ++c) o(a[c], u, s.concat(c));
    }(r, n, []), n;
  }

  function Js(r, t, e, n) {
    if (r != null && (r !== 'numeric' && r !== t || r === 'numeric' && t === 'string')) throw new Error('Argument \'' + e + '\' passed to \'' + n + '\' must be ' + r + ' tensor, but got ' + t + ' tensor');
  }

  function C(r, t, e, n) {
    if (n === void 0 && (n = 'numeric'), r instanceof Se) return Js(n, r.dtype, t, e), r;
    var o = Sr(r);
    if (o !== 'string' && ['bool', 'int32', 'float32'].indexOf(n) >= 0 && (o = n), Js(n, o, t, e), r == null || !Je(r) && !Array.isArray(r) && typeof r != 'number' && typeof r != 'boolean' && typeof r != 'string') {
      var a = r == null ? 'null' : r.constructor.name;
      throw new Error('Argument \'' + t + '\' passed to \'' + e + '\' must be a Tensor or TensorLike, but got \'' + a + '\'');
    }
    var i = Kt(r, o);
    Je(r) || Array.isArray(r) || (r = [r]);
    var s = o !== 'string' ? Ni(r, o, O().getBool('DEBUG')) : ln(r, [], !0);
    return T.makeTensor(s, i, o);
  }

  function qo(r, t, e, n) {
    if (n === void 0 && (n = 'numeric'), !Array.isArray(r)) throw new Error('Argument ' + t + ' passed to ' + e + ' must be a `Tensor[]` or `TensorLike[]`');
    return r.map(function (o, a) {
      return C(o, t + '[' + a + ']', e);
    }, n);
  }

  function Li(r, t) {
    for (var e = 0; e < r.length; ++e) if (r[r.length - e - 1] !== t - 1 - e) return !1;
    return !0;
  }

  function zc(r, t, e) {
    for (var n = r.length + t.length, o = [], a = 0, i = 0, s = 0; s < n; s++) e.indexOf(s) === -1 ? o.push(r[a++]) : o.push(t[i++]);
    return o;
  }

  function $e(r, t) {
    for (var e = [], n = r.length, o = 0; o < n; o++) t.indexOf(o) === -1 && e.push(r[o]);
    return [e, t.map(function (a) {
      return r[a];
    })];
  }

  function lt(r, t) {
    return zc(r, t.map(function (e) {
      return 1;
    }), t);
  }

  function ft(r, t, e) {
    k(Li(t, e), function () {
      return r + ' supports only inner-most axes for now. Got axes ' + t + ' and rank-' + e + ' input.';
    });
  }

  function Pt(r, t) {
    if (Li(r, t)) return null;
    for (var e = [], n = 0; n < t; ++n) r.indexOf(n) === -1 && e.push(n);
    return r.forEach(function (o) {
      return e.push(o);
    }), e;
  }

  function sa(r) {
    return r.map(function (t, e) {
      return [e, t];
    }).sort(function (t, e) {
      return t[1] - e[1];
    }).map(function (t) {
      return t[0];
    });
  }

  function Ot(r, t) {
    for (var e = [], n = t - r; n < t; ++n) e.push(n);
    return e;
  }

  function Vc(r, t) {
    var e = r[0].length;
    r.forEach(function (o, a) {
      k(o.length === e, function () {
        return 'Error in concat' + e + 'D: rank of tensors[' + a + '] must be the same as the rank of the rest (' + e + ')';
      });
    }), k(t >= 0 && t < e, function () {
      return 'Error in concat' + e + 'D: axis must be between 0 and ' + (e - 1) + '.';
    });
    var n = r[0];
    r.forEach(function (o, a) {
      for (var i = 0; i < e; i++) k(i === t || o[i] === n[i], function () {
        return 'Error in concat' + e + 'D: Shape of tensors[' + a + '] (' + o + ') does not match the shape of the rest (' + n + ') along the non-concatenated axis ' + a + '.';
      });
    });
  }

  function $n(r, t) {
    for (var e = r[0].slice(), n = 1; n < r.length; n++) e[t] += r[n][t];
    return e;
  }

  function A(r) {
    var t = Object.keys(r);
    if (t.length !== 1) throw new Error('Please provide an object with a single key (operation name) mapping to a function. Got an object with ' + t.length + ' keys.');
    var e = t[0], n = r[e];
    e.endsWith('_') && (e = e.substring(0, e.length - 1));
    var o = function () {
      for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
      T.startScope(e);
      try {
        var s = n.apply(void 0, a);
        return s instanceof Promise && console.error('Cannot return a Promise inside of tidy.'), T.endScope(s), s;
      } catch (u) {
        throw T.endScope(null), u;
      }
    };
    return Object.defineProperty(o, 'name', { value: e, configurable: !0 }), o;
  }

  ne.registerFlag('HAS_WEBGL', function () {
    return ne.getNumber('WEBGL_VERSION') > 0;
  }), ne.registerFlag('WEBGL_VERSION', function () {
    return vi(2) ? 2 : vi(1) ? 1 : 0;
  }), ne.registerFlag('WEBGL_BUFFER_SUPPORTED', function () {
    return ne.get('WEBGL_VERSION') === 2;
  }), ne.registerFlag('WEBGL_CPU_FORWARD', function () {
    return !0;
  }), ne.registerFlag('WEBGL_FORCE_F16_TEXTURES', function () {
    return !1;
  }), ne.registerFlag('WEBGL_PACK', function () {
    return ne.getBool('HAS_WEBGL');
  }), ne.registerFlag('WEBGL_PACK_NORMALIZATION', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_CLIP', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_DEPTHWISECONV', function () {
    return !1;
  }), ne.registerFlag('WEBGL_PACK_BINARY_OPERATIONS', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_UNARY_OPERATIONS', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_ARRAY_OPERATIONS', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_IMAGE_OPERATIONS', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_PACK_REDUCE', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_LAZILY_UNPACK', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_CONV_IM2COL', function () {
    return ne.getBool('WEBGL_PACK');
  }), ne.registerFlag('WEBGL_MAX_TEXTURE_SIZE', function () {
    return Mc(ne.getNumber('WEBGL_VERSION'));
  }), ne.registerFlag('WEBGL_MAX_TEXTURES_IN_SHADER', function () {
    return Pc(ne.getNumber('WEBGL_VERSION'));
  }), ne.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION', function () {
    var r = ne.getNumber('WEBGL_VERSION');
    return r === 0 ? 0 : Oc(r);
  }), ne.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE', function () {
    return ne.getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 && (r = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0, 4))));
    var r;
  }), ne.registerFlag('WEBGL_RENDER_FLOAT32_CAPABLE', function () {
    return Bc(ne.getNumber('WEBGL_VERSION'));
  }), ne.registerFlag('WEBGL_RENDER_FLOAT32_ENABLED', function () {
    return !ne.getBool('WEBGL_FORCE_F16_TEXTURES') && ne.getBool('WEBGL_RENDER_FLOAT32_CAPABLE');
  }), ne.registerFlag('WEBGL_DOWNLOAD_FLOAT_ENABLED', function () {
    return Lc(ne.getNumber('WEBGL_VERSION'));
  }), ne.registerFlag('WEBGL_FENCE_API_ENABLED', function () {
    return Wc(ne.getNumber('WEBGL_VERSION'));
  }), ne.registerFlag('WEBGL_SIZE_UPLOAD_UNIFORM', function () {
    return ne.getBool('WEBGL_RENDER_FLOAT32_ENABLED') ? 4 : 0;
  }), fc = Uc;
  var Ye = A({
    complex_: function (r, t) {
      var e = C(r, 'real', 'complex'), n = C(t, 'imag', 'complex');
      return xe(e.shape, n.shape, 'real and imag shapes, ' + e.shape + ' and ' + n.shape + ', must match in call to tf.complex().'), T.runKernelFunc(function (o) {
        return o.complex(e, n);
      }, { $real: e, $imag: n });
    },
  }), It = A({
    real_: function (r) {
      var t = C(r, 'input', 'real');
      return T.runKernelFunc(function (e) {
        return e.real(t);
      }, { $input: t });
    },
  }), qt = A({
    imag_: function (r) {
      var t = C(r, 'input', 'imag');
      return T.runKernelFunc(function (e) {
        return e.imag(t);
      }, { $input: t });
    },
  });

  function Ze(r, t, e) {
    return Pn(r, t, Kt(r, e), e);
  }

  function Pn(r, t, e, n) {
    if (n == null && (n = Sr(r)), n === 'complex64') throw new Error('Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).');
    if (!Je(r) && !Array.isArray(r) && typeof r != 'number' && typeof r != 'boolean' && typeof r != 'string') throw new Error('values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray');
    if (t != null) {
      Pi(t);
      var o = J(t), a = J(e);
      k(o === a, function () {
        return 'Based on the provided shape, [' + t + '], the tensor should have ' + o + ' values but has ' + a;
      });
      for (var i = 0; i < e.length; ++i) {
        var s = e[i], u = i !== e.length - 1 || s !== J(t.slice(i));
        k(e[i] === t[i] || !u, function () {
          return 'Error creating a new Tensor. Inferred shape (' + e + ') does not match the provided shape (' + t + '). ';
        });
      }
    }
    return Je(r) || Array.isArray(r) || (r = [r]), t = t || e, r = n !== 'string' ? Ni(r, n, O().getBool('DEBUG')) : ln(r, [], !0), T.makeTensor(r, t, n);
  }

  function X(r, t) {
    if ((Je(r) && t !== 'string' || Array.isArray(r)) && t !== 'complex64') throw new Error('Error creating a new Scalar: value must be a primitive (number|boolean|string)');
    if (t === 'string' && Je(r) && !(r instanceof Uint8Array)) throw new Error('When making a scalar from encoded string, the value must be `Uint8Array`.');
    return Pn(r, [], [], t);
  }

  function Oe(r, t) {
    er(r);
    var e = Kt(r, t);
    if (e.length !== 1) throw new Error('tensor1d() requires values to be a flat/TypedArray');
    return Pn(r, null, e, t);
  }

  function In(r, t, e) {
    if (er(r), t != null && t.length !== 2) throw new Error('tensor2d() requires shape to have two numbers');
    var n = Kt(r, e);
    if (n.length !== 2 && n.length !== 1) throw new Error('tensor2d() requires values to be number[][] or flat/TypedArray');
    if (n.length === 1 && t == null) throw new Error('tensor2d() requires shape to be provided when `values` are a flat/TypedArray');
    return Pn(r, t, n, e);
  }

  function Wi(r, t, e) {
    if (er(r), t != null && t.length !== 3) throw new Error('tensor3d() requires shape to have three numbers');
    var n = Kt(r, e);
    if (n.length !== 3 && n.length !== 1) throw new Error('tensor3d() requires values to be number[][][] or flat/TypedArray');
    if (n.length === 1 && t == null) throw new Error('tensor3d() requires shape to be provided when `values` are a flat array');
    return Pn(r, t, n, e);
  }

  function dt(r, t, e) {
    if (er(r), t != null && t.length !== 4) throw new Error('tensor4d() requires shape to have four numbers');
    var n = Kt(r, e);
    if (n.length !== 4 && n.length !== 1) throw new Error('tensor4d() requires values to be number[][][][] or flat/TypedArray');
    if (n.length === 1 && t == null) throw new Error('tensor4d() requires shape to be provided when `values` are a flat array');
    return Pn(r, t, n, e);
  }

  function dd(r, t, e) {
    if (er(r), t != null && t.length !== 5) throw new Error('tensor5d() requires shape to have five numbers');
    var n = Kt(r, e);
    if (n.length !== 5 && n.length !== 1) throw new Error('tensor5d() requires values to be number[][][][][] or flat/TypedArray');
    if (n.length === 1 && t == null) throw new Error('tensor5d() requires shape to be provided when `values` are a flat array');
    return Pn(r, t, n, e);
  }

  function pd(r, t, e) {
    if (er(r), t != null && t.length !== 6) throw new Error('tensor6d() requires shape to have six numbers');
    var n = Kt(r, e);
    if (n.length !== 6 && n.length !== 1) throw new Error('tensor6d() requires values to be number[][][][][][] or flat/TypedArray');
    if (n.length === 1 && t == null) throw new Error('tensor6d() requires shape to be provided when `values` are a flat array');
    return Pn(r, t = t || n, n, e);
  }

  function vd(r, t, e, n) {
    return t === void 0 && (t = !0), T.makeVariable(r, t, e, n);
  }

  function Dr(r, t) {
    if (t === void 0 && (t = 'float32'), t === 'complex64') {
      var e = Dr(r, 'float32'), n = Ee(r, 'float32');
      return Ye(e, n);
    }
    var o = Mi(J(r), t);
    return T.makeTensor(o, r, t);
  }

  function Ee(r, t) {
    if (t === void 0 && (t = 'float32'), t === 'complex64') {
      var e = Ee(r, 'float32'), n = Ee(r, 'float32');
      return Ye(e, n);
    }
    var o = Ar(J(r), t);
    return T.makeTensor(o, r, t);
  }

  function Xt(r, t, e) {
    return T.runKernelFunc(function (n) {
      return n.fill(r, t, e);
    }, {});
  }

  function md(r, t, e) {
    if (e <= 0) throw new Error('The number of values should be positive.');
    return T.runKernelFunc(function (n) {
      return n.linspace(r, t, e);
    }, {});
  }

  function Ho(r, t, e, n) {
    if (e === void 0 && (e = 1), n === void 0 && (n = 'float32'), e === 0) throw new Error('Cannot have a step of zero');
    if (r === t || r < t && e < 0 || t < r && e > 1) return Ee([0], n);
    var o = Ar(Math.abs(Math.ceil((t - r) / e)), n);
    t < r && e === 1 && (e = -1), o[0] = r;
    for (var a = 1; a < o.length; a++) o[a] = o[a - 1] + e;
    return Oe(o, n);
  }

  var Gc = A({
    onesLike_: function (r) {
      var t = C(r, 'x', 'onesLike');
      if (t.dtype === 'complex64') {
        var e = Gc(It(t)), n = ge(qt(t));
        return Ye(e, n);
      }
      return T.runKernelFunc(function (o) {
        return o.onesLike(t);
      }, { $x: t }, function (o, a) {
        return {
          $x: function () {
            return ge(o);
          },
        };
      });
    },
  }), ge = A({
    zerosLike_: function (r) {
      var t = C(r, 'x', 'zerosLike');
      return T.runKernelFunc(function (e) {
        return e.zerosLike(t);
      }, { $x: t }, function (e, n) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), Ve = A({
    concat_: function (r, t) {
      t === void 0 && (t = 0), k(r.length >= 1, function () {
        return 'Pass at least one tensor to concat';
      });
      var e = qo(r, 'tensors', 'concat');
      e[0].dtype === 'complex64' && e.forEach(function (s) {
        if (s.dtype !== 'complex64') throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ` + s.dtype + '. ');
      }), t = We(t, e[0].shape)[0];
      var n = $n(e.map(function (s) {
        return s.shape;
      }), t);
      if (J(n) === 0) return Ze([], n);
      if ((e = e.filter(function (s) {
        return s.size > 0;
      })).length === 1) return e[0];
      var o = e.map(function (s) {
        return s.shape;
      });
      Vc(o, t);
      var a = e, i = { axis: t };
      return T.runKernelFunc(function (s) {
        return s.concat(e, t);
      }, a, function (s) {
        var u = o.map(function (c) {
          return c[t];
        });
        return Ui(s, u, t).map(function (c) {
          return function () {
            return c;
          };
        });
      }, 'Concat', i);
    },
  }), gd = A({
    concat1d_: function (r) {
      return Ve(r, 0);
    },
  }), yd = A({
    concat2d_: function (r, t) {
      return Ve(r, t);
    },
  }), bd = A({
    concat3d_: function (r, t) {
      return Ve(r, t);
    },
  }), xd = A({
    concat4d_: function (r, t) {
      return Ve(r, t);
    },
  }), Ui = A({
    split_: function (r, t, e) {
      e === void 0 && (e = 0);
      var n, o = C(r, 'x', 'split');
      return e = We(e, o.shape)[0], typeof t == 'number' ? (k(o.shape[e] % t == 0, function () {
        return 'Number of splits must evenly divide the axis.';
      }), n = new Array(t).fill(o.shape[e] / t)) : (k(o.shape[e] === t.reduce(function (a, i) {
        return a + i;
      }), function () {
        return 'The sum of sizes must match the size of the axis dimension.';
      }), n = t), T.runKernelFunc(function (a) {
        return a.split(o, n, e);
      }, { $x: o }, function (a) {
        return {
          $x: function () {
            return Ve(a, e);
          },
        };
      });
    },
  });

  function tr(r, t) {
    return r(t = { exports: {} }, t.exports), t.exports;
  }

  var wd = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u, c = this, l = (u = 4022871197, function (h) {
          h = h.toString();
          for (var f = 0; f < h.length; f++) {
            var d = .02519603282416938 * (u += h.charCodeAt(f));
            d -= u = d >>> 0, u = (d *= u) >>> 0, u += 4294967296 * (d -= u);
          }
          return 23283064365386963e-26 * (u >>> 0);
        });
        c.next = function () {
          var h = 2091639 * c.s0 + 23283064365386963e-26 * c.c;
          return c.s0 = c.s1, c.s1 = c.s2, c.s2 = h - (c.c = 0 | h);
        }, c.c = 1, c.s0 = l(' '), c.s1 = l(' '), c.s2 = l(' '), c.s0 -= l(s), c.s0 < 0 && (c.s0 += 1), c.s1 -= l(s), c.s1 < 0 && (c.s1 += 1), c.s2 -= l(s), c.s2 < 0 && (c.s2 += 1), l = null;
      }

      function a(s, u) {
        return u.c = s.c, u.s0 = s.s0, u.s1 = s.s1, u.s2 = s.s2, u;
      }

      function i(s, u) {
        var c = new o(s), l = u && u.state, h = c.next;
        return h.int32 = function () {
          return 4294967296 * c.next() | 0;
        }, h.double = function () {
          return h() + 11102230246251565e-32 * (2097152 * h() | 0);
        }, h.quick = h, l && (typeof l == 'object' && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.alea = i;
    })(0, r, !1);
  }), _d = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u = this, c = '';
        u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.next = function () {
          var h = u.x ^ u.x << 11;
          return u.x = u.y, u.y = u.z, u.z = u.w, u.w ^= u.w >>> 19 ^ h ^ h >>> 8;
        }, s === (0 | s) ? u.x = s : c += s;
        for (var l = 0; l < c.length + 64; l++) u.x ^= 0 | c.charCodeAt(l), u.next();
      }

      function a(s, u) {
        return u.x = s.x, u.y = s.y, u.z = s.z, u.w = s.w, u;
      }

      function i(s, u) {
        var c = new o(s), l = u && u.state, h = function () {
          return (c.next() >>> 0) / 4294967296;
        };
        return h.double = function () {
          do var f = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152; while (f === 0);
          return f;
        }, h.int32 = c.next, h.quick = h, l && (typeof l == 'object' && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.xor128 = i;
    })(0, r, !1);
  }), Cd = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u = this, c = '';
        u.next = function () {
          var h = u.x ^ u.x >>> 2;
          return u.x = u.y, u.y = u.z, u.z = u.w, u.w = u.v, (u.d = u.d + 362437 | 0) + (u.v = u.v ^ u.v << 4 ^ h ^ h << 1) | 0;
        }, u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.v = 0, s === (0 | s) ? u.x = s : c += s;
        for (var l = 0; l < c.length + 64; l++) u.x ^= 0 | c.charCodeAt(l), l == c.length && (u.d = u.x << 10 ^ u.x >>> 4), u.next();
      }

      function a(s, u) {
        return u.x = s.x, u.y = s.y, u.z = s.z, u.w = s.w, u.v = s.v, u.d = s.d, u;
      }

      function i(s, u) {
        var c = new o(s), l = u && u.state, h = function () {
          return (c.next() >>> 0) / 4294967296;
        };
        return h.double = function () {
          do var f = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152; while (f === 0);
          return f;
        }, h.int32 = c.next, h.quick = h, l && (typeof l == 'object' && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.xorwow = i;
    })(0, r, !1);
  }), Ed = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u = this;
        u.next = function () {
          var c, l, h = u.x, f = u.i;
          return c = h[f], l = (c ^= c >>> 7) ^ c << 24, l ^= (c = h[f + 1 & 7]) ^ c >>> 10, l ^= (c = h[f + 3 & 7]) ^ c >>> 3, l ^= (c = h[f + 4 & 7]) ^ c << 7, c = h[f + 7 & 7], l ^= (c ^= c << 13) ^ c << 9, h[f] = l, u.i = f + 1 & 7, l;
        }, function (c, l) {
          var h, f = [];
          if (l === (0 | l)) f[0] = l; else for (l = '' + l, h = 0; h < l.length; ++h) f[7 & h] = f[7 & h] << 15 ^ l.charCodeAt(h) + f[h + 1 & 7] << 13;
          for (; f.length < 8;) f.push(0);
          for (h = 0; h < 8 && f[h] === 0; ++h) ;
          for (h == 8 ? f[7] = -1 : f[h], c.x = f, c.i = 0, h = 256; h > 0; --h) c.next();
        }(u, s);
      }

      function a(s, u) {
        return u.x = s.x.slice(), u.i = s.i, u;
      }

      function i(s, u) {
        s == null && (s = +new Date);
        var c = new o(s), l = u && u.state, h = function () {
          return (c.next() >>> 0) / 4294967296;
        };
        return h.double = function () {
          do var f = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152; while (f === 0);
          return f;
        }, h.int32 = c.next, h.quick = h, l && (l.x && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.xorshift7 = i;
    })(0, r, !1);
  }), kd = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u = this;
        u.next = function () {
          var c, l, h = u.w, f = u.X, d = u.i;
          return u.w = h = h + 1640531527 | 0, l = f[d + 34 & 127], c = f[d = d + 1 & 127], l ^= l << 13, c ^= c << 17, l ^= l >>> 15, c ^= c >>> 12, l = f[d] = l ^ c, u.i = d, l + (h ^ h >>> 16) | 0;
        }, function (c, l) {
          var h, f, d, p, v, m = [], g = 128;
          for (l === (0 | l) ? (f = l, l = null) : (l += '\0', f = 0, g = Math.max(g, l.length)), d = 0, p = -32; p < g; ++p) l && (f ^= l.charCodeAt((p + 32) % l.length)), p === 0 && (v = f), f ^= f << 10, f ^= f >>> 15, f ^= f << 4, f ^= f >>> 13, p >= 0 && (v = v + 1640531527 | 0, d = (h = m[127 & p] ^= f + v) == 0 ? d + 1 : 0);
          for (d >= 128 && (m[127 & (l && l.length || 0)] = -1), d = 127, p = 512; p > 0; --p) f = m[d + 34 & 127], h = m[d = d + 1 & 127], f ^= f << 13, h ^= h << 17, f ^= f >>> 15, h ^= h >>> 12, m[d] = f ^ h;
          c.w = v, c.X = m, c.i = d;
        }(u, s);
      }

      function a(s, u) {
        return u.i = s.i, u.w = s.w, u.X = s.X.slice(), u;
      }

      function i(s, u) {
        s == null && (s = +new Date);
        var c = new o(s), l = u && u.state, h = function () {
          return (c.next() >>> 0) / 4294967296;
        };
        return h.double = function () {
          do var f = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152; while (f === 0);
          return f;
        }, h.int32 = c.next, h.quick = h, l && (l.X && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.xor4096 = i;
    })(0, r, !1);
  }), Id = tr(function (r) {
    (function (t, e, n) {
      function o(s) {
        var u = this, c = '';
        u.next = function () {
          var h = u.b, f = u.c, d = u.d, p = u.a;
          return h = h << 25 ^ h >>> 7 ^ f, f = f - d | 0, d = d << 24 ^ d >>> 8 ^ p, p = p - h | 0, u.b = h = h << 20 ^ h >>> 12 ^ f, u.c = f = f - d | 0, u.d = d << 16 ^ f >>> 16 ^ p, u.a = p - h | 0;
        }, u.a = 0, u.b = 0, u.c = -1640531527, u.d = 1367130551, s === Math.floor(s) ? (u.a = s / 4294967296 | 0, u.b = 0 | s) : c += s;
        for (var l = 0; l < c.length + 20; l++) u.b ^= 0 | c.charCodeAt(l), u.next();
      }

      function a(s, u) {
        return u.a = s.a, u.b = s.b, u.c = s.c, u.d = s.d, u;
      }

      function i(s, u) {
        var c = new o(s), l = u && u.state, h = function () {
          return (c.next() >>> 0) / 4294967296;
        };
        return h.double = function () {
          do var f = ((c.next() >>> 11) + (c.next() >>> 0) / 4294967296) / 2097152; while (f === 0);
          return f;
        }, h.int32 = c.next, h.quick = h, l && (typeof l == 'object' && a(l, c), h.state = function () {
          return a(c, {});
        }), h;
      }

      e && e.exports ? e.exports = i : n && n.amd ? n(function () {
        return i;
      }) : this.tychei = i;
    })(0, r, !1);
  }), zn = tr(function (r) {
    (function (t, e) {
      var n, o = this, a = 256, i = 6, s = 'random', u = e.pow(a, i), c = e.pow(2, 52), l = 2 * c, h = a - 1;

      function f(g, y, x) {
        var b = [], w = v(function E(I, R) {
          var F, D = [], L = typeof I;
          if (R && L == 'object') for (F in I) try {
            D.push(E(I[F], R - 1));
          } catch {
          }
          return D.length ? D : L == 'string' ? I : I + '\0';
        }((y = y == 1 ? { entropy: !0 } : y || {}).entropy ? [g, m(t)] : g == null ? function () {
          try {
            var E;
            return n && (E = n.randomBytes) ? E = E(a) : (E = new Uint8Array(a), (o.crypto || o.msCrypto).getRandomValues(E)), m(E);
          } catch {
            var I = o.navigator, R = I && I.plugins;
            return [+new Date, o, R, o.screen, m(t)];
          }
        }() : g, 3), b), _ = new d(b), S = function () {
          for (var E = _.g(i), I = u, R = 0; E < c;) E = (E + R) * a, I *= a, R = _.g(1);
          for (; E >= l;) E /= 2, I /= 2, R >>>= 1;
          return (E + R) / I;
        };
        return S.int32 = function () {
          return 0 | _.g(4);
        }, S.quick = function () {
          return _.g(4) / 4294967296;
        }, S.double = S, v(m(_.S), t), (y.pass || x || function (E, I, R, F) {
          return F && (F.S && p(F, _), E.state = function () {
            return p(_, {});
          }), R ? (e[s] = E, I) : E;
        })(S, w, 'global' in y ? y.global : this == e, y.state);
      }

      function d(g) {
        var y, x = g.length, b = this, w = 0, _ = b.i = b.j = 0, S = b.S = [];
        for (x || (g = [x++]); w < a;) S[w] = w++;
        for (w = 0; w < a; w++) S[w] = S[_ = h & _ + g[w % x] + (y = S[w])], S[_] = y;
        (b.g = function (E) {
          for (var I, R = 0, F = b.i, D = b.j, L = b.S; E--;) I = L[F = h & F + 1], R = R * a + L[h & (L[F] = L[D = h & D + I]) + (L[D] = I)];
          return b.i = F, b.j = D, R;
        })(a);
      }

      function p(g, y) {
        return y.i = g.i, y.j = g.j, y.S = g.S.slice(), y;
      }

      function v(g, y) {
        for (var x, b = g + '', w = 0; w < b.length;) y[h & w] = h & (x ^= 19 * y[h & w]) + b.charCodeAt(w++);
        return m(y);
      }

      function m(g) {
        return String.fromCharCode.apply(0, g);
      }

      if (e['seed' + s] = f, v(e.random(), t), r.exports) {
        r.exports = f;
        try {
          n = require('crypto');
        } catch {
        }
      }
    })([], Math);
  });
  zn.alea = wd, zn.xor128 = _d, zn.xorwow = Cd, zn.xorshift7 = Ed, zn.xor4096 = kd, zn.tychei = Id;
  var ua = zn.alea, zi = function () {
    function r(t, e, n, o, a) {
      this.mean = t, this.stdDev = e, this.dtype = n, this.nextVal = NaN, this.truncated = o, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
      var i = a || Math.random();
      this.random = ua(i.toString());
    }

    return r.prototype.nextValue = function () {
      if (!isNaN(this.nextVal)) {
        var t = this.nextVal;
        return this.nextVal = NaN, t;
      }
      for (var e, n, o = !1; !o;) {
        var a = void 0, i = void 0, s = void 0;
        do s = (a = 2 * this.random() - 1) * a + (i = 2 * this.random() - 1) * i; while (s >= 1 || s === 0);
        var u = Math.sqrt(-2 * Math.log(s) / s);
        e = this.mean + this.stdDev * a * u, n = this.mean + this.stdDev * i * u, this.truncated && !this.isValidTruncated(e) || (o = !0);
      }
      return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(e);
    }, r.prototype.convertValue = function (t) {
      return this.dtype == null || this.dtype === 'float32' ? t : Math.round(t);
    }, r.prototype.isValidTruncated = function (t) {
      return t <= this.upper && t >= this.lower;
    }, r;
  }(), Rd = function () {
    function r(t, e, n, o) {
      this.alpha = t, this.beta = 1 / e, this.dtype = n;
      var a = o || Math.random();
      this.randu = ua(a.toString()), this.randn = new zi(0, 1, n, !1, this.randu()), this.d = t < 1 ? t + 2 / 3 : t - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d);
    }

    return r.prototype.nextValue = function () {
      for (var t, e, n, o, a, i; ;) {
        do o = this.randn.nextValue(), i = 1 + this.c * o; while (i <= 0);
        if (i *= i * i, e = 1 - .331 * (t = o * o) * t, n = .5 * t + this.d * (1 - i + Math.log(i)), (a = this.randu()) < e || Math.log(a) < n) break;
      }
      return i = 1 / this.beta * this.d * i, this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(i);
    }, r.prototype.convertValue = function (t) {
      return this.dtype === 'float32' ? t : Math.round(t);
    }, r;
  }(), Sd = function () {
    function r(t, e, n, o) {
      var a = this;
      if (t === void 0 && (t = 0), e === void 0 && (e = 1), this.canReturnFloat = function () {
        return a.dtype == null || a.dtype === 'float32';
      }, this.min = t, this.range = e - t, this.dtype = n, o == null && (o = Math.random()), typeof o == 'number' && (o = o.toString()), !this.canReturnFloat() && this.range <= 1) throw new Error('The difference between ' + t + ' - ' + e + ' <= 1 and dtype is not float');
      this.random = ua(o);
    }

    return r.prototype.convertValue = function (t) {
      return this.canReturnFloat() ? t : Math.round(t);
    }, r.prototype.nextValue = function () {
      return this.convertValue(this.min + this.range * this.random());
    }, r;
  }();

  function ae(r, t, e) {
    return t === void 0 && (t = 'float32'), t = t || 'float32', Pi(r), new Xr(r, t, e);
  }

  function Ad(r, t) {
    t === void 0 && (t = !1), console.log(r.toString(t));
  }

  var qc = A({
    batchToSpaceND_: function (r, t, e) {
      var n = C(r, 'x', 'batchToSpaceND'), o = t.reduce(function (a, i) {
        return a * i;
      });
      return k(n.rank >= 1 + t.length, function () {
        return 'input rank is ' + n.rank + ' but should be > than blockShape.length ' + t.length;
      }), k(e.length === t.length, function () {
        return 'crops.length is ' + e.length + ' but should be equal to blockShape.length  ' + t.length;
      }), k(n.shape[0] % o == 0, function () {
        return 'input tensor batch is ' + n.shape[0] + ' but is not divisible by the product of the elements of blockShape ' + t.join(' * ') + ' === ' + o;
      }), T.runKernelFunc(function (a) {
        return a.batchToSpaceND(n, t, e);
      }, { $x: n }, function (a) {
        return {
          $x: function () {
            return a.spaceToBatchND(t, e);
          },
        };
      });
    },
  }), Dd = A({
    broadcastTo_: function (r, t) {
      var e = C(r, 'broadcastTo', 'x'), n = e.shape;
      if (t.some(function (u) {
        return !(u > 0) || u % 1 != 0;
      })) throw new Error('broadcastTo(): Invalid broadcast shape [' + t + '].');
      if (t.length < e.rank) throw new Error('broadcastTo(): shape.length=' + t.length + ' < input.rank=' + e.rank + '.');
      if (t.length > e.rank) {
        for (var o = e.shape.slice(); o.length < t.length;) o.unshift(1);
        e = e.reshape(o);
      }
      for (var a = Array.from(t), i = t.length - 1; i >= 0; i--) if (e.shape[i] === t[i]) a[i] = 1; else if (e.shape[i] !== 1) throw new Error('broadcastTo(): [' + n + '] cannot be broadcast to [' + t + '].');
      var s = a.map(function (u, c) {
        return u > 1 ? c : -1;
      }).filter(function (u) {
        return u >= 0;
      });
      return s.length === 0 ? e.clone() : T.runKernelFunc(function (u) {
        return u.tile(e, a);
      }, { input: e }, function (u) {
        return {
          input: function () {
            return u.sum(s, !0);
          },
        };
      });
    },
  }), Td = A({
    cast_: function (r, t) {
      var e = C(r, 'x', 'cast');
      if (!oc(t)) throw new Error('Failed to cast to unknown dtype ' + t);
      if (t === 'string' && e.dtype !== 'string' || t !== 'string' && e.dtype === 'string') throw new Error('Only strings can be casted to strings');
      var n = { dtype: t };
      return T.runKernelFunc(function (o) {
        return o.cast(e, t);
      }, { x: e }, function (o) {
        return {
          x: function () {
            return o.clone();
          },
        };
      }, 'Cast', n);
    },
  }), Fd = A({
    clone_: function (r) {
      var t = C(r, 'x', 'clone', null);
      return T.runKernelFunc(function () {
        return T.makeTensorFromDataId(t.dataId, t.shape, t.dtype);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return e.toFloat();
          },
        };
      });
    },
  }), Nd = A({
    cumsum_: function (r, t, e, n) {
      t === void 0 && (t = 0), e === void 0 && (e = !1), n === void 0 && (n = !1);
      var o = C(r, 'x', 'cumsum'), a = Pt([t |= 0], o.rank), i = o;
      a != null && (i = o.transpose(a));
      var s = Ot(1, o.rank)[0], u = T.runKernelFunc(function (c) {
        return c.cumsum(i, s, e, n);
      }, { permutedX: i }, function (c) {
        return {
          permutedX: function () {
            return c.cumsum(t, e, !n);
          },
        };
      });
      return a != null && (u = u.transpose(a)), u;
    },
  }), Md = A({
    depthToSpace_: function (r, t, e) {
      e === void 0 && (e = 'NHWC');
      var n = C(r, 'x', 'depthToSpace'), o = e === 'NHWC' ? n.shape[1] : n.shape[2],
        a = e === 'NHWC' ? n.shape[2] : n.shape[3], i = e === 'NHWC' ? n.shape[3] : n.shape[1];
      return k(o * t >= 0, function () {
        return `Negative dimension size caused by overflow when multiplying
      ` + o + ' and ' + t + `  for depthToSpace with input shape
      ` + n.shape;
      }), k(a * t >= 0, function () {
        return `Negative dimension size caused by overflow when multiplying
      ` + a + ' and ' + t + ` for depthToSpace with input shape
          ` + n.shape;
      }), k(i % (t * t) == 0, function () {
        return 'Dimension size must be evenly divisible by ' + t * t + ' but is ' + i + ' for depthToSpace with input shape ' + n.shape;
      }), T.runKernelFunc(function (s) {
        return s.depthToSpace(n, t, e);
      }, { $x: n });
    },
  }), kt = A({
    expandDims_: function (r, t) {
      t === void 0 && (t = 0);
      var e = C(r, 'x', 'expandDims', null);
      k(t <= e.rank, function () {
        return 'Axis must be <= rank of the tensor';
      });
      var n = e.shape.slice();
      return t < 0 && (k(-(e.rank + 1) <= t, function () {
        return 'Axis must be in the interval [' + -(e.rank + 1) + ', ' + e.rank + ']';
      }), t = e.rank + t + 1), n.splice(t, 0, 1), Tt(e, n);
    },
  }), Hc = A({
    eye_: function (r, t, e, n) {
      n === void 0 && (n = 'float32'), t == null && (t = r);
      for (var o = ae([r, t], n), a = r <= t ? r : t, i = 0; i < a; ++i) o.set(1, i, i);
      var s = o.toTensor().as2D(r, t);
      if (e == null) return s;
      if (e.length === 1) return mr(kt(s, 0), [e[0], 1, 1]);
      if (e.length === 2) return mr(kt(kt(s, 0), 0), [e[0], e[1], 1, 1]);
      if (e.length === 3) return mr(kt(kt(kt(s, 0), 0), 0), [e[0], e[1], e[2], 1, 1]);
      throw new Error('eye() currently supports only 1D and 2D batchShapes, but received ' + e.length + 'D.');
    },
  }), Pd = A({
    multinomial_: function (r, t, e, n) {
      n === void 0 && (n = !1);
      var o = C(r, 'logits', 'multinomial'), a = o.size, i = o.rank;
      if (a < 2) throw new Error('Error in multinomial: you need at least 2 outcomes, but got ' + a + '.');
      if (i > 2) throw new Error('Rank of probabilities must be 1 or 2, but is ' + i);
      e = e || Math.random();
      var s = i === 1 ? o.as2D(1, -1) : o, u = T.runKernelFunc(function (c) {
        return c.multinomial(s, n, t, e);
      }, { logits2D: s });
      return i === 1 ? u.as1D() : u;
    },
  }), gi = A({
    oneHot_: function (r, t, e, n) {
      if (e === void 0 && (e = 1), n === void 0 && (n = 0), t < 2) throw new Error('Error in oneHot: depth must be >=2, but it is ' + t);
      var o = C(r, 'indices', 'oneHot', 'int32'), a = o.shape.concat([t]);
      return o = o.flatten(), T.runKernelFunc(function (i) {
        return i.oneHot(o, t, e, n);
      }, { $indices: o }, function (i) {
        return {
          $indices: function () {
            return Ee(o.shape, 'float32');
          },
        };
      }).reshape(a);
    },
  }), nr = A({
    pad_: function (r, t, e) {
      e === void 0 && (e = 0);
      var n = C(r, 'x', 'pad');
      if (n.rank === 0) throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
      var o = { paddings: t, constantValue: e };
      return T.runKernelFunc(function (a) {
        return a.pad(n, t, e);
      }, { x: n }, function (a) {
        var i = t.map(function (s) {
          return s[0];
        });
        return {
          x: function () {
            return a.slice(i, n.shape);
          },
        };
      }, 'PadV2', o);
    },
  }), Od = A({
    pad1d_: function (r, t, e) {
      return e === void 0 && (e = 0), k(t.length === 2, function () {
        return 'Invalid number of paddings. Must be length of 2.';
      }), nr(r, [t], e);
    },
  }), Bd = A({
    pad2d_: function (r, t, e) {
      return e === void 0 && (e = 0), k(t.length === 2 && t[0].length === 2 && t[1].length === 2, function () {
        return 'Invalid number of paddings. Must be length of 2 each.';
      }), nr(r, t, e);
    },
  }), Ld = A({
    pad3d_: function (r, t, e) {
      return e === void 0 && (e = 0), k(t.length === 3 && t[0].length === 2 && t[1].length === 2 && t[2].length === 2, function () {
        return 'Invalid number of paddings. Must be length of 2 each.';
      }), nr(r, t, e);
    },
  }), Wd = A({
    pad4d_: function (r, t, e) {
      return e === void 0 && (e = 0), k(t.length === 4 && t[0].length === 2 && t[1].length === 2 && t[2].length === 2 && t[3].length === 2, function () {
        return 'Invalid number of paddings. Must be length of 2 each.';
      }), nr(r, t, e);
    },
  }), Ud = A({
    rand_: function (r, t, e) {
      var n = J(r), o = null;
      if (e == null || e === 'float32') o = new Float32Array(n); else if (e === 'int32') o = new Int32Array(n); else {
        if (e !== 'bool') throw new Error('Unknown data type ' + e);
        o = new Uint8Array(n);
      }
      for (var a = 0; a < n; a++) o[a] = t();
      return T.makeTensor(o, r, e);
    },
  }), zd = A({
    randomNormal_: function (r, t, e, n, o) {
      if (t === void 0 && (t = 0), e === void 0 && (e = 1), n != null && n === 'bool') throw new Error('Unsupported data type ' + n);
      for (var a = new zi(t, e, n, !1, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
      return i.toTensor();
    },
  }), Vd = A({
    randomGamma_: function (r, t, e, n, o) {
      if (e === void 0 && (e = 1), n === void 0 && (n = 'float32'), e == null && (e = 1), n == null && (n = 'float32'), n !== 'float32' && n !== 'int32') throw new Error('Unsupported data type ' + n);
      for (var a = new Rd(t, e, n, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
      return i.toTensor();
    },
  }), jc = A({
    randomUniform_: function (r, t, e, n, o) {
      t === void 0 && (t = 0), e === void 0 && (e = 1), n === void 0 && (n = 'float32');
      for (var a = ae(r, n), i = new Sd(t, e, null, o), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
      return a.toTensor();
    },
  }), Tt = A({
    reshape_: function (r, t) {
      var e = C(r, 'x', 'reshape', null);
      t = nc(t, e.size), k(e.size === J(t), function () {
        return 'new shape and old shape must have the same number of elements.';
      });
      var n = { shape: t };
      return T.runKernelFunc(function (o) {
        return o.reshape(e, t);
      }, { x: e }, function (o) {
        return {
          x: function () {
            return o.reshape(e.shape);
          },
        };
      }, 'Reshape', n);
    },
  }), Xc = A({
    spaceToBatchND_: function (r, t, e) {
      var n = C(r, 'x', 'spaceToBatchND');
      return k(n.rank >= 1 + t.length, function () {
        return 'input rank ' + n.rank + ' should be > than [blockShape] ' + t.length;
      }), k(e.length === t.length, function () {
        return 'paddings.shape[0] ' + e.length + ' must be equal to [blockShape] ' + t.length;
      }), k(n.shape.reduce(function (o, a, i) {
        return i > 0 && i <= t.length ? o && (a + e[i - 1][0] + e[i - 1][1]) % t[i - 1] == 0 : o;
      }, !0), function () {
        return 'input spatial dimensions ' + n.shape.slice(1) + ' with paddings ' + e.toString() + ' must be divisible by blockShapes ' + t.toString();
      }), T.runKernelFunc(function (o) {
        return o.spaceToBatchND(n, t, e);
      }, { $x: n }, function (o) {
        return {
          $x: function () {
            return o.batchToSpaceND(t, e);
          },
        };
      });
    },
  }), Kc = A({
    squeeze_: function (r, t) {
      var e = C(r, 'x', 'squeeze');
      return Tt(e, _n(e.shape, t).newShape);
    },
  }), Et = A({
    stack_: function (r, t) {
      t === void 0 && (t = 0);
      var e = qo(r, 'tensors', 'stack');
      if (k(e.length >= 1, function () {
        return 'Pass at least one tensor to tf.stack';
      }), e.length === 1) return e[0].expandDims(t);
      var n = e[0].rank, o = e[0].shape, a = e[0].dtype;
      k(t <= n, function () {
        return 'Axis must be <= rank of the tensor';
      }), e.forEach(function (s) {
        xe(o, s.shape, 'All tensors passed to stack must have matching shapes');
      }), e.forEach(function (s) {
        k(a === s.dtype, function () {
          return 'All tensors passed to stack must have matching dtypes';
        });
      });
      var i = e.map(function (s) {
        return s.expandDims(t);
      });
      return Ve(i, t);
    },
  }), mr = A({
    tile_: function (r, t) {
      var e = C(r, 'x', 'tile', null);
      k(e.rank === t.length, function () {
        return 'Error in transpose: rank of input ' + e.rank + ' must match length of reps ' + t + '.';
      });
      var n = [e], o = { reps: t };
      return T.runKernelFunc(function (a, i) {
        var s = a.tile(e, t);
        return i([e]), s;
      }, { x: e }, function (a, i) {
        var s = i[0];
        return {
          x: function () {
            var u = ge(s);
            if (s.rank === 1) for (var c = 0; c < t[0]; ++c) u = u.add(a.slice([c * s.shape[0]], [s.shape[0]])); else if (s.rank === 2) for (c = 0; c < t[0]; ++c) for (var l = 0; l < t[1]; ++l) u = u.add(a.slice([c * s.shape[0], l * s.shape[1]], [s.shape[0], s.shape[1]])); else if (s.rank === 3) for (c = 0; c < t[0]; ++c) for (l = 0; l < t[1]; ++l) for (var h = 0; h < t[2]; ++h) u = u.add(a.slice([c * s.shape[0], l * s.shape[1], h * s.shape[2]], [s.shape[0], s.shape[1], s.shape[2]])); else {
              if (s.rank !== 4) throw new Error('Gradient for tile operation is not implemented for rank-' + s.rank + ' tensors yet.');
              for (c = 0; c < t[0]; ++c) for (l = 0; l < t[1]; ++l) for (h = 0; h < t[2]; ++h) for (var f = 0; f < t[3]; ++f) u = u.add(a.slice([c * s.shape[0], l * s.shape[1], h * s.shape[2], f * s.shape[3]], [s.shape[0], s.shape[1], s.shape[2], s.shape[3]]));
            }
            return u;
          },
        };
      }, 'Tile', o, n);
    },
  }), Gd = A({
    truncatedNormal_: function (r, t, e, n, o) {
      if (t === void 0 && (t = 0), e === void 0 && (e = 1), n != null && n === 'bool') throw new Error('Unsupported data type ' + n);
      for (var a = new zi(t, e, n, !0, o), i = ae(r, n), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
      return i.toTensor();
    },
  }), Ge = A({
    unstack_: function (r, t) {
      t === void 0 && (t = 0), t = t || 0;
      var e = C(r, 'x', 'unstack');
      k(t >= -e.shape.length && t < e.shape.length, function () {
        return 'Axis = ' + t + ' is not in [-' + e.shape.length + ', ' + e.shape.length + ')';
      }), t < 0 && (t += e.shape.length);
      var n = { axis: t };
      return T.runKernelFunc(function (o) {
        return o.unstack(e, t);
      }, { x: e }, function (o) {
        return {
          x: function () {
            return Et(o, t);
          },
        };
      }, 'Unpack', n);
    },
  }), qd = function (r, t) {
    return $(this, void 0, void 0, function () {
      var e, n, o, a, i, s, u, c, l, h;
      return Z(this, function (f) {
        switch (f.label) {
          case 0:
            return e = C(r, 'x', 'setdiff1d'), n = C(t, 'y', 'setdiff1d'), k(e.dtype === n.dtype, function () {
              return 'x and y should have the same dtype, but got x (' + e.dtype + ') and y (' + n.dtype + ').';
            }), k(e.rank === 1, function () {
              return 'x should be 1D tensor, but got x (' + e.shape + ').';
            }), k(n.rank === 1, function () {
              return 'y should be 1D tensor, but got y (' + n.shape + ').';
            }), [4, e.data()];
          case 1:
            return o = f.sent(), [4, n.data()];
          case 2:
            for (a = f.sent(), i = new Set(a), s = 0, l = 0; l < o.length; l++) i.has(o[l]) || s++;
            for (u = new Xr([s], e.dtype), c = new Xr([s], 'int32'), l = 0, h = 0; l < o.length; l++) i.has(o[l]) || (u.values[h] = o[l], c.values[h] = l, h++);
            return [2, [u.toTensor(), c.toTensor()]];
        }
      });
    });
  };

  function jo(r, t, e, n) {
    n === void 0 && (n = !0);
    var o = [];
    if (n) (o = o.concat(t.slice(0))).push(r[0] / e), o = o.concat(r.slice(1)); else {
      o = o.concat(r[0]);
      for (var a = t.length, i = 0; i < a; ++i) o = o.concat([r[i + 1] / t[i], t[i]]);
      o = o.concat(r.slice(a + 1));
    }
    return o;
  }

  function Xo(r, t, e) {
    e === void 0 && (e = !0);
    var n = [];
    if (e) {
      n.push(t);
      for (var o = t + 1; o < r; ++o) o <= 2 * t ? (n.push(o), n.push(o - (t + 1))) : n.push(o);
    } else {
      var a = [], i = [];
      for (o = 1; o < r; ++o) o >= 2 * t + 1 || o % 2 == 1 ? i.push(o) : a.push(o);
      n.push.apply(n, a), n.push(0), n.push.apply(n, i);
    }
    return n;
  }

  function Ko(r, t, e, n) {
    n === void 0 && (n = !0);
    var o = [];
    n ? o.push(r[0] / e) : o.push(r[0] * e);
    for (var a = 1; a < r.length; ++a) a <= t.length ? n ? o.push(t[a - 1] * r[a]) : o.push(r[a] / t[a - 1]) : o.push(r[a]);
    return o;
  }

  function Yc(r, t) {
    for (var e = [0], n = 0; n < t; ++n) e.push(r[n][0]);
    return e;
  }

  function $c(r, t, e) {
    for (var n = r.slice(0, 1), o = 0; o < e; ++o) n.push(r[o + 1] - t[o][0] - t[o][1]);
    return n;
  }

  function Vi(r, t) {
    if (r.rank < 1) throw new Error('tf.gatherND() expects the input to be rank 1 or higher, but the rank was ' + r.rank + '.');
    if (t.rank < 1) throw new Error('tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ' + t.rank + '.');
    if (t.dtype !== 'int32') throw new Error('tf.gatherND() expects the indices to be int32 type, but the dtype was ' + t.dtype + '.');
    if (t.shape[t.rank - 1] > r.rank) throw new Error('index innermost dimension length must be <= tensor rank; saw: ' + t.shape[t.rank - 1] + ' vs. ' + r.rank);
    if (r.size === 0) throw new Error('Requested more than 0 entries, but input is empty. Input shape: ' + r.shape + '.');
    for (var e = t.shape, n = e[e.length - 1], o = 1, a = 0; a < e.length - 1; ++a) o *= e[a];
    var i = r.shape, s = e.slice();
    s.pop();
    var u = 1;
    for (a = n; a < r.rank; ++a) u *= i[a], s.push(i[a]);
    var c = Ft(r.shape).map(function (l) {
      return l / u;
    }).concat([1]).slice(0, n);
    return [s, o, u, c];
  }

  Object.freeze({ prepareAndValidate: Vi });
  var Gi = 30;

  function Mo(r) {
    return r <= Gi ? r : Vo(r, Math.floor(Math.sqrt(r)));
  }

  function Zc(r, t, e) {
    var n = t.rank > 1 ? t.shape[t.rank - 1] : 1, o = t.rank > 1 ? t.rank - 1 : 1,
      a = 'Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ' + e.shape + ', indices.shape: ' + t.shape + ', shape: ' + r + ', sliceDim: ' + n + ', and batchDim: ' + o + '.';
    if (e.rank < o) throw new Error(a + ' update.rank < ' + o + '. ');
    if (r.length < n + (e.rank - o)) throw new Error(a + ' Output shape length < ' + (n + (e.rank - o)));
    if (e.rank !== o + r.length - n) throw new Error(a + ' update.rank != ' + (o + r.length - n));
    for (var i = 0; i < o; ++i) if (e.shape[i] !== t.shape[i]) throw new Error(a + ' updates.shape[' + i + '] (' + e.shape[i] + ') != indices.shape[' + i + '] (' + t.shape[i] + ').');
    for (i = 0; i < e.rank - o; ++i) if (e.shape[i + o] !== r[i + n]) throw new Error(a + ' updates.shape[' + (i + o) + '] (' + e.shape[i + o] + ') != shape[' + (i + o) + '] (' + r[i + o] + ')');
  }

  function Jc(r, t, e) {
    if (t.rank < 1) throw new Error('tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ' + t.rank + '.');
    if (r.rank < 1) throw new Error('tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ' + r.rank + '.');
    if (t.dtype !== 'int32') throw new Error('The dtype of \'indices\' should be int32, but got dtype: ' + t.dtype);
    if (e.length < 1) throw new Error('Output rank must be greater or equal to 1, but got shape: ' + e);
    if (e.length === 0) {
      if (t.size === 0) throw new Error('Indices specified for empty output. indices shape: ' + t.shape);
      if (r.size === 0) throw new Error('Updates specified for empty output. updates shape: ' + r.shape);
    }
    Zc(e, t, r);
  }

  function Zr(r, t, e) {
    for (var n = t.shape.length, o = n > 1 ? t.shape[n - 1] : 1, a = e.length, i = 1, s = o; s < a; ++s) i *= e[s];
    var u = o < 1 ? 1 : o;
    return {
      sliceRank: o,
      numUpdates: J(t.shape) / u,
      sliceSize: i,
      strides: Ft(e.slice(0, o)).concat([1]),
      outputSize: J(e),
    };
  }

  Object.freeze({ validateUpdateShape: Zc, validateInput: Jc, calculateShapes: Zr });

  function Qc(r, t, e) {
    k(r.rank === t.length, function () {
      return 'Error in slice' + r.rank + 'D: Length of begin ' + t + ' must match the rank of the array (' + r.rank + ').';
    }), k(r.rank === e.length, function () {
      return 'Error in slice' + r.rank + 'D: Length of size ' + e + ' must match the rank of the array (' + r.rank + ').';
    });
    for (var n = function (a) {
      k(t[a] + e[a] <= r.shape[a], function () {
        return 'Error in slice' + r.rank + 'D: begin[' + a + '] + size[' + a + '] (' + (t[a] + e[a]) + ') would overflow input.shape[' + a + '] (' + r.shape[a] + ')';
      });
    }, o = 0; o < r.rank; ++o) n(o);
  }

  function yi(r) {
    for (var t = [], e = 0; r > 0;) 1 & r && t.push(e), r /= 2, e++;
    return t;
  }

  function ca(r, t, e) {
    for (var n = [], o = 0; o < r.length; o++) n[o] = Math.ceil((t[o] - r[o]) / e[o]);
    return n;
  }

  function el(r, t, e, n, o) {
    var a = t[o], i = e[o] || 1;
    (r & 1 << o || a == null) && (a = i > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
    var s = n[o];
    return a < 0 && (a += s), a = Wo(0, a, s - 1);
  }

  function tl(r, t, e, n, o) {
    var a = t[o], i = e[o] || 1;
    (r & 1 << o || a == null) && (a = i > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
    var s = n[o];
    return a < 0 && (a += s), a = i > 0 ? Wo(0, a, s) : Wo(-1, a, s - 1);
  }

  function qi(r, t, e) {
    for (var n = e.length, o = 0; o < e.length; o++) if (e[o] > 1) {
      n = o;
      break;
    }
    for (o = n + 1; o < e.length; o++) if (t[o] > 0 || e[o] !== r[o]) return !1;
    return !0;
  }

  function Hi(r, t) {
    for (var e = r.length > 0 ? r[r.length - 1] : 1, n = 0; n < r.length - 1; n++) e += r[n] * t[n];
    return e;
  }

  Object.freeze({
    assertParamsValid: Qc,
    maskToAxes: yi,
    computeOutShape: ca,
    startForAxis: el,
    stopForAxis: tl,
    isSliceContinous: qi,
    computeFlatOffset: Hi,
  });

  function Hd(r, t) {
    k(zo(r), function () {
      return 'The f passed in variableGrads(f) must be a function';
    }), k(t == null || Array.isArray(t) && t.every(function (l) {
      return l instanceof kr;
    }), function () {
      return 'The varList passed in variableGrads(f, varList) must be an array of variables';
    });
    var e = t != null;
    if (!e) for (var n in t = [], T.registeredVariables) t.push(T.registeredVariables[n]);
    var o = e ? t.filter(function (l) {
      return !l.trainable;
    }) : null, a = t.length;
    k((t = t.filter(function (l) {
      return l.trainable;
    })).length > 0, function () {
      return 'variableGrads() expects at least one of the input variables to be trainable, but none of the ' + a + ' variables is trainable.';
    });
    var i = T.gradients(r, t, null, !0), s = i.value, u = i.grads;
    k(u.some(function (l) {
      return l != null;
    }), function () {
      return 'Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().';
    }), k(s.rank === 0, function () {
      return 'The f passed in variableGrads(f) must return a scalar, but it returned a rank-' + s.rank + ' tensor';
    });
    var c = {};
    return t.forEach(function (l, h) {
      u[h] != null && (c[l.name] = u[h]);
    }), o != null && o.forEach(function (l) {
      return c[l.name] = null;
    }), { value: s, grads: c };
  }

  function la(r) {
    return T.customGrad(r);
  }

  var pn = A({
    softmax_: function (r, t) {
      t === void 0 && (t = -1);
      var e = C(r, 'logits', 'softmax', 'float32');
      if (t === -1 && (t = e.rank - 1), t !== e.rank - 1) throw Error('Softmax along a non-last dimension is not yet supported. Logits was rank ' + e.rank + ' and dim was ' + t);
      return T.runKernelFunc(function (n, o) {
        var a = n.softmax(e, t);
        return o([a]), a;
      }, { logits: e }, function (n, o) {
        var a = o[0], i = n.mul(a);
        return {
          logits: function () {
            return i.sub(i.sum([t], !0).mul(a));
          },
        };
      }, 'Softmax', { dim: t }, [], [!0]);
    },
  }), jd = A({
    logSoftmax_: function (r, t) {
      t === void 0 && (t = -1);
      var e = C(r, 'logits', 'logSoftmax');
      if (t === -1 && (t = e.rank - 1), t !== e.rank - 1) throw Error('Log Softmax along a non-last dimension is not yet supported. Logits was rank ' + e.rank + ' and axis was ' + t);
      return la(function (n, o) {
        var a = n.max(t, !0), i = n.sub(a), s = i.toFloat().sub(i.exp().sum(t, !0).log());
        return o([s]), {
          value: s, gradFunc: function (u, c) {
            var l = c[0].exp();
            return u.sub(u.sum(t, !0).mul(l));
          },
        };
      })(e);
    },
  }), nl = function () {
    function r(t, e) {
      this.backend = t, this.dataMover = e, this.data = new WeakMap, this.dataIdsCount = 0;
    }

    return r.prototype.get = function (t) {
      return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t);
    }, r.prototype.set = function (t, e) {
      this.dataIdsCount++, this.data.set(t, e);
    }, r.prototype.has = function (t) {
      return this.data.has(t);
    }, r.prototype.delete = function (t) {
      return this.dataIdsCount--, this.data.delete(t);
    }, r.prototype.numDataIds = function () {
      return this.dataIdsCount;
    }, r;
  }(), rl = function () {
    function r() {
    }

    return r.prototype.time = function (t) {
      return N('time');
    }, r.prototype.read = function (t) {
      return N('read');
    }, r.prototype.readSync = function (t) {
      return N('readSync');
    }, r.prototype.numDataIds = function () {
      return N('numDataIds');
    }, r.prototype.disposeData = function (t) {
      return N('disposeData');
    }, r.prototype.write = function (t, e, n) {
      return N('write');
    }, r.prototype.move = function (t, e, n, o) {
      return N('move');
    }, r.prototype.memory = function () {
      return N('memory');
    }, r.prototype.floatPrecision = function () {
      return N('floatPrecision');
    }, r.prototype.epsilon = function () {
      return this.floatPrecision() === 32 ? 1e-7 : 1e-4;
    }, r.prototype.batchMatMul = function (t, e, n, o) {
      return N('batchMatMul');
    }, r.prototype.fusedBatchMatMul = function (t) {
      return t.a, t.b, t.transposeA, t.transposeB, t.bias, t.activation, t.preluActivationWeights, N('fusedBatchMatMul');
    }, r.prototype.slice = function (t, e, n) {
      return N('slice');
    }, r.prototype.stridedSlice = function (t, e, n, o) {
      return N('stridedSlice');
    }, r.prototype.unstack = function (t, e) {
      return N('unstack');
    }, r.prototype.reverse = function (t, e) {
      return N('reverse');
    }, r.prototype.concat = function (t, e) {
      return N('concat');
    }, r.prototype.neg = function (t) {
      return N('neg');
    }, r.prototype.add = function (t, e) {
      return N('add');
    }, r.prototype.addN = function (t) {
      return N('addN');
    }, r.prototype.subtract = function (t, e) {
      return N('subtract');
    }, r.prototype.multiply = function (t, e) {
      return N('multiply');
    }, r.prototype.realDivide = function (t, e) {
      return N('realDivide');
    }, r.prototype.floorDiv = function (t, e) {
      return N('floorDiv');
    }, r.prototype.sum = function (t, e) {
      return N('sum');
    }, r.prototype.prod = function (t, e) {
      return N('prod');
    }, r.prototype.unsortedSegmentSum = function (t, e, n) {
      return N('unsortedSegmentSum');
    }, r.prototype.argMin = function (t, e) {
      return N('argMin');
    }, r.prototype.argMax = function (t, e) {
      return N('argMax');
    }, r.prototype.equal = function (t, e) {
      return N('equal');
    }, r.prototype.notEqual = function (t, e) {
      return N('notEqual');
    }, r.prototype.less = function (t, e) {
      return N('less');
    }, r.prototype.lessEqual = function (t, e) {
      return N('lessEqual');
    }, r.prototype.greater = function (t, e) {
      return N('greater');
    }, r.prototype.greaterEqual = function (t, e) {
      return N('greaterEqual');
    }, r.prototype.logicalNot = function (t) {
      return N('logicalNot');
    }, r.prototype.logicalAnd = function (t, e) {
      return N('logicalAnd');
    }, r.prototype.logicalOr = function (t, e) {
      return N('logicalOr');
    }, r.prototype.where = function (t) {
      return N('where');
    }, r.prototype.select = function (t, e, n) {
      return N('select');
    }, r.prototype.topk = function (t, e, n) {
      return N('topk');
    }, r.prototype.min = function (t, e) {
      return N('min');
    }, r.prototype.minimum = function (t, e) {
      return N('minimum');
    }, r.prototype.mod = function (t, e) {
      return N('mod');
    }, r.prototype.max = function (t, e) {
      return N('max');
    }, r.prototype.maximum = function (t, e) {
      return N('maximum');
    }, r.prototype.all = function (t, e) {
      return N('all');
    }, r.prototype.any = function (t, e) {
      return N('any');
    }, r.prototype.squaredDifference = function (t, e) {
      return N('squaredDifference');
    }, r.prototype.ceil = function (t) {
      return N('ceil');
    }, r.prototype.floor = function (t) {
      return N('floor');
    }, r.prototype.round = function (t) {
      return N('round');
    }, r.prototype.sign = function (t) {
      return N('sign');
    }, r.prototype.isNaN = function (t) {
      return N('isNaN');
    }, r.prototype.isInf = function (t) {
      return N('isInf');
    }, r.prototype.isFinite = function (t) {
      return N('isFinite');
    }, r.prototype.pow = function (t, e) {
      return N('pow');
    }, r.prototype.exp = function (t) {
      return N('exp');
    }, r.prototype.expm1 = function (t) {
      return N('expm1');
    }, r.prototype.softmax = function (t, e) {
      return N('softmax');
    }, r.prototype.log = function (t) {
      return N('log');
    }, r.prototype.log1p = function (t) {
      return N('log1p');
    }, r.prototype.sqrt = function (t) {
      return N('sqrt');
    }, r.prototype.rsqrt = function (t) {
      return N('rsqrt');
    }, r.prototype.square = function (t) {
      return N('square');
    }, r.prototype.reciprocal = function (t) {
      return N('reciprocal');
    }, r.prototype.relu = function (t) {
      return N('relu');
    }, r.prototype.relu6 = function (t) {
      return N('relu6');
    }, r.prototype.prelu = function (t, e) {
      return N('prelu');
    }, r.prototype.elu = function (t) {
      return N('elu');
    }, r.prototype.eluDer = function (t, e) {
      return N('eluDer');
    }, r.prototype.selu = function (t) {
      return N('selu');
    }, r.prototype.int = function (t) {
      return N('int');
    }, r.prototype.clip = function (t, e, n) {
      return N('clip');
    }, r.prototype.abs = function (t) {
      return N('abs');
    }, r.prototype.complexAbs = function (t) {
      return N('complexAbs');
    }, r.prototype.sigmoid = function (t) {
      return N('sigmoid');
    }, r.prototype.softplus = function (t) {
      return N('softplus');
    }, r.prototype.sin = function (t) {
      return N('sin');
    }, r.prototype.cos = function (t) {
      return N('cos');
    }, r.prototype.tan = function (t) {
      return N('tan');
    }, r.prototype.asin = function (t) {
      return N('asin');
    }, r.prototype.acos = function (t) {
      return N('acos');
    }, r.prototype.atan = function (t) {
      return N('atan');
    }, r.prototype.atan2 = function (t, e) {
      return N('atan2');
    }, r.prototype.sinh = function (t) {
      return N('sinh');
    }, r.prototype.cosh = function (t) {
      return N('cosh');
    }, r.prototype.tanh = function (t) {
      return N('tanh');
    }, r.prototype.asinh = function (t) {
      return N('asinh');
    }, r.prototype.acosh = function (t) {
      return N('acosh');
    }, r.prototype.atanh = function (t) {
      return N('atanh');
    }, r.prototype.erf = function (t) {
      return N('erf');
    }, r.prototype.step = function (t, e) {
      return N('step');
    }, r.prototype.fusedConv2d = function (t) {
      return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, N('fusedConv2d');
    }, r.prototype.conv2d = function (t, e, n) {
      return N('conv2d');
    }, r.prototype.conv2dDerInput = function (t, e, n) {
      return N('conv2dDerInput');
    }, r.prototype.conv2dDerFilter = function (t, e, n) {
      return N('conv2dDerFilter');
    }, r.prototype.fusedDepthwiseConv2D = function (t) {
      return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, N('fusedDepthwiseConv2D');
    }, r.prototype.depthwiseConv2D = function (t, e, n) {
      return N('depthwiseConv2D');
    }, r.prototype.depthwiseConv2DDerInput = function (t, e, n) {
      return N('depthwiseConv2DDerInput');
    }, r.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
      return N('depthwiseConv2DDerFilter');
    },r.prototype.conv3d = function (t, e, n) {
      return N('conv3d');
    },r.prototype.conv3dDerInput = function (t, e, n) {
      return N('conv3dDerInput');
    },r.prototype.conv3dDerFilter = function (t, e, n) {
      return N('conv3dDerFilter');
    },r.prototype.maxPool = function (t, e) {
      return N('maxPool');
    },r.prototype.maxPoolBackprop = function (t, e, n, o) {
      return N('maxPoolBackprop');
    },r.prototype.avgPool = function (t, e) {
      return N('avgPool');
    },r.prototype.avgPoolBackprop = function (t, e, n) {
      return N('avgPoolBackprop');
    },r.prototype.avgPool3d = function (t, e) {
      return N('avgPool3d');
    },r.prototype.avgPool3dBackprop = function (t, e, n) {
      return N('avgPool3dBackprop');
    },r.prototype.maxPool3d = function (t, e) {
      return N('maxPool3d');
    },r.prototype.maxPool3dBackprop = function (t, e, n, o) {
      return N('maxPool3dBackprop');
    },r.prototype.reshape = function (t, e) {
      return N('reshape');
    },r.prototype.cast = function (t, e) {
      return N('cast');
    },r.prototype.tile = function (t, e) {
      return N('tile');
    },r.prototype.pad = function (t, e, n) {
      return N('pad');
    },r.prototype.transpose = function (t, e) {
      return N('transpose');
    },r.prototype.gather = function (t, e, n) {
      return N('gather');
    },r.prototype.gatherND = function (t, e) {
      return N('gatherND');
    },r.prototype.scatterND = function (t, e, n) {
      return N('scatterND');
    },r.prototype.batchToSpaceND = function (t, e, n) {
      return N('batchToSpaceND');
    },r.prototype.spaceToBatchND = function (t, e, n) {
      return N('spaceToBatchND');
    },r.prototype.resizeBilinear = function (t, e, n, o) {
      return N('resizeBilinear');
    },r.prototype.resizeBilinearBackprop = function (t, e, n) {
      return N('resizeBilinearBackprop');
    },r.prototype.resizeNearestNeighbor = function (t, e, n, o) {
      return N('resizeNearestNeighbor');
    },r.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
      return N('resizeNearestNeighborBackprop');
    },r.prototype.batchNormalization = function (t, e, n, o, a, i) {
      return N('batchNormalization');
    },r.prototype.localResponseNormalization4D = function (t, e, n, o, a) {
      return N('localResponseNormalization4D');
    },r.prototype.LRNGrad = function (t, e, n, o, a, i, s) {
      return N('LRNGrad');
    },r.prototype.multinomial = function (t, e, n, o) {
      return N('multinomial');
    },r.prototype.oneHot = function (t, e, n, o) {
      return N('oneHot');
    },r.prototype.cumsum = function (t, e, n, o) {
      return N('cumsum');
    },r.prototype.nonMaxSuppression = function (t, e, n, o, a) {
      return N('nonMaxSuppression');
    },r.prototype.fft = function (t) {
      return N('fft');
    },r.prototype.ifft = function (t) {
      return N('ifft');
    },r.prototype.complex = function (t, e) {
      return N('complex');
    },r.prototype.real = function (t) {
      return N('real');
    },r.prototype.imag = function (t) {
      return N('imag');
    },r.prototype.cropAndResize = function (t, e, n, o, a, i) {
      return N('cropAndResize');
    },r.prototype.depthToSpace = function (t, e, n) {
      return N('depthToSpace');
    },r.prototype.split = function (t, e, n) {
      return N('split');
    },r.prototype.sparseToDense = function (t, e, n, o) {
      return N('sparseToDense');
    },r.prototype.diag = function (t) {
      return N('diag');
    },r.prototype.fill = function (t, e, n) {
      return N('fill');
    },r.prototype.onesLike = function (t) {
      return N('onesLike');
    },r.prototype.zerosLike = function (t) {
      return N('zerosLike');
    },r.prototype.linspace = function (t, e, n) {
      return N('linspace');
    },r.prototype.dispose = function () {
      return N('dispose');
    },r;
  }();

  function N(r) {
    throw new Error('\'' + r + '\' not yet implemented or not found in the registry. Did you forget to import the kernel?');
  }

  function sn(r, t) {
    for (var e = r.length, n = [], o = 0; o < e; o++) {
      var a = e - 1 - o, i = r[a] || 1;
      (t[t.length - 1 - o] || 1) > 1 && i === 1 && n.unshift(a);
    }
    return n;
  }

  function Le(r, t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var o = r[r.length - n - 1], a = t.length - n - 1, i = t[a];
      (o == null || o === 1 && i > 1) && e.unshift(a);
    }
    return e;
  }

  function le(r, t) {
    for (var e = [], n = Math.max(r.length, t.length), o = 0; o < n; o++) {
      var a = r[r.length - o - 1];
      a == null && (a = 1);
      var i = t[t.length - o - 1];
      if (i == null && (i = 1), a === 1) e.unshift(i); else if (i === 1) e.unshift(a); else {
        if (a !== i) throw Error('Operands could not be broadcast together with shapes ' + r + ' and ' + t + '.');
        e.unshift(a);
      }
    }
    return e;
  }

  function Ir(r, t, e, n, o, a, i) {
    i === void 0 && (i = 'channelsLast');
    var s, u = Yo(t), c = u[0], l = u[1];
    if (i === 'channelsLast') s = [c, l, r[3], r[3]]; else {
      if (i !== 'channelsFirst') throw new Error('Unknown dataFormat ' + i);
      s = [c, l, r[1], r[1]];
    }
    return On(r, s, e, n, o, a, !1, i);
  }

  function Jr(r, t, e, n, o, a, i) {
    i === void 0 && (i = 'NDHWC');
    var s, u, c = bi(t), l = c[0], h = c[1], f = c[2];
    if (i === 'NDHWC') u = 'channelsLast', s = [l, h, f, r[4], r[4]]; else {
      if (i !== 'NCDHW') throw new Error('Unknown dataFormat ' + i);
      u = 'channelsFirst', s = [l, h, f, r[1], r[1]];
    }
    return Qr(r, s, e, n, o, !1, u, a);
  }

  function On(r, t, e, n, o, a, i, s) {
    i === void 0 && (i = !1), s === void 0 && (s = 'channelsLast');
    var u = [-1, -1, -1, -1], c = u[0], l = u[1], h = u[2], f = u[3];
    if (s === 'channelsLast') c = r[0], l = r[1], h = r[2], f = r[3]; else {
      if (s !== 'channelsFirst') throw new Error('Unknown dataFormat ' + s);
      c = r[0], f = r[1], l = r[2], h = r[3];
    }
    var d, p = t[0], v = t[1], m = t[3], g = Yo(e), y = g[0], x = g[1], b = Yo(n), w = b[0], _ = b[1], S = gr(p, w),
      E = gr(v, _), I = function (B, W, V, z, U, q, P, H) {
        var j, te, se;
        if (typeof B == 'number') {
          j = { top: B, bottom: B, left: B, right: B, type: B === 0 ? 'VALID' : 'NUMBER' };
          var ue = function (de, _e, ye, Fe, Ie) {
            Fe == null && (Fe = ji(de, _e, ye));
            var Re = de[0], Lt = de[1], Wt = Vr((Re - _e + 2 * Fe) / ye + 1, Ie);
            k(Te(Wt), function () {
              return 'The output # of rows (' + Wt + ') must be an integer. Change the stride and/or zero pad parameters';
            });
            var gt = Vr((Lt - _e + 2 * Fe) / ye + 1, Ie);
            return k(Te(gt), function () {
              return 'The output # of columns (' + gt + ') must be an integer. Change the stride and/or zero pad parameters';
            }), [Wt, gt];
          }([W, V], q, z, B, H);
          te = ue[0], se = ue[1];
        } else if (B === 'same') {
          te = Math.ceil(W / z), se = Math.ceil(V / U);
          var he = Math.max(0, (te - 1) * z + q - W), ve = Math.max(0, (se - 1) * U + P - V), fe = Math.floor(he / 2),
            me = he - fe, Me = Math.floor(ve / 2);
          j = { top: fe, bottom: me, left: Me, right: ve - Me, type: 'SAME' };
        } else {
          if (B !== 'valid') throw Error('Unknown padding parameter: ' + B);
          j = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            type: 'VALID',
          }, te = Math.ceil((W - q + 1) / z), se = Math.ceil((V - P + 1) / U);
        }
        return { padInfo: j, outHeight: te, outWidth: se };
      }(o, l, h, y, x, S, E, a), R = I.padInfo, F = I.outHeight, D = I.outWidth, L = i ? m * f : m;
    return s === 'channelsFirst' ? d = [c, L, F, D] : s === 'channelsLast' && (d = [c, F, D, L]), {
      batchSize: c,
      dataFormat: s,
      inHeight: l,
      inWidth: h,
      inChannels: f,
      outHeight: F,
      outWidth: D,
      outChannels: L,
      padInfo: R,
      strideHeight: y,
      strideWidth: x,
      filterHeight: p,
      filterWidth: v,
      effectiveFilterHeight: S,
      effectiveFilterWidth: E,
      dilationHeight: w,
      dilationWidth: _,
      inShape: r,
      outShape: d,
      filterShape: t,
    };
  }

  function Qr(r, t, e, n, o, a, i, s) {
    a === void 0 && (a = !1), i === void 0 && (i = 'channelsLast');
    var u = [-1, -1, -1, -1, -1], c = u[0], l = u[1], h = u[2], f = u[3], d = u[4];
    if (i === 'channelsLast') c = r[0], l = r[1], h = r[2], f = r[3], d = r[4]; else {
      if (i !== 'channelsFirst') throw new Error('Unknown dataFormat ' + i);
      c = r[0], d = r[1], l = r[2], h = r[3], f = r[4];
    }
    var p, v = t[0], m = t[1], g = t[2], y = t[4], x = bi(e), b = x[0], w = x[1], _ = x[2], S = bi(n), E = S[0],
      I = S[1], R = S[2], F = gr(v, E), D = gr(m, I), L = gr(g, R),
      B = function (P, H, j, te, se, ue, he, ve, fe, me, Me) {
        var de, _e, ye, Fe;
        if (typeof P == 'number') {
          de = { top: P, bottom: P, left: P, right: P, front: P, back: P, type: P === 0 ? 'VALID' : 'NUMBER' };
          var Ie = function (ar, nn, ka, ir, Ut, Ia) {
            Ut == null && (Ut = ji(ar, nn, ir));
            var ff = ar[0], df = ar[1], pf = ar[2], Ra = Vr((ff - nn + 2 * Ut) / ir + 1, Ia);
            k(Te(Ra), function () {
              return 'The output # of depths (' + Ra + ') must be an integer. Change the stride and/or zero pad parameters';
            });
            var Sa = Vr((df - nn + 2 * Ut) / ir + 1, Ia);
            k(Te(Sa), function () {
              return 'The output # of rows (' + Sa + ') must be an integer. Change the stride and/or zero pad parameters';
            });
            var Aa = Vr((pf - nn + 2 * Ut) / ir + 1, Ia);
            return k(Te(Aa), function () {
              return 'The output # of columns (' + Aa + ') must be an integer. Change the stride and/or zero pad parameters';
            }), [Ra, Sa, Aa, ka];
          }([H, j, te, 1], ve, 1, se, P, Me);
          _e = Ie[0], ye = Ie[1], Fe = Ie[2];
        } else if (P === 'same') {
          _e = Math.ceil(H / se), ye = Math.ceil(j / ue), Fe = Math.ceil(te / he);
          var Re = (_e - 1) * se + ve - H, Lt = (ye - 1) * ue + fe - j, Wt = (Fe - 1) * he + me - te,
            gt = Math.floor(Re / 2), or = Re - gt, en = Math.floor(Lt / 2), bn = Lt - en, tn = Math.floor(Wt / 2);
          de = { top: en, bottom: bn, left: tn, right: Wt - tn, front: gt, back: or, type: 'SAME' };
        } else {
          if (P !== 'valid') throw Error('Unknown padding parameter: ' + P);
          de = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            front: 0,
            back: 0,
            type: 'VALID',
          }, _e = Math.ceil((H - ve + 1) / se), ye = Math.ceil((j - fe + 1) / ue), Fe = Math.ceil((te - me + 1) / he);
        }
        return { padInfo: de, outDepth: _e, outHeight: ye, outWidth: Fe };
      }(o, l, h, f, b, w, _, F, D, L, s), W = B.padInfo, V = B.outDepth, z = B.outHeight, U = B.outWidth,
      q = a ? y * d : y;
    return i === 'channelsFirst' ? p = [c, q, V, z, U] : i === 'channelsLast' && (p = [c, V, z, U, q]), {
      batchSize: c,
      dataFormat: i,
      inDepth: l,
      inHeight: h,
      inWidth: f,
      inChannels: d,
      outDepth: V,
      outHeight: z,
      outWidth: U,
      outChannels: q,
      padInfo: W,
      strideDepth: b,
      strideHeight: w,
      strideWidth: _,
      filterDepth: v,
      filterHeight: m,
      filterWidth: g,
      effectiveFilterDepth: F,
      effectiveFilterHeight: D,
      effectiveFilterWidth: L,
      dilationDepth: E,
      dilationHeight: I,
      dilationWidth: R,
      inShape: r,
      outShape: p,
      filterShape: t,
    };
  }

  function ji(r, t, e, n) {
    n === void 0 && (n = 1);
    var o = gr(t, n);
    return Math.floor((r[0] * (e - 1) - e + o) / 2);
  }

  function Yo(r) {
    return typeof r == 'number' ? [r, r, r] : r.length === 2 ? [r[0], r[1], 1] : r;
  }

  function bi(r) {
    return typeof r == 'number' ? [r, r, r] : r;
  }

  function gr(r, t) {
    return t <= 1 ? r : r + (r - 1) * (t - 1);
  }

  function Vr(r, t) {
    if (!t) return r;
    switch (t) {
      case'round':
        return Math.round(r);
      case'ceil':
        return Math.ceil(r);
      case'floor':
        return Math.floor(r);
      default:
        throw new Error('Unknown roundingMode ' + t);
    }
  }

  function Zn(r) {
    var t = Yo(r), e = t[0], n = t[1], o = t[2];
    return e === 1 && n === 1 && o === 1;
  }

  function ht(r, t) {
    return Zn(r) || Zn(t);
  }

  function ha(r) {
    if (r === 'NHWC') return 'channelsLast';
    if (r === 'NCHW') return 'channelsFirst';
    throw new Error('Unknown dataFormat ' + r);
  }

  function Xi(r, t, e) {
    if (t === 'complex64') {
      if (r.dtype === 'complex64') return r.clone();
      var n = Ee(r.shape), o = r.toFloat(), a = e.complex(o, n);
      return n.dispose(), o.dispose(), a;
    }
    if (!ac(r.dtype, t)) return T.makeTensorFromDataId(r.dataId, r.shape, t);
    if (r.dtype === 'complex64') {
      var i = e.real(r);
      return a = i.cast(t), i.dispose(), a;
    }
    if (t === 'int32') return e.int(r);
    if (t === 'bool') {
      var s = X(0, r.dtype);
      return a = e.notEqual(r, s), s.dispose(), a;
    }
    throw new Error('Error in Cast: failed to cast ' + r.dtype + ' to ' + t);
  }

  function $o(r, t) {
    return T.makeTensorFromDataId(r.dataId, t, r.dtype);
  }

  function Ki(r, t, e) {
    var n = (t - r) / (e - 1), o = Ar(e, 'float32');
    o[0] = r;
    for (var a = 1; a < o.length; a++) o[a] = o[a - 1] + n;
    return Oe(o, 'float32');
  }

  Object.freeze({
    castTensor: Xi,
    reshapeTensor: $o,
    linspaceImpl: Ki,
    upcastType: je,
    axesAreInnerMostDims: Li,
    combineLocations: zc,
    computeOutAndReduceShapes: $e,
    expandShapeToKeepDim: lt,
    assertAxesAreInnerMostDims: ft,
    getAxesPermutation: Pt,
    getUndoAxesPermutation: sa,
    getInnerMostAxes: Ot,
    getBroadcastDims: sn,
    getReductionAxes: Le,
    assertAndGetBroadcastShape: le,
    assertParamsConsistent: Vc,
    computeOutShape: $n,
    computePool2DInfo: Ir,
    computePool3DInfo: Jr,
    computeConv2DInfo: On,
    computeConv3DInfo: Qr,
    computeDefaultPad: ji,
    tupleValuesAreOne: Zn,
    eitherStridesOrDilationsAreOne: ht,
    convertConv2DDataFormat: ha,
    PARALLELIZE_THRESHOLD: Gi,
    computeOptimalWindowSize: Mo,
  });

  function xi(r, t) {
    if (r.length !== t.length) throw new Error('Cannot merge real and imag arrays of different lengths. real:' + r.length + ', imag: ' + t.length + '.');
    for (var e = new Float32Array(2 * r.length), n = 0; n < e.length; n += 2) e[n] = r[n / 2], e[n + 1] = t[n / 2];
    return e;
  }

  function Qs(r, t) {
    return { real: r[2 * t], imag: r[2 * t + 1] };
  }

  function Xd(r, t, e, n) {
    r[2 * n] = t, r[2 * n + 1] = e;
  }

  function Kd(r, t, e) {
    var n = (e ? 2 : -2) * Math.PI * (r / t);
    return { real: Math.cos(n), imag: Math.sin(n) };
  }

  function Yd(r, t, e) {
    var n = function (a, i, s) {
      return function (u, c, l) {
        for (var h = 0, f = u.length, d = 0, p = !1; h < f;) {
          var v = l(c, u[d = h + (f - h >>> 1)]);
          v > 0 ? h = d + 1 : (f = d, p = !v);
        }
        return p ? h : -h - 1;
      }(a, i, s || $d);
    }(r, t, e), o = n < 0 ? -(n + 1) : n;
    r.splice(o, 0, t);
  }

  function $d(r, t) {
    return r > t ? 1 : r < t ? -1 : 0;
  }

  function Yi(r, t, e, n, o) {
    return ol(r, t, e, n, o, 0).selectedIndices;
  }

  function $i(r, t, e, n, o, a) {
    var i = ol(r, t, e, n, o, a);
    return i.numValidOutputs.dispose(), { selectedIndices: i.selectedIndices, selectedScores: i.selectedScores };
  }

  function ol(r, t, e, n, o, a, i, s) {
    s === void 0 && (s = !1);
    for (var u = Array.from(t).map(function (b, w) {
      return { score: b, boxIndex: w, suppressBeginIndex: 0 };
    }).filter(function (b) {
      return b.score > o;
    }).sort(eu), c = a > 0 ? -.5 / a : 0, l = [], h = []; l.length < e && u.length > 0;) {
      var f = u.pop(), d = f.score, p = f.boxIndex, v = f.suppressBeginIndex;
      if (d < o) break;
      for (var m = !1, g = l.length - 1; g >= v; --g) {
        var y = Zd(r, p, l[g]);
        if (y >= n) {
          m = !0;
          break;
        }
        if (f.score = f.score * Jd(n, c, y), f.score <= o) break;
      }
      f.suppressBeginIndex = l.length, m || (f.score === d ? (l.push(p), h.push(f.score)) : f.score > o && Yd(u, f, eu));
    }
    var x = l.length;
    return s && (l.fill(0, x), h.fill(0, x)), {
      selectedIndices: Oe(l, 'int32'),
      selectedScores: Oe(h, 'float32'),
      numValidOutputs: X(x, 'int32'),
    };
  }

  function Zd(r, t, e) {
    var n = r.subarray(4 * t, 4 * t + 4), o = r.subarray(4 * e, 4 * e + 4), a = Math.min(n[0], n[2]),
      i = Math.min(n[1], n[3]), s = Math.max(n[0], n[2]), u = Math.max(n[1], n[3]), c = Math.min(o[0], o[2]),
      l = Math.min(o[1], o[3]), h = Math.max(o[0], o[2]), f = Math.max(o[1], o[3]), d = (s - a) * (u - i),
      p = (h - c) * (f - l);
    if (d <= 0 || p <= 0) return 0;
    var v = Math.max(a, c), m = Math.max(i, l), g = Math.min(s, h), y = Math.min(u, f),
      x = Math.max(g - v, 0) * Math.max(y - m, 0);
    return x / (d + p - x);
  }

  function Jd(r, t, e) {
    var n = Math.exp(t * e * e);
    return e <= r ? n : 0;
  }

  function eu(r, t) {
    return r.score - t.score || r.score === t.score && t.boxIndex - r.boxIndex;
  }

  function al(r, t, e) {
    var n = new Array(r.rank).fill(0), o = r.shape.slice();
    return t.map(function (a) {
      o[e] = a;
      var i = r.slice(n, o);
      return n[e] += a, i;
    });
  }

  function il(r, t) {
    for (var e = new Array(r.rank), n = 0; n < e.length; n++) e[n] = r.shape[n] * t[n];
    var o = ae(e, r.dtype);
    for (n = 0; n < o.values.length; ++n) {
      for (var a = o.indexToLoc(n), i = new Array(r.rank), s = 0; s < i.length; s++) i[s] = a[s] % r.shape[s];
      var u = r.locToIndex(i);
      o.values[n] = r.values[u];
    }
    return o.toTensor();
  }

  function sl(r, t, e, n, o) {
    for (var a = t[t.length - 1], i = [r.length / a, a], s = i[0], u = i[1], c = Er(e, s * n), l = Er('int32', s * n), h = 0; h < s; h++) {
      for (var f = h * u, d = r.subarray(f, f + u), p = [], v = 0; v < d.length; v++) p.push({ value: d[v], index: v });
      p.sort(function (b, w) {
        return w.value - b.value;
      });
      var m = h * n, g = c.subarray(m, m + n), y = l.subarray(m, m + n);
      for (v = 0; v < n; v++) g[v] = p[v].value, y[v] = p[v].index;
    }
    var x = t.slice();
    return x[x.length - 1] = n, [Ze(c, x, e), Ze(l, x, 'int32')];
  }

  function Zi(r, t) {
    for (var e = [], n = 0; n < t.length; n++) t[n] && e.push(n);
    var o = ae(r, 'int32'), a = ae([e.length, r.length], 'int32');
    for (n = 0; n < e.length; n++) {
      var i = o.indexToLoc(e[n]), s = n * r.length;
      a.values.set(i, s);
    }
    return a.toTensor();
  }

  var Qd = function (r, t) {
    this.outputShape = [], this.outputShape = r, this.variableNames = t.map(function (o, a) {
      return 'T' + a;
    });
    var e = [];
    this.variableNames.forEach(function (o) {
      e.push('float v' + o + ' = get' + o + 'AtOutCoords();');
    });
    var n = this.variableNames.map(function (o) {
      return 'v' + o;
    }).join(' + ');
    this.userCode = `
      void main() {
        ` + e.join(`
        `) + `

        float result = ` + n + `;
        setOutput(result);
      }
    `;
  }, ep = function (r, t) {
    this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r, this.variableNames = t.map(function (o, a) {
      return 'T' + a;
    });
    var e = [];
    this.variableNames.forEach(function (o) {
      e.push('vec4 v' + o + ' = get' + o + 'AtOutCoords();');
    });
    var n = this.variableNames.map(function (o) {
      return 'v' + o;
    }).join(' + ');
    this.userCode = `
      void main() {
        ` + e.join(`
        `) + `

        vec4 result = ` + n + `;
        setOutput(result);
      }
    `;
  }, tp = function (r, t, e) {
    this.variableNames = ['A'];
    var n = r.windowSize, o = r.batchSize, a = r.inSize, i = Math.ceil(a / n);
    e || this.variableNames.push('bestIndicesA'), this.outputShape = [o, i];
    var s = t === 'max' ? '>' : '<', u = e ? 'inOffset + i;' : 'round(getBestIndicesA(batch, inOffset + i));';
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ` + n + `;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ` + n + `; i++) {
          int inIdx = ` + u + `;
          float candidate = getA(batch, inIdx);
          if (candidate ` + s + ` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `;
  };

  function ul(r, t) {
    return ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, t).map(function (e) {
      return r + '.' + e;
    });
  }

  function pt(r, t) {
    return t === 1 ? [r] : ul(r, t);
  }

  function rt() {
    var r, t, e, n, o, a, i, s, u, c;
    return O().getNumber('WEBGL_VERSION') === 2 ? (r = '#version 300 es', t = 'in', e = 'out', n = 'in', o = 'texture', a = 'outputColor', i = 'out vec4 outputColor;', s = `
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `, u = '', c = `
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `) : (r = '', t = 'attribute', e = 'varying', n = 'varying', o = 'texture2D', a = 'gl_FragColor', i = '', s = `
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `, u = `
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `, c = `
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `), {
      version: r,
      attribute: t,
      varyingVs: e,
      varyingFs: n,
      texture2D: o,
      output: a,
      defineOutput: i,
      defineSpecialNaN: s,
      defineSpecialInf: u,
      defineRound: c,
    };
  }

  function qn(r, t, e) {
    e === void 0 && (e = 'index');
    var n = Ft(t);
    return n.map(function (o, a) {
      return 'int ' + r[a] + ' = ' + e + ' / ' + o + '; ' + (a === n.length - 1 ? 'int ' + r[a + 1] + ' = ' + e + ' - ' + r[a] + ' * ' + o : 'index -= ' + r[a] + ' * ' + o) + ';';
    }).join('');
  }

  function Ji(r) {
    var t = Ft(r).map(function (e) {
      return e.toString();
    });
    return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * ` + t[0] + ' + coords.y * ' + t[1] + ` + coords.z;
  }
`;
  }

  var cl = `
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;

  function np(r, t, e, n) {
    var o = [];
    r.forEach(function (d) {
      var p = J(d.shapeInfo.logicalShape);
      d.shapeInfo.isUniform ? o.push('uniform float ' + d.name + (p > 1 ? '[' + p + ']' : '') + ';') : (o.push('uniform sampler2D ' + d.name + ';'), o.push('uniform int offset' + d.name + ';'));
    });
    var a, i, s = o.join(`
`), u = r.map(function (d) {
      return function (p, v, m) {
        m === void 0 && (m = !1);
        var g = '';
        g += m ? ll(p) : fr(p);
        var y = p.shapeInfo.logicalShape, x = v.logicalShape;
        return y.length <= x.length && (g += m ? function (b, w) {
          var _, S = b.name, E = S.charAt(0).toUpperCase() + S.slice(1), I = 'get' + E + 'AtOutCoords',
            R = b.shapeInfo.logicalShape.length, F = w.logicalShape.length,
            D = sn(b.shapeInfo.logicalShape, w.logicalShape), L = Ce(F), B = F - R, W = ['x', 'y', 'z', 'w', 'u', 'v'];
          _ = R === 0 ? '' : F < 2 && D.length >= 1 ? 'coords = 0;' : D.map(function (j) {
            return 'coords.' + W[j + B] + ' = 0;';
          }).join(`
`);
          var V = '';
          V = F < 2 && R > 0 ? 'coords' : b.shapeInfo.logicalShape.map(function (j, te) {
            return 'coords.' + W[te + B];
          }).join(', ');
          var z = 'return outputValue;', U = J(b.shapeInfo.logicalShape) === 1, q = J(w.logicalShape) === 1;
          if (R !== 1 || U || q) {
            if (U && !q) z = F === 1 ? `
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      ` : `
        return vec4(outputValue.x);
      `; else if (D.length) {
              var P = R - 2, H = R - 1;
              D.indexOf(P) > -1 && D.indexOf(H) > -1 ? z = 'return vec4(outputValue.x);' : D.indexOf(P) > -1 ? z = 'return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);' : D.indexOf(H) > -1 && (z = 'return vec4(outputValue.xx, outputValue.zz);');
            }
          } else z = `
      return vec4(outputValue.xy, outputValue.xy);
    `;
          return `
    vec4 ` + I + `() {
      ` + L + ` coords = getOutputCoords();
      ` + _ + `
      vec4 outputValue = get` + E + '(' + V + `);
      ` + z + `
    }
  `;
        }(p, v) : function (b, w) {
          var _ = b.name, S = _.charAt(0).toUpperCase() + _.slice(1), E = 'get' + S + 'AtOutCoords', I = w.texShape,
            R = b.shapeInfo.texShape, F = b.shapeInfo.logicalShape.length, D = w.logicalShape.length;
          if (!b.shapeInfo.isUniform && F === D && b.shapeInfo.flatOffset == null && Be(R, I)) return `
      float ` + E + `() {
        return sampleTexture(` + _ + `, resultUV);
      }
    `;
          var L, B = Ce(D), W = sn(b.shapeInfo.logicalShape, w.logicalShape), V = D - F,
            z = ['x', 'y', 'z', 'w', 'u', 'v'];
          L = F === 0 ? '' : D < 2 && W.length >= 1 ? 'coords = 0;' : W.map(function (q) {
            return 'coords.' + z[q + V] + ' = 0;';
          }).join(`
`);
          var U = '';
          return U = D < 2 && F > 0 ? 'coords' : b.shapeInfo.logicalShape.map(function (q, P) {
            return 'coords.' + z[P + V];
          }).join(', '), `
    float ` + E + `() {
      ` + B + ` coords = getOutputCoords();
      ` + L + `
      return get` + S + '(' + U + `);
    }
  `;
        }(p, v)), g;
      }(d, t, n);
    }).join(`
`), c = t.texShape, l = rt(), h = function (d) {
      return `
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ` + d.texture2D + `(textureSampler, uv).r;
    }
  `;
    }(l), f = function (d) {
      return d.version + `
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ` + d.varyingFs + ` vec2 resultUV;
    ` + d.defineOutput + `
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ` + d.defineSpecialNaN + `
    ` + d.defineSpecialInf + `
    ` + d.defineRound + `

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ` + rp + `
    ` + op + `
    ` + ap + `
  `;
    }(l);
    return t.isPacked ? (a = function (d, p) {
      switch (d.length) {
        case 0:
          return `
    int getOutputCoords() {
      return 0;
    }
  `;
        case 1:
          return function (b, w) {
            var _ = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)];
            return _[0] === 1 ? `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ` + _[1] + `.0);
      }
    ` : _[1] === 1 ? `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ` + _[0] + `.0);
      }
    ` : `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + _[0] + ', ' + _[1] + `));
      return 2 * (resTexRC.x * ` + _[1] + ` + resTexRC.y);
    }
  `;
          }(0, p);
        case 2:
          return function (b, w) {
            var _ = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)];
            if (Be(b, w)) return `
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(` + _[0] + ', ' + _[1] + `));
      }
    `;
            var S = Math.ceil(b[1] / 2);
            return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + _[0] + ', ' + _[1] + `));

      int index = resTexRC.x * ` + _[1] + ` + resTexRC.y;
      int r = 2 * (index / ` + S + `);
      int c = imod(index, ` + S + `) * 2;

      return ivec2(r, c);
    }
  `;
          }(d, p);
        case 3:
          return v = d, m = p, g = [Math.ceil(m[0] / 2), Math.ceil(m[1] / 2)], y = Math.ceil(v[2] / 2), x = y * Math.ceil(v[1] / 2), `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + g[0] + ', ' + g[1] + `));
      int index = resTexRC.x * ` + g[1] + ` + resTexRC.y;

      int b = index / ` + x + `;
      index -= b * ` + x + `;

      int r = 2 * (index / ` + y + `);
      int c = imod(index, ` + y + `) * 2;

      return ivec3(b, r, c);
    }
  `;
        default:
          return function (b, w) {
            for (var _ = [Math.ceil(w[0] / 2), Math.ceil(w[1] / 2)], S = Math.ceil(b[b.length - 1] / 2), E = S * Math.ceil(b[b.length - 2] / 2), I = E, R = '', F = 'b, r, c', D = 2; D < b.length - 1; D++) I *= b[b.length - D - 1], R = `
      int b` + D + ' = index / ' + I + `;
      index -= b` + D + ' * ' + I + `;
    ` + R, F = 'b' + D + ', ' + F;
            return `
    ivec` + b.length + ` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + _[0] + ', ' + _[1] + `));
      int index = resTexRC.x * ` + _[1] + ` + resTexRC.y;

      ` + R + `

      int b = index / ` + E + `;
      index -= b * ` + E + `;

      int r = 2 * (index / ` + S + `);
      int c = imod(index, ` + S + `) * 2;

      return ivec` + b.length + '(' + F + `);
    }
  `;
          }(d, p);
      }
      var v, m, g, y, x;
    }(t.logicalShape, c), i = function (d) {
      return `
    void setOutput(vec4 val) {
      ` + d.output + ` = val;
    }
  `;
    }(l)) : (a = function (d, p) {
      switch (d.length) {
        case 0:
          return `
    int getOutputCoords() {
      return 0;
    }
  `;
        case 1:
          return function (g, y) {
            return y[0] === 1 ? `
      int getOutputCoords() {
        return int(resultUV.x * ` + y[1] + `.0);
      }
    ` : y[1] === 1 ? `
      int getOutputCoords() {
        return int(resultUV.y * ` + y[0] + `.0);
      }
    ` : `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + y[0] + ', ' + y[1] + `));
      return resTexRC.x * ` + y[1] + ` + resTexRC.y;
    }
  `;
          }(0, p);
        case 2:
          return function (g, y) {
            return Be(g, y) ? `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(` + y[0] + ', ' + y[1] + `));
      }
    ` : g[1] === 1 ? `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(` + y[0] + ', ' + y[1] + `));
        int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
        return ivec2(index, 0);
      }
    ` : g[0] === 1 ? `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(` + y[0] + ', ' + y[1] + `));
        int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
        return ivec2(0, index);
      }
    ` : `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + y[0] + ', ' + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
      int r = index / ` + g[1] + `;
      int c = index - r * ` + g[1] + `;
      return ivec2(r, c);
    }
  `;
          }(d, p);
        case 3:
          return v = p, m = qn(['r', 'c', 'd'], d), `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(` + v[0] + ', ' + v[1] + `));
      int index = resTexRC.x * ` + v[1] + ` + resTexRC.y;
      ` + m + `
      return ivec3(r, c, d);
    }
  `;
        case 4:
          return function (g, y) {
            var x = qn(['r', 'c', 'd', 'd2'], g);
            return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(` + y[0] + ', ' + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;
      ` + x + `
      return ivec4(r, c, d, d2);
    }
  `;
          }(d, p);
        case 5:
          return function (g, y) {
            var x = qn(['r', 'c', 'd', 'd2', 'd3'], g);
            return `
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(` + y[0] + `,
                             ` + y[1] + `));

      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;

      ` + x + `

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;
          }(d, p);
        case 6:
          return function (g, y) {
            var x = qn(['r', 'c', 'd', 'd2', 'd3', 'd4'], g);
            return `
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(` + y[0] + ', ' + y[1] + `));
      int index = resTexRC.x * ` + y[1] + ` + resTexRC.y;

      ` + x + `

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;
          }(d, p);
        default:
          throw new Error(d.length + '-D output sampling is not yet supported');
      }
      var v, m;
    }(t.logicalShape, c), i = function (d) {
      return `
    void setOutput(float val) {
      ` + d.output + ` = vec4(val, 0, 0, 0);
    }
  `;
    }(l)), n && (f += ip), [f, h, i, s, a, u, e].join(`
`);
  }

  function fr(r) {
    var t = r.shapeInfo.logicalShape;
    switch (t.length) {
      case 0:
        return function (e) {
          var n = e.name, o = 'get' + n.charAt(0).toUpperCase() + n.slice(1);
          if (e.shapeInfo.isUniform) return 'float ' + o + '() {return ' + n + ';}';
          var a = e.shapeInfo.texShape, i = a[0], s = a[1];
          if (i === 1 && s === 1) return `
      float ` + o + `() {
        return sampleTexture(` + n + `, halfCR);
      }
    `;
          var u = e.shapeInfo.texShape, c = u[0], l = u[1], h = Wn(n);
          return `
    float ` + o + `() {
      vec2 uv = uvFromFlat(` + c + ', ' + l + ', ' + h + `);
      return sampleTexture(` + n + `, uv);
    }
  `;
        }(r);
      case 1:
        return function (e) {
          var n = e.name, o = 'get' + n.charAt(0).toUpperCase() + n.slice(1);
          if (e.shapeInfo.isUniform) return `
      float ` + o + `(int index) {
        ` + ur(e) + `
      }
    `;
          var a = e.shapeInfo.texShape, i = a[0], s = a[1];
          if (s === 1 && i === 1) return `
      float ` + o + `(int index) {
        return sampleTexture(` + n + `, halfCR);
      }
    `;
          var u = Wn(n);
          return s === 1 ? `
      float ` + o + `(int index) {
        vec2 uv = vec2(0.5, (float(index + ` + u + ') + 0.5) / ' + i + `.0);
        return sampleTexture(` + n + `, uv);
      }
    ` : i === 1 ? `
      float ` + o + `(int index) {
        vec2 uv = vec2((float(index + ` + u + ') + 0.5) / ' + s + `.0, 0.5);
        return sampleTexture(` + n + `, uv);
      }
    ` : `
    float ` + o + `(int index) {
      vec2 uv = uvFromFlat(` + i + ', ' + s + ', index + ' + u + `);
      return sampleTexture(` + n + `, uv);
    }
  `;
        }(r);
      case 2:
        return function (e) {
          var n = e.shapeInfo.logicalShape, o = e.name, a = 'get' + o.charAt(0).toUpperCase() + o.slice(1),
            i = e.shapeInfo.texShape;
          if (i != null && Be(n, i)) {
            var s = i[0], u = i[1];
            return `
    float ` + a + `(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(` + u + '.0, ' + s + `.0);
      return sampleTexture(` + o + `, uv);
    }
  `;
          }
          var c = _n(n), l = c.newShape, h = c.keptDims, f = l;
          if (f.length < n.length) {
            var d = dr(e, f);
            return `
      ` + fr(d) + `
      float ` + a + `(int row, int col) {
        return ` + a + '(' + pr(['row', 'col'], h) + `);
      }
    `;
          }
          if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(` + n[1] + `, 1)));
        ` + ur(e) + `
      }
    `;
          var p = i[0], v = i[1], m = Wn(o);
          return v === 1 ? `
    float ` + a + `(int row, int col) {
      float index = dot(vec3(row, col, ` + m + '), vec3(' + n[1] + `, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ` + p + `.0);
      return sampleTexture(` + o + `, uv);
    }
  ` : p === 1 ? `
    float ` + a + `(int row, int col) {
      float index = dot(vec3(row, col, ` + m + '), vec3(' + n[1] + `, 1, 1));
      vec2 uv = vec2((index + 0.5) / ` + v + `.0, 0.5);
      return sampleTexture(` + o + `, uv);
    }
  ` : `
  float ` + a + `(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ` + n[1] + ' + col + ' + m + `;
    vec2 uv = uvFromFlat(` + p + ', ' + v + `, index);
    return sampleTexture(` + o + `, uv);
  }
`;
        }(r);
      case 3:
        return function (e) {
          var n = e.shapeInfo.logicalShape, o = e.name, a = 'get' + o.charAt(0).toUpperCase() + o.slice(1),
            i = n[1] * n[2], s = n[2], u = _n(n), c = u.newShape, l = u.keptDims, h = c;
          if (h.length < n.length) {
            var f = dr(e, h);
            return `
        ` + fr(f) + `
        float ` + a + `(int row, int col, int depth) {
          return ` + a + '(' + pr(['row', 'col', 'depth'], l) + `);
        }
      `;
          }
          if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(` + i + ', ' + s + `, 1)));
        ` + ur(e) + `
      }
    `;
          var d = e.shapeInfo.texShape, p = d[0], v = d[1], m = e.shapeInfo.flatOffset;
          if (v === i && m == null) return `
        float ` + a + `(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(` + s + `, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(` + v + '.0, ' + p + `.0);
          return sampleTexture(` + o + `, uv);
        }
      `;
          if (v === s && m == null) return `
    float ` + a + `(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(` + n[1] + `, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + v + '.0, ' + p + `.0);
      return sampleTexture(` + o + `, uv);
    }
  `;
          var g = Wn(o);
          return `
      float ` + a + `(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ` + i + ' + col * ' + s + ' + depth + ' + g + `;
        vec2 uv = uvFromFlat(` + p + ', ' + v + `, index);
        return sampleTexture(` + o + `, uv);
      }
  `;
        }(r);
      case 4:
        return function (e) {
          var n = e.shapeInfo.logicalShape, o = e.name, a = 'get' + o.charAt(0).toUpperCase() + o.slice(1), i = n[3],
            s = n[2] * i, u = n[1] * s, c = _n(n), l = c.newShape, h = c.keptDims;
          if (l.length < n.length) {
            var f = dr(e, l);
            return `
      ` + fr(f) + `
      float ` + a + `(int row, int col, int depth, int depth2) {
        return ` + a + '(' + pr(['row', 'col', 'depth', 'depth2'], h) + `);
      }
    `;
          }
          if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(` + u + ', ' + s + ', ' + i + `, 1)));
        ` + ur(e) + `
      }
    `;
          var d = e.shapeInfo.flatOffset, p = e.shapeInfo.texShape, v = p[0], m = p[1];
          if (m === u && d == null) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(` + s + ', ' + i + `, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + m + '.0, ' + v + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          if (m === i && d == null) return `
      float ` + a + `(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(` + n[1] * n[2] + ', ' + n[2] + `, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + m + '.0, ' + v + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          var g = Wn(o);
          return `
    float ` + a + `(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + u + ' + col * ' + s + ` +
          depth * ` + i + ` + depth2;
      vec2 uv = uvFromFlat(` + v + ', ' + m + ', index + ' + g + `);
      return sampleTexture(` + o + `, uv);
    }
  `;
        }(r);
      case 5:
        return function (e) {
          var n = e.shapeInfo.logicalShape, o = e.name, a = 'get' + o.charAt(0).toUpperCase() + o.slice(1), i = n[4],
            s = n[3] * i, u = n[2] * s, c = n[1] * u, l = _n(n), h = l.newShape, f = l.keptDims;
          if (h.length < n.length) {
            var d = dr(e, h);
            return `
      ` + fr(d) + `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        return ` + a + '(' + pr(['row', 'col', 'depth', 'depth2', 'depth3'], f) + `);
      }
    `;
          }
          if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(` + c + ', ' + u + ', ' + s + ', ' + i + `)) +
          depth3;
        ` + ur(e) + `
      }
    `;
          var p = e.shapeInfo.flatOffset, v = e.shapeInfo.texShape, m = v[0], g = v[1];
          if (g === c && p == null) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(` + u + ', ' + s + ', ' + i + `, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + g + '.0, ' + m + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          if (g === i && p == null) return `
      float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(` + n[1] * n[2] * n[3] + `,
               ` + n[2] * n[3] + ', ' + n[3] + `, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + g + '.0, ' + m + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          var y = Wn(o);
          return `
    float ` + a + `(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + c + ' + col * ' + u + ' + depth * ' + s + ` +
          depth2 * ` + i + ' + depth3 + ' + y + `;
      vec2 uv = uvFromFlat(` + m + ', ' + g + `, index);
      return sampleTexture(` + o + `, uv);
    }
  `;
        }(r);
      case 6:
        return function (e) {
          var n = e.shapeInfo.logicalShape, o = e.name, a = 'get' + o.charAt(0).toUpperCase() + o.slice(1), i = _n(n),
            s = i.newShape, u = i.keptDims;
          if (s.length < n.length) {
            var c = dr(e, s);
            return `
      ` + fr(c) + `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ` + a + '(' + pr(['row', 'col', 'depth', 'depth2', 'depth3', 'depth4'], u) + `);
      }
    `;
          }
          var l = n[5], h = n[4] * l, f = n[3] * h, d = n[2] * f, p = n[1] * d;
          if (e.shapeInfo.isUniform) return `
      float ` + a + `(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(` + p + ', ' + d + ', ' + f + ', ' + h + `)) +
          dot(
            vec2(depth3, depth4),
            vec2(` + l + `, 1)));
        ` + ur(e) + `
      }
    `;
          var v = e.shapeInfo.flatOffset, m = e.shapeInfo.texShape, g = m[0], y = m[1];
          if (y === p && v == null) return `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(` + d + ', ' + f + ', ' + h + ', ' + l + `)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(` + y + '.0, ' + g + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          if (y === l && v == null) return `
      float ` + a + `(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(` + n[1] * n[2] * n[3] * n[4] + `,
               ` + n[2] * n[3] * n[4] + `,
               ` + n[3] * n[4] + `,
               ` + n[4] + `)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(` + y + '.0, ' + g + `.0);
        return sampleTexture(` + o + `, uv);
      }
    `;
          var x = Wn(o);
          return `
    float ` + a + `(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ` + p + ' + col * ' + d + ' + depth * ' + f + ` +
          depth2 * ` + h + ' + depth3 * ' + l + ' + depth4 + ' + x + `;
      vec2 uv = uvFromFlat(` + g + ', ' + y + `, index);
      return sampleTexture(` + o + `, uv);
    }
  `;
        }(r);
      default:
        throw new Error(t.length + '-D input sampling is not yet supported');
    }
  }

  function ll(r) {
    var t, e, n;
    switch (r.shapeInfo.logicalShape.length) {
      case 0:
        return t = r.name, e = 'get' + t.charAt(0).toUpperCase() + t.slice(1), n = rt(), `
    vec4 ` + e + `() {
      return ` + n.texture2D + '(' + t + `, halfCR);
    }
  `;
      case 1:
        return function (o) {
          var a = o.name, i = 'get' + a.charAt(0).toUpperCase() + a.slice(1), s = o.shapeInfo.texShape,
            u = [Math.ceil(s[0] / 2), Math.ceil(s[1] / 2)], c = rt();
          return `
    vec4 ` + i + `(int index) {
      vec2 uv = packedUVfrom1D(
        ` + u[0] + ', ' + u[1] + `, index);
      return ` + c.texture2D + '(' + a + `, uv);
    }
  `;
        }(r);
      case 2:
        return function (o) {
          var a = o.shapeInfo.logicalShape, i = o.name, s = 'get' + i.charAt(0).toUpperCase() + i.slice(1),
            u = o.shapeInfo.texShape, c = u[0], l = u[1], h = rt();
          if (u != null && Be(a, u)) return `
      vec4 ` + s + `(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(` + l + '.0, ' + c + `.0);

        return ` + h.texture2D + '(' + i + `, uv);
      }
    `;
          var f = [Math.ceil(u[0] / 2), Math.ceil(u[1] / 2)], d = Math.ceil(a[1] / 2);
          return `
    vec4 ` + s + `(int row, int col) {
      vec2 uv = packedUVfrom2D(` + d + ', ' + f[0] + ', ' + f[1] + `, row, col);
      return ` + h.texture2D + '(' + i + `, uv);
    }
  `;
        }(r);
      case 3:
        return function (o) {
          var a = o.shapeInfo.logicalShape, i = o.name, s = 'get' + i.charAt(0).toUpperCase() + i.slice(1),
            u = o.shapeInfo.texShape, c = [Math.ceil(u[0] / 2), Math.ceil(u[1] / 2)];
          if (a[0] === 1) {
            var l = a.slice(1), h = dr(o, l);
            return `
        ` + ll(h) + `
        vec4 ` + s + `(int b, int row, int col) {
          return ` + s + '(' + pr(['b', 'row', 'col'], [1, 2]) + `);
        }
      `;
          }
          var f = c[0], d = c[1], p = Math.ceil(a[2] / 2), v = p * Math.ceil(a[1] / 2), m = rt();
          return `
    vec4 ` + s + `(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ` + f + ', ' + d + ', ' + v + ', ' + p + `, b, row, col);
      return ` + m.texture2D + '(' + i + `, uv);
    }
  `;
        }(r);
      default:
        return function (o) {
          for (var a = o.shapeInfo.logicalShape, i = a.length, s = o.name, u = 'get' + s.charAt(0).toUpperCase() + s.slice(1), c = o.shapeInfo.texShape, l = [Math.ceil(c[0] / 2), Math.ceil(c[1] / 2)], h = l[0], f = l[1], d = Math.ceil(a[i - 1] / 2), p = d * Math.ceil(a[i - 2] / 2), v = 'int b, int row, int col', m = 'b * ' + p + ' + (row / 2) * ' + d + ' + (col / 2)', g = 2; g < i - 1; g++) v = 'int b' + g + ', ' + v, p *= a[i - g - 1], m = 'b' + g + ' * ' + p + ' + ' + m;
          var y = rt();
          return `
    vec4 ` + u + '(' + v + `) {
      int index = ` + m + `;
      int texR = index / ` + f + `;
      int texC = index - texR * ` + f + `;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + f + ', ' + h + `);
      return ` + y.texture2D + '(' + s + `, uv);
    }
  `;
        }(r);
    }
  }

  var rp = `
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, op = `
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, ap = `
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`, ip = `
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;

  function Wn(r) {
    return 'offset' + r;
  }

  function ur(r) {
    var t = r.name, e = J(r.shapeInfo.logicalShape);
    return e < 2 ? 'return ' + t + ';' : `
    for (int i = 0; i < ` + e + `; i++) {
      if (i == index) {
        return ` + t + `[i];
      }
    }
  `;
  }

  function Ce(r) {
    if (r <= 1) return 'int';
    if (r === 2) return 'ivec2';
    if (r === 3) return 'ivec3';
    if (r === 4) return 'ivec4';
    if (r === 5) return 'ivec5';
    if (r === 6) return 'ivec6';
    throw Error('GPU for rank ' + r + ' is not yet supported');
  }

  function dr(r, t) {
    var e = JSON.parse(JSON.stringify(r));
    return e.shapeInfo.logicalShape = t, e;
  }

  function pr(r, t) {
    return t.map(function (e) {
      return r[e];
    }).join(', ');
  }

  var sp = function (r, t, e, n) {
      this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, k(r.length > 2, function () {
        return 'Packed arg' + (e.charAt(0).toUpperCase() + e.slice(1)) + ' supports only inputs with rank above 2.';
      });
      var o = r[r.length - 1], a = Math.ceil(o / t);
      this.outputShape = r.slice(0, -1), a > 1 && this.outputShape.push(a), n || this.variableNames.push('bestIndicesA');
      var i, s, u = this.outputShape, c = u.length, l = Ce(c), h = pt('coords', c);
      if (a === 1) {
        var f = Ce(s = c + 1);
        i = `
        ` + f + ' sourceLocR = ' + f + '(' + h.join() + `, 0);
        ++` + h[c - 1] + `;
        ` + f + ' sourceLocG = ' + f + '(' + h.join() + `, 0);
        ++` + h[c - 2] + `;
        ` + f + ' sourceLocA = ' + f + '(' + h.join() + `, 0);
        --` + h[c - 1] + `;
        ` + f + ' sourceLocB = ' + f + '(' + h.join() + `, 0);
        --` + h[c - 2] + ';';
      } else s = c, i = `
        ` + l + ` sourceLocR = coords;
        ++` + h[c - 1] + `;
        ` + l + ` sourceLocG = coords;
        ++` + h[c - 2] + `;
        ` + l + ` sourceLocA = coords;
        --` + h[c - 1] + `;
        ` + l + ` sourceLocB = coords;
        --` + h[c - 2] + ';';
      var d = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, s), p = '.' + d[s - 1], v = d.map(function (E) {
          return 'int ' + E;
        }), m = pt('sourceLocR', s - 1).concat('inIdx.r'), g = pt('sourceLocG', s - 1).concat('inIdx.g'),
        y = pt('sourceLocB', s - 1).concat('inIdx.b'), x = pt('sourceLocA', s - 1).concat('inIdx.a'),
        b = e === 'max' ? 'greaterThan' : 'lessThan', w = n ? '' : `
          inIdx = round(vec4(getBestIndicesAChannel(` + m.join() + `),
                             getBestIndicesAChannel(` + g.join() + `),
                             getBestIndicesAChannel(` + y.join() + `),
                             getBestIndicesAChannel(` + x.join() + ')));', _ = `vec4(
            getAChannel(` + m.join() + `),
            hasNextCol ? getAChannel(` + g.join() + `) : 0.,
            hasNextRow ? getAChannel(` + y.join() + `) : 0.,
            hasNextRow && hasNextCol ? getAChannel(` + x.join() + ') : 0.)', S = n ? '' : `
      float getBestIndicesAChannel(` + v.join() + `) {
        return getChannel(getBestIndicesA(` + d.join() + `),
                                          vec2(` + d.slice(-2).join() + `));
      }`;
      this.userCode = `
      float getAChannel(` + v.join() + `) {
        return getChannel(getA(` + d.join() + `),
                               vec2(` + d.slice(-2).join() + `));
      }
      ` + S + `
      void main() {
        ` + l + ` coords = getOutputCoords();
        bool hasNextCol = ` + h[c - 1] + ' < ' + (u[c - 1] - 1) + `;
        bool hasNextRow = ` + h[c - 2] + ' < ' + (u[c - 2] - 1) + `;
        ` + i + `
        ivec4 srcIdx = ivec4(sourceLocR` + p + ', sourceLocG' + p + `,
          sourceLocB` + p + ', sourceLocA' + p + ') * ' + t + `;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ` + _ + `;

        for (int i = 0; i < ` + t + `; i++) {
          inIdx = srcIdx;
          ` + w + `
          vec4 candidate = ` + _ + `;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(` + b + `(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `;
    }, up = function (r) {
      this.variableNames = ['dy'], this.outputShape = r.inShape;
      var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth, a = r.dilationHeight,
        i = r.dilationWidth, s = r.effectiveFilterHeight, u = r.effectiveFilterWidth, c = s - 1 - r.padInfo.top,
        l = u - 1 - r.padInfo.left, h = 1 / (t * e);
      this.userCode = `
      const ivec2 pads = ivec2(` + c + ', ' + l + `);
      const float avgMultiplier = float(` + h + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + s + `;
            wR += ` + a + `) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ` + u + `;
            wC+= ` + i + `) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `;
    }, cp = function (r) {
      this.variableNames = ['dy'], this.outputShape = r.inShape;
      var t = r.filterDepth, e = r.filterHeight, n = r.filterWidth, o = r.strideDepth, a = r.strideHeight,
        i = r.strideWidth, s = r.dilationDepth, u = r.dilationHeight, c = r.dilationWidth, l = r.effectiveFilterDepth,
        h = r.effectiveFilterHeight, f = r.effectiveFilterWidth, d = l - 1 - r.padInfo.front, p = h - 1 - r.padInfo.top,
        v = f - 1 - r.padInfo.left, m = 1 / (t * e * n);
      this.userCode = `
      const ivec3 pads = ivec3(` + d + ', ' + p + ', ' + v + `);
      const float avgMultiplier = float(` + m + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ` + l + `;
            wD += ` + s + `) {
          float dyD = float(dyDCorner + wD) / ` + o + `.0;

          if (dyD < 0.0 || dyD >= ` + r.outDepth + `.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ` + h + `;
              wR += ` + u + `) {
            float dyR = float(dyRCorner + wR) / ` + a + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ` + f + `;
                wC += ` + c + `) {
              float dyC = float(dyCCorner + wC) / ` + i + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }, lp = function (r, t, e, n, o, a) {
      this.outputShape = [], this.variableNames = ['x', 'mean', 'variance'], le(r, t), le(r, e);
      var i = '0.0';
      n != null && (le(r, n), this.variableNames.push('offset'), i = 'getOffsetAtOutCoords()');
      var s = '1.0';
      o != null && (le(r, o), this.variableNames.push('scale'), s = 'getScaleAtOutCoords()'), this.outputShape = r, this.userCode = `
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ` + i + `;
        float scale = ` + s + `;
        float inv = scale * inversesqrt(variance + float(` + a + `));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `;
    }, hp = function (r, t, e, n, o, a) {
      this.packedInputs = !0, this.packedOutput = !0, this.variableNames = ['x', 'mean', 'variance'], le(r, t), le(r, e);
      var i = 'vec4(0.0)';
      n != null && (le(r, n), this.variableNames.push('offset'), i = 'getOffsetAtOutCoords()');
      var s = 'vec4(1.0)';
      o != null && (le(r, o), this.variableNames.push('scale'), s = 'getScaleAtOutCoords()'), this.outputShape = r, this.userCode = `
      void main() {
        vec4 offset = ` + i + `;
        vec4 scale = ` + s + `;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(` + a + `));

        setOutput((x - mean) * inv + offset);
      }
    `;
    }, fp = 'return areal * breal - aimag * bimag;', dp = 'return areal * bimag + aimag * breal;',
    tu = function (r, t, e) {
      this.variableNames = ['AReal', 'AImag', 'BReal', 'BImag'], this.outputShape = le(t, e), this.userCode = `
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ` + r + `
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `;
    }, Oa = 'return a + b;', Ba = 'return a - b;', nu = 'return a * b;', hl = 'return (a < 0.) ? b * a : a;',
    Ne = function (r, t, e) {
      this.variableNames = ['A', 'B'], this.outputShape = le(t, e), this.userCode = `
      float binaryOperation(float a, float b) {
        ` + r + `
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `;
    }, fl = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`, on = function (r, t, e, n) {
      n === void 0 && (n = !1), this.variableNames = ['A', 'B'], this.supportsBroadcasting = !0, this.packedInputs = !0, this.packedOutput = !0, this.outputShape = le(t, e);
      var o = this.outputShape.length, a = '';
      if (n) if (o === 0 || J(this.outputShape) === 1) a = `
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `; else if (a = `
          ` + Ce(o) + ` coords = getOutputCoords();
        `, o === 1) a += `
            result.y = (coords + 1) >= ` + this.outputShape[0] + ` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `; else {
        var i = pt('coords', o);
        a += `
            bool nextRowOutOfBounds =
              (` + i[o - 2] + ' + 1) >= ' + this.outputShape[o - 2] + `;
            bool nextColOutOfBounds =
              (` + i[o - 1] + ' + 1) >= ' + this.outputShape[o - 1] + `;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
      }
      this.userCode = `
      vec4 binaryOperation(vec4 a, vec4 b) {
        ` + r + `
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ` + a + `

        setOutput(result);
      }
    `;
    }, pp = function () {
      function r(t) {
        this.variableNames = ['A'], this.outputShape = t, this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `;
      }

      return r.prototype.getCustomSetupFunc = function (t, e) {
        var n = this;
        return function (o, a) {
          n.minLoc == null && (n.minLoc = o.getUniformLocationNoThrow(a, 'minVal'), n.maxLoc = o.getUniformLocationNoThrow(a, 'maxVal')), o.gl.uniform1f(n.minLoc, t), o.gl.uniform1f(n.maxLoc, e);
        };
      }, r;
    }(), vp = function () {
      function r(t) {
        this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `;
      }

      return r.prototype.getCustomSetupFunc = function (t, e) {
        var n = this;
        return function (o, a) {
          n.minLoc == null && (n.minLoc = o.getUniformLocationNoThrow(a, 'minVal'), n.maxLoc = o.getUniformLocationNoThrow(a, 'maxVal')), o.gl.uniform1f(n.minLoc, t), o.gl.uniform1f(n.maxLoc, e);
        };
      }, r;
    }(), mp = function (r) {
      this.variableNames = ['real', 'imag'], this.outputShape = r, this.userCode = `
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `;
    }, gp = function (r) {
      this.outputShape = [], this.outputShape = $n(r, 1), this.variableNames = r.map(function (s, u) {
        return 'T' + u;
      });
      var t = new Array(r.length - 1);
      t[0] = r[0][1];
      for (var e = 1; e < t.length; e++) t[e] = t[e - 1] + r[e][1];
      var n = ['if (yC < ' + t[0] + ') setOutput(getT0(yR, yC));'];
      for (e = 1; e < t.length; e++) {
        var o = t[e - 1];
        n.push('else if (yC < ' + t[e] + ') setOutput(getT' + e + '(yR, yC-' + o + '));');
      }
      var a = t.length, i = t[t.length - 1];
      n.push('else setOutput(getT' + a + '(yR, yC-' + i + '));'), this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ` + n.join(`
        `) + `
      }
    `;
    }, yp = function (r, t) {
      this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [], this.outputShape = $n(r, t);
      var e = this.outputShape, n = e.length, o = Ce(n), a = pt('coords', n),
        i = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, n);
      this.variableNames = r.map(function (m, g) {
        return 'T' + g;
      });
      var s = new Array(r.length - 1);
      s[0] = r[0][t];
      for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + r[u][t];
      var c = i[t], l = i.slice(-2), h = i.join(), f = 'if (' + c + ' < ' + s[0] + `) {
        return getChannel(
            getT0(` + h + '), vec2(' + l.join() + `));
        }`;
      for (u = 1; u < s.length; u++) {
        var d = s[u - 1];
        f += `
        if (` + c + ' < ' + s[u] + '  && ' + c + ' >= ' + s[u - 1] + `) {
          return getChannel(
            getT` + u + '(' + go(i, c, d) + `),
            vec2(` + go(l, c, d) + `));
        }`;
      }
      var p = s.length, v = s[s.length - 1];
      f += `
        return getChannel(
          getT` + p + '(' + go(i, c, v) + `),
          vec2(` + go(l, c, v) + '));', this.userCode = `
      float getValue(` + i.map(function (m) {
        return 'int ' + m;
      }) + `) {
        ` + f + `
      }

      void main() {
        ` + o + ` coords = getOutputCoords();
        vec4 result = vec4(getValue(` + a + `), 0., 0., 0.);

        ` + a[n - 1] + ' = ' + a[n - 1] + ` + 1;
        if (` + a[n - 1] + ' < ' + e[n - 1] + `) {
          result.g = getValue(` + a + `);
        }

        ` + a[n - 2] + ' = ' + a[n - 2] + ` + 1;
        if (` + a[n - 2] + ' < ' + e[n - 2] + `) {
          result.a = getValue(` + a + `);
        }

        ` + a[n - 1] + ' = ' + a[n - 1] + ` - 1;
        if (` + a[n - 2] + ' < ' + e[n - 2] + ` &&
            ` + a[n - 1] + ' < ' + e[n - 1] + `) {
          result.b = getValue(` + a + `);
        }
        setOutput(result);
      }
    `;
    };

  function go(r, t, e) {
    var n = r.indexOf(t);
    return r.map(function (o, a) {
      return a === n ? o + ' - ' + e : o;
    }).join();
  }

  var bp = function (r) {
    this.variableNames = ['x', 'dy'], this.outputShape = r.filterShape;
    var t = r.strideHeight, e = r.strideWidth, n = r.padInfo.top, o = r.padInfo.left,
      a = r.dataFormat === 'channelsLast';
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
            int xR = wR + yR * ` + t + ' - ' + n + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
              int xC = wC + yC * ` + e + ' - ' + o + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              if (` + a + `) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, xp = function (r) {
    this.variableNames = ['dy', 'W'], this.outputShape = r.inShape;
    var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth,
      a = r.dataFormat === 'channelsLast', i = t - 1 - r.padInfo.top, s = e - 1 - r.padInfo.left, u = a ? 1 : 2,
      c = a ? 2 : 3, l = a ? 3 : 1;
    this.userCode = `
      const ivec2 pads = ivec2(` + i + ', ' + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[` + l + `];

        ivec2 dyCorner = ivec2(coords[` + u + '], coords[' + c + `]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + t + `; wR++) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ` + t + ` - 1 - wR;

          for (int wC = 0; wC < ` + e + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ` + e + ` - 1 - wC;

            for (int d2 = 0; d2 < ` + r.outChannels + `; d2++) {

              if (` + a + `) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, wp = function (r) {
    this.variableNames = ['x', 'dy'], this.outputShape = r.filterShape;
    var t = r.strideDepth, e = r.strideHeight, n = r.strideWidth, o = r.padInfo.front, a = r.padInfo.top,
      i = r.padInfo.left;
    this.userCode = `
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yF = 0; yF < ` + r.outDepth + `; yF++) {
            int xF = wF + yF * ` + t + ' - ' + o + `;

            if (xF < 0 || xF >= ` + r.inDepth + `) {
              continue;
            }

            for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
              int xR = wR + yR * ` + e + ' - ' + a + `;

              if (xR < 0 || xR >= ` + r.inHeight + `) {
                continue;
              }

              for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
                int xC = wC + yC * ` + n + ' - ' + i + `;

                if (xC < 0 || xC >= ` + r.inWidth + `) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, _p = function (r) {
    this.variableNames = ['dy', 'W'], this.outputShape = r.inShape;
    var t = r.filterDepth, e = r.filterHeight, n = r.filterWidth, o = r.strideDepth, a = r.strideHeight,
      i = r.strideWidth, s = t - 1 - r.padInfo.front, u = e - 1 - r.padInfo.top, c = n - 1 - r.padInfo.left;
    this.userCode = `
      const ivec3 pads = ivec3(` + s + ', ' + u + ', ' + c + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ` + t + `; wF++) {
          float dyF = float(dyFCorner + wF) / ` + o + `.0;

          if (dyF < 0.0 || dyF >= ` + r.outDepth + `.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ` + t + ` - 1 - wF;

          for (int wR = 0; wR < ` + e + `; wR++) {
            float dyR = float(dyRCorner + wR) / ` + a + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ` + e + ` - 1 - wR;

            for (int wC = 0; wC < ` + n + `; wC++) {
              float dyC = float(dyCCorner + wC) / ` + i + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ` + n + ` - 1 - wC;

              for (int d2 = 0; d2 < ` + r.outChannels + `; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, Cp = function (r) {
    this.variableNames = ['x', 'dy'], this.outputShape = r.filterShape;
    var t = r.strideHeight, e = r.strideWidth, n = r.padInfo.top, o = r.padInfo.left, a = r.outChannels / r.inChannels;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ` + a + ` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ` + r.batchSize + `; b++) {
          for (int yR = 0; yR < ` + r.outHeight + `; yR++) {
            int xR = wR + yR * ` + t + ' - ' + n + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int yC = 0; yC < ` + r.outWidth + `; yC++) {
              int xC = wC + yC * ` + e + ' - ' + o + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, Ep = function (r) {
    this.variableNames = ['dy', 'W'], this.outputShape = r.inShape;
    var t = r.filterHeight, e = r.filterWidth, n = r.strideHeight, o = r.strideWidth, a = t - 1 - r.padInfo.top,
      i = e - 1 - r.padInfo.left, s = r.outChannels / r.inChannels;
    this.userCode = `
      const ivec2 pads = ivec2(` + a + ', ' + i + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ` + t + `; wR++) {
          float dyR = float(dyRCorner + wR) / ` + n + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ` + t + ` - 1 - wR;

          for (int wC = 0; wC < ` + e + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + o + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ` + e + ` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ` + s + `; dm++) {
              int d2 = d1 * ` + s + ` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, ru = function (r, t, e, n) {
    t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ['x', 'W'], this.outputShape = r.outShape;
    var o = r.padInfo.top, a = r.padInfo.left, i = r.strideHeight, s = r.strideWidth, u = r.dilationHeight,
      c = r.dilationWidth, l = r.filterHeight, h = r.filterWidth, f = 4 * Math.floor(r.inChannels / 4),
      d = r.inChannels % 4, p = r.dataFormat === 'channelsLast', v = p ? 1 : 2, m = p ? 2 : 3, g = p ? 3 : 1, y = '',
      x = '';
    e && (y = n ? `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `
          float activation(float x) {
            ` + e + `
          }
        `, x = 'result = activation(result);');
    var b = t ? 'result += getBiasAtOutCoords();' : '';
    t && this.variableNames.push('bias'), n && this.variableNames.push('preluActivationWeights'), this.userCode = `
      ` + y + `

      const ivec2 strides = ivec2(` + i + ', ' + s + `);
      const ivec2 pads = ivec2(` + o + ', ' + a + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[` + g + `];

        ivec2 xRCCorner =
            ivec2(coords[` + v + '], coords[' + m + `]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + l + `; wR++) {
          int xR = xRCorner + wR * ` + u + `;

          if (xR < 0 || xR >= ` + r.inHeight + `) {
            continue;
          }

          for (int wC = 0; wC < ` + h + `; wC++) {
            int xC = xCCorner + wC * ` + c + `;

            if (xC < 0 || xC >= ` + r.inWidth + `) {
              continue;
            }

            for (int d1 = 0; d1 < ` + f + `; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (` + p + `) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (` + (d === 1) + `) {

              if (` + p + `) {
                dotProd +=
                    getX(batch, xR, xC, ` + f + `) *
                    getW(wR, wC, ` + f + `, d2);
              } else {
                dotProd +=
                    getX(batch, ` + f + `, xR, xC) *
                    getW(wR, wC, ` + f + `, d2);
              }

            } else if (` + (d === 2) + `) {
              vec2 wValues = vec2(
                getW(wR, wC, ` + f + `, d2),
                getW(wR, wC, ` + f + ` + 1, d2)
              );

              if (` + p + `) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ` + f + `),
                  getX(batch, xR, xC, ` + f + ` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ` + f + `, xR, xC),
                  getX(batch, ` + f + ` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (` + (d === 3) + `) {
              vec3 wValues = vec3(
                getW(wR, wC, ` + f + `, d2),
                getW(wR, wC, ` + f + ` + 1, d2),
                getW(wR, wC, ` + f + ` + 2, d2)
              );

              if (` + p + `) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ` + f + `),
                  getX(batch, xR, xC, ` + f + ` + 1),
                  getX(batch, xR, xC, ` + f + ` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ` + f + `, xR, xC),
                  getX(batch, ` + f + ` + 1, xR, xC),
                  getX(batch, ` + f + ` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ` + b + `
        ` + x + `
        setOutput(result);
      }
    `;
  }, kp = function (r) {
    this.variableNames = ['x', 'W'], this.outputShape = r.outShape;
    var t = r.padInfo.front, e = r.padInfo.top, n = r.padInfo.left, o = r.strideDepth, a = r.strideHeight,
      i = r.strideWidth, s = r.dilationDepth, u = r.dilationHeight, c = r.dilationWidth, l = r.filterDepth,
      h = r.filterHeight, f = r.filterWidth, d = 4 * Math.floor(r.inChannels / 4), p = r.inChannels % 4;
    this.userCode = `
      const ivec3 strides = ivec3(` + o + ', ' + a + ', ' + i + `);
      const ivec3 pads = ivec3(` + t + ', ' + e + ', ' + n + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ` + l + `; wF++) {
          int xF = xFCorner + wF * ` + s + `;

          if (xF < 0 || xF >= ` + r.inDepth + `) {
            continue;
          }

          for (int wR = 0; wR < ` + h + `; wR++) {
            int xR = xRCorner + wR * ` + u + `;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + f + `; wC++) {
              int xC = xCCorner + wC * ` + c + `;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              for (int d1 = 0; d1 < ` + d + `; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (` + (p === 1) + `) {
                dotProd +=
                  getX(batch, xF, xR, xC, ` + d + `) *
                  getW(wF, wR, wC, ` + d + `, d2);
              } else if (` + (p === 2) + `) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ` + d + `),
                  getX(batch, xF, xR, xC, ` + d + ` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ` + d + `, d2),
                  getW(wF, wR, wC, ` + d + ` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (` + (p === 3) + `) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ` + d + `),
                  getX(batch, xF, xR, xC, ` + d + ` + 1),
                  getX(batch, xF, xR, xC, ` + d + ` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ` + d + `, d2),
                  getW(wF, wR, wC, ` + d + ` + 1, d2),
                  getW(wF, wR, wC, ` + d + ` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, ou = function (r, t, e, n) {
    t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ['x', 'W'], this.outputShape = r.outShape;
    var o = r.inHeight, a = r.inWidth, i = r.padInfo.top, s = r.padInfo.left, u = r.strideHeight, c = r.strideWidth,
      l = r.dilationHeight, h = r.dilationWidth, f = r.filterHeight, d = r.filterWidth,
      p = r.outChannels / r.inChannels, v = '', m = '';
    e && (v = n ? `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `
          float activation(float x) {
            ` + e + `
          }
        `, m = 'result = activation(result);');
    var g = t ? 'result += getBiasAtOutCoords();' : '';
    t && this.variableNames.push('bias'), n && this.variableNames.push('preluActivationWeights'), this.userCode = `
      ` + v + `

      const ivec2 strides = ivec2(` + u + ', ' + c + `);
      const ivec2 pads = ivec2(` + i + ', ' + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ` + p + `;
        int q = d2 - d1 * ` + p + `;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ` + f + `; wR++) {
          int xR = xRCorner + wR * ` + l + `;

          if (xR < 0 || xR >= ` + o + `) {
            continue;
          }

          for (int wC = 0; wC < ` + d + `; wC++) {
            int xC = xCCorner + wC * ` + h + `;

            if (xC < 0 || xC >= ` + a + `) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ` + g + `
        ` + m + `
        setOutput(result);
      }
    `;
  }, au = function (r, t, e, n) {
    t === void 0 && (t = !1), e === void 0 && (e = null), n === void 0 && (n = !1), this.variableNames = ['x', 'W'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r.outShape;
    for (var o = r.inHeight, a = r.inWidth, i = r.padInfo.top, s = r.padInfo.left, u = r.strideHeight, c = r.strideWidth, l = r.dilationHeight, h = r.dilationWidth, f = r.filterHeight, d = r.filterWidth, p = d, v = 'int xR; int xC; int xCOffset;', m = 0; m < f; m++) for (var g = 0; g < d; g++) v += `
          vec4 xTexelR` + m + 'C' + 2 * g + ` = vec4(0.);
          vec4 wR` + m + 'C' + g + ` = vec4(0.);
          vec4 xR` + m + 'C' + g + ' = vec4(0.);';
    for (m = 0; m < f; m++) for (var y = 0; y < p; y++) {
      if (v += `
          xR = xRCorner + ` + m * l + `;
          xC = xCCorner + ` + (g = 2 * y) * h + `;
        `, c === 1) {
        if (g < d && (v += s % 2 == 1 ? `
                xCOffset = xC + 1;
                if(xR >= 0 && xR < ` + o + ' && xCOffset >= 0 && xCOffset < ' + a + `) {
                  xTexelR` + m + 'C' + g + ` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ` + a + `) {
                    xTexelR` + m + 'C' + g + `.zw = vec2(0.);
                  }
                } else {
                  xTexelR` + m + 'C' + g + ` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < ` + o + ' && xCOffset >= 0 && xCOffset < ' + a + `) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ` + a + `) {
                    previous.zw = vec2(0.);
                  }

                  xR` + m + 'C' + g + ' = vec4(previous.zw, xTexelR' + m + 'C' + g + `.xy);
                } else {
                  xR` + m + 'C' + g + ' = vec4(0, 0, xTexelR' + m + 'C' + g + `.xy);
                }
              ` : `
                if(xR >= 0 && xR < ` + o + ' && xC >= 0 && xC < ' + a + `) {
                  xTexelR` + m + 'C' + g + ` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR` + m + 'C' + g + ` = vec4(0.);
                }

                xR` + m + 'C' + g + ' = xTexelR' + m + 'C' + g + `;
              `, g + 1 < d)) {
          var x = s % 2 == 0 ? Ti(h) : h;
          h % 2 == 0 && s % 2 == 1 || h % 2 != 0 && s % 2 != 1 ? (v += `
                  xCOffset = xC + ` + s % 2 + ' + ' + x + `;

                  if(xR >= 0 && xR < ` + o + ` &&
                    xCOffset >= 0 && xCOffset < ` + a + `) {
                    xTexelR` + m + 'C' + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                  }
                `, h > 1 && (v += `
                    xCOffset -= 2;
                    if(xR >= 0 && xR < ` + o + ` &&
                      xCOffset >= 0 && xCOffset < ` + a + `) {
                      xTexelR` + m + 'C' + g + ` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR` + m + 'C' + g + ` = vec4(0.);
                    }
                  `), v += `
                  xR` + m + 'C' + (g + 1) + ` = vec4(
                    xTexelR` + m + 'C' + g + '.zw, xTexelR' + m + 'C' + (g + 2) + `.xy);
                `) : v += `
                  xCOffset = xC + ` + x + `;

                  if(xR >= 0 && xR < ` + o + ` &&
                    xCOffset >= 0 && xCOffset < ` + a + `) {
                    xTexelR` + m + 'C' + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                  }

                  xR` + m + 'C' + (g + 1) + ' = xTexelR' + m + 'C' + (g + 2) + `;
                `;
        }
      } else g < d && (v += `
              if(xR >= 0 && xR < ` + o + `) {
            `, s % 2 == 1 ? (v += `
                xCOffset = xC + 1 - ` + c + `;
                if(xCOffset >= 0 && xCOffset < ` + a + `) {
                  xTexelR` + m + 'C' + g + ` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR` + m + 'C' + g + ` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < ` + a + `) {
                  xTexelR` + m + 'C' + (g + 2) + ` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR` + m + 'C' + (g + 2) + ` = vec4(0.);
                }

                xR` + m + 'C' + g + ` = vec4(
                  xTexelR` + m + 'C' + g + '.zw, xTexelR' + m + 'C' + (g + 2) + `.zw);
              `, g + 1 < d && (v += `
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + ` + c + `;
                  if(xCOffset >= 0 && xCOffset < ` + a + `) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR` + m + 'C' + (g + 1) + ' = vec4(xTexelR' + m + 'C' + (g + 2) + `.xy, final.xy);
                `)) : (v += `
                if(xC >= 0 && xC < ` + a + `) {
                  xTexelR` + m + 'C' + g + ` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR` + m + 'C' + g + ` = vec4(0.);
                }

                xCOffset = xC + ` + c + `;
                if(xCOffset >= 0 && xCOffset < ` + a + `) {
                  xTexelR` + m + 'C' + (g + 2) + ` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR` + m + 'C' + (g + 2) + ` = vec4(0.);
                }

                xR` + m + 'C' + g + ` = vec4(
                  xTexelR` + m + 'C' + g + '.xy, xTexelR' + m + 'C' + (g + 2) + `.xy);
              `, g + 1 < d && (v += `
                  xR` + m + 'C' + (g + 1) + ` = vec4(
                    xTexelR` + m + 'C' + g + '.zw, xTexelR' + m + 'C' + (g + 2) + `.zw);
                `)), v += '}');
      g < d && (v += `
            vec4 wTexelR` + m + 'C' + g + ' = getW(' + m + ', ' + g + `, d1, q);
            wR` + m + 'C' + g + ' = vec4(wTexelR' + m + 'C' + g + '.xz, wTexelR' + m + 'C' + g + `.xz);
          `, g + 1 < d && (v += `
              vec4 wTexelR` + m + 'C' + (g + 1) + ' = getW(' + m + ', ' + (g + 1) + `, d1, q);
              wR` + m + 'C' + (g + 1) + ` =
                vec4(wTexelR` + m + 'C' + (g + 1) + '.xz, wTexelR' + m + 'C' + (g + 1) + '.xz);'));
    }
    for (m = 0; m < f; m++) for (g = 0; g < d; g++) v += 'dotProd += xR' + m + 'C' + g + ' * wR' + m + 'C' + g + ';';
    var b = '', w = '';
    e && (b = n ? `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ` + e + `
        }` : `vec4 activation(vec4 x) {
          ` + e + `
        }`, w = 'result = activation(result);');
    var _ = t ? 'result += getBiasAtOutCoords();' : '';
    t && this.variableNames.push('bias'), n && this.variableNames.push('preluActivationWeights'), this.userCode = `
      ` + b + `

      const ivec2 strides = ivec2(` + u + ', ' + c + `);
      const ivec2 pads = ivec2(` + i + ', ' + s + `);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        ` + v + `

        vec4 result = dotProd;
        ` + _ + `
        ` + w + `
        setOutput(result);
      }
    `;
  }, Ip = function (r, t, e, n, o) {
    this.variableNames = ['Image', 'Boxes', 'BoxInd'], this.outputShape = [];
    var a = r[0], i = r[1], s = r[2], u = r[3], c = t[0], l = e[0], h = e[1];
    this.outputShape = [c, l, h, u];
    var f = n === 'bilinear' ? 1 : 0, d = [i - 1 + '.0', s - 1 + '.0'], p = d[0], v = d[1],
      m = l > 1 ? ['' + (i - 1) / (l - 1), '(y2-y1) * height_ratio', 'y1*' + p + ' + float(y)*(height_scale)'] : ['0.0', '0.0', '0.5 * (y1+y2) * ' + p],
      g = m[0], y = m[1], x = m[2],
      b = h > 1 ? ['' + (s - 1) / (h - 1), '(x2-x1) * width_ratio', 'x1*' + v + ' + float(x)*(width_scale)'] : ['0.0', '0.0', '0.5 * (x1+x2) * ' + v],
      w = b[0], _ = b[1], S = b[2];
    this.userCode = `
      const float height_ratio = float(` + g + `);
      const float width_ratio = float(` + w + `);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ` + a + `) {
          return;
        }

        float height_scale = ` + y + `;
        float width_scale = ` + _ + `;

        float in_y = ` + x + `;
        if( in_y < 0.0 || in_y > ` + p + ` ) {
          setOutput(float(` + o + `));
          return;
        }
        float in_x = ` + S + `;
        if( in_x < 0.0 || in_x > ` + v + ` ) {
          setOutput(float(` + o + `));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(` + f + ` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `;
  }, Rp = function (r, t, e) {
    this.variableNames = ['x'], this.outputShape = r;
    var n = r.length, o = r[r.length - 1], a = e ? '<' : '>';
    this.userCode = `
      int getIndex(int i) {
        ` + (e ? 'return ' + o + ' -i - 1;' : 'return i;') + `
      }

      void main() {
        ` + Ce(n) + ` coords = getOutputCoords();
        int end = ` + iu(n, 'coords') + `;
        float val = 0.0;
        for (int i = ` + o + ` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx ` + a + ` end) {
            continue;
          }
          if (idx == end && ` + t + `) {
            continue;
          }
          ` + iu(n, 'coords') + ` = idx;
          val += getX(` + function (i, s) {
      if (i === 1) return '' + s;
      if (i === 2) return s + '.x, ' + s + '.y';
      if (i === 3) return s + '.x, ' + s + '.y, ' + s + '.z';
      if (i === 4) return s + '.x, ' + s + '.y, ' + s + '.z, ' + s + '.w';
      throw Error('Cumulative sum for rank ' + i + ' is not yet supported');
    }(n, 'coords') + `);
        }
        setOutput(val);
      }
    `;
  };

  function iu(r, t) {
    if (r === 1) return '' + t;
    if (r === 2) return t + '.y';
    if (r === 3) return t + '.z';
    if (r === 4) return t + '.w';
    throw Error('Cumulative sum for rank ' + r + ' is not yet supported');
  }

  var Sp = function (r) {
    this.variableNames = ['A'], this.packedInputs = !1, this.packedOutput = !0, this.outPackingScheme = Kr.DENSE;
    var t = zr(r), e = rt();
    this.outputShape = r, this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ` + qn(['r', 'c', 'd'], r) + `
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(` + t[0] + ', ' + t[1] + `));
        int index = 4 * (resTexRC.x * ` + t[1] + ` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ` + e.output + ` = result;
      }
    `;
  }, Ap = function (r) {
    this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outPackingScheme = Kr.DENSE;
    var t = zr(r), e = rt();
    this.outputShape = r, this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ` + qn(['r', 'c', 'd'], r) + `
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(` + t[0] + ', ' + t[1] + `));
        int index = 4 * (resTexRC.x * ` + t[1] + ` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ` + e.output + ` = result;
      }
    `;
  }, Dp = function () {
    function r(t, e, n) {
      this.variableNames = ['x'], this.outputShape = [], this.outputShape = t, this.blockSize = e, this.dataFormat = n, this.userCode = `
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ` + this.getHeightCoordString() + `;
      int w = ` + this.getWidthCoordString() + `;
      int d = ` + this.getDepthCoordString() + `;

      int in_h = h / ` + e + `;
      int offset_h = imod(h, ` + e + `);
      int in_w = w / ` + e + `;
      int offset_w = imod(w, ` + e + `);
      int offset_d = (offset_h * ` + e + ` + offset_w) *
        ` + this.getOutputDepthSize() + `;
      int in_d = d + offset_d;

      float result = ` + this.getInputSamplingString() + `;
      setOutput(result);
    }
  `;
    }

    return r.prototype.getHeightCoordString = function () {
      return this.dataFormat === 'NHWC' ? 'coords[1]' : 'coords[2]';
    }, r.prototype.getWidthCoordString = function () {
      return this.dataFormat === 'NHWC' ? 'coords[2]' : 'coords[3]';
    }, r.prototype.getDepthCoordString = function () {
      return this.dataFormat === 'NHWC' ? 'coords[3]' : 'coords[1]';
    }, r.prototype.getOutputDepthSize = function () {
      return this.dataFormat === 'NHWC' ? this.outputShape[3] : this.outputShape[1];
    }, r.prototype.getInputSamplingString = function () {
      return this.dataFormat === 'NHWC' ? 'getX(b, in_h, in_w, in_d)' : 'getX(b, in_d, in_h, in_w)';
    }, r;
  }(), Tp = function (r) {
    this.variableNames = ['X'], this.outputShape = [r, r], this.userCode = `
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `;
  }, Fp = function (r) {
    this.variableNames = ['A'], this.outTexUsage = xt.DOWNLOAD;
    var t = rt();
    this.outputShape = r, this.userCode = `
      ` + cl + `

      void main() {
        float x = getAAtOutCoords();
        ` + t.output + ` = encode_float(x);
      }
    `;
  }, Np = function (r) {
    this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !1, this.outTexUsage = xt.DOWNLOAD;
    var t = rt();
    this.outputShape = r, this.userCode = `
      ` + cl + `

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ` + t.output + ` = encode_float(x);
      }
    `;
  }, Mp = function (r, t, e) {
    e === void 0 && (e = !1), this.variableNames = ['A'];
    var n = rt(), o = t[0], a = t[1];
    this.outputShape = r;
    var i = 'result';
    e && (i = 'floor(result * 255. + 0.5)'), this.userCode = `
      ` + Ji(r) + `

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / ` + a + `;
        int c = imod(flatIndex, ` + a + `);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(` + a + '.0, ' + o + `.0);
        vec4 values = ` + n.texture2D + `(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ` + n.output + ' = vec4(' + i + `, 0., 0., 0.);
      }
    `;
  }, Pp = function (r, t, e) {
    e === void 0 && (e = !1), this.variableNames = ['A'], this.packedInputs = !1, this.packedOutput = !0;
    var n = rt(), o = t[0], a = t[1];
    this.outputShape = r;
    var i = '', s = 'result';
    e && (s = 'floor(result * 255. + 0.5)');
    for (var u = 0; u <= 1; u++) for (var c = 0; c <= 1; c++) {
      var l = 2 * u + c;
      i += `
          localCoords = coords;
          if(localCoords[2] + ` + c + ' < ' + r[2] + `) {
            localCoords[2] += ` + c + `;
            if(localCoords[1] + ` + u + ' < ' + r[1] + `) {
              localCoords[1] += ` + u + `;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / ` + a + `;
              c = imod(flatIndex, ` + a + `);
              uv = (vec2(c, r) + halfCR) / vec2(` + a + '.0, ' + o + `.0);
              values = ` + n.texture2D + `(A, uv);

              if(offset == 0) {
                result[` + l + `] = values[0];
              } else if(offset == 1) {
                result[` + l + `] = values[1];
              } else if(offset == 2) {
                result[` + l + `] = values[2];
              } else {
                result[` + l + `] = values[3];
              }
            }
          }
        `;
    }
    this.userCode = `
      ` + Ji(r) + `

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        ` + i + `

        ` + n.output + ' = ' + s + `;
      }
    `;
  }, Op = 'return real * expR - imag * expI;', Bp = 'return real * expI + imag * expR;', su = function (r, t, e) {
    this.variableNames = ['real', 'imag'];
    var n = t[1];
    this.outputShape = t;
    var o = e ? '2.0 * ' + Math.PI : '-2.0 * ' + Math.PI, a = e ? n + '.0' : '1.0';
    this.userCode = `
      const float exponentMultiplier = ` + o + `;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ` + r + `
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(` + n + `);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ` + n + `; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ` + a + `;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `;
  }, Lp = function () {
    function r(t, e) {
      this.outputShape = [], this.variableNames = ['x'], this.outputShape = t, this.userCode = `
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `;
    }

    return r.prototype.getCustomSetupFunc = function (t) {
      var e = this;
      return function (n, o) {
        e.valueLoc == null && (e.valueLoc = n.getUniformLocationNoThrow(o, 'value')), n.gl.uniform1f(e.valueLoc, t);
      };
    }, r;
  }(), Wp = function (r, t, e) {
    this.variableNames = ['A', 'indices'];
    var n = r.slice();
    n[e] = t, this.outputShape = n, this.rank = n.length;
    var o = Ce(this.rank), a = function (i, s) {
      var u = i.length;
      if (u > 4) throw Error('Gather for rank ' + u + ' is not yet supported');
      if (u === 1) return 'int(getIndices(resRC))';
      for (var c = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'], l = [], h = 0; h < i.length; h++) h === s ? l.push('int(getIndices(' + c[h] + '))') : l.push('' + c[h]);
      return l.join();
    }(r, e);
    this.userCode = `
      void main() {
        ` + o + ` resRC = getOutputCoords();
        setOutput(getA(` + a + `));
      }
    `;
  }, Up = function (r, t, e) {
    this.sliceDim = r, this.strides = t, this.variableNames = ['x', 'indices'], this.outputShape = e;
    var n = Ce(t.length), o = Ce(e.length), a = this.sliceDim > 1 ? 'strides[j]' : 'strides';
    this.userCode = `
        ` + n + ' strides = ' + n + '(' + this.strides + `);
         void main() {
          ` + o + ` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ` + this.sliceDim + `; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ` + a + `;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `;
  };

  function dl(r, t) {
    var e = rt();
    return yc(r, t, e.version + `
    precision highp float;
    ` + e.attribute + ` vec3 clipSpacePos;
    ` + e.attribute + ` vec2 uv;
    ` + e.varyingVs + ` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`);
  }

  function pl(r, t) {
    return _c(r, t, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]));
  }

  function vl(r, t) {
    return Cc(r, t, new Uint16Array([0, 1, 2, 2, 1, 3]));
  }

  function oo(r, t, e, n, o, a, i) {
    kc(e, n);
    var s = Ec(r, t), u = r.TEXTURE_2D;
    return Y(r, t, function () {
      return r.bindTexture(u, s);
    }), Y(r, t, function () {
      return r.texParameteri(u, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
    }), Y(r, t, function () {
      return r.texParameteri(u, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
    }), Y(r, t, function () {
      return r.texParameteri(u, r.TEXTURE_MIN_FILTER, r.NEAREST);
    }), Y(r, t, function () {
      return r.texParameteri(u, r.TEXTURE_MAG_FILTER, r.NEAREST);
    }), Y(r, t, function () {
      return r.texImage2D(u, 0, o, e, n, 0, a, i, null);
    }), Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, null);
    }), s;
  }

  function ml(r, t, e, n, o) {
    var a = ia(e, n);
    return oo(r, t, a[0], a[1], o.internalFormatFloat, o.textureFormatFloat, r.FLOAT);
  }

  function gl(r, t, e, n, o) {
    var a = ia(e, n);
    return oo(r, t, a[0], a[1], o.internalFormatHalfFloat, o.textureFormatFloat, o.textureTypeHalfFloat);
  }

  function yl(r, t, e, n, o) {
    var a = ia(e, n);
    return oo(r, t, a[0], a[1], r.RGBA, r.RGBA, r.UNSIGNED_BYTE);
  }

  function bl(r, t, e, n, o) {
    var a = ro(e, n);
    return oo(r, t, a[0], a[1], o.internalFormatPackedFloat, r.RGBA, r.FLOAT);
  }

  function xl(r, t, e, n, o) {
    var a = ro(e, n);
    return oo(r, t, a[0], a[1], o.internalFormatPackedHalfFloat, r.RGBA, o.textureTypeHalfFloat);
  }

  function wl(r, t, e, n) {
    return Y(r, t, function () {
      return r.bindBuffer(r.ARRAY_BUFFER, n);
    }), di(r, t, e, 'clipSpacePos', n, 3, 20, 0) && di(r, t, e, 'uv', n, 2, 20, 12);
  }

  function _l(r, t, e, n, o, a, i) {
    var s, u, c;
    Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, e);
    }), a instanceof Uint8Array ? (s = new Uint8Array(n * o * 4), u = r.UNSIGNED_BYTE, c = r.RGBA) : (s = new Float32Array(n * o * 4), u = r.FLOAT, c = i.internalFormatPackedFloat), s.set(a), Y(r, t, function () {
      return r.texImage2D(r.TEXTURE_2D, 0, c, n, o, 0, r.RGBA, u, s);
    }), Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, null);
    });
  }

  function Cl(r, t, e, n) {
    Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, e);
    }), n.data instanceof Uint8Array ? Y(r, t, function () {
      return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, n.width, n.height, 0, r.RGBA, r.UNSIGNED_BYTE, n.data);
    }) : Y(r, t, function () {
      return r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n);
    }), Y(r, t, function () {
      return r.bindTexture(r.TEXTURE_2D, null);
    });
  }

  function El(r, t, e, n, o) {
    var a = r.createBuffer();
    Y(r, t, function () {
      return r.bindBuffer(r.PIXEL_PACK_BUFFER, a);
    });
    var i = 16 * e * n;
    return Y(r, t, function () {
      return r.bufferData(r.PIXEL_PACK_BUFFER, i, r.STREAM_READ);
    }), Y(r, t, function () {
      return r.readPixels(0, 0, n, e, r.RGBA, r.FLOAT, 0);
    }), Y(r, t, function () {
      return r.bindBuffer(r.PIXEL_PACK_BUFFER, null);
    }), a;
  }

  function kl(r, t, e) {
    var n = r, o = new Float32Array(e);
    return n.bindBuffer(n.PIXEL_PACK_BUFFER, t), n.getBufferSubData(n.PIXEL_PACK_BUFFER, 0, o), n.bindBuffer(n.PIXEL_PACK_BUFFER, null), o;
  }

  function Il(r, t, e, n, o) {
    var a = ia(e, n), i = a[0], s = a[1], u = new Uint8Array(e * n * 4);
    return Y(r, t, function () {
      return r.readPixels(0, 0, i, s, o.downloadTextureFormat, r.UNSIGNED_BYTE, u);
    }), new Float32Array(u.buffer);
  }

  function Rl(r, t, e, n, o, a, i, s) {
    var u = r, c = new Float32Array(function (l, h) {
      var f = ro(l, h);
      return f[0] * f[1] * 4;
    }(a, i));
    return u.bindBuffer(u.PIXEL_PACK_BUFFER, t), u.getBufferSubData(u.PIXEL_PACK_BUFFER, 0, c), u.bindBuffer(u.PIXEL_PACK_BUFFER, null), c;
  }

  function Sl(r, t, e, n) {
    var o = new Float32Array(e * n * 4);
    return Y(r, t, function () {
      return r.readPixels(0, 0, n, e, r.RGBA, r.FLOAT, o);
    }), o;
  }

  var zp = Object.freeze({
    createVertexShader: dl,
    createVertexBuffer: pl,
    createIndexBuffer: vl,
    createFloat32MatrixTexture: ml,
    createFloat16MatrixTexture: gl,
    createUnsignedBytesMatrixTexture: yl,
    createPackedMatrixTexture: bl,
    createFloat16PackedMatrixTexture: xl,
    bindVertexProgramAttributeStreams: wl,
    uploadDenseMatrixToTexture: _l,
    uploadPixelDataToTexture: Cl,
    createBufferFromOutputTexture: El,
    downloadFloat32MatrixFromBuffer: kl,
    downloadByteEncodedFloatMatrixFromOutputTexture: Il,
    downloadPackedMatrixFromBuffer: Rl,
    downloadMatrixFromPackedOutputTexture: Sl,
  }), Al = function () {
    function r(t) {
      this.outputTexture = null, this.program = null, this.disposed = !1, this.vertexAttrsAreBound = !1, this.itemsToPoll = [];
      var e = O().getNumber('WEBGL_VERSION');
      t != null ? (this.gl = t, vc(e, t)) : this.gl = Jt(e);
      var n = 'WEBGL_color_buffer_float';
      if (O().getNumber('WEBGL_VERSION') === 1) {
        if (this.textureFloatExtension = Br(this.gl, this.debug, 'OES_texture_float'), wt(this.gl, 'OES_texture_half_float')) this.textureHalfFloatExtension = Br(this.gl, this.debug, 'OES_texture_half_float'); else if (O().get('WEBGL_FORCE_F16_TEXTURES')) throw new Error('GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
        if (this.colorBufferFloatExtension = this.gl.getExtension(n), wt(this.gl, 'EXT_color_buffer_half_float')) this.colorBufferHalfFloatExtension = Br(this.gl, this.debug, 'EXT_color_buffer_half_float'); else if (O().get('WEBGL_FORCE_F16_TEXTURES')) throw new Error('GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
      } else if (n = 'EXT_color_buffer_float', wt(this.gl, n)) this.colorBufferFloatExtension = this.gl.getExtension(n); else {
        if (!wt(this.gl, 'EXT_color_buffer_half_float')) throw new Error('GL context does not support color renderable floats');
        this.colorBufferHalfFloatExtension = this.gl.getExtension('EXT_color_buffer_half_float');
      }
      this.vertexBuffer = pl(this.gl, this.debug), this.indexBuffer = vl(this.gl, this.debug), this.framebuffer = Ic(this.gl, this.debug), this.textureConfig = Bi(this.gl, this.textureHalfFloatExtension);
    }

    return Object.defineProperty(r.prototype, 'debug', {
      get: function () {
        return O().getBool('DEBUG');
      }, enumerable: !0, configurable: !0,
    }), r.prototype.dispose = function () {
      var t = this;
      if (!this.disposed) {
        this.program != null && console.warn('Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.'), this.outputTexture != null && console.warn('Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.');
        var e = this.gl;
        Y(e, this.debug, function () {
          return e.finish();
        }), Y(e, this.debug, function () {
          return e.bindFramebuffer(e.FRAMEBUFFER, null);
        }), Y(e, this.debug, function () {
          return e.deleteFramebuffer(t.framebuffer);
        }), Y(e, this.debug, function () {
          return e.bindBuffer(e.ARRAY_BUFFER, null);
        }), Y(e, this.debug, function () {
          return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
        }), Y(e, this.debug, function () {
          return e.deleteBuffer(t.indexBuffer);
        }), this.disposed = !0;
      }
    }, r.prototype.createFloat32MatrixTexture = function (t, e) {
      return this.throwIfDisposed(), ml(this.gl, this.debug, t, e, this.textureConfig);
    }, r.prototype.createFloat16MatrixTexture = function (t, e) {
      return this.throwIfDisposed(), gl(this.gl, this.debug, t, e, this.textureConfig);
    }, r.prototype.createUnsignedBytesMatrixTexture = function (t, e) {
      return this.throwIfDisposed(), yl(this.gl, this.debug, t, e, this.textureConfig);
    }, r.prototype.uploadPixelDataToTexture = function (t, e) {
      this.throwIfDisposed(), Cl(this.gl, this.debug, t, e);
    }, r.prototype.uploadDenseMatrixToTexture = function (t, e, n, o) {
      this.throwIfDisposed(), _l(this.gl, this.debug, t, e, n, o, this.textureConfig);
    }, r.prototype.createFloat16PackedMatrixTexture = function (t, e) {
      return this.throwIfDisposed(), xl(this.gl, this.debug, t, e, this.textureConfig);
    }, r.prototype.createPackedMatrixTexture = function (t, e) {
      return this.throwIfDisposed(), bl(this.gl, this.debug, t, e, this.textureConfig);
    }, r.prototype.deleteMatrixTexture = function (t) {
      var e = this;
      this.throwIfDisposed(), this.outputTexture === t && (pi(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Y(this.gl, this.debug, function () {
        return e.gl.deleteTexture(t);
      });
    }, r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (t, e, n) {
      var o = this;
      return this.downloadMatrixDriver(t, function () {
        return Il(o.gl, o.debug, e, n, o.textureConfig);
      });
    }, r.prototype.downloadPackedMatrixFromBuffer = function (t, e, n, o, a, i) {
      return Rl(this.gl, t, 0, 0, 0, a, i, this.textureConfig);
    }, r.prototype.downloadFloat32MatrixFromBuffer = function (t, e) {
      return kl(this.gl, t, e);
    }, r.prototype.createBufferFromTexture = function (t, e, n) {
      this.bindTextureToFrameBuffer(t);
      var o = El(this.gl, this.debug, e, n, this.textureConfig);
      return this.unbindTextureToFrameBuffer(), o;
    }, r.prototype.createAndWaitForFence = function () {
      var t = this.createFence(this.gl);
      return this.pollFence(t);
    }, r.prototype.createFence = function (t) {
      var e, n, o = this;
      if (O().getBool('WEBGL_FENCE_API_ENABLED')) {
        var a = t, i = a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE, 0);
        t.flush(), n = function () {
          var s = a.clientWaitSync(i, 0, 0);
          return s === a.ALREADY_SIGNALED || s === a.CONDITION_SATISFIED;
        }, e = i;
      } else O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 ? (e = this.beginQuery(), this.endQuery(), n = function () {
        return o.isQueryAvailable(e, O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'));
      }) : n = function () {
        return !0;
      };
      return { query: e, isFencePassed: n };
    }, r.prototype.downloadMatrixFromPackedTexture = function (t, e, n) {
      var o = this;
      return this.downloadMatrixDriver(t, function () {
        return Sl(o.gl, o.debug, e, n);
      });
    }, r.prototype.createProgram = function (t) {
      this.throwIfDisposed();
      var e = this.gl, n = bc(e, this.debug, t), o = dl(e, this.debug), a = xc(e, this.debug);
      return Y(e, this.debug, function () {
        return e.attachShader(a, o);
      }), Y(e, this.debug, function () {
        return e.attachShader(a, n);
      }), wc(e, this.debug, a), this.debug && To(e, this.debug, a), this.vertexAttrsAreBound || (this.setProgram(a), this.vertexAttrsAreBound = wl(e, this.debug, this.program, this.vertexBuffer)), a;
    }, r.prototype.deleteProgram = function (t) {
      var e = this;
      this.throwIfDisposed(), t === this.program && (this.program = null), t != null && Y(this.gl, this.debug, function () {
        return e.gl.deleteProgram(t);
      });
    }, r.prototype.setProgram = function (t) {
      var e = this;
      this.throwIfDisposed(), this.program = t, this.program != null && this.debug && To(this.gl, this.debug, this.program), Y(this.gl, this.debug, function () {
        return e.gl.useProgram(t);
      });
    }, r.prototype.getUniformLocation = function (t, e, n) {
      return n === void 0 && (n = !0), this.throwIfDisposed(), n ? Sc(this.gl, this.debug, t, e) : Ac(this.gl, t, e);
    }, r.prototype.getAttributeLocation = function (t, e) {
      var n = this;
      return this.throwIfDisposed(), Y(this.gl, this.debug, function () {
        return n.gl.getAttribLocation(t, e);
      });
    }, r.prototype.getUniformLocationNoThrow = function (t, e) {
      return this.throwIfDisposed(), this.gl.getUniformLocation(t, e);
    }, r.prototype.setInputMatrixTexture = function (t, e, n) {
      this.throwIfDisposed(), this.throwIfNoProgram(), Dc(this.gl, this.debug, this.program, t, e, n);
    }, r.prototype.setOutputMatrixTexture = function (t, e, n) {
      this.setOutputMatrixTextureDriver(t, n, e);
    }, r.prototype.setOutputPackedMatrixTexture = function (t, e, n) {
      this.throwIfDisposed();
      var o = ro(e, n), a = o[0], i = o[1];
      this.setOutputMatrixTextureDriver(t, a, i);
    }, r.prototype.setOutputMatrixWriteRegion = function (t, e, n, o) {
      this.setOutputMatrixWriteRegionDriver(n, t, o, e);
    }, r.prototype.setOutputPackedMatrixWriteRegion = function (t, e, n, o) {
      throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
    }, r.prototype.debugValidate = function () {
      this.program != null && To(this.gl, this.debug, this.program), Lr(this.gl);
    }, r.prototype.executeProgram = function () {
      this.throwIfDisposed(), this.throwIfNoProgram();
      var t = this.gl;
      this.debug && this.debugValidate(), Y(t, this.debug, function () {
        return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
      });
    }, r.prototype.blockUntilAllProgramsCompleted = function () {
      var t = this;
      this.throwIfDisposed(), Y(this.gl, this.debug, function () {
        return t.gl.finish();
      });
    }, r.prototype.getQueryTimerExtension = function () {
      return this.disjointQueryTimerExtension == null && (this.disjointQueryTimerExtension = Br(this.gl, this.debug, O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2 ? 'EXT_disjoint_timer_query_webgl2' : 'EXT_disjoint_timer_query')), this.disjointQueryTimerExtension;
    }, r.prototype.getQueryTimerExtensionWebGL2 = function () {
      return this.getQueryTimerExtension();
    }, r.prototype.getQueryTimerExtensionWebGL1 = function () {
      return this.getQueryTimerExtension();
    }, r.prototype.beginQuery = function () {
      if (O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
        var t = this.gl, e = this.getQueryTimerExtensionWebGL2(), n = t.createQuery();
        return t.beginQuery(e.TIME_ELAPSED_EXT, n), n;
      }
      var o = this.getQueryTimerExtensionWebGL1(), a = o.createQueryEXT();
      return o.beginQueryEXT(o.TIME_ELAPSED_EXT, a), a;
    }, r.prototype.endQuery = function () {
      if (O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') !== 2) {
        var t = this.getQueryTimerExtensionWebGL1();
        t.endQueryEXT(t.TIME_ELAPSED_EXT);
      } else {
        var e = this.gl, n = this.getQueryTimerExtensionWebGL2();
        e.endQuery(n.TIME_ELAPSED_EXT);
      }
    }, r.prototype.waitForQueryAndGetTime = function (t) {
      return $(this, void 0, void 0, function () {
        var e = this;
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, ii(function () {
                return e.disposed || e.isQueryAvailable(t, O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'));
              })];
            case 1:
              return n.sent(), [2, this.getQueryTime(t, O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'))];
          }
        });
      });
    }, r.prototype.getQueryTime = function (t, e) {
      if (e === 0) return null;
      if (e === 2) {
        var n = this.gl;
        return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6;
      }
      var o = this.getQueryTimerExtensionWebGL1();
      return o.getQueryObjectEXT(t, o.QUERY_RESULT_EXT) / 1e6;
    }, r.prototype.isQueryAvailable = function (t, e) {
      if (e === 0) return !0;
      if (e === 2) {
        var n = this.gl, o = this.getQueryTimerExtensionWebGL2(), a = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
        return this.disjoint == null && (this.disjoint = this.gl.getParameter(o.GPU_DISJOINT_EXT)), a && !this.disjoint;
      }
      return a = (o = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t, o.QUERY_RESULT_AVAILABLE_EXT), this.disjoint == null && (this.disjoint = this.gl.getParameter(o.GPU_DISJOINT_EXT)), a && !this.disjoint;
    }, r.prototype.pollFence = function (t) {
      var e = this;
      return new Promise(function (n) {
        e.addItemToPoll(function () {
          return t.isFencePassed();
        }, function () {
          return n();
        });
      });
    }, r.prototype.pollItems = function () {
      for (var t = function (n) {
        for (var o = 0; o < n.length && n[o](); ++o) ;
        return o - 1;
      }(this.itemsToPoll.map(function (n) {
        return n.isDoneFn;
      })), e = 0; e <= t; ++e) (0, this.itemsToPoll[e].resolveFn)();
      this.itemsToPoll = this.itemsToPoll.slice(t + 1);
    }, r.prototype.addItemToPoll = function (t, e) {
      var n = this;
      this.itemsToPoll.push({ isDoneFn: t, resolveFn: e }), this.itemsToPoll.length > 1 || ii(function () {
        return n.pollItems(), n.itemsToPoll.length === 0;
      });
    }, r.prototype.bindTextureToFrameBuffer = function (t) {
      this.throwIfDisposed(), Fo(this.gl, this.debug, t, this.framebuffer), this.debug && Lr(this.gl);
    }, r.prototype.unbindTextureToFrameBuffer = function () {
      this.outputTexture != null ? (Fo(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && Lr(this.gl)) : pi(this.gl, this.debug, this.framebuffer);
    }, r.prototype.downloadMatrixDriver = function (t, e) {
      this.bindTextureToFrameBuffer(t);
      var n = e();
      return this.unbindTextureToFrameBuffer(), n;
    }, r.prototype.setOutputMatrixTextureDriver = function (t, e, n) {
      this.throwIfDisposed();
      var o = this.gl;
      Fo(o, this.debug, t, this.framebuffer), this.debug && Lr(o), this.outputTexture = t, Y(o, this.debug, function () {
        return o.viewport(0, 0, e, n);
      }), Y(o, this.debug, function () {
        return o.scissor(0, 0, e, n);
      });
    }, r.prototype.setOutputMatrixWriteRegionDriver = function (t, e, n, o) {
      var a = this;
      this.throwIfDisposed(), Y(this.gl, this.debug, function () {
        return a.gl.scissor(t, e, n, o);
      });
    }, r.prototype.throwIfDisposed = function () {
      if (this.disposed) throw new Error('Attempted to use disposed GPGPUContext.');
    }, r.prototype.throwIfNoProgram = function () {
      if (this.program == null) throw new Error('No GPU program is currently set.');
    }, r;
  }();

  function uu(r, t) {
    if (r.length !== t.length) throw Error('Binary was compiled with ' + r.length + ' inputs, but was executed with ' + t.length + ' inputs');
    r.forEach(function (e, n) {
      var o = e.logicalShape, a = t[n], i = a.shape;
      if (!Be(o, i)) throw Error('Binary was compiled with different shapes than the current args. Shapes ' + o + ' and ' + i + ' must match');
      if (!e.isUniform || !a.isUniform) {
        var s = e.texShape, u = a.isUniform ? null : a.texData.texShape;
        if (!Be(s, u)) throw Error('Binary was compiled with different texture shapes than the current args. Shape ' + s + ' and ' + u + ' must match');
      }
    });
  }

  var Vp = function (r, t, e) {
    this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r;
    for (var n = e.filterWidth, o = e.inChannels, a = e.strideWidth, i = e.strideHeight, s = e.padInfo, u = e.outWidth, c = e.dilationWidth, l = e.dilationHeight, h = e.dataFormat, f = s.left, d = s.top, p = o * n, v = rt(), m = h === 'channelsLast', g = m ? 0 : 1, y = m ? 1 : 2, x = '', b = 0; b <= 1; b++) for (var w = 0; w <= 1; w++) x += `
          blockIndex = rc.y + ` + w + `;
          pos = rc.x + ` + b + `;

          if(blockIndex < ` + r[1] + ' && pos < ' + r[0] + `) {
            offsetY = int(blockIndex / (` + u + ')) * ' + i + ' - ' + d + `;
            d0 = offsetY + ` + l + ' * (pos / ' + p + `);

            if(d0 < ` + t[g] + ` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), ` + u + '.) * ' + a + '. - ' + f + `.);
              d1 = offsetX + ` + c + ' * (int(mod(float(pos), ' + p + '.) / ' + o + `.));

              if(d1 < ` + t[y] + ` && d1 >= 0) {

                ch = int(mod(float(pos), ` + o + `.));

                if (` + m + `) {
                  innerDims = vec2(d1, ch);
                  result[` + (2 * b + w) + `] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[` + (2 * b + w) + `] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;
    this.userCode = `
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ` + x + `

        ` + v.output + ` = result;
      }
    `;
  }, Gp = function (r, t, e, n, o) {
    this.variableNames = ['x'], this.outputShape = [];
    var a, i = t, s = r[3] - 1;
    this.outputShape = r;
    var u = 'float(' + e + ') + float(' + n + ') * sum';
    a = o === .5 ? 'inversesqrt(' + u + ')' : o === 1 ? '1.0/(' + u + ')' : 'exp(log(' + u + ') * float(-' + o + '));', this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -` + i + '; j <= ' + i + `; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ` + s + `) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ` + a + `;
        setOutput(val);
      }
    `;
  }, qp = function (r, t, e, n, o) {
    this.variableNames = ['inputImage', 'outputImage', 'dy'], this.outputShape = [], this.outputShape = r, this.depth = r[3], this.depthRadius = t, this.bias = e, this.alpha = n, this.beta = o, this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ` + this.depth + `; ++d) {
          int depthBegin = int(max(0.0, float(d - ` + t + `)));
          int depthEnd = int(min(float(` + this.depth + `),
              float(d + ` + t + ` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ` + this.depth + `;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(` + n + ') * norm + float(' + e + `);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(` + n + `)
                * float(` + o + `)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ` + o + `);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `;
  }, Hp = function (r, t, e, n, o) {
    this.variableNames = ['x'], this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0;
    var a, i = t, s = r[3] - 1;
    this.outputShape = r;
    var u = 'float(' + e + ') + float(' + n + ') * sum';
    a = o === .5 ? 'inversesqrt(' + u + ')' : o === 1 ? '1.0/(' + u + ')' : 'exp(log(' + u + ') * float(-' + o + '));', this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ` + this.outputShape[3] + `;
        bool hasNextRow = c < ` + this.outputShape[2] + `;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ` + i + `;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ` + i + '; j <= ' + i + `; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(` + s + `));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ` + a + `;
        setOutput(result);
      }
    `;
  }, jp = function (r) {
    this.variableNames = ['dy', 'maxPos'], this.outputShape = r.inShape;
    var t = r.strideHeight, e = r.strideWidth, n = r.dilationHeight, o = r.effectiveFilterHeight,
      a = r.effectiveFilterWidth, i = o - 1 - r.padInfo.top, s = a - 1 - r.padInfo.left, u = o * a - 1;
    this.userCode = `
      const ivec2 pads = ivec2(` + i + ', ' + s + `);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ` + o + `;
          wR += ` + n + `) {
          float dyR = float(dyRCorner + wR) / ` + t + `.0;

          if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ` + a + `; wC++) {
            float dyC = float(dyCCorner + wC) / ` + e + `.0;

            if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ` + u + ` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ` + a + ` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `;
  }, Xp = function (r) {
    this.variableNames = ['dy', 'maxPos'], this.outputShape = r.inShape;
    var t = r.strideDepth, e = r.strideHeight, n = r.strideWidth, o = r.dilationDepth, a = r.dilationHeight,
      i = r.dilationWidth, s = r.effectiveFilterDepth, u = r.effectiveFilterHeight, c = r.effectiveFilterWidth,
      l = s - 1 - r.padInfo.front, h = u - 1 - r.padInfo.top, f = c - 1 - r.padInfo.left, d = s * u * c - 1;
    this.userCode = `
      const ivec3 pads = ivec3(` + l + ', ' + h + ', ' + f + `);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ` + s + `;
           wD += ` + o + `) {
          float dyD = float(dyDCorner + wD) / ` + t + `.0;

          if (dyD < 0.0 || dyD >= ` + r.outDepth + `.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ` + u + `;
              wR += ` + a + `) {
            float dyR = float(dyRCorner + wR) / ` + e + `.0;

            if (dyR < 0.0 || dyR >= ` + r.outHeight + `.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ` + c + `;
                wC += ` + i + `) {
              float dyC = float(dyCCorner + wC) / ` + n + `.0;

              if (dyC < 0.0 || dyC >= ` + r.outWidth + `.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ` + d + ` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ` + u + ' * ' + c + ` +
                  wR * ` + c + ` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }, La = function (r, t, e, n, o, a, i) {
    e === void 0 && (e = !1), n === void 0 && (n = !1), o === void 0 && (o = !1), a === void 0 && (a = null), i === void 0 && (i = !1), this.variableNames = ['matrixA', 'matrixB'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t;
    var s = e ? r[1] : r[2], u = Math.ceil(s / 2), c = e ? 'i * 2, rc.y' : 'rc.y, i * 2',
      l = n ? 'rc.z, i * 2' : 'i * 2, rc.z', h = e ? ['a.xxyy', 'a.zzww'] : ['a.xxzz', 'a.yyww'],
      f = n ? ['b.xzxz', 'b.ywyw'] : ['b.xyxy', 'b.zwzw'], d = '', p = '';
    a && (d = i ? `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ` + a + `
        }` : `vec4 activation(vec4 x) {
          ` + a + `
        }`, p = 'result = activation(result);');
    var v = o ? 'result += getBiasAtOutCoords();' : '';
    o && this.variableNames.push('bias'), i && this.variableNames.push('preluActivationWeights'), this.userCode = `
      ` + d + `

      const float sharedDimension = ` + u + `.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ` + u + `; i++) {
          vec4 a = getMatrixA(rc.x, ` + c + `);
          vec4 b = getMatrixB(rc.x, ` + l + `);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (` + h[0] + ' * ' + f[0] + `);
          result += (` + h[1] + ' * ' + f[1] + `);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ` + v + `

        ` + p + `

        setOutput(result);
      }
    `;
  }, Kp = function () {
    function r(t, e, n) {
      this.variableNames = ['probs'], this.outputShape = [t, n], this.userCode = `
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ` + (e - 1) + `; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(` + (e - 1) + `));
      }
    `;
    }

    return r.prototype.getCustomSetupFunc = function (t) {
      var e = this;
      return function (n, o) {
        e.seedLoc == null && (e.seedLoc = n.getUniformLocation(o, 'seed')), n.gl.uniform1f(e.seedLoc, t);
      };
    }, r;
  }(), Yp = function (r, t, e, n) {
    this.variableNames = ['indices'], this.outputShape = [r, t], this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(` + n + '), float(' + e + `),
                      float(index == coords.y)));
      }
    `;
  }, $p = function (r) {
    this.variableNames = ['A'], this.packedInputs = !1, this.packedOutput = !0, this.outputShape = r;
    var t = r.length;
    if (t === 0) this.userCode = `
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `; else {
      var e = pt('rc', t), n = Ce(t), o = function (s, u, c) {
        if (s === 1) return 'rc > ' + u[0];
        for (var l = '', h = s - 2; h < s; h++) l += c[h] + ' >= ' + u[h], h < s - 1 && (l += '||');
        return l;
      }(t, r, e), a = function (s, u, c, l) {
        if (s === 1) return '';
        var h = l.slice(-2);
        return `
    int r = ` + h[0] + `;
    int c = ` + h[1] + `;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= ` + u + `;
    bool rEdge = rp1 >= ` + c + `;
  `;
      }(t, r[r.length - 1], r[r.length - 2], e), i = function (s, u) {
        var c = s.length, l = function (h, f) {
          for (var d = [], p = 0; p <= 1; p++) for (var v = 0; v <= 1; v++) {
            for (var m = (p === 0 ? 'r' : 'rp1') + ', ' + (v === 0 ? 'c' : 'cp1'), g = 2; g < h; g++) m = f[f.length - 1 - g] + ',' + m;
            d.push(m);
          }
          return d;
        }(c, u);
        return c === 1 ? `getA(rc),
            rc + 1 >= ` + s[0] + ` ? 0. : getA(rc + 1),
            0, 0` : 'getA(' + l[0] + `),
          cEdge ? 0. : getA(` + l[1] + `),
          rEdge ? 0. : getA(` + l[2] + `),
          rEdge || cEdge ? 0. : getA(` + l[3] + ')';
      }(r, e);
      this.userCode = `
        void main() {
          ` + n + ` rc = getOutputCoords();

          if(` + o + `) {
            setOutput(vec4(0));
          } else {
            ` + a + `

            setOutput(vec4(` + i + `));
          }
        }
      `;
    }
  }, Zp = function (r, t, e) {
    this.variableNames = ['x'], this.outputShape = t.map(function (u, c) {
      return u[0] + r[c] + u[1];
    });
    var n = r.length, o = Ce(n), a = t.map(function (u) {
      return u[0];
    }).join(','), i = t.map(function (u, c) {
      return u[0] + r[c];
    }).join(','), s = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, n);
    this.userCode = n !== 1 ? `
      ` + o + ' start = ' + o + '(' + a + `);
      ` + o + ' end = ' + o + '(' + i + `);

      void main() {
        ` + o + ` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(` + e + `));
        } else {
          ` + o + ` coords = outC - start;
          setOutput(getX(` + s + `));
        }
      }
    ` : `
        int start = ` + a + `;
        int end = ` + i + `;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(` + e + `));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;
  }, Jp = function (r, t, e) {
    this.variableNames = ['x'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t.map(function (m, g) {
      return m[0] + r[g] + m[1];
    });
    for (var n = r.length, o = Ce(n), a = t.map(function (m) {
      return m[0];
    }).join(','), i = t.map(function (m, g) {
      return m[0] + r[g];
    }).join(','), s = pt('rc', n), u = pt('source', n), c = s[n - 1] + ' < ' + this.outputShape[n - 1], l = n === 1 ? 'source' : 'vec2(' + u.slice(-2).join() + ')', h = [o + ' rc = outputLoc;', s[n - 1] + ` += 1;
       if(` + c + `) {
      `, n === 1 ? '' : `}
       rc = outputLoc;
       ` + s[n - 2] + ` += 1;
       if(` + s[n - 2] + ' < ' + this.outputShape[n - 2] + ') {', n === 1 ? '' : '  ' + s[n - 1] + ` += 1;
         if(` + c + ') {'], f = n === 1 ? 'rc < start || rc >= end' : 'any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))', d = '', p = 0, v = n === 1 ? 2 : 4; p < v; p++) d += `
        ` + h[p] + `
        if (` + f + `) {
          result[` + p + '] = float(' + e + `);
        } else {
          ` + o + ` source = rc - start;
          result[` + p + '] = getChannel(getX(' + u.join() + '), ' + l + `);
        }
      `;
    d += n === 1 ? '} ' : '}}', this.userCode = `
      const ` + o + ' start = ' + o + '(' + a + `);
      const ` + o + ' end = ' + o + '(' + i + `);

      void main() {
        ` + o + ` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ` + d + `
        setOutput(result);
      }
    `;
  }, Wa = function (r, t, e) {
    if (this.variableNames = ['x'], t === 'avg' && e) throw new Error('Cannot compute positions for average pool.');
    var n = r.filterWidth, o = r.strideHeight, a = r.strideWidth, i = r.dilationHeight, s = r.dilationWidth,
      u = r.effectiveFilterHeight, c = r.effectiveFilterWidth, l = r.padInfo.top, h = r.padInfo.left;
    this.outputShape = r.outShape;
    var f = t === 'avg', d = '0.0';
    if (f || (d = '-1.0 / 1e-20'), e) this.userCode = `
        const ivec2 strides = ivec2(` + o + ', ' + a + `);
        const ivec2 pads = ivec2(` + l + ', ' + h + `);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ` + u + `;
              wR += ` + i + `) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + c + `;
                wC += ` + s + `) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ` + r.inWidth + `) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * ` + c + ` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `; else {
      var p = t + '(' + t + '(' + t + '(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
      t === 'avg' && (p = 'avgValue / count');
      var v = 4 * Math.floor(n / 4), m = n % 4, g = `
      if (` + f + `) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;
      this.userCode = `
      const ivec2 strides = ivec2(` + o + ', ' + a + `);
      const ivec2 pads = ivec2(` + l + ', ' + h + `);
      const float initializationValue = ` + d + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ` + r.inWidth + `) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(` + d + `);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ` + u + `;
            wR += ` + i + `) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ` + r.inHeight + `) {
            continue;
          }

          for (int wC = 0; wC < ` + v + `; wC += 4) {
            int xC = xCCorner + wC * ` + s + `;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              getValue(batch, xR, xC + 2 * ` + s + `, d),
              getValue(batch, xR, xC + 3 * ` + s + `, d)
            );

            ` + g + `
          }

          int xC = xCCorner + ` + v + `;
          if (` + (m === 1) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ` + g + `
          } else if (` + (m === 2) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              initializationValue,
              initializationValue
            );

            ` + g + `
          } else if (` + (m === 3) + `) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ` + s + `, d),
              getValue(batch, xR, xC + 2 * ` + s + `, d),
              initializationValue
            );

            ` + g + `
          }
        }
        setOutput(` + p + `);
      }
    `;
    }
  }, Ua = function (r, t, e) {
    if (this.variableNames = ['x'], t === 'avg' && e) throw new Error('Cannot compute positions for average pool.');
    var n = r.filterWidth, o = r.strideDepth, a = r.strideHeight, i = r.strideWidth, s = r.dilationDepth,
      u = r.dilationHeight, c = r.dilationWidth, l = r.effectiveFilterDepth, h = r.effectiveFilterHeight,
      f = r.effectiveFilterWidth, d = r.padInfo.front, p = r.padInfo.top, v = r.padInfo.left;
    this.outputShape = r.outShape;
    var m = t === 'avg', g = '0.0';
    if (m || (g = '-1.0 / 1e-20'), e) this.userCode = `
        const ivec3 strides =
            ivec3(` + o + ', ' + a + ', ' + i + `);
        const ivec3 pads = ivec3(` + d + ', ' + p + ', ' + v + `);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ` + l + `;
              wD += ` + s + `) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ` + r.inDepth + `) {
              continue;
            }

            for (int wR = 0; wR < ` + h + `;
                wR += ` + u + `) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ` + r.inHeight + `) {
                continue;
              }

              for (int wC = 0; wC < ` + f + `;
                  wC += ` + c + `) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ` + r.inWidth + `) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * ` + h + ' * ' + f + ` +
                      wR * ` + f + ` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `; else {
      var y = t + '(' + t + '(' + t + '(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
      t === 'avg' && (y = 'avgValue / count');
      var x = 4 * Math.floor(n / 4), b = n % 4, w = `
      if (` + m + `) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;
      this.userCode = `
      const ivec3 strides =
        ivec3(` + o + ', ' + a + ', ' + i + `);
      const ivec3 pads = ivec3(` + d + ', ' + p + ', ' + v + `);
      const float initializationValue = ` + g + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ` + r.inWidth + `) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(` + g + `);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ` + l + `;
            wD += ` + s + `) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ` + r.inDepth + `) {
            continue;
          }

          for (int wR = 0; wR < ` + h + `;
            wR += ` + u + `) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ` + r.inHeight + `) {
              continue;
            }

            for (int wC = 0; wC < ` + x + `; wC += 4) {
              int xC = xCCorner + wC * ` + c + `;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                getValue(batch, xD, xR, xC + 2 * ` + c + `, ch),
                getValue(batch, xD, xR, xC + 3 * ` + c + `, ch)
              );

              ` + w + `
            }

            int xC = xCCorner + ` + x + `;
            if (` + (b === 1) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ` + w + `
            } else if (` + (b === 2) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                initializationValue,
                initializationValue
              );

              ` + w + `
            } else if (` + (b === 3) + `) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ` + c + `, ch),
                getValue(batch, xD, xR, xC + 2 * ` + c + `, ch),
                initializationValue
              );

              ` + w + `
            }
          }
          setOutput(` + y + `);
        }
      }
    `;
    }
  }, Qp = function (r, t) {
    this.variableNames = ['x'];
    var e = r.windowSize, n = r.batchSize, o = r.inSize, a = Math.ceil(o / e);
    this.outputShape = [n, a];
    var i = '0.0', s = '';
    t === 'prod' ? i = '1.0' : t === 'min' ? (i = '1.0 / 1e-20', s = 'min') : t === 'max' && (i = '-1.0 / 1e-20', s = 'max');
    var u = t + '(' + t + '(' + t + '(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
    t === 'sum' ? u = 'sumValue' : t === 'prod' ? u = 'prodValue' : t === 'all' ? u = 'allValue' : t === 'any' && (u = 'anyValue');
    var c = 4 * Math.floor(e / 4), l = e % 4, h = `
      if (` + (t === 'sum') + `) {
        sumValue += dot(values, ones);
      } else if (` + (t === 'prod') + `) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ` + s + `(values, minMaxValue);
      }
    `, f = 'vec4';
    t === 'all' ? (i = '1.0', h = `
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `, f = 'bvec4') : t === 'any' && (i = '0.0', h = `
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `, f = 'bvec4');
    var d = '';
    o % e > 0 && (d = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return initializationValue;
        }
      `), this.userCode = `
      const float initializationValue = ` + i + `;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ` + d + `
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ` + e + `;

        vec4 minMaxValue = vec4(` + i + `);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ` + c + `; i += 4) {
          int inIdx = inOffset + i;
          ` + f + ' values = ' + f + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ` + h + `
        }

        int inIdx = inOffset + ` + c + `;
        if (` + (l === 1) + `) {
          ` + f + ' values = ' + f + `(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ` + h + `
        } else if (` + (l === 2) + `) {
          ` + f + ' values = ' + f + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ` + h + `
        } else if (` + (l === 3) + `) {
          ` + f + ' values = ' + f + `(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ` + h + `
        }
        setOutput(` + u + `);
      }
    `;
  }, ev = function (r, t) {
    this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r;
    for (var e = '', n = 0; n < 4; n++) {
      var o = 'thisRC = rc;';
      n % 2 == 1 && (o += 'thisRC.z += 1;'), n > 1 && (o += 'thisRC.y += 1;'), e += `
        ` + o + `
        ` + (n > 0 ? 'if(thisRC.y < rows && thisRC.z < cols){' : '') + `
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[` + n + `] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ` + (n > 0 ? '}' : '') + `
      `;
    }
    this.userCode = `
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ` + qn(['r', 'c', 'd'], t) + `
      return ivec3(r, c, d);
    }
  
      ` + Ji(r) + `

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ` + r[1] + `;
        int cols = ` + r[2] + `;

        ` + e + `

        setOutput(result);
      }
    `;
  }, tv = function (r, t, e) {
    this.variableNames = ['dy'], this.outputShape = [], this.outputShape = t.shape;
    var n = t.shape, o = n[1], a = n[2], i = r.shape, s = i[1], u = i[2],
      c = [e && s > 1 ? o - 1 : o, e && u > 1 ? a - 1 : a], l = [e && s > 1 ? s - 1 : s, e && u > 1 ? u - 1 : u],
      h = c[0] / l[0], f = c[1] / l[1], d = 1 / h, p = 1 / f, v = 2 * Math.ceil(d) + 2, m = 2 * Math.ceil(p) + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(` + h + `);
        const float widthScale = float(` + f + `);

        const float invHeightScale = float(` + d + `);
        const float invWidthScale = float(` + p + `);

        const int winHeight = int(` + v + `);
        const int winWidth = int(` + m + `);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ` + s + `) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ` + u + `) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ` + (o - 1) + `.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ` + (a - 1) + `.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }, nv = function (r, t, e, n) {
    this.variableNames = ['A'], this.outputShape = [];
    var o = r[0], a = r[1], i = r[2], s = r[3];
    this.outputShape = [o, t, e, s];
    var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e];
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `);
      const vec2 inputShapeRC = vec2(` + a + '.0, ' + i + `.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `;
  }, rv = function (r, t, e, n) {
    this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [];
    var o = r[0], a = r[1], i = r[2], s = r[3];
    this.outputShape = [o, t, e, s];
    var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e];
    this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `,
          ` + u[1] / c[1] + `);
      const vec3 inputShapeRC = vec3(` + a + '.0, ' + i + `.0,
                                     ` + i + `.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ` + (s - 1) + `;
        bool hasNextRow = coords.z < ` + (e - 1) + `;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `;
  }, ov = function (r, t, e) {
    this.variableNames = ['dy'], this.outputShape = [], this.outputShape = t.shape;
    var n = t.shape, o = n[1], a = n[2], i = r.shape, s = i[1], u = i[2],
      c = [e && s > 1 ? o - 1 : o, e && u > 1 ? a - 1 : a], l = [e && s > 1 ? s - 1 : s, e && u > 1 ? u - 1 : u],
      h = c[0] / l[0], f = c[1] / l[1], d = 1 / h, p = 1 / f, v = 2 * Math.ceil(d) + 2, m = 2 * Math.ceil(p) + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(` + h + `);
        const float widthScale = float(` + f + `);

        const float invHeightScale = float(` + d + `);
        const float invWidthScale = float(` + p + `);

        const int winHeight = int(` + v + `);
        const int winWidth = int(` + m + `);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ` + s + `) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ` + u + `) {
              continue;
            }

            float sourceFracRow =
              float(` + c[0] + `) *
                (float(dyR) / float(` + l[0] + `));

            float sourceFracCol =
                float(` + c[1] + `) *
                  (float(dyC) / float(` + l[1] + `));

            int sourceNearestRow = int(min(
                float(int(` + o + `) - 1),
                ` + e + ` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(` + a + `) - 1),
                ` + e + ` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }, av = function (r, t, e, n) {
    this.variableNames = ['A'], this.outputShape = [];
    var o = r[0], a = r[1], i = r[2], s = r[3];
    this.outputShape = [o, t, e, s];
    var u = [n && t > 1 ? a - 1 : a, n && e > 1 ? i - 1 : i], c = [n && t > 1 ? t - 1 : t, n && e > 1 ? e - 1 : e],
      l = n ? '0.5' : '0.0';
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ` + u[0] / c[0] + `,
          ` + u[1] / c[1] + `);
      const vec2 inputShapeRC = vec2(` + a + '.0, ' + i + `.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ` + l + `)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `;
  }, iv = function (r, t) {
    this.variableNames = ['x'];
    var e = r.length;
    if (e > 4) throw new Error('WebGL backend: Reverse of rank-' + e + ' tensor is not yet supported');
    if (this.outputShape = r, e !== 1) {
      var n = r.map(function (a, i) {
        return function (s) {
          return t.indexOf(s) !== -1 && r[s] !== 1 ? r[s] + ' - coords[' + s + '] - 1' : 'coords[' + s + ']';
        }(i);
      }).join(','), o = Ce(e);
      this.userCode = `
      void main() {
        ` + o + ` coords = getOutputCoords();
        setOutput(getX(` + n + `));
      }
    `;
    } else this.userCode = `
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(` + r[0] + ` - coord - 1));
        }
      `;
  }, sv = function (r, t) {
    this.variableNames = ['x'], this.packedInputs = !0, this.packedOutput = !0;
    var e = r.length;
    if (e > 4) throw new Error('WebGL backend: Reverse of rank-' + e + ' tensor is not yet supported');
    this.outputShape = r;
    var n = pt('rc', e), o = n[e - 1] + ' + 1 < ' + this.outputShape[e - 1],
      a = n[e - 2] + ' + 1 < ' + this.outputShape[e - 2], i = Ce(e);

    function s(u) {
      var c = r.map(function (l, h) {
        return function (f, d) {
          return t.indexOf(f) !== -1 && r[f] !== 1 ? r[f] + ' - ' + d[f] + ' - 1' : '' + d[f];
        }(h, u);
      });
      return 'getChannel(getX(' + c.join(',') + '), vec2(' + c.slice(-2).join(',') + '))';
    }

    this.userCode = e === 1 ? `
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(` + r[0] + ` - rc - 1),
            ` + r[0] + ` - rc - 1);
          if(` + o + `){
              result.g = getChannel(getX(` + r[0] + ` - (rc  + 1) - 1),
                ` + r[0] + ` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      ` : `
        void main() {
          ` + i + ` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ` + function (u) {
      return s(u);
    }(n.slice()) + `;
          if(` + o + `){
            result.g = ` + function (u) {
      return u[e - 1] = '(' + u[e - 1] + ' + 1)', s(u);
    }(n.slice()) + `;
          }
          if(` + a + `) {
            result.b = ` + function (u) {
      return u[e - 2] = '(' + u[e - 2] + ' + 1)', s(u);
    }(n.slice()) + `;
            if(` + o + `) {
              result.a = ` + function (u) {
      return u[e - 1] = '(' + u[e - 1] + ' + 1)', u[e - 2] = '(' + u[e - 2] + ' + 1)', s(u);
    }(n.slice()) + `;
            }
          }
          setOutput(result);
        }
    `;
  }, cu = function (r, t, e, n, o, a, i) {
    this.variableNames = ['updates', 'indices', 'defaultValue'], this.outputShape = a;
    var s = Ce(o.length), u = Ce(a.length), c = '';
    e === 1 ? c = 'i' : e === 2 && (c = 'i, j');
    var l = 'getIndices(' + c + ')', h = '';
    n === 1 ? h = 'i' : n === 2 && (h = 'i, coords[1]');
    var f = 'getUpdates(' + h + ')', d = t > 1 ? 'strides[j]' : 'strides';
    this.userCode = `
        ` + s + ' strides = ' + s + '(' + o + `);

        void main() {
          ` + u + ` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ` + r + `; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ` + t + `; j++) {
              int index = round(` + l + `);
              flattenedIndex += index * ` + d + `;
            }
            if (flattenedIndex == coords[0]) {
              sum += ` + f + `;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `;
  }, uv = function (r, t) {
    this.variableNames = ['x', 'segmentIds'];
    var e = r.windowSize, n = r.batchSize, o = r.inSize, a = r.numSegments, i = a * Math.ceil(o / e);
    this.outputShape = [n, i];
    var s = 4 * Math.floor(e / 4), u = e % 4, c = `
        sumValue += dot(values, segFilter);
    `, l = '';
    o % e > 0 && (l = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return initializationValue;
        }
      `);
    var h = '';
    o % e > 0 && (h = `
        if (inIdx < 0 || inIdx >= ` + o + `) {
          return -1.0;
        }
      `), this.userCode = `
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ` + l + `
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ` + h + `
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ` + a + ')) * float(' + e + `));
        int currentSeg = int(mod(float(outIdx), float(` + a + `)));

        float sumValue = 0.0;

        for (int i = 0; i < ` + s + `; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ` + c + `
        }

        int inIdx = inOffset + ` + s + `;
        if (` + (u === 1) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ` + c + `
        } else if (` + (u === 2) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ` + c + `
        } else if (` + (u === 3) + `) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ` + c + `
        }
        setOutput(sumValue);
      }
    `;
  }, cv = function (r, t, e) {
    var n, o;
    if (this.variableNames = ['c', 'a', 'b'], this.outputShape = t, e > 4) throw Error('Where for rank ' + e + ' is not yet supported');
    if (e === 1) o = 'resRC', n = 'resRC'; else {
      for (var a = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'], i = [], s = [], u = 0; u < t.length; u++) s.push('' + a[u]), u < r && i.push('' + a[u]);
      n = i.join(), o = s.join();
    }
    var c = Ce(e);
    this.userCode = `
      void main() {
        ` + c + ` resRC = getOutputCoords();
        float cVal = getC(` + n + `);
        if (cVal >= 1.0) {
          setOutput(getA(` + o + `));
        } else {
          setOutput(getB(` + o + `));
        }
      }
    `;
  }, lv = function () {
    function r(t) {
      this.variableNames = ['source'], this.outputShape = t, this.rank = t.length;
      var e, n = Ce(this.rank), o = 'uniform int start[' + this.rank + '];', a = function (i) {
        if (i === 1) return 'sourceLoc';
        if (i <= 6) return za.slice(0, i).map(function (s) {
          return 'sourceLoc.' + s;
        }).join(',');
        throw Error('Slicing for rank ' + i + ' is not yet supported');
      }(this.rank);
      e = `
        ` + n + ` sourceLoc;
        ` + n + ` coords = getOutputCoords();
        ` + t.map(function (i, s) {
        return 'sourceLoc.' + za[s] + ' = start[' + s + '] + coords.' + za[s] + ';';
      }).join(`
`) + `
      `, this.userCode = `
      ` + o + `
      void main() {
        ` + e + `
        setOutput(getSource(` + a + `));
      }
    `;
    }

    return r.prototype.getCustomSetupFunc = function (t) {
      var e = this;
      if (t.length !== this.rank) throw Error('The rank (' + this.rank + ') of the program must match the length of start (' + t.length + ')');
      return function (n, o) {
        e.startLoc == null && (e.startLoc = n.getUniformLocationNoThrow(o, 'start'), e.startLoc == null) || n.gl.uniform1iv(e.startLoc, t);
      };
    }, r;
  }(), za = ['x', 'y', 'z', 'w', 'u', 'v'], hv = function () {
    function r(t) {
      this.variableNames = ['source'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.rank = t.length;
      var e = Ce(this.rank), n = pt('coords', this.rank), o = pt('sourceLoc', this.rank),
        a = this.rank === 1 ? 'sourceLoc' : 'vec2(' + o.slice(-2).join() + ')',
        i = 'getChannel(getSource(' + o.join() + '), ' + a + ')', s = `
      result.x = ` + i + `;
      if (++` + n[this.rank - 1] + ' < ' + t[this.rank - 1] + `) {
        ++` + o[this.rank - 1] + `;
        result.y = ` + i + `;
        --` + o[this.rank - 1] + `;
      }
    `, u = this.rank === 1 ? '' : `
      --` + n[this.rank - 1] + `;
      if (++` + n[this.rank - 2] + ' < ' + t[this.rank - 2] + `) {
        ++` + o[this.rank - 2] + `;
        result.z = ` + i + `;
        if (++` + n[this.rank - 1] + ' < ' + t[this.rank - 1] + `) {
          ++` + o[this.rank - 1] + `;
          result.w = ` + i + `;
        }
      }
    `, c = this.rank <= 4 ? `sourceLoc = coords +
            ` + e + '(' + t.map(function (l, h) {
          return 'start[' + h + ']';
        }).join() + ');' : t.map(function (l, h) {
          return o[h] + ' = ' + n[h] + ' + start[' + h + '];';
        }).join(`
`);
      this.userCode = `
      uniform int start[` + this.rank + `];
      void main() {
        ` + e + ` coords = getOutputCoords();
        ` + e + ` sourceLoc;
        ` + c + `
        vec4 result = vec4(0.);
        ` + s + `
        ` + u + `
        setOutput(result);
      }
    `;
    }

    return r.prototype.getCustomSetupFunc = function (t) {
      var e = this;
      if (t.length !== this.rank) throw Error('The rank (' + this.rank + ') of the program must match the length of start (' + t.length + ')');
      return function (n, o) {
        e.startLoc == null && (e.startLoc = n.getUniformLocationNoThrow(o, 'start'), e.startLoc == null) || n.gl.uniform1iv(e.startLoc, t);
      };
    }, r;
  }(), fv = function (r, t, e) {
    this.variableNames = ['x'], this.outputShape = e;
    var n = e.length, o = Ce(e.length), a = Ce(e.length), i = '';
    if (n === 1) i = 'coords * strides + begin'; else {
      var s = 0;
      i = e.map(function (u, c) {
        return s++, e.length === 1 ? 'coords * strides[' + c + '] + begin[' + c + ']' : 'coords[' + (s - 1) + '] * strides[' + c + '] + begin[' + c + ']';
      }).join(',');
    }
    this.userCode = `
      ` + o + ' begin = ' + o + '(' + r + `);
      ` + o + ' strides = ' + o + '(' + t + `);

      void main() {
        ` + a + ` coords = getOutputCoords();
        setOutput(getX(` + i + `));
      }
    `;
  }, dv = function () {
    function r(t) {
      this.gpgpu = t, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = !1, this.usedTextures = {};
    }

    return r.prototype.acquireTexture = function (t, e, n) {
      var o, a = lu(e, n), i = hu(t, a, n);
      if (i in this.freeTextures || (this.freeTextures[i] = []), i in this.usedTextures || (this.usedTextures[i] = []), this.freeTextures[i].length > 0) {
        this.numFreeTextures--, this.numUsedTextures++, this.log();
        var s = this.freeTextures[i].shift();
        return this.usedTextures[i].push(s), s;
      }
      return this.numUsedTextures++, this.log(), a === bt.PACKED_2X2_FLOAT32 ? o = this.gpgpu.createPackedMatrixTexture(t[0], t[1]) : a === bt.PACKED_2X2_FLOAT16 ? o = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]) : a === bt.UNPACKED_FLOAT32 ? o = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]) : a === bt.UNPACKED_FLOAT16 ? o = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]) : a === bt.PACKED_4X1_UNSIGNED_BYTE && (o = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])), this.usedTextures[i].push(o), o;
    }, r.prototype.releaseTexture = function (t, e, n, o) {
      if (this.freeTextures != null) {
        var a = hu(e, lu(n, o), o);
        a in this.freeTextures || (this.freeTextures[a] = []), this.freeTextures[a].push(t), this.numFreeTextures++, this.numUsedTextures--;
        var i = this.usedTextures[a], s = i.indexOf(t);
        if (s < 0) throw new Error('Cannot release a texture that was never provided by this texture manager');
        i.splice(s, 1), this.log();
      }
    }, r.prototype.log = function () {
      if (this.logEnabled) {
        var t = this.numFreeTextures + this.numUsedTextures;
        console.log('Free/Used', this.numFreeTextures + ' / ' + this.numUsedTextures, '(' + t + ')');
      }
    }, r.prototype.getNumUsedTextures = function () {
      return this.numUsedTextures;
    }, r.prototype.getNumFreeTextures = function () {
      return this.numFreeTextures;
    }, r.prototype.dispose = function () {
      var t = this;
      if (this.freeTextures != null) {
        for (var e in this.freeTextures) this.freeTextures[e].forEach(function (n) {
          t.gpgpu.deleteMatrixTexture(n);
        });
        for (var e in this.usedTextures) this.usedTextures[e].forEach(function (o) {
          t.gpgpu.deleteMatrixTexture(o);
        });
        this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0;
      }
    }, r;
  }();

  function lu(r, t) {
    if (r === xt.UPLOAD) return bt.PACKED_2X2_FLOAT32;
    if (r === xt.RENDER || r == null) return function (e) {
      return O().getBool('WEBGL_RENDER_FLOAT32_ENABLED') ? e ? bt.PACKED_2X2_FLOAT32 : bt.UNPACKED_FLOAT32 : e ? bt.PACKED_2X2_FLOAT16 : bt.UNPACKED_FLOAT16;
    }(t);
    if (r === xt.DOWNLOAD || r === xt.PIXELS) return bt.PACKED_4X1_UNSIGNED_BYTE;
    throw new Error('Unknown logical texture type ' + r);
  }

  function hu(r, t, e) {
    return r[0] + '_' + r[1] + '_' + t + '_' + e;
  }

  var pv = function (r, t) {
      this.variableNames = ['A'];
      for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[n] * t[n];
      this.outputShape = e, this.rank = e.length;
      var o = Ce(this.rank), a = function (i) {
        var s = i.length;
        if (s > 5) throw Error('Tile for rank ' + s + ' is not yet supported');
        if (s === 1) return 'imod(resRC, ' + i[0] + ')';
        for (var u = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u'], c = [], l = 0; l < i.length; l++) c.push('imod(' + u[l] + ', ' + i[l] + ')');
        return c.join();
      }(r);
      this.userCode = `
      void main() {
        ` + o + ` resRC = getOutputCoords();
        setOutput(getA(` + a + `));
      }
    `;
    }, vv = function (r, t) {
      this.variableNames = ['A'];
      for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[t[n]];
      this.outputShape = e, this.rank = e.length;
      var o = Ce(this.rank), a = function (i) {
        var s = i.length;
        if (s > 6) throw Error('Transpose for rank ' + s + ' is not yet supported');
        for (var u = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u', 'resRC.v'], c = new Array(s), l = 0; l < i.length; l++) c[i[l]] = u[l];
        return c.join();
      }(t);
      this.userCode = `
    void main() {
      ` + o + ` resRC = getOutputCoords();
      setOutput(getA(` + a + `));
    }
    `;
    }, mv = function (r, t) {
      this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0;
      for (var e = new Array(r.length), n = 0; n < e.length; n++) e[n] = r[t[n]];
      if (this.outputShape = e, this.rank = e.length, this.rank > 6) throw Error('Packed transpose for rank ' + this.rank + ' is not yet supported.');
      var o = Ce(this.rank), a = ul('rc', this.rank), i = new Array(this.rank);
      for (n = 0; n < t.length; n++) i[t[n]] = a[n];
      var s = 'vec2(' + i.slice(-2).join() + ')', u = '++' + a[this.rank - 1] + ' < ' + e[this.rank - 1],
        c = 'getChannel(getA(' + i.join() + '), ' + s + ')';
      this.userCode = `
    void main() {
      ` + o + ` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ` + c + `;
      if(` + u + `) {
        result[1] = ` + c + `;
      }
      --` + a[this.rank - 1] + `;
      if(++` + a[this.rank - 2] + ' < ' + e[this.rank - 2] + `) {
        result[2] = ` + c + `;
        if(` + u + `) {
          result[3] = ` + c + `;
        }
      }
      setOutput(result);
    }
    `;
    }, Qi = 1.7580993408473768, es = 1.0507009873554805, ie = function (r, t) {
      this.variableNames = ['A'], this.outputShape = r, this.userCode = `
      float unaryOperation(float x) {
        ` + t + `
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `;
    }, Bt = 'if (isnan(x)) return x;', gv = 'return x;', fu = 'return abs(x);', Dl = Bt + `
  return (x < 0.0) ? 0.0 : x;
`, Tl = Bt + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`, Fl = 'return (x >= 0.0) ? x : (exp(x) - 1.0);', yv = `
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ` + Qi + `;
  float scale = ` + es + `;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`, du = 'return -x;', pu = 'return ceil(x);', vu = 'return floor(x);', mu = 'return exp(x);',
    gu = 'return exp(x) - 1.0;', bv = Bt + `
  return sin(x);
`, xv = Bt + `
  return cos(x);
`, wv = Bt + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`, _v = Bt + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`, Cv = Bt + `
  return atan(x);
`, Ev = Bt + 'return log(x + sqrt(x * x + 1.0));', kv = Bt + `
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`, Iv = Bt + `
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`, yo = 'return x;', Rv = 'return x;', Nl = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`, Ml = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`, Pl = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`, Pr = function (r, t) {
      this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = r, this.userCode = `
      vec4 unaryOperation(vec4 x) {
        ` + t + `
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `;
    }, Sv = function (r) {
      this.variableNames = ['A'], this.packedInputs = !0, this.packedOutput = !1, this.outputShape = r;
      var t = r.length, e = pt('rc', t), n = Ce(t), o = function (s, u) {
        if (s === 1) return 'rc';
        for (var c = '', l = 0; l < s; l++) c += u[l], l < s - 1 && (c += ',');
        return c;
      }(t, e), a = e.slice(-2), i = t <= 1 ? 'rc' : 'vec2(' + a.join(',') + ')';
      this.userCode = `
      void main() {
        ` + n + ` rc = getOutputCoords();
        vec4 packedInput = getA(` + o + `);

        setOutput(getChannel(packedInput, ` + i + `));
      }
    `;
    }, bo = {};

  function xo(r, t) {
    if (t === void 0 && (t = !1), r === 'linear') return t ? Rv : gv;
    if (r === 'relu') return t ? Nl : Dl;
    if (r === 'elu') return t ? Pl : Fl;
    if (r === 'relu6') return t ? Ml : Tl;
    if (r === 'prelu') return t ? fl : hl;
    throw new Error('Activation ' + r + ' has not been implemented for the WebGL backend.');
  }

  var Av = 600, Ol = function (r) {
    function t(e) {
      var n, o = r.call(this) || this;
      if (o.pendingRead = new WeakMap, o.pendingDisposal = new WeakSet, o.dataRefCount = new WeakMap, o.numBytesInGPU = 0, o.uploadWaitMs = 0, o.downloadWaitMs = 0, o.warnedAboutMemory = !1, o.pendingDeletes = 0, o.disposed = !1, !O().getBool('HAS_WEBGL')) throw new Error('WebGL is not supported on this device');
      if (e == null) {
        var a = Jt(O().getNumber('WEBGL_VERSION'));
        o.binaryCache = ((n = O().getNumber('WEBGL_VERSION')) in bo || (bo[n] = {}), bo[n]), o.gpgpu = new Al(a), o.canvas = a.canvas, o.gpgpuCreatedLocally = !0;
      } else o.gpgpu = e, o.binaryCache = {}, o.gpgpuCreatedLocally = !1, o.canvas = e.gl.canvas;
      return o.textureManager = new dv(o.gpgpu), o.numMBBeforeWarning = O().global.screen == null ? 1024 : O().global.screen.height * O().global.screen.width * window.devicePixelRatio * Av / 1024 / 1024, o.texData = new nl(o, T), o;
    }

    return Mt(t, r), t.prototype.numDataIds = function () {
      return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes;
    }, t.prototype.write = function (e, n, o) {
      if (O().getBool('DEBUG') && this.checkNumericalProblems(e), o === 'complex64' && e != null) throw new Error('Cannot write to a complex64 dtype. Please use tf.complex(real, imag).');
      var a = {};
      return this.texData.set(a, { shape: n, dtype: o, values: e, usage: xt.UPLOAD }), a;
    }, t.prototype.move = function (e, n, o, a) {
      if (O().getBool('DEBUG') && this.checkNumericalProblems(n), a === 'complex64') throw new Error('Cannot write to a complex64 dtype. Please use tf.complex(real, imag).');
      this.texData.set(e, { shape: o, dtype: a, values: n, usage: xt.UPLOAD });
    }, t.prototype.readSync = function (e) {
      var n = this.texData.get(e), o = n.values, a = n.dtype, i = n.complexTensors, s = n.slice, u = n.shape,
        c = n.isPacked;
      if (s != null) {
        var l = void 0;
        l = c ? new Pr(u, yo) : new ie(u, yo);
        var h = this.runWebGLProgram(l, [{ dataId: e, shape: u, dtype: a }], a), f = this.readSync(h.dataId);
        return this.disposeData(h.dataId), f;
      }
      if (o != null) return this.convertAndCacheOnCPU(e);
      if (a === 'string') return o;
      var d, p, v = this.activeTimers != null;
      return v && (d = At()), a === 'complex64' ? p = xi(i.real.dataSync(), i.imag.dataSync()) : p = this.getValuesFromTexture(e), v && (this.downloadWaitMs += At() - d), this.convertAndCacheOnCPU(e, p);
    }, t.prototype.read = function (e) {
      return $(this, void 0, void 0, function () {
        var n, o, a, i, s, u, c, l, h, f, d, p, v, m, g, y, x, b, w, _, S, E;
        return Z(this, function (I) {
          switch (I.label) {
            case 0:
              if (this.pendingRead.has(e)) return n = this.pendingRead.get(e), [2, new Promise(function (R) {
                return n.push(R);
              })];
              if (o = this.texData.get(e), a = o.values, i = o.shape, s = o.slice, u = o.dtype, c = o.complexTensors, l = o.isPacked, s != null) return h = void 0, h = l ? new Pr(i, yo) : new ie(i, yo), f = this.runWebGLProgram(h, [{
                dataId: e,
                shape: i,
                dtype: u,
              }], u), d = this.read(f.dataId), this.disposeData(f.dataId), [2, d];
              if (a != null) return [2, this.convertAndCacheOnCPU(e)];
              if (!O().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED') && O().getNumber('WEBGL_VERSION') === 2) throw new Error('tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.');
              return p = null, u !== 'complex64' && O().get('WEBGL_BUFFER_SUPPORTED') && (v = this.decode(e), m = this.texData.get(v.dataId), p = (E = this.gpgpu).createBufferFromTexture.apply(E, [m.texture].concat(zr(i)))), this.pendingRead.set(e, []), u === 'complex64' ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
            case 1:
              I.sent(), I.label = 2;
            case 2:
              return u !== 'complex64' ? [3, 4] : [4, Promise.all([c.real.data(), c.imag.data()])];
            case 3:
              return y = I.sent(), x = y[0], b = y[1], g = xi(x, b), [3, 5];
            case 4:
              p == null ? g = this.getValuesFromTexture(e) : (w = J(i), g = this.gpgpu.downloadFloat32MatrixFromBuffer(p, w)), I.label = 5;
            case 5:
              return v != null && this.disposeData(v.dataId), _ = this.convertAndCacheOnCPU(e, g), S = this.pendingRead.get(e), this.pendingRead.delete(e), S.forEach(function (R) {
                return R(_);
              }), this.pendingDisposal.has(e) && (this.pendingDisposal.delete(e), this.disposeData(e), this.pendingDeletes--), [2, _];
          }
        });
      });
    }, t.prototype.checkNumericalProblems = function (e) {
      if (e != null) for (var n = 0; n < e.length; n++) {
        var o = e[n];
        if (!mc(o)) throw O().getBool('WEBGL_RENDER_FLOAT32_CAPABLE') ? Error('The value ' + o + ' cannot be represented with your current settings. Consider enabling float32 rendering: \'tf.env().set(\'WEBGL_RENDER_FLOAT32_ENABLED\', true);\'') : Error('The value ' + o + ' cannot be represented on this device.');
      }
    }, t.prototype.getValuesFromTexture = function (e) {
      var n, o = this.texData.get(e), a = o.shape, i = o.dtype, s = o.isPacked, u = J(a);
      if (O().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED')) {
        var c = this.decode(e), l = this.texData.get(c.dataId),
          h = (n = this.gpgpu).downloadMatrixFromPackedTexture.apply(n, [l.texture].concat(zr(a))).subarray(0, u);
        return this.disposeData(c.dataId), h;
      }
      var f = O().getBool('WEBGL_PACK') && s === !0, d = f ? No(a) : a, p = f ? new Np(d) : new Fp(d),
        v = this.runWebGLProgram(p, [{ shape: d, dtype: i, dataId: e }], 'float32'), m = this.texData.get(v.dataId),
        g = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture, m.texShape[0], m.texShape[1]).subarray(0, u);
      return this.disposeData(v.dataId), g;
    }, t.prototype.time = function (e) {
      return $(this, void 0, void 0, function () {
        var n, o, a, i, s, u, c;
        return Z(this, function (l) {
          switch (l.label) {
            case 0:
              return n = this.activeTimers, o = [], a = !1, this.programTimersStack == null ? (this.programTimersStack = o, a = !0) : this.activeTimers.push(o), this.activeTimers = o, e(), i = ln(this.activeTimers.map(function (h) {
                return h.query;
              })).filter(function (h) {
                return h != null;
              }), s = ln(this.activeTimers.map(function (h) {
                return h.name;
              })).filter(function (h) {
                return h != null;
              }), this.activeTimers = n, a && (this.programTimersStack = null), u = {
                uploadWaitMs: this.uploadWaitMs,
                downloadWaitMs: this.downloadWaitMs,
                kernelMs: null,
                wallMs: null,
              }, O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0 ? [4, Promise.all(i)] : [3, 2];
            case 1:
              return c = l.sent(), u.kernelMs = ec(c), u.getExtraProfileInfo = function () {
                return c.map(function (h, f) {
                  return { name: s[f], ms: h };
                }).map(function (h) {
                  return h.name + ': ' + h.ms;
                }).join(', ');
              }, [3, 3];
            case 2:
              u.kernelMs = { error: 'WebGL query timers are not supported in this environment.' }, l.label = 3;
            case 3:
              return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, u];
          }
        });
      });
    }, t.prototype.memory = function () {
      return { unreliable: !1, numBytesInGPU: this.numBytesInGPU };
    }, t.prototype.startTimer = function () {
      return O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0 ? this.gpgpu.beginQuery() : {
        startMs: At(),
        endMs: null,
      };
    }, t.prototype.endTimer = function (e) {
      return O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0 ? (this.gpgpu.endQuery(), e) : (e.endMs = At(), e);
    }, t.prototype.getQueryTime = function (e) {
      return $(this, void 0, void 0, function () {
        var n;
        return Z(this, function (o) {
          return O().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(e)] : [2, (n = e).endMs - n.startMs];
        });
      });
    }, t.prototype.disposeData = function (e) {
      if (!this.pendingDisposal.has(e)) {
        if (this.pendingRead.has(e)) return this.pendingDisposal.add(e), void this.pendingDeletes++;
        if (this.texData.has(e)) {
          this.releaseGPUData(e);
          var n = this.texData.get(e).complexTensors;
          n != null && (n.real.dispose(), n.imag.dispose()), this.texData.delete(e);
        }
      }
    }, t.prototype.releaseGPUData = function (e) {
      var n = this.texData.get(e), o = n.texture, a = n.dtype, i = n.texShape, s = n.usage, u = n.isPacked, c = n.slice,
        l = c && c.origDataId || e, h = this.dataRefCount.get(l);
      h > 1 ? this.dataRefCount.set(l, h - 1) : (this.dataRefCount.delete(l), o != null && (this.numBytesInGPU -= this.computeBytes(i, a), this.textureManager.releaseTexture(o, i, s, u)));
      var f = this.texData.get(e);
      f.texture = null, f.texShape = null, f.isPacked = !1, f.slice = null;
    }, t.prototype.getTexture = function (e) {
      return this.uploadToGPU(e), this.texData.get(e).texture;
    }, t.prototype.getDataInfo = function (e) {
      return this.texData.get(e);
    }, t.prototype.getCPUBackend = function () {
      return O().getBool('WEBGL_CPU_FORWARD') ? (this.cpuBackend == null && (this.cpuBackend = T.findBackend('cpu')), this.cpuBackend) : null;
    }, t.prototype.shouldExecuteOnCPU = function (e, n) {
      var o = this;
      return n === void 0 && (n = 128), this.getCPUBackend() != null && e.every(function (a) {
        return o.texData.get(a.dataId).texture == null && a.size < n;
      });
    }, t.prototype.getGPGPUContext = function () {
      return this.gpgpu;
    }, t.prototype.complex = function (e, n) {
      var o = this.makeOutput(e.shape, 'complex64');
      return this.texData.get(o.dataId).complexTensors = { real: T.keep(e.clone()), imag: T.keep(n.clone()) }, o;
    }, t.prototype.real = function (e) {
      return this.texData.get(e.dataId).complexTensors.real.clone();
    }, t.prototype.imag = function (e) {
      return this.texData.get(e.dataId).complexTensors.imag.clone();
    }, t.prototype.slice = function (e, n, o) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.slice(e, n, o);
      if (J(o) === 0) return Ze([], o, e.dtype);
      var a = this.texData.get(e.dataId).isPacked, i = qi(e.shape, n, o);
      if (a || !i) {
        var s = O().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ? new hv(o) : new lv(o), u = s.getCustomSetupFunc(n);
        return this.compileAndRun(s, [e], null, u);
      }
      return this.uploadToGPU(e.dataId), this.shallowSlice(e, n, o);
    }, t.prototype.shallowSlice = function (e, n, o) {
      var a = this.texData.get(e.dataId), i = this.makeOutput(o, e.dtype), s = this.texData.get(i.dataId);
      Object.assign(s, a), s.shape = o, s.dtype = e.dtype;
      var u = Hi(n, e.strides);
      a.slice && (u += a.slice.flatOffset), s.slice = {
        flatOffset: u,
        origDataId: a.slice && a.slice.origDataId || e.dataId,
      };
      var c = this.dataRefCount.get(s.slice.origDataId) || 1;
      return this.dataRefCount.set(s.slice.origDataId, c + 1), i;
    }, t.prototype.stridedSlice = function (e, n, o, a) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.stridedSlice(e, n, o, a);
      var i = ca(n, o, a);
      if (i.some(function (u) {
        return u === 0;
      })) return Ze([], i);
      var s = new fv(n, a, i);
      return this.compileAndRun(s, [e]);
    }, t.prototype.reverse = function (e, n) {
      var o = O().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ? new sv(e.shape, n) : new iv(e.shape, n);
      return this.compileAndRun(o, [e]);
    }, t.prototype.concat = function (e, n) {
      if (e[0].dtype === 'complex64') {
        var o = e.map(function (d) {
          return It(d);
        }), a = e.map(function (d) {
          return qt(d);
        });
        return Ye(this.concat(o, n), this.concat(a, n));
      }
      if (this.shouldExecuteOnCPU(e)) return this.cpuBackend.concat(e, n);
      if (e.length === 1) return e[0];
      if (e.length > O().getNumber('WEBGL_MAX_TEXTURES_IN_SHADER')) {
        var i = Math.floor(e.length / 2), s = this.concat(e.slice(0, i), n), u = this.concat(e.slice(i), n);
        return this.concat([s, u], n);
      }
      if (O().getBool('WEBGL_PACK_ARRAY_OPERATIONS') && e[0].rank > 1) {
        var c = new yp(e.map(function (d) {
          return d.shape;
        }), n);
        return this.compileAndRun(c, e);
      }
      var l = $n(e.map(function (d) {
        return d.shape;
      }), n), h = e.map(function (d) {
        return d.as2D(-1, J(d.shape.slice(n)));
      }), f = new gp(h.map(function (d) {
        return d.shape;
      }));
      return this.compileAndRun(f, h).reshape(l);
    }, t.prototype.neg = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.neg(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, du, e.dtype);
      var n = new ie(e.shape, du);
      return this.compileAndRun(n, [e]);
    }, t.prototype.batchMatMul = function (e, n, o, a) {
      var i = o ? e.shape[2] : e.shape[1], s = a ? n.shape[1] : n.shape[2], u = o ? e.shape[1] : e.shape[2],
        c = e.shape[0];
      if ((i === 1 || s === 1) && u > 1e3) {
        o && (e = e.transpose([0, 2, 1])), a && (n = n.transpose([0, 2, 1]));
        var l = s === 1 ? e : e.as3D(c, u, 1), h = s === 1 ? 2 : 1, f = s === 1 ? n.as3D(c, 1, u) : n;
        return this.multiply(l, f).sum(h, !0);
      }
      var d = je(e.dtype, n.dtype), p = new La(e.shape, [c, i, s], o, a);
      return this.compileAndRun(p, [e, n], d);
    }, t.prototype.fusedBatchMatMul = function (e) {
      var n = e.a, o = e.b, a = e.transposeA, i = e.transposeB, s = e.bias, u = e.activation,
        c = e.preluActivationWeights, l = a ? n.shape[2] : n.shape[1], h = i ? o.shape[1] : o.shape[2], f = n.shape[0],
        d = je(n.dtype, o.dtype), p = s != null, v = c != null, m = u ? xo(u, !0) : null,
        g = new La(n.shape, [f, l, h], a, i, p, m, v), y = [n, o];
      return s && y.push(s), c && y.push(c), this.compileAndRun(g, y, d);
    }, t.prototype.multiply = function (e, n) {
      if (e.dtype === 'complex64') {
        var o = this.texData.get(e.dataId), a = this.texData.get(n.dataId), i = new tu(fp, e.shape, n.shape),
          s = new tu(dp, e.shape, n.shape),
          u = [this.makeComplexComponentTensorInfo(e, o.complexTensors.real), this.makeComplexComponentTensorInfo(e, o.complexTensors.imag), this.makeComplexComponentTensorInfo(n, a.complexTensors.real), this.makeComplexComponentTensorInfo(n, a.complexTensors.imag)],
          c = this.compileAndRun(i, u), l = this.compileAndRun(s, u), h = this.complex(c, l);
        return c.dispose(), l.dispose(), h;
      }
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.multiply(e, n);
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, nu, e.dtype);
      var f = new Ne(nu, e.shape, n.shape);
      return this.compileAndRun(f, [e, n], e.dtype);
    }, t.prototype.batchNormalization = function (e, n, o, a, i, s) {
      var u = [e, n, o], c = null;
      s != null && (c = s.shape, u.push(s));
      var l = null;
      if (i != null && (l = i.shape, u.push(i)), O().getBool('WEBGL_PACK_NORMALIZATION')) {
        var h = new hp(e.shape, n.shape, o.shape, c, l, a);
        return this.compileAndRun(h, u);
      }
      var f = new lp(e.shape, n.shape, o.shape, c, l, a);
      return this.compileAndRun(f, u);
    }, t.prototype.localResponseNormalization4D = function (e, n, o, a, i) {
      var s = O().getBool('WEBGL_PACK_NORMALIZATION') ? new Hp(e.shape, n, o, a, i) : new Gp(e.shape, n, o, a, i);
      return this.compileAndRun(s, [e]);
    }, t.prototype.LRNGrad = function (e, n, o, a, i, s, u) {
      var c = new qp(n.shape, a, i, s, u);
      return this.compileAndRun(c, [n, o, e]);
    }, t.prototype.tile = function (e, n) {
      if (e.dtype === 'string') {
        var o = this.readSync(e.dataId).map(function (i) {
          return jr(i);
        });
        return il(ae(e.shape, e.dtype, o), n);
      }
      var a = new pv(e.shape, n);
      return this.compileAndRun(a, [e]);
    }, t.prototype.pad = function (e, n, o) {
      var a = O().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ? new Jp(e.shape, n, o) : new Zp(e.shape, n, o);
      return this.compileAndRun(a, [e]);
    }, t.prototype.transpose = function (e, n) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.transpose(e, n);
      var o = O().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ? new mv(e.shape, n) : new vv(e.shape, n);
      return this.compileAndRun(o, [e]);
    }, t.prototype.gather = function (e, n, o) {
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.gather(e, n, o);
      var a = new Wp(e.shape, n.size, o);
      return this.compileAndRun(a, [e, n]);
    }, t.prototype.batchToSpaceND = function (e, n, o) {
      k(e.rank <= 4, function () {
        return 'batchToSpaceND for rank > 4 with a WebGL backend not implemented yet';
      });
      var a = n.reduce(function (h, f) {
          return h * f;
        }), i = jo(e.shape, n, a), s = Xo(i.length, n.length), u = Ko(e.shape, n, a), c = Yc(o, n.length),
        l = $c(u, o, n.length);
      return e.reshape(i).transpose(s).reshape(u).slice(c, l);
    }, t.prototype.spaceToBatchND = function (e, n, o) {
      k(e.rank <= 4, function () {
        return 'spaceToBatchND for rank > 4 with a WebGL backend not implemented yet';
      });
      var a = n.reduce(function (f, d) {
        return f * d;
      }), i = [[0, 0]];
      i.push.apply(i, o);
      for (var s = 1 + n.length; s < e.shape.length; ++s) i.push([0, 0]);
      var u = e.pad(i), c = jo(u.shape, n, a, !1), l = Xo(c.length, n.length, !1), h = Ko(u.shape, n, a, !1);
      return u.reshape(c).transpose(l).reshape(h);
    }, t.prototype.reduce = function (e, n, o) {
      var a = e.shape[0], i = e.shape[1], s = Mo(i), u = new Qp({ windowSize: s, inSize: i, batchSize: a }, n),
        c = this.compileAndRun(u, [e], o);
      return c.shape[1] === 1 ? c : this.reduce(c, n, o);
    }, t.prototype.argReduce = function (e, n, o) {
      o === void 0 && (o = null);
      var a = e.shape[0], i = e.shape[1];
      o != null && (a = o.shape[0], i = o.shape[1]);
      var s = Mo(i), u = new tp({ windowSize: s, inSize: i, batchSize: a }, n, o == null), c = [e];
      o != null && c.push(o);
      var l = this.compileAndRun(u, c, 'int32');
      return l.shape[1] === 1 ? l : this.argReduce(e, n, l);
    }, t.prototype.argReducePacked = function (e, n, o) {
      o === void 0 && (o = null);
      var a = o != null ? o.shape : e.shape, i = Mo(a[a.length - 1]), s = new sp(a, i, n, o == null),
        u = o == null ? [e] : [e, o], c = this.compileAndRun(s, u, 'int32');
      return c.rank === e.rank ? this.argReducePacked(e, n, c) : c;
    }, t.prototype.sum = function (e, n) {
      ft('sum', n, e.rank);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i), u = Na(e.dtype);
      return this.reduce(s, 'sum', u).reshape(a);
    }, t.prototype.prod = function (e, n) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.prod(e, n);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i), u = Na(e.dtype);
      return this.reduce(s, 'prod', u).reshape(a);
    }, t.prototype.unsortedSegmentSum = function (e, n, o) {
      var a = 0, i = Pt([a], e.rank), s = e;
      i != null && (s = e.transpose(i), a = Ot(1, e.rank)[0]);
      var u = function (d, p, v) {
          for (var m = [], g = d.length, y = 0; y < g; y++) y !== p ? m.push(d[y]) : m.push(v);
          return m;
        }(s.shape, a, o), c = J([s.shape[a]]), l = s.as2D(-1, c), h = Na(e.dtype),
        f = this.segOpCompute(l, 'unsortedSegmentSum', n, h, o).reshape(u);
      return i != null && (f = f.transpose(sa(i))), f;
    }, t.prototype.segOpCompute = function (e, n, o, a, i) {
      var s = e.shape[0], u = e.shape[1], c = function (f, d) {
          var p, v = !1;
          for (f <= Gi ? (p = f, v = !0) : p = Vo(f, Math.floor(Math.sqrt(f))); !v;) p > d || p === f ? v = !0 : p = Vo(f, p + 1);
          return p;
        }(u, i), l = new uv({ windowSize: c, inSize: u, batchSize: s, numSegments: i }),
        h = this.compileAndRun(l, [e, o], a);
      return h.shape[1] === i ? h : (o = Ho(0, i).tile([u / c]), this.segOpCompute(h, n, o, a, i));
    }, t.prototype.argMinMaxReduce = function (e, n, o) {
      var a = [n];
      if (ft('arg' + o.charAt(0).toUpperCase() + o.slice(1), a, e.rank), !O().getBool('WEBGL_PACK_REDUCE') || e.rank <= 2) {
        var i = $e(e.shape, a), s = i[0], u = J(i[1]), c = e.as2D(-1, u);
        return this.argReduce(c, o).reshape(s);
      }
      return this.argReducePacked(e, o);
    }, t.prototype.argMin = function (e, n) {
      return this.argMinMaxReduce(e, n, 'min');
    }, t.prototype.argMax = function (e, n) {
      return this.argMinMaxReduce(e, n, 'max');
    }, t.prototype.cumsum = function (e, n, o, a) {
      if (n !== e.rank - 1) throw new Error('WebGL cumsum shader expects an inner-most axis=' + (e.rank - 1) + ' but got axis=' + n);
      var i = new Rp(e.shape, o, a);
      return this.compileAndRun(i, [e]);
    }, t.prototype.equal = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(equal(a, b));
`, 'bool');
      var o = new Ne('return float(a == b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.notEqual = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(notEqual(a, b));
`, 'bool');
      var o = new Ne('return float(a != b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.less = function (e, n) {
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.less(e, n);
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(lessThan(a, b));
`, 'bool');
      var o = new Ne('return float(a < b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.lessEqual = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(lessThanEqual(a, b));
`, 'bool');
      var o = new Ne('return float(a <= b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.greater = function (e, n) {
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.greater(e, n);
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(greaterThan(a, b));
`, 'bool');
      var o = new Ne('return float(a > b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.greaterEqual = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(greaterThanEqual(a, b));
`, 'bool');
      var o = new Ne('return float(a >= b);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.logicalNot = function (e) {
      var n = new ie(e.shape, 'return float(!(x >= 1.0));');
      return this.compileAndRun(n, [e]);
    }, t.prototype.logicalAnd = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`, 'bool');
      var o = new Ne('return float(a >= 1.0 && b >= 1.0);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.logicalOr = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`, 'bool');
      var o = new Ne('return float(a >= 1.0 || b >= 1.0);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'bool');
    }, t.prototype.select = function (e, n, o) {
      var a = new cv(e.rank, n.shape, n.rank);
      return this.compileAndRun(a, [e, n, o], je(n.dtype, o.dtype));
    }, t.prototype.where = function (e) {
      Go('tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead');
      var n = e.dataSync();
      return Zi(e.shape, n);
    }, t.prototype.topk = function (e, n, o) {
      return sl(e.dataSync(), e.shape, e.dtype, n);
    }, t.prototype.min = function (e, n) {
      ft('min', n, e.rank);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
      return this.reduce(s, 'min', s.dtype).reshape(a);
    }, t.prototype.minimum = function (e, n) {
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.minimum(e, n);
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    }, t.prototype.mod = function (e, n) {
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new Ne(`if (b == 0.0) return NAN;
  return mod(a, b);`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    }, t.prototype.max = function (e, n) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.max(e, n);
      ft('max', n, e.rank);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
      return this.reduce(s, 'max', s.dtype).reshape(a);
    }, t.prototype.maximum = function (e, n) {
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.maximum(e, n);
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    }, t.prototype.all = function (e, n) {
      ft('all', n, e.rank);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
      return this.reduce(s, 'all', s.dtype).reshape(a);
    }, t.prototype.any = function (e, n) {
      ft('any', n, e.rank);
      var o = $e(e.shape, n), a = o[0], i = J(o[1]), s = e.as2D(-1, i);
      return this.reduce(s, 'any', s.dtype).reshape(a);
    }, t.prototype.realDivide = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`, 'float32', !0);
      var o = new Ne(`
if (a == b) {
  return 1.0;
};
return a / b;`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'float32');
    }, t.prototype.floorDiv = function (e, n) {
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, `
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`, 'int32');
      var o = new Ne(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n], 'int32');
    }, t.prototype.add = function (e, n) {
      if (e.dtype === 'complex64' && n.dtype === 'complex64') return this.complexSeparableBinaryOp(e, n, Oa);
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.add(e, n);
      var o = je(e.dtype, n.dtype);
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, Oa, o);
      var a = new Ne(Oa, e.shape, n.shape);
      return this.compileAndRun(a, [e, n], o);
    }, t.prototype.packedUnaryOp = function (e, n, o) {
      var a = new Pr(e.shape, n);
      return this.compileAndRun(a, [e], o);
    }, t.prototype.packedBinaryOp = function (e, n, o, a, i) {
      i === void 0 && (i = !1);
      var s = new on(o, e.shape, n.shape, i);
      return this.compileAndRun(s, [e, n], a);
    }, t.prototype.complexSeparableBinaryOp = function (e, n, o) {
      var a = this, i = this.texData.get(e.dataId), s = this.texData.get(n.dataId),
        u = [[i.complexTensors.real, s.complexTensors.real], [i.complexTensors.imag, s.complexTensors.imag]].map(function (f) {
          var d = f[0], p = f[1], v = a.makeComplexComponentTensorInfo(e, d),
            m = a.makeComplexComponentTensorInfo(n, p), g = new Ne(o, e.shape, n.shape);
          return a.compileAndRun(g, [v, m], je(d.dtype, p.dtype));
        }), c = u[0], l = u[1], h = this.complex(c, l);
      return c.dispose(), l.dispose(), h;
    }, t.prototype.makeComplexComponentTensorInfo = function (e, n) {
      return { dataId: n.dataId, dtype: n.dtype, shape: e.shape };
    }, t.prototype.addN = function (e) {
      if (e.length === 1) return e[0];
      if (e.length > O().get('WEBGL_MAX_TEXTURES_IN_SHADER')) {
        var n = Math.floor(e.length / 2), o = this.addN(e.slice(0, n)), a = this.addN(e.slice(n));
        return this.addN([o, a]);
      }
      var i = e.map(function (c) {
        return c.dtype;
      }).reduce(function (c, l) {
        return je(c, l);
      }), s = e.map(function (c) {
        return c.shape;
      }), u = O().getBool('WEBGL_PACK') ? new ep(e[0].shape, s) : new Qd(e[0].shape, s);
      return this.compileAndRun(u, e, i);
    }, t.prototype.subtract = function (e, n) {
      if (e.dtype === 'complex64' && n.dtype === 'complex64') return this.complexSeparableBinaryOp(e, n, Ba);
      if (this.shouldExecuteOnCPU([e, n])) return this.cpuBackend.subtract(e, n);
      var o = je(e.dtype, n.dtype);
      if (O().getBool('WEBGL_PACK_BINARY_OPERATIONS')) return this.packedBinaryOp(e, n, Ba, e.dtype);
      var a = new Ne(Ba, e.shape, n.shape);
      return this.compileAndRun(a, [e, n], o);
    }, t.prototype.pow = function (e, n) {
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new Ne(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`, e.shape, n.shape), a = je(e.dtype, n.dtype);
      return this.compileAndRun(o, [e, n], a);
    }, t.prototype.ceil = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.ceil(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, pu, e.dtype);
      var n = new ie(e.shape, pu);
      return this.compileAndRun(n, [e]);
    }, t.prototype.floor = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.floor(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, vu, e.dtype);
      var n = new ie(e.shape, vu);
      return this.compileAndRun(n, [e]);
    }, t.prototype.sign = function (e) {
      var n = new ie(e.shape, `
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);
      return this.compileAndRun(n, [e]);
    }, t.prototype.isNaN = function (e) {
      var n = new ie(e.shape, 'return float(isnan(x));');
      return this.compileAndRun(n, [e], 'bool');
    }, t.prototype.isInf = function (e) {
      var n = new ie(e.shape, 'return float(isinf(x));');
      return this.compileAndRun(n, [e], 'bool');
    }, t.prototype.isFinite = function (e) {
      var n = new ie(e.shape, 'return float(!isnan(x) && !isinf(x));');
      return this.compileAndRun(n, [e], 'bool');
    }, t.prototype.round = function (e) {
      var n = new ie(e.shape, `
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);
      return this.compileAndRun(n, [e]);
    }, t.prototype.exp = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.exp(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, mu, e.dtype);
      var n = new ie(e.shape, mu);
      return this.compileAndRun(n, [e]);
    }, t.prototype.expm1 = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.expm1(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, gu, e.dtype);
      var n = new ie(e.shape, gu);
      return this.compileAndRun(n, [e]);
    }, t.prototype.softmax = function (e, n) {
      var o = We([n], e.shape), a = this.max(e, o), i = lt(a.shape, o), s = this.subtract(e, a.reshape(i)),
        u = this.exp(s), c = this.sum(u, o).reshape(i);
      return this.realDivide(u, c);
    }, t.prototype.log = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.log(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, `
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`, e.dtype);
      var n = new ie(e.shape, `if (x < 0.0) return NAN;
  return log(x);`);
      return this.compileAndRun(n, [e]);
    }, t.prototype.log1p = function (e) {
      var n = new ie(e.shape, 'return log(1.0 + x);');
      return this.compileAndRun(n, [e]);
    }, t.prototype.sqrt = function (e) {
      var n = new ie(e.shape, 'return sqrt(x);');
      return this.compileAndRun(n, [e]);
    }, t.prototype.rsqrt = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.rsqrt(e);
      var n = new ie(e.shape, 'return inversesqrt(x);');
      return this.compileAndRun(n, [e]);
    }, t.prototype.reciprocal = function (e) {
      var n = new ie(e.shape, 'return 1.0 / x;');
      return this.compileAndRun(n, [e]);
    }, t.prototype.relu = function (e) {
      var n;
      return n = O().getBool('WEBGL_PACK') ? new Pr(e.shape, Nl) : new ie(e.shape, Dl), this.compileAndRun(n, [e]);
    }, t.prototype.relu6 = function (e) {
      var n;
      return n = O().getBool('WEBGL_PACK') ? new Pr(e.shape, Ml) : new ie(e.shape, Tl), this.compileAndRun(n, [e]);
    }, t.prototype.prelu = function (e, n) {
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(fl, e.shape, n.shape) : new Ne(hl, e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    }, t.prototype.elu = function (e) {
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, Pl, e.dtype);
      var n = new ie(e.shape, Fl);
      return this.compileAndRun(n, [e]);
    }, t.prototype.eluDer = function (e, n) {
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`, e.shape, n.shape) : new Ne('return (b >= 1.0) ? a : a * (b + 1.0);', e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    },t.prototype.selu = function (e) {
      var n = new ie(e.shape, yv);
      return this.compileAndRun(n, [e]);
    },t.prototype.int = function (e) {
      var n = new ie(e.shape, 'return float(int(x));');
      return this.compileAndRun(n, [e], 'int32');
    },t.prototype.clip = function (e, n, o) {
      var a, i = (a = O().getBool('WEBGL_PACK_CLIP') ? new vp(e.shape) : new pp(e.shape)).getCustomSetupFunc(n, o);
      return this.compileAndRun(a, [e], null, i);
    },t.prototype.abs = function (e) {
      if (this.shouldExecuteOnCPU([e])) return this.cpuBackend.abs(e);
      if (O().getBool('WEBGL_PACK_UNARY_OPERATIONS')) return this.packedUnaryOp(e, fu, e.dtype);
      var n = new ie(e.shape, fu);
      return this.compileAndRun(n, [e]);
    },t.prototype.complexAbs = function (e) {
      var n = this.texData.get(e.dataId), o = new mp(e.shape),
        a = [this.makeComplexComponentTensorInfo(e, n.complexTensors.real), this.makeComplexComponentTensorInfo(e, n.complexTensors.imag)];
      return this.compileAndRun(o, a);
    },t.prototype.sigmoid = function (e) {
      var n = new ie(e.shape, 'return 1.0 / (1.0 + exp(-1.0 * x));');
      return this.compileAndRun(n, [e]);
    },t.prototype.softplus = function (e) {
      var n = new ie(e.shape, `
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);
      return this.compileAndRun(n, [e]);
    },t.prototype.sin = function (e) {
      var n = new ie(e.shape, bv);
      return this.compileAndRun(n, [e]);
    },t.prototype.cos = function (e) {
      var n = new ie(e.shape, xv);
      return this.compileAndRun(n, [e]);
    },t.prototype.tan = function (e) {
      var n = new ie(e.shape, 'return tan(x);');
      return this.compileAndRun(n, [e]);
    },t.prototype.asin = function (e) {
      var n = new ie(e.shape, wv);
      return this.compileAndRun(n, [e]);
    },t.prototype.acos = function (e) {
      var n = new ie(e.shape, _v);
      return this.compileAndRun(n, [e]);
    },t.prototype.atan = function (e) {
      var n = new ie(e.shape, Cv);
      return this.compileAndRun(n, [e]);
    },t.prototype.atan2 = function (e, n) {
      var o = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`, e.shape, n.shape) : new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`, e.shape, n.shape);
      return this.compileAndRun(o, [e, n]);
    },t.prototype.sinh = function (e) {
      var n = new ie(e.shape, `
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);
      return this.compileAndRun(n, [e]);
    },t.prototype.cosh = function (e) {
      var n = new ie(e.shape, `
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);
      return this.compileAndRun(n, [e]);
    },t.prototype.tanh = function (e) {
      var n = new ie(e.shape, `
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);
      return this.compileAndRun(n, [e]);
    },t.prototype.asinh = function (e) {
      var n = new ie(e.shape, Ev);
      return this.compileAndRun(n, [e]);
    },t.prototype.acosh = function (e) {
      var n = new ie(e.shape, kv);
      return this.compileAndRun(n, [e]);
    },t.prototype.atanh = function (e) {
      var n = new ie(e.shape, Iv);
      return this.compileAndRun(n, [e]);
    },t.prototype.erf = function (e) {
      var n = new ie(e.shape, `
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);
      return this.compileAndRun(n, [e]);
    },t.prototype.step = function (e, n) {
      var o = new ie(e.shape, function (a) {
        return a === void 0 && (a = 0), Bt + `
    return x > 0.0 ? 1.0 : float(` + a + `);
  `;
      }(n));
      return this.compileAndRun(o, [e]);
    },t.prototype.conv2dByMatMul = function (e, n, o, a, i, s) {
      var u = e.shape, c = this.texData.get(e.dataId), l = o.inChannels, h = u[0] * u[1] * u[2], f = o.outChannels,
        d = o.dataFormat === 'channelsLast', p = (h === 1 || f === 1) && l > 1e3, v = u[2] % 2 != 0 && !!c.isPacked;
      if (p || !O().getBool('WEBGL_LAZILY_UNPACK') || !O().getBool('WEBGL_PACK_BINARY_OPERATIONS') || !v) {
        var m = d ? u[0] * u[1] * u[2] : u[0] * u[2] * u[3], g = this.reshape(e, [1, m, o.inChannels]),
          y = this.reshape(n, [1, o.inChannels, o.outChannels]);
        return this.reshape(this.fusedBatchMatMul({
          a: g,
          b: y,
          transposeA: !1,
          transposeB: !1,
          bias: a,
          activation: i,
          preluActivationWeights: s,
        }), o.outShape);
      }
      var x = d ? u[0] * u[1] * (u[2] + 1) : u[0] * u[2] * (u[3] + 1),
        b = { dataId: e.dataId, shape: [1, x, o.inChannels], dtype: e.dtype }, w = c.shape;
      c.shape = c.shape.slice(), c.shape[c.shape.length - 2]++, k(Wr(c.shape, b.shape), function () {
        return 'packed reshape ' + c.shape + ' to ' + b.shape + ' isn\'t free';
      });
      var _ = this.reshape(n, [1, o.inChannels, o.outChannels]), S = this.fusedBatchMatMul({
        a: b,
        b: _,
        transposeA: !1,
        transposeB: !1,
        bias: a,
        activation: i,
        preluActivationWeights: s,
      }), E = this.texData.get(S.dataId);
      return k(E.isPacked, function () {
        return 'batchMatMul result is expected to be packed';
      }), c.shape = w, E.shape = o.outShape, T.makeTensorFromDataId(S.dataId, o.outShape, S.dtype);
    },t.prototype.conv2dWithIm2Row = function (e, n, o, a, i, s) {
      var u = o.filterWidth, c = o.filterHeight, l = o.inChannels, h = o.outWidth, f = o.outHeight,
        d = o.dataFormat === 'channelsLast', p = u * c * l, v = f * h, m = [p, v], g = e.squeeze([0]),
        y = n.reshape([1, p, -1]), x = new Vp(m, g.shape, o), b = this.compileAndRun(x, [g]).reshape([1, m[0], m[1]]),
        w = a != null, _ = s != null, S = i ? xo(i, !0) : null,
        E = new La(b.shape, [1, v, o.outChannels], !0, !1, w, S, _), I = [b, y];
      a && I.push(a), _ && I.push(s);
      var R = this.compileAndRun(E, I);
      return d ? R.reshape([1, f, h, o.outChannels]) : R.reshape([1, o.outChannels, f, h]);
    },t.prototype.fusedConv2d = function (e) {
      var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights;
      if (a.filterHeight === 1 && a.filterWidth === 1 && a.dilationHeight === 1 && a.dilationWidth === 1 && a.strideHeight === 1 && a.strideWidth === 1 && (a.padInfo.type === 'SAME' || a.padInfo.type === 'VALID')) return this.conv2dByMatMul(n, o, a, i, s, u);
      if (O().getBool('WEBGL_CONV_IM2COL') && n.shape[0] === 1) return this.conv2dWithIm2Row(n, o, a, i, s, u);
      var c = i != null, l = u != null, h = s ? xo(s, !1) : null, f = new ru(a, c, h, l), d = [n, o];
      return i && d.push(i), u && d.push(u), this.compileAndRun(f, d);
    },t.prototype.conv2d = function (e, n, o) {
      if (o.filterHeight === 1 && o.filterWidth === 1 && o.dilationHeight === 1 && o.dilationWidth === 1 && o.strideHeight === 1 && o.strideWidth === 1 && (o.padInfo.type === 'SAME' || o.padInfo.type === 'VALID')) return this.conv2dByMatMul(e, n, o);
      if (O().getBool('WEBGL_CONV_IM2COL') && e.shape[0] === 1) return this.conv2dWithIm2Row(e, n, o);
      var a = new ru(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.conv2dDerInput = function (e, n, o) {
      var a = new xp(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.conv2dDerFilter = function (e, n, o) {
      var a = new bp(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.fusedDepthwiseConv2D = function (e) {
      var n, o = e.input, a = e.filter, i = e.convInfo, s = e.bias, u = e.activation, c = e.preluActivationWeights,
        l = O().getBool('WEBGL_PACK_DEPTHWISECONV') && i.strideWidth <= 2 && i.outChannels / i.inChannels == 1,
        h = u ? xo(u, l) : null, f = [o, a], d = s != null, p = c != null;
      return d && f.push(s), p && f.push(c), l ? (n = new au(i, d, h, p), this.compileAndRun(n, f)) : (n = new ou(i, d, h, p), this.compileAndRun(n, f));
    },t.prototype.depthwiseConv2D = function (e, n, o) {
      var a;
      return O().getBool('WEBGL_PACK_DEPTHWISECONV') && o.strideWidth <= 2 && o.outChannels / o.inChannels == 1 ? (a = new au(o), this.compileAndRun(a, [e, n])) : (a = new ou(o), this.compileAndRun(a, [e, n]));
    },t.prototype.depthwiseConv2DDerInput = function (e, n, o) {
      var a = new Ep(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.depthwiseConv2DDerFilter = function (e, n, o) {
      var a = new Cp(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.conv3d = function (e, n, o) {
      var a = new kp(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.conv3dDerInput = function (e, n, o) {
      var a = new _p(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.conv3dDerFilter = function (e, n, o) {
      var a = new wp(o);
      return this.compileAndRun(a, [e, n]);
    },t.prototype.maxPool = function (e, n) {
      var o = new Wa(n, 'max', !1);
      return this.compileAndRun(o, [e]);
    },t.prototype.avgPool = function (e, n) {
      var o = new Wa(n, 'avg', !1);
      return this.compileAndRun(o, [e], 'float32');
    },t.prototype.maxPoolBackprop = function (e, n, o, a) {
      var i = new Wa(a, 'max', !0), s = this.compileAndRun(i, [n]), u = new jp(a),
        c = this.compileAndRun(u, [e, s], n.dtype);
      return s.dispose(), c;
    },t.prototype.avgPoolBackprop = function (e, n, o) {
      var a = new up(o);
      return this.compileAndRun(a, [e], n.dtype);
    },t.prototype.cast = function (e, n) {
      return Xi(e, n, this);
    },t.prototype.unstack = function (e, n) {
      for (var o = e.shape[n], a = new Array(e.rank - 1), i = 0, s = 0; s < e.rank; s++) s !== n && (a[i++] = e.shape[s]);
      var u = new Array(e.rank).fill(0), c = e.shape.slice();
      c[n] = 1;
      var l = new Array(o);
      for (s = 0; s < l.length; s++) u[n] = s, l[s] = this.slice(e, u, c).reshape(a);
      return l;
    },t.prototype.avgPool3d = function (e, n) {
      var o = new Ua(n, 'avg', !1);
      return this.compileAndRun(o, [e], 'float32');
    },t.prototype.avgPool3dBackprop = function (e, n, o) {
      var a = new cp(o);
      return this.compileAndRun(a, [e], n.dtype);
    },t.prototype.maxPool3d = function (e, n) {
      var o = new Ua(n, 'max', !1);
      return this.compileAndRun(o, [e], 'float32');
    },t.prototype.maxPool3dBackprop = function (e, n, o, a) {
      var i = new Ua(a, 'max', !0), s = this.compileAndRun(i, [n]), u = new Xp(a),
        c = this.compileAndRun(u, [e, s], n.dtype);
      return s.dispose(), c;
    },t.prototype.reshape = function (e, n) {
      var o = this.texData.get(e.dataId);
      if (o.isPacked && !Wr(e.shape, n) && (o.texture === null || !Wr(o.shape, n))) {
        var a = this.packedReshape(e, n);
        return T.makeTensorFromDataId(a.dataId, a.shape, a.dtype);
      }
      return $o(e, n);
    },t.prototype.resizeBilinear = function (e, n, o, a) {
      var i = O().getBool('WEBGL_PACK_IMAGE_OPERATIONS') ? new rv(e.shape, n, o, a) : new nv(e.shape, n, o, a);
      return this.compileAndRun(i, [e], 'float32');
    },t.prototype.resizeBilinearBackprop = function (e, n, o) {
      var a = new tv(e, n, o);
      return this.compileAndRun(a, [e]);
    },t.prototype.resizeNearestNeighbor = function (e, n, o, a) {
      var i = new av(e.shape, n, o, a);
      return this.compileAndRun(i, [e]);
    },t.prototype.resizeNearestNeighborBackprop = function (e, n, o) {
      var a = new ov(e, n, o);
      return this.compileAndRun(a, [e]);
    },t.prototype.multinomial = function (e, n, o, a) {
      var i = n ? e : pn(e), s = i.shape[0], u = i.shape[1], c = new Kp(s, u, o), l = c.getCustomSetupFunc(a);
      return this.compileAndRun(c, [i], 'int32', l);
    },t.prototype.oneHot = function (e, n, o, a) {
      var i = new Yp(e.size, n, o, a);
      return this.compileAndRun(i, [e]);
    },t.prototype.diag = function (e) {
      var n = new Tp(e.size);
      return this.compileAndRun(n, [e]);
    },t.prototype.nonMaxSuppression = function (e, n, o, a, i) {
      return Go('tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead'), Yi(e.dataSync(), n.dataSync(), o, a, i);
    },t.prototype.cropAndResize = function (e, n, o, a, i, s) {
      var u = new Ip(e.shape, n.shape, a, i, s);
      return this.compileAndRun(u, [e, n, o], 'float32');
    },t.prototype.depthToSpace = function (e, n, o) {
      k(n > 1, function () {
        return 'blockSize should be > 1 for depthToSpace, but was: ' + n;
      });
      var a = e.shape[0], i = o === 'NHWC' ? e.shape[1] : e.shape[2], s = o === 'NHWC' ? e.shape[2] : e.shape[3],
        u = o === 'NHWC' ? e.shape[3] : e.shape[1], c = i * n, l = s * n, h = u / (n * n),
        f = new Dp(o === 'NHWC' ? [a, c, l, h] : [a, h, c, l], n, o);
      return this.compileAndRun(f, [e]);
    },t.prototype.split = function (e, n, o) {
      return al(e, n, o);
    },t.prototype.scatterND = function (e, n, o) {
      var a = Zr(0, e, o), i = a.sliceRank, s = a.numUpdates, u = a.sliceSize, c = a.strides, l = a.outputSize,
        h = [l / u, u], f = e.reshape([s, i]), d = n.reshape([s, u]);
      if (l === 0) return $o(Ze([]), o);
      var p = X(0), v = new cu(s, i, f.rank, d.rank, c, h);
      return this.compileAndRun(v, [d, f, p]).reshape(o);
    },t.prototype.sparseToDense = function (e, n, o, a) {
      var i = Zr(0, e, o), s = i.sliceRank, u = i.numUpdates, c = i.strides, l = i.outputSize,
        h = new cu(u, s, e.rank, n.rank, c, [l, 1]);
      return this.compileAndRun(h, [n, e, a]).reshape(o);
    },t.prototype.fft = function (e) {
      return this.fftImpl(e, !1);
    },t.prototype.ifft = function (e) {
      return this.fftImpl(e, !0);
    },t.prototype.fftImpl = function (e, n) {
      var o = this.texData.get(e.dataId), a = new su(Op, e.shape, n), i = new su(Bp, e.shape, n),
        s = [this.makeComplexComponentTensorInfo(e, o.complexTensors.real), this.makeComplexComponentTensorInfo(e, o.complexTensors.imag)],
        u = this.compileAndRun(a, s), c = this.compileAndRun(i, s), l = this.complex(u, c).as2D(e.shape[0], e.shape[1]);
      return u.dispose(), c.dispose(), l;
    },t.prototype.gatherND = function (e, n) {
      var o = n.shape, a = o[o.length - 1], i = Vi(e, n), s = i[0], u = i[1], c = i[2], l = i[3], h = n.reshape([u, a]),
        f = e.reshape([e.size / c, c]), d = new Up(a, l, [u, c]);
      return this.compileAndRun(d, [f, h]).reshape(s);
    },t.prototype.fill = function (e, n, o) {
      if ((o = o || Sr(n)) === 'string') {
        var a = Hr(o, J(e));
        return a.fill(n), T.makeTensor(a, e, o, this);
      }
      var i = new Lp(e, n), s = i.getCustomSetupFunc(n);
      return this.compileAndRun(i, [], o, s);
    },t.prototype.onesLike = function (e) {
      if (e.dtype === 'string') throw new Error('onesLike is not supported under string dtype');
      return this.fill(e.shape, 1, e.dtype);
    },t.prototype.zerosLike = function (e) {
      return this.fill(e.shape, e.dtype === 'string' ? '' : 0, e.dtype);
    },t.prototype.linspace = function (e, n, o) {
      return Ki(e, n, o);
    },t.prototype.makeTensorInfo = function (e, n) {
      var o = this.write(null, e, n);
      return this.texData.get(o).usage = null, { dataId: o, shape: e, dtype: n };
    },t.prototype.makeOutput = function (e, n) {
      var o = this.makeTensorInfo(e, n).dataId;
      return T.makeTensorFromDataId(o, e, n, this);
    },t.prototype.unpackTensor = function (e) {
      var n = new Sv(e.shape);
      return this.runWebGLProgram(n, [e], e.dtype);
    },t.prototype.packTensor = function (e) {
      var n = new $p(e.shape);
      return this.runWebGLProgram(n, [e], e.dtype, null, !0);
    },t.prototype.packedReshape = function (e, n) {
      var o = [Yr(e.shape)].concat($r(e.shape)), a = { dtype: e.dtype, shape: o, dataId: e.dataId },
        i = [Yr(n)].concat($r(n)), s = new ev(i, o), u = this.runWebGLProgram(s, [a], e.dtype, null, !0);
      return { dataId: u.dataId, shape: n, dtype: u.dtype };
    },t.prototype.decode = function (e) {
      var n, o = this.texData.get(e), a = o.isPacked, i = o.shape, s = o.dtype, u = No(i);
      return n = a ? new Ap(u) : new Sp(u), {
        dtype: s,
        shape: i,
        dataId: this.runWebGLProgram(n, [{ shape: u, dtype: s, dataId: e }], s, null, !0).dataId,
      };
    },t.prototype.runWebGLProgram = function (e, n, o, a, i) {
      var s = this;
      i === void 0 && (i = !1);
      var u = this.makeTensorInfo(e.outputShape, o), c = this.texData.get(u.dataId);
      if (e.packedOutput && (c.isPacked = !0), e.outPackingScheme === Kr.DENSE) {
        var l = zr(e.outputShape);
        c.texShape = l.map(function (x) {
          return 2 * x;
        });
      }
      if (e.outTexUsage != null && (c.usage = e.outTexUsage), J(u.shape) === 0) return c.values = Er(u.dtype, 0), u;
      var h = [], f = n.map(function (x) {
        if (x.dtype === 'complex64') throw new Error('GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.');
        var b = s.texData.get(x.dataId);
        if (b.texture == null) {
          if (!e.packedInputs && J(x.shape) <= O().getNumber('WEBGL_SIZE_UPLOAD_UNIFORM')) return {
            shape: x.shape,
            texData: null,
            isUniform: !0,
            uniformValues: b.values,
          };
          e.packedInputs && (b.isPacked = !0, b.shape = x.shape);
        } else if (!!b.isPacked != !!e.packedInputs) x = b.isPacked ? s.unpackTensor(x) : s.packTensor(x), h.push(x), b = s.texData.get(x.dataId); else if (b.isPacked && !Wr(b.shape, x.shape)) {
          var w = x, _ = x.shape;
          x.shape = b.shape, x = s.packedReshape(x, _), h.push(x), b = s.texData.get(x.dataId), w.shape = _;
        }
        return s.uploadToGPU(x.dataId), { shape: x.shape, texData: b, isUniform: !1 };
      });
      this.uploadToGPU(u.dataId);
      var d, p = { shape: u.shape, texData: c, isUniform: !1 }, v = function (x, b, w) {
        var _ = '';
        b.concat(w).forEach(function (I) {
          var R = I.texData != null && I.texData.slice != null && I.texData.slice.flatOffset > 0,
            F = I.isUniform ? 'uniform' : I.texData.texShape;
          _ += I.shape + '_' + F + '_' + R;
        });
        var S = x.userCode, E = x.constructor.name;
        return E += '_' + _ + '_' + S;
      }(e, f, p), m = this.getAndSaveBinary(v, function () {
        return function (x, b, w, _) {
          var S = b.userCode, E = w.map(function (U, q) {
            var P = {
              logicalShape: U.shape,
              texShape: U.isUniform ? null : U.texData.texShape,
              isUniform: U.isUniform,
              isPacked: !U.isUniform && U.texData.isPacked,
              flatOffset: null,
            };
            return U.texData != null && U.texData.slice != null && U.texData.slice.flatOffset > 0 && (P.flatOffset = U.texData.slice.flatOffset), {
              name: b.variableNames[q],
              shapeInfo: P,
            };
          }), I = E.map(function (U) {
            return U.shapeInfo;
          }), R = {
            logicalShape: _.shape,
            texShape: _.texData.texShape,
            isUniform: !1,
            isPacked: _.texData.isPacked,
            flatOffset: null,
          }, F = np(E, R, S, b.packedInputs), D = x.createProgram(F), L = null, B = x.getUniformLocation(D, 'NAN', !1);
          O().getNumber('WEBGL_VERSION') === 1 && (L = x.getUniformLocation(D, 'INFINITY', !1));
          for (var W = {}, V = 0; V < b.variableNames.length; V++) {
            var z = b.variableNames[V];
            W[z] = x.getUniformLocation(D, z, !1), W['offset' + z] = x.getUniformLocation(D, 'offset' + z, !1);
          }
          return {
            program: b,
            source: F,
            webGLProgram: D,
            uniformLocations: W,
            inShapeInfos: I,
            outShapeInfo: R,
            infLoc: L,
            nanLoc: B,
          };
        }(s.gpgpu, e, f, p);
      }), g = this.activeTimers != null;
      if (g && (d = this.startTimer()), function (x, b, w, _, S) {
        uu(b.inShapeInfos, w), uu([b.outShapeInfo], [_]);
        var E = _.texData.texture, I = _.texData.texShape;
        _.texData.isPacked ? x.setOutputPackedMatrixTexture(E, I[0], I[1]) : x.setOutputMatrixTexture(E, I[0], I[1]), x.setProgram(b.webGLProgram), O().getNumber('WEBGL_VERSION') === 1 && b.infLoc !== null && x.gl.uniform1f(b.infLoc, 1 / 0), b.nanLoc !== null && x.gl.uniform1f(b.nanLoc, NaN), w.forEach(function (R, F) {
          var D = b.program.variableNames[F], L = b.uniformLocations[D], B = b.uniformLocations['offset' + D];
          if (L != null) if (R.isUniform) if (J(R.shape) < 2) x.gl.uniform1f(L, R.uniformValues[0]); else {
            var W = R.uniformValues;
            W instanceof Float32Array || (W = new Float32Array(W)), x.gl.uniform1fv(L, W);
          } else R.texData.slice != null && B != null && x.gl.uniform1i(B, R.texData.slice.flatOffset), x.setInputMatrixTexture(R.texData.texture, L, F);
        }), S != null && S(x, b.webGLProgram), x.executeProgram();
      }(this.gpgpu, m, f, p, a), h.forEach(function (x) {
        return s.disposeData(x.dataId);
      }), g && (d = this.endTimer(d), this.activeTimers.push({
        name: e.constructor.name,
        query: this.getQueryTime(d),
      })), !O().getBool('WEBGL_LAZILY_UNPACK') && c.isPacked && i === !1) {
        var y = this.unpackTensor(u);
        return this.disposeData(u.dataId), y;
      }
      return u;
    },t.prototype.compileAndRun = function (e, n, o, a, i) {
      i === void 0 && (i = !1), o = o || n[0].dtype;
      var s = this.runWebGLProgram(e, n, o, a, i);
      return T.makeTensorFromDataId(s.dataId, s.shape, s.dtype);
    },t.prototype.getAndSaveBinary = function (e, n) {
      return e in this.binaryCache || (this.binaryCache[e] = n()), this.binaryCache[e];
    },t.prototype.getTextureManager = function () {
      return this.textureManager;
    },t.prototype.dispose = function () {
      var e = this;
      this.disposed || (O().getBool('IS_TEST') || Object.keys(this.binaryCache).forEach(function (n) {
        e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram), delete e.binaryCache[n];
      }), this.textureManager.dispose(), this.canvas != null && typeof HTMLCanvasElement < 'u' && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = !0);
    },t.prototype.floatPrecision = function () {
      var e = this;
      return this.floatPrecisionValue == null && (this.floatPrecisionValue = K(function () {
        if (!O().get('WEBGL_RENDER_FLOAT32_ENABLED')) {
          var n = O().getBool('DEBUG');
          O().set('DEBUG', !1);
          var o = e.abs(X(1e-8)).dataSync()[0];
          if (O().set('DEBUG', n), o > 0) return 32;
        }
        return 16;
      })), this.floatPrecisionValue;
    },t.prototype.epsilon = function () {
      return this.floatPrecision() === 32 ? 1e-7 : 1e-4;
    },t.prototype.uploadToGPU = function (e) {
      var n, o = this.texData.get(e), a = o.shape, i = o.dtype, s = o.values, u = o.texture, c = o.usage,
        l = o.isPacked;
      if (u == null) {
        var h, f = this.activeTimers != null;
        f && (h = At());
        var d = o.texShape;
        if (d == null && (d = Nc(a, l), o.texShape = d), s != null) {
          var p = No(a), v = void 0, m = d[1], g = d[0], y = s instanceof Uint8Array;
          l ? (m = (n = ro(d[0], d[1]))[0], g = n[1], v = new Pp(p, [g, m], y)) : v = new Mp(p, [g, m], y);
          var x = this.makeTensorInfo([g, m], i);
          this.texData.get(x.dataId).usage = y ? xt.PIXELS : xt.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId), m, g, s);
          var b = this.runWebGLProgram(v, [x], i, null, !0), w = this.texData.get(b.dataId);
          o.texture = w.texture, o.texShape = w.texShape, o.isPacked = w.isPacked, o.usage = w.usage, this.disposeData(x.dataId), this.texData.delete(b.dataId), o.values = null, f && (this.uploadWaitMs += At() - h);
        } else {
          var _ = this.acquireTexture(d, c, i, l);
          o.texture = _;
        }
      }
    },t.prototype.convertAndCacheOnCPU = function (e, n) {
      var o = this.texData.get(e), a = o.dtype;
      return this.releaseGPUData(e), n != null && (o.values = function (i, s) {
        if (s === 'float32' || s === 'complex64') return i;
        if (s === 'int32' || s === 'bool') {
          for (var u = s === 'int32' ? new Int32Array(i.length) : new Uint8Array(i.length), c = 0; c < u.length; ++c) u[c] = Math.round(i[c]);
          return u;
        }
        throw new Error('Unknown dtype ' + s);
      }(n, a)), o.values;
    },t.prototype.acquireTexture = function (e, n, o, a) {
      if (this.numBytesInGPU += this.computeBytes(e, o), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
        var i = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
        this.warnedAboutMemory = !0, console.warn('High memory usage in GPU: ' + i + ' MB, most likely due to a memory leak');
      }
      return this.textureManager.acquireTexture(e, n, a);
    },t.prototype.computeBytes = function (e, n) {
      return e[0] * e[1] * Fi(n);
    },t;
  }(rl);
  pc() && T.registerBackend('webgl', function () {
    return new Ol;
  }, 2);
  var Dv = A({
    square_: function (r) {
      var t = C(r, 'x', 'square'), e = [t];
      return T.runKernelFunc(function (n, o) {
        return o([t]), n.square(t);
      }, { x: t }, null, 'Square', {}, e, []);
    },
  }), eo = 'SquaredDifference', Bl = A({
    squaredDifference_: function (r, t) {
      var e, n = C(r, 'a', 'squaredDifference'), o = C(t, 'b', 'squaredDifference');
      e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape);
      var a = { a: n, b: o }, i = [n, o];
      return T.runKernelFunc(function (s, u) {
        var c = s.squaredDifference(n, o);
        return u([n, o]), c;
      }, a, function (s, u) {
        var c = u[0], l = u[1], h = X(2);
        return {
          a: function () {
            return s.mul(c.sub(l).mul(h));
          }, b: function () {
            return s.mul(l.sub(c).mul(h));
          },
        };
      }, eo, {}, i, []);
    },
  }), Tv = A({
    abs_: function (r) {
      var t = C(r, 'x', 'abs');
      return t.dtype === 'complex64' ? T.runKernelFunc(function (e) {
        return e.complexAbs(t);
      }, { $x: t }) : T.runKernelFunc(function (e, n) {
        var o = e.abs(t);
        return n([t]), o;
      }, { x: t }, function (e, n) {
        var o = n[0];
        return {
          x: function () {
            return e.mul(o.toFloat().step(-1));
          },
        };
      }, 'Abs');
    },
  }), Fv = A({
    acos_: function (r) {
      var t = C(r, 'x', 'acos');
      return T.runKernelFunc(function (e, n) {
        var o = e.acos(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.divStrict(X(1).sub(o.toFloat().square()).sqrt()).neg();
          },
        };
      });
    },
  }), Nv = A({
    acosh_: function (r) {
      var t = C(r, 'x', 'acosh');
      return T.runKernelFunc(function (e, n) {
        var o = e.acosh(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.divStrict(o.toFloat().square().sub(1).sqrt());
          },
        };
      });
    },
  }), Mv = A({
    asin_: function (r) {
      var t = C(r, 'x', 'asin');
      return T.runKernelFunc(function (e, n) {
        var o = e.asin(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.divStrict(X(1).sub(o.toFloat().square()).sqrt());
          },
        };
      });
    },
  }), Pv = A({
    asinh_: function (r) {
      var t = C(r, 'x', 'asinh');
      return T.runKernelFunc(function (e, n) {
        var o = e.asinh(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.divStrict(X(1).add(o.toFloat().square()).sqrt());
          },
        };
      });
    },
  }), Ov = A({
    atan_: function (r) {
      var t = C(r, 'x', 'atan');
      return T.runKernelFunc(function (e, n) {
        var o = e.atan(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(o.toFloat().square().add(1));
          },
        };
      });
    },
  }), Bv = A({
    atanh_: function (r) {
      var t = C(r, 'x', 'atanh');
      return T.runKernelFunc(function (e, n) {
        var o = e.atanh(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(X(1).sub(o.toFloat().square()));
          },
        };
      });
    },
  }), Lv = A({
    ceil_: function (r) {
      var t = C(r, 'x', 'ceil');
      return T.runKernelFunc(function (e) {
        return e.ceil(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), ts = A({
    clipByValue_: function (r, t, e) {
      var n = C(r, 'x', 'clipByValue');
      k(t <= e, function () {
        return 'Error in clip: min (' + t + ') must be less than or equal to max (' + e + ').';
      });
      var o = [n], a = { min: t, max: e };
      return T.runKernelFunc(function (i, s) {
        var u = i.clip(n, t, e);
        return s([n]), u;
      }, { x: n }, function (i, s) {
        var u = s[0];
        return {
          x: function () {
            return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)), ge(i));
          },
        };
      }, 'ClipByValue', a, o);
    },
  }), Wv = A({
    cos_: function (r) {
      var t = C(r, 'x', 'cos'), e = [t];
      return T.runKernelFunc(function (n, o) {
        var a = n.cos(t);
        return o([t]), a;
      }, { x: t }, function (n, o) {
        var a = o[0];
        return {
          x: function () {
            return a.toFloat().sin().neg().mul(n);
          },
        };
      }, 'Cos', {}, e);
    },
  }), Uv = A({
    cosh_: function (r) {
      var t = C(r, 'x', 'cosh');
      return T.runKernelFunc(function (e, n) {
        var o = e.cosh(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return o.toFloat().sinh().mulStrict(e);
          },
        };
      });
    },
  }), zv = A({
    erf_: function (r) {
      var t = C(r, 'x', 'erf');
      return k(t.dtype === 'int32' || t.dtype === 'float32', function () {
        return 'Input dtype must be `int32` or `float32`.';
      }), t.dtype === 'int32' && (t = t.toFloat()), T.runKernelFunc(function (e, n) {
        var o = e.erf(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.mul(o.square().neg().exp().mul(2 / Math.sqrt(Math.PI)));
          },
        };
      });
    },
  }), wi = A({
    exp_: function (r) {
      var t = C(r, 'x', 'exp');
      return T.runKernelFunc(function (e, n) {
        var o = e.exp(t);
        return n([o]), o;
      }, { x: t }, function (e, n) {
        return {
          x: function () {
            return e.mulStrict(n[0]);
          },
        };
      }, 'Exp', {}, [], [!0]);
    },
  }), Vv = A({
    expm1_: function (r) {
      var t = C(r, 'x', 'expm1');
      return T.runKernelFunc(function (e, n) {
        var o = e.expm1(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.mul(o.exp());
          },
        };
      });
    },
  }), Gv = A({
    floor_: function (r) {
      var t = C(r, 'x', 'floor');
      return T.runKernelFunc(function (e) {
        return e.floor(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), qv = A({
    log_: function (r) {
      var t = C(r, 'x', 'log'), e = [t];
      return T.runKernelFunc(function (n, o) {
        var a = n.log(t);
        return o([t]), a;
      }, { x: t }, function (n, o) {
        var a = o[0];
        return {
          x: function () {
            return n.div(a.toFloat());
          },
        };
      }, 'Log', {}, e);
    },
  }), Hv = A({
    log1p_: function (r) {
      var t = C(r, 'x', 'log1p');
      return T.runKernelFunc(function (e, n) {
        var o = e.log1p(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(o.add(1));
          },
        };
      });
    },
  }), jv = A({
    logSigmoid_: function (r) {
      var t = C(r, 'x', 'logSigmoid');
      return T.runKernelFunc(function (e, n) {
        var o = e.softplus(t.neg()).neg();
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.mul(o.neg().sigmoid());
          },
        };
      });
    },
  }), Zo = A({
    neg_: function (r) {
      var t = C(r, 'x', 'neg'), e = [t];
      return T.runKernelFunc(function (n) {
        return n.neg(t);
      }, { x: t }, function (n) {
        return {
          x: function () {
            return n.neg();
          },
        };
      }, 'Neg', {}, e);
    },
  }), Xv = A({
    reciprocal_: function (r) {
      var t = C(r, 'x', 'reciprocal');
      return T.runKernelFunc(function (e, n) {
        var o = e.reciprocal(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(o.square().neg());
          },
        };
      });
    },
  }), Kv = A({
    round_: function (r) {
      var t = C(r, 'x', 'round');
      return T.runKernelFunc(function (e) {
        return e.round(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), Ll = A({
    rsqrt_: function (r) {
      var t = C(r, 'x', 'rsqrt'), e = [t];
      return T.runKernelFunc(function (n, o) {
        var a = n.rsqrt(t);
        return o([t]), a;
      }, { x: t }, function (n, o) {
        var a = o[0];
        return {
          x: function () {
            return n.div(a.pow(1.5).mul(2)).neg();
          },
        };
      }, 'Rsqrt', {}, e);
    },
  }), Wl = A({
    sigmoid_: function (r) {
      var t = C(r, 'x', 'sigmoid');
      return T.runKernelFunc(function (e, n) {
        var o = e.sigmoid(t);
        return n([o]), o;
      }, { x: t }, function (e, n) {
        var o = n[0];
        return {
          x: function () {
            return e.mul(o.mul(X(1).sub(o)));
          },
        };
      }, 'Sigmoid');
    },
  }), Yv = A({
    sign_: function (r) {
      var t = C(r, 'x', 'sign');
      return T.runKernelFunc(function (e) {
        return e.sign(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), $v = A({
    isNaN_: function (r) {
      var t = C(r, 'x', 'isNaN');
      return T.runKernelFunc(function (e) {
        return e.isNaN(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), Zv = A({
    isInf_: function (r) {
      var t = C(r, 'x', 'isInf');
      return T.runKernelFunc(function (e) {
        return e.isInf(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), Jv = A({
    isFinite_: function (r) {
      var t = C(r, 'x', 'isFinite');
      return T.runKernelFunc(function (e) {
        return e.isFinite(t);
      }, { $x: t }, function (e) {
        return {
          $x: function () {
            return ge(e);
          },
        };
      });
    },
  }), Qv = A({
    sin_: function (r) {
      var t = C(r, 'x', 'sin'), e = [t];
      return T.runKernelFunc(function (n, o) {
        var a = n.sin(t);
        return o([t]), a;
      }, { x: t }, function (n, o) {
        var a = o[0];
        return {
          x: function () {
            return a.toFloat().cos().mul(n);
          },
        };
      }, 'Sin', {}, e);
    },
  }), em = A({
    sinh_: function (r) {
      var t = C(r, 'x', 'sinh');
      return T.runKernelFunc(function (e, n) {
        var o = e.sinh(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return o.toFloat().cosh().mulStrict(e);
          },
        };
      });
    },
  }), tm = A({
    softplus_: function (r) {
      var t = C(r, 'x', 'softplus');
      return T.runKernelFunc(function (e, n) {
        var o = e.softplus(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.mul(o.sigmoid());
          },
        };
      });
    },
  }), nm = A({
    sqrt_: function (r) {
      var t = C(r, 'x', 'sqrt');
      return T.runKernelFunc(function (e, n) {
        var o = e.sqrt(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(o.toFloat().sqrt().mul(2));
          },
        };
      });
    },
  }), rm = A({
    step_: function (r, t) {
      t === void 0 && (t = 0);
      var e = C(r, 'x', 'step');
      return T.runKernelFunc(function (n) {
        return n.step(e, t);
      }, { $x: e }, function (n) {
        return {
          $x: function () {
            return ge(n);
          },
        };
      });
    },
  }), om = A({
    tan_: function (r) {
      var t = C(r, 'x', 'tan');
      return T.runKernelFunc(function (e, n) {
        var o = e.tan(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return e.div(o.cos().square());
          },
        };
      });
    },
  }), am = A({
    tanh_: function (r) {
      var t = C(r, 'x', 'tanh');
      return T.runKernelFunc(function (e, n) {
        var o = e.tanh(t);
        return n([o]), o;
      }, { x: t }, function (e, n) {
        var o = n[0];
        return {
          x: function () {
            return X(1).sub(o.square()).mulStrict(e);
          },
        };
      }, 'Tanh', {}, null, [!0]);
    },
  });

  function Ul(r, t, e, n, o, a) {
    var i, s, u = C(r, 'x', 'batchNorm'), c = C(t, 'mean', 'batchNorm'), l = C(e, 'variance', 'batchNorm');
    return o != null && (i = C(o, 'scale', 'batchNorm')), n != null && (s = C(n, 'offset', 'batchNorm')), k(u.rank === 2, function () {
      return 'Error in batchNorm3D: x must be rank 3 but got rank ' + u.rank + '.';
    }), k(c.rank === 2 || c.rank === 1, function () {
      return 'Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ' + c.rank + '.';
    }), k(l.rank === 2 || l.rank === 1, function () {
      return 'Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ' + l.rank + '.';
    }), i != null && k(i.rank === 2 || i.rank === 1, function () {
      return 'Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ' + i.rank + '.';
    }), s != null && k(s.rank === 2 || s.rank === 1, function () {
      return 'Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ' + s.rank + '.';
    }), ao(u, c, l, s, i, a);
  }

  function zl(r, t, e, n, o, a) {
    var i, s, u = C(r, 'x', 'batchNorm'), c = C(t, 'mean', 'batchNorm'), l = C(e, 'variance', 'batchNorm');
    return o != null && (i = C(o, 'scale', 'batchNorm')), n != null && (s = C(n, 'offset', 'batchNorm')), k(u.rank === 3, function () {
      return 'Error in batchNorm3D: x must be rank 3 but got rank ' + u.rank + '.';
    }), k(c.rank === 3 || c.rank === 1, function () {
      return 'Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ' + c.rank + '.';
    }), k(l.rank === 3 || l.rank === 1, function () {
      return 'Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ' + l.rank + '.';
    }), i != null && k(i.rank === 3 || i.rank === 1, function () {
      return 'Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ' + i.rank + '.';
    }), s != null && k(s.rank === 3 || s.rank === 1, function () {
      return 'Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ' + s.rank + '.';
    }), ao(u, c, l, s, i, a);
  }

  function Vl(r, t, e, n, o, a) {
    var i, s, u = C(r, 'x', 'batchNorm'), c = C(t, 'mean', 'batchNorm'), l = C(e, 'variance', 'batchNorm');
    return o != null && (i = C(o, 'scale', 'batchNorm')), n != null && (s = C(n, 'offset', 'batchNorm')), k(u.rank === 4, function () {
      return 'Error in batchNorm4D: x must be rank 4 but got rank ' + u.rank + '.';
    }), k(c.rank === 4 || c.rank === 1, function () {
      return 'Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ' + c.rank + '.';
    }), k(l.rank === 4 || l.rank === 1, function () {
      return 'Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ' + l.rank + '.';
    }), i != null && k(i.rank === 4 || i.rank === 1, function () {
      return 'Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ' + i.rank + '.';
    }), s != null && k(s.rank === 4 || s.rank === 1, function () {
      return 'Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ' + s.rank + '.';
    }), ao(u, c, l, s, i, a);
  }

  function ao(r, t, e, n, o, a) {
    a == null && (a = .001);
    var i, s, u, c = C(r, 'x', 'batchNorm'), l = C(t, 'mean', 'batchNorm'), h = C(e, 'variance', 'batchNorm');
    o != null && (i = C(o, 'scale', 'batchNorm')), n != null && (s = C(n, 'offset', 'batchNorm')), k(l.rank === h.rank, function () {
      return 'Batch normalization gradient requires mean and variance to have equal ranks.';
    }), k(s == null || l.rank === s.rank, function () {
      return 'Batch normalization gradient requires mean and offset to have equal ranks.';
    }), k(i == null || l.rank === i.rank, function () {
      return 'Batch normalization gradient requires mean and scale to have equal ranks.';
    }), u = c.rank === 0 || c.rank === 1 ? c.as4D(1, 1, 1, c.size) : c.rank === 2 ? c.as4D(1, 1, c.shape[0], c.shape[1]) : c.rank === 3 ? c.as4D(1, c.shape[0], c.shape[1], c.shape[2]) : c;
    var f = [c, l, h, i];
    return T.runKernelFunc(function (d, p) {
      var v = d.batchNormalization(u, wo(l), wo(h), a, wo(i), wo(s));
      return p([c, l, h, i]), v;
    }, { x: c, mean: l, variance: h, scale: i, offset: s }, function (d, p) {
      var v = p, m = v[0], g = v[1], y = v[2], x = v[3], b = x == null ? X(1) : x, w = Le(g.shape, u.shape), _ = [];
      if (g.rank === 1) {
        for (var S = 0; S < u.shape.length - 1; ++S) _.push(u.shape[S]);
        _.push(1);
      }
      var E = m.sub(g), I = d.mul(b), R = Ll(y.add(X(a))), F = R.mul(R).mul(R).mul(X(-.5));
      return {
        x: function () {
          return g.rank === 1 ? d.mul(mr(R.as4D(1, 1, 1, g.shape[0]), _)).mul(b).reshape(m.shape) : d.mul(R).mul(b).reshape(m.shape);
        }, mean: function () {
          var D = R.mul(X(-1)).mul(I);
          return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
        }, variance: function () {
          var D = F.mul(E).mul(I);
          return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
        }, scale: function () {
          var D = E.mul(R), L = d.mul(D);
          return g.rank === 1 && (L = L.sum(w)), L.reshape(g.shape);
        }, offset: function () {
          var D = d;
          return g.rank === 1 && (D = D.sum(w)), D.reshape(g.shape);
        },
      };
    }, 'BatchNormalization', { varianceEpsilon: a }, f).reshape(c.shape);
  }

  function wo(r) {
    return r == null ? null : r.rank === 0 ? r.as1D() : r.rank === 1 ? r : r.rank === 2 ? r.as4D(1, 1, r.shape[0], r.shape[1]) : r.rank === 3 ? r.as4D(1, r.shape[0], r.shape[1], r.shape[2]) : r;
  }

  function fa() {
    Uc('tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon');
  }

  var im = A({
      batchNormalization2d_: function (r, t, e, n, o, a) {
        return n === void 0 && (n = .001), fa(), Ul(r, t, e, a, o, n);
      },
    }), sm = A({
      batchNormalization3d_: function (r, t, e, n, o, a) {
        return n === void 0 && (n = .001), fa(), zl(r, t, e, a, o, n);
      },
    }), um = A({
      batchNormalization4d_: function (r, t, e, n, o, a) {
        return n === void 0 && (n = .001), fa(), Vl(r, t, e, a, o, n);
      },
    }), cm = A({
      batchNormalization_: function (r, t, e, n, o, a) {
        return n === void 0 && (n = .001), fa(), ao(r, t, e, a, o, n);
      },
    }), Gl = A({ batchNorm_: ao }), lm = A({ batchNorm2d_: Ul }), hm = A({ batchNorm3d_: zl }),
    fm = A({ batchNorm4d_: Vl }), da = A({
      logicalAnd_: function (r, t) {
        var e = C(r, 'a', 'logicalAnd', 'bool'), n = C(t, 'b', 'logicalAnd', 'bool');
        return le(e.shape, n.shape), T.runKernelFunc(function (o) {
          return o.logicalAnd(e, n);
        }, { a: e, b: n }, null, 'LogicalAnd');
      },
    }), dm = A({
      logicalNot_: function (r) {
        var t = C(r, 'x', 'logicalNot', 'bool');
        return T.runKernelFunc(function (e) {
          return e.logicalNot(t);
        }, { $x: t });
      },
    }), ql = A({
      logicalOr_: function (r, t) {
        var e = C(r, 'a', 'logicalOr', 'bool'), n = C(t, 'b', 'logicalOr', 'bool');
        return le(e.shape, n.shape), T.runKernelFunc(function (o) {
          return o.logicalOr(e, n);
        }, { $a: e, $b: n });
      },
    }), pm = A({
      logicalXor_: function (r, t) {
        var e = C(r, 'a', 'logicalXor', 'bool'), n = C(t, 'b', 'logicalXor', 'bool');
        return le(e.shape, n.shape), ql(r, t).logicalAnd(da(r, t).logicalNot());
      },
    }), Jn = A({
      where_: function (r, t, e) {
        var n = C(t, 'a', 'where'), o = C(e, 'b', 'where'), a = C(r, 'condition', 'where', 'bool');
        return xe(n.shape, o.shape, 'Error in where: '), a.rank === 1 ? k(a.shape[0] === n.shape[0], function () {
          return 'The first dimension of `a` must match the size of `condition`.';
        }) : xe(a.shape, o.shape, 'Error in where: '), T.runKernelFunc(function (i, s) {
          var u = i.select(a, n, o);
          return s([a]), u;
        }, { $condition: a, $a: n, $b: o }, function (i, s) {
          var u = s[0];
          return {
            $condition: function () {
              return ge(u).toFloat();
            }, $a: function () {
              return i.mul(u.cast(i.dtype));
            }, $b: function () {
              return i.mul(u.logicalNot().cast(i.dtype));
            },
          };
        });
      },
    }), Hl = function (r) {
      return $(this, void 0, void 0, function () {
        var t, e, n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, (t = C(r, 'condition', 'whereAsync', 'bool')).data()];
            case 1:
              return e = o.sent(), n = Zi(t.shape, e), r !== t && t.dispose(), [2, n];
          }
        });
      });
    }, ce = A({
      add_: function (r, t) {
        var e, n = C(r, 'a', 'add'), o = C(t, 'b', 'add');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i) {
          return i.add(n, o);
        }, { a: n, b: o }, function (i) {
          return {
            a: function () {
              var s = i, u = Le(n.shape, a);
              return u.length > 0 && (s = s.sum(u)), s.reshape(n.shape);
            }, b: function () {
              var s = i, u = Le(o.shape, a);
              return u.length > 0 && (s = s.sum(u)), s.reshape(o.shape);
            },
          };
        }, 'Add');
      },
    }), vm = A({
      addN_: function (r) {
        k(Array.isArray(r), function () {
          return 'The argument passed to tf.addN() must be a list of tensors';
        }), k(r.length >= 1, function () {
          return 'Must pass at least one tensor to tf.addN(), but got ' + r.length;
        });
        var t = r.map(function (o, a) {
          return C(o, 'tensors' + a, 'addN');
        }), e = t[0];
        t.forEach(function (o) {
          if (o.dtype !== e.dtype) throw new Error('All tensors passed to tf.addN() must have the same dtype');
        }), t.forEach(function (o) {
          if (!Be(o.shape, e.shape)) throw new Error('All tensors passed to tf.addN() must have the same shape');
        });
        var n = t;
        return T.runKernelFunc(function (o) {
          return o.addN(t);
        }, n, function (o) {
          var a = {};
          return t.forEach(function (i, s) {
            a[s] = function () {
              return o.clone();
            };
          }), a;
        }, 'AddN');
      },
    }), mm = A({
      addStrict_: function (r, t) {
        var e = C(r, 'a', 'addStrict'), n = C(t, 'b', 'addStrict');
        return xe(e.shape, n.shape, 'Error in addStrict: '), e.add(n);
      },
    }), gm = A({
      atan2_: function (r, t) {
        var e, n = C(r, 'a', 'atan2'), o = C(t, 'b', 'atan2');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i, s) {
          var u = i.atan2(n, o);
          return s([n, o]), u;
        }, { $a: n, $b: o }, function (i, s) {
          var u = s[0], c = s[1];
          return {
            $a: function () {
              var l = ce(u.square(), c.square()), h = i.mul(c.div(l)), f = Le(u.shape, a);
              return f.length > 0 && (h = h.sum(f)), h.reshape(u.shape);
            }, $b: function () {
              var l = ce(u.square(), c.square()), h = Zo(i.mul(u.div(l))), f = Le(c.shape, a);
              return f.length > 0 && (h = h.sum(f)), h.reshape(c.shape);
            },
          };
        });
      },
    }), Dt = A({
      div_: function (r, t) {
        var e, n = C(r, 'a', 'div'), o = C(t, 'b', 'div');
        if (e = ke(n, o), n = e[0], o = e[1], n.dtype === 'int32' && o.dtype === 'int32') return jl(n, o);
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i, s) {
          var u = i.realDivide(n, o);
          return s([n, o]), u;
        }, { a: n, b: o }, function (i, s) {
          var u = s[0], c = s[1];
          return {
            a: function () {
              var l = i.div(c.toFloat()), h = Le(u.shape, a);
              return h.length > 0 ? l.sum(h).reshape(u.shape) : l;
            }, b: function () {
              var l = i.mul(u.toFloat()), h = Le(c.shape, a);
              h.length > 0 && (l = l.sum(h).reshape(c.shape));
              var f = c.square();
              return l.div(f.toFloat()).neg();
            },
          };
        }, 'Div');
      },
    }), ym = A({
      divNoNan_: function (r, t) {
        var e, n = C(r, 'a', 'div'), o = C(t, 'b', 'div');
        n = (e = ke(n, o))[0], o = e[1];
        var a = Dt(n, o), i = ge(a), s = o.equal(i);
        return Jn(s, i, a);
      },
    }), bm = A({
      divStrict_: function (r, t) {
        var e = C(r, 'a', 'div'), n = C(t, 'b', 'div');
        return xe(e.shape, n.shape, 'Error in divideStrict: '), e.div(n);
      },
    }), jl = A({
      floorDiv_: function (r, t) {
        var e, n = C(r, 'a', 'floorDiv'), o = C(t, 'b', 'floorDiv');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i, s) {
          var u = i.floorDiv(n, o);
          return s([n, o]), u;
        }, { a: n, b: o }, function (i, s) {
          var u = s[0], c = s[1];
          return {
            a: function () {
              var l = i.div(c.toFloat()), h = Le(u.shape, a);
              return h.length > 0 ? l.sum(h).reshape(u.shape) : l;
            }, b: function () {
              var l = i.mul(u.toFloat()), h = Le(c.shape, a);
              h.length > 0 && (l = l.sum(h).reshape(c.shape));
              var f = c.square();
              return l.div(f.toFloat()).neg();
            },
          };
        }, 'FloorDiv');
      },
    }), ns = A({
      maximum_: function (r, t) {
        var e, n = C(r, 'a', 'maximum'), o = C(t, 'b', 'maximum');
        return e = ke(n, o), n = e[0], o = e[1], n.dtype === 'bool' && (n = n.toInt(), o = o.toInt()), le(n.shape, o.shape), T.runKernelFunc(function (a, i) {
          var s = a.maximum(n, o);
          return i([n, o]), s;
        }, { a: n, b: o }, function (a, i) {
          var s = i[0], u = i[1];
          return {
            a: function () {
              return a.mul(s.greaterEqual(u).toFloat());
            }, b: function () {
              return a.mul(s.less(u).toFloat());
            },
          };
        }, 'Maximum');
      },
    }), xm = A({
      maximumStrict_: function (r, t) {
        var e = C(r, 'a', 'maximumStrict'), n = C(t, 'b', 'maximumStrict');
        return xe(e.shape, n.shape, 'Error in maximumStrict: '), e.maximum(n);
      },
    }), Xl = A({
      minimum_: function (r, t) {
        var e, n = C(r, 'a', 'minimum'), o = C(t, 'b', 'minimum');
        return e = ke(n, o), n = e[0], o = e[1], n.dtype === 'bool' && (n = n.toInt(), o = o.toInt()), le(n.shape, o.shape), T.runKernelFunc(function (a, i) {
          var s = a.minimum(n, o);
          return i([n, o]), s;
        }, { a: n, b: o }, function (a, i) {
          var s = i[0], u = i[1];
          return {
            a: function () {
              return a.mul(s.lessEqual(u).toFloat());
            }, b: function () {
              return a.mul(s.greater(u).toFloat());
            },
          };
        }, 'Minimum');
      },
    }), wm = A({
      minimumStrict_: function (r, t) {
        var e = C(r, 'a', 'minimumStrict'), n = C(t, 'b', 'minimumStrict');
        return xe(e.shape, n.shape, 'Error in minimumStrict: '), e.minimum(n);
      },
    }), _m = A({
      mod_: function (r, t) {
        var e, n = C(r, 'a', 'mod'), o = C(t, 'b', 'mod');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i, s) {
          var u = i.mod(n, o);
          return s([n, o]), u;
        }, { $a: n, $b: o }, function (i, s) {
          var u = s[0], c = s[1];
          return {
            $a: function () {
              var l = Le(u.shape, a);
              return l.length > 0 ? i.sum(l).reshape(u.shape) : i;
            }, $b: function () {
              var l = i.mul(u.div(c).floor().neg()), h = Le(c.shape, a);
              return h.length > 0 ? l.sum(h).reshape(c.shape) : l;
            },
          };
        });
      },
    }), Cm = A({
      modStrict_: function (r, t) {
        var e = C(r, 'a', 'modStrict'), n = C(t, 'b', 'modStrict');
        return xe(e.shape, n.shape, 'Error in modStrict: '), e.mod(n);
      },
    }), at = A({
      mul_: function (r, t) {
        var e, n = C(r, 'a', 'mul'), o = C(t, 'b', 'mul');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i, s) {
          var u = i.multiply(n, o);
          return s([n, o]), u;
        }, { a: n, b: o }, function (i, s) {
          var u = s[0], c = s[1];
          return {
            a: function () {
              var l = i.mul(c.toFloat()), h = Le(u.shape, a);
              return h.length > 0 ? l.sum(h).reshape(u.shape) : l;
            }, b: function () {
              var l = i.mul(u.toFloat()), h = Le(c.shape, a);
              return h.length > 0 ? l.sum(h).reshape(c.shape) : l;
            },
          };
        }, 'Mul');
      },
    }), Em = A({
      mulStrict_: function (r, t) {
        var e = C(r, 'a', 'mul'), n = C(t, 'b', 'mul');
        return xe(e.shape, n.shape, 'Error in multiplyStrict: '), e.mul(n);
      },
    }), Jo = A({
      pow_: function (r, t) {
        var e, n = C(r, 'base', 'pow'), o = C(t, 'exp', 'pow');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape), i = [n, o];
        return T.runKernelFunc(function (s, u) {
          var c = s.pow(n, o);
          return u([n, o, c]), c;
        }, { a: n, b: o }, function (s, u) {
          var c = u[0], l = u[1], h = u[2];
          return {
            a: function () {
              var f = l.toFloat(), d = s.mul(f.mul(c.pow(f.sub(X(1))))), p = Le(c.shape, a);
              return p.length > 0 && (d = d.sum(p)), d.reshape(c.shape);
            }, b: function () {
              var f = c.greater(0), d = c.log().where(f, ge(c)), p = s.mul(h.mul(d)), v = Le(l.shape, a);
              return v.length > 0 && (p = p.sum(v)), p.reshape(l.shape);
            },
          };
        }, 'Pow', {}, i, [!0]);
      },
    }), km = A({
      powStrict_: function (r, t) {
        return xe(r.shape, t.shape, 'Error in powStrict: '), r.pow(t);
      },
    }), Im = A({
      squaredDifferenceStrict_: function (r, t) {
        var e = C(r, 'a', 'squaredDifferenceStrict'), n = C(t, 'b', 'squaredDifferenceStrict');
        return xe(e.shape, n.shape, 'Error in squaredDifferenceStrict: '), e.squaredDifference(n);
      },
    }), qe = A({
      sub_: function (r, t) {
        var e, n = C(r, 'a', 'sub'), o = C(t, 'b', 'sub');
        e = ke(n, o), n = e[0], o = e[1];
        var a = le(n.shape, o.shape);
        return T.runKernelFunc(function (i) {
          return i.subtract(n, o);
        }, { a: n, b: o }, function (i) {
          return {
            a: function () {
              var s = i, u = Le(n.shape, a);
              return u.length > 0 && (s = s.sum(u)), s.reshape(n.shape);
            }, b: function () {
              var s = i, u = Le(o.shape, a);
              return u.length > 0 && (s = s.sum(u)), s.neg().reshape(o.shape);
            },
          };
        }, 'Sub');
      },
    }), Rm = A({
      subStrict_: function (r, t) {
        var e = C(r, 'a', 'subStrict'), n = C(t, 'b', 'subStrict');
        return xe(e.shape, n.shape, 'Error in subStrict: '), e.sub(n);
      },
    }), Kl = A({
      equal_: function (r, t) {
        var e, n = C(r, 'a', 'equal'), o = C(t, 'b', 'equal');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a) {
          return a.equal(n, o);
        }, { $a: n, $b: o });
      },
    }), Sm = A({
      equalStrict_: function (r, t) {
        var e = C(r, 'a', 'equalStrict'), n = C(t, 'b', 'equalStrict');
        return xe(e.shape, n.shape, 'Error in equalStrict: '), e.equal(n);
      },
    }), Am = A({
      greater_: function (r, t) {
        var e, n = C(r, 'a', 'greater'), o = C(t, 'b', 'greater');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a) {
          return a.greater(n, o);
        }, { a: n, b: o }, null, 'Greater');
      },
    }), Yl = A({
      greaterEqual_: function (r, t) {
        var e, n = C(r, 'a', 'greaterEqual'), o = C(t, 'b', 'greaterEqual');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a, i) {
          var s = a.greaterEqual(n, o);
          return i([n, o]), s;
        }, { a: n, b: o }, function (a, i) {
          var s = i[0], u = i[1];
          return {
            a: function () {
              return ge(s);
            }, b: function () {
              return ge(u);
            },
          };
        }, 'GreaterEqual');
      },
    }), Dm = A({
      greaterEqualStrict_: function (r, t) {
        var e = C(r, 'a', 'greaterEqualStrict'), n = C(t, 'b', 'greaterEqualStrict');
        return xe(e.shape, n.shape, 'Error in greaterEqualStrict: '), e.greaterEqual(n);
      },
    }), Tm = A({
      greaterStrict_: function (r, t) {
        var e = C(r, 'a', 'greaterStrict'), n = C(t, 'b', 'greaterStrict');
        return xe(e.shape, n.shape, 'Error in greaterStrict: '), e.greater(n);
      },
    }), Fm = A({
      less_: function (r, t) {
        var e, n = C(r, 'a', 'less'), o = C(t, 'b', 'less');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a) {
          return a.less(n, o);
        }, { a: n, b: o }, null, 'Less');
      },
    }), Nm = A({
      lessEqual_: function (r, t) {
        var e, n = C(r, 'a', 'lessEqual'), o = C(t, 'b', 'lessEqual');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a, i) {
          var s = a.lessEqual(n, o);
          return i([n, o]), s;
        }, { a: n, b: o }, null, 'LessEqual');
      },
    }), Mm = A({
      lessEqualStrict_: function (r, t) {
        var e = C(r, 'a', 'lessEqualStrict'), n = C(t, 'b', 'lessEqualStrict');
        return xe(e.shape, n.shape, 'Error in lessEqualStrict: '), e.lessEqual(n);
      },
    }), Pm = A({
      lessStrict_: function (r, t) {
        var e = C(r, 'a', 'lessStrict'), n = C(t, 'b', 'lessStrict');
        return xe(e.shape, n.shape, 'Error in lessStrict: '), e.less(n);
      },
    }), Om = A({
      notEqual_: function (r, t) {
        var e, n = C(r, 'a', 'notEqual'), o = C(t, 'b', 'notEqual');
        return e = ke(n, o), n = e[0], o = e[1], le(n.shape, o.shape), T.runKernelFunc(function (a) {
          return a.notEqual(n, o);
        }, { a: n, b: o }, null, 'NotEqual');
      },
    }), Bm = A({
      notEqualStrict_: function (r, t) {
        var e = C(r, 'a', 'notEqualStrict'), n = C(t, 'b', 'notEqualStrict');
        return xe(e.shape, n.shape, 'Error in notEqualStrict: '), e.notEqual(n);
      },
    });

  function yu(r, t) {
    for (var e = [], n = r; n < t; ++n) e.push(n);
    return e;
  }

  function bu(r) {
    for (var t = [], e = 0; e < r.length; ++e) for (var n = 0; n < r[e].length; ++n) t.push(r[e][n]);
    return t;
  }

  var rs = A({
    gather_: function (r, t, e) {
      e === void 0 && (e = 0);
      var n = C(r, 'x', 'gather'), o = C(t, 'indices', 'gather', 'int32');
      e = We(e, n.shape)[0];
      var a = function (i, s, u) {
        for (var c = i.shape[u], l = [], h = 1, f = 1, d = 0; d < u; d++) l.push(i.shape[d]), h *= i.shape[d];
        for (d = 0; d < s.rank; d++) l.push(s.shape[d]);
        for (d = u + 1; d < i.rank; d++) l.push(i.shape[d]), f *= i.shape[d];
        return { batchSize: h, sliceSize: f, dimSize: c, outputShape: l };
      }(n, o, e);
      return T.runKernelFunc(function (i, s) {
        var u = i.gather(n, o.flatten(), e);
        return s([o]), u;
      }, { x: n, indices: o }, function (i, s) {
        var u = s[0];
        return {
          x: function () {
            var c = n.shape, l = u.size, h = c.slice(0, e), f = h.length, d = c.slice(e, c.length).slice(1),
              p = d.length, v = yu(0, f), m = yu(f + 1, f + 1 + p), g = bu([h, [l], d]), y = i.reshape(g),
              x = u.reshape([l]), b = bu([[f], v, m]), w = y.transpose(b), _ = $l(w, x, n.shape[e]), S = sa(b);
            return _ = _.transpose(S);
          }, indices: function () {
            return u;
          },
        };
      }, 'Gather', { axis: e }).reshape(a.outputShape);
    },
  }), $l = A({
    unsortedSegmentSum_: function (r, t, e) {
      var n = C(r, 'x', 'unsortedSegmentSum'), o = C(t, 'segmentIds', 'unsortedSegmentSum', 'int32');
      return k(Te(e), function () {
        return 'numSegments must be of dtype int';
      }), T.runKernelFunc(function (a, i) {
        var s = a.unsortedSegmentSum(n, o, e);
        return i([o]), s;
      }, { $x: n }, function (a, i) {
        var s = i[0];
        return {
          $x: function () {
            return function (u, c) {
              for (var l = ns(c, ge(c)), h = rs(u, l), f = Yl(c, X(0, 'int32')), d = h.rank - f.rank, p = 0; p < d; ++p) f = kt(f, p + 1);
              f = da(f, Dr(h.shape, 'bool'));
              var v = ge(h);
              return Jn(f, h, v);
            }(a, s);
          },
        };
      });
    },
  }), Lm = function (r, t, e) {
    return $(this, void 0, void 0, function () {
      var n, o, a, i, s, u, c, l, h, f, d, p, v;
      return Z(this, function (m) {
        switch (m.label) {
          case 0:
            for (n = C(r, 'tensor', 'boolMask'), o = C(t, 'mask', 'boolMask', 'bool'), a = e == null ? 0 : e, i = o.rank, s = n.shape, k(i > 0, function () {
              return 'mask cannot be scalar';
            }), xe(s.slice(a, a + i), o.shape, 'mask\'s shape must match the first K dimensions of tensor\'s shape,'), u = 1, c = a; c < a + i; c++) u *= s[c];
            return l = s.slice(0, a).concat([u], s.slice(a + i)), h = n.reshape(l), f = o.reshape([-1]), [4, Hl(f)];
          case 1:
            return d = m.sent(), p = d.squeeze([1]), v = rs(h, p, a), r !== n && n.dispose(), t !== o && o.dispose(), p.dispose(), h.dispose(), f.dispose(), d.dispose(), [2, v];
        }
      });
    });
  };

  function Zl(r, t, e, n, o, a, i) {
    a === void 0 && (a = 'NHWC'), k(r.length === t.rank, function () {
      return 'Length of inShape (' + r.length + ') and rank of dy (' + t.rank + ') must match';
    });
    var s = r, u = t, c = !1;
    t.rank === 3 && (c = !0, u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]), s = [1, r[0], r[1], r[2]]), k(s.length === 4, function () {
      return 'Error in conv2dDerInput: inShape must be length 4, but got length ' + s.length + '.';
    }), k(u.rank === 4, function () {
      return 'Error in conv2dDerInput: dy must be rank 4, but got rank ' + u.rank;
    }), k(e.rank === 4, function () {
      return 'Error in conv2dDerInput: filter must be rank 4, but got rank ' + e.rank;
    });
    var l = a === 'NHWC' ? s[3] : s[1], h = a === 'NHWC' ? u.shape[3] : u.shape[1];
    k(l === e.shape[2], function () {
      return 'Error in conv2dDerInput: depth of input (' + l + ') must match input depth for filter ' + e.shape[2] + '.';
    }), k(h === e.shape[3], function () {
      return 'Error in conv2dDerInput: depth of output (' + h + ') must match output depth for filter ' + e.shape[3] + '.';
    }), i != null && k(Te(o), function () {
      return 'Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ' + i + ' but got pad ' + o + '.';
    });
    var f = ha(a), d = On(s, e.shape, n, 1, o, i, !1, f), p = T.runKernelFunc(function (v, m) {
      var g = v.conv2dDerInput(u, e, d);
      return m([e, u]), g;
    }, { dy4D: u, filter: e }, function (v, m) {
      var g = m[0], y = m[1];
      return {
        dy4D: function () {
          return St(v, g, n, o, a, 1, i);
        }, filter: function () {
          return os(v, y, g.shape, n, o, a, i);
        },
      };
    });
    return c ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p;
  }

  function Va(r) {
    var t = function (a) {
      return typeof a == 'number' ? [a, a, a] : a.length === 2 ? [a[0], a[1], 1] : a;
    }(r), e = t[0], n = t[1], o = t[2];
    return e === 1 && n === 1 && o === 1;
  }

  function Jl(r, t, e, n, o) {
    k(r.length === t.rank, function () {
      return 'Length of inShape (' + r.length + ') and rank of dy (' + t.rank + ') must match';
    });
    var a = r, i = t, s = !1;
    t.rank === 4 && (s = !0, i = t.as5D(1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]), a = [1, r[0], r[1], r[2], r[3]]);
    var u = a[4], c = i.shape[4];
    k(a.length === 5, function () {
      return 'Error in conv3dDerInput: inShape must be length 5, but got length ' + a.length + '.';
    }), k(i.rank === 5, function () {
      return 'Error in conv3dDerInput: dy must be rank 5, but got rank ' + i.rank;
    }), k(e.rank === 5, function () {
      return 'Error in conv3dDerInput: filter must be rank 5, but got rank ' + e.rank;
    }), k(u === e.shape[3], function () {
      return 'Error in conv3dDerInput: depth of input (' + u + ') must match input depth for filter ' + e.shape[3] + '.';
    }), k(c === e.shape[4], function () {
      return 'Error in conv3dDerInput: depth of output (' + c + ') must match output depth for filter ' + e.shape[4] + '.';
    });
    var l = Qr(a, e.shape, n, 1, o), h = T.runKernelFunc(function (f) {
      return f.conv3dDerInput(i, e, l);
    }, { dy5D: i });
    return s ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
  }

  var Wm = A({
    conv1d_: function (r, t, e, n, o, a, i) {
      o === void 0 && (o = 'NWC'), a === void 0 && (a = 1);
      var s = C(r, 'x', 'conv1d'), u = C(t, 'filter', 'conv1d'), c = s, l = !1;
      s.rank === 2 && (l = !0, c = s.as3D(1, s.shape[0], s.shape[1])), k(c.rank === 3, function () {
        return 'Error in conv1d: input must be rank 3, but got rank ' + c.rank + '.';
      }), k(u.rank === 3, function () {
        return 'Error in conv1d: filter must be rank 3, but got rank ' + u.rank + '.';
      }), i != null && k(Te(n), function () {
        return 'Error in conv1d: pad must be an integer when using, dimRoundingMode ' + i + ' but got pad ' + n + '.';
      }), k(c.shape[2] === u.shape[1], function () {
        return 'Error in conv1d: depth of input (' + c.shape[2] + ') must match input depth for filter ' + u.shape[1] + '.';
      }), k(ht(e, a), function () {
        return 'Error in conv1D: Either stride or dilation must be 1. Got stride ' + e + ' and dilation \'' + a + '\'';
      }), k(o === 'NWC', function () {
        return 'Error in conv1d: got dataFormat of ' + o + ' but only NWC is currently supported.';
      });
      var h = u.as4D(1, u.shape[0], u.shape[1], u.shape[2]), f = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]),
        d = St(f, h, [1, e], n, 'NHWC', [1, a], i);
      return l ? d.as2D(d.shape[2], d.shape[3]) : d.as3D(d.shape[0], d.shape[2], d.shape[3]);
    },
  }), St = A({
    conv2d_: function (r, t, e, n, o, a, i) {
      o === void 0 && (o = 'NHWC'), a === void 0 && (a = [1, 1]);
      var s = C(r, 'x', 'conv2d'), u = C(t, 'filter', 'conv2d'), c = s, l = !1;
      s.rank === 3 && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), k(c.rank === 4, function () {
        return 'Error in conv2d: input must be rank 4, but got rank ' + c.rank + '.';
      }), k(u.rank === 4, function () {
        return 'Error in conv2d: filter must be rank 4, but got rank ' + u.rank + '.';
      }), i != null && k(Te(n), function () {
        return 'Error in conv2d: pad must be an integer when using, dimRoundingMode ' + i + ' but got pad ' + n + '.';
      });
      var h = o === 'NHWC' ? c.shape[3] : c.shape[1];
      k(h === u.shape[2], function () {
        return 'Error in conv2d: depth of input (' + h + ') must match input depth for filter ' + u.shape[2] + '.';
      }), k(ht(e, a), function () {
        return 'Error in conv2D: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + a + '\'';
      });
      var f = ha(o), d = On(c.shape, u.shape, e, a, n, i, !1, f), p = [u, c], v = T.runKernelFunc(function (m, g) {
        var y = m.conv2d(c, u, d);
        return g([u, c]), y;
      }, { x: c, filter: u }, function (m, g) {
        var y = g, x = y[0], b = y[1];
        return k(Zn(a), function () {
          return 'Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations \'' + a + '\'';
        }), {
          x: function () {
            return Ql(b.shape, m, x, e, n, o);
          }, filter: function () {
            return os(b, m, x.shape, e, n, o);
          },
        };
      }, 'Conv2D', d, p);
      return l ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
    },
  }), Um = A({
    conv3d_: function (r, t, e, n, o, a) {
      o === void 0 && (o = 'NDHWC'), a === void 0 && (a = [1, 1, 1]);
      var i = C(r, 'x', 'conv3d'), s = C(t, 'filter', 'conv3d'), u = i, c = !1;
      i.rank === 4 && (c = !0, u = i.as5D(1, i.shape[0], i.shape[1], i.shape[2], i.shape[3])), k(u.rank === 5, function () {
        return 'Error in conv3d: input must be rank 5, but got rank ' + u.rank + '.';
      }), k(s.rank === 5, function () {
        return 'Error in conv3d: filter must be rank 5, but got rank ' + s.rank + '.';
      }), k(u.shape[4] === s.shape[3], function () {
        return 'Error in conv3d: depth of input (' + u.shape[4] + ') must match input depth for filter ' + s.shape[3] + '.';
      }), k(function (f, d) {
        return Va(f) || Va(d);
      }(e, a), function () {
        return 'Error in conv3D: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + a + '\'';
      }), k(o === 'NDHWC', function () {
        return 'Error in conv3d: got dataFormat of ' + o + ' but only NDHWC is currently supported.';
      });
      var l = Qr(u.shape, s.shape, e, a, n), h = T.runKernelFunc(function (f, d) {
        var p = f.conv3d(u, s, l);
        return d([u, s]), p;
      }, { x: u, $filter: s }, function (f, d) {
        k(Va(a), function () {
          return 'Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations \'' + a + '\'';
        });
        var p = d[0], v = d[1];
        return {
          x: function () {
            return Jl(p.shape, f, v, e, n);
          }, $filter: function () {
            return function (m, g, y, x, b) {
              var w = m;
              m.rank === 4 && (w = m.as5D(1, m.shape[0], m.shape[1], m.shape[2], m.shape[3]));
              var _ = g;
              _.rank === 4 && (_ = g.as5D(1, g.shape[0], g.shape[1], g.shape[2], g.shape[3])), k(w.rank === 5, function () {
                return 'Error in conv3dDerFilter: input must be rank 5, but got shape ' + w.shape + '.';
              }), k(_.rank === 5, function () {
                return 'Error in conv3dDerFilter: dy must be rank 5, but got shape ' + _.shape + '.';
              }), k(y.length === 5, function () {
                return 'Error in conv3dDerFilter: filterShape must be length 5, but got ' + y + '.';
              }), k(w.shape[4] === y[3], function () {
                return 'Error in conv3dDerFilter: depth of input ' + w.shape[4] + ') must match input depth in filter (' + y[3] + '.';
              }), k(_.shape[4] === y[4], function () {
                return 'Error in conv3dDerFilter: depth of dy (' + _.shape[4] + ') must match output depth for filter (' + y[4] + ').';
              });
              var S = Qr(w.shape, y, x, 1, b);
              return T.runKernelFunc(function (E) {
                return E.conv3dDerFilter(w, _, S);
              }, { x5D: w, dy5D: _ });
            }(p, f, v.shape, e, n);
          },
        };
      });
      return c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
    },
  }), os = A({
    conv2dDerFilter_: function (r, t, e, n, o, a, i) {
      a === void 0 && (a = 'NHWC');
      var s = r;
      r.rank === 3 && (s = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
      var u = t;
      u.rank === 3 && (u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), k(s.rank === 4, function () {
        return 'Error in conv2dDerFilter: input must be rank 4, but got shape ' + s.shape + '.';
      }), k(u.rank === 4, function () {
        return 'Error in conv2dDerFilter: dy must be rank 4, but got shape ' + u.shape + '.';
      }), k(e.length === 4, function () {
        return 'Error in conv2dDerFilter: filterShape must be length 4, but got ' + e + '.';
      });
      var c = a === 'NHWC' ? s.shape[3] : s.shape[1], l = a === 'NHWC' ? u.shape[3] : u.shape[1];
      k(c === e[2], function () {
        return 'Error in conv2dDerFilter: depth of input ' + c + ') must match input depth in filter (' + e[2] + '.';
      }), k(l === e[3], function () {
        return 'Error in conv2dDerFilter: depth of dy (' + l + ') must match output depth for filter (' + e[3] + ').';
      }), i != null && k(Te(o), function () {
        return 'Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ' + i + ' but got pad ' + o + '.';
      });
      var h = ha(a), f = On(s.shape, e, n, 1, o, i, !1, h);
      return T.runKernelFunc(function (d) {
        return d.conv2dDerFilter(s, u, f);
      }, { x4D: s, dy4D: u });
    },
  }), Ql = A({ conv2dDerInput_: Zl }), pa = A({
    depthwiseConv2d_: function (r, t, e, n, o, a, i) {
      a === void 0 && (a = [1, 1]);
      var s = C(r, 'x', 'depthwiseConv2d'), u = C(t, 'filter', 'depthwiseConv2d'), c = s, l = !1;
      s.rank === 3 && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), k(c.rank === 4, function () {
        return 'Error in depthwiseConv2d: input must be rank 4, but got rank ' + c.rank + '.';
      }), k(u.rank === 4, function () {
        return 'Error in depthwiseConv2d: filter must be rank 4, but got rank ' + u.rank + '.';
      }), k(c.shape[3] === u.shape[2], function () {
        return 'Error in depthwiseConv2d: number of input channels (' + c.shape[3] + ') must match the inChannels dimension in filter ' + u.shape[2] + '.';
      }), a == null && (a = [1, 1]), k(ht(e, a), function () {
        return 'Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + a + '\'';
      }), i != null && k(Te(n), function () {
        return 'Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ' + i + ' but got pad ' + n + '.';
      });
      var h = On(c.shape, u.shape, e, a, n, i, !0), f = [c, u], d = T.runKernelFunc(function (p, v) {
        var m = p.depthwiseConv2D(c, u, h);
        return v([c, u]), m;
      }, { x: c, filter: u }, function (p, v) {
        k(Zn(a), function () {
          return 'Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations \'' + a + '\'';
        });
        var m = v[0], g = v[1];
        return {
          x: function () {
            return eh(m.shape, p, g, h);
          }, filter: function () {
            return th(m, p, g.shape, h);
          },
        };
      }, 'DepthwiseConv2dNative', h, f);
      return l ? d.as3D(d.shape[1], d.shape[2], d.shape[3]) : d;
    },
  }), eh = A({
    depthwiseConv2dDerInput_: function (r, t, e, n) {
      var o = t, a = !1;
      t.rank === 3 && (a = !0, o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
      var i = T.runKernelFunc(function (s) {
        return s.depthwiseConv2DDerInput(o, e, n);
      }, { dy4D: o });
      return a ? i.as3D(i.shape[1], i.shape[2], i.shape[3]) : i;
    },
  }), th = A({
    depthwiseConv2dDerFilter_: function (r, t, e, n) {
      var o = r;
      r.rank === 3 && (o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
      var a = t;
      return a.rank === 3 && (a = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), T.runKernelFunc(function (i) {
        return i.depthwiseConv2DDerFilter(o, a, n);
      }, { x4D: o, dy4D: a });
    },
  }), as = A({
    separableConv2d_: function (r, t, e, n, o, a, i) {
      a === void 0 && (a = [1, 1]), i === void 0 && (i = 'NHWC');
      var s = C(r, 'x', 'separableConv2d'), u = C(t, 'depthwiseFilter', 'separableConv2d'),
        c = C(e, 'pointwiseFilter', 'separableConv2d'), l = s, h = !1;
      if (s.rank === 3 && (h = !0, l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), i === 'NCHW') throw new Error('separableConv2d currently does not support dataFormat NCHW; only NHWC is supported');
      k(l.rank === 4, function () {
        return 'Error in separableConv2d: input must be rank 4, but got rank ' + l.rank + '.';
      }), k(u.rank === 4, function () {
        return 'Error in separableConv2d: depthwise filter must be rank 4, but got rank ' + u.rank + '.';
      }), k(c.rank === 4, function () {
        return 'Error in separableConv2d: pointwise filter must be rank 4, but got rank ' + u.rank + '.';
      }), k(c.shape[0] === 1, function () {
        return 'Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ' + c.shape[0] + '.';
      }), k(c.shape[1] === 1, function () {
        return 'Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ' + c.shape[1] + '.';
      });
      var f = u.shape[2], d = u.shape[3];
      k(c.shape[2] === f * d, function () {
        return 'Error in separableConv2d: the third dimension of pointwise filter must be ' + f * d + ', but got ' + c.shape[2] + '.';
      });
      var p = pa(l, u, n, o, i, a), v = St(p, c, 1, 'valid', i);
      return h ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
    },
  }), zm = A({
    conv2dTranspose_: function (r, t, e, n, o, a) {
      return Zl(e, C(r, 'x', 'conv2dTranspose'), C(t, 'filter', 'conv2dTranspose'), n, o, 'NHWC', a);
    },
  }), Vm = A({
    conv3dTranspose_: function (r, t, e, n, o) {
      return Jl(e, C(r, 'x', 'conv3dTranspose'), C(t, 'filter', 'conv3dTranspose'), n, o);
    },
  }), va = A({
    matMul_: function (r, t, e, n) {
      var o;
      e === void 0 && (e = !1), n === void 0 && (n = !1);
      var a = C(r, 'a', 'matMul'), i = C(t, 'b', 'matMul');
      o = ke(a, i), a = o[0], i = o[1];
      var s = e ? a.shape[a.rank - 2] : a.shape[a.rank - 1], u = n ? i.shape[i.rank - 1] : i.shape[i.rank - 2],
        c = e ? a.shape[a.rank - 1] : a.shape[a.rank - 2], l = n ? i.shape[i.rank - 2] : i.shape[i.rank - 1],
        h = a.shape.slice(0, -2), f = i.shape.slice(0, -2), d = J(h), p = J(f);
      k(a.rank >= 2 && i.rank >= 2 && a.rank === i.rank, function () {
        return 'Error in matMul: inputs must have the same rank of at least 2, got ranks ' + a.rank + ' and ' + i.rank + '.';
      }), k(Be(h, f), function () {
        return 'Error in matMul: outer dimensions (' + h + ') and (' + f + ') of Tensors with shapes ' + a.shape + ' and ' + i.shape + ' must match.';
      }), k(s === u, function () {
        return 'Error in matMul: inner shapes (' + s + ') and (' + u + ') of Tensors with shapes ' + a.shape + ' and ' + i.shape + ' and transposeA=' + e + ' and transposeB=' + n + ' must match.';
      });
      var v = a.shape.slice(0, -2).concat([c, l]), m = e ? a.as3D(d, s, c) : a.as3D(d, c, s),
        g = n ? i.as3D(p, l, u) : i.as3D(p, u, l), y = { transposeA: e, transposeB: n };
      return T.runKernelFunc(function (x, b) {
        var w = x.batchMatMul(m, g, e, n);
        return b([m, g]), w;
      }, { a: m, b: g }, function (x, b) {
        var w = b, _ = w[0], S = w[1];
        return e || n ? !e && n ? {
          a: function () {
            return x.matMul(S, !1, !1);
          }, b: function () {
            return x.matMul(_, !0, !1);
          },
        } : e && !n ? {
          a: function () {
            return S.matMul(x, !1, !0);
          }, b: function () {
            return _.matMul(x, !1, !1);
          },
        } : {
          a: function () {
            return S.matMul(x, !0, !0);
          }, b: function () {
            return x.matMul(_, !0, !0);
          },
        } : {
          a: function () {
            return x.matMul(S, !1, !0);
          }, b: function () {
            return _.matMul(x, !0, !1);
          },
        };
      }, 'BatchMatMul', y).reshape(v);
    },
  }), Gm = A({
    dot_: function (r, t) {
      var e = C(r, 't1', 'dot'), n = C(t, 't2', 'dot');
      k(!(e.rank !== 1 && e.rank !== 2 || n.rank !== 1 && n.rank !== 2), function () {
        return 'Error in dot: inputs must all be rank 1 or 2, but got ranks ' + e.rank + ' and ' + n.rank + '.';
      });
      var o = e.rank === 1 ? e.size : e.shape[1], a = n.rank === 1 ? n.size : n.shape[0];
      return k(o === a, function () {
        return 'Error in dot: inner dimensions of inputs must match, but got ' + o + ' and ' + a + '.';
      }), e.rank === 1 && n.rank === 1 ? e.as2D(1, -1).matMul(n.as2D(-1, 1)).asScalar() : e.rank === 1 && n.rank === 2 ? e.as2D(1, -1).matMul(n.as2D(n.shape[0], n.shape[1])).as1D() : e.rank === 2 && n.rank === 1 ? e.matMul(n.as2D(-1, 1)).as1D() : e.matMul(n.as2D(n.shape[0], n.shape[1]));
    },
  }), qm = A({
    outerProduct_: function (r, t) {
      var e = C(r, 'v1', 'outerProduct'), n = C(t, 'v2', 'outerProduct');
      return k(e.rank === 1 && n.rank === 1, function () {
        return 'Error in outerProduct: inputs must be rank 1, but got ranks ' + e.rank + ' and ' + n.rank + '.';
      }), e.as2D(-1, 1).matMul(n.as2D(1, -1));
    },
  }), io = A({
    reverse_: function (r, t) {
      var e = C(r, 'x', 'reverse');
      if (e.rank === 0) return e.clone();
      var n = We(t, e.shape);
      return T.runKernelFunc(function (o) {
        return o.reverse(e, n);
      }, { $x: e }, function (o) {
        return {
          $x: function () {
            return o.reverse(n);
          },
        };
      }).reshapeAs(e);
    },
  }), Hm = A({
    reverse1d_: function (r) {
      var t = C(r, 'x', 'reverse');
      return k(t.rank === 1, function () {
        return 'Error in reverse1D: x must be rank 1 but got rank ' + t.rank + '.';
      }), io(t, 0);
    },
  }), jm = A({
    reverse2d_: function (r, t) {
      var e = C(r, 'x', 'reverse');
      return k(e.rank === 2, function () {
        return 'Error in reverse2D: x must be rank 2 but got rank ' + e.rank + '.';
      }), io(e, t);
    },
  }), Xm = A({
    reverse3d_: function (r, t) {
      var e = C(r, 'x', 'reverse');
      return k(e.rank === 3, function () {
        return 'Error in reverse3D: x must be rank 3 but got rank ' + e.rank + '.';
      }), io(e, t);
    },
  }), Km = A({
    reverse4d_: function (r, t) {
      var e = C(r, 'x', 'reverse');
      return k(e.rank === 4, function () {
        return 'Error in reverse4D: x must be rank 4 but got rank ' + e.rank + '.';
      }), io(e, t);
    },
  });

  function nh(r, t, e, n, o, a) {
    var i = C(r, 'x', 'maxPool'), s = i, u = !1;
    i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), n == null && (n = [1, 1]), k(s.rank === 4, function () {
      return 'Error in maxPool: input must be rank 4 but got rank ' + s.rank + '.';
    }), k(ht(e, n), function () {
      return 'Error in maxPool: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + n + '\'';
    }), a != null && k(Te(o), function () {
      return 'Error in maxPool: pad must be an integer when using, dimRoundingMode ' + a + ' but got pad ' + o + '.';
    });
    var c = Ir(s.shape, t, e, n, o, a);
    if (c.filterWidth === 1 && c.filterHeight === 1 && Be(c.inShape, c.outShape)) return i.clone();
    var l = [s], h = T.runKernelFunc(function (f, d) {
      var p = f.maxPool(s, c);
      return d([s, p]), p;
    }, { x: s }, function (f, d) {
      var p = d[0], v = d[1];
      return {
        x: function () {
          return function (m, g, y, x, b, w, _, S) {
            var E = C(m, 'dy', 'maxPoolBackprop'), I = C(g, 'input', 'maxPoolBackprop'),
              R = C(y, 'output', 'maxPoolBackprop');
            k(I.rank === E.rank, function () {
              return 'Rank of input (' + I.rank + ') does not match rank of dy (' + E.rank + ')';
            }), w == null && (w = [1, 1]), k(ht(b, w), function () {
              return 'Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides ' + b + ' and dilations \'' + w + '\'';
            }), k(E.rank === 4, function () {
              return 'Error in maxPoolBackprop: dy must be rank 4 but got rank ' + E.rank + '.';
            }), k(I.rank === 4, function () {
              return 'Error in maxPoolBackprop: input must be rank 4 but got rank ' + I.rank + '.';
            }), S != null && k(Te(_), function () {
              return 'Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode ' + S + ' but got pad ' + _ + '.';
            });
            var F = Ir(I.shape, x, b, w, _, S);
            return T.runKernelFunc(function (D) {
              return D.maxPoolBackprop(E, I, R, F);
            }, { $dy: E, $input: I });
          }(f, p, v, t, e, n, o);
        },
      };
    }, 'MaxPool', c, l);
    return u ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h;
  }

  function rh(r, t, e, n, o, a) {
    var i = C(r, 'x', 'avgPool', 'float32');
    n == null && (n = [1, 1]), k(ht(e, n), function () {
      return 'Error in avgPool: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + n + '\'';
    });
    var s = i, u = !1;
    i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), k(s.rank === 4, function () {
      return 'Error in avgPool: x must be rank 4 but got rank ' + s.rank + '.';
    }), a != null && k(Te(o), function () {
      return 'Error in avgPool: pad must be an integer when using, dimRoundingMode ' + a + ' but got pad ' + o + '.';
    });
    var c = Ir(s.shape, t, e, n, o, a);
    if (c.filterWidth === 1 && c.filterHeight === 1 && Be(c.inShape, c.outShape)) return i.clone();
    var l = T.runKernelFunc(function (h) {
      return h.avgPool(s, c);
    }, { x: s }, function (h) {
      return {
        x: function () {
          return function (f, d, p, v, m, g) {
            var y = C(f, 'dy', 'avgPoolBackprop'), x = C(d, 'input', 'avgPoolBackprop');
            k(x.rank === y.rank, function () {
              return 'Rank of input (' + x.rank + ') does not match rank of dy (' + y.rank + ')';
            }), m == null && (m = [1, 1]), k(ht(v, m), function () {
              return 'Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides ' + v + ' and dilations \'' + m + '\'';
            });
            var b = x, w = y, _ = !1;
            x.rank === 3 && (_ = !0, b = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]), w = y.as4D(1, y.shape[0], y.shape[1], y.shape[2])), k(w.rank === 4, function () {
              return 'Error in avgPoolBackprop: dy must be rank 4 but got rank ' + w.rank + '.';
            }), k(b.rank === 4, function () {
              return 'Error in avgPoolBackprop: input must be rank 4 but got rank ' + b.rank + '.';
            });
            var S = Ir(b.shape, p, v, m, g), E = T.runKernelFunc(function (I) {
              return I.avgPoolBackprop(w, b, S);
            }, { dy4D: w, input4D: b });
            return _ ? E.as3D(E.shape[1], E.shape[2], E.shape[3]) : E;
          }(h, s, t, e, n, o);
        },
      };
    }, 'AvgPool', c);
    return l = l.cast(i.dtype), u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l;
  }

  var He = A({
    maxPool_: function (r, t, e, n, o) {
      return nh(r, t, e, 1, n, o);
    },
  }), so = A({
    avgPool_: function (r, t, e, n, o) {
      return rh(r, t, e, 1, n, o);
    },
  }), Ym = A({
    pool_: function (r, t, e, n, o, a) {
      o == null && (o = [1, 1]), a == null && (a = 1), n === 0 && (n = 'valid');
      var i = C(r, 'x', 'maxPool'), s = i, u = !1;
      i.rank === 3 && (u = !0, s = i.as4D(1, i.shape[0], i.shape[1], i.shape[2])), k(ht(a, o), function () {
        return 'Error in pool: Either strides or dilations must be 1. Got strides ' + a + ' and dilations \'' + o + '\'';
      });
      var c, l = Ir(s.shape, t, a, o, n), h = [l.dilationHeight, l.dilationWidth];
      c = n === 'same' ? function (b, w) {
        var _ = b.map(function (I, R) {
          return I + (I - 1) * (w[R] - 1);
        }).map(function (I) {
          return I - 1;
        }), S = _.map(function (I) {
          return Math.floor(I / 2);
        }), E = _.map(function (I, R) {
          return I - S[R];
        });
        return _.map(function (I, R) {
          return [S[R], E[R]];
        });
      }([l.filterHeight, l.filterWidth], h) : [[0, 0], [0, 0]];
      var f = h[0] === 1 && h[1] === 1, d = function (b, w, _) {
          var S = _.map(function (B) {
            return B[0];
          }), E = _.map(function (B) {
            return B[1];
          }), I = b.concat(S, E), R = w.map(function (B, W) {
            return (B - I[W] % B) % B;
          }), F = E.map(function (B, W) {
            return B + R[W];
          }), D = w.map(function (B, W) {
            return [S[W], F[W]];
          }), L = w.map(function (B, W) {
            return [0, R[W]];
          });
          return [D, L];
        }([l.inHeight, l.inWidth], h, c), p = d[0], v = d[1], m = f ? n : 'valid', g = f ? s : Xc(s, h, p),
        y = (e === 'avg' ? function () {
          return rh(g, t, a, 1, m);
        } : function () {
          return nh(g, t, a, 1, m);
        })(), x = f ? y : qc(y, h, v);
      return u ? x.as3D(x.shape[1], x.shape[2], x.shape[3]) : x;
    },
  }), $m = A({
    maxPool3d_: function (r, t, e, n, o, a, i) {
      a === void 0 && (a = 'NDHWC');
      var s = C(r, 'x', 'maxPool3d'), u = s, c = !1;
      s.rank === 4 && (c = !0, u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), i == null && (i = [1, 1, 1]), k(u.rank === 5, function () {
        return 'Error in maxPool3d: x must be rank 5 but got rank ' + u.rank + '.';
      }), k(a === 'NDHWC', function () {
        return 'Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ' + a;
      }), k(ht(e, i), function () {
        return 'Error in maxPool3d: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + i + '\'';
      }), o != null && k(Te(n), function () {
        return 'Error in maxPool3d: pad must be an integer when using, dimRoundingMode ' + o + ' but got pad ' + n + '.';
      });
      var l = Jr(u.shape, t, e, i, n, o, a), h = T.runKernelFunc(function (f, d) {
        var p = f.maxPool3d(u, l);
        return d([u, p]), p;
      }, { x: u }, function (f, d) {
        var p = d[0], v = d[1];
        return {
          x: function () {
            return function (m, g, y, x, b, w, _, S) {
              var E = C(m, 'dy', 'maxPool3dBackprop'), I = C(g, 'input', 'maxPool3dBackprop'),
                R = C(y, 'output', 'maxPool3dBackprop'), F = E, D = I, L = R, B = !1;
              I.rank === 4 && (B = !0, F = E.as5D(1, E.shape[0], E.shape[1], E.shape[2], E.shape[3]), D = I.as5D(1, I.shape[0], I.shape[1], I.shape[2], I.shape[3]), L = R.as5D(1, R.shape[0], R.shape[1], R.shape[2], R.shape[3])), k(F.rank === 5, function () {
                return 'Error in maxPool3dBackprop: dy must be rank 5 but got rank ' + F.rank + '.';
              }), k(D.rank === 5, function () {
                return 'Error in maxPool3dBackprop: input must be rank 5 but got rank ' + D.rank + '.';
              }), k(L.rank === 5, function () {
                return 'Error in maxPool3dBackprop: output must be rank 5 but got rank ' + L.rank + '.';
              }), w == null && (w = [1, 1, 1]), k(ht(b, w), function () {
                return 'Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides ' + b + ' and dilations \'' + w + '\'';
              }), S != null && k(Te(_), function () {
                return 'Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ' + S + ' but got pad ' + _ + '.';
              });
              var W = Jr(D.shape, x, b, w, _, S), V = T.runKernelFunc(function (z) {
                return z.maxPool3dBackprop(F, D, L, W);
              }, { dy5D: F, input5D: D });
              return B ? V.as4D(V.shape[1], V.shape[2], V.shape[3], V.shape[4]) : V;
            }(f, p, v, t, e, i, n, o);
          },
        };
      });
      return c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
    },
  }), Zm = A({
    avgPool3d_: function (r, t, e, n, o, a, i) {
      a === void 0 && (a = 'NDHWC');
      var s = C(r, 'x', 'avgPool3d', 'float32'), u = s, c = !1;
      s.rank === 4 && (c = !0, u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), i == null && (i = [1, 1, 1]), k(u.rank === 5, function () {
        return 'Error in avgPool3d: x must be rank 5 but got rank ' + u.rank + '.';
      }), k(a === 'NDHWC', function () {
        return 'Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ' + a;
      }), k(ht(e, i), function () {
        return 'Error in avgPool3d: Either strides or dilations must be 1. Got strides ' + e + ' and dilations \'' + i + '\'';
      }), o != null && k(Te(n), function () {
        return 'Error in avgPool3d: pad must be an integer when using, dimRoundingMode ' + o + ' but got pad ' + n + '.';
      });
      var l = Jr(u.shape, t, e, i, n, o, a), h = T.runKernelFunc(function (f) {
        return f.avgPool3d(u, l);
      }, { x: u }, function (f) {
        return {
          x: function () {
            return function (d, p, v, m, g, y, x) {
              var b = C(d, 'dy', 'avgPool3dBackprop'), w = C(p, 'input', 'avgPool3dBackprop'), _ = b, S = w, E = !1;
              w.rank === 4 && (E = !0, _ = b.as5D(1, b.shape[0], b.shape[1], b.shape[2], b.shape[3]), S = w.as5D(1, w.shape[0], w.shape[1], w.shape[2], w.shape[3])), k(_.rank === 5, function () {
                return 'Error in avgPool3dBackprop: dy must be rank 5 but got rank ' + _.rank + '.';
              }), k(S.rank === 5, function () {
                return 'Error in avgPool3dBackprop: input must be rank 5 but got rank ' + S.rank + '.';
              }), g == null && (g = [1, 1, 1]), k(ht(m, g), function () {
                return 'Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides ' + m + ' and dilations \'' + g + '\'';
              }), x != null && k(Te(y), function () {
                return 'Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ' + x + ' but got pad ' + y + '.';
              });
              var I = Jr(S.shape, v, m, g, y, x), R = T.runKernelFunc(function (F) {
                return F.avgPool3dBackprop(_, S, I);
              }, { dy5D: _, input5D: S });
              return E ? R.as4D(R.shape[1], R.shape[2], R.shape[3], R.shape[4]) : R;
            }(f, u, t, e, i, n, o);
          },
        };
      });
      return h = h.cast(u.dtype), c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
    },
  }), Yt = A({
    slice_: function (r, t, e) {
      var n, o, a = C(r, 'x', 'slice');
      if (a.rank === 0) throw new Error('Slicing scalar is not possible');
      (n = typeof t == 'number' ? [t].concat(new Array(a.rank - 1).fill(0)) : t.length < a.rank ? t.concat(new Array(a.rank - t.length).fill(0)) : t.slice()).forEach(function (u) {
        k(u !== -1, function () {
          return 'slice() does not support negative begin indexing.';
        });
      }), o = (o = e == null ? new Array(a.rank).fill(-1) : typeof e == 'number' ? [e].concat(new Array(a.rank - 1).fill(-1)) : e.length < a.rank ? e.concat(new Array(a.rank - e.length).fill(-1)) : e).map(function (u, c) {
        return u >= 0 ? u : (k(u === -1, function () {
          return 'Negative size values should be exactly -1 but got ' + u + ' for the slice() size at index ' + c + '.';
        }), a.shape[c] - n[c]);
      }), Qc(a, n, o);
      var i = a.shape, s = { begin: n, size: o };
      return T.runKernelFunc(function (u) {
        return u.slice(a, n, o);
      }, { x: a }, function (u) {
        for (var c = [], l = 0; l < u.rank; l++) c.push([n[l], i[l] - n[l] - o[l]]);
        return {
          x: function () {
            return u.pad(c);
          },
        };
      }, 'Slice', s);
    },
  }), Jm = A({
    slice1d_: function (r, t, e) {
      var n = C(r, 'x', 'slice1d');
      return k(n.rank === 1, function () {
        return 'slice1d expects a rank-1 tensor, but got a rank-' + n.rank + ' tensor';
      }), Yt(n, [t], [e]);
    },
  }), Qm = A({
    slice2d_: function (r, t, e) {
      var n = C(r, 'x', 'slice2d');
      return k(n.rank === 2, function () {
        return 'slice2d expects a rank-2 tensor, but got a rank-' + n.rank + ' tensor';
      }), Yt(n, t, e);
    },
  }), oh = A({
    slice3d_: function (r, t, e) {
      var n = C(r, 'x', 'slice3d');
      return k(n.rank === 3, function () {
        return 'slice3d expects a rank-3 tensor, but got a rank-' + n.rank + ' tensor';
      }), Yt(n, t, e);
    },
  }), eg = A({
    slice4d_: function (r, t, e) {
      var n = C(r, 'x', 'slice4d');
      return k(n.rank === 4, function () {
        return 'slice4d expects a rank-4 tensor, but got a rank-' + n.rank + ' tensor';
      }), Yt(n, t, e);
    },
  });

  function ah(r, t, e, n, o) {
    return t.rank < e.rank && (t = t.reshape(lt(t.shape, n))), r.rank < e.rank && (r = r.reshape(lt(r.shape, n))), {
      x: function () {
        var a = r.mul(e.equal(t).cast(r.dtype));
        return o == null ? a : a.transpose(o);
      },
    };
  }

  var tg = A({
    all_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'all', 'bool'), o = We(t, n.shape), a = o, i = Pt(a, n.rank);
      i != null && (n = n.transpose(i), a = Ot(a.length, n.rank));
      var s = T.runKernelFunc(function (c) {
        return c.all(n, a);
      }, { $x: n });
      if (e) {
        var u = lt(s.shape, o);
        return s.reshape(u);
      }
      return s;
    },
  }), ng = A({
    any_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'any', 'bool'), o = We(t, n.shape), a = o, i = Pt(a, n.rank);
      i != null && (n = n.transpose(i), a = Ot(a.length, n.rank));
      var s = T.runKernelFunc(function (c) {
        return c.any(n, a);
      }, { $x: n });
      if (e) {
        var u = lt(s.shape, o);
        return s.reshape(u);
      }
      return s;
    },
  }), rg = A({
    argMax_: function (r, t) {
      t === void 0 && (t = 0);
      var e = C(r, 'x', 'argMax');
      t == null && (t = 0);
      var n = We(t, e.shape), o = Pt(n, e.rank);
      o != null && (e = e.transpose(o), n = Ot(n.length, e.rank));
      var a = { axis: n[0] }, i = [e];
      return T.runKernelFunc(function (s, u) {
        var c = s.argMax(e, n[0]);
        return u([e]), c;
      }, { x: e }, function (s, u) {
        var c = u[0];
        return {
          x: function () {
            return ge(c);
          },
        };
      }, 'ArgMax', a, i);
    },
  }), og = A({
    argMin_: function (r, t) {
      t === void 0 && (t = 0);
      var e = C(r, 'x', 'argMin');
      t == null && (t = 0);
      var n = We(t, e.shape), o = Pt(n, e.rank);
      return o != null && (e = e.transpose(o), n = Ot(n.length, e.rank)), T.runKernelFunc(function (a, i) {
        var s = a.argMin(e, n[0]);
        return i([e]), s;
      }, { $x: e }, function (a, i) {
        var s = i[0];
        return {
          $x: function () {
            return ge(s);
          },
        };
      });
    },
  }), ag = A({
    logSumExp_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'logSumExp'), o = We(t, n.shape), a = n.max(o, !0), i = n.sub(a).exp().sum(o).log(),
        s = a.reshape(i.shape).add(i);
      if (e) {
        var u = lt(s.shape, o);
        return s.reshape(u);
      }
      return s;
    },
  }), ma = A({
    max_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'max'), o = n, a = We(t, n.shape), i = a, s = Pt(i, n.rank);
      s != null && (n = n.transpose(s), i = Ot(i.length, n.rank));
      var u = [n], c = T.runKernelFunc(function (h, f) {
        var d = h.max(n, i);
        return f([o, d]), d;
      }, { x: n }, function (h, f) {
        return ah(h, f[1], f[0], a, s);
      }, 'Max', { axes: i }, u, [!0]);
      if (e) {
        var l = lt(c.shape, a);
        c = c.reshape(l);
      }
      return c;
    },
  }), ig = A({
    mean_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'mean'), o = We(t, n.shape), a = J($e(n.shape, o)[1]);
      return la(function (i) {
        var s = X(a);
        return {
          value: (s.dtype === i.dtype ? i : i.cast(s.dtype)).div(s).sum(t, e), gradFunc: function (u) {
            var c = i.shape.slice();
            return o.forEach(function (l) {
              c[l] = 1;
            }), u.reshape(c).mul(Dr(i.shape, 'float32')).div(a);
          },
        };
      })(n);
    },
  }), sg = A({
    min_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'min'), o = n, a = We(t, n.shape), i = a, s = Pt(i, n.rank);
      s != null && (n = n.transpose(s), i = Ot(i.length, n.rank));
      var u = [n], c = T.runKernelFunc(function (h, f) {
        var d = h.min(n, i);
        return f([o, d]), d;
      }, { x: n }, function (h, f) {
        return ah(h, f[1], f[0], a, s);
      }, 'Min', { axes: i }, u, [!0]);
      if (e) {
        var l = lt(c.shape, a);
        c = c.reshape(l);
      }
      return c;
    },
  }), ug = A({
    moments_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = We(t, (r = C(r, 'x', 'moments')).shape), o = r.mean(n, e), a = o.shape;
      e || (a = lt(o.shape, n));
      var i = r.toFloat().sub(o.reshape(a)).square();
      return { mean: o, variance: i.mean(n, e) };
    },
  }), ih = A({
    sum_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'sum');
      n.dtype === 'bool' && (n = n.toInt());
      var o = We(t, n.shape);
      return la(function (a) {
        var i = Pt(o, a.rank), s = o, u = a;
        i != null && (u = a.transpose(i), s = Ot(s.length, a.rank));
        var c = function (d) {
          var p = a.shape.slice();
          return o.forEach(function (v) {
            p[v] = 1;
          }), d.reshape(p).mul(Dr(a.shape, 'float32'));
        }, l = { axes: s }, h = T.runKernelFunc(function (d) {
          return d.sum(u, s);
        }, { x: u }, function (d) {
          return {
            x: function () {
              return c(d);
            },
          };
        }, 'Sum', l);
        if (e) {
          var f = lt(h.shape, o);
          h = h.reshape(f);
        }
        return { value: h, gradFunc: c };
      })(n);
    },
  }), cg = A({
    prod_: function (r, t, e) {
      t === void 0 && (t = null), e === void 0 && (e = !1);
      var n = C(r, 'x', 'prod');
      n.dtype === 'bool' && (n = n.toInt());
      var o = We(t, n.shape), a = Pt(o, n.rank), i = o, s = n;
      a != null && (s = n.transpose(a), i = Ot(i.length, n.rank));
      var u = T.runKernelFunc(function (l) {
        return l.prod(s, i);
      }, { permutedX: s });
      if (e) {
        var c = lt(u.shape, o);
        u = u.reshape(c);
      }
      return u;
    },
  }), sh = A({
    elu_: function (r) {
      var t = C(r, 'x', 'elu');
      return T.runKernelFunc(function (e, n) {
        var o = e.elu(t);
        return n([o]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            return T.runKernelFunc(function (a) {
              return a.eluDer(e, o);
            }, { dy: e, y: o });
          },
        };
      });
    },
  }), lg = A({
    leakyRelu_: function (r, t) {
      t === void 0 && (t = .2);
      var e = C(r, 'x', 'leakyRelu');
      return ns(X(t).mul(e), e);
    },
  }), uh = A({
    prelu_: function (r, t) {
      var e = C(r, 'x', 'prelu'), n = C(t, 'alpha', 'prelu');
      return T.runKernelFunc(function (o, a) {
        var i = o.prelu(e, n);
        return a([e, n]), i;
      }, { x: e, alpha: n }, function (o, a) {
        var i = a[0], s = a[1], u = i.greater(0);
        return {
          x: function () {
            return Jn(u, o, o.mul(s));
          }, alpha: function () {
            var c = Jn(u, ge(o), o.mul(i)), l = Le(s.shape, o.shape);
            return l.length > 0 && (c = c.sum(l)), c.reshape(s.shape);
          },
        };
      }, 'Prelu');
    },
  }), De = A({
    relu_: function (r) {
      var t = C(r, 'x', 'relu');
      return t.dtype === 'bool' ? t.toInt() : T.runKernelFunc(function (e, n) {
        var o = e.relu(t);
        return n([t]), o;
      }, { x: t }, function (e, n) {
        var o = n[0];
        return {
          x: function () {
            return e.mulStrict(o.step().toFloat());
          },
        };
      }, 'Relu');
    },
  }), ch = A({
    relu6_: function (r) {
      var t = C(r, 'x', 'relu6');
      return t.dtype === 'bool' ? t.toInt() : T.runKernelFunc(function (e, n) {
        var o = e.relu6(t);
        return n([t]), o;
      }, { x: t }, function (e, n) {
        var o = n[0], a = o.lessEqual(6).mul(o.step());
        return {
          x: function () {
            return e.mulStrict(a.toFloat());
          },
        };
      }, 'Relu6');
    },
  }), hg = A({
    selu_: function (r) {
      var t = C(r, 'x', 'selu');
      return T.runKernelFunc(function (e, n) {
        var o = e.selu(t);
        return n([t]), o;
      }, { $x: t }, function (e, n) {
        var o = n[0];
        return {
          $x: function () {
            var a = o.greater(X(0)), i = X(Qi), s = X(es), u = e.mul(s), c = e.mul(i).mul(o.toFloat().exp());
            return Jn(a, u, c);
          },
        };
      });
    },
  }), Dn = A({
    transpose_: function (r, t) {
      var e = C(r, 'x', 'transpose');
      if (t == null && (t = e.shape.map(function (o, a) {
        return a;
      }).reverse()), k(e.rank === t.length, function () {
        return 'Error in transpose: rank of input ' + e.rank + ' must match length of perm ' + t + '.';
      }), t.forEach(function (o) {
        k(o >= 0 && o < e.rank, function () {
          return 'All entries in \'perm\' must be between 0 and ' + (e.rank - 1) + ' but got ' + t;
        });
      }), e.rank <= 1) return e.clone();
      var n = { perm: t };
      return T.runKernelFunc(function (o) {
        return o.transpose(e, t);
      }, { x: e }, function (o) {
        var a = sa(t);
        return {
          x: function () {
            return o.transpose(a);
          },
        };
      }, 'Transpose', n);
    },
  }), fg = A({
    localResponseNormalization_: function (r, t, e, n, o) {
      t === void 0 && (t = 5), e === void 0 && (e = 1), n === void 0 && (n = 1), o === void 0 && (o = .5);
      var a = C(r, 'x', 'localResponseNormalization');
      k(a.rank === 4 || a.rank === 3, function () {
        return `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ` + a.rank + '.';
      }), k(Te(t), function () {
        return 'Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ' + t + '.';
      });
      var i = a, s = !1;
      a.rank === 3 && (s = !0, i = a.as4D(1, a.shape[0], a.shape[1], a.shape[2]));
      var u = T.runKernelFunc(function (c, l) {
        var h = c.localResponseNormalization4D(i, t, e, n, o);
        return l([i, h]), h;
      }, { x4D: i }, function (c, l) {
        var h = l[0], f = l[1];
        return {
          x4D: function () {
            return T.runKernelFunc(function (d) {
              return d.LRNGrad(c, h, f, t, e, n, o);
            }, {});
          },
        };
      });
      return s ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
    },
  }), lh = A({
    norm_: function (r, t, e, n) {
      t === void 0 && (t = 'euclidean'), e === void 0 && (e = null), n === void 0 && (n = !1);
      var o = function s(u, c, l) {
        if (l === void 0 && (l = null), u.rank === 0) return u.abs();
        if (u.rank !== 1 && l === null) return s(u.reshape([-1]), c, l);
        if (u.rank === 1 || typeof l == 'number' || Array.isArray(l) && l.length === 1) {
          if (c === 1) return u.abs().sum(l);
          if (c === 1 / 0) return u.abs().max(l);
          if (c === -1 / 0) return u.abs().min(l);
          if (c === 'euclidean' || c === 2) return u.abs().pow(X(2, 'int32')).sum(l).sqrt();
          throw new Error('Error in norm: invalid ord value: ' + c);
        }
        if (Array.isArray(l) && l.length === 2) {
          if (c === 1) return u.abs().sum(l[0]).max(l[1] - 1);
          if (c === 1 / 0) return u.abs().sum(l[1]).max(l[0]);
          if (c === -1 / 0) return u.abs().sum(l[1]).min(l[0]);
          if (c === 'fro' || c === 'euclidean') return u.square().sum(l).sqrt();
          throw new Error('Error in norm: invalid ord value: ' + c);
        }
        throw new Error('Error in norm: invalid axis: ' + l);
      }(r = C(r, 'x', 'norm'), t, e), a = o.shape;
      if (n) {
        var i = We(e, r.shape);
        a = lt(o.shape, i);
      }
      return o.reshape(a);
    },
  }), dg = A({
    basicLSTMCell_: function (r, t, e, n, o, a) {
      var i = C(r, 'forgetBias', 'basicLSTMCell'), s = C(t, 'lstmKernel', 'basicLSTMCell'),
        u = C(e, 'lstmBias', 'basicLSTMCell'), c = C(n, 'data', 'basicLSTMCell'), l = C(o, 'c', 'basicLSTMCell'),
        h = C(a, 'h', 'basicLSTMCell'), f = c.concat(h, 1).matMul(s).add(u), d = f.shape[0], p = f.shape[1] / 4,
        v = [d, p], m = f.slice([0, 0], v), g = f.slice([0, p], v), y = f.slice([0, 2 * p], v),
        x = f.slice([0, 3 * p], v), b = m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),
        w = b.tanh().mulStrict(x.sigmoid());
      return [b, w];
    },
  }), pg = A({
    multiRNNCell_: function (r, t, e, n) {
      for (var o = C(t, 'data', 'multiRNNCell'), a = qo(e, 'c', 'multiRNNCell'), i = qo(n, 'h', 'multiRNNCell'), s = o, u = [], c = 0; c < r.length; c++) {
        var l = r[c](s, a[c], i[c]);
        u.push(l[0]), u.push(l[1]), s = l[1];
      }
      var h = [], f = [];
      for (c = 0; c < u.length; c += 2) h.push(u[c]), f.push(u[c + 1]);
      return [h, f];
    },
  }), vg = A({
    movingAverage_: function (r, t, e, n, o) {
      o === void 0 && (o = !0);
      var a = C(r, 'v', 'movingAverage'), i = C(t, 'x', 'movingAverage'), s = C(e, 'decay', 'movingAverage');
      dc(a, i), k(Be(a.shape, i.shape), function () {
        return 'Shape mismatch in v and x';
      });
      var u = X(1), c = u.sub(s), l = i.sub(a).mul(c);
      if (o) {
        k(n != null, function () {
          return 'When using zeroDebias: true, step is required.';
        });
        var h = C(n, 'step', 'movingAverage');
        l = l.div(u.sub(Jo(s, h)));
      }
      return a.add(l);
    },
  }), mg = A({
    stridedSlice_: function (r, t, e, n, o, a, i, s, u) {
      if (o === void 0 && (o = 0), a === void 0 && (a = 0), i === void 0 && (i = 0), s === void 0 && (s = 0), u === void 0 && (u = 0), n == null && (n = new Array(t.length)), i !== 0) throw new Error('ellipsis mask is not yet supported');
      var c = C(r, 'x', 'stridedSlice'), l = yi(s), h = c.shape.slice();
      l.forEach(function (m) {
        t[m] = 0, e[m] = 1, h.splice(m, 0, 1);
      }), c = c.reshape(h);
      for (var f = 0; f < c.rank; f++) t[f] = el(o, t, n, c.shape, f), e[f] = tl(a, e, n, c.shape, f), n[f] = n[f] || 1;
      var d = yi(u);
      d.forEach(function (m) {
        e[m] = t[m] + 1, n[m] = 1;
      });
      var p = ca(t, e, n), v = p.filter(function (m, g) {
        return d.indexOf(g) === -1;
      });
      return n.every(function (m) {
        return m === 1;
      }) ? Yt(c, t, p).reshape(v) : T.runKernelFunc(function (m) {
        return m.stridedSlice(c, t, e, n);
      }, { $x: c }).reshape(v);
    },
  }), gg = A({
    topk_: function (r, t, e) {
      t === void 0 && (t = 1), e === void 0 && (e = !0);
      var n = C(r, 'x', 'topk');
      if (n.rank === 0) throw new Error('topk() expects the input to be of rank 1 or higher');
      var o = n.shape[n.shape.length - 1];
      if (t > o) throw new Error('\'k\' passed to topk() must be <= the last dimension (' + o + ') but got ' + t);
      var a = T.runKernelFunc(function (i) {
        return i.topk(n, t, e);
      }, { $x: n });
      return { values: a[0], indices: a[1] };
    },
  }), yg = A({
    scatterND_: function (r, t, e) {
      var n = C(r, 'indices', 'scatterND', 'int32'), o = C(t, 'updates', 'scatterND');
      return Jc(o, n, e), T.runKernelFunc(function (a) {
        return a.scatterND(n, o, e);
      }, { indices: n, updates: o }, null, 'ScatterNd', { shape: e });
    },
  }), is = A({
    fft_: function (r) {
      k(r.dtype === 'complex64', function () {
        return 'The dtype for tf.spectral.fft() must be complex64 but got ' + r.dtype + '.';
      });
      var t = r.shape[r.shape.length - 1], e = r.size / t, n = r.as2D(e, t);
      return T.runKernelFunc(function (o) {
        return o.fft(n);
      }, { input: r }).reshape(r.shape);
    },
  }), Qo = A({
    ifft_: function (r) {
      k(r.dtype === 'complex64', function () {
        return 'The dtype for tf.spectral.ifft() must be complex64 but got ' + r.dtype + '.';
      });
      var t = r.shape[r.shape.length - 1], e = r.size / t, n = r.as2D(e, t);
      return T.runKernelFunc(function (o) {
        return o.ifft(n);
      }, { input: r }).reshape(r.shape);
    },
  }), ss = A({
    rfft_: function (r, t) {
      k(r.dtype === 'float32', function () {
        return 'The dtype for rfft() must be real value but got ' + r.dtype;
      });
      var e, n = r.shape[r.shape.length - 1], o = r.size / n;
      if (t != null && t < n) {
        var a = r.shape.map(function (g) {
          return 0;
        }), i = r.shape.map(function (g) {
          return g;
        });
        i[r.shape.length - 1] = t, e = r.slice(a, i), n = t;
      } else if (t != null && t > n) {
        var s = r.shape.map(function (g) {
          return g;
        });
        s[r.shape.length - 1] = t - n, e = r.concat(Ee(s), r.shape.length - 1), n = t;
      } else e = r;
      var u = e.zerosLike(), c = Ye(e, u).as2D(o, n), l = is(c), h = Math.floor(n / 2) + 1, f = It(l), d = qt(l),
        p = f.split([h, n - h], f.shape.length - 1), v = d.split([h, n - h], d.shape.length - 1), m = e.shape.slice();
      return m[e.shape.length - 1] = h, Ye(p[0], v[0]).reshape(m);
    },
  }), hh = A({
    irfft_: function (r) {
      var t = r.shape[r.shape.length - 1], e = r.size / t;
      if (t <= 2) {
        var n = r.as2D(e, t), o = Qo(n);
        return It(o);
      }
      var a = [e, 2 * (t - 1)], i = It(r).as2D(e, t), s = qt(r).as2D(e, t), u = i.slice([0, 1], [e, t - 2]).reverse(1),
        c = s.slice([0, 1], [e, t - 2]).reverse(1).mul(X(-1)), l = i.concat(u, 1), h = s.concat(c, 1);
      return n = Ye(l, h).as2D(a[0], a[1]), o = Qo(n), It(o);
    },
  }), bg = Object.freeze({ fft: is, ifft: Qo, rfft: ss, irfft: hh }), xg = A({
    sparseToDense_: function (r, t, e, n) {
      n === void 0 && (n = 0);
      var o = C(r, 'sparseIndices', 'sparseToDense', 'int32'), a = C(t, 'sparseValues', 'sparseToDense'),
        i = C(n, 'defaultValue', 'sparseToDense', a.dtype);
      return function (s, u, c, l) {
        if (s.dtype !== 'int32') throw new Error('tf.sparseToDense() expects the indices to be int32 type, but the dtype was ' + s.dtype + '.');
        if (s.rank > 2) throw new Error('sparseIndices should be a scalar, vector, or matrix, but got shape ' + s.shape + '.');
        var h = s.rank > 0 ? s.shape[0] : 1, f = s.rank > 1 ? s.shape[1] : 1;
        if (c.length !== f) throw new Error('outputShape has incorrect number of elements:, ' + c.length + ', should be: ' + f + '.');
        var d = u.size;
        if (u.rank !== 0 && (u.rank !== 1 || d !== h)) throw new Error('sparseValues has incorrect shape ' + u.shape + ', should be [] or [' + h + ']');
        if (u.dtype !== l.dtype) throw new Error('sparseValues.dtype must match defaultValues.dtype');
      }(o, a, e, i), T.runKernelFunc(function (s) {
        return s.sparseToDense(o, a, e, i);
      }, { $sparseIndices: o, $sparseValues: a, $defaultValue: i });
    },
  }), wg = A({
    gatherND_: function (r, t) {
      var e = C(t, 'indices', 'gatherND', 'int32'), n = C(r, 'x', 'gatherND');
      return T.runKernelFunc(function (o) {
        return o.gatherND(n, e);
      }, { x: n, indices: e }, null, 'GatherNd');
    },
  }), _g = A({
    diag_: function (r) {
      var t = C(r, 'x', 'diag').flatten(), e = r.shape.concat(r.shape);
      return T.runKernelFunc(function (n) {
        return n.diag(t);
      }, { $x: t }).reshape(e);
    },
  }), Cg = A({
    dropout_: function (r, t, e, n) {
      var o = C(r, 'x', 'dropout');
      if (k(o.dtype === 'float32', function () {
        return 'x has to be a floating point tensor since it\'s going to be scaled, but got a ' + o.dtype + ' tensor instead.';
      }), k(t >= 0 && t < 1, function () {
        return 'rate must be a float in the range [0, 1), but got ' + t + '.';
      }), t === 0) return r instanceof Se ? o.clone() : o;
      var a = function (u, c) {
        if (c == null) return u.shape.slice();
        if (Be(u.shape, c)) return c;
        if (u.shape.length === c.length) {
          for (var l = [], h = 0; h < u.shape.length; h++) c[h] == null && u.shape[h] != null ? l.push(u.shape[h]) : l.push(c[h]);
          return l;
        }
        return c;
      }(o, e), i = 1 - t, s = jc(a, 0, 1, 'float32', n).add(i).floor().div(i);
      return o.mul(s);
    },
  });

  function fh(r, t, e) {
    for (var n = 1 - r % 2, o = new Float32Array(r), a = 0; a < r; ++a) {
      var i = 2 * Math.PI * a / (r + n - 1);
      o[a] = t - e * Math.cos(i);
    }
    return Oe(o, 'float32');
  }

  var us = A({
    hannWindow_: function (r) {
      return fh(r, .5, .5);
    },
  }), dh = A({
    hammingWindow_: function (r) {
      return fh(r, .54, .46);
    },
  }), cs = A({
    frame_: function (r, t, e, n, o) {
      n === void 0 && (n = !1), o === void 0 && (o = 0);
      for (var a = 0, i = []; a + t <= r.size;) i.push(Yt(r, a, t)), a += e;
      if (n) for (; a < r.size;) {
        var s = a + t - r.size, u = Ve([Yt(r, a, t - s), Xt([s], o)]);
        i.push(u), a += e;
      }
      return i.length === 0 ? In([], [0, t]) : Ve(i).as2D(i.length, t);
    },
  }), ph = A({
    stft_: function (r, t, e, n, o) {
      var a;
      o === void 0 && (o = us), n == null && (a = t, n = Math.floor(Math.pow(2, Math.ceil(Math.log(a) / Math.log(2)))));
      for (var i = cs(r, t, e), s = at(i, o(t)), u = [], c = 0; c < i.shape[0]; c++) u.push(ss(s.slice([c, 0], [1, t]), n));
      return Ve(u);
    },
  }), Eg = Object.freeze({ hannWindow: us, hammingWindow: dh, frame: cs, stft: ph }), ot, kg = function (r, t, e) {
    return e === void 0 && (e = 1), $(this, void 0, void 0, function () {
      var n, o, a, i, s, u, c, l, h, f, d, p, v, m;
      return Z(this, function (g) {
        switch (g.label) {
          case 0:
            return n = C(r, 'predictions', 'inTopK'), o = C(t, 'targets', 'inTopK'), k(n.rank > 1, function () {
              return 'inTopK() expects the predictions to be of rank 2 or higher, but got ' + n.rank;
            }), k(n.rank - 1 === o.rank, function () {
              return 'predictions rank should be 1 larger than targets rank, but got predictions rank ' + n.rank + ' and targets rank ' + o.rank;
            }), xe(n.shape.slice(0, n.shape.length - 1), o.shape, 'predictions\'s shape should be align with the targets\' shape, except the last dimension.'), a = n.shape[n.shape.length - 1], k(e > 0 && e <= a, function () {
              return '\'k\' passed to inTopK() must be > 0 && <= the predictions last dimension (' + a + '), but got ' + e;
            }), [4, n.data()];
          case 1:
            return i = g.sent(), [4, o.data()];
          case 2:
            for (s = g.sent(), u = [i.length / a, a], l = u[1], h = Er('bool', c = u[0]), f = 0; f < c; f++) {
              for (d = f * l, p = i.subarray(d, d + l), v = [], m = 0; m < p.length; m++) v.push({
                value: p[m],
                index: m,
              });
              for (v.sort(function (y, x) {
                return x.value - y.value;
              }), h[f] = 0, m = 0; m < e; m++) if (v[m].index === s[f]) {
                h[f] = 1;
                break;
              }
            }
            return r !== n && n.dispose(), t !== o && o.dispose(), [2, Ze(h, o.shape, 'bool')];
        }
      });
    });
  };
  (function (r) {
    r[r.NONE = 0] = 'NONE', r[r.MEAN = 1] = 'MEAN', r[r.SUM = 2] = 'SUM', r[r.SUM_BY_NONZERO_WEIGHTS = 3] = 'SUM_BY_NONZERO_WEIGHTS';
  })(ot || (ot = {}));
  var Ig = A({
    absoluteDifference_: function (r, t, e, n) {
      n === void 0 && (n = ot.SUM_BY_NONZERO_WEIGHTS);
      var o = C(r, 'labels', 'absoluteDifference'), a = C(t, 'predictions', 'absoluteDifference'), i = null;
      e != null && (i = C(e, 'weights', 'absoluteDifference')), xe(o.shape, a.shape, 'Error in absoluteDifference: ');
      var s = o.sub(a).abs();
      return vn(s, i, n);
    },
  }), vn = A({
    computeWeightedLoss_: function (r, t, e) {
      e === void 0 && (e = ot.SUM_BY_NONZERO_WEIGHTS);
      var n = C(r, 'losses', 'computeWeightedLoss'), o = null;
      t != null && (o = C(t, 'weights', 'computeWeightedLoss'));
      var a = o == null ? n : n.mul(o);
      if (e === ot.NONE) return a;
      if (e === ot.SUM) return a.sum();
      if (e === ot.MEAN) {
        if (o == null) return a.mean();
        var i = n.size / o.size, s = a.sum().div(o.sum());
        return i > 1 ? s.div(X(i)) : s;
      }
      if (e === ot.SUM_BY_NONZERO_WEIGHTS) {
        if (o == null) return a.sum().div(X(n.size));
        var u = o.mul(Dr(n.shape)).notEqual(X(0)).sum().toFloat();
        return a.sum().div(u);
      }
      throw Error('Unknown reduction: ' + e);
    },
  }), Rg = A({
    cosineDistance_: function (r, t, e, n, o) {
      o === void 0 && (o = ot.SUM_BY_NONZERO_WEIGHTS);
      var a = C(r, 'labels', 'cosineDistance'), i = C(t, 'predictions', 'cosineDistance'), s = null;
      n != null && (s = C(n, 'weights', 'cosineDistance')), xe(a.shape, i.shape, 'Error in cosineDistance: ');
      var u = X(1).sub(a.mul(i).sum(e, !0));
      return vn(u, s, o);
    },
  }), Sg = A({
    hingeLoss_: function (r, t, e, n) {
      n === void 0 && (n = ot.SUM_BY_NONZERO_WEIGHTS);
      var o = C(r, 'labels', 'hingeLoss'), a = C(t, 'predictions', 'hingeLoss'), i = null;
      e != null && (i = C(e, 'weights', 'hingeLoss')), xe(o.shape, a.shape, 'Error in hingeLoss: ');
      var s = X(1);
      o = X(2).mul(o).sub(s);
      var u = s.sub(o.mul(a)).relu();
      return vn(u, i, n);
    },
  }), Ag = A({
    huberLoss_: function (r, t, e, n, o) {
      n === void 0 && (n = 1), o === void 0 && (o = ot.SUM_BY_NONZERO_WEIGHTS);
      var a = C(r, 'labels', 'huberLoss'), i = C(t, 'predictions', 'huberLoss'), s = null;
      e != null && (s = C(e, 'weights', 'huberLoss')), xe(a.shape, i.shape, 'Error in huberLoss: ');
      var u = X(n), c = i.sub(a).abs(), l = Xl(c, u), h = c.sub(l), f = X(.5).mul(l.square()).add(u.mul(h));
      return vn(f, s, o);
    },
  }), Dg = A({
    logLoss_: function (r, t, e, n, o) {
      n === void 0 && (n = 1e-7), o === void 0 && (o = ot.SUM_BY_NONZERO_WEIGHTS);
      var a = C(r, 'labels', 'logLoss'), i = C(t, 'predictions', 'logLoss'), s = null;
      e != null && (s = C(e, 'weights', 'logLoss')), xe(a.shape, i.shape, 'Error in logLoss: ');
      var u = X(1), c = X(n), l = a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));
      return vn(l, s, o);
    },
  }), Tg = A({
    meanSquaredError_: function (r, t, e, n) {
      n === void 0 && (n = ot.SUM_BY_NONZERO_WEIGHTS);
      var o = C(r, 'labels', 'meanSquaredError'), a = C(t, 'predictions', 'meanSquaredError'), i = null;
      e != null && (i = C(e, 'weights', 'meanSquaredError')), xe(o.shape, a.shape, 'Error in meanSquaredError: ');
      var s = o.squaredDifference(a);
      return vn(s, i, n);
    },
  }), Fg = A({
    sigmoidCrossEntropy_: function (r, t, e, n, o) {
      n === void 0 && (n = 0), o === void 0 && (o = ot.SUM_BY_NONZERO_WEIGHTS);
      var a = C(r, 'multiClassLabels', 'sigmoidCrossEntropy'), i = C(t, 'logits', 'sigmoidCrossEntropy'), s = null;
      if (e != null && (s = C(e, 'weights', 'sigmoidCrossEntropy')), xe(a.shape, i.shape, 'Error in sigmoidCrossEntropy: '), n > 0) {
        var u = X(n), c = X(1), l = X(.5);
        a = a.mul(c.sub(u)).add(l.mul(u));
      }
      var h = function (f, d) {
        var p = C(f, 'labels', 'sigmoidCrossEntropyWithLogits'), v = C(d, 'logits', 'sigmoidCrossEntropyWithLogits');
        xe(p.shape, v.shape, 'Error in sigmoidCrossEntropyWithLogits: ');
        var m = v.relu(), g = v.mul(p), y = v.abs().neg().exp().log1p();
        return m.sub(g).add(y);
      }(a, i);
      return vn(h, s, o);
    },
  }), Ng = A({
    softmaxCrossEntropy_: function (r, t, e, n, o) {
      n === void 0 && (n = 0), o === void 0 && (o = ot.SUM_BY_NONZERO_WEIGHTS);
      var a = C(r, 'onehotLabels', 'softmaxCrossEntropy'), i = C(t, 'logits', 'softmaxCrossEntropy'), s = null;
      if (e != null && (s = C(e, 'weights', 'softmaxCrossEntropy')), xe(a.shape, i.shape, 'Error in softmaxCrossEntropy: '), n > 0) {
        var u = X(n), c = X(1), l = X(a.shape[1]);
        a = a.mul(c.sub(u)).add(u.div(l));
      }
      var h = function (f, d, p) {
        if (p === void 0 && (p = -1), p === -1 && (p = d.rank - 1), p !== d.rank - 1) throw Error('Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ' + d.rank + ' and dim was ' + p);
        return la(function (v, m, g) {
          var y = m.logSumExp([p], !0), x = m.toFloat().sub(y);
          return g([v, x]), {
            value: x.mul(v).neg().sum([p]), gradFunc: function (b, w) {
              var _ = w[0], S = w[1], E = lt(b.shape, [p]);
              return [b.reshape(E).mul(_.toFloat().sub(S.exp())), b.reshape(E).mul(S.exp().sub(_.toFloat()))];
            },
          };
        })(f, d);
      }(a, i);
      return vn(h, s, o);
    },
  }), Mg = Object.freeze({
    get Reduction() {
      return ot;
    },
    absoluteDifference: Ig,
    computeWeightedLoss: vn,
    cosineDistance: Rg,
    hingeLoss: Sg,
    huberLoss: Ag,
    logLoss: Dg,
    meanSquaredError: Tg,
    sigmoidCrossEntropy: Fg,
    softmaxCrossEntropy: Ng,
  });

  function xu(r, t) {
    return t === void 0 && (t = !1), T.tidy(function () {
      if (r.shape.length !== 2) throw new Error('qr2d() requires a 2D Tensor, but got a ' + r.shape.length + 'D Tensor.');
      for (var e = r.shape[0], n = r.shape[1], o = Hc(e), a = r.clone(), i = In([[1]], [1, 1]), s = i.clone(), u = e >= n ? n : e, c = function (h) {
        var f, d = a, p = s, v = o;
        f = T.tidy(function () {
          var m = a.slice([h, h], [e - h, 1]), g = m.norm(), y = a.slice([h, h], [1, 1]),
            x = In([[-1]]).where(y.greater(0), In([[1]])), b = y.sub(x.mul(g)), w = m.div(b);
          s = w.shape[0] === 1 ? i.clone() : i.concat(w.slice([1, 0], [w.shape[0] - 1, w.shape[1]]), 0);
          var _ = x.matMul(b).div(g).neg(), S = a.slice([h, 0], [e - h, n]), E = _.mul(s);
          if (h === 0) a = S.sub(E.matMul(s.transpose().matMul(S))); else {
            var I = S.sub(E.matMul(s.transpose().matMul(S)));
            a = a.slice([0, 0], [h, n]).concat(I, 0);
          }
          var R = o.slice([0, h], [e, o.shape[1] - h]);
          if (h === 0) o = R.sub(R.matMul(s).matMul(E.transpose())); else {
            var F = R.sub(R.matMul(s).matMul(E.transpose()));
            o = o.slice([0, 0], [e, h]).concat(F, 1);
          }
          return [s, a, o];
        }), s = f[0], a = f[1], o = f[2], mt([d, p, v]);
      }, l = 0; l < u; ++l) c(l);
      return !t && e > n && (o = o.slice([0, 0], [e, n]), a = a.slice([0, 0], [n, n])), [o, a];
    });
  }

  var Pg = A({
    bandPart_: function (r, t, e) {
      if (t % 1 != 0) throw new Error('bandPart(): numLower must be an integer, got ' + t + '.');
      if (e % 1 != 0) throw new Error('bandPart(): numUpper must be an integer, got ' + e + '.');
      var n = C(r, 'a', 'bandPart');
      if (n.rank < 2) throw new Error('bandPart(): Rank must be at least 2, got ' + n.rank + '.');
      var o = n.shape, a = n.shape.slice(-2), i = a[0], s = a[1];
      if (!(t <= i)) throw new Error('bandPart(): numLower (' + t + ') must not be greater than the number of rows (' + i + ').');
      if (!(e <= s)) throw new Error('bandPart(): numUpper (' + e + ') must not be greater than the number of columns (' + s + ').');
      t < 0 && (t = i), e < 0 && (e = s);
      var u = Ho(0, i, 1, 'int32').reshape([-1, 1]), c = Ho(0, s, 1, 'int32'), l = qe(u, c),
        h = da(l.lessEqual(X(+t, 'int32')), l.greaterEqual(X(-e, 'int32'))), f = Ee([i, s], n.dtype);
      return Et(Ge(n.reshape([-1, i, s])).map(function (d) {
        return Jn(h, d, f);
      })).reshape(o);
    },
  }), Og = A({
    gramSchmidt_: function (r) {
      var t;
      if (Array.isArray(r)) {
        t = !1, k(r != null && r.length > 0, function () {
          return 'Gram-Schmidt process: input must not be null, undefined, or empty';
        });
        for (var e = r[0].shape[0], n = function (u) {
          k(r[u].shape[0] === e, function () {
            return 'Gram-Schmidt: Non-unique lengths found in the input vectors: (' + r[u].shape[0] + ' vs. ' + e + ')';
          });
        }, o = 1; o < r.length; ++o) n(o);
      } else t = !0, r = Ui(r, r.shape[0], 0).map(function (u) {
        return Kc(u, [0]);
      });
      k(r.length <= r[0].shape[0], function () {
        return 'Gram-Schmidt: Number of vectors (' + r.length + ') exceeds number of dimensions (' + r[0].shape[0] + ').';
      });
      var a = [], i = r, s = function (u) {
        a.push(T.tidy(function () {
          var c = i[u];
          if (u > 0) for (var l = 0; l < u; ++l) {
            var h = ih(a[l].mulStrict(c)).mul(a[l]);
            c = c.sub(h);
          }
          return c.div(lh(c, 'euclidean'));
        }));
      };
      for (o = 0; o < r.length; ++o) s(o);
      return t ? Et(a, 0) : a;
    },
  }), Bg = A({
    qr_: function (r, t) {
      if (t === void 0 && (t = !1), r.rank < 2) throw new Error('qr() requires input tensor to have a rank >= 2, but got rank ' + r.rank);
      if (r.rank === 2) return xu(r, t);
      var e = r.shape.slice(0, r.shape.length - 2).reduce(function (i, s) {
        return i * s;
      }), n = Ge(r.reshape([e, r.shape[r.shape.length - 2], r.shape[r.shape.length - 1]]), 0), o = [], a = [];
      return n.forEach(function (i) {
        var s = xu(i, t), u = s[0], c = s[1];
        o.push(u), a.push(c);
      }), [Et(o, 0).reshape(r.shape), Et(a, 0).reshape(r.shape)];
    },
  }), Lg = Object.freeze({ bandPart: Pg, gramSchmidt: Og, qr: Bg });

  function ga(r, t, e, n, o, a) {
    n == null && (n = .5), o == null && (o = Number.NEGATIVE_INFINITY), a == null && (a = 0);
    var i = r.shape[0];
    return e = Math.min(e, i), k(0 <= n && n <= 1, function () {
      return 'iouThreshold must be in [0, 1], but was \'' + n + '\'';
    }), k(r.rank === 2, function () {
      return 'boxes must be a 2D tensor, but was of rank \'' + r.rank + '\'';
    }), k(r.shape[1] === 4, function () {
      return 'boxes must have 4 columns, but 2nd dimension was ' + r.shape[1];
    }), k(t.rank === 1, function () {
      return 'scores must be a 1D tensor';
    }), k(t.shape[0] === i, function () {
      return 'scores has incompatible shape with boxes. Expected ' + i + ', but was ' + t.shape[0];
    }), k(0 <= a && a <= 1, function () {
      return 'softNmsSigma must be in [0, 1], but was \'' + a + '\'';
    }), { maxOutputSize: e, iouThreshold: n, scoreThreshold: o, softNmsSigma: a };
  }

  var Wg = A({
    resizeBilinear_: function (r, t, e) {
      e === void 0 && (e = !1);
      var n = C(r, 'images', 'resizeBilinear');
      k(n.rank === 3 || n.rank === 4, function () {
        return 'Error in resizeBilinear: x must be rank 3 or 4, but got rank ' + n.rank + '.';
      }), k(t.length === 2, function () {
        return 'Error in resizeBilinear: new shape must 2D, but got shape ' + t + '.';
      });
      var o = n, a = !1;
      n.rank === 3 && (a = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
      var i = t[0], s = t[1], u = T.runKernelFunc(function (c, l) {
        return l([o]), c.resizeBilinear(o, i, s, e);
      }, { x: o }, function (c, l) {
        return {
          x: function () {
            return T.runKernelFunc(function (h) {
              return h.resizeBilinearBackprop(c, l[0], e);
            }, {});
          },
        };
      }, 'ResizeBilinear', { alignCorners: e, newHeight: i, newWidth: s });
      return a ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
    },
  }), Ug = A({
    resizeNearestNeighbor_: function (r, t, e) {
      e === void 0 && (e = !1);
      var n = C(r, 'images', 'resizeNearestNeighbor');
      k(n.rank === 3 || n.rank === 4, function () {
        return 'Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ' + n.rank + '.';
      }), k(t.length === 2, function () {
        return 'Error in resizeNearestNeighbor: new shape must 2D, but got shape ' + t + '.';
      }), k(n.dtype === 'float32' || n.dtype === 'int32', function () {
        return '`images` must have `int32` or `float32` as dtype';
      });
      var o = n, a = !1;
      n.rank === 3 && (a = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
      var i = t[0], s = t[1], u = T.runKernelFunc(function (c, l) {
        return l([o]), c.resizeNearestNeighbor(o, i, s, e);
      }, { batchImages: o }, function (c, l) {
        return {
          batchImages: function () {
            return T.runKernelFunc(function (h) {
              return h.resizeNearestNeighborBackprop(c, l[0], e);
            }, {});
          },
        };
      });
      return a ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
    },
  }), zg = A({
    nonMaxSuppression_: function (r, t, e, n, o) {
      n === void 0 && (n = .5), o === void 0 && (o = Number.NEGATIVE_INFINITY);
      var a = C(r, 'boxes', 'nonMaxSuppression'), i = C(t, 'scores', 'nonMaxSuppression'), s = ga(a, i, e, n, o);
      e = s.maxOutputSize, n = s.iouThreshold, o = s.scoreThreshold;
      var u = { maxOutputSize: e, iouThreshold: n, scoreThreshold: o };
      return T.runKernelFunc(function (c) {
        return c.nonMaxSuppression(a, i, e, n, o);
      }, { boxes: a, scores: i }, null, 'NonMaxSuppressionV3', u);
    },
  }), Vg = function (r, t, e, n, o) {
    return n === void 0 && (n = .5), o === void 0 && (o = Number.NEGATIVE_INFINITY), $(this, void 0, void 0, function () {
      var a, i, s, u, c, l, h;
      return Z(this, function (f) {
        switch (f.label) {
          case 0:
            return a = C(r, 'boxes', 'nonMaxSuppressionAsync'), i = C(t, 'scores', 'nonMaxSuppressionAsync'), s = ga(a, i, e, n, o), e = s.maxOutputSize, n = s.iouThreshold, o = s.scoreThreshold, [4, Promise.all([a.data(), i.data()])];
          case 1:
            return u = f.sent(), c = u[0], l = u[1], h = Yi(c, l, e, n, o), a !== r && a.dispose(), i !== t && i.dispose(), [2, h];
        }
      });
    });
  }, Gg = A({
    nonMaxSuppressionWithScore_: function (r, t, e, n, o, a) {
      n === void 0 && (n = .5), o === void 0 && (o = Number.NEGATIVE_INFINITY), a === void 0 && (a = 0);
      var i = C(r, 'boxes', 'nonMaxSuppression'), s = C(t, 'scores', 'nonMaxSuppression'), u = ga(i, s, e, n, o, a),
        c = {
          maxOutputSize: e = u.maxOutputSize,
          iouThreshold: n = u.iouThreshold,
          scoreThreshold: o = u.scoreThreshold,
          softNmsSigma: a = u.softNmsSigma,
        }, l = T.runKernel('NonMaxSuppressionV5', { boxes: i, scores: s }, c);
      return { selectedIndices: l[0], selectedScores: l[1] };
    },
  }), qg = function (r, t, e, n, o, a) {
    return n === void 0 && (n = .5), o === void 0 && (o = Number.NEGATIVE_INFINITY), a === void 0 && (a = 0), $(this, void 0, void 0, function () {
      var i, s, u, c, l, h, f;
      return Z(this, function (d) {
        switch (d.label) {
          case 0:
            return i = C(r, 'boxes', 'nonMaxSuppressionAsync'), s = C(t, 'scores', 'nonMaxSuppressionAsync'), u = ga(i, s, e, n, o, a), e = u.maxOutputSize, n = u.iouThreshold, o = u.scoreThreshold, a = u.softNmsSigma, [4, Promise.all([i.data(), s.data()])];
          case 1:
            return c = d.sent(), l = c[0], h = c[1], f = $i(l, h, e, n, o, a), i !== r && i.dispose(), s !== t && s.dispose(), [2, f];
        }
      });
    });
  }, Hg = A({
    cropAndResize_: function (r, t, e, n, o, a) {
      var i = C(r, 'image', 'cropAndResize'), s = C(t, 'boxes', 'cropAndResize', 'float32'),
        u = C(e, 'boxInd', 'cropAndResize', 'int32');
      o = o || 'bilinear', a = a || 0;
      var c = s.shape[0];
      return k(i.rank === 4, function () {
        return 'Error in cropAndResize: image must be rank 4,but got rank ' + i.rank + '.';
      }), k(s.rank === 2 && s.shape[1] === 4, function () {
        return 'Error in cropAndResize: boxes must be have size [' + c + ',4] but had shape ' + s.shape + '.';
      }), k(u.rank === 1 && u.shape[0] === c, function () {
        return 'Error in cropAndResize: boxInd must be have size [' + c + '] but had shape ' + s.shape + '.';
      }), k(n.length === 2, function () {
        return 'Error in cropAndResize: cropSize must be of length 2, but got length ' + n.length + '.';
      }), k(n[0] >= 1 && n[1] >= 1, function () {
        return 'cropSize must be atleast [1,1], but was ' + n;
      }), k(o === 'bilinear' || o === 'nearest', function () {
        return 'method must be bilinear or nearest, but was ' + o;
      }), T.runKernelFunc(function (l, h) {
        return l.cropAndResize(i, s, u, n, o, a);
      }, { images: i, boxes: s, boxInd: u }, null, 'CropAndResize', { method: o, extrapolationValue: a, cropSize: n });
    },
  }), ls = Object.freeze({
    resizeBilinear: Wg,
    resizeNearestNeighbor: Ug,
    nonMaxSuppression: zg,
    nonMaxSuppressionAsync: Vg,
    nonMaxSuppressionWithScore: Gg,
    nonMaxSuppressionWithScoreAsync: qg,
    cropAndResize: Hg,
  }), hs = function (r, t) {
    return !(r > 0) || t === 'linear';
  }, fs = function (r, t, e) {
    if (e == null || e === 'linear') return r;
    if (e === 'relu') return r.mul(t.step());
    throw new Error('Gradient for activation ' + e + ' has not been implemented yet.');
  }, ds = function (r, t) {
    var e = t, n = Le(r.shape, t.shape);
    return n.length > 0 && (e = e.sum(n)), e.reshape(r.shape);
  }, ps = function (r, t, e) {
    if (t === 'linear') return r;
    if (t === 'relu') return De(r);
    if (t === 'elu') return sh(r);
    if (t === 'relu6') return ch(r);
    if (t === 'prelu') return uh(r, e);
    throw new Error('Unknown fused activation ' + t + '.');
  }, jg = A({
    fusedMatMul_: function (r) {
      var t, e = r.a, n = r.b, o = r.transposeA, a = o !== void 0 && o, i = r.transposeB, s = i !== void 0 && i,
        u = r.bias, c = r.activation, l = c === void 0 ? 'linear' : c, h = r.preluActivationWeights;
      if (hs(T.state.gradientDepth, l) === !1) {
        var f = va(e, n, a, s);
        return u != null && (f = ce(f, u)), ps(f, l, h);
      }
      var d = C(e, 'a', 'fused matMul'), p = C(n, 'b', 'fused matMul');
      t = ke(d, p), d = t[0], p = t[1];
      var v = a ? d.shape[d.rank - 2] : d.shape[d.rank - 1], m = s ? p.shape[p.rank - 1] : p.shape[p.rank - 2],
        g = a ? d.shape[d.rank - 1] : d.shape[d.rank - 2], y = s ? p.shape[p.rank - 2] : p.shape[p.rank - 1],
        x = d.shape.slice(0, -2), b = p.shape.slice(0, -2), w = J(x), _ = J(b);
      k(d.rank >= 2 && p.rank >= 2 && d.rank === p.rank, function () {
        return 'Error in fused matMul: inputs must have the same rank of at least 2, got ranks ' + d.rank + ' and ' + p.rank + '.';
      }), k(Be(x, b), function () {
        return 'Error in fused matMul: outer dimensions (' + x + ') and (' + b + ') of Tensors with shapes ' + d.shape + ' and ' + p.shape + ' must match.';
      }), k(v === m, function () {
        return 'Error in fused matMul: inner shapes (' + v + ') and (' + m + ') of Tensors with shapes ' + d.shape + ' and ' + p.shape + ' and transposeA=' + a + ' and transposeB=' + s + ' must match.';
      });
      var S, E, I = d.shape.slice(0, -2).concat([g, y]), R = a ? d.as3D(w, v, g) : d.as3D(w, g, v),
        F = s ? p.as3D(_, y, m) : p.as3D(_, m, y);
      u != null && le(I, (S = ke(S = C(u, 'bias', 'fused matMul'), d)[0]).shape), h != null && (E = C(h, 'prelu weights', 'fused matMul'));
      var D = { a: R, b: F };
      u != null && (D.bias = S), h != null && (D.preluActivationWeights = E);
      var L = [R, F];
      return T.runKernelFunc(function (B, W) {
        var V = B.fusedBatchMatMul({
          a: R,
          b: F,
          transposeA: a,
          transposeB: s,
          bias: S,
          activation: l,
          preluActivationWeights: E,
        });
        return W([R, F, V]), V;
      }, D, function (B, W) {
        var V = W[0], z = W[1], U = W[2], q = fs(B, U, l), P = {};
        return u != null && (P = {
          bias: function () {
            return ds(S, q);
          },
        }), Object.assign(a || s ? !a && s ? {
          a: function () {
            return q.matMul(z, !1, !1);
          }, b: function () {
            return q.matMul(V, !0, !1);
          },
        } : a && !s ? {
          a: function () {
            return z.matMul(q, !1, !0);
          }, b: function () {
            return V.matMul(q, !1, !1);
          },
        } : {
          a: function () {
            return z.matMul(q, !0, !0);
          }, b: function () {
            return q.matMul(V, !0, !0);
          },
        } : {
          a: function () {
            return q.matMul(z, !1, !0);
          }, b: function () {
            return V.matMul(q, !0, !1);
          },
        }, P);
      }, '_FusedMatMul', { transposeA: a, transposeB: s, activation: l }, L, [!0]).reshape(I);
    },
  }), Xg = A({
    fusedConv2d_: function (r) {
      var t = r.x, e = r.filter, n = r.strides, o = r.pad, a = r.dataFormat, i = a === void 0 ? 'NHWC' : a,
        s = r.dilations, u = s === void 0 ? [1, 1] : s, c = r.dimRoundingMode, l = r.bias, h = r.activation,
        f = h === void 0 ? 'linear' : h, d = r.preluActivationWeights;
      if (f = f || 'linear', hs(T.state.gradientDepth, f) === !1) {
        var p = St(t, e, n, o, i, u, c);
        return l != null && (p = ce(p, l)), ps(p, f, d);
      }
      var v = C(t, 'x', 'conv2d'), m = C(e, 'filter', 'conv2d'), g = v, y = !1;
      v.rank === 3 && (y = !0, g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), k(g.rank === 4, function () {
        return 'Error in fused conv2d: input must be rank 4, but got rank ' + g.rank + '.';
      }), k(m.rank === 4, function () {
        return 'Error in fused conv2d: filter must be rank 4, but got rank ' + m.rank + '.';
      }), c != null && k(Te(o), function () {
        return 'Error in fused conv2d: pad must be an integer when using, dimRoundingMode ' + c + ' but got pad ' + o + '.';
      }), k(g.shape[3] === m.shape[2], function () {
        return 'Error in conv2d: depth of input (' + g.shape[3] + ') must match input depth for filter ' + m.shape[2] + '.';
      }), k(ht(n, u), function () {
        return 'Error in conv2D: Either strides or dilations must be 1. Got strides ' + n + ' and dilations \'' + u + '\'';
      }), k(i === 'NHWC', function () {
        return 'Error in conv2d: got dataFormat of ' + i + ' but only NHWC is currently supported.';
      });
      var x, b, w = On(g.shape, m.shape, n, u, o, c);
      l != null && (x = ke(x = C(l, 'bias', 'fused conv2d'), v)[0], le(w.outShape, x.shape)), d != null && (b = C(d, 'prelu weights', 'fused conv2d'));
      var _ = { x: g, filter: m };
      l != null && (_.bias = x), d != null && (_.preluActivationWeights = b);
      var S = [m, g], E = T.runKernelFunc(function (I, R) {
        var F = I.fusedConv2d({ input: g, filter: m, convInfo: w, bias: x, activation: f, preluActivationWeights: b });
        return R([m, g, F]), F;
      }, _, function (I, R) {
        var F = R, D = F[0], L = F[1], B = F[2], W = fs(I, B, f);
        k(Zn(u), function () {
          return 'Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations \'' + u + '\'';
        });
        var V = {};
        return l != null && (V = {
          bias: function () {
            return ds(x, W);
          },
        }), Object.assign({
          x: function () {
            return Ql(L.shape, W, D, n, o);
          }, filter: function () {
            return os(L, W, D.shape, n, o);
          },
        }, V);
      }, 'FusedConv2D', { convInfo: w, activation: f }, S, [!0]);
      return y ? E.as3D(E.shape[1], E.shape[2], E.shape[3]) : E;
    },
  }), Kg = A({
    fusedDepthwiseConv2d_: function (r) {
      var t = r.x, e = r.filter, n = r.strides, o = r.pad, a = r.dataFormat, i = a === void 0 ? 'NHWC' : a,
        s = r.dilations, u = s === void 0 ? [1, 1] : s, c = r.dimRoundingMode, l = r.bias, h = r.activation,
        f = h === void 0 ? 'linear' : h, d = r.preluActivationWeights;
      if (hs(T.state.gradientDepth, f) === !1) {
        var p = pa(t, e, n, o, i, u, c);
        return l != null && (p = ce(p, l)), ps(p, f, d);
      }
      var v = C(t, 'x', 'depthwiseConv2d'), m = C(e, 'filter', 'depthwiseConv2d'), g = v, y = !1;
      v.rank === 3 && (y = !0, g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), k(g.rank === 4, function () {
        return 'Error in fused depthwiseConv2d: input must be rank 4, but got rank ' + g.rank + '.';
      }), k(m.rank === 4, function () {
        return 'Error in fused depthwiseConv2d: filter must be rank 4, but got rank ' + m.rank + '.';
      }), k(g.shape[3] === m.shape[2], function () {
        return 'Error in fused depthwiseConv2d: number of input channels (' + g.shape[3] + ') must match the inChannels dimension in filter ' + m.shape[2] + '.';
      }), u == null && (u = [1, 1]), k(ht(n, u), function () {
        return 'Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ' + n + ' and dilations \'' + u + '\'';
      }), c != null && k(Te(o), function () {
        return 'Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ' + c + ' but got pad ' + o + '.';
      });
      var x, b, w = On(g.shape, m.shape, n, u, o, c, !0);
      l != null && (x = ke(x = C(l, 'bias', 'fused conv2d'), v)[0], le(w.outShape, x.shape)), d != null && (b = C(d, 'prelu weights', 'fused depthwiseConv2d'));
      var _ = { x: g, filter: m };
      l != null && (_.bias = x), d != null && (_.preluActivationWeights = b);
      var S = [m, g], E = T.runKernelFunc(function (I, R) {
        var F = I.fusedDepthwiseConv2D({
          input: g,
          filter: m,
          convInfo: w,
          bias: x,
          activation: f,
          preluActivationWeights: b,
        });
        return R([m, g, F]), F;
      }, _, function (I, R) {
        k(Zn(u), function () {
          return 'Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations \'' + u + '\'';
        });
        var F = R[0], D = R[1], L = R[2], B = fs(I, L, f), W = {};
        return l != null && (W = {
          bias: function () {
            return ds(x, B);
          },
        }), Object.assign({
          x: function () {
            return eh(D.shape, B, F, w);
          }, filter: function () {
            return th(D, B, F.shape, w);
          },
        }, W);
      }, 'FusedDepthwiseConv2D', { convInfo: w, activation: f }, S, [!0]);
      return y ? E.as3D(E.shape[1], E.shape[2], E.shape[3]) : E;
    },
  }), Yg = Object.freeze({ matMul: jg, conv2d: Xg, depthwiseConv2d: Kg }), $g = Object.freeze({
    image: ls,
    linalg: Lg,
    losses: Mg,
    spectral: bg,
    fused: Yg,
    signal: Eg,
    square: Dv,
    squaredDifference: Bl,
    conv1d: Wm,
    conv2d: St,
    conv3d: Um,
    depthwiseConv2d: pa,
    separableConv2d: as,
    conv2dTranspose: zm,
    conv3dTranspose: Vm,
    op: A,
    batchNormalization2d: im,
    batchNormalization3d: sm,
    batchNormalization4d: um,
    batchNormalization: cm,
    batchNorm: Gl,
    batchNorm2d: lm,
    batchNorm3d: hm,
    batchNorm4d: fm,
    booleanMaskAsync: Lm,
    complex: Ye,
    real: It,
    imag: qt,
    concat: Ve,
    concat1d: gd,
    concat2d: yd,
    concat3d: bd,
    concat4d: xd,
    split: Ui,
    matMul: va,
    dot: Gm,
    outerProduct: qm,
    reverse: io,
    reverse1d: Hm,
    reverse2d: jm,
    reverse3d: Xm,
    reverse4d: Km,
    maxPool: He,
    avgPool: so,
    pool: Ym,
    maxPool3d: $m,
    avgPool3d: Zm,
    slice: Yt,
    slice1d: Jm,
    slice2d: Qm,
    slice3d: oh,
    slice4d: eg,
    abs: Tv,
    acos: Fv,
    acosh: Nv,
    asin: Mv,
    asinh: Pv,
    atan: Ov,
    atanh: Bv,
    ceil: Lv,
    clipByValue: ts,
    cos: Wv,
    cosh: Uv,
    erf: zv,
    exp: wi,
    expm1: Vv,
    floor: Gv,
    log: qv,
    log1p: Hv,
    logSigmoid: jv,
    neg: Zo,
    reciprocal: Xv,
    round: Kv,
    rsqrt: Ll,
    sigmoid: Wl,
    sign: Yv,
    isNaN: $v,
    isInf: Zv,
    isFinite: Jv,
    sin: Qv,
    sinh: em,
    softplus: tm,
    sqrt: nm,
    step: rm,
    tan: om,
    tanh: am,
    all: tg,
    any: ng,
    argMax: rg,
    argMin: og,
    logSumExp: ag,
    max: ma,
    mean: ig,
    min: sg,
    moments: ug,
    sum: ih,
    prod: cg,
    equal: Kl,
    equalStrict: Sm,
    greater: Am,
    greaterEqual: Yl,
    greaterEqualStrict: Dm,
    greaterStrict: Tm,
    less: Fm,
    lessEqual: Nm,
    lessEqualStrict: Mm,
    lessStrict: Pm,
    notEqual: Om,
    notEqualStrict: Bm,
    add: ce,
    addN: vm,
    addStrict: mm,
    atan2: gm,
    div: Dt,
    divNoNan: ym,
    divStrict: bm,
    floorDiv: jl,
    maximum: ns,
    maximumStrict: xm,
    minimum: Xl,
    minimumStrict: wm,
    mod: _m,
    modStrict: Cm,
    mul: at,
    mulStrict: Em,
    pow: Jo,
    powStrict: km,
    squaredDifferenceStrict: Im,
    sub: qe,
    subStrict: Rm,
    elu: sh,
    leakyRelu: lg,
    prelu: uh,
    relu: De,
    relu6: ch,
    selu: hg,
    logicalAnd: da,
    logicalNot: dm,
    logicalOr: ql,
    logicalXor: pm,
    where: Jn,
    whereAsync: Hl,
    buffer: ae,
    print: Ad,
    batchToSpaceND: qc,
    broadcastTo: Dd,
    cast: Td,
    clone: Fd,
    cumsum: Nd,
    depthToSpace: Md,
    expandDims: kt,
    eye: Hc,
    multinomial: Pd,
    oneHot: gi,
    pad: nr,
    pad1d: Od,
    pad2d: Bd,
    pad3d: Ld,
    pad4d: Wd,
    rand: Ud,
    randomNormal: zd,
    randomGamma: Vd,
    randomUniform: jc,
    reshape: Tt,
    spaceToBatchND: Xc,
    squeeze: Kc,
    stack: Et,
    tile: mr,
    truncatedNormal: Gd,
    unstack: Ge,
    setdiff1dAsync: qd,
    fill: Xt,
    linspace: md,
    ones: Dr,
    range: Ho,
    scalar: X,
    tensor: Ze,
    tensor1d: Oe,
    tensor2d: In,
    tensor3d: Wi,
    tensor4d: dt,
    tensor5d: dd,
    tensor6d: pd,
    variable: vd,
    zeros: Ee,
    onesLike: Gc,
    zerosLike: ge,
    transpose: Dn,
    softmax: pn,
    logSoftmax: jd,
    localResponseNormalization: fg,
    norm: lh,
    gather: rs,
    unsortedSegmentSum: $l,
    basicLSTMCell: dg,
    multiRNNCell: pg,
    movingAverage: vg,
    stridedSlice: mg,
    topk: gg,
    scatterND: yg,
    fft: is,
    ifft: Qo,
    rfft: ss,
    irfft: hh,
    sparseToDense: xg,
    gatherND: wg,
    diag: _g,
    dropout: Cg,
    hannWindow: us,
    hammingWindow: dh,
    frame: cs,
    stft: ph,
    inTopKAsync: kg,
  });

  function G(r, t) {
    Array.isArray(r) || (r = [r]), r.forEach(function (e) {
      e != null && k(e.dtype !== 'complex64', function () {
        return t + ' does not support complex64 tensors.';
      });
    });
  }

  function Ga(r, t, e, n) {
    if (e === 'linear') return r.linear(t);
    if (e === 'relu') return r.relu(t);
    if (e === 'elu') return r.elu(t);
    if (e === 'relu6') return r.relu6(t);
    if (e === 'prelu') return r.prelu(t, n);
    throw new Error('Activation ' + e + ' has not been implemented for the CPU backend.');
  }

  var Zg = function (r) {
    function t() {
      var e = r.call(this) || this;
      return e.blockSize = 48, e.firstUse = !0, e.data = new nl(e, T), e;
    }

    return Mt(t, r), t.prototype.write = function (e, n, o) {
      this.firstUse && (this.firstUse = !1, O().get('IS_NODE') && Go(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));
      var a = {};
      return this.data.set(a, { values: e, dtype: o }), a;
    }, t.prototype.move = function (e, n, o, a) {
      this.data.set(e, { values: n, dtype: a });
    }, t.prototype.numDataIds = function () {
      return this.data.numDataIds();
    }, t.prototype.read = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          return [2, this.readSync(e)];
        });
      });
    }, t.prototype.readSync = function (e) {
      var n = this.data.get(e), o = n.dtype, a = n.complexTensors;
      return o === 'complex64' ? xi(this.readSync(a.real.dataId), this.readSync(a.imag.dataId)) : this.data.get(e).values;
    }, t.prototype.bufferSync = function (e) {
      var n = this.readSync(e.dataId), o = n;
      if (e.dtype === 'string') try {
        o = n.map(function (a) {
          return jr(a);
        });
      } catch {
        throw new Error('Failed to decode encoded string bytes into utf-8');
      }
      return ae(e.shape, e.dtype, o);
    }, t.prototype.makeOutput = function (e, n, o) {
      var a = this.write(e, n, o);
      return T.makeTensorFromDataId(a, n, o, this);
    }, t.prototype.disposeData = function (e) {
      if (this.data.has(e)) {
        var n = this.data.get(e).complexTensors;
        n != null && (n.real.dispose(), n.imag.dispose()), this.data.delete(e);
      }
    }, t.prototype.time = function (e) {
      return $(this, void 0, void 0, function () {
        var n;
        return Z(this, function (o) {
          return n = At(), e(), [2, { kernelMs: At() - n }];
        });
      });
    }, t.prototype.memory = function () {
      return {
        unreliable: !0,
        reasons: ['The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.'],
      };
    }, t.prototype.complex = function (e, n) {
      var o = this.makeOutput(null, e.shape, 'complex64');
      return this.data.get(o.dataId).complexTensors = { real: T.keep(e.clone()), imag: T.keep(n.clone()) }, o;
    }, t.prototype.real = function (e) {
      return this.data.get(e.dataId).complexTensors.real.clone();
    }, t.prototype.imag = function (e) {
      return this.data.get(e.dataId).complexTensors.imag.clone();
    }, t.prototype.slice = function (e, n, o) {
      if (G(e, 'slice'), qi(e.shape, n, o)) {
        var a = Hi(n, e.strides), i = J(o);
        return Ze(this.readSync(e.dataId).subarray(a, a + i), o, e.dtype);
      }
      for (var s = ae(o, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; ++c) {
        var l = s.indexToLoc(c).map(function (h, f) {
          return h + n[f];
        });
        s.values[c] = u.get.apply(u, l);
      }
      return s.toTensor();
    }, t.prototype.stridedSlice = function (e, n, o, a) {
      G(e, 'stridedSlice');
      var i = ca(n, o, a);
      if (i.some(function (d) {
        return d === 0;
      })) return Ze([], i);
      for (var s = ae(i, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; c++) {
        for (var l = s.indexToLoc(c), h = new Array(l.length), f = 0; f < h.length; f++) h[f] = l[f] * a[f] + n[f];
        s.set.apply(s, [u.get.apply(u, h)].concat(l));
      }
      return s.toTensor();
    }, t.prototype.diag = function (e) {
      for (var n = this.readSync(e.dataId), o = ae([e.size, e.size], e.dtype), a = o.values, i = 0; i < n.length; i++) a[i * e.size + i] = n[i];
      return o.toTensor();
    }, t.prototype.unstack = function (e, n) {
      for (var o = e.shape[n], a = new Array(e.rank - 1), i = 0, s = 0; s < e.rank; s++) s !== n && (a[i++] = e.shape[s]);
      var u = new Array(e.rank).fill(0), c = e.shape.slice();
      c[n] = 1;
      var l = new Array(o);
      for (s = 0; s < l.length; s++) u[n] = s, l[s] = this.slice(e, u, c).reshape(a);
      return l;
    }, t.prototype.reverse = function (e, n) {
      G(e, 'reverse');
      for (var o = ae(e.shape, e.dtype), a = this.bufferSync(e), i = function (u) {
        var c = o.indexToLoc(u), l = c.slice();
        n.forEach(function (h) {
          return l[h] = e.shape[h] - 1 - l[h];
        }), o.set.apply(o, [a.get.apply(a, l)].concat(c));
      }, s = 0; s < o.size; s++) i(s);
      return o.toTensor();
    }, t.prototype.concat = function (e, n) {
      var o = this;
      if (e[0].dtype === 'complex64') {
        var a = e.map(function (d) {
          return It(d);
        }), i = e.map(function (d) {
          return qt(d);
        });
        return Ye(this.concat(a, n), this.concat(i, n));
      }
      var s = e.map(function (d) {
        var p = J(d.shape.slice(n));
        return d.as2D(-1, p);
      }), u = $n(s.map(function (d) {
        return d.shape;
      }), 1), c = ae(u, e[0].dtype).values;
      if (s[0].shape[0] === 1) {
        var l = 0;
        s.forEach(function (d) {
          c.set(o.readSync(d.dataId), l), l += d.size;
        });
      } else {
        var h = 0;
        s.forEach(function (d) {
          for (var p = o.readSync(d.dataId), v = 0, m = 0; m < d.shape[0]; ++m) for (var g = m * u[1] + h, y = 0; y < d.shape[1]; ++y) c[g + y] = p[v++];
          h += d.shape[1];
        });
      }
      var f = $n(e.map(function (d) {
        return d.shape;
      }), n);
      return Ze(c, f, e[0].dtype);
    }, t.prototype.neg = function (e) {
      return G(e, 'neg'), this.multiply(X(-1), e);
    }, t.prototype.add = function (e, n) {
      return e.dtype === 'complex64' || n.dtype === 'complex64' ? this.broadcastedBinaryComplexOp(e.cast('complex64'), n.cast('complex64'), function (o, a, i, s) {
        return { real: o + i, imag: a + s };
      }) : this.broadcastedBinaryOp(e, n, je(e.dtype, n.dtype), function (o, a) {
        return o + a;
      });
    }, t.prototype.addN = function (e) {
      var n = this;
      G(e, 'addN');
      for (var o = e.map(function (l) {
        return n.readSync(l.dataId);
      }), a = ae(e[0].shape, e[0].dtype), i = a.values, s = 0; s < e.length; s++) for (var u = o[s], c = 0; c < i.length; c++) i[c] += u[c];
      return a.toTensor();
    }, t.prototype.softmax = function (e, n) {
      var o = We([n], e.shape), a = this.max(e, o), i = lt(a.shape, o), s = this.subtract(e, a.reshape(i)),
        u = this.exp(s), c = this.sum(u, o).reshape(i);
      return this.realDivide(u, c);
    }, t.prototype.subtract = function (e, n) {
      return e.dtype === 'complex64' || n.dtype === 'complex64' ? this.broadcastedBinaryComplexOp(e.cast('complex64'), n.cast('complex64'), function (o, a, i, s) {
        return { real: o - i, imag: a - s };
      }) : this.broadcastedBinaryOp(e, n, je(e.dtype, n.dtype), function (o, a) {
        return o - a;
      });
    }, t.prototype.pow = function (e, n) {
      return G([e, n], 'pow'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        return Math.pow(o, a);
      });
    }, t.prototype.batchMatMul = function (e, n, o, a) {
      G([e, n], 'matMul');
      for (var i = o ? e.shape[1] : e.shape[2], s = o ? e.shape[2] : e.shape[1], u = a ? n.shape[1] : n.shape[2], c = e.shape[0], l = this.readSync(e.dataId), h = this.readSync(n.dataId), f = o ? [e.strides[0], 1, e.strides[1]] : [e.strides[0], e.strides[1], 1], d = f[0], p = f[1], v = f[2], m = a ? [1, n.strides[1], n.strides[0]] : [n.strides[1], 1, n.strides[0]], g = m[0], y = m[1], x = m[2], b = s * u, w = ae([c, s, u], e.dtype), _ = w.values, S = this.blockSize, E = 0; E < c; E++) for (var I = 0; I < s; I += S) for (var R = 0; R < u; R += S) for (var F = 0; F < i; F += S) for (var D = Math.min(I + S, s), L = Math.min(R + S, u), B = Math.min(F + S, i), W = I; W < D; W++) for (var V = R; V < L; V++) {
        for (var z = 0, U = F; U < B; U++) z += l[E * d + W * p + U * v] * h[U * g + V * y + E * x];
        _[E * b + (W * u + V)] += z;
      }
      return w.toTensor();
    }, t.prototype.fusedBatchMatMul = function (e) {
      var n = e.a, o = e.b, a = e.transposeA, i = e.transposeB, s = e.bias, u = e.activation,
        c = e.preluActivationWeights, l = this.batchMatMul(n, o, a, i);
      return s && (l = this.add(l, s)), u && (l = Ga(this, l, u, c)), l;
    }, t.prototype.multiply = function (e, n) {
      return e.dtype === 'complex64' || n.dtype === 'complex64' ? this.broadcastedBinaryComplexOp(e.cast('complex64'), n.cast('complex64'), function (o, a, i, s) {
        return { real: o * i - a * s, imag: o * s + a * i };
      }) : this.broadcastedBinaryOp(e, n, je(e.dtype, n.dtype), function (o, a) {
        return o * a;
      });
    }, t.prototype.realDivide = function (e, n) {
      return G([e, n], 'realDivide'), this.broadcastedBinaryOp(e, n, 'float32', function (o, a) {
        return o / a;
      });
    }, t.prototype.floorDiv = function (e, n) {
      return G([e, n], 'floorDiv'), this.broadcastedBinaryOp(e, n, 'int32', function (o, a) {
        return Math.floor(o / a);
      });
    }, t.prototype.sum = function (e, n) {
      G(e, 'sum'), ft('sum', n, e.rank);
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, je(e.dtype, 'int32')), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = 0, p = 0; p < u; ++p) d += l[f + p];
        c[h] = d;
      }
      return s;
    }, t.prototype.prod = function (e, n) {
      G(e, 'sum');
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, je(e.dtype, 'int32')), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = 1, p = 0; p < u; ++p) d *= l[f + p];
        c[h] = d;
      }
      return s;
    }, t.prototype.unsortedSegmentSum = function (e, n, o) {
      G(e, 'unsortedSegmentSum');
      for (var a = [], i = e.rank - n.rank, s = 0; s < i; ++s) n = n.expandDims(s + 1);
      for (s = 0; s < o; ++s) {
        var u = X(s, 'int32'), c = Kl(u, n).asType('float32').mul(e).sum(0);
        a.push(c);
      }
      return Et(a);
    }, t.prototype.argMin = function (e, n) {
      G(e, 'argMin');
      var o = [n];
      ft('argMin', o, e.rank);
      for (var a = $e(e.shape, o), i = a[0], s = a[1], u = Ee(i, 'int32'), c = J(s), l = this.readSync(u.dataId), h = this.readSync(e.dataId), f = 0; f < l.length; ++f) {
        for (var d = f * c, p = h[d], v = 0, m = 0; m < c; ++m) {
          var g = h[d + m];
          g < p && (p = g, v = m);
        }
        l[f] = v;
      }
      return u;
    }, t.prototype.argMax = function (e, n) {
      G(e, 'argMax');
      var o = [n];
      ft('argMax', o, e.rank);
      for (var a = $e(e.shape, o), i = a[0], s = a[1], u = Ee(i, 'int32'), c = J(s), l = this.readSync(u.dataId), h = this.readSync(e.dataId), f = 0; f < l.length; ++f) {
        for (var d = f * c, p = h[d], v = 0, m = 0; m < c; ++m) {
          var g = h[d + m];
          g > p && (p = g, v = m);
        }
        l[f] = v;
      }
      return u;
    }, t.prototype.cumsum = function (e, n, o, a) {
      if (G(e, 'cumsum'), n !== e.rank - 1) throw new Error('backend.cumsum in CPU expects an inner-most axis=' + (e.rank - 1) + ' but got axis=' + n);
      for (var i = je(e.dtype, 'int32'), s = Ee(e.shape, i), u = this.readSync(s.dataId), c = this.readSync(e.dataId), l = e.shape[e.rank - 1], h = a ? function (m, g) {
        return m + l - g - 1;
      } : function (m, g) {
        return m + g;
      }, f = 0; f < c.length; f += l) for (var d = 0; d < l; d++) {
        var p = h(f, d);
        if (d === 0) u[p] = o ? 0 : c[p]; else {
          var v = h(f, d - 1);
          u[p] = o ? c[v] + u[v] : c[p] + u[v];
        }
      }
      return s;
    }, t.prototype.equal = function (e, n) {
      return G([e, n], 'equal'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o === a ? 1 : 0;
      });
    }, t.prototype.notEqual = function (e, n) {
      return G([e, n], 'notEqual'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o !== a ? 1 : 0;
      });
    }, t.prototype.less = function (e, n) {
      return G([e, n], 'less'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o < a ? 1 : 0;
      });
    }, t.prototype.lessEqual = function (e, n) {
      return G([e, n], 'lessEqual'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o <= a ? 1 : 0;
      });
    }, t.prototype.greater = function (e, n) {
      return G([e, n], 'greater'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o > a ? 1 : 0;
      });
    }, t.prototype.greaterEqual = function (e, n) {
      return G([e, n], 'greaterEqual'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o >= a ? 1 : 0;
      });
    }, t.prototype.logicalNot = function (e) {
      G(e, 'logicalNot');
      for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) o[a] = n[a] ? 0 : 1;
      return this.makeOutput(o, e.shape, 'bool');
    }, t.prototype.logicalAnd = function (e, n) {
      return G([e, n], 'logicalAnd'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o && a;
      });
    }, t.prototype.logicalOr = function (e, n) {
      return G([e, n], 'logicalOr'), this.broadcastedBinaryOp(e, n, 'bool', function (o, a) {
        return o || a;
      });
    }, t.prototype.select = function (e, n, o) {
      G([e, n, o], 'select');
      for (var a = this.readSync(e.dataId), i = this.readSync(n.dataId), s = this.readSync(o.dataId), u = Ee(n.shape, je(n.dtype, o.dtype)), c = this.readSync(u.dataId), l = 0, h = e.rank === 0 || e.rank > 1 || n.rank === 1 ? 1 : J(n.shape.slice(1)), f = 0; f < a.length; f++) for (var d = 0; d < h; d++) a[f] === 1 ? c[l++] = i[f] : c[l++] = s[f];
      return u;
    }, t.prototype.where = function (e) {
      G([e], 'where');
      var n = this.readSync(e.dataId);
      return Zi(e.shape, n);
    }, t.prototype.topk = function (e, n, o) {
      return G(e, 'topk'), sl(this.readSync(e.dataId), e.shape, e.dtype, n);
    }, t.prototype.min = function (e, n) {
      G(e, 'min'), ft('min', n, e.rank);
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = l[f], p = 0; p < u; ++p) {
          var v = l[f + p];
          v < d && (d = v);
        }
        c[h] = d;
      }
      return s;
    }, t.prototype.minimum = function (e, n) {
      return G([e, n], 'minimum'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        return Math.min(o, a);
      });
    }, t.prototype.mod = function (e, n) {
      return G([e, n], 'mod'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        var i = o % a;
        return o < 0 && a < 0 || o >= 0 && a >= 0 ? i : (i + a) % a;
      });
    }, t.prototype.max = function (e, n) {
      G(e, 'max'), ft('max', n, e.rank);
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = l[f], p = 0; p < u; ++p) {
          var v = l[f + p];
          v > d && (d = v);
        }
        c[h] = d;
      }
      return s;
    }, t.prototype.maximum = function (e, n) {
      return G([e, n], 'maximum'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        return Math.max(o, a);
      });
    }, t.prototype.all = function (e, n) {
      G(e, 'all'), ft('all', n, e.rank);
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = l[f], p = 0; p < u; ++p) {
          var v = l[f + p];
          d = d && v;
        }
        c[h] = d;
      }
      return s;
    }, t.prototype.any = function (e, n) {
      G(e, 'any'), ft('any', n, e.rank);
      for (var o = $e(e.shape, n), a = o[0], i = o[1], s = Ee(a, e.dtype), u = J(i), c = this.readSync(s.dataId), l = this.readSync(e.dataId), h = 0; h < c.length; ++h) {
        for (var f = h * u, d = l[f], p = 0; p < u; ++p) {
          var v = l[f + p];
          d = d || v;
        }
        c[h] = d;
      }
      return s;
    }, t.prototype.squaredDifference = function (e, n) {
      return G([e, n], 'squaredDifference'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        var i = o - a;
        return i * i;
      });
    }, t.prototype.ceil = function (e) {
      G(e, 'ceil');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.ceil(n[a]);
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.floor = function (e) {
      G(e, 'floor');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.floor(n[a]);
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.sign = function (e) {
      G(e, 'x');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) n[a] < 0 ? o[a] = -1 : n[a] > 0 ? o[a] = 1 : o[a] = 0;
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.isNaN = function (e) {
      G(e, 'x');
      for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Number.isNaN(n[a]) && (o[a] = 1);
      return this.makeOutput(o, e.shape, 'bool');
    }, t.prototype.isInf = function (e) {
      G(e, 'x');
      for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Math.abs(n[a]) === 1 / 0 && (o[a] = 1);
      return this.makeOutput(o, e.shape, 'bool');
    }, t.prototype.isFinite = function (e) {
      G(e, 'x');
      for (var n = this.readSync(e.dataId), o = new Uint8Array(n.length), a = 0; a < n.length; ++a) Number.isFinite(n[a]) && (o[a] = 1);
      return this.makeOutput(o, e.shape, 'bool');
    }, t.prototype.round = function (e) {
      G(e, 'round');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
        var i = Math.floor(n[a]);
        n[a] - i < .5 ? o[a] = Math.floor(n[a]) : n[a] - i > .5 ? o[a] = Math.ceil(n[a]) : o[a] = i % 2 == 0 ? i : i + 1;
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.exp = function (e) {
      G(e, 'exp');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.exp(n[a]);
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.expm1 = function (e) {
      G(e, 'expm1');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = Math.expm1(n[a]);
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.log = function (e) {
      G(e, 'log');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
        var i = n[a];
        o[a] = Math.log(i);
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.log1p = function (e) {
      G(e, 'log1p');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
        var i = n[a];
        o[a] = Math.log1p(i);
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.sqrt = function (e) {
      G(e, 'sqrt');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
        var i = n[a];
        o[a] = Math.sqrt(i);
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.rsqrt = function (e) {
      G(e, 'rsqrt');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) {
        var i = n[a];
        o[a] = 1 / Math.sqrt(i);
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.reciprocal = function (e) {
      G(e, 'reciprocal');
      for (var n = this.readSync(e.dataId), o = new Float32Array(n.length), a = 0; a < n.length; ++a) o[a] = 1 / n[a];
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.linear = function (e) {
      return e;
    }, t.prototype.relu = function (e) {
      G(e, 'relu');
      for (var n = Ee(e.shape, e.dtype), o = this.readSync(n.dataId), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) o[i] = Math.max(0, a[i]);
      return n;
    }, t.prototype.relu6 = function (e) {
      G(e, 'relu');
      for (var n = Ee(e.shape, e.dtype), o = this.readSync(n.dataId), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) o[i] = Math.min(Math.max(0, a[i]), 6);
      return n;
    }, t.prototype.prelu = function (e, n) {
      return G([e, n], 'prelu'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        return o < 0 ? a * o : o;
      });
    }, t.prototype.elu = function (e) {
      G(e, 'elu');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) {
        var i = o[a];
        n[a] = i >= 0 ? i : Math.exp(i) - 1;
      }
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.eluDer = function (e, n) {
      G([e, n], 'eluDer');
      for (var o = new Float32Array(n.size), a = this.readSync(n.dataId), i = this.readSync(e.dataId), s = 0; s < a.length; ++s) {
        var u = a[s];
        o[s] = u >= 1 ? i[s] : i[s] * (u + 1);
      }
      return this.makeOutput(o, n.shape, 'float32');
    }, t.prototype.selu = function (e) {
      G(e, 'selu');
      for (var n = Qi, o = es, a = new Float32Array(e.size), i = this.readSync(e.dataId), s = 0; s < i.length; ++s) {
        var u = i[s];
        a[s] = u >= 0 ? o * u : n * (Math.exp(u) - 1);
      }
      return this.makeOutput(a, e.shape, 'float32');
    }, t.prototype.clip = function (e, n, o) {
      G(e, 'clip');
      for (var a = new Float32Array(e.size), i = this.readSync(e.dataId), s = 0; s < i.length; ++s) {
        var u = i[s];
        a[s] = u > o ? o : u < n ? n : u;
      }
      return this.makeOutput(a, e.shape, 'float32');
    }, t.prototype.abs = function (e) {
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.abs(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.complexAbs = function (e) {
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < e.size; ++a) {
        var i = o[2 * a], s = o[2 * a + 1];
        n[a] = Math.hypot(i, s);
      }
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.int = function (e) {
      G(e, 'int');
      for (var n = new Int32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = o[a];
      return this.makeOutput(n, e.shape, 'int32');
    }, t.prototype.sigmoid = function (e) {
      G(e, 'sigmoid');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = 1 / (1 + Math.exp(-o[a]));
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.softplus = function (e) {
      G(e, 'softplus');
      for (var n = Math.log(11920928955078125e-23) + 2, o = new Float32Array(e.size), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) {
        var s = a[i] > -n, u = a[i] < n, c = Math.exp(a[i]), l = void 0;
        l = u ? c : s ? a[i] : Math.log(1 + c), o[i] = l;
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.sin = function (e) {
      G(e, 'sin');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.sin(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.cos = function (e) {
      G(e, 'cos');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.cos(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.tan = function (e) {
      G(e, 'tan');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.tan(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.asin = function (e) {
      G(e, 'asin');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.asin(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.acos = function (e) {
      G(e, 'acos');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.acos(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.atan = function (e) {
      G(e, 'atan');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.atan(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.atan2 = function (e, n) {
      return G([e, n], 'atan2'), this.broadcastedBinaryOp(e, n, e.dtype, function (o, a) {
        return Math.atan2(o, a);
      });
    }, t.prototype.sinh = function (e) {
      G(e, 'sinh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.sinh(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.cosh = function (e) {
      G(e, 'cosh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.cosh(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.tanh = function (e) {
      G(e, 'tanh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = tc(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.asinh = function (e) {
      G(e, 'asinh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.asinh(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.acosh = function (e) {
      G(e, 'acosh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.acosh(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.atanh = function (e) {
      G(e, 'atanh');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) n[a] = Math.atanh(o[a]);
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.erf = function (e) {
      G(e, 'erf');
      for (var n = new Float32Array(e.size), o = this.readSync(e.dataId), a = 0; a < o.length; ++a) {
        var i = Math.sign(o[a]), s = Math.abs(o[a]), u = 1 / (1 + .3275911 * s);
        n[a] = i * (1 - ((((1.061405429 * u - 1.453152027) * u + 1.421413741) * u - .284496736) * u + .254829592) * u * Math.exp(-s * s));
      }
      return this.makeOutput(n, e.shape, 'float32');
    }, t.prototype.step = function (e, n) {
      n === void 0 && (n = 0), G(e, 'step');
      for (var o = new Float32Array(e.size), a = this.readSync(e.dataId), i = 0; i < a.length; ++i) {
        var s = a[i];
        isNaN(s) ? o[i] = NaN : o[i] = s > 0 ? 1 : n;
      }
      return this.makeOutput(o, e.shape, 'float32');
    }, t.prototype.fusedConv2d = function (e) {
      var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights,
        c = this.conv2d(n, o, a);
      return i && (c = this.add(c, i)), s && (c = Ga(this, c, s, u)), c;
    }, t.prototype.conv2d = function (e, n, o) {
      G([e, n], 'conv2d');
      for (var a = o.filterHeight, i = o.filterWidth, s = o.dilationHeight, u = o.dilationWidth, c = o.padInfo.left, l = o.padInfo.top, h = o.dataFormat === 'channelsLast', f = ae(o.outShape, e.dtype), d = e.strides[0], p = h ? e.strides[1] : e.strides[2], v = h ? e.strides[2] : 1, m = h ? 1 : e.strides[1], g = f.strides[0], y = h ? f.strides[1] : f.strides[2], x = h ? f.strides[2] : 1, b = h ? 1 : f.strides[1], w = this.readSync(e.dataId), _ = this.readSync(n.dataId), S = f.values, E = 0; E < o.batchSize; ++E) for (var I = E * d, R = E * g, F = 0; F < o.outHeight; ++F) for (var D = R + F * y, L = F * o.strideHeight - l, B = 0; B < a; B++) {
        var W = L + B * s;
        if (!(W < 0 || W >= o.inHeight)) for (var V = B * n.strides[0], z = I + W * p, U = 0; U < o.outWidth; ++U) for (var q = D + U * x, P = U * o.strideWidth - c, H = 0; H < i; H++) {
          var j = P + H * u;
          if (!(j < 0 || j >= o.inWidth)) for (var te = z + j * v, se = V + H * n.strides[1], ue = 0; ue < o.inChannels; ++ue) {
            for (var he = w[te + ue * m], ve = 0; ve < o.outChannels; ++ve) S[q + ve * b] += he * _[se + ve];
            se += o.outChannels;
          }
        }
      }
      return f.toTensor();
    },t.prototype.conv3d = function (e, n, o) {
      for (var a = o.filterDepth, i = o.filterHeight, s = o.filterWidth, u = o.dilationDepth, c = o.dilationHeight, l = o.dilationWidth, h = o.padInfo.front, f = o.padInfo.left, d = o.padInfo.top, p = ae(o.outShape, e.dtype), v = this.readSync(e.dataId), m = this.readSync(n.dataId), g = p.values, y = 0; y < o.batchSize; ++y) for (var x = y * e.strides[0], b = y * p.strides[0], w = 0; w < o.outDepth; ++w) for (var _ = b + w * p.strides[1], S = w * o.strideDepth - h, E = 0; E < a; E++) {
        var I = S + E * u;
        if (!(I < 0 || I >= o.inDepth)) for (var R = E * n.strides[0], F = x + I * e.strides[1], D = 0; D < o.outHeight; ++D) for (var L = _ + D * p.strides[2], B = D * o.strideHeight - d, W = 0; W < i; W++) {
          var V = B + W * c;
          if (!(V < 0 || V >= o.inHeight)) for (var z = R + W * n.strides[1], U = F + V * e.strides[2], q = 0; q < o.outWidth; ++q) for (var P = L + q * o.outChannels, H = q * o.strideWidth - f, j = 0; j < s; j++) {
            var te = H + j * l;
            if (!(te < 0 || te >= o.inWidth)) for (var se = z + j * n.strides[2], ue = U + te * o.inChannels, he = se, ve = 0; ve < o.inChannels; ++ve) {
              for (var fe = v[ue + ve], me = 0; me < o.outChannels; ++me) g[P + me] += fe * m[he + me];
              he += o.outChannels;
            }
          }
        }
      }
      return p.toTensor();
    },t.prototype.conv2dDerInput = function (e, n, o) {
      G([e, n], 'conv2dDerInput');
      for (var a = ae(o.inShape, 'float32'), i = a.values, s = this.readSync(e.dataId), u = this.readSync(n.dataId), c = n.strides, l = c[0], h = c[1], f = c[2], d = o.batchSize, p = o.filterHeight, v = o.filterWidth, m = o.inChannels, g = o.inHeight, y = o.inWidth, x = o.outChannels, b = o.outHeight, w = o.outWidth, _ = o.strideHeight, S = o.strideWidth, E = o.dataFormat, I = p - 1 - o.padInfo.top, R = v - 1 - o.padInfo.left, F = E === 'channelsLast', D = a.strides[0], L = F ? a.strides[1] : a.strides[2], B = F ? a.strides[2] : 1, W = F ? 1 : a.strides[1], V = e.strides[0], z = F ? e.strides[1] : e.strides[2], U = F ? e.strides[2] : 1, q = F ? 1 : e.strides[1], P = 0; P < d; ++P) for (var H = 0; H < m; ++H) for (var j = 0; j < g; ++j) for (var te = j - I, se = Math.max(0, Math.ceil(te / _)), ue = Math.min(b, (p + te) / _), he = 0; he < y; ++he) {
        for (var ve = he - R, fe = Math.max(0, Math.ceil(ve / S)), me = Math.min(w, (v + ve) / S), Me = 0, de = se; de < ue; ++de) for (var _e = de * _ - te, ye = fe; ye < me; ++ye) for (var Fe = V * P + z * de + U * ye, Ie = l * (p - 1 - _e) + h * (v - 1 - (ye * S - ve)) + f * H, Re = 0; Re < x; ++Re) Me += s[Fe + q * Re] * u[Ie + Re];
        i[D * P + L * j + B * he + W * H] = Me;
      }
      return a.toTensor();
    },t.prototype.conv3dDerInput = function (e, n, o) {
      for (var a = ae(o.inShape, 'float32'), i = a.values, s = a.strides, u = s[0], c = s[1], l = s[2], h = s[3], f = this.readSync(e.dataId), d = e.strides, p = d[0], v = d[1], m = d[2], g = d[3], y = this.readSync(n.dataId), x = n.strides, b = x[0], w = x[1], _ = x[2], S = x[3], E = o.batchSize, I = o.filterDepth, R = o.filterHeight, F = o.filterWidth, D = o.inChannels, L = o.inDepth, B = o.inHeight, W = o.inWidth, V = o.outChannels, z = o.outDepth, U = o.outHeight, q = o.outWidth, P = o.strideDepth, H = o.strideHeight, j = o.strideWidth, te = I - 1 - o.padInfo.front, se = R - 1 - o.padInfo.top, ue = F - 1 - o.padInfo.left, he = 0; he < E; ++he) for (var ve = 0; ve < D; ++ve) for (var fe = 0; fe < L; ++fe) for (var me = fe - te, Me = Math.max(0, Math.ceil(me / P)), de = Math.min(z, (I + me) / P), _e = 0; _e < B; ++_e) for (var ye = _e - se, Fe = Math.max(0, Math.ceil(ye / H)), Ie = Math.min(U, (R + ye) / H), Re = 0; Re < W; ++Re) {
        for (var Lt = Re - ue, Wt = Math.max(0, Math.ceil(Lt / j)), gt = Math.min(q, (F + Lt) / j), or = 0, en = Me; en < de; ++en) for (var bn = en * P - me, tn = Fe; tn < Ie; ++tn) for (var ar = tn * H - ye, nn = Wt; nn < gt; ++nn) for (var ka = p * he + v * en + m * tn + g * nn, ir = b * (I - 1 - bn) + w * (R - 1 - ar) + _ * (F - 1 - (nn * j - Lt)) + S * ve, Ut = 0; Ut < V; ++Ut) or += f[ka + Ut] * y[ir + Ut];
        i[u * he + c * fe + l * _e + h * Re + ve] = or;
      }
      return a.toTensor();
    },t.prototype.conv2dDerFilter = function (e, n, o) {
      G([e, n], 'conv2dDerFilter');
      for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = o.dataFormat === 'channelsLast', l = ae(o.filterShape, 'float32'), h = o.padInfo.left, f = o.padInfo.top, d = this.bufferSync(e), p = this.bufferSync(n), v = 0; v < s; ++v) for (var m = Math.max(0, Math.ceil((f - v) / a)), g = Math.min(o.outHeight, (o.inHeight + f - v) / a), y = 0; y < u; ++y) for (var x = Math.max(0, Math.ceil((h - y) / i)), b = Math.min(o.outWidth, (o.inWidth + h - y) / i), w = 0; w < o.inChannels; ++w) for (var _ = 0; _ < o.outChannels; ++_) {
        for (var S = 0, E = 0; E < o.batchSize; ++E) for (var I = m; I < g; ++I) for (var R = v + I * a - f, F = x; F < b; ++F) {
          var D = y + F * i - h;
          S += c ? d.get(E, R, D, w) * p.get(E, I, F, _) : d.get(E, w, R, D) * p.get(E, _, I, F);
        }
        l.set(S, v, y, w, _);
      }
      return l.toTensor();
    },t.prototype.conv3dDerFilter = function (e, n, o) {
      for (var a = o.strideDepth, i = o.strideHeight, s = o.strideWidth, u = o.filterDepth, c = o.filterHeight, l = o.filterWidth, h = ae(o.filterShape, 'float32'), f = h.values, d = h.strides, p = d[0], v = d[1], m = d[2], g = d[3], y = this.readSync(n.dataId), x = n.strides, b = x[0], w = x[1], _ = x[2], S = x[3], E = this.readSync(e.dataId), I = e.strides, R = I[0], F = I[1], D = I[2], L = I[3], B = o.padInfo.front, W = o.padInfo.left, V = o.padInfo.top, z = 0; z < u; ++z) for (var U = Math.max(0, Math.ceil((B - z) / a)), q = Math.min(o.outDepth, (o.inDepth + B - z) / a), P = z * p, H = 0; H < c; ++H) for (var j = Math.max(0, Math.ceil((V - H) / i)), te = Math.min(o.outHeight, (o.inHeight + V - H) / i), se = H * v + P, ue = 0; ue < l; ++ue) for (var he = Math.max(0, Math.ceil((W - ue) / s)), ve = Math.min(o.outWidth, (o.inWidth + W - ue) / s), fe = ue * m + se, me = 0; me < o.inChannels; ++me) for (var Me = me * g + fe, de = 0; de < o.outChannels; ++de) {
        for (var _e = 0, ye = 0; ye < o.batchSize; ++ye) for (var Fe = ye * R, Ie = ye * b, Re = U; Re < q; ++Re) for (var Lt = (z + Re * a - B) * F + Fe, Wt = Re * w + Ie, gt = j; gt < te; ++gt) for (var or = (H + gt * i - V) * D + Lt, en = gt * _ + Wt, bn = he; bn < ve; ++bn) {
          var tn = bn * S + en;
          _e += E[(ue + bn * s - W) * L + or + me] * y[tn + de];
        }
        f[Me + de] = _e;
      }
      return h.toTensor();
    },t.prototype.fusedDepthwiseConv2D = function (e) {
      var n = e.input, o = e.filter, a = e.convInfo, i = e.bias, s = e.activation, u = e.preluActivationWeights,
        c = this.depthwiseConv2D(n, o, a);
      return i && (c = this.add(c, i)), s && (c = Ga(this, c, s, u)), c;
    },t.prototype.depthwiseConv2D = function (e, n, o) {
      G([e, n], 'depthwiseConv2D');
      for (var a = o.filterHeight, i = o.filterWidth, s = o.dilationHeight, u = o.dilationWidth, c = o.padInfo.left, l = o.padInfo.top, h = o.outChannels / o.inChannels, f = ae(o.outShape, e.dtype), d = this.readSync(e.dataId), p = this.readSync(n.dataId), v = f.values, m = 0; m < o.batchSize; ++m) for (var g = m * e.strides[0], y = m * f.strides[0], x = 0; x < o.outHeight; ++x) for (var b = y + x * f.strides[1], w = x * o.strideHeight - c, _ = 0; _ < a; ++_) {
        var S = w + _ * s;
        if (!(S < 0 || S >= o.inHeight)) for (var E = _ * n.strides[0], I = g + S * e.strides[1], R = 0; R < o.outWidth; ++R) for (var F = b + R * f.strides[2], D = R * o.strideWidth - l, L = 0; L < i; ++L) {
          var B = D + L * u;
          if (!(B < 0 || B >= o.inWidth)) for (var W = E + L * n.strides[1], V = I + B * o.inChannels, z = F, U = W, q = 0; q < o.inChannels; ++q) {
            for (var P = d[V + q], H = 0; H < h; ++H) v[z + H] += P * p[U + H];
            z += h, U += h;
          }
        }
      }
      return f.toTensor();
    },t.prototype.depthwiseConv2DDerInput = function (e, n, o) {
      G([e, n], 'depthwiseConv2DDerInput');
      for (var a = ae(o.inShape, 'float32'), i = a.values, s = a.strides, u = s[0], c = s[1], l = s[2], h = this.readSync(e.dataId), f = e.strides, d = f[0], p = f[1], v = f[2], m = this.readSync(n.dataId), g = n.strides, y = g[0], x = g[1], b = g[2], w = o.batchSize, _ = o.filterHeight, S = o.filterWidth, E = o.inChannels, I = o.inHeight, R = o.inWidth, F = o.outChannels, D = o.outHeight, L = o.outWidth, B = o.strideHeight, W = o.strideWidth, V = _ - 1 - o.padInfo.top, z = S - 1 - o.padInfo.left, U = F / E, q = 0; q < w; ++q) for (var P = 0; P < E; ++P) for (var H = 0; H < I; ++H) for (var j = H - V, te = Math.max(0, Math.ceil(j / B)), se = Math.min(D, (_ + j) / B), ue = 0; ue < R; ++ue) {
        for (var he = ue - z, ve = Math.max(0, Math.ceil(he / W)), fe = Math.min(L, (S + he) / W), me = 0, Me = te; Me < se; ++Me) for (var de = Me * B - j, _e = ve; _e < fe; ++_e) for (var ye = d * q + p * Me + v * _e, Fe = y * (_ - 1 - de) + x * (S - 1 - (_e * W - he)) + b * P, Ie = 0; Ie < U; ++Ie) me += h[ye + (P * U + Ie)] * m[Fe + Ie];
        i[u * q + c * H + l * ue + P] = me;
      }
      return a.toTensor();
    },t.prototype.depthwiseConv2DDerFilter = function (e, n, o) {
      G([e, n], 'depthwiseConv2DDerFilter');
      for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = ae(o.filterShape, 'float32'), l = o.padInfo.left, h = o.padInfo.top, f = o.outChannels / o.inChannels, d = this.bufferSync(e), p = this.bufferSync(n), v = 0; v < s; ++v) for (var m = Math.max(0, Math.ceil((h - v) / a)), g = Math.min(o.outHeight, (o.inHeight + h - v) / a), y = 0; y < u; ++y) for (var x = Math.max(0, Math.ceil((l - y) / i)), b = Math.min(o.outWidth, (o.inWidth + l - y) / i), w = 0; w < o.outChannels; ++w) {
        for (var _ = Math.trunc(w / f), S = w % f, E = 0, I = 0; I < o.batchSize; ++I) for (var R = m; R < g; ++R) for (var F = v + R * a - h, D = x; D < b; ++D) {
          var L = y + D * i - l;
          E += d.get(I, F, L, _) * p.get(I, R, D, w);
        }
        c.set(E, v, y, _, S);
      }
      return c.toTensor();
    },t.prototype.tile = function (e, n) {
      return G(e, 'tile'), il(this.bufferSync(e), n);
    },t.prototype.pad = function (e, n, o) {
      G(e, 'pad');
      var a = n.map(function (f, d) {
        return f[0] + e.shape[d] + f[1];
      }), i = n.map(function (f) {
        return f[0];
      }), s = this.bufferSync(e), u = ae(a, e.dtype);
      o !== 0 && u.values.fill(o);
      for (var c = 0; c < e.size; c++) {
        var l = s.indexToLoc(c), h = l.map(function (f, d) {
          return f + i[d];
        });
        u.set.apply(u, [s.get.apply(s, l)].concat(h));
      }
      return u.toTensor();
    },t.prototype.transpose = function (e, n) {
      G(e, 'transpose');
      for (var o = new Array(e.rank), a = 0; a < o.length; a++) o[a] = e.shape[n[a]];
      var i = this.readSync(e.dataId), s = ae(o, e.dtype), u = this.bufferSync(e);
      for (a = 0; a < e.size; ++a) {
        for (var c = u.indexToLoc(a), l = new Array(c.length), h = 0; h < l.length; h++) l[h] = c[n[h]];
        var f = s.locToIndex(l);
        s.values[f] = i[a];
      }
      return s.toTensor();
    },t.prototype.gather = function (e, n, o) {
      G([e, n], 'gather');
      var a = e.shape.slice(), i = this.readSync(n.dataId);
      a[o] = i.length;
      for (var s = ae(a, e.dtype), u = this.bufferSync(e), c = 0; c < s.size; ++c) {
        var l = s.indexToLoc(c), h = l.slice();
        h[o] = i[l[o]];
        var f = u.locToIndex(h);
        s.values[c] = u.values[f];
      }
      return s.toTensor();
    },t.prototype.batchToSpaceND = function (e, n, o) {
      G([e], 'batchToSpaceND');
      var a = n.reduce(function (h, f) {
          return h * f;
        }), i = jo(e.shape, n, a), s = Xo(i.length, n.length), u = Ko(e.shape, n, a), c = Yc(o, n.length),
        l = $c(u, o, n.length);
      return e.reshape(i).transpose(s).reshape(u).slice(c, l);
    },t.prototype.spaceToBatchND = function (e, n, o) {
      G([e], 'spaceToBatchND');
      var a = n.reduce(function (f, d) {
        return f * d;
      }), i = [[0, 0]];
      i.push.apply(i, o);
      for (var s = 1 + n.length; s < e.shape.length; ++s) i.push([0, 0]);
      var u = e.pad(i), c = jo(u.shape, n, a, !1), l = Xo(c.length, n.length, !1), h = Ko(u.shape, n, a, !1);
      return u.reshape(c).transpose(l).reshape(h);
    },t.prototype.pool = function (e, n, o) {
      G(e, 'pool');
      for (var a = n.strideHeight, i = n.strideWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, h = n.padInfo.top, f = n.padInfo.left, d = o === 'max' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, p = this.readSync(e.dataId), v = ae(n.outShape, e.dtype), m = v.values, g = n.outShape[1] * n.outShape[2] * n.outShape[3], y = n.outShape[2] * n.outShape[3], x = n.outShape[3], b = 0; b < n.batchSize; ++b) for (var w = b * g, _ = b * e.strides[0], S = 0; S < n.inChannels; ++S) for (var E = 0; E < n.outHeight; ++E) for (var I = E * a - h, R = Math.max(0, I), F = Math.min(n.inHeight, c + I), D = w + E * y, L = 0; L < n.outWidth; ++L) {
        for (var B = L * i - f, W = Math.max(0, B), V = Math.min(n.inWidth, l + B), z = d, U = 0, q = 0, P = R; P < F; P += s) {
          for (var H = _ + P * e.strides[1], j = W; j < V; j += u) {
            var te = p[H + j * e.strides[2] + S];
            o === 'max' && te > z ? z = te : o === 'avg' && (U += te, q++);
          }
          if (isNaN(z)) break;
        }
        m[D + L * x + S] = o === 'avg' ? U / q : z;
      }
      return v.toTensor();
    },t.prototype.maxPool = function (e, n) {
      return this.pool(e, n, 'max');
    },t.prototype.maxPoolPositions = function (e, n) {
      for (var o = ae(n.outShape, 'int32'), a = n.strideHeight, i = n.strideWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, h = n.padInfo.top, f = n.padInfo.left, d = this.bufferSync(e), p = 0; p < n.batchSize; ++p) for (var v = 0; v < n.inChannels; ++v) for (var m = 0; m < n.outHeight; ++m) {
        for (var g = m * a - h, y = g; y < 0;) y += s;
        for (var x = Math.min(n.inHeight, c + g), b = 0; b < n.outWidth; ++b) {
          for (var w = b * i - f, _ = w; _ < 0;) _ += u;
          for (var S = Math.min(n.inWidth, l + w), E = Number.NEGATIVE_INFINITY, I = -1, R = y; R < x; R += s) for (var F = R - g, D = _; D < S; D += u) {
            var L = D - w, B = d.get(p, R, D, v);
            B > E && (E = B, I = F * l + L);
          }
          o.set(I, p, m, b, v);
        }
      }
      return o.toTensor();
    },t.prototype.maxPoolBackprop = function (e, n, o, a) {
      G([n, o], 'maxPoolBackprop');
      for (var i = this.maxPoolPositions(n, a), s = a.strideHeight, u = a.strideWidth, c = a.dilationHeight, l = a.dilationWidth, h = a.effectiveFilterHeight, f = a.effectiveFilterWidth, d = f - 1 - a.padInfo.left, p = h - 1 - a.padInfo.top, v = ae(n.shape, 'float32'), m = this.bufferSync(i), g = this.bufferSync(e), y = 0; y < a.batchSize; ++y) for (var x = 0; x < a.inChannels; ++x) for (var b = 0; b < a.inHeight; ++b) for (var w = 0; w < a.inWidth; ++w) {
        for (var _ = b - p, S = w - d, E = 0, I = 0; I < h; I += c) {
          var R = (_ + I) / s;
          if (!(R < 0 || R >= a.outHeight || Math.floor(R) !== R)) for (var F = 0; F < f; F += l) {
            var D = (S + F) / u;
            if (!(D < 0 || D >= a.outWidth || Math.floor(D) !== D)) {
              var L = h * f - 1 - m.get(y, R, D, x) === I * f + F ? 1 : 0;
              L !== 0 && (E += g.get(y, R, D, x) * L);
            }
          }
        }
        v.set(E, y, b, w, x);
      }
      return v.toTensor();
    },t.prototype.avgPoolBackprop = function (e, n, o) {
      G([e, n], 'avgPoolBackprop');
      for (var a = o.strideHeight, i = o.strideWidth, s = o.filterHeight, u = o.filterWidth, c = o.dilationHeight, l = o.dilationWidth, h = o.effectiveFilterHeight, f = o.effectiveFilterWidth, d = f - 1 - o.padInfo.left, p = h - 1 - o.padInfo.top, v = ae(n.shape, 'float32'), m = 1 / (s * u), g = this.bufferSync(e), y = 0; y < o.batchSize; ++y) for (var x = 0; x < o.inChannels; ++x) for (var b = 0; b < o.inHeight; ++b) for (var w = 0; w < o.inWidth; ++w) {
        for (var _ = b - p, S = w - d, E = 0, I = 0; I < h; I += c) {
          var R = (_ + I) / a;
          if (!(R < 0 || R >= o.outHeight || Math.floor(R) !== R)) for (var F = 0; F < f; F += l) {
            var D = (S + F) / i;
            D < 0 || D >= o.outWidth || Math.floor(D) !== D || (E += g.get(y, R, D, x));
          }
        }
        v.set(E * m, y, b, w, x);
      }
      return v.toTensor();
    },t.prototype.pool3d = function (e, n, o) {
      G(e, 'pool3d');
      for (var a = n.strideDepth, i = n.strideHeight, s = n.strideWidth, u = n.dilationDepth, c = n.dilationHeight, l = n.dilationWidth, h = n.effectiveFilterDepth, f = n.effectiveFilterHeight, d = n.effectiveFilterWidth, p = n.padInfo.front, v = n.padInfo.top, m = n.padInfo.left, g = o === 'max' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, y = this.readSync(e.dataId), x = ae(n.outShape, e.dtype), b = x.values, w = n.outShape[1] * n.outShape[2] * n.outShape[3] * n.outShape[4], _ = n.outShape[2] * n.outShape[3] * n.outShape[4], S = n.outShape[3] * n.outShape[4], E = n.outShape[4], I = 0; I < n.batchSize; ++I) for (var R = I * w, F = I * e.strides[0], D = 0; D < n.inChannels; ++D) for (var L = 0; L < n.outDepth; ++L) {
        for (var B = L * a - p, W = B; W < 0;) W += u;
        for (var V = Math.min(n.inDepth, h + B), z = R + L * _, U = 0; U < n.outHeight; ++U) {
          for (var q = U * i - v, P = q; P < 0;) P += c;
          for (var H = Math.min(n.inHeight, f + q), j = z + U * S, te = 0; te < n.outWidth; ++te) {
            for (var se = te * s - m, ue = se; ue < 0;) ue += l;
            for (var he = Math.min(n.inWidth, d + se), ve = j + te * E, fe = g, me = 0, Me = 0, de = W; de < V; de += u) {
              for (var _e = F + de * e.strides[1], ye = P; ye < H; ye += c) {
                for (var Fe = _e + ye * e.strides[2], Ie = ue; Ie < he; Ie += l) {
                  var Re = y[Fe + Ie * e.strides[3] + D];
                  if (o === 'max' && Re > fe ? fe = Re : o === 'avg' && (me += Re, Me++), isNaN(fe)) break;
                }
                if (isNaN(fe)) break;
              }
              if (isNaN(fe)) break;
            }
            b[ve + D] = o === 'avg' ? me / Me : fe;
          }
        }
      }
      return x.toTensor();
    },t.prototype.avgPool3d = function (e, n) {
      return G(e, 'avgPool3d'), this.pool3d(e, n, 'avg').toFloat();
    },t.prototype.avgPool3dBackprop = function (e, n, o) {
      G([e, n], 'avgPool3dBackprop');
      for (var a = o.strideDepth, i = o.strideHeight, s = o.strideWidth, u = o.filterDepth, c = o.filterHeight, l = o.filterWidth, h = o.dilationDepth, f = o.dilationHeight, d = o.dilationWidth, p = o.effectiveFilterDepth, v = o.effectiveFilterHeight, m = o.effectiveFilterWidth, g = p - 1 - o.padInfo.front, y = m - 1 - o.padInfo.left, x = v - 1 - o.padInfo.top, b = ae(n.shape, 'float32'), w = 1 / (u * c * l), _ = this.bufferSync(e), S = 0; S < o.batchSize; ++S) for (var E = 0; E < o.inChannels; ++E) for (var I = 0; I < o.inDepth; ++I) for (var R = 0; R < o.inHeight; ++R) for (var F = 0; F < o.inWidth; ++F) {
        for (var D = I - g, L = R - x, B = F - y, W = 0, V = 0; V < p; V += h) {
          var z = (D + V) / a;
          if (!(z < 0 || z >= o.outDepth || Math.floor(z) !== z)) for (var U = 0; U < v; U += f) {
            var q = (L + U) / i;
            if (!(q < 0 || q >= o.outHeight || Math.floor(q) !== q)) for (var P = 0; P < m; P += d) {
              var H = (B + P) / s;
              H < 0 || H >= o.outWidth || Math.floor(H) !== H || (W += _.get(S, z, q, H, E));
            }
          }
        }
        b.set(W * w, S, I, R, F, E);
      }
      return b.toTensor();
    },t.prototype.maxPool3d = function (e, n) {
      return G(e, 'maxPool3d'), this.pool3d(e, n, 'max').toFloat();
    },t.prototype.maxPool3dPositions = function (e, n) {
      for (var o = ae(n.outShape, 'int32'), a = n.strideDepth, i = n.strideHeight, s = n.strideWidth, u = n.dilationDepth, c = n.dilationHeight, l = n.dilationWidth, h = n.effectiveFilterDepth, f = n.effectiveFilterHeight, d = n.effectiveFilterWidth, p = n.padInfo.front, v = n.padInfo.top, m = n.padInfo.left, g = this.bufferSync(e), y = 0; y < n.batchSize; ++y) for (var x = 0; x < n.inChannels; ++x) for (var b = 0; b < n.outDepth; ++b) {
        for (var w = b * a - p, _ = w; _ < 0;) _ += u;
        for (var S = Math.min(n.inDepth, h + w), E = 0; E < n.outHeight; ++E) {
          for (var I = E * i - v, R = I; R < 0;) R += c;
          for (var F = Math.min(n.inHeight, f + I), D = 0; D < n.outWidth; ++D) {
            for (var L = D * s - m, B = L; B < 0;) B += l;
            for (var W = Math.min(n.inWidth, d + L), V = Number.NEGATIVE_INFINITY, z = -1, U = _; U < S; U += u) for (var q = U - w, P = R; P < F; P += c) for (var H = P - I, j = B; j < W; j += l) {
              var te = j - L, se = g.get(y, U, P, j, x);
              se >= V && (V = se, z = q * f * d + H * f + te);
            }
            o.set(z, y, b, E, D, x);
          }
        }
      }
      return o.toTensor();
    },t.prototype.maxPool3dBackprop = function (e, n, o, a) {
      G([n, o], 'maxPool3dBackprop');
      for (var i = this.maxPool3dPositions(n, a), s = a.strideDepth, u = a.strideHeight, c = a.strideWidth, l = a.dilationDepth, h = a.dilationHeight, f = a.dilationWidth, d = a.effectiveFilterDepth, p = a.effectiveFilterHeight, v = a.effectiveFilterWidth, m = d - 1 - a.padInfo.front, g = v - 1 - a.padInfo.left, y = p - 1 - a.padInfo.top, x = ae(n.shape, 'float32'), b = this.bufferSync(i), w = this.bufferSync(e), _ = 0; _ < a.batchSize; ++_) for (var S = 0; S < a.inChannels; ++S) for (var E = 0; E < a.inDepth; ++E) for (var I = 0; I < a.inHeight; ++I) for (var R = 0; R < a.inWidth; ++R) {
        for (var F = E - m, D = I - y, L = R - g, B = 0, W = 0; W < d; W += l) {
          var V = (F + W) / s;
          if (!(V < 0 || V >= a.outDepth || Math.floor(V) !== V)) for (var z = 0; z < p; z += h) {
            var U = (D + z) / u;
            if (!(U < 0 || U >= a.outHeight || Math.floor(U) !== U)) for (var q = 0; q < v; q += f) {
              var P = (L + q) / c;
              if (!(P < 0 || P >= a.outWidth || Math.floor(P) !== P)) {
                var H = d * p * v - 1 - b.get(_, V, U, P, S) === W * p * v + z * v + q ? 1 : 0;
                H !== 0 && (B += w.get(_, V, U, P, S) * H);
              }
            }
          }
        }
        x.set(B, _, E, I, R, S);
      }
      return x.toTensor();
    },t.prototype.cast = function (e, n) {
      return Xi(e, n, this);
    },t.prototype.reshape = function (e, n) {
      return $o(e, n);
    },t.prototype.avgPool = function (e, n) {
      return G(e, 'avgPool'), this.pool(e, n, 'avg').toFloat();
    },t.prototype.resizeBilinear = function (e, n, o, a) {
      G(e, 'resizeBilinear');
      for (var i = e.shape, s = i[0], u = i[1], c = i[2], l = i[3], h = this.readSync(e.dataId), f = new Float32Array(J([s, n, o, l])), d = [a && n > 1 ? u - 1 : u, a && o > 1 ? c - 1 : c], p = [a && n > 1 ? n - 1 : n, a && o > 1 ? o - 1 : o], v = 0, m = d[0] / p[0], g = d[1] / p[1], y = 0; y < s; y++) for (var x = 0; x < n; x++) for (var b = m * x, w = Math.floor(b), _ = b - w, S = Math.min(u - 1, Math.ceil(b)), E = y * e.strides[0] + w * e.strides[1], I = y * e.strides[0] + S * e.strides[1], R = 0; R < o; R++) for (var F = g * R, D = Math.floor(F), L = F - D, B = Math.min(c - 1, Math.ceil(F)), W = E + D * e.strides[2], V = I + D * e.strides[2], z = E + B * e.strides[2], U = I + B * e.strides[2], q = 0; q < l; q++) {
        var P = h[W + q], H = h[V + q], j = P + (h[z + q] - P) * L, te = j + (H + (h[U + q] - H) * L - j) * _;
        f[v++] = te;
      }
      return Ze(f, [s, n, o, l]);
    },t.prototype.resizeBilinearBackprop = function (e, n, o) {
      G([e, n], 'resizeBilinearBackprop');
      for (var a = n.shape, i = a[0], s = a[1], u = a[2], c = a[3], l = e.shape, h = l[1], f = l[2], d = new Float32Array(i * s * u * c), p = [o && h > 1 ? s - 1 : s, o && f > 1 ? u - 1 : u], v = [o && h > 1 ? h - 1 : h, o && f > 1 ? f - 1 : f], m = p[0] / v[0], g = p[1] / v[1], y = this.readSync(e.dataId), x = 0, b = 0; b < i; b++) for (var w = b * n.strides[0], _ = 0; _ < h; _++) for (var S = _ * m, E = Math.floor(S), I = Math.min(Math.ceil(S), s - 1), R = w + E * n.strides[1], F = w + I * n.strides[1], D = S - E, L = 1 - D, B = 0; B < f; B++) for (var W = B * g, V = Math.floor(W), z = Math.min(Math.ceil(W), u - 1), U = W - V, q = 1 - U, P = R + V * n.strides[2], H = R + z * n.strides[2], j = F + V * n.strides[2], te = F + z * n.strides[2], se = L * q, ue = L * U, he = D * q, ve = D * U, fe = 0; fe < c; fe++) {
        var me = y[x++];
        d[P + fe] += me * se, d[H + fe] += me * ue, d[j + fe] += me * he, d[te + fe] += me * ve;
      }
      return dt(d, [i, u, s, c], n.dtype);
    },t.prototype.resizeNearestNeighbor = function (e, n, o, a) {
      G(e, 'resizeNearestNeighbor');
      for (var i = e.shape, s = i[0], u = i[1], c = i[2], l = i[3], h = this.readSync(e.dataId), f = new Float32Array(s * n * o * l), d = [a && n > 1 ? u - 1 : u, a && o > 1 ? c - 1 : c], p = [a && n > 1 ? n - 1 : n, a && o > 1 ? o - 1 : o], v = d[0] / p[0], m = d[1] / p[1], g = 0, y = 0; y < s; y++) for (var x = y * e.strides[0], b = 0; b < n; b++) for (var w = v * b, _ = x + Math.min(u - 1, a ? Math.round(w) : Math.floor(w)) * e.strides[1], S = 0; S < o; S++) for (var E = m * S, I = _ + Math.min(c - 1, a ? Math.round(E) : Math.floor(E)) * e.strides[2], R = 0; R < l; R++) {
        var F = h[I + R];
        f[g++] = F;
      }
      return Ze(f, [s, n, o, l], e.dtype);
    },t.prototype.resizeNearestNeighborBackprop = function (e, n, o) {
      G([e, n], 'resizeNearestNeighborBackprop');
      for (var a = n.shape, i = a[0], s = a[1], u = a[2], c = a[3], l = e.shape, h = l[1], f = l[2], d = new Float32Array(i * s * u * c), p = this.readSync(e.dataId), v = [o && h > 1 ? s - 1 : s, o && f > 1 ? u - 1 : u], m = [o && h > 1 ? h - 1 : h, o && f > 1 ? f - 1 : f], g = v[0] / m[0], y = v[1] / m[1], x = 1 / g, b = 1 / y, w = 2 * Math.ceil(x) + 2, _ = 2 * Math.ceil(b) + 2, S = 0; S < i; S++) for (var E = S * n.strides[0], I = 0; I < s; I++) for (var R = E + I * n.strides[1], F = Math.floor(I * x), D = Math.floor(F - w / 2), L = 0; L < u; L++) for (var B = R + L * n.strides[2], W = Math.floor(L * b), V = Math.floor(W - _ / 2), z = 0; z < c; z++) {
        for (var U = 0, q = 0; q < w; q++) {
          var P = q + D;
          if (!(P < 0 || P >= h)) {
            var H = E + P * e.strides[1], j = P * g;
            if (I === Math.min(s - 1, o ? Math.round(j) : Math.floor(j))) for (var te = 0; te < _; te++) {
              var se = te + V;
              if (!(se < 0 || se >= f)) {
                var ue = H + se * e.strides[2], he = se * y;
                L === Math.min(u - 1, o ? Math.round(he) : Math.floor(he)) && (U += p[ue + z]);
              }
            }
          }
        }
        d[B + z] = U;
      }
      return dt(d, n.shape, n.dtype);
    },t.prototype.batchNormalization = function (e, n, o, a, i, s) {
      G([e, n, o, i, s], 'batchNorm');
      for (var u = this.readSync(e.dataId), c = this.readSync(n.dataId), l = this.readSync(o.dataId), h = i ? this.readSync(i.dataId) : new Float32Array([1]), f = s ? this.readSync(s.dataId) : new Float32Array([0]), d = new Float32Array(u.length), p = f.length, v = h.length, m = l.length, g = c.length, y = 0, x = 0, b = 0, w = 0, _ = 0; _ < u.length; ++_) d[_] = f[y++] + (u[_] - c[x++]) * h[b++] / Math.sqrt(l[w++] + a), y >= p && (y = 0), x >= g && (x = 0), b >= v && (b = 0), w >= m && (w = 0);
      return dt(d, e.shape);
    },t.prototype.localResponseNormalization4D = function (e, n, o, a, i) {
      G(e, 'localResponseNormalization4D');
      var s = e.shape[3], u = s - 1, c = this.readSync(e.dataId), l = e.size, h = new Float32Array(l);

      function f(m) {
        for (var g = m % s, y = m - g + Math.max(0, g - n), x = m - g + Math.min(g + n, u), b = 0; y <= x; y++) {
          var w = c[y];
          b += w * w;
        }
        return b;
      }

      for (var d = 0; d < l; d++) {
        var p = f(d), v = c[d] * Math.pow(o + a * p, -i);
        h[d] = v;
      }
      return dt(h, e.shape);
    },t.prototype.LRNGrad = function (e, n, o, a, i, s, u) {
      G(e, 'LRNGrad');
      for (var c = e.shape[3], l = this.readSync(e.dataId), h = this.readSync(n.dataId), f = this.readSync(o.dataId), d = new Float32Array(e.size), p = e.size, v = 0; v < p; v++) {
        for (var m = v % c, g = v - m + Math.max(0, m - a), y = v - m + Math.min(c, m + a + 1), x = 0, b = g; b < y; b++) x += Math.pow(h[b], 2);
        for (x = s * x + i, b = g; b < y; b++) {
          var w = -2 * s * u * h[b] * f[v] / x;
          v === b && (w += Math.pow(x, -u)), w *= l[v], d[b] += w;
        }
      }
      return dt(d, e.shape);
    },t.prototype.multinomial = function (e, n, o, a) {
      G(e, 'multinomial');
      for (var i = n ? e : pn(e), s = i.shape[0], u = i.shape[1], c = Ee([s, o], 'int32'), l = this.readSync(c.dataId), h = this.readSync(i.dataId), f = 0; f < s; ++f) {
        var d = f * u, p = new Float32Array(u - 1);
        p[0] = h[d];
        for (var v = 1; v < p.length; ++v) p[v] = p[v - 1] + h[d + v];
        for (var m = ua(a.toString()), g = f * o, y = 0; y < o; ++y) {
          var x = m();
          l[g + y] = p.length;
          for (var b = 0; b < p.length; b++) if (x < p[b]) {
            l[g + y] = b;
            break;
          }
        }
      }
      return c;
    },t.prototype.oneHot = function (e, n, o, a) {
      G(e, 'oneHot');
      var i = new Float32Array(e.size * n);
      i.fill(a);
      for (var s = this.readSync(e.dataId), u = 0; u < e.size; ++u) s[u] >= 0 && s[u] < n && (i[u * n + s[u]] = o);
      return In(i, [e.size, n], 'int32');
    },t.prototype.nonMaxSuppression = function (e, n, o, a, i) {
      return G(e, 'nonMaxSuppression'), Yi(this.readSync(e.dataId), this.readSync(n.dataId), o, a, i);
    },t.prototype.fft = function (e) {
      return this.fftBatch(e, !1);
    },t.prototype.ifft = function (e) {
      return this.fftBatch(e, !0);
    },t.prototype.fftBatch = function (e, n) {
      for (var o = e.shape[0], a = e.shape[1], i = ae(e.shape, 'float32'), s = ae(e.shape, 'float32'), u = It(e).as2D(o, a), c = qt(e).as2D(o, a), l = 0; l < o; l++) for (var h = u.slice([l, 0], [1, a]), f = c.slice([l, 0], [1, a]), d = Ye(h, f), p = this.readSync(this.fftImpl(d, n).dataId), v = 0; v < a; v++) {
        var m = Qs(p, v);
        i.values[l * a + v] = m.real, s.values[l * a + v] = m.imag;
      }
      return Ye(i.toTensor(), s.toTensor()).as2D(o, a);
    },t.prototype.fftImpl = function (e, n) {
      var o = e.as1D(), a = o.size;
      if (this.isExponentOf2(a)) {
        var i = this.fftRadix2(o, a, n).as2D(e.shape[0], e.shape[1]);
        return n && (i = Ye(It(i).div(X(a)), qt(i).div(X(a)))), i;
      }
      var s = this.readSync(e.dataId), u = function (c) {
        for (var l = new Float32Array(c.length / 2), h = new Float32Array(c.length / 2), f = 0; f < c.length; f += 2) l[f / 2] = c[f], h[f / 2] = c[f + 1];
        return { real: l, imag: h };
      }(this.fourierTransformByMatmul(s, a, n));
      return Ye(u.real, u.imag).as2D(e.shape[0], e.shape[1]);
    },t.prototype.isExponentOf2 = function (e) {
      return (e & e - 1) == 0;
    },t.prototype.fftRadix2 = function (e, n, o) {
      if (n === 1) return e;
      var a = this.readSync(e.dataId), i = n / 2, s = function (g) {
        for (var y = Math.ceil(g.length / 4), x = new Float32Array(y), b = new Float32Array(y), w = 0; w < g.length; w += 4) x[Math.floor(w / 4)] = g[w], b[Math.floor(w / 4)] = g[w + 1];
        return { real: x, imag: b };
      }(a), u = Ye(s.real, s.imag).as1D(), c = function (g) {
        for (var y = Math.floor(g.length / 4), x = new Float32Array(y), b = new Float32Array(y), w = 2; w < g.length; w += 4) x[Math.floor(w / 4)] = g[w], b[Math.floor(w / 4)] = g[w + 1];
        return { real: x, imag: b };
      }(a), l = Ye(c.real, c.imag).as1D();
      u = this.fftRadix2(u, i, o), l = this.fftRadix2(l, i, o);
      var h = function (g, y) {
          for (var x = new Float32Array(g / 2), b = new Float32Array(g / 2), w = 0; w < Math.ceil(g / 2); w++) {
            var _ = (y ? 2 : -2) * Math.PI * (w / g);
            x[w] = Math.cos(_), b[w] = Math.sin(_);
          }
          return { real: x, imag: b };
        }(n, o), f = Ye(h.real, h.imag).mul(l), d = u.add(f), p = u.sub(f), v = It(d).concat(It(p)),
        m = qt(d).concat(qt(p));
      return Ye(v, m).as1D();
    },t.prototype.fourierTransformByMatmul = function (e, n, o) {
      for (var a = new Float32Array(2 * n), i = 0; i < n; i++) {
        for (var s = 0, u = 0, c = 0; c < n; c++) {
          var l = Kd(i * c, n, o), h = Qs(e, c);
          s += h.real * l.real - h.imag * l.imag, u += h.real * l.imag + h.imag * l.real;
        }
        o && (s /= n, u /= n), Xd(a, s, u, i);
      }
      return a;
    },t.prototype.depthToSpace = function (e, n, o) {
      k(o === 'NHWC', function () {
        return 'Only NHWC dataFormat supported on CPU for depthToSpace. Got ' + o;
      }), k(n > 1, function () {
        return 'blockSize should be > 1 for depthToSpace, but was: ' + n;
      });
      for (var a = e.shape[0], i = e.shape[1], s = e.shape[2], u = e.shape[3], c = i * n, l = s * n, h = u / (n * n), f = this.readSync(e.dataId), d = new Float32Array(a * c * l * h), p = 0, v = 0; v < a; ++v) for (var m = 0; m < c; ++m) for (var g = Math.floor(m / n), y = m % n, x = 0; x < l; ++x) for (var b = Math.floor(x / n), w = (y * n + x % n) * h, _ = 0; _ < h; ++_) {
        var S = _ + w + u * (b + s * (g + i * v));
        d[p++] = f[S];
      }
      return dt(d, [a, c, l, h]);
    },t.prototype.broadcastedBinaryOp = function (e, n, o, a) {
      var i = le(e.shape, n.shape), s = ae(i, o), u = this.readSync(e.dataId), c = this.readSync(n.dataId),
        l = sn(e.shape, i), h = sn(n.shape, i), f = s.values;
      if (l.length + h.length === 0) for (var d = 0; d < f.length; ++d) f[d] = a(u[d % u.length], c[d % c.length]); else {
        var p = this.bufferSync(e), v = this.bufferSync(n), m = function (g) {
          var y = s.indexToLoc(g), x = y.slice(-e.rank);
          l.forEach(function (S) {
            return x[S] = 0;
          });
          var b = p.locToIndex(x), w = y.slice(-n.rank);
          h.forEach(function (S) {
            return w[S] = 0;
          });
          var _ = v.locToIndex(w);
          f[g] = a(u[b], c[_]);
        };
        for (d = 0; d < f.length; ++d) m(d);
      }
      return s.toTensor();
    },t.prototype.broadcastedBinaryComplexOp = function (e, n, o) {
      var a = le(e.shape, n.shape), i = ae(a, 'float32'), s = ae(a, 'float32'), u = this.readSync(e.dataId),
        c = this.readSync(n.dataId), l = sn(e.shape, a), h = sn(n.shape, a), f = i.values, d = s.values;
      if (l.length + h.length === 0) for (var p = 0; p < f.length; p++) {
        var v = p % u.length, m = p % c.length, g = o(u[2 * v], u[2 * v + 1], c[2 * m], c[2 * m + 1]);
        f[p] = g.real, d[p] = g.imag;
      } else {
        var y = this.bufferSync(this.data.get(e.dataId).complexTensors.real),
          x = this.bufferSync(this.data.get(n.dataId).complexTensors.real), b = function (w) {
            var _ = i.indexToLoc(w), S = _.slice(-e.rank);
            l.forEach(function (D) {
              return S[D] = 0;
            });
            var E = y.locToIndex(S), I = _.slice(-n.rank);
            h.forEach(function (D) {
              return I[D] = 0;
            });
            var R = x.locToIndex(I), F = o(u[2 * E], u[2 * E + 1], c[2 * R], c[2 * R + 1]);
            f[w] = F.real, d[w] = F.imag;
          };
        for (p = 0; p < f.length; p++) b(p);
      }
      return this.complex(i.toTensor(), s.toTensor());
    },t.prototype.split = function (e, n, o) {
      return al(e, n, o);
    },t.prototype.dispose = function () {
    },t.prototype.floatPrecision = function () {
      return 32;
    },t.prototype.epsilon = function () {
      return 1e-7;
    },t.prototype.cropAndResize = function (e, n, o, a, i, s) {
      for (var u = e.shape, c = u[0], l = u[1], h = u[2], f = u[3], d = n.shape[0], p = a[0], v = a[1], m = ae([d, p, v, f], 'float32'), g = this.readSync(n.dataId), y = this.readSync(o.dataId), x = this.readSync(e.dataId), b = e.strides, w = m.strides, _ = 0; _ < d; _++) {
        var S = 4 * _, E = g[S], I = g[S + 1], R = g[S + 2], F = g[S + 3], D = y[_];
        if (!(D >= c)) for (var L = p > 1 ? (R - E) * (l - 1) / (p - 1) : 0, B = v > 1 ? (F - I) * (h - 1) / (v - 1) : 0, W = 0; W < p; W++) {
          var V = p > 1 ? E * (l - 1) + W * L : .5 * (E + R) * (l - 1);
          if (V < 0 || V > l - 1) for (var z = 0; z < v; z++) for (var U = 0; U < f; U++) {
            var q = U + z * w[2] + W * w[1] + _ * w[0];
            m.values[q] = s;
          } else if (i === 'bilinear') {
            var P = Math.floor(V), H = Math.ceil(V), j = V - P;
            for (z = 0; z < v; z++) if ((de = v > 1 ? I * (h - 1) + z * B : .5 * (I + F) * (h - 1)) < 0 || de > h - 1) for (U = 0; U < f; U++) q = U + z * w[2] + W * w[1] + _ * w[0], m.values[q] = s; else {
              var te = Math.floor(de), se = Math.ceil(de), ue = de - te;
              for (U = 0; U < f; U++) {
                var he = x[q = U + te * b[2] + P * b[1] + D * b[0]], ve = x[q = U + se * b[2] + P * b[1] + D * b[0]],
                  fe = x[q = U + te * b[2] + H * b[1] + D * b[0]], me = he + (ve - he) * ue,
                  Me = fe + (x[q = U + se * b[2] + H * b[1] + D * b[0]] - fe) * ue;
                q = U + z * w[2] + W * w[1] + _ * w[0], m.values[q] = me + (Me - me) * j;
              }
            }
          } else for (z = 0; z < v; ++z) {
            var de;
            if ((de = v > 1 ? I * (h - 1) + z * B : .5 * (I + F) * (h - 1)) < 0 || de > h - 1) for (U = 0; U < f; U++) q = U + z * w[2] + W * w[1] + _ * w[0], m.values[q] = s; else {
              var _e = Math.round(de), ye = Math.round(V);
              for (U = 0; U < f; U++) {
                var Fe = U + _e * b[2] + ye * b[1] + D * b[0], Ie = U + z * w[2] + W * w[1] + _ * w[0];
                m.values[Ie] = x[Fe];
              }
            }
          }
        }
      }
      return m.toTensor();
    },t.prototype.sparseToDense = function (e, n, o, a) {
      var i = Zr(0, e, o), s = i.sliceRank, u = i.numUpdates, c = i.sliceSize, l = i.strides, h = i.outputSize;
      return this.scatter(e, n, o, h, c, u, s, l, a, !1);
    },t.prototype.gatherND = function (e, n) {
      var o = n.shape, a = o[o.length - 1], i = Vi(e, n), s = i[0], u = i[1], c = i[2], l = i[3];
      if (u === 0) return Ze([], s, e.dtype);
      for (var h = new Xr([u, c], e.dtype), f = this.readSync(n.dataId), d = this.readSync(e.dataId), p = 0; p < u; p++) {
        for (var v = [], m = 0, g = 0; g < a; g++) {
          var y = f[p * a + g];
          m += y * l[g], v.push(y);
        }
        if (m < 0 || m >= e.size / c) throw new Error('Invalid indices: ' + v + ' does not index into ' + e.shape);
        for (var x = 0; x < c; x++) h.values[p * c + x] = d[m * c + x];
      }
      return h.toTensor().reshape(s);
    },t.prototype.scatterND = function (e, n, o) {
      var a = Zr(0, e, o), i = a.sliceRank, s = a.numUpdates, u = a.sliceSize, c = a.strides, l = a.outputSize,
        h = X(0);
      return this.scatter(e, n, o, l, u, s, i, c, h, !0);
    },t.prototype.fill = function (e, n, o) {
      var a = Hr(o = o || Sr(n), J(e));
      return a.fill(n), T.makeTensor(a, e, o, this);
    },t.prototype.onesLike = function (e) {
      if (e.dtype === 'string') throw new Error('onesLike is not supported for string tensors');
      return this.fill(e.shape, 1, e.dtype);
    },t.prototype.zerosLike = function (e) {
      var n = Hr(e.dtype, J(e.shape));
      return this.makeOutput(n, e.shape, e.dtype);
    },t.prototype.linspace = function (e, n, o) {
      return Ki(e, n, o);
    },t.prototype.scatter = function (e, n, o, a, i, s, u, c, l, h) {
      var f = [a / i, i], d = this.readSync(e.dataId), p = this.readSync(n.dataId);
      if (a === 0) return Ze([], o, n.dtype);
      var v = new Xr(f, n.dtype);
      v.values.fill(this.readSync(l.dataId)[0]);
      for (var m = 0; m < s; m++) {
        for (var g = [], y = 0, x = 0; x < u; x++) {
          var b = d[m * u + x];
          g.push(b), y += b * c[x];
        }
        if (y < 0 || y >= a / i) throw new Error('Invalid indices: ' + g + ' does not index into ' + o);
        for (var w = 0; w < i; w++) h ? v.values[y * i + w] += p[m * i + w] : v.values[y * i + w] = n.rank === 0 ? p[0] : p[m * i + w];
      }
      return v.toTensor().reshape(o);
    },t;
  }(rl);
  T.registerBackend('cpu', function () {
    return new Zg;
  }, 1);
  for (var qa = 0, wu = [{
    kernelName: 'NonMaxSuppressionV5', backendName: 'cpu', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = r.attrs, o = t, a = o.boxes, i = o.scores, s = n, u = s.maxOutputSize,
        c = s.iouThreshold, l = s.scoreThreshold, h = s.softNmsSigma, f = e;
      G(a, 'NonMaxSuppressionWithScore');
      var d = $i(f.data.get(a.dataId).values, f.data.get(i.dataId).values, u, c, l, h);
      return [d.selectedIndices, d.selectedScores];
    },
  }, {
    kernelName: 'Square', backendName: 'cpu', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = t.x, o = e;
      G(n, 'square');
      for (var a = o.data.get(n.dataId).values, i = new Float32Array(a.length), s = 0; s < a.length; ++s) {
        var u = a[s];
        i[s] = u * u;
      }
      return { dataId: o.write(i, n.shape, n.dtype), shape: n.shape, dtype: n.dtype };
    },
  }, {
    kernelName: eo, backendName: 'cpu', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = t, o = n.a, a = n.b, i = e;
      G([o, a], eo);
      var s = i.data.get(o.dataId).values, u = i.data.get(a.dataId).values, c = function (f, d, p, v, m, g) {
        var y = le(f, d), x = y.length, b = Ft(y), w = Er(m, J(y)), _ = f.length, S = d.length, E = Ft(f), I = Ft(d),
          R = sn(f, y), F = sn(d, y);
        if (R.length + F.length === 0) for (var D = 0; D < w.length; ++D) w[D] = g(p[D % p.length], v[D % v.length]); else {
          var L = function (B) {
            var W = lc(B, x, b), V = W.slice(-_);
            R.forEach(function (P) {
              return V[P] = 0;
            });
            var z = ui(V, _, E), U = W.slice(-S);
            F.forEach(function (P) {
              return U[P] = 0;
            });
            var q = ui(U, S, I);
            w[B] = g(p[z], v[q]);
          };
          for (D = 0; D < w.length; ++D) L(D);
        }
        return [w, y];
      }(o.shape, a.shape, s, u, o.dtype, function (f, d) {
        var p = f - d;
        return p * p;
      }), l = c[0], h = c[1];
      return { dataId: i.write(l, h, o.dtype), shape: h, dtype: o.dtype };
    },
  }]; qa < wu.length; qa++) Ju(wu[qa]);
  var cr, Jg = function (r) {
    this.variableNames = ['A'];
    var t = rt(), e = r[0], n = r[1];
    this.outputShape = r, this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(` + n + '.0, ' + e + `.0);

        vec4 values = ` + t.texture2D + `(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `;
  }, Qg = function (r) {
    this.variableNames = ['A'], this.packedInputs = !1, this.packedOutput = !0;
    var t = rt(), e = r[0], n = r[1];
    this.outputShape = r, this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(` + n + '.0, ' + e + `.0);
            vec4 values = ` + t.texture2D + `(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ` + t.output + ` = result;
      }
    `;
  };
  for (var Ha = 0, _u = [{
    kernelName: 'FromPixels', backendName: 'webgl', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = r.attrs, o = t.pixels, a = n.numChannels,
        i = typeof HTMLVideoElement < 'u' && o instanceof HTMLVideoElement,
        s = typeof HTMLImageElement < 'u' && o instanceof HTMLImageElement,
        u = i ? [o.videoWidth, o.videoHeight] : [o.width, o.height], c = u[0], l = u[1], h = [l, c], f = [l, c, a];
      (s || i) && (cr == null && (cr = document.createElement('canvas').getContext('2d')), cr.canvas.width = c, cr.canvas.height = l, cr.drawImage(o, 0, 0, c, l), o = cr.canvas);
      var d = e.makeTensorInfo(h, 'int32');
      e.texData.get(d.dataId).usage = xt.PIXELS, e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId), o);
      var p = O().getBool('WEBGL_PACK') ? new Qg(f) : new Jg(f), v = e.runWebGLProgram(p, [d], 'int32');
      return e.disposeData(d.dataId), v;
    },
  }, {
    kernelName: 'NonMaxSuppressionV5', backendName: 'webgl', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = r.attrs;
      Go('tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead');
      var o = t, a = o.boxes, i = o.scores, s = n, u = s.maxOutputSize, c = s.iouThreshold, l = s.scoreThreshold,
        h = s.softNmsSigma, f = e, d = $i(f.readSync(a.dataId), f.readSync(i.dataId), u, c, l, h);
      return [d.selectedIndices, d.selectedScores];
    },
  }, {
    kernelName: 'Square', backendName: 'webgl', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = t.x, o = e, a = new ie(n.shape, 'return x * x;');
      return o.runWebGLProgram(a, [n], n.dtype);
    },
  }, {
    kernelName: eo, backendName: 'webgl', kernelFunc: function (r) {
      var t = r.inputs, e = r.backend, n = t, o = n.a, a = n.b, i = e,
        s = O().getBool('WEBGL_PACK_BINARY_OPERATIONS') ? new on('return (a - b) * (a - b);', o.shape, a.shape) : new Ne('return (a - b) * (a - b);', o.shape, a.shape);
      return i.compileAndRun(s, [o, a]);
    },
  }]; Ha < _u.length; Ha++) Ju(_u[Ha]);
  for (var ja = 0, Cu = [{
    kernelName: 'Square', gradFunc: function (r, t) {
      var e = t[0];
      return {
        x: function () {
          return r.mul(e.toFloat().mul(2));
        },
      };
    },
  }, {
    kernelName: eo, gradFunc: function (r, t) {
      var e = t[0], n = t[1], o = X(2);
      return {
        a: function () {
          return at(r, at(o, qe(e, n)));
        }, b: function () {
          return at(r, at(o, qe(n, e)));
        },
      };
    },
  }]; ja < Cu.length; ja++) nd(Cu[ja]);
  var e0 = function () {
    function r() {
    }

    return r.prototype.fetch = function (t, e) {
      return fetch(t, e);
    }, r.prototype.now = function () {
      return performance.now();
    }, r.prototype.encode = function (t, e) {
      if (e !== 'utf-8' && e !== 'utf8') throw new Error('Browser\'s encoder only supports utf-8, but got ' + e);
      return this.textEncoder == null && (this.textEncoder = new TextEncoder), this.textEncoder.encode(t);
    }, r.prototype.decode = function (t, e) {
      return new TextDecoder(e).decode(t);
    }, r;
  }();
  O().get('IS_BROWSER') && O().setPlatform('browser', new e0);
  var Xa, t0 = function () {
    return require('node-fetch');
  }, n0 = function () {
    function r() {
      this.util = require('util'), this.textEncoder = new this.util.TextEncoder;
    }

    return r.prototype.fetch = function (t, e) {
      return O().global.fetch != null ? O().global.fetch(t, e) : (Xa == null && (Xa = t0()), Xa(t, e));
    }, r.prototype.now = function () {
      var t = process.hrtime();
      return 1e3 * t[0] + t[1] / 1e6;
    }, r.prototype.encode = function (t, e) {
      if (e !== 'utf-8' && e !== 'utf8') throw new Error('Node built-in encoder only supports utf-8, but got ' + e);
      return this.textEncoder.encode(t);
    }, r.prototype.decode = function (t, e) {
      return t.length === 0 ? '' : new this.util.TextDecoder(e).decode(t);
    }, r;
  }();
  O().get('IS_NODE') && O().setPlatform('node', new n0);
  var _i = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 }, ea = 4;

  function vh(r, t) {
    for (var e = {}, n = 0, o = function (s) {
      var u = s.name, c = s.dtype, l = s.shape, h = J(l), f = void 0;
      if ('quantization' in s) {
        var d = s.quantization;
        if (d.dtype !== 'uint8' && d.dtype !== 'uint16') throw new Error('Weight ' + s.name + ' has unknown quantization dtype ' + d.dtype + '. Supported quantization dtypes are: \'uint8\' and \'uint16\'.');
        var p = _i[d.dtype], v = r.slice(n, n + h * p),
          m = d.dtype === 'uint8' ? new Uint8Array(v) : new Uint16Array(v);
        if (c === 'float32') f = Float32Array.from(m, function (_) {
          return _ * d.scale + d.min;
        }); else {
          if (c !== 'int32') throw new Error('Unsupported dtype in weight \'' + u + '\': ' + c);
          f = Int32Array.from(m, function (_) {
            return Math.round(_ * d.scale + d.min);
          });
        }
        n += h * p;
      } else if (c === 'string') {
        var g = J(s.shape);
        f = [];
        for (var y = 0; y < g; y++) {
          var x = new Uint32Array(r.slice(n, n + ea))[0];
          n += ea;
          var b = new Uint8Array(r.slice(n, n + x));
          f.push(b), n += x;
        }
      } else {
        var w = _i[c];
        if (v = r.slice(n, n + h * w), c === 'float32') f = new Float32Array(v); else if (c === 'int32') f = new Int32Array(v); else {
          if (c !== 'bool') throw new Error('Unsupported dtype in weight \'' + u + '\': ' + c);
          f = new Uint8Array(v);
        }
        n += h * w;
      }
      e[u] = Ze(f, l, c);
    }, a = 0, i = t; a < i.length; a++) o(i[a]);
    return e;
  }

  function r0(r) {
    if (r === null) throw new Error('Invalid input value: ' + JSON.stringify(r));
    var t = 0, e = [];
    r.forEach(function (a) {
      if (t += a.byteLength, e.push(a.byteLength === a.buffer.byteLength ? a : new a.constructor(a)), !(a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array)) throw new Error('Unsupported TypedArray subtype: ' + a.constructor.name);
    });
    var n = new Uint8Array(t), o = 0;
    return e.forEach(function (a) {
      n.set(new Uint8Array(a.buffer), o), o += a.byteLength;
    }), n.buffer;
  }

  var Ci = typeof Buffer < 'u' && (typeof Blob > 'u' || typeof atob > 'u' || typeof btoa > 'u');

  function Eu(r) {
    return Ci ? Buffer.byteLength(r) : new Blob([r]).size;
  }

  function vs(r) {
    var t = 0;
    r.forEach(function (o) {
      t += o.byteLength;
    });
    var e = new Uint8Array(t), n = 0;
    return r.forEach(function (o) {
      e.set(new Uint8Array(o), n), n += o.byteLength;
    }), e.buffer;
  }

  function ku(r) {
    for (r = r.trim(); r.endsWith("/");) r = r.slice(0, r.length - 1);
    var t = r.split('/');
    return t[t.length - 1];
  }

  function uo(r) {
    if (r.modelTopology instanceof ArrayBuffer) throw new Error('Expected JSON model topology, received ArrayBuffer.');
    return {
      dateSaved: new Date,
      modelTopologyType: 'JSON',
      modelTopologyBytes: r.modelTopology == null ? 0 : Eu(JSON.stringify(r.modelTopology)),
      weightSpecsBytes: r.weightSpecs == null ? 0 : Eu(JSON.stringify(r.weightSpecs)),
      weightDataBytes: r.weightData == null ? 0 : r.weightData.byteLength,
    };
  }

  var _t = function () {
    function r() {
      this.saveRouters = [], this.loadRouters = [];
    }

    return r.getInstance = function () {
      return r.instance == null && (r.instance = new r), r.instance;
    }, r.registerSaveRouter = function (t) {
      r.getInstance().saveRouters.push(t);
    }, r.registerLoadRouter = function (t) {
      r.getInstance().loadRouters.push(t);
    }, r.getSaveHandlers = function (t) {
      return r.getHandlers(t, 'save');
    }, r.getLoadHandlers = function (t, e) {
      return r.getHandlers(t, 'load', e);
    }, r.getHandlers = function (t, e, n) {
      var o = [];
      return (e === 'load' ? r.getInstance().loadRouters : r.getInstance().saveRouters).forEach(function (a) {
        var i = a(t, n);
        i !== null && o.push(i);
      }), o;
    }, r;
  }(), yr = '://', Rn = function () {
    function r() {
      this.managers = {};
    }

    return r.getInstance = function () {
      return r.instance == null && (r.instance = new r), r.instance;
    }, r.registerManager = function (t, e) {
      k(t != null, function () {
        return 'scheme must not be undefined or null.';
      }), t.endsWith(yr) && (t = t.slice(0, t.indexOf(yr))), k(t.length > 0, function () {
        return 'scheme must not be an empty string.';
      });
      var n = r.getInstance();
      k(n.managers[t] == null, function () {
        return 'A model store manager is already registered for scheme \'' + t + '\'.';
      }), n.managers[t] = e;
    }, r.getManager = function (t) {
      var e = this.getInstance().managers[t];
      if (e == null) throw new Error('Cannot find model manager for scheme \'' + t + '\'');
      return e;
    }, r.getSchemes = function () {
      return Object.keys(this.getInstance().managers);
    }, r;
  }();

  function Po(r) {
    if (r.indexOf(yr) === -1) throw new Error('The url string provided does not contain a scheme. Supported schemes are: ' + Rn.getSchemes().join(','));
    return { scheme: r.split(yr)[0], path: r.split(yr)[1] };
  }

  function Iu(r, t, e) {
    return e === void 0 && (e = !1), $(this, void 0, void 0, function () {
      var n, o, a, i, s, u, c, l, h;
      return Z(this, function (f) {
        switch (f.label) {
          case 0:
            return k(r !== t, function () {
              return 'Old path and new path are the same: \'' + r + '\'';
            }), k((n = _t.getLoadHandlers(r)).length > 0, function () {
              return 'Copying failed because no load handler is found for source URL ' + r + '.';
            }), k(n.length < 2, function () {
              return 'Copying failed because more than one (' + n.length + ') load handlers for source URL ' + r + '.';
            }), o = n[0], k((a = _t.getSaveHandlers(t)).length > 0, function () {
              return 'Copying failed because no save handler is found for destination URL ' + t + '.';
            }), k(a.length < 2, function () {
              return 'Copying failed because more than one (' + n.length + ') save handlers for destination URL ' + t + '.';
            }), i = a[0], s = Po(r).scheme, u = Po(r).path, c = s === Po(r).scheme, [4, o.load()];
          case 1:
            return l = f.sent(), e && c ? [4, Rn.getManager(s).removeModel(u)] : [3, 3];
          case 2:
            f.sent(), f.label = 3;
          case 3:
            return [4, i.save(l)];
          case 4:
            return h = f.sent(), !e || c ? [3, 6] : [4, Rn.getManager(s).removeModel(u)];
          case 5:
            f.sent(), f.label = 6;
          case 6:
            return [2, h.modelArtifactsInfo];
        }
      });
    });
  }

  var Hn = 'models_store', kn = 'model_info_store';

  function mh() {
    if (!O().getBool('IS_BROWSER')) throw new Error('Failed to obtain IndexedDB factory because the current environmentis not a web browser.');
    var r = window || self, t = r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB || r.shimIndexedDB;
    if (t == null) throw new Error('The current browser does not appear to support IndexedDB.');
    return t;
  }

  function Ei(r) {
    var t = r.result;
    t.createObjectStore(Hn, { keyPath: 'modelPath' }), t.createObjectStore(kn, { keyPath: 'modelPath' });
  }

  var br = function () {
    function r(t) {
      if (this.indexedDB = mh(), t == null || !t) throw new Error('For IndexedDB, modelPath must not be null, undefined or empty.');
      this.modelPath = t;
    }

    return r.prototype.save = function (t) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserLocalStorage.save() does not support saving model topology in binary formats yet.');
          return [2, this.databaseAction(this.modelPath, t)];
        });
      });
    }, r.prototype.load = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (t) {
          return [2, this.databaseAction(this.modelPath)];
        });
      });
    }, r.prototype.databaseAction = function (t, e) {
      var n = this;
      return new Promise(function (o, a) {
        var i = n.indexedDB.open('tensorflowjs', 1);
        i.onupgradeneeded = function () {
          return Ei(i);
        }, i.onsuccess = function () {
          var s = i.result;
          if (e == null) {
            var u = s.transaction(Hn, 'readonly'), c = u.objectStore(Hn).get(n.modelPath);
            c.onsuccess = function () {
              if (c.result == null) return s.close(), a(new Error('Cannot find model with path \'' + n.modelPath + '\' in IndexedDB.'));
              o(c.result.modelArtifacts);
            }, c.onerror = function (v) {
              return s.close(), a(c.error);
            }, u.oncomplete = function () {
              return s.close();
            };
          } else {
            var l, h = uo(e), f = s.transaction(kn, 'readwrite'), d = f.objectStore(kn),
              p = d.put({ modelPath: n.modelPath, modelArtifactsInfo: h });
            p.onsuccess = function () {
              var v = (l = s.transaction(Hn, 'readwrite')).objectStore(Hn).put({
                modelPath: n.modelPath,
                modelArtifacts: e,
                modelArtifactsInfo: h,
              });
              v.onsuccess = function () {
                return o({ modelArtifactsInfo: h });
              }, v.onerror = function (m) {
                var g = (d = f.objectStore(kn)).delete(n.modelPath);
                g.onsuccess = function () {
                  return s.close(), a(v.error);
                }, g.onerror = function (y) {
                  return s.close(), a(v.error);
                };
              };
            }, p.onerror = function (v) {
              return s.close(), a(p.error);
            }, f.oncomplete = function () {
              l == null ? s.close() : l.oncomplete = function () {
                return s.close();
              };
            };
          }
        }, i.onerror = function (s) {
          return a(i.error);
        };
      });
    }, r.URL_SCHEME = 'indexeddb://', r;
  }(), Ru = function (r) {
    return O().getBool('IS_BROWSER') && !Array.isArray(r) && r.startsWith(br.URL_SCHEME) ? (t = r.slice(br.URL_SCHEME.length), new br(t)) : null;
    var t;
  };
  _t.registerSaveRouter(Ru), _t.registerLoadRouter(Ru);
  var o0 = function () {
    function r() {
      this.indexedDB = mh();
    }

    return r.prototype.listModels = function () {
      return $(this, void 0, void 0, function () {
        var t = this;
        return Z(this, function (e) {
          return [2, new Promise(function (n, o) {
            var a = t.indexedDB.open('tensorflowjs', 1);
            a.onupgradeneeded = function () {
              return Ei(a);
            }, a.onsuccess = function () {
              var i = a.result, s = i.transaction(kn, 'readonly'), u = s.objectStore(kn).getAll();
              u.onsuccess = function () {
                for (var c = {}, l = 0, h = u.result; l < h.length; l++) {
                  var f = h[l];
                  c[f.modelPath] = f.modelArtifactsInfo;
                }
                n(c);
              }, u.onerror = function (c) {
                return i.close(), o(u.error);
              }, s.oncomplete = function () {
                return i.close();
              };
            }, a.onerror = function (i) {
              return o(a.error);
            };
          })];
        });
      });
    }, r.prototype.removeModel = function (t) {
      return $(this, void 0, void 0, function () {
        var e = this;
        return Z(this, function (n) {
          var o;
          return t = (o = t).startsWith(br.URL_SCHEME) ? o.slice(br.URL_SCHEME.length) : o, [2, new Promise(function (a, i) {
            var s = e.indexedDB.open('tensorflowjs', 1);
            s.onupgradeneeded = function () {
              return Ei(s);
            }, s.onsuccess = function () {
              var u, c = s.result, l = c.transaction(kn, 'readwrite'), h = l.objectStore(kn), f = h.get(t);
              f.onsuccess = function () {
                if (f.result == null) return c.close(), i(new Error('Cannot find model with path \'' + t + '\' in IndexedDB.'));
                var d = h.delete(t), p = function () {
                  var v = (u = c.transaction(Hn, 'readwrite')).objectStore(Hn).delete(t);
                  v.onsuccess = function () {
                    return a(f.result.modelArtifactsInfo);
                  }, v.onerror = function (m) {
                    return i(f.error);
                  };
                };
                d.onsuccess = p, d.onerror = function (v) {
                  return p(), c.close(), i(f.error);
                };
              }, f.onerror = function (d) {
                return c.close(), i(f.error);
              }, l.oncomplete = function () {
                u == null ? c.close() : u.oncomplete = function () {
                  return c.close();
                };
              };
            }, s.onerror = function (u) {
              return i(s.error);
            };
          })];
        });
      });
    }, r;
  }();
  if (O().getBool('IS_BROWSER')) try {
    Rn.registerManager(br.URL_SCHEME, new o0);
  } catch {
  }
  var an = '/', vr = 'tensorflowjs_models', gh = 'info', a0 = 'model_topology', i0 = 'weight_specs', s0 = 'weight_data',
    u0 = 'model_metadata';

  function yh(r) {
    return {
      info: [vr, r, gh].join(an),
      topology: [vr, r, a0].join(an),
      weightSpecs: [vr, r, i0].join(an),
      weightData: [vr, r, s0].join(an),
      modelMetadata: [vr, r, u0].join(an),
    };
  }

  function c0(r) {
    var t = r.split(an);
    if (t.length < 3) throw new Error('Invalid key format: ' + r);
    return t.slice(1, t.length - 1).join(an);
  }

  var xr = function () {
    function r(t) {
      if (!O().getBool('IS_BROWSER') || typeof window > 'u' || window.localStorage === void 0) throw new Error('The current environment does not support local storage.');
      if (this.LS = window.localStorage, t == null || !t) throw new Error('For local storage, modelPath must not be null, undefined or empty.');
      this.modelPath = t, this.keys = yh(this.modelPath);
    }

    return r.prototype.save = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n, o;
        return Z(this, function (a) {
          if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserLocalStorage.save() does not support saving model topology in binary formats yet.');
          e = JSON.stringify(t.modelTopology), n = JSON.stringify(t.weightSpecs), o = uo(t);
          try {
            return this.LS.setItem(this.keys.info, JSON.stringify(o)), this.LS.setItem(this.keys.topology, e), this.LS.setItem(this.keys.weightSpecs, n), this.LS.setItem(this.keys.weightData, function (i) {
              if (Ci) return Buffer.from(i).toString('base64');
              for (var s = new Uint8Array(i), u = '', c = 0, l = s.length; c < l; c++) u += String.fromCharCode(s[c]);
              return btoa(u);
            }(t.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({
              format: t.format,
              generatedBy: t.generatedBy,
              convertedBy: t.convertedBy,
              userDefinedMetadata: t.userDefinedMetadata,
            })), [2, { modelArtifactsInfo: o }];
          } catch {
            throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error('Failed to save model \'' + this.modelPath + '\' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=' + o.modelTopologyBytes + ', weightSpecsBytes=' + o.weightSpecsBytes + ', weightDataBytes=' + o.weightDataBytes + '.');
          }
          return [2];
        });
      });
    }, r.prototype.load = function () {
      return $(this, void 0, void 0, function () {
        var t, e, n, o, a, i, s;
        return Z(this, function (u) {
          if ((t = JSON.parse(this.LS.getItem(this.keys.info))) == null) throw new Error('In local storage, there is no model with name \'' + this.modelPath + '\'');
          if (t.modelTopologyType !== 'JSON') throw new Error('BrowserLocalStorage does not support loading non-JSON model topology yet.');
          if (e = {}, (n = JSON.parse(this.LS.getItem(this.keys.topology))) == null) throw new Error('In local storage, the topology of model \'' + this.modelPath + '\' is missing.');
          if (e.modelTopology = n, (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs))) == null) throw new Error('In local storage, the weight specs of model \'' + this.modelPath + '\' are missing.');
          if (e.weightSpecs = o, (a = this.LS.getItem(this.keys.modelMetadata)) != null && (i = JSON.parse(a), e.format = i.format, e.generatedBy = i.generatedBy, e.convertedBy = i.convertedBy, e.userDefinedMetadata = i.userDefinedMetadata), (s = this.LS.getItem(this.keys.weightData)) == null) throw new Error('In local storage, the binary weight values of model \'' + this.modelPath + '\' are missing.');
          return e.weightData = function (c) {
            if (Ci) {
              var l = Buffer.from(c, 'base64');
              return l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
            }
            for (var h = atob(c), f = new Uint8Array(h.length), d = 0; d < h.length; ++d) f.set([h.charCodeAt(d)], d);
            return f.buffer;
          }(s), [2, e];
        });
      });
    }, r.URL_SCHEME = 'localstorage://', r;
  }(), Su = function (r) {
    return O().getBool('IS_BROWSER') && !Array.isArray(r) && r.startsWith(xr.URL_SCHEME) ? (t = r.slice(xr.URL_SCHEME.length), new xr(t)) : null;
    var t;
  };
  _t.registerSaveRouter(Su), _t.registerLoadRouter(Su);
  var l0 = function () {
    function r() {
      k(O().getBool('IS_BROWSER'), function () {
        return 'Current environment is not a web browser';
      }), k(typeof window > 'u' || window.localStorage !== void 0, function () {
        return 'Current browser does not appear to support localStorage';
      }), this.LS = window.localStorage;
    }

    return r.prototype.listModels = function () {
      return $(this, void 0, void 0, function () {
        var t, e, n, o, a, i;
        return Z(this, function (s) {
          for (t = {}, e = vr + an, n = an + gh, o = 0; o < this.LS.length; ++o) (a = this.LS.key(o)).startsWith(e) && a.endsWith(n) && (i = c0(a), t[i] = JSON.parse(this.LS.getItem(a)));
          return [2, t];
        });
      });
    }, r.prototype.removeModel = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n;
        return Z(this, function (o) {
          var a;
          if (t = (a = t).startsWith(xr.URL_SCHEME) ? a.slice(xr.URL_SCHEME.length) : a, e = yh(t), this.LS.getItem(e.info) == null) throw new Error('Cannot find model at path \'' + t + '\'');
          return n = JSON.parse(this.LS.getItem(e.info)), this.LS.removeItem(e.info), this.LS.removeItem(e.topology), this.LS.removeItem(e.weightSpecs), this.LS.removeItem(e.weightData), [2, n];
        });
      });
    }, r;
  }();
  if (O().getBool('IS_BROWSER')) try {
    Rn.registerManager(xr.URL_SCHEME, new l0);
  } catch {
  }
  var h0 = 'model', f0 = '.json', d0 = '.weights.bin';

  function Au(r) {
    return new Promise(function (t) {
      return setTimeout(t);
    }).then(r);
  }

  var Ka = function () {
    function r(t) {
      if (!O().getBool('IS_BROWSER')) throw new Error('browserDownloads() cannot proceed because the current environment is not a browser.');
      t.startsWith(r.URL_SCHEME) && (t = t.slice(r.URL_SCHEME.length)), t != null && t.length !== 0 || (t = h0), this.modelTopologyFileName = t + f0, this.weightDataFileName = t + d0;
    }

    return r.prototype.save = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n, o, a, i, s;
        return Z(this, function (u) {
          switch (u.label) {
            case 0:
              if (typeof document > 'u') throw new Error('Browser downloads are not supported in this environment since `document` is not present');
              if (e = window.URL.createObjectURL(new Blob([t.weightData], { type: 'application/octet-stream' })), !(t.modelTopology instanceof ArrayBuffer)) return [3, 1];
              throw new Error('BrowserDownloads.save() does not support saving model topology in binary formats yet.');
            case 1:
              return n = [{
                paths: ['./' + this.weightDataFileName],
                weights: t.weightSpecs,
              }], o = {
                modelTopology: t.modelTopology,
                format: t.format,
                generatedBy: t.generatedBy,
                convertedBy: t.convertedBy,
                weightsManifest: n,
              }, a = window.URL.createObjectURL(new Blob([JSON.stringify(o)], { type: 'application/json' })), (i = this.jsonAnchor == null ? document.createElement('a') : this.jsonAnchor).download = this.modelTopologyFileName, i.href = a, [4, Au(function () {
                return i.dispatchEvent(new MouseEvent('click'));
              })];
            case 2:
              return u.sent(), t.weightData == null ? [3, 4] : ((s = this.weightDataAnchor == null ? document.createElement('a') : this.weightDataAnchor).download = this.weightDataFileName, s.href = e, [4, Au(function () {
                return s.dispatchEvent(new MouseEvent('click'));
              })]);
            case 3:
              u.sent(), u.label = 4;
            case 4:
              return [2, { modelArtifactsInfo: uo(t) }];
          }
        });
      });
    }, r.URL_SCHEME = 'downloads://', r;
  }(), p0 = function () {
    function r(t) {
      if (t == null || t.length < 1) throw new Error('When calling browserFiles, at least 1 file is required, but received ' + t);
      this.files = t;
    }

    return r.prototype.load = function () {
      return $(this, void 0, void 0, function () {
        var t, e, n = this;
        return Z(this, function (o) {
          return t = this.files[0], e = this.files.slice(1), [2, new Promise(function (a, i) {
            var s = new FileReader;
            s.onload = function (u) {
              var c = JSON.parse(u.target.result), l = c.modelTopology;
              if (l != null) {
                e.length === 0 && a({ modelTopology: l });
                var h = c.weightsManifest;
                if (h != null) {
                  var f;
                  try {
                    f = n.checkManifestAndWeightFiles(h, e);
                  } catch (m) {
                    return void i(m);
                  }
                  var d = [], p = [], v = [];
                  h.forEach(function (m) {
                    m.paths.forEach(function (g) {
                      p.push(g), v.push(null);
                    }), d.push.apply(d, m.weights);
                  }), h.forEach(function (m) {
                    m.paths.forEach(function (g) {
                      var y = new FileReader;
                      y.onload = function (x) {
                        var b = x.target.result, w = p.indexOf(g);
                        v[w] = b, v.indexOf(null) === -1 && a({
                          modelTopology: l,
                          weightSpecs: d,
                          weightData: vs(v),
                          format: c.format,
                          generatedBy: c.generatedBy,
                          convertedBy: c.convertedBy,
                          userDefinedMetadata: c.userDefinedMetadata,
                        });
                      }, y.onerror = function (x) {
                        return i('Failed to weights data from file of path \'' + g + '\'.');
                      }, y.readAsArrayBuffer(f[g]);
                    });
                  });
                } else i(new Error('weightManifest field is missing from file ' + t.name));
              } else i(new Error('modelTopology field is missing from file ' + t.name));
            }, s.onerror = function (u) {
              return i('Failed to read model topology and weights manifest JSON from file \'' + t.name + '\'. BrowserFiles supports loading Keras-style tf.Model artifacts only.');
            }, s.readAsText(t);
          })];
        });
      });
    }, r.prototype.checkManifestAndWeightFiles = function (t, e) {
      for (var n = [], o = e.map(function (u) {
        return ku(u.name);
      }), a = {}, i = 0, s = t; i < s.length; i++) s[i].paths.forEach(function (u) {
        var c = ku(u);
        if (n.indexOf(c) !== -1) throw new Error('Duplicate file basename found in weights manifest: \'' + c + '\'');
        if (n.push(c), o.indexOf(c) === -1) throw new Error('Weight file with basename \'' + c + '\' is not provided.');
        a[u] = e[o.indexOf(c)];
      });
      if (n.length !== e.length) throw new Error('Mismatch in the number of files in weights manifest (' + n.length + ') and the number of weight files provided (' + e.length + ').');
      return a;
    }, r;
  }();

  function Du(r, t, e, n) {
    (function (a) {
      k(a != null && Array.isArray(a) && a.length > 0, function () {
        return 'promises must be a none empty array';
      });
    })(r), function (a, i) {
      k(a >= 0 && a <= 1, function () {
        return 'Progress fraction must be in range [0, 1], but got startFraction ' + a;
      }), k(i >= 0 && i <= 1, function () {
        return 'Progress fraction must be in range [0, 1], but got endFraction ' + i;
      }), k(i >= a, function () {
        return 'startFraction must be no more than endFraction, but got startFraction ' + a + ' and endFraction ' + i;
      });
    }(e = e == null ? 0 : e, n = n == null ? 1 : n);
    var o = 0;
    return Promise.all(r.map(function (a) {
      return a.then(function (i) {
        var s = e + ++o / r.length * (n - e);
        return t(s), i;
      }), a;
    }));
  }

  function bh(r, t) {
    return $(this, void 0, void 0, function () {
      var e, n, o, a, i, s, u, c, l;
      return Z(this, function (h) {
        switch (h.label) {
          case 0:
            return t == null && (t = {}), e = t.fetchFunc == null ? O().platform.fetch : t.fetchFunc, n = r.map(function (f) {
              return e(f, t.requestInit, { isBinary: !0 });
            }), o = 0, a = .5, t.onProgress != null ? [3, 2] : [4, Promise.all(n)];
          case 1:
            return i = h.sent(), [3, 4];
          case 2:
            return [4, Du(n, t.onProgress, o, a)];
          case 3:
            i = h.sent(), h.label = 4;
          case 4:
            return s = i.map(function (f) {
              return f.arrayBuffer();
            }), u = .5, c = 1, t.onProgress != null ? [3, 6] : [4, Promise.all(s)];
          case 5:
            return l = h.sent(), [3, 8];
          case 6:
            return [4, Du(s, t.onProgress, u, c)];
          case 7:
            l = h.sent(), h.label = 8;
          case 8:
            return [2, l];
        }
      });
    });
  }

  function Tu(r) {
    var t = this;
    return function (e, n, o) {
      return n === void 0 && (n = ''), $(t, void 0, void 0, function () {
        var a, i, s, u, c, l, h, f, d, p;
        return Z(this, function (v) {
          switch (v.label) {
            case 0:
              if (a = e.map(function () {
                return !1;
              }), i = {}, s = o != null ? o.map(function () {
                return !1;
              }) : [], u = [], e.forEach(function (m, g) {
                var y = 0;
                m.weights.forEach(function (x) {
                  var b = 'quantization' in x ? x.quantization.dtype : x.dtype, w = _i[b] * J(x.shape),
                    _ = function () {
                      a[g] = !0, i[g] == null && (i[g] = []), i[g].push({
                        manifestEntry: x,
                        groupOffset: y,
                        sizeBytes: w,
                      });
                    };
                  o != null ? o.forEach(function (S, E) {
                    S === x.name && (_(), s[E] = !0);
                  }) : _(), u.push(x.name), y += w;
                });
              }), !s.every(function (m) {
                return m;
              })) throw c = o.filter(function (m, g) {
                return !s[g];
              }), new Error('Could not find weights in manifest with names: ' + c.join(', ') + `. 
Manifest JSON has weights with names: ` + u.join(', ') + '.');
              return l = a.reduce(function (m, g, y) {
                return g && m.push(y), m;
              }, []), h = [], l.forEach(function (m) {
                e[m].paths.forEach(function (g) {
                  var y = n + (n.endsWith('/') ? '' : '/') + g;
                  h.push(y);
                });
              }), [4, r(h)];
            case 1:
              return f = v.sent(), d = {}, p = 0, l.forEach(function (m) {
                for (var g = e[m].paths.length, y = 0, x = 0; x < g; x++) y += f[p + x].byteLength;
                for (var b = new ArrayBuffer(y), w = new Uint8Array(b), _ = 0, S = 0; S < g; S++) {
                  var E = new Uint8Array(f[p + S]);
                  w.set(E, _), _ += E.byteLength;
                }
                i[m].forEach(function (I) {
                  var R = vh(b.slice(I.groupOffset, I.groupOffset + I.sizeBytes), [I.manifestEntry]);
                  for (var F in R) d[F] = R[F];
                }), p += g;
              }), [2, d];
          }
        });
      });
    };
  }

  _t.registerSaveRouter(function (r) {
    return O().getBool('IS_BROWSER') && !Array.isArray(r) && r.startsWith(Ka.URL_SCHEME) ? function (t) {
      return t === void 0 && (t = 'model'), new Ka(t);
    }(r.slice(Ka.URL_SCHEME.length)) : null;
  });
  var xh = function () {
    function r(t, e) {
      if (this.DEFAULT_METHOD = 'POST', e == null && (e = {}), this.weightPathPrefix = e.weightPathPrefix, this.onProgress = e.onProgress, e.fetchFunc != null ? (k(typeof e.fetchFunc == 'function', function () {
        return 'Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)';
      }), this.fetch = e.fetchFunc) : this.fetch = O().platform.fetch, k(t != null && t.length > 0, function () {
        return 'URL path for http must not be null, undefined or empty.';
      }), Array.isArray(t) && k(t.length === 2, function () {
        return 'URL paths for http must have a length of 2, (actual length is ' + t.length + ').';
      }), this.path = t, e.requestInit != null && e.requestInit.body != null) throw new Error('requestInit is expected to have no pre-existing body, but has one.');
      this.requestInit = e.requestInit || {};
    }

    return r.prototype.save = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n, o, a;
        return Z(this, function (i) {
          switch (i.label) {
            case 0:
              if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.');
              return (e = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit)).body = new FormData, n = [{
                paths: ['./model.weights.bin'],
                weights: t.weightSpecs,
              }], o = {
                modelTopology: t.modelTopology,
                format: t.format,
                generatedBy: t.generatedBy,
                convertedBy: t.convertedBy,
                userDefinedMetadata: t.userDefinedMetadata,
                weightsManifest: n,
              }, e.body.append('model.json', new Blob([JSON.stringify(o)], { type: 'application/json' }), 'model.json'), t.weightData != null && e.body.append('model.weights.bin', new Blob([t.weightData], { type: 'application/octet-stream' }), 'model.weights.bin'), [4, this.fetch(this.path, e)];
            case 1:
              if ((a = i.sent()).ok) return [2, { modelArtifactsInfo: uo(t), responses: [a] }];
              throw new Error('BrowserHTTPRequest.save() failed due to HTTP response status ' + a.status + '.');
          }
        });
      });
    }, r.prototype.load = function () {
      return $(this, void 0, void 0, function () {
        var t, e, n, o, a, i, s, u, c, l, h, f;
        return Z(this, function (d) {
          switch (d.label) {
            case 0:
              return [4, this.fetch(this.path, this.requestInit)];
            case 1:
              if (!(t = d.sent()).ok) throw new Error('Request to ' + this.path + ' failed with status code ' + t.status + '. Please verify this URL points to the model JSON of the model to load.');
              d.label = 2;
            case 2:
              return d.trys.push([2, 4, , 5]), [4, t.json()];
            case 3:
              return e = d.sent(), [3, 5];
            case 4:
              throw d.sent(), n = 'Failed to parse model JSON of response from ' + this.path + '.', this.path.endsWith('.pb') ? n += ' Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the \'pb2json\'NPM script in the tensorflow/tfjs-converter repository.' : n += ' Please make sure the server is serving valid JSON for this request.', new Error(n);
            case 5:
              if (o = e.modelTopology, a = e.weightsManifest, i = e.generatedBy, s = e.convertedBy, u = e.format, c = e.userDefinedMetadata, o == null && a == null) throw new Error('The JSON from HTTP path ' + this.path + ' contains neither model topology or manifest for weights.');
              return a == null ? [3, 7] : [4, this.loadWeights(a)];
            case 6:
              f = d.sent(), l = f[0], h = f[1], d.label = 7;
            case 7:
              return [2, {
                modelTopology: o,
                weightSpecs: l,
                weightData: h,
                userDefinedMetadata: c,
                generatedBy: i,
                convertedBy: s,
                format: u,
              }];
          }
        });
      });
    }, r.prototype.loadWeights = function (t) {
      return $(this, void 0, void 0, function () {
        var e, n, o, a, i, s, u, c, l, h, f;
        return Z(this, function (d) {
          switch (d.label) {
            case 0:
              for (e = Array.isArray(this.path) ? this.path[1] : this.path, n = function (p) {
                var v = p.lastIndexOf('/'), m = p.lastIndexOf('?'), g = p.substring(0, v),
                  y = m > v ? p.substring(m) : '';
                return [g + '/', y];
              }(e), o = n[0], a = n[1], i = this.weightPathPrefix || o, s = [], u = 0, c = t; u < c.length; u++) l = c[u], s.push.apply(s, l.weights);
              return h = [], t.forEach(function (p) {
                p.paths.forEach(function (v) {
                  h.push(i + v + a);
                });
              }), [4, bh(h, { requestInit: this.requestInit, fetchFunc: this.fetch, onProgress: this.onProgress })];
            case 1:
              return f = d.sent(), [2, [s, vs(f)]];
          }
        });
      });
    }, r.URL_SCHEME_REGEX = /^https?:\/\//, r;
  }();

  function ki(r) {
    return r.match(xh.URL_SCHEME_REGEX) != null;
  }

  var Fu = function (r, t) {
    return typeof fetch > 'u' ? null : (Array.isArray(r) ? r.every(function (e) {
      return ki(e);
    }) : ki(r)) ? Ii(r, { onProgress: t }) : null;
  };

  function Ii(r, t) {
    return new xh(r, t);
  }

  _t.registerSaveRouter(Fu), _t.registerLoadRouter(Fu);
  var Ya = function () {
    function r(t) {
      this.modelArtifacts = t;
    }

    return r.prototype.load = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (t) {
          return [2, this.modelArtifacts];
        });
      });
    }, r;
  }(), v0 = function () {
    function r(t) {
      this.saveHandler = t;
    }

    return r.prototype.save = function (t) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          return [2, this.saveHandler(t)];
        });
      });
    }, r;
  }(), wh = Object.freeze({
    browserFiles: function (r) {
      return new p0(r);
    }, browserHTTPRequest: function (r, t) {
      return Ii(r, t);
    }, concatenateArrayBuffers: vs, decodeWeights: vh, encodeWeights: function (r, t) {
      return $(this, void 0, void 0, function () {
        var e, n, o, a, i, s = this;
        return Z(this, function (u) {
          switch (u.label) {
            case 0:
              for (e = [], n = [], o = Array.isArray(r) ? r.map(function (c) {
                return c.name;
              }) : Object.keys(r), a = function (c) {
                var l = o[c], h = Array.isArray(r) ? r[c].tensor : r[l];
                if (h.dtype !== 'float32' && h.dtype !== 'int32' && h.dtype !== 'bool' && h.dtype !== 'string') throw new Error('Unsupported dtype in weight \'' + l + '\': ' + h.dtype);
                var f = { name: l, shape: h.shape, dtype: h.dtype };
                if (h.dtype === 'string') {
                  var d = new Promise(function (p) {
                    return $(s, void 0, void 0, function () {
                      var v, m, g, y, x, b, w;
                      return Z(this, function (_) {
                        switch (_.label) {
                          case 0:
                            return [4, h.bytes()];
                          case 1:
                            for (v = _.sent(), m = v.reduce(function (S, E) {
                              return S + E.length;
                            }, 0) + ea * v.length, g = new Uint8Array(m), y = 0, x = 0; x < v.length; x++) b = v[x], w = new Uint8Array(new Uint32Array([b.length]).buffer), g.set(w, y), y += ea, g.set(b, y), y += b.length;
                            return p(g), [2];
                        }
                      });
                    });
                  });
                  n.push(d);
                } else n.push(h.data());
                t != null && (f.group = t), e.push(f);
              }, i = 0; i < o.length; ++i) a(i);
              return [4, Promise.all(n)];
            case 1:
              return [2, { data: r0(u.sent()), specs: e }];
          }
        });
      });
    }, fromMemory: function (r, t, e, n) {
      return arguments.length === 1 ? r.modelTopology != null || r.weightSpecs != null ? new Ya(r) : (console.warn('Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.'), new Ya({ modelTopology: r })) : (console.warn('Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.'), new Ya({
        modelTopology: r,
        weightSpecs: t,
        weightData: e,
        trainingConfig: n,
      }));
    }, getLoadHandlers: function (r, t) {
      return _t.getLoadHandlers(r, t);
    }, getModelArtifactsInfoForJSON: uo, getSaveHandlers: function (r) {
      return _t.getSaveHandlers(r);
    }, http: Ii, isHTTPScheme: ki, loadWeights: function (r, t, e, n) {
      return t === void 0 && (t = ''), $(this, void 0, void 0, function () {
        return Z(this, function (o) {
          return [2, Tu(function (a) {
            return bh(a, { requestInit: n });
          })(r, t, e)];
        });
      });
    }, registerLoadRouter: function (r) {
      return _t.registerLoadRouter(r);
    }, registerSaveRouter: function (r) {
      return _t.registerSaveRouter(r);
    }, weightsLoaderFactory: Tu, withSaveHandler: function (r) {
      return new v0(r);
    }, copyModel: function (r, t) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          return [2, Iu(r, t, !1)];
        });
      });
    }, listModels: function () {
      return $(this, void 0, void 0, function () {
        var r, t, e, n, o, a, i;
        return Z(this, function (s) {
          switch (s.label) {
            case 0:
              r = Rn.getSchemes(), t = {}, e = 0, n = r, s.label = 1;
            case 1:
              return e < n.length ? (o = n[e], [4, Rn.getManager(o).listModels()]) : [3, 4];
            case 2:
              for (i in a = s.sent()) t[o + yr + i] = a[i];
              s.label = 3;
            case 3:
              return e++, [3, 1];
            case 4:
              return [2, t];
          }
        });
      });
    }, moveModel: function (r, t) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          return [2, Iu(r, t, !0)];
        });
      });
    }, removeModel: function (r) {
      return $(this, void 0, void 0, function () {
        var t;
        return Z(this, function (e) {
          return t = Po(r), [2, Rn.getManager(t.scheme).removeModel(t.path)];
        });
      });
    },
  }), lr, m0 = A({
    confusionMatrix_: function (r, t, e) {
      var n = C(r, 'labels', 'confusionMatrix'), o = C(t, 'predictions', 'confusionMatrix');
      k(e == null || e > 0 && Number.isInteger(e), function () {
        return 'If provided, numClasses must be a positive integer, but got ' + e;
      }), k(n.rank === 1, function () {
        return 'Expected the rank of labels to be 1, but got ' + n.rank;
      }), k(o.rank === 1, function () {
        return 'Expected the rank of predictions to be 1, but got ' + o.rank;
      }), k(n.shape[0] === o.shape[0], function () {
        return 'Mismatch in the number of examples: ' + n.shape[0] + ' vs. ' + o.shape[0] + '. Labels and predictions should have the same number of elements.';
      }), k(e > 0 && Number.isInteger(e), function () {
        return 'numClasses is required to be a positive integer, but got ' + e;
      });
      var a = gi(n.asType('int32'), e), i = gi(o.asType('int32'), e);
      return a.transpose().matMul(i).asType('int32');
    },
  });
  Object.freeze({ confusionMatrix: m0 });
  var g0 = A({
    fromPixels_: function (r, t) {
      if (t === void 0 && (t = 3), t > 4) throw new Error('Cannot construct Tensor with more than 4 channels from pixels.');
      if (r == null) throw new Error('pixels passed to tf.browser.fromPixels() can not be null');
      var e = !1, n = !1, o = !1, a = !1, i = !1;
      if (r.data instanceof Uint8Array) e = !0; else if (typeof ImageData < 'u' && r instanceof ImageData) n = !0; else if (typeof HTMLVideoElement < 'u' && r instanceof HTMLVideoElement) o = !0; else if (typeof HTMLImageElement < 'u' && r instanceof HTMLImageElement) a = !0; else {
        if (r.getContext == null) throw new Error('pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ' + r.constructor.name);
        i = !0;
      }
      if (o && o && r.readyState < 2) throw new Error('The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.');
      if (Zu('FromPixels', T.backendName) != null) return T.runKernel('FromPixels', { pixels: r }, { numChannels: t });
      var s, u, c = o ? [r.videoWidth, r.videoHeight] : [r.width, r.height], l = c[0], h = c[1];
      if (i ? s = r.getContext('2d').getImageData(0, 0, l, h).data : n || e ? s = r.data : (a || o) && (lr == null && (lr = document.createElement('canvas').getContext('2d')), lr.canvas.width = l, lr.canvas.height = h, lr.drawImage(r, 0, 0, l, h), s = lr.getImageData(0, 0, l, h).data), t === 4) u = new Int32Array(s); else {
        var f = l * h;
        u = new Int32Array(f * t);
        for (var d = 0; d < f; d++) for (var p = 0; p < t; ++p) u[d * t + p] = s[4 * d + p];
      }
      return Wi(u, [h, l, t], 'int32');
    },
  }), ms = Object.freeze({
    toPixels: function (r, t) {
      return $(this, void 0, void 0, function () {
        var e, n, o, a, i, s, u, c, l, h, f, d, p, v, m, g, y, x, b, w, _, S, E;
        return Z(this, function (I) {
          switch (I.label) {
            case 0:
              if (e = C(r, 'img', 'toPixels'), r instanceof Se || (e = e.toInt()), e.rank !== 2 && e.rank !== 3) throw new Error('toPixels only supports rank 2 or 3 tensors, got rank ' + e.rank + '.');
              if (n = e.shape.slice(0, 2), o = n[0], a = n[1], (i = e.rank === 2 ? 1 : e.shape[2]) > 4 || i === 2) throw new Error('toPixels only supports depth of size 1, 3 or 4 but got ' + i);
              return [4, e.data()];
            case 1:
              return s = I.sent(), u = e.min(), c = e.max(), [4, Promise.all([u.data(), c.data()])];
            case 2:
              if (l = I.sent(), h = l[0], f = l[1], d = h[0], p = f[0], u.dispose(), c.dispose(), e.dtype === 'float32') {
                if (d < 0 || p > 1) throw new Error('Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [' + d + ' - ' + p + '].');
              } else {
                if (e.dtype !== 'int32') throw new Error('Unsupported type for toPixels: ' + e.dtype + '. Please use float32 or int32 tensors.');
                if (d < 0 || p > 255) throw new Error('Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [' + d + ' - ' + p + '].');
              }
              for (v = e.dtype === 'float32' ? 255 : 1, m = new Uint8ClampedArray(a * o * 4), g = 0; g < o * a; ++g) y = void 0, x = void 0, b = void 0, w = void 0, i === 1 ? (y = s[g] * v, x = s[g] * v, b = s[g] * v, w = 255) : i === 3 ? (y = s[3 * g] * v, x = s[3 * g + 1] * v, b = s[3 * g + 2] * v, w = 255) : i === 4 && (y = s[4 * g] * v, x = s[4 * g + 1] * v, b = s[4 * g + 2] * v, w = s[4 * g + 3] * v), m[(_ = 4 * g) + 0] = Math.round(y), m[_ + 1] = Math.round(x), m[_ + 2] = Math.round(b), m[_ + 3] = Math.round(w);
              return t != null && (t.width = a, t.height = o, S = t.getContext('2d'), E = new ImageData(m, a, o), S.putImageData(E, 0, 0)), e !== r && e.dispose(), [2, m];
          }
        });
      });
    }, fromPixels: g0,
  }), _h = function () {
    function r() {
    }

    return r.prototype.getClassName = function () {
      return this.constructor.className;
    }, r.fromConfig = function (t, e) {
      return new t(e);
    }, r;
  }(), Ch = function () {
    function r() {
      this.classNameMap = {};
    }

    return r.getMap = function () {
      return r.instance == null && (r.instance = new r), r.instance;
    }, r.register = function (t) {
      r.getMap().classNameMap[t.className] = [t, t.fromConfig];
    }, r;
  }();

  function Bn(r) {
    k(r.className != null, function () {
      return 'Class being registered does not have the static className property defined.';
    }), k(typeof r.className == 'string', function () {
      return 'className is required to be a string, but got type ' + typeof r.className;
    }), k(r.className.length > 0, function () {
      return 'Class being registered has an empty-string as its className, which is disallowed.';
    }), Ch.register(r);
  }

  Object.freeze({ Serializable: _h, SerializationMap: Ch, registerClass: Bn });
  var y0 = .001, Eh = .1;

  function $a() {
    return T.backend.floatPrecision() === 32 ? y0 : Eh;
  }

  function Za(r, t, e) {
    var n = !0;
    if ((Je(r) || Je(t)) && (n = !1), Je(r) && Je(t) && (n = !0), n) {
      var o = r.constructor.name, a = t.constructor.name;
      if (o !== a) throw new Error('Arrays are of different type. Actual: ' + o + '. Expected: ' + a);
    }
    if (Array.isArray(r) && Array.isArray(t)) {
      var i = Kt(r), s = Kt(t);
      if (!Be(i, s)) throw new Error('Arrays have different shapes. Actual: [' + i + ']. Expected: [' + s + ']');
    }
    var u = Je(r) ? r : ln(r), c = Je(t) ? t : ln(t);
    if (u.length !== c.length) throw new Error('Arrays have different lengths actual: ' + u.length + ' vs expected: ' + c.length + `.
Actual:   ` + u + `.
Expected: ` + c + '.');
    for (var l = 0; l < c.length; ++l) {
      var h = u[l], f = c[l];
      if (!e(h, f)) throw new Error('Arrays differ: actual[' + l + '] = ' + h + ', expected[' + l + '] = ' + f + `.
Actual:   ` + u + `.
Expected: ` + c + '.');
    }
  }

  function Ja(r, t, e) {
    return !isFinite(r) && !isFinite(t) || !(isNaN(r) || isNaN(t) || Math.abs(r - t) > e);
  }

  Object.freeze({
    TEST_EPSILON_FLOAT16: Eh, expectArraysClose: function (r, t, e) {
      return e == null && (e = $a()), Za(r, t, function (n, o) {
        return Ja(n, o, e);
      });
    }, testEpsilon: $a, expectPromiseToFail: function (r, t) {
      r().then(function () {
        return t.fail();
      }, function () {
        return t();
      });
    }, expectArraysEqual: function (r, t) {
      var e = typeof t == 'string' || typeof t == 'number' || typeof t == 'boolean' ? [t] : t;
      return En(r) || En(r[0]) || En(t) || En(t[0]) ? Za(r, e, function (n, o) {
        return n == o;
      }) : Za(r, t, function (n, o) {
        return Ja(n, o, 0);
      });
    }, expectNumbersClose: function (r, t, e) {
      if (e == null && (e = $a()), !Ja(r, t, e)) throw new Error('Numbers differ: actual === ' + r + ', expected === ' + t);
    }, expectValuesInRange: function (r, t, e) {
      for (var n = 0; n < r.length; n++) if (r[n] < t || r[n] > e) throw new Error('Value out of range:' + r[n] + ' low: ' + t + ', high: ' + e);
    }, expectArrayBuffersEqual: function (r, t) {
      expect(new Float32Array(r)).toEqual(new Float32Array(t));
    },
  });
  Object.freeze({
    gpgpu_util: zp, webgl_util: hd, forceHalfFloat: function () {
      O().set('WEBGL_FORCE_F16_TEXTURES', !0);
    }, MathBackendWebGL: Ol, setWebGLContext: vc, GPGPUContext: Al,
  });
  var rr = function (r) {
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return Mt(t, r), t.prototype.minimize = function (e, n, o) {
      n === void 0 && (n = !1);
      var a = this.computeGradients(e, o), i = a.value, s = a.grads;
      if (o != null) {
        var u = o.map(function (c) {
          return { name: c.name, tensor: s[c.name] };
        });
        this.applyGradients(u);
      } else this.applyGradients(s);
      return mt(s), n ? i : (i.dispose(), null);
    }, Object.defineProperty(t.prototype, 'iterations', {
      get: function () {
        return this.iterations_ == null && (this.iterations_ = 0), this.iterations_;
      }, enumerable: !0, configurable: !0,
    }), t.prototype.incrementIterations = function () {
      this.iterations_ = this.iterations + 1;
    }, t.prototype.computeGradients = function (e, n) {
      return Hd(e, n);
    }, t.prototype.dispose = function () {
      this.iterations_ != null && mt(this.iterations_);
    }, t.prototype.saveIterations = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          return this.iterations_ == null && (this.iterations_ = 0), [2, {
            name: 'iter',
            tensor: X(this.iterations_, 'int32'),
          }];
        });
      });
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          throw new Error('getWeights() is not implemented for this optimizer yet.');
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          throw new Error('setWeights() is not implemented for this optimizer class ' + this.getClassName());
        });
      });
    }, t.prototype.extractIterations = function (e) {
      return $(this, void 0, void 0, function () {
        var n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this, [4, e[0].tensor.data()];
            case 1:
              return n.iterations_ = o.sent()[0], [2, e.slice(1)];
          }
        });
      });
    }, t;
  }(_h);
  Object.defineProperty(rr, Symbol.hasInstance, {
    value: function (r) {
      return r.minimize != null && r.computeGradients != null && r.applyGradients != null;
    },
  });
  var b0 = function (r) {
    function t(e, n, o) {
      o === void 0 && (o = null);
      var a = r.call(this) || this;
      return a.learningRate = e, a.rho = n, a.epsilon = o, a.accumulatedGrads = [], a.accumulatedUpdates = [], o == null && (a.epsilon = T.backend.epsilon()), a;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this;
      (Array.isArray(e) ? e.map(function (o) {
        return o.name;
      }) : Object.keys(e)).forEach(function (o, a) {
        var i = T.registeredVariables[o];
        n.accumulatedGrads[a] == null && (n.accumulatedGrads[a] = {
          originalName: o + '/accum_grad',
          variable: K(function () {
            return ge(i).variable(!1);
          }),
        }), n.accumulatedUpdates[a] == null && (n.accumulatedUpdates[a] = {
          originalName: o + '/accum_var',
          variable: K(function () {
            return ge(i).variable(!1);
          }),
        });
        var s = Array.isArray(e) ? e[a].tensor : e[o];
        if (s != null) {
          var u = n.accumulatedGrads[a].variable, c = n.accumulatedUpdates[a].variable;
          K(function () {
            var l = u.mul(n.rho).add(s.square().mul(1 - n.rho)),
              h = c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),
              f = c.mul(n.rho).add(h.square().mul(1 - n.rho));
            u.assign(l), c.assign(f);
            var d = h.mul(-n.learningRate).add(i);
            i.assign(d);
          });
        }
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.accumulatedUpdates != null && (mt(this.accumulatedGrads.map(function (e) {
        return e.variable;
      })), mt(this.accumulatedUpdates.map(function (e) {
        return e.variable;
      })));
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        var e;
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return e = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
            case 1:
              return [2, [n.sent()].concat(e.map(function (o) {
                return { name: o.originalName, tensor: o.variable };
              }))];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        var n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              return e = o.sent(), n = e.length / 2, this.accumulatedGrads = e.slice(0, n).map(function (a) {
                return { originalName: a.name, variable: a.tensor.variable(!1) };
              }), this.accumulatedUpdates = e.slice(n, 2 * n).map(function (a) {
                return { originalName: a.name, variable: a.tensor.variable(!1) };
              }), [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.rho, n.epsilon);
    }, t.className = 'Adadelta', t;
  }(rr);
  Bn(b0);
  var x0 = function (r) {
    function t(e, n) {
      n === void 0 && (n = .1);
      var o = r.call(this) || this;
      return o.learningRate = e, o.initialAccumulatorValue = n, o.accumulatedGrads = [], o;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this;
      (Array.isArray(e) ? e.map(function (o) {
        return o.name;
      }) : Object.keys(e)).forEach(function (o, a) {
        var i = T.registeredVariables[o];
        n.accumulatedGrads[a] == null && (n.accumulatedGrads[a] = {
          originalName: o + '/accumulator',
          variable: K(function () {
            return Xt(i.shape, n.initialAccumulatorValue).variable(!1);
          }),
        });
        var s = Array.isArray(e) ? e[a].tensor : e[o];
        if (s != null) {
          var u = n.accumulatedGrads[a].variable;
          K(function () {
            var c = u.add(s.square());
            u.assign(c);
            var l = s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);
            i.assign(l);
          });
        }
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.accumulatedGrads != null && mt(this.accumulatedGrads.map(function (e) {
        return e.variable;
      }));
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [e.sent()].concat(this.accumulatedGrads.map(function (n) {
                return { name: n.originalName, tensor: n.variable };
              }))];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              return e = n.sent(), this.accumulatedGrads = e.map(function (o) {
                return { originalName: o.name, variable: o.tensor.variable(!1) };
              }), [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.initialAccumulatorValue);
    }, t.className = 'Adagrad', t;
  }(rr);
  Bn(x0);
  var w0 = function (r) {
    function t(e, n, o, a) {
      a === void 0 && (a = null);
      var i = r.call(this) || this;
      return i.learningRate = e, i.beta1 = n, i.beta2 = o, i.epsilon = a, i.accumulatedFirstMoment = [], i.accumulatedSecondMoment = [], K(function () {
        i.accBeta1 = X(n).variable(), i.accBeta2 = X(o).variable();
      }), a == null && (i.epsilon = T.backend.epsilon()), i;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this, o = Array.isArray(e) ? e.map(function (a) {
        return a.name;
      }) : Object.keys(e);
      K(function () {
        var a = qe(1, n.accBeta1), i = qe(1, n.accBeta2);
        o.forEach(function (s, u) {
          var c = T.registeredVariables[s];
          n.accumulatedFirstMoment[u] == null && (n.accumulatedFirstMoment[u] = {
            originalName: s + '/m',
            variable: K(function () {
              return ge(c).variable(!1);
            }),
          }), n.accumulatedSecondMoment[u] == null && (n.accumulatedSecondMoment[u] = {
            originalName: s + '/v',
            variable: K(function () {
              return ge(c).variable(!1);
            }),
          });
          var l = Array.isArray(e) ? e[u].tensor : e[s];
          if (l != null) {
            var h = n.accumulatedFirstMoment[u].variable, f = n.accumulatedSecondMoment[u].variable,
              d = h.mul(n.beta1).add(l.mul(1 - n.beta1)), p = f.mul(n.beta2).add(l.square().mul(1 - n.beta2)),
              v = d.div(a), m = p.div(i);
            h.assign(d), f.assign(p);
            var g = v.div(m.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);
            c.assign(g);
          }
        }), n.accBeta1.assign(n.accBeta1.mul(n.beta1)), n.accBeta2.assign(n.accBeta2.mul(n.beta2));
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.accBeta1.dispose(), this.accBeta2.dispose(), this.accumulatedFirstMoment != null && mt(this.accumulatedFirstMoment.map(function (e) {
        return e.variable;
      })), this.accumulatedSecondMoment != null && mt(this.accumulatedSecondMoment.map(function (e) {
        return e.variable;
      }));
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        var e;
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return e = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
            case 1:
              return [2, [n.sent()].concat(e.map(function (o) {
                return { name: o.originalName, tensor: o.variable };
              }))];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        var n, o = this;
        return Z(this, function (a) {
          switch (a.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              return e = a.sent(), K(function () {
                o.accBeta1.assign(Jo(o.beta1, o.iterations_ + 1)), o.accBeta2.assign(Jo(o.beta2, o.iterations_ + 1));
              }), n = e.length / 2, this.accumulatedFirstMoment = e.slice(0, n).map(function (i) {
                return { originalName: i.name, variable: i.tensor.variable(!1) };
              }), this.accumulatedSecondMoment = e.slice(n, 2 * n).map(function (i) {
                return { originalName: i.name, variable: i.tensor.variable(!1) };
              }), [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.beta1, n.beta2, n.epsilon);
    }, t.className = 'Adam', t;
  }(rr);
  Bn(w0);
  var _0 = function (r) {
    function t(e, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      var s = r.call(this) || this;
      return s.learningRate = e, s.beta1 = n, s.beta2 = o, s.epsilon = a, s.decay = i, s.accumulatedFirstMoment = [], s.accumulatedWeightedInfNorm = [], K(function () {
        s.iteration = X(0).variable(), s.accBeta1 = X(n).variable();
      }), a == null && (s.epsilon = T.backend.epsilon()), s;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this, o = Array.isArray(e) ? e.map(function (a) {
        return a.name;
      }) : Object.keys(e);
      K(function () {
        var a = qe(1, n.accBeta1), i = Dt(-n.learningRate, n.iteration.mul(n.decay).add(1));
        o.forEach(function (s, u) {
          var c = T.registeredVariables[s];
          n.accumulatedFirstMoment[u] == null && (n.accumulatedFirstMoment[u] = {
            originalName: s + '/m',
            variable: ge(c).variable(!1),
          }), n.accumulatedWeightedInfNorm[u] == null && (n.accumulatedWeightedInfNorm[u] = {
            originalName: s + '/v',
            variable: ge(c).variable(!1),
          });
          var l = Array.isArray(e) ? e[u].tensor : e[s];
          if (l != null) {
            var h = n.accumulatedFirstMoment[u].variable, f = n.accumulatedWeightedInfNorm[u].variable,
              d = h.mul(n.beta1).add(l.mul(1 - n.beta1)), p = f.mul(n.beta2), v = l.abs(), m = p.maximum(v);
            h.assign(d), f.assign(m);
            var g = i.div(a).mul(d.div(m.add(n.epsilon))).add(c);
            c.assign(g);
          }
        }), n.iteration.assign(n.iteration.add(1)), n.accBeta1.assign(n.accBeta1.mul(n.beta1));
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.accBeta1.dispose(), this.iteration.dispose(), this.accumulatedFirstMoment != null && mt(this.accumulatedFirstMoment.map(function (e) {
        return e.variable;
      })), this.accumulatedWeightedInfNorm != null && mt(this.accumulatedWeightedInfNorm.map(function (e) {
        return e.variable;
      }));
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          throw new Error('getWeights() is not implemented for Adamax yet.');
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          throw new Error('setWeights() is not implemented for Adamax yet.');
        });
      });
    }, t.prototype.getConfig = function () {
      return {
        learningRate: this.learningRate,
        beta1: this.beta1,
        beta2: this.beta2,
        epsilon: this.epsilon,
        decay: this.decay,
      };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.beta1, n.beta2, n.epsilon, n.decay);
    }, t.className = 'Adamax', t;
  }(rr);
  Bn(_0);
  var kh = function (r) {
    function t(e) {
      var n = r.call(this) || this;
      return n.learningRate = e, n.setLearningRate(e), n;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this;
      (Array.isArray(e) ? e.map(function (o) {
        return o.name;
      }) : Object.keys(e)).forEach(function (o, a) {
        var i = Array.isArray(e) ? e[a].tensor : e[o];
        if (i != null) {
          var s = T.registeredVariables[o];
          K(function () {
            var u = n.c.mul(i).add(s);
            s.assign(u);
          });
        }
      }), this.incrementIterations();
    }, t.prototype.setLearningRate = function (e) {
      this.learningRate = e, this.c != null && this.c.dispose(), this.c = fd(X(-e));
    }, t.prototype.dispose = function () {
      this.c.dispose();
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [e.sent()]];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              if ((e = n.sent()).length !== 0) throw new Error('SGD optimizer does not have settable weights.');
              return [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return { learningRate: this.learningRate };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate);
    }, t.className = 'SGD', t;
  }(rr);
  Bn(kh);
  var C0 = function (r) {
    function t(e, n, o) {
      o === void 0 && (o = !1);
      var a = r.call(this, e) || this;
      return a.learningRate = e, a.momentum = n, a.useNesterov = o, a.accumulations = [], a.m = X(a.momentum), a;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this;
      (Array.isArray(e) ? e.map(function (o) {
        return o.name;
      }) : Object.keys(e)).forEach(function (o, a) {
        var i = T.registeredVariables[o];
        n.accumulations[a] == null && (n.accumulations[a] = {
          originalName: o + '/momentum', variable: K(function () {
            return ge(i).variable(!1);
          }),
        });
        var s = n.accumulations[a].variable, u = Array.isArray(e) ? e[a].tensor : e[o];
        u != null && K(function () {
          var c, l = n.m.mul(s).add(u);
          c = n.useNesterov ? n.c.mul(u.add(l.mul(n.m))).add(i) : n.c.mul(l).add(i), s.assign(l), i.assign(c);
        });
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.m.dispose(), this.accumulations != null && mt(this.accumulations.map(function (e) {
        return e.variable;
      }));
    }, t.prototype.setMomentum = function (e) {
      this.momentum = e;
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        return Z(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [e.sent()].concat(this.accumulations.map(function (n) {
                return { name: n.originalName, tensor: n.variable };
              }))];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              return e = n.sent(), this.accumulations = e.map(function (o) {
                return { originalName: o.name, variable: o.tensor.variable(!1) };
              }), [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.momentum, n.useNesterov);
    }, t.className = 'Momentum', t;
  }(kh);
  Bn(C0);
  var E0 = function (r) {
    function t(e, n, o, a, i) {
      n === void 0 && (n = .9), o === void 0 && (o = 0), a === void 0 && (a = null), i === void 0 && (i = !1);
      var s = r.call(this) || this;
      if (s.learningRate = e, s.decay = n, s.momentum = o, s.epsilon = a, s.accumulatedMeanSquares = [], s.accumulatedMoments = [], s.accumulatedMeanGrads = [], s.centered = i, a == null && (s.epsilon = T.backend.epsilon()), e == null) throw new Error('learningRate for RMSPropOptimizer must be defined.');
      return s;
    }

    return Mt(t, r), t.prototype.applyGradients = function (e) {
      var n = this;
      (Array.isArray(e) ? e.map(function (o) {
        return o.name;
      }) : Object.keys(e)).forEach(function (o, a) {
        var i = T.registeredVariables[o];
        n.accumulatedMeanSquares[a] == null && (n.accumulatedMeanSquares[a] = {
          originalName: o + '/rms',
          variable: K(function () {
            return ge(i).variable(!1);
          }),
        }), n.accumulatedMoments[a] == null && (n.accumulatedMoments[a] = {
          originalName: o + '/momentum',
          variable: K(function () {
            return ge(i).variable(!1);
          }),
        }), n.accumulatedMeanGrads[a] == null && n.centered && (n.accumulatedMeanGrads[a] = {
          originalName: o + '/mg',
          variable: K(function () {
            return ge(i).variable(!1);
          }),
        });
        var s = Array.isArray(e) ? e[a].tensor : e[o];
        if (s != null) {
          var u = n.accumulatedMeanSquares[a].variable, c = n.accumulatedMoments[a].variable;
          K(function () {
            var l = u.mul(n.decay).add(s.square().mul(1 - n.decay));
            if (n.centered) {
              var h = n.accumulatedMeanGrads[a].variable, f = h.mul(n.decay).add(s.mul(1 - n.decay)),
                d = c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));
              u.assign(l), h.assign(f), c.assign(d);
              var p = i.sub(d);
              i.assign(p);
            } else {
              var v = u.mul(n.decay).add(s.square().mul(1 - n.decay));
              d = c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())), u.assign(v), c.assign(d), p = i.sub(d), i.assign(p);
            }
          });
        }
      }), this.incrementIterations();
    }, t.prototype.dispose = function () {
      this.accumulatedMeanSquares != null && mt(this.accumulatedMeanSquares.map(function (e) {
        return e.variable;
      })), this.accumulatedMeanGrads != null && this.centered && mt(this.accumulatedMeanGrads.map(function (e) {
        return e.variable;
      })), this.accumulatedMoments != null && mt(this.accumulatedMoments.map(function (e) {
        return e.variable;
      }));
    }, t.prototype.getWeights = function () {
      return $(this, void 0, void 0, function () {
        var e;
        return Z(this, function (n) {
          switch (n.label) {
            case 0:
              return e = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && e.push.apply(e, this.accumulatedMeanGrads), [4, this.saveIterations()];
            case 1:
              return [2, [n.sent()].concat(e.map(function (o) {
                return { name: o.originalName, tensor: o.variable };
              }))];
          }
        });
      });
    }, t.prototype.setWeights = function (e) {
      return $(this, void 0, void 0, function () {
        var n;
        return Z(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.extractIterations(e)];
            case 1:
              return e = o.sent(), n = this.centered ? e.length / 3 : e.length / 2, this.accumulatedMeanSquares = e.slice(0, n).map(function (a) {
                return { originalName: a.name, variable: a.tensor.variable(!1) };
              }), this.accumulatedMoments = e.slice(n, 2 * n).map(function (a) {
                return { originalName: a.name, variable: a.tensor.variable(!1) };
              }), this.centered && (this.accumulatedMeanGrads = e.slice(2 * n, 3 * n).map(function (a) {
                return { originalName: a.name, variable: a.tensor.variable(!1) };
              })), [2];
          }
        });
      });
    }, t.prototype.getConfig = function () {
      return {
        learningRate: this.learningRate,
        decay: this.decay,
        momentum: this.momentum,
        epsilon: this.epsilon,
        centered: this.centered,
      };
    }, t.fromConfig = function (e, n) {
      return new e(n.learningRate, n.decay, n.momentum, n.epsilon, n.centered);
    }, t.className = 'RMSProp', t;
  }(rr);
  Bn(E0);
  Se.prototype.squaredDifference = function (r) {
    return Bl(this, r);
  }, M = $g;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  var Ri = function (r, t) {
    return Ri = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) {
      e.__proto__ = n;
    } || function (e, n) {
      for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
    }, Ri(r, t);
  };

  function oe(r, t) {
    Ri(r, t);

    function e() {
      this.constructor = r;
    }

    r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e);
  }

  var nt = function () {
    return nt = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        e = arguments[n];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      }
      return t;
    }, nt.apply(this, arguments);
  };

  function Q(r, t, e, n) {
    function o(a) {
      return a instanceof e ? a : new e(function (i) {
        i(a);
      });
    }

    return new (e || (e = Promise))(function (a, i) {
      function s(l) {
        try {
          c(n.next(l));
        } catch (h) {
          i(h);
        }
      }

      function u(l) {
        try {
          c(n.throw(l));
        } catch (h) {
          i(h);
        }
      }

      function c(l) {
        l.done ? a(l.value) : o(l.value).then(s, u);
      }

      c((n = n.apply(r, t || [])).next());
    });
  }

  function ee(r, t) {
    var e = {
      label: 0, sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      }, trys: [], ops: [],
    }, n, o, a, i;
    return i = {
      next: s(0),
      throw: s(1),
      return: s(2),
    }, typeof Symbol == 'function' && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function s(c) {
      return function (l) {
        return u([c, l]);
      };
    }

    function u(c) {
      if (n) throw new TypeError('Generator is already executing.');
      for (; e;) try {
        if (n = 1, o && (a = c[0] & 2 ? o.return : c[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, c[1])).done) return a;
        switch (o = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return e.label++, { value: c[1], done: !1 };
          case 5:
            e.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              e = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              e.label = c[1];
              break;
            }
            if (c[0] === 6 && e.label < a[1]) {
              e.label = a[1], a = c;
              break;
            }
            if (a && e.label < a[2]) {
              e.label = a[2], e.ops.push(c);
              break;
            }
            a[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        c = t.call(r, e);
      } catch (l) {
        c = [6, l], o = 0;
      } finally {
        n = a = 0;
      }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  }

  function Gr() {
    for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
    for (var n = Array(r), o = 0, t = 0; t < e; t++) for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
    return n;
  }

  var wr = function () {
    function r(t, e) {
      if (!Xn(t) || !Xn(e)) throw new Error('Dimensions.constructor - expected width and height to be valid numbers, instead have ' + JSON.stringify({
        width: t,
        height: e,
      }));
      this._width = t, this._height = e;
    }

    return Object.defineProperty(r.prototype, 'width', {
      get: function () {
        return this._width;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'height', {
      get: function () {
        return this._height;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.reverse = function () {
      return new r(1 / this.width, 1 / this.height);
    }, r;
  }();

  function ya(r, t) {
    return r instanceof Se && r.shape.length === t;
  }

  function k0(r) {
    return ya(r, 2);
  }

  function ba(r) {
    return ya(r, 3);
  }

  function Sn(r) {
    return ya(r, 4);
  }

  function I0(r) {
    return r % 1 !== 0;
  }

  function Nu(r) {
    return r % 2 === 0;
  }

  function R0(r, t) {
    t === void 0 && (t = 2);
    var e = Math.pow(10, t);
    return Math.floor(r * e) / e;
  }

  function Mu(r) {
    return r && r.width && r.height;
  }

  function S0(r, t) {
    var e = r.width, n = r.height, o = t / Math.max(n, e);
    return new wr(Math.round(e * o), Math.round(n * o));
  }

  function gs(r) {
    return r.reduce(function (t, e) {
      return t.add(e);
    }, new be(0, 0)).div(new be(r.length, r.length));
  }

  function to(r, t, e) {
    return Array(r).fill(0).map(function (n, o) {
      return t + o * e;
    });
  }

  function Xn(r) {
    return !!r && r !== 1 / 0 && r !== -1 / 0 && !isNaN(r) || r === 0;
  }

  function Pu(r) {
    return Xn(r) && 0 <= r && r <= 1;
  }

  var be = function () {
    function r(t, e) {
      this._x = t, this._y = e;
    }

    return Object.defineProperty(r.prototype, 'x', {
      get: function () {
        return this._x;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'y', {
      get: function () {
        return this._y;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.add = function (t) {
      return new r(this.x + t.x, this.y + t.y);
    }, r.prototype.sub = function (t) {
      return new r(this.x - t.x, this.y - t.y);
    }, r.prototype.mul = function (t) {
      return new r(this.x * t.x, this.y * t.y);
    }, r.prototype.div = function (t) {
      return new r(this.x / t.x, this.y / t.y);
    }, r.prototype.abs = function () {
      return new r(Math.abs(this.x), Math.abs(this.y));
    }, r.prototype.magnitude = function () {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }, r.prototype.floor = function () {
      return new r(Math.floor(this.x), Math.floor(this.y));
    }, r;
  }(), Tn = function () {
    function r(t, e) {
      e === void 0 && (e = !0);
      var n = t || {}, o = [n.left, n.top, n.right, n.bottom].every(Xn), a = [n.x, n.y, n.width, n.height].every(Xn);
      if (!a && !o) throw new Error('Box.constructor - expected box to be IBoundingBox | IRect, instead have ' + JSON.stringify(n));
      var i = a ? [n.x, n.y, n.width, n.height] : [n.left, n.top, n.right - n.left, n.bottom - n.top], s = i[0],
        u = i[1], c = i[2], l = i[3];
      r.assertIsValidBox({
        x: s,
        y: u,
        width: c,
        height: l,
      }, 'Box.constructor', e), this._x = s, this._y = u, this._width = c, this._height = l;
    }

    return r.isRect = function (t) {
      return !!t && [t.x, t.y, t.width, t.height].every(Xn);
    }, r.assertIsValidBox = function (t, e, n) {
      if (n === void 0 && (n = !1), !r.isRect(t)) throw new Error(e + ' - invalid box: ' + JSON.stringify(t) + ', expected object with properties x, y, width, height');
      if (!n && (t.width < 0 || t.height < 0)) throw new Error(e + ' - width (' + t.width + ') and height (' + t.height + ') must be positive numbers');
    }, Object.defineProperty(r.prototype, 'x', {
      get: function () {
        return this._x;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'y', {
      get: function () {
        return this._y;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'width', {
      get: function () {
        return this._width;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'height', {
      get: function () {
        return this._height;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'left', {
      get: function () {
        return this.x;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'top', {
      get: function () {
        return this.y;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'right', {
      get: function () {
        return this.x + this.width;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'bottom', {
      get: function () {
        return this.y + this.height;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'area', {
      get: function () {
        return this.width * this.height;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'topLeft', {
      get: function () {
        return new be(this.left, this.top);
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'topRight', {
      get: function () {
        return new be(this.right, this.top);
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'bottomLeft', {
      get: function () {
        return new be(this.left, this.bottom);
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'bottomRight', {
      get: function () {
        return new be(this.right, this.bottom);
      }, enumerable: !0, configurable: !0,
    }), r.prototype.round = function () {
      var t = [this.x, this.y, this.width, this.height].map(function (i) {
        return Math.round(i);
      }), e = t[0], n = t[1], o = t[2], a = t[3];
      return new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.floor = function () {
      var t = [this.x, this.y, this.width, this.height].map(function (i) {
        return Math.floor(i);
      }), e = t[0], n = t[1], o = t[2], a = t[3];
      return new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.toSquare = function () {
      var t = this, e = t.x, n = t.y, o = t.width, a = t.height, i = Math.abs(o - a);
      return o < a && (e -= i / 2, o += i), a < o && (n -= i / 2, a += i), new r({ x: e, y: n, width: o, height: a });
    }, r.prototype.rescale = function (t) {
      var e = Mu(t) ? t.width : t, n = Mu(t) ? t.height : t;
      return new r({ x: this.x * e, y: this.y * n, width: this.width * e, height: this.height * n });
    }, r.prototype.pad = function (t, e) {
      var n = [this.x - t / 2, this.y - e / 2, this.width + t, this.height + e], o = n[0], a = n[1], i = n[2], s = n[3];
      return new r({ x: o, y: a, width: i, height: s });
    }, r.prototype.clipAtImageBorders = function (t, e) {
      var n = this, o = n.x, a = n.y, i = n.right, s = n.bottom, u = Math.max(o, 0), c = Math.max(a, 0), l = i - u,
        h = s - c, f = Math.min(l, t - u), d = Math.min(h, e - c);
      return new r({ x: u, y: c, width: f, height: d }).floor();
    }, r.prototype.shift = function (t, e) {
      var n = this, o = n.width, a = n.height, i = this.x + t, s = this.y + e;
      return new r({ x: i, y: s, width: o, height: a });
    }, r.prototype.padAtBorders = function (t, e) {
      var n = this.width + 1, o = this.height + 1, a = 1, i = 1, s = n, u = o, c = this.left, l = this.top,
        h = this.right, f = this.bottom;
      return h > e && (s = -h + e + n, h = e), f > t && (u = -f + t + o, f = t), c < 1 && (u = 2 - c, c = 1), l < 1 && (u = 2 - l, l = 1), {
        dy: i,
        edy: u,
        dx: a,
        edx: s,
        y: l,
        ey: f,
        x: c,
        ex: h,
        w: n,
        h: o,
      };
    }, r.prototype.calibrate = function (t) {
      return new r({
        left: this.left + t.left * this.width,
        top: this.top + t.top * this.height,
        right: this.right + t.right * this.width,
        bottom: this.bottom + t.bottom * this.height,
      }).toSquare().round();
    }, r;
  }(), xa = function (r) {
    oe(t, r);

    function t(e, n, o, a, i) {
      return i === void 0 && (i = !1), r.call(this, { left: e, top: n, right: o, bottom: a }, i) || this;
    }

    return t;
  }(Tn), Ih = function () {
    function r(t, e, n, o, a) {
      this._imageDims = new wr(a.width, a.height), this._score = t, this._classScore = e, this._className = n, this._box = new Tn(o).rescale(this._imageDims);
    }

    return Object.defineProperty(r.prototype, 'score', {
      get: function () {
        return this._score;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'classScore', {
      get: function () {
        return this._classScore;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'className', {
      get: function () {
        return this._className;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'box', {
      get: function () {
        return this._box;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'imageDims', {
      get: function () {
        return this._imageDims;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'imageWidth', {
      get: function () {
        return this.imageDims.width;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'imageHeight', {
      get: function () {
        return this.imageDims.height;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'relativeBox', {
      get: function () {
        return new Tn(this._box).rescale(this.imageDims.reverse());
      }, enumerable: !0, configurable: !0,
    }), r.prototype.forSize = function (t, e) {
      return new r(this.score, this.classScore, this.className, this.relativeBox, { width: t, height: e });
    }, r;
  }(), Qt = function (r) {
    oe(t, r);

    function t(e, n, o) {
      return r.call(this, e, e, '', n, o) || this;
    }

    return t.prototype.forSize = function (e, n) {
      var o = r.prototype.forSize.call(this, e, n), a = o.score, i = o.relativeBox, s = o.imageDims;
      return new t(a, i, s);
    }, t;
  }(Ih);

  function A0(r, t, e) {
    e === void 0 && (e = !0);
    var n = Math.max(0, Math.min(r.right, t.right) - Math.max(r.left, t.left)),
      o = Math.max(0, Math.min(r.bottom, t.bottom) - Math.max(r.top, t.top)), a = n * o;
    return e ? a / (r.area + t.area - a) : a / Math.min(r.area, t.area);
  }

  function D0(r) {
    var t = r.map(function (s) {
      return s.x;
    }), e = r.map(function (s) {
      return s.y;
    }), n = t.reduce(function (s, u) {
      return u < s ? u : s;
    }, 1 / 0), o = e.reduce(function (s, u) {
      return u < s ? u : s;
    }, 1 / 0), a = t.reduce(function (s, u) {
      return s < u ? u : s;
    }, 0), i = e.reduce(function (s, u) {
      return s < u ? u : s;
    }, 0);
    return new xa(n, o, a, i);
  }

  function no(r, t, e, n) {
    n === void 0 && (n = !0);
    for (var o = t.map(function (s, u) {
      return { score: s, boxIndex: u };
    }).sort(function (s, u) {
      return s.score - u.score;
    }).map(function (s) {
      return s.boxIndex;
    }), a = [], i = function () {
      var s = o.pop();
      a.push(s);
      for (var u = o, c = [], l = 0; l < u.length; l++) {
        var h = u[l], f = r[s], d = r[h];
        c.push(A0(f, d, n));
      }
      o = o.filter(function (p, v) {
        return c[v] <= e;
      });
    }; o.length > 0;) i();
    return a;
  }

  function co(r, t) {
    return K(function () {
      var e = t[0], n = t[1], o = t[2], a = Xt(Gr(r.shape.slice(0, 3), [1]), e),
        i = Xt(Gr(r.shape.slice(0, 3), [1]), n), s = Xt(Gr(r.shape.slice(0, 3), [1]), o), u = Ve([a, i, s], 3);
      return qe(r, u);
    });
  }

  function T0(r, t) {
    return t === void 0 && (t = !1), K(function () {
      var e = r.shape.slice(1), n = e[0], o = e[1];
      if (n === o) return r;
      var a = Math.abs(n - o), i = Math.round(a * (t ? .5 : 1)), s = n > o ? 2 : 1, u = function (d) {
        var p = r.shape.slice();
        return p[s] = d, Xt(p, 0);
      }, c = u(i), l = a - c.shape[s], h = t && l ? u(l) : null, f = [h, r, c].filter(function (d) {
        return !!d;
      }).map(function (d) {
        return d.toFloat();
      });
      return Ve(f, s);
    });
  }

  function Qa(r) {
    return 1 / (1 + Math.exp(-r));
  }

  var ys = function (r) {
    oe(t, r);

    function t(e, n, o, a, i) {
      return i === void 0 && (i = !1), r.call(this, { x: e, y: n, width: o, height: a }, i) || this;
    }

    return t;
  }(Tn), F0 = .5, N0 = .43, M0 = .45, ta = function () {
    function r(t, e, n) {
      n === void 0 && (n = new be(0, 0));
      var o = e.width, a = e.height;
      this._imgDims = new wr(o, a), this._shift = n, this._positions = t.map(function (i) {
        return i.mul(new be(o, a)).add(n);
      });
    }

    return Object.defineProperty(r.prototype, 'shift', {
      get: function () {
        return new be(this._shift.x, this._shift.y);
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'imageWidth', {
      get: function () {
        return this._imgDims.width;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'imageHeight', {
      get: function () {
        return this._imgDims.height;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'positions', {
      get: function () {
        return this._positions;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'relativePositions', {
      get: function () {
        var t = this;
        return this._positions.map(function (e) {
          return e.sub(t._shift).div(new be(t.imageWidth, t.imageHeight));
        });
      }, enumerable: !0, configurable: !0,
    }), r.prototype.forSize = function (t, e) {
      return new this.constructor(this.relativePositions, { width: t, height: e });
    }, r.prototype.shiftBy = function (t, e) {
      return new this.constructor(this.relativePositions, this._imgDims, new be(t, e));
    }, r.prototype.shiftByPoint = function (t) {
      return this.shiftBy(t.x, t.y);
    }, r.prototype.align = function (t, e) {
      if (e === void 0 && (e = {}), t) {
        var n = t instanceof Qt ? t.box.floor() : new Tn(t);
        return this.shiftBy(n.x, n.y).align(null, e);
      }
      var o = Object.assign({}, { useDlibAlignment: !1, minBoxPadding: .2 }, e), a = o.useDlibAlignment,
        i = o.minBoxPadding;
      return a ? this.alignDlib() : this.alignMinBbox(i);
    }, r.prototype.alignDlib = function () {
      var t = this.getRefPointsForAlignment(), e = t[0], n = t[1], o = t[2], a = function (h) {
          return o.sub(h).magnitude();
        }, i = (a(e) + a(n)) / 2, s = Math.floor(i / M0), u = gs(t), c = Math.floor(Math.max(0, u.x - F0 * s)),
        l = Math.floor(Math.max(0, u.y - N0 * s));
      return new ys(c, l, Math.min(s, this.imageWidth + c), Math.min(s, this.imageHeight + l));
    }, r.prototype.alignMinBbox = function (t) {
      var e = D0(this.positions);
      return e.pad(e.width * t, e.height * t);
    }, r.prototype.getRefPointsForAlignment = function () {
      throw new Error('getRefPointsForAlignment not implemented by base class');
    }, r;
  }(), P0 = function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t.prototype.getRefPointsForAlignment = function () {
      var e = this.positions;
      return [e[0], e[1], gs([e[3], e[4]])];
    }, t;
  }(ta), O0 = function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t.prototype.getJawOutline = function () {
      return this.positions.slice(0, 17);
    }, t.prototype.getLeftEyeBrow = function () {
      return this.positions.slice(17, 22);
    }, t.prototype.getRightEyeBrow = function () {
      return this.positions.slice(22, 27);
    }, t.prototype.getNose = function () {
      return this.positions.slice(27, 36);
    }, t.prototype.getLeftEye = function () {
      return this.positions.slice(36, 42);
    }, t.prototype.getRightEye = function () {
      return this.positions.slice(42, 48);
    }, t.prototype.getMouth = function () {
      return this.positions.slice(48, 68);
    }, t.prototype.getRefPointsForAlignment = function () {
      return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(gs);
    }, t;
  }(ta), Ou = function () {
    function r(t, e) {
      this._label = t, this._distance = e;
    }

    return Object.defineProperty(r.prototype, 'label', {
      get: function () {
        return this._label;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'distance', {
      get: function () {
        return this._distance;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.toString = function (t) {
      return t === void 0 && (t = !0), '' + this.label + (t ? ' (' + R0(this.distance) + ')' : '');
    }, r;
  }(), Bu = function (r) {
    oe(t, r);

    function t(e, n) {
      var o = r.call(this, e) || this;
      return o._label = n, o;
    }

    return t.assertIsValidLabeledBox = function (e, n) {
      if (Tn.assertIsValidBox(e, n), !Xn(e.label)) throw new Error(n + ' - expected property label (' + e.label + ') to be a number');
    }, Object.defineProperty(t.prototype, 'label', {
      get: function () {
        return this._label;
      }, enumerable: !0, configurable: !0,
    }), t;
  }(Tn), _o = function () {
    function r(t, e) {
      if (typeof t != 'string') throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
      if (!Array.isArray(e) || e.some(function (n) {
        return !(n instanceof Float32Array);
      })) throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
      this._label = t, this._descriptors = e;
    }

    return Object.defineProperty(r.prototype, 'label', {
      get: function () {
        return this._label;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'descriptors', {
      get: function () {
        return this._descriptors;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.toJSON = function () {
      return {
        label: this.label, descriptors: this.descriptors.map(function (t) {
          return Array.from(t);
        }),
      };
    }, r.fromJSON = function (t) {
      var e = t.descriptors.map(function (n) {
        return new Float32Array(n);
      });
      return new r(t.label, e);
    }, r;
  }();
  (function (r) {
    oe(t, r);

    function t(e, n, o, a) {
      var i = r.call(this, e, n) || this;
      return i._score = o, i._classScore = a, i;
    }

    return t.assertIsValidPredictedBox = function (e, n) {
      if (Bu.assertIsValidLabeledBox(e, n), !Pu(e.score) || !Pu(e.classScore)) throw new Error(n + ' - expected properties score (' + e.score + ') and (' + e.classScore + ') to be a number between [0, 1]');
    }, Object.defineProperty(t.prototype, 'score', {
      get: function () {
        return this._score;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(t.prototype, 'classScore', {
      get: function () {
        return this._classScore;
      }, enumerable: !0, configurable: !0,
    }), t;
  })(Bu);

  function B0(r) {
    return r.detection instanceof Qt;
  }

  function bs(r, t) {
    var e = { detection: t };
    return Object.assign({}, r, e);
  }

  function Rh() {
    var r = window.fetch || function () {
      throw new Error('fetch - missing fetch implementation for browser environment');
    }, t = function () {
      throw new Error('readFile - filesystem not available for browser environment');
    };
    return {
      Canvas: HTMLCanvasElement,
      CanvasRenderingContext2D,
      Image: HTMLImageElement,
      ImageData,
      Video: HTMLVideoElement,
      createCanvasElement: function () {
        return document.createElement('canvas');
      },
      createImageElement: function () {
        return document.createElement('img');
      },
      fetch: r,
      readFile: t,
    };
  }

  function Sh(r) {
    var t = '';
    if (!r) try {
      r = require('fs');
    } catch (n) {
      t = n.toString();
    }
    var e = r ? function (n) {
      return new Promise(function (o, a) {
        r.readFile(n, function (i, s) {
          return i ? a(i) : o(s);
        });
      });
    } : function () {
      throw new Error('readFile - failed to require fs in nodejs environment with error: ' + t);
    };
    return { readFile: e };
  }

  function Ah() {
    var r = global.Canvas || global.HTMLCanvasElement, t = global.Image || global.HTMLImageElement, e = function () {
      if (r) return new r;
      throw new Error('createCanvasElement - missing Canvas implementation for nodejs environment');
    }, n = function () {
      if (t) return new t;
      throw new Error('createImageElement - missing Image implementation for nodejs environment');
    }, o = global.fetch || function () {
      throw new Error('fetch - missing fetch implementation for nodejs environment');
    }, a = Sh();
    return nt({
      Canvas: r || function () {
        function i() {
        }

        return i;
      }(), CanvasRenderingContext2D: global.CanvasRenderingContext2D || function () {
        function i() {
        }

        return i;
      }(), Image: t || function () {
        function i() {
        }

        return i;
      }(), ImageData: global.ImageData || function () {
        function i() {
        }

        return i;
      }(), Video: global.HTMLVideoElement || function () {
        function i() {
        }

        return i;
      }(), createCanvasElement: e, createImageElement: n, fetch: o,
    }, a);
  }

  function Dh() {
    return typeof window == 'object' && typeof document < 'u' && typeof HTMLImageElement < 'u' && typeof HTMLCanvasElement < 'u' && typeof HTMLVideoElement < 'u' && typeof ImageData < 'u' && typeof CanvasRenderingContext2D < 'u';
  }

  function Th() {
    return typeof global == 'object' && typeof require == 'function' && typeof hf < 'u' && typeof process < 'u' && !!process.version;
  }

  var Ue;

  function L0() {
    if (!Ue) throw new Error('getEnv - environment is not defined, check isNodejs() and isBrowser()');
    return Ue;
  }

  function Si(r) {
    Ue = r;
  }

  function xs() {
    Dh() && Si(Rh()), Th() && Si(Ah());
  }

  function W0(r) {
    if (Ue || xs(), !Ue) throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()');
    var t = r.Canvas, e = t === void 0 ? Ue.Canvas : t, n = r.Image, o = n === void 0 ? Ue.Image : n;
    Ue.Canvas = e, Ue.Image = o, Ue.createCanvasElement = r.createCanvasElement || function () {
      return new e;
    }, Ue.createImageElement = r.createImageElement || function () {
      return new o;
    }, Ue.ImageData = r.ImageData || Ue.ImageData, Ue.Video = r.Video || Ue.Video, Ue.fetch = r.fetch || Ue.fetch, Ue.readFile = r.readFile || Ue.readFile;
  }

  var it = {
    getEnv: L0,
    setEnv: Si,
    initialize: xs,
    createBrowserEnv: Rh,
    createFileSystem: Sh,
    createNodejsEnv: Ah,
    monkeyPatch: W0,
    isBrowser: Dh,
    isNodejs: Th,
  };
  xs();

  function Fh(r) {
    return !it.isNodejs() && typeof r == 'string' ? document.getElementById(r) : r;
  }

  function Qn(r) {
    var t = it.getEnv(), e = t.Canvas, n = t.CanvasRenderingContext2D;
    if (r instanceof n) return r;
    var o = Fh(r);
    if (!(o instanceof e)) throw new Error('resolveContext2d - expected canvas to be of instance of Canvas');
    var a = o.getContext('2d');
    if (!a) throw new Error('resolveContext2d - canvas 2d context is null');
    return a;
  }

  var Lu;
  (function (r) {
    r.TOP_LEFT = 'TOP_LEFT', r.TOP_RIGHT = 'TOP_RIGHT', r.BOTTOM_LEFT = 'BOTTOM_LEFT', r.BOTTOM_RIGHT = 'BOTTOM_RIGHT';
  })(Lu || (Lu = {}));

  function Nh(r) {
    var t = it.getEnv(), e = t.Image, n = t.Video;
    return r instanceof e && r.complete || r instanceof n && r.readyState >= 3;
  }

  function U0(r) {
    return new Promise(function (t, e) {
      if (r instanceof it.getEnv().Canvas || Nh(r)) return t();

      function n(a) {
        !a.currentTarget || (a.currentTarget.removeEventListener('load', n), a.currentTarget.removeEventListener('error', o), t(a));
      }

      function o(a) {
        !a.currentTarget || (a.currentTarget.removeEventListener('load', n), a.currentTarget.removeEventListener('error', o), e(a));
      }

      r.addEventListener('load', n), r.addEventListener('error', o);
    });
  }

  function Mh(r) {
    var t = it.getEnv(), e = t.Image, n = t.Video;
    return r instanceof e ? new wr(r.naturalWidth, r.naturalHeight) : r instanceof n ? new wr(r.videoWidth, r.videoHeight) : new wr(r.width, r.height);
  }

  function wa(r) {
    var t = r.width, e = r.height, n = it.getEnv().createCanvasElement, o = n();
    return o.width = t, o.height = e, o;
  }

  function ws(r, t) {
    var e = it.getEnv().ImageData;
    if (!(r instanceof e) && !Nh(r)) throw new Error('createCanvasFromMedia - media has not finished loading yet');
    var n = t || Mh(r), o = n.width, a = n.height, i = wa({ width: o, height: a });
    return r instanceof e ? Qn(i).putImageData(r, 0, 0) : Qn(i).drawImage(r, 0, 0, o, a), i;
  }

  function z0(r, t) {
    return Q(this, void 0, void 0, function () {
      var e, n, o, a, i, s;
      return ee(this, function (u) {
        switch (u.label) {
          case 0:
            return e = t || it.getEnv().createCanvasElement(), n = r.shape.slice(Sn(r) ? 1 : 0), o = n[0], a = n[1], i = n[2], s = K(function () {
              return r.as3D(o, a, i).toInt();
            }), [4, ms.toPixels(s, e)];
          case 1:
            return u.sent(), s.dispose(), [2, e];
        }
      });
    });
  }

  function Wu(r) {
    var t = it.getEnv(), e = t.Image, n = t.Canvas, o = t.Video;
    return r instanceof e || r instanceof n || r instanceof o;
  }

  function V0(r, t, e) {
    e === void 0 && (e = !1);
    var n = it.getEnv(), o = n.Image, a = n.Canvas;
    if (!(r instanceof o || r instanceof a)) throw new Error('imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement');
    var i = Mh(r), s = t / Math.max(i.height, i.width), u = s * i.width, c = s * i.height,
      l = wa({ width: t, height: t }), h = r instanceof a ? r : ws(r), f = Math.abs(u - c) / 2, d = e && u < c ? f : 0,
      p = e && c < u ? f : 0;
    return Qn(l).drawImage(h, d, p, u, c), l;
  }

  var na = function () {
    function r(t, e) {
      var n = this;
      if (e === void 0 && (e = !1), this._imageTensors = [], this._canvases = [], this._treatAsBatchInput = !1, this._inputDimensions = [], !Array.isArray(t)) throw new Error('NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have ' + t);
      this._treatAsBatchInput = e, this._batchSize = t.length, t.forEach(function (o, a) {
        if (ba(o)) {
          n._imageTensors[a] = o, n._inputDimensions[a] = o.shape;
          return;
        }
        if (Sn(o)) {
          var i = o.shape[0];
          if (i !== 1) throw new Error('NetInput - tf.Tensor4D with batchSize ' + i + ' passed, but not supported in input array');
          n._imageTensors[a] = o, n._inputDimensions[a] = o.shape.slice(1);
          return;
        }
        var s = o instanceof it.getEnv().Canvas ? o : ws(o);
        n._canvases[a] = s, n._inputDimensions[a] = [s.height, s.width, 3];
      });
    }

    return Object.defineProperty(r.prototype, 'imageTensors', {
      get: function () {
        return this._imageTensors;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'canvases', {
      get: function () {
        return this._canvases;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'isBatchInput', {
      get: function () {
        return this.batchSize > 1 || this._treatAsBatchInput;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'batchSize', {
      get: function () {
        return this._batchSize;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'inputDimensions', {
      get: function () {
        return this._inputDimensions;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'inputSize', {
      get: function () {
        return this._inputSize;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'reshapedInputDimensions', {
      get: function () {
        var t = this;
        return to(this.batchSize, 0, 1).map(function (e, n) {
          return t.getReshapedInputDimensions(n);
        });
      }, enumerable: !0, configurable: !0,
    }), r.prototype.getInput = function (t) {
      return this.canvases[t] || this.imageTensors[t];
    }, r.prototype.getInputDimensions = function (t) {
      return this._inputDimensions[t];
    }, r.prototype.getInputHeight = function (t) {
      return this._inputDimensions[t][0];
    }, r.prototype.getInputWidth = function (t) {
      return this._inputDimensions[t][1];
    }, r.prototype.getReshapedInputDimensions = function (t) {
      if (typeof this.inputSize != 'number') throw new Error('getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet');
      var e = this.getInputWidth(t), n = this.getInputHeight(t);
      return S0({ width: e, height: n }, this.inputSize);
    }, r.prototype.toBatchTensor = function (t, e) {
      var n = this;
      return e === void 0 && (e = !0), this._inputSize = t, K(function () {
        var o = to(n.batchSize, 0, 1).map(function (i) {
          var s = n.getInput(i);
          if (s instanceof Se) {
            var u = Sn(s) ? s : s.expandDims();
            return u = T0(u, e), (u.shape[1] !== t || u.shape[2] !== t) && (u = ls.resizeBilinear(u, [t, t])), u.as3D(t, t, 3);
          }
          if (s instanceof it.getEnv().Canvas) return ms.fromPixels(V0(s, t, e));
          throw new Error('toBatchTensor - at batchIdx ' + i + ', expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have ' + s);
        }), a = Et(o.map(function (i) {
          return i.toFloat();
        })).as4D(n.batchSize, t, t, 3);
        return a;
      });
    }, r;
  }();

  function Ke(r) {
    return Q(this, void 0, void 0, function () {
      var t, e, n;
      return ee(this, function (o) {
        switch (o.label) {
          case 0:
            if (r instanceof na) return [2, r];
            if (t = Array.isArray(r) ? r : [r], !t.length) throw new Error('toNetInput - empty array passed as input');
            return e = function (a) {
              return Array.isArray(r) ? ' at input index ' + a + ':' : '';
            }, n = t.map(Fh), n.forEach(function (a, i) {
              if (!Wu(a) && !ba(a) && !Sn(a)) throw typeof t[i] == 'string' ? new Error('toNetInput -' + e(i) + ' string passed, but could not resolve HTMLElement for element id ' + t[i]) : new Error('toNetInput -' + e(i) + ' expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id');
              if (Sn(a)) {
                var s = a.shape[0];
                if (s !== 1) throw new Error('toNetInput -' + e(i) + ' tf.Tensor4D with batchSize ' + s + ' passed, but not supported in input array');
              }
            }), [4, Promise.all(n.map(function (a) {
              return Wu(a) && U0(a);
            }))];
          case 1:
            return o.sent(), [2, new na(n, Array.isArray(r))];
        }
      });
    });
  }

  function _s(r, t) {
    return Q(this, void 0, void 0, function () {
      var e, n, o, a, i, s, u;
      return ee(this, function (c) {
        switch (c.label) {
          case 0:
            return e = it.getEnv().Canvas, n = r, r instanceof e ? [3, 5] : [4, Ke(r)];
          case 1:
            if (o = c.sent(), o.batchSize > 1) throw new Error('extractFaces - batchSize > 1 not supported');
            return a = o.getInput(0), a instanceof e ? (i = a, [3, 4]) : [3, 2];
          case 2:
            return [4, z0(a)];
          case 3:
            i = c.sent(), c.label = 4;
          case 4:
            n = i, c.label = 5;
          case 5:
            return s = Qn(n), u = t.map(function (l) {
              return l instanceof Qt ? l.forSize(n.width, n.height).box.floor() : l;
            }).map(function (l) {
              return l.clipAtImageBorders(n.width, n.height);
            }), [2, u.map(function (l) {
              var h = l.x, f = l.y, d = l.width, p = l.height, v = wa({ width: d, height: p });
              return Qn(v).putImageData(s.getImageData(h, f, d, p), 0, 0), v;
            })];
        }
      });
    });
  }

  function Cs(r, t) {
    return Q(this, void 0, void 0, function () {
      return ee(this, function (e) {
        if (!ba(r) && !Sn(r)) throw new Error('extractFaceTensors - expected image tensor to be 3D or 4D');
        if (Sn(r) && r.shape[0] > 1) throw new Error('extractFaceTensors - batchSize > 1 not supported');
        return [2, K(function () {
          var n = r.shape.slice(Sn(r) ? 1 : 0), o = n[0], a = n[1], i = n[2], s = t.map(function (c) {
            return c instanceof Qt ? c.forSize(a, o).box : c;
          }).map(function (c) {
            return c.clipAtImageBorders(a, o);
          }), u = s.map(function (c) {
            var l = c.x, h = c.y, f = c.width, d = c.height;
            return oh(r.as3D(o, a, i), [h, l, 0], [d, f, i]);
          });
          return u;
        })];
      });
    });
  }

  function G0(r, t) {
    return Q(this, void 0, void 0, function () {
      var e, n;
      return ee(this, function (o) {
        switch (o.label) {
          case 0:
            return e = it.getEnv().fetch, [4, e(r, t)];
          case 1:
            if (n = o.sent(), !(n.status < 400)) throw new Error('failed to fetch: (' + n.status + ') ' + n.statusText + ', from url: ' + n.url);
            return [2, n];
        }
      });
    });
  }

  function q0(r) {
    return Q(this, void 0, void 0, function () {
      return ee(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, G0(r)];
          case 1:
            return [2, t.sent().json()];
        }
      });
    });
  }

  function Ph(r, t) {
    var e = t + '-weights_manifest.json';
    if (!r) return { modelBaseUri: '', manifestUri: e };
    if (r === '/') return { modelBaseUri: '/', manifestUri: '/' + e };
    var n = r.startsWith('http://') ? 'http://' : r.startsWith('https://') ? 'https://' : '';
    r = r.replace(n, '');
    var o = r.split('/').filter(function (s) {
        return s;
      }), a = r.endsWith('.json') ? o[o.length - 1] : e,
      i = n + (r.endsWith('.json') ? o.slice(0, o.length - 1) : o).join('/');
    return i = r.startsWith('/') ? '/' + i : i, { modelBaseUri: i, manifestUri: i === '/' ? '/' + a : i + '/' + a };
  }

  function H0(r, t) {
    return Q(this, void 0, void 0, function () {
      var e, n, o, a;
      return ee(this, function (i) {
        switch (i.label) {
          case 0:
            return e = Ph(r, t), n = e.manifestUri, o = e.modelBaseUri, [4, q0(n)];
          case 1:
            return a = i.sent(), [2, wh.loadWeights(a, o)];
        }
      });
    });
  }

  var mn = function () {
    function r(t) {
      this._name = t, this._params = void 0, this._paramMappings = [];
    }

    return Object.defineProperty(r.prototype, 'params', {
      get: function () {
        return this._params;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'paramMappings', {
      get: function () {
        return this._paramMappings;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'isLoaded', {
      get: function () {
        return !!this.params;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.getParamFromPath = function (t) {
      var e = this.traversePropertyPath(t), n = e.obj, o = e.objProp;
      return n[o];
    }, r.prototype.reassignParamFromPath = function (t, e) {
      var n = this.traversePropertyPath(t), o = n.obj, a = n.objProp;
      o[a].dispose(), o[a] = e;
    }, r.prototype.getParamList = function () {
      var t = this;
      return this._paramMappings.map(function (e) {
        var n = e.paramPath;
        return { path: n, tensor: t.getParamFromPath(n) };
      });
    }, r.prototype.getTrainableParams = function () {
      return this.getParamList().filter(function (t) {
        return t.tensor instanceof kr;
      });
    }, r.prototype.getFrozenParams = function () {
      return this.getParamList().filter(function (t) {
        return !(t.tensor instanceof kr);
      });
    }, r.prototype.variable = function () {
      var t = this;
      this.getFrozenParams().forEach(function (e) {
        var n = e.path, o = e.tensor;
        t.reassignParamFromPath(n, o.variable());
      });
    }, r.prototype.freeze = function () {
      var t = this;
      this.getTrainableParams().forEach(function (e) {
        var n = e.path, o = e.tensor, a = Ze(o.dataSync());
        o.dispose(), t.reassignParamFromPath(n, a);
      });
    }, r.prototype.dispose = function (t) {
      t === void 0 && (t = !0), this.getParamList().forEach(function (e) {
        if (t && e.tensor.isDisposed) throw new Error('param tensor has already been disposed for path ' + e.path);
        e.tensor.dispose();
      }), this._params = void 0;
    }, r.prototype.serializeParams = function () {
      return new Float32Array(this.getParamList().map(function (t) {
        var e = t.tensor;
        return Array.from(e.dataSync());
      }).reduce(function (t, e) {
        return t.concat(e);
      }));
    }, r.prototype.load = function (t) {
      return Q(this, void 0, void 0, function () {
        return ee(this, function (e) {
          switch (e.label) {
            case 0:
              return t instanceof Float32Array ? (this.extractWeights(t), [2]) : [4, this.loadFromUri(t)];
            case 1:
              return e.sent(), [2];
          }
        });
      });
    }, r.prototype.loadFromUri = function (t) {
      return Q(this, void 0, void 0, function () {
        var e;
        return ee(this, function (n) {
          switch (n.label) {
            case 0:
              if (t && typeof t != 'string') throw new Error(this._name + '.loadFromUri - expected model uri');
              return [4, H0(t, this.getDefaultModelName())];
            case 1:
              return e = n.sent(), this.loadFromWeightMap(e), [2];
          }
        });
      });
    }, r.prototype.loadFromDisk = function (t) {
      return Q(this, void 0, void 0, function () {
        var e, n, o, a, i, s, u, c, l, h;
        return ee(this, function (f) {
          switch (f.label) {
            case 0:
              if (t && typeof t != 'string') throw new Error(this._name + '.loadFromDisk - expected model file path');
              return e = it.getEnv().readFile, n = Ph(t, this.getDefaultModelName()), o = n.manifestUri, a = n.modelBaseUri, i = function (d) {
                return Promise.all(d.map(function (p) {
                  return e(p).then(function (v) {
                    return v.buffer;
                  });
                }));
              }, s = wh.weightsLoaderFactory(i), l = (c = JSON).parse, [4, e(o)];
            case 1:
              return u = l.apply(c, [f.sent().toString()]), [4, s(u, a)];
            case 2:
              return h = f.sent(), this.loadFromWeightMap(h), [2];
          }
        });
      });
    }, r.prototype.loadFromWeightMap = function (t) {
      var e = this.extractParamsFromWeigthMap(t), n = e.paramMappings, o = e.params;
      this._paramMappings = n, this._params = o;
    }, r.prototype.extractWeights = function (t) {
      var e = this.extractParams(t), n = e.paramMappings, o = e.params;
      this._paramMappings = n, this._params = o;
    }, r.prototype.traversePropertyPath = function (t) {
      if (!this.params) throw new Error('traversePropertyPath - model has no loaded params');
      var e = t.split('/').reduce(function (a, i) {
        if (!a.nextObj.hasOwnProperty(i)) throw new Error('traversePropertyPath - object does not have property ' + i + ', for path ' + t);
        return { obj: a.nextObj, objProp: i, nextObj: a.nextObj[i] };
      }, { nextObj: this.params }), n = e.obj, o = e.objProp;
      if (!n || !o || !(n[o] instanceof Se)) throw new Error('traversePropertyPath - parameter is not a tensor, for path ' + t);
      return { obj: n, objProp: o };
    }, r;
  }();

  function Ct(r, t, e) {
    return K(function () {
      var n = as(r, t.depthwise_filter, t.pointwise_filter, e, 'same');
      return n = ce(n, t.bias), n;
    });
  }

  function ei(r, t, e) {
    return e === void 0 && (e = !1), K(function () {
      var n = De(e ? ce(St(r, t.conv0.filters, [2, 2], 'same'), t.conv0.bias) : Ct(r, t.conv0, [2, 2])),
        o = Ct(n, t.conv1, [1, 1]), a = De(ce(n, o)), i = Ct(a, t.conv2, [1, 1]);
      return De(ce(n, ce(o, i)));
    });
  }

  function Co(r, t, e, n) {
    return e === void 0 && (e = !1), n === void 0 && (n = !0), K(function () {
      var o = De(e ? ce(St(r, t.conv0.filters, n ? [2, 2] : [1, 1], 'same'), t.conv0.bias) : Ct(r, t.conv0, n ? [2, 2] : [1, 1])),
        a = Ct(o, t.conv1, [1, 1]), i = De(ce(o, a)), s = Ct(i, t.conv2, [1, 1]), u = De(ce(o, ce(a, s))),
        c = Ct(u, t.conv3, [1, 1]);
      return De(ce(o, ce(a, ce(s, c))));
    });
  }

  function Nt(r, t, e, n) {
    return e === void 0 && (e = 'same'), n === void 0 && (n = !1), K(function () {
      var o = ce(St(r, t.filters, [1, 1], e), t.bias);
      return n ? De(o) : o;
    });
  }

  function gn(r, t) {
    Object.keys(r).forEach(function (e) {
      t.some(function (n) {
        return n.originalPath === e;
      }) || r[e].dispose();
    });
  }

  function _a(r, t) {
    return function (e, n, o, a) {
      var i = dt(r(e * n * o * o), [o, o, e, n]), s = Oe(r(n));
      return t.push({ paramPath: a + '/filters' }, { paramPath: a + '/bias' }), { filters: i, bias: s };
    };
  }

  function Es(r, t) {
    return function (e, n, o) {
      var a = In(r(e * n), [e, n]), i = Oe(r(n));
      return t.push({ paramPath: o + '/weights' }, { paramPath: o + '/bias' }), { weights: a, bias: i };
    };
  }

  var Oh = function () {
    function r(t, e, n) {
      this.depthwise_filter = t, this.pointwise_filter = e, this.bias = n;
    }

    return r;
  }();

  function ks(r, t) {
    return function (e, n, o) {
      var a = dt(r(9 * e), [3, 3, e, 1]), i = dt(r(e * n), [1, 1, e, n]), s = Oe(r(n));
      return t.push({ paramPath: o + '/depthwise_filter' }, { paramPath: o + '/pointwise_filter' }, { paramPath: o + '/bias' }), new Oh(a, i, s);
    };
  }

  function Is(r) {
    return function (t) {
      var e = r(t + '/depthwise_filter', 4), n = r(t + '/pointwise_filter', 4), o = r(t + '/bias', 1);
      return new Oh(e, n, o);
    };
  }

  function Ln(r, t) {
    return function (e, n, o) {
      var a = r[e];
      if (!ya(a, n)) throw new Error('expected weightMap[' + e + '] to be a Tensor' + n + 'D, instead have ' + a);
      return t.push({ originalPath: e, paramPath: o || e }), a;
    };
  }

  function yn(r) {
    var t = r;

    function e(o) {
      var a = t.slice(0, o);
      return t = t.slice(o), a;
    }

    function n() {
      return t;
    }

    return { extractWeights: e, getRemainingWeights: n };
  }

  function Bh(r, t) {
    var e = _a(r, t), n = ks(r, t);

    function o(i, s, u, c) {
      c === void 0 && (c = !1);
      var l = c ? e(i, s, 3, u + '/conv0') : n(i, s, u + '/conv0'), h = n(s, s, u + '/conv1'),
        f = n(s, s, u + '/conv2');
      return { conv0: l, conv1: h, conv2: f };
    }

    function a(i, s, u, c) {
      c === void 0 && (c = !1);
      var l = o(i, s, u, c), h = l.conv0, f = l.conv1, d = l.conv2, p = n(s, s, u + '/conv3');
      return { conv0: h, conv1: f, conv2: d, conv3: p };
    }

    return { extractDenseBlock3Params: o, extractDenseBlock4Params: a };
  }

  function j0(r) {
    var t = [], e = yn(r), n = e.extractWeights, o = e.getRemainingWeights, a = Bh(n, t).extractDenseBlock4Params,
      i = a(3, 32, 'dense0', !0), s = a(32, 64, 'dense1'), u = a(64, 128, 'dense2'), c = a(128, 256, 'dense3');
    if (o().length !== 0) throw new Error('weights remaing after extract: ' + o().length);
    return { paramMappings: t, params: { dense0: i, dense1: s, dense2: u, dense3: c } };
  }

  function Lh(r) {
    return function (t) {
      var e = r(t + '/filters', 4), n = r(t + '/bias', 1);
      return { filters: e, bias: n };
    };
  }

  function Wh(r, t) {
    var e = Ln(r, t), n = Lh(e), o = Is(e);

    function a(s, u) {
      u === void 0 && (u = !1);
      var c = u ? n(s + '/conv0') : o(s + '/conv0'), l = o(s + '/conv1'), h = o(s + '/conv2');
      return { conv0: c, conv1: l, conv2: h };
    }

    function i(s, u) {
      u === void 0 && (u = !1);
      var c = u ? n(s + '/conv0') : o(s + '/conv0'), l = o(s + '/conv1'), h = o(s + '/conv2'), f = o(s + '/conv3');
      return { conv0: c, conv1: l, conv2: h, conv3: f };
    }

    return { extractDenseBlock3Params: a, extractDenseBlock4Params: i };
  }

  function X0(r) {
    var t = [], e = Wh(r, t).extractDenseBlock4Params,
      n = { dense0: e('dense0', !0), dense1: e('dense1'), dense2: e('dense2'), dense3: e('dense3') };
    return gn(r, t), { params: n, paramMappings: t };
  }

  var Uh = function (r) {
    oe(t, r);

    function t() {
      return r.call(this, 'FaceFeatureExtractor') || this;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this.params;
      if (!n) throw new Error('FaceFeatureExtractor - load model before inference');
      return K(function () {
        var o = e.toBatchTensor(112, !0), a = [122.782, 117.001, 104.298], i = co(o, a).div(X(255)),
          s = Co(i, n.dense0, !0);
        return s = Co(s, n.dense1), s = Co(s, n.dense2), s = Co(s, n.dense3), s = so(s, [7, 7], [2, 2], 'valid'), s;
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'face_feature_extractor_model';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return X0(e);
    }, t.prototype.extractParams = function (e) {
      return j0(e);
    }, t;
  }(mn);

  function jt(r, t) {
    return K(function () {
      return ce(va(r, t.weights), t.bias);
    });
  }

  function K0(r, t, e) {
    var n = [], o = yn(r), a = o.extractWeights, i = o.getRemainingWeights, s = Es(a, n), u = s(t, e, 'fc');
    if (i().length !== 0) throw new Error('weights remaing after extract: ' + i().length);
    return { paramMappings: n, params: { fc: u } };
  }

  function Y0(r) {
    var t = [], e = Ln(r, t);

    function n(a) {
      var i = e(a + '/weights', 2), s = e(a + '/bias', 1);
      return { weights: i, bias: s };
    }

    var o = { fc: n('fc') };
    return gn(r, t), { params: o, paramMappings: t };
  }

  function zh(r) {
    var t = {}, e = {};
    return Object.keys(r).forEach(function (n) {
      var o = n.startsWith('fc') ? e : t;
      o[n] = r[n];
    }), { featureExtractorMap: t, classifierMap: e };
  }

  var Vh = function (r) {
    oe(t, r);

    function t(e, n) {
      var o = r.call(this, e) || this;
      return o._faceFeatureExtractor = n, o;
    }

    return Object.defineProperty(t.prototype, 'faceFeatureExtractor', {
      get: function () {
        return this._faceFeatureExtractor;
      }, enumerable: !0, configurable: !0,
    }), t.prototype.runNet = function (e) {
      var n = this, o = this.params;
      if (!o) throw new Error(this._name + ' - load model before inference');
      return K(function () {
        var a = e instanceof na ? n.faceFeatureExtractor.forwardInput(e) : e;
        return jt(a.as2D(a.shape[0], -1), o.fc);
      });
    }, t.prototype.dispose = function (e) {
      e === void 0 && (e = !0), this.faceFeatureExtractor.dispose(e), r.prototype.dispose.call(this, e);
    }, t.prototype.loadClassifierParams = function (e) {
      var n = this.extractClassifierParams(e), o = n.params, a = n.paramMappings;
      this._params = o, this._paramMappings = a;
    }, t.prototype.extractClassifierParams = function (e) {
      return K0(e, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      var n = zh(e), o = n.featureExtractorMap, a = n.classifierMap;
      return this.faceFeatureExtractor.loadFromWeightMap(o), Y0(a);
    }, t.prototype.extractParams = function (e) {
      var n = this.getClassifierChannelsIn(), o = this.getClassifierChannelsOut(), a = o * n + o,
        i = e.slice(0, e.length - a), s = e.slice(e.length - a);
      return this.faceFeatureExtractor.extractWeights(i), this.extractClassifierParams(s);
    }, t;
  }(mn), Uu = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'], $0 = function () {
    function r(t) {
      var e = this;
      if (t.length !== 7) throw new Error('FaceExpressions.constructor - expected probabilities.length to be 7, have: ' + t.length);
      Uu.forEach(function (n, o) {
        e[n] = t[o];
      });
    }

    return r.prototype.asSortedArray = function () {
      var t = this;
      return Uu.map(function (e) {
        return { expression: e, probability: t[e] };
      }).sort(function (e, n) {
        return n.probability - e.probability;
      });
    }, r;
  }(), Z0 = function (r) {
    oe(t, r);

    function t(e) {
      return e === void 0 && (e = new Uh), r.call(this, 'FaceExpressionNet', e) || this;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this;
      return K(function () {
        return pn(n.runNet(e));
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.predictExpressions = function (e) {
      return Q(this, void 0, void 0, function () {
        var n, o, a, i, s = this;
        return ee(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, Ke(e)];
            case 1:
              return n = u.sent(), [4, this.forwardInput(n)];
            case 2:
              return o = u.sent(), [4, Promise.all(Ge(o).map(function (c) {
                return Q(s, void 0, void 0, function () {
                  var l;
                  return ee(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return [4, c.data()];
                      case 1:
                        return l = h.sent(), c.dispose(), [2, l];
                    }
                  });
                });
              }))];
            case 3:
              return a = u.sent(), o.dispose(), i = a.map(function (c) {
                return new $0(c);
              }), [2, n.isBatchInput ? i : i[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'face_expression_model';
    }, t.prototype.getClassifierChannelsIn = function () {
      return 256;
    }, t.prototype.getClassifierChannelsOut = function () {
      return 7;
    }, t;
  }(Vh);

  function Gh(r, t) {
    var e = { expressions: t };
    return Object.assign({}, r, e);
  }

  function J0(r) {
    return B0(r) && r.landmarks instanceof ta && r.unshiftedLandmarks instanceof ta && r.alignedRect instanceof Qt;
  }

  function Rs(r, t) {
    var e = r.detection.box, n = t.shiftBy(e.x, e.y), o = n.align(), a = r.detection.imageDims,
      i = new Qt(r.detection.score, o.rescale(a.reverse()), a),
      s = { landmarks: n, unshiftedLandmarks: t, alignedRect: i };
    return Object.assign({}, r, s);
  }

  function Q0(r, t) {
    var e = _a(r, t), n = ks(r, t);

    function o(i, s, u) {
      var c = n(i, s, u + '/separable_conv0'), l = n(s, s, u + '/separable_conv1'),
        h = e(i, s, 1, u + '/expansion_conv');
      return { separable_conv0: c, separable_conv1: l, expansion_conv: h };
    }

    function a(i, s) {
      var u = n(i, i, s + '/separable_conv0'), c = n(i, i, s + '/separable_conv1'), l = n(i, i, s + '/separable_conv2');
      return { separable_conv0: u, separable_conv1: c, separable_conv2: l };
    }

    return {
      extractConvParams: e,
      extractSeparableConvParams: n,
      extractReductionBlockParams: o,
      extractMainBlockParams: a,
    };
  }

  function ey(r, t) {
    var e = [], n = yn(r), o = n.extractWeights, a = n.getRemainingWeights, i = Q0(o, e), s = i.extractConvParams,
      u = i.extractSeparableConvParams, c = i.extractReductionBlockParams, l = i.extractMainBlockParams,
      h = s(3, 32, 3, 'entry_flow/conv_in'), f = c(32, 64, 'entry_flow/reduction_block_0'),
      d = c(64, 128, 'entry_flow/reduction_block_1'), p = { conv_in: h, reduction_block_0: f, reduction_block_1: d },
      v = {};
    to(t, 0, 1).forEach(function (x) {
      v['main_block_' + x] = l(128, 'middle_flow/main_block_' + x);
    });
    var m = c(128, 256, 'exit_flow/reduction_block'), g = u(256, 512, 'exit_flow/separable_conv'),
      y = { reduction_block: m, separable_conv: g };
    if (a().length !== 0) throw new Error('weights remaing after extract: ' + a().length);
    return { paramMappings: e, params: { entry_flow: p, middle_flow: v, exit_flow: y } };
  }

  function ty(r, t) {
    var e = Ln(r, t), n = Lh(e), o = Is(e);

    function a(s) {
      var u = o(s + '/separable_conv0'), c = o(s + '/separable_conv1'), l = n(s + '/expansion_conv');
      return { separable_conv0: u, separable_conv1: c, expansion_conv: l };
    }

    function i(s) {
      var u = o(s + '/separable_conv0'), c = o(s + '/separable_conv1'), l = o(s + '/separable_conv2');
      return { separable_conv0: u, separable_conv1: c, separable_conv2: l };
    }

    return {
      extractConvParams: n,
      extractSeparableConvParams: o,
      extractReductionBlockParams: a,
      extractMainBlockParams: i,
    };
  }

  function ny(r, t) {
    var e = [], n = ty(r, e), o = n.extractConvParams, a = n.extractSeparableConvParams,
      i = n.extractReductionBlockParams, s = n.extractMainBlockParams, u = o('entry_flow/conv_in'),
      c = i('entry_flow/reduction_block_0'), l = i('entry_flow/reduction_block_1'),
      h = { conv_in: u, reduction_block_0: c, reduction_block_1: l }, f = {};
    to(t, 0, 1).forEach(function (m) {
      f['main_block_' + m] = s('middle_flow/main_block_' + m);
    });
    var d = i('exit_flow/reduction_block'), p = a('exit_flow/separable_conv'),
      v = { reduction_block: d, separable_conv: p };
    return gn(r, e), { params: { entry_flow: h, middle_flow: f, exit_flow: v }, paramMappings: e };
  }

  function qh(r, t, e) {
    return ce(St(r, t.filters, e, 'same'), t.bias);
  }

  function ti(r, t, e) {
    e === void 0 && (e = !0);
    var n = e ? De(r) : r;
    return n = Ct(n, t.separable_conv0, [1, 1]), n = Ct(De(n), t.separable_conv1, [1, 1]), n = He(n, [3, 3], [2, 2], 'same'), n = ce(n, qh(r, t.expansion_conv, [2, 2])), n;
  }

  function ry(r, t) {
    var e = Ct(De(r), t.separable_conv0, [1, 1]);
    return e = Ct(De(e), t.separable_conv1, [1, 1]), e = Ct(De(e), t.separable_conv2, [1, 1]), e = ce(e, r), e;
  }

  var oy = function (r) {
    oe(t, r);

    function t(e) {
      var n = r.call(this, 'TinyXception') || this;
      return n._numMainBlocks = e, n;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this, o = this.params;
      if (!o) throw new Error('TinyXception - load model before inference');
      return K(function () {
        var a = e.toBatchTensor(112, !0), i = [122.782, 117.001, 104.298], s = co(a, i).div(X(256)),
          u = De(qh(s, o.entry_flow.conv_in, [2, 2]));
        return u = ti(u, o.entry_flow.reduction_block_0, !1), u = ti(u, o.entry_flow.reduction_block_1), to(n._numMainBlocks, 0, 1).forEach(function (c) {
          u = ry(u, o.middle_flow['main_block_' + c]);
        }), u = ti(u, o.exit_flow.reduction_block), u = De(Ct(u, o.exit_flow.separable_conv, [1, 1])), u;
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'tiny_xception_model';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return ny(e, this._numMainBlocks);
    }, t.prototype.extractParams = function (e) {
      return ey(e, this._numMainBlocks);
    }, t;
  }(mn);

  function ay(r) {
    var t = [], e = yn(r), n = e.extractWeights, o = e.getRemainingWeights, a = Es(n, t), i = a(512, 1, 'fc/age'),
      s = a(512, 2, 'fc/gender');
    if (o().length !== 0) throw new Error('weights remaing after extract: ' + o().length);
    return { paramMappings: t, params: { fc: { age: i, gender: s } } };
  }

  function iy(r) {
    var t = [], e = Ln(r, t);

    function n(a) {
      var i = e(a + '/weights', 2), s = e(a + '/bias', 1);
      return { weights: i, bias: s };
    }

    var o = { fc: { age: n('fc/age'), gender: n('fc/gender') } };
    return gn(r, t), { params: o, paramMappings: t };
  }

  var ra;
  (function (r) {
    r.FEMALE = 'female', r.MALE = 'male';
  })(ra || (ra = {}));
  var sy = function (r) {
    oe(t, r);

    function t(e) {
      e === void 0 && (e = new oy(2));
      var n = r.call(this, 'AgeGenderNet') || this;
      return n._faceFeatureExtractor = e, n;
    }

    return Object.defineProperty(t.prototype, 'faceFeatureExtractor', {
      get: function () {
        return this._faceFeatureExtractor;
      }, enumerable: !0, configurable: !0,
    }), t.prototype.runNet = function (e) {
      var n = this, o = this.params;
      if (!o) throw new Error(this._name + ' - load model before inference');
      return K(function () {
        var a = e instanceof na ? n.faceFeatureExtractor.forwardInput(e) : e,
          i = so(a, [7, 7], [2, 2], 'valid').as2D(a.shape[0], -1), s = jt(i, o.fc.age).as1D(), u = jt(i, o.fc.gender);
        return { age: s, gender: u };
      });
    }, t.prototype.forwardInput = function (e) {
      var n = this;
      return K(function () {
        var o = n.runNet(e), a = o.age, i = o.gender;
        return { age: a, gender: pn(i) };
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.predictAgeAndGender = function (e) {
      return Q(this, void 0, void 0, function () {
        var n, o, a, i, s, u, c = this;
        return ee(this, function (l) {
          switch (l.label) {
            case 0:
              return [4, Ke(e)];
            case 1:
              return n = l.sent(), [4, this.forwardInput(n)];
            case 2:
              return o = l.sent(), a = Ge(o.age), i = Ge(o.gender), s = a.map(function (h, f) {
                return { ageTensor: h, genderTensor: i[f] };
              }), [4, Promise.all(s.map(function (h) {
                var f = h.ageTensor, d = h.genderTensor;
                return Q(c, void 0, void 0, function () {
                  var p, v, m, g, y;
                  return ee(this, function (x) {
                    switch (x.label) {
                      case 0:
                        return [4, f.data()];
                      case 1:
                        return p = x.sent()[0], [4, d.data()];
                      case 2:
                        return v = x.sent()[0], m = v > .5, g = m ? ra.MALE : ra.FEMALE, y = m ? v : 1 - v, f.dispose(), d.dispose(), [2, {
                          age: p,
                          gender: g,
                          genderProbability: y,
                        }];
                    }
                  });
                });
              }))];
            case 3:
              return u = l.sent(), o.age.dispose(), o.gender.dispose(), [2, n.isBatchInput ? u : u[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'age_gender_model';
    }, t.prototype.dispose = function (e) {
      e === void 0 && (e = !0), this.faceFeatureExtractor.dispose(e), r.prototype.dispose.call(this, e);
    }, t.prototype.loadClassifierParams = function (e) {
      var n = this.extractClassifierParams(e), o = n.params, a = n.paramMappings;
      this._params = o, this._paramMappings = a;
    }, t.prototype.extractClassifierParams = function (e) {
      return ay(e);
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      var n = zh(e), o = n.featureExtractorMap, a = n.classifierMap;
      return this.faceFeatureExtractor.loadFromWeightMap(o), iy(a);
    }, t.prototype.extractParams = function (e) {
      var n = 1539, o = e.slice(0, e.length - n), a = e.slice(e.length - n);
      return this.faceFeatureExtractor.extractWeights(o), this.extractClassifierParams(a);
    }, t;
  }(mn), Hh = function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t.prototype.postProcess = function (e, n, o) {
      var a = o.map(function (s) {
        var u = s.width, c = s.height, l = n / Math.max(c, u);
        return { width: u * l, height: c * l };
      }), i = a.length;
      return K(function () {
        var s = function (f, d) {
          return Et([Xt([68], f), Xt([68], d)], 1).as2D(1, 136).as1D();
        }, u = function (f, d) {
          var p = a[f], v = p.width, m = p.height;
          return d(v, m) ? Math.abs(v - m) / 2 : 0;
        }, c = function (f) {
          return u(f, function (d, p) {
            return d < p;
          });
        }, l = function (f) {
          return u(f, function (d, p) {
            return p < d;
          });
        }, h = e.mul(Xt([i, 136], n)).sub(Et(Array.from(Array(i), function (f, d) {
          return s(c(d), l(d));
        }))).div(Et(Array.from(Array(i), function (f, d) {
          return s(a[d].width, a[d].height);
        })));
        return h;
      });
    }, t.prototype.forwardInput = function (e) {
      var n = this;
      return K(function () {
        var o = n.runNet(e);
        return n.postProcess(o, e.inputSize, e.inputDimensions.map(function (a) {
          var i = a[0], s = a[1];
          return { height: i, width: s };
        }));
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.detectLandmarks = function (e) {
      return Q(this, void 0, void 0, function () {
        var n, o, a, i = this;
        return ee(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, Ke(e)];
            case 1:
              return n = s.sent(), o = K(function () {
                return Ge(i.forwardInput(n));
              }), [4, Promise.all(o.map(function (u, c) {
                return Q(i, void 0, void 0, function () {
                  var l, h, f, d, p;
                  return ee(this, function (v) {
                    switch (v.label) {
                      case 0:
                        return f = (h = Array).from, [4, u.data()];
                      case 1:
                        return l = f.apply(h, [v.sent()]), d = l.filter(function (m, g) {
                          return Nu(g);
                        }), p = l.filter(function (m, g) {
                          return !Nu(g);
                        }), [2, new O0(Array(68).fill(0).map(function (m, g) {
                          return new be(d[g], p[g]);
                        }), { height: n.getInputHeight(c), width: n.getInputWidth(c) })];
                    }
                  });
                });
              }))];
            case 2:
              return a = s.sent(), o.forEach(function (u) {
                return u.dispose();
              }), [2, n.isBatchInput ? a : a[0]];
          }
        });
      });
    }, t.prototype.getClassifierChannelsOut = function () {
      return 136;
    }, t;
  }(Vh), jh = function (r) {
    oe(t, r);

    function t(e) {
      return e === void 0 && (e = new Uh), r.call(this, 'FaceLandmark68Net', e) || this;
    }

    return t.prototype.getDefaultModelName = function () {
      return 'face_landmark_68_model';
    }, t.prototype.getClassifierChannelsIn = function () {
      return 256;
    }, t;
  }(Hh);

  function uy(r) {
    var t = [], e = Wh(r, t).extractDenseBlock3Params,
      n = { dense0: e('dense0', !0), dense1: e('dense1'), dense2: e('dense2') };
    return gn(r, t), { params: n, paramMappings: t };
  }

  function cy(r) {
    var t = [], e = yn(r), n = e.extractWeights, o = e.getRemainingWeights, a = Bh(n, t).extractDenseBlock3Params,
      i = a(3, 32, 'dense0', !0), s = a(32, 64, 'dense1'), u = a(64, 128, 'dense2');
    if (o().length !== 0) throw new Error('weights remaing after extract: ' + o().length);
    return { paramMappings: t, params: { dense0: i, dense1: s, dense2: u } };
  }

  var ly = function (r) {
    oe(t, r);

    function t() {
      return r.call(this, 'TinyFaceFeatureExtractor') || this;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this.params;
      if (!n) throw new Error('TinyFaceFeatureExtractor - load model before inference');
      return K(function () {
        var o = e.toBatchTensor(112, !0), a = [122.782, 117.001, 104.298], i = co(o, a).div(X(255)),
          s = ei(i, n.dense0, !0);
        return s = ei(s, n.dense1), s = ei(s, n.dense2), s = so(s, [14, 14], [2, 2], 'valid'), s;
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'face_feature_extractor_tiny_model';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return uy(e);
    }, t.prototype.extractParams = function (e) {
      return cy(e);
    }, t;
  }(mn), hy = function (r) {
    oe(t, r);

    function t(e) {
      return e === void 0 && (e = new ly), r.call(this, 'FaceLandmark68TinyNet', e) || this;
    }

    return t.prototype.getDefaultModelName = function () {
      return 'face_landmark_68_tiny_model';
    }, t.prototype.getClassifierChannelsIn = function () {
      return 128;
    }, t;
  }(Hh);
  (function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t;
  })(jh);

  function fy(r, t) {
    return ce(at(r, t.weights), t.biases);
  }

  function Ss(r, t, e, n, o) {
    o === void 0 && (o = 'same');
    var a = t.conv, i = a.filters, s = a.bias, u = St(r, i, e, o);
    return u = ce(u, s), u = fy(u, t.scale), n ? De(u) : u;
  }

  function dy(r, t) {
    return Ss(r, t, [1, 1], !0);
  }

  function Xh(r, t) {
    return Ss(r, t, [1, 1], !1);
  }

  function Kh(r, t) {
    return Ss(r, t, [2, 2], !0, 'valid');
  }

  function py(r, t) {
    function e(s, u, c) {
      var l = r(s), h = l.length / (u * c * c);
      if (I0(h)) throw new Error('depth has to be an integer: ' + h + ', weights.length: ' + l.length + ', numFilters: ' + u + ', filterSize: ' + c);
      return K(function () {
        return Dn(dt(l, [u, h, c, c]), [2, 3, 1, 0]);
      });
    }

    function n(s, u, c, l) {
      var h = e(s, u, c), f = Oe(r(u));
      return t.push({ paramPath: l + '/filters' }, { paramPath: l + '/bias' }), { filters: h, bias: f };
    }

    function o(s, u) {
      var c = Oe(r(s)), l = Oe(r(s));
      return t.push({ paramPath: u + '/weights' }, { paramPath: u + '/biases' }), { weights: c, biases: l };
    }

    function a(s, u, c, l) {
      var h = n(s, u, c, l + '/conv'), f = o(u, l + '/scale');
      return { conv: h, scale: f };
    }

    function i(s, u, c, l, h) {
      h === void 0 && (h = !1);
      var f = a((h ? .5 : 1) * s, u, c, l + '/conv1'), d = a(s, u, c, l + '/conv2');
      return { conv1: f, conv2: d };
    }

    return { extractConvLayerParams: a, extractResidualLayerParams: i };
  }

  function vy(r) {
    var t = yn(r), e = t.extractWeights, n = t.getRemainingWeights, o = [], a = py(e, o), i = a.extractConvLayerParams,
      s = a.extractResidualLayerParams, u = i(4704, 32, 7, 'conv32_down'), c = s(9216, 32, 3, 'conv32_1'),
      l = s(9216, 32, 3, 'conv32_2'), h = s(9216, 32, 3, 'conv32_3'), f = s(36864, 64, 3, 'conv64_down', !0),
      d = s(36864, 64, 3, 'conv64_1'), p = s(36864, 64, 3, 'conv64_2'), v = s(36864, 64, 3, 'conv64_3'),
      m = s(147456, 128, 3, 'conv128_down', !0), g = s(147456, 128, 3, 'conv128_1'), y = s(147456, 128, 3, 'conv128_2'),
      x = s(589824, 256, 3, 'conv256_down', !0), b = s(589824, 256, 3, 'conv256_1'), w = s(589824, 256, 3, 'conv256_2'),
      _ = s(589824, 256, 3, 'conv256_down_out'), S = K(function () {
        return Dn(In(e(256 * 128), [128, 256]), [1, 0]);
      });
    if (o.push({ paramPath: 'fc' }), n().length !== 0) throw new Error('weights remaing after extract: ' + n().length);
    var E = {
      conv32_down: u,
      conv32_1: c,
      conv32_2: l,
      conv32_3: h,
      conv64_down: f,
      conv64_1: d,
      conv64_2: p,
      conv64_3: v,
      conv128_down: m,
      conv128_1: g,
      conv128_2: y,
      conv256_down: x,
      conv256_1: b,
      conv256_2: w,
      conv256_down_out: _,
      fc: S,
    };
    return { params: E, paramMappings: o };
  }

  function my(r, t) {
    var e = Ln(r, t);

    function n(i) {
      var s = e(i + '/scale/weights', 1), u = e(i + '/scale/biases', 1);
      return { weights: s, biases: u };
    }

    function o(i) {
      var s = e(i + '/conv/filters', 4), u = e(i + '/conv/bias', 1), c = n(i);
      return { conv: { filters: s, bias: u }, scale: c };
    }

    function a(i) {
      return { conv1: o(i + '/conv1'), conv2: o(i + '/conv2') };
    }

    return { extractConvLayerParams: o, extractResidualLayerParams: a };
  }

  function gy(r) {
    var t = [], e = my(r, t), n = e.extractConvLayerParams, o = e.extractResidualLayerParams, a = n('conv32_down'),
      i = o('conv32_1'), s = o('conv32_2'), u = o('conv32_3'), c = o('conv64_down'), l = o('conv64_1'),
      h = o('conv64_2'), f = o('conv64_3'), d = o('conv128_down'), p = o('conv128_1'), v = o('conv128_2'),
      m = o('conv256_down'), g = o('conv256_1'), y = o('conv256_2'), x = o('conv256_down_out'), b = r.fc;
    if (t.push({
      originalPath: 'fc',
      paramPath: 'fc',
    }), !k0(b)) throw new Error('expected weightMap[fc] to be a Tensor2D, instead have ' + b);
    var w = {
      conv32_down: a,
      conv32_1: i,
      conv32_2: s,
      conv32_3: u,
      conv64_down: c,
      conv64_1: l,
      conv64_2: h,
      conv64_3: f,
      conv128_down: d,
      conv128_1: p,
      conv128_2: v,
      conv256_down: m,
      conv256_1: g,
      conv256_2: y,
      conv256_down_out: x,
      fc: b,
    };
    return gn(r, t), { params: w, paramMappings: t };
  }

  function zt(r, t) {
    var e = dy(r, t.conv1);
    return e = Xh(e, t.conv2), e = ce(e, r), e = De(e), e;
  }

  function Eo(r, t) {
    var e = Kh(r, t.conv1);
    e = Xh(e, t.conv2);
    var n = so(r, 2, 2, 'valid'), o = Ee(n.shape), a = n.shape[3] !== e.shape[3],
      i = n.shape[1] !== e.shape[1] || n.shape[2] !== e.shape[2];
    if (i) {
      var s = Gr(e.shape);
      s[1] = 1;
      var u = Ee(s);
      e = Ve([e, u], 1);
      var c = Gr(e.shape);
      c[2] = 1;
      var l = Ee(c);
      e = Ve([e, l], 2);
    }
    return n = a ? Ve([n, o], 3) : n, e = ce(n, e), e = De(e), e;
  }

  var yy = function (r) {
    oe(t, r);

    function t() {
      return r.call(this, 'FaceRecognitionNet') || this;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this.params;
      if (!n) throw new Error('FaceRecognitionNet - load model before inference');
      return K(function () {
        var o = e.toBatchTensor(150, !0).toFloat(), a = [122.782, 117.001, 104.298], i = co(o, a).div(X(256)),
          s = Kh(i, n.conv32_down);
        s = He(s, 3, 2, 'valid'), s = zt(s, n.conv32_1), s = zt(s, n.conv32_2), s = zt(s, n.conv32_3), s = Eo(s, n.conv64_down), s = zt(s, n.conv64_1), s = zt(s, n.conv64_2), s = zt(s, n.conv64_3), s = Eo(s, n.conv128_down), s = zt(s, n.conv128_1), s = zt(s, n.conv128_2), s = Eo(s, n.conv256_down), s = zt(s, n.conv256_1), s = zt(s, n.conv256_2), s = Eo(s, n.conv256_down_out);
        var u = s.mean([1, 2]), c = va(u, n.fc);
        return c;
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.computeFaceDescriptor = function (e) {
      return Q(this, void 0, void 0, function () {
        var n, o, a, i = this;
        return ee(this, function (s) {
          switch (s.label) {
            case 0:
              return [4, Ke(e)];
            case 1:
              return n = s.sent(), o = K(function () {
                return Ge(i.forwardInput(n));
              }), [4, Promise.all(o.map(function (u) {
                return u.data();
              }))];
            case 2:
              return a = s.sent(), o.forEach(function (u) {
                return u.dispose();
              }), [2, n.isBatchInput ? a : a[0]];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'face_recognition_model';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return gy(e);
    }, t.prototype.extractParams = function (e) {
      return vy(e);
    }, t;
  }(mn);

  function Yh(r, t) {
    var e = { descriptor: t };
    return Object.assign({}, r, e);
  }

  function $h(r, t) {
    var e = { age: t };
    return Object.assign({}, r, e);
  }

  function Zh(r, t, e) {
    var n = { gender: t, genderProbability: e };
    return Object.assign({}, r, n);
  }

  var Jh = function () {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.minFaceSize, o = e.scaleFactor, a = e.maxNumScales, i = e.scoreThresholds,
        s = e.scaleSteps;
      if (this._name = 'MtcnnOptions', this._minFaceSize = n || 20, this._scaleFactor = o || .709, this._maxNumScales = a || 10, this._scoreThresholds = i || [.6, .7, .7], this._scaleSteps = s, typeof this._minFaceSize != 'number' || this._minFaceSize < 0) throw new Error(this._name + ' - expected minFaceSize to be a number > 0');
      if (typeof this._scaleFactor != 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) throw new Error(this._name + ' - expected scaleFactor to be a number between 0 and 1');
      if (typeof this._maxNumScales != 'number' || this._maxNumScales < 0) throw new Error(this._name + ' - expected maxNumScales to be a number > 0');
      if (!Array.isArray(this._scoreThresholds) || this._scoreThresholds.length !== 3 || this._scoreThresholds.some(function (u) {
        return typeof u != 'number';
      })) throw new Error(this._name + ' - expected scoreThresholds to be an array of numbers of length 3');
      if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (u) {
        return typeof u != 'number';
      }))) throw new Error(this._name + ' - expected scaleSteps to be an array of numbers');
    }

    return Object.defineProperty(r.prototype, 'minFaceSize', {
      get: function () {
        return this._minFaceSize;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'scaleFactor', {
      get: function () {
        return this._scaleFactor;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'maxNumScales', {
      get: function () {
        return this._maxNumScales;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'scoreThresholds', {
      get: function () {
        return this._scoreThresholds;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'scaleSteps', {
      get: function () {
        return this._scaleSteps;
      }, enumerable: !0, configurable: !0,
    }), r;
  }();

  function by(r, t) {
    function e(u, c) {
      var l = dt(r(9 * u), [3, 3, u, 1]), h = Oe(r(u)), f = Oe(r(u)), d = Oe(r(u)), p = Oe(r(u));
      return t.push({ paramPath: c + '/filters' }, { paramPath: c + '/batch_norm_scale' }, { paramPath: c + '/batch_norm_offset' }, { paramPath: c + '/batch_norm_mean' }, { paramPath: c + '/batch_norm_variance' }), {
        filters: l,
        batch_norm_scale: h,
        batch_norm_offset: f,
        batch_norm_mean: d,
        batch_norm_variance: p,
      };
    }

    function n(u, c, l, h, f) {
      var d = dt(r(u * c * l * l), [l, l, u, c]), p = Oe(r(c));
      return t.push({ paramPath: h + '/filters' }, { paramPath: h + '/' + (f ? 'batch_norm_offset' : 'bias') }), {
        filters: d,
        bias: p,
      };
    }

    function o(u, c, l, h) {
      var f = n(u, c, l, h, !0), d = f.filters, p = f.bias;
      return { filters: d, batch_norm_offset: p };
    }

    function a(u, c, l) {
      var h = e(u, l + '/depthwise_conv'), f = o(u, c, 1, l + '/pointwise_conv');
      return { depthwise_conv: h, pointwise_conv: f };
    }

    function i() {
      var u = o(3, 32, 3, 'mobilenetv1/conv_0'), c = a(32, 64, 'mobilenetv1/conv_1'),
        l = a(64, 128, 'mobilenetv1/conv_2'), h = a(128, 128, 'mobilenetv1/conv_3'),
        f = a(128, 256, 'mobilenetv1/conv_4'), d = a(256, 256, 'mobilenetv1/conv_5'),
        p = a(256, 512, 'mobilenetv1/conv_6'), v = a(512, 512, 'mobilenetv1/conv_7'),
        m = a(512, 512, 'mobilenetv1/conv_8'), g = a(512, 512, 'mobilenetv1/conv_9'),
        y = a(512, 512, 'mobilenetv1/conv_10'), x = a(512, 512, 'mobilenetv1/conv_11'),
        b = a(512, 1024, 'mobilenetv1/conv_12'), w = a(1024, 1024, 'mobilenetv1/conv_13');
      return {
        conv_0: u,
        conv_1: c,
        conv_2: l,
        conv_3: h,
        conv_4: f,
        conv_5: d,
        conv_6: p,
        conv_7: v,
        conv_8: m,
        conv_9: g,
        conv_10: y,
        conv_11: x,
        conv_12: b,
        conv_13: w,
      };
    }

    function s() {
      var u = o(1024, 256, 1, 'prediction_layer/conv_0'), c = o(256, 512, 3, 'prediction_layer/conv_1'),
        l = o(512, 128, 1, 'prediction_layer/conv_2'), h = o(128, 256, 3, 'prediction_layer/conv_3'),
        f = o(256, 128, 1, 'prediction_layer/conv_4'), d = o(128, 256, 3, 'prediction_layer/conv_5'),
        p = o(256, 64, 1, 'prediction_layer/conv_6'), v = o(64, 128, 3, 'prediction_layer/conv_7'),
        m = n(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor'),
        g = n(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor'),
        y = n(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor'),
        x = n(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor'),
        b = n(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor'),
        w = n(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor'),
        _ = n(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor'),
        S = n(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor'),
        E = n(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor'),
        I = n(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor'),
        R = n(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor'),
        F = n(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor'),
        D = { box_encoding_predictor: m, class_predictor: g }, L = { box_encoding_predictor: y, class_predictor: x },
        B = { box_encoding_predictor: b, class_predictor: w }, W = { box_encoding_predictor: _, class_predictor: S },
        V = { box_encoding_predictor: E, class_predictor: I }, z = { box_encoding_predictor: R, class_predictor: F };
      return {
        conv_0: u,
        conv_1: c,
        conv_2: l,
        conv_3: h,
        conv_4: f,
        conv_5: d,
        conv_6: p,
        conv_7: v,
        box_predictor_0: D,
        box_predictor_1: L,
        box_predictor_2: B,
        box_predictor_3: W,
        box_predictor_4: V,
        box_predictor_5: z,
      };
    }

    return { extractMobilenetV1Params: i, extractPredictionLayerParams: s };
  }

  function xy(r) {
    var t = [], e = yn(r), n = e.extractWeights, o = e.getRemainingWeights, a = by(n, t),
      i = a.extractMobilenetV1Params, s = a.extractPredictionLayerParams, u = i(), c = s(),
      l = Wi(n(5118 * 4), [1, 5118, 4]), h = { extra_dim: l };
    if (t.push({ paramPath: 'output_layer/extra_dim' }), o().length !== 0) throw new Error('weights remaing after extract: ' + o().length);
    return { params: { mobilenetv1: u, prediction_layer: c, output_layer: h }, paramMappings: t };
  }

  function wy(r, t) {
    var e = Ln(r, t);

    function n(c, l, h) {
      var f = e(c + '/Conv2d_' + l + '_pointwise/weights', 4, h + '/filters'),
        d = e(c + '/Conv2d_' + l + '_pointwise/convolution_bn_offset', 1, h + '/batch_norm_offset');
      return { filters: f, batch_norm_offset: d };
    }

    function o(c) {
      var l = 'mobilenetv1/conv_' + c, h = 'MobilenetV1/Conv2d_' + c + '_depthwise', f = l + '/depthwise_conv',
        d = l + '/pointwise_conv', p = e(h + '/depthwise_weights', 4, f + '/filters'),
        v = e(h + '/BatchNorm/gamma', 1, f + '/batch_norm_scale'),
        m = e(h + '/BatchNorm/beta', 1, f + '/batch_norm_offset'),
        g = e(h + '/BatchNorm/moving_mean', 1, f + '/batch_norm_mean'),
        y = e(h + '/BatchNorm/moving_variance', 1, f + '/batch_norm_variance');
      return {
        depthwise_conv: {
          filters: p,
          batch_norm_scale: v,
          batch_norm_offset: m,
          batch_norm_mean: g,
          batch_norm_variance: y,
        }, pointwise_conv: n('MobilenetV1', c, d),
      };
    }

    function a() {
      return {
        conv_0: n('MobilenetV1', 0, 'mobilenetv1/conv_0'),
        conv_1: o(1),
        conv_2: o(2),
        conv_3: o(3),
        conv_4: o(4),
        conv_5: o(5),
        conv_6: o(6),
        conv_7: o(7),
        conv_8: o(8),
        conv_9: o(9),
        conv_10: o(10),
        conv_11: o(11),
        conv_12: o(12),
        conv_13: o(13),
      };
    }

    function i(c, l) {
      var h = e(c + '/weights', 4, l + '/filters'), f = e(c + '/biases', 1, l + '/bias');
      return { filters: h, bias: f };
    }

    function s(c) {
      var l = i('Prediction/BoxPredictor_' + c + '/BoxEncodingPredictor', 'prediction_layer/box_predictor_' + c + '/box_encoding_predictor'),
        h = i('Prediction/BoxPredictor_' + c + '/ClassPredictor', 'prediction_layer/box_predictor_' + c + '/class_predictor');
      return { box_encoding_predictor: l, class_predictor: h };
    }

    function u() {
      return {
        conv_0: n('Prediction', 0, 'prediction_layer/conv_0'),
        conv_1: n('Prediction', 1, 'prediction_layer/conv_1'),
        conv_2: n('Prediction', 2, 'prediction_layer/conv_2'),
        conv_3: n('Prediction', 3, 'prediction_layer/conv_3'),
        conv_4: n('Prediction', 4, 'prediction_layer/conv_4'),
        conv_5: n('Prediction', 5, 'prediction_layer/conv_5'),
        conv_6: n('Prediction', 6, 'prediction_layer/conv_6'),
        conv_7: n('Prediction', 7, 'prediction_layer/conv_7'),
        box_predictor_0: s(0),
        box_predictor_1: s(1),
        box_predictor_2: s(2),
        box_predictor_3: s(3),
        box_predictor_4: s(4),
        box_predictor_5: s(5),
      };
    }

    return { extractMobilenetV1Params: a, extractPredictionLayerParams: u };
  }

  function _y(r) {
    var t = [], e = wy(r, t), n = e.extractMobilenetV1Params, o = e.extractPredictionLayerParams,
      a = r['Output/extra_dim'];
    if (t.push({
      originalPath: 'Output/extra_dim',
      paramPath: 'output_layer/extra_dim',
    }), !ba(a)) throw new Error('expected weightMap[\'Output/extra_dim\'] to be a Tensor3D, instead have ' + a);
    var i = { mobilenetv1: n(), prediction_layer: o(), output_layer: { extra_dim: a } };
    return gn(r, t), { params: i, paramMappings: t };
  }

  function Vt(r, t, e) {
    return K(function () {
      var n = St(r, t.filters, e, 'same');
      return n = ce(n, t.batch_norm_offset), ts(n, 0, 6);
    });
  }

  var Cy = .0010000000474974513;

  function Ey(r, t, e) {
    return K(function () {
      var n = pa(r, t.filters, e, 'same');
      return n = Gl(n, t.batch_norm_mean, t.batch_norm_variance, t.batch_norm_offset, t.batch_norm_scale, Cy), ts(n, 0, 6);
    });
  }

  function ky(r) {
    return [2, 4, 6, 12].some(function (t) {
      return t === r;
    }) ? [2, 2] : [1, 1];
  }

  function Iy(r, t) {
    return K(function () {
      var e = null, n = Vt(r, t.conv_0, [2, 2]),
        o = [t.conv_1, t.conv_2, t.conv_3, t.conv_4, t.conv_5, t.conv_6, t.conv_7, t.conv_8, t.conv_9, t.conv_10, t.conv_11, t.conv_12, t.conv_13];
      if (o.forEach(function (a, i) {
        var s = i + 1, u = ky(s);
        n = Ey(n, a.depthwise_conv, u), n = Vt(n, a.pointwise_conv, [1, 1]), s === 11 && (e = n);
      }), e === null) throw new Error('mobileNetV1 - output of conv layer 11 is null');
      return { out: n, conv11: e };
    });
  }

  function Ry(r, t, e, n, o) {
    var a = r.shape[0], i = Math.min(e, a), s = t.map(function (l, h) {
      return { score: l, boxIndex: h };
    }).filter(function (l) {
      return l.score > o;
    }).sort(function (l, h) {
      return h.score - l.score;
    }), u = function (l) {
      return l <= n ? 1 : 0;
    }, c = [];
    return s.forEach(function (l) {
      if (!(c.length >= i)) {
        for (var h = l.score, f = c.length - 1; f >= 0; --f) {
          var d = Sy(r, l.boxIndex, c[f]);
          if (d !== 0 && (l.score *= u(d), l.score <= o)) break;
        }
        h === l.score && c.push(l.boxIndex);
      }
    }), c;
  }

  function Sy(r, t, e) {
    var n = r.arraySync(), o = Math.min(n[t][0], n[t][2]), a = Math.min(n[t][1], n[t][3]),
      i = Math.max(n[t][0], n[t][2]), s = Math.max(n[t][1], n[t][3]), u = Math.min(n[e][0], n[e][2]),
      c = Math.min(n[e][1], n[e][3]), l = Math.max(n[e][0], n[e][2]), h = Math.max(n[e][1], n[e][3]),
      f = (i - o) * (s - a), d = (l - u) * (h - c);
    if (f <= 0 || d <= 0) return 0;
    var p = Math.max(o, u), v = Math.max(a, c), m = Math.min(i, l), g = Math.min(s, h),
      y = Math.max(m - p, 0) * Math.max(g - v, 0);
    return y / (f + d - y);
  }

  function Ay(r) {
    var t = Ge(Dn(r, [1, 0])), e = [qe(t[2], t[0]), qe(t[3], t[1])],
      n = [ce(t[0], Dt(e[0], X(2))), ce(t[1], Dt(e[1], X(2)))];
    return { sizes: e, centers: n };
  }

  function Dy(r, t) {
    var e = Ay(r), n = e.sizes, o = e.centers, a = Ge(Dn(t, [1, 0])), i = Dt(at(wi(Dt(a[2], X(5))), n[0]), X(2)),
      s = ce(at(Dt(a[0], X(10)), n[0]), o[0]), u = Dt(at(wi(Dt(a[3], X(5))), n[1]), X(2)),
      c = ce(at(Dt(a[1], X(10)), n[1]), o[1]);
    return Dn(Et([qe(s, i), qe(c, u), ce(s, i), ce(c, u)]), [1, 0]);
  }

  function Ty(r, t, e) {
    return K(function () {
      var n = r.shape[0], o = Dy(Tt(mr(e.extra_dim, [n, 1, 1]), [-1, 4]), Tt(r, [-1, 4]));
      o = Tt(o, [n, o.shape[0] / n, 4]);
      var a = Wl(Yt(t, [0, 0, 1], [-1, -1, -1])), i = Yt(a, [0, 0, 0], [-1, -1, 1]);
      i = Tt(i, [n, i.shape[1]]);
      var s = Ge(o), u = Ge(i);
      return { boxes: s, scores: u };
    });
  }

  function hr(r, t) {
    return K(function () {
      var e = r.shape[0], n = Tt(Nt(r, t.box_encoding_predictor), [e, -1, 1, 4]),
        o = Tt(Nt(r, t.class_predictor), [e, -1, 3]);
      return { boxPredictionEncoding: n, classPrediction: o };
    });
  }

  function Fy(r, t, e) {
    return K(function () {
      var n = Vt(r, e.conv_0, [1, 1]), o = Vt(n, e.conv_1, [2, 2]), a = Vt(o, e.conv_2, [1, 1]),
        i = Vt(a, e.conv_3, [2, 2]), s = Vt(i, e.conv_4, [1, 1]), u = Vt(s, e.conv_5, [2, 2]),
        c = Vt(u, e.conv_6, [1, 1]), l = Vt(c, e.conv_7, [2, 2]), h = hr(t, e.box_predictor_0),
        f = hr(r, e.box_predictor_1), d = hr(o, e.box_predictor_2), p = hr(i, e.box_predictor_3),
        v = hr(u, e.box_predictor_4), m = hr(l, e.box_predictor_5),
        g = Ve([h.boxPredictionEncoding, f.boxPredictionEncoding, d.boxPredictionEncoding, p.boxPredictionEncoding, v.boxPredictionEncoding, m.boxPredictionEncoding], 1),
        y = Ve([h.classPrediction, f.classPrediction, d.classPrediction, p.classPrediction, v.classPrediction, m.classPrediction], 1);
      return { boxPredictions: g, classPredictions: y };
    });
  }

  var Ca = function () {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.minConfidence, o = e.maxResults;
      if (this._name = 'SsdMobilenetv1Options', this._minConfidence = n || .5, this._maxResults = o || 100, typeof this._minConfidence != 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) throw new Error(this._name + ' - expected minConfidence to be a number between 0 and 1');
      if (typeof this._maxResults != 'number') throw new Error(this._name + ' - expected maxResults to be a number');
    }

    return Object.defineProperty(r.prototype, 'minConfidence', {
      get: function () {
        return this._minConfidence;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'maxResults', {
      get: function () {
        return this._maxResults;
      }, enumerable: !0, configurable: !0,
    }), r;
  }(), Qh = function (r) {
    oe(t, r);

    function t() {
      return r.call(this, 'SsdMobilenetv1') || this;
    }

    return t.prototype.forwardInput = function (e) {
      var n = this.params;
      if (!n) throw new Error('SsdMobilenetv1 - load model before inference');
      return K(function () {
        var o = e.toBatchTensor(512, !1).toFloat(), a = qe(at(o, X(.007843137718737125)), X(1)),
          i = Iy(a, n.mobilenetv1), s = Fy(i.out, i.conv11, n.prediction_layer), u = s.boxPredictions,
          c = s.classPredictions;
        return Ty(u, c, n.output_layer);
      });
    }, t.prototype.forward = function (e) {
      return Q(this, void 0, void 0, function () {
        var n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return n = this.forwardInput, [4, Ke(e)];
            case 1:
              return [2, n.apply(this, [o.sent()])];
          }
        });
      });
    }, t.prototype.locateFaces = function (e, n) {
      return n === void 0 && (n = {}), Q(this, void 0, void 0, function () {
        var o, a, i, s, u, c, l, h, f, d, p, v, m, g, y, x, b, w, _, S, E;
        return ee(this, function (I) {
          switch (I.label) {
            case 0:
              return o = new Ca(n), a = o.maxResults, i = o.minConfidence, [4, Ke(e)];
            case 1:
              for (s = I.sent(), u = this.forwardInput(s), c = u.boxes, l = u.scores, h = c[0], f = l[0], d = 1; d < c.length; d++) c[d].dispose(), l[d].dispose();
              return m = (v = Array).from, [4, f.data()];
            case 2:
              return p = m.apply(v, [I.sent()]), g = .5, y = Ry(h, p, a, g, i), x = s.getReshapedInputDimensions(0), b = s.inputSize, w = b / x.width, _ = b / x.height, S = h.arraySync(), E = y.map(function (R) {
                var F = [Math.max(0, S[R][0]), Math.min(1, S[R][2])].map(function (z) {
                  return z * _;
                }), D = F[0], L = F[1], B = [Math.max(0, S[R][1]), Math.min(1, S[R][3])].map(function (z) {
                  return z * w;
                }), W = B[0], V = B[1];
                return new Qt(p[R], new ys(W, D, V - W, L - D), {
                  height: s.getInputHeight(0),
                  width: s.getInputWidth(0),
                });
              }), h.dispose(), f.dispose(), [2, E];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return 'ssd_mobilenetv1_model';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return _y(e);
    }, t.prototype.extractParams = function (e) {
      return xy(e);
    }, t;
  }(mn);
  (function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t;
  })(Qh);
  var Ny = .4,
    My = [new be(.738768, .874946), new be(2.42204, 2.65704), new be(4.30971, 7.04493), new be(10.246, 4.59428), new be(12.6868, 11.8741)],
    Py = [new be(1.603231, 2.094468), new be(6.041143, 7.080126), new be(2.882459, 3.518061), new be(4.266906, 5.178857), new be(9.041765, 10.66308)],
    Oy = [117.001, 114.697, 97.404], By = 'tiny_yolov2_model', Ly = 'tiny_yolov2_separable_conv_model',
    ko = function (r) {
      return typeof r == 'number';
    };

  function Wy(r) {
    if (!r) throw new Error('invalid config: ' + r);
    if (typeof r.withSeparableConvs != 'boolean') throw new Error('config.withSeparableConvs has to be a boolean, have: ' + r.withSeparableConvs);
    if (!ko(r.iouThreshold) || r.iouThreshold < 0 || r.iouThreshold > 1) throw new Error('config.iouThreshold has to be a number between [0, 1], have: ' + r.iouThreshold);
    if (!Array.isArray(r.classes) || !r.classes.length || !r.classes.every(function (t) {
      return typeof t == 'string';
    })) throw new Error('config.classes has to be an array class names: string[], have: ' + JSON.stringify(r.classes));
    if (!Array.isArray(r.anchors) || !r.anchors.length || !r.anchors.map(function (t) {
      return t || {};
    }).every(function (t) {
      return ko(t.x) && ko(t.y);
    })) throw new Error('config.anchors has to be an array of { x: number, y: number }, have: ' + JSON.stringify(r.anchors));
    if (r.meanRgb && (!Array.isArray(r.meanRgb) || r.meanRgb.length !== 3 || !r.meanRgb.every(ko))) throw new Error('config.meanRgb has to be an array of shape [number, number, number], have: ' + JSON.stringify(r.meanRgb));
  }

  function As(r) {
    return K(function () {
      var t = at(r, X(.10000000149011612));
      return ce(De(qe(r, t)), t);
    });
  }

  function xn(r, t) {
    return K(function () {
      var e = nr(r, [[0, 0], [1, 1], [1, 1], [0, 0]]);
      return e = St(e, t.conv.filters, [1, 1], 'valid'), e = qe(e, t.bn.sub), e = at(e, t.bn.truediv), e = ce(e, t.conv.bias), As(e);
    });
  }

  function wn(r, t) {
    return K(function () {
      var e = nr(r, [[0, 0], [1, 1], [1, 1], [0, 0]]);
      return e = as(e, t.depthwise_filter, t.pointwise_filter, [1, 1], 'valid'), e = ce(e, t.bias), As(e);
    });
  }

  function Uy(r, t) {
    var e = _a(r, t);

    function n(i, s) {
      var u = Oe(r(i)), c = Oe(r(i));
      return t.push({ paramPath: s + '/sub' }, { paramPath: s + '/truediv' }), { sub: u, truediv: c };
    }

    function o(i, s, u) {
      var c = e(i, s, 3, u + '/conv'), l = n(s, u + '/bn');
      return { conv: c, bn: l };
    }

    var a = ks(r, t);
    return { extractConvParams: e, extractConvWithBatchNormParams: o, extractSeparableConvParams: a };
  }

  function zy(r, t, e, n) {
    var o = yn(r), a = o.extractWeights, i = o.getRemainingWeights, s = [], u = Uy(a, s), c = u.extractConvParams,
      l = u.extractConvWithBatchNormParams, h = u.extractSeparableConvParams, f;
    if (t.withSeparableConvs) {
      var d = n[0], p = n[1], v = n[2], m = n[3], g = n[4], y = n[5], x = n[6], b = n[7], w = n[8],
        _ = t.isFirstLayerConv2d ? c(d, p, 3, 'conv0') : h(d, p, 'conv0'), S = h(p, v, 'conv1'), E = h(v, m, 'conv2'),
        I = h(m, g, 'conv3'), R = h(g, y, 'conv4'), F = h(y, x, 'conv5'), D = b ? h(x, b, 'conv6') : void 0,
        L = w ? h(b, w, 'conv7') : void 0, B = c(w || b || x, 5 * e, 1, 'conv8');
      f = { conv0: _, conv1: S, conv2: E, conv3: I, conv4: R, conv5: F, conv6: D, conv7: L, conv8: B };
    } else {
      var d = n[0], p = n[1], v = n[2], m = n[3], g = n[4], y = n[5], x = n[6], b = n[7], w = n[8],
        _ = l(d, p, 'conv0'), S = l(p, v, 'conv1'), E = l(v, m, 'conv2'), I = l(m, g, 'conv3'), R = l(g, y, 'conv4'),
        F = l(y, x, 'conv5'), D = l(x, b, 'conv6'), L = l(b, w, 'conv7'), B = c(w, 5 * e, 1, 'conv8');
      f = { conv0: _, conv1: S, conv2: E, conv3: I, conv4: R, conv5: F, conv6: D, conv7: L, conv8: B };
    }
    if (i().length !== 0) throw new Error('weights remaing after extract: ' + i().length);
    return { params: f, paramMappings: s };
  }

  function Vy(r, t) {
    var e = Ln(r, t);

    function n(s) {
      var u = e(s + '/sub', 1), c = e(s + '/truediv', 1);
      return { sub: u, truediv: c };
    }

    function o(s) {
      var u = e(s + '/filters', 4), c = e(s + '/bias', 1);
      return { filters: u, bias: c };
    }

    function a(s) {
      var u = o(s + '/conv'), c = n(s + '/bn');
      return { conv: u, bn: c };
    }

    var i = Is(e);
    return { extractConvParams: o, extractConvWithBatchNormParams: a, extractSeparableConvParams: i };
  }

  function Gy(r, t) {
    var e = [], n = Vy(r, e), o = n.extractConvParams, a = n.extractConvWithBatchNormParams,
      i = n.extractSeparableConvParams, s;
    if (t.withSeparableConvs) {
      var u = t.filterSizes && t.filterSizes.length || 9;
      s = {
        conv0: t.isFirstLayerConv2d ? o('conv0') : i('conv0'),
        conv1: i('conv1'),
        conv2: i('conv2'),
        conv3: i('conv3'),
        conv4: i('conv4'),
        conv5: i('conv5'),
        conv6: u > 7 ? i('conv6') : void 0,
        conv7: u > 8 ? i('conv7') : void 0,
        conv8: o('conv8'),
      };
    } else s = {
      conv0: a('conv0'),
      conv1: a('conv1'),
      conv2: a('conv2'),
      conv3: a('conv3'),
      conv4: a('conv4'),
      conv5: a('conv5'),
      conv6: a('conv6'),
      conv7: a('conv7'),
      conv8: o('conv8'),
    };
    return gn(r, e), { params: s, paramMappings: e };
  }

  var zu;
  (function (r) {
    r[r.XS = 224] = 'XS', r[r.SM = 320] = 'SM', r[r.MD = 416] = 'MD', r[r.LG = 608] = 'LG';
  })(zu || (zu = {}));
  var Ds = function () {
    function r(t) {
      var e = t === void 0 ? {} : t, n = e.inputSize, o = e.scoreThreshold;
      if (this._name = 'TinyYolov2Options', this._inputSize = n || 416, this._scoreThreshold = o || .5, typeof this._inputSize != 'number' || this._inputSize % 32 !== 0) throw new Error(this._name + ' - expected inputSize to be a number divisible by 32');
      if (typeof this._scoreThreshold != 'number' || this._scoreThreshold <= 0 || this._scoreThreshold >= 1) throw new Error(this._name + ' - expected scoreThreshold to be a number between 0 and 1');
    }

    return Object.defineProperty(r.prototype, 'inputSize', {
      get: function () {
        return this._inputSize;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'scoreThreshold', {
      get: function () {
        return this._scoreThreshold;
      }, enumerable: !0, configurable: !0,
    }), r;
  }(), ef = function (r) {
    oe(t, r);

    function t(e) {
      var n = r.call(this, 'TinyYolov2') || this;
      return Wy(e), n._config = e, n;
    }

    return Object.defineProperty(t.prototype, 'config', {
      get: function () {
        return this._config;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(t.prototype, 'withClassScores', {
      get: function () {
        return this.config.withClassScores || this.config.classes.length > 1;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(t.prototype, 'boxEncodingSize', {
      get: function () {
        return 5 + (this.withClassScores ? this.config.classes.length : 0);
      }, enumerable: !0, configurable: !0,
    }), t.prototype.runTinyYolov2 = function (e, n) {
      var o = xn(e, n.conv0);
      return o = He(o, [2, 2], [2, 2], 'same'), o = xn(o, n.conv1), o = He(o, [2, 2], [2, 2], 'same'), o = xn(o, n.conv2), o = He(o, [2, 2], [2, 2], 'same'), o = xn(o, n.conv3), o = He(o, [2, 2], [2, 2], 'same'), o = xn(o, n.conv4), o = He(o, [2, 2], [2, 2], 'same'), o = xn(o, n.conv5), o = He(o, [2, 2], [1, 1], 'same'), o = xn(o, n.conv6), o = xn(o, n.conv7), Nt(o, n.conv8, 'valid', !1);
    }, t.prototype.runMobilenet = function (e, n) {
      var o = this.config.isFirstLayerConv2d ? As(Nt(e, n.conv0, 'valid', !1)) : wn(e, n.conv0);
      return o = He(o, [2, 2], [2, 2], 'same'), o = wn(o, n.conv1), o = He(o, [2, 2], [2, 2], 'same'), o = wn(o, n.conv2), o = He(o, [2, 2], [2, 2], 'same'), o = wn(o, n.conv3), o = He(o, [2, 2], [2, 2], 'same'), o = wn(o, n.conv4), o = He(o, [2, 2], [2, 2], 'same'), o = wn(o, n.conv5), o = He(o, [2, 2], [1, 1], 'same'), o = n.conv6 ? wn(o, n.conv6) : o, o = n.conv7 ? wn(o, n.conv7) : o, Nt(o, n.conv8, 'valid', !1);
    }, t.prototype.forwardInput = function (e, n) {
      var o = this, a = this.params;
      if (!a) throw new Error('TinyYolov2 - load model before inference');
      return K(function () {
        var i = e.toBatchTensor(n, !1).toFloat();
        return i = o.config.meanRgb ? co(i, o.config.meanRgb) : i, i = i.div(X(256)), o.config.withSeparableConvs ? o.runMobilenet(i, a) : o.runTinyYolov2(i, a);
      });
    }, t.prototype.forward = function (e, n) {
      return Q(this, void 0, void 0, function () {
        var o;
        return ee(this, function (a) {
          switch (a.label) {
            case 0:
              return o = this.forwardInput, [4, Ke(e)];
            case 1:
              return [4, o.apply(this, [a.sent(), n])];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, t.prototype.detect = function (e, n) {
      return n === void 0 && (n = {}), Q(this, void 0, void 0, function () {
        var o, a, i, s, u, c, l, h, f, d, p, v, m, g, y = this;
        return ee(this, function (x) {
          switch (x.label) {
            case 0:
              return o = new Ds(n), a = o.inputSize, i = o.scoreThreshold, [4, Ke(e)];
            case 1:
              return s = x.sent(), [4, this.forwardInput(s, a)];
            case 2:
              return u = x.sent(), c = K(function () {
                return Ge(u)[0].expandDims();
              }), l = {
                width: s.getInputWidth(0),
                height: s.getInputHeight(0),
              }, [4, this.extractBoxes(c, s.getReshapedInputDimensions(0), i)];
            case 3:
              return h = x.sent(), u.dispose(), c.dispose(), f = h.map(function (b) {
                return b.box;
              }), d = h.map(function (b) {
                return b.score;
              }), p = h.map(function (b) {
                return b.classScore;
              }), v = h.map(function (b) {
                return y.config.classes[b.label];
              }), m = no(f.map(function (b) {
                return b.rescale(a);
              }), d, this.config.iouThreshold, !0), g = m.map(function (b) {
                return new Ih(d[b], p[b], v[b], f[b], l);
              }), [2, g];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return '';
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return Gy(e, this.config);
    }, t.prototype.extractParams = function (e) {
      var n = this.config.filterSizes || t.DEFAULT_FILTER_SIZES, o = n ? n.length : void 0;
      if (o !== 7 && o !== 8 && o !== 9) throw new Error('TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found ' + o + ' filterSizes in config');
      return zy(e, this.config, this.boxEncodingSize, n);
    }, t.prototype.extractBoxes = function (e, n, o) {
      return Q(this, void 0, void 0, function () {
        var a, i, s, u, c, l, h, f, d, p, v, m, g, y, x, b, w, _, S, E, I, R, F, D, L, B, W, V, z, U = this;
        return ee(this, function (q) {
          switch (q.label) {
            case 0:
              return a = n.width, i = n.height, s = Math.max(a, i), u = s / a, c = s / i, l = e.shape[1], h = this.config.anchors.length, f = K(function () {
                var P = e.reshape([l, l, h, U.boxEncodingSize]), H = P.slice([0, 0, 0, 0], [l, l, h, 4]),
                  j = P.slice([0, 0, 0, 4], [l, l, h, 1]),
                  te = U.withClassScores ? pn(P.slice([0, 0, 0, 5], [l, l, h, U.config.classes.length]), 3) : X(0);
                return [H, j, te];
              }), d = f[0], p = f[1], v = f[2], m = [], [4, p.array()];
            case 1:
              return g = q.sent(), [4, d.array()];
            case 2:
              y = q.sent(), x = 0, q.label = 3;
            case 3:
              if (!(x < l)) return [3, 12];
              b = 0, q.label = 4;
            case 4:
              if (!(b < l)) return [3, 11];
              w = 0, q.label = 5;
            case 5:
              return w < h ? (_ = Qa(g[x][b][w][0]), !o || _ > o ? (S = (b + Qa(y[x][b][w][0])) / l * u, E = (x + Qa(y[x][b][w][1])) / l * c, I = Math.exp(y[x][b][w][2]) * this.config.anchors[w].x / l * u, R = Math.exp(y[x][b][w][3]) * this.config.anchors[w].y / l * c, F = S - I / 2, D = E - R / 2, L = {
                row: x,
                col: b,
                anchor: w,
              }, this.withClassScores ? [4, this.extractPredictedClass(v, L)] : [3, 7]) : [3, 9]) : [3, 10];
            case 6:
              return z = q.sent(), [3, 8];
            case 7:
              z = { classScore: 1, label: 0 }, q.label = 8;
            case 8:
              B = z, W = B.classScore, V = B.label, m.push(nt({
                box: new xa(F, D, F + I, D + R),
                score: _,
                classScore: _ * W,
                label: V,
              }, L)), q.label = 9;
            case 9:
              return w++, [3, 5];
            case 10:
              return b++, [3, 4];
            case 11:
              return x++, [3, 3];
            case 12:
              return d.dispose(), p.dispose(), v.dispose(), [2, m];
          }
        });
      });
    }, t.prototype.extractPredictedClass = function (e, n) {
      return Q(this, void 0, void 0, function () {
        var o, a, i, s;
        return ee(this, function (u) {
          switch (u.label) {
            case 0:
              return o = n.row, a = n.col, i = n.anchor, [4, e.array()];
            case 1:
              return s = u.sent(), [2, Array(this.config.classes.length).fill(0).map(function (c, l) {
                return s[o][a][i][l];
              }).map(function (c, l) {
                return { classScore: c, label: l };
              }).reduce(function (c, l) {
                return c.classScore > l.classScore ? c : l;
              })];
          }
        });
      });
    }, t.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024], t;
  }(mn), qy = function (r) {
    oe(t, r);

    function t(e) {
      e === void 0 && (e = !0);
      var n = this, o = Object.assign({}, { withSeparableConvs: e, iouThreshold: Ny, classes: ['face'] }, e ? {
        anchors: Py,
        meanRgb: Oy,
      } : { anchors: My, withClassScores: !0 });
      return n = r.call(this, o) || this, n;
    }

    return Object.defineProperty(t.prototype, 'withSeparableConvs', {
      get: function () {
        return this.config.withSeparableConvs;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(t.prototype, 'anchors', {
      get: function () {
        return this.config.anchors;
      }, enumerable: !0, configurable: !0,
    }), t.prototype.locateFaces = function (e, n) {
      return Q(this, void 0, void 0, function () {
        var o;
        return ee(this, function (a) {
          switch (a.label) {
            case 0:
              return [4, this.detect(e, n)];
            case 1:
              return o = a.sent(), [2, o.map(function (i) {
                return new Qt(i.score, i.relativeBox, { width: i.imageWidth, height: i.imageHeight });
              })];
          }
        });
      });
    }, t.prototype.getDefaultModelName = function () {
      return this.withSeparableConvs ? Ly : By;
    }, t.prototype.extractParamsFromWeigthMap = function (e) {
      return r.prototype.extractParamsFromWeigthMap.call(this, e);
    }, t;
  }(ef), tf = function (r) {
    oe(t, r);

    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._name = 'TinyFaceDetectorOptions', e;
    }

    return t;
  }(Ds), lo = function () {
    function r() {
    }

    return r.prototype.then = function (t) {
      return Q(this, void 0, void 0, function () {
        var e;
        return ee(this, function (n) {
          switch (n.label) {
            case 0:
              return e = t, [4, this.run()];
            case 1:
              return [2, e.apply(void 0, [n.sent()])];
          }
        });
      });
    }, r.prototype.run = function () {
      return Q(this, void 0, void 0, function () {
        return ee(this, function (t) {
          throw new Error('ComposableTask - run is not implemented');
        });
      });
    }, r;
  }();

  function Ea(r, t, e, n, o) {
    return o === void 0 && (o = function (a) {
      var i = a.alignedRect;
      return i;
    }), Q(this, void 0, void 0, function () {
      var a, i, s, u, c;
      return ee(this, function (l) {
        switch (l.label) {
          case 0:
            return a = r.map(function (h) {
              return J0(h) ? o(h) : h.detection;
            }), s = n, s ? [3, 5] : t instanceof Se ? [4, Cs(t, a)] : [3, 2];
          case 1:
            return u = l.sent(), [3, 4];
          case 2:
            return [4, _s(t, a)];
          case 3:
            u = l.sent(), l.label = 4;
          case 4:
            s = u, l.label = 5;
          case 5:
            return i = s, [4, e(i)];
          case 6:
            return c = l.sent(), i.forEach(function (h) {
              return h instanceof Se && h.dispose();
            }), [2, c];
        }
      });
    });
  }

  function Ts(r, t, e, n, o) {
    return Q(this, void 0, void 0, function () {
      var a = this;
      return ee(this, function (i) {
        return [2, Ea([r], t, function (s) {
          return Q(a, void 0, void 0, function () {
            return ee(this, function (u) {
              return [2, e(s[0])];
            });
          });
        }, n, o)];
      });
    });
  }

  function Hy(r) {
    return K(function () {
      return Et(Ge(r, 3).reverse(), 3);
    });
  }

  var Io = 2, oa = 12;

  function jy(r, t) {
    var e = _a(r, t), n = Es(r, t);

    function o(c, l) {
      var h = Oe(r(c));
      return t.push({ paramPath: l }), h;
    }

    function a(c, l, h) {
      h === void 0 && (h = !1);
      var f = e(c[0], c[1], 3, l + '/conv1'), d = o(c[1], l + '/prelu1_alpha'), p = e(c[1], c[2], 3, l + '/conv2'),
        v = o(c[2], l + '/prelu2_alpha'), m = e(c[2], c[3], h ? 2 : 3, l + '/conv3'), g = o(c[3], l + '/prelu3_alpha');
      return { conv1: f, prelu1_alpha: d, conv2: p, prelu2_alpha: v, conv3: m, prelu3_alpha: g };
    }

    function i() {
      var c = a([3, 10, 16, 32], 'pnet'), l = e(32, 2, 1, 'pnet/conv4_1'), h = e(32, 4, 1, 'pnet/conv4_2');
      return nt(nt({}, c), { conv4_1: l, conv4_2: h });
    }

    function s() {
      var c = a([3, 28, 48, 64], 'rnet', !0), l = n(576, 128, 'rnet/fc1'), h = o(128, 'rnet/prelu4_alpha'),
        f = n(128, 2, 'rnet/fc2_1'), d = n(128, 4, 'rnet/fc2_2');
      return nt(nt({}, c), { fc1: l, prelu4_alpha: h, fc2_1: f, fc2_2: d });
    }

    function u() {
      var c = a([3, 32, 64, 64], 'onet'), l = e(64, 128, 2, 'onet/conv4'), h = o(128, 'onet/prelu4_alpha'),
        f = n(1152, 256, 'onet/fc1'), d = o(256, 'onet/prelu5_alpha'), p = n(256, 2, 'onet/fc2_1'),
        v = n(256, 4, 'onet/fc2_2'), m = n(256, 10, 'onet/fc2_3');
      return nt(nt({}, c), { conv4: l, prelu4_alpha: h, fc1: f, prelu5_alpha: d, fc2_1: p, fc2_2: v, fc2_3: m });
    }

    return { extractPNetParams: i, extractRNetParams: s, extractONetParams: u };
  }

  function Xy(r) {
    var t = yn(r), e = t.extractWeights, n = t.getRemainingWeights, o = [], a = jy(e, o), i = a.extractPNetParams,
      s = a.extractRNetParams, u = a.extractONetParams, c = i(), l = s(), h = u();
    if (n().length !== 0) throw new Error('weights remaing after extract: ' + n().length);
    return { params: { pnet: c, rnet: l, onet: h }, paramMappings: o };
  }

  function Ky(r, t) {
    var e = Ln(r, t);

    function n(l) {
      var h = e(l + '/weights', 4, l + '/filters'), f = e(l + '/bias', 1);
      return { filters: h, bias: f };
    }

    function o(l) {
      var h = e(l + '/weights', 2), f = e(l + '/bias', 1);
      return { weights: h, bias: f };
    }

    function a(l) {
      return e(l, 1);
    }

    function i(l) {
      var h = n(l + '/conv1'), f = a(l + '/prelu1_alpha'), d = n(l + '/conv2'), p = a(l + '/prelu2_alpha'),
        v = n(l + '/conv3'), m = a(l + '/prelu3_alpha');
      return { conv1: h, prelu1_alpha: f, conv2: d, prelu2_alpha: p, conv3: v, prelu3_alpha: m };
    }

    function s() {
      var l = i('pnet'), h = n('pnet/conv4_1'), f = n('pnet/conv4_2');
      return nt(nt({}, l), { conv4_1: h, conv4_2: f });
    }

    function u() {
      var l = i('rnet'), h = o('rnet/fc1'), f = a('rnet/prelu4_alpha'), d = o('rnet/fc2_1'), p = o('rnet/fc2_2');
      return nt(nt({}, l), { fc1: h, prelu4_alpha: f, fc2_1: d, fc2_2: p });
    }

    function c() {
      var l = i('onet'), h = n('onet/conv4'), f = a('onet/prelu4_alpha'), d = o('onet/fc1'), p = a('onet/prelu5_alpha'),
        v = o('onet/fc2_1'), m = o('onet/fc2_2'), g = o('onet/fc2_3');
      return nt(nt({}, l), { conv4: h, prelu4_alpha: f, fc1: d, prelu5_alpha: p, fc2_1: v, fc2_2: m, fc2_3: g });
    }

    return { extractPNetParams: s, extractRNetParams: u, extractONetParams: c };
  }

  function Yy(r) {
    var t = [], e = Ky(r, t), n = e.extractPNetParams, o = e.extractRNetParams, a = e.extractONetParams, i = n(),
      s = o(), u = a();
    return gn(r, t), { params: { pnet: i, rnet: s, onet: u }, paramMappings: t };
  }

  function Ai(r, t) {
    var e = t[0], n = t[1];
    return { height: Math.floor(e * r), width: Math.floor(n * r) };
  }

  function $y(r, t, e) {
    for (var n = e[0], o = e[1], a = oa / r, i = [], s = Math.min(n, o) * a, u = 0; s >= 12;) i.push(a * Math.pow(t, u)), s = s * t, u += 1;
    return i;
  }

  var Fs = function (r) {
    oe(t, r);

    function t(e, n, o, a) {
      return r.call(this, { left: e, top: n, right: o, bottom: a }, !0) || this;
    }

    return t;
  }(Tn);

  function nf(r) {
    return K(function () {
      return at(qe(r, X(127.5)), X(.0078125));
    });
  }

  function _r(r, t) {
    return K(function () {
      return ce(De(r), at(t, Zo(De(Zo(r)))));
    });
  }

  function Ns(r, t, e) {
    return e === void 0 && (e = !1), K(function () {
      var n = Nt(r, t.conv1, 'valid');
      return n = _r(n, t.prelu1_alpha), n = He(n, e ? [2, 2] : [3, 3], [2, 2], 'same'), n = Nt(n, t.conv2, 'valid'), n = _r(n, t.prelu2_alpha), n = e ? n : He(n, [3, 3], [2, 2], 'valid'), n = Nt(n, t.conv3, 'valid'), n = _r(n, t.prelu3_alpha), n;
    });
  }

  function Zy(r, t) {
    return K(function () {
      var e = Ns(r, t, !0), n = Nt(e, t.conv4_1, 'valid'), o = kt(ma(n, 3), 3), a = pn(qe(n, o), 3),
        i = Nt(e, t.conv4_2, 'valid');
      return { prob: a, regions: i };
    });
  }

  function Jy(r, t) {
    return K(function () {
      var e = Ai(t, r.shape.slice(1)), n = e.height, o = e.width, a = ls.resizeBilinear(r, [n, o]), i = nf(a);
      return Dn(i, [0, 2, 1, 3]);
    });
  }

  function Qy(r, t, e, n) {
    for (var o = [], a = r.arraySync(), i = 0; i < r.shape[0]; i++) for (var s = 0; s < r.shape[1]; s++) a[i][s] >= n && o.push(new be(s, i));
    var u = o.map(function (c) {
      var l = new xa(Math.round((c.y * Io + 1) / e), Math.round((c.x * Io + 1) / e), Math.round((c.y * Io + oa) / e), Math.round((c.x * Io + oa) / e)),
        h = a[c.y][c.x], f = t.arraySync(), d = new Fs(f[c.y][c.x][0], f[c.y][c.x][1], f[c.y][c.x][2], f[c.y][c.x][3]);
      return { cell: l, score: h, region: d };
    });
    return u;
  }

  function e1(r, t, e, n, o) {
    o.stage1 = [];
    var a = t.map(function (f) {
      return K(function () {
        var d = { scale: f }, p = Jy(r, f), v = Date.now(), m = Zy(p, n), g = m.prob, y = m.regions;
        d.pnet = Date.now() - v;
        var x = Ge(Ge(g, 3)[1])[0], b = Ge(y)[0];
        return { scoresTensor: x, regionsTensor: b, scale: f, statsForScale: d };
      });
    }), i = a.map(function (f) {
      var d = f.scoresTensor, p = f.regionsTensor, v = f.scale, m = f.statsForScale, g = Qy(d, p, v, e);
      if (d.dispose(), p.dispose(), !g.length) return o.stage1.push(m), [];
      var y = Date.now(), x = no(g.map(function (b) {
        return b.cell;
      }), g.map(function (b) {
        return b.score;
      }), .5);
      return m.nms = Date.now() - y, m.numBoxes = x.length, o.stage1.push(m), x.map(function (b) {
        return g[b];
      });
    }), s = i.reduce(function (f, d) {
      return f.concat(d);
    }, []), u = [], c = [];
    if (s.length > 0) {
      var l = Date.now(), h = no(s.map(function (f) {
        return f.cell;
      }), s.map(function (f) {
        return f.score;
      }), .7);
      o.stage1_nms = Date.now() - l, c = h.map(function (f) {
        return s[f].score;
      }), u = h.map(function (f) {
        return s[f];
      }).map(function (f) {
        var d = f.cell, p = f.region;
        return new xa(d.left + p.left * d.width, d.top + p.top * d.height, d.right + p.right * d.width, d.bottom + p.bottom * d.height).toSquare().round();
      });
    }
    return { boxes: u, scores: c };
  }

  function rf(r, t, e) {
    var n = e.width, o = e.height;
    return Q(this, void 0, void 0, function () {
      var a, i, s, u = this;
      return ee(this, function (c) {
        switch (c.label) {
          case 0:
            return a = Qn(r), [4, Promise.all(t.map(function (l) {
              return Q(u, void 0, void 0, function () {
                var h, f, d, p, v, m, g, y;
                return ee(this, function (x) {
                  return h = l.padAtBorders(r.height, r.width), f = h.y, d = h.ey, p = h.x, v = h.ex, m = p - 1, g = f - 1, y = a.getImageData(m, g, v - m, d - g), [2, it.isNodejs() ? ws(y) : createImageBitmap(y)];
                });
              });
            }))];
          case 1:
            return i = c.sent(), s = [], i.forEach(function (l) {
              var h = wa({ width: n, height: o }), f = Qn(h);
              f.drawImage(l, 0, 0, n, o);
              for (var d = f.getImageData(0, 0, n, o).data, p = [], v = 0; v < d.length; v += 4) p.push(d[v + 2]), p.push(d[v + 1]), p.push(d[v]);
              s.push(p);
            }), [2, s.map(function (l) {
              var h = K(function () {
                var f = Dn(dt(l, [1, n, o, 3]), [0, 2, 1, 3]).toFloat();
                return nf(f);
              });
              return h;
            })];
        }
      });
    });
  }

  function t1(r, t) {
    return K(function () {
      var e = Ns(r, t), n = Tt(e, [e.shape[0], t.fc1.weights.shape[0]]), o = jt(n, t.fc1), a = _r(o, t.prelu4_alpha),
        i = jt(a, t.fc2_1), s = kt(ma(i, 1), 1), u = pn(qe(i, s), 1), c = jt(a, t.fc2_2), l = Ge(u, 1)[1];
      return { scores: l, regions: c };
    });
  }

  function n1(r, t, e, n, o) {
    return Q(this, void 0, void 0, function () {
      var a, i, s, u, c, l, h, f, d, p, v, m, g, y;
      return ee(this, function (x) {
        switch (x.label) {
          case 0:
            return a = Date.now(), [4, rf(r, t, { width: 24, height: 24 })];
          case 1:
            return i = x.sent(), o.stage2_extractImagePatches = Date.now() - a, a = Date.now(), s = i.map(function (b) {
              var w = t1(b, n);
              return b.dispose(), w;
            }), o.stage2_rnet = Date.now() - a, u = s.length > 1 ? Ve(s.map(function (b) {
              return b.scores;
            })) : s[0].scores, h = (l = Array).from, [4, u.data()];
          case 2:
            return c = h.apply(l, [x.sent()]), u.dispose(), f = c.map(function (b, w) {
              return { score: b, idx: w };
            }).filter(function (b) {
              return b.score > e;
            }).map(function (b) {
              var w = b.idx;
              return w;
            }), d = f.map(function (b) {
              return t[b];
            }), p = f.map(function (b) {
              return c[b];
            }), v = [], m = [], d.length > 0 && (a = Date.now(), g = no(d, p, .7), o.stage2_nms = Date.now() - a, y = g.map(function (b) {
              var w = s[f[b]].regions.arraySync();
              return new Fs(w[0][0], w[0][1], w[0][2], w[0][3]);
            }), m = g.map(function (b) {
              return p[b];
            }), v = g.map(function (b, w) {
              return d[b].calibrate(y[w]);
            })), s.forEach(function (b) {
              b.regions.dispose(), b.scores.dispose();
            }), [2, { boxes: v, scores: m }];
        }
      });
    });
  }

  function r1(r, t) {
    return K(function () {
      var e = Ns(r, t);
      e = He(e, [2, 2], [2, 2], 'same'), e = Nt(e, t.conv4, 'valid'), e = _r(e, t.prelu4_alpha);
      var n = Tt(e, [e.shape[0], t.fc1.weights.shape[0]]), o = jt(n, t.fc1), a = _r(o, t.prelu5_alpha),
        i = jt(a, t.fc2_1), s = kt(ma(i, 1), 1), u = pn(qe(i, s), 1), c = jt(a, t.fc2_2), l = jt(a, t.fc2_3),
        h = Ge(u, 1)[1];
      return { scores: h, regions: c, points: l };
    });
  }

  function o1(r, t, e, n, o) {
    return Q(this, void 0, void 0, function () {
      var a, i, s, u, c, l, h, f, d, p, v, m, g, y, x;
      return ee(this, function (b) {
        switch (b.label) {
          case 0:
            return a = Date.now(), [4, rf(r, t, { width: 48, height: 48 })];
          case 1:
            return i = b.sent(), o.stage3_extractImagePatches = Date.now() - a, a = Date.now(), s = i.map(function (w) {
              var _ = r1(w, n);
              return w.dispose(), _;
            }), o.stage3_onet = Date.now() - a, u = s.length > 1 ? Ve(s.map(function (w) {
              return w.scores;
            })) : s[0].scores, h = (l = Array).from, [4, u.data()];
          case 2:
            return c = h.apply(l, [b.sent()]), u.dispose(), f = c.map(function (w, _) {
              return { score: w, idx: _ };
            }).filter(function (w) {
              return w.score > e;
            }).map(function (w) {
              var _ = w.idx;
              return _;
            }), d = f.map(function (w) {
              var _ = s[w].regions.arraySync();
              return new Fs(_[0][0], _[0][1], _[0][2], _[0][3]);
            }), p = f.map(function (w, _) {
              return t[w].calibrate(d[_]);
            }), v = f.map(function (w) {
              return c[w];
            }), m = [], g = [], y = [], p.length > 0 && (a = Date.now(), x = no(p, v, .7, !1), o.stage3_nms = Date.now() - a, m = x.map(function (w) {
              return p[w];
            }), g = x.map(function (w) {
              return v[w];
            }), y = x.map(function (w, _) {
              return Array(5).fill(0).map(function (S, E) {
                var I = s[w].points.arraySync();
                return new be(I[0][E] * (m[_].width + 1) + m[_].left, I[0][E + 5] * (m[_].height + 1) + m[_].top);
              });
            })), s.forEach(function (w) {
              w.regions.dispose(), w.scores.dispose(), w.points.dispose();
            }), [2, { boxes: m, scores: g, points: y }];
        }
      });
    });
  }

  var a1 = function (r) {
      oe(t, r);

      function t() {
        return r.call(this, 'Mtcnn') || this;
      }

      return t.prototype.load = function (e) {
        return Q(this, void 0, void 0, function () {
          return ee(this, function (n) {
            return console.warn('mtcnn is deprecated and will be removed soon'), [2, r.prototype.load.call(this, e)];
          });
        });
      }, t.prototype.loadFromDisk = function (e) {
        return Q(this, void 0, void 0, function () {
          return ee(this, function (n) {
            return console.warn('mtcnn is deprecated and will be removed soon'), [2, r.prototype.loadFromDisk.call(this, e)];
          });
        });
      }, t.prototype.forwardInput = function (e, n) {
        return n === void 0 && (n = {}), Q(this, void 0, void 0, function () {
          var o, a, i, s, u, c, l, h, f, d, p, v, m, g, y, x, b, w, _, S, E;
          return ee(this, function (I) {
            switch (I.label) {
              case 0:
                if (o = this.params, !o) throw new Error('Mtcnn - load model before inference');
                if (a = e.canvases[0], !a) throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
                return i = {}, s = Date.now(), u = K(function () {
                  return Hy(kt(ms.fromPixels(a)).toFloat());
                }), c = function (R) {
                  return u.dispose(), i.total = Date.now() - s, R;
                }, l = u.shape.slice(1), h = l[0], f = l[1], d = new Jh(n), p = d.minFaceSize, v = d.scaleFactor, m = d.maxNumScales, g = d.scoreThresholds, y = d.scaleSteps, x = (y || $y(p, v, [h, f])).filter(function (R) {
                  var F = Ai(R, [h, f]);
                  return Math.min(F.width, F.height) > oa;
                }).slice(0, m), i.scales = x, i.pyramid = x.map(function (R) {
                  return Ai(R, [h, f]);
                }), b = Date.now(), [4, e1(u, x, g[0], o.pnet, i)];
              case 1:
                return w = I.sent(), i.total_stage1 = Date.now() - b, w.boxes.length ? (i.stage2_numInputBoxes = w.boxes.length, b = Date.now(), [4, n1(a, w.boxes, g[1], o.rnet, i)]) : [2, c({
                  results: [],
                  stats: i,
                })];
              case 2:
                return _ = I.sent(), i.total_stage2 = Date.now() - b, _.boxes.length ? (i.stage3_numInputBoxes = _.boxes.length, b = Date.now(), [4, o1(a, _.boxes, g[2], o.onet, i)]) : [2, c({
                  results: [],
                  stats: i,
                })];
              case 3:
                return S = I.sent(), i.total_stage3 = Date.now() - b, E = S.boxes.map(function (R, F) {
                  return Rs(bs({}, new Qt(S.scores[F], new ys(R.left / f, R.top / h, R.width / f, R.height / h), {
                    height: h,
                    width: f,
                  })), new P0(S.points[F].map(function (D) {
                    return D.sub(new be(R.left, R.top)).div(new be(R.width, R.height));
                  }), { width: R.width, height: R.height }));
                }), [2, c({ results: E, stats: i })];
            }
          });
        });
      }, t.prototype.forward = function (e, n) {
        return n === void 0 && (n = {}), Q(this, void 0, void 0, function () {
          var o;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return o = this.forwardInput, [4, Ke(e)];
              case 1:
                return [4, o.apply(this, [a.sent(), n])];
              case 2:
                return [2, a.sent().results];
            }
          });
        });
      }, t.prototype.forwardWithStats = function (e, n) {
        return n === void 0 && (n = {}), Q(this, void 0, void 0, function () {
          var o;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return o = this.forwardInput, [4, Ke(e)];
              case 1:
                return [2, o.apply(this, [a.sent(), n])];
            }
          });
        });
      }, t.prototype.getDefaultModelName = function () {
        return 'mtcnn_model';
      }, t.prototype.extractParamsFromWeigthMap = function (e) {
        return Yy(e);
      }, t.prototype.extractParams = function (e) {
        return Xy(e);
      }, t;
    }(mn), i1 = .4,
    s1 = [new be(1.603231, 2.094468), new be(6.041143, 7.080126), new be(2.882459, 3.518061), new be(4.266906, 5.178857), new be(9.041765, 10.66308)],
    u1 = [117.001, 114.697, 97.404], c1 = function (r) {
      oe(t, r);

      function t() {
        var e = this, n = {
          withSeparableConvs: !0,
          iouThreshold: i1,
          classes: ['face'],
          anchors: s1,
          meanRgb: u1,
          isFirstLayerConv2d: !0,
          filterSizes: [3, 16, 32, 64, 128, 256, 512],
        };
        return e = r.call(this, n) || this, e;
      }

      return Object.defineProperty(t.prototype, 'anchors', {
        get: function () {
          return this.config.anchors;
        }, enumerable: !0, configurable: !0,
      }), t.prototype.locateFaces = function (e, n) {
        return Q(this, void 0, void 0, function () {
          var o;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.detect(e, n)];
              case 1:
                return o = a.sent(), [2, o.map(function (i) {
                  return new Qt(i.score, i.relativeBox, { width: i.imageWidth, height: i.imageHeight });
                })];
            }
          });
        });
      }, t.prototype.getDefaultModelName = function () {
        return 'tiny_face_detector_model';
      }, t.prototype.extractParamsFromWeigthMap = function (e) {
        return r.prototype.extractParamsFromWeigthMap.call(this, e);
      }, t;
    }(ef), vt = {
      ssdMobilenetv1: new Qh,
      tinyFaceDetector: new c1,
      tinyYolov2: new qy,
      mtcnn: new a1,
      faceLandmark68Net: new jh,
      faceLandmark68TinyNet: new hy,
      faceRecognitionNet: new yy,
      faceExpressionNet: new Z0,
      ageGenderNet: new sy,
    }, of = function (r) {
      oe(t, r);

      function t(e, n, o) {
        var a = r.call(this) || this;
        return a.parentTask = e, a.input = n, a.extractedFaces = o, a;
      }

      return t;
    }(lo), Ms = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o = this;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = a.sent(), [4, Ea(e, this.input, function (i) {
                  return Q(o, void 0, void 0, function () {
                    return ee(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, Promise.all(i.map(function (u) {
                            return vt.faceExpressionNet.predictExpressions(u);
                          }))];
                        case 1:
                          return [2, s.sent()];
                      }
                    });
                  });
                }, this.extractedFaces)];
              case 2:
                return n = a.sent(), [2, e.map(function (i, s) {
                  return Gh(i, n[s]);
                })];
            }
          });
        });
      }, t.prototype.withAgeAndGender = function () {
        return new Ls(this, this.input);
      }, t;
    }(of), Ps = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n;
          return ee(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = o.sent(), e ? [4, Ts(e, this.input, function (a) {
                  return vt.faceExpressionNet.predictExpressions(a);
                }, this.extractedFaces)] : [2];
              case 2:
                return n = o.sent(), [2, Gh(e, n)];
            }
          });
        });
      }, t.prototype.withAgeAndGender = function () {
        return new Ws(this, this.input);
      }, t;
    }(of), Os = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.withAgeAndGender = function () {
        return new Us(this, this.input);
      }, t.prototype.withFaceDescriptors = function () {
        return new Vs(this, this.input);
      }, t;
    }(Ms), Bs = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.withAgeAndGender = function () {
        return new zs(this, this.input);
      }, t.prototype.withFaceDescriptor = function () {
        return new Gs(this, this.input);
      }, t;
    }(Ps), af = function (r) {
      oe(t, r);

      function t(e, n, o) {
        var a = r.call(this) || this;
        return a.parentTask = e, a.input = n, a.extractedFaces = o, a;
      }

      return t;
    }(lo), Ls = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o = this;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = a.sent(), [4, Ea(e, this.input, function (i) {
                  return Q(o, void 0, void 0, function () {
                    return ee(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, Promise.all(i.map(function (u) {
                            return vt.ageGenderNet.predictAgeAndGender(u);
                          }))];
                        case 1:
                          return [2, s.sent()];
                      }
                    });
                  });
                }, this.extractedFaces)];
              case 2:
                return n = a.sent(), [2, e.map(function (i, s) {
                  var u = n[s], c = u.age, l = u.gender, h = u.genderProbability;
                  return $h(Zh(i, l, h), c);
                })];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Ms(this, this.input);
      }, t;
    }(af), Ws = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o, a, i;
          return ee(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = s.sent(), e ? [4, Ts(e, this.input, function (u) {
                  return vt.ageGenderNet.predictAgeAndGender(u);
                }, this.extractedFaces)] : [2];
              case 2:
                return n = s.sent(), o = n.age, a = n.gender, i = n.genderProbability, [2, $h(Zh(e, a, i), o)];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Ps(this, this.input);
      }, t;
    }(af), Us = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.withFaceExpressions = function () {
        return new Os(this, this.input);
      }, t.prototype.withFaceDescriptors = function () {
        return new Vs(this, this.input);
      }, t;
    }(Ls), zs = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.withFaceExpressions = function () {
        return new Bs(this, this.input);
      }, t.prototype.withFaceDescriptor = function () {
        return new Gs(this, this.input);
      }, t;
    }(Ws), sf = function (r) {
      oe(t, r);

      function t(e, n) {
        var o = r.call(this) || this;
        return o.parentTask = e, o.input = n, o;
      }

      return t;
    }(lo), Vs = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n;
          return ee(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = o.sent(), [4, Ea(e, this.input, function (a) {
                  return Promise.all(a.map(function (i) {
                    return vt.faceRecognitionNet.computeFaceDescriptor(i);
                  }));
                }, null, function (a) {
                  return a.landmarks.align(null, { useDlibAlignment: !0 });
                })];
              case 2:
                return n = o.sent(), [2, n.map(function (a, i) {
                  return Yh(e[i], a);
                })];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Os(this, this.input);
      }, t.prototype.withAgeAndGender = function () {
        return new Us(this, this.input);
      }, t;
    }(sf), Gs = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n;
          return ee(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = o.sent(), e ? [4, Ts(e, this.input, function (a) {
                  return vt.faceRecognitionNet.computeFaceDescriptor(a);
                }, null, function (a) {
                  return a.landmarks.align(null, { useDlibAlignment: !0 });
                })] : [2];
              case 2:
                return n = o.sent(), [2, Yh(e, n)];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Bs(this, this.input);
      }, t.prototype.withAgeAndGender = function () {
        return new zs(this, this.input);
      }, t;
    }(sf), uf = function (r) {
      oe(t, r);

      function t(e, n, o) {
        var a = r.call(this) || this;
        return a.parentTask = e, a.input = n, a.useTinyLandmarkNet = o, a;
      }

      return Object.defineProperty(t.prototype, 'landmarkNet', {
        get: function () {
          return this.useTinyLandmarkNet ? vt.faceLandmark68TinyNet : vt.faceLandmark68Net;
        }, enumerable: !0, configurable: !0,
      }), t;
    }(lo), l1 = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o, a, i, s = this;
          return ee(this, function (u) {
            switch (u.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = u.sent(), n = e.map(function (c) {
                  return c.detection;
                }), this.input instanceof Se ? [4, Cs(this.input, n)] : [3, 3];
              case 2:
                return a = u.sent(), [3, 5];
              case 3:
                return [4, _s(this.input, n)];
              case 4:
                a = u.sent(), u.label = 5;
              case 5:
                return o = a, [4, Promise.all(o.map(function (c) {
                  return s.landmarkNet.detectLandmarks(c);
                }))];
              case 6:
                return i = u.sent(), o.forEach(function (c) {
                  return c instanceof Se && c.dispose();
                }), [2, e.map(function (c, l) {
                  return Rs(c, i[l]);
                })];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Os(this, this.input);
      }, t.prototype.withAgeAndGender = function () {
        return new Us(this, this.input);
      }, t.prototype.withFaceDescriptors = function () {
        return new Vs(this, this.input);
      }, t;
    }(uf), h1 = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o, a, i;
          return ee(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.parentTask];
              case 1:
                return e = s.sent(), e ? (n = e.detection, this.input instanceof Se ? [4, Cs(this.input, [n])] : [3, 3]) : [2];
              case 2:
                return a = s.sent(), [3, 5];
              case 3:
                return [4, _s(this.input, [n])];
              case 4:
                a = s.sent(), s.label = 5;
              case 5:
                return o = a, [4, this.landmarkNet.detectLandmarks(o[0])];
              case 6:
                return i = s.sent(), o.forEach(function (u) {
                  return u instanceof Se && u.dispose();
                }), [2, Rs(e, i)];
            }
          });
        });
      }, t.prototype.withFaceExpressions = function () {
        return new Bs(this, this.input);
      }, t.prototype.withAgeAndGender = function () {
        return new zs(this, this.input);
      }, t.prototype.withFaceDescriptor = function () {
        return new Gs(this, this.input);
      }, t;
    }(uf), cf = function (r) {
      oe(t, r);

      function t(e, n) {
        n === void 0 && (n = new Ca);
        var o = r.call(this) || this;
        return o.input = e, o.options = n, o;
      }

      return t;
    }(lo), lf = function (r) {
      oe(t, r);

      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }

      return t.prototype.run = function () {
        return Q(this, void 0, void 0, function () {
          var e, n, o, a;
          return ee(this, function (i) {
            switch (i.label) {
              case 0:
                return e = this, n = e.input, o = e.options, o instanceof Jh ? [4, vt.mtcnn.forward(n, o)] : [3, 2];
              case 1:
                return [2, i.sent().map(function (s) {
                  return s.detection;
                })];
              case 2:
                if (a = o instanceof tf ? function (s) {
                  return vt.tinyFaceDetector.locateFaces(s, o);
                } : o instanceof Ca ? function (s) {
                  return vt.ssdMobilenetv1.locateFaces(s, o);
                } : o instanceof Ds ? function (s) {
                  return vt.tinyYolov2.locateFaces(s, o);
                } : null, !a) throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
                return [2, a(n)];
            }
          });
        });
      }, t.prototype.runAndExtendWithFaceDetections = function () {
        var e = this;
        return new Promise(function (n) {
          return Q(e, void 0, void 0, function () {
            var o;
            return ee(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, this.run()];
                case 1:
                  return o = a.sent(), [2, n(o.map(function (i) {
                    return bs({}, i);
                  }))];
              }
            });
          });
        });
      }, t.prototype.withFaceLandmarks = function (e) {
        return e === void 0 && (e = !1), new l1(this.runAndExtendWithFaceDetections(), this.input, e);
      }, t.prototype.withFaceExpressions = function () {
        return new Ms(this.runAndExtendWithFaceDetections(), this.input);
      }, t.prototype.withAgeAndGender = function () {
        return new Ls(this.runAndExtendWithFaceDetections(), this.input);
      }, t;
    }(cf);
  (function (r) {
    oe(t, r);

    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }

    return t.prototype.run = function () {
      return Q(this, void 0, void 0, function () {
        var e, n;
        return ee(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, new lf(this.input, this.options)];
            case 1:
              return e = o.sent(), n = e[0], e.forEach(function (a) {
                a.score > n.score && (n = a);
              }), [2, n];
          }
        });
      });
    }, t.prototype.runAndExtendWithFaceDetection = function () {
      var e = this;
      return new Promise(function (n) {
        return Q(e, void 0, void 0, function () {
          var o;
          return ee(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.run()];
              case 1:
                return o = a.sent(), [2, n(o ? bs({}, o) : void 0)];
            }
          });
        });
      });
    }, t.prototype.withFaceLandmarks = function (e) {
      return e === void 0 && (e = !1), new h1(this.runAndExtendWithFaceDetection(), this.input, e);
    }, t.prototype.withFaceExpressions = function () {
      return new Ps(this.runAndExtendWithFaceDetection(), this.input);
    }, t.prototype.withAgeAndGender = function () {
      return new Ws(this.runAndExtendWithFaceDetection(), this.input);
    }, t;
  })(cf);

  function f1(r, t) {
    return t === void 0 && (t = new Ca), new lf(r, t);
  }

  function d1(r, t) {
    if (r.length !== t.length) throw new Error('euclideanDistance: arr1.length !== arr2.length');
    var e = Array.from(r), n = Array.from(t);
    return Math.sqrt(e.map(function (o, a) {
      return o - n[a];
    }).reduce(function (o, a) {
      return o + Math.pow(a, 2);
    }, 0));
  }

  (function () {
    function r(t, e) {
      e === void 0 && (e = .6), this._distanceThreshold = e;
      var n = Array.isArray(t) ? t : [t];
      if (!n.length) throw new Error('FaceRecognizer.constructor - expected atleast one input');
      var o = 1, a = function () {
        return 'person ' + o++;
      };
      this._labeledDescriptors = n.map(function (i) {
        if (i instanceof _o) return i;
        if (i instanceof Float32Array) return new _o(a(), [i]);
        if (i.descriptor && i.descriptor instanceof Float32Array) return new _o(a(), [i.descriptor]);
        throw new Error('FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>');
      });
    }

    return Object.defineProperty(r.prototype, 'labeledDescriptors', {
      get: function () {
        return this._labeledDescriptors;
      }, enumerable: !0, configurable: !0,
    }), Object.defineProperty(r.prototype, 'distanceThreshold', {
      get: function () {
        return this._distanceThreshold;
      }, enumerable: !0, configurable: !0,
    }), r.prototype.computeMeanDistance = function (t, e) {
      return e.map(function (n) {
        return d1(n, t);
      }).reduce(function (n, o) {
        return n + o;
      }, 0) / (e.length || 1);
    }, r.prototype.matchDescriptor = function (t) {
      var e = this;
      return this.labeledDescriptors.map(function (n) {
        var o = n.descriptors, a = n.label;
        return new Ou(a, e.computeMeanDistance(t, o));
      }).reduce(function (n, o) {
        return n.distance < o.distance ? n : o;
      });
    }, r.prototype.findBestMatch = function (t) {
      var e = this.matchDescriptor(t);
      return e.distance < this.distanceThreshold ? e : new Ou('unknown', e.distance);
    }, r.prototype.toJSON = function () {
      return {
        distanceThreshold: this.distanceThreshold, labeledDescriptors: this.labeledDescriptors.map(function (t) {
          return t.toJSON();
        }),
      };
    }, r.fromJSON = function (t) {
      var e = t.labeledDescriptors.map(function (n) {
        return _o.fromJSON(n);
      });
      return new r(e, t.distanceThreshold);
    }, r;
  })();

  function p1(r) {
    Fn(r, 'svelte-9po0rh', '.Camera.svelte-9po0rh{position:relative;background:black}canvas.svelte-9po0rh{display:block;max-height:100%;min-height:100%;min-width:unset;left:50%;transform:translateX(-50%);position:relative}canvas.debug.svelte-9po0rh{position:absolute;top:0;mix-blend-mode:overlay;pointer-events:none}canvas.blur.svelte-9po0rh{position:absolute;top:0;pointer-events:none}video.svelte-9po0rh{display:none}.button-float.svelte-9po0rh{background:rgba(10, 10, 10, 0.4);color:white;font-size:1.2em;position:absolute;border:none;border-bottom:1px solid rgba(255, 255, 255, 0.2);width:100%;text-align:left;padding:0;line-height:2.4em;padding-left:0.5em;margin:0;cursor:pointer;z-index:2}.button-float.svelte-9po0rh:hover{background:rgba(0,0,0,0.5)}');
  }

  function Vu(r) {
    let t, e, n, o = et('Back', r[11]) + '', a, i, s, u;
    return t = new Di({}), {
      c() {
        fn(t.$$.fragment), e = tt(), n = we('button'), a = cn(o), re(n, 'class', 'button-float svelte-9po0rh'), re(n, 'data-icon', 'keyboard_arrow_left');
      }, m(c, l) {
        $t(t, c, l), ze(c, e, l), ze(c, n, l), pe(n, a), i = !0, s || (u = un(n, 'click', r[16]), s = !0);
      }, p(c, l) {
        (!i || l[0] & 2048) && o !== (o = et('Back', c[11]) + '') && Kn(a, o);
      }, i(c) {
        i || (Xe(t.$$.fragment, c), i = !0);
      }, o(c) {
        ct(t.$$.fragment, c), i = !1;
      }, d(c) {
        Zt(t, c), c && Pe(e), c && Pe(n), s = !1, u();
      },
    };
  }

  function Gu(r) {
    let t, e;
    return t = new Jf({ props: { image: r[4], background: r[7] } }), t.$on('reset', r[12]), {
      c() {
        fn(t.$$.fragment);
      }, m(n, o) {
        $t(t, n, o), e = !0;
      }, p(n, o) {
        const a = {};
        o[0] & 16 && (a.image = n[4]), o[0] & 128 && (a.background = n[7]), t.$set(a);
      }, i(n) {
        e || (Xe(t.$$.fragment, n), e = !0);
      }, o(n) {
        ct(t.$$.fragment, n), e = !1;
      }, d(n) {
        Zt(t, n);
      },
    };
  }

  function v1(r) {
    let t, e, n, o, a, i, s, u, c, l, h, f, d, p, v = r[10].nav && Vu(r);
    h = new Hf({ props: { stateMask: r[0], loginState: r[8] } });
    let m = r[8] == ut.SUCCESS && Gu(r);
    return {
      c() {
        t = we('div'), v && v.c(), e = tt(), n = we('video'), o = tt(), a = we('canvas'), i = tt(), s = we('canvas'), u = tt(), c = we('canvas'), l = tt(), fn(h.$$.fragment), f = tt(), m && m.c(), n.autoplay = !0, n.muted = !0, n.playsInline = !0, re(n, 'class', 'svelte-9po0rh'), re(a, 'class', 'svelte-9po0rh'), re(s, 'class', 'debug svelte-9po0rh'), re(c, 'class', 'blur svelte-9po0rh'), re(t, 'class', 'Camera svelte-9po0rh'), Oo(() => r[21].call(t));
      }, m(g, y) {
        ze(g, t, y), v && v.m(t, null), pe(t, e), pe(t, n), r[17](n), pe(t, o), pe(t, a), r[18](a), pe(t, i), pe(t, s), r[19](s), pe(t, u), pe(t, c), r[20](c), pe(t, l), $t(h, t, null), pe(t, f), m && m.m(t, null), d = Ef(t, r[21].bind(t)), p = !0;
      }, p(g, y) {
        g[10].nav ? v ? (v.p(g, y), y[0] & 1024 && Xe(v, 1)) : (v = Vu(g), v.c(), Xe(v, 1), v.m(t, e)) : v && (ri(), ct(v, 1, 1, () => {
          v = null;
        }), oi());
        const x = {};
        y[0] & 1 && (x.stateMask = g[0]), y[0] & 256 && (x.loginState = g[8]), h.$set(x), g[8] == ut.SUCCESS ? m ? (m.p(g, y), y[0] & 256 && Xe(m, 1)) : (m = Gu(g), m.c(), Xe(m, 1), m.m(t, null)) : m && (ri(), ct(m, 1, 1, () => {
          m = null;
        }), oi());
      }, i(g) {
        p || (Xe(v), Xe(h.$$.fragment, g), Xe(m), p = !0);
      }, o(g) {
        ct(v), ct(h.$$.fragment, g), ct(m), p = !1;
      }, d(g) {
        g && Pe(t), v && v.d(), r[17](null), r[18](null), r[19](null), r[20](null), Zt(h), m && m.d(), d();
      },
    };
  }

  let m1 = 20;

  function g1(r, t) {
    let e;
    return r.height / r.width >= t.height / t.width ? e = {
      width: t.width,
      height: r.height * (t.width / r.width),
    } : e = {
      width: r.width * (t.height / r.height),
      height: t.height,
    }, e.x = (t.width - e.width) / 2, e.y = (t.height - e.height) / 2, e;
  }

  function y1(r, t, e) {
    let n, o, a, i;
    Ae(r, Qe, P => e(9, n = P)), Ae(r, Cr, P => e(29, o = P)), Ae(r, Ht, P => e(10, a = P)), Ae(r, Yn, P => e(11, i = P));
    let s, u, c, l, h, f, d, p, v, m, g = {};
    const y = new tf;
    Xu(async () => (await S(), await vt.tinyFaceDetector.loadFromUri('/assets/weights'), await vt.faceLandmark68TinyNet.loadFromUri('/assets/weights'), e(14, g.component = !0, g), L));

    function x() {
      let P = l.videoWidth / l.videoHeight, H, j;
      P > 1 ? j = 720 : j = 1280, H = j * P, e(3, c.width = H, c), e(3, c.height = j, c), e(3, c.ctx = c.getContext('2d', { alpha: !1 }), c), e(3, c.ctx.fillStyle = '#666', c), c.ctx.fillRect(0, 0, H, j), c.ctx.translate(H, 1), c.ctx.scale(-1, 1), e(6, f.width = H, f), e(6, f.height = j, f), e(6, f.ctx = f.getContext('2d', { alpha: !0 }), f), v = document.createElement('canvas'), v.width = Math.floor(H / 2), v.height = Math.floor(j / 2), v.ctx = v.getContext('2d', { alpha: !0 }), e(5, h.width = v.width, h), e(5, h.height = v.height, h), e(5, h.ctx = h.getContext('2d', { alpha: !0 }), h), p = document.createElement('canvas'), p.width = H, p.height = j, p.ctx = p.getContext('2d', { alpha: !0 }), e(7, m = document.createElement('canvas')), e(7, m.width = H, m), e(7, m.height = j, m), e(7, m.ctx = m.getContext('2d', { alpha: !0 }), m), d = document.createElement('canvas'), d.width = H / 16, d.height = j / 16, d.ctx = d.getContext('2d', { alpha: !0 }), b(), w(), e(8, F = ut.IDLE), e(0, E = yt.NODATA);
    }

    function b() {
      if (l) {
        const P = l.videoHeight, H = l.videoWidth, j = g1({ height: P, width: H }, c);
        c.ctx.drawImage(l, 0, 0, H, P, j.x, j.y, j.width, j.height);
      }
      b.timeout = setTimeout(b, 1e3 / 30);
    }

    async function w() {
      let P = performance.now();
      if (c && l) {
        v.ctx.drawImage(c, 0, 0, c.width, c.height, 0, 0, v.width, v.height);
        let H = await f1(v, y).withFaceLandmarks(!0);
        R(H);
      }
      P = performance.now() - P, w.timeout = setTimeout(w, Math.max(0, 80 - P));
    }

    async function _() {
      p.ctx.globalCompositeOperation = 'source-over', p.ctx.clearRect(0, 0, p.width, p.height), d.ctx.clearRect(0, 0, d.width, d.height), d.ctx.drawImage(c, 0, 0, c.width, c.height, 0, 0, d.width, d.height), StackBlur.canvasRGB(d, 0, 0, d.width, d.height, 2), p.ctx.drawImage(d, 0, 0, d.width, d.height, 0, 0, p.width, p.height), m.ctx.drawImage(p, 0, 0), p.ctx.globalCompositeOperation = 'xor', p.ctx.beginPath(), p.ctx.fillStyle = 'white', p.ctx.ellipse(p.width / 2, p.height / 2.5, p.height / 3, p.height / 4, Math.PI / 2, 0, 2 * Math.PI), p.ctx.fill(), f.ctx.clearRect(0, 0, f.width, f.height), f.ctx.drawImage(p, 0, 0), _.timeout = setTimeout(_, 45);
    }

    async function S() {
      if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        const P = {
          video: {
            facingMode: { ideal: 'user' },
            aspectRatio: { ideal: 1.7777777777777777 },
            width: { min: a.min, ideal: 1920 },
            height: { min: a.min, ideal: 1920 },
          },
        }, H = await navigator.mediaDevices.getUserMedia(P);
        l.addEventListener('loadeddata', () => e(14, g.video = !0, g)), e(4, l.srcObject = H, l), l.play();
      } else alert('Sorry, camera is not supported on this device.'), a.enabled ? o({
        pass_data: a.id,
        birth_date: a.date,
        photo_from_camera: !1,
        agreed_on_terms: !0,
        error: 1,
      }) : o({ photo_from_camera: !1, agreed_on_terms: !0, error: 1 }), st(Qe, n = '', n);
    }

    let E = yt.NODATA, I = [];

    function R(P) {
      if (!c || !l || !h) return;
      if (I.push(P), I.length > m1 && I.shift(), I.reduce((j, te) => j + te.length, 0) < 1) return e(0, E = yt.NOFACE);
      const H = P[0];
      if (!!H) {
        if (e(5, h.ctx.fillStyle = 'magenta', h), h.ctx.clearRect(0, 0, v.width, v.height), H.landmarks._positions.forEach((j, te) => {
          h.ctx.fillRect(j._x - 1, j._y - 1, 2, 2);
        }), P.length > 1) return e(0, E = yt.TWOFACE);
        if (Tr.size(H, v) < 0) return e(0, E = yt.TOOFAR);
        if (Tr.size(H, v) > 0) return e(0, E = yt.TOONEAR);
        if (Tr.pan(H, v) > 0 || Tr.pan(H, v) < 0 || Tr.position(H, v) < 0) return e(0, E = yt.NOTSTRAIGHT);
        e(0, E = 0), H.alignedRect._box;
      }
    }

    let F = ut.IDLE;

    function D(P) {
      if (F != ut.SUCCESS) {
        if (P === 0) {
          e(8, F = ut.COUNTING), e(15, D.acceptTimeout = setTimeout(() => {
            e(8, F = ut.SUCCESS), L();
          }, 3e3), D);
          return;
        }
        clearTimeout(D.acceptTimeout), e(8, F = ut.IDLE);
      }
    }

    function L() {
      clearTimeout(b.timeout), clearTimeout(w.timeout), clearTimeout(_.timeout), e(0, E = 0);
    }

    const B = () => {
      L(), st(Qe, n = 'intro', n);
    };

    function W(P) {
      Vn[P ? 'unshift' : 'push'](() => {
        l = P, e(4, l);
      });
    }

    function V(P) {
      Vn[P ? 'unshift' : 'push'](() => {
        c = P, e(3, c);
      });
    }

    function z(P) {
      Vn[P ? 'unshift' : 'push'](() => {
        h = P, e(5, h);
      });
    }

    function U(P) {
      Vn[P ? 'unshift' : 'push'](() => {
        f = P, e(6, f);
      });
    }

    function q() {
      s = this.offsetHeight, u = this.offsetWidth, e(1, s), e(2, u);
    }

    return r.$$.update = () => {
      r.$$.dirty[0] & 16384 && g.component && g.video && x(), r.$$.dirty[0] & 32769 && D(E);
    }, [E, s, u, c, l, h, f, m, F, n, a, i, x, L, g, D, B, W, V, z, U, q];
  }

  class b1 extends Mn {
    constructor(t) {
      super(), Nn(this, t, y1, v1, hn, {}, p1, [-1, -1]);
    }
  }

  const x1 = '/myid_assets/logo.png';

  function w1(r) {
    Fn(r, 'svelte-1phr62q', '.Intro.svelte-1phr62q.svelte-1phr62q{display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;padding:1em;background:white}.wrong.svelte-1phr62q.svelte-1phr62q{outline:1px solid red}.Intro.svelte-1phr62q div.svelte-1phr62q{display:flex;flex-direction:column;justify-content:center;flex-grow:1}img.svelte-1phr62q.svelte-1phr62q{max-width:50%;margin-top:1em;margin-bottom:1em}.button.svelte-1phr62q.svelte-1phr62q{background:#8da8d8;border:none;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.3);color:white;padding:0.5em 1em;min-width:10em;cursor:pointer;opacity:0.5;pointer-events:none}.ready.svelte-1phr62q.svelte-1phr62q{opacity:1;pointer-events:all}.Intro.svelte-1phr62q button.svelte-1phr62q{font-size:1.2em;margin:0.7em 0}p.svelte-1phr62q.svelte-1phr62q{margin-top:0}');
  }

  function _1(r) {
    let t, e, n, o, a, i, s, u, c = et('Enter your ID:', r[3]) + '', l, h, f, d, p, v, m, g, y,
      x = et('Next', r[3]) + '', b, w, _, S;
    return e = new Di({ props: { color: 'black' } }), {
      c() {
        t = we('div'), fn(e.$$.fragment), n = tt(), o = we('img'), i = tt(), s = we('div'), u = we('p'), l = cn(c), h = tt(), f = we('input'), p = tt(), v = we('input'), g = tt(), y = we('button'), b = cn(x), Hu(o.src, a = x1) || re(o, 'src', a), re(o, 'alt', 'MyID'), re(o, 'class', 'svelte-1phr62q'), re(u, 'class', 'svelte-1phr62q'), re(f, 'type', 'text'), re(f, 'placeholder', d = et('AA1234567 | PINFL', r[3])), re(f, 'class', 'svelte-1phr62q'), Cn(f, 'wrong', r[1]), re(v, 'type', 'date'), re(v, 'placeholder', m = et('Date', r[3])), re(y, 'class', 'button svelte-1phr62q'), Cn(y, 'ready', r[2]), re(s, 'class', 'svelte-1phr62q'), re(t, 'class', 'Intro svelte-1phr62q');
      }, m(E, I) {
        ze(E, t, I), $t(e, t, null), pe(t, n), pe(t, o), pe(t, i), pe(t, s), pe(s, u), pe(u, l), pe(s, h), pe(s, f), fo(f, r[0].id), pe(s, p), pe(s, v), fo(v, r[0].date), pe(s, g), pe(s, y), pe(y, b), w = !0, _ || (S = [un(f, 'input', r[5]), un(v, 'input', r[6]), un(y, 'click', r[7])], _ = !0);
      }, p(E, [I]) {
        (!w || I & 8) && c !== (c = et('Enter your ID:', E[3]) + '') && Kn(l, c), (!w || I & 8 && d !== (d = et('AA1234567 | PINFL', E[3]))) && re(f, 'placeholder', d), I & 1 && f.value !== E[0].id && fo(f, E[0].id), I & 2 && Cn(f, 'wrong', E[1]), (!w || I & 8 && m !== (m = et('Date', E[3]))) && re(v, 'placeholder', m), I & 1 && fo(v, E[0].date), (!w || I & 8) && x !== (x = et('Next', E[3]) + '') && Kn(b, x), I & 4 && Cn(y, 'ready', E[2]);
      }, i(E) {
        w || (Xe(e.$$.fragment, E), w = !0);
      }, o(E) {
        ct(e.$$.fragment, E), w = !1;
      }, d(E) {
        E && Pe(t), Zt(e), _ = !1, Rr(S);
      },
    };
  }

  function C1(r, t, e) {
    let n, o, a;
    Ae(r, Ht, h => e(0, n = h)), Ae(r, Yn, h => e(3, o = h)), Ae(r, Qe, h => e(4, a = h));
    let i, s = !1;

    function u() {
      n.id = this.value, Ht.set(n);
    }

    function c() {
      n.date = this.value, Ht.set(n);
    }

    const l = () => st(Qe, a = 'camera', a);
    return r.$$.update = () => {
      r.$$.dirty & 1 && n.id && e(1, i = !/(^[3456](\d?){13}$)|(^([A-Za-z]{2})(\d?){7}$)|(^[3456A-Za-z]$)/.test(n.id)), r.$$.dirty & 1 && (n.date && n.id ? e(2, s = /(^[3456](\d?){13}$)|(^([A-Za-z]{2})(\d?){7}$)|(^[3456A-Za-z]$)/.test(n.id)) : e(2, s = !1));
    }, [n, i, s, o, a, u, c, l];
  }

  class E1 extends Mn {
    constructor(t) {
      super(), Nn(this, t, C1, _1, hn, {}, w1);
    }
  }

  function k1(r) {
    Fn(r, 'svelte-1aj64m8', '.MyID.svelte-1aj64m8{display:flex;justify-content:stretch;align-items:stretch;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.3);border-radius:5px;overflow:hidden;position:relative;width:20em;max-width:100%;height:29em;color:white}.MyID.svelte-1aj64m8>*{width:100%}');
  }

  function I1(r) {
    let t, e;
    return t = new Lf({}), {
      c() {
        fn(t.$$.fragment);
      }, m(n, o) {
        $t(t, n, o), e = !0;
      }, i(n) {
        e || (Xe(t.$$.fragment, n), e = !0);
      }, o(n) {
        ct(t.$$.fragment, n), e = !1;
      }, d(n) {
        Zt(t, n);
      },
    };
  }

  function R1(r) {
    let t, e;
    return t = new E1({}), {
      c() {
        fn(t.$$.fragment);
      }, m(n, o) {
        $t(t, n, o), e = !0;
      }, i(n) {
        e || (Xe(t.$$.fragment, n), e = !0);
      }, o(n) {
        ct(t.$$.fragment, n), e = !1;
      }, d(n) {
        Zt(t, n);
      },
    };
  }

  function S1(r) {
    let t, e;
    return t = new b1({}), {
      c() {
        fn(t.$$.fragment);
      }, m(n, o) {
        $t(t, n, o), e = !0;
      }, i(n) {
        e || (Xe(t.$$.fragment, n), e = !0);
      }, o(n) {
        ct(t.$$.fragment, n), e = !1;
      }, d(n) {
        Zt(t, n);
      },
    };
  }

  function A1(r) {
    let t, e, n, o;
    const a = [S1, R1, I1], i = [];

    function s(u, c) {
      return u[0] == 'camera' ? 0 : u[0] == 'creds' ? 1 : 2;
    }

    return e = s(r), n = i[e] = a[e](r), {
      c() {
        t = we('div'), n.c(), re(t, 'class', 'MyID svelte-1aj64m8');
      }, m(u, c) {
        ze(u, t, c), i[e].m(t, null), o = !0;
      }, p(u, [c]) {
        let l = e;
        e = s(u), e !== l && (ri(), ct(i[l], 1, 1, () => {
          i[l] = null;
        }), oi(), n = i[e], n || (n = i[e] = a[e](u), n.c()), Xe(n, 1), n.m(t, null));
      }, i(u) {
        o || (Xe(n), o = !0);
      }, o(u) {
        ct(n), o = !1;
      }, d(u) {
        u && Pe(t), i[e].d();
      },
    };
  }

  function D1(r, t, e) {
    let n;
    return Ae(r, Cr, o => e(1, o)), Ae(r, Qe, o => e(0, n = o)), [n];
  }

  class T1 extends Mn {
    constructor(t) {
      super(), Nn(this, t, D1, A1, hn, {}, k1);
    }
  }

  function F1(r) {
    Fn(r, 'svelte-n9s2ow', `body{padding:0}.myid-host.svelte-n9s2ow{display:flex;justify-content:center;align-items:center;min-height:100%;font-family:sans-serif}.none.svelte-n9s2ow{display:none !important}.myid-host.svelte-n9s2ow a{color:rgb(0,100,200);text-decoration:none}.myid-host.svelte-n9s2ow a:hover{text-decoration:underline}.myid-host.svelte-n9s2ow a:visited{color:rgb(0,80,160)}.myid-host.svelte-n9s2ow label{display:block}.myid-host.svelte-n9s2ow input,.myid-host.svelte-n9s2ow button,.myid-host.svelte-n9s2ow select,.myid-host.svelte-n9s2ow textarea{font-family:inherit;font-size:inherit;-webkit-padding:0.4em 0;padding:0.4em;margin:0 0 0.5em 0;box-sizing:border-box;border:1px solid #ccc;border-radius:2px}.myid-host.svelte-n9s2ow button{border:none}@font-face{font-family:'iconfont';src:url('./myid_assets/fonts/iconfont.woff') format('woff');font-weight:normal;font-style:normal;font-display:block}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWV0ewJER.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVQewJER.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVwewJER.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVMewJER.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVIewJER.woff2) format('woff2');unicode-range:U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWV8ewJER.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWV4ewJER.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Open Sans';font-style:italic;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVAewA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4kaVIGxA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4saVIGxA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4jaVIGxA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4iaVIGxA.woff2) format('woff2');unicode-range:U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4vaVIGxA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}.myid-host.svelte-n9s2ow button[data-icon]:before{font-size:1.6em;position:relative;top:0.17em;line-height:0;vertical-align:baseline;margin-right:0.2em}.myid-host.svelte-n9s2ow [data-icon]:before{font-family:'iconfont' !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.myid-host.svelte-n9s2ow [data-icon="camera_alt"]:before{content:"\\e900"}.myid-host.svelte-n9s2ow [data-icon="photo_camera"]:before{content:"\\e900"}.myid-host.svelte-n9s2ow [data-icon="local_see"]:before{content:"\\e900"}.myid-host.svelte-n9s2ow [data-icon="image-off-1"]:before{content:"\\e921"}.myid-host.svelte-n9s2ow [data-icon="language"]:before{content:"\\e918"}.myid-host.svelte-n9s2ow [data-icon="twitter"]:before{content:"\\e916"}.myid-host.svelte-n9s2ow [data-icon="heart"]:before{content:"\\e912"}.myid-host.svelte-n9s2ow [data-icon="help"]:before{content:"\\e910"}.myid-host.svelte-n9s2ow [data-icon="numeric-3"]:before{content:"\\e90e"}.myid-host.svelte-n9s2ow [data-icon="numeric-4"]:before{content:"\\e90f"}.myid-host.svelte-n9s2ow [data-icon="keyboard-return"]:before{content:"\\2ba0"}.myid-host.svelte-n9s2ow [data-icon="arrow-all"]:before{content:"\\e90a"}.myid-host.svelte-n9s2ow [data-icon="email-outline"]:before{content:"\\e90b"}.myid-host.svelte-n9s2ow [data-icon="information-outline"]:before{content:"\\e90d"}.myid-host.svelte-n9s2ow [data-icon="pin"]:before{content:"\\e91f"}.myid-host.svelte-n9s2ow [data-icon="pin-outline"]:before{content:"\\e91e"}.myid-host.svelte-n9s2ow [data-icon="clear"]:before{content:"\\e911"}.myid-host.svelte-n9s2ow [data-icon="eye"]:before{content:"\\e919"}.myid-host.svelte-n9s2ow [data-icon="keyboard_arrow_left"]:before{content:"\\e913"}.myid-host.svelte-n9s2ow [data-icon="keyboard_arrow_right"]:before{content:"\\e914"}.myid-host.svelte-n9s2ow [data-icon="keyboard_arrow_up"]:before{content:"\\e915"}.myid-host.svelte-n9s2ow [data-icon="keyboard_arrow_down"]:before{content:"\\e90c"}.myid-host.svelte-n9s2ow [data-icon="keyboard_tab"]:before{content:"\\e920"}.myid-host.svelte-n9s2ow [data-icon="fullscreen"]:before{content:"\\e91a"}.myid-host.svelte-n9s2ow [data-icon="unfold_more"]:before{content:"\\e91b"}.myid-host.svelte-n9s2ow [data-icon="check_box"]:before{content:"\\e91c"}.myid-host.svelte-n9s2ow [data-icon="check_box_outline_blank"]:before{content:"\\e91d"}.myid-host.svelte-n9s2ow [data-icon="collections_bookmark"]:before{content:"\\e925"}.myid-host.svelte-n9s2ow [data-icon="code"]:before{content:"\\e926"}.myid-host.svelte-n9s2ow [data-icon="chat"]:before{content:"\\e927"}.myid-host.svelte-n9s2ow [data-icon="link"]:before{content:"\\e928"}.myid-host.svelte-n9s2ow [data-icon="launch"]:before{content:"\\e929"}.myid-host.svelte-n9s2ow [data-icon="file"]:before{content:"\\e92a"}.myid-host.svelte-n9s2ow [data-icon="crop_free"]:before{content:"\\e92b"}.myid-host.svelte-n9s2ow [data-icon="crop_original"]:before{content:"\\e92c"}.myid-host.svelte-n9s2ow [data-icon="zoom_out_map"]:before{content:"\\e92d"}.myid-host.svelte-n9s2ow [data-icon="fullscreen_exit"]:before{content:"\\e92e"}.myid-host.svelte-n9s2ow [data-icon="menu"]:before{content:"\\e92f"}.myid-host.svelte-n9s2ow [data-icon="keyboard_control"]:before{content:"\\e930"}.myid-host.svelte-n9s2ow [data-icon="more_vert"]:before{content:"\\e931"}.myid-host.svelte-n9s2ow [data-icon="search"]:before{content:"\\e932"}.myid-host.svelte-n9s2ow [data-icon="settings"]:before{content:"\\e933"}.myid-host.svelte-n9s2ow [data-icon="insert_drive_file"]:before{content:"\\e935"}.myid-host.svelte-n9s2ow [data-icon="file-image-outline"]:before{content:"\\e936"}.myid-host.svelte-n9s2ow [data-icon="pan"]:before{content:"\\e939"}.myid-host.svelte-n9s2ow [data-icon="image"]:before{content:"\\e93b"}.myid-host.svelte-n9s2ow [data-icon="zoom-out"]:before{content:"\\e93c"}.myid-host.svelte-n9s2ow [data-icon="zoom-in"]:before{content:"\\e93d"}.myid-host.svelte-n9s2ow [data-icon="cogs"]:before{content:"\\e93e"}.myid-host.svelte-n9s2ow [data-icon="view-grid-plus"]:before{content:"\\e93f"}.myid-host.svelte-n9s2ow [data-icon="view-carousel"]:before{content:"\\e940"}.myid-host.svelte-n9s2ow [data-icon="palette"]:before{content:"\\e941"}.myid-host.svelte-n9s2ow [data-icon="download"]:before{content:"\\e942"}.myid-host.svelte-n9s2ow [data-icon="check"]:before{content:"\\e943"}.myid-host.svelte-n9s2ow [data-icon="home"]:before{content:"\\e944"}.myid-host.svelte-n9s2ow [data-icon="card-off"]:before{content:"\\e923"}.myid-host.svelte-n9s2ow [data-icon="sharios"]:before{content:"\\e922"}.myid-host.svelte-n9s2ow [data-icon="loading"]:before{content:"";display:inline-block;animation:svelte-n9s2ow-rotate 1s linear infinite;letter-spacing:0px;width:1em;height:1em;background-image:url(./myid_assets/img/loading.svg);background-size:contain;background-repeat:no-repeat;will-change:transform}@keyframes svelte-n9s2ow-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`);
  }

  function N1(r) {
    let t, e, n;
    return e = new T1({}), {
      c() {
        t = we('div'), fn(e.$$.fragment), re(t, 'class', 'myid-host svelte-n9s2ow'), Cn(t, 'none', r[0] == '');
      }, m(o, a) {
        ze(o, t, a), $t(e, t, null), n = !0;
      }, p(o, [a]) {
        a & 1 && Cn(t, 'none', o[0] == '');
      }, i(o) {
        n || (Xe(e.$$.fragment, o), n = !0);
      }, o(o) {
        ct(e.$$.fragment, o), n = !1;
      }, d(o) {
        o && Pe(t), Zt(e);
      },
    };
  }

  function M1(r, t, e) {
    let n, o, a, i;
    return Ae(r, Qe, s => e(0, n = s)), Ae(r, Ht, s => e(1, o = s)), Ae(r, Yn, s => e(2, a = s)), Ae(r, Cr, s => e(3, i = s)), window.MyID._open = s => {
      st(Cr, i = s.callback || (() => {
      }), i), st(Ht, o.enabled = !!s.creds, o), s.intro ? st(Qe, n = 'intro', n) : st(Qe, n = 'camera', n), st(Yn, a = s.locale || 'en', a), st(Ht, o.nav = s.nav !== void 0 ? s.nav : !0, o), st(Ht, o.min = s.min !== void 0 ? s.min : 480, o);
    }, window.MyID._close = () => {
      st(Qe, n = '', n);
    }, [n];
  }

  class P1 extends Mn {
    constructor(t) {
      super(), Nn(this, t, M1, N1, hn, {}, F1);
    }
  }

  window.MyID = {};
  window.MyID.init = (r, t = {}) => {
    window.MyID.destroy(), window.MyID.host = r, window.MyID.host.innerHTML = '', window.MyID.config = t, window.MyID.app = new P1({
      target: r,
      props: { config: window.MyID.config },
    });
  };
  window.MyID.open = r => {
    window.MyID._open(r);
  };
  window.MyID.close = () => {
    window.MyID._close();
  };
  window.MyID.destroy = () => {
    try {
      window.MyID.app.$destroy(), window.MyID.host.innerHTML = '';
    } catch {
    }
  };
  window.MyID.app;
});
export default O1();
