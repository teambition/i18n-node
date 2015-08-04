/*jslint nomen: true, undef: true, sloppy: true, white: true, stupid: true, passfail: false, node: true, plusplus: true, indent: 2 */

// now with coverage suport
var i18n = process.env.EXPRESS_COV ? require('../i18n-cov') : require('../i18n'),
  should = require("should");

describe('Object Notation', function () {

  beforeEach(function () {
    i18n.configure({
      locales: ['en', 'de'],
      directory: './locales',
      register: global,
      updateFiles:false,
      objectNotation:false
    });
  });

  describe('Date/Time patterns 2', function () {
    it('should return en formatting as expected 2', function () {
      i18n.setLocale('en');
      should.equal(__('format.date.notation'), 'MM/DD/YYYY');
      should.equal(__('format.time.notation'), 'h:mm:ss a');
    });

    it('should return de formatting as expected 2', function () {
      should.equal(__({ phrase: 'format.date.notation', locale: 'de'}), 'DD.MM.YYYY');
      should.equal(__({ phrase: 'format.time.notation', locale: 'de'}), 'h:mm:ss a');
    });
  });

});