(function(){Teaspoon.Runner=function(){function t(){this.constructor.run||(this.constructor.run=!0,this.fixturePath=Teaspoon.root+"/fixtures",this.params=Teaspoon.params=this.getParams(),this.setup())}return t.run=!1,t.prototype.getParams=function(){var t,o,r,e,n,s,i,p;for(n={},s=Teaspoon.location.search.substring(1).split("&"),t=0,o=s.length;t<o;t++)e=s[t],i=e.split("="),r=i[0],p=i[1],n[decodeURIComponent(r)]=decodeURIComponent(p);return n},t.prototype.getReporter=function(){return this.params.reporter?this.findReporter(this.params.reporter):window.navigator.userAgent.match(/PhantomJS/)?this.findReporter("Console"):this.findReporter("HTML")},t.prototype.setup=function(){},t.prototype.findReporter=function(t){return Teaspoon.resolveClass("Reporters."+t)},t}()}).call(this);