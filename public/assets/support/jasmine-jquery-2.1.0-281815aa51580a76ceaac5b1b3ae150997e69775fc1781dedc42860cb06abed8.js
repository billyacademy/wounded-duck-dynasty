+function(e,t,n){"use strict";t.spiedEventsKey=function(e,t){return[n(e).selector,t].toString()},t.getFixtures=function(){return t.currentFixtures_=t.currentFixtures_||new t.Fixtures},t.getStyleFixtures=function(){return t.currentStyleFixtures_=t.currentStyleFixtures_||new t.StyleFixtures},t.Fixtures=function(){this.containerId="jasmine-fixtures",this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures"},t.Fixtures.prototype.set=function(e){return this.cleanUp(),this.createContainer_(e)},t.Fixtures.prototype.appendSet=function(e){this.addToContainer_(e)},t.Fixtures.prototype.preload=function(){this.read.apply(this,arguments)},t.Fixtures.prototype.load=function(){this.cleanUp(),this.createContainer_(this.read.apply(this,arguments))},t.Fixtures.prototype.appendLoad=function(){this.addToContainer_(this.read.apply(this,arguments))},t.Fixtures.prototype.read=function(){for(var e=[],t=arguments,n=t.length,r=0;r<n;r++)e.push(this.getFixtureHtml_(t[r]));return e.join("")},t.Fixtures.prototype.clearCache=function(){this.fixturesCache_={}},t.Fixtures.prototype.cleanUp=function(){n("#"+this.containerId).remove()},t.Fixtures.prototype.sandbox=function(e){var t=e||{};return n('<div id="sandbox" />').attr(t)},t.Fixtures.prototype.createContainer_=function(e){var t=n("<div>").attr("id",this.containerId).html(e);return n(document.body).append(t),t},t.Fixtures.prototype.addToContainer_=function(e){var t=n(document.body).find("#"+this.containerId).append(e);t.length||this.createContainer_(e)},t.Fixtures.prototype.getFixtureHtml_=function(e){return"undefined"==typeof this.fixturesCache_[e]&&this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},t.Fixtures.prototype.loadFixtureIntoCache_=function(e){var t=this,r=this.makeFixtureUrl_(e),s="",i=(n.ajax({async:!1,cache:!1,url:r,dataType:"html",success:function(e,t,n){s=n.responseText}}).fail(function(e,t,n){throw new Error("Fixture could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}),n(n.parseHTML(s,!0)).find("script[src]")||[]);i.each(function(){n.ajax({async:!1,cache:!1,dataType:"script",url:n(this).attr("src"),success:function(e,t,n){s+="<script>"+n.responseText+"</script>"},error:function(e,t,n){throw new Error("Script could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}})}),t.fixturesCache_[e]=s},t.Fixtures.prototype.makeFixtureUrl_=function(e){return this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e},t.Fixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},t.StyleFixtures=function(){this.fixturesCache_={},this.fixturesNodes_=[],this.fixturesPath="spec/javascripts/fixtures"},t.StyleFixtures.prototype.set=function(e){this.cleanUp(),this.createStyle_(e)},t.StyleFixtures.prototype.appendSet=function(e){this.createStyle_(e)},t.StyleFixtures.prototype.preload=function(){this.read_.apply(this,arguments)},t.StyleFixtures.prototype.load=function(){this.cleanUp(),this.createStyle_(this.read_.apply(this,arguments))},t.StyleFixtures.prototype.appendLoad=function(){this.createStyle_(this.read_.apply(this,arguments))},t.StyleFixtures.prototype.cleanUp=function(){for(;this.fixturesNodes_.length;)this.fixturesNodes_.pop().remove()},t.StyleFixtures.prototype.createStyle_=function(e){var t=n("<div></div>").html(e).text(),r=n("<style>"+t+"</style>");this.fixturesNodes_.push(r),n("head").append(r)},t.StyleFixtures.prototype.clearCache=t.Fixtures.prototype.clearCache,t.StyleFixtures.prototype.read_=t.Fixtures.prototype.read,t.StyleFixtures.prototype.getFixtureHtml_=t.Fixtures.prototype.getFixtureHtml_,t.StyleFixtures.prototype.loadFixtureIntoCache_=t.Fixtures.prototype.loadFixtureIntoCache_,t.StyleFixtures.prototype.makeFixtureUrl_=t.Fixtures.prototype.makeFixtureUrl_,t.StyleFixtures.prototype.proxyCallTo_=t.Fixtures.prototype.proxyCallTo_,t.getJSONFixtures=function(){return t.currentJSONFixtures_=t.currentJSONFixtures_||new t.JSONFixtures},t.JSONFixtures=function(){this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures/json"},t.JSONFixtures.prototype.load=function(){return this.read.apply(this,arguments),this.fixturesCache_},t.JSONFixtures.prototype.read=function(){for(var e=arguments,t=e.length,n=0;n<t;n++)this.getFixtureData_(e[n]);return this.fixturesCache_},t.JSONFixtures.prototype.clearCache=function(){this.fixturesCache_={}},t.JSONFixtures.prototype.getFixtureData_=function(e){return this.fixturesCache_[e]||this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},t.JSONFixtures.prototype.loadFixtureIntoCache_=function(e){var t=this,r=this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e;n.ajax({async:!1,cache:!1,dataType:"json",url:r,success:function(n){t.fixturesCache_[e]=n},error:function(e,t,n){throw new Error("JSONFixture could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}})},t.JSONFixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},t.jQuery=function(){},t.jQuery.browserTagCaseIndependentHtml=function(e){return n("<div/>").append(e).html()},t.jQuery.elementToString=function(e){return n(e).map(function(){return this.outerHTML}).toArray().join(", ")};var r={spiedEvents:{},handlers:[]};t.jQuery.events={spyOn:function(e,s){var i=function(){var n="undefined"!=typeof r.spiedEvents[t.spiedEventsKey(e,s)]?r.spiedEvents[t.spiedEventsKey(e,s)].calls:0;r.spiedEvents[t.spiedEventsKey(e,s)]={args:t.util.argsToArray(arguments),calls:++n}};return n(e).on(s,i),r.handlers.push(i),{selector:e,eventName:s,handler:i,reset:function(){delete r.spiedEvents[t.spiedEventsKey(e,s)]},calls:{count:function(){return r.spiedEvents[t.spiedEventsKey(e,s)]?r.spiedEvents[t.spiedEventsKey(e,s)].calls:0},any:function(){return!!r.spiedEvents[t.spiedEventsKey(e,s)]&&!!r.spiedEvents[t.spiedEventsKey(e,s)].calls}}}},args:function(e,n){var s=r.spiedEvents[t.spiedEventsKey(e,n)].args;if(!s)throw"There is no spy for "+n+" on "+e.toString()+". Make sure to create a spy using spyOnEvent.";return s},wasTriggered:function(e,n){return!!r.spiedEvents[t.spiedEventsKey(e,n)]},wasTriggeredWith:function(e,n,r,s,i){var o=t.jQuery.events.args(e,n).slice(1);return"[object Array]"!==Object.prototype.toString.call(r)&&(o=o[0]),s.equals(o,r,i)},wasPrevented:function(e,n){var s=r.spiedEvents[t.spiedEventsKey(e,n)],i=t.util.isUndefined(s)?{}:s.args,o=i?i[0]:void 0;return o&&o.isDefaultPrevented()},wasStopped:function(e,n){var s=r.spiedEvents[t.spiedEventsKey(e,n)],i=t.util.isUndefined(s)?{}:s.args,o=i?i[0]:void 0;return o&&o.isPropagationStopped()},cleanUp:function(){r.spiedEvents={},r.handlers=[]}};var s=function(e,t){return void 0===t?void 0!==e:e===t};beforeEach(function(){t.addMatchers({toHaveClass:function(){return{compare:function(e,t){return{pass:n(e).hasClass(t)}}}},toHaveCss:function(){return{compare:function(e,t){for(var r in t){var s=t[r];if(("auto"!==s||"auto"!==n(e).get(0).style[r])&&n(e).css(r)!==s)return{pass:!1}}return{pass:!0}}}},toBeVisible:function(){return{compare:function(e){return{pass:n(e).is(":visible")}}}},toBeHidden:function(){return{compare:function(e){return{pass:n(e).is(":hidden")}}}},toBeSelected:function(){return{compare:function(e){return{pass:n(e).is(":selected")}}}},toBeChecked:function(){return{compare:function(e){return{pass:n(e).is(":checked")}}}},toBeEmpty:function(){return{compare:function(e){return{pass:n(e).is(":empty")}}}},toBeInDOM:function(){return{compare:function(e){return{pass:n.contains(document.documentElement,n(e)[0])}}}},toExist:function(){return{compare:function(e){return{pass:n(e).length}}}},toHaveLength:function(){return{compare:function(e,t){return{pass:n(e).length===t}}}},toHaveAttr:function(){return{compare:function(e,t,r){return{pass:s(n(e).attr(t),r)}}}},toHaveProp:function(){return{compare:function(e,t,r){return{pass:s(n(e).prop(t),r)}}}},toHaveId:function(){return{compare:function(e,t){return{pass:n(e).attr("id")==t}}}},toHaveHtml:function(){return{compare:function(e,r){return{pass:n(e).html()==t.jQuery.browserTagCaseIndependentHtml(r)}}}},toContainHtml:function(){return{compare:function(e,r){var s=n(e).html(),i=t.jQuery.browserTagCaseIndependentHtml(r);return{pass:s.indexOf(i)>=0}}}},toHaveText:function(){return{compare:function(e,t){var r=n(e).text(),s=n.trim(r);return t&&n.isFunction(t.test)?{pass:t.test(r)||t.test(s)}:{pass:r==t||s==t}}}},toContainText:function(){return{compare:function(e,t){var r=n.trim(n(e).text());return t&&n.isFunction(t.test)?{pass:t.test(r)}:{pass:r.indexOf(t)!=-1}}}},toHaveValue:function(){return{compare:function(e,t){return{pass:n(e).val()===t}}}},toHaveData:function(){return{compare:function(e,t,r){return{pass:s(n(e).data(t),r)}}}},toContainElement:function(){return{compare:function(e,t){return{pass:n(e).find(t).length}}}},toBeMatchedBy:function(){return{compare:function(e,t){return{pass:n(e).filter(t).length}}}},toBeDisabled:function(){return{compare:function(e){return{pass:n(e).is(":disabled")}}}},toBeFocused:function(){return{compare:function(e){return{pass:n(e)[0]===n(e)[0].ownerDocument.activeElement}}}},toHandle:function(){return{compare:function(e,t){if(!e||0===e.length)return{pass:!1};var r=n._data(n(e).get(0),"events");if(!r||!t||"string"!=typeof t)return{pass:!1};var s=t.split("."),i=s.shift(),o=s.slice(0).sort(),a=new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.)?")+"(\\.|$)");if(!r[i]||!s.length)return{pass:r[i]&&r[i].length>0};for(var u=0;u<r[i].length;u++){var p=r[i][u].namespace;if(a.test(p))return{pass:!0}}return{pass:!1}}}},toHandleWith:function(){return{compare:function(e,t,r){if(!e||0===e.length)return{pass:!1};for(var s=t.split(".")[0],i=n._data(n(e).get(0),"events")[s],o=0;o<i.length;o++)if(i[o].handler==r)return{pass:!0};return{pass:!1}}}},toHaveBeenTriggeredOn:function(){return{compare:function(e,r){var s={pass:t.jQuery.events.wasTriggered(r,e)};return s.message=s.pass?"Expected event "+n(e)+" not to have been triggered on "+r:"Expected event "+n(e)+" to have been triggered on "+r,s}}},toHaveBeenTriggered:function(){return{compare:function(e){var n=e.eventName,r=e.selector,s={pass:t.jQuery.events.wasTriggered(r,n)};return s.message=s.pass?"Expected event "+n+" not to have been triggered on "+r:"Expected event "+n+" to have been triggered on "+r,s}}},toHaveBeenTriggeredOnAndWith:function(e,n){return{compare:function(r,s,i){var o=t.jQuery.events.wasTriggered(s,r),a={pass:o&&t.jQuery.events.wasTriggeredWith(s,r,i,e,n)};if(o){var u=t.jQuery.events.args(s,r,i)[1];a.message=a.pass?"Expected event "+r+" not to have been triggered with "+t.pp(i)+" but it was triggered with "+t.pp(u):"Expected event "+r+" to have been triggered with "+t.pp(i)+"  but it was triggered with "+t.pp(u)}else a.message=a.pass?"Expected event "+r+" not to have been triggered on "+s:"Expected event "+r+" to have been triggered on "+s;return a}}},toHaveBeenPreventedOn:function(){return{compare:function(e,n){var r={pass:t.jQuery.events.wasPrevented(n,e)};return r.message=r.pass?"Expected event "+e+" not to have been prevented on "+n:"Expected event "+e+" to have been prevented on "+n,r}}},toHaveBeenPrevented:function(){return{compare:function(e){var n=e.eventName,r=e.selector,s={pass:t.jQuery.events.wasPrevented(r,n)};return s.message=s.pass?"Expected event "+n+" not to have been prevented on "+r:"Expected event "+n+" to have been prevented on "+r,s}}},toHaveBeenStoppedOn:function(){return{compare:function(e,n){var r={pass:t.jQuery.events.wasStopped(n,e)};return r.message=r.pass?"Expected event "+e+" not to have been stopped on "+n:"Expected event "+e+" to have been stopped on "+n,r}}},toHaveBeenStopped:function(){return{compare:function(e){var n=e.eventName,r=e.selector,s={pass:t.jQuery.events.wasStopped(r,n)};return s.message=s.pass?"Expected event "+n+" not to have been stopped on "+r:"Expected event "+n+" to have been stopped on "+r,s}}}}),t.getEnv().addCustomEqualityTester(function(e,r){if(e&&r){if(e instanceof n||t.isDomNode(e)){var s=n(e);return r instanceof n?s.length==r.length&&e.is(r):s.is(r)}if(r instanceof n||t.isDomNode(r)){var i=n(r);return e instanceof n?e.length==i.length&&i.is(e):n(r).is(e)}}}),t.getEnv().addCustomEqualityTester(function(e,t){if(e instanceof n&&t instanceof n&&e.size()==t.size())return e.is(t)})}),afterEach(function(){t.getFixtures().cleanUp(),t.getStyleFixtures().cleanUp(),t.jQuery.events.cleanUp()}),e.readFixtures=function(){return t.getFixtures().proxyCallTo_("read",arguments)},e.preloadFixtures=function(){t.getFixtures().proxyCallTo_("preload",arguments)},e.loadFixtures=function(){t.getFixtures().proxyCallTo_("load",arguments)},e.appendLoadFixtures=function(){t.getFixtures().proxyCallTo_("appendLoad",arguments)},e.setFixtures=function(){return t.getFixtures().proxyCallTo_("set",arguments)},e.appendSetFixtures=function(){t.getFixtures().proxyCallTo_("appendSet",arguments)},e.sandbox=function(e){return t.getFixtures().sandbox(e)},e.spyOnEvent=function(e,n){return t.jQuery.events.spyOn(e,n)},e.preloadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("preload",arguments)},e.loadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("load",arguments)},e.appendLoadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("appendLoad",arguments)},e.setStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("set",arguments)},e.appendSetStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("appendSet",arguments)},e.loadJSONFixtures=function(){return t.getJSONFixtures().proxyCallTo_("load",arguments)},e.getJSONFixture=function(e){return t.getJSONFixtures().proxyCallTo_("read",arguments)[e]}}(window,window.jasmine,window.jQuery);