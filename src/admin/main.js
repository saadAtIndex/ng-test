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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<!-- container-1 END-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(orderServices, authService, router) {
        this.orderServices = orderServices;
        this.authService = authService;
        this.router = router;
        this.page = 1;
        this.totalPages = 1;
        this.orders = [];
        this.authService.authUser();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./showorder-notification/showorder-notification.component */ "./src/app/showorder-notification/showorder-notification.component.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login-component/login-component.component */ "./src/app/login-component/login-component.component.ts");
/* harmony import */ var _service_authGuard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/authGuard.service */ "./src/app/service/authGuard.service.ts");
/* harmony import */ var _service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth.interceptor.service */ "./src/app/service/auth.interceptor.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRouting = [
    { path: 'signin', component: _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], canActivate: [_service_authGuard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], children: [
            { path: '', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"] },
            { path: 'orders/:id', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"] },
            { path: 'orders/:id/client/:clientId/chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"] },
            { path: 'provider/:id/notification', component: _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__["ShoworderNotificationComponent"] },
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
                _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__["ShoworderNotificationComponent"],
                _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"],
                _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__["NgxDatatableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_12__["SimpleNotificationsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRouting),
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDe_nAWE5ccLGXPuWbcGTXzVlrtH-lMcUw'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
            providers: [
                _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderServices"],
                _service_authGuard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                    multi: true,
                },
                _service_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-color: #edeff2;\r\n    font-family: \"Calibri\", \"Roboto\", sans-serif;\r\n  }\r\n  \r\n  .chat_window {\r\n    position: absolute;\r\n    width: calc(100% - 20px);\r\n    max-width: 80%;\r\n    height: 700px;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n    background-color: #f8f8f8;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .top_menu {\r\n    background-color: #fff;\r\n    width: 100%;\r\n    padding: 20px 0 15px;\r\n    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .top_menu .buttons {\r\n    margin: 3px 0 0 20px;\r\n    position: absolute;\r\n  }\r\n  \r\n  .top_menu .buttons .button {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n  \r\n  .top_menu .buttons .button.close {\r\n    background-color: #f5886e;\r\n  }\r\n  \r\n  .top_menu .buttons .button.minimize {\r\n    background-color: #fdbf68;\r\n  }\r\n  \r\n  .top_menu .buttons .button.maximize {\r\n    background-color: #a3d063;\r\n  }\r\n  \r\n  .top_menu .title {\r\n    text-align: center;\r\n    color: #bcbdc0;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .messages {\r\n    position: relative;\r\n    list-style: none;\r\n    padding: 20px 10px 0 10px;\r\n    margin: 0;\r\n    height: 547px;\r\n    overflow: scroll;\r\n  }\r\n  \r\n  .messages .message {\r\n    clear: both;\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n    transition: all 0.5s linear;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .messages .message.left .avatar {\r\n    background-color: #f5886e;\r\n    float: left;\r\n  }\r\n  \r\n  .messages .message.left .text_wrapper {\r\n    background-color: #ffe6cb;\r\n    margin-left: 20px;\r\n  }\r\n  \r\n  .messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\r\n    right: 100%;\r\n    border-right-color: #ffe6cb;\r\n  }\r\n  \r\n  .messages .message.left .text {\r\n    color: #c48843;\r\n  }\r\n  \r\n  .messages .message.right .avatar {\r\n    background-color: #fdbf68;\r\n    float: right;\r\n  }\r\n  \r\n  .messages .message.right .text_wrapper {\r\n    background-color: #c7eafc;\r\n    margin-right: 20px;\r\n    float: right;\r\n  }\r\n  \r\n  .messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\r\n    left: 100%;\r\n    border-left-color: #c7eafc;\r\n  }\r\n  \r\n  .messages .message.right .text {\r\n    color: #45829b;\r\n  }\r\n  \r\n  .messages .message.appeared {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .messages .message .avatar {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .messages .message .text_wrapper {\r\n    display: inline-block;\r\n    padding: 20px;\r\n    border-radius: 6px;\r\n    width: calc(100% - 85px);\r\n    min-width: 100px;\r\n    position: relative;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\r\n    top: 18px;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::after {\r\n    border-width: 13px;\r\n    margin-top: 0px;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::before {\r\n    border-width: 15px;\r\n    margin-top: -2px;\r\n  }\r\n  \r\n  .messages .message .text_wrapper .text {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .bottom_wrapper {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    padding: 2px 20px;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n  \r\n  .bottom_wrapper .message_input_wrapper {\r\n    display: inline-block;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    border: 1px solid #bcbdc0;\r\n    width: calc(100% - 160px);\r\n    position: relative;\r\n    padding: 0 20px;\r\n  }\r\n  \r\n  .bottom_wrapper .message_input_wrapper .message_input {\r\n    border: none;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    width: calc(100% - 40px);\r\n    position: absolute;\r\n    outline-width: 0;\r\n    color: gray;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message {\r\n    width: 140px;\r\n    height: 50px;\r\n    display: inline-block;\r\n    border-radius: 50px;\r\n    background-color: #a3d063;\r\n    border: 2px solid #a3d063;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: all 0.2s linear;\r\n    text-align: center;\r\n    float: right;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message:hover {\r\n    color: #a3d063;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message .text {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    display: inline-block;\r\n    line-height: 48px;\r\n  }\r\n  \r\n  .message_template {\r\n    display: none;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"chat_window\">\n  <div class=\"top_menu\">\n    <div class=\"buttons\">\n      <div class=\"button close\">\n\n      </div>\n      <div class=\"button minimize\"></div>\n      <div class=\"button maximize\"></div>\n    </div>\n    <div class=\"title\">Chat</div>\n  </div>\n  <ul class=\"messages\" #conversationArea>\n    <div *ngFor=\"let message of messages\">\n      <li class=\"message left appeared\" *ngIf=\"message.user._id ==person1\">\n        <div class=\"avatar\"></div>\n        <div class=\"text_wrapper\">\n          <div class=\"text\" *ngIf=\"message?.text\">{{message?.text}}</div>\n          <div class=\"text\" *ngIf=\"message?.img\">\n            <img src=\"{{message?.img}}\" width=\"140\" height=\"140\">\n          </div>\n        </div>\n      </li>\n      <li class=\"message right appeared\" *ngIf=\"message.user._id ==person2\">\n        <div class=\"avatar\"></div>\n        <div class=\"text_wrapper\">\n          <div class=\"text\" *ngIf=\"message?.text\">{{message?.text}}</div>\n          <div class=\"text\" *ngIf=\"message?.img\">\n            <img src=\"{{message?.img}}\" width=\"140\" height=\"140\">\n          </div>\n        </div>\n      </li>\n    </div>\n\n  </ul>\n  <div class=\"bottom_wrapper clearfix\">\n    <form [formGroup]=\"chatForm\" (ngSubmit)=\"sendMessage()\" class=\"SendForm\">\n      <div class=\"message_input_wrapper\">\n        <input formControlName=\"messageText\" class=\"message_input\" (input)=\"emitIsTying()\" placeholder=\"Type your message here...\"\n        />\n        <br>\n        <br>\n        <br>\n        <br> ارفاق صورة\n        <input type=\"file\" #img>\n     \n      </div>\n      <button class=\"send_message\">\n        <div class=\"icon\"></div>\n        <div class=\"text\">\n          Send\n        </div>\n      </button>\n    </form>\n  </div>\n</div>\n<div class=\"message_template\">\n  <li class=\"message\">\n    <div class=\"avatar\">\n\n    </div>\n    <div class=\"text_wrapper\">\n      <div class=\"text\">\n      </div>\n    </div>\n  </li>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _da_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../da.service */ "./src/app/da.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(orderServices, authService, activeRoute, zone) {
        this.orderServices = orderServices;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.zone = zone;
        this.myImg = null;
        this.messages = [];
        this.scrollToBottomFlage = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var user = this.authService.currentUser.user;
        this.providerId = user.id;
        //inialize the form 
        this.chatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'messageText': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
        //get the two persons 
        this.person1 = this.activeRoute.snapshot.params['clientId'];
        this.person2 = user.id;
        //call get conversion id
        this.getConversationId(this.person1, this.person2);
        // link the chat html java script
        // this.chat();
        // this.listenToMessage();
    };
    ChatComponent.prototype.getConversationId = function (person1, person2) {
        var _this = this;
        this.orderServices.getConversationId(person1, person2).subscribe(function (res) {
            _this.conversationId = res['conversationId'];
            _this.getConversationMessage(res['conversationId']);
            _this.checkTyping();
            _this.listenToMessage();
        }, function (err) {
            console.log('error while getting getConversationId ==>', err);
        });
    };
    ChatComponent.prototype.getConversationMessage = function (getConversationId) {
        var _this = this;
        this.orderServices.getConversationMessages(getConversationId).subscribe(function (res) {
            _this.messages = res.reverse();
            _this.scrollToBottomFlage = true;
        }, function (err) {
            console.log('error while getting getConversationId ==>', err);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        var img = this.myImg.nativeElement.files[0];
        var text = this.chatForm.get('messageText').value;
        if (!this.chatForm.get('messageText').value && !img) {
            return;
        }
        var message = new FormData();
        if (img)
            message.append('img', img);
        if (text)
            message.append('text', text);
        this.orderServices.sendMessage(message, this.conversationId)
            .subscribe(function (res) {
            _this.chatForm.reset();
            _this.myImg.nativeElement.value = "";
        }, function (err) { console.log('the result ===', err); });
    };
    ChatComponent.prototype.listenToMessage = function () {
        var _this = this;
        console.log('this.conversationId ==>', this.conversationId);
        this.listChat = _da_service__WEBPACK_IMPORTED_MODULE_4__["default"].record.getList("dsChats/" + this.conversationId);
        this.listChat.on('entry-added', function (x) {
            _da_service__WEBPACK_IMPORTED_MODULE_4__["default"].record.getRecord(x).whenReady(function (message) {
                var newMessage = {
                    createdAt: message.get().message.createdAt,
                    seen: message.get().message.createdAt,
                    text: message.get().message.text,
                    img: message.get().message.img,
                    user: {
                        name: message.get().message.user.name,
                        avatar: message.get().message.user.avatar,
                        _id: message.get().message.user._id
                    },
                    _id: message.get().message._id
                };
                _this.zone.run(function () {
                    _this.messages.push(newMessage);
                    _this.scrollToBottomFlage = true;
                });
            });
        });
    };
    ChatComponent.prototype.emitIsTying = function () {
        console.log('the help', this.person1);
        _da_service__WEBPACK_IMPORTED_MODULE_4__["default"].event.emit(this.conversationId + "/" + this.person1, { isTyping: true });
    };
    ChatComponent.prototype.checkTyping = function () {
        var _this = this;
        _da_service__WEBPACK_IMPORTED_MODULE_4__["default"].event.subscribe(this.conversationId + "/" + this.person2, function (type) {
            if (type.isTyping && _this.time) {
                _this.time = setTimeout(function () {
                    clearTimeout(_this.time);
                    // const index = this.messages.findIndex(
                    //   i => i._id === "typingId"
                    // );
                    // console.log('the index of is typing methods 333333333 ====', index);
                    // if (index > 0) {
                    //   this.zone.run(() => {
                    //     this.messages.splice(index, 1);
                    //   });
                    // }
                }, 10000);
            }
            if (type.isTyping) {
                console.log('the  typing event is 33333333 ===>', type);
                var fakeMsg_1 = {
                    _id: "typingId",
                    text: ".........................",
                    createdAt: "",
                    user: {
                        _id: _this.person1,
                        name: "",
                        avatar: ""
                    }
                };
                var index = _this.messages.findIndex(function (i) { return i._id === "typingId"; });
                if (index < 0) {
                    _this.zone.run(function () {
                        _this.messages.push(fakeMsg_1);
                        _this.scrollToBottomFlage = true;
                    });
                }
                _this.time = setTimeout(function () {
                    clearTimeout(_this.time);
                    var index = _this.messages.findIndex(function (i) { return i._id === "typingId"; });
                    console.log('the index of is typing methods ====', index);
                    if (index > 0) {
                        _this.zone.run(function () {
                            _this.messages.splice(index, 1);
                        });
                    }
                    // clearTimeout(this.time);
                }, 10000);
            }
        });
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        if (this.scrollToBottomFlage) {
            this.scrollToBottom();
            this.scrollToBottomFlage = false;
        }
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.chat = function () {
        (function () {
            var Message;
            Message = function (arg) {
                this.text = arg.text, this.message_side = arg.message_side;
                this.draw = function (_this) {
                    return function () {
                        var $message;
                        $message = $($('.message_template').clone().html());
                        $message.addClass(_this.message_side).find('.text').html(_this.text);
                        $('.messages').append($message);
                        return setTimeout(function () {
                            return $message.addClass('appeared');
                        }, 0);
                    };
                }(this);
                return this;
            };
            $(function () {
                var getMessageText, message_side, sendMessage;
                message_side = 'right';
                getMessageText = function () {
                    var $message_input;
                    $message_input = $('.message_input');
                    return $message_input.val();
                };
                sendMessage = function (text) {
                    var $messages, message;
                    if (text.trim() === '') {
                        return;
                    }
                    $('.message_input').val('');
                    $messages = $('.messages');
                    message_side = message_side === 'left' ? 'right' : 'left';
                    message = new Message({
                        text: text,
                        message_side: message_side
                    });
                    message.draw();
                    return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
                };
                $('.send_message').click(function (e) {
                    return sendMessage(getMessageText());
                });
                $('.message_input').keyup(function (e) {
                    if (e.which === 13) {
                        return sendMessage(getMessageText());
                    }
                });
                // // sendMessage('Hello Philip! :)');
                // setTimeout(function () {
                //   return sendMessage('Hi Sandy! How are you?');
                // }, 1000);
                // return setTimeout(function () {
                //   return sendMessage('I\'m fine, thank you!');
                // }, 2000);
            });
        }.call(this));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('conversationArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "chatBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "myImg", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/da.service.ts":
/*!*******************************!*\
  !*** ./src/app/da.service.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepstream.io-client-js */ "./node_modules/deepstream.io-client-js/dist/lib/client.js");
/* harmony import */ var deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


var ds = deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DsPath, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DsOptions);
ds.on('connectionStateChanged', function (connection) {
    console.log(connection);
});
ds.on('error', function (err) {
    console.log(err);
});
/* harmony default export */ __webpack_exports__["default"] = (ds);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{background-color: #ecf0f1;}\r\n\r\n.navbar-inverse {\r\n    background-color: #007be2;\r\n    border-color: #007be2;\r\n}\r\n\r\n.navbar {\r\n    position: relative;\r\n    min-height: 50px;\r\n    margin-bottom: 10px;\r\n    border: 0px solid transparent;\r\n}\r\n\r\n.navbar-nav > li > a {\r\n    padding-top: 20px;\r\n    color: #fff;\r\n    \r\n    padding-bottom: 10px;\r\n    line-height: 20px;\r\n}\r\n\r\n@media (min-width: 768px){\r\n\r\n.navbar {\r\n    border-radius: 0px;\r\n}}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    height: auto;\r\n    color: #fff;\r\n    padding: 15px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n}\r\n\r\n.sidebar-toggle {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    display: inline-block;\r\n    padding: 3px 22px;\r\n}\r\n\r\n@media (min-width:768px){\r\n.container-1{width:15%;float:left;}\r\n.container-2{width:100%;float: left;}\r\n}\r\n\r\n@media (max-width:768px){\r\n.container-1{width:100%;}\r\n.container-2{width:100%;}\r\n}\r\n\r\n.container-1:after,\r\n.container-2:before,\r\n{\r\n  display: table;\r\n  content: \" \";\r\n}\r\n\r\n.container-1:after,\r\n.container-2:after,\r\n{clear: both;}\r\n\r\n.container-1{display: none;}\r\n\r\n/*navbar-right=====START==========*/\r\n\r\n.social-icon{margin:0px;padding:0px;}\r\n\r\n.social-icon li {margin: 0px;padding: 0px;list-style-type: none;}\r\n\r\n.social-icon li a {\r\n    display: block;\r\n    padding: 15px 14px;\r\n    text-decoration:none;\r\n}\r\n\r\n.social-icon li a:focus{\r\n   color:#fff;\r\n    text-decoration:none;\r\n}\r\n\r\n.messages-link{\r\n    color: #fff !important;\r\n    background: #16a085 !important;\r\n\r\n}\r\n\r\n.alerts-link{\r\n color: #fff !important;\r\n}\r\n\r\n.tasks-link{\r\n    color: #fff !important;\r\n    background: #2980b9 !important;\r\n\r\n}\r\n\r\n.user-link{\r\n color: #fff !important;\r\n}\r\n\r\n.number {\r\n    position: absolute;\r\n    bottom: 25px;\r\n    left: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    padding-right: 1px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    font-size: 11px;\r\n    line-height: 20px;\r\n    background-color: #2c3e50;\r\n}\r\n\r\n.dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: -105px;\r\n    z-index: 1000;\r\n    /* display: none; */\r\n    float: left;\r\n    min-width: 160px;\r\n    padding: 5px 0;\r\n    margin: 2px 0 0;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0, 0, 0, .15);\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n}\r\n\r\n/*navbar-right=======END========*/\r\n\r\n/*sidebar-toggle=============*/\r\n\r\n.sidebar-toggle:hover, .sidebar-toggle:focus {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n\r\n/*sidr-NAVBAR=======START========*/\r\n\r\n.navbar-nav-1{width: 100%;background-color:#34495E;height:auto;overflow: hidden;z-index: 1020;position: relative;}\r\n\r\n.side-user {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 15px;\r\n    border-top: none !important;\r\n    border-bottom: 1px solid #142638;\r\n    text-align: center;\r\n}\r\n\r\n.close-btn {\r\n    position: absolute;\r\n    z-index: 99;\r\n    color: #fff;\r\n    font-size: 31px;\r\n    top: 0px;\r\n    left: 223px;    \r\n    display: none;\r\n    padding: 0px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-btn .fa-window-close{color:#fff;font-size: 25px;}\r\n\r\n.welcome {\r\n    margin: 0;\r\n    font-style: italic;\r\n    color: #9aa4af;\r\n}\r\n\r\n.name {\r\n    margin: 0;\r\n    font-family: \"Ubuntu\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    color: #ccd1d7;\r\n}\r\n\r\n.side-user a{\r\n   color:#fff;\r\n}\r\n\r\n.nav-search{border-top: 1px solid #54677a;}\r\n\r\n.nav-search .form-control{border: 1px solid #000;border-radius: 0px;}\r\n\r\n.nav-search .btn{border: 1px solid #000;border-radius: 0px;}\r\n\r\n.dashboard>a{\r\n    color:#fff;\r\n    }\r\n\r\n.side-nav li {\r\n    border-top: 1px solid #54677a;\r\n    border-bottom: 1px solid #142638;\r\n}\r\n\r\n.side-nav>li>a:active {\r\n    text-shadow: 1px 1px 1px rgba(0,0,0,0.1);\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #34495e;\r\n}\r\n\r\n.panel {\r\n    margin-bottom: 0;\r\n    border: none;\r\n    border-radius: 0;\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n}\r\n\r\n.panel>a{\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    color: #fff;\r\n}\r\n\r\n.panel>ul>li>a {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    color: darkcyan;\r\n    background: black;\r\n}\r\n\r\n.nav > li > a:hover, .nav > li > a:focus {\r\n    text-decoration: none;\r\n    background-color: #3d566e;\r\n}\r\n\r\n/*sidr-NAVBAR=======END========*/\r\n\r\n@media (min-width: 768px){\r\n\r\n#page-wrapper {\r\n   \r\n    padding: 0 30px;\r\n    min-height: 700px;\r\n    border-left: 1px solid #2c3e50;\r\n}\r\n}\r\n\r\n#page-wrapper {\r\n    padding: 0 15px;\r\n    border: none;\r\n    \r\n}\r\n\r\n.date-picker{    \r\n    border-color: #138871;\r\n    color: #fff;\r\n    background-color: #149077;\r\n    margin-top: -7px;\r\n    border-radius: 0px;\r\n    margin-right: -15px;\r\n}\r\n\r\n#page-wrapper .breadcrumb {\r\n    padding: 8px 15px;\r\n    margin-bottom: 20px;\r\n    list-style: none;\r\n    background-color: #e0e7e8;\r\n    border-radius: 0px;\r\n    \r\n}\r\n\r\n@media (min-width: 768px){\r\n.circle-tile {\r\n    margin-bottom: 30px;\r\n}\r\n}\r\n\r\n.circle-tile {\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.circle-tile-heading {\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto -40px;\r\n    border: 3px solid rgba(255,255,255,0.3);\r\n    border-radius: 100%;\r\n    color: #fff;\r\n    transition: all ease-in-out .3s;\r\n}\r\n\r\n/* -- Background Helper Classes */\r\n\r\n/* Use these to cuztomize the background color of a div. These are used along with tiles, or any other div you want to customize. */\r\n\r\n.dark-blue {\r\n    background-color: #34495e;\r\n}\r\n\r\n.green {\r\n    background-color: #16a085;\r\n}\r\n\r\n.blue {\r\n    background-color: #2980b9;\r\n}\r\n\r\n.orange {\r\n    background-color: #f39c12;\r\n}\r\n\r\n.red {\r\n    background-color: #e74c3c;\r\n}\r\n\r\n.purple {\r\n    background-color: #8e44ad;\r\n}\r\n\r\n.dark-gray {\r\n    background-color: #7f8c8d;\r\n}\r\n\r\n.gray {\r\n    background-color: #95a5a6;\r\n}\r\n\r\n.light-gray {\r\n    background-color: #bdc3c7;\r\n}\r\n\r\n.yellow {\r\n    background-color: #f1c40f;\r\n}\r\n\r\n/* -- Text Color Helper Classes */\r\n\r\n.text-dark-blue {\r\n    color: #34495e;\r\n}\r\n\r\n.text-green {\r\n    color: #16a085;\r\n}\r\n\r\n.text-blue {\r\n    color: #2980b9;\r\n}\r\n\r\n.text-orange {\r\n    color: #f39c12;\r\n}\r\n\r\n.text-red {\r\n    color: #e74c3c;\r\n}\r\n\r\n.text-purple {\r\n    color: #8e44ad;\r\n}\r\n\r\n.text-faded {\r\n    color: rgba(255,255,255,0.7);\r\n}\r\n\r\n.circle-tile-heading .fa {\r\n    line-height: 80px;\r\n}\r\n\r\n.circle-tile-content {\r\n    padding-top: 50px;\r\n}\r\n\r\n.circle-tile-description {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.text-faded {\r\n    color: rgba(255,255,255,0.7);\r\n}\r\n\r\n.circle-tile-number {\r\n    padding: 5px 0 15px;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n}\r\n\r\n.circle-tile-footer {\r\n    display: block;\r\n    padding: 5px;\r\n    color: rgba(255,255,255,0.5);\r\n    background-color: rgba(0,0,0,0.1);\r\n    transition: all ease-in-out .3s;\r\n}\r\n\r\n.circle-tile-footer:hover {\r\n    text-decoration: none;\r\n    color: rgba(255,255,255,0.5);\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.morning {\r\n    background: url(https://lh3.googleusercontent.com/-1YbV7nsVnX8/WMugaq-6BEI/AAAAAAAADSg/0wPfQ84vMUcCle_SkgiUDOumUKscMaA8QCL0B/w530-d-h353-p-rw/widget-bg-morning.jpg) center bottom no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.time-widget {\r\n    margin-top: 5px;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n}\r\n\r\n.time-widget-heading {\r\n    text-transform: uppercase;\r\n    font-size: .5em;\r\n    font-weight: 400;\r\n    color: #fff;\r\n}\r\n\r\n#datetime{color:#fff;}\r\n\r\n.tile-img {\r\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);\r\n}\r\n\r\n.tile {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    overflow: hidden;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--top nav start=======-->\n<nav class=\"navbar navbar-inverse top-navbar\" id=\"top-nav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Home </a>\n      <span class=\"close-btn\" id=\"hide-btn\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n\n    <ul class=\"social-icon pull-right list-inline\">\n\n      <li class=\"dropdown\">\n        <a class=\"alerts-link dropdown-toggle\" (click)=\"goToNtifcation()\" style=\"cursor: pointer;\" >\n          <span class=\"glyphicon glyphicon-bell\"></span>\n          <span class=\"number\" *ngIf=\"notificationCount >0\">{{notificationCount}}</span>\n          <span class=\"caret\" ></span>\n        </a>\n      </li>\n\n\n\n      <li class=\"dropdown\">\n        <a class=\"user-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n          <span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a  (click)=\"logOut()\" style=\"cursor: pointer;\">log out </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!--    top nav end===========-->\n\n<div class=\"container-2\">\n  <div id=\"page-wrapper\">\n\n    <router-outlet></router-outlet>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _da_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../da.service */ "./src/app/da.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, orderServices, router) {
        this.authService = authService;
        this.orderServices = orderServices;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var user = this.authService.currentUser.user;
        this.providerId = user.id;
        this.getUnseenCountNotification();
        this.listenToNotification();
    };
    HomeComponent.prototype.listenToNotification = function () {
        var _this = this;
        _da_service__WEBPACK_IMPORTED_MODULE_1__["default"].record.getRecord("dsNotifications/" + this.providerId).subscribe(function (res) {
            if (res.unseenCount > 0) {
                console.log('the notifcation ======', res);
                _this.notificationCount = res.unseenCount;
            }
        });
    };
    HomeComponent.prototype.getUnseenCountNotification = function () {
        var _this = this;
        this.orderServices.getUnseenNotification(this.providerId)
            .subscribe(function (res) {
            _this.notificationCount = res['unseenCount'];
            console.log('the Notification =======>>>', res);
        });
    };
    HomeComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    HomeComponent.prototype.goToNtifcation = function () {
        this.router.navigate(['provider', this.providerId, 'notification']);
        if (this.notificationCount > 0)
            this.resetUnseenCount();
    };
    HomeComponent.prototype.resetUnseenCount = function () {
        var _this = this;
        this.orderServices.resetUnseenCount(this.providerId)
            .subscribe(function (result) {
            _this.notificationCount = 0;
            console.log(result, 'resetUnseenCount');
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-component/login-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/login-component/login-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginContainer{\r\n    margin: 10%\r\n}\r\n.shape1{\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -50px;\r\n}\r\n.shape2 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n}\r\n.shape3 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -30px;\r\n    float: left;\r\n    margin-left: -31px;\r\n}\r\n.shape4 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    margin-top: -25px;\r\n    float: left;\r\n    margin-left: -32px;\r\n}\r\n.shape5 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -48px;\r\n    margin-left: -32px;\r\n    margin-top: -30px;\r\n}\r\n.shape6 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -35px;\r\n}\r\n.shape7 {\r\n    position: relative;\r\n    height: 150px;\r\n    width: 150px;\r\n    background-color: #0074d9;\r\n    border-radius: 80px;\r\n    float: left;\r\n    margin-right: -20px;\r\n    margin-top: -57px;\r\n}\r\n.float {\r\n    position: absolute;\r\n    z-index: 2;\r\n}\r\n.form {\r\n    margin-left: 145px;\r\n}\r\n.text-error{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/login-component/login-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/login-component/login-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container loginContainer pull-left\">\n    <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\n        <div id=\"login-column\" class=\"col-md-6\">\n            <div class=\"box\">\n                <!-- <div class=\"shape1\"></div>\n                <div class=\"shape2\"></div>\n                <div class=\"shape3\"></div>\n                <div class=\"shape4\"></div>\n                <div class=\"shape5\"></div>\n                <div class=\"shape6\"></div>\n                <div class=\"shape7\"></div> -->\n                <div class=\"float\">\n                    <form [formGroup]=\"singInForm\" (ngSubmit)=\"onLoginSubmit()\" class=\"form\">\n                        <div class=\"form-group\">\n                            <label for=\"username\" class=\"text-white\">Username:</label>\n                            <br>\n                            <input type=\"text\" formControlName=\"userName\" class=\"form-control\">\n                            <span class=\"text-error\" *ngIf=\"singInForm.get('userName').hasError('required') && singInForm.get('userName').touched\">\n                                هذا الحقل الزامي\n                            </span>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"text-white\">Password:</label>\n                            <br>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\">\n                            <span class=\"text-error\" *ngIf=\"singInForm.get('password').hasError('required') && singInForm.get('password').touched\">\n                                هذا الحقل الزامي\n                            </span>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"submit\" name=\"submit\" class=\"btn btn-info btn-md\" value=\"login\">\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"pull-right\">\n          \n            <h2>development</h2>\n            <h5> username: +201069875421 </h5>\n            <h5> password: Aaaa3aaa$</h5>\n            <hr>\n\n            <h2>testing</h2>\n            <h5>userName : hishamprovider@index.com</h5>\n            <h5> password: Aaaa3aaa$</h5>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login-component/login-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login-component/login-component.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, activeRoute) {
        this.authService = authService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.singInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var userName = this.singInForm.get('userName').value;
        var password = this.singInForm.get('password').value;
        if (!this.singInForm.valid) {
            Object.keys(this.singInForm.controls).forEach(function (key) {
                _this.singInForm.get(key).markAsTouched();
            });
            return;
        }
        var loginBody = {
            "username": userName,
            "password": password,
        };
        console.log('loginBody====> ', loginBody);
        this.authService.login(loginBody).subscribe(function (result) {
            _this.authService.setUser(result);
            var returnUrl = _this.activeRoute.snapshot.queryParams["url"];
            if (returnUrl)
                _this.router.navigate([returnUrl]);
            else
                _this.router.navigate(["/"]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! ./login-component.component.html */ "./src/app/login-component/login-component.component.html"),
            styles: [__webpack_require__(/*! ./login-component.component.css */ "./src/app/login-component/login-component.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/page.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/page.model.ts ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page() {
        this.page = 0;
        this.limit = 0;
        this.pageCount = 0;
        this.totalCount = 0;
        this.data = [];
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n  margin-top: 20px;\r\n}\r\n.card{\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 450px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n#myModal{\r\n  width: 50%;\r\n  margin-left: 25%;\r\n \r\n}\r\n.modal-content{\r\n  padding: 20px;\r\n}\r\n.modal-sm {\r\n  width: 450px;\r\n}\r\n.watingForPayement .modal-content{\r\n  background: #eee\r\n}\r\n.watingForPayement{\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n.overlay {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 51PX;\r\n  left: 0;\r\n  background-color: #777777eb;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n}\r\n.overlay-content {\r\n  position: relative;\r\n  top: 25%;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n.overlay a {\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  font-size: 36px;\r\n  color: #ffffff;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n.overlay a:hover, .overlay a:focus {\r\n  color: #f1f1f1;\r\n}\r\n.overlay .closebtn {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 45px;\r\n  font-size: 60px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n.overlay a {font-size: 20px}\r\n.overlay .closebtn {\r\n  font-size: 40px;\r\n  top: 15px;\r\n  right: 35px;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-6\">\n      <div class=\"card  pull-left\">\n        <h1>Order Details</h1>\n        <table class=\"table table-bordered\">\n\n          <tbody>\n            <tr>\n              <td>Order Number</td>\n              <td> {{order?.id }}</td>\n            </tr>\n            <!-- <tr>\n              <td>provider</td>\n              <td>{{order?.provider?.name}}</td>\n            </tr> -->\n            <tr>\n              <td>client id</td>\n              <td>{{order?.client?.id }}</td>\n            </tr>\n            <tr>\n              <td>client Name</td>\n              <td>{{client?.user?.name }}</td>\n            </tr>\n            <tr>\n              <td>Order Price</td>\n              <td>{{order?.price }}</td>\n            </tr>\n            <tr>\n              <td>Order status</td>\n              <td>{{order?.status}}</td>\n            </tr>\n            <tr>\n              <td>Order type</td>\n              <td>{{order?.orderType}}</td>\n            </tr>\n            <tr>\n              <td>Order preview Needed</td>\n              <td>{{order?.previewNeeded}}</td>\n            </tr>\n            <tr>\n              <td> booking Date</td>\n              <td>{{order?.bookingDate | date:'medium'}}</td>\n            </tr>\n            <tr>\n              <td>Order location</td>\n              <td>{{order?.requestLocationPlaceName}}</td>\n            </tr>\n            <tr>\n              <td>Order location</td>\n              <td>{{order?.requestLocationPlaceName}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <h1 class=\" text-center\">Actions </h1>\n      <div class=\"card  pull-right text-center\" style=\"padding-top: 100px;\">\n        <!-- <p *ngIf=\"['ACCEPTED','ON_THE_WAY','ARRIVED'].includes( orders?.status) \"> -->\n        <!-- <p *ngIf=\"cancelOrder\">\n          <button (click)=\"changeStatus(order?.id,'CANCELLED_BY_PROVIDER')\" style=\"width:60%;background:#007be2;margin-top:10px;\">\n            CANCELLED\n          </button>\n        </p> -->\n\n        <p *ngIf=\"order?.status =='ACCEPTED' ||  order?.status =='ON_THE_WAY' || order?.status =='ARRIVED'\">\n          <button (click)=\"changeStatus(order?.id,'CANCELLED_BY_PROVIDER')\" style=\"width:60%;background:#007be2;margin-top:10px;\">\n            CANCELLED\n          </button>\n        </p>\n\n        <p *ngIf=\"order?.status =='PENDING'\">\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ACCEPTED')\" style=\"width:60%;margin-top:10px;background:#007be2\">\n            ACCEPTED\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'REJECTED_BY_PROVIDER')\" style=\"width:60%;margin-top:10px;background: #007be2\">\n            REJECTED_BY_PROVIDER\n          </button>\n        </p>\n\n        <h1 *ngIf=\"order?.status =='ACCEPTED'\">\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ON_THE_WAY')\" style=\"width:60%;background: #007be2\">\n            ON_THE_WAY\n          </button>\n        </h1>\n\n        <P *ngIf=\"order?.status =='IN_PROGRESS'\">\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'REQUEST_TO_PAUSE_BY_PROVIDER')\" style=\"width:60%;margin-top:10px;;background: #007be2\">\n            PAUSED_BY_PROVIDER\n          </button>\n\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'FINISHED_WORKING')\" style=\"width:60%;margin-top:10px;background: #007be2\">\n            FINISHED_WORKING\n          </button>\n        </P>\n\n        <P *ngIf=\"order?.status =='PAUSED_BY_PROVIDER'\">\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'REQUEST_TO_RESUME_BY_PROVIDER')\" style=\"width:60%;margin-top:10px;background: #007be2\">\n            RESUME\n          </button>\n\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'FINISHED_WORKING')\" style=\"width:60%;margin-top:10px;background: #007be2\">\n            FINISHED_WORKING\n          </button>\n        </P>\n\n        <p *ngIf=\"order?.status =='ON_THE_WAY'\">\n          <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ARRIVED')\" style=\"width:60%;background: #007be2;margin-top:10px;\">\n            ARRIVED\n          </button>\n        </p>\n\n        <p>\n          <button (click)=\"goToChat(order?.client)\" style=\"width:60%;background:#007be2\">\n            CHAT\n          </button>\n        </p>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" id=\"myModal\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"cancelForm\" (ngSubmit)=\"onCancelledOrder()\">\n        <h1>cancel reasons</h1>\n        <div *ngIf=\"loadingReason\">\n          LOADING....\n        </div>\n        <div *ngIf=\"!loadingReason\">\n          <div class=\"radio\" *ngFor=\"let reason of reasons\">\n            <label>\n              <input type=\"radio\" formControlName=\"reason\" checked [value]=\"reason.id\">{{reason.text}}</label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"comment\">Comment:</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\" formControlName=\"reasonText\"></textarea>\n        </div>\n        <button style=\"width:40%;background: blue\">\n          SUBMIT\n        </button>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n<div id=\"myNav\" class=\"overlay\" #laterPaymentOverlay>\n  <!-- <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a> -->\n  <div class=\"overlay-content text-center\">\n    <!-- <a style=\"cursor: pointer;\" (click)=\"laterPayment()\"></a> -->\n\n    <div class=\"\">\n      <h1>بانتظار رد العميل</h1>\n      <img src=\"assets/loading.gif\" class=\"img-responsive\" width=\"16%\" height=\"200\" style=\"margin-left: 42%;\">\n    </div>\n    <button (click)=\"laterPayment()\" style=\"width:50%;background: red\">\n      الدفع لاحقا\n    </button>\n  </div>\n</div>\n\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.ts ***!
  \********************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _da_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../da.service */ "./src/app/da.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(route, _notifications, zone, router, orderServices, authService) {
        this.route = route;
        this._notifications = _notifications;
        this.zone = zone;
        this.router = router;
        this.orderServices = orderServices;
        this.authService = authService;
        this.cancelOrder = false;
        this.openOverly = false;
        this.requestToPauseByClient = false;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var user = this.authService.currentUser.user;
        this.providerId = user.id;
        this.orderId = this.route.snapshot.params['id'];
        this.loginDeapStream();
        this.cancelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            'reasonText': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            'reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null)
        });
        this.fetchOrder(this.orderId);
        // ds.event.subscribe(`/providers/${environment.id}/orders/${this.orderId}`,
    };
    OrderDetailComponent.prototype.dsEventLisenning = function () {
        var _this = this;
        _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].record.getRecord("dsOrder/" + this.orderId).subscribe(function (res) {
            if (res.status == 'WAITING_FOR_PAYMENT' && _this.currentStatus != 'ENDED' && _this.order.isProviderWaitingForPayment == true)
                _this.openNav();
            if (res.status == 'ENDED' && _this.currentStatus != 'ENDED') {
                _this.closeNav();
                if (res.paymentMethod == 'CASH') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: 'CLIENT CASH PAYMENT',
                        text: "client want to buy by cash",
                        type: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    }).then(function (isConfirm) {
                        if (isConfirm.value === true) {
                            _this.providerConfirmCash('CONFIRMED');
                        }
                        else {
                            _this.providerConfirmCash('DENIED');
                        }
                    });
                }
                console.log('the status is ended');
            }
            if (res.requestToPauseByClient == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: 'PAUSED_BY_CLIENT',
                    text: "the client ask to pause this order",
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                }).then(function (isConfirm) {
                    if (isConfirm.value === true) {
                        _this.pauseResume('PAUSED_BY_CLIENT');
                    }
                    else {
                        _this.denyPausation();
                    }
                });
                // let confirm = window.confirm('are you want to PAUSED_BY_CLIENT');
                // if (confirm == true) {
                //   this.pauseResume('PAUSED_BY_CLIENT');
                // }
            }
            if (res.requestToResumeByClient == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: 'RESUEME_BY_CLIENT',
                    text: "the client ask to resume this order",
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                }).then(function (isConfirm) {
                    if (isConfirm.value === true) {
                        _this.pauseResume('IN_PROGRESS');
                    }
                    else {
                        _this.denyResumption();
                    }
                });
                // let confirm = window.confirm('are you want to RESUEME_BY_CLIENT');
                // if (confirm == true) {
                //   this.pauseResume('IN_PROGRESS');
                // }
            }
            if (res.status != _this.currentStatus) {
                _this.zone.run(function () {
                    _this.fetchOrder(_this.orderId);
                });
            }
        });
    };
    OrderDetailComponent.prototype.pauseResume = function (status) {
        var _this = this;
        this.orderServices.updateproviderorders(this.orderId, status).subscribe(function (res) {
            _this.zone.run(function () {
                _this.fetchOrder(_this.orderId);
            });
        }, function (err) {
            console.log('the error is ====>', err);
        });
    };
    OrderDetailComponent.prototype.fetchOrder = function (orderId) {
        var _this = this;
        this.orderServices.getOrderById(this.providerId, orderId).subscribe(function (res) {
            _this.order = res;
            _this.orderServices.getClientById(_this.order.client.id).subscribe(function (result) {
                _this.client = result;
                if (['ACCEPTED', 'ON_THE_WAY', 'ARRIVED'].includes(_this.order.status))
                    _this.cancelOrder = true;
                _this.currentStatus = _this.order.status;
                _this.dsEventLisenning();
                // console.log('the order is', this.order);
            });
        });
    };
    OrderDetailComponent.prototype.providerConfirmCash = function (action) {
        var _this = this;
        var actionBody = { action: action };
        this.orderServices.providerConfirmCash(this.providerId, this.orderId, actionBody).subscribe(function (res) {
            if (_this.openOverly == true)
                _this.closeNav();
            console.log('providerConfirmCash', res);
        });
    };
    OrderDetailComponent.prototype.denyResumption = function () {
        this.orderServices.denyResumption(this.providerId, this.orderId).subscribe(function (res) {
            console.log('denyResumption', res);
        });
    };
    OrderDetailComponent.prototype.denyPausation = function () {
        this.orderServices.denyPausation(this.providerId, this.orderId).subscribe(function (res) {
            console.log('denyPausation', res);
        });
    };
    OrderDetailComponent.prototype.open = function (text) {
        var toast = this._notifications.success(text, 'Click to undo...', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 10,
            clickIconToClose: true
        });
    };
    OrderDetailComponent.prototype.changeStatus = function (id, status) {
        var _this = this;
        console.log(this.currentStatus, 'the status ====>', status);
        if (status == 'CANCELLED_BY_PROVIDER' || status == 'REJECTED_BY_PROVIDER') {
            switch (this.currentStatus) {
                case 'ACCEPTED':
                    this.cancelStatus = 'CANCELLATION_ACCEPTED_REASON_BY_PROVIDER';
                    break;
                case 'ARRIVED':
                    this.cancelStatus = 'CANCELLATION_ARRIVED_REASON_BY_PROVIDER';
                    break;
                case 'ON_THE_WAY':
                    this.cancelStatus = 'CANCELLATION_ON_THE_WAY_REASON_BY_PROVIDER';
                    break;
                case 'IN_PROGRESS':
                    this.cancelStatus = 'CANCELLATION_IN_PROGRESS_REASON_BY_PROVIDER';
                    break;
                case 'PENDING':
                    this.cancelStatus = 'REJECTION_PENDING_REASON_BY_PROVIDER';
                    break;
                default: return;
            }
            console.log(this.currentStatus, 'this current status ===>>>>>>', this.cancelStatus);
            this.loadingReason = true;
            this.orderServices.getReasons(this.cancelStatus).subscribe(function (res) {
                _this.loadingReason = false;
                _this.reasons = res;
                console.log('the reasons', _this.reasons);
            });
        }
        this.orderServices.updateproviderorders(id, status).subscribe(function (res) {
            if (status == 'CANCELLED_BY_PROVIDER' || status == 'REJECTED_BY_PROVIDER')
                $('#myModal').modal('show');
            _this.zone.run(function () {
                _this.fetchOrder(_this.orderId);
            });
        }, function (err) {
            _this.open(err.error.error.message);
            console.log('the error is ====>', err);
        });
    };
    OrderDetailComponent.prototype.onCancelledOrder = function () {
        var _this = this;
        var reasonText = this.cancelForm.get('reasonText').value;
        var reason = this.cancelForm.get('reason').value;
        if (!this.cancelForm.valid) {
            Object.keys(this.cancelForm.controls).forEach(function (key) {
                _this.cancelForm.get(key).markAsTouched();
            });
            return;
        }
        var reasonBody = { 'reasonType': this.cancelStatus };
        if (reason)
            reasonBody['reason'] = reason;
        if (!reason && reasonText)
            reasonBody['otherReason'] = reasonText;
        console.log(reasonText, reason, 'the reason is ====', reasonBody);
        this.orderServices.addReasons(this.orderId, reasonBody).subscribe(function (res) {
            $('#myModal').modal('hide');
        }, function (err) {
            console.log('the error of reason', err);
        });
    };
    OrderDetailComponent.prototype.goToChat = function (client) {
        this.router.navigate(['orders', this.orderId, 'client', client.id, 'chat']);
    };
    OrderDetailComponent.prototype.loginDeapStream = function () {
        var user = this.authService.currentUser.user;
        _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].login({
            accessToken: this.authService.getToken(),
            loginAs: "PROVIDER",
            id: user.id
        }, function (success, data) {
        });
    };
    OrderDetailComponent.prototype.openNav = function () {
        this.laterPaymentOverlay.nativeElement.style.width = "100%";
        this.openOverly = true;
    };
    OrderDetailComponent.prototype.closeNav = function () {
        this.laterPaymentOverlay.nativeElement.style.width = "0%";
        this.openOverly = false;
    };
    OrderDetailComponent.prototype.laterPayment = function () {
        var _this = this;
        this.orderServices.laterPayment(this.orderId).subscribe(function (res) {
            console.log('the later for payment is ===>', res);
            _this.closeNav();
            _this.fetchOrder(_this.orderId);
        });
        console.log('later payment');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('laterPaymentOverlay'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDetailComponent.prototype, "laterPaymentOverlay", void 0);
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/order.service.ts":
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/*! exports provided: OrderServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServices", function() { return OrderServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderServices = /** @class */ (function () {
    function OrderServices(httpClient) {
        this.httpClient = httpClient;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].path + "providers/" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id + "/orders";
        this.basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].path;
        this.token = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMxNSwiaXNzIjoiQXBwIiwiaWF0IjoxNTM2NDkyMTA5NzgxLCJleHAiOjE1MzY0OTIxMTY5ODF9.wYPCAEDMcUC2JvmBXxT5z2w8Jf2KL7ilVgEsYLQPuOk') };
    }
    OrderServices.prototype.denyPausation = function (providerId, orderId) {
        var url = this.basePath + 'providers/' + providerId + '/orders/' + orderId + '/deny-pausation';
        return this.httpClient.put(url, {});
    };
    OrderServices.prototype.denyResumption = function (providerId, orderId) {
        var url = this.basePath + 'providers/' + providerId + '/orders/' + orderId + '/deny-resumption';
        return this.httpClient.put(url, {});
    };
    OrderServices.prototype.updateproviderorders = function (orderId, status) {
        var url = this.basePath + "orders/" + orderId + "/status";
        return this.httpClient.patch(url, { "status": status });
    };
    OrderServices.prototype.resetUnseenCount = function (providerId) {
        var url = this.basePath + 'users/' + providerId + '/notifications/count-reset';
        return this.httpClient.put(url, {});
    };
    OrderServices.prototype.sendMessage = function (messageObject, conversationId) {
        var url = this.basePath + "chat/" + conversationId;
        return this.httpClient.post(url, messageObject);
    };
    OrderServices.prototype.getConversationMessages = function (conversationId) {
        var url = this.basePath + "chat/" + conversationId;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.getOrderById = function (providerId, orderId) {
        var url = this.basePath + "providers/" + providerId + "/orders/" + orderId;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.fetchproviderorders = function (providerId, page) {
        var url = this.basePath + "providers/" + providerId + "/orders" + "?page=" + page + "&limit=" + 10;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.getConversationId = function (person1, person2) {
        var url = this.basePath + "conversationId?id1=" + person1 + "&id2=" + person2;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.updateprovideLocation = function (provider, body) {
        var url = this.basePath + 'providers/' + provider + '/current-location';
        return this.httpClient.put(url, body);
    };
    OrderServices.prototype.fetchproviderNotifications = function (providerId, page) {
        var url = this.basePath + "users/" + providerId + "/notifications?page=" + page + "&limit=" + 12;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.getProviderLocation = function (providerId) {
        var url = this.basePath + 'providers/' + providerId + '/current-location';
        return this.httpClient.get(url);
    };
    OrderServices.prototype.getClientById = function (ClientId) {
        var url = this.basePath + 'clients/' + ClientId;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.getReasons = function (type) {
        var url = this.basePath + 'reasons?type=' + type;
        return this.httpClient.get(url);
    };
    OrderServices.prototype.addReasons = function (orderId, reasonBody) {
        var url = this.basePath + "orders/" + orderId + "/reason";
        return this.httpClient.patch(url, reasonBody);
    };
    OrderServices.prototype.laterPayment = function (orderId) {
        var url = this.basePath + "orders/" + orderId + "/payment/not-waiting";
        return this.httpClient.patch(url, {});
    };
    OrderServices.prototype.providerConfirmCash = function (providerId, orderId, body) {
        var url = this.basePath + "providers/" + providerId + "/orders/" + orderId + "/confirm-cash";
        return this.httpClient.put(url, body);
    };
    OrderServices.prototype.getUnseenNotification = function (userId) {
        var url = this.basePath + "users/" + userId + "/notifications/unseen-count";
        return this.httpClient.get(url);
    };
    OrderServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderServices);
    return OrderServices;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 600px;\r\n  }\r\n .cardTitle{\r\n     /* text-decoration: underline */\r\n }"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 style=\"text-decoration: underline\">orders</h2> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-6\">\n      <div class=\"orders\">\n        <h2 class=\"cardTitle\"> Current orders </h2>\n        <div *ngIf=\"currentPage?.totalCount >0\">\n          <ngx-datatable *ngIf=\"!loading\" class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n            [rowHeight]=\"50\" [count]=\"currentPage?.totalCount\" [offset]=\"currentPage?.page - 1\" [limit]=\"currentPage?.limit\"\n            [rows]=\"currentPage?.data\" [externalPaging]=\"true\" (page)=\"onPageChange($event)\">\n\n\n            <ngx-datatable-column name=\"order number\" [flexGrow]=\"1\" fxHide>\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{ row?.id }}\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column name=\" status \" [flexGrow]=\"1\" fxHide>\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{ row?.status }}\n              </ng-template>\n            </ngx-datatable-column>\n\n\n            <ngx-datatable-column name=\"\" [flexGrow]=\"1\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                <a (click)=\"showOrder(row?.id)\" style=\"cursor: pointer;\">\n                  <!-- DETAILS -->\n                  <i class=\"fa fa-eye\" style=\"font-size: 25px; padding-left:40px; \"></i>\n                </a>\n              </ng-template>\n            </ngx-datatable-column>\n\n\n          </ngx-datatable>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"map\">\n            <h2 class=\"cardTitle\">Click to update your location </h2>\n          <agm-map [latitude]=\"30.614399499999998\" [longitude]=\"32.300712499999996\" [zoom]=\"14\" [disableDoubleClickZoom]=\"true\" [mapDraggable]=\"true\"\n            [scrollwheel]=\"true\" (mapClick)=\"newPosition($event)\" [disableDefaultUI]=\"true\" [zoomControl]=\"false\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n          </agm-map>\n        </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"split left pull-left\">\n      <div class=\"centered\">\n        <div class=\"order\">\n          <div *ngFor=\"let order of orders\">\n            <div class=\"card orderSingle\">\n              <p class=\"title\">{{order?.provider?.name}}</p>\n\n              <h1>Order Number: {{order?.id }}</h1>\n\n              <h1>client Id: {{order?.client }}</h1>\n\n              <h1>Order Price: {{order?.price }}</h1>\n\n              <h1>Order status: {{order?.status }}</h1>\n\n              <ng-template #otherCondition>\n                <h1>\n                  Order status: {{order?.status }}\n\n                </h1>\n              </ng-template>\n\n              <h1>Order type: {{order?.orderType }}</h1>\n              <h1>Order preview Needed: {{order?.previewNeeded }}</h1>\n              <h1>{{order?.bookingDate | date:'medium'}}</h1>\n              <p>Order location: {{order?.requestLocationPlaceName }}</p>\n\n\n\n              <br>\n              <button (click)=\"showOrder(order?.id)\" style=\"width:60%;;background: black\">\n                DETAILS\n              </button>\n\n            </div>\n          </div>\n        \n\n          <div *ngIf=\" orders?.length !=0\">\n            <div style=\"text-align: center;margin-top: 50px;margin-bottom: 50px;\">\n              <button class=\"btn btn-primary\" (click)=\"onLoadMoreClick()\" [disabled]=\"loading || noMoreData \">\n                more\n              </button>\n            </div>\n          </div>\n          <div *ngIf=\"!loading && orders?.length ==0\">\n            <div style=\"text-align: center;margin-top: 50px;\">\n              <button class=\"btn btn-primary\" disabled>\n                no orders\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- \n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\" pull-right\">\n      <div class=\"\">\n        <agm-map [latitude]=\"30.614399499999998\" [longitude]=\"32.300712499999996\" [zoom]=\"14\" [disableDoubleClickZoom]=\"true\" [mapDraggable]=\"true\"\n          [scrollwheel]=\"true\" (mapClick)=\"newPosition($event)\" [disableDefaultUI]=\"true\" [zoomControl]=\"false\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n\n      <div class=\"notification\">\n        <div class=\"singleNotification\">\n          <button (click)=\"gonotifcation()\">notification</button>\n          <br>\n          <br>\n          <br>\n          <button (click)=\"logOut()\">logOut</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n<!-- <simple-notifications [options]=\"options\"></simple-notifications> -->"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _da_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../da.service */ "./src/app/da.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/page.model */ "./src/app/models/page.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderServices, authService, _notifications, router) {
        this.orderServices = orderServices;
        this.authService = authService;
        this._notifications = _notifications;
        this.router = router;
        this.page = 1;
        this.totalPages = 1;
        this.currentPage = new _models_page_model__WEBPACK_IMPORTED_MODULE_6__["Page"]();
        this.orders = [];
        this.types = ['alert', 'error', 'info', 'warn', 'success'];
        this.animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var user = this.authService.currentUser.user;
        this.providerId = user.id;
        this.loginDeapStream();
        this.fetchOrders(1);
        this.getProviderLocation();
    };
    OrdersComponent.prototype.newPosition = function (event) {
        this.newlat = event.coords.lat;
        this.newLng = event.coords.lng;
        this.lat = this.newlat;
        this.lng = this.newLng;
        // this.open('the new postion is ')
        var body = {
            "currentLocation": [
                this.lng,
                this.lat
            ]
        };
        this.orderServices.updateprovideLocation(this.providerId, body)
            .subscribe(function (result) {
            //console.log(result, 'result')
        });
        //ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.newlat, longitude: this.newLng });
    };
    OrdersComponent.prototype.getProviderLocation = function () {
        var _this = this;
        this.orderServices.getProviderLocation(this.providerId)
            .subscribe(function (result) {
            _this.lng = result['currentLocation'][0],
                _this.lat = result['currentLocation'][1];
        });
    };
    OrdersComponent.prototype.onLoadMoreClick = function () {
        this.page++;
        this.fetchOrders(this.page);
    };
    OrdersComponent.prototype.open = function (text) {
        var toast = this._notifications.success(text, 'Click to undo...', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 10,
            clickIconToClose: true
        });
        // this._notifications.success('new notification', 'this notification from my orders ');
    };
    OrdersComponent.prototype.fetchOrders = function (page) {
        var _this = this;
        this.loading = true;
        this.orderServices.fetchproviderorders(this.providerId, page)
            .subscribe(function (result) {
            _this.currentPage = result;
            _this.orders = _this.orders.concat(result.data);
            _this.totalPages = result.pageCount;
            _this.loading = false;
            //listen
            if (_this.page == _this.totalPages)
                _this.noMoreData = true;
        });
    };
    OrdersComponent.prototype.onPageChange = function (event) {
        this.fetchOrders(event.offset + 1);
    };
    OrdersComponent.prototype.showOrder = function (orderId) {
        this.router.navigate(['orders', orderId]);
    };
    // startTracking() {
    //   let opts = { maximumAge: 60000, timeout: 15000 }
    //   let watchPositionReturn = navigator.geolocation.watchPosition((position) => {
    //     this.lat = position['coords'].latitude;
    //     this.lng = position['coords'].longitude;
    //     // console.log('watchPositionReturn', position);
    //     //  ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.lat, longitude: this.lng });
    //   },
    //     (err) => {
    //       console.log('watchPositionReturn error', err);
    //     },
    //     opts);
    // }
    OrdersComponent.prototype.loginDeapStream = function () {
        var user = this.authService.currentUser.user;
        _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].login({
            accessToken: this.authService.getToken(),
            loginAs: "PROVIDER",
            id: user.id
        }, function (success, data) {
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/auth.interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        if (!authService.isAuthenticated()) {
            return next.handle(req);
        }
        var authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authService.getToken())
        });
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                var status_1 = error.status;
                if (status_1 === 401) {
                    console.log('unauthorized');
                    authService.logout();
                }
                else if (status_1 === 403) {
                    console.log('not-allowed');
                    _this.router.navigate(['not-allowed']);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].gatewayPath + "auth/signin";
    }
    AuthService.prototype.login = function (loginBody) {
        return this.httpClient.post(this.path, loginBody);
    };
    AuthService.prototype.setUser = function (user) {
        this.currentUser = user;
        localStorage.setItem("@ng-test", JSON.stringify(this.currentUser));
    };
    AuthService.prototype.authUser = function () {
        var user = localStorage.getItem("@ng-test");
        if (user) {
            this.currentUser = JSON.parse(user);
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.currentUser != null;
    };
    AuthService.prototype.getToken = function () {
        return this.currentUser.accessToken;
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem('@ng-test');
        this.router.navigate(['signin']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/authGuard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/authGuard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['signin'], { skipLocationChange: true, queryParams: { url: url } });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/showorder-notification/showorder-notification.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/showorder-notification/showorder-notification.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showorder-notification/showorder-notification.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/showorder-notification/showorder-notification.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let notif of notification \" \nstyle=\"width: 60%;padding: 5px;text-align: center;\nheight: 230px;margin-left: 20%;margin-bottom: 20px;margin-right: 20%;\nborder: 1px solid #007be2;\nborder-radius: 10px;\">\n<table class=\"table table-hover\">\n    <tbody>\n      <tr>\n        <td>the notification</td>\n        <td>{{notif.id}}</td>\n      </tr>\n      <tr>\n        <td>the message</td>\n        <td>{{notif.text}}</td>\n      </tr>\n      <tr>\n        <td>provider</td>\n        <td>{{notif?.subject?.provider?.user.name}}</td>\n      </tr>\n      <tr>\n        <td>client</td>\n        <td>{{notif?.subject?.client?.user.name}}</td>\n      </tr>\n      <tr>\n        <td>kind</td>\n        <td>{{notif?.subject?.kind}}</td>\n      </tr>\n      <tr>\n        <td>status</td>\n        <td>{{notif?.subject?.status}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- <div class=\"notif\">\n   \n    <h4>the notification : {{notif.id}}</h4>\n    <h4>the message :{{notif.text}}</h4>\n    <h4>provider :{{notif?.subject?.provider?.user.name}}</h4>\n    <h4>client :{{notif?.subject?.client?.user.name}}</h4>\n    <h5>kind :{{notif?.subject?.kind}}</h5>\n    <h5>status :{{notif?.subject?.status}}</h5>\n  </div>-->\n\n </div> \n\n<div *ngIf=\" notification?.length !=0\">\n  <div style=\"text-align: center;margin-top: 50px;margin-bottom: 50px;\">\n    <button class=\"btn btn-primary\" (click)=\"onLoadMoreClick()\" [disabled]=\"loading || noMoreData \">\n      المزيد\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"!loading && notification?.length ==0\">\n  <div style=\"text-align: center;margin-top: 50px;\">\n    <button class=\"btn btn-primary\" disabled>\n      لا يوجد بيانات\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showorder-notification/showorder-notification.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showorder-notification/showorder-notification.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShoworderNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoworderNotificationComponent", function() { return ShoworderNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoworderNotificationComponent = /** @class */ (function () {
    function ShoworderNotificationComponent(orderServices, authService) {
        this.orderServices = orderServices;
        this.authService = authService;
        this.notification = [];
        this.page = 1;
        this.totalPages = 1;
    }
    ShoworderNotificationComponent.prototype.ngOnInit = function () {
        var user = this.authService.currentUser.user;
        this.providerId = user.id;
        this.fetchnotification(1);
    };
    ShoworderNotificationComponent.prototype.onLoadMoreClick = function () {
        this.page++;
        this.fetchnotification(this.page);
    };
    ShoworderNotificationComponent.prototype.fetchnotification = function (page) {
        var _this = this;
        this.loading = true;
        this.orderServices.fetchproviderNotifications(this.providerId, page)
            .subscribe(function (result) {
            _this.notification = _this.notification.concat(result.data);
            console.log('the result', result);
            _this.totalPages = result.pageCount;
            _this.loading = false;
            if (_this.page == _this.totalPages)
                _this.noMoreData = true;
        });
    };
    ShoworderNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showorder-notification',
            template: __webpack_require__(/*! ./showorder-notification.component.html */ "./src/app/showorder-notification/showorder-notification.component.html"),
            styles: [__webpack_require__(/*! ./showorder-notification.component.css */ "./src/app/showorder-notification/showorder-notification.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ShoworderNotificationComponent);
    return ShoworderNotificationComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    path: "http://192.168.0.232:3002/api/v1/",
    gatewayPath: "http://192.168.0.232:3001/api/v1/",
    production: false,
    id: 315,
    DsPath: '192.168.0.232:6020',
    DsOptions: {
        maxReconnectInterval: 1000,
        reconnectIntervalIncrement: 500,
        maxReconnectAttempts: Infinity,
        heartbeatInterval: 60000,
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\work\test\checkDeapStream\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map