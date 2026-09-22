document.querySelectorAll('[data-tabs]').forEach(function (group) {
  var buttons = group.querySelectorAll('.tab-btn');
  var panels = group.querySelectorAll('[data-panel]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-tab');

      buttons.forEach(function (b) {
        b.setAttribute('aria-selected', String(b === button));
      });

      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-panel') !== target;
      });
    });
  });
});
