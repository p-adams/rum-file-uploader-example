// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23343__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23340 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23341 = cljs.core.seq.call(null,vec__23340);
var first__23342 = cljs.core.first.call(null,seq__23341);
var seq__23341__$1 = cljs.core.next.call(null,seq__23341);
var tag = first__23342;
var body = seq__23341__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23344__i = 0, G__23344__a = new Array(arguments.length -  0);
while (G__23344__i < G__23344__a.length) {G__23344__a[G__23344__i] = arguments[G__23344__i + 0]; ++G__23344__i;}
  args = new cljs.core.IndexedSeq(G__23344__a,0,null);
} 
return G__23343__delegate.call(this,args);};
G__23343.cljs$lang$maxFixedArity = 0;
G__23343.cljs$lang$applyTo = (function (arglist__23345){
var args = cljs.core.seq(arglist__23345);
return G__23343__delegate(args);
});
G__23343.cljs$core$IFn$_invoke$arity$variadic = G__23343__delegate;
return G__23343;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__23346(s__23347){
return (new cljs.core.LazySeq(null,(function (){
var s__23347__$1 = s__23347;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23347__$1);
if(temp__5457__auto__){
var s__23347__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23347__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23347__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23349 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23348 = (0);
while(true){
if((i__23348 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__23348);
cljs.core.chunk_append.call(null,b__23349,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23350 = (i__23348 + (1));
i__23348 = G__23350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23349),sablono$core$update_arglists_$_iter__23346.call(null,cljs.core.chunk_rest.call(null,s__23347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23349),null);
}
} else {
var args = cljs.core.first.call(null,s__23347__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23346.call(null,cljs.core.rest.call(null,s__23347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23356 = arguments.length;
var i__4731__auto___23357 = (0);
while(true){
if((i__4731__auto___23357 < len__4730__auto___23356)){
args__4736__auto__.push((arguments[i__4731__auto___23357]));

var G__23358 = (i__4731__auto___23357 + (1));
i__4731__auto___23357 = G__23358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__23352(s__23353){
return (new cljs.core.LazySeq(null,(function (){
var s__23353__$1 = s__23353;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23353__$1);
if(temp__5457__auto__){
var s__23353__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23353__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23353__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23355 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23354 = (0);
while(true){
if((i__23354 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__23354);
cljs.core.chunk_append.call(null,b__23355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23359 = (i__23354 + (1));
i__23354 = G__23359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23355),sablono$core$iter__23352.call(null,cljs.core.chunk_rest.call(null,s__23353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23355),null);
}
} else {
var style = cljs.core.first.call(null,s__23353__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23352.call(null,cljs.core.rest.call(null,s__23353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23351));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23360 = (function sablono$core$link_to23360(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23363 = arguments.length;
var i__4731__auto___23364 = (0);
while(true){
if((i__4731__auto___23364 < len__4730__auto___23363)){
args__4736__auto__.push((arguments[i__4731__auto___23364]));

var G__23365 = (i__4731__auto___23364 + (1));
i__4731__auto___23364 = G__23365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23360.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to23360.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23360.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23360.cljs$lang$applyTo = (function (seq23361){
var G__23362 = cljs.core.first.call(null,seq23361);
var seq23361__$1 = cljs.core.next.call(null,seq23361);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23362,seq23361__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23360);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23366 = (function sablono$core$mail_to23366(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23373 = arguments.length;
var i__4731__auto___23374 = (0);
while(true){
if((i__4731__auto___23374 < len__4730__auto___23373)){
args__4736__auto__.push((arguments[i__4731__auto___23374]));

var G__23375 = (i__4731__auto___23374 + (1));
i__4731__auto___23374 = G__23375;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23366.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to23366.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23369){
var vec__23370 = p__23369;
var content = cljs.core.nth.call(null,vec__23370,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23366.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23366.cljs$lang$applyTo = (function (seq23367){
var G__23368 = cljs.core.first.call(null,seq23367);
var seq23367__$1 = cljs.core.next.call(null,seq23367);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23368,seq23367__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23366);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23376 = (function sablono$core$unordered_list23376(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list23376_$_iter__23377(s__23378){
return (new cljs.core.LazySeq(null,(function (){
var s__23378__$1 = s__23378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23378__$1);
if(temp__5457__auto__){
var s__23378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23378__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23378__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23380 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23379 = (0);
while(true){
if((i__23379 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23379);
cljs.core.chunk_append.call(null,b__23380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23381 = (i__23379 + (1));
i__23379 = G__23381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23380),sablono$core$unordered_list23376_$_iter__23377.call(null,cljs.core.chunk_rest.call(null,s__23378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23380),null);
}
} else {
var x = cljs.core.first.call(null,s__23378__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23376_$_iter__23377.call(null,cljs.core.rest.call(null,s__23378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23376);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23382 = (function sablono$core$ordered_list23382(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list23382_$_iter__23383(s__23384){
return (new cljs.core.LazySeq(null,(function (){
var s__23384__$1 = s__23384;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23384__$1);
if(temp__5457__auto__){
var s__23384__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23384__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23384__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23386 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23385 = (0);
while(true){
if((i__23385 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23385);
cljs.core.chunk_append.call(null,b__23386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23387 = (i__23385 + (1));
i__23385 = G__23387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23386),sablono$core$ordered_list23382_$_iter__23383.call(null,cljs.core.chunk_rest.call(null,s__23384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23386),null);
}
} else {
var x = cljs.core.first.call(null,s__23384__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23382_$_iter__23383.call(null,cljs.core.rest.call(null,s__23384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23382);
/**
 * Create an image element.
 */
sablono.core.image23388 = (function sablono$core$image23388(var_args){
var G__23390 = arguments.length;
switch (G__23390) {
case 1:
return sablono.core.image23388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23388.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23388.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23388.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23388);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23392_SHARP_,p2__23393_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23392_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23393_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23394_SHARP_,p2__23395_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23394_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23395_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23397 = arguments.length;
switch (G__23397) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23399 = (function sablono$core$color_field23399(var_args){
var G__23401 = arguments.length;
switch (G__23401) {
case 1:
return sablono.core.color_field23399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23399.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23330__auto__);
});

sablono.core.color_field23399.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.color_field23399.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23399);

/**
 * Creates a date input field.
 */
sablono.core.date_field23402 = (function sablono$core$date_field23402(var_args){
var G__23404 = arguments.length;
switch (G__23404) {
case 1:
return sablono.core.date_field23402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23402.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23330__auto__);
});

sablono.core.date_field23402.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.date_field23402.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23402);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23405 = (function sablono$core$datetime_field23405(var_args){
var G__23407 = arguments.length;
switch (G__23407) {
case 1:
return sablono.core.datetime_field23405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23405.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23330__auto__);
});

sablono.core.datetime_field23405.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.datetime_field23405.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23405);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23408 = (function sablono$core$datetime_local_field23408(var_args){
var G__23410 = arguments.length;
switch (G__23410) {
case 1:
return sablono.core.datetime_local_field23408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23408.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23330__auto__);
});

sablono.core.datetime_local_field23408.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.datetime_local_field23408.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23408);

/**
 * Creates a email input field.
 */
sablono.core.email_field23411 = (function sablono$core$email_field23411(var_args){
var G__23413 = arguments.length;
switch (G__23413) {
case 1:
return sablono.core.email_field23411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23411.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23330__auto__);
});

sablono.core.email_field23411.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.email_field23411.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23411);

/**
 * Creates a file input field.
 */
sablono.core.file_field23414 = (function sablono$core$file_field23414(var_args){
var G__23416 = arguments.length;
switch (G__23416) {
case 1:
return sablono.core.file_field23414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23414.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23330__auto__);
});

sablono.core.file_field23414.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.file_field23414.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23414);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23417 = (function sablono$core$hidden_field23417(var_args){
var G__23419 = arguments.length;
switch (G__23419) {
case 1:
return sablono.core.hidden_field23417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23417.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23330__auto__);
});

sablono.core.hidden_field23417.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.hidden_field23417.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23417);

/**
 * Creates a month input field.
 */
sablono.core.month_field23420 = (function sablono$core$month_field23420(var_args){
var G__23422 = arguments.length;
switch (G__23422) {
case 1:
return sablono.core.month_field23420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23420.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23330__auto__);
});

sablono.core.month_field23420.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.month_field23420.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23420);

/**
 * Creates a number input field.
 */
sablono.core.number_field23423 = (function sablono$core$number_field23423(var_args){
var G__23425 = arguments.length;
switch (G__23425) {
case 1:
return sablono.core.number_field23423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23423.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23330__auto__);
});

sablono.core.number_field23423.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.number_field23423.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23423);

/**
 * Creates a password input field.
 */
sablono.core.password_field23426 = (function sablono$core$password_field23426(var_args){
var G__23428 = arguments.length;
switch (G__23428) {
case 1:
return sablono.core.password_field23426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23426.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23330__auto__);
});

sablono.core.password_field23426.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.password_field23426.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23426);

/**
 * Creates a range input field.
 */
sablono.core.range_field23429 = (function sablono$core$range_field23429(var_args){
var G__23431 = arguments.length;
switch (G__23431) {
case 1:
return sablono.core.range_field23429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23429.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23330__auto__);
});

sablono.core.range_field23429.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.range_field23429.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23429);

/**
 * Creates a search input field.
 */
sablono.core.search_field23432 = (function sablono$core$search_field23432(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 1:
return sablono.core.search_field23432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23432.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23330__auto__);
});

sablono.core.search_field23432.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.search_field23432.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23432);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23435 = (function sablono$core$tel_field23435(var_args){
var G__23437 = arguments.length;
switch (G__23437) {
case 1:
return sablono.core.tel_field23435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23435.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23330__auto__);
});

sablono.core.tel_field23435.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.tel_field23435.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23435);

/**
 * Creates a text input field.
 */
sablono.core.text_field23438 = (function sablono$core$text_field23438(var_args){
var G__23440 = arguments.length;
switch (G__23440) {
case 1:
return sablono.core.text_field23438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23438.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23330__auto__);
});

sablono.core.text_field23438.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.text_field23438.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23438);

/**
 * Creates a time input field.
 */
sablono.core.time_field23441 = (function sablono$core$time_field23441(var_args){
var G__23443 = arguments.length;
switch (G__23443) {
case 1:
return sablono.core.time_field23441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23441.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23330__auto__);
});

sablono.core.time_field23441.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.time_field23441.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23441);

/**
 * Creates a url input field.
 */
sablono.core.url_field23444 = (function sablono$core$url_field23444(var_args){
var G__23446 = arguments.length;
switch (G__23446) {
case 1:
return sablono.core.url_field23444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23444.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23330__auto__);
});

sablono.core.url_field23444.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.url_field23444.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23444);

/**
 * Creates a week input field.
 */
sablono.core.week_field23447 = (function sablono$core$week_field23447(var_args){
var G__23449 = arguments.length;
switch (G__23449) {
case 1:
return sablono.core.week_field23447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23447.cljs$core$IFn$_invoke$arity$1 = (function (name__23330__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23330__auto__);
});

sablono.core.week_field23447.cljs$core$IFn$_invoke$arity$2 = (function (name__23330__auto__,value__23331__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23330__auto__,value__23331__auto__);
});

sablono.core.week_field23447.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23447);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23467 = (function sablono$core$check_box23467(var_args){
var G__23469 = arguments.length;
switch (G__23469) {
case 1:
return sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23467.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23467.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23467);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23471 = (function sablono$core$radio_button23471(var_args){
var G__23473 = arguments.length;
switch (G__23473) {
case 1:
return sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23471.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23471.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23471);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23475 = (function sablono$core$select_options23475(coll){
var iter__4523__auto__ = (function sablono$core$select_options23475_$_iter__23476(s__23477){
return (new cljs.core.LazySeq(null,(function (){
var s__23477__$1 = s__23477;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23477__$1);
if(temp__5457__auto__){
var s__23477__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23477__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23477__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23479 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23478 = (0);
while(true){
if((i__23478 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23478);
cljs.core.chunk_append.call(null,b__23479,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23480 = x;
var text = cljs.core.nth.call(null,vec__23480,(0),null);
var val = cljs.core.nth.call(null,vec__23480,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23480,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23475.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23486 = (i__23478 + (1));
i__23478 = G__23486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23479),sablono$core$select_options23475_$_iter__23476.call(null,cljs.core.chunk_rest.call(null,s__23477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23479),null);
}
} else {
var x = cljs.core.first.call(null,s__23477__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23483 = x;
var text = cljs.core.nth.call(null,vec__23483,(0),null);
var val = cljs.core.nth.call(null,vec__23483,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23483,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23475.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23475_$_iter__23476.call(null,cljs.core.rest.call(null,s__23477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23475);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23487 = (function sablono$core$drop_down23487(var_args){
var G__23489 = arguments.length;
switch (G__23489) {
case 2:
return sablono.core.drop_down23487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23487.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23487.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23487.call(null,name,options,null);
});

sablono.core.drop_down23487.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23487.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23487);
/**
 * Creates a text area element.
 */
sablono.core.text_area23491 = (function sablono$core$text_area23491(var_args){
var G__23493 = arguments.length;
switch (G__23493) {
case 1:
return sablono.core.text_area23491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23491.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23491.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23491.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23491);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23495 = (function sablono$core$label23495(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23495);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23496 = (function sablono$core$submit_button23496(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23496);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23497 = (function sablono$core$reset_button23497(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23497);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23498 = (function sablono$core$form_to23498(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23505 = arguments.length;
var i__4731__auto___23506 = (0);
while(true){
if((i__4731__auto___23506 < len__4730__auto___23505)){
args__4736__auto__.push((arguments[i__4731__auto___23506]));

var G__23507 = (i__4731__auto___23506 + (1));
i__4731__auto___23506 = G__23507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23498.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to23498.cljs$core$IFn$_invoke$arity$variadic = (function (p__23501,body){
var vec__23502 = p__23501;
var method = cljs.core.nth.call(null,vec__23502,(0),null);
var action = cljs.core.nth.call(null,vec__23502,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23498.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23498.cljs$lang$applyTo = (function (seq23499){
var G__23500 = cljs.core.first.call(null,seq23499);
var seq23499__$1 = cljs.core.next.call(null,seq23499);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23500,seq23499__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23498);

//# sourceMappingURL=core.js.map
