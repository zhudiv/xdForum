import{a as y,F as C,b as q,M as I}from"./prosemirror-model.b56130c8.js";import{a as K,R as L,T as W}from"./prosemirror-transform.ac9e639a.js";var T=Object.create(null),u=function(e,r,n){this.ranges=n||[new z(e.min(r),e.max(r))],this.$anchor=e,this.$head=r},d={anchor:{configurable:!0},head:{configurable:!0},from:{configurable:!0},to:{configurable:!0},$from:{configurable:!0},$to:{configurable:!0},empty:{configurable:!0}};d.anchor.get=function(){return this.$anchor.pos};d.head.get=function(){return this.$head.pos};d.from.get=function(){return this.$from.pos};d.to.get=function(){return this.$to.pos};d.$from.get=function(){return this.ranges[0].$from};d.$to.get=function(){return this.ranges[0].$to};d.empty.get=function(){for(var o=this.ranges,e=0;e<o.length;e++)if(o[e].$from.pos!=o[e].$to.pos)return!1;return!0};u.prototype.content=function(){return this.$from.node(0).slice(this.from,this.to,!0)};u.prototype.replace=function(e,r){r===void 0&&(r=y.empty);for(var n=r.content.lastChild,t=null,i=0;i<r.openEnd;i++)t=n,n=n.lastChild;for(var s=e.steps.length,a=this.ranges,c=0;c<a.length;c++){var p=a[c],l=p.$from,h=p.$to,A=e.mapping.slice(s);e.replaceRange(A.map(l.pos),A.map(h.pos),c?y.empty:r),c==0&&B(e,s,(n?n.isInline:t&&t.isTextblock)?-1:1)}};u.prototype.replaceWith=function(e,r){for(var n=e.steps.length,t=this.ranges,i=0;i<t.length;i++){var s=t[i],a=s.$from,c=s.$to,p=e.mapping.slice(n),l=p.map(a.pos),h=p.map(c.pos);i?e.deleteRange(l,h):(e.replaceRangeWith(l,h,r),B(e,n,r.isInline?-1:1))}};u.findFrom=function(e,r,n){var t=e.parent.inlineContent?new w(e):m(e.node(0),e.parent,e.pos,e.index(),r,n);if(t)return t;for(var i=e.depth-1;i>=0;i--){var s=r<0?m(e.node(0),e.node(i),e.before(i+1),e.index(i),r,n):m(e.node(0),e.node(i),e.after(i+1),e.index(i)+1,r,n);if(s)return s}};u.near=function(e,r){return r===void 0&&(r=1),this.findFrom(e,r)||this.findFrom(e,-r)||new O(e.node(0))};u.atStart=function(e){return m(e,e,0,0,1)||new O(e)};u.atEnd=function(e){return m(e,e,e.content.size,e.childCount,-1)||new O(e)};u.fromJSON=function(e,r){if(!r||!r.type)throw new RangeError("Invalid input for Selection.fromJSON");var n=T[r.type];if(!n)throw new RangeError("No selection type "+r.type+" defined");return n.fromJSON(e,r)};u.jsonID=function(e,r){if(e in T)throw new RangeError("Duplicate use of selection JSON ID "+e);return T[e]=r,r.prototype.jsonID=e,r};u.prototype.getBookmark=function(){return w.between(this.$anchor,this.$head).getBookmark()};Object.defineProperties(u.prototype,d);u.prototype.visible=!0;var z=function(e,r){this.$from=e,this.$to=r},w=function(o){function e(n,t){t===void 0&&(t=n),o.call(this,n,t)}o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e;var r={$cursor:{configurable:!0}};return r.$cursor.get=function(){return this.$anchor.pos==this.$head.pos?this.$head:null},e.prototype.map=function(t,i){var s=t.resolve(i.map(this.head));if(!s.parent.inlineContent)return o.near(s);var a=t.resolve(i.map(this.anchor));return new e(a.parent.inlineContent?a:s,s)},e.prototype.replace=function(t,i){if(i===void 0&&(i=y.empty),o.prototype.replace.call(this,t,i),i==y.empty){var s=this.$from.marksAcross(this.$to);s&&t.ensureMarks(s)}},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head},e.prototype.getBookmark=function(){return new S(this.anchor,this.head)},e.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}},e.fromJSON=function(t,i){if(typeof i.anchor!="number"||typeof i.head!="number")throw new RangeError("Invalid input for TextSelection.fromJSON");return new e(t.resolve(i.anchor),t.resolve(i.head))},e.create=function(t,i,s){s===void 0&&(s=i);var a=t.resolve(i);return new this(a,s==i?a:t.resolve(s))},e.between=function(t,i,s){var a=t.pos-i.pos;if((!s||a)&&(s=a>=0?1:-1),!i.parent.inlineContent){var c=o.findFrom(i,s,!0)||o.findFrom(i,-s,!0);if(c)i=c.$head;else return o.near(i,s)}return t.parent.inlineContent||(a==0?t=i:(t=(o.findFrom(t,-s,!0)||o.findFrom(t,s,!0)).$anchor,t.pos<i.pos!=a<0&&(t=i))),new e(t,i)},Object.defineProperties(e.prototype,r),e}(u);u.jsonID("text",w);var S=function(e,r){this.anchor=e,this.head=r};S.prototype.map=function(e){return new S(e.map(this.anchor),e.map(this.head))};S.prototype.resolve=function(e){return w.between(e.resolve(this.anchor),e.resolve(this.head))};var v=function(o){function e(r){var n=r.nodeAfter,t=r.node(0).resolve(r.pos+n.nodeSize);o.call(this,r,t),this.node=n}return o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e,e.prototype.map=function(n,t){var i=t.mapResult(this.anchor),s=i.deleted,a=i.pos,c=n.resolve(a);return s?o.near(c):new e(c)},e.prototype.content=function(){return new y(C.from(this.node),0,0)},e.prototype.eq=function(n){return n instanceof e&&n.anchor==this.anchor},e.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}},e.prototype.getBookmark=function(){return new N(this.anchor)},e.fromJSON=function(n,t){if(typeof t.anchor!="number")throw new RangeError("Invalid input for NodeSelection.fromJSON");return new e(n.resolve(t.anchor))},e.create=function(n,t){return new this(n.resolve(t))},e.isSelectable=function(n){return!n.isText&&n.type.spec.selectable!==!1},e}(u);v.prototype.visible=!1;u.jsonID("node",v);var N=function(e){this.anchor=e};N.prototype.map=function(e){var r=e.mapResult(this.anchor),n=r.deleted,t=r.pos;return n?new S(t,t):new N(t)};N.prototype.resolve=function(e){var r=e.resolve(this.anchor),n=r.nodeAfter;return n&&v.isSelectable(n)?new v(r):u.near(r)};var O=function(o){function e(r){o.call(this,r.resolve(0),r.resolve(r.content.size))}return o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e,e.prototype.replace=function(n,t){if(t===void 0&&(t=y.empty),t==y.empty){n.delete(0,n.doc.content.size);var i=o.atStart(n.doc);i.eq(n.selection)||n.setSelection(i)}else o.prototype.replace.call(this,n,t)},e.prototype.toJSON=function(){return{type:"all"}},e.fromJSON=function(n){return new e(n)},e.prototype.map=function(n){return new e(n)},e.prototype.eq=function(n){return n instanceof e},e.prototype.getBookmark=function(){return $},e}(u);u.jsonID("all",O);var $={map:function(){return this},resolve:function(e){return new O(e)}};function m(o,e,r,n,t,i){if(e.inlineContent)return w.create(o,r);for(var s=n-(t>0?0:1);t>0?s<e.childCount:s>=0;s+=t){var a=e.child(s);if(a.isAtom){if(!i&&v.isSelectable(a))return v.create(o,r-(t<0?a.nodeSize:0))}else{var c=m(o,a,r+t,t<0?a.childCount:0,t,i);if(c)return c}r+=a.nodeSize*t}}function B(o,e,r){var n=o.steps.length-1;if(!(n<e)){var t=o.steps[n];if(t instanceof K||t instanceof L){var i=o.mapping.maps[n],s;i.forEach(function(a,c,p,l){s==null&&(s=l)}),o.setSelection(u.near(o.doc.resolve(s),r))}}}var R=1,b=2,_=4,V=function(o){function e(n){o.call(this,n.doc),this.time=Date.now(),this.curSelection=n.selection,this.curSelectionFor=0,this.storedMarks=n.storedMarks,this.updated=0,this.meta=Object.create(null)}o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e;var r={selection:{configurable:!0},selectionSet:{configurable:!0},storedMarksSet:{configurable:!0},isGeneric:{configurable:!0},scrolledIntoView:{configurable:!0}};return r.selection.get=function(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection},e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=t,this.curSelectionFor=this.steps.length,this.updated=(this.updated|R)&~b,this.storedMarks=null,this},r.selectionSet.get=function(){return(this.updated&R)>0},e.prototype.setStoredMarks=function(t){return this.storedMarks=t,this.updated|=b,this},e.prototype.ensureMarks=function(t){return I.sameSet(this.storedMarks||this.selection.$from.marks(),t)||this.setStoredMarks(t),this},e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()))},e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()))},r.storedMarksSet.get=function(){return(this.updated&b)>0},e.prototype.addStep=function(t,i){o.prototype.addStep.call(this,t,i),this.updated=this.updated&~b,this.storedMarks=null},e.prototype.setTime=function(t){return this.time=t,this},e.prototype.replaceSelection=function(t){return this.selection.replace(this,t),this},e.prototype.replaceSelectionWith=function(t,i){var s=this.selection;return i!==!1&&(t=t.mark(this.storedMarks||(s.empty?s.$from.marks():s.$from.marksAcross(s.$to)||I.none))),s.replaceWith(this,t),this},e.prototype.deleteSelection=function(){return this.selection.replace(this),this},e.prototype.insertText=function(t,i,s){s===void 0&&(s=i);var a=this.doc.type.schema;if(i==null)return t?this.replaceSelectionWith(a.text(t),!0):this.deleteSelection();if(!t)return this.deleteRange(i,s);var c=this.storedMarks;if(!c){var p=this.doc.resolve(i);c=s==i?p.marks():p.marksAcross(this.doc.resolve(s))}return this.replaceRangeWith(i,s,a.text(t,c)),this.selection.empty||this.setSelection(u.near(this.selection.$to)),this},e.prototype.setMeta=function(t,i){return this.meta[typeof t=="string"?t:t.key]=i,this},e.prototype.getMeta=function(t){return this.meta[typeof t=="string"?t:t.key]},r.isGeneric.get=function(){for(var n in this.meta)return!1;return!0},e.prototype.scrollIntoView=function(){return this.updated|=_,this},r.scrolledIntoView.get=function(){return(this.updated&_)>0},Object.defineProperties(e.prototype,r),e}(W);function F(o,e){return!e||!o?o:o.bind(e)}var g=function(e,r,n){this.name=e,this.init=F(r.init,n),this.apply=F(r.apply,n)},j=[new g("doc",{init:function(e){return e.doc||e.schema.topNodeType.createAndFill()},apply:function(e){return e.doc}}),new g("selection",{init:function(e,r){return e.selection||u.atStart(r.doc)},apply:function(e){return e.selection}}),new g("storedMarks",{init:function(e){return e.storedMarks||null},apply:function(e,r,n,t){return t.selection.$cursor?e.storedMarks:null}}),new g("scrollToSelection",{init:function(){return 0},apply:function(e,r){return e.scrolledIntoView?r+1:r}})],E=function(e,r){var n=this;this.schema=e,this.fields=j.concat(),this.plugins=[],this.pluginsByKey=Object.create(null),r&&r.forEach(function(t){if(n.pluginsByKey[t.key])throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");n.plugins.push(t),n.pluginsByKey[t.key]=t,t.spec.state&&n.fields.push(new g(t.key,t.spec.state,t))})},f=function(e){this.config=e},M={schema:{configurable:!0},plugins:{configurable:!0},tr:{configurable:!0}};M.schema.get=function(){return this.config.schema};M.plugins.get=function(){return this.config.plugins};f.prototype.apply=function(e){return this.applyTransaction(e).state};f.prototype.filterTransaction=function(e,r){r===void 0&&(r=-1);for(var n=0;n<this.config.plugins.length;n++)if(n!=r){var t=this.config.plugins[n];if(t.spec.filterTransaction&&!t.spec.filterTransaction.call(t,e,this))return!1}return!0};f.prototype.applyTransaction=function(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};for(var r=[e],n=this.applyInner(e),t=null;;){for(var i=!1,s=0;s<this.config.plugins.length;s++){var a=this.config.plugins[s];if(a.spec.appendTransaction){var c=t?t[s].n:0,p=t?t[s].state:this,l=c<r.length&&a.spec.appendTransaction.call(a,c?r.slice(c):r,p,n);if(l&&n.filterTransaction(l,s)){if(l.setMeta("appendedTransaction",e),!t){t=[];for(var h=0;h<this.config.plugins.length;h++)t.push(h<s?{state:n,n:r.length}:{state:this,n:0})}r.push(l),n=n.applyInner(l),i=!0}t&&(t[s]={state:n,n:r.length})}}if(!i)return{state:n,transactions:r}}};f.prototype.applyInner=function(e){if(!e.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");for(var r=new f(this.config),n=this.config.fields,t=0;t<n.length;t++){var i=n[t];r[i.name]=i.apply(e,this[i.name],this,r)}for(var s=0;s<k.length;s++)k[s](this,e,r);return r};M.tr.get=function(){return new V(this)};f.create=function(e){for(var r=new E(e.doc?e.doc.type.schema:e.schema,e.plugins),n=new f(r),t=0;t<r.fields.length;t++)n[r.fields[t].name]=r.fields[t].init(e,n);return n};f.prototype.reconfigure=function(e){for(var r=new E(this.schema,e.plugins),n=r.fields,t=new f(r),i=0;i<n.length;i++){var s=n[i].name;t[s]=this.hasOwnProperty(s)?this[s]:n[i].init(e,t)}return t};f.prototype.toJSON=function(e){var r={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(r.storedMarks=this.storedMarks.map(function(s){return s.toJSON()})),e&&typeof e=="object")for(var n in e){if(n=="doc"||n=="selection")throw new RangeError("The JSON fields `doc` and `selection` are reserved");var t=e[n],i=t.spec.state;i&&i.toJSON&&(r[n]=i.toJSON.call(t,this[t.key]))}return r};f.fromJSON=function(e,r,n){if(!r)throw new RangeError("Invalid input for EditorState.fromJSON");if(!e.schema)throw new RangeError("Required config field 'schema' missing");var t=new E(e.schema,e.plugins),i=new f(t);return t.fields.forEach(function(s){if(s.name=="doc")i.doc=q.fromJSON(e.schema,r.doc);else if(s.name=="selection")i.selection=u.fromJSON(i.doc,r.selection);else if(s.name=="storedMarks")r.storedMarks&&(i.storedMarks=r.storedMarks.map(e.schema.markFromJSON));else{if(n)for(var a in n){var c=n[a],p=c.spec.state;if(c.key==s.name&&p&&p.fromJSON&&Object.prototype.hasOwnProperty.call(r,a)){i[s.name]=p.fromJSON.call(c,e,r[a],i);return}}i[s.name]=s.init(e,i)}}),i};f.addApplyListener=function(e){k.push(e)};f.removeApplyListener=function(e){var r=k.indexOf(e);r>-1&&k.splice(r,1)};Object.defineProperties(f.prototype,M);var k=[];function D(o,e,r){for(var n in o){var t=o[n];t instanceof Function?t=t.bind(e):n=="handleDOMEvents"&&(t=D(t,e,{})),r[n]=t}return r}var U=function(e){this.props={},e.props&&D(e.props,this,this.props),this.spec=e,this.key=e.key?e.key.key:P("plugin")};U.prototype.getState=function(e){return e[this.key]};var J=Object.create(null);function P(o){return o in J?o+"$"+ ++J[o]:(J[o]=0,o+"$")}var x=function(e){e===void 0&&(e="key"),this.key=P(e)};x.prototype.get=function(e){return e.config.pluginsByKey[this.key]};x.prototype.getState=function(e){return e[this.key]};export{O as A,f as E,v as N,x as P,u as S,w as T,U as a,z as b};
