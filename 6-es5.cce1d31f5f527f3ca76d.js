function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,o=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lXdu:function(t,e,o){"use strict";o.r(e),o.d(e,"BooksModule",(function(){return F}));var n,c=o("ofXK"),i=o("tyNb"),r=o("ot8U"),a=o("3Pt+"),s=o("0IaG"),b=o("fXoL"),u=o("G5s2"),l=((n=function(t){_inherits(o,t);var e=_createSuper(o);function o(t){return _classCallCheck(this,o),e.call(this,"Book",t)}return o}(u.b)).\u0275fac=function(t){return new(t||n)(b.Yb(u.c))},n.\u0275prov=b.Kb({token:n,factory:n.\u0275fac}),n),f=o("bTqV"),p=o("kmnG"),d=o("qFsG"),h=o("Xa2L");function k(t,e){1&t&&(b.Ub(0,"div",9),b.Pb(1,"mat-spinner"),b.Tb())}function m(t,e){1&t&&(b.Sb(0),b.Ub(1,"mat-form-field"),b.Pb(2,"input",10),b.Tb(),b.Rb())}function v(t,e){if(1&t&&(b.Sb(0),b.wc(1,k,2,0,"div",4),b.gc(2,"async"),b.Sb(3,5),b.Ub(4,"mat-form-field"),b.Pb(5,"input",6),b.Tb(),b.Ub(6,"mat-form-field"),b.Pb(7,"input",7),b.Tb(),b.Ub(8,"mat-form-field"),b.Pb(9,"input",8),b.Tb(),b.wc(10,m,3,0,"ng-container",1),b.Rb(),b.Rb()),2&t){var o=b.fc();b.Cb(1),b.kc("ngIf",b.hc(2,3,o.loading$)),b.Cb(2),b.kc("formGroup",o.form),b.Cb(7),b.kc("ngIf","update"==o.mode)}}var y,g=((y=function(){function t(e,o,n,c){_classCallCheck(this,t),this.fb=e,this.dialogRef=o,this.booksService=c,this.book=n.book,this.mode=n.mode}return _createClass(t,[{key:"ngOnInit",value:function(){this.dialogTitle="create"===this.mode?"Add Book":"Update Book";var t={name:["",a.m.required],author:[""],price:[""],publishedDate:[new Date]};"update"===this.mode?(this.form=this.fb.group(t),this.form.patchValue(Object.assign({},this.book))):"create"===this.mode&&(this.form=this.fb.group(Object.assign({},t)))}},{key:"onClose",value:function(){this.dialogRef.close()}},{key:"onSave",value:function(){var t=this,e=Object.assign(Object.assign({},this.book),this.form.value);"update"===this.mode?(this.booksService.update(e),this.dialogRef.close()):"create"===this.mode&&this.booksService.add(e).subscribe((function(e){console.log("New Book",e),t.dialogRef.close()}))}}]),t}()).\u0275fac=function(t){return new(t||y)(b.Ob(a.c),b.Ob(s.g),b.Ob(s.a),b.Ob(l))},y.\u0275cmp=b.Ib({type:y,selectors:[["app-edit-book-dialog"]],decls:10,vars:5,consts:[[1,"border-bottom","pb-2","mb-3"],[4,"ngIf"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],["class","spinner-container",4,"ngIf"],[3,"formGroup"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","Author","formControlName","author"],["matInput","","placeholder","Price","formControlName","price"],[1,"spinner-container"],["matInput","","placeholder","Published Date","formControlName","publishedDate","readonly",""]],template:function(t,e){1&t&&(b.Ub(0,"h2",0),b.xc(1),b.Tb(),b.Ub(2,"mat-dialog-content"),b.wc(3,v,11,5,"ng-container",1),b.Tb(),b.Ub(4,"mat-dialog-actions"),b.Ub(5,"button",2),b.cc("click",(function(){return e.onClose()})),b.xc(6," Close "),b.Tb(),b.Ub(7,"button",3),b.cc("click",(function(){return e.onSave()})),b.gc(8,"async"),b.xc(9," Save "),b.Tb(),b.Tb()),2&t&&(b.Cb(1),b.yc(e.dialogTitle),b.Cb(2),b.kc("ngIf",e.form),b.Cb(4),b.kc("disabled",!(null!=e.form&&e.form.valid)||b.hc(8,3,e.loading$)))},directives:[s.e,c.l,s.c,f.a,a.j,a.e,p.b,d.a,a.b,a.i,a.d,h.b],pipes:[c.b],styles:[""]}),y),C=o("NFeN"),_=function(t){return["/books",t]};function T(t,e){if(1&t){var o=b.Vb();b.Ub(0,"tr"),b.Ub(1,"td"),b.xc(2),b.Tb(),b.Ub(3,"td"),b.Ub(4,"a",7),b.xc(5),b.Tb(),b.Tb(),b.Ub(6,"td"),b.xc(7),b.Tb(),b.Ub(8,"td"),b.xc(9),b.Tb(),b.Ub(10,"td"),b.xc(11),b.Tb(),b.Ub(12,"td"),b.Ub(13,"button",8),b.cc("click",(function(){b.qc(o);var t=e.$implicit;return b.fc().editBook(t)})),b.Ub(14,"mat-icon"),b.xc(15,"edit"),b.Tb(),b.Tb(),b.Ub(16,"button",9),b.cc("click",(function(){b.qc(o);var t=e.$implicit;return b.fc().removeBook(t)})),b.Ub(17,"mat-icon"),b.xc(18,"remove"),b.Tb(),b.Tb(),b.Tb(),b.Tb()}if(2&t){var n=e.$implicit;b.Cb(2),b.yc(n._id),b.Cb(2),b.kc("routerLink",b.mc(6,_,n._id)),b.Cb(1),b.yc(n.name),b.Cb(2),b.yc(n.author),b.Cb(2),b.yc(n.price),b.Cb(2),b.yc(n.publishedDate)}}var U,O=((U=function(){function t(e,o){_classCallCheck(this,t),this.dialog=e,this.booksService=o}return _createClass(t,[{key:"ngOnInit",value:function(){this.books$=this.booksService.entities$}},{key:"removeBook",value:function(t){this.booksService.delete(t)}},{key:"editBook",value:function(t){var e=Object(r.a)();e.data={dialogTitle:"Edit Course",book:t,mode:"update"},this.dialog.open(g,e).afterClosed().subscribe()}},{key:"addBook",value:function(){var t=Object(r.a)();t.data={dialogTitle:"Create Book",mode:"create"},this.dialog.open(g,t)}}]),t}()).\u0275fac=function(t){return new(t||U)(b.Ob(s.b),b.Ob(l))},U.\u0275cmp=b.Ib({type:U,selectors:[["app-books"]],decls:24,vars:3,consts:[[1,"header","d-flex","justify-content-between"],[1,"h1"],[1,"btn","btn-info",3,"click"],[1,"table","table-bordered"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.xc(2,"All Books"),b.Tb(),b.Ub(3,"button",2),b.cc("click",(function(){return e.addBook()})),b.Ub(4,"mat-icon"),b.xc(5,"add"),b.Tb(),b.Tb(),b.Tb(),b.Ub(6,"table",3),b.Ub(7,"thead",4),b.Ub(8,"tr"),b.Ub(9,"th",5),b.xc(10,"#"),b.Tb(),b.Ub(11,"th",5),b.xc(12,"Name"),b.Tb(),b.Ub(13,"th",5),b.xc(14,"Author"),b.Tb(),b.Ub(15,"th",5),b.xc(16,"Price"),b.Tb(),b.Ub(17,"th",5),b.xc(18,"Published Date"),b.Tb(),b.Ub(19,"th",5),b.xc(20,"Actions"),b.Tb(),b.Tb(),b.Tb(),b.Ub(21,"tbody"),b.wc(22,T,19,8,"tr",6),b.gc(23,"async"),b.Tb(),b.Tb()),2&t&&(b.Cb(22),b.kc("ngForOf",b.hc(23,1,e.books$)))},directives:[C.a,c.k,i.i],pipes:[c.b],styles:[""]}),U),S=o("lJxs");function w(t,e){if(1&t&&(b.Sb(0),b.Ub(1,"div",1),b.Ub(2,"h1",2),b.xc(3," Book "),b.Ub(4,"em"),b.xc(5),b.Tb(),b.xc(6," Info "),b.Tb(),b.Ub(7,"pre"),b.xc(8),b.gc(9,"json"),b.Tb(),b.Tb(),b.Rb()),2&t){var o=e.ngIf;b.Cb(5),b.yc(o.name),b.Cb(3),b.yc(b.hc(9,2,o))}}var j,x,I,P,R,B=((j=function(){function t(e,o){_classCallCheck(this,t),this.route=e,this.booksService=o}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("bookId");console.log(t,"HERRE"),this.book$=this.booksService.entities$.pipe(Object(S.a)((function(e){return e.find((function(e){return e._id===t}))})))}}]),t}()).\u0275fac=function(t){return new(t||j)(b.Ob(i.a),b.Ob(l))},j.\u0275cmp=b.Ib({type:j,selectors:[["app-book"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"card","card-body"],[1,"text-center"]],template:function(t,e){1&t&&(b.wc(0,w,10,4,"ng-container",0),b.gc(1,"async")),2&t&&b.kc("ngIf",b.hc(1,1,e.book$))},directives:[c.l],pipes:[c.b,c.f],styles:[""]}),j),A=o("vkgz"),L=o("pLZG"),N=o("SxV6"),$=((x=function(){function t(e){_classCallCheck(this,t),this.booksService=e}return _createClass(t,[{key:"resolve",value:function(t,e){var o=this;return this.booksService.loaded$.pipe(Object(A.a)((function(t){t||o.booksService.getAll()})),Object(L.a)((function(t){return!!t})),Object(N.a)())}}]),t}()).\u0275fac=function(t){return new(t||x)(b.Yb(l))},x.\u0275prov=b.Kb({token:x,factory:x.\u0275fac,providedIn:"root"}),x),D=[{path:"",component:O,resolve:{courses:$}},{path:":bookId",component:B}],E=((I=function t(){_classCallCheck(this,t)}).\u0275mod=b.Mb({type:I}),I.\u0275inj=b.Lb({factory:function(t){return new(t||I)},imports:[[i.j.forChild(D)],i.j]}),I),G=o("tk/3"),Y=((P=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,n){var c;return _classCallCheck(this,o),(c=e.call(this,"Book",t,n)).BASE_URL="https://hkauthapi.herokuapp.com/books/",c}return _createClass(o,[{key:"getAll",value:function(){return this.http.get(this.BASE_URL).pipe(Object(S.a)((function(t){return t})))}},{key:"add",value:function(t){return this.http.post("".concat(this.BASE_URL),t).pipe(Object(S.a)((function(t){return t})))}},{key:"update",value:function(t){return this.http.put("".concat(this.BASE_URL,"/").concat(t.id),t.changes).pipe(Object(S.a)((function(t){return t})))}},{key:"delete",value:function(t){return this.http.delete(this.BASE_URL+t).pipe(Object(S.a)((function(t){return t})))}}]),o}(u.a)).\u0275fac=function(t){return new(t||P)(b.Yb(G.a),b.Yb(u.g))},P.\u0275prov=b.Kb({token:P,factory:P.\u0275fac}),P),M=o("5dmV"),q={Book:{selectId:function(t){return null==t?void 0:t._id},entityDispatcherOptions:{optimisticUpdate:!0}}},F=((R=function t(e,o,n){_classCallCheck(this,t),this.eds=e,this.entityDataService=o,this.booksDataService=n,e.registerMetadataMap(q),o.registerService("Book",n)}).\u0275mod=b.Mb({type:R}),R.\u0275inj=b.Lb({factory:function(t){return new(t||R)(b.Yb(u.f),b.Yb(u.e),b.Yb(Y))},providers:[$,l,Y],imports:[[c.c,a.l,E,M.a]]}),R)}}]);