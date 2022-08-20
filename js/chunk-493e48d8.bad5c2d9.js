(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-493e48d8"],{af42:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"patientmgmt"},[n("div",{staticStyle:{margin:"0 16px",padding:"16px 0 0"}},[n("el-table",{ref:"elTable",attrs:{data:e.tableData,size:"small",border:"",stripe:""}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(e){return e+1}}}),n("el-table-column",{attrs:{prop:"name",label:"资源位"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"flex"},[n("span",{staticStyle:{width:"100px","line-height":"150px"}},[e._v(e._s(t.row.name))]),n("el-image",{staticStyle:{width:"75px",height:"150px"},attrs:{src:t.row.image,fit:"fill"}})],1)]}}])}),n("el-table-column",{attrs:{prop:"belong",label:"所属产品"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.belong?"脱敏管家":"哮喘管家"))])]}}])}),n("el-table-column",{attrs:{prop:"type",label:"资源位类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.type?"轮播":"静态"))])]}}])}),n("el-table-column",{attrs:{prop:"num",label:"资源数量"}}),n("el-table-column",{attrs:{label:"操作",width:"120",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(n){return e.toPage(t.row)}}},[e._v("查看")]),n("el-link",{staticStyle:{"margin-left":"13px"},attrs:{underline:!1,type:"primary"},on:{click:function(n){return e.edit(t.row)}}},[e._v("编辑")])]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑资源位",visible:e.editDialog},on:{"update:visible":function(t){e.editDialog=t}}},[n("div",[n("el-form",{ref:"form",attrs:{"label-width":"auto",model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"资源位名称",prop:"name"}},[n("el-input",{attrs:{maxlength:"20"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"资源位类型",prop:"type"}},[n("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-radio",{attrs:{label:1}},[e._v("轮播")]),n("el-radio",{attrs:{label:0}},[e._v("静态")])],1)],1),n("el-form-item",{attrs:{label:"资源位预览图"}},[n("p",[n("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:e.uploadClick}},[e._v(e._s(e.form.image?"更 换":"上 传"))])],1),e.form.image?n("el-image",{staticStyle:{width:"100px","margin-top":"10px"},attrs:{src:e.form.image,fit:"fill"}}):e._e(),n("p",{staticClass:"gray"},[e._v("请上传包含资源位的图片")])],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.cancel}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("保 存")])],1)]),n("el-dialog",{attrs:{title:"裁切资源位预览图",visible:e.cropperModel,width:"950px",center:""},on:{"update:visible":function(t){e.cropperModel=t}}},[n("cropper-image",{ref:"cropperImage",attrs:{Name:"资源位预览图",width:350,height:700},on:{uploadImgSuccess:e.uploadImgSuccess}})],1)],1)},i=[],a=(n("99af"),n("b0c0"),n("96cf"),n("1da1")),r=n("709f"),l={components:{CropperImage:r["a"]},data:function(){return{tableData:[],editDialog:!1,cropperModel:!1,form:{name:"",type:""},rules:{name:[{required:!0,message:"请输入资源位名称",trigger:"blur"},{max:20,message:"资源位名称在20个字符以内",trigger:"blur"}],type:{required:!0,message:"请选择资源位类型",trigger:"blur"}}}},created:function(){this.getData()},methods:{edit:function(e){this.editDialog=!0,this.form=JSON.parse(JSON.stringify(e))},toPage:function(e){this.$router.push("/cms/banner/list/".concat(e.location_id,"?name=").concat(e.name))},cancel:function(){this.editDialog=!1},confirm:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.updateResourcesLocation(),e.editDialog=!1}))},getData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.resources.getResourcesLocationList({page:1,size:10});case 2:n=t.sent,o=n.data,0==o.errcode&&(e.tableData=o.data.list),e.tableLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},updateResourcesLocation:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.resources.updateResourcesLocation(e.form);case 2:n=t.sent,o=n.data,0==o.errcode&&(e.$message({type:"success",message:"编辑成功"}),e.getData());case 5:case"end":return t.stop()}}),t)})))()},uploadImgSuccess:function(e){this.cropperModel=!1,this.form.image=e},uploadClick:function(){var e=this;this.cropperModel=!0,this.$nextTick((function(){e.$refs.cropperImage.$refs["uploadBtn"].click()}))}}},u=l,s=n("2877"),c=Object(s["a"])(u,o,i,!1,null,null,null);t["default"]=c.exports},e766:function(e,t,n){"use strict";n("b0c0");var o=n("bc3a"),i=n.n(o),a={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null};function r(e){a={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null},l(e)}function l(e){e.region?a.qiniuRegion=e.region:console.error("qiniu uploader need your bucket region"),e.uptoken?a.qiniuUploadToken=e.uptoken:e.uptokenURL?a.qiniuUploadTokenURL=e.uptokenURL:e.uptokenFunc&&(a.qiniuUploadTokenFunction=e.uptokenFunc),e.domain&&(a.qiniuImageURLPrefix=e.domain)}function u(e,t,n,o){if(null!=e)if(o&&r(o),a.qiniuUploadToken)s(e,t,n,o);else if(a.qiniuUploadTokenURL)c((function(){s(e,t,n,o)}));else{if(!a.qiniuUploadTokenFunction)return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");a.qiniuUploadToken=a.qiniuUploadTokenFunction()}else console.error("qiniu uploader need filePath to upload")}function s(e,t,n,o){var r=p(a.qiniuRegion),l=e.name;o&&o.key&&(l=o.key);var u=new window.FormData;u.append("token",a.qiniuUploadToken),u.append("key",l),u.append("file",e),i.a.post(r,u).then((function(e){t&&t(e)})).catch((function(e){n(e),console.log(e)}))}function c(e){i.a.get(a.qiniuUploadTokenURL).then((function(t){var n=t.data.uptoken;a.qiniuUploadToken=n,e&&e()})).catch((function(e){console.log(e)}))}function p(e){var t=null;switch(e){case"ECN":t="https://up.qbox.me";break;case"NCN":t="https://up-z1.qbox.me";break;case"SCN":t="https://up-z2.qbox.me";break;case"NA":t="https://up-na0.qbox.me";break;default:console.error("please make the region is with one of [ECN, SCN, NCN, NA]")}return t}t["a"]={init:r,upload:u}}}]);