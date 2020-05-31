// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.functions');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__23986 = cljs.core.seq.call(null,props);
var chunk__23988 = null;
var count__23989 = (0);
var i__23990 = (0);
while(true){
if((i__23990 < count__23989)){
var vec__23998 = cljs.core._nth.call(null,chunk__23988,i__23990);
var k = cljs.core.nth.call(null,vec__23998,(0),null);
var v = cljs.core.nth.call(null,vec__23998,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24004 = seq__23986;
var G__24005 = chunk__23988;
var G__24006 = count__23989;
var G__24007 = (i__23990 + (1));
seq__23986 = G__24004;
chunk__23988 = G__24005;
count__23989 = G__24006;
i__23990 = G__24007;
continue;
} else {
var G__24008 = seq__23986;
var G__24009 = chunk__23988;
var G__24010 = count__23989;
var G__24011 = (i__23990 + (1));
seq__23986 = G__24008;
chunk__23988 = G__24009;
count__23989 = G__24010;
i__23990 = G__24011;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23986);
if(temp__5457__auto__){
var seq__23986__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23986__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23986__$1);
var G__24012 = cljs.core.chunk_rest.call(null,seq__23986__$1);
var G__24013 = c__4550__auto__;
var G__24014 = cljs.core.count.call(null,c__4550__auto__);
var G__24015 = (0);
seq__23986 = G__24012;
chunk__23988 = G__24013;
count__23989 = G__24014;
i__23990 = G__24015;
continue;
} else {
var vec__24001 = cljs.core.first.call(null,seq__23986__$1);
var k = cljs.core.nth.call(null,vec__24001,(0),null);
var v = cljs.core.nth.call(null,vec__24001,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24016 = cljs.core.next.call(null,seq__23986__$1);
var G__24017 = null;
var G__24018 = (0);
var G__24019 = (0);
seq__23986 = G__24016;
chunk__23988 = G__24017;
count__23989 = G__24018;
i__23990 = G__24019;
continue;
} else {
var G__24020 = cljs.core.next.call(null,seq__23986__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23986 = G__24020;
chunk__23988 = G__24021;
count__23989 = G__24022;
i__23990 = G__24023;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24025_SHARP_,p2__24024_SHARP_){
return p2__24024_SHARP_.call(null,p1__24025_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24027_SHARP_,p2__24026_SHARP_){
return p2__24026_SHARP_.call(null,old_state,p1__24027_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4131__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24028_SHARP_){
return p1__24028_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24030 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24030,(0),null);
var next_state = cljs.core.nth.call(null,vec__24030,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24029_SHARP_){
return p1__24029_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = c.call(null);
return ctr.apply(ctr,arguments);
});
var x24033_24034 = f;
x24033_24034.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x24033_24034.cljs$core$IMeta$_meta$arity$1 = ((function (x24033_24034,f){
return (function (_){
var ___$1 = this;
return cljs.core.meta.call(null,c.call(null));
});})(x24033_24034,f))
;


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return ctor.call(null,render,mixins,display_name);
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_.call(null,c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?((function (class$,key_fn){
return (function() { 
var G__24035__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__24035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24036__i = 0, G__24036__a = new Array(arguments.length -  0);
while (G__24036__i < G__24036__a.length) {G__24036__a[G__24036__i] = arguments[G__24036__i + 0]; ++G__24036__i;}
  args = new cljs.core.IndexedSeq(G__24036__a,0,null);
} 
return G__24035__delegate.call(this,args);};
G__24035.cljs$lang$maxFixedArity = 0;
G__24035.cljs$lang$applyTo = (function (arglist__24037){
var args = cljs.core.seq(arglist__24037);
return G__24035__delegate(args);
});
G__24035.cljs$core$IFn$_invoke$arity$variadic = G__24035__delegate;
return G__24035;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24038__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24039__i = 0, G__24039__a = new Array(arguments.length -  0);
while (G__24039__i < G__24039__a.length) {G__24039__a[G__24039__i] = arguments[G__24039__i + 0]; ++G__24039__i;}
  args = new cljs.core.IndexedSeq(G__24039__a,0,null);
} 
return G__24038__delegate.call(this,args);};
G__24038.cljs$lang$maxFixedArity = 0;
G__24038.cljs$lang$applyTo = (function (arglist__24040){
var args = cljs.core.seq(arglist__24040);
return G__24038__delegate(args);
});
G__24038.cljs$core$IFn$_invoke$arity$variadic = G__24038__delegate;
return G__24038;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.call(null,(prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5459__auto__ = React.memo;
if((temp__5459__auto__ == null)){
return f;
} else {
var memo = temp__5459__auto__;
return memo.call(null,f,rum.core.memo_compare_props);
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.call(null,mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo.call(null,class$);
var ctor = ((function (class$,_,memo_class){
return (function() { 
var G__24041__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__24041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24042__i = 0, G__24042__a = new Array(arguments.length -  0);
while (G__24042__i < G__24042__a.length) {G__24042__a[G__24042__i] = arguments[G__24042__i + 0]; ++G__24042__i;}
  args = new cljs.core.IndexedSeq(G__24042__a,0,null);
} 
return G__24041__delegate.call(this,args);};
G__24041.cljs$lang$maxFixedArity = 0;
G__24041.cljs$lang$applyTo = (function (arglist__24043){
var args = cljs.core.seq(arglist__24043);
return G__24041__delegate(args);
});
G__24041.cljs$core$IFn$_invoke$arity$variadic = G__24041__delegate;
return G__24041;
})()
;})(class$,_,memo_class))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24044__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24045__i = 0, G__24045__a = new Array(arguments.length -  0);
while (G__24045__i < G__24045__a.length) {G__24045__a[G__24045__i] = arguments[G__24045__i + 0]; ++G__24045__i;}
  args = new cljs.core.IndexedSeq(G__24045__a,0,null);
} 
return G__24044__delegate.call(this,args);};
G__24044.cljs$lang$maxFixedArity = 0;
G__24044.cljs$lang$applyTo = (function (arglist__24046){
var args = cljs.core.seq(arglist__24046);
return G__24044__delegate(args);
});
G__24044.cljs$core$IFn$_invoke$arity$variadic = G__24044__delegate;
return G__24044;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof window !== 'undefined');
if(and__4120__auto__){
var or__4131__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (p1__24047_SHARP_){
return setTimeout(p1__24047_SHARP_,(16));
});
;})(or__4131__auto__))
}
})();
rum.core.batch = (function (){var or__4131__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__4131__auto____$1,or__4131__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24048 = cljs.core.seq.call(null,queue);
var chunk__24050 = null;
var count__24051 = (0);
var i__24052 = (0);
while(true){
if((i__24052 < count__24051)){
var comp = cljs.core._nth.call(null,chunk__24050,i__24052);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__24054 = seq__24048;
var G__24055 = chunk__24050;
var G__24056 = count__24051;
var G__24057 = (i__24052 + (1));
seq__24048 = G__24054;
chunk__24050 = G__24055;
count__24051 = G__24056;
i__24052 = G__24057;
continue;
} else {
var G__24058 = seq__24048;
var G__24059 = chunk__24050;
var G__24060 = count__24051;
var G__24061 = (i__24052 + (1));
seq__24048 = G__24058;
chunk__24050 = G__24059;
count__24051 = G__24060;
i__24052 = G__24061;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24048);
if(temp__5457__auto__){
var seq__24048__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24048__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24048__$1);
var G__24062 = cljs.core.chunk_rest.call(null,seq__24048__$1);
var G__24063 = c__4550__auto__;
var G__24064 = cljs.core.count.call(null,c__4550__auto__);
var G__24065 = (0);
seq__24048 = G__24062;
chunk__24050 = G__24063;
count__24051 = G__24064;
i__24052 = G__24065;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24048__$1);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__24066 = cljs.core.next.call(null,seq__24048__$1);
var G__24067 = null;
var G__24068 = (0);
var G__24069 = (0);
seq__24048 = G__24066;
chunk__24050 = G__24067;
count__24051 = G__24068;
i__24052 = G__24069;
continue;
} else {
var G__24070 = cljs.core.next.call(null,seq__24048__$1);
var G__24071 = null;
var G__24072 = (0);
var G__24073 = (0);
seq__24048 = G__24070;
chunk__24050 = G__24071;
count__24051 = G__24072;
i__24052 = G__24073;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__24075 = arguments.length;
switch (G__24075) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__24077 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__24078 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__24078;

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24079 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24079,(0),null);
var next_state = cljs.core.nth.call(null,vec__24079,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24082_24094 = cljs.core.seq.call(null,old_reactions);
var chunk__24083_24095 = null;
var count__24084_24096 = (0);
var i__24085_24097 = (0);
while(true){
if((i__24085_24097 < count__24084_24096)){
var ref_24098 = cljs.core._nth.call(null,chunk__24083_24095,i__24085_24097);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24098)){
} else {
cljs.core.remove_watch.call(null,ref_24098,key);
}


var G__24099 = seq__24082_24094;
var G__24100 = chunk__24083_24095;
var G__24101 = count__24084_24096;
var G__24102 = (i__24085_24097 + (1));
seq__24082_24094 = G__24099;
chunk__24083_24095 = G__24100;
count__24084_24096 = G__24101;
i__24085_24097 = G__24102;
continue;
} else {
var temp__5457__auto___24103 = cljs.core.seq.call(null,seq__24082_24094);
if(temp__5457__auto___24103){
var seq__24082_24104__$1 = temp__5457__auto___24103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24082_24104__$1)){
var c__4550__auto___24105 = cljs.core.chunk_first.call(null,seq__24082_24104__$1);
var G__24106 = cljs.core.chunk_rest.call(null,seq__24082_24104__$1);
var G__24107 = c__4550__auto___24105;
var G__24108 = cljs.core.count.call(null,c__4550__auto___24105);
var G__24109 = (0);
seq__24082_24094 = G__24106;
chunk__24083_24095 = G__24107;
count__24084_24096 = G__24108;
i__24085_24097 = G__24109;
continue;
} else {
var ref_24110 = cljs.core.first.call(null,seq__24082_24104__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24110)){
} else {
cljs.core.remove_watch.call(null,ref_24110,key);
}


var G__24111 = cljs.core.next.call(null,seq__24082_24104__$1);
var G__24112 = null;
var G__24113 = (0);
var G__24114 = (0);
seq__24082_24094 = G__24111;
chunk__24083_24095 = G__24112;
count__24084_24096 = G__24113;
i__24085_24097 = G__24114;
continue;
}
} else {
}
}
break;
}

var seq__24086_24115 = cljs.core.seq.call(null,new_reactions);
var chunk__24087_24116 = null;
var count__24088_24117 = (0);
var i__24089_24118 = (0);
while(true){
if((i__24089_24118 < count__24088_24117)){
var ref_24119 = cljs.core._nth.call(null,chunk__24087_24116,i__24089_24118);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24119)){
} else {
cljs.core.add_watch.call(null,ref_24119,key,((function (seq__24086_24115,chunk__24087_24116,count__24088_24117,i__24089_24118,ref_24119,comp,old_reactions,vec__24079,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24077,_STAR_reactions_STAR__temp_val__24078){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24086_24115,chunk__24087_24116,count__24088_24117,i__24089_24118,ref_24119,comp,old_reactions,vec__24079,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24077,_STAR_reactions_STAR__temp_val__24078))
);
}


var G__24120 = seq__24086_24115;
var G__24121 = chunk__24087_24116;
var G__24122 = count__24088_24117;
var G__24123 = (i__24089_24118 + (1));
seq__24086_24115 = G__24120;
chunk__24087_24116 = G__24121;
count__24088_24117 = G__24122;
i__24089_24118 = G__24123;
continue;
} else {
var temp__5457__auto___24124 = cljs.core.seq.call(null,seq__24086_24115);
if(temp__5457__auto___24124){
var seq__24086_24125__$1 = temp__5457__auto___24124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24086_24125__$1)){
var c__4550__auto___24126 = cljs.core.chunk_first.call(null,seq__24086_24125__$1);
var G__24127 = cljs.core.chunk_rest.call(null,seq__24086_24125__$1);
var G__24128 = c__4550__auto___24126;
var G__24129 = cljs.core.count.call(null,c__4550__auto___24126);
var G__24130 = (0);
seq__24086_24115 = G__24127;
chunk__24087_24116 = G__24128;
count__24088_24117 = G__24129;
i__24089_24118 = G__24130;
continue;
} else {
var ref_24131 = cljs.core.first.call(null,seq__24086_24125__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24131)){
} else {
cljs.core.add_watch.call(null,ref_24131,key,((function (seq__24086_24115,chunk__24087_24116,count__24088_24117,i__24089_24118,ref_24131,seq__24086_24125__$1,temp__5457__auto___24124,comp,old_reactions,vec__24079,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24077,_STAR_reactions_STAR__temp_val__24078){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24086_24115,chunk__24087_24116,count__24088_24117,i__24089_24118,ref_24131,seq__24086_24125__$1,temp__5457__auto___24124,comp,old_reactions,vec__24079,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__24077,_STAR_reactions_STAR__temp_val__24078))
);
}


var G__24132 = cljs.core.next.call(null,seq__24086_24125__$1);
var G__24133 = null;
var G__24134 = (0);
var G__24135 = (0);
seq__24086_24115 = G__24132;
chunk__24087_24116 = G__24133;
count__24088_24117 = G__24134;
i__24089_24118 = G__24135;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__24077;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24136 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24090_24137 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24091_24138 = null;
var count__24092_24139 = (0);
var i__24093_24140 = (0);
while(true){
if((i__24093_24140 < count__24092_24139)){
var ref_24141 = cljs.core._nth.call(null,chunk__24091_24138,i__24093_24140);
cljs.core.remove_watch.call(null,ref_24141,key_24136);


var G__24142 = seq__24090_24137;
var G__24143 = chunk__24091_24138;
var G__24144 = count__24092_24139;
var G__24145 = (i__24093_24140 + (1));
seq__24090_24137 = G__24142;
chunk__24091_24138 = G__24143;
count__24092_24139 = G__24144;
i__24093_24140 = G__24145;
continue;
} else {
var temp__5457__auto___24146 = cljs.core.seq.call(null,seq__24090_24137);
if(temp__5457__auto___24146){
var seq__24090_24147__$1 = temp__5457__auto___24146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24090_24147__$1)){
var c__4550__auto___24148 = cljs.core.chunk_first.call(null,seq__24090_24147__$1);
var G__24149 = cljs.core.chunk_rest.call(null,seq__24090_24147__$1);
var G__24150 = c__4550__auto___24148;
var G__24151 = cljs.core.count.call(null,c__4550__auto___24148);
var G__24152 = (0);
seq__24090_24137 = G__24149;
chunk__24091_24138 = G__24150;
count__24092_24139 = G__24151;
i__24093_24140 = G__24152;
continue;
} else {
var ref_24153 = cljs.core.first.call(null,seq__24090_24147__$1);
cljs.core.remove_watch.call(null,ref_24153,key_24136);


var G__24154 = cljs.core.next.call(null,seq__24090_24147__$1);
var G__24155 = null;
var G__24156 = (0);
var G__24157 = (0);
seq__24090_24137 = G__24154;
chunk__24091_24138 = G__24155;
count__24092_24139 = G__24156;
i__24093_24140 = G__24157;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24164 = arguments.length;
var i__4731__auto___24165 = (0);
while(true){
if((i__4731__auto___24165 < len__4730__auto___24164)){
args__4736__auto__.push((arguments[i__4731__auto___24165]));

var G__24166 = (i__4731__auto___24165 + (1));
i__4731__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24161){
var map__24162 = p__24161;
var map__24162__$1 = (((((!((map__24162 == null))))?(((((map__24162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24162):map__24162);
var options = map__24162__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24158){
var G__24159 = cljs.core.first.call(null,seq24158);
var seq24158__$1 = cljs.core.next.call(null,seq24158);
var G__24160 = cljs.core.first.call(null,seq24158__$1);
var seq24158__$2 = cljs.core.next.call(null,seq24158__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24159,G__24160,seq24158__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24170 = arguments.length;
var i__4731__auto___24171 = (0);
while(true){
if((i__4731__auto___24171 < len__4730__auto___24170)){
args__4736__auto__.push((arguments[i__4731__auto___24171]));

var G__24172 = (i__4731__auto___24171 + (1));
i__4731__auto___24171 = G__24172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24167){
var G__24168 = cljs.core.first.call(null,seq24167);
var seq24167__$1 = cljs.core.next.call(null,seq24167);
var G__24169 = cljs.core.first.call(null,seq24167__$1);
var seq24167__$2 = cljs.core.next.call(null,seq24167__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24168,G__24169,seq24167__$2);
});

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [event value] event))
 * 
 *   (defmethod value-reducer :inc [_ value]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__24174_SHARP_,p2__24173_SHARP_){
return reducer_fn.call(null,p2__24173_SHARP_,p1__24174_SHARP_);
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__24176 = arguments.length;
switch (G__24176) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4131__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
}));
});

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4131__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__24179 = arguments.length;
switch (G__24179) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
});

rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_callback.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__24182 = arguments.length;
switch (G__24182) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
});

rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
});

rum.core.use_memo.cljs$lang$maxFixedArity = 2;

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return ref.current = value;
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__24185 = arguments.length;
switch (G__24185) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.call(null,element,null);
});

rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
});

rum.core.render_html.cljs$lang$maxFixedArity = 2;

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=core.js.map
