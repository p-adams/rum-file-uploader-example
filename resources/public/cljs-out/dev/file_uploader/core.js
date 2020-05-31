// Compiled by ClojureScript 1.10.520 {}
goog.provide('file_uploader.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('rum.core');
if((typeof file_uploader !== 'undefined') && (typeof file_uploader.core !== 'undefined') && (typeof file_uploader.core.app_state !== 'undefined')){
} else {
file_uploader.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-el","file-el",-40264188),null], null));
}
file_uploader.core.user_file = cljs.core.atom.call(null,"");
file_uploader.core.button = rum.core.lazy_build.call(null,rum.core.build_defc,(function (h,txt){
return React.createElement("button",({"onClick": h, "className": "success"}),sablono.interpreter.interpret.call(null,txt));
}),null,"file-uploader.core/button");
file_uploader.core.file_uploader = rum.core.lazy_build.call(null,rum.core.build_defc,(function (){
var ref = rum.core.create_ref.call(null);
return React.createElement("form",({"onSubmit": ((function (ref){
return (function (e){
return e.preventDefault();
});})(ref))
}),React.createElement("div",null,null,sablono.interpreter.create_element.call(null,"input",({"ref": ref, "key": "file-upload", "type": "file", "name": "File Upload", "style": ({"display": "none"}), "onChange": ((function (ref){
return (function (){
var file = (rum.core.deref.call(null,ref).files[(0)]);
var filename = file.name;
return cljs.core.reset_BANG_.call(null,file_uploader.core.user_file,filename);
});})(ref))
})),sablono.interpreter.interpret.call(null,file_uploader.core.button.call(null,((function (ref){
return (function (){
return rum.core.deref.call(null,ref).click();
});})(ref))
,"Upload file"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"file-uploader.core/file-uploader");
file_uploader.core.upload_form = rum.core.lazy_build.call(null,rum.core.build_defc,(function (){
return React.createElement("form",null,null,(function (){var attrs24189 = file_uploader.core.file_uploader.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs24189))?sablono.interpreter.attributes.call(null,attrs24189):null),((cljs.core.map_QMARK_.call(null,attrs24189))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24189)], null)));
})());
}),null,"file-uploader.core/upload-form");
file_uploader.core.app = rum.core.lazy_build.call(null,rum.core.build_defc,(function (){
return React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "header"}),"File Uploader"),React.createElement("div",({"className": "content"}),sablono.interpreter.interpret.call(null,rum.core.react.call(null,file_uploader.core.user_file))),React.createElement("div",({"className": "footer"}),sablono.interpreter.interpret.call(null,file_uploader.core.file_uploader.call(null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"file-uploader.core/app");
file_uploader.core.get_app_element = (function file_uploader$core$get_app_element(){
return rum.core.mount.call(null,file_uploader.core.app.call(null),goog.dom.getElement("app"));
});
file_uploader.core.get_app_element.call(null);
file_uploader.core.on_reload = (function file_uploader$core$on_reload(){
return cljs.core.swap_BANG_.call(null,file_uploader.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__figwheel_counter","__figwheel_counter",-1660671811)], null),cljs.core.inc);
});

//# sourceMappingURL=core.js.map
