import{a as g}from"./prosemirror-state.334938da.js";import"./prosemirror-transform.ac9e639a.js";var p=function(i,n){this.match=i,this.handler=typeof n=="string"?h(n):n};function h(u){return function(i,n,t,r){var e=u;if(n[1]){var s=n[0].lastIndexOf(n[1]);e+=n[0].slice(s+n[1].length),t+=s;var a=t-r;a>0&&(e=n[0].slice(s-a,s)+e,t=r)}return i.tr.insertText(e,t,r)}}var x=500;function $(u){var i=u.rules,n=new g({state:{init:function(){return null},apply:function(r,e){var s=r.getMeta(this);return s||(r.selectionSet||r.docChanged?null:e)}},props:{handleTextInput:function(r,e,s,a){return v(r,e,s,a,i,n)},handleDOMEvents:{compositionend:function(t){setTimeout(function(){var r=t.state.selection,e=r.$cursor;e&&v(t,e.pos,e.pos,"",i,n)})}}},isInputRules:!0});return n}function v(u,i,n,t,r,e){if(u.composing)return!1;var s=u.state,a=s.doc.resolve(i);if(a.parent.type.spec.code)return!1;for(var f=a.parent.textBetween(Math.max(0,a.parentOffset-x),a.parentOffset,null,"\uFFFC")+t,o=0;o<r.length;o++){var l=r[o].match.exec(f),c=l&&r[o].handler(s,l,i-(l[0].length-t.length),n);if(!!c)return u.dispatch(c.setMeta(e,{transform:c,from:i,to:n,text:t})),!0}return!1}function M(u,i){for(var n=u.plugins,t=0;t<n.length;t++){var r=n[t],e=void 0;if(r.spec.isInputRules&&(e=r.getState(u))){if(i){for(var s=u.tr,a=e.transform,f=a.steps.length-1;f>=0;f--)s.step(a.steps[f].invert(a.docs[f]));if(e.text){var o=s.doc.resolve(e.from).marks();s.replaceWith(e.from,e.to,u.schema.text(e.text,o))}else s.delete(e.from,e.to);i(s)}return!0}}return!1}new p(/--$/,"\u2014");new p(/\.\.\.$/,"\u2026");new p(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"\u201C");new p(/"$/,"\u201D");new p(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"\u2018");new p(/'$/,"\u2019");export{p as I,$ as i,M as u};