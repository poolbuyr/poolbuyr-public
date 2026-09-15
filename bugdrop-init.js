// BugDrop widget loader — external file (not inline) so the SPA can ship a CSP
// without 'unsafe-inline' for script-src. Guarded so PasswordGate can't append
// the widget script twice.
(function () {
  if (window._bugdropLoaded) return;
  window._bugdropLoaded = true;
  window.loadBugDrop = function () {
    if (window._bugdropStarted) return;
    // Never on the vendor surface. Those pages are what a merchant sees when
    // they are evaluating us — and `/vendor/embed` is rendered in an iframe on
    // their own storefront, where this launcher would float a "Suggest" button
    // over their shop's pooling UI (a report captured in a third-party frame is
    // misattributed anyway). A plain prefix test: every /vendor route is
    // merchant-facing, and PasswordGate loads this on *every* route, so gating
    // on the single embed path let the demo and the guide keep the button.
    if (window.self !== window.top) return;
    if (window.location.pathname.indexOf('/vendor') === 0) return;
    window._bugdropStarted = true;
    // Mirror the i18n language resolution (profile → guest storage → browser)
    // so the floating widget matches the active UI language. i18next isn't
    // initialized at this point, so set both <html lang> and data-locale.
    var label = 'Suggest';
    var lang = 'en';
    try {
      var user = JSON.parse(localStorage.getItem('poolbuyr_user') || 'null');
      var saved = localStorage.getItem('poolbuyr_lang');
      lang = (user && user.language) || saved || (navigator.language || '');
      if (lang === 'nl' || (typeof lang === 'string' && lang.toLowerCase().startsWith('nl'))) {
        lang = 'nl';
        label = 'Suggesties';
      } else {
        lang = 'en';
      }
    } catch (e) {}
    document.documentElement.lang = lang;
    var s = document.createElement('script');
    s.src = 'https://bugs.poolbuyr.com:444/widget.js';
    s.setAttribute('data-repo', 'poolbuyr/poolbuyr-public');
    s.setAttribute('data-theme', 'light');
    s.setAttribute('data-position', 'bottom-right');
    s.setAttribute('data-color', '#059669');
    s.setAttribute('data-icon', 'none');
    s.setAttribute('data-label', label);
    s.setAttribute('data-locale', lang);
    s.setAttribute('data-shadow', 'soft');
    s.setAttribute('data-welcome', 'never');
    document.body.appendChild(s);
  };
  // No auto-load here any more. This used to fire when the frontend-only gate
  // had written `poolbuyr_access_granted`; that key died with the client-side
  // gate and nothing has written it since, so the check was unreachable.
  // PasswordGate calls loadBugDrop() once the wall is actually open.
})();
