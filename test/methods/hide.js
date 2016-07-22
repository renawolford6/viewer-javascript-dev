QUnit.test('methods#hide', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(2);

  var viewr = new Viewer(image, {
    shown: function () {
      this.viewer.hide();
    },

    hide: function () {
      assert.ok(this.viewer.isShown);
    },

    hidden: function () {
      assert.notOk(this.viewer.isShown);

      done();
    }
  });

  util.dispatchEvent(image, 'click');
});
