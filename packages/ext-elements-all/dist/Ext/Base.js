import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import EleBaseComponent from '../ele-base.js';

var Ext_Base =
/*#__PURE__*/
function (_EleBaseComponent) {
  _inheritsLoose(Ext_Base, _EleBaseComponent);

  Ext_Base.PROPERTIES = function PROPERTIES() {
    return ['extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_Base.getProperties = function getProperties(properties) {
    return properties.concat(Ext_Base.PROPERTIES);
  };

  Ext_Base.getEvents = function getEvents(events) {
    return events.concat(Ext_Base.EVENTS);
  };

  _createClass(Ext_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = []; //for (var property in Ext_Base.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}
      //Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
      //    attrs.push('on' + eventparameter.name)
      //})

      Ext_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      }); //attrs.push('onready')

      return attrs;
    }
  }]);

  function Ext_Base(properties, events) {
    return _EleBaseComponent.call(this, properties.concat(Ext_Base.PROPERTIES()), events.concat(Ext_Base.EVENTS())) || this;
  }

  return Ext_Base;
}(EleBaseComponent);

export { Ext_Base as default };