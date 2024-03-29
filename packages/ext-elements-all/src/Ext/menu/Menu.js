import Ext_Panel from '../../Ext/Panel.js';

export default class Ext_menu_Menu extends Ext_Panel {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'align',
'alignSelf',
'allowFocusingDisabledChildren',
'allowOtherMenus',
'alwaysOnTop',
'anchor',
'anchorPosition',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoHide',
'autoSize',
'axisLock',
'bbar',
'bind',
'bodyBorder',
'bodyCls',
'bodyPadding',
'bodyStyle',
'border',
'bottom',
'buttonAlign',
'buttons',
'buttonToolbar',
'cardSwitchAnimation',
'centered',
'closable',
'closeAction',
'closeToolText',
'cls',
'collapsed',
'collapsible',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultToolWeights',
'defaultType',
'disabled',
'displayed',
'docked',
'draggable',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'groups',
'header',
'headerPosition',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'icon',
'iconAlign',
'iconCls',
'id',
'ignoreParentClicks',
'inactiveChildTabIndex',
'indented',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'lbar',
'left',
'listeners',
'manageBorders',
'margin',
'masked',
'maxHeight',
'maxWidth',
'minButtonWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'mouseLeaveDelay',
'name',
'nameable',
'nameHolder',
'padding',
'plugins',
'publishes',
'rbar',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'resizable',
'right',
'ripple',
'scrollable',
'separator',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'standardButtons',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'tbar',
'title',
'titleAlign',
'titleCollapse',
'toFrontOnShow',
'toolDefaults',
'tools',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
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
{name:'add',parameters:'sender,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'sender'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'sender'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'sender,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'sender'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'sender,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'sender'},
{name:'deactivate',parameters:'oldActiveItem,sender,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'sender'},
{name:'drawershow',parameters:'sender'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'sender,event'},
{name:'focusenter',parameters:'sender,event'},
{name:'focusleave',parameters:'sender,event'},
{name:'fullscreen',parameters:'sender'},
{name:'groupchange',parameters:'menu,groupName,newValue,oldValue'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'sender,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'sender,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'sender,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'sender,context'},
{name:'resizedragcancel',parameters:'sender,context'},
{name:'resizedragend',parameters:'sender,context'},
{name:'resizedragstart',parameters:'sender,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'sender'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_menu_Menu.PROPERTIES());
        return Ext_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_menu_Menu.EVENTS());
        return Ext_Panel.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'menu'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_menu_Menu.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_menu_Menu.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_menu_Menu.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_menu_Menu.PROPERTIES()),
            events.concat(Ext_menu_Menu.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
