(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{661:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("code",[t._v("@MiddlewareError()")]),t._v(" lets you handle all the errors when you add your middleware in your "),n("router-link",{attrs:{to:"/api/common/server/components/ServerLoader.html"}},[t._v("ServerLoader")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("You have two to handle error (globally). The first (better) way is to override the default "),n("router-link",{attrs:{to:"/docs/middlewares/override/global-error-handler.html"}},[t._v("Global Error Handler")]),t._v(".")],1),t._v(" "),n("p",[t._v("This method is useful if you want to keep Ts.ED error handler. Your error middleware will be called before Ts.ED error handler.")])]),t._v(" "),n("p",[t._v("Create your middleware error:")]),t._v(" "),t._m(1),n("p",[t._v("Then, add your middleware in "),n("router-link",{attrs:{to:"/api/common/server/components/ServerLoader.html"}},[n("code",[t._v("ServerLoader")])]),t._v(":")],1),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"global-error-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-error-middleware","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Error middleware")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NextFunction "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ExpressNext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ExpressRequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ExpressResponse "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"express"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MiddlewareError"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MiddlewareError"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Next"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Err "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"@tsed/common"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Exception "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ts-httpexceptions"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $log "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ts-log-debug"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{attrs:{class:"token function"}},[t._v("MiddlewareError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("GlobalErrorHandlerMiddleware")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("IMiddlewareError")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        @"),n("span",{attrs:{class:"token function"}},[t._v("Err")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("any")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        @"),n("span",{attrs:{class:"token function"}},[t._v("Request")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpressRequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        @"),n("span",{attrs:{class:"token function"}},[t._v("Response")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpressResponse"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        @"),n("span",{attrs:{class:"token function"}},[t._v("Next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpressNext\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headersSent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" toHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" message"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/\\n/gi")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"<br />"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),n("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            $log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("status")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("send")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("toHTML")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" error "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"string"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("status")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("404")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("send")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("toHTML")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        $log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("status")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("500")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("send")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Internal Error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("@"),n("span",{attrs:{class:"token function"}},[t._v("ServerSettings")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   rootDir"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   mount"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'/rest'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rootDir"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("/controllers/**/**.js`")])]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   componentsScan"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rootDir"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("/services/**/**.js`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rootDir"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("/middlewares/**/**.js`")])]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Server")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ServerLoader")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{attrs:{class:"token function"}},[t._v("$afterRoutesInit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GlobalErrorHandlerMiddleware"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("       \n")])])])}],!1,null,null,null);o.options.__file="global-error-middleware.md";s.default=o.exports}}]);