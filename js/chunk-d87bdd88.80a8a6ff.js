(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d87bdd88"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"68c0b":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"medicaldetails"},[r("div",{staticClass:"list-top"},[r("div",{staticClass:"list-top-left"},[e._v("内容基础信息")]),r("el-form",{ref:"form",staticClass:"w670 mt15 mb70",attrs:{model:e.form,rules:e.rules,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"货 品："}},[r("span",[e._v(e._s(e.form.goods_name))])]),e.form.sn_num?r("el-form-item",{attrs:{label:"sn设备号："}},[r("span",[e._v(e._s(e.form.sn_num))])]):e._e(),r("el-form-item",{attrs:{label:"店 铺：",prop:"store_id"}},[r("el-select",{attrs:{placeholder:"请选择店铺"},on:{change:e.changeStore},model:{value:e.form.store_id,callback:function(t){e.$set(e.form,"store_id",t)},expression:"form.store_id"}},e._l(e.storeList,(function(e){return r("el-option",{key:e.store_id,attrs:{label:e.name,value:e.store_id}})})),1)],1),r("el-form-item",{attrs:{label:"仓 库：",prop:"warehouse_id"}},[r("el-select",{attrs:{placeholder:"请选择仓库"},model:{value:e.form.warehouse_id,callback:function(t){e.$set(e.form,"warehouse_id",t)},expression:"form.warehouse_id"}},e._l(e.warehouseList,(function(e){return r("el-option",{key:e.warehouse_id,attrs:{label:e.name,value:e.warehouse_id}})})),1)],1),r("el-form-item",{attrs:{label:"库存状态：",prop:"state"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeState},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},e._l(e.statusList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),2===e.form.state||3===e.form.state?r("el-form-item",{attrs:{label:"绑定订单："}},[e.form.order_info&&e.form.state===e.state?r("div",[e._v(" 用户："),r("a",{staticClass:"blue",on:{click:function(t){return e.toPage(e.form.order_info)}}},[e._v(e._s(e.form.order_info.nick_name))]),r("br"),e._v(" 患者："),r("a",{class:{blue:e.form.order_info&&e.form.order_info.patient_name},on:{click:function(t){return e.toCareprogram(e.form.order_info)}}},[e._v(e._s(e.form.order_info.patient_name||"--"))]),r("br"),e._v(" 手机号："+e._s(e.form.order_info.phone||"--")),r("br"),e._v(" 时间："+e._s(e.form.order_info.pay_time||"--")),r("br"),e._v(" 订单号："),r("a",{staticClass:"blue",on:{click:function(t){return e.toOrder(e.form.order_info)}}},[e._v(e._s(e.form.order_info.tid||"--"))])]):e._e(),e.order_info&&e.form.state!==e.state?r("div",[e._v(" 用户："),r("a",{staticClass:"blue",on:{click:function(t){return e.toPage(e.order_info)}}},[e._v(e._s(e.order_info.nick_name))]),r("br"),e._v(" 患者："),r("a",{class:{blue:e.order_info.patient_name},on:{click:function(t){return e.toCareprogram(e.order_info)}}},[e._v(e._s(e.order_info.patient_name||"--"))]),r("br"),e._v(" 手机号："+e._s(e.order_info.phone||"--")),r("br"),e._v(" 时间："+e._s(e.order_info.pay_time||"--")),r("br"),e._v(" 订单号："),r("a",{staticClass:"blue",on:{click:function(t){return e.toOrder(e.order_info)}}},[e._v(e._s(e.order_info.tid||"--"))])]):e._e(),e.ableChoose?r("el-button",{on:{click:e.chooseClick}},[e._v("选择")]):e._e()],1):e._e(),e.knowMark?r("el-form-item",{attrs:{label:"纸质知情同意书照片：","hide-required-asterisk":!1,size:"large"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"book_pic"},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.frontUpload,disabled:e.frontDisabled}},[e.frontUrl?r("div",[r("i",{staticClass:"el-icon-error kb_delete",on:{click:function(t){return e.deleteKnowBookPicClick(t,1)}}}),r("el-image",{staticClass:"avatar",staticStyle:{width:"100px",height:"100px"},attrs:{src:e.frontUrl,fit:"contain","preview-src-list":[e.frontUrl]}})],1):r("div",{staticClass:"image_slot"},[r("i",{staticClass:"el-icon-plus"}),e._v(" 同意书正页 ")])]),r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.backUpload,disabled:e.backDisabled}},[e.backUrl?r("div",[r("i",{staticClass:"el-icon-error kb_delete",on:{click:function(t){return e.deleteKnowBookPicClick(t,2)}}}),r("el-image",{staticClass:"avatar",staticStyle:{width:"100px",height:"100px"},attrs:{src:e.backUrl,fit:"contain","preview-src-list":[e.backUrl]}})],1):r("div",{staticClass:"image_slot"},[r("i",{staticClass:"el-icon-plus"}),e._v(" 同意书反页 ")])])],1),r("span",[e._v("请上传纸质知情同意书正、反页两张图片")])])]):e._e(),r("el-form-item",{attrs:{label:"备 注：",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",rows:3,maxlength:"200",placeholder:"请输入"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveClick}},[e._v("确 定")]),r("el-button",{on:{click:e.cancelClick}},[e._v("取 消")])],1)],1)],1),r("el-dialog",{staticClass:"order-dialog",attrs:{title:"绑定订单",width:"900px",visible:e.dialogOrder},on:{"update:visible":function(t){e.dialogOrder=t}}},[r("div",[r("div",{staticClass:"flex"},[r("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"输入sn设备号/患者姓名/用户昵称/手机号查找"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.change(t)}},model:{value:e.search,callback:function(t){e.search="string"===typeof t?t.trim():t},expression:"search"}},[r("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),r("el-button",{staticClass:"ml10",attrs:{type:"primary"},on:{click:e.change}},[e._v("查询")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"mt20",attrs:{data:e.tableData,height:"calc(100vh - 280px)",size:"small",border:"",stripe:""}},[r("el-table-column",{attrs:{label:"用户/患者信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("span",[e._v("用户："+e._s(t.row.nick_name||"--"))]),r("br"),r("span",[e._v("患者："+e._s(t.row.patient_name||"--"))]),r("br"),r("span",[e._v("手机号："+e._s(t.row.phone||"--"))])])]}}])}),r("el-table-column",{attrs:{label:"订单信息",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("span",[e._v("商品："+e._s(t.row.title||"--"))]),r("br"),r("span",[e._v("数量："),r("span",{staticClass:"orange"},[e._v(e._s(t.row.total_num))]),e._v("件 实付:"),r("span",{staticClass:"orange"},[e._v("￥"+e._s(t.row.total_fee))]),e._v(" 总价:"+e._s(t.row.total_price?"￥":"--")+e._s(t.row.total_price))]),r("br"),r("span",[e._v("支付时间："+e._s(t.row.pay_time))]),r("br"),r("span",[e._v("订单号："),r("a",{staticClass:"blue",on:{click:function(r){return e.toOrder(t.row)}}},[e._v(e._s(t.row.tid))])]),r("br")])]}}])}),r("el-table-column",{attrs:{label:"绑定设备信息"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.item_list,(function(t,o){return r("div",{key:o,staticStyle:{"white-space":"pre-line"}},[t.sn_num?r("div",[r("span",[e._v("货品："+e._s(t.goods_name))]),r("br"),2==t.goods_type?r("span",[e._v("sn设备号："),t.sn_num.length>11?r("br"):e._e(),e._v(e._s(t.sn_num||"--")),r("br")]):e._e(),1==t.goods_type?r("span",[e._v("数量："+e._s(t.delieve_num))]):e._e()]):e._e()])}))}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.choose?[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.bindClick(t.row)}}},[e._v("绑定订单")])]:void 0}}],null,!0)})],1),r("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[r("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])],1)},a=[],n=(r("ac1f"),r("841c"),r("96cf"),r("1da1")),i=r("5530"),s=r("2f62"),l=r("e766"),c=[{name:"在库",id:1},{name:"已租赁",id:2},{name:"已销售",id:3},{name:"退货入库",id:4}],u={data:function(){return{id:"",page:1,size:10,total:0,form:{store_id:"",goods_inventory_id:"",warehouse_id:"",order_id:null,state:"",order_info:"",remark:""},rules:{store_id:{required:!0,message:"请选择店铺",trigger:"blur"},warehouse_id:{required:!0,message:"请选择仓库",trigger:"blur"},state:{required:!0,message:"请选择库存状态",trigger:"blur"},remark:{required:!0,message:"请输入备注",trigger:"blur"}},ableChoose:!1,state:"",order_info:"",order_id:null,statusList:c,warehouseList:[],dialogOrder:!1,tableLoading:!1,tableData:[],search:"",srcList:[],frontUrl:"",backUrl:"",frontDisabled:!1,backDisabled:!1,knowMark:!1}},computed:Object(i["a"])({},Object(s["c"])({storeList:"store/getStoreList"})),created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.id=e.$route.params.id||"",e.storeList.length||e.setStoreList(),e.id&&e.getGoodsInventory();case 3:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(s["d"])("store",["setStoreList"])),{},{getGoodsInventory:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.store.getGoodsInventory(e.id);case 2:r=t.sent,o=r.data,0==o.errcode&&(e.form=o.data,e.form.store_id=parseInt(e.form.store_id),e.form.warehouse_id=parseInt(e.form.warehouse_id),e.form.order_id=o.data.order_info&&o.data.order_info.order_id||null,e.order_id=o.data.order_info&&o.data.order_info.order_id||null,e.state=o.data.state,e.frontUrl=o.data.front_consent_form_url,e.backUrl=o.data.obverse_consent_form_url,(o.data.front_consent_form_url||o.data.front_consent_form_url)&&(e.knowMark=!0,e.frontDisabled=!0,e.backDisabled=!0),e.ableChoose=Boolean(!e.form.order_info||e.form.state!==e.state),e.getWarehouseList());case 5:case"end":return t.stop()}}),t)})))()},getWarehouseList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.store.getWarehouseList({store_id:e.form.store_id});case 2:r=t.sent,o=r.data,0==o.errcode&&(e.warehouseList=o.data);case 5:case"end":return t.stop()}}),t)})))()},queryOrderList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableLoading=!0,r=2===e.form.state?e.form.state:3===e.form.state?1:"",t.next=4,e.$api.order.queryOrderList({page:e.page,size:e.size,search:e.search,order_type:r});case 4:o=t.sent,a=o.data,0==a.errcode&&(e.total=a.data.total,e.tableData=a.data.records),e.tableLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},changeStore:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getWarehouseList();case 2:e.warehouseList.length?e.form.warehouse_id=e.warehouseList[0].warehouse_id:e.form.warehouse_id="";case 3:case"end":return t.stop()}}),t)})))()},saveClick:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.id&&e.update()}))},cancelClick:function(){this.$router.back()},update:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.knowMark||""!=e.frontUrl&&""!=e.backUrl){t.next=3;break}return e.$message({type:"warning",message:"请上传纸质知情同意书正、反页两张图片"}),t.abrupt("return");case 3:return t.next=5,e.$api.store.updateGoodsInventoryState({goods_inventory_id:e.id,order_id:e.form.order_id,remark:e.form.remark,state:e.form.state,sn_num:e.form.sn_num,warehouse_id:e.form.warehouse_id,front_consent_form_url:e.frontUrl,obverse_consent_form_url:e.backUrl});case 5:r=t.sent,o=r.data,0===o.errcode?(e.$message({type:"success",message:"保存成功"}),e.$router.push("/storage/detail/index")):e.$message({type:"error",message:o.errmsg});case 8:case"end":return t.stop()}}),t)})))()},change:function(){this.page=1,this.queryOrderList()},changeState:function(){this.ableChoose=Boolean(!this.form.order_info||this.form.state!==this.state),console.log(this.form.state,this.order_info.need_upload),2==this.form.state&&this.order_info.need_upload?this.knowMark=!0:this.knowMark=!1,this.form.state!==this.state?this.form.order_id=null:this.form.order_id=this.order_id},chooseClick:function(){this.dialogOrder=!0,this.queryOrderList()},bindClick:function(e){this.form.state===this.state?(this.ableChoose=!0,this.form.order_info=e):this.order_info=e,this.form.order_id=e.order_id,this.dialogOrder=!1,this.knowMark=e.need_upload},handleSizeChange:function(e){this.size=e,this.queryOrderList()},handleCurrentChange:function(e){this.page=e,this.queryOrderList()},toPage:function(e){var t=this.$router.resolve({name:"scoreDetail",query:{id:e.user_id}}),r=t.href;window.open(r,"_blank")},toCareprogram:function(e){if(e.patient_name){var t=this.$router.resolve({name:"careprogram",query:{search:e.patient_name}}),r=t.href;window.open(r,"_blank")}},toOrder:function(e){var t=this.$router.resolve({name:"ordermgmt",query:{tid:e.tid}}),r=t.href;window.open(r,"_blank")},uploadKnowPic:function(){console.log("上传图片"),this.$message({message:"上传图片",type:"warning"})},deleteKnowBookPicClick:function(e,t){e.preventDefault();var r=this;1==t?(this.frontUrl="",setTimeout((function(){r.frontDisabled=!1}),1e3)):(this.backUrl="",this.form.backUrl="",setTimeout((function(){r.backDisabled=!1}),1e3))},frontUpload:function(e){this.beforeAvatarUpload(e,1)},backUpload:function(e){this.beforeAvatarUpload(e,2)},beforeAvatarUpload:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function o(){var a,n,i,s,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,r.$api.resources.resource({token_num:1});case 2:a=o.sent,n=a.data,i=n.data.list,s=i[0],c={region:"ECN",uptoken:s.token,key:s.key},console.log(s.url),l["a"].upload(e,(function(e){1==t?(r.frontDisabled=!0,r.frontUrl=s.url):(r.frontDisabled=!0,r.backUrl=s.url)}),(function(e){console.error("error: "+JSON.stringify(e))}),c);case 9:case"end":return o.stop()}}),o)})))()}})},d=u,f=(r("e3c3"),r("2877")),_=Object(f["a"])(d,o,a,!1,null,"57cac168",null);t["default"]=_.exports},"841c":function(e,t,r){"use strict";var o=r("d784"),a=r("825a"),n=r("1d80"),i=r("129f"),s=r("14c3");o("search",1,(function(e,t,r){return[function(t){var r=n(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r):new RegExp(t)[e](String(r))},function(e){var o=r(t,e,this);if(o.done)return o.value;var n=a(e),l=String(this),c=n.lastIndex;i(c,0)||(n.lastIndex=0);var u=s(n,l);return i(n.lastIndex,c)||(n.lastIndex=c),null===u?-1:u.index}]}))},a440:function(e,t,r){},e3c3:function(e,t,r){"use strict";var o=r("a440"),a=r.n(o);a.a},e766:function(e,t,r){"use strict";r("b0c0");var o=r("bc3a"),a=r.n(o),n={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null};function i(e){n={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null},s(e)}function s(e){e.region?n.qiniuRegion=e.region:console.error("qiniu uploader need your bucket region"),e.uptoken?n.qiniuUploadToken=e.uptoken:e.uptokenURL?n.qiniuUploadTokenURL=e.uptokenURL:e.uptokenFunc&&(n.qiniuUploadTokenFunction=e.uptokenFunc),e.domain&&(n.qiniuImageURLPrefix=e.domain)}function l(e,t,r,o){if(null!=e)if(o&&i(o),n.qiniuUploadToken)c(e,t,r,o);else if(n.qiniuUploadTokenURL)u((function(){c(e,t,r,o)}));else{if(!n.qiniuUploadTokenFunction)return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");n.qiniuUploadToken=n.qiniuUploadTokenFunction()}else console.error("qiniu uploader need filePath to upload")}function c(e,t,r,o){var i=d(n.qiniuRegion),s=e.name;o&&o.key&&(s=o.key);var l=new window.FormData;l.append("token",n.qiniuUploadToken),l.append("key",s),l.append("file",e),a.a.post(i,l).then((function(e){t&&t(e)})).catch((function(e){r(e),console.log(e)}))}function u(e){a.a.get(n.qiniuUploadTokenURL).then((function(t){var r=t.data.uptoken;n.qiniuUploadToken=r,e&&e()})).catch((function(e){console.log(e)}))}function d(e){var t=null;switch(e){case"ECN":t="https://up.qbox.me";break;case"NCN":t="https://up-z1.qbox.me";break;case"SCN":t="https://up-z2.qbox.me";break;case"NA":t="https://up-na0.qbox.me";break;default:console.error("please make the region is with one of [ECN, SCN, NCN, NA]")}return t}t["a"]={init:i,upload:l}}}]);