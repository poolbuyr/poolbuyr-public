// BugDrop widget loader — external file (not inline) so the SPA can ship a CSP
// without 'unsafe-inline' for script-src. Guarded so PasswordGate + the
// sessionStorage auto-load can't append the widget script twice.
(function () {
  if (window._bugdropLoaded) return;
  window._bugdropLoaded = true;
  window.loadBugDrop = function () {
    if (window._bugdropStarted) return;
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
  if (sessionStorage.getItem('poolbuyr_access_granted') === 'true') {
    window.loadBugDrop();
  }
})();
