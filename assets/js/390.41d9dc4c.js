(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{594:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"socketuseafter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socketuseafter","aria-hidden":"true"}},[t._v("#")]),t._v(" SocketUseAfter "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { SocketUseAfter } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.34.1/packages/socketio/src/decorators/socketUseAfter.ts#L0-L0"}},[t._v("/packages/socketio/src/decorators/socketUseAfter.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("SocketUseAfter")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("...middlewares"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{staticClass:"token"},[t._v("Type")])]),t._v("<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token keyword"},[t._v("any")]),t._v(">"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("target"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("any")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" propertyKey?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | undefined"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" descriptor?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" PropertyDescriptor | undefined"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" =>"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("void")]),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Attach a Socket Middleware to a method or a class.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("A middleware can be also used on a "),a("code",[t._v("SocketService")]),t._v(" either on a class or on a method.")]),t._v(" "),a("p",[t._v("Here an example of a middleware:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SocketMiddlewareError"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SocketErr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Socket"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Args"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/socketio"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{attrs:{class:"token function"}},[t._v("SocketMiddlewareError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ErrorHandlerSocketMiddleware")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("SocketErr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" err"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @Socket socket"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SocketIO"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Socket"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       socket"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"error"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"An error has occured"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Then:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SocketService"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SocketUseAfter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SocketUseBefore"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Input"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Args"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/socketio"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ErrorHandlerSocketMiddleware"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../middlewares"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../models/User"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{attrs:{class:"token function"}},[t._v("SocketService")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/my-namespace"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("SocketUseAfter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ErrorHandlerSocketMiddleware"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// global version")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MySocketService")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),a("span",{attrs:{class:"token function"}},[t._v("Input")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"eventName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{attrs:{class:"token function"}},[t._v("Emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"responseEventName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// or Broadcast or BroadcastOthers")]),t._v("\n   @"),a("span",{attrs:{class:"token function"}},[t._v("SocketUseAfter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ErrorHandlerSocketMiddleware"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("Args")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" userName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n       "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Error"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="SocketUseAfter.md";s.default=e.exports}}]);