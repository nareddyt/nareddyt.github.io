(function($) {

  $(window).load(function () {
    $('#linkedin-badge').html('' +
      '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="tejasvinareddyteju">' +
      '    <a class="LI-simple-link" href=\'https://www.linkedin.com/in/tejasvinareddyteju?trk=profile-badge\'>' +
      '        Tejasvi Nareddy' +
      '    </a>' +
      '</div>\n');

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