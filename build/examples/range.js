webpackJsonp([3],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-slider/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
throw new Error("Cannot find module \"rc-slider\"");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp: 0, no-console: 0 */





var Range = __WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a.Range;

var style = { width: 400, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

var CustomizedRange = function (_React$Component) {
  _inherits(CustomizedRange, _React$Component);

  function CustomizedRange(props) {
    _classCallCheck(this, CustomizedRange);

    var _this = _possibleConstructorReturn(this, (CustomizedRange.__proto__ || Object.getPrototypeOf(CustomizedRange)).call(this, props));

    _this.onLowerBoundChange = function (e) {
      _this.setState({ lowerBound: +e.target.value });
    };

    _this.onUpperBoundChange = function (e) {
      _this.setState({ upperBound: +e.target.value });
    };

    _this.onSliderChange = function (value) {
      log(value);
      _this.setState({
        value: value
      });
    };

    _this.handleApply = function () {
      var _this$state = _this.state,
          lowerBound = _this$state.lowerBound,
          upperBound = _this$state.upperBound;

      _this.setState({ value: [lowerBound, upperBound] });
    };

    _this.state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40]
    };
    return _this;
  }

  _createClass(CustomizedRange, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          'LowerBound: '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', value: this.state.lowerBound, onChange: this.onLowerBoundChange }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          'UpperBound: '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', value: this.state.upperBound, onChange: this.onUpperBoundChange }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'button',
          { onClick: this.handleApply },
          'Apply'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { allowCross: false, value: this.state.value, onChange: this.onSliderChange })
      );
    }
  }]);

  return CustomizedRange;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var DynamicBounds = function (_React$Component2) {
  _inherits(DynamicBounds, _React$Component2);

  function DynamicBounds(props) {
    _classCallCheck(this, DynamicBounds);

    var _this2 = _possibleConstructorReturn(this, (DynamicBounds.__proto__ || Object.getPrototypeOf(DynamicBounds)).call(this, props));

    _this2.onSliderChange = function (value) {
      log(value);
    };

    _this2.onMinChange = function (e) {
      _this2.setState({
        min: +e.target.value || 0
      });
    };

    _this2.onMaxChange = function (e) {
      _this2.setState({
        max: +e.target.value || 100
      });
    };

    _this2.state = {
      min: 0,
      max: 100
    };
    return _this2;
  }

  _createClass(DynamicBounds, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          'Min: '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', value: this.state.min, onChange: this.onMinChange }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          null,
          'Max: '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', value: this.state.max, onChange: this.onMaxChange }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { defaultValue: [20, 50], min: this.state.min, max: this.state.max,
          onChange: this.onSliderChange
        })
      );
    }
  }]);

  return DynamicBounds;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var ControlledRange = function (_React$Component3) {
  _inherits(ControlledRange, _React$Component3);

  function ControlledRange(props) {
    _classCallCheck(this, ControlledRange);

    var _this3 = _possibleConstructorReturn(this, (ControlledRange.__proto__ || Object.getPrototypeOf(ControlledRange)).call(this, props));

    _this3.handleChange = function (value) {
      _this3.setState({
        value: value
      });
    };

    _this3.state = {
      value: [20, 40, 60, 80]
    };
    return _this3;
  }

  _createClass(ControlledRange, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { value: this.state.value, onChange: this.handleChange });
    }
  }]);

  return ControlledRange;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

// https://github.com/react-component/slider/issues/226


var PureRenderRange = function (_React$Component4) {
  _inherits(PureRenderRange, _React$Component4);

  function PureRenderRange(props) {
    _classCallCheck(this, PureRenderRange);

    var _this4 = _possibleConstructorReturn(this, (PureRenderRange.__proto__ || Object.getPrototypeOf(PureRenderRange)).call(this, props));

    _this4.handleChange = function (value) {
      console.log(value);
      _this4.setState({
        foo: !_this4.state.foo
      });
    };

    _this4.state = {
      foo: false
    };
    return _this4;
  }

  _createClass(PureRenderRange, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { defaultValue: [20, 40, 60, 80], onChange: this.handleChange, allowCross: false });
    }
  }]);

  return PureRenderRange;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Basic Range\uFF0C`allowCross=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { allowCross: false, defaultValue: [0, 20], onChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Basic Range\uFF0C`step=20` '
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { step: 20, defaultValue: [20, 20], onBeforeChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Basic Range\uFF0C`step=20, dots` '
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { dots: true, step: 20, defaultValue: [20, 40], onAfterChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Inverted Basic Range\uFF0C`allowCross=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { inverted: true, allowCross: false, defaultValue: [0, 20], onChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Inverted Basic Range\uFF0C`step=20` '
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { inverted: true, step: 20, defaultValue: [20, 20], onBeforeChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Inverted Basic Range\uFF0C`step=20, dots` '
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { inverted: true, dots: true, step: 20, defaultValue: [20, 40], onAfterChange: log })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Basic Range\uFF0Cdisabled'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { allowCross: false, defaultValue: [0, 20], onChange: log, disabled: true })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Controlled Range'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ControlledRange, null)
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Multi Range'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { count: 3, defaultValue: [20, 40, 60, 80], pushable: true })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Multi Range with custom track and handle style'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { count: 3, defaultValue: [20, 40, 60, 80], pushable: true,
      trackStyle: [{ backgroundColor: 'red' }, { backgroundColor: 'green' }],
      handleStyle: [{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }],
      railStyle: { backgroundColor: 'black' }
    })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Customized Range'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomizedRange, null)
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range with dynamic `max` `min`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DynamicBounds, null)
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range as child component'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PureRenderRange, null)
  )
), document.getElementById('__react-content'));

/***/ })

},[160]);
//# sourceMappingURL=range.js.map