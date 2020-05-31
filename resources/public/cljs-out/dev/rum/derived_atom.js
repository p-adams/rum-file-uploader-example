// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__21618 = arguments.length;
switch (G__21618) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21619 = opts;
var map__21619__$1 = (((((!((map__21619 == null))))?(((((map__21619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21619):map__21619);
var ref = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21621 = cljs.core.count.call(null,refs);
switch (G__21621) {
case (1):
var vec__21622 = refs;
var a = cljs.core.nth.call(null,vec__21622,(0),null);
return ((function (vec__21622,a,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21622,a,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21625 = refs;
var a = cljs.core.nth.call(null,vec__21625,(0),null);
var b = cljs.core.nth.call(null,vec__21625,(1),null);
return ((function (vec__21625,a,b,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21625,a,b,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21628 = refs;
var a = cljs.core.nth.call(null,vec__21628,(0),null);
var b = cljs.core.nth.call(null,vec__21628,(1),null);
var c = cljs.core.nth.call(null,vec__21628,(2),null);
return ((function (vec__21628,a,b,c,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21628,a,b,c,G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21621,map__21619,map__21619__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21631 = ref;
cljs.core.reset_BANG_.call(null,G__21631,recalc.call(null));

return G__21631;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21619,map__21619__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21619,map__21619__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21619,map__21619__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21619,map__21619__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21632_21638 = cljs.core.seq.call(null,refs);
var chunk__21633_21639 = null;
var count__21634_21640 = (0);
var i__21635_21641 = (0);
while(true){
if((i__21635_21641 < count__21634_21640)){
var ref_21642__$1 = cljs.core._nth.call(null,chunk__21633_21639,i__21635_21641);
cljs.core.add_watch.call(null,ref_21642__$1,key,watch);


var G__21643 = seq__21632_21638;
var G__21644 = chunk__21633_21639;
var G__21645 = count__21634_21640;
var G__21646 = (i__21635_21641 + (1));
seq__21632_21638 = G__21643;
chunk__21633_21639 = G__21644;
count__21634_21640 = G__21645;
i__21635_21641 = G__21646;
continue;
} else {
var temp__5457__auto___21647 = cljs.core.seq.call(null,seq__21632_21638);
if(temp__5457__auto___21647){
var seq__21632_21648__$1 = temp__5457__auto___21647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21632_21648__$1)){
var c__4550__auto___21649 = cljs.core.chunk_first.call(null,seq__21632_21648__$1);
var G__21650 = cljs.core.chunk_rest.call(null,seq__21632_21648__$1);
var G__21651 = c__4550__auto___21649;
var G__21652 = cljs.core.count.call(null,c__4550__auto___21649);
var G__21653 = (0);
seq__21632_21638 = G__21650;
chunk__21633_21639 = G__21651;
count__21634_21640 = G__21652;
i__21635_21641 = G__21653;
continue;
} else {
var ref_21654__$1 = cljs.core.first.call(null,seq__21632_21648__$1);
cljs.core.add_watch.call(null,ref_21654__$1,key,watch);


var G__21655 = cljs.core.next.call(null,seq__21632_21648__$1);
var G__21656 = null;
var G__21657 = (0);
var G__21658 = (0);
seq__21632_21638 = G__21655;
chunk__21633_21639 = G__21656;
count__21634_21640 = G__21657;
i__21635_21641 = G__21658;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
