google.maps.__gjsload__('infowindow', function(_) {
    var eP = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        cEa = function(a, b) {
            if (1 === a.g.size) {
                const c = Array.from(a.g.values())[0];
                c.On !== b.On && (c.set("map", null), a.g.delete(c))
            }
            a.g.add(b)
        },
        eEa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Me: a,
                xc: _.QC.xc(),
                Mp: c,
                shouldFocus: b
            };
            return new dEa(b)
        },
        fP = function(a, b) {
            a.V.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? fEa(a) : a.s = !1
        },
        gEa = function(a) {
            const b = !!a.get("open");
            var c = a.get("content");
            c = b ? c : null;
            if (c == a.i) fP(a, b && a.get("position"));
            else {
                if (a.i) {
                    const d = a.i.parentNode;
                    d == a.g && d.removeChild(a.i)
                }
                c && (a.C = !1, a.g.appendChild(c));
                fP(a, b && a.get("position"));
                a.i = c;
                gP(a)
            }
        },
        gP = function(a) {
            var b = a.getSize();
            if (b) {
                var c = b.pf;
                b = b.minWidth;
                a.Kb.style.maxWidth = _.It(c.width);
                a.Kb.style.maxHeight = _.It(c.height);
                a.Kb.style.minWidth = _.It(b);
                a.g.style.maxHeight = _.an.g ? _.It(c.height - 18) : _.It(c.height - 36);
                hP(a);
                a.m.start()
            }
        },
        hEa = function(a) {
            const b = a.get("pixelOffset") || new _.tl(0, 0);
            var c = new _.tl(a.Kb.offsetWidth,
                a.Kb.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            let d = b.height + 60;
            const e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        fEa = function(a) {
            !a.s && a.get("open") && a.get("visible") && a.get("position") && (_.qk(a, "visible"), a.s = !0)
        },
        hP = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = hEa(a);
                const d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.su(a.anchor, b);
                b = a.get("zIndex");
                _.uu(a.V, _.Qi(b) ? b : e + 60);
                a.set("pixelBounds",
                    _.lm(d, e, f, c))
            }
        },
        jEa = function(a, b, c) {
            return b instanceof _.Ak ? new iEa(a, b, c) : new iEa(a, b)
        },
        lEa = function(a) {
            a.g && a.yb.push(_.Nt(a.g, "pixelposition_changed", () => {
                kEa(a)
            }))
        },
        kEa = function(a) {
            const b = a.model.get("pixelPosition") || a.g && a.g.get("pixelPosition");
            a.l.set("position", b)
        },
        nEa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new mEa);
            return a.get("IW_AUTO_CLOSER")
        },
        mEa = class {
            constructor() {
                this.g = new Set
            }
        };
    var dEa = class extends _.uk {
        constructor(a) {
            super();
            this.i = this.o = null;
            this.s = this.C = !1;
            this.Mp = a.Mp;
            this.shouldFocus = a.shouldFocus;
            this.V = document.createElement("div");
            this.V.style.cursor = "default";
            this.V.style.position = "absolute";
            this.V.style.left = this.V.style.top = "0";
            a.Me.floatPane.appendChild(this.V);
            this.anchor = _.tu("div", this.V);
            this.l = _.tu("div", this.anchor);
            this.Kb = _.tu("div", this.l);
            this.Kb.setAttribute("role", "dialog");
            this.Kb.tabIndex = -1;
            this.G = _.tu("div", this.l);
            this.g = _.tu("div", this.Kb);
            _.zva(this.V);
            _.nu(this.Kb, "gm-style-iw");
            _.nu(this.anchor, "gm-style-iw-a");
            _.nu(this.l, "gm-style-iw-t");
            _.nu(this.G, "gm-style-iw-tc");
            _.nu(this.Kb, "gm-style-iw-c");
            _.nu(this.g, "gm-style-iw-d");
            _.an.g && !_.an.s && (a.xc ? this.Kb.style.paddingLeft = "0" : this.Kb.style.paddingRight = "0", this.Kb.style.paddingBottom = "0", this.g.style.overflow = "scroll");
            fP(this, !1);
            _.kk(this.V, "mousedown", _.bk);
            _.kk(this.V, "mouseup", _.bk);
            _.kk(this.V, "mousemove", _.bk);
            _.kk(this.V, "pointerdown", _.bk);
            _.kk(this.V, "pointerup", _.bk);
            _.kk(this.V, "pointermove", _.bk);
            _.kk(this.V, "dblclick", _.bk);
            _.kk(this.V, "click", _.bk);
            _.kk(this.V, "touchstart", _.bk);
            _.kk(this.V, "touchend", _.bk);
            _.kk(this.V, "touchmove", _.bk);
            _.Mt(this.V, "contextmenu", this, this.F);
            _.Mt(this.V, "wheel", this, _.bk);
            _.Mt(this.V, "mousewheel", this, _.Yj);
            _.Mt(this.V, "MozMousePixelScroll", this, _.Yj);
            this.h = new _.hw({
                Bk: new _.rl(8, 8),
                Yl: new _.tl(14, 14),
                offset: new _.rl(-6, -6),
                ownerElement: this.Kb
            });
            this.Kb.appendChild(this.h.element);
            _.kk(this.h.element, "click", b => {
                _.bk(b);
                _.qk(this, "closeclick");
                this.set("open", !1)
            });
            this.m = new _.Jm(() => {
                !this.C && this.get("content") && this.get("visible") && (_.qk(this, "domready"), this.C = !0)
            }, 0);
            this.D = _.kk(this.V, "keydown", b => {
                "Escape" !== b.key && "Esc" !== b.key || !this.Kb.contains(document.activeElement) || (b.stopPropagation(), _.qk(this, "closeclick"), this.set("open", !1))
            })
        }
        ariaLabel_changed() {
            const a = this.get("ariaLabel");
            a ? this.Kb.setAttribute("aria-label", a) : this.Kb.removeAttribute("aria-label")
        }
        open_changed() {
            gEa(this)
        }
        content_changed() {
            gEa(this)
        }
        pendingFocus_changed() {
            this.get("pendingFocus") &&
                (this.get("open") && this.get("visible") && this.get("position") ? _.mn(this.Kb, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
        }
        dispose() {
            setTimeout(() => {
                document.activeElement && document.activeElement !== document.body || (this.o && this.o !== document.body ? _.mn(this.o, !0) || _.mn(this.Mp, !0) : _.mn(this.Mp, !0))
            });
            this.D && _.fk(this.D);
            this.V.parentNode.removeChild(this.V);
            this.m.stop();
            this.m.dispose()
        }
        getSize() {
            var a =
                this.get("layoutPixelBounds"),
                b = this.get("pixelOffset");
            const c = this.get("maxWidth") || 648,
                d = this.get("minWidth") || 0;
            if (!b) return null;
            a ? (b = a.Aa - a.na - (11 + -b.height), a = a.Ba - a.va - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
            a = Math.min(a, c);
            a = Math.max(d, a);
            a = Math.max(0, a);
            b = Math.max(0, b);
            return {
                pf: new _.tl(a, b),
                minWidth: d
            }
        }
        pixelOffset_changed() {
            const a = this.get("pixelOffset") || new _.tl(0, 0);
            this.l.style.right = _.It(-a.width);
            this.l.style.bottom = _.It(-a.height + 11);
            gP(this)
        }
        layoutPixelBounds_changed() {
            gP(this)
        }
        position_changed() {
            this.get("position") ?
                (hP(this), fP(this, !!this.get("open"))) : fP(this, !1)
        }
        zIndex_changed() {
            hP(this)
        }
        visible_changed() {
            this.V.style.display = this.get("visible") ? "" : "none";
            this.m.start();
            if (this.get("visible")) {
                const a = this.h.element.style.display;
                this.h.element.style.display = "none";
                this.h.element.getBoundingClientRect();
                this.h.element.style.display = a;
                fEa(this)
            } else this.s = !1
        }
        F(a) {
            let b = !1;
            const c = this.get("content");
            let d = a.target;
            for (; !b && d;) b = d == c, d = d.parentNode;
            b ? _.Yj(a) : _.ak(a)
        }
        focus() {
            this.o = document.activeElement;
            let a;
            _.an.C && (a = this.g.getBoundingClientRect());
            if (this.get("disableAutoPan")) _.mn(this.Kb, !0);
            else {
                var b = _.zu(this.g);
                if (b.length) {
                    b = b[0];
                    a = a || this.g.getBoundingClientRect();
                    var c = b.getBoundingClientRect();
                    _.mn(c.bottom <= a.bottom && c.right <= a.right ? b : this.Kb, !0)
                } else _.mn(this.h.element, !0)
            }
        }
    };
    var iEa = class {
        constructor(a, b, c) {
            this.model = a;
            this.isOpen = !0;
            this.g = this.i = this.da = null;
            this.yb = [];
            var d = a.get("shouldFocus");
            this.l = eEa(b, d);
            const e = b.__gm;
            (d = b instanceof _.Ak) && c ? c.then(k => {
                this.isOpen && (this.da = k, this.g = new _.RL(m => {
                    this.i = new _.jC(b, k, m, () => {});
                    k.Ib(this.i);
                    return this.i
                }), this.g.bindTo("latLngPosition", a, "position"), lEa(this))
            }) : (this.g = new _.RL, this.g.bindTo("latLngPosition", a, "position"), this.g.bindTo("center", e, "projectionCenterQ"), this.g.bindTo("zoom", e), this.g.bindTo("offset",
                e), this.g.bindTo("projection", b), this.g.bindTo("focus", b, "position"), lEa(this));
            this.m = d ? eP(a) ? "Ia" : "Id" : null;
            this.o = d ? eP(a) ? 148284 : 148285 : null;
            const f = new _.SL(["scale"], "visible", k => null == k || .3 <= k);
            this.g && f.bindTo("scale", this.g);
            const h = this.l;
            h.set("logAsInternal", eP(a));
            h.bindTo("ariaLabel", a);
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds", e, "pixelBounds");
            h.bindTo("disableAutoPan", a);
            h.bindTo("pendingFocus", a);
            h.bindTo("maxWidth", a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset",
                a);
            h.bindTo("visible", f);
            this.h = new _.Jm(() => {
                if (b instanceof _.Ak)
                    if (this.da) {
                        var k = a.get("position");
                        k && _.fu(b, this.da, new _.Uk(k), hEa(h))
                    } else c.then(() => {
                        this.h.start()
                    });
                else(k = h.get("pixelBounds")) ? _.qk(e, "pantobounds", k) : this.h.start()
            }, 150);
            if (d) {
                let k = null;
                this.yb.push(_.Nt(a, "position_changed", () => {
                    const m = a.get("position");
                    !m || a.get("disableAutoPan") || m.equals(k) || (this.h.start(), k = m)
                }))
            } else a.get("disableAutoPan") || this.h.start();
            h.set("open", !0);
            this.yb.push(_.dk(h, "domready", () => {
                a.trigger("domready")
            }));
            this.yb.push(_.dk(h, "visible", () => {
                a.trigger("visible")
            }));
            this.yb.push(_.dk(h, "closeclick", () => {
                a.close();
                a.trigger("closeclick")
            }));
            this.yb.push(_.Nt(a, "pixelposition_changed", () => {
                kEa(this)
            }));
            this.m && _.kl(b, this.m);
            this.o && _.il(b, this.o)
        }
        close() {
            if (this.isOpen) {
                this.isOpen = !1;
                for (var a of this.yb) _.fk(a);
                this.yb.length = 0;
                this.h.stop();
                this.h.dispose();
                this.da && this.i && this.da.Sf(this.i);
                a = this.l;
                a.unbindAll();
                a.set("open", !1);
                a.dispose();
                this.g && this.g.unbindAll()
            }
        }
    };
    _.Vj("infowindow", {
        GA: function(a) {
            let b = null;
            _.Nt(a, "map_changed", function d() {
                const e = a.get("map");
                b && (b.Dv.g.delete(a), b.XK.close(), b = null);
                if (e) {
                    const f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        XK: jEa(a, e, e instanceof _.Ak ? f.qb.then(({
                            da: h
                        }) => h) : void 0),
                        Dv: nEa(e)
                    }, cEa(b.Dv, a)) : _.nk(f, "innercontainer_changed", d) : _.nk(f, "panes_changed", d)
                }
            })
        }
    });
});