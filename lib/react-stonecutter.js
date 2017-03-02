(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-transition-group"), require("shallowequal"), require("react-motion"), require("enquire.js"), require("imagesloaded"), require("lodash.partition"), require("lodash.debounce"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-transition-group", "shallowequal", "react-motion", "enquire.js", "imagesloaded", "lodash.partition", "lodash.debounce"], factory);
	else if(typeof exports === 'object')
		exports["reactStonecutter"] = factory(require("react"), require("react-addons-transition-group"), require("shallowequal"), require("react-motion"), require("enquire.js"), require("imagesloaded"), require("lodash.partition"), require("lodash.debounce"));
	else
		root["reactStonecutter"] = factory(root["react"], root["react-addons-transition-group"], root["shallowequal"], root["react-motion"], root["enquire.js"], root["imagesloaded"], root["lodash.partition"], root["lodash.debounce"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.easings = exports.makeResponsive = exports.measureItems = exports.SpringGrid = exports.CSSGrid = exports.enterExitStyle = exports.layout = undefined;

	var _CSSGrid = __webpack_require__(1);

	var _CSSGrid2 = _interopRequireDefault(_CSSGrid);

	var _SpringGrid = __webpack_require__(11);

	var _SpringGrid2 = _interopRequireDefault(_SpringGrid);

	var _makeResponsive = __webpack_require__(14);

	var _makeResponsive2 = _interopRequireDefault(_makeResponsive);

	var _measureItems = __webpack_require__(16);

	var _measureItems2 = _interopRequireDefault(_measureItems);

	var _pinterest = __webpack_require__(20);

	var _pinterest2 = _interopRequireDefault(_pinterest);

	var _simple = __webpack_require__(6);

	var _simple2 = _interopRequireDefault(_simple);

	var _horizontal = __webpack_require__(21);

	var _horizontal2 = _interopRequireDefault(_horizontal);

	var _foldUp = __webpack_require__(22);

	var foldUp = _interopRequireWildcard(_foldUp);

	var _fromCenter = __webpack_require__(23);

	var fromCenter = _interopRequireWildcard(_fromCenter);

	var _fromLeftToRight = __webpack_require__(24);

	var fromLeftToRight = _interopRequireWildcard(_fromLeftToRight);

	var _fromTop = __webpack_require__(25);

	var fromTop = _interopRequireWildcard(_fromTop);

	var _fromBottom = __webpack_require__(26);

	var fromBottom = _interopRequireWildcard(_fromBottom);

	var _newspaper = __webpack_require__(27);

	var newspaper = _interopRequireWildcard(_newspaper);

	var _simple3 = __webpack_require__(7);

	var simpleEnterExit = _interopRequireWildcard(_simple3);

	var _skew = __webpack_require__(28);

	var skew = _interopRequireWildcard(_skew);

	var _easings = __webpack_require__(8);

	var easings = _interopRequireWildcard(_easings);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var layout = exports.layout = {
	  horizontal: _horizontal2.default,
	  pinterest: _pinterest2.default,
	  simple: _simple2.default
	};

	var enterExitStyle = exports.enterExitStyle = {
	  foldUp: foldUp,
	  fromCenter: fromCenter,
	  fromLeftToRight: fromLeftToRight,
	  fromTop: fromTop,
	  fromBottom: fromBottom,
	  newspaper: newspaper,
	  simple: simpleEnterExit,
	  skew: skew
	};

	exports.CSSGrid = _CSSGrid2.default;
	exports.SpringGrid = _SpringGrid2.default;
	exports.measureItems = _measureItems2.default;
	exports.makeResponsive = _makeResponsive2.default;
	exports.easings = easings;
	exports.default = {
	  CSSGrid: _CSSGrid2.default,
	  SpringGrid: _SpringGrid2.default,
	  measureItems: _measureItems2.default,
	  makeResponsive: _makeResponsive2.default,
	  easings: easings,
	  layout: layout,
	  enterExitStyle: enterExitStyle
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsTransitionGroup = __webpack_require__(3);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _shallowequal = __webpack_require__(4);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _commonProps = __webpack_require__(5);

	var _easings = __webpack_require__(8);

	var _CSSGridItem = __webpack_require__(9);

	var _CSSGridItem2 = _interopRequireDefault(_CSSGridItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = _react2.default.createClass({
	  displayName: 'CSSGrid',


	  propTypes: _extends({}, _commonProps.commonPropTypes, {
	    duration: _react2.default.PropTypes.number.isRequired,
	    easing: _react2.default.PropTypes.string
	  }),

	  getDefaultProps: function getDefaultProps() {
	    return _extends({}, _commonProps.commonDefaultProps, {
	      easing: _easings.cubicOut
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    this.setState(this.doLayout(this.props));
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!(0, _shallowequal2.default)(nextProps, this.props)) {
	      this.setState(this.doLayout(nextProps));
	    }
	  },
	  doLayout: function doLayout(props) {
	    var _props$layout = props.layout(_react2.default.Children.toArray(props.children).map(function (item) {
	      return _extends({}, item.props, {
	        key: item.key
	      });
	    }), props),
	        positions = _props$layout.positions,
	        gridWidth = _props$layout.gridWidth,
	        gridHeight = _props$layout.gridHeight;

	    return { gridWidth: gridWidth, gridHeight: gridHeight, positions: positions };
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        component = _props.component,
	        style = _props.style,
	        children = _props.children,
	        duration = _props.duration,
	        easing = _props.easing,
	        lengthUnit = _props.lengthUnit,
	        rest = _objectWithoutProperties(_props, ['component', 'style', 'children', 'duration', 'easing', 'lengthUnit']);

	    var items = _react2.default.Children.toArray(children);
	    var _state = this.state,
	        positions = _state.positions,
	        gridWidth = _state.gridWidth,
	        gridHeight = _state.gridHeight;


	    var transition = ['opacity', 'transform'].map(function (prop) {
	      return prop + ' ' + duration + 'ms ' + easing;
	    }).join(', ');

	    var wrappedItems = items.map(function (item, i) {
	      return _react2.default.createElement(
	        _CSSGridItem2.default,
	        _extends({
	          key: item.key,
	          position: positions[i]
	        }, _this.props, {
	          transition: transition,
	          gridProps: _this.props,
	          gridState: _this.state
	        }),
	        item
	      );
	    });

	    return _react2.default.createElement(
	      _reactAddonsTransitionGroup2.default,
	      _extends({
	        component: component,
	        style: _extends({
	          position: 'relative'
	        }, style, {
	          width: '' + gridWidth + lengthUnit,
	          height: '' + gridHeight + lengthUnit
	        })
	      }, rest),
	      wrappedItems
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.commonDefaultProps = exports.commonPropTypes = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _simple = __webpack_require__(6);

	var _simple2 = _interopRequireDefault(_simple);

	var _simple3 = __webpack_require__(7);

	var simpleEnterExit = _interopRequireWildcard(_simple3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var commonPropTypes = exports.commonPropTypes = {
	  columns: _react2.default.PropTypes.number.isRequired,
	  columnWidth: _react2.default.PropTypes.number.isRequired,
	  gutterWidth: _react2.default.PropTypes.number,
	  gutterHeight: _react2.default.PropTypes.number,
	  component: _react2.default.PropTypes.string,
	  layout: _react2.default.PropTypes.func,
	  enter: _react2.default.PropTypes.func,
	  entered: _react2.default.PropTypes.func,
	  exit: _react2.default.PropTypes.func,
	  perspective: _react2.default.PropTypes.number,
	  lengthUnit: _react2.default.PropTypes.string,
	  angleUnit: _react2.default.PropTypes.string
	};

	var commonDefaultProps = exports.commonDefaultProps = {
	  lengthUnit: 'px',
	  angleUnit: 'deg',
	  component: 'div',
	  gutterWidth: 0,
	  gutterHeight: 0,
	  layout: _simple2.default,
	  enter: simpleEnterExit.enter,
	  entered: simpleEnterExit.entered,
	  exit: simpleEnterExit.exit
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (items, props) {
	  var columnWidth = props.columnWidth,
	      _props$itemHeight = props.itemHeight,
	      itemHeight = _props$itemHeight === undefined ? 150 : _props$itemHeight,
	      columns = props.columns,
	      gutterWidth = props.gutterWidth,
	      gutterHeight = props.gutterHeight;


	  var positions = items.map(function (itemProps, i) {
	    var column = i % columns;
	    var row = Math.floor(i / columns);

	    var x = column * columnWidth + column * gutterWidth;
	    var y = row * itemHeight + row * gutterHeight;

	    return [x, y];
	  });

	  var gridWidth = columns * columnWidth + (columns - 1) * gutterWidth;
	  var gridHeight = Math.ceil(items.length / columns) * (itemHeight + gutterHeight) - gutterHeight;

	  return { positions: positions, gridWidth: gridWidth, gridHeight: gridHeight };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var enterExit = function enterExit() {
	  return { scale: 0, opacity: 0 };
	};

	var enter = exports.enter = enterExit;
	var exit = exports.exit = enterExit;

	var entered = exports.entered = function entered() {
	  return { scale: 1, opacity: 1 };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// Values https://matthewlein.com/ceaser/
	var quadIn = exports.quadIn = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
	var quadOut = exports.quadOut = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
	var quadInOut = exports.quadInOut = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
	var cubicIn = exports.cubicIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
	var cubicOut = exports.cubicOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
	var cubicInOut = exports.cubicInOut = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
	var quartIn = exports.quartIn = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
	var quartOut = exports.quartOut = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
	var quartInOut = exports.quartInOut = 'cubic-bezier(0.77, 0, 0.175, 1)';
	var quintIn = exports.quintIn = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
	var quintOut = exports.quintOut = 'cubic-bezier(0.23, 1, 0.32, 1)';
	var quintInOut = exports.quintInOut = 'cubic-bezier(0.86, 0, 0.07, 1)';
	var sineIn = exports.sineIn = 'cubic-bezier(0.47, 0, 0.745, 0.715)';
	var sineOut = exports.sineOut = 'cubic-bezier(0.39, 0.575, 0.565, 1)';
	var sineInOut = exports.sineInOut = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';
	var expoIn = exports.expoIn = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
	var expoOut = exports.expoOut = 'cubic-bezier(0.19, 1, 0.22, 1)';
	var expoInOut = exports.expoInOut = 'cubic-bezier(1, 0, 0, 1)';
	var circIn = exports.circIn = 'cubic-bezier(0.6, 0.04, 0.98, 0.335)';
	var circOut = exports.circOut = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
	var circInOut = exports.circInOut = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';
	var backIn = exports.backIn = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
	var backOut = exports.backOut = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	var backInOut = exports.backInOut = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shallowequal = __webpack_require__(4);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _transformHelpers = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'CSSGridItem',
	  getInitialState: function getInitialState() {
	    return {
	      style: {
	        zIndex: 2
	      }
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._isMounted = true;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;

	    if (!(0, _shallowequal2.default)(nextProps, this.props)) {
	      requestAnimationFrame(function () {
	        _this.setEndStyle(nextProps, 2);
	      });
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._isMounted = false;
	    clearTimeout(this.leaveTimeout);
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    this.setEndStyle(this.props, 2);
	    done();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    var _this2 = this;

	    var wasLeaving = this._isLeaving;
	    this._isLeaving = false;
	    clearTimeout(this.leaveTimeout);

	    var _props = this.props,
	        position = _props.position,
	        gridProps = _props.gridProps,
	        gridState = _props.gridState;


	    requestAnimationFrame(function () {
	      if (!wasLeaving) {
	        _this2.setState({
	          style: _extends({}, _this2.state.style, (0, _transformHelpers.positionToProperties)(position), {
	            zIndex: 1
	          }, gridProps.enter(_this2.props, gridProps, gridState))
	        });
	      }

	      done();
	    });
	  },
	  componentDidEnter: function componentDidEnter() {
	    var _this3 = this;

	    requestAnimationFrame(function () {
	      requestAnimationFrame(function () {
	        _this3.setEndStyle(_this3.props, 1);
	      });
	    });
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    var _this4 = this;

	    this._remove = done;
	    var _props2 = this.props,
	        gridProps = _props2.gridProps,
	        gridState = _props2.gridState;


	    requestAnimationFrame(function () {
	      if (_this4._isMounted) {
	        _this4._isLeaving = true;

	        _this4.setState({
	          style: _extends({}, _this4.state.style, {
	            zIndex: 0
	          }, gridProps.exit(_this4.props, gridProps, gridState))
	        });

	        _this4.leaveTimeout = setTimeout(done, _this4.props.duration);
	      }
	    });
	  },
	  setEndStyle: function setEndStyle(props, zIndex) {
	    clearTimeout(this.leaveTimeout);

	    if (this._remove) {
	      this._remove();
	      this._remove = null;
	      return;
	    }

	    if (!this._isMounted) return;

	    var position = props.position,
	        gridProps = props.gridProps,
	        gridState = props.gridState;


	    this.setState({
	      style: _extends({}, this.state.style, {
	        zIndex: zIndex
	      }, gridProps.entered(props, gridProps, gridState), (0, _transformHelpers.positionToProperties)(position))
	    });
	  },
	  render: function render() {
	    var item = _react2.default.Children.only(this.props.children);
	    var itemStyle = item.props.style;
	    var _props3 = this.props,
	        transition = _props3.transition,
	        perspective = _props3.perspective,
	        lengthUnit = _props3.lengthUnit,
	        angleUnit = _props3.angleUnit;
	    var _state$style = this.state.style,
	        translateX = _state$style.translateX,
	        translateY = _state$style.translateY,
	        opacity = _state$style.opacity,
	        zIndex = _state$style.zIndex;


	    if (typeof translateX === 'undefined' || typeof translateY === 'undefined') {
	      return null;
	    }

	    var transform = (0, _transformHelpers.buildTransform)(this.state.style, perspective, {
	      length: lengthUnit, angle: angleUnit
	    });

	    return _react2.default.cloneElement(item, {
	      style: _extends({}, itemStyle, {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        zIndex: zIndex,
	        opacity: opacity,
	        transform: transform,
	        transition: transition,
	        WebkitTransform: transform,
	        WebkitTransition: transition
	      })
	    });
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var properties = [{ name: 'translateX', unit: 'length' }, { name: 'translateY', unit: 'length' }, { name: 'perspective', unit: 'length' }, { name: 'translateZ', unit: 'length' }, { name: 'skew', unit: 'angle' }, { name: 'skewX', unit: 'angle' }, { name: 'skewY', unit: 'angle' }, { name: 'scale' }, { name: 'scaleX' }, { name: 'scaleY' }, { name: 'scaleZ' }, { name: 'rotate', unit: 'angle' }, { name: 'rotateX', unit: 'angle' }, { name: 'rotateY', unit: 'angle' }];

	var positionToProperties = exports.positionToProperties = function positionToProperties(position) {
	  return {
	    translateX: position[0],
	    translateY: position[1]
	  };
	};

	var buildTransform = exports.buildTransform = function buildTransform(style, perspective, units) {
	  var arr = [];

	  properties.forEach(function (prop) {
	    if (prop.name === 'perspective') {
	      if (typeof perspective !== 'undefined') {
	        arr.push('perspective(' + perspective + units[prop.unit] + ')');
	      }
	    } else if (typeof style[prop.name] !== 'undefined') {
	      var val = isNaN(style[prop.name]) ? 0 : style[prop.name];
	      arr.push(prop.name + '(' + val + (prop.unit ? units[prop.unit] : '') + ')');
	    }
	  });

	  return arr.join(' ');
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(12);

	var _stripStyle = __webpack_require__(13);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _transformHelpers = __webpack_require__(10);

	var _shallowequal = __webpack_require__(4);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _commonProps = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = _react2.default.createClass({
	  displayName: 'SpringGrid',


	  propTypes: _extends({}, _commonProps.commonPropTypes, {
	    springConfig: _react2.default.PropTypes.shape({
	      stiffness: _react2.default.PropTypes.number,
	      damping: _react2.default.PropTypes.number,
	      precision: _react2.default.PropTypes.number
	    })
	  }),

	  getDefaultProps: function getDefaultProps() {
	    return _extends({}, _commonProps.commonDefaultProps, {
	      springConfig: { stiffness: 60, damping: 14, precision: 0.1 }
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    this.setState(this.doLayout(this.props));
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!(0, _shallowequal2.default)(nextProps, this.props)) {
	      this.setState(this.doLayout(nextProps));
	    }
	  },
	  doLayout: function doLayout(props) {
	    var items = _react2.default.Children.toArray(props.children).map(function (element) {
	      return {
	        key: element.key,
	        data: {
	          element: element
	        }
	      };
	    });

	    var _props$layout = props.layout(items.map(function (item) {
	      return _extends({}, item.data.element.props, {
	        key: item.data.element.key
	      });
	    }), props),
	        positions = _props$layout.positions,
	        gridWidth = _props$layout.gridWidth,
	        gridHeight = _props$layout.gridHeight;

	    var styles = positions.map(function (position, i) {
	      return _extends({}, items[i], {
	        style: _extends({}, items[i].style, {
	          zIndex: 2
	        }, springify(props.entered(items[i].data.element.props, props, { gridWidth: gridWidth, gridHeight: gridHeight }), props.springConfig), springify((0, _transformHelpers.positionToProperties)(position), props.springConfig))
	      });
	    });

	    return { styles: styles, gridWidth: gridWidth, gridHeight: gridHeight };
	  },
	  willEnter: function willEnter(transitionStyle) {
	    var _state = this.state,
	        gridWidth = _state.gridWidth,
	        gridHeight = _state.gridHeight;


	    return _extends({}, (0, _stripStyle2.default)(transitionStyle.style), {
	      zIndex: 1
	    }, this.props.enter(transitionStyle.data.element.props, this.props, { gridWidth: gridWidth, gridHeight: gridHeight }));
	  },
	  willLeave: function willLeave(transitionStyle) {
	    var _state2 = this.state,
	        gridWidth = _state2.gridWidth,
	        gridHeight = _state2.gridHeight;

	    var exitStyle = this.props.exit(transitionStyle.data.element.props, this.props, { gridWidth: gridWidth, gridHeight: gridHeight });

	    return _extends({}, transitionStyle.style, {
	      zIndex: 0
	    }, springify(exitStyle, this.props.springConfig));
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        component = _props.component,
	        style = _props.style,
	        perspective = _props.perspective,
	        lengthUnit = _props.lengthUnit,
	        angleUnit = _props.angleUnit,
	        rest = _objectWithoutProperties(_props, ['component', 'style', 'perspective', 'lengthUnit', 'angleUnit']);

	    return _react2.default.createElement(
	      _reactMotion.TransitionMotion,
	      {
	        styles: this.state.styles,
	        willEnter: this.willEnter,
	        willLeave: this.willLeave
	      },
	      function (interpolatedStyles) {
	        return _react2.default.createElement(component, _extends({
	          style: _extends({
	            position: 'relative'
	          }, style, {
	            width: '' + _this.state.gridWidth + lengthUnit,
	            height: '' + _this.state.gridHeight + lengthUnit
	          })
	        }, rest), interpolatedStyles.map(function (config) {
	          var _config$style = config.style,
	              opacity = _config$style.opacity,
	              zIndex = _config$style.zIndex,
	              data = config.data;


	          var transform = (0, _transformHelpers.buildTransform)(config.style, perspective, {
	            length: lengthUnit, angle: angleUnit
	          });

	          return _react2.default.cloneElement(data.element, {
	            style: _extends({}, data.element.props.style, {
	              position: 'absolute',
	              top: 0,
	              left: 0,
	              zIndex: zIndex,
	              opacity: opacity,
	              transform: transform,
	              WebkitTransform: transform,
	              msTransform: transform
	            })
	          });
	        }));
	      }
	    );
	  }
	});


	function springify(style, springConfig) {
	  return Object.keys(style).reduce(function (obj, key) {
	    obj[key] = (0, _reactMotion.spring)(style[key], springConfig);
	    return obj;
	  }, {});
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _enquire = __webpack_require__(15);

	var _enquire2 = _interopRequireDefault(_enquire);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (Grid) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      maxWidth = _ref.maxWidth,
	      _ref$minPadding = _ref.minPadding,
	      minPadding = _ref$minPadding === undefined ? 0 : _ref$minPadding,
	      _ref$defaultColumns = _ref.defaultColumns,
	      defaultColumns = _ref$defaultColumns === undefined ? 4 : _ref$defaultColumns;

	  return _react2.default.createClass({
	    getDefaultProps: function getDefaultProps() {
	      return {
	        minPadding: 0
	      };
	    },
	    getInitialState: function getInitialState() {
	      return {
	        columns: defaultColumns
	      };
	    },
	    componentWillMount: function componentWillMount() {
	      var _this = this;

	      var _props = this.props,
	          columnWidth = _props.columnWidth,
	          gutterWidth = _props.gutterWidth;

	      var breakpoints = [];
	      var getWidth = function getWidth(i) {
	        return i * (columnWidth + gutterWidth) - gutterWidth + minPadding;
	      };

	      for (var i = 1; getWidth(i) <= maxWidth + columnWidth + gutterWidth; i++) {
	        breakpoints.push(getWidth(i));
	      }

	      this.breakpoints = breakpoints.map(function (width, i, arr) {
	        return ['screen', i > 0 && '(min-width: ' + arr[i - 1] + 'px)', i < arr.length - 1 && '(max-width: ' + width + 'px)'].filter(Boolean).join(' and ');
	      }).map(function (breakpoint, i) {
	        return {
	          breakpoint: breakpoint,
	          handler: function handler() {
	            return _this.setState({ columns: i });
	          }
	        };
	      });

	      this.breakpoints.forEach(function (_ref2) {
	        var breakpoint = _ref2.breakpoint,
	            handler = _ref2.handler;
	        return _enquire2.default.register(breakpoint, { match: handler });
	      });
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      this.breakpoints.forEach(function (_ref3) {
	        var breakpoint = _ref3.breakpoint,
	            handler = _ref3.handler;
	        return _enquire2.default.unregister(breakpoint, handler);
	      });
	    },
	    render: function render() {
	      return _react2.default.createElement(Grid, _extends({}, this.props, this.state));
	    }
	  });
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _imagesloaded = __webpack_require__(17);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	var _lodash = __webpack_require__(18);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(19);

	var _lodash4 = _interopRequireDefault(_lodash3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (Grid) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      measureImages = _ref.measureImages,
	      background = _ref.background;

	  return _react2.default.createClass({
	    getDefaultProps: function getDefaultProps() {
	      return {
	        component: 'span'
	      };
	    },
	    getInitialState: function getInitialState() {
	      return {
	        rects: {}
	      };
	    },
	    componentWillMount: function componentWillMount() {
	      this._updateRectsDebounced = (0, _lodash4.default)(this.updateRects, 20);
	      this._rects = {};
	      this._loading = {};
	    },
	    componentDidMount: function componentDidMount() {
	      this.measureElements();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      this.measureElements();
	    },
	    measureElements: function measureElements() {
	      var _this = this;

	      if (this._elementsToMeasureContainer) {
	        var elements = this._elementsToMeasureContainer.children;

	        if (elements.length) {
	          if (measureImages) {
	            Array.from(elements).filter(function (el) {
	              return !_this._loading[el.dataset.stonecutterkey];
	            }).forEach(function (el) {
	              _this._loading[el.dataset.stonecutterkey] = true;

	              (0, _imagesloaded2.default)(el, { background: background }, function () {
	                _this._rects[el.dataset.stonecutterkey] = el.getBoundingClientRect();
	                delete _this._loading[el.dataset.stonecutterkey];

	                _this._updateRectsDebounced();
	              });
	            });
	          } else {
	            this._rects = Array.from(elements).reduce(function (acc, el) {
	              acc[el.dataset.stonecutterkey] = el.getBoundingClientRect();
	              return acc;
	            }, {});

	            this.updateRects();
	          }
	        }
	      }
	    },
	    updateRects: function updateRects() {
	      this.setState({
	        rects: _extends({}, this.state.rects, this._rects)
	      });

	      this._rects = {};
	    },
	    render: function render() {
	      var _this2 = this;

	      var component = this.props.component;

	      var _partition = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children), function (element) {
	        return !_this2.state.rects[element.key];
	      }),
	          _partition2 = _slicedToArray(_partition, 2),
	          newElements = _partition2[0],
	          existingElements = _partition2[1];

	      var elementsToMeasure = newElements.map(function (element) {
	        return _react2.default.cloneElement(element, {
	          'style': _extends({}, element.props.style, {
	            width: _this2.props.columnWidth
	          }),
	          'data-stonecutterkey': element.key
	        });
	      });

	      var measuredElements = existingElements.map(function (element) {
	        return _react2.default.cloneElement(element, {
	          itemRect: _this2.state.rects[element.key]
	        });
	      });

	      return _react2.default.createElement(
	        'span',
	        null,
	        measuredElements.length > 0 && _react2.default.createElement(
	          Grid,
	          this.props,
	          measuredElements
	        ),
	        elementsToMeasure.length > 0 && _react2.default.createElement(component, {
	          style: {
	            width: 0,
	            height: 0,
	            padding: 0,
	            margin: 0,
	            overflow: 'hidden',
	            visibility: 'hidden'
	          },
	          ref: function ref(el) {
	            _this2._elementsToMeasureContainer = el;
	          }
	        }, elementsToMeasure)
	      );
	    }
	  });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (items, props) {
	  var columns = props.columns,
	      columnWidth = props.columnWidth,
	      gutterWidth = props.gutterWidth,
	      gutterHeight = props.gutterHeight;


	  var columnHeights = [];
	  for (var i = 0; i < columns; i++) {
	    columnHeights.push(0);
	  }

	  var positions = items.map(function (itemProps) {
	    var column = columnHeights.indexOf(Math.min.apply(null, columnHeights));

	    var height = itemProps.itemHeight || itemProps.itemRect && itemProps.itemRect.height;

	    if (!(height && typeof height === 'number')) {
	      throw new Error('Each child must have an "itemHeight" prop or an "itemRect.height" prop.');
	    }

	    var x = column * columnWidth + column * gutterWidth;
	    var y = columnHeights[column];

	    columnHeights[column] += Math.round(height) + gutterHeight;

	    return [x, y];
	  });

	  var gridWidth = columns * columnWidth + (columns - 1) * gutterWidth;
	  var gridHeight = Math.max.apply(null, columnHeights) - gutterHeight;

	  return { positions: positions, gridWidth: gridWidth, gridHeight: gridHeight };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (items, props) {
	  var columnWidth = props.columnWidth,
	      _props$itemHeight = props.itemHeight,
	      itemHeight = _props$itemHeight === undefined ? 150 : _props$itemHeight,
	      columns = props.columns,
	      gutterWidth = props.gutterWidth,
	      gutterHeight = props.gutterHeight;

	  var index = 0;
	  var rows = [];
	  // build the first row
	  rows.push(buildRow(columns));

	  var positions = items.map(function (itemProps) {
	    var ratio = itemProps.dataRatio || 1;
	    var shift = index + ratio;
	    var row = findSuitableRow(rows, ratio);
	    if (row === -1) {
	      rows.push(buildRow(columns));
	      row = findSuitableRow(rows, ratio);
	    }
	    var column = fillRow(rows, row, ratio);

	    var x = column * columnWidth + column * gutterWidth;
	    var y = row * itemHeight + row * gutterHeight;
	    index = shift;

	    return [x, y];
	  });

	  var gridWidth = columns * columnWidth + (columns - 1) * gutterWidth;
	  var gridHeight = rows.length * (itemHeight + gutterHeight) - gutterHeight;

	  return { positions: positions, gridWidth: gridWidth, gridHeight: gridHeight };
	};

	function buildRow(columns) {
	  var row = [];
	  for (var i = 0; i < columns; i++) {
	    row.push({
	      filled: false
	    });
	  }
	  return row;
	}

	function findSuitableRow(rows, shift) {
	  return rows.findIndex(function (row) {
	    var counter = 0;
	    for (var i = 0, l = row.length; i < l; i++) {
	      if (!row[i].filled) {
	        counter++;
	      }
	      if (counter >= shift) {
	        return true;
	      }
	    }
	    return false;
	  });
	}

	function fillRow(rows, rowNumber, shift) {
	  var counter = 0;
	  // index of the column from which the element starts
	  var startFrom = { index: 0, blocked: false };
	  var row = rows[rowNumber];

	  for (var i = 0, r = row.length; i < r; i++) {
	    if (counter < shift && !row[i].filled) {
	      if (!startFrom.blocked) {
	        startFrom.index = i;
	        startFrom.blocked = true;
	      }
	      row[i].filled = true;
	      counter++;
	    }
	    if (counter === shift) {
	      return startFrom.index;
	    }
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enter = exports.enter = function enter() {
	  return { rotateX: -90, scale: 1, opacity: 1 };
	};
	var exit = exports.exit = function exit() {
	  return { rotateX: -90, scale: 0, opacity: 0 };
	};
	var entered = exports.entered = function entered() {
	  return { rotateX: 0, scale: 1, opacity: 1 };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var enterExit = function enterExit(itemProps, gridProps, gridState) {
	  var columns = gridProps.columns,
	      columnWidth = gridProps.columnWidth,
	      gutterWidth = gridProps.gutterWidth;


	  return {
	    translateX: (columns * columnWidth + (columns - 1) * gutterWidth - columnWidth) / 2,
	    translateY: gridState.gridHeight / 2,
	    scale: 0,
	    opacity: 0
	  };
	};

	var enter = exports.enter = enterExit;
	var exit = exports.exit = enterExit;

	var entered = exports.entered = function entered() {
	  return { scale: 1, opacity: 1 };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enter = exports.enter = function enter() {
	  return { translateX: -500, opacity: 0 };
	};

	var exit = exports.exit = function exit(itemProps, gridProps, gridState) {
	  return {
	    translateX: gridState.gridWidth + 500,
	    opacity: 0
	  };
	};

	var entered = exports.entered = function entered() {
	  return { opacity: 1 };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var enterExit = function enterExit() {
	  return { translateY: 0, opacity: 0 };
	};

	var enter = exports.enter = enterExit;
	var exit = exports.exit = enterExit;

	var entered = exports.entered = function entered() {
	  return { opacity: 1 };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enterExit = exports.enterExit = function enterExit(itemProps, gridProps, gridState) {
	  return {
	    translateY: gridState.gridHeight + 500,
	    opacity: 0
	  };
	};

	var enter = exports.enter = enterExit;
	var exit = exports.exit = enterExit;

	var entered = exports.entered = function entered() {
	  return { opacity: 1 };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enter = exports.enter = function enter() {
	  return {
	    scale: 0,
	    opacity: 0,
	    rotate: -720
	  };
	};

	var exit = exports.exit = function exit() {
	  return { scale: 0, opacity: 0 };
	};

	var entered = exports.entered = function entered() {
	  return { scale: 1, opacity: 1, rotate: 0 };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var enter = exports.enter = function enter() {
	  return {
	    skew: 90,
	    rotate: 45,
	    scale: 0,
	    opacity: 0
	  };
	};

	var exit = exports.exit = function exit() {
	  return {
	    skew: -90,
	    rotate: -45,
	    scale: 0,
	    opacity: 0
	  };
	};

	var entered = exports.entered = function entered() {
	  return {
	    skew: 0,
	    rotate: 0,
	    scale: 1,
	    opacity: 1
	  };
	};

/***/ }
/******/ ])
});
;