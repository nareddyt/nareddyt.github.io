(function($) {

  $(window).load(function () {
    $('#github-contributions').after('' +
      '<a href="https://github.com/nareddyt" target="_blank">\n' +
      '    <img src="https://ghchart.rshah.org/nareddyt" alt="nareddyt\'s Github Contributions" />\n' +
      '</a>');

    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-68008474-2', 'auto');
    ga('require', 'urlChangeTracker');
    ga('require', 'outboundLinkTracker', {
      events: ['click', 'auxclick', 'contextmenu']
    });
    ga('require', 'eventTracker', {
      events: ['click', 'auxclick', 'contextmenu']
    });
    ga('send', 'pageview', {
      'page': location.pathname
    });
  });

})(jQuery);