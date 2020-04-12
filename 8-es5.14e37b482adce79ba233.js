function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,c=s}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"sU/i":function(e,t,r){"use strict";r.r(t),r.d(t,"CoursesModule",(function(){return ue}));var n,o=r("ofXK"),c=r("tyNb"),i=r("lJxs"),a=r("ot8U"),s=r("3Pt+"),u=r("0IaG"),l=r("fXoL"),b=r("G5s2"),f=((n=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){return _classCallCheck(this,r),t.call(this,"Course",e)}return r}(b.b)).\u0275fac=function(e){return new(e||n)(l.Yb(b.c))},n.\u0275prov=l.Kb({token:n,factory:n.\u0275fac}),n),d=r("bTqV"),p=r("kmnG"),m=r("qFsG"),h=r("d3UM"),g=r("FKr1"),y=r("1jcm");function v(e,t){1&e&&(l.Sb(0),l.Ub(1,"mat-form-field"),l.Pb(2,"input",12),l.Tb(),l.Ub(3,"mat-form-field"),l.Pb(4,"input",13),l.Tb(),l.Rb())}function C(e,t){if(1&e&&(l.Sb(0),l.Sb(1,4),l.Ub(2,"mat-form-field"),l.Pb(3,"input",5),l.Tb(),l.wc(4,v,5,0,"ng-container",1),l.Ub(5,"mat-form-field"),l.Ub(6,"mat-select",6),l.Ub(7,"mat-option",7),l.xc(8," Beginner"),l.Tb(),l.Ub(9,"mat-option",8),l.xc(10," Intermediate"),l.Tb(),l.Ub(11,"mat-option",9),l.xc(12," Advanced"),l.Tb(),l.Tb(),l.Tb(),l.Ub(13,"mat-slide-toggle",10),l.xc(14,"Promotion On"),l.Tb(),l.Ub(15,"mat-form-field"),l.Ub(16,"textarea",11),l.xc(17,"        "),l.Tb(),l.Tb(),l.Rb(),l.Rb()),2&e){var r=l.fc();l.Cb(1),l.kc("formGroup",r.form),l.Cb(3),l.kc("ngIf","create"==r.mode)}}var T,k=((T=function(){function e(t,r,n,o){_classCallCheck(this,e),this.fb=t,this.dialogRef=r,this.coursesService=o,this.dialogTitle=n.dialogTitle,this.course=n.course,this.mode=n.mode;var c={description:["",s.m.required],category:["",s.m.required],longDescription:["",s.m.required],promo:["",[]]};"update"===this.mode?(this.form=this.fb.group(c),this.form.patchValue(Object.assign({},n.course))):"create"===this.mode&&(this.form=this.fb.group(Object.assign(Object.assign({},c),{url:["",s.m.required],iconUrl:["",s.m.required]})))}return _createClass(e,[{key:"onClose",value:function(){this.dialogRef.close()}},{key:"onSave",value:function(){var e=this,t=Object.assign(Object.assign({},this.course),this.form.value);"update"===this.mode?(this.coursesService.update(t),this.dialogRef.close()):"create"===this.mode&&this.coursesService.add(t).subscribe((function(t){console.log("New Course",t),e.dialogRef.close()}))}}]),e}()).\u0275fac=function(e){return new(e||T)(l.Ob(s.c),l.Ob(u.g),l.Ob(u.a),l.Ob(f))},T.\u0275cmp=l.Ib({type:T,selectors:[["app-edit-course-dialog"]],decls:10,vars:5,consts:[["mat-dialog-title",""],[4,"ngIf"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"formGroup"],["matInput","","placeholder","Course Description","formControlName","description"],["placeholder","Select category","formControlName","category"],["value","BEGINNER"],["value","INTERMEDIATE"],["value","ADVANCED"],["formControlName","promo"],["matInput","","placeholder","Description","formControlName","longDescription"],["matInput","","placeholder","Course Url","formControlName","url"],["matInput","","placeholder","Course Icon Url","formControlName","iconUrl"]],template:function(e,t){1&e&&(l.Ub(0,"h2",0),l.xc(1),l.Tb(),l.Ub(2,"mat-dialog-content"),l.wc(3,C,18,2,"ng-container",1),l.Tb(),l.Ub(4,"mat-dialog-actions"),l.Ub(5,"button",2),l.cc("click",(function(){return t.onClose()})),l.xc(6," Close "),l.Tb(),l.Ub(7,"button",3),l.cc("click",(function(){return t.onSave()})),l.gc(8,"async"),l.xc(9," Save "),l.Tb(),l.Tb()),2&e&&(l.Cb(1),l.yc(t.dialogTitle),l.Cb(2),l.kc("ngIf",t.form),l.Cb(4),l.kc("disabled",!(null!=t.form&&t.form.valid)||l.hc(8,3,t.loading$)))},directives:[u.h,u.e,o.l,u.c,d.a,s.j,s.e,p.b,m.a,s.b,s.i,s.d,h.a,g.g,y.a],pipes:[o.b],styles:[".mat-form-field[_ngcontent-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{height:100px;resize:vertical}"]}),T),_=r("NFeN"),U=r("wZkO"),O=r("Wp6s"),w=function(e){return["/courses",e]};function S(e,t){if(1&e){var r=l.Vb();l.Ub(0,"mat-card",1),l.Ub(1,"mat-card-header"),l.Ub(2,"mat-card-title"),l.xc(3),l.Tb(),l.Tb(),l.Pb(4,"img",2),l.Ub(5,"mat-card-content"),l.Ub(6,"p"),l.xc(7),l.Tb(),l.Tb(),l.Ub(8,"mat-card-actions",3),l.Ub(9,"button",4),l.xc(10," VIEW "),l.Tb(),l.Ub(11,"button",5),l.Ub(12,"mat-icon",6),l.cc("click",(function(){l.qc(r);var e=t.$implicit;return l.fc().editCourse(e)})),l.xc(13,"edit"),l.Tb(),l.Tb(),l.Ub(14,"button",7),l.Ub(15,"mat-icon",6),l.cc("click",(function(){l.qc(r);var e=t.$implicit;return l.fc().onDeleteCourse(e)})),l.xc(16,"delete"),l.Tb(),l.Tb(),l.Tb(),l.Tb()}if(2&e){var n=t.$implicit;l.Cb(3),l.yc(n.description),l.Cb(1),l.kc("src",n.iconUrl,l.rc),l.Cb(3),l.yc(n.longDescription),l.Cb(2),l.kc("routerLink",l.mc(4,w,n.url))}}var I,x,j,P,D=((x=function(){function e(t,r){_classCallCheck(this,e),this.dialog=t,this.courseService=r,this.courseChanged=new l.o}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"editCourse",value:function(e){var t=this,r=Object(a.a)();r.data={dialogTitle:"Edit Course",course:e,mode:"update"},this.dialog.open(k,r).afterClosed().subscribe((function(){return t.courseChanged.emit()}))}},{key:"onDeleteCourse",value:function(e){this.courseService.delete(e)}}]),e}()).\u0275fac=function(e){return new(e||x)(l.Ob(u.b),l.Ob(f))},x.\u0275cmp=l.Ib({type:x,selectors:[["app-courses-card-list"]],inputs:{courses:"courses"},outputs:{courseChanged:"courseChanged"},decls:1,vars:1,consts:[["class","course-card mat-elevation-z5 my-4 w-50 mx-auto",4,"ngFor","ngForOf"],[1,"course-card","mat-elevation-z5","my-4","w-50","mx-auto"],["mat-card-image","",3,"src"],[1,"course-actions"],["mat-raised-button","","color","primary",1,"mr-2",3,"routerLink"],["mat-mini-fab","","color","accent",1,"mr-2"],[1,"add-course-btn",3,"click"],["mat-mini-fab","","color","warn"]],template:function(e,t){1&e&&l.wc(0,S,17,6,"mat-card",0),2&e&&l.kc("ngForOf",t.courses)},directives:[o.k,O.a,O.d,O.g,O.e,O.c,O.b,d.a,c.g,_.a],styles:[""]}),x),R=((I=function(){function e(t,r){_classCallCheck(this,e),this.dialog=t,this.coursesService=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.beginnerCourses$=this.coursesService.entities$.pipe(Object(i.a)((function(e){return e.filter((function(e){return"BEGINNER"===e.category}))}))),this.advancedCourses$=this.coursesService.entities$.pipe(Object(i.a)((function(e){return e.filter((function(e){return"ADVANCED"===e.category}))}))),this.promoTotal$=this.coursesService.entities$.pipe(Object(i.a)((function(e){return e.filter((function(e){return e.promo})).length})))}},{key:"onAddCourse",value:function(){var e=Object(a.a)();e.data={dialogTitle:"Create Course",mode:"create"},this.dialog.open(k,e)}}]),e}()).\u0275fac=function(e){return new(e||I)(l.Ob(u.b),l.Ob(f))},I.\u0275cmp=l.Ib({type:I,selectors:[["app-courses"]],decls:18,vars:9,consts:[[1,"counters"],[1,"courses-panel"],[1,"header","d-flex","justify-content-between"],[1,"title"],["mat-mini-fab",""],[1,"add-course-btn",3,"click"],["label","Beginners"],[3,"courses"],["label","Advanced"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Ub(1,"p"),l.xc(2),l.gc(3,"async"),l.Tb(),l.Tb(),l.Ub(4,"div",1),l.Ub(5,"div",2),l.Ub(6,"h2",3),l.xc(7,"All Courses"),l.Tb(),l.Ub(8,"button",4),l.Ub(9,"mat-icon",5),l.cc("click",(function(){return t.onAddCourse()})),l.xc(10,"add"),l.Tb(),l.Tb(),l.Tb(),l.Ub(11,"mat-tab-group"),l.Ub(12,"mat-tab",6),l.Pb(13,"app-courses-card-list",7),l.gc(14,"async"),l.Tb(),l.Ub(15,"mat-tab",8),l.Pb(16,"app-courses-card-list",7),l.gc(17,"async"),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.Cb(2),l.zc("In Promo: ",l.hc(3,3,t.promoTotal$),""),l.Cb(11),l.kc("courses",l.hc(14,5,t.beginnerCourses$)),l.Cb(3),l.kc("courses",l.hc(17,7,t.advancedCourses$)))},directives:[d.a,_.a,U.b,U.a,D],pipes:[o.b],styles:[""],changeDetection:0}),I),A=r("vkgz"),$=r("pLZG"),N=r("SxV6"),L=((j=function(){function e(t){_classCallCheck(this,e),this.coursesService=t}return _createClass(e,[{key:"resolve",value:function(e,t){var r=this;return this.coursesService.loaded$.pipe(Object(A.a)((function(e){e||r.coursesService.getAll()})),Object($.a)((function(e){return!!e})),Object(N.a)())}}]),e}()).\u0275fac=function(e){return new(e||j)(l.Yb(f))},j.\u0275prov=l.Kb({token:j,factory:j.\u0275fac}),j),E=r("zp1y"),q=r("3E0/"),M=((P=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){return _classCallCheck(this,r),t.call(this,"Lesson",e)}return r}(b.b)).\u0275fac=function(e){return new(e||P)(l.Yb(b.c))},P.\u0275prov=l.Kb({token:P,factory:P.\u0275fac}),P),z=r("+0xr"),G=r("Xa2L");function V(e,t){1&e&&(l.Ub(0,"div",15),l.Pb(1,"mat-spinner"),l.Tb())}function Y(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.xc(1,"#"),l.Tb())}function F(e,t){if(1&e&&(l.Ub(0,"mat-cell"),l.xc(1),l.Tb()),2&e){var r=t.$implicit;l.Cb(1),l.yc(r.seqNo)}}function K(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.xc(1,"Description"),l.Tb())}function H(e,t){if(1&e&&(l.Ub(0,"mat-cell",16),l.xc(1),l.Tb()),2&e){var r=t.$implicit;l.Cb(1),l.yc(r.description)}}function W(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.xc(1,"Duration"),l.Tb())}function B(e,t){if(1&e&&(l.Ub(0,"mat-cell",17),l.xc(1),l.Tb()),2&e){var r=t.$implicit;l.Cb(1),l.yc(r.duration)}}function J(e,t){1&e&&l.Pb(0,"mat-header-row")}function X(e,t){1&e&&l.Pb(0,"mat-row")}function Z(e,t){if(1&e){var r=l.Vb();l.Ub(0,"div",1),l.Ub(1,"h2"),l.xc(2),l.Tb(),l.Pb(3,"img",2),l.wc(4,V,2,0,"div",3),l.gc(5,"async"),l.Ub(6,"mat-table",4),l.gc(7,"async"),l.Sb(8,5),l.wc(9,Y,2,0,"mat-header-cell",6),l.wc(10,F,2,1,"mat-cell",7),l.Rb(),l.Sb(11,8),l.wc(12,K,2,0,"mat-header-cell",6),l.wc(13,H,2,1,"mat-cell",9),l.Rb(),l.Sb(14,10),l.wc(15,W,2,0,"mat-header-cell",6),l.wc(16,B,2,1,"mat-cell",11),l.Rb(),l.wc(17,J,1,0,"mat-header-row",12),l.wc(18,X,1,0,"mat-row",13),l.Tb(),l.Ub(19,"button",14),l.cc("click",(function(){l.qc(r);var e=t.ngIf;return l.fc().loadLessonsPage(e)})),l.xc(20," Load More "),l.Tb(),l.Tb()}if(2&e){var n=t.ngIf,o=l.fc();l.Cb(2),l.yc(null==n?null:n.description),l.Cb(1),l.kc("src",null==n?null:n.iconUrl,l.rc),l.Cb(1),l.kc("ngIf",l.hc(5,6,o.loading$)),l.Cb(2),l.kc("dataSource",l.hc(7,8,o.lessons$)),l.Cb(11),l.kc("matHeaderRowDef",o.displayedColumns),l.Cb(1),l.kc("matRowDefColumns",o.displayedColumns)}}var Q,ee,te,re,ne=[{path:"",component:R,resolve:{courses:L}},{path:":courseUrl",component:(Q=function(){function e(t,r,n){_classCallCheck(this,e),this.coursesService=t,this.lessonsService=r,this.route=n,this.displayedColumns=["seqNo","description","duration"],this.nextPage=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.snapshot.paramMap.get("courseUrl");this.course$=this.coursesService.entities$.pipe(Object(i.a)((function(e){return e.find((function(e){return e.url===t}))}))),this.lessons$=this.lessonsService.entities$.pipe(Object(E.a)(this.course$),Object(A.a)((function(t){var r=_slicedToArray(t,2),n=(r[0],r[1]);0===e.nextPage&&e.loadLessonsPage(n)})),Object(i.a)((function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1];return r.filter((function(e){return e.courseId===n.id}))}))),this.loading$=this.lessonsService.loading$.pipe(Object(q.a)(0))}},{key:"loadLessonsPage",value:function(e){this.lessonsService.getWithQuery({courseId:e.id.toString(),pageNumber:this.nextPage.toString(),pageSize:"3"}),this.nextPage+=1}}]),e}(),Q.\u0275fac=function(e){return new(e||Q)(l.Ob(f),l.Ob(M),l.Ob(c.a))},Q.\u0275cmp=l.Ib({type:Q,selectors:[["app-course"]],decls:4,vars:3,consts:[["class","course",4,"ngIf"],[1,"course"],[1,"course-thumbnail","mat-elevation-z8",3,"src"],["class","spinner-container",4,"ngIf"],[1,"lessons-table","mat-elevation-z8",3,"dataSource"],["matColumnDef","seqNo"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","description"],["class","description-cell",4,"matCellDef"],["matColumnDef","duration"],["class","duration-cell",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","accent",1,"bottom-toolbar",3,"click"],[1,"spinner-container"],[1,"description-cell"],[1,"duration-cell"]],template:function(e,t){1&e&&(l.Ub(0,"p"),l.xc(1,"course works!"),l.Tb(),l.wc(2,Z,21,10,"div",0),l.gc(3,"async")),2&e&&(l.Cb(2),l.kc("ngIf",l.hc(3,1,t.course$)))},directives:[o.l,z.j,z.c,z.e,z.b,z.g,z.i,d.a,G.b,z.d,z.a,z.f,z.h],pipes:[o.b],styles:[""],changeDetection:0}),Q),resolve:{courses:L}}],oe=((ee=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:ee}),ee.\u0275inj=l.Lb({factory:function(e){return new(e||ee)},imports:[[c.j.forChild(ne)],c.j]}),ee),ce=r("tk/3"),ie=((te=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n){return _classCallCheck(this,r),t.call(this,"Course",e,n)}return _createClass(r,[{key:"getAll",value:function(){return this.http.get("/api/courses").pipe(Object(i.a)((function(e){return e.payload})))}}]),r}(b.a)).\u0275fac=function(e){return new(e||te)(l.Yb(ce.a),l.Yb(b.g))},te.\u0275prov=l.Kb({token:te,factory:te.\u0275fac}),te),ae=r("5dmV"),se={Course:{entityDispatcherOptions:{optimisticUpdate:!0}},Lesson:{sortComparer:function(e,t){var r=e.courseId-t.courseId;return r>0?1:r<0?-1:e.seqNo-t.seqNo}}},ue=((re=function e(t,r,n){_classCallCheck(this,e),this.eds=t,this.entityDataService=r,this.coursesDataService=n,t.registerMetadataMap(se),r.registerService("Course",n)}).\u0275mod=l.Mb({type:re}),re.\u0275inj=l.Lb({factory:function(e){return new(e||re)(l.Yb(b.f),l.Yb(b.e),l.Yb(ie))},providers:[f,L,ie,M],imports:[[o.c,oe,ae.a,s.l]]}),re)}}]);