/* @ds-bundle: {"format":3,"namespace":"MirDesignSystem_e087fa","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"BuySellToggle","sourcePath":"components/trading/BuySellToggle.jsx"},{"name":"ChangePill","sourcePath":"components/trading/ChangePill.jsx"},{"name":"PositionRow","sourcePath":"components/trading/PositionRow.jsx"},{"name":"Sparkline","sourcePath":"components/trading/Sparkline.jsx"},{"name":"Stat","sourcePath":"components/trading/Stat.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c7acb43ecbc0","components/core/Badge.jsx":"dbcefe3f90cf","components/core/Button.jsx":"57134ab9b129","components/core/Card.jsx":"17d601d2069d","components/core/IconButton.jsx":"1a690c75cc20","components/core/Input.jsx":"f792cffba4f0","components/trading/BuySellToggle.jsx":"22227f62c72f","components/trading/ChangePill.jsx":"44ef46fd428e","components/trading/PositionRow.jsx":"70a0db586a60","components/trading/Sparkline.jsx":"e8e2a1b74f25","components/trading/Stat.jsx":"c20d308e069b","ui_kits/app/AssetScreen.jsx":"d1eb63b9abc9","ui_kits/app/HomeScreen.jsx":"5b55deb1618c","ui_kits/app/LoginScreen.jsx":"b92a93947dee","ui_kits/app/data.js":"3bf4635ecd40","ui_kits/app/kit.jsx":"7498c69d7fca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MirDesignSystem_e087fa = window.MirDesignSystem_e087fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Avatar — round token for a user or, in trading, an asset symbol.
 * Renders an image when `src` is set, otherwise initials on a warm tint.
 */
function Avatar({
  src = null,
  initials = '',
  size = 40,
  tone = 'sand',
  style = {},
  ...rest
}) {
  const tones = {
    sand: ['var(--sand-deep)', 'var(--ink-700)'],
    brand: ['var(--grad-sun)', 'var(--white)'],
    dark: ['var(--ink-900)', 'var(--text-on-dark)'],
    up: ['var(--up-soft)', 'var(--gain-600)'],
    down: ['var(--down-soft)', 'var(--loss-600)']
  };
  const [bg, fg] = tones[tone] || tones.sand;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-pill)',
      background: bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: Math.round(size * 0.36),
      letterSpacing: 'var(--ls-snug)',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Badge — compact status / label pill. `tone` covers brand, neutral,
 * up/down market direction, and info/warn.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  icon = null,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      soft: ['var(--sand)', 'var(--ink-600)'],
      solid: ['var(--ink-900)', 'var(--white)']
    },
    brand: {
      soft: ['var(--orange-050)', 'var(--brand-press)'],
      solid: ['var(--brand)', 'var(--white)']
    },
    up: {
      soft: ['var(--up-soft)', 'var(--gain-600)'],
      solid: ['var(--up)', 'var(--white)']
    },
    down: {
      soft: ['var(--down-soft)', 'var(--loss-600)'],
      solid: ['var(--down)', 'var(--white)']
    },
    info: {
      soft: ['#E4EEFB', 'var(--info-500)'],
      solid: ['var(--info-500)', 'var(--white)']
    },
    warn: {
      soft: ['#FBF1D9', '#9A6B0F'],
      solid: ['var(--warn-500)', 'var(--white)']
    }
  };
  const [bg, fg] = (palette[tone] || palette.neutral)[variant] || palette.neutral.soft;
  const sizes = {
    sm: {
      fontSize: 11,
      padding: '2px 8px',
      gap: 4
    },
    md: {
      fontSize: 12,
      padding: '4px 11px',
      gap: 5
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      letterSpacing: 'var(--ls-snug)',
      lineHeight: 1.3,
      borderRadius: 'var(--r-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Button — the brand's primary action control.
 * Pill-shaped, warm. Primary uses the glossy sun gradient.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '0 16px',
      height: 36,
      gap: 8
    },
    md: {
      fontSize: 15,
      padding: '0 22px',
      height: 44,
      gap: 9
    },
    lg: {
      fontSize: 17,
      padding: '0 30px',
      height: 54,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--grad-brand)',
      color: 'var(--on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--brand-soft)',
      color: 'var(--brand-press)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: full ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      letterSpacing: 'var(--ls-snug)',
      lineHeight: 1,
      borderRadius: shape === 'pill' ? 'var(--r-pill)' : 'var(--r-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Card — the signature soft surface. Variants map to the reference:
 * `soft` white card, `glass` frosted panel, `dark` near-black, `sun` the
 * glossy orange orb panel.
 */
function Card({
  children,
  variant = 'soft',
  pad = 'lg',
  radius = 'card',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28
  };
  const radii = {
    md: 'var(--r-md)',
    lg: 'var(--r-lg)',
    xl: 'var(--r-xl)',
    card: 'var(--r-card)',
    '2xl': 'var(--r-2xl)'
  };
  const variants = {
    soft: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-card)'
    },
    sunk: {
      background: 'var(--surface-sunk)',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    glass: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: 'var(--glass-border)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      boxShadow: 'var(--shadow-float)'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-card)'
    },
    sun: {
      background: 'var(--grad-sun)',
      color: 'var(--white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-float)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radii.card,
      padding: pads[pad] ?? pads.lg,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir IconButton — circular icon control. The dark `solid` circle with a
 * forward arrow is a signature Mir affordance (see the login & event cards).
 */
function IconButton({
  icon,
  variant = 'solid',
  size = 'md',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 48,
    lg: 60
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    brand: {
      background: 'var(--grad-brand)',
      color: 'var(--on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    glass: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: 'var(--glass-border)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      boxShadow: 'var(--shadow-sm)'
    },
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    }
  };
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--r-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Input — soft, pill-ish field with an optional leading icon and
 * trailing affordance (e.g. an "I forgot" link), echoing the login card.
 */
function Input({
  icon = null,
  trailing = null,
  type = 'text',
  size = 'md',
  surface = 'sunk',
  style = {},
  inputStyle = {},
  ...rest
}) {
  const sizes = {
    md: {
      height: 52,
      fontSize: 15,
      padding: '0 18px',
      radius: 'var(--r-pill)'
    },
    lg: {
      height: 58,
      fontSize: 16,
      padding: '0 20px',
      radius: 'var(--r-pill)'
    }
  };
  const s = sizes[size] || sizes.md;
  const surfaces = {
    sunk: {
      background: 'var(--surface-sunk)',
      border: '1px solid transparent'
    },
    card: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)'
    },
    glass: {
      background: 'var(--surface-glass)',
      border: 'var(--glass-border)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))'
    }
  };
  const surf = surfaces[surface] || surfaces.sunk;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...surf,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = '0 0 0 4px var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      color: 'var(--text-primary)',
      ...inputStyle
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'inline-flex'
    }
  }, trailing));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/trading/BuySellToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir BuySellToggle — segmented control for order side. Buy slides to gain
 * green, Sell to loss red. The active thumb is a soft pill.
 */
function BuySellToggle({
  value = 'buy',
  onChange = () => {},
  buyLabel = 'Buy',
  sellLabel = 'Sell',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 38,
      fs: 14
    },
    md: {
      h: 48,
      fs: 16
    },
    lg: {
      h: 56,
      fs: 17
    }
  };
  const s = sizes[size] || sizes.md;
  const opts = [{
    key: 'buy',
    label: buyLabel,
    active: 'var(--up)'
  }, {
    key: 'sell',
    label: sellLabel,
    active: 'var(--down)'
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 4,
      padding: 4,
      height: s.h,
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--r-pill)',
      ...style
    }
  }, rest), opts.map(o => {
    const on = value === o.key;
    return /*#__PURE__*/React.createElement("button", {
      key: o.key,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange(o.key),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--r-pill)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: s.fs,
        letterSpacing: 'var(--ls-snug)',
        color: on ? 'var(--white)' : 'var(--text-secondary)',
        background: on ? o.active : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { BuySellToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/BuySellToggle.jsx", error: String((e && e.message) || e) }); }

// components/trading/ChangePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir ChangePill — directional price-change chip. Positive renders gain
 * green with an up arrow, negative renders loss red with a down arrow.
 */
function ChangePill({
  value = 0,
  format = 'percent',
  size = 'md',
  variant = 'soft',
  showArrow = true,
  style = {},
  ...rest
}) {
  const up = value >= 0;
  const num = Math.abs(value);
  const text = format === 'percent' ? `${num.toFixed(2)}%` : `${num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
  const fg = up ? 'var(--up)' : 'var(--down)';
  const bg = up ? 'var(--up-soft)' : 'var(--down-soft)';
  const sizes = {
    sm: {
      fs: 12,
      pad: '2px 7px',
      gap: 2
    },
    md: {
      fs: 13,
      pad: '4px 9px',
      gap: 3
    },
    lg: {
      fs: 15,
      pad: '5px 11px',
      gap: 4
    }
  };
  const s = sizes[size] || sizes.md;
  const wrap = variant === 'soft' ? {
    background: bg,
    padding: s.pad,
    borderRadius: 'var(--r-pill)'
  } : {
    padding: 0
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      color: fg,
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fs,
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.2,
      ...wrap,
      ...style
    }
  }, rest), showArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '0.9em',
      lineHeight: 1,
      fontFamily: 'var(--font-sans)'
    }
  }, up ? '\u2191' : '\u2193'), up ? '+' : '\u2212', text);
}
Object.assign(__ds_scope, { ChangePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/ChangePill.jsx", error: String((e && e.message) || e) }); }

// components/trading/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Sparkline — a tiny trend line drawn from a numeric series. Color is
 * derived from direction (last vs first) unless `color` is given. Optional
 * soft area fill. Pure data-viz: an SVG polyline, not an illustration.
 */
function Sparkline({
  data = [],
  width = 96,
  height = 32,
  color = null,
  fill = true,
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  if (!data || data.length < 2) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: width,
      height: height,
      style: style
    }, rest));
  }
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = strokeWidth + 1;
  const innerH = height - pad * 2;
  const stepX = width / (data.length - 1);
  const pts = data.map((d, i) => {
    const x = i * stepX;
    const y = pad + innerH - (d - min) / span * innerH;
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  const up = data[data.length - 1] >= data[0];
  const stroke = color || (up ? 'var(--up)' : 'var(--down)');
  const gid = React.useMemo(() => 'mir-spark-' + Math.random().toString(36).slice(2, 9), []);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), fill && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: stroke,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: stroke,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gid})`
  })), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/trading/PositionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir PositionRow — a watchlist / holdings row: asset token, symbol + name,
 * inline sparkline, price, and a directional change pill. Composes Avatar,
 * Sparkline and ChangePill.
 */
function PositionRow({
  symbol,
  name,
  price,
  change = 0,
  series = null,
  logo = null,
  tone = 'sand',
  onClick = null,
  style = {},
  ...rest
}) {
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick || undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px',
      borderRadius: 'var(--r-lg)',
      background: 'var(--surface-card)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) e.currentTarget.style.background = 'var(--surface-sunk)';
    },
    onMouseLeave: e => {
      if (interactive) e.currentTarget.style.background = 'var(--surface-card)';
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: logo,
    initials: symbol.slice(0, 2).toUpperCase(),
    tone: tone,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      fontSize: 15,
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-snug)'
    }
  }, symbol), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name)), series && /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: series,
    width: 84,
    height: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      minWidth: 92
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 15,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.ChangePill, {
    value: change,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { PositionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/PositionRow.jsx", error: String((e && e.message) || e) }); }

// components/trading/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mir Stat — a labelled metric: eyebrow label, large value, optional delta.
 * The workhorse for portfolio value, P&L, buying power, etc.
 */
function Stat({
  label,
  value,
  delta = null,
  deltaFormat = 'percent',
  size = 'md',
  align = 'left',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 22,
    md: 30,
    lg: 42
  };
  const vSize = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'right' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      fontSize: vSize,
      lineHeight: 1,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), delta !== null && /*#__PURE__*/React.createElement(__ds_scope.ChangePill, {
    value: delta,
    format: deltaFormat,
    size: "sm"
  }));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AssetScreen.jsx
try { (() => {
// Mir UI kit — Asset detail + order ticket
function AssetScreen({
  symbol = 'AAPL',
  onBack = () => {}
}) {
  const {
    Stat,
    ChangePill,
    Sparkline,
    Button,
    BuySellToggle,
    IconButton,
    Badge,
    Avatar
  } = window.MirDesignSystem_e087fa;
  const D = window.MIR_DATA;
  const a = D.asset;
  const [side, setSide] = React.useState('buy');
  const [shares, setShares] = React.useState(10);
  const est = (parseFloat(a.price) * shares).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  useLucide();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-shell)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 18px 8px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    size: "sm",
    label: "back",
    onClick: onBack,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left",
      s: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: a.symbol.slice(0, 2),
    tone: "sand",
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, a.symbol)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    size: "sm",
    label: "watch",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "star",
      s: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "$", a.price), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(ChangePill, {
    value: a.change,
    size: "lg"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--r-xl)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)',
      padding: '18px 14px 10px',
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: a.series,
    width: 314,
    height: 120,
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 12,
      justifyContent: 'center'
    }
  }, ['1D', '1W', '1M', '3M', '1Y', 'All'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '6px 12px',
      borderRadius: 'var(--r-pill)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      color: i === 0 ? 'var(--white)' : 'var(--text-secondary)',
      background: i === 0 ? 'var(--surface-inverse)' : 'transparent'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px 8px',
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--r-xl)',
      padding: '18px 16px',
      marginBottom: 16
    }
  }, a.stats.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-primary)',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      padding: 18,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(BuySellToggle, {
    value: side,
    onChange: setSide
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '18px 2px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, "Shares"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShares(s => Math.max(1, s - 1)),
    style: stepBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "minus",
    s: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      fontWeight: 500,
      minWidth: 30,
      textAlign: 'center'
    }
  }, shares), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShares(s => s + 1),
    style: stepBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "plus",
    s: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 2px',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, "Estimated cost"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 500
    }
  }, "$", est)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: side === 'buy' ? 'primary' : 'dark',
    size: "lg",
    full: true,
    style: side === 'sell' ? {
      background: 'var(--down)',
      boxShadow: '0 10px 28px rgba(216,74,60,.3)'
    } : {}
  }, side === 'buy' ? 'Buy' : 'Sell', " ", a.symbol)))));
}
const stepBtn = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-card)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-primary)'
};
window.AssetScreen = AssetScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AssetScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
// Mir UI kit — Home / Portfolio dashboard
function HomeScreen({
  onAsset = () => {},
  onNav = () => {}
}) {
  const {
    Stat,
    PositionRow,
    ChangePill,
    Sparkline,
    IconButton,
    Avatar,
    Badge
  } = window.MirDesignSystem_e087fa;
  const D = window.MIR_DATA;
  useLucide();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-shell)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 22px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: D.user.initials,
    tone: "dark",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Good morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, D.user.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    size: "sm",
    label: "search",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "search",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    size: "sm",
    label: "alerts",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "bell",
      s: 18
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--r-2xl)',
      overflow: 'hidden',
      background: 'var(--surface-inverse)',
      padding: '22px 22px 18px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SunOrb, {
    size: 180,
    style: {
      position: 'absolute',
      right: -50,
      top: -50,
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-300)'
    }
  }, "Portfolio value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 40,
      fontWeight: 500,
      color: 'var(--text-on-dark)',
      letterSpacing: '-0.02em',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, D.portfolio.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ChangePill, {
    value: D.portfolio.change,
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--ink-300)'
    }
  }, D.portfolio.changeAbs, " today")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: D.portfolio.series,
    width: 320,
    height: 56,
    color: "var(--orange-400)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      marginBottom: 20
    }
  }, [['Deposit', 'plus'], ['Trade', 'arrow-left-right'], ['Earn', 'percent'], ['Send', 'arrow-up-right']].map(([l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 'var(--r-lg)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, l)))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Holdings",
    action: "See all"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      padding: 6,
      boxShadow: 'var(--shadow-card)',
      marginBottom: 20
    }
  }, D.holdings.map((h, i) => /*#__PURE__*/React.createElement(PositionRow, {
    key: h.symbol,
    symbol: h.symbol,
    name: h.name,
    price: h.price,
    change: h.change,
    series: h.series,
    tone: h.tone,
    onClick: () => onAsset(h.symbol)
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Watchlist",
    action: "Edit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      paddingBottom: 6,
      margin: '0 -18px',
      padding: '0 18px 6px'
    }
  }, D.watchlist.map(w => /*#__PURE__*/React.createElement("button", {
    key: w.symbol,
    onClick: () => onAsset(w.symbol),
    style: {
      flexShrink: 0,
      width: 138,
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      padding: 14,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: w.symbol.slice(0, 2),
    tone: w.tone,
    size: 30
  }), /*#__PURE__*/React.createElement(ChangePill, {
    value: w.change,
    size: "sm",
    variant: "bare"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)',
      marginTop: 12
    }
  }, w.symbol), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, w.price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: w.series,
    width: 110,
    height: 26
  })))))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home",
    onNav: onNav
  }));
}
function SectionHead({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-semibold) 19px/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--brand)'
    }
  }, action));
}
window.HomeScreen = HomeScreen;
window.SectionHead = SectionHead;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/LoginScreen.jsx
try { (() => {
// Mir UI kit — Login screen (echoes the reference glass login card)
function LoginScreen({
  onLogin = () => {}
}) {
  const {
    Card,
    Input,
    IconButton,
    Button,
    Badge
  } = window.MirDesignSystem_e087fa;
  useLucide();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--grad-paper)'
    }
  }, /*#__PURE__*/React.createElement(SunOrb, {
    size: 300,
    style: {
      position: 'absolute',
      right: -80,
      top: -70,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -60,
      bottom: 120,
      width: 150,
      height: 150,
      borderRadius: '50%',
      background: 'var(--sand-deep)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mir-logo.svg",
    alt: "Mir",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Sign up")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 16px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    pad: "lg",
    radius: "2xl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-semibold) 32px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-primary)'
    }
  }, "Log in"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 16px',
      borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--white)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "apple",
    s: 16
  }), " Apple")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "at-sign",
      s: 18
    }),
    placeholder: "e-mail address",
    defaultValue: "sasha@mir.app",
    surface: "card"
  }), /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "lock",
      s: 18
    }),
    type: "password",
    placeholder: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    surface: "card",
    trailing: /*#__PURE__*/React.createElement("button", {
      style: {
        border: 'none',
        background: 'var(--surface-card)',
        borderRadius: 'var(--r-pill)',
        padding: '7px 13px',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        color: 'var(--text-secondary)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, "I forgot")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '12px/1.45 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 200
    }
  }, "Investing involves risk, including loss of principal. Mir is a demo, not a brokerage."), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    size: "lg",
    label: "Log in",
    onClick: onLogin,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 22,
      color: "var(--text-on-dark)"
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 26px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    pad: "lg",
    radius: "xl",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, "New"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-300)'
    }
  }, "this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 20px/1.2 var(--font-sans)',
      color: 'var(--text-on-dark)',
      marginTop: 8
    }
  }, "Options trading")), /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-up-right",
    s: 26,
    color: "var(--orange-400)"
  }))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// Mir UI kit — mock market data (illustrative, not live)
window.MIR_DATA = {
  user: {
    name: 'Sasha',
    initials: 'SK',
    buyingPower: '$12,900.00'
  },
  portfolio: {
    value: '$48,210.55',
    change: 2.41,
    changeAbs: '+$1,134.20',
    series: [44200, 44980, 44610, 45320, 45110, 46050, 46720, 47180, 46980, 47640, 48010, 48210]
  },
  holdings: [{
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: '$182.40',
    change: 1.24,
    tone: 'sand',
    series: [178, 179, 178.4, 180, 181, 180.6, 182, 182.4],
    qty: '24 sh',
    value: '$4,377.60'
  }, {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: '$118.05',
    change: 4.10,
    tone: 'sand',
    series: [108, 110, 109, 112, 114, 116, 117, 118],
    qty: '40 sh',
    value: '$4,722.00'
  }, {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: '$201.10',
    change: -3.08,
    tone: 'down',
    series: [212, 210, 211, 206, 205, 204, 202, 201.1],
    qty: '12 sh',
    value: '$2,413.20'
  }],
  watchlist: [{
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$67,420',
    change: 0.92,
    tone: 'brand',
    series: [65000, 65800, 66200, 65900, 66800, 67100, 67420]
  }, {
    symbol: 'SPY',
    name: 'S&P 500 ETF',
    price: '$548.20',
    change: 0.31,
    tone: 'sand',
    series: [544, 545, 544.5, 546, 547, 547.6, 548.2]
  }, {
    symbol: 'AMD',
    name: 'Adv. Micro Devices',
    price: '$159.80',
    change: -1.45,
    tone: 'down',
    series: [164, 163, 162, 161, 160.5, 160, 159.8]
  }, {
    symbol: 'ETH',
    name: 'Ethereum',
    price: '$3,540',
    change: 2.18,
    tone: 'brand',
    series: [3420, 3460, 3440, 3500, 3520, 3535, 3540]
  }],
  asset: {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: '182.40',
    change: 1.24,
    changeAbs: '+$2.23',
    series: [176, 177, 176.5, 178, 179, 178.6, 180, 181, 180.4, 181.8, 182.1, 182.4],
    stats: [['Open', '180.20'], ['High', '183.05'], ['Low', '179.88'], ['Vol', '52.4M'], ['Mkt cap', '2.81T'], ['P/E', '29.6']]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/kit.jsx
try { (() => {
// Mir UI kit — shared scaffolding (phone frame, nav, icon helper, sun orb)
// Stateless inline-SVG icon built from lucide's registry (no DOM replacement).
const _pascal = n => n.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
function Icon({
  n,
  s = 22,
  color = 'currentColor',
  sw = 2,
  style = {}
}) {
  const html = React.useMemo(() => {
    const reg = window.lucide && (window.lucide.icons || window.lucide) || {};
    const node = reg[_pascal(n)];
    if (!node) return '';
    const children = (Array.isArray(node) ? node : node.toSvg ? [] : []).map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ')} />`).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${children}</svg>`;
  }, [n, s, color, sw]);
  return React.createElement('span', {
    style: {
      width: s,
      height: s,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
function useLucide() {/* no-op: icons render inline now */}

// The glossy sun orb — Mir's hero motif
function SunOrb({
  size = 220,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--grad-sun)',
      boxShadow: 'var(--shadow-float)',
      flexShrink: 0,
      ...style
    }
  });
}
function StatusBar({
  dark = false
}) {
  const c = dark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 26px 6px',
      color: c,
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "signal",
    s: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "wifi",
    s: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    n: "battery-full",
    s: 18
  })));
}
function BottomNav({
  active = 'home',
  onNav = () => {}
}) {
  const items = [['home', 'house'], ['markets', 'chart-candlestick'], ['trade', 'arrow-left-right'], ['wallet', 'wallet'], ['profile', 'user']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '12px 14px calc(12px + env(safe-area-inset-bottom))',
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      borderTop: '1px solid var(--divider)'
    }
  }, items.map(([key, ic]) => {
    const on = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNav(key),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        color: on ? 'var(--brand)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: ic,
      s: 22
    }));
  }));
}

// Phone shell — fixed 390x844 device frame
function Phone({
  children,
  bg = 'var(--surface-shell)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 46,
      background: bg,
      boxShadow: '0 40px 90px rgba(40,28,16,0.30), inset 0 0 0 10px #15110D, inset 0 0 0 11px #2A241D',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, children);
}
Object.assign(window, {
  Icon,
  useLucide,
  SunOrb,
  StatusBar,
  BottomNav,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.BuySellToggle = __ds_scope.BuySellToggle;

__ds_ns.ChangePill = __ds_scope.ChangePill;

__ds_ns.PositionRow = __ds_scope.PositionRow;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Stat = __ds_scope.Stat;

})();
