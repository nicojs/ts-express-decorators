(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{382:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"redirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect","aria-hidden":"true"}},[t._v("#")]),t._v(" Redirect "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Redirect } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.34.1/packages/common/src/mvc/decorators/method/redirect.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/method/redirect.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("Redirect")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("status"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | "),a("span",{staticClass:"token keyword"},[t._v("number")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" location?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/foo/bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("301")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://example.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Redirects can be a fully-qualified URL for redirecting to a different site:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http://google.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Redirects can be relative to the root of the host name. For example, if the application is on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/admin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Redirects can be relative to the current URL. For example, from http://example.com/blog/admin/ (notice the trailing slash), the following would redirect to the URL http://example.com/blog/admin/post/new.")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'post/new'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Redirecting to post/new from http://example.com/blog/admin (no trailing slash), will redirect to http://example.com/blog/post/new.")]),t._v(" "),a("p",[t._v("If you found the above behavior confusing, think of path segments as directories (with trailing slashes) and files, it will start to make sense.")]),t._v(" "),a("p",[t._v("Path-relative redirects are also possible. If you were on http://example.com/admin/post/new, the following would redirect to http//example.com/admin/post:")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'..'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("``")])]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("A")]),t._v(" back redirection redirects the request back to the referer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaulting to "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" when the referer is missing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("``")])]),t._v("`typescript\n @"),a("span",{attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'back'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("@param status\n@param location\n@returns {Function}\n@decorator")])])}],!1,null,null,null);e.options.__file="Redirect.md";s.default=e.exports}}]);