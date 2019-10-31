import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";
//Thu Oct 31 2019 14:28:26 GMT-0400 (Eastern Daylight Time)
import 'script-loader!@sencha/ext-elements-all/ext/ext.all';
import 'script-loader!@sencha/ext-elements-all/ext/css.all';
import { doProp, filterProp, isMenu, isRenderercell, isParentGridAndChildColumn, isTooltip, isPlugin } from './util.js';

var EleBaseComponent =
/*#__PURE__*/
function (_HTMLElement) {
  _inheritsLoose(EleBaseComponent, _HTMLElement);

  function EleBaseComponent(properties, events) {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.properties = properties;
    _this.events = events;
    _this.eventnames = [];

    _this.events.forEach(function (event) {
      _this.eventnames.push(event.name);
    });

    _this.A = {};
    _this.A.CHILDREN = [];
    _this.A.ITEMS = [];
    _this.A.o = {};
    _this.attributeObjects = {};
    _this.base = EleBaseComponent; // this.newDiv = document.createElement('div');
    // //var textnode = document.createTextNode(this.xtype);
    // //this.newDiv.appendChild(textnode)
    // this.insertAdjacentElement('beforebegin', this.newDiv);

    return _this;
  }

  var _proto = EleBaseComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    var _this2 = this;

    //console.log('connectedCallback')
    //console.log(this.xtype)
    var x = this.xtype;

    var distinct = function distinct(value, index, self) {
      return self.indexOf(value) === index;
    };

    var properties2 = [];
    var arrayLength = this.properties.length;

    for (var i = 0; i < arrayLength; i++) {
      properties2.push(this.properties[i]);
    }

    var p2 = properties2.filter(distinct);
    p2.forEach(function (prop) {
      doProp(_this2, prop);
    });
    EleBaseComponent.elementcount++;
    EleBaseComponent.elements.push(this); //console.log('added: ' + this.tagName + ': elementcount is now ' + EleBaseComponent.elementcount);

    for (var _iterator = this.children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var child = _ref;

      if (child.nodeName.substring(0, 4) !== 'EXT-') {
        var el = Ext.get(child);
        var w = Ext.create({
          xtype: 'widget',
          element: el
        });
        this.A.ITEMS.push(w);
      } else {
        var g = {};
        g.type = 'ext';
        this.A.ITEMS.push(g);
      }
    }

    this.xtype = x;
  };

  _proto.parsedCallback = function parsedCallback() {
    this.initMe();
  } //******* base start */
  ;

  _proto.initMe = function initMe() {
    this.newParsedCallback();
    return; //console.log('');console.log('*** initMe for ' + this.currentElName);
    //this.createRawChildren();
    //this.setParentType();
    //this.setDirection();
    //this.figureOutA();
    //this.createProps(this.properties, this.events);
    //this.createExtComponent();
  };

  _proto.newParsedCallback = function newParsedCallback() {
    var me = this;
    this.newCreateProps(this.properties, this.events);

    if (this.parentNode != null && this.parentNode.nodeName.substring(0, 4) !== 'EXT-') {
      this.A.o.renderTo = this; //.parentNode;
      //this.A.o.renderTo = this.newDiv.parentNode;
      //this.newDiv.parentNode.removeChild(this.newDiv);
    }

    this.newDoExtCreate(me, this.A.o['viewport']);
  };

  _proto.newCreateProps = function newCreateProps(properties) {
    var listenersProvided = false;
    var o = {};
    o.xtype = this.xtype;

    if (this['config'] !== null) {
      Ext.apply(o, this['config']);
    }

    if (true == this.fitToParent) {
      o.height = '100%';
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      if (this.getAttribute(property) !== null) {
        if (property == 'renderer') {
          var cellxtype = '';

          try {
            Ext.create({
              xtype: 'reactcell'
            });
            cellxtype = 'reactcell';
          } catch (e) {
            cellxtype = 'elementcell';
          }

          o.cell = {};
          o.cell.xtype = cellxtype;

          if (this.attributeObjects['renderer'] != undefined) {
            o.renderer = this.attributeObjects['renderer'];
          } else {
            o.renderer = eval(this['renderer']);
          }
        } else if (this.getAttribute(property) == 'object') {
          o[property] = this.attributeObjects[property];
        } else if (property == 'handler') {
          var functionString = this.getAttribute(property);
          o[property] = eval(functionString + '(event)'); ////error check for only 1 dot
          //var r = functionString.split('.');
          //var obj = r[0];
          //var func = r[1];
          //o[property] = window[obj][func];
        } // else if ((o.xtype === 'cartesian' || o.xtype === 'polar') && property === 'layout') {
        // }
        else if (property == 'listeners' && this[property] != undefined) {
            o[property] = this[property];
            listenersProvided = true;
          } else if (property == 'config') {
            var configs = JSON.parse(this.getAttribute(property));

            for (var configProp in configs) {
              if (configs.hasOwnProperty(configProp)) {
                //o[configProp] = filterProp(configs[configProp], property, this);
                o[configProp] = filterProp(this.getAttribute(configs[configProp]), configProp, this);
              }
            }
          } else if (this[property] != undefined && property != 'listeners' && property != 'config' && property != 'handler' && property != 'fitToParent') {
            o[property] = filterProp(this.getAttribute(property), property, this);
          } // else {
        //     o[property] = filterProp(this.getAttribute(property));
        // }

      }

      if (!listenersProvided) {
        o.listeners = {};
        var me = this;
        this.events.forEach(function (event, index, array) {
          me.setEvent(event, o, me);
        });
      }
    }

    this.A.o = o;
  };

  _proto.newDoExtCreate = function newDoExtCreate(me, isApplication) {
    Ext.onReady(function () {
      //console.log(me.A.o)
      me.A.ext = Ext.create(me.A.o);
      me.A.CHILDREN.forEach(function (child) {
        me.addTheChild(me.A.ext, child);
      });

      if (me.parentNode != null && me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
        if (me.parentNode.A.ext !== undefined) {
          me.addTheChild(me.parentNode.A.ext, me.A.ext);
        } else {
          me.parentNode.A.CHILDREN.push(me.A.ext);
        }
      }

      if (isApplication) {
        Ext.application({
          name: 'MyEWCApp',
          launch: function launch() {
            Ext.Viewport.add([me.A.ext]);
          }
        });
      }

      EleBaseComponent.elementcount--; //console.log('reduced: ' + me.tagName + ': elementcount reduced to ' + EleBaseComponent.elementcount)

      if (EleBaseComponent.elementcount == 0) {
        //console.log('done');
        //console.log(EleBaseComponent.elements);
        EleBaseComponent.elementsprior = [].concat(EleBaseComponent.elements);
        EleBaseComponent.elements = []; //console.log(EleBaseComponent.elementsprior);

        var allExt = [];
        var cmpObj = {};
        EleBaseComponent.elementsprior.forEach(function (element) {
          //console.dir(element)
          if (element.A != undefined) {
            for (var i = 0; i < element.A.ITEMS.length; i++) {
              //console.log(element.A.ITEMS[i])
              if (element.A.ITEMS[i].xtype == 'widget') {
                element.addTheChild(element.A.ext, element.A.ITEMS[i], i);
              }
            }
          }

          if (element.getAttribute('extname') != undefined) {
            var o = {}; //o.extname = element.getAttribute('extname');
            //o.ext = element.A.ext;

            o.cmp = element.A.ext; //allExt.push(o);

            cmpObj[element.getAttribute('extname')] = element.A.ext;
          }
        }); //console.log(EleBaseComponent.elementsprior)

        EleBaseComponent.elementsprior.forEach(function (element) {
          //console.dir(element)
          element.dispatchEvent(new CustomEvent('ready', {
            detail: {
              cmp: element.A.ext,
              //allCmp: allExt,
              //ext: element.A.ext,
              //allExt: allExt,
              cmpObj: cmpObj
            }
          }));
        });
      }
    });
  };

  _proto.addTheChild = function addTheChild(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype; //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')

    if (this.A.ext.initialConfig.align != undefined) {
      if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button');
        return;
      }
    }

    switch (true) {
      case isMenu(childxtype):
        parentCmp.setMenu(childCmp);
        break;

      case isRenderercell(childxtype):
        parentCmp.setCell(childCmp);
        break;

      case isParentGridAndChildColumn(parentxtype, childxtype):
        if (location == null) {
          parentCmp.addColumn(childCmp);
        } else {
          var regCols = 0;

          if (parentCmp.registeredColumns != undefined) {
            regCols = parentCmp.registeredColumns.length;
          }

          if (parentxtype == 'grid') {
            parentCmp.insertColumn(location + regCols, childCmp);
          } else {
            parentCmp.insert(location + regCols, childCmp);
          }
        }

        break;

      case isTooltip(childxtype):
        parentCmp.setTooltip(childCmp);
        break;

      case isPlugin(childxtype):
        parentCmp.setPlugin(childCmp);
        break;

      default:
        if (location == null) {
          parentCmp.add(childCmp);
        } else {
          parentCmp.insert(location, childCmp);
        }

    }
  };

  _proto.setEvent = function setEvent(eventparameters, o, me) {
    o.listeners[eventparameters.name] = function () {
      var eventname = eventparameters.name; //console.log('in event: ' + eventname + ' ' + o.xtype)

      var parameters = eventparameters.parameters;
      var parms = parameters.split(',');
      var args = Array.prototype.slice.call(arguments);
      var event = {};

      for (var i = 0, j = parms.length; i < j; i++) {
        event[parms[i]] = args[i];
      }

      me.dispatchEvent(new CustomEvent(eventname, {
        detail: event
      }));
    };
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attr, oldVal, newVal) {
    if (/^on/.test(attr)) {
      if (newVal) {
        this.addEventListener(attr.slice(2), function (event) {
          var functionString = newVal;
          eval(functionString + '(event)'); //// todo: error check for only 1 dot
          //var r = functionString.split('.');
          //var obj = r[0];
          //var func = r[1];
          //if (obj && func) {
          //window[obj][func](event);
          //}
        });
      } else {//delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    } else {
      var ischanged;

      if (this.A) {
        if (this.A.ext != undefined) {
          ischanged = true;
          var method = 'set' + attr[0].toUpperCase() + attr.substring(1);

          if (method != 'setExtname') {
            //console.log(method)
            this.A.ext[method](newVal);
          }
        } else {
          ischanged = false;
        }
      } //console.log('attr: ' + attr + ', changed is ' + ischanged)
      //if (this.A.ext === undefined) {
      //    //mjg ??
      //}
      //else {
      //    //mjg check if this method exists for this component
      //    var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
      //    this.A.ext[method](newVal)
      //}

    }
  } //extendObject(obj, src) {
  //    if (obj == undefined) {obj = {}}
  //    for (var key in src) {
  //        if (src.hasOwnProperty(key)) obj[key] = src[key];
  //    }
  //    return obj;
  //}
  //extendArray(obj, src) {
  //    if (obj == undefined) {obj = []}
  //    Array.prototype.push.apply(obj,src);
  //    return obj;
  //}
  ;

  _proto.disconnectedCallback = function disconnectedCallback() {
    //console.log('ExtBase disconnectedCallback ' + this.A.ext.xtype)
    Ext.destroy(this.A.ext);
  };

  _proto.filterPropertyToDelete = function filterPropertyToDelete(propertyValue) {
    try {
      var parsedProp = JSON.parse(propertyValue);

      if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp) || !isNaN(parsedProp) && parsedProp !== 0) {
        return parsedProp;
      } else {
        return propertyValue;
      }
    } catch (e) {
      return propertyValue;
    }
  };

  _proto.newDoExtCreateNoFilesToDelete = function newDoExtCreateNoFilesToDelete(me, isApplication) {
    //if (Ext != undefined) {
    if (window['Ext'] != undefined) {
      EleBaseComponent.isLoading = true;
      EleBaseComponent.isDone = true;
    }

    if (EleBaseComponent.isLoading == false) {
      EleBaseComponent.isLoading = true;
      var csstag = document.createElement("script");
      csstag.type = "text/javascript";
      csstag.src = "../ext/css.all.js";

      csstag.onload = function () {
        var exttag = document.createElement("script");
        exttag.type = "text/javascript";
        exttag.src = "../ext/ext.all.js";

        exttag.onload = function () {
          EleBaseComponent.isDone = true;
        };

        document.getElementsByTagName('head')[0].appendChild(exttag);
      };

      document.getElementsByTagName('head')[0].appendChild(csstag);
    }

    var myVar = setInterval(function () {
      if (EleBaseComponent.isDone === true) {
        clearInterval(myVar);
        Ext.onReady(function () {
          //console.log(me.A.o)
          me.A.ext = Ext.create(me.A.o);
          me.A.CHILDREN.forEach(function (child) {
            me.addTheChild(me.A.ext, child);
          }); //console.dir(me)

          if (me.parentNode != null && me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
            if (me.parentNode.A.ext !== undefined) {
              me.addTheChild(me.parentNode.A.ext, me.A.ext);
            } else {
              me.parentNode.A.CHILDREN.push(me.A.ext);
            }
          }

          if (isApplication) {
            Ext.application({
              name: 'MyEWCApp',
              launch: function launch() {
                Ext.Viewport.add([me.A.ext]);
              }
            });
          }

          EleBaseComponent.elementcount--; //console.log('reduced: ' + me.tagName + ': elementcount reduced to ' + EleBaseComponent.elementcount)

          if (EleBaseComponent.elementcount == 0) {
            //console.log('done');
            //console.log(EleBaseComponent.elements);
            EleBaseComponent.elementsprior = [].concat(EleBaseComponent.elements);
            EleBaseComponent.elements = []; //console.log(EleBaseComponent.elementsprior);

            var allExt = [];
            EleBaseComponent.elementsprior.forEach(function (element) {
              //console.dir(element)
              if (element.A != undefined) {
                for (var i = 0; i < element.A.ITEMS.length; i++) {
                  //console.log(element.A.ITEMS[i])
                  if (element.A.ITEMS[i].xtype == 'widget') {
                    //console.log('do it for ' + i)
                    //console.log(me)
                    //console.dir(element)
                    //console.log(me.A.ext)
                    //console.log(element.A.ITEMS[i])
                    //element.A.ext.insert(i,element.A.ITEMS[i])
                    element.addTheChild(element.A.ext, element.A.ITEMS[i], i);
                  }
                }
              } //console.log('after loop')


              if (element.getAttribute('extname') != undefined) {
                var o = {};
                o.extname = element.getAttribute('extname');
                o.ext = element.A.ext;
                o.cmp = element.A.ext;
                allExt.push(o);
              }
            }); //console.log(EleBaseComponent.elementsprior)

            EleBaseComponent.elementsprior.forEach(function (element) {
              //console.dir(element)
              element.dispatchEvent(new CustomEvent('ready', {
                detail: {
                  cmp: element.A.ext,
                  allCmp: allExt,
                  ext: element.A.ext,
                  allExt: allExt
                }
              }));
            });
          }
        });
      }
    }, 0);
  };

  return EleBaseComponent;
}(_wrapNativeSuper(HTMLElement));

export { EleBaseComponent as default };
EleBaseComponent.elementcount = 0;
EleBaseComponent.elements = [];
EleBaseComponent.elementsprior = [];
EleBaseComponent.isLoading = false;
EleBaseComponent.isDone = false;
EleBaseComponent.count = 0;
EleBaseComponent.DIRECTION = ''; //EleBaseComponent.getCmp = function getCmp(event, value) {
//    var array = event.detail.allCmp;
//    for (var i = 0; i < array.length; i++) {
//        if (array[i]['extname'] === value) {
//        return array[i].ext;
//        }
//    }
//    return null;
//};
//EleBaseComponent.extendArray = function(obj, src) {
//    if (obj == undefined) {obj = []}
//    Array.prototype.push.apply(obj,src);
//    return obj;
//}