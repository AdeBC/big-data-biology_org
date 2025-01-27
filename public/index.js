/** @typedef {{load: (Promise<unknown>); flags: (unknown)}} ElmPagesInit */

/** @type ElmPagesInit */
export default {
  load: async function (elmLoaded) {
    const app = await elmLoaded;
    var twt = document.getElementById('twitter-injection-site');
    if (twt) {
        var sc = document.createElement('script');
        sc.src = 'https://platform.twitter.com/widgets.js';
        sc.setAttribute('async', true);
        sc.setAttribute('charset', 'utf-8');
        twt.appendChild(sc);
    }

    sc = document.createElement('script');
    sc.setAttribute('src', "https://www.google-analytics.com/analytics.js");
    sc.setAttribute('async', true);
    document.getElementById('google-injection-site').appendChild(sc);

    sc = document.createElement('script');

    window.dataLayer = window.dataLayer || [];

    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};
    ga.l = +new Date;
    ga('create', 'UA-176414600-1', 'auto');
    ga('send', 'pageview');

    app.ports.updatePath.subscribe(function(path) {
        ga('set', 'page', '/'+path);
        ga('send', 'pageview');
    });
  },
  flags: function () {
    return "You can decode this in Shared.elm using Json.Decode.string!";
  },
};
