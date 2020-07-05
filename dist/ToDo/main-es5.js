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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./to-do-form/to-do-form.component */
    "./src/app/to-do-form/to-do-form.component.ts");
    /* harmony import */


    var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./to-do/to-do.component */
    "./src/app/to-do/to-do.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.titleApp = 'Angular toDo app';
        this.isOpen = true;
        this.Todo = false;
      }

      _createClass(AppComponent, [{
        key: "toggle",
        value: function toggle() {
          this.isOpen = !this.isOpen;
          this.Todo = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 3,
      consts: [[1, "container"], [1, "hello", 3, "click"], [1, "container-todo"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, this my first ToDo aplication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click to start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-to-do-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-to-do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@myInsertRemoveTrigger", ctx.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openLIstToDO", ctx.Todo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleApp);
        }
      },
      directives: [_to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_2__["ToDoFormComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_3__["ToDoComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n\n.container[_ngcontent-%COMP%]   .container-todo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  max-width: 500px;\n  height: 100vh;\n  margin: 40px auto 40px auto;\n  padding: 0 20px 0 20px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n  overflow: auto;\n}\n\n.container[_ngcontent-%COMP%]   .container-todo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  margin: 0;\n  color: #575757;\n}\n\n.container[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n}\n\n.container[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  font-size: 54px;\n  color: #575757;\n  cursor: default;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: addTitle 2s 1;\n          animation: addTitle 2s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\n@-webkit-keyframes addTitle {\n  0% {\n    opacity: 0;\n    transform: translateY(-200%);\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes addTitle {\n  0% {\n    opacity: 0;\n    transform: translateY(-200%);\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n  padding: 0;\n  font-size: 24px;\n  color: #909090;\n  opacity: 0;\n  -webkit-animation: addText 2s 1;\n          animation: addText 2s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  cursor: default;\n}\n\n@-webkit-keyframes addText {\n  0% {\n    opacity: 0;\n    transform: translateY(200%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes addText {\n  0% {\n    opacity: 0;\n    transform: translateY(200%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxUb21cXERlc2t0b3BcXFByb2plY3RcXG15Rmlyc3RUb0RvT25Bbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQXRCRztBQ3VCVDs7QURBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBdkNHO0VBd0NILGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ0VOOztBRERNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUNHUjtFREZNO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDSVI7QUFDRjs7QURYTTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDR1I7RURGTTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ0lSO0FBQ0Y7O0FESkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDTU47O0FETE07RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ09SO0VETk07SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUNRUjtBQUNGOztBRGZNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUNPUjtFRE5NO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDUVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5OiAjZGNkY2RjXHJcbiRzdWJtaXQ6ICMwMEZGMzNcclxuJHJlZDogI0Y1QTlBOVxyXG4kZGFya2VuOiAjNTc1NzU3XHJcbipcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWZcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbi5jb250YWluZXJcclxuICBoZWlnaHQ6IDEwMCVcclxuICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgLmNvbnRhaW5lci10b2RvXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIG1heC13aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIG1hcmdpbjogNDBweCAgYXV0byA0MHB4IGF1dG9cclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHhcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDEwMFxyXG4gICAgb3ZlcmZsb3c6IGF1dG9cclxuICAgIGgxXHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgbWFyZ2luOiAwXHJcbiAgICAgIGNvbG9yOiAkZGFya2VuXHJcbiAgLmhlbGxvXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBtYXJnaW46IDBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgXHJcbiAgICBoMVxyXG4gICAgICBtYXJnaW46IDBcclxuICAgICAgcGFkZGluZzogMFxyXG4gICAgICBmb250LXdlaWdodDogMTAwXHJcbiAgICAgIGZvbnQtc2l6ZTogNTRweFxyXG4gICAgICBjb2xvcjogJGRhcmtlblxyXG4gICAgICBjdXJzb3I6IGRlZmF1bHRcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgICBhbmltYXRpb246IGFkZFRpdGxlIDJzIDFcclxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzXHJcbiAgICAgIEBrZXlmcmFtZXMgYWRkVGl0bGVcclxuICAgICAgICAwJVxyXG4gICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKVxyXG4gICAgICAgIDEwMCVcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgcFxyXG4gICAgICBtYXJnaW46IDE1cHggMCAwIDAgXHJcbiAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgZm9udC1zaXplOiAyNHB4XHJcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGdyYXksIDMwJSApXHJcbiAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgYW5pbWF0aW9uOiBhZGRUZXh0IDJzIDFcclxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyc1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHRcclxuICAgICAgQGtleWZyYW1lcyBhZGRUZXh0XHJcbiAgICAgICAgMCVcclxuICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKVxyXG4gICAgICAgIDEwMCVcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG5cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRvZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogNDBweCBhdXRvIDQwcHggYXV0bztcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyLXRvZG8gaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzU3NTc1Nztcbn1cbi5jb250YWluZXIgLmhlbGxvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFpbmVyIC5oZWxsbyBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiA1NHB4O1xuICBjb2xvcjogIzU3NTc1NztcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYWRkVGl0bGUgMnMgMTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbkBrZXlmcmFtZXMgYWRkVGl0bGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5oZWxsbyBwIHtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjOTA5MDkwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGFkZFRleHQgMnMgMTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbkBrZXlmcmFtZXMgYWRkVGV4dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myInsertRemoveTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          display: 'flex',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          display: 'none',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s linear')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openLIstToDO', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(0)',
          height: '100vh'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(-200%)',
          height: '50%'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true <=> false', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.6s linear')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myInsertRemoveTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'flex',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'none',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s linear')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openLIstToDO', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateY(0)',
            height: '100vh'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateY(-200%)',
            height: '50%'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true <=> false', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.6s linear')])])]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./to-do/to-do.component */
    "./src/app/to-do/to-do.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./to-do-form/to-do-form.component */
    "./src/app/to-do-form/to-do-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_4__["ToDoComponent"], _to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_6__["ToDoFormComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_4__["ToDoComponent"], _to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_6__["ToDoFormComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/to-do.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/to-do.service.ts ***!
    \*****************************************/

  /*! exports provided: ToDoService */

  /***/
  function srcAppSharedToDoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoService", function () {
      return ToDoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ToDoService = /*#__PURE__*/function () {
      function ToDoService(http) {
        _classCallCheck(this, ToDoService);

        this.http = http;
        this.toDo = [];
      }

      _createClass(ToDoService, [{
        key: "fetchToDo",
        value: function fetchToDo() {
          var _this = this;

          return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=0').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (toDo) {
            return _this.toDo = toDo;
          }));
        }
      }, {
        key: "deleteToDo",
        value: function deleteToDo(id) {
          this.toDo = this.toDo.filter(function (t) {
            return t.id !== id;
          });
        }
      }, {
        key: "addTodo",
        value: function addTodo(toDo) {
          this.toDo.push(toDo);
        }
      }]);

      return ToDoService;
    }();

    ToDoService.ɵfac = function ToDoService_Factory(t) {
      return new (t || ToDoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ToDoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToDoService,
      factory: ToDoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/to-do-form/to-do-form.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/to-do-form/to-do-form.component.ts ***!
    \****************************************************/

  /*! exports provided: ToDoFormComponent */

  /***/
  function srcAppToDoFormToDoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoFormComponent", function () {
      return ToDoFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_to_do_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/to-do.service */
    "./src/app/shared/to-do.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ToDoFormComponent = /*#__PURE__*/function () {
      function ToDoFormComponent(ToDoService) {
        _classCallCheck(this, ToDoFormComponent);

        this.ToDoService = ToDoService;
        this.title = '';
        this.placeholter = 'Enter you task';
      }

      _createClass(ToDoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addTodo",
        value: function addTodo() {
          var toDo = {
            title: this.title,
            completed: false,
            id: Date.now()
          };

          if (this.title.trim()) {
            this.ToDoService.addTodo(toDo);
            this.placeholter = 'Enter you task';
          } else {
            this.placeholter = 'Enter a valid task';
          }

          this.title = '';
        }
      }]);

      return ToDoFormComponent;
    }();

    ToDoFormComponent.ɵfac = function ToDoFormComponent_Factory(t) {
      return new (t || ToDoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_to_do_service__WEBPACK_IMPORTED_MODULE_1__["ToDoService"]));
    };

    ToDoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToDoFormComponent,
      selectors: [["app-to-do-form"]],
      decls: 5,
      vars: 2,
      consts: [["type", "text", "name", "addTodo", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "submit", 3, "click"]],
      template: function ToDoFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToDoFormComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFormComponent_Template_button_click_2_listener() {
            return ctx.addTodo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 40px auto 0 auto;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #80ff99;\n  padding: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 5px 0 5px 30px;\n  color: #575757;\n  font-size: 18px;\n  background-color: #ffffff;\n}\n\nform[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: inherit;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 7px 14px 7px 14px;\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  color: #575757;\n  background: none;\n  border-left: 1px solid #dcdcdc;\n  transition: all 0.5s;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #80ff99;\n  border-left: 1px solid #80ff99;\n  transition: all 0.5s;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  transform: rotateX(180deg);\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG8tZG8tZm9ybS9DOlxcVXNlcnNcXFRvbVxcRGVza3RvcFxcUHJvamVjdFxcbXlGaXJzdFRvRG9PbkFuZ3VsYXIvc3JjXFxhcHBcXHRvLWRvLWZvcm1cXHRvLWRvLWZvcm0uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3RvLWRvLWZvcm0vdG8tZG8tZm9ybS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURJQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FqQks7RUFrQkwsZUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBREFFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0E3Qks7RUE4QkwsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDRUo7O0FEREk7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUNHTjs7QURGTTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQ0lSOztBREhJO0VBQ0UsZ0JBQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL3RvLWRvLWZvcm0vdG8tZG8tZm9ybS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5OiAjZGNkY2RjXHJcbiRzdWJtaXQ6ICMwMEZGMzNcclxuJHJlZDogI0Y1QTlBOVxyXG4kZGFya2VuOiAjNTc1NzU3XHJcbipcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWZcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbmZvcm1cclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgbWFyZ2luOjQwcHggYXV0byAwIGF1dG9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGVuKCRzdWJtaXQsIDI1JSlcclxuICBwYWRkaW5nOiAwXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMzBweFxyXG4gICAgY29sb3I6ICRkYXJrZW5cclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxyXG4gICAgJjpmb2N1c1xyXG4gICAgICBvdXRsaW5lOiBpbmhlcml0XHJcbiAgYnV0dG9uXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIG1hcmdpbjogMFxyXG4gICAgcGFkZGluZzogN3B4IDE0cHggN3B4IDE0cHhcclxuICAgIGZvbnQtc2l6ZTogMjJweFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgY29sb3I6ICRkYXJrZW5cclxuICAgIGJhY2tncm91bmQ6IG5vbmVcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGdyYXlcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHN1Ym1pdCwgMjUlKVxyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJHN1Ym1pdCwgMjUlKVxyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41c1xyXG4gICAgICBzcGFuXHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmZcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKVxyXG4gICAgJjpmb2N1c1xyXG4gICAgICBvdXRsaW5lOiBpbmhlcml0XHJcbiAgICAgICIsIioge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MGZmOTk7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbmZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAzMHB4O1xuICBjb2xvcjogIzU3NTc1NztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDdweCAxNHB4IDdweCAxNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTc1NzU3O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2RjZGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBmZjk5O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4MGZmOTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuZm9ybSBidXR0b246aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbmZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-to-do-form',
          templateUrl: './to-do-form.component.html',
          styleUrls: ['./to-do-form.component.sass']
        }]
      }], function () {
        return [{
          type: _shared_to_do_service__WEBPACK_IMPORTED_MODULE_1__["ToDoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/to-do/to-do.component.ts":
  /*!******************************************!*\
    !*** ./src/app/to-do/to-do.component.ts ***!
    \******************************************/

  /*! exports provided: ToDoComponent */

  /***/
  function srcAppToDoToDoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoComponent", function () {
      return ToDoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_to_do_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/to-do.service */
    "./src/app/shared/to-do.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ToDoComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_div_0_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var todo_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r5.deleteToDo(todo_r3.id);
          return ctx_r5["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2573");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx_r2.deleteTask ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r3.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r4 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r3.title);
      }
    }

    function ToDoComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToDoComponent_div_0_div_1_Template, 6, 4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ToDoService.toDo);
      }
    }

    function ToDoComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "load..................");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ToDoComponent = /*#__PURE__*/function () {
      function ToDoComponent(ToDoService) {
        _classCallCheck(this, ToDoComponent);

        this.ToDoService = ToDoService;
        this.loading = true;
        this.deleteTask = true;
      }

      _createClass(ToDoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ToDoService.fetchToDo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000)).subscribe(function () {
            _this2.loading = false;
          });
        }
      }, {
        key: "deleteToDo",
        value: function deleteToDo(id) {
          this.ToDoService.deleteToDo(id);
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.deleteTask != this.deleteTask;
        }
      }]);

      return ToDoComponent;
    }();

    ToDoComponent.ɵfac = function ToDoComponent_Factory(t) {
      return new (t || ToDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_to_do_service__WEBPACK_IMPORTED_MODULE_3__["ToDoService"]));
    };

    ToDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToDoComponent,
      selectors: [["app-to-do"]],
      decls: 2,
      vars: 2,
      consts: [["class", "items", 4, "ngIf"], ["class", "preloader", 4, "ngIf"], [1, "items"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["type", "checkbox", 3, "checked"], [3, "id"], ["id", "delete", 3, "click"], [1, "preloader"]],
      template: function ToDoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToDoComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToDoComponent_p_1_Template, 2, 0, "p", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n\n.items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #dcdcdc;\n  border-right: 1px solid #dcdcdc;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #dcdcdc;\n  background: transparent;\n  padding: 15px 0 15px 15px;\n  position: relative;\n}\n\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 0 5px 0 5px;\n  margin: 0;\n  font-size: 18px;\n  color: #575757;\n  text-align: left;\n  max-width: 420px;\n  cursor: default;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n  border: none;\n  display: inline-block;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 21px;\n  width: 21px;\n  outline: none;\n  vertical-align: top;\n  position: relative;\n  border-radius: 7px;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 18px;\n  border: 2px solid #dcdcdc;\n  border-top: none;\n  border-left: none;\n  left: 7px;\n  top: -1px;\n  transform: rotate(45deg);\n  position: absolute;\n  transition: all 0.3s;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 18px;\n  border: 2px solid #66ff85;\n  border-top: none;\n  border-left: none;\n  left: 7px;\n  top: -1px;\n  transform: rotate(45deg);\n  position: absolute;\n  transition: all 0.3s;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked::after {\n  width: 10px;\n  height: 18px;\n  border: 2px solid #00FF33;\n  border-top: none;\n  border-left: none;\n  left: 7px;\n  top: -1px;\n  transform: rotate(45deg);\n  transition: all 0.3s;\n}\n\n.item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + p[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: #dcdcdc;\n          text-decoration-color: #dcdcdc;\n  color: #dcdcdc;\n}\n\n.item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  opacity: 0;\n  border: none;\n  background: none;\n  font-size: 11px;\n  margin: 0;\n  padding: 0;\n  color: #F5A9A9;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n.item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ea4e4e;\n}\n\n.item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: inherit;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  transition: all 0.4s;\n}\n\n.item[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-15px);\n}\n\n.item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #0b0b0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG8tZG8vQzpcXFVzZXJzXFxUb21cXERlc2t0b3BcXFByb2plY3RcXG15Rmlyc3RUb0RvT25Bbmd1bGFyL3NyY1xcYXBwXFx0by1kb1xcdG8tZG8uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3RvLWRvL3RvLWRvLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0RGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FyQks7RUFzQkwsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0dOOztBRERNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDR1I7O0FERkk7RUFDRSx1QkFBQTtBQ0lOOztBREhNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNLUjs7QURKSTtFQUNFLDZCQUFBO0VBQ0Esc0NBbkZDO1VBbUZELDhCQW5GQztFQW9GRCxjQXBGQztBQzBGUDs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQS9GRTtFQWdHRixlQUFBO0VBQ0Esb0JBQUE7QUNPSjs7QUROSTtFQUNFLGNBQUE7QUNRTjs7QURQSTtFQUNFLGdCQUFBO0FDU047O0FEUkU7RUFDRSxvQkFBQTtBQ1VKOztBRFRJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0FDV047O0FEVkk7RUFDRSxjQUFBO0FDWU4iLCJmaWxlIjoic3JjL2FwcC90by1kby90by1kby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5OiAjZGNkY2RjXHJcbiRzdWJtaXQ6ICMwMEZGMzNcdFxyXG4kcmVkOiAjRjVBOUE5XHJcbiRkYXJrZW46ICM1NzU3NTdcclxuKlxyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZlxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuLml0ZW1zXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmF5XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyYXlcclxuLml0ZW1cclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheVxyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMTVweFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIHBcclxuICAgIGRpc3BsYXk6IGlubGluZVxyXG4gICAgcGFkZGluZzogMCA1cHggMCA1cHhcclxuICAgIG1hcmdpbjogMFxyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICBjb2xvcjogJGRhcmtlblxyXG4gICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgbWF4LXdpZHRoOiA0MjBweFxyXG4gICAgY3Vyc29yOiBkZWZhdWx0XHJcbiAgICBcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1cclxuICAgIG1hcmdpbjogMCAxNXB4IDAgMFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIHBhZGRpbmc6IDBcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZVxyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lXHJcbiAgICBoZWlnaHQ6IDIxcHhcclxuICAgIHdpZHRoOiAyMXB4XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweFxyXG4gICAgJjphZnRlciBcclxuICAgICAgY29udGVudDogJydcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgd2lkdGg6IDEwcHhcclxuICAgICAgaGVpZ2h0OiAxOHB4XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmF5XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmVcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmVcclxuICAgICAgbGVmdDogN3B4XHJcbiAgICAgIHRvcDogLTFweFxyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZylcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICY6OmFmdGVyXHJcbiAgICAgICAgY29udGVudDogJydcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHdpZHRoOiAxMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRlbigkc3VibWl0LCAyMCUpXHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZVxyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lXHJcbiAgICAgICAgbGVmdDogN3B4XHJcbiAgICAgICAgdG9wOiAtMXB4XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3NcclxuICAgICY6Y2hlY2tlZFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4gICAgICAmOjphZnRlclxyXG4gICAgICAgIHdpZHRoOiAxMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHN1Ym1pdFxyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmVcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZVxyXG4gICAgICAgIGxlZnQ6IDdweFxyXG4gICAgICAgIHRvcDogLTFweFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKVxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXHJcbiAgICAmOmNoZWNrZWQgKyBwXHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGdyYXlcclxuICAgICAgY29sb3I6ICRncmF5XHJcbiAgYnV0dG9uXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHJpZ2h0OiAwXHJcbiAgICB3aWR0aDogMTVweFxyXG4gICAgaGVpZ2h0OiAxNXB4XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6IG5vbmVcclxuICAgIGZvbnQtc2l6ZTogMTFweFxyXG4gICAgbWFyZ2luOiAwXHJcbiAgICBwYWRkaW5nOiAwXHJcbiAgICBjb2xvcjogJHJlZFxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40c1xyXG4gICAgJjpob3ZlclxyXG4gICAgICBjb2xvcjogZGFya2VuKCRyZWQsIDIwJSlcclxuICAgICY6Zm9jdXNcclxuICAgICAgb3V0bGluZTogaW5oZXJpdFxyXG4gICY6aG92ZXJcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzXHJcbiAgICBidXR0b25cclxuICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpXHJcbiAgICBwXHJcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGRhcmtlbiwgMzAlKSIsIioge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLml0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGNkY2RjO1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLml0ZW0gcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzU3NTc1NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLml0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyMXB4O1xuICB3aWR0aDogMjFweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGNkY2RjO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgbGVmdDogN3B4O1xuICB0b3A6IC0xcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjZmZjg1O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgbGVmdDogN3B4O1xuICB0b3A6IC0xcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmFmdGVyIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwRkYzMztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAtMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLml0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIHAge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZGNkY2RjO1xuICBjb2xvcjogI2RjZGNkYztcbn1cbi5pdGVtIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRjVBOUE5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLml0ZW0gYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNlYTRlNGU7XG59XG4uaXRlbSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBpbmhlcml0O1xufVxuLml0ZW06aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5pdGVtOmhvdmVyIGJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG59XG4uaXRlbTpob3ZlciBwIHtcbiAgY29sb3I6ICMwYjBiMGI7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-to-do',
          templateUrl: './to-do.component.html',
          styleUrls: ['./to-do.component.sass'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '100px',
            opacity: 0.5,
            backgroundColor: 'green'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
        }]
      }], function () {
        return [{
          type: _shared_to_do_service__WEBPACK_IMPORTED_MODULE_3__["ToDoService"]
        }];
      }, null);
    })();
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
    /*! C:\Users\Tom\Desktop\Project\myFirstToDoOnAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map