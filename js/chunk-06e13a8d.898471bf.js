(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06e13a8d"],{"11a8":function(t,e,a){t.exports=a.p+"img/to_do_step1.2bb0ef04.png"},"46ce":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"to_do_main"},[n("div",{staticClass:"progress_step"},[n("div",{staticClass:"not_register",class:{active:1===t.todoStep},on:{click:function(e){return t.todoCenterStep(1)}}},[n("img",{attrs:{src:a("11a8")}}),n("span",[t._v("未完成用户注册")]),t.stepCount.unregister_count>0?n("span",[t._v(t._s(t.stepCount.unregister_count||0))]):t._e()]),n("img",{staticClass:"arrow_right",attrs:{src:a("9916")}}),n("div",{staticClass:"not_record",class:{active:2===t.todoStep},on:{click:function(e){return t.todoCenterStep(2)}}},[n("img",{attrs:{src:a("c755")}}),n("span",[t._v("未完成成员建档")]),t.stepCount.no_patient_count>0?n("span",[t._v(t._s(t.stepCount.no_patient_count||0))]):t._e()]),n("img",{staticClass:"arrow_right",attrs:{src:a("9916")}}),n("div",{staticClass:"not_into_doctor",class:{active:3===t.todoStep},on:{click:function(e){return t.todoCenterStep(3)}}},[n("img",{attrs:{src:a("b891")}}),n("span",[t._v("未完成入组医生")]),t.stepCount.not_in_mgmt_count>0?n("span",[t._v(t._s(t.stepCount.not_in_mgmt_count||0))]):t._e()]),n("img",{staticClass:"arrow_right",attrs:{src:a("9916")}}),n("div",{staticClass:"not_care_plan",class:{active:4===t.todoStep},on:{click:function(e){return t.todoCenterStep(4)}}},[n("img",{attrs:{src:a("daa3")}}),n("span",[t._v("未启动关爱计划")]),t.stepCount.not_join_care_plan_count>0?n("span",[t._v(t._s(t.stepCount.not_join_care_plan_count||0))]):t._e()])]),n("div",{staticClass:"header-box"},[n("el-form",{attrs:{"label-width":"auto"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:5}},[n("el-form-item",{staticClass:"margin_bottom"},[n("el-input",{attrs:{placeholder:t.placeholderValue(t.todoStep)},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.change(e)}},model:{value:t.searchValue,callback:function(e){t.searchValue="string"===typeof e?e.trim():e},expression:"searchValue"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),n("el-col",{attrs:{span:4}},[n("el-form-item",{staticClass:"margin_bottom"},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"是否关注服务号"},on:{change:t.change},model:{value:t.subscribe_official_account,callback:function(e){t.subscribe_official_account=e},expression:"subscribe_official_account"}},[n("el-option",{attrs:{label:"是否关注服务号",value:0}}),n("el-option",{attrs:{label:"已关注",value:1}}),n("el-option",{attrs:{label:"未关注",value:2}})],1)],1)],1),n("el-col",{attrs:{span:4}},[n("el-form-item",{staticClass:"margin_bottom"},[n("div",{staticClass:"channer",on:{click:t.channelRetrieval}},[t.contact_way_id_list.length<=0&&t.contact_way_name_list.length<=0?n("span",[t._v("全部渠道")]):n("span",{class:{select:!0}},[t._v(t._s(t.contact_way_name_list.toString()))]),n("i",{staticClass:"el-icon-arrow-down"})])])],1),4==t.todoStep?n("el-col",{attrs:{span:4}},[n("el-form-item",{staticClass:"margin_bottom"},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"是否支付设备押金"},on:{change:t.change},model:{value:t.facilityDeposit,callback:function(e){t.facilityDeposit=e},expression:"facilityDeposit"}},[n("el-option",{attrs:{label:"是否支付设备押金",value:-1}}),n("el-option",{attrs:{label:"已支付",value:1}}),n("el-option",{attrs:{label:"未获取支付信息",value:0}})],1)],1)],1):t._e(),4==t.todoStep?n("el-col",{attrs:{span:4}},[n("el-form-item",{staticClass:"margin_bottom"},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"是否推送启动消息"},on:{change:t.change},model:{value:t.pushLaunchMsg,callback:function(e){t.pushLaunchMsg=e},expression:"pushLaunchMsg"}},[n("el-option",{attrs:{label:"是否推送启动消息",value:-1}}),n("el-option",{attrs:{label:"已推送",value:1}}),n("el-option",{attrs:{label:"未推送",value:0}})],1)],1)],1):t._e()],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:18,sm:12,md:12,lg:9,xl:8}},[n("div",{staticClass:"friend_time",on:{click:t.chooseAddFriendTimeClick}},[1==t.todoStep?n("span",{staticClass:"add_friend1"},[t._v("添加好友时间：")]):n("el-dropdown",{on:{command:t.handleCommand}},[n("span",{staticClass:"add_friend2"},[t._v(t._s(t.addFriendTimeTips[t.addFriendTimeIndex-1])),n("i",{staticClass:"el-icon-arrow-down"}),t._v("：")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"1"}},[t._v("添加好友时间")]),n("el-dropdown-item",{attrs:{command:"2"}},[t._v("用户注册时间")]),t.todoStep>2?n("el-dropdown-item",{attrs:{command:"3"}},[t._v("首次建档时间")]):t._e()],1)],1),n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange",align:"left","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.change},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1)]),4!==t.todoStep?n("el-col",{attrs:{span:2}},[n("div",{staticStyle:{"line-height":"40px"}},[n("el-checkbox",{on:{change:t.change},model:{value:t.asthmaCarePlan,callback:function(e){t.asthmaCarePlan=e},expression:"asthmaCarePlan"}},[t._v("哮喘关爱计划")])],1)]):t._e(),n("el-col",{staticStyle:{"margin-top":"5px",float:"right"},attrs:{span:6}},[n("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.change}},[t._v(" 查询 ")]),n("el-button",{staticStyle:{float:"right","margin-left":"0"},on:{click:t.reset}},[t._v(" 重置 ")])],1)],1)],1)],1),n("div",{staticStyle:{margin:"0 16px","padding-top":"16px"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"todoTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",size:"small",stripe:"",height:"calc(100vh - 332px)"}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(e){return(t.page-1)*t.size+e+1}}}),n("el-table-column",{attrs:{prop:"name",label:"用户信息","min-width":"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==t.todoStep?n("div",[n("span",[t._v("unionid："+t._s(e.row.union_id||"--"))]),n("a",{staticClass:"ml10 blue",on:{click:function(a){return t.copyText(e.row.union_id)}}},[t._v("复制")]),n("br"),n("span",[t._v("昵 称："+t._s(e.row.nick_name||"--"))]),n("a",{staticClass:"ml10 blue",on:{click:function(a){return t.copyText(e.row.nick_name)}}},[t._v("复制")]),n("br")]):n("div",[n("span",[t._v("unionid："+t._s(e.row.union_id||"--"))]),n("a",{staticClass:"ml10 blue",on:{click:function(a){return t.copyText(e.row.union_id)}}},[t._v("复制")]),n("br"),n("span",[t._v("昵 称："+t._s(e.row.nick_name||"--"))]),n("a",{staticClass:"ml10 blue",on:{click:function(a){return t.copyText(e.row.nick_name)}}},[t._v("复制")]),n("br"),n("span",[t._v("手机号："+t._s(e.row.phone||"--"))]),n("a",{staticClass:"ml10 blue",on:{click:function(a){return t.copyText(e.row.phone)}}},[t._v("复制")]),n("br")])]}}])}),n("el-table-column",{attrs:{label:"服务信息","min-width":"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v("企微好友："+t._s(!0===e.row.subscribe_qywx?"已添加":"未添加")+t._s(!0===e.row.subscribe_qywx?"("+(e.row.qy_userid||"--")+")":"")),n("br")]),n("span",[t._v("哮喘管家："+t._s(!0===e.row.subscribe_miniapp?"已注册":"未注册")),n("br")]),n("span",[t._v("服务号："+t._s(!0===e.row.subscribe_official_account?"已关注":"未关注")),n("br")])]}}])}),n("el-table-column",{attrs:{label:"渠道信息",prop:"contact_way","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.contact_way||"--")),n("br")])]}}])}),n("el-table-column",{attrs:{label:"标签",prop:"label","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.tag_list_join(e.row.tag_list)))])]}}])}),n("el-table-column",{attrs:{label:"关键事件时间","min-width":"159"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v("添加好友时间：")]),n("span",[t._v(t._s(e.row.subscribe_qywx_time||"--")),n("br")]),t.todoStep>1?n("span",[t._v("用户注册时间：")]):t._e(),t.todoStep>1?n("span",[t._v(t._s(e.row.subscribe_miniapp_time||"--")),n("br")]):t._e(),t.todoStep>2?n("span",[t._v("首次建档时间：")]):t._e(),t.todoStep>2?n("span",[t._v(t._s(e.row.patient_add_time||"--")),n("br")]):t._e()]}}])}),t.todoStep>1?n("el-table-column",{attrs:{label:"家庭成员","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.todoStep?n("div",[n("span",[t._v("0人")])]):e.row.patient_list.length>0?n("div",[n("span",[t._v(t._s(e.row.patient_list.length)+"人")]),n("el-popover",{attrs:{placement:"left",trigger:"hover"},on:{show:function(a){return t.hoverPatientList(e.row.user_id)}}},[n("el-table",{attrs:{data:t.patient_data_list}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(e){return(t.page-1)*t.size+e+1}}}),n("el-table-column",{attrs:{width:"240",label:"基础信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name||"--")),n("br")]),n("span",[t._v(t._s(0===e.row.sex?"男":"女")+"/ "+t._s(e.row.age||"--")+"岁/ "+t._s(e.row.height||"--")+"cm/ "+t._s(e.row.weight||"--")+"kg")]),n("br"),n("span",[t._v(t._s(t.encryption(e.row)))]),n("br")]}}],null,!0)}),n("el-table-column",{attrs:{width:"90",property:"relation",align:"center",label:"成员关系"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.relation||"--")),n("br")])]}}],null,!0)}),n("el-table-column",{attrs:{width:"120",property:"sys_create_time",label:"建档时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sys_create_time||"--")),n("br")])]}}],null,!0)}),n("el-table-column",{attrs:{width:"230",label:"入组信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.mgmt_status?n("div",[n("span",[t._v("医生："+t._s(e.row.contract_doctor_name||"--")),n("br")]),n("span",[t._v("医院："+t._s(e.row.department_name||"--")),n("br")]),n("span",[t._v("门诊号："+t._s(e.row.menzhen_number||"--")),n("br")]),n("span",[t._v("入组时间："+t._s(e.row.in_time||"--")),n("br")])]):n("div",[n("span",[t._v("未入组"),n("br")])])]}}],null,!0)})],1),n("a",{staticClass:"ml10 blue",attrs:{slot:"reference"},slot:"reference"},[t._v("详情")]),n("br")],1),n("br"),n("span",{staticStyle:{"padding-right":"5px","padding-top":"3px"}},[t._v(t._s(e.row.patient_list[0].name)+"，")]),n("span",[t._v(t._s(1===e.row.patient_list[0].mgmt_status?"已入组":"未入组"))]),n("br"),e.row.patient_list.length>1?n("span",{staticStyle:{"padding-right":"5px"}},[t._v(t._s(e.row.patient_list[1].name)+"，")]):t._e(),e.row.patient_list.length>1?n("span",[t._v(t._s(1===e.row.patient_list[1].mgmt_status?"已入组":"未入组"))]):t._e(),n("br"),e.row.patient_list.length>2?n("span",[t._v("...")]):t._e(),n("br")],1):t._e()]}}],null,!1,3241524146)}):t._e(),4===t.todoStep?n("el-table-column",{attrs:{label:"支付设备押金","min-width":"125"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.pay_time&&e.row.pay_time.length>0?n("div",[n("span",[t._v("已支付")]),n("br"),n("span",[t._v("支付时间："+t._s(e.row.pay_time))]),n("br")]):n("div",[n("span",[t._v("未获取支付信息")]),n("br")])]}}],null,!1,3494863525)}):t._e(),n("el-table-column",{attrs:{label:4===t.todoStep?"启动消息推送记录":"企微提醒记录","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v("上次"+t._s(4===t.todoStep?"推送":"提醒")+"时间："+t._s(e.row.push_time||"--")),n("br")]),n("span",[t._v(t._s(4===t.todoStep?"推送":"提醒")+"人："+t._s(e.row.push_name||"--")),n("br")])]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":4===t.todoStep?180:110,align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{staticStyle:{"margin-right":"30px"},attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.remind(e.row)}}},[t._v(" "+t._s(4===t.todoStep?"推送启动消息":"提醒")+" ")]),n("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(a){return t.ignore(e.row)}}},[t._v(" 忽略 ")])]}}])})],1)],1),n("div",{staticStyle:{margin:"10px 16px 0px"},attrs:{align:"right"}},[n("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[20,50,100,200],"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"配置待办渠道",visible:t.configureTodoRouter,width:"1200px","before-close":t.handleClose},on:{"update:visible":function(e){t.configureTodoRouter=e}}},[n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"configTable",staticStyle:{width:"100%"},attrs:{data:t.channelData,border:"",size:"small",stripe:"",height:"400px"}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center",index:function(e){return(t.page-1)*t.size+e+1}}}),n("el-table-column",{attrs:{label:"渠道信息",prop:"contact_way","min-width":"370"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.level1_contact_way_name||"--")+"/"+t._s(e.row.level2_contact_way_name||"--")+"/"+t._s(e.row.name||"--")),n("br")])]}}])}),n("el-table-column",{attrs:{label:"待办标记","min-width":"270",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{model:{value:e.row.in_mgmt,callback:function(a){t.$set(e.row,"in_mgmt",a)},expression:"scoped.row.in_mgmt"}},[t._v("哮喘入组")]),n("el-checkbox",{model:{value:e.row.care_plan,callback:function(a){t.$set(e.row,"care_plan",a)},expression:"scoped.row.care_plan"}},[t._v("哮喘关爱计划")])]}}])}),n("el-table-column",{attrs:{label:"入组路径参数","min-width":"380",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-radio",{attrs:{disabled:!e.row.in_mgmt,label:1},on:{change:function(a){return t.switchIntoGroup(1,e.row)}},model:{value:e.row.in_mgmt_type,callback:function(a){t.$set(e.row,"in_mgmt_type",a)},expression:"scoped.row.in_mgmt_type"}},[t._v("医院")]),n("el-radio",{attrs:{disabled:!e.row.in_mgmt,label:2},on:{change:function(a){return t.switchIntoGroup(2,e.row)}},model:{value:e.row.in_mgmt_type,callback:function(a){t.$set(e.row,"in_mgmt_type",a)},expression:"scoped.row.in_mgmt_type"}},[t._v("医生")]),n("el-select",{attrs:{disabled:!e.row.in_mgmt},on:{change:t.chooseIntoGroup},model:{value:e.row.in_mgmt_param,callback:function(a){t.$set(e.row,"in_mgmt_param",a)},expression:"scoped.row.in_mgmt_param"}},t._l(e.row.dataList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSaveConfig}},[t._v("保 存")])],1)]),n("el-dialog",{attrs:{title:"选择渠道",visible:t.channelRouter,width:"1000px","before-close":t.closeChannel},on:{"update:visible":function(e){t.channelRouter=e}}},[n("div",{staticClass:"channel_router"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"chooseTable1",staticStyle:{width:"220px"},attrs:{data:t.primaryChannel,border:"",size:"small",stripe:"",height:"400px"}},[n("el-table-column",{attrs:{label:"一级渠道","min-width":"220"}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"chooseTable2",staticStyle:{width:"280px"},attrs:{data:t.secondaryChannel,border:"",size:"small",stripe:"",height:"400px"}},[n("el-table-column",{attrs:{label:"二级渠道","min-width":"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{on:{change:t.change},model:{value:t.pefUnusual,callback:function(e){t.pefUnusual=e},expression:"pefUnusual"}},[t._v(t._s(e.row||"--"))])]}}])})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"chooseTable3",staticStyle:{width:"450px"},attrs:{data:t.tertiaryChannel,border:"",size:"small",stripe:"",height:"400px"}},[n("el-table-column",{attrs:{label:"三级渠道","min-width":"450"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{on:{change:t.change},model:{value:t.pefUnusual,callback:function(e){t.pefUnusual=e},expression:"pefUnusual"}},[t._v(t._s(e.row||"--"))])]}}])})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.closeChannel}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)]),n("input",{staticStyle:{position:"absolute",left:"-999px"},attrs:{type:"text",id:"input"}}),n("ContactWay",{ref:"contactWay",attrs:{"null-channel-visible":!1},on:{getContactWayList:t.getContactWayList}})],1)},i=[],o=(a("99af"),a("7db0"),a("a15b"),a("d81d"),a("b0c0"),a("96cf"),a("1da1")),s=a("5530"),r=a("2f62"),l=a("a3d7"),c=a("a09d"),u=a("7d20"),d=a("bc3a"),p=a.n(d),_=a("4360"),h={name:"index",components:{ContactWay:c["a"]},data:function(){return{page:1,size:20,subscribe_official_account:void 0,tableLoading:!0,dialogConfigure:!0,asthmaCarePlan:void 0,dateRange:[],total:0,searchValue:"",tableData:[],primaryChannel:["全选","优呼吸互联网医院","优呼吸互联网医院","优呼吸互联网医院","优呼吸互联网医院","优呼吸互联网医院"],secondaryChannel:["全选","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室","优呼吸互联网医院/呼吸宣教室"],tertiaryChannel:["全选","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'","优呼吸互联网医院/呼吸宣教室/哮喘关爱计划单页'"],channelRouter:!1,todoStep:1,addFriendTimeTips:["添加好友时间","用户注册时间","首次建档时间"],addFriendTimeIndex:1,facilityDeposit:void 0,pushLaunchMsg:void 0,stepCount:[],channelData:[],patient_data_list:[],no_contact_way:void 0,contact_way_id_list:[],contact_way_name_list:[],doctorOptions:[],hospitalOptions:[],dataOptions:[],pickerOptions:u["a"]}},computed:Object(s["a"])({},Object(r["c"])({configureTodoRouter:"user/getConfigureTodoRouter"})),methods:Object(s["a"])(Object(s["a"])({},Object(r["d"])("user",["setDitchList"])),{},{change:function(t){this.page=1,this.setingArgs()},chooseIntoGroup:function(t){console.log(t)},setingArgs:function(){var t=0==this.subscribe_official_account||void 0==this.subscribe_official_account?void 0:1==this.subscribe_official_account,e=void 0,a=void 0;if(null!=this.dateRange&&this.dateRange.length>0){var n=this.dateRange.map((function(t,e){var a=new Date(t),n=a.getMonth()+1,i=a.getDate(),o=a.getFullYear(),s=n<10?"0".concat(n):n,r=i<10?"0".concat(i):i;return 1==e?"".concat(o,"-").concat(s,"-").concat(r," 23:59:59"):"".concat(o,"-").concat(s,"-").concat(r," 00:00:00")}));e=n[0],a=n[1]}var i=!!this.asthmaCarePlan||void 0,o=this.searchValue.length>0?this.searchValue:void 0,s=-1===this.facilityDeposit||void 0===this.facilityDeposit?void 0:1===this.facilityDeposit,r=-1===this.pushLaunchMsg||void 0===this.pushLaunchMsg?void 0:1===this.pushLaunchMsg;this.fetchTodoUserList({care_plan:i,data_type:this.todoStep,subscribe_official_account:t,search:o,start_time:e,end_time:a,time_type:null!=this.dateRange&&this.dateRange.length>0?this.addFriendTimeIndex:void 0,pushed:r,paid:s,no_contact_way:!!this.no_contact_way||void 0,contact_way_id_list:this.no_contact_way?void 0:this.contact_way_id_list})},placeholderValue:function(t){return 1==t?"输入用户昵称查找":"输入用户昵称/手机号查找"},reset:function(){this.page=1,this.searchValue="",this.subscribe_official_account=void 0,this.facilityDeposit=void 0,this.pushLaunchMsg=void 0,this.asthmaCarePlan=!1,this.dateRange={},this.no_contact_way=void 0,this.contact_way_id_list=[],this.contact_way_name_list=[],this.setingArgs()},handleSizeChange:function(t){this.size=t,this.setingArgs()},handleCurrentChange:function(t){this.page=t,this.setingArgs()},copyText:function(t){var e=document.getElementById("input");e.value=t,e.select(),document.execCommand("Copy"),this.$message({type:"success",message:"复制成功"})},handleClose:function(t){this.$store.commit("user/setConfigureTodoRouter",!1)},handleSaveConfig:function(){var t=this,e=[],a=[];this.channelData.map((function(t){t.in_mgmt&&e.push({contact_way_id:t.contact_way_id,in_mgmt_param:t.in_mgmt_param,in_mgmt_type:t.in_mgmt_type}),t.care_plan&&a.push(t.contact_way_id)}));var n=e.find((function(t){return null!=t.contact_way_id&&null==t.in_mgmt_type}));if(void 0==n){var i=e.find((function(t){return null!=t.in_mgmt_type&&null==t.in_mgmt_param}));void 0==i?Object(l["contact_way"])({care_plan_contact_way_id_list:a,in_mgmt_contact_way_list:e}).then((function(e){t.$refs.contactWay.contactwayTree(),t.$store.commit("user/setConfigureTodoRouter",!1)})).catch((function(t){})):this.$message({type:"warning",message:"请选择医院/医生"})}else this.$message({type:"warning",message:"请选择入组路径参数"})},closeChannel:function(){this.channelRouter=!1},channelRetrieval:function(){this.$refs.contactWay.channelVisible=!0},getContactWayList:function(t,e,a){e?(this.no_contact_way=e,this.contact_way_id_list=null,this.contact_way_name_list=["无渠道"]):(this.no_contact_way=null,this.contact_way_id_list=t,this.contact_way_name_list=a),this.setingArgs()},remind:function(t){var e=this,a=4===this.todoStep?"推送启动消息":"提醒";this.$confirm("是否确认".concat(a,"？")).then((function(a){4===e.todoStep?e.pushMessage(t.miniapp_openid):e.remindMessage(t.user_id)})).catch((function(t){}))},ignore:function(t){var e=this;this.$confirm("是否确认忽略？").then((function(a){e.$api.to_doList.ignoreUser(t.user_id).then((function(t){e.setingArgs(),e.$message({type:"success",message:"忽略成功"})}))})).catch((function(t){}))},pushMessage:function(t){var e=this.$api.patientmgmt.joinMessage({open_id:t}),a=e.data;this.setingArgs(),this.$message({type:0==a.errcode?"success":"error",message:0==a.errcode?"推送成功":"推送失败"})},remindMessage:function(t){var e=this;this.$api.to_doList.remindUser(t).then((function(t){e.setingArgs(),e.$message({type:0==t.data.errcode?"success":"error",message:0==t.data.errcode?"提醒成功":"提醒失败，本月次数已用完"})}))},todoCenterStep:function(t){var e=this;this.todoStep=t,this.page=1,this.setingArgs(),this.$nextTick((function(){e.$refs.todoTable.doLayout()}))},chooseAddFriendTimeClick:function(){this.todoStep},handleCommand:function(t){this.addFriendTimeIndex=t},fetchTodoUserList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$api.to_doList.todo_user_list(Object(s["a"])({page:e.page,size:e.size},t));case 2:n=a.sent,i=n.data,0==i.errcode&&(e.total=i.data.total_count,e.stepCount=i.data,e.tableData=i.data.list),e.tableLoading=!1;case 6:case"end":return a.stop()}}),a)})))()},tag_list_join:function(t){if(void 0==t)return"--";var e=[];return t.length>0&&(e=t.map((function(t){return t.name}))),e.length>0?e.join(","):"--"},contactwayTree:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},fetchChannelList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.contactway.thirdLevelList({page:t.page,size:1e3});case 2:a=e.sent,n=a.data,0==n.errcode&&(t.channelData=n.data.list.map((function(e){var a=null;return null!=e.in_mgmt_type&&(a=1==e.in_mgmt_type?t.hospitalOptions:t.doctorOptions),Object(s["a"])(Object(s["a"])({},e),{},{in_mgmt:null!=e.in_mgmt&&e.in_mgmt,care_plan:null!=e.care_plan&&e.care_plan,hosList:t.hospitalOptions,docList:t.doctorOptions,dataList:a})})));case 5:case"end":return e.stop()}}),e)})))()},hoverPatientList:function(t){var e=this;Object(l["bindpatient_userId"])(t).then((function(t){var a=t.data;0===a.errcode&&(e.patient_data_list=a.data.list)})).catch((function(t){}))},encryption:function(t){var e,a=t.id_card||t.patient_code;switch(t.code_type){case 0:e="身份证号："+a.substr(0,3)+"***********"+a.substr(a.length-5,a.length-1);break;case 1:e="护照号："+a.substr(0,1)+"***********"+a.substr(a.length-3,a.length-1);break;case 2:e="通行号："+a.substr(0,1)+"***********"+a.substr(a.length-3,a.length-1);break;default:e="--"}return e},switchIntoGroup:function(t,e){e.in_mgmt_param=null,e.dataList=null,e.dataList=1==t?e.hosList:e.docList},fetchAccountList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=window.serverConfig.VUE_APP_MGMT_URL+"/account/list",n=_["a"].getters["user/getToken"],p.a.post(a,{},{headers:{Authorization:"Bearer "+n}}).then((function(e){0==e.data.errcode&&e.data.data.list.map((function(e){t.doctorOptions.push({label:e.realname,value:e.account_id})}))})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},fetchHospitalList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.deptment.department();case 2:a=e.sent,n=a.data,0==n.errcode&&n.data.list.map((function(e){t.hospitalOptions.push({label:e.dept_name,value:e.dept_id})}));case 5:case"end":return e.stop()}}),e)})))()}}),created:function(){this.fetchAccountList(),this.fetchHospitalList(),this.fetchTodoUserList({data_type:1}),this.contactwayTree(),this.fetchChannelList()}},m=h,g=(a("ac87"),a("2877")),f=Object(g["a"])(m,n,i,!1,null,"1778b236",null);e["default"]=f.exports},"7db0":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").find,o=a("44d2"),s=a("ae40"),r="find",l=!0,c=s(r);r in[]&&Array(1)[r]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(r)},9916:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQqADAAQAAAABAAAAPAAAAACuT9+5AAAEJ0lEQVRoBeWbz2sTQRTHZyapUmmTHPovaJKDRTyLh0ptNuJJsAoiiKDgQVAUBA/eREEsgngSBEUo1KpgMWlL1YMooic9NKl48iYKSZqqmB/jvMCE3WR/zGZnh0myUGZ3dva973w6P97MZhHqOF4XKxMvC6W1XKE62XErtMt8oXQjVyxfC82BgGFsLgMQ/tLmGqVoEmH8E6PIASM19tlcRuY5pZTki5v3KG2eBbsEoauZdOK6TB+ittogLBD40yHC+ETpyI9i5RGidJa7a6UYXcmmEjcteQouWiBsIXDnIcB4952OlrYqiwyCwd1YU3I5m47dsuaFe4VdIXDfEmGsfqPxeq2yxLrFPm7eLsUEXzSS8Tm7e2HkETYmzLfGBDfrlE5Q1JAygNb+VRa8IIAU2qS3c4XyeTdZMu+RKI1egIHR06gkGBhHLgn5AxiU3mGzyTlPbRIKkOn02JcRGpkSEicBBsxCMBsJ+YMKUnQ3t15qzSoS6utooj1rrK5Xd9dw4xX7N0w4luY3JIwZEKdAdxPxhzGm7O9MJhm7zyXITtsgwLD2MBA+nUnFHsiGAPYsICBDZxisOzUJRqcyyfhD0Crz6AIBxnWHwSSezKbij0MH0QcwGhijEyzOmJcFw7ZFcOOat4wGRvS4kUoscL1BUlcQYFhnGBjhOkbkWCY9vhgEAjzrCQIKaQ6jRgg+OpOMPQetvR5CIMC47jAowkfYQu1FryDYFoDYARGocESoOAKliI6wEPQJC8ezYrXpLiUMAh71FR4rhsFAbGPh+NN8oZzprqZ3ji8QusNgi7TtFKFnyxulae+qW0sIjxHWxxDys1aABVbQbT9//tAfjKOHjeTYWqdup+ueQYBBf+IUw0DoN4N/yEiPv3GqvDnfd9cwP6z3mIF2INRYWt7Y3G/W7HQeqEVwozq3DFbBKiLEMJKxt1yvXSoFBBjWGQYLGzdxhMwYO2Pv7SBAnjQQYExnGGyRVmER6MGZXfEPoLXzkAoCjGsOo8xmsGm2av3YCSLQYNlpDK51HkDZbn2cxRor+a9bezu1SwehOwwWfSZovb66slHdY4YhvWuYjWvdTRD+hXBkClowaA6lRZhhqDyPstWXqD/KdnXMZUNrEapbQ9BtglBA9BsEaBnSQfQjBOkg+hWCVBD9DEEaiH6HIAXEIEAIDGJQIAQCMUgQegYxaBB6AjGIEHyDGFQIvkAMMgRhEIMOQQjEMEDwBDEsEFxBDBMERxDDBsEWxDBC6AIxrBAsIIYZQhuEagiq/UFFvQ6sWpRqf14A+H32KqA+x3b4lfwiH5yq9scr6pWSUUxm2Zti9y/5JPz0hwtR7Y/79Upb2/mu33VJhMDFqPbH/bql7fcatuJCgMDFqPbH/TqlbRBQwCIuRAhcjGp/3K9QCuJUfhKt2p8ThP9aUI8k8rWxFQAAAABJRU5ErkJggg=="},"9c18":function(t,e,a){},a15b:function(t,e,a){"use strict";var n=a("23e7"),i=a("44ad"),o=a("fc6a"),s=a("a640"),r=[].join,l=i!=Object,c=s("join",",");n({target:"Array",proto:!0,forced:l||!c},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},ac87:function(t,e,a){"use strict";var n=a("9c18"),i=a.n(n);i.a},b891:function(t,e,a){t.exports=a.p+"img/to_do_step3.4772552a.png"},c755:function(t,e){t.exports="data:image/png;base64,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"},daa3:function(t,e,a){t.exports=a.p+"img/to_do_step4.55916632.png"}}]);