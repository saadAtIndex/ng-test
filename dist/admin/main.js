"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/"./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/
    /*! no static exports found */
    /***/function src$$_lazy_route_resourceLazyRecursive(module, exports) {

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
        webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

        /***/
    },

    /***/"./src/app/app.component.css":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcAppAppComponentCss(module, exports) {

        module.exports = "";

        /***/
    },

    /***/"./src/app/app.component.html":
    /*!************************************!*\
      !*** ./src/app/app.component.html ***!
      \************************************/
    /*! no static exports found */
    /***/function srcAppAppComponentHtml(module, exports) {

        module.exports = "<nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                    aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" routerLink=\"/\">Home page</a>\n            </div>\n    \n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        \n    \n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n<router-outlet></router-outlet>\n\n<!-- container-1 END-->";

        /***/
    },

    /***/"./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /*! exports provided: AppComponent */
    /***/function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./order.service */"./src/app/order.service.ts");
        /* harmony import */var _da_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./da.service */"./src/app/da.service.ts");
        /* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../environments/environment */"./src/environments/environment.ts");
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var AppComponent = /** @class */function () {
            function AppComponent(orderServices, router) {
                this.orderServices = orderServices;
                this.router = router;
                this.page = 1;
                this.totalPages = 1;
                this.orders = [];
            }
            AppComponent.prototype.ngOnInit = function () {
                console.log("sdfsd");
                _da_service__WEBPACK_IMPORTED_MODULE_2__["default"].login({
                    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMxNSwiaXNzIjoiQXBwIiwiaWF0IjoxNTM2NDkyMTA5NzgxLCJleHAiOjE1MzY0OTIxMTY5ODF9.wYPCAEDMcUC2JvmBXxT5z2w8Jf2KL7ilVgEsYLQPuOk",
                    loginAs: "PROVIDER",
                    id: 315
                }, function (success, data) {
                    console.log(success);
                    console.log(data);
                });
            };
            AppComponent.prototype.newPosition = function (event) {
                this.newlat = event.coords.lat;
                this.newLng = event.coords.lng;
                this.lat = this.newlat;
                this.lng = this.newLng;
                console.log({ id: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id, latitude: this.newlat, longitude: this.newLng });
                // ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.newlat, longitude: this.newLng });
            };
            AppComponent.prototype.startTracking = function () {
                var _this = this;
                var opts = { maximumAge: 60000, timeout: 15000 };
                var watchPositionReturn = navigator.geolocation.getCurrentPosition(function (position) {
                    _this.lat = position['coords'].latitude;
                    _this.lng = position['coords'].longitude;
                    console.log('watchPositionReturn', position);
                    // ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.lat, longitude: this.lng });
                }, function (err) {
                    console.log('watchPositionReturn error', err);
                }, opts);
            };
            AppComponent.prototype.onLoadMoreClick = function () {
                this.page++;
                this.fetchOrders(this.page);
            };
            AppComponent.prototype.changeStatus = function (id, status) {
                var _this = this;
                console.log(id, 'the status ====>', status);
                this.orderServices.updateproviderorders(id, status).subscribe(function (res) {
                    _this.orders = [];
                    _this.fetchOrders(1);
                });
            };
            AppComponent.prototype.fetchOrders = function (page) {
                var _this = this;
                this.loading = true;
                this.orderServices.fetchproviderorders(page).subscribe(function (result) {
                    console.log(result);
                    _this.orders = _this.orders.concat(result.data);
                    _this.totalPages = result.pageCount;
                    _this.loading = false;
                    if (_this.page == _this.totalPages) _this.noMoreData = true;
                });
            };
            AppComponent.prototype.goToChat = function (client) {
                console.log('the client ==>', client);
                this.router.navigate(['chat']);
            };
            AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                selector: 'app-root',
                template: __webpack_require__( /*! ./app.component.html */"./src/app/app.component.html"),
                styles: [__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css")]
            }), __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AppComponent);
            return AppComponent;
        }();

        /***/
    },

    /***/"./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: AppModule */
    /***/function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
        /* harmony import */var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @agm/core */"./node_modules/@agm/core/index.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./order.service */"./src/app/order.service.ts");
        /* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm5/http.js");
        /* harmony import */var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./chat/chat.component */"./src/app/chat/chat.component.ts");
        /* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./orders/orders.component */"./src/app/orders/orders.component.ts");
        /* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */var _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./showorder-notification/showorder-notification.component */"./src/app/showorder-notification/showorder-notification.component.ts");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! angular2-notifications */"./node_modules/angular2-notifications/angular2-notifications.umd.js");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_12__);
        /* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./order-detail/order-detail.component */"./src/app/order-detail/order-detail.component.ts");
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };

        var appRouting = [{ path: 'provider/:id/notification', component: _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__["ShoworderNotificationComponent"] }, { path: 'client/:id/chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"] }, { path: 'orders/:id', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"] }, { path: '', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"] }];
        var AppModule = /** @class */function () {
            function AppModule() {}
            AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"], _showorder_notification_showorder_notification_component__WEBPACK_IMPORTED_MODULE_11__["ShoworderNotificationComponent"], _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_12__["SimpleNotificationsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRouting), _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDe_nAWE5ccLGXPuWbcGTXzVlrtH-lMcUw'
                })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
                providers: [_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderServices"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            })], AppModule);
            return AppModule;
        }();

        /***/
    },

    /***/"./src/app/chat/chat.component.css":
    /*!*****************************************!*\
      !*** ./src/app/chat/chat.component.css ***!
      \*****************************************/
    /*! no static exports found */
    /***/function srcAppChatChatComponentCss(module, exports) {

        module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-color: #edeff2;\r\n    font-family: \"Calibri\", \"Roboto\", sans-serif;\r\n  }\r\n  \r\n  .chat_window {\r\n    position: absolute;\r\n    width: calc(100% - 20px);\r\n    max-width: 80%;\r\n    height: 500px;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n    background-color: #f8f8f8;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .top_menu {\r\n    background-color: #fff;\r\n    width: 100%;\r\n    padding: 20px 0 15px;\r\n    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .top_menu .buttons {\r\n    margin: 3px 0 0 20px;\r\n    position: absolute;\r\n  }\r\n  \r\n  .top_menu .buttons .button {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n  \r\n  .top_menu .buttons .button.close {\r\n    background-color: #f5886e;\r\n  }\r\n  \r\n  .top_menu .buttons .button.minimize {\r\n    background-color: #fdbf68;\r\n  }\r\n  \r\n  .top_menu .buttons .button.maximize {\r\n    background-color: #a3d063;\r\n  }\r\n  \r\n  .top_menu .title {\r\n    text-align: center;\r\n    color: #bcbdc0;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .messages {\r\n    position: relative;\r\n    list-style: none;\r\n    padding: 20px 10px 0 10px;\r\n    margin: 0;\r\n    height: 347px;\r\n    overflow: scroll;\r\n  }\r\n  \r\n  .messages .message {\r\n    clear: both;\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n    transition: all 0.5s linear;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .messages .message.left .avatar {\r\n    background-color: #f5886e;\r\n    float: left;\r\n  }\r\n  \r\n  .messages .message.left .text_wrapper {\r\n    background-color: #ffe6cb;\r\n    margin-left: 20px;\r\n  }\r\n  \r\n  .messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\r\n    right: 100%;\r\n    border-right-color: #ffe6cb;\r\n  }\r\n  \r\n  .messages .message.left .text {\r\n    color: #c48843;\r\n  }\r\n  \r\n  .messages .message.right .avatar {\r\n    background-color: #fdbf68;\r\n    float: right;\r\n  }\r\n  \r\n  .messages .message.right .text_wrapper {\r\n    background-color: #c7eafc;\r\n    margin-right: 20px;\r\n    float: right;\r\n  }\r\n  \r\n  .messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\r\n    left: 100%;\r\n    border-left-color: #c7eafc;\r\n  }\r\n  \r\n  .messages .message.right .text {\r\n    color: #45829b;\r\n  }\r\n  \r\n  .messages .message.appeared {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .messages .message .avatar {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .messages .message .text_wrapper {\r\n    display: inline-block;\r\n    padding: 20px;\r\n    border-radius: 6px;\r\n    width: calc(100% - 85px);\r\n    min-width: 100px;\r\n    position: relative;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\r\n    top: 18px;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::after {\r\n    border-width: 13px;\r\n    margin-top: 0px;\r\n  }\r\n  \r\n  .messages .message .text_wrapper::before {\r\n    border-width: 15px;\r\n    margin-top: -2px;\r\n  }\r\n  \r\n  .messages .message .text_wrapper .text {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .bottom_wrapper {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    padding: 20px 20px;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n  \r\n  .bottom_wrapper .message_input_wrapper {\r\n    display: inline-block;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    border: 1px solid #bcbdc0;\r\n    width: calc(100% - 160px);\r\n    position: relative;\r\n    padding: 0 20px;\r\n  }\r\n  \r\n  .bottom_wrapper .message_input_wrapper .message_input {\r\n    border: none;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    width: calc(100% - 40px);\r\n    position: absolute;\r\n    outline-width: 0;\r\n    color: gray;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message {\r\n    width: 140px;\r\n    height: 50px;\r\n    display: inline-block;\r\n    border-radius: 50px;\r\n    background-color: #a3d063;\r\n    border: 2px solid #a3d063;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: all 0.2s linear;\r\n    text-align: center;\r\n    float: right;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message:hover {\r\n    color: #a3d063;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .bottom_wrapper .send_message .text {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    display: inline-block;\r\n    line-height: 48px;\r\n  }\r\n  \r\n  .message_template {\r\n    display: none;\r\n  }\r\n  ";

        /***/
    },

    /***/"./src/app/chat/chat.component.html":
    /*!******************************************!*\
      !*** ./src/app/chat/chat.component.html ***!
      \******************************************/
    /*! no static exports found */
    /***/function srcAppChatChatComponentHtml(module, exports) {

        module.exports = "<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"chat_window\">\n  <div class=\"top_menu\">\n    <div class=\"buttons\">\n      <div class=\"button close\">\n\n      </div>\n      <div class=\"button minimize\"></div>\n      <div class=\"button maximize\"></div>\n    </div>\n    <div class=\"title\">Chat</div>\n  </div>\n  <ul class=\"messages\" #conversationArea>\n    <div *ngFor=\"let message of messages\">\n        <li class=\"message left appeared\" *ngIf=\"message.user._id ==person1\">\n            <div class=\"avatar\"></div>\n            <div class=\"text_wrapper\">\n              <div class=\"text\">{{message?.text}}</div>\n            </div>\n          </li>\n          <li class=\"message right appeared\" *ngIf=\"message.user._id ==person2\">\n            <div class=\"avatar\"></div>\n            <div class=\"text_wrapper\">\n              <div class=\"text\">{{message?.text}}</div>\n            </div>\n          </li>\n    </div>\n  \n  </ul>\n  <div class=\"bottom_wrapper clearfix\">\n    <form [formGroup]=\"chatForm\" (ngSubmit)=\"sendMessage()\" class=\"SendForm\">\n      <div class=\"message_input_wrapper\">\n        <input formControlName=\"messageText\" class=\"message_input\" (input)=\"emitIsTying()\" placeholder=\"Type your message here...\" />\n      </div>\n      <button class=\"send_message\">\n        <div class=\"icon\"></div>\n        <div class=\"text\">\n          Send\n        </div>\n      </button>\n    </form>\n  </div>\n</div>\n<div class=\"message_template\">\n  <li class=\"message\">\n    <div class=\"avatar\">\n\n    </div>\n    <div class=\"text_wrapper\">\n      <div class=\"text\">\n      </div>\n    </div>\n  </li>\n</div>";

        /***/
    },

    /***/"./src/app/chat/chat.component.ts":
    /*!****************************************!*\
      !*** ./src/app/chat/chat.component.ts ***!
      \****************************************/
    /*! exports provided: ChatComponent */
    /***/function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
            return ChatComponent;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../order.service */"./src/app/order.service.ts");
        /* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../environments/environment */"./src/environments/environment.ts");
        /* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */var _da_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../da.service */"./src/app/da.service.ts");
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var ChatComponent = /** @class */function () {
            function ChatComponent(orderServices, activeRoute, zone) {
                this.orderServices = orderServices;
                this.activeRoute = activeRoute;
                this.zone = zone;
                this.messages = [];
                this.scrollToBottomFlage = false;
            }
            ChatComponent.prototype.ngOnInit = function () {
                //inialize the form 
                this.chatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    'messageText': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [])
                });
                //get the two persons 
                this.person1 = this.activeRoute.snapshot.params['id'];
                this.person2 = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].id;
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
                    // this.messages.push({ ...res });
                    _this.messages = res.reverse();
                    _this.scrollToBottomFlage = true;
                    console.log(_this.messages.length, _this.messages, 'the conversation Message ===', _this.messages[3].text);
                }, function (err) {
                    console.log('error while getting getConversationId ==>', err);
                });
            };
            ChatComponent.prototype.sendMessage = function () {
                var _this = this;
                if (!this.chatForm.get('messageText').value) {
                    return;
                }
                var message = {
                    'text': this.chatForm.get('messageText').value
                };
                this.orderServices.sendMessage(message, this.conversationId).subscribe(function (res) {
                    console.log('the result ===', res);
                    _this.chatForm.get('messageText').setValue('');
                }, function (err) {
                    console.log('the result ===', err);
                });
            };
            ChatComponent.prototype.listenToMessage = function () {
                var _this = this;
                console.log('this.conversationId ==>', this.conversationId);
                this.listChat = _da_service__WEBPACK_IMPORTED_MODULE_5__["default"].record.getList("dsChats/" + this.conversationId);
                // console.log('the list chat ===>', this.listChat);
                this.listChat.on('entry-added', function (x) {
                    _da_service__WEBPACK_IMPORTED_MODULE_5__["default"].record.getRecord(x).whenReady(function (message) {
                        // console.log(this.messages, 'the resulat of  ', message.get());
                        _this.zone.run(function () {
                            _this.messages.push(message.get());
                            _this.scrollToBottomFlage = true;
                        });
                    });
                });
            };
            ChatComponent.prototype.emitIsTying = function () {
                console.log('the help');
                _da_service__WEBPACK_IMPORTED_MODULE_5__["default"].event.emit(this.conversationId + "/" + this.person1, { isTyping: true });
            };
            ChatComponent.prototype.checkTyping = function () {
                var _this = this;
                _da_service__WEBPACK_IMPORTED_MODULE_5__["default"].event.subscribe(this.conversationId + "/" + this.person2, function (type) {
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
                        var index = _this.messages.findIndex(function (i) {
                            return i._id === "typingId";
                        });
                        if (index < 0) {
                            _this.zone.run(function () {
                                _this.messages.push(fakeMsg_1);
                                _this.scrollToBottomFlage = true;
                            });
                        }
                        _this.time = setTimeout(function () {
                            clearTimeout(_this.time);
                            var index = _this.messages.findIndex(function (i) {
                                return i._id === "typingId";
                            });
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
                } catch (err) {}
            };
            ChatComponent.prototype.chat = function () {
                (function () {
                    var Message;
                    Message = function Message(arg) {
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
                        getMessageText = function getMessageText() {
                            var $message_input;
                            $message_input = $('.message_input');
                            return $message_input.val();
                        };
                        sendMessage = function sendMessage(text) {
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
                }).call(this);
            };
            __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('conversationArea'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], ChatComponent.prototype, "chatBody", void 0);
            ChatComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                selector: 'app-chat',
                template: __webpack_require__( /*! ./chat.component.html */"./src/app/chat/chat.component.html"),
                styles: [__webpack_require__( /*! ./chat.component.css */"./src/app/chat/chat.component.css")]
            }), __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], ChatComponent);
            return ChatComponent;
        }();

        /***/
    },

    /***/"./src/app/da.service.ts":
    /*!*******************************!*\
      !*** ./src/app/da.service.ts ***!
      \*******************************/
    /*! exports provided: default */
    /***/function srcAppDaServiceTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! deepstream.io-client-js */"./node_modules/deepstream.io-client-js/dist/lib/client.js");
        /* harmony import */var deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../environments/environment */"./src/environments/environment.ts");

        var ds = deepstream_io_client_js__WEBPACK_IMPORTED_MODULE_0__(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DsPath, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DsOptions);
        ds.on('connectionStateChanged', function (connection) {
            console.log(connection);
        });
        ds.on('error', function (err) {
            console.log(err);
        });
        /* harmony default export */__webpack_exports__["default"] = ds;

        /***/
    },

    /***/"./src/app/order-detail/order-detail.component.css":
    /*!*********************************************************!*\
      !*** ./src/app/order-detail/order-detail.component.css ***!
      \*********************************************************/
    /*! no static exports found */
    /***/function srcAppOrderDetailOrderDetailComponentCss(module, exports) {

        module.exports = "/* /* body {\r\n    font-family: Arial;\r\n    color: white;\r\n} */\r\nagm-map{\r\n    height: 600px;\r\n  }\r\n.split {\r\n    height: 100%;\r\n    width: 50%;\r\n    position: fixed;\r\n    top: 0;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n.left {\r\n    left: 0;\r\n}\r\n.right {\r\n    right: 0;\r\n}\r\n.centered img {\r\n    width: 150px;\r\n    border-radius: 50%;\r\n}\r\nh1{\r\n    font-size: 16px;\r\n}\r\n.orderSingle{\r\n      width: 50%;\r\n      margin-left: 25%;\r\n      margin-right: 25%;\r\n      height: 200px;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n  }\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 48%;\r\n    text-align: center;\r\n    font-family: arial;\r\n    margin-bottom: 50px;\r\n    height: 400px;\r\n  }\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\nbutton:disabled{\r\n      cursor: not-allowed;\r\n  } ";

        /***/
    },

    /***/"./src/app/order-detail/order-detail.component.html":
    /*!**********************************************************!*\
      !*** ./src/app/order-detail/order-detail.component.html ***!
      \**********************************************************/
    /*! no static exports found */
    /***/function srcAppOrderDetailOrderDetailComponentHtml(module, exports) {

        module.exports = "<div class=\"card orderSingle\">\n  <p class=\"title\">{{order?.provider?.name}}</p>\n  <h1>Order Number: {{order?.id }}</h1>\n\n  <h1>client Id: {{order?.client?.id }}</h1>\n  <h1>Order Price: {{order?.price }}</h1>\n\n\n  <h1>\n    Order status: {{order?.status }}\n\n  </h1>\n\n  <h1>Order type: {{order?.orderType }}</h1>\n  <h1>Order preview Needed: {{order?.previewNeeded }}</h1>\n  <h1>{{order?.bookingDate | date:'medium'}}</h1>\n  <p>Order location: {{order?.requestLocationPlaceName }}</p>\n\n\n\n  <p >\n    <button (click)=\"startCancel('REQUEST_TO_PAUSE_BY_PROVIDER')\" style=\"width:50%;background:crimson\" [disabled]=\"order?.status != 'IN_PROGRESS'\">\n      Puse\n    </button>\n    <button (click)=\"startCancel('REQUEST_TO_RESUME_BY_PROVIDER')\" style=\"width:50%;background:#000\" [disabled]=\"order?.status != 'PAUSE_BY_PROVIDER'\">\n      Resueme\n    </button>\n  </p>\n\n</div>\n<simple-notifications [options]=\"options\"></simple-notifications>";

        /***/
    },

    /***/"./src/app/order-detail/order-detail.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/order-detail/order-detail.component.ts ***!
      \********************************************************/
    /*! exports provided: OrderDetailComponent */
    /***/function srcAppOrderDetailOrderDetailComponentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function () {
            return OrderDetailComponent;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../order.service */"./src/app/order.service.ts");
        /* harmony import */var _da_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../da.service */"./src/app/da.service.ts");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! angular2-notifications */"./node_modules/angular2-notifications/angular2-notifications.umd.js");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var OrderDetailComponent = /** @class */function () {
            function OrderDetailComponent(route, _notifications, zone, orderServices) {
                this.route = route;
                this._notifications = _notifications;
                this.zone = zone;
                this.orderServices = orderServices;
                this.requestToPauseByClient = false;
            }
            OrderDetailComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.orderId = this.route.snapshot.params['id'];
                this.fetchOrder(this.orderId);
                // ds.event.subscribe(`/providers/${environment.id}/orders/${this.orderId}`,
                _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].record.getRecord("dsOrder/" + this.orderId).subscribe(function (res) {
                    if (res.requestToPauseByClient == true) {
                        var confirm_1 = window.confirm('are you want to PAUSED_BY_CLIENT');
                        if (confirm_1 == true) {
                            _this.pauseResume('PAUSED_BY_CLIENT');
                        }
                    }
                    if (res.requestToResumeByClient == true) {
                        var confirm_2 = window.confirm('are you want to RESUEME_BY_CLIENT');
                        if (confirm_2 == true) {
                            _this.pauseResume('IN_PROGRESS');
                        }
                    }
                    _this.resetUnseenCount();
                    console.log(_this.orderId, 'the notifcation ', res, res.requestToPause);
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
                this.orderServices.getOrderById(orderId).subscribe(function (res) {
                    _this.order = res;
                    console.log('the order ==', res);
                });
            };
            OrderDetailComponent.prototype.resetUnseenCount = function () {
                this.orderServices.resetUnseenCount().subscribe(function (result) {
                    //console.log(result, 'result')
                });
            };
            OrderDetailComponent.prototype.startCancel = function (status) {
                // if (status == 'IN_PROGRESS') status = 'REQUEST_TO_PAUSE_BY_PROVIDER';
                // else status = 'REQUEST_TO_RESUME_BY_PROVIDER'
                var _this = this;
                console.log('the status ====>', status);
                this.orderServices.updateproviderorders(this.orderId, status).subscribe(function (res) {
                    _this.zone.run(function () {
                        _this.fetchOrder(_this.orderId);
                    });
                }, function (err) {
                    console.log('the error is ====>', err);
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
                // this._notifications.success('new notification', 'this notification from my orders ');
            };
            OrderDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                selector: 'app-order-detail',
                template: __webpack_require__( /*! ./order-detail.component.html */"./src/app/order-detail/order-detail.component.html"),
                styles: [__webpack_require__( /*! ./order-detail.component.css */"./src/app/order-detail/order-detail.component.css")]
            }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderServices"]])], OrderDetailComponent);
            return OrderDetailComponent;
        }();

        /***/
    },

    /***/"./src/app/order.service.ts":
    /*!**********************************!*\
      !*** ./src/app/order.service.ts ***!
      \**********************************/
    /*! exports provided: OrderServices */
    /***/function srcAppOrderServiceTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "OrderServices", function () {
            return OrderServices;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm5/http.js");
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../environments/environment */"./src/environments/environment.ts");
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var OrderServices = /** @class */function () {
            function OrderServices(httpClient) {
                this.httpClient = httpClient;
                this.path = "http://192.168.0.232:3002/api/v1/providers/" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id + "/orders";
                this.basePath = "http://192.168.0.232:3002/api/v1/";
                this.token = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMxNSwiaXNzIjoiQXBwIiwiaWF0IjoxNTM2NDkyMTA5NzgxLCJleHAiOjE1MzY0OTIxMTY5ODF9.wYPCAEDMcUC2JvmBXxT5z2w8Jf2KL7ilVgEsYLQPuOk') };
            }
            OrderServices.prototype.fetchproviderorders = function (page) {
                var url = this.path + "?page=" + page + "&limit=" + 12;
                return this.httpClient.get(url, this.token);
            };
            OrderServices.prototype.updateproviderorders = function (orderId, status) {
                var url = this.basePath + "orders/" + orderId + "/status";
                return this.httpClient.patch(url, { "status": status }, this.token);
            };
            OrderServices.prototype.updateprovideLocation = function (provider, body) {
                var url = this.basePath + 'providers/' + provider + '/current-location';
                return this.httpClient.put(url, body, this.token);
            };
            OrderServices.prototype.resetUnseenCount = function () {
                var url = this.basePath + 'users/' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id + '/notifications/count-reset';
                return this.httpClient.put(url, {}, this.token);
            };
            OrderServices.prototype.getConversationId = function (person1, person2) {
                var url = this.basePath + "conversationId?id1=" + person1 + "&id2=" + person2;
                return this.httpClient.get(url, this.token);
            };
            OrderServices.prototype.getConversationMessages = function (conversationId) {
                var url = this.basePath + "chat/" + conversationId;
                return this.httpClient.get(url, this.token);
            };
            OrderServices.prototype.sendMessage = function (messageObject, conversationId) {
                var url = this.basePath + "chat/" + conversationId;
                return this.httpClient.post(url, messageObject, this.token);
            };
            OrderServices.prototype.fetchproviderNotifications = function (page) {
                var url = this.basePath + "users/" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id + "/notifications?page=" + page + "&limit=" + 12;
                return this.httpClient.get(url, this.token);
            };
            OrderServices.prototype.getOrderById = function (orderId) {
                var url = this.basePath + "providers/" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id + "/orders/" + orderId;
                return this.httpClient.get(url, this.token);
            };
            OrderServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OrderServices);
            return OrderServices;
        }();

        /***/
    },

    /***/"./src/app/orders/orders.component.css":
    /*!*********************************************!*\
      !*** ./src/app/orders/orders.component.css ***!
      \*********************************************/
    /*! no static exports found */
    /***/function srcAppOrdersOrdersComponentCss(module, exports) {

        module.exports = "/* /* body {\r\n    font-family: Arial;\r\n    color: white;\r\n} */\r\nagm-map{\r\n    height: 600px;\r\n  }\r\n.split {\r\n    height: 100%;\r\n    width: 50%;\r\n    position: fixed;\r\n    top: 0;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n.left {\r\n    left: 0;\r\n}\r\n.right {\r\n    right: 0;\r\n}\r\n.centered img {\r\n    width: 150px;\r\n    border-radius: 50%;\r\n}\r\nh1{\r\n    font-size: 16px;\r\n}\r\n.orderSingle{\r\n      width: 50%;\r\n      height: 250px;\r\n      float: left;\r\n      margin-bottom: 20px;\r\n  }\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 48%;\r\n    margin: .5%;\r\n    text-align: center;\r\n    font-family: arial;\r\n    margin-bottom: 50px;\r\n    min-height: 500px;\r\n  }\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\nbutton:disabled{\r\n      cursor: not-allowed;\r\n  } ";

        /***/
    },

    /***/"./src/app/orders/orders.component.html":
    /*!**********************************************!*\
      !*** ./src/app/orders/orders.component.html ***!
      \**********************************************/
    /*! no static exports found */
    /***/function srcAppOrdersOrdersComponentHtml(module, exports) {

        module.exports = "<div class=\"split left pull-left\">\n  <div class=\"centered\">\n    <div class=\"order\">\n      <div *ngFor=\"let order of orders\">\n        <div class=\"card orderSingle\">\n          <p class=\"title\">{{order?.provider?.name}}</p>\n          <h1>Order Number: {{order?.id }}</h1>\n          <button (click)=\"showOrder(order?.id)\" style=\"width:60%;;background: black\">\n            DETAILS\n          </button>\n          <h1>client Id: {{order?.client }}</h1>\n          <h1>Order Price: {{order?.price }}</h1>\n\n          <h1 *ngIf=\"order?.status =='PENDING'\">\n            <!-- Order status: {{order?.status }} -->\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ACCEPTED')\" style=\"width:50%;background: green\">\n              ACCEPTED\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'REJECTED_BY_PROVIDER')\" style=\"width:50%;background: red\">\n              REJECTED_BY_PROVIDER\n            </button>\n          </h1>\n\n          <h1 *ngIf=\"order?.status =='ACCEPTED'\">\n            <!-- Order status: {{order?.status }} -->\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ON_THE_WAY')\" style=\"background: burlywood\">\n              ON_THE_WAY\n            </button>\n          </h1>\n\n          <h1 *ngIf=\"order?.status =='ON_THE_WAY'\">\n            <!-- Order status: {{order?.status }} -->\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'ARRIVED')\" style=\"background: blue\">\n              ARRIVED\n            </button>\n          </h1>\n\n          <!-- <h1 *ngIf=\"order?.status =='ARRIVED'\">\n             Order status: {{order?.status }} \n             <button class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'IN_PROGRESS')\" style=\"background: mediumslateblue\">\n                IN_PROGRESS\n            </button class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\" class=\"btn btn-primary\"> \n          </h1> -->\n\n          <h1 *ngIf=\"order?.status =='IN_PROGRESS'\">\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'PAUSED_BY_PROVIDER')\" style=\"width:50%;background: orange\">\n              PAUSED_BY_PROVIDER\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'FINISHED_WORKING')\" style=\"width:50%;background: aquamarine\">\n              FINISHED_WORKING\n            </button>\n          </h1>\n\n          <h1 *ngIf=\"order?.status =='PAUSED_BY_PROVIDER';else otherCondition\">\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'IN_PROGRESS')\" style=\"width:50%;background: orange\">\n              IN_PROGRESS\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"changeStatus(order?.id,'FINISHED_WORKING')\" style=\"width:50%;background: rgb(212, 0, 255)\">\n              FINISHED_WORKING\n            </button>\n          </h1>\n\n\n          <ng-template #otherCondition>\n            <h1>\n              Order status: {{order?.status }}\n\n            </h1>\n          </ng-template>\n\n          <h1>Order type: {{order?.orderType }}</h1>\n          <h1>Order preview Needed: {{order?.previewNeeded }}</h1>\n          <h1>{{order?.bookingDate | date:'medium'}}</h1>\n          <p>Order location: {{order?.requestLocationPlaceName }}</p>\n\n          <!-- [disabled]=\"order?.status != 'ACCEPTED' ||order?.status != 'CANCELLED_BY_CLIENT'\" -->\n\n          <p>\n            <button (click)=\"changeStatus(order?.id,'CANCELLED_BY_PROVIDER')\" style=\"width:50%;background: black\">\n              CANCELLED BY PROVIDER\n            </button>\n            <button (click)=\"goToChat(order?.client)\" style=\"width:50%;background:crimson\">\n              CHAT WITH CLIENT\n            </button>\n\n          </p>\n          <br>\n\n\n        </div>\n      </div>\n      <div *ngIf=\"loading\" style=\"text-align: center;margin: 40px auto\">\n        <!-- <img src=\"assets/images/loading.gif\"  width=\"100\" height=\"100\"> -->\n      </div>\n\n      <div *ngIf=\" orders?.length !=0\">\n        <div style=\"text-align: center;margin-top: 50px;margin-bottom: 50px;\">\n          <button class=\"btn btn-primary\" (click)=\"onLoadMoreClick()\" [disabled]=\"loading || noMoreData \">\n            المزيد\n          </button>\n        </div>\n      </div>\n      <div *ngIf=\"!loading && orders?.length ==0\">\n        <div style=\"text-align: center;margin-top: 50px;\">\n          <button class=\"btn btn-primary\" disabled>\n            لا يوجد بيانات\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"split right pull-right\">\n  <div class=\"centered\">\n    <agm-map [latitude]=\"30.614399499999998\" [longitude]=\"32.300712499999996\" [zoom]=\"14\" [disableDoubleClickZoom]=\"true\" [mapDraggable]=\"true\"\n      [scrollwheel]=\"true\" (mapClick)=\"newPosition($event)\" [disableDefaultUI]=\"true\" [zoomControl]=\"false\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n\n  <div class=\"notification\">\n    <div class=\"singleNotification\">\n      <button (click)=\"gonotifcation()\">notification</button>\n      <br>\n      <br>\n      <!-- <button (click)=\"open()\" class=\"btn btn-primary\">notification click</button> -->\n    </div>\n  </div>\n</div>\n\n\n<simple-notifications [options]=\"options\"></simple-notifications>";

        /***/
    },

    /***/"./src/app/orders/orders.component.ts":
    /*!********************************************!*\
      !*** ./src/app/orders/orders.component.ts ***!
      \********************************************/
    /*! exports provided: OrdersComponent */
    /***/function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
            return OrdersComponent;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../order.service */"./src/app/order.service.ts");
        /* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */var _da_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../da.service */"./src/app/da.service.ts");
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../environments/environment */"./src/environments/environment.ts");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! angular2-notifications */"./node_modules/angular2-notifications/angular2-notifications.umd.js");
        /* harmony import */var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var OrdersComponent = /** @class */function () {
            function OrdersComponent(orderServices, _notifications, router) {
                this.orderServices = orderServices;
                this._notifications = _notifications;
                this.router = router;
                this.page = 1;
                this.totalPages = 1;
                this.orders = [];
                this.types = ['alert', 'error', 'info', 'warn', 'success'];
                this.animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
            }
            OrdersComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.fetchOrders(1);
                this.startTracking();
                _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].record.getRecord("dsNotifications/" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id).subscribe(function (res) {
                    if (res.unseenCount > 0) {
                        _this.open('you have new notification');
                        console.log('the notifcation', res);
                        _this.resetUnseenCount();
                    }
                    console.log(res.unseenCount, 'the notifcation', res);
                });
            };
            OrdersComponent.prototype.resetUnseenCount = function () {
                this.orderServices.resetUnseenCount().subscribe(function (result) {
                    console.log(result, 'result');
                });
            };
            OrdersComponent.prototype.listenForNotifications = function () {
                var _this = this;
                this.orders.forEach(function (order) {
                    _da_service__WEBPACK_IMPORTED_MODULE_3__["default"].event.subscribe("/providers/" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id + "/orders/" + order.id, function (res) {
                        _this.open('order has been changed');
                        // console.log(order.id, 'the notifcation ', res);
                    });
                });
            };
            OrdersComponent.prototype.newPosition = function (event) {
                this.newlat = event.coords.lat;
                this.newLng = event.coords.lng;
                this.lat = this.newlat;
                this.lng = this.newLng;
                // this.open('the new postion is ')
                var body = {
                    "currentLocation": [this.lng, this.lat]
                };
                this.orderServices.updateprovideLocation(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id, body).subscribe(function (result) {
                    //console.log(result, 'result')
                });
                //ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.newlat, longitude: this.newLng });
            };
            OrdersComponent.prototype.startTracking = function () {
                var _this = this;
                var opts = { maximumAge: 60000, timeout: 15000 };
                var watchPositionReturn = navigator.geolocation.watchPosition(function (position) {
                    _this.lat = position['coords'].latitude;
                    _this.lng = position['coords'].longitude;
                    // console.log('watchPositionReturn', position);
                    //  ds.event.emit('dsLocationUpdate', { id: environment.id, latitude: this.lat, longitude: this.lng });
                }, function (err) {
                    console.log('watchPositionReturn error', err);
                }, opts);
            };
            OrdersComponent.prototype.onLoadMoreClick = function () {
                this.page++;
                this.fetchOrders(this.page);
            };
            OrdersComponent.prototype.changeStatus = function (id, status) {
                var _this = this;
                console.log(id, 'the status ====>', status);
                this.orderServices.updateproviderorders(id, status).subscribe(function (res) {
                    _this.orders = [];
                    _this.fetchOrders(1);
                }, function (err) {
                    _this.open(err.error.error.message);
                    console.log('the error is ====>', err.error.error.message);
                });
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
                this.orderServices.fetchproviderorders(page).subscribe(function (result) {
                    console.log(result);
                    _this.orders = _this.orders.concat(result.data);
                    _this.totalPages = result.pageCount;
                    _this.loading = false;
                    //listen
                    _this.listenForNotifications();
                    if (_this.page == _this.totalPages) _this.noMoreData = true;
                });
            };
            OrdersComponent.prototype.goToChat = function (client) {
                console.log('the client ==>', client);
                this.router.navigate(['client', client, 'chat']);
            };
            OrdersComponent.prototype.gonotifcation = function () {
                this.router.navigate(['provider', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id, 'notification']);
            };
            OrdersComponent.prototype.showOrder = function (orderId) {
                this.router.navigate(['orders', orderId]);
            };
            OrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                selector: 'app-orders',
                template: __webpack_require__( /*! ./orders.component.html */"./src/app/orders/orders.component.html"),
                styles: [__webpack_require__( /*! ./orders.component.css */"./src/app/orders/orders.component.css")]
            }), __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"], angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], OrdersComponent);
            return OrdersComponent;
        }();

        /***/
    },

    /***/"./src/app/showorder-notification/showorder-notification.component.css":
    /*!*****************************************************************************!*\
      !*** ./src/app/showorder-notification/showorder-notification.component.css ***!
      \*****************************************************************************/
    /*! no static exports found */
    /***/function srcAppShoworderNotificationShoworderNotificationComponentCss(module, exports) {

        module.exports = "";

        /***/
    },

    /***/"./src/app/showorder-notification/showorder-notification.component.html":
    /*!******************************************************************************!*\
      !*** ./src/app/showorder-notification/showorder-notification.component.html ***!
      \******************************************************************************/
    /*! no static exports found */
    /***/function srcAppShoworderNotificationShoworderNotificationComponentHtml(module, exports) {

        module.exports = "<div *ngFor=\"let notif of notification \" style=\"widows: 60%;padding: 5px;text-align: center;height: 200px;margin-left: 20%;margin-bottom: 20px;margin-right: 20%;background: mediumpurple\">\n  <div class=\"notif\">\n   \n    <h4>the notification : {{notif.id}}</h4>\n    <h4>the message :{{notif.text}}</h4>\n    <h4>provider :{{notif?.subject?.provider?.user.name}}</h4>\n    <h4>client :{{notif?.subject?.client?.user.name}}</h4>\n    <h5>kind :{{notif?.subject?.kind}}</h5>\n    <h5>status :{{notif?.subject?.status}}</h5>\n  </div>\n\n</div>\n\n<div *ngIf=\" notification?.length !=0\">\n  <div style=\"text-align: center;margin-top: 50px;margin-bottom: 50px;\">\n    <button class=\"btn btn-primary\" (click)=\"onLoadMoreClick()\" [disabled]=\"loading || noMoreData \">\n      المزيد\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"!loading && notification?.length ==0\">\n  <div style=\"text-align: center;margin-top: 50px;\">\n    <button class=\"btn btn-primary\" disabled>\n      لا يوجد بيانات\n    </button>\n  </div>\n</div>";

        /***/
    },

    /***/"./src/app/showorder-notification/showorder-notification.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/showorder-notification/showorder-notification.component.ts ***!
      \****************************************************************************/
    /*! exports provided: ShoworderNotificationComponent */
    /***/function srcAppShoworderNotificationShoworderNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "ShoworderNotificationComponent", function () {
            return ShoworderNotificationComponent;
        });
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../order.service */"./src/app/order.service.ts");
        var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = undefined && undefined.__metadata || function (k, v) {
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };

        var ShoworderNotificationComponent = /** @class */function () {
            function ShoworderNotificationComponent(orderServices) {
                this.orderServices = orderServices;
                this.notification = [];
                this.page = 1;
                this.totalPages = 1;
            }
            ShoworderNotificationComponent.prototype.ngOnInit = function () {
                this.fetchnotification(1);
            };
            ShoworderNotificationComponent.prototype.onLoadMoreClick = function () {
                this.page++;
                this.fetchnotification(this.page);
            };
            ShoworderNotificationComponent.prototype.fetchnotification = function (page) {
                var _this = this;
                this.loading = true;
                this.orderServices.fetchproviderNotifications(page).subscribe(function (result) {
                    _this.notification = _this.notification.concat(result.data);
                    console.log('the result', result);
                    _this.totalPages = result.pageCount;
                    _this.loading = false;
                    if (_this.page == _this.totalPages) _this.noMoreData = true;
                });
            };
            ShoworderNotificationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                selector: 'app-showorder-notification',
                template: __webpack_require__( /*! ./showorder-notification.component.html */"./src/app/showorder-notification/showorder-notification.component.html"),
                styles: [__webpack_require__( /*! ./showorder-notification.component.css */"./src/app/showorder-notification/showorder-notification.component.css")]
            }), __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderServices"]])], ShoworderNotificationComponent);
            return ShoworderNotificationComponent;
        }();

        /***/
    },

    /***/"./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        var environment = {
            production: false,
            id: 315,
            DsPath: '192.168.0.232:6020',
            DsOptions: {
                maxReconnectInterval: 1000,
                reconnectIntervalIncrement: 500,
                maxReconnectAttempts: Infinity,
                heartbeatInterval: 60000
            }
        };
        /*
         * In development mode, to ignore zone related error stack frames such as
         * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
         * import the following file, but please comment it out in production mode
         * because it will have performance impact when throw error
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


        /***/
    },

    /***/"./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/function srcMainTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
        /* harmony import */var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
        /* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
            return console.log(err);
        });

        /***/
    },

    /***/0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/function _(module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! F:\work\test\checkDeapStream\src\main.ts */"./src/main.ts");

        /***/
    },

    /***/1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/
    /*! no static exports found */
    /***/function _(module, exports) {

        /* (ignored) */

        /***/}

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map