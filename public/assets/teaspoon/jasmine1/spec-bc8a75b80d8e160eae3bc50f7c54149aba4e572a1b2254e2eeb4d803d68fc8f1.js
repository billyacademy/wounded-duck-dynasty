(function(){var t=function(t,e){function i(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},s={}.hasOwnProperty;Teaspoon.Jasmine1.Spec=function(s){function e(t){this.spec=t,this.fullDescription=this.spec.getFullName(),this.description=this.spec.description,this.link=this.filterUrl(this.fullDescription),this.parent=this.spec.suite,this.suiteName=this.parent.getFullName(),this.viewId=this.spec.viewId,this.pending=this.spec.pending}return t(e,s),e.prototype.errors=function(){var t,s,e,i,n;if(!this.spec.results)return[];for(i=this.spec.results().getItems(),n=[],t=0,e=i.length;t<e;t++)s=i[t],s.passed()||n.push({message:s.message,stack:s.trace.stack});return n},e.prototype.getParents=function(){var t;if(this.parents)return this.parents;for(this.parents||(this.parents=[]),t=this.parent;t;)t=new Teaspoon.Jasmine1.Suite(t),this.parents.unshift(t),t=t.parent;return this.parents},e.prototype.result=function(){var t,s;return t=this.spec.results(),s="failed",t.passed()&&(s="passed"),this.spec.pending&&(s="pending"),{status:s,skipped:t.skipped}},e}(Teaspoon.Spec)}).call(this);