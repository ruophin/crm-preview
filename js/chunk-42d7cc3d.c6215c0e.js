(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42d7cc3d"],{"0545":function(t,e,i){"use strict";var n=i("9941"),s=i.n(n);s.a},"06c9":function(t,e,i){},1276:function(t,e,i){"use strict";var n=i("d784"),s=i("44e7"),a=i("825a"),r=i("1d80"),o=i("4840"),l=i("8aa5"),c=i("50c4"),u=i("14c3"),d=i("9263"),h=i("d039"),_=[].push,f=Math.min,p=4294967295,m=!h((function(){return!RegExp(p,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(r(this)),a=void 0===i?p:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!s(t))return e.call(n,t,a);var o,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,h+"g");while(o=d.call(m,n)){if(l=m.lastIndex,l>f&&(u.push(n.slice(f,o.index)),o.length>1&&o.index<n.length&&_.apply(u,o.slice(1)),c=o[0].length,f=l,u.length>=a))break;m.lastIndex===o.index&&m.lastIndex++}return f===n.length?!c&&m.test("")||u.push(""):u.push(n.slice(f)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s,i):n.call(String(s),e,i)},function(t,s){var r=i(n,t,this,s,n!==e);if(r.done)return r.value;var d=a(t),h=String(this),_=o(d,RegExp),g=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),v=new _(m?d:"^(?:"+d.source+")",y),w=void 0===s?p:s>>>0;if(0===w)return[];if(0===h.length)return null===u(v,h)?[h]:[];var b=0,$=0,x=[];while($<h.length){v.lastIndex=m?$:0;var D,S=u(v,m?h:h.slice($));if(null===S||(D=f(c(v.lastIndex+(m?0:$)),h.length))===b)$=l(h,$,g);else{if(x.push(h.slice(b,$)),x.length===w)return x;for(var M=1;M<=S.length-1;M++)if(x.push(S[M]),x.length===w)return x;$=b=D}}return x.push(h.slice(b)),x}]}),!m)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t=1e3,e=6e4,i=36e5,n="millisecond",s="second",a="minute",r="hour",o="day",l="week",c="month",u="quarter",d="year",h="date",_="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},y={s:g,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,c),a=i-s<0,r=e.clone().add(n+(a?-1:1),c);return+(-(n+(i-s)/(a?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:o,D:h,h:r,m:a,s:s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",w={};w[v]=m;var b=function(t){return t instanceof S},$=function(t,e,i){var n;if(!t)return v;if("string"==typeof t)w[t]&&(n=t),e&&(w[t]=e,n=t);else{var s=t.name;w[s]=t,n=s}return!i&&n&&(v=n),n||!i&&v},x=function(t,e){if(b(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new S(i)},D=y;D.l=$,D.i=b,D.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=$(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(f);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===_)},g.isSame=function(t,e){var i=x(t);return this.startOf(e)<=i&&i<=this.endOf(e)},g.isAfter=function(t,e){return x(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<x(t)},g.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var i=this,n=!!D.u(e)||e,u=D.p(t),_=function(t,e){var s=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?s:s.endOf(o)},f=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},p=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return n?_(1,0):_(31,11);case c:return n?_(1,m):_(0,m+1);case l:var v=this.$locale().weekStart||0,w=(p<v?p+7:p)-v;return _(n?g-w:g+(6-w),m);case o:case h:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case s:return f(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var i,l=D.p(t),u="set"+(this.$u?"UTC":""),_=(i={},i[o]=u+"Date",i[h]=u+"Date",i[c]=u+"Month",i[d]=u+"FullYear",i[r]=u+"Hours",i[a]=u+"Minutes",i[s]=u+"Seconds",i[n]=u+"Milliseconds",i)[l],f=l===o?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[_](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else _&&this.$d[_](f);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(n,u){var h,_=this;n=Number(n);var f=D.p(u),p=function(t){var e=x(_);return D.w(e.date(e.date()+Math.round(t*n)),_)};if(f===c)return this.set(c,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===o)return p(1);if(f===l)return p(7);var m=(h={},h[a]=e,h[r]=i,h[s]=t,h)[f]||1,g=this.$d.getTime()+n*m;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||_;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),a=this.$H,r=this.$m,o=this.$M,l=i.weekdays,c=i.months,u=function(t,i,s,a){return t&&(t[i]||t(e,n))||s[i].substr(0,a)},d=function(t){return D.s(a%12||12,t,"0")},h=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:u(i.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,r,!0),A:h(a,r,!1),m:String(r),mm:D.s(r,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return n.replace(p,(function(t,e){return e||f[t]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,h,_){var f,p=D.p(h),m=x(n),g=(m.utcOffset()-this.utcOffset())*e,y=this-m,v=D.m(this,m);return v=(f={},f[d]=v/12,f[c]=v,f[u]=v/3,f[l]=(y-g)/6048e5,f[o]=(y-g)/864e5,f[r]=y/i,f[a]=y/e,f[s]=y/t,f)[p]||y,_?v:D.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return w[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=$(t,e,!0);return n&&(i.$L=n),i},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),M=S.prototype;return x.prototype=M,[["$ms",n],["$s",s],["$m",a],["$H",r],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,S,x),t.$i=!0),x},x.locale=$,x.isDayjs=b,x.unix=function(t){return x(1e3*t)},x.en=w[v],x.Ls=w,x.p={},x}))},"841c":function(t,e,i){"use strict";var n=i("d784"),s=i("825a"),a=i("1d80"),r=i("129f"),o=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var a=s(t),l=String(this),c=a.lastIndex;r(c,0)||(a.lastIndex=0);var u=o(a,l);return r(a.lastIndex,c)||(a.lastIndex=c),null===u?-1:u.index}]}))},9941:function(t,e,i){},"9d1c":function(t,e,i){"use strict";var n=i("06c9"),s=i.n(n);s.a},aecd:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"patient_manager_main"},[i("div",{staticClass:"header-box"},[i("el-form",{attrs:{"label-width":"auto"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{xs:14,sm:14,md:4,lg:7,xl:6}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-input",{attrs:{placeholder:"输入患者姓名/用户昵称/手机号查找"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.change(e)}},model:{value:t.searchValue,callback:function(e){t.searchValue="string"===typeof e?e.trim():e},expression:"searchValue"}},[i("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),i("el-col",{attrs:{xs:8,sm:8,md:4,lg:4,xl:4}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"是否关注服务号"},on:{change:t.change},model:{value:t.subscribe_official_account,callback:function(e){t.subscribe_official_account=e},expression:"subscribe_official_account"}},[i("el-option",{attrs:{label:"是否关注服务号",value:0}}),i("el-option",{attrs:{label:"已关注",value:1}}),i("el-option",{attrs:{label:"未关注",value:2}})],1)],1)],1),i("el-col",{attrs:{xs:10,sm:10,md:4,lg:4,xl:4}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"是否添加企微好友"},on:{change:t.change},model:{value:t.subscribe_qywx,callback:function(e){t.subscribe_qywx=e},expression:"subscribe_qywx"}},[i("el-option",{attrs:{label:"是否添加企微好友",value:0}}),i("el-option",{attrs:{label:"已添加",value:1}}),i("el-option",{attrs:{label:"未添加",value:2}})],1)],1)],1),i("el-col",{attrs:{xs:10,sm:10,md:4,lg:4,xl:4}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"全部医院"},on:{change:t.change},model:{value:t.dept_id,callback:function(e){t.dept_id=e},expression:"dept_id"}},[i("el-option",{attrs:{label:"全部医院",value:-1}}),i("el-option",{attrs:{label:"未入组",value:0}}),t._l(t.deptList,(function(t){return i("el-option",{key:t.dept_id,attrs:{label:t.dept_name,value:t.dept_id}})}))],2)],1)],1),null!=t.dept_id&&t.dept_id>0?i("el-col",{attrs:{xs:10,sm:10,md:4,lg:4,xl:4}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"全部医生"},on:{change:t.change},model:{value:t.doctor_id,callback:function(e){t.doctor_id=e},expression:"doctor_id"}},[i("el-option",{attrs:{label:"全部医生",value:0}}),t._l(t.doctorList,(function(t){return i("el-option",{key:t.account_id,attrs:{label:t.realname,value:t.account_id}})}))],2)],1)],1):t._e(),i("el-col",{attrs:{xs:10,sm:10,md:4,lg:4,xl:4}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("a",{on:{click:t.changeDitch}},[i("el-input",{attrs:{placeholder:"全部渠道"},model:{value:t.contact_way_name_list&&t.contact_way_name_list.toString(),callback:function(e){t.$set(t.contact_way_name_list&&t.contact_way_name_list,"toString()",e)},expression:"contact_way_name_list&&contact_way_name_list.toString()"}},[i("i",{staticClass:"el-icon-arrow-down el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)])],1),i("el-col",{attrs:{xs:10,sm:10,md:7,lg:6,xl:6}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange",align:"left","unlink-panels":"","range-separator":"至","start-placeholder":"记录开始日期","end-placeholder":"记录结束日期","picker-options":t.pickerOptions},on:{change:t.change},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1)],1),i("el-col",{attrs:{xs:10,sm:10,md:9,lg:8,xl:6}},[i("div",{staticStyle:{"line-height":"40px"}},[i("el-checkbox",{on:{change:t.change},model:{value:t.pefUnusual,callback:function(e){t.pefUnusual=e},expression:"pefUnusual"}},[t._v("PEF异常")]),i("el-checkbox",{on:{change:t.change},model:{value:t.acuteDrug,callback:function(e){t.acuteDrug=e},expression:"acuteDrug"}},[t._v("急性用药")]),i("el-checkbox",{on:{change:t.change},model:{value:t.acuteSymptom,callback:function(e){t.acuteSymptom=e},expression:"acuteSymptom"}},[t._v("急性症状")])],1)]),i("el-col",{staticStyle:{margin:"8px 0",float:"right"},attrs:{span:6}},[i("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.change}},[t._v("查询")]),i("el-button",{staticStyle:{float:"right","margin-left":"0"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)],1),i("div",{staticStyle:{margin:"0 16px","padding-top":"16px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"elTable",attrs:{data:t.tableData,size:"small",border:"",stripe:"",height:"calc(100vh - 253px)"},on:{"sort-change":t.sortChange}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(e){return(t.page-1)*t.size+e+1},fixed:"left"}}),i("el-table-column",{attrs:{prop:"name",label:"患者信息","min-width":"170",fixed:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name||"--")+t._s(" ")+" "),i("span",{staticClass:"gray"},[t._v(t._s(0==e.row.sex?"男":1==e.row.sex?"女":"--")+" / "+t._s(e.row.age)+"岁")]),i("br"),i("span",[t._v("建档时间："+t._s(t.format_time(e.row.create_time)))])]}}])}),i("el-table-column",{attrs:{prop:"nick_name",label:"用户信息","min-width":"210",fixed:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v("unionid："+t._s(e.row.union_id||"--"))]),i("a",{staticClass:"ml10 blue",on:{click:function(i){return t.copyText(e.row.union_id)}}},[t._v("复制")]),i("br"),i("span",[t._v("昵 称："+t._s(e.row.nick_name||"--")),i("a",{staticClass:"ml10 blue",on:{click:function(i){return t.copyText(e.row.nick_name)}}},[t._v("复制")]),i("br")]),i("span",[t._v("手机号："+t._s(e.row.phone))]),i("a",{staticClass:"ml10 blue",on:{click:function(i){return t.copyText(e.row.phone)}}},[t._v("复制")]),i("br"),t._v(" 与患者关系："+t._s(e.row.relation)+" ")]}}])}),i("el-table-column",{attrs:{label:"服务信息","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v("服务号："+t._s(e.row.subscribe_official_account?"已关注":"未关注")),i("br")]),i("span",[t._v("企微好友："+t._s(e.row.subscribe_qywx?"已添加":"未添加")),i("br")]),e.row.subscribe_qywx?i("span",[t._v("企微客服昵称："+t._s(e.row.qy_userid||"--")),i("br")]):t._e()]}}])}),i("el-table-column",{attrs:{label:"渠道信息",prop:"contact_way","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.contact_way||"--")),i("br")])]}}])}),i("el-table-column",{attrs:{prop:"doctor_id",label:"入组信息","min-width":"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(null==e.row.doctor_id?"未入组":"")+" "),null!=e.row.doctor_id?i("span",[t._v(" 医生："+t._s(e.row.doctor_name||"--")),i("br"),t._v(" 医院："+t._s(e.row.dept_name||"--")),i("br"),t._v(" 门诊号："+t._s(e.row.menzhen_number)),i("a",{staticClass:"ml10 blue",on:{click:function(i){return t.copyText(e.row.menzhen_number)}}},[t._v("复制")]),i("br"),t._v(" 入组时间："+t._s(e.row.in_time||"--")+" ")]):t._e()]}}])}),t._l(t.dairy_list_date,(function(e,n){return i("el-table-column",{key:n,attrs:{"min-width":"270",label:e},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.diary_list[n]?i("div",[i("p",[t._v(" 日间PEF： "),i("span",[t._v(" "+t._s(e.row.diary_list[n].pef_predict&&Number(e.row.diary_list[n].pef_predict).toFixed(1)||"--")+"/")]),e.row.diary_list[n].pef_max||e.row.diary_list[n].pef_min||e.row.diary_list[n].pef_change_rate?[i("span",{class:e.row.diary_list[n].pef_max?e.row.diary_list[n].pef_max>=.8*e.row.diary_list[n].pef_predict?"drug_blue":e.row.diary_list[n].pef_max>=.6*e.row.diary_list[n].pef_predict&&e.row.diary_list[n].pef_max<.8*e.row.diary_list[n].pef_predict?"drug_orange":"drug_red":"drug_black"},[t._v(t._s(e.row.diary_list[n].pef_max&&Number(e.row.diary_list[n].pef_max).toFixed(1)||"--")+"/")]),i("span",{class:e.row.diary_list[n].pef_min?e.row.diary_list[n].pef_min>=.8*e.row.diary_list[n].pef_predict?"drug_blue":e.row.diary_list[n].pef_min>=.6*e.row.diary_list[n].pef_predict&&e.row.diary_list[n].pef_min<.8*e.row.diary_list[n].pef_predict?"drug_orange":"drug_red":"drug_black"},[t._v(t._s(e.row.diary_list[n].pef_min&&Number(e.row.diary_list[n].pef_min).toFixed(1)||"--")+"/")]),i("span",{class:e.row.diary_list[n].pef_change_rate?e.row.diary_list[n].pef_change_rate>=13?"drug_orange":"drug_blue":"drug_black"},[t._v(t._s(e.row.diary_list[n].pef_change_rate&&Number(e.row.diary_list[n].pef_change_rate).toFixed(1)+"%"||"--")+" ")])]:i("span",{staticClass:"gray"},[t._v("未记录")])],2),i("p",{staticStyle:{"margin-top":"3px"}},[t._v(" 用药记录： "),0!=e.row.diary_list[n].drug_recorded&&null!=e.row.diary_list[n].drug_recorded&&e.row.diary_list[n].has_drug&&!e.row.diary_list[n].stop_drug?i("span",[t._v(" 控制"+t._s(e.row.diary_list[n].control_times||0)+"次，急性"),i("span",{staticClass:"acute_drug"},[t._v(t._s(e.row.diary_list[n].urgent_times||0))]),t._v("次 "),i("el-popover",{attrs:{placement:"left",width:"410",height:"400",trigger:"hover"},on:{show:function(i){return t.patientDrugPlan(e.row.diary_list[n],e.row)}}},[t._l(t.drug_plan_detail_list,(function(e,n){return[i("div",{staticClass:"patient_drug_plan"},[i("div",{staticClass:"container_view"},[i("div",{staticClass:"medication_mark",class:{acute:2===e[0].drug_type,hide:0===e[0].drug_type||null===e[0].drug_type}},[t._v(" "+t._s(1===e[0].drug_type?"控制⽤药":2===e[0].drug_type?"急性⽤药":"鼻炎用药")+" ")]),t._l(e,(function(n,s){return i("div",{key:s,staticClass:"home_drug_name",class:{margin_left:n.length>1}},[i("span",[t._v(t._s(n.drug_name))]),1==e.length?i("span",[t._v(t._s(n.drug_spec)+" "+t._s(n.drug_spec?"|":"")+" "+t._s(n.dosage)+" "+t._s(n.dosage?"|":"")+" "+t._s(n.frequency)+" "+t._s(n.frequency?"|":"")+" "+t._s(n.drug_usage))]):i("span",[t._v(t._s(n.drug_spec)+" "+t._s(n.drug_spec?"|":"")+" "+t._s(n.dosage))])])})),e.length>1?i("div",{staticClass:"group_tool"},[t._v(" "+t._s(e[0].frequency)+" "+t._s(e[0].frequency?"|":"")+" "+t._s(e[0].drug_usage)+" ")]):t._e()],2),i("div",{staticClass:"time_value",class:{red:2===e[0].drug_type&&e[0].drug_times>0}},[t._v(" "+t._s(null==e[0].drug_times?0:e[0].drug_times)+"次 ")])])]})),i("a",{staticClass:"ml10 blue",attrs:{slot:"reference"},slot:"reference"},[t._v("详情")])],2)],1):i("span",[e.row.diary_list[n].stop_drug?i("span",[t._v(" 已停药 ")]):null==e.row.diary_list[n].has_drug||e.row.diary_list[n].has_drug?i("span",[t._v(" 未记录 ")]):i("span",[t._v(" 未用药 ")])])]),i("p",[t._v(" 症状记录： "),null!=e.row.diary_list[n].symptom_list&&e.row.diary_list[n].symptom_list.length>0?i("span",[t._l(e.row.diary_list[n].symptom_list,(function(e,n){return["其他"!==e.symptom_name?i("el-tag",{key:n,staticStyle:{height:"25px","line-height":"23px","margin-right":"5px","margin-top":"2px"},attrs:{type:0==e.symptom_type?"success":1==e.symptom_type?"danger":"warning"}},[t._v(t._s(e.symptom_name))]):e.symptom_desc?i("p",{key:n,staticClass:"gray",staticStyle:{height:"25px","line-height":"23px","margin-right":"5px","margin-top":"2px"}},[t._v(" "+t._s("其他症状："+e.symptom_desc)+" ")]):t._e()]}))],2):i("span",[t._v(" 未记录 ")])])]):i("span",[t._v("--")])]}}],null,!0)})}))],2)],1),i("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[i("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[20,50,100,200],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),i("input",{staticStyle:{position:"absolute",left:"-999px"},attrs:{type:"text",id:"input"}}),i("ContactWay",{ref:"contactWay",on:{getContactWayList:t.getContactWayList}})],1)},s=[],a=(i("99af"),i("4160"),i("d81d"),i("ac1f"),i("841c"),i("1276"),i("159b"),i("96cf"),i("1da1")),r=i("5530"),o=i("5a0c"),l=i.n(o),c=i("d772"),u=i.n(c),d=i("bc3a"),h=i.n(d),_=i("a09d"),f=i("2f62"),p=i("7d20");l.a.extend(u.a);var m={name:"patientmgmt",components:{ContactWay:_["a"]},data:function(){var t=this;return{asc:!1,total:0,my_patient:!1,page:1,size:20,dept_id:void 0,subscribe_official_account:void 0,subscribe_qywx:void 0,doctor_id:void 0,doctorList:[],pefUnusual:void 0,acuteDrug:void 0,acuteSymptom:void 0,status:"",end_time:"",start_time:"",searchValue:void 0,pickerMinDate:"",dateTypeOption:[{name:"建档时间",value:0},{name:"入组时间",value:1},{name:"首次完成随访时间",value:2},{name:"首次PEF记录时间",value:3},{name:"首次用药记录时间",value:4},{name:"首次症状记录时间",value:5}],dateRange:"",maxDate:null,minDate:null,contact_way_id_list:null,contact_way_name_list:null,no_contact_way:null,pickerOptions:{shortcuts:p["a"].shortcuts,onPick:function(e){var i=e.maxDate,n=e.minDate;null!=i&&null!=n&&(t.maxDate=i,t.minDate=n)},disabledDate:function(e){var i=t.maxDate,n=t.minDate;if(null!=i&&null!=n){var s=i.getTime()-n.getTime();t.maxDate=null,t.minDate=null;var a=parseInt(s/864e5)>30;return a&&t.dateWarning(),a}return e.getTime()>Date.now()}},timeDefaultShow:"",tableData:[],tableLoading:!1,dairy_list_max:0,dairy_list_date:[],drug_plan_detail_list:[],defaultDateRange:[]}},computed:Object(r["a"])({},Object(f["c"])({userInfo:"user/getUserInfo",deptList:"user/getDeptList"})),created:function(){var t=new Date,e=new Date;e.setTime(e.getTime()-5184e5);var i=l()(e).format("YYYY-MM-DD 00:00:00"),n=l()(t).format("YYYY-MM-DD 23:59:59");this.defaultDateRange=[i,n],this.fetch_patient_list({start_time:i,end_time:n}),this.timeDefaultShow=new Date,this.timeDefaultShow.setMonth((new Date).getMonth()-1);var s=7,a=new Date,r=(a.getFullYear(),a.getMonth(),a.getDay());s=0==r?s+6:s+(r-1),a.setDate(a.getDate()-s);a.getDate()},methods:{dateWarning:function(){this.$message({message:"时间最多不可超过30天",type:"warning"})},patientDrugPlan:function(t,e){var i=this,n=window.serverConfig.VUE_APP_MGMT_URL+"/diary/drug";h.a.post(n,{patient_id:e.patient_id,selected_date:t.date}).then((function(t){if(null!=t.data.data.record){var e=t.data.data.record.drug_plan_detail_list;if(null!==e){var n={},s=[];e.forEach((function(t,e){var i=t.drug_order,a=n[i];void 0!==a?s[a].push(e):(n[i]=s.length,s.push([e]))}));var a=[];s.forEach((function(t){var i=[];t.forEach((function(t){i.push(e[t])})),a.push(i)})),i.drug_plan_detail_list=a}}})).catch((function(t){console.log(t)}))},handleSizeChange:function(t){this.size=t,this.setingArguments()},handleCurrentChange:function(t){this.page=t,this.setingArguments()},setingArguments:function(){var t=0==this.subscribe_official_account||void 0==this.subscribe_official_account?void 0:1==this.subscribe_official_account,e=0==this.subscribe_qywx||void 0==this.subscribe_qywx?void 0:1===this.subscribe_qywx,i=-1==this.dept_id||0==this.dept_id||void 0==this.dept_id?void 0:this.dept_id,n=0==this.dept_id?0:void 0,s=0==this.doctor_id||void 0==this.doctor_id?void 0:this.doctor_id;void 0!=this.dept_id&&this.dept_id>0&&this.fetch_doctor_list();var a=void 0,r=void 0,o=this.dateRange.length>0?this.dateRange:this.defaultDateRange;if(this.dateRange.length>0){var l=o.map((function(t,e){var i=new Date(t),n=i.getMonth()+1,s=i.getDate(),a=i.getFullYear(),r=n<10?"0".concat(n):n,o=s<10?"0".concat(s):s;return 1==e?"".concat(a,"-").concat(r,"-").concat(o," 23:59:59"):"".concat(a,"-").concat(r,"-").concat(o," 00:00:00")}));a=l[0],r=l[1]}else a=o[0],r=o[1];var c=this.pefUnusual?1:void 0,u=this.acuteDrug?1:void 0,d=this.acuteSymptom?1:void 0;this.fetch_patient_list({subscribe_official_account:t,subscribe_qywx:e,dept_id:i,account_id:s,search:this.searchValue,pef_exception:c,drug_exception:u,symptom_exception:d,start_time:a,end_time:r,mgmt_status:n,contact_way_id_list:this.contact_way_id_list})},change:function(t){this.page=1,this.setingArguments()},fetch_patient_list:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,s,a,o,c,u,d,h;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$api.asthma.diary_mgmt_list(Object(r["a"])({page:e.page,size:e.size},t));case 2:if(n=i.sent,s=n.data,0==s.errcode){for(e.total=s.data.total_count,e.dairy_list_date=[],a=s.data.list,e.tableData=[],o=l()(t.start_time),c=l()(t.end_time),u=Math.ceil(l.a.duration(c.diff(o)).as("day")),d=0;d<u;d++)h=o.add(d,"day"),e.dairy_list_date.push(h.format("YYYY-MM-DD"));e.dairy_list_date=e.dairy_list_date.sort((function(t,e){return l()(t)-l()(e)})),e.dairy_list_date=e.dairy_list_date.reverse(),e.dairy_list_max=e.dairy_list_date.length,a.map((function(t){var i=[];e.dairy_list_date.forEach((function(){i.push(null)})),t.diary_list.map((function(t){e.dairy_list_date.forEach((function(e,n){t.date.split(" ")[0]===e&&(i[n]=t)}))})),t.diary_list=i})),e.tableData=a}e.tableLoading=!1,e.$nextTick((function(){e.$refs.elTable.doLayout()}));case 7:case"end":return i.stop()}}),i)})))()},fetch_doctor_list:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.patientmgmt.fetchDoctorList(t.dept_id);case 2:i=e.sent,n=i.data,0==n.errcode&&(t.doctorList=n.data.list);case 5:case"end":return e.stop()}}),e)})))()},sortChange:function(t){t.column,t.prop;var e=t.order;this.asc="ascending"==e,this.fetch_patient_list()},reset:function(){this.page=1,this.search="",this.dept_id="",this.search="",this.dept_id="",this.subscribe_official_account=void 0,this.subscribe_qywx=void 0,this.dept_id=void 0,this.doctor_id=void 0,this.pefUnusual=!1,this.acuteSymptom=!1,this.acuteDrug=!1,this.dateRange={},this.searchValue=void 0,this.contact_way_id_list=null,this.contact_way_name_list=null,this.change()},copyText:function(t){var e=document.getElementById("input");e.value=t,e.select(),document.execCommand("Copy"),this.$message({type:"success",message:"复制成功"})},format_time:function(t){return void 0===t?"--":t.split(" ")[0]},changeDitch:function(){this.$refs.contactWay.channelVisible=!0},getContactWayList:function(t,e,i){e?(this.no_contact_way=e,this.contact_way_id_list=null,this.contact_way_name_list=["无渠道"]):(this.no_contact_way=null,this.contact_way_id_list=t,this.contact_way_name_list=i),this.change()}}},g=m,y=(i("9d1c"),i("0545"),i("2877")),v=Object(y["a"])(g,n,s,!1,null,"595e482c",null);e["default"]=v.exports},d772:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t,e,i=1e3,n=6e4,s=36e5,a=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:a,hours:s,minutes:n,seconds:i,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},h=function(t,e,i){return new y(t,i,e.$l)},_=function(t){return e.p(t)+"s"},f=function(t){return t<0},p=function(t){return f(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},g=function(t,e){return t?f(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,i){var n=this;if(this.$d={},this.$l=i,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*u[_(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[_(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var a=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,i){return e+(t.$d[i]||0)*u[i]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=p(t/o),t%=o,this.$d.months=p(t/l),t%=l,this.$d.days=p(t/a),t%=a,this.$d.hours=p(t/s),t%=s,this.$d.minutes=p(t/n),t%=n,this.$d.seconds=p(t/i),t%=i,this.$d.milliseconds=t},m.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=g(i,"D"),s=g(this.$d.hours,"H"),a=g(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var o=g(r,"S"),l=t.negative||e.negative||n.negative||s.negative||a.negative||o.negative,c=s.format||a.format||o.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+n.format+c+s.format+a.format+o.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(r,(function(t,e){return e||String(n[t])}))},m.as=function(t){return this.$ms/u[_(t)]},m.get=function(t){var e=this.$ms,i=_(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?p(e/u[i]):this.$d[i],0===e?0:e},m.add=function(t,e,i){var n;return n=e?t*u[_(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+n*(i?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return h(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(i,n,s){t=s,e=s().$utils(),s.duration=function(t,e){var i=s.locale();return h(t,{$l:i},e)},s.isDuration=d;var a=n.prototype.add,r=n.prototype.subtract;n.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)},n.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)}}}))}}]);