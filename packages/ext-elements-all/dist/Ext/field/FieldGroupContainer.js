import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container from '../../Ext/field/Container.js';

var Ext_field_FieldGroupContainer =
/*#__PURE__*/
function (_Ext_field_Container) {
  _inheritsLoose(Ext_field_FieldGroupContainer, _Ext_field_Container);

  Ext_field_FieldGroupContainer.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoFitErrors', 'autoSize', 'axisLock', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'cls', 'constrainAlign', 'container', 'contentEl', 'controller', 'data', 'dataType', 'defaultFieldValue', 'defaultListenerScope', 'defaults', 'defaultType', 'delegate', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'fieldDefaults', 'fieldsName', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'layout', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'vertical', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_field_FieldGroupContainer.EVENTS = function EVENTS() {
    return [{
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'sender'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'sender,newValue,oldValue'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'keyup',
      parameters: 'e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'mousedown',
      parameters: 'e'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'paste',
      parameters: 'e'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'sender'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_field_FieldGroupContainer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_FieldGroupContainer.PROPERTIES());
    return Ext_field_Container.getProperties(properties);
  };

  Ext_field_FieldGroupContainer.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_FieldGroupContainer.EVENTS());
    return Ext_field_Container.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'groupcontainer'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_FieldGroupContainer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Container.observedAttributes; //for (var property in Ext_field_FieldGroupContainer.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_FieldGroupContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_FieldGroupContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_FieldGroupContainer(properties, events) {
    return _Ext_field_Container.call(this, properties.concat(Ext_field_FieldGroupContainer.PROPERTIES()), events.concat(Ext_field_FieldGroupContainer.EVENTS())) || this;
  }

  var _proto = Ext_field_FieldGroupContainer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_FieldGroupContainer;
}(Ext_field_Container);

export { Ext_field_FieldGroupContainer as default };