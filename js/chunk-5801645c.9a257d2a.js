(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5801645c"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},4297:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patientmgmt"},[a("div",{staticClass:"header-box",staticStyle:{padding:"6px 20px"}},[a("el-form",{attrs:{"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"collapse-tags":"",placeholder:"选择数据汇总模式"},on:{change:t.change},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("el-option",{attrs:{label:"按店铺汇总",value:1}}),a("el-option",{attrs:{label:"按仓库汇总",value:2}})],1)],1)],1),a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"collapse-tags":"",placeholder:"选择店铺"},on:{change:t.change},model:{value:t.shop,callback:function(e){t.shop=e},expression:"shop"}},[a("el-option",{attrs:{label:"全部店铺",value:""}}),t._l(t.storeList,(function(t){return a("el-option",{key:t.store_id,attrs:{label:t.name,value:t.store_id}})}))],2)],1)],1),a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"collapse-tags":"",placeholder:"选择商品"},on:{change:t.change},model:{value:t.goods,callback:function(e){t.goods=e},expression:"goods"}},[a("el-option",{attrs:{label:"全部商品",value:""}}),t._l(t.goodsList,(function(t){return a("el-option",{key:t.goods_id,attrs:{label:t.name,value:t.goods_id}})}))],2)],1)],1),a("el-col",{attrs:{xs:12,sm:12,md:6,lg:6,xl:4}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"collapse-tags":"",placeholder:"设备新旧情况"},on:{change:t.change},model:{value:t.devices,callback:function(e){t.devices=e},expression:"devices"}},[a("el-option",{attrs:{label:"全部",value:0}}),a("el-option",{attrs:{label:"新设备",value:1}}),a("el-option",{attrs:{label:"旧设备",value:2}})],1)],1)],1),a("el-col",{staticStyle:{margin:"8px 0",float:"right"},attrs:{span:6}},[a("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.change}},[t._v("查询")]),a("el-button",{staticStyle:{float:"right"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{sm:12,md:6,xl:3}},[a("p",{staticClass:"f14"},[t._v(" 在库总数："),a("span",{staticClass:"orange f16 bold"},[t._v(t._s(t.records.in_num||0))])])]),a("el-col",{attrs:{sm:12,md:6,xl:3}},[a("p",{staticClass:"f14"},[t._v(" 退货入库总数："),a("span",{staticClass:"orange f16 bold"},[t._v(t._s(t.records.return_num||0))])])]),a("el-col",{attrs:{sm:12,md:6,xl:3}},[a("p",{staticClass:"f14"},[t._v(" 已租赁总数："),a("span",{staticClass:"orange f16 bold"},[t._v(t._s(t.records.rent_num||0))])])]),a("el-col",{attrs:{sm:12,md:6,xl:3}},[a("p",{staticClass:"f14"},[t._v(" 已销售总数："),a("span",{staticClass:"orange f16 bold"},[t._v(t._s(t.records.sell_num||0))])])])],1)],1),a("div",{staticStyle:{margin:"0 16px","padding-top":"8px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"elTable",attrs:{data:t.tableData,size:"small",border:"",stripe:"",height:"calc(100vh - 230px)"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(t){return t+1}}}),a("el-table-column",{attrs:{label:"店铺/仓库","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"line-height":"20px",display:"inline-block","vertical-align":"middle"}},[t._v(t._s(e.row.store_name)+t._s(2==t.status?"/"+e.row.warehouse_name:""))])]}}])}),a("el-table-column",{attrs:{label:"货品名称",prop:"goods_name"}}),a("el-table-column",{attrs:{label:"在库数量",prop:"in_num"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"blue",on:{click:function(a){return t.toPage(e.row,1)}}},[t._v(t._s(e.row.in_num))])]}}])}),a("el-table-column",{attrs:{label:"退货入库数量",prop:"return_num"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"blue",on:{click:function(a){return t.toPage(e.row,4)}}},[t._v(t._s(e.row.return_num))])]}}])}),a("el-table-column",{attrs:{label:"已租赁数量",prop:"rent_num"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"blue",on:{click:function(a){return t.toPage(e.row,2)}}},[t._v(t._s(e.row.rent_num))])]}}])}),a("el-table-column",{attrs:{label:"已销售数量",prop:"sell_num"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"blue",on:{click:function(a){return t.toPage(e.row,3)}}},[t._v(t._s(e.row.sell_num))])]}}])})],1)],1),a("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[a("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[20,50,100,200],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},o=[],l=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),n=a("5530"),r=a("2f62"),i={data:function(){return{total:0,page:1,size:20,search:null,status:1,shop:"",goods:null,devices:"",tableLoading:!1,records:{},tableData:[{}]}},computed:Object(n["a"])({},Object(r["c"])({storeList:"store/getStoreList",goodsList:"store/getGoodsList"})),created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.storeList.length){e.next=3;break}return e.next=3,t.setStoreList();case 3:if(t.goodsList.length){e.next=6;break}return e.next=6,t.setGoodsList();case 6:t.goods=t.goodsList[0].goods_id,t.getData();case 8:case"end":return e.stop()}}),e)})))()},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])("store",["setStoreList","setGoodsList"])),{},{handleSizeChange:function(t){this.size=t,this.getData()},handleCurrentChange:function(t){this.page=t,this.getData()},reset:function(){this.page=1,this.search=null,this.shop="",this.goods=this.goodsList[0].goods_id,this.status=1,this.devices="",this.getData()},change:function(){this.page=1,this.getData()},getData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,t.$api.store.getGoodsInventoryCountPage({page:t.page,size:t.size,mode:t.status,store_id:t.shop,goods_id:t.goods,is_out_inventory:""==t.devices?void 0:t.devices-1});case 3:a=e.sent,s=a.data,0==s.errcode&&(t.records=s.data,t.tableData=s.data.page_info_vo&&s.data.page_info_vo.list||[],t.total=s.data.page_info_vo&&s.data.page_info_vo.total_count||0),t.tableLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},toPage:function(t,e){console.log(t);var a=t.goods_id,s=t.store_id,o=this.devices,l=this.$router.resolve({name:"storageDetail",query:{status:e,goods_id:a,store_id:s,devices:o}}),n=l.href;window.open(n,"_blank")}})},c=i,u=a("2877"),d=Object(u["a"])(c,s,o,!1,null,null,null);e["default"]=d.exports},"841c":function(t,e,a){"use strict";var s=a("d784"),o=a("825a"),l=a("1d80"),n=a("129f"),r=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=l(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var l=o(t),i=String(this),c=l.lastIndex;n(c,0)||(l.lastIndex=0);var u=r(l,i);return n(l.lastIndex,c)||(l.lastIndex=c),null===u?-1:u.index}]}))}}]);