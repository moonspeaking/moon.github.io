umber(a.form);if(0>c)return null;var d="INPUT"==a.nodeName?{text:0,color:0,date:0,datetime:0,"datetime-local":0,email:0,number:0,range:0,search:0,tel:0,time:0,url:0,month:0,week:0,password:2,radio:3,checkbox:4,file:6,image:7}[a.type]:{SELECT:1,TEXTAREA:5}[a.nodeName];if("number"!=typeof d)return null;for(var e=-1,f=a.form.elements,y=f.length,l=0,n=0;l<y;l++)if(f[l].name==
a.name){if(f[l]==a){e=n;break}n++}if(0>e)return null;f=[];t(f,7);p(f,b);p(f,c);p(f,d);w(f,a.name||"");p(f,e);return f}function M(a,b){var c=m.getFormNumber(b);if(0>c)return null;for(var d=b.elements,e=d.length,y=[],l=0;l<e;l++)if(!m.isEmptyField(d[l])){var n=d[l][E];n&&0<n&&f.mergeArrays(y,[n])}d=[];t(d,11);p(d,a);p(d,c);p(d,y.length);for(c=0;c<y.length;c++)p(d,y[c]);return d}function R(){var a=[];t(a,13);return a}function I(a,b,c){a=a.apply(g,b);na.append(a,c)}function B(a){if(a[E])a:{var b=r(),
c=a[E];if(0<c){var d=[];a=m.getElementRegion(a);var e=za[c],f=a[0]+"x"+a[1],l=a[2]+"x"+a[3];f!=e.pos&&(e.pos=f,t(d,9),p(d,b),p(d,c),p(d,a[0]),p(d,a[1]));l!=e.size&&(e.size=l,t(d,10),p(d,b),p(d,c),p(d,a[2]),p(d,a[3]));if(d.length){a=d;break a}}a=null}else{(c=m.getElementParent(a))&&B(c);a[E]=T;za[T]={};T++;if(a.nodeName)if(c=+a[E],!isFinite(c)||0>=c)b=null;else{var d=64,e=0,y=m.getElementParent(a),f=y&&y[E]?y[E]:0;0>f&&(f=0);var l=a.nodeName.toUpperCase(),n=sb[l];n||(d|=2);var g=m.getElementNeighborPosition(a);
g||(d|=4);var h=m.getElementRegion(a);(y=y?m.getElementRegion(y):na);else k.on(h,"wheel",Dthis.meta,this._packetNumber);this._packetNumber++;this.clear()},_saveToStorage:function(){this.storage&&this._data.length&&this.storage.set(this.storageKey,{data:this._data,meta:this.meta,pnum:this._packetNumber,time:+new Date})}}),w={storage:{},init:function(){var a=this;u(function(){g.Ya=g.Ya||{};g.Ya._metrika=g.Ya._metrika||{};a.storage=g.Ya._metrika},"",!0)();return this},setSafe:function(a,b){var c=
this;u(function(){c.storage[.
