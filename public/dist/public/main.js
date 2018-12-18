(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _show_movie_show_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-movie/show-movie.component */ "./src/app/show-movie/show-movie.component.ts");






var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'newMovie', component: _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_4__["NewMovieComponent"] },
    { path: 'showMovie/:movie_id', component: _show_movie_show_movie_component__WEBPACK_IMPORTED_MODULE_5__["ShowMovieComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: arial;\n  font-weight: 100px;\n  box-sizing: border-box;\n}\n\n.header{\n  text-align: center;\n  border-bottom: 1px solid grey;\n  height:80px;\n  padding-top: 20px;\n  margin-bottom: 10px;\n}\n\nnav{\n  display: flex;\n  justify-content: center;\n}\n\nnav a {\n  padding:10px 40px;\n  color:rgb(81, 119, 79);\n  font-weight: bold;\n  text-align: center;\n  border:1px solid grey;\n  text-decoration: none;\n  height:40px;\n  margin:20px 10px;\n  border-radius: 3px;\n  transition:.5s;\n}\n\nnav a:hover {\n  background-color: rgb(211, 211, 211);\n}\n\ninput{\n  border:1px solid grey;\n  border-radius: 3px;\n  display: block;\n  margin:10px auto;\n  width:400px;\n  height:30px;\n  padding: 5px;\n  font-size: 15px;\n}\n\n.submit {\n  background-color: rgb(32, 105, 32);\n  height:30px;\n  color:white;\n  border-radius: 3px;\n  margin: 20px auto;\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\n.submit:focus{\n  outline:none;\n}\n\n.submit:hover {\n  background-color: rgb(70, 151, 70) !important;\n}\n\nbutton {\n  width:150px;\n  height:30px;\n  color:white;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  background-color: rgb(52, 60, 134);\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\nbutton:hover {\n  background-color: rgb(84, 92, 165);\n}\n\nbutton:focus{\n  outline:none;\n}\n\n.show{\n  background-color: rgb(52, 60, 134);\n  margin-left: 10px;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  transition: .5s;\n}\n\n.edit{\n  background-color: rgb(32, 105, 32) !important;\n  transition: .5s;\n  border-radius: 0 !important;\n}\n\n.delete{\n  background-color: rgb(105, 32, 44) !important;\n  margin-right: 10px;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  transition: .5s;\n}\n\n.show:hover{\n  background-color: rgb(83, 91, 158);\n}\n\n.edit:hover{\n  background-color: rgb(62, 139, 62) !important;\n}\n\n.delete:hover{\n  background-color: rgb(148, 44, 62) !important;\n}\n\n.task_contain{\n  border:1px solid grey;\n  border-radius: 3px;\n  width:50%;\n  margin: 10px auto;\n  transition: .8s;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHFDQUFxQztDQUN0Qzs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx5Q0FBeUM7RUFDekMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIGhlaWdodDo4MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubmF2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubmF2IGEge1xuICBwYWRkaW5nOjEwcHggNDBweDtcbiAgY29sb3I6cmdiKDgxLCAxMTksIDc5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW46MjBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcbn1cblxuaW5wdXR7XG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOjEwcHggYXV0bztcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDozMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTA1LCAzMik7XG4gIGhlaWdodDozMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYm9yZGVyOm5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uc3VibWl0OmZvY3Vze1xuICBvdXRsaW5lOm5vbmU7XG59XG5cbi5zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE1MSwgNzApICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6MzBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA2MCwgMTM0KTtcbiAgYm9yZGVyOm5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDkyLCAxNjUpO1xufVxuXG5idXR0b246Zm9jdXN7XG4gIG91dGxpbmU6bm9uZTtcbn1cblxuLnNob3d7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNjAsIDEzNCk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5lZGl0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDEwNSwgMzIpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAzMiwgNDQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLnNob3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgOTEsIDE1OCk7XG59XG5cbi5lZGl0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDEzOSwgNjIpICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDQ0LCA2MikgIWltcG9ydGFudDtcbn1cblxuLnRhc2tfY29udGFpbntcbiAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOjUwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHRyYW5zaXRpb246IC44cztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header\">\n  <h1> Welcome to {{ title }}! </h1>\n<!-- Creating the Task Component -->\n</div>\n\n<nav>\n  <a [routerLink]=\"['/']\" routerLinkActive=\"active\">Dashboard</a>\n  <a [routerLink]=\"['/newMovie']\" routerLinkActive=\"active\">New Movie</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = "Movies Belt Exam";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _show_movie_show_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-movie/show-movie.component */ "./src/app/show-movie/show-movie.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _show_movie_show_movie_component__WEBPACK_IMPORTED_MODULE_9__["ShowMovieComponent"],
                _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__["NewMovieComponent"],
                _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_11__["NewReviewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.box_contain{\n  margin:20px auto;\n  width:90%;\n  min-height: 500px;\n}\n\n.box{\n\tmin-height: 500px;\n\tborder-radius: 6px;\n\tbox-shadow: 0px 0px 30px #c7c7c7;\n}\n\n.box h2{\n\ttext-align: center;\n\tpadding:20px 0px;\n\tborder-bottom:2px solid #589b58;\n}\n\ntable{\n\twidth:85%;\n\tmargin: 40px auto;\n\tborder-collapse: collapse;\n\tborder-radius:10px;\n}\n\ntable a {\n\tcolor:#004080;\n\ttext-decoration: none;\n}\n\ntable a:hover{\n\n}\n\ntable, th, td{\n\tpadding:10px 10px;\n\tborder:1px solid #ddd;\n\tborder-collapse: collapse;\n\ttext-align: left;\n}\n\ntr:nth-child(even) {\n\tbackground-color:#a4ccad;\n}\n\nth{\n\tfont-weight: bold;\n\tmin-width:100px;\n}\n\n.actions{\n  width:30%;\n}\n\n.write_review {\n  position: fixed;\n  width:100%;\n  z-index: 1;\n  top:350px;\n}\n\n.hide{\n  margin:auto 48%;\n  text-align: center;\n  position: relative;\n  width:140px;\n  height:40px;\n  border:1px solid grey;\n  border-radius: 3px;\n  background-color: white;\n  font-size: 16px;\n  padding:0px 10px;\n  transition:.5s;\n}\n\n.hide:hover{\n  background-color:rgb(188, 221, 190);\n}\n\n.actions button{\n  width:30%;\n  height:40px;\n  border:1px solid grey;\n  margin:0px 3px;\n  border-radius: 3px;\n  padding-top:5px;\n  padding-bottom:5px;\n  font-size: 14px;\n  transition: .5s;\n}\n\n.actions button:hover {\n  background:rgb(218, 218, 218);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25COztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakM7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEI7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5ib3hfY29udGFpbntcbiAgbWFyZ2luOjIwcHggYXV0bztcbiAgd2lkdGg6OTAlO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLmJveHtcblx0bWluLWhlaWdodDogNTAwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjN2M3Yzc7XG59XG5cbi5ib3ggaDJ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzoyMHB4IDBweDtcblx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzU4OWI1ODtcbn1cblxudGFibGV7XG5cdHdpZHRoOjg1JTtcblx0bWFyZ2luOiA0MHB4IGF1dG87XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxudGFibGUgYSB7XG5cdGNvbG9yOiMwMDQwODA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudGFibGUgYTpob3ZlcntcblxufVxuXG50YWJsZSwgdGgsIHRke1xuXHRwYWRkaW5nOjEwcHggMTBweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNhNGNjYWQ7XG59XG5cbnRoe1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWluLXdpZHRoOjEwMHB4O1xufVxuXG4uYWN0aW9uc3tcbiAgd2lkdGg6MzAlO1xufVxuXG4ud3JpdGVfcmV2aWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6MzUwcHg7XG59XG5cbi5oaWRle1xuICBtYXJnaW46YXV0byA0OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDoxNDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmhpZGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE4OCwgMjIxLCAxOTApO1xufVxuXG4uYWN0aW9ucyBidXR0b257XG4gIHdpZHRoOjMwJTtcbiAgaGVpZ2h0OjQwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luOjBweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6NXB4O1xuICBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOnJnYigyMTgsIDIxOCwgMjE4KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"review\" class=\"write_review\">\n    <app-new-review *ngIf=\"selected_task\" [taskToShow] = \"selected_task\"></app-new-review>\n    <button class=\"hide\" (click)=\"write_review()\">Hide Review</button>\n</div>\n\n<div class=\"box_contain\">\n  <div class=\"box\">\n    <h2>Displaying Movies</h2>\n    <div class=\"table_contain\">\n      <table>\n        <tr>\n          <th>Movie Title</th>\n          <th>Description</th>\n          <th>Average Review</th>\n          <th>Reviews</th>\n          <th>Actions</th>\n        </tr>\n\n\n        <tr *ngFor=\"let movie of movies, let i = index\">\n\n          <td>{{movie.title}}</td>\n          <td>{{movie.description}}</td>\n          <td>{{avg_review_arr[i]}}</td>\n          <td>{{movie.reviews.length}}</td>\n          <td class=\"actions\">\n            <button [routerLink]=\"['/showMovie/', movie._id]\" routerLinkActive=\"active\">Read Reviews</button>\n            <button (click)=\"write_review()\" (click)=taskToShow(movie._id)>Write Review</button>\n            <button (click)=\"deleteMovie(movie._id)\">Delete Movie</button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.movies = [];
        this.review = false;
        this.avg_review_arr = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllMovies();
    };
    DashboardComponent.prototype.getAllMovies = function () {
        var _this = this;
        var observable = this._httpService.getMovies();
        observable.subscribe(function (data) {
            console.log("Accessing data: " + data);
            _this.movies = data['data'];
            console.log("Retrieving all movies: " + _this.movies);
            console.log(JSON.stringify(_this.movies));
            for (var i in _this.movies) {
                var total = 0;
                var counter = 0;
                console.log("i is: " + i);
                for (var x in _this.movies[i].reviews) {
                    console.log("x is: " + x);
                    console.log("Rating is: " + _this.movies[i].reviews[x]['rating']);
                    total += _this.movies[i].reviews[x]['rating'];
                    counter += 1;
                }
                console.log("Total: " + total);
                var avg = total / counter;
                console.log("Average: " + avg);
                _this.avg_review_arr.push(avg);
                total = 0;
            }
            console.log(_this.avg_review_arr);
        });
    };
    DashboardComponent.prototype.write_review = function (movie_id) {
        console.log("Review boolean clicked!!");
        if (this.review == false) {
            this.review = true;
        }
        else {
            this.review = false;
            this.selected_movie = undefined;
        }
    };
    DashboardComponent.prototype.taskToShow = function (task) {
        console.log("Triggered selected task function");
        this.selected_task = task;
        console.log(this.selected_task);
    };
    DashboardComponent.prototype.deleteMovie = function (movie_id) {
        var _this = this;
        var observable = this._httpService.deleteAMovie(movie_id);
        observable.subscribe(function (data) {
            console.log("Deleting movie!");
            _this._router.navigate(['/']);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // <<-------------Movies Routing------------->>
    HttpService.prototype.getMovies = function () {
        return this._http.get('movies');
    };
    HttpService.prototype.createMovie = function (movie) {
        return this._http.post('movies', movie);
    };
    HttpService.prototype.getMovie = function (movie_id) {
        return this._http.get('movie/' + movie_id);
    };
    HttpService.prototype.createReview = function (movie_id, review) {
        return this._http.post('reviews/' + movie_id, review);
    };
    HttpService.prototype.deleteAMovie = function (movie_id) {
        return this._http.delete('movies/' + movie_id);
    };
    HttpService.prototype.deleteReview = function (review_id) {
        return this._http.delete('/review/' + review_id);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-movie/new-movie.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: arial;\n  font-weight: 100px;\n  box-sizing: border-box;\n  text-align: center;\n}\n\nh2{\n  border-bottom:1px solid grey;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n}\n\nhr{\n  margin: 60px auto 40px auto;\n  width:90%;\n}\n\n.truck_form{\n  border:1px solid grey;\n  border-radius: 3px;\n  width:30%;\n  margin:20px auto;\n  padding: 20px 0;\n}\n\ninput, select{\n  border:1px solid grey;\n  border-radius: 6px;\n  display: block;\n  margin:10px auto 20px auto;\n  width:400px;\n  height:35px;\n  padding: 5px;\n  font-size: 15px;\n}\n\ninput:focus, .submit:focus {\n  outline: none;\n}\n\n.submit {\n  background-color: rgb(32, 105, 32);\n  height:35px;\n  color:white;\n  border-radius: 6px;\n  margin: 20px auto;\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\n.submit:focus{\n  outline:none;\n}\n\n.submit:hover {\n  background-color: rgb(70, 151, 70) !important;\n}\n\nbutton {\n  width:150px;\n  height:30px;\n  color:white;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  background-color: rgb(52, 60, 134);\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\nbutton:hover {\n  background-color: rgb(84, 92, 165);\n}\n\nbutton:focus{\n  outline:none;\n}\n\n.show{\n  background-color: rgb(52, 60, 134);\n  margin-left: 10px;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  transition: .5s;\n}\n\n.edit{\n  background-color: rgb(32, 105, 32) !important;\n  transition: .5s;\n  border-radius: 0 !important;\n}\n\n.delete{\n  background-color: rgb(105, 32, 44) !important;\n  margin-right: 10px;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  transition: .5s;\n}\n\n.show:hover{\n  background-color: rgb(83, 91, 158);\n}\n\n.edit:hover{\n  background-color: rgb(62, 139, 62) !important;\n}\n\n.delete:hover{\n  background-color: rgb(148, 44, 62) !important;\n}\n\n.task_contain{\n  border:1px solid grey;\n  border-radius: 3px;\n  width:50%;\n  margin: 10px auto;\n  transition: .8s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LW1vdmllL25ldy1tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtDQUNYOztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx5Q0FBeUM7RUFDekMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL25ldy1tb3ZpZS9uZXctbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IDEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaHJ7XG4gIG1hcmdpbjogNjBweCBhdXRvIDQwcHggYXV0bztcbiAgd2lkdGg6OTAlO1xufVxuLnRydWNrX2Zvcm17XG4gIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDozMCU7XG4gIG1hcmdpbjoyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW5wdXQsIHNlbGVjdHtcbiAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46MTBweCBhdXRvIDIwcHggYXV0bztcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDozNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW5wdXQ6Zm9jdXMsIC5zdWJtaXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAxMDUsIDMyKTtcbiAgaGVpZ2h0OjM1cHg7XG4gIGNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6bm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5zdWJtaXQ6Zm9jdXN7XG4gIG91dGxpbmU6bm9uZTtcbn1cblxuLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTUxLCA3MCkgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6MTUwcHg7XG4gIGhlaWdodDozMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDYwLCAxMzQpO1xuICBib3JkZXI6bm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgOTIsIDE2NSk7XG59XG5cbmJ1dHRvbjpmb2N1c3tcbiAgb3V0bGluZTpub25lO1xufVxuXG4uc2hvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA2MCwgMTM0KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTA1LCAzMikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDMyLCA0NCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uc2hvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCA5MSwgMTU4KTtcbn1cblxuLmVkaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTM5LCA2MikgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgNDQsIDYyKSAhaW1wb3J0YW50O1xufVxuXG4udGFza19jb250YWlue1xuICBib3JkZXI6MXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6NTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgdHJhbnNpdGlvbjogLjhzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"truck_form\">\n  <h2>Add a new Movie</h2>\n  <form (submit)=\"create()\">\n      <!-- <p>{{newTask | json }}</p> -->\n      <label>Title\n        <p *ngIf=\"errors.title\"> {{errors.title.message}}</p>\n        <input type=\"text\" name=\"newMovie.title\" [(ngModel)]=\"newMovie.title\" />\n\n      </label>\n\n      <label>Description\n        <p *ngIf=\"errors.description\"> {{errors.description.message}}</p>\n        <input type=\"text\" name=\"newMovie.description\" [(ngModel)]=\"newMovie.description\"/>\n      </label>\n\n      <hr>\n\n      <label>Please Enter Your Name\n          <p *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n          <input type=\"text\" name=\"newReview.name\" [(ngModel)] = \"newReview.name\"/>\n      </label>\n\n      <label>Rate This Movie\n        <p *ngIf=\"errors.rating\"> {{errors.rating.message}}</p>\n        <select name=\"newReview.rating\" [(ngModel)] = \"newReview.rating\">\n          <option value=1>1 Star</option>\n          <option value=2>2 Stars</option>\n          <option value=3>3 Stars</option>\n          <option value=4>4 Stars</option>\n          <option value=5>5 Stars</option>\n        </select>\n      </label>\n\n      <label>Review\n        <p *ngIf=\"errors.review\"> {{errors.review.message}}</p>\n        <input type=\"text\" name=\"newReview.review\" [(ngModel)]=\"newReview.review\"  />\n      </label>\n\n      <input class=\"submit\" type=\"submit\" value=\"Add movie and review\">\n    </form>\n    <p *ngIf=\"errors\"> {{errors | json}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.ts ***!
  \**************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newMovie = {
            title: "",
            description: ""
        };
        this.newReview = {
            name: "",
            review: "",
            rating: Number
        };
        this.errors = {};
    }
    NewMovieComponent.prototype.ngOnInit = function () {
    };
    NewMovieComponent.prototype.create = function () {
        var _this = this;
        console.log(this.newMovie);
        var movie_observable = this._httpService.createMovie(this.newMovie);
        movie_observable.subscribe(function (data) {
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                console.log("Creating new movie!!");
                _this.movie_data = data['data'];
                console.log("Checking id match: " + _this.movie_data['_id']);
                // this._router.navigate(['/']);
                var review_observable = _this._httpService.createReview(_this.movie_data['_id'], _this.newReview);
                review_observable.subscribe(function (data) {
                    console.log("Creating new Review now!!");
                    console.log(_this.newReview);
                    if (data['status'] == 'not ok') {
                        _this.errors = data['errors']['errors'];
                    }
                    else {
                        console.log("Creating Movie and Review!!");
                        _this._router.navigate(['/']);
                    }
                });
            }
        });
    };
    NewMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-movie',
            template: __webpack_require__(/*! ./new-movie.component.html */ "./src/app/new-movie/new-movie.component.html"),
            styles: [__webpack_require__(/*! ./new-movie.component.css */ "./src/app/new-movie/new-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewMovieComponent);
    return NewMovieComponent;
}());



/***/ }),

/***/ "./src/app/new-review/new-review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-review/new-review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: arial;\n  font-weight: 100px;\n  box-sizing: border-box;\n  text-align: center;\n}\n\nh2{\n  border-bottom:1px solid grey;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n}\n\nhr{\n  margin: 60px auto 40px auto;\n  width:90%;\n}\n\n.truck_form{\n  border:1px solid grey;\n  border-radius: 3px;\n  width:30%;\n  margin:20px auto;\n  padding: 20px 0;\n  background-color: white;\n}\n\ninput, select{\n  border:1px solid grey;\n  border-radius: 6px;\n  display: block;\n  margin:10px auto 20px auto;\n  width:400px;\n  height:35px;\n  padding: 5px;\n  font-size: 15px;\n}\n\ninput:focus, .submit:focus {\n  outline: none;\n}\n\n.submit {\n  background-color: rgb(32, 105, 32);\n  height:35px;\n  color:white;\n  border-radius: 6px;\n  margin: 20px auto;\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\n.submit:focus{\n  outline:none;\n}\n\n.submit:hover {\n  background-color: rgb(70, 151, 70) !important;\n}\n\nbutton {\n  width:150px;\n  height:30px;\n  color:white;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  background-color: rgb(52, 60, 134);\n  border:none;\n  font-size: 15px;\n  transition: .5s;\n}\n\nbutton:hover {\n  background-color: rgb(84, 92, 165);\n}\n\nbutton:focus{\n  outline:none;\n}\n\n.show{\n  background-color: rgb(52, 60, 134);\n  margin-left: 10px;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  transition: .5s;\n}\n\n.edit{\n  background-color: rgb(32, 105, 32) !important;\n  transition: .5s;\n  border-radius: 0 !important;\n}\n\n.delete{\n  background-color: rgb(105, 32, 44) !important;\n  margin-right: 10px;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  transition: .5s;\n}\n\n.show:hover{\n  background-color: rgb(83, 91, 158);\n}\n\n.edit:hover{\n  background-color: rgb(62, 139, 62) !important;\n}\n\n.delete:hover{\n  background-color: rgb(148, 44, 62) !important;\n}\n\n.task_contain{\n  border:1px solid grey;\n  border-radius: 3px;\n  width:50%;\n  margin: 10px auto;\n  transition: .8s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJldmlldy9uZXctcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx5Q0FBeUM7RUFDekMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0UsOENBQThDO0NBQy9DOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXZpZXcvbmV3LXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDJ7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5ocntcbiAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCBhdXRvO1xuICB3aWR0aDo5MCU7XG59XG4udHJ1Y2tfZm9ybXtcbiAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOjMwJTtcbiAgbWFyZ2luOjIwcHggYXV0bztcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQsIHNlbGVjdHtcbiAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46MTBweCBhdXRvIDIwcHggYXV0bztcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDozNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW5wdXQ6Zm9jdXMsIC5zdWJtaXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAxMDUsIDMyKTtcbiAgaGVpZ2h0OjM1cHg7XG4gIGNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6bm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5zdWJtaXQ6Zm9jdXN7XG4gIG91dGxpbmU6bm9uZTtcbn1cblxuLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTUxLCA3MCkgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6MTUwcHg7XG4gIGhlaWdodDozMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDYwLCAxMzQpO1xuICBib3JkZXI6bm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgOTIsIDE2NSk7XG59XG5cbmJ1dHRvbjpmb2N1c3tcbiAgb3V0bGluZTpub25lO1xufVxuXG4uc2hvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA2MCwgMTM0KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTA1LCAzMikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDMyLCA0NCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uc2hvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCA5MSwgMTU4KTtcbn1cblxuLmVkaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTM5LCA2MikgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgNDQsIDYyKSAhaW1wb3J0YW50O1xufVxuXG4udGFza19jb250YWlue1xuICBib3JkZXI6MXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6NTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgdHJhbnNpdGlvbjogLjhzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-review/new-review.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-review/new-review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"truck_form\">\n  <h2>Add a new Review</h2>\n  <form (submit)=\"create()\">\n\n      <label>Please Enter Your Name\n          <p *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n          <input type=\"text\" name=\"review.name\" [(ngModel)] = \"review.name\"/>\n      </label>\n\n      <label>Rate This Movie\n        <p *ngIf=\"errors.rating\"> {{errors.rating.message}}</p>\n        <select name=\"review.rating\" [(ngModel)] = \"review.rating\">\n          <option value=1>1 Star</option>\n          <option value=2>2 Stars</option>\n          <option value=3>3 Stars</option>\n          <option value=4>4 Stars</option>\n          <option value=5>5 Stars</option>\n        </select>\n      </label>\n\n      <label>Review\n        <p *ngIf=\"errors.review\"> {{errors.review.message}}</p>\n        <input type=\"text\" name=\"review.review\" [(ngModel)]=\"review.review\"  />\n      </label>\n\n      <input class=\"submit\" type=\"submit\" value=\"Add movie and review\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-review/new-review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-review/new-review.component.ts ***!
  \****************************************************/
/*! exports provided: NewReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return NewReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.review = {
            name: "",
            rating: Number,
            review: ""
        };
        this.errors = {};
        this.check = "Why the fuck isn't this working!?";
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        console.log("Id that made it to review app: " + this.taskToShow);
        this.movie_id = this.taskToShow;
        this.getMovie(this.taskToShow);
    };
    NewReviewComponent.prototype.getMovie = function (movie_id) {
        var _this = this;
        var observable = this._httpService.getMovie(movie_id);
        observable.subscribe(function (data) {
            console.log("Accessing data: " + data);
            _this.movie = data['data'];
            console.log("The title of the retrieved movie is: " + _this.movie.title);
            console.log("Showing entire movie?? " + _this.movie);
        });
    };
    NewReviewComponent.prototype.create = function () {
        var _this = this;
        console.log("Creating movie");
        console.log(this.movie_id);
        console.log(this.review);
        var observable = this._httpService.createReview(this.movie_id, this.review);
        observable.subscribe(function (data) {
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                console.log("Info submited succesfully");
                _this._router.navigate(['/showMovie/', _this.movie_id]);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewReviewComponent.prototype, "taskToShow", void 0);
    NewReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-review',
            template: __webpack_require__(/*! ./new-review.component.html */ "./src/app/new-review/new-review.component.html"),
            styles: [__webpack_require__(/*! ./new-review.component.css */ "./src/app/new-review/new-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewReviewComponent);
    return NewReviewComponent;
}());



/***/ }),

/***/ "./src/app/show-movie/show-movie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/show-movie/show-movie.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.box_contain{\n  margin:20px auto;\n  width:90%;\n\n}\n\n.box{\n\tmin-height: 500px;\n\tborder-radius: 6px;\n\tbox-shadow: 0px 0px 30px #c7c7c7;\n}\n\n.box h2{\n\ttext-align: center;\n\tpadding:20px 0px;\n\tborder-bottom:2px solid #589b58;\n}\n\ntable{\n\twidth:85%;\n\tmargin: 40px auto;\n\tborder-collapse: collapse;\n\tborder-radius:10px;\n}\n\ntable a {\n\tcolor:#004080;\n\ttext-decoration: none;\n}\n\ntable a:hover{\n\n}\n\ntable, th, td{\n\tpadding:10px 10px;\n\tborder:1px solid #ddd;\n\tborder-collapse: collapse;\n\ttext-align: left;\n}\n\ntr:nth-child(even) {\n\tbackground-color:#a4ccad;\n}\n\nth{\n\tfont-weight: bold;\n\tmin-width:100px;\n}\n\n.actions{\n  width:20%;\n}\n\nh4{\n  text-align: center;\n  font-size: 20px;\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1tb3ZpZS9zaG93LW1vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7O0NBRVg7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZ0NBQWdDO0NBQ2hDOztBQUVEO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsY0FBYztDQUNkLHNCQUFzQjtDQUN0Qjs7QUFFRDs7Q0FFQzs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEI7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctbW92aWUvc2hvdy1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmJveF9jb250YWlue1xuICBtYXJnaW46MjBweCBhdXRvO1xuICB3aWR0aDo5MCU7XG5cbn1cblxuLmJveHtcblx0bWluLWhlaWdodDogNTAwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjN2M3Yzc7XG59XG5cbi5ib3ggaDJ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzoyMHB4IDBweDtcblx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzU4OWI1ODtcbn1cblxudGFibGV7XG5cdHdpZHRoOjg1JTtcblx0bWFyZ2luOiA0MHB4IGF1dG87XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxudGFibGUgYSB7XG5cdGNvbG9yOiMwMDQwODA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudGFibGUgYTpob3ZlcntcblxufVxuXG50YWJsZSwgdGgsIHRke1xuXHRwYWRkaW5nOjEwcHggMTBweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNhNGNjYWQ7XG59XG5cbnRoe1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWluLXdpZHRoOjEwMHB4O1xufVxuXG4uYWN0aW9uc3tcbiAgd2lkdGg6MjAlO1xufVxuXG5oNHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/show-movie/show-movie.component.html":
/*!******************************************************!*\
  !*** ./src/app/show-movie/show-movie.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box_contain\">\n    <div class=\"box\">\n      <h2>Displaying {{movie.title}}</h2>\n      <h4>Description: {{movie.description}}</h4>\n      <div class=\"table_contain\">\n        <table>\n          <tr>\n            <th>Reviewer Name</th>\n            <th>Movie Rating</th>\n            <th>Movie Review</th>\n            <th>Actions</th>\n          </tr>\n\n\n          <tr *ngFor=\"let review of movie.reviews\">\n            <td>{{review.name}}</td>\n            <td>{{review.rating}}</td>\n            <td>{{review.review}}</td>\n            <td><button (click)=\"deleteReview(review._id)\">Delete Review</button></td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/show-movie/show-movie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-movie/show-movie.component.ts ***!
  \****************************************************/
/*! exports provided: ShowMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMovieComponent", function() { return ShowMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShowMovieComponent = /** @class */ (function () {
    function ShowMovieComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ShowMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getMovie(params['movie_id']);
        });
    };
    ShowMovieComponent.prototype.getMovie = function (movie_id) {
        var _this = this;
        var observable = this._httpService.getMovie(movie_id);
        observable.subscribe(function (data) {
            _this.movie = data['data'];
        });
    };
    ShowMovieComponent.prototype.deleteReview = function (review_id) {
        console.log(review_id);
        var index = this.movie.reviews.findIndex(function (i) { return i._id === review_id; });
        console.log("Showing index of specific item", index);
        console.log(this.movie.reviews);
        this.movie.reviews.splice(index, 1);
        console.log(this.movie.reviews);
        var observable = this._httpService.deleteReview(review_id);
        observable.subscribe(function (data) {
            console.log("Deleting Review!!");
        });
    };
    ShowMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-movie',
            template: __webpack_require__(/*! ./show-movie.component.html */ "./src/app/show-movie/show-movie.component.html"),
            styles: [__webpack_require__(/*! ./show-movie.component.css */ "./src/app/show-movie/show-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShowMovieComponent);
    return ShowMovieComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/SimonBull/Documents/CodingDojo/Modules/MEAN/Angular/belt_exam 2/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map