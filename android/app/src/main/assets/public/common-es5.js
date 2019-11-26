(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <ion-card-content>\n    <ion-img [src]=\"post.featured_media_full\"></ion-img>\n    <ion-button (click)=\"openURL()\" expand=\"full\">Abrir edición digital</ion-button>\n\n  </ion-card-content>\n  \n</ion-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"flag\">\n        <ion-item lines=\"none\">              \n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <ion-label>\n               &nbsp;&nbsp;Cargando edición digital\n            </ion-label>\n          </ion-item> \n    </div>\n  \n  <app-ediciondigital *ngFor=\"let post of posts\" [post]=\"post\">\n\n  </app-ediciondigital>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>{{ nombre_edicion }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"flag\">\n        <ion-item lines=\"none\">              \n            <ion-spinner name=\"crescent\"></ion-spinner>\n            <ion-label>\n               &nbsp;&nbsp;Cargando noticias\n            </ion-label>\n          </ion-item> \n    </div>\n  <app-posts *ngFor=\"let post of posts\" [post]=\"post\">\n\n  </app-posts>\n  <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\" loadingSpinner=\"bubbles\" loadingText=\"Cargando más noticias...\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/commentbrowser/commentbrowser.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/commentbrowser/commentbrowser.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button [slot]=\"slot != '' ? slot : end\" (click)=\"openURL()\">{{ text }}</ion-button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/ediciones/ediciones.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/ediciones/ediciones.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"digital == 1\">\n    <ion-card [href]=\"'/digitales/'+edicion.id\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ edicion.nombre }}</ion-card-subtitle>\n        <ion-card-title [innerHTML]='edicion.descripcion'></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n</div>\n<div *ngIf=\"digital == null\">\n    <ion-card [href]=\"'/ediciones/'+edicion.id\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ edicion.nombre }}</ion-card-subtitle>\n        <ion-card-title [innerHTML]='edicion.descripcion'></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/posts/posts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/posts/posts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Publicado en {{ post.date | date: 'medium' }}</ion-card-subtitle>\n      <ion-card-title [innerHTML]='post.title'></ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n        <ion-grid>\n            <ion-row>\n              <ion-col size=\"3\">\n                  <ion-img [src]=\"post.featured_media_thumb\" style=\"max-width:150px\"></ion-img>\n              </ion-col>\n              <ion-col size=\"9\">\n                <section [innerHTML]='post.excerpt'></section>\n              </ion-col>             \n            </ion-row>\n        </ion-grid>\n\n    </ion-card-content>\n    <ion-item>\n        <app-commentbrowser [url]='post.link' text=\"Leer más\" slot=\"end\"></app-commentbrowser>\n      </ion-item>\n  </ion-card>"

/***/ }),

/***/ "./src/app/core/servicios/ediciones.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/servicios/ediciones.service.ts ***!
  \*****************************************************/
/*! exports provided: EdicionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionesService", function() { return EdicionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EdicionesService = /** @class */ (function () {
    function EdicionesService(http) {
        this.http = http;
        this.ediciones = [];
    }
    EdicionesService.prototype.getRawEdiciones = function (id, page) {
        var _this = this;
        if (id === void 0) { id = 1617; }
        if (page === void 0) { page = 0; }
        this.ediciones = page > 1 ? this.ediciones : [];
        var link = (page > 0 ? '/categories?parent=' + id + '&per_page=7&page=' + page : '/categories?parent=' + id);
        console.log(id);
        console.log(link);
        console.log(page);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bUrl_tc + link).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            data.forEach(function (i) {
                var edicion;
                edicion = {
                    id: i.id,
                    nombre: i.name,
                    descripcion: i.description,
                    path: i.slug
                };
                _this.ediciones.push(edicion);
            });
            return _this.ediciones;
        }));
    };
    EdicionesService.prototype.getEdicionById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bUrl_tc + '/categories/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var edicion;
            edicion = {
                id: data.id,
                nombre: data.name,
                descripcion: data.description,
                path: data.slug
            };
            return edicion;
        }));
    };
    EdicionesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EdicionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EdicionesService);
    return EdicionesService;
}());



/***/ }),

/***/ "./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZ2l0YWxlcy9jb21wb25lbnRlcy9lZGljaW9uZGlnaXRhbC9lZGljaW9uZGlnaXRhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EdiciondigitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdiciondigitalComponent", function() { return EdiciondigitalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var EdiciondigitalComponent = /** @class */ (function () {
    function EdiciondigitalComponent() {
    }
    EdiciondigitalComponent.prototype.openURL = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ url: this.post.link })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdiciondigitalComponent.prototype.ngOnInit = function () {
        console.log(this.post);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EdiciondigitalComponent.prototype, "post", void 0);
    EdiciondigitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ediciondigital',
            template: __webpack_require__(/*! raw-loader!./ediciondigital.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.html"),
            styles: [__webpack_require__(/*! ./ediciondigital.component.scss */ "./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EdiciondigitalComponent);
    return EdiciondigitalComponent;
}());



/***/ }),

/***/ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DigitaldetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitaldetallePageRoutingModule", function() { return DigitaldetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _digitaldetalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digitaldetalle.page */ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.ts");




var routes = [
    {
        path: '',
        component: _digitaldetalle_page__WEBPACK_IMPORTED_MODULE_3__["DigitaldetallePage"]
    }
];
var DigitaldetallePageRoutingModule = /** @class */ (function () {
    function DigitaldetallePageRoutingModule() {
    }
    DigitaldetallePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DigitaldetallePageRoutingModule);
    return DigitaldetallePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DigitaldetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitaldetallePageModule", function() { return DigitaldetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _digitaldetalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digitaldetalle-routing.module */ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle-routing.module.ts");
/* harmony import */ var _digitaldetalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digitaldetalle.page */ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.ts");
/* harmony import */ var _componentes_ediciondigital_ediciondigital_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/ediciondigital/ediciondigital.component */ "./src/app/pages/digitales/componentes/ediciondigital/ediciondigital.component.ts");








var DigitaldetallePageModule = /** @class */ (function () {
    function DigitaldetallePageModule() {
    }
    DigitaldetallePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _digitaldetalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["DigitaldetallePageRoutingModule"]
            ],
            declarations: [
                _digitaldetalle_page__WEBPACK_IMPORTED_MODULE_6__["DigitaldetallePage"],
                _componentes_ediciondigital_ediciondigital_component__WEBPACK_IMPORTED_MODULE_7__["EdiciondigitalComponent"]
            ],
            exports: [
                _componentes_ediciondigital_ediciondigital_component__WEBPACK_IMPORTED_MODULE_7__["EdiciondigitalComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], DigitaldetallePageModule);
    return DigitaldetallePageModule;
}());



/***/ }),

/***/ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZ2l0YWxlcy9wYWdlcy9kaWdpdGFsZGV0YWxsZS9kaWdpdGFsZGV0YWxsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DigitaldetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitaldetallePage", function() { return DigitaldetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/servicios/posts.service */ "./src/app/core/servicios/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DigitaldetallePage = /** @class */ (function () {
    function DigitaldetallePage(postsService, activatedRoute) {
        this.postsService = postsService;
        this.activatedRoute = activatedRoute;
        this.id = null;
        this.flag = true;
    }
    DigitaldetallePage.prototype.fetchPosts = function (cid) {
        var _this = this;
        this.postsService.getPostsByCategoryId(cid).subscribe(function (data) {
            _this.flag = false;
            if (data.length == 0) {
                _this.posts = null;
                _this.title = 'Edición digital';
            }
            else {
                _this.posts = data;
                _this.title = data[0].title;
            }
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    DigitaldetallePage.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id > 0) {
            this.fetchPosts(this.id);
        }
    };
    DigitaldetallePage.ctorParameters = function () { return [
        { type: src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DigitaldetallePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-digitaldetalle',
            template: __webpack_require__(/*! raw-loader!./digitaldetalle.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.html"),
            styles: [__webpack_require__(/*! ./digitaldetalle.page.scss */ "./src/app/pages/digitales/pages/digitaldetalle/digitaldetalle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DigitaldetallePage);
    return DigitaldetallePage;
}());



/***/ }),

/***/ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ediciones/pages/edicionesposts/edicionesposts-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EdicionespostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionespostsPageRoutingModule", function() { return EdicionespostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edicionesposts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edicionesposts.page */ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.ts");




var routes = [
    {
        path: '',
        component: _edicionesposts_page__WEBPACK_IMPORTED_MODULE_3__["EdicionespostsPage"]
    }
];
var EdicionespostsPageRoutingModule = /** @class */ (function () {
    function EdicionespostsPageRoutingModule() {
    }
    EdicionespostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EdicionespostsPageRoutingModule);
    return EdicionespostsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EdicionespostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionespostsPageModule", function() { return EdicionespostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edicionesposts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edicionesposts-routing.module */ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts-routing.module.ts");
/* harmony import */ var _edicionesposts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edicionesposts.page */ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.ts");
/* harmony import */ var src_app_shared_components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/shared.module */ "./src/app/shared/components/shared.module.ts");








var EdicionespostsPageModule = /** @class */ (function () {
    function EdicionespostsPageModule() {
    }
    EdicionespostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _edicionesposts_routing_module__WEBPACK_IMPORTED_MODULE_5__["EdicionespostsPageRoutingModule"],
                src_app_shared_components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_edicionesposts_page__WEBPACK_IMPORTED_MODULE_6__["EdicionespostsPage"]]
        })
    ], EdicionespostsPageModule);
    return EdicionespostsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaWNpb25lcy9wYWdlcy9lZGljaW9uZXNwb3N0cy9lZGljaW9uZXNwb3N0cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EdicionespostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionespostsPage", function() { return EdicionespostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/servicios/posts.service */ "./src/app/core/servicios/posts.service.ts");
/* harmony import */ var src_app_core_servicios_ediciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/servicios/ediciones.service */ "./src/app/core/servicios/ediciones.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var EdicionespostsPage = /** @class */ (function () {
    function EdicionespostsPage(activatedRoute, postsService, edicionesService) {
        this.activatedRoute = activatedRoute;
        this.postsService = postsService;
        this.edicionesService = edicionesService;
        this.id = null;
        this.title = "Noticias de la edición";
        this.flag = true;
        this.page = 1;
        this.maximumPages = 3;
    }
    EdicionespostsPage.prototype.fetchPostsByEdicionId = function (cid) {
        var _this = this;
        this.postsService.getPostsByCategoryId(cid, this.page).subscribe(function (data) {
            _this.posts = data;
            _this.flag = false;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    EdicionespostsPage.prototype.fetchEdicionById = function (cid) {
        var _this = this;
        this.edicionesService.getEdicionById(cid).subscribe(function (data) {
            _this.edicion = data;
            _this.nombre_edicion = _this.edicion.nombre;
            console.log(_this.edicion.nombre);
        }, function (error) {
            console.error(error);
        });
    };
    EdicionespostsPage.prototype.loadMore = function (event) {
        this.page++;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id > 0) {
            this.fetchPostsByEdicionId(this.id);
        }
        if (this.page === this.maximumPages) {
            event.target.disabled = true;
        }
    };
    EdicionespostsPage.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id > 0) {
            this.fetchPostsByEdicionId(this.id);
            this.fetchEdicionById(this.id);
        }
    };
    EdicionespostsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: src_app_core_servicios_ediciones_service__WEBPACK_IMPORTED_MODULE_4__["EdicionesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
    ], EdicionespostsPage.prototype, "infiniteScroll", void 0);
    EdicionespostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edicionesposts',
            template: __webpack_require__(/*! raw-loader!./edicionesposts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.html"),
            styles: [__webpack_require__(/*! ./edicionesposts.page.scss */ "./src/app/pages/ediciones/pages/edicionesposts/edicionesposts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_servicios_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            src_app_core_servicios_ediciones_service__WEBPACK_IMPORTED_MODULE_4__["EdicionesService"]])
    ], EdicionespostsPage);
    return EdicionespostsPage;
}());



/***/ }),

/***/ "./src/app/shared/components/commentbrowser/commentbrowser.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/commentbrowser/commentbrowser.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbW1lbnRicm93c2VyL2NvbW1lbnRicm93c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/commentbrowser/commentbrowser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/commentbrowser/commentbrowser.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommentbrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentbrowserComponent", function() { return CommentbrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var CommentbrowserComponent = /** @class */ (function () {
    function CommentbrowserComponent() {
    }
    CommentbrowserComponent.prototype.openURL = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ url: this.url })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentbrowserComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommentbrowserComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommentbrowserComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommentbrowserComponent.prototype, "slot", void 0);
    CommentbrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commentbrowser',
            template: __webpack_require__(/*! raw-loader!./commentbrowser.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/commentbrowser/commentbrowser.component.html"),
            styles: [__webpack_require__(/*! ./commentbrowser.component.scss */ "./src/app/shared/components/commentbrowser/commentbrowser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentbrowserComponent);
    return CommentbrowserComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ediciones/ediciones.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/ediciones/ediciones.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VkaWNpb25lcy9lZGljaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/ediciones/ediciones.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/ediciones/ediciones.component.ts ***!
  \********************************************************************/
/*! exports provided: EdicionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionesComponent", function() { return EdicionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EdicionesComponent = /** @class */ (function () {
    function EdicionesComponent() {
    }
    EdicionesComponent.prototype.ngOnInit = function () {
        if (this.digital != 1) {
            this.digital = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EdicionesComponent.prototype, "edicion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EdicionesComponent.prototype, "digital", void 0);
    EdicionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edicion',
            template: __webpack_require__(/*! raw-loader!./ediciones.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/ediciones/ediciones.component.html"),
            styles: [__webpack_require__(/*! ./ediciones.component.scss */ "./src/app/shared/components/ediciones/ediciones.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EdicionesComponent);
    return EdicionesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/posts/posts.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/posts/posts.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/posts/posts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/posts/posts.component.ts ***!
  \************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsComponent.prototype, "post", void 0);
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/shared/components/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/components/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commentbrowser_commentbrowser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentbrowser/commentbrowser.component */ "./src/app/shared/components/commentbrowser/commentbrowser.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/shared/components/posts/posts.component.ts");
/* harmony import */ var _ediciones_ediciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ediciones/ediciones.component */ "./src/app/shared/components/ediciones/ediciones.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _commentbrowser_commentbrowser_component__WEBPACK_IMPORTED_MODULE_3__["CommentbrowserComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
                _ediciones_ediciones_component__WEBPACK_IMPORTED_MODULE_5__["EdicionesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _commentbrowser_commentbrowser_component__WEBPACK_IMPORTED_MODULE_3__["CommentbrowserComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
                _ediciones_ediciones_component__WEBPACK_IMPORTED_MODULE_5__["EdicionesComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map