import { merge } from 'lodash';
import qs from 'mout/queryString';
import cookies from 'js-cookie';

const noop = () => {};

export default {
  options: {
    displayMessage: true
  },

  initialize(options) {
    this.options = merge({}, this.options, options);

    if (typeof console === 'undefined') {
      this.deadSeaScrolls();
      return;
    }

    this.origConsole = console;
    this.consoleEnabled = false;

    if (window && window.location) {
      if ((qs.contains(window.location.href, 'console') && qs.getParam(window.location.href, 'console')) || cookies.get('console') || /\/specs/.test(window.location.href)) {
        this.consoleEnabled = true;
        cookies.set('console', true, {domain: '.' + location.hostname.replace(/(www|m)?\./, '')});
      }
    }


    if (!this.consoleEnabled) {
      this.deadSeaScrolls();
    }
  },

  deadSeaScrolls() {
    if (this.options.displayMessage) {
      /* eslint-disable no-console */
      console.info('Console output is now supressed to enable add ?/&console=true to url');
      /* eslint-enable no-console */
    }

    window['console'] = {
      assert: noop
      , clear: noop
      , count: noop
      , debug: noop
      , dir: noop
      , dirxml: noop
      , error: noop
      , exception: noop
      , group: noop
      , groupCollapsed: noop
      , groupEnd: noop
      , info: noop
      , log: noop
      , profile: noop
      , profileEnd: noop
      , table: noop
      , time: noop
      , timeEnd: noop
      , timeStamp: noop
      , trace: noop
      , warn: noop
    };
  }
};
