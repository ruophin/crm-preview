(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e3f8614"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1942:function(t,e,a){},4929:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patientmgmt"},[a("div",{staticClass:"header-box",staticStyle:{padding:"6px 20px"}},[a("div",{staticClass:"head-btn"},[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.newArticle}},[t._v("添加内容")])],1),a("el-form",{attrs:{"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-input",{attrs:{placeholder:"输入标题查找"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.change(e)}},model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),a("el-col",{attrs:{xs:12,sm:12,md:4,lg:4,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"","collapse-tags":"",placeholder:"选择标签"},on:{change:t.change},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}},t._l(t.tagList,(function(t){return a("el-option",{key:t.tag_id,attrs:{label:t.name,value:t.tag_id}})})),1)],1)],1),a("el-col",{staticStyle:{margin:"8px 0",float:"right"},attrs:{span:6}},[a("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.change}},[t._v("查询")]),a("el-button",{staticStyle:{float:"right"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)],1),a("div",{staticStyle:{margin:"0 16px",padding:"16px 0 0"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"elTable",attrs:{data:t.tableData,size:"small",border:"",stripe:"",height:"calc(100vh - 213px)"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(t){return t+1}}}),a("el-table-column",{attrs:{label:"内容","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex"},[a("img",{staticStyle:{width:"100px","vertical-align":"middle","margin-right":"10px"},attrs:{src:e.row.cover_url,alt:""}}),a("div",{staticStyle:{"line-height":"64px"}},[a("span",{staticStyle:{"line-height":"20px",display:"inline-block","vertical-align":"middle"}},[t._v(t._s(e.row.title||"--"))])])])]}}])}),a("el-table-column",{attrs:{prop:"tag_list",label:"内容标签","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.lable_list,(function(e){return a("el-tag",{key:e.id,staticClass:"mr10"},[t._v(t._s(e.name))])}))}}])}),a("el-table-column",{attrs:{label:"添加信息","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("时间："+t._s(e.row.sys_create_time||"--")),a("br")]),a("span",[t._v("操作人："+t._s(e.row.creator||"--")),a("br")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"left",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.edit(e.row)}}},[t._v("查看")]),e.$index+(t.page-1)*t.size>0?a("el-link",{staticStyle:{"margin-left":"13px"},attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.move(e.row.home_id,-1)}}},[t._v("上移")]):t._e(),e.$index+(t.page-1)*t.size<t.total-1?a("el-link",{staticStyle:{"margin-left":"13px"},attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.move(e.row.home_id,1)}}},[t._v("下移")]):t._e(),a("el-link",{staticStyle:{"margin-left":"13px"},attrs:{underline:!1,type:"danger"},on:{click:function(a){return t.deleteClick(e.row.home_id)}}},[t._v("删除")])]}}])})],1)],1),a("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[a("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[20,50,100,200],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"添加内容",visible:t.articleDialog,width:"80%"},on:{"update:visible":function(e){t.articleDialog=e}}},[a("div",{staticStyle:{margin:"0 16px"}},[a("el-form",{attrs:{"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-input",{attrs:{placeholder:"输入标题查找"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.formChange(e)}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search","string"===typeof e?e.trim():e)},expression:"form.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),a("el-col",{attrs:{xs:12,sm:12,md:4,lg:4,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择标签"},on:{change:t.formChange},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(t.tagList,(function(t){return a("el-option",{key:t.tag_id,attrs:{label:t.name,value:t.tag_id}})})),1)],1)],1),a("el-col",{staticStyle:{margin:"8px 0",float:"right"},attrs:{span:6}},[a("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.formChange}},[t._v("查询")]),a("el-button",{staticStyle:{float:"right"},on:{click:t.formReset}},[t._v("重置")])],1)],1)],1),a("el-table",{ref:"elTable",attrs:{data:t.form.tableData,size:"small",border:"",stripe:"",height:"500"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(t){return t+1}}}),a("el-table-column",{attrs:{label:"内容","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex"},[a("img",{staticStyle:{width:"100px","vertical-align":"middle","margin-right":"10px"},attrs:{src:e.row.cover_url,alt:""}}),a("div",{staticStyle:{"line-height":"64px"}},[a("span",{staticStyle:{"line-height":"20px",display:"inline-block","vertical-align":"middle"}},[t._v(t._s(e.row.title||"--"))])])])]}}])}),a("el-table-column",{attrs:{prop:"lable_list",label:"内容标签","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.lable_list,(function(e){return a("el-tag",{key:e.id,staticClass:"mr10"},[t._v(t._s(e.name))])}))}}])}),a("el-table-column",{attrs:{label:"创建信息","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("创建时间："+t._s(e.row.sys_create_time||"--")),a("br")]),a("span",[t._v("创建者："+t._s(e.row.creator||"--")),a("br")])]}}])})],1),a("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[a("el-pagination",{attrs:{"current-page":t.form.page,"page-sizes":[20,50,100,200],"page-size":t.form.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.articleCancel}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveHomeContent}},[t._v("保 存")])],1)])],1)},i=[],r=(a("99af"),a("d81d"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),o={data:function(){return{total:0,page:1,size:20,search:"",tags:[],tableLoading:!1,tableData:[],articleDialog:!1,tagList:[],form:{total:0,page:1,size:10,search:"",tags:[],tableData:[]},multipleSelection:[]}},created:function(){this.getTagList(),this.getData(),this.queryChooseHomeContentList()},methods:{handleSizeChange:function(t){this.size=t,this.getData()},handleCurrentChange:function(t){this.page=t,this.getData()},handleFormSizeChange:function(t){this.form.size=t,this.queryChooseHomeContentList()},handleFormCurrentChange:function(t){this.form.page=t,this.queryChooseHomeContentList()},handleSelectionChange:function(t){console.log(t),this.multipleSelection=t.map((function(t){return t.content_id})),console.log(this.multipleSelection)},getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,t.$api.homeContent.queryHomeContentList({page:t.page,size:t.size,title:t.search,lable_list:t.tags,manage_id:t.$route.params.id});case 3:a=e.sent,n=a.data,0==n.errcode&&(t.tableData=n.data.records,t.total=n.data.total,console.log(t.tableData)),t.tableLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},getTagList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.baseContent.queryContentTags({});case 2:a=e.sent,n=a.data,0===n.errcode&&(t.tagList=n.data);case 5:case"end":return e.stop()}}),e)})))()},queryChooseHomeContentList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.homeContent.queryChooseHomeContentList({page:t.form.page,size:t.form.size,title:t.form.search,lable_list:t.form.tags,manage_id:t.$route.params.id});case 2:a=e.sent,n=a.data,0==n.errcode&&(t.form.tableData=n.data.records,t.form.total=n.data.total,console.log(t.form.tableData));case 5:case"end":return e.stop()}}),e)})))()},saveHomeContent:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.homeContent.saveHomeContent({content_ids:t.multipleSelection,manage_id:t.$route.params.id});case 2:a=e.sent,n=a.data,0==n.errcode&&(t.getData(),t.queryChooseHomeContentList(),t.articleDialog=!1);case 5:case"end":return e.stop()}}),e)})))()},topHomeContent:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$api.homeContent.topHomeContent({home_id:t.home_id,top:!t.top});case 2:n=a.sent,i=n.data,0==i.errcode&&e.getData();case 5:case"end":return a.stop()}}),a)})))()},move:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$api.homeContent.move({home_id:t,move:e});case 2:i=n.sent,r=i.data,0==r.errcode&&a.getData();case 5:case"end":return n.stop()}}),n)})))()},delHomeContent:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$api.homeContent.delHomeContent({home_id:t});case 2:n=a.sent,i=n.data,0==i.errcode&&(e.getData(),e.queryChooseHomeContentList());case 5:case"end":return a.stop()}}),a)})))()},change:function(){this.page=1,this.getData()},formChange:function(){this.form.page=1,this.queryChooseHomeContentList()},edit:function(t){sessionStorage.setItem("form",JSON.stringify(t));var e=this.$router.resolve({path:"/cms/home/".concat(this.$route.params.id,"/").concat(t.content_id)}),a=e.href;window.open(a,"_blank")},setTop:function(t){console.log("置顶")},reset:function(){this.page=1,this.search="",this.tags=[],this.getData()},formReset:function(){this.form.page=1,this.form.search="",this.form.tags=[],this.queryChooseHomeContentList()},newArticle:function(){this.articleDialog=!0},articleCancel:function(){this.articleDialog=!1},deleteClick:function(t){var e=this;this.$confirm("是否确认删除资源?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.delHomeContent(t)})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},l=o,s=(a("64b1"),a("2877")),c=Object(s["a"])(l,n,i,!1,null,"a8a6327a",null);e["default"]=c.exports},"64b1":function(t,e,a){"use strict";var n=a("1942"),i=a.n(n);i.a},"841c":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),r=a("1d80"),o=a("129f"),l=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var r=i(t),s=String(this),c=r.lastIndex;o(c,0)||(r.lastIndex=0);var u=l(r,s);return o(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))}}]);