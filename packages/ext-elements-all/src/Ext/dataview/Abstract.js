import Ext_Container from '../../Ext/Container.js';

export default class Ext_dataview_Abstract extends Ext_Container {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'associatedData',
'autoDestroy',
'autoSize',
'axisLock',
'bind',
'bodyCls',
'border',
'bottom',
'cardSwitchAnimation',
'centered',
'cls',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultType',
'deferEmptyText',
'deselectOnContainerClick',
'disabled',
'disableSelection',
'displayed',
'docked',
'draggable',
'emptyItemText',
'emptyState',
'emptyText',
'emptyTextDefaults',
'emptyTextProperty',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'inactiveChildTabIndex',
'inline',
'innerCls',
'instanceCls',
'itemButtonMode',
'itemCls',
'itemId',
'itemRipple',
'items',
'itemsFocusable',
'itemTpl',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'listeners',
'loadingHeight',
'loadingText',
'manageBorders',
'margin',
'markDirty',
'masked',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'padding',
'plugins',
'pressedDelay',
'publishes',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'right',
'ripple',
'scrollable',
'scrollDock',
'scrollToTopOnRefresh',
'selectable',
'selection',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'store',
'style',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'triggerCtEvent',
'triggerEvent',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'viewModel',
'weight',
'weighted',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'activate',parameters:'newActiveItem,sender,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:''},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'sender'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'sender,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,sender,newActiveItem'},
{name:'deselect',parameters:'sender,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'sender,event'},
{name:'focusenter',parameters:'sender,event'},
{name:'focusleave',parameters:'sender,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'sender,index,target,record,e'},
{name:'itemlongpress',parameters:'sender,index,target,record,e'},
{name:'itemmouseenter',parameters:'sender,index,target,record,e'},
{name:'itemmouseleave',parameters:'sender,index,target,record,e'},
{name:'itemsingletap',parameters:'sender,index,target,record,e'},
{name:'itemswipe',parameters:'sender,index,target,record,e'},
{name:'itemtap',parameters:'sender,index,target,record,e'},
{name:'itemtaphold',parameters:'sender,index,target,record,e'},
{name:'itemtouchcancel',parameters:'sender,index,target,record,e'},
{name:'itemtouchend',parameters:'sender,index,target,record,e'},
{name:'itemtouchmove',parameters:'sender,index,target,record,e'},
{name:'itemtouchstart',parameters:'sender,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'sender,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'sender'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'sender,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'sender,selected'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'sender'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_dataview_Abstract.PROPERTIES());
        return Ext_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_dataview_Abstract.EVENTS());
        return Ext_Container.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_dataview_Abstract.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_dataview_Abstract.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_dataview_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_dataview_Abstract.PROPERTIES()),
            events.concat(Ext_dataview_Abstract.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
