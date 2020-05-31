// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29751){
var map__29752 = p__29751;
var map__29752__$1 = (((((!((map__29752 == null))))?(((((map__29752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752):map__29752);
var m = map__29752__$1;
var n = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29754_29786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29755_29787 = null;
var count__29756_29788 = (0);
var i__29757_29789 = (0);
while(true){
if((i__29757_29789 < count__29756_29788)){
var f_29790 = cljs.core._nth.call(null,chunk__29755_29787,i__29757_29789);
cljs.core.println.call(null,"  ",f_29790);


var G__29791 = seq__29754_29786;
var G__29792 = chunk__29755_29787;
var G__29793 = count__29756_29788;
var G__29794 = (i__29757_29789 + (1));
seq__29754_29786 = G__29791;
chunk__29755_29787 = G__29792;
count__29756_29788 = G__29793;
i__29757_29789 = G__29794;
continue;
} else {
var temp__5457__auto___29795 = cljs.core.seq.call(null,seq__29754_29786);
if(temp__5457__auto___29795){
var seq__29754_29796__$1 = temp__5457__auto___29795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29754_29796__$1)){
var c__4550__auto___29797 = cljs.core.chunk_first.call(null,seq__29754_29796__$1);
var G__29798 = cljs.core.chunk_rest.call(null,seq__29754_29796__$1);
var G__29799 = c__4550__auto___29797;
var G__29800 = cljs.core.count.call(null,c__4550__auto___29797);
var G__29801 = (0);
seq__29754_29786 = G__29798;
chunk__29755_29787 = G__29799;
count__29756_29788 = G__29800;
i__29757_29789 = G__29801;
continue;
} else {
var f_29802 = cljs.core.first.call(null,seq__29754_29796__$1);
cljs.core.println.call(null,"  ",f_29802);


var G__29803 = cljs.core.next.call(null,seq__29754_29796__$1);
var G__29804 = null;
var G__29805 = (0);
var G__29806 = (0);
seq__29754_29786 = G__29803;
chunk__29755_29787 = G__29804;
count__29756_29788 = G__29805;
i__29757_29789 = G__29806;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29807 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29807);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29807)))?cljs.core.second.call(null,arglists_29807):arglists_29807));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29758_29808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29759_29809 = null;
var count__29760_29810 = (0);
var i__29761_29811 = (0);
while(true){
if((i__29761_29811 < count__29760_29810)){
var vec__29772_29812 = cljs.core._nth.call(null,chunk__29759_29809,i__29761_29811);
var name_29813 = cljs.core.nth.call(null,vec__29772_29812,(0),null);
var map__29775_29814 = cljs.core.nth.call(null,vec__29772_29812,(1),null);
var map__29775_29815__$1 = (((((!((map__29775_29814 == null))))?(((((map__29775_29814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29775_29814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29775_29814):map__29775_29814);
var doc_29816 = cljs.core.get.call(null,map__29775_29815__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29817 = cljs.core.get.call(null,map__29775_29815__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29813);

cljs.core.println.call(null," ",arglists_29817);

if(cljs.core.truth_(doc_29816)){
cljs.core.println.call(null," ",doc_29816);
} else {
}


var G__29818 = seq__29758_29808;
var G__29819 = chunk__29759_29809;
var G__29820 = count__29760_29810;
var G__29821 = (i__29761_29811 + (1));
seq__29758_29808 = G__29818;
chunk__29759_29809 = G__29819;
count__29760_29810 = G__29820;
i__29761_29811 = G__29821;
continue;
} else {
var temp__5457__auto___29822 = cljs.core.seq.call(null,seq__29758_29808);
if(temp__5457__auto___29822){
var seq__29758_29823__$1 = temp__5457__auto___29822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29758_29823__$1)){
var c__4550__auto___29824 = cljs.core.chunk_first.call(null,seq__29758_29823__$1);
var G__29825 = cljs.core.chunk_rest.call(null,seq__29758_29823__$1);
var G__29826 = c__4550__auto___29824;
var G__29827 = cljs.core.count.call(null,c__4550__auto___29824);
var G__29828 = (0);
seq__29758_29808 = G__29825;
chunk__29759_29809 = G__29826;
count__29760_29810 = G__29827;
i__29761_29811 = G__29828;
continue;
} else {
var vec__29777_29829 = cljs.core.first.call(null,seq__29758_29823__$1);
var name_29830 = cljs.core.nth.call(null,vec__29777_29829,(0),null);
var map__29780_29831 = cljs.core.nth.call(null,vec__29777_29829,(1),null);
var map__29780_29832__$1 = (((((!((map__29780_29831 == null))))?(((((map__29780_29831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29780_29831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29780_29831):map__29780_29831);
var doc_29833 = cljs.core.get.call(null,map__29780_29832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29834 = cljs.core.get.call(null,map__29780_29832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29830);

cljs.core.println.call(null," ",arglists_29834);

if(cljs.core.truth_(doc_29833)){
cljs.core.println.call(null," ",doc_29833);
} else {
}


var G__29835 = cljs.core.next.call(null,seq__29758_29823__$1);
var G__29836 = null;
var G__29837 = (0);
var G__29838 = (0);
seq__29758_29808 = G__29835;
chunk__29759_29809 = G__29836;
count__29760_29810 = G__29837;
i__29761_29811 = G__29838;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29782 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29783 = null;
var count__29784 = (0);
var i__29785 = (0);
while(true){
if((i__29785 < count__29784)){
var role = cljs.core._nth.call(null,chunk__29783,i__29785);
var temp__5457__auto___29839__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29839__$1)){
var spec_29840 = temp__5457__auto___29839__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29840));
} else {
}


var G__29841 = seq__29782;
var G__29842 = chunk__29783;
var G__29843 = count__29784;
var G__29844 = (i__29785 + (1));
seq__29782 = G__29841;
chunk__29783 = G__29842;
count__29784 = G__29843;
i__29785 = G__29844;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29782);
if(temp__5457__auto____$1){
var seq__29782__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29782__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29782__$1);
var G__29845 = cljs.core.chunk_rest.call(null,seq__29782__$1);
var G__29846 = c__4550__auto__;
var G__29847 = cljs.core.count.call(null,c__4550__auto__);
var G__29848 = (0);
seq__29782 = G__29845;
chunk__29783 = G__29846;
count__29784 = G__29847;
i__29785 = G__29848;
continue;
} else {
var role = cljs.core.first.call(null,seq__29782__$1);
var temp__5457__auto___29849__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29849__$2)){
var spec_29850 = temp__5457__auto___29849__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29850));
} else {
}


var G__29851 = cljs.core.next.call(null,seq__29782__$1);
var G__29852 = null;
var G__29853 = (0);
var G__29854 = (0);
seq__29782 = G__29851;
chunk__29783 = G__29852;
count__29784 = G__29853;
i__29785 = G__29854;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29855 = cljs.core.conj.call(null,via,t);
var G__29856 = cljs.core.ex_cause.call(null,t);
via = G__29855;
t = G__29856;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29859 = datafied_throwable;
var map__29859__$1 = (((((!((map__29859 == null))))?(((((map__29859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29859):map__29859);
var via = cljs.core.get.call(null,map__29859__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29859__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29859__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29860 = cljs.core.last.call(null,via);
var map__29860__$1 = (((((!((map__29860 == null))))?(((((map__29860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29860):map__29860);
var type = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29861 = data;
var map__29861__$1 = (((((!((map__29861 == null))))?(((((map__29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29861):map__29861);
var problems = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29862 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29862__$1 = (((((!((map__29862 == null))))?(((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var top_data = map__29862__$1;
var source = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29867 = phase;
var G__29867__$1 = (((G__29867 instanceof cljs.core.Keyword))?G__29867.fqn:null);
switch (G__29867__$1) {
case "read-source":
var map__29868 = data;
var map__29868__$1 = (((((!((map__29868 == null))))?(((((map__29868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29868):map__29868);
var line = cljs.core.get.call(null,map__29868__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29868__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29870 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29870__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29870,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29870);
var G__29870__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29870__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29870__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29870__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29871 = top_data;
var G__29871__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29871,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29871);
var G__29871__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29871__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29871__$1);
var G__29871__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29871__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29871__$2);
var G__29871__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29871__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29871__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29871__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29871__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29872 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29872,(0),null);
var method = cljs.core.nth.call(null,vec__29872,(1),null);
var file = cljs.core.nth.call(null,vec__29872,(2),null);
var line = cljs.core.nth.call(null,vec__29872,(3),null);
var G__29875 = top_data;
var G__29875__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29875,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29875);
var G__29875__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29875__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29875__$1);
var G__29875__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29875__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29875__$2);
var G__29875__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29875__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29875__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29875__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29875__$4;
}

break;
case "execution":
var vec__29876 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29876,(0),null);
var method = cljs.core.nth.call(null,vec__29876,(1),null);
var file = cljs.core.nth.call(null,vec__29876,(2),null);
var line = cljs.core.nth.call(null,vec__29876,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29876,source__$1,method,file,line,G__29867,G__29867__$1,map__29859,map__29859__$1,via,trace,phase,map__29860,map__29860__$1,type,message,data,map__29861,map__29861__$1,problems,fn,caller,map__29862,map__29862__$1,top_data,source){
return (function (p1__29858_SHARP_){
var or__4131__auto__ = (p1__29858_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29858_SHARP_);
}
});})(vec__29876,source__$1,method,file,line,G__29867,G__29867__$1,map__29859,map__29859__$1,via,trace,phase,map__29860,map__29860__$1,type,message,data,map__29861,map__29861__$1,problems,fn,caller,map__29862,map__29862__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29879__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29879,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29879);
var G__29879__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29879__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29879__$1);
var G__29879__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29879__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29879__$2);
var G__29879__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29879__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29879__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29879__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29879__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29867__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29883){
var map__29884 = p__29883;
var map__29884__$1 = (((((!((map__29884 == null))))?(((((map__29884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29884):map__29884);
var triage_data = map__29884__$1;
var phase = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29886 = phase;
var G__29886__$1 = (((G__29886 instanceof cljs.core.Keyword))?G__29886.fqn:null);
switch (G__29886__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29887_29896 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29888_29897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29889_29898 = true;
var _STAR_print_fn_STAR__temp_val__29890_29899 = ((function (_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29889_29898;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29890_29899;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,_STAR_print_fn_STAR__temp_val__29890_29899,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,_STAR_print_fn_STAR__temp_val__29890_29899,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29881_SHARP_){
return cljs.core.dissoc.call(null,p1__29881_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,_STAR_print_fn_STAR__temp_val__29890_29899,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29887_29896,_STAR_print_fn_STAR__orig_val__29888_29897,_STAR_print_newline_STAR__temp_val__29889_29898,_STAR_print_fn_STAR__temp_val__29890_29899,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29888_29897;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29887_29896;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29891_29900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29892_29901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29893_29902 = true;
var _STAR_print_fn_STAR__temp_val__29894_29903 = ((function (_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29893_29902;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29894_29903;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,_STAR_print_fn_STAR__temp_val__29894_29903,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,_STAR_print_fn_STAR__temp_val__29894_29903,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29882_SHARP_){
return cljs.core.dissoc.call(null,p1__29882_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,_STAR_print_fn_STAR__temp_val__29894_29903,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29891_29900,_STAR_print_fn_STAR__orig_val__29892_29901,_STAR_print_newline_STAR__temp_val__29893_29902,_STAR_print_fn_STAR__temp_val__29894_29903,sb__4661__auto__,G__29886,G__29886__$1,loc,class_name,simple_class,cause_type,format,map__29884,map__29884__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29892_29901;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29891_29900;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29886__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
