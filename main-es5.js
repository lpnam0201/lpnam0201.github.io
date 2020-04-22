function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/time-block-provider-service */
    "./src/app/services/time-block-provider-service.ts");
    /* harmony import */


    var _process_input_process_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./process-input/process-input.component */
    "./src/app/process-input/process-input.component.ts");
    /* harmony import */


    var _process_chart_process_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-chart/process-chart.component */
    "./src/app/process-chart/process-chart.component.ts");
    /* harmony import */


    var _process_scheduling_result_process_scheduling_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-scheduling-result/process-scheduling-result.component */
    "./src/app/process-scheduling-result/process-scheduling-result.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'process-scheduling';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__["TimeBlockProviderService"]])],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-process-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-process-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-process-scheduling-result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_process_input_process_input_component__WEBPACK_IMPORTED_MODULE_2__["ProcessInputComponent"], _process_chart_process_chart_component__WEBPACK_IMPORTED_MODULE_3__["ProcessChartComponent"], _process_scheduling_result_process_scheduling_result_component__WEBPACK_IMPORTED_MODULE_4__["ProcessSchedulingResultComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__["TimeBlockProviderService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _process_chart_process_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./process-chart/process-chart.component */
    "./src/app/process-chart/process-chart.component.ts");
    /* harmony import */


    var _process_input_process_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./process-input/process-input.component */
    "./src/app/process-input/process-input.component.ts");
    /* harmony import */


    var _process_time_block_process_time_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./process-time-block/process-time-block.component */
    "./src/app/process-time-block/process-time-block.component.ts");
    /* harmony import */


    var _services_process_calculation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/process-calculation-service */
    "./src/app/services/process-calculation-service.ts");
    /* harmony import */


    var _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/time-block-provider-service */
    "./src/app/services/time-block-provider-service.ts");
    /* harmony import */


    var _process_scheduling_result_process_scheduling_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./process-scheduling-result/process-scheduling-result.component */
    "./src/app/process-scheduling-result/process-scheduling-result.component.ts");
    /* harmony import */


    var _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/process-scheduling-provider-service */
    "./src/app/services/process-scheduling-provider-service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_process_calculation_service__WEBPACK_IMPORTED_MODULE_8__["ProcessCalculationService"], _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_9__["TimeBlockProviderService"], _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_11__["ProcessSchedulingProviderService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _process_chart_process_chart_component__WEBPACK_IMPORTED_MODULE_5__["ProcessChartComponent"], _process_input_process_input_component__WEBPACK_IMPORTED_MODULE_6__["ProcessInputComponent"], _process_time_block_process_time_block_component__WEBPACK_IMPORTED_MODULE_7__["ProcessTimeBlockComponent"], _process_scheduling_result_process_scheduling_result_component__WEBPACK_IMPORTED_MODULE_10__["ProcessSchedulingResultComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _process_chart_process_chart_component__WEBPACK_IMPORTED_MODULE_5__["ProcessChartComponent"], _process_input_process_input_component__WEBPACK_IMPORTED_MODULE_6__["ProcessInputComponent"], _process_time_block_process_time_block_component__WEBPACK_IMPORTED_MODULE_7__["ProcessTimeBlockComponent"], _process_scheduling_result_process_scheduling_result_component__WEBPACK_IMPORTED_MODULE_10__["ProcessSchedulingResultComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [_services_process_calculation_service__WEBPACK_IMPORTED_MODULE_8__["ProcessCalculationService"], _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_9__["TimeBlockProviderService"], _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_11__["ProcessSchedulingProviderService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/process-item.ts":
  /*!****************************************!*\
    !*** ./src/app/models/process-item.ts ***!
    \****************************************/

  /*! exports provided: ProcessItem */

  /***/
  function srcAppModelsProcessItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessItem", function () {
      return ProcessItem;
    });

    var ProcessItem = function ProcessItem() {
      _classCallCheck(this, ProcessItem);
    };
    /***/

  },

  /***/
  "./src/app/models/process-scheduling-item.ts":
  /*!***************************************************!*\
    !*** ./src/app/models/process-scheduling-item.ts ***!
    \***************************************************/

  /*! exports provided: ProcessSchedulingItem */

  /***/
  function srcAppModelsProcessSchedulingItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessSchedulingItem", function () {
      return ProcessSchedulingItem;
    });

    var ProcessSchedulingItem = function ProcessSchedulingItem(Name, WaitingTime, ResponseTime, TurnaroundTime) {
      _classCallCheck(this, ProcessSchedulingItem);

      this.Name = Name;
      this.WaitingTime = WaitingTime;
      this.ResponseTime = ResponseTime;
      this.TurnaroundTime = TurnaroundTime;
    };
    /***/

  },

  /***/
  "./src/app/models/process-time-block.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/process-time-block.ts ***!
    \**********************************************/

  /*! exports provided: ProcessTimeBlock */

  /***/
  function srcAppModelsProcessTimeBlockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessTimeBlock", function () {
      return ProcessTimeBlock;
    });

    var ProcessTimeBlock = function ProcessTimeBlock(Name, StartTime, EndTime) {
      _classCallCheck(this, ProcessTimeBlock);

      this.Name = Name;
      this.StartTime = StartTime;
      this.EndTime = EndTime;
      this.Duration = this.EndTime - this.StartTime;
      this.IsFirstBlock = this.StartTime === 0;
    };
    /***/

  },

  /***/
  "./src/app/process-chart/process-chart.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/process-chart/process-chart.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProcessChartComponent */

  /***/
  function srcAppProcessChartProcessChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessChartComponent", function () {
      return ProcessChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/time-block-provider-service */
    "./src/app/services/time-block-provider-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _process_time_block_process_time_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../process-time-block/process-time-block.component */
    "./src/app/process-time-block/process-time-block.component.ts");

    function ProcessChartComponent_div_0_app_process_time_block_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-process-time-block", 5);
      }

      if (rf & 2) {
        var processTimeBlock_r4 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("processTimeBlock", processTimeBlock_r4)("pixelPerSecond", ctx_r1.pixelPerSecond);
      }
    }

    function ProcessChartComponent_div_0_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var processTimeBlock_r5 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", processTimeBlock_r5.Duration * ctx_r2.pixelPerSecond, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processTimeBlock_r5.Name);
      }
    }

    function ProcessChartComponent_div_0_td_16_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var processTimeBlock_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", processTimeBlock_r6.StartTime, " ");
      }
    }

    function ProcessChartComponent_div_0_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessChartComponent_div_0_td_16_div_2_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var processTimeBlock_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", processTimeBlock_r6.Duration * ctx_r3.pixelPerSecond, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processTimeBlock_r6.IsFirstBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", processTimeBlock_r6.EndTime, " ");
      }
    }

    function ProcessChartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pixel per second");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessChartComponent_div_0_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.pixelPerSecond = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProcessChartComponent_div_0_app_process_time_block_6_Template, 1, 2, "app-process-time-block", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Copy this Gantt chart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProcessChartComponent_div_0_th_13_Template, 3, 3, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProcessChartComponent_div_0_td_16_Template, 5, 4, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.pixelPerSecond);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.processTimeBlocks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.processTimeBlocks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.processTimeBlocks);
      }
    }

    var ProcessChartComponent = /*#__PURE__*/function () {
      function ProcessChartComponent(timeBlockProviderService) {
        _classCallCheck(this, ProcessChartComponent);

        this.timeBlockProviderService = timeBlockProviderService;
        this.subscriptions = [];
        this.processTimeBlocks = [];
        this.pixelPerSecond = 10;
      }

      _createClass(ProcessChartComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var subscription = this.timeBlockProviderService.timeBlocksCalculated.subscribe(function (timeBlocks) {
            _this.processTimeBlocks = timeBlocks;
          });
          this.subscriptions.push(subscription);
        }
      }]);

      return ProcessChartComponent;
    }();

    ProcessChartComponent.ɵfac = function ProcessChartComponent_Factory(t) {
      return new (t || ProcessChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__["TimeBlockProviderService"]));
    };

    ProcessChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessChartComponent,
      selectors: [["app-process-chart"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "scroll-container"], ["type", "number", 3, "ngModel", "ngModelChange"], [3, "processTimeBlock", "pixelPerSecond", 4, "ngFor", "ngForOf"], [3, "width", 4, "ngFor", "ngForOf"], [3, "processTimeBlock", "pixelPerSecond"], ["class", "start-time-text", 4, "ngIf"], [1, "end-time-text"], [1, "start-time-text"]],
      template: function ProcessChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProcessChartComponent_div_0_Template, 17, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processTimeBlocks.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _process_time_block_process_time_block_component__WEBPACK_IMPORTED_MODULE_4__["ProcessTimeBlockComponent"]],
      styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1jaGFydC9wcm9jZXNzLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtY2hhcnQvcHJvY2Vzcy1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGQsIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-process-chart',
          templateUrl: './process-chart.component.html',
          styleUrls: ['./process-chart.component.css']
        }]
      }], function () {
        return [{
          type: _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_1__["TimeBlockProviderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/process-input/process-input.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/process-input/process-input.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProcessInputComponent */

  /***/
  function srcAppProcessInputProcessInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessInputComponent", function () {
      return ProcessInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_process_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/process-item */
    "./src/app/models/process-item.ts");
    /* harmony import */


    var _services_process_calculation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/process-calculation-service */
    "./src/app/services/process-calculation-service.ts");
    /* harmony import */


    var _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/time-block-provider-service */
    "./src/app/services/time-block-provider-service.ts");
    /* harmony import */


    var _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/process-scheduling-provider-service */
    "./src/app/services/process-scheduling-provider-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProcessInputComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_div_2_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.selectedAlgorithm = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var algorithm_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", algorithm_r3)("ngModel", ctx_r0.selectedAlgorithm)("disabled", algorithm_r3 === "RR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", algorithm_r3, " ");
      }
    }

    function ProcessInputComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_div_3_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.quantum = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.quantum);
      }
    }

    function ProcessInputComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessInputComponent_tr_20_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var processItem_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onDeleteProcessItem(processItem_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_tr_20_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var processItem_r8 = ctx.$implicit;
          return processItem_r8.Name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_tr_20_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var processItem_r8 = ctx.$implicit;
          return processItem_r8.ArrivalTime = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_tr_20_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var processItem_r8 = ctx.$implicit;
          return processItem_r8.BurstTime = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessInputComponent_tr_20_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var processItem_r8 = ctx.$implicit;
          return processItem_r8.Priority = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var processItem_r8 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", processItem_r8.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", processItem_r8.ArrivalTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", processItem_r8.BurstTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", processItem_r8.Priority)("disabled", !ctx_r2.isPriorityUsed);
      }
    }

    var ProcessInputComponent = /*#__PURE__*/function () {
      function ProcessInputComponent(processCalculationService, timeBlockProviderService, processSchedulingProviderService) {
        _classCallCheck(this, ProcessInputComponent);

        this.processCalculationService = processCalculationService;
        this.timeBlockProviderService = timeBlockProviderService;
        this.processSchedulingProviderService = processSchedulingProviderService;
        this.algorithms = ['FCFS', 'SJF', 'SRTF', 'PS', 'RR'];
        this.processItems = [];
        this.isPriorityUsed = false;
        this.isRoundRobin = false;
      }

      _createClass(ProcessInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddProcessItem",
        value: function onAddProcessItem() {
          var processItem = new _models_process_item__WEBPACK_IMPORTED_MODULE_1__["ProcessItem"]();
          processItem.Name = this.generateNextName();
          this.processItems.push(processItem);
        }
      }, {
        key: "onDeleteProcessItem",
        value: function onDeleteProcessItem(processItem) {
          var index = this.processItems.indexOf(processItem);

          if (index !== -1) {
            this.processItems.splice(index, 1);
          }

          this.processItems.forEach(function (item, i) {
            item.Name = 'P' + (i + 1).toString();
          });
        }
      }, {
        key: "generateNextName",
        value: function generateNextName() {
          return 'P' + (this.processItems.length + 1).toString();
        }
      }, {
        key: "onClickStart",
        value: function onClickStart() {
          var timeBlocks = [];

          switch (this.internalSelectedAlgorithm) {
            case 'FCFS':
              timeBlocks = this.processCalculationService.calculateByFCFS(this.processItems);
              break;

            case 'SJF':
              timeBlocks = this.processCalculationService.calculateBySJF(this.processItems);
              break;

            case 'SRTF':
              timeBlocks = this.processCalculationService.calculateBySRTF(this.processItems);
              break;

            case 'PS':
              timeBlocks = this.processCalculationService.calculateByPS(this.processItems);
              break;

            case 'RR':
              timeBlocks = this.processCalculationService.calculateByRR(this.processItems, this.quantum);
              break;

            default:
              break;
          }

          this.timeBlockProviderService.emit(timeBlocks);
          var schedulingItems = this.processCalculationService.calculateSchedulingResult(timeBlocks, this.processItems);
          this.processSchedulingProviderService.emit(schedulingItems);
        }
      }, {
        key: "selectedAlgorithm",
        get: function get() {
          return this.internalSelectedAlgorithm;
        },
        set: function set(value) {
          if (value === 'PS') {
            this.isPriorityUsed = true;
          } else {
            this.isPriorityUsed = false;
          }

          if (value === 'RR') {
            this.isRoundRobin = true;
          } else {
            this.isRoundRobin = false;
            this.quantum = null;
          }

          this.internalSelectedAlgorithm = value;
        }
      }]);

      return ProcessInputComponent;
    }();

    ProcessInputComponent.ɵfac = function ProcessInputComponent_Factory(t) {
      return new (t || ProcessInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_process_calculation_service__WEBPACK_IMPORTED_MODULE_2__["ProcessCalculationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_3__["TimeBlockProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProcessSchedulingProviderService"]));
    };

    ProcessInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessInputComponent,
      selectors: [["app-process-input"]],
      decls: 24,
      vars: 3,
      consts: [[1, "row"], [1, "col-3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-9"], [1, "table-bordered"], [1, "delete-button-cell"], [3, "click"], [1, "process-name-cell"], [1, "process-arrival-cell"], [1, "process-burst-cell"], [1, "process-priority-cell"], ["type", "radio", "name", "algorithm", 3, "value", "ngModel", "disabled", "ngModelChange"], ["type", "number", 3, "ngModel", "ngModelChange"], [1, "delete-button-cell", 3, "click"], ["type", "text", "disabled", "", 1, "process-name-cell", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "process-arrival-cell", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "process-burst-cell", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "process-priority-cell", 3, "ngModel", "disabled", "ngModelChange"]],
      template: function ProcessInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessInputComponent_div_2_Template, 3, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessInputComponent_div_3_Template, 4, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessInputComponent_Template_button_click_9_listener() {
            return ctx.onAddProcessItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Arrival time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Burst time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProcessInputComponent_tr_20_Template, 12, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessInputComponent_Template_button_click_22_listener() {
            return ctx.onClickStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.algorithms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRoundRobin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.processItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]],
      styles: [".delete-button-cell[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n}\r\n\r\n.process-name-cell[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n}\r\n\r\n.process-arrival-cell[_ngcontent-%COMP%] {\r\n    width: 130px;\r\n}\r\n\r\n.process-burst-cell[_ngcontent-%COMP%] {\r\n    width: 130px;\r\n}\r\n\r\n.process-priority-cell[_ngcontent-%COMP%] {\r\n    width: 130px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1pbnB1dC9wcm9jZXNzLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWlucHV0L3Byb2Nlc3MtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtYnV0dG9uLWNlbGwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9jZXNzLW5hbWUtY2VsbCB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnByb2Nlc3MtYXJyaXZhbC1jZWxsIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLnByb2Nlc3MtYnVyc3QtY2VsbCB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5wcm9jZXNzLXByaW9yaXR5LWNlbGwge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-process-input',
          templateUrl: './process-input.component.html',
          styleUrls: ['./process-input.component.css']
        }]
      }], function () {
        return [{
          type: _services_process_calculation_service__WEBPACK_IMPORTED_MODULE_2__["ProcessCalculationService"]
        }, {
          type: _services_time_block_provider_service__WEBPACK_IMPORTED_MODULE_3__["TimeBlockProviderService"]
        }, {
          type: _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProcessSchedulingProviderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/process-scheduling-result/process-scheduling-result.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/process-scheduling-result/process-scheduling-result.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProcessSchedulingResultComponent */

  /***/
  function srcAppProcessSchedulingResultProcessSchedulingResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessSchedulingResultComponent", function () {
      return ProcessSchedulingResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/process-scheduling-provider-service */
    "./src/app/services/process-scheduling-provider-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProcessSchedulingResultComponent_div_0_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var processSchedulingItem_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processSchedulingItem_r2.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processSchedulingItem_r2.WaitingTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processSchedulingItem_r2.ResponseTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processSchedulingItem_r2.TurnaroundTime);
      }
    }

    function ProcessSchedulingResultComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copy this result table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Process");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Waiting time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Response time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Turnaround time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProcessSchedulingResultComponent_div_0_tr_15_Template, 13, 4, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "AVG");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.processSchedulingItems);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.averageWaitingTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.averageResponseTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.averageTurnaroundTime);
      }
    }

    var ProcessSchedulingResultComponent = /*#__PURE__*/function () {
      function ProcessSchedulingResultComponent(processSchedulingProviderService) {
        _classCallCheck(this, ProcessSchedulingResultComponent);

        this.processSchedulingProviderService = processSchedulingProviderService;
        this.subscriptions = [];
        this.processSchedulingItems = [];
      }

      _createClass(ProcessSchedulingResultComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var subscription = this.processSchedulingProviderService.processSchedulingItemsCalculated.subscribe(function (schedulingItems) {
            _this2.processSchedulingItems = schedulingItems;
          });
          this.subscriptions.push(subscription);
        }
      }, {
        key: "findAverage",
        value: function findAverage(propertySelctor) {
          var average = this.processSchedulingItems.map(propertySelctor).reduce(function (previous, current) {
            return previous + current;
          }) / this.processSchedulingItems.length;
          return average.toFixed(2);
        }
      }, {
        key: "averageWaitingTime",
        get: function get() {
          return this.findAverage(function (x) {
            return x.WaitingTime;
          });
        }
      }, {
        key: "averageResponseTime",
        get: function get() {
          return this.findAverage(function (x) {
            return x.ResponseTime;
          });
        }
      }, {
        key: "averageTurnaroundTime",
        get: function get() {
          return this.findAverage(function (x) {
            return x.TurnaroundTime;
          });
        }
      }]);

      return ProcessSchedulingResultComponent;
    }();

    ProcessSchedulingResultComponent.ɵfac = function ProcessSchedulingResultComponent_Factory(t) {
      return new (t || ProcessSchedulingResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProcessSchedulingProviderService"]));
    };

    ProcessSchedulingResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessSchedulingResultComponent,
      selectors: [["app-process-scheduling-result"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "process-name-cell"], [1, "process-waiting-cell"], [1, "process-response-cell"], [1, "process-turnaround-cell"], [4, "ngFor", "ngForOf"]],
      template: function ProcessSchedulingResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProcessSchedulingResultComponent_div_0_Template, 25, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processSchedulingItems.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid black;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1zY2hlZHVsaW5nLXJlc3VsdC9wcm9jZXNzLXNjaGVkdWxpbmctcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy1zY2hlZHVsaW5nLXJlc3VsdC9wcm9jZXNzLXNjaGVkdWxpbmctcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessSchedulingResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-process-scheduling-result',
          templateUrl: './process-scheduling-result.component.html',
          styleUrls: ['./process-scheduling-result.component.css']
        }]
      }], function () {
        return [{
          type: _services_process_scheduling_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProcessSchedulingProviderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/process-time-block/process-time-block.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/process-time-block/process-time-block.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProcessTimeBlockComponent */

  /***/
  function srcAppProcessTimeBlockProcessTimeBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessTimeBlockComponent", function () {
      return ProcessTimeBlockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProcessTimeBlockComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.processTimeBlock.StartTime, " ");
      }
    }

    var ProcessTimeBlockComponent = /*#__PURE__*/function () {
      function ProcessTimeBlockComponent() {
        _classCallCheck(this, ProcessTimeBlockComponent);
      }

      _createClass(ProcessTimeBlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "width",
        get: function get() {
          return this.processTimeBlock.Duration * this.pixelPerSecond;
        }
      }]);

      return ProcessTimeBlockComponent;
    }();

    ProcessTimeBlockComponent.ɵfac = function ProcessTimeBlockComponent_Factory(t) {
      return new (t || ProcessTimeBlockComponent)();
    };

    ProcessTimeBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessTimeBlockComponent,
      selectors: [["app-process-time-block"]],
      inputs: {
        processTimeBlock: "processTimeBlock",
        pixelPerSecond: "pixelPerSecond"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "process-time-block"], [1, "process-name-text"], ["class", "start-time-text", 4, "ngIf"], [1, "end-time-text"], [1, "start-time-text"]],
      template: function ProcessTimeBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProcessTimeBlockComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.processTimeBlock.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processTimeBlock.IsFirstBlock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.processTimeBlock.EndTime, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtdGltZS1ibG9jay9wcm9jZXNzLXRpbWUtYmxvY2suY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessTimeBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-process-time-block',
          templateUrl: './process-time-block.component.html',
          styleUrls: ['./process-time-block.component.css']
        }]
      }], function () {
        return [];
      }, {
        processTimeBlock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pixelPerSecond: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/process-calculation-service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/process-calculation-service.ts ***!
    \*********************************************************/

  /*! exports provided: ProcessCalculationService */

  /***/
  function srcAppServicesProcessCalculationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessCalculationService", function () {
      return ProcessCalculationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/process-time-block */
    "./src/app/models/process-time-block.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_process_scheduling_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/process-scheduling-item */
    "./src/app/models/process-scheduling-item.ts");

    var ProcessCalculationService = /*#__PURE__*/function () {
      function ProcessCalculationService() {
        _classCallCheck(this, ProcessCalculationService);
      }

      _createClass(ProcessCalculationService, [{
        key: "calculateByFCFS",
        value: function calculateByFCFS(processes) {
          var timeBlocks = [];
          var copiedProcesses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(processes);
          copiedProcesses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(copiedProcesses, function (x) {
            return x.ArrivalTime;
          });
          var startTime = 0;
          var endTime = 0;

          var _iterator = _createForOfIteratorHelper(copiedProcesses),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var process = _step.value;

              if (process.ArrivalTime > endTime) {
                startTime = endTime;
                endTime = process.ArrivalTime;
                timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"]('-', startTime, process.ArrivalTime));
              }

              startTime = endTime;
              endTime = startTime + process.BurstTime;
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"](process.Name, startTime, endTime));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return timeBlocks;
        }
      }, {
        key: "calculateBySJF",
        value: function calculateBySJF(processes) {
          var _this3 = this;

          var timeBlocks = [];
          var copiedProcesses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(processes);
          var startTime = 0;
          var endTime = 0;

          var _loop = function _loop() {
            var availableProcesses = _this3.filterAvailableProcesses(copiedProcesses, endTime);

            if (availableProcesses.length === 0) {
              var nextProcess = _this3.findProcessWithMinArrivalTime(copiedProcesses);

              startTime = endTime;
              endTime = nextProcess.ArrivalTime;
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"]('-', startTime, endTime));
              availableProcesses = _this3.filterAvailableProcesses(copiedProcesses, endTime);
            }

            var minBurstTime = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["min"])(availableProcesses.map(function (x) {
              return x.BurstTime;
            })); // Take the first process with min burst time

            var process = availableProcesses.find(function (x) {
              return x.BurstTime === minBurstTime;
            });
            startTime = endTime;
            endTime = startTime + process.BurstTime;
            timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"](process.Name, startTime, endTime));

            _this3.removeProcessItemFromCollection(process, copiedProcesses);
          };

          while (copiedProcesses.length !== 0) {
            _loop();
          }

          return timeBlocks;
        }
      }, {
        key: "calculateBySRTF",
        value: function calculateBySRTF(processes) {
          var _this4 = this;

          var timeBlocks = [];
          var copiedProcesses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(processes);
          var startTime = 0;
          var endTime = 0;
          var currentProcess = null;

          var _loop2 = function _loop2() {
            var availableProcesses = _this4.filterAvailableProcesses(copiedProcesses, endTime);

            if (availableProcesses.length === 0) {
              var nextProcess = _this4.findProcessWithMinArrivalTime(copiedProcesses);

              startTime = endTime;
              endTime = nextProcess.ArrivalTime;
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"]('-', startTime, endTime));
              availableProcesses = _this4.filterAvailableProcesses(copiedProcesses, endTime);
            }

            var minRemainingTime = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["min"])(availableProcesses.map(function (x) {
              return x.BurstTime;
            }));
            var minRemainingTimeProcess = availableProcesses.find(function (x) {
              return x.BurstTime === minRemainingTime;
            });

            if (currentProcess === null) {
              currentProcess = minRemainingTimeProcess;
            } else if (currentProcess === minRemainingTimeProcess) {
              // Not pre-empted yet
              endTime += 1;
              currentProcess.BurstTime -= 1;
            } else {
              // A shorter process was found, current process is about to be pre-empted
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"](currentProcess.Name, startTime, endTime));
              currentProcess = minRemainingTimeProcess;
              startTime = endTime;
            }

            if (currentProcess.BurstTime === 0) {
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"](currentProcess.Name, startTime, endTime));

              _this4.removeProcessItemFromCollection(currentProcess, copiedProcesses);

              currentProcess = null;
              startTime = endTime;
            }
          };

          while (copiedProcesses.length !== 0) {
            _loop2();
          }

          return timeBlocks;
        }
      }, {
        key: "calculateByPS",
        value: function calculateByPS(processes) {
          var _this5 = this;

          var timeBlocks = [];
          var copiedProcesses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(processes);
          var startTime = 0;
          var endTime = 0;

          var _loop3 = function _loop3() {
            var availableProcesses = _this5.filterAvailableProcesses(copiedProcesses, endTime);

            if (availableProcesses.length === 0) {
              var nextProcess = _this5.findProcessWithMinArrivalTime(copiedProcesses);

              startTime = endTime;
              endTime = nextProcess.ArrivalTime;
              timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"]('-', startTime, endTime));
              availableProcesses = _this5.filterAvailableProcesses(copiedProcesses, endTime);
            } // 1 highest - n lowest


            var highestPriority = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["min"])(availableProcesses.map(function (x) {
              return x.Priority;
            }));
            var process = copiedProcesses.find(function (x) {
              return x.Priority === highestPriority;
            });
            startTime = endTime;
            endTime = endTime + process.BurstTime;
            timeBlocks.push(new _models_process_time_block__WEBPACK_IMPORTED_MODULE_1__["ProcessTimeBlock"](process.Name, startTime, endTime));

            _this5.removeProcessItemFromCollection(process, copiedProcesses);
          };

          while (copiedProcesses.length !== 0) {
            _loop3();
          }

          return timeBlocks;
        }
      }, {
        key: "calculateByRR",
        value: function calculateByRR(processes, quantum) {
          var timeBlocks = []; // const copiedProcesses = cloneDeep(processes);
          // const processQueue = [];
          // let firstProcess = sortBy(copiedProcesses, x => x.ArrivalTime)[0];
          // processQueue.push(firstProcess);
          // this.removeProcessItemFromCollection(firstProcess, copiedProcesses);
          // let startTime = 0;
          // let endTime = 0;
          // let currentProcess: ProcessItem = firstProcess;
          // while (copiedProcesses.length !== 0)
          // {
          //     // At the moment when a new process comes but the current process runs out of time and not yet finishes
          //     // This new process will be enqueued before putting current process to the back of the queue
          //     let availableProcesses = this.filterAvailableProcesses(copiedProcesses, endTime);
          //     if (availableProcesses.length === 0)
          //     {
          //         let nextProcess = this.findProcessWithMinArrivalTime(copiedProcesses);
          //         startTime = endTime;
          //         endTime = nextProcess.ArrivalTime;
          //         timeBlocks.push(new ProcessTimeBlock('-', startTime, endTime));
          //         availableProcesses = this.filterAvailableProcesses(copiedProcesses, endTime);
          //     }
          //     currentProcess.BurstTime -= 1;
          //     endTime += 1;
          //     for (let process of availableProcesses) {
          //         processQueue.push(process);
          //         this.removeProcessItemFromCollection(process, copiedProcesses);
          //     }
          //     if (currentProcess.BurstTime === 0) {
          //         timeBlocks.push(new ProcessTimeBlock(currentProcess.Name, startTime, endTime));
          //         startTime = endTime;
          //         processQueue.shift();
          //         if (processQueue.length > 0) {
          //             currentProcess = processQueue[0];
          //         }
          //     } else {
          //         let duration = endTime - startTime;
          //         if (duration === quantum) {
          //             timeBlocks.push(new ProcessTimeBlock(currentProcess.Name, startTime, endTime));
          //             startTime = endTime;
          //             // Move to the back of queue
          //             let outOfTimeProcess = processQueue.shift();
          //             processQueue.push(outOfTimeProcess);
          //             currentProcess = processQueue[0];
          //         }
          //     }
          // }

          return timeBlocks;
        }
      }, {
        key: "calculateSchedulingResult",
        value: function calculateSchedulingResult(timeBlocks, processes) {
          var schedulingItems = [];

          var _iterator2 = _createForOfIteratorHelper(processes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var process = _step2.value;
              // These find methods assume that timeblocks are already sorted by start time ASC
              // i.e what it looks like in GUI
              var waitingTime = this.calculateWaitingTime(timeBlocks, process);
              var responseTime = this.calculateResponseTime(timeBlocks, process);
              var turnaroundTime = this.calculateTurnaroundTime(timeBlocks, process);
              var schedulingItem = new _models_process_scheduling_item__WEBPACK_IMPORTED_MODULE_3__["ProcessSchedulingItem"](process.Name, waitingTime, responseTime, turnaroundTime);
              schedulingItems.push(schedulingItem);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return schedulingItems;
        }
      }, {
        key: "calculateWaitingTime",
        value: function calculateWaitingTime(timeBlocks, process) {
          var turnaroundTime = this.calculateTurnaroundTime(timeBlocks, process);
          return turnaroundTime - process.BurstTime;
        }
      }, {
        key: "calculateResponseTime",
        value: function calculateResponseTime(timeBlocks, process) {
          var timeBlock = timeBlocks.find(function (x) {
            return x.Name === process.Name;
          });
          return timeBlock.StartTime - process.ArrivalTime;
        }
      }, {
        key: "calculateTurnaroundTime",
        value: function calculateTurnaroundTime(timeBlocks, process) {
          var timeBlock = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["findLast"])(timeBlocks, function (x) {
            return x.Name === process.Name;
          });
          return timeBlock.EndTime - process.ArrivalTime;
        }
      }, {
        key: "removeProcessItemFromCollection",
        value: function removeProcessItemFromCollection(item, collection) {
          var index = collection.indexOf(item);

          if (index !== -1) {
            collection.splice(index, 1);
          }
        } // Can't use .filter() because it returns new array with new reference

      }, {
        key: "filterAvailableProcesses",
        value: function filterAvailableProcesses(processes, endTime) {
          var availableProcesses = [];

          for (var i = 0; i < processes.length; i++) {
            if (processes[i].ArrivalTime <= endTime) {
              availableProcesses.push(processes[i]);
            }
          }

          return availableProcesses;
        }
      }, {
        key: "findProcessWithMinArrivalTime",
        value: function findProcessWithMinArrivalTime(processes) {
          var minArrivalTime = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["min"])(processes.map(function (x) {
            return x.ArrivalTime;
          }));
          return processes.find(function (x) {
            return x.ArrivalTime === minArrivalTime;
          });
        }
      }]);

      return ProcessCalculationService;
    }();

    ProcessCalculationService.ɵfac = function ProcessCalculationService_Factory(t) {
      return new (t || ProcessCalculationService)();
    };

    ProcessCalculationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProcessCalculationService,
      factory: ProcessCalculationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessCalculationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/process-scheduling-provider-service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/process-scheduling-provider-service.ts ***!
    \*****************************************************************/

  /*! exports provided: ProcessSchedulingProviderService */

  /***/
  function srcAppServicesProcessSchedulingProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessSchedulingProviderService", function () {
      return ProcessSchedulingProviderService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProcessSchedulingProviderService = /*#__PURE__*/function () {
      function ProcessSchedulingProviderService() {
        _classCallCheck(this, ProcessSchedulingProviderService);

        this.processSchedulingItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.processSchedulingItemsCalculated = this.processSchedulingItemsSource.asObservable();
      }

      _createClass(ProcessSchedulingProviderService, [{
        key: "emit",
        value: function emit(processSchedulingItems) {
          this.processSchedulingItemsSource.next(processSchedulingItems);
        }
      }]);

      return ProcessSchedulingProviderService;
    }();

    ProcessSchedulingProviderService.ɵfac = function ProcessSchedulingProviderService_Factory(t) {
      return new (t || ProcessSchedulingProviderService)();
    };

    ProcessSchedulingProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProcessSchedulingProviderService,
      factory: ProcessSchedulingProviderService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProcessSchedulingProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/time-block-provider-service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/time-block-provider-service.ts ***!
    \*********************************************************/

  /*! exports provided: TimeBlockProviderService */

  /***/
  function srcAppServicesTimeBlockProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeBlockProviderService", function () {
      return TimeBlockProviderService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TimeBlockProviderService = /*#__PURE__*/function () {
      function TimeBlockProviderService() {
        _classCallCheck(this, TimeBlockProviderService);

        this.timeBlocksSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeBlocksCalculated = this.timeBlocksSource.asObservable();
      }

      _createClass(TimeBlockProviderService, [{
        key: "emit",
        value: function emit(processTimeBlocks) {
          this.timeBlocksSource.next(processTimeBlocks);
        }
      }]);

      return TimeBlockProviderService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lpnam\Desktop\process-scheduling\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map