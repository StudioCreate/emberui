"use strict";
var styleSupport = require("../mixins/style-support")["default"] || require("../mixins/style-support");
var animationsDidComplete = require("../mixins/animations-did-complete")["default"] || require("../mixins/animations-did-complete");
var modalBehaviour = require("../mixins/modal-behaviour")["default"] || require("../mixins/modal-behaviour");
var modalLayout = require("../templates/eui-modal")["default"] || require("../templates/eui-modal");
var modal;

modal = Em.Component.extend(styleSupport, animationsDidComplete, modalBehaviour, {
  layout: modalLayout,
  tagName: 'eui-modal',
  classNames: ['eui-modal'],
  classNameBindings: ['class'],
  "class": null,
  previousFocus: null,
  tabindex: 0,
  programmatic: false,
  isClosing: false,
  renderModal: false,
  open: Ember.computed('renderModal', function(key, value) {
    if (arguments.length === 2) {
      if (value) {
        this.set('renderModal', value);
      } else {
        if (this.get('renderModal')) {
          this.hide();
        }
      }
      return value;
    } else {
      value = this.get('renderModal');
      return value;
    }
  }),
  didInsertElement: function() {
    if (this.get('programmatic')) {
      this.set('previousFocus', $(document.activeElement));
      this.$().focus();
      return $('body').addClass('eui-modal-open');
    }
  },
  didOpenModal: (function() {
    if (this.get('renderModal')) {
      this.$().focus();
      return $('body').addClass('eui-modal-open');
    }
  }).observes('renderModal'),
  hide: function() {
    this.set('isClosing', true);
    return this.animationsDidComplete().then((function(_this) {
      return function() {
        return _this.remove();
      };
    })(this));
  },
  remove: function() {
    var _ref;
    if ((_ref = this.get('previousFocus')) != null) {
      _ref.focus();
    }
    $('body').removeClass('eui-modal-open');
    if (this.get('programmatic')) {
      return this.destroy();
    } else {
      return this.setProperties({
        isClosing: false,
        renderModal: false
      });
    }
  },
  actions: {
    cancel: function(context) {
      this.sendAction('cancel', context);
      return this.hide();
    },
    accept: function(context) {
      this.sendAction('accept', context);
      return this.hide();
    }
  },
  keyDown: function(event) {
    if (event.keyCode === 9) {
      this.constrainTabNavigationToModal(event);
    }
    if (event.keyCode === 27) {
      this.sendAction('cancel');
      return this.hide();
    }
  }
});

modal.reopenClass({
  show: function(options) {
    if (options == null) {
      options = {};
    }
    options.renderModal = true;
    options.programmatic = true;
    modal = this.create(options);
    modal.container = modal.get('targetObject.container');
    modal.appendTo('body');
    return modal;
  }
});

exports["default"] = modal;