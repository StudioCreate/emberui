"use strict";
var Ember = require("ember")["default"] || require("ember");
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("inputId")
  },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "placeholder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"eui-component-wrapper\">\n  ");
  stack1 = helpers['if'].call(depth0, "placeholderVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("type"),
    'value': ("value"),
    'name': ("name"),
    'disabled': ("disabled"),
    'maxlength': ("maxlength"),
    'tabindex': ("tabindex"),
    'action': ("enter")
  },hashTypes:{'type': "ID",'value': "ID",'name': "ID",'disabled': "ID",'maxlength': "ID",'tabindex': "ID",'action': "STRING"},hashContexts:{'type': depth0,'value': depth0,'name': depth0,'disabled': depth0,'maxlength': depth0,'tabindex': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});