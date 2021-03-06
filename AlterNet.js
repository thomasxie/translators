{
	"translatorID": "ea531652-cdeb-4ec2-940e-627d4b107263",
	"label": "AlterNet",
	"creator": "Jesse Johnson, BBUCommander",
	"target": "^https?://(?:www\\.)alternet\\.org",
	"minVersion": "2.1",
	"maxVersion": "",
	"priority": 100,
	"browserSupport": "gcsibv",
	"inRepository": true,
	"translatorType": 4,
	"lastUpdated": "2012-01-01 01:42:16"
}

/* FW LINE 52:e3052edb02fe */ function flatten(c){var b=new Array();for(var d in c){var e=c[d];if(e instanceof Array){b=b.concat(flatten(e))}else{b.push(e)}}return b}var FW={_scrapers:new Array()};FW._Base=function(){this.callHook=function(b,c,e,a){if(typeof this["hooks"]==="object"){var d=this["hooks"][b];if(typeof d==="function"){d(c,e,a)}}};this.evaluateThing=function(f,e,c){var b=typeof f;if(b==="string"){return f}else{if(b==="object"){if(f instanceof Array){var d=this.evaluateThing;var a=f.map(function(g){return d(g,e,c)});return flatten(a)}else{return f.evaluate(e,c)}}else{if(b==="function"){return f(e,c)}else{return undefined}}}}};FW.Scraper=function(a){FW._scrapers.push(new FW._Scraper(a))};FW._Scraper=function(a){for(x in a){this[x]=a[x]}this._singleFieldNames=["abstractNote","applicationNumber","archive","archiveLocation","artworkMedium","artworkSize","assignee","audioFileType","audioRecordingType","billNumber","blogTitle","bookTitle","callNumber","caseName","code","codeNumber","codePages","codeVolume","committee","company","conferenceName","country","court","date","dateDecided","dateEnacted","dictionaryTitle","distributor","docketNumber","documentNumber","DOI","edition","encyclopediaTitle","episodeNumber","extra","filingDate","firstPage","forumTitle","genre","history","institution","interviewMedium","ISBN","ISSN","issue","issueDate","issuingAuthority","journalAbbreviation","label","language","legalStatus","legislativeBody","letterType","libraryCatalog","manuscriptType","mapType","medium","meetingName","nameOfAct","network","number","numberOfVolumes","numPages","pages","patentNumber","place","postType","presentationType","priorityNumbers","proceedingsTitle","programTitle","programmingLanguage","publicLawNumber","publicationTitle","publisher","references","reportNumber","reportType","reporter","reporterVolume","rights","runningTime","scale","section","series","seriesNumber","seriesText","seriesTitle","session","shortTitle","studio","subject","system","thesisType","title","type","university","url","version","videoRecordingType","volume","websiteTitle","websiteType"];this._makeAttachments=function(q,b,f,s){if(f instanceof Array){f.forEach(function(k){this._makeAttachments(q,b,k,s)},this)}else{if(typeof f==="object"){var p=f.urls||f.url;var m=f.types||f.type;var e=f.titles||f.title;var h=this.evaluateThing(p,q,b);var o=this.evaluateThing(e,q,b);var r=this.evaluateThing(m,q,b);var l=(r instanceof Array);var n=(o instanceof Array);if(!(h instanceof Array)){h=[h]}for(var j in h){var c=h[j];var g;var d;if(l){g=r[j]}else{g=r}if(n){d=o[j]}else{d=o}s.attachments.push({url:c,title:d,type:g})}}}};if(this.itemTrans!==undefined){this.makeItems=this.itemTrans.makeItems}else{this.makeItems=function(o,b,m,c,l){var q=new Zotero.Item(this.itemType);q.url=b;for(var h in this._singleFieldNames){var n=this._singleFieldNames[h];if(this[n]){var g=this.evaluateThing(this[n],o,b);if(g instanceof Array){q[n]=g[0]}else{q[n]=g}}}var r=["creators","tags"];for(var f in r){var p=r[f];var d=this.evaluateThing(this[p],o,b);if(d){for(var e in d){q[p].push(d[e])}}}this._makeAttachments(o,b,this["attachments"],q);c(q,this,o,b);l([q])}}};FW._Scraper.prototype=new FW._Base;FW.MultiScraper=function(a){FW._scrapers.push(new FW._MultiScraper(a))};FW._MultiScraper=function(a){for(x in a){this[x]=a[x]}this._mkSelectItems=function(e,d){var b=new Object;for(var c in e){b[d[c]]=e[c]}return b};this._selectItems=function(d,c,e){var b=new Array();Zotero.selectItems(this._mkSelectItems(d,c),function(f){for(var g in f){b.push(g)}e(b)})};this._mkAttachments=function(g,d,f){var b=this.evaluateThing(this["attachments"],g,d);var c=new Object();if(b){for(var e in f){c[f[e]]=b[e]}}return c};this._makeChoices=function(f,p,c,d,h){if(f instanceof Array){f.forEach(function(k){this._makeTitlesUrls(k,p,c,d,h)},this)}else{if(typeof f==="object"){var m=f.urls||f.url;var e=f.titles||f.title;var n=this.evaluateThing(m,p,c);var j=this.evaluateThing(e,p,c);var l=(j instanceof Array);if(!(n instanceof Array)){n=[n]}for(var g in n){var b=n[g];var o;if(l){o=j[g]}else{o=j}h.push(b);d.push(o)}}}};this.makeItems=function(j,b,g,c,f){if(this.beforeFilter){var k=this.beforeFilter(j,b);if(k!=b){this.makeItems(j,k,g,c,f);return}}var e=[];var h=[];this._makeChoices(this["choices"],j,b,e,h);var d=this._mkAttachments(j,b,h);this._selectItems(e,h,function(m){if(!m){f([])}else{var l=[];var n=this.itemTrans;Zotero.Utilities.processDocuments(m,function(q){var p=q.documentURI;var o=n;if(o===undefined){o=FW.getScraper(q,p)}if(o===undefined){}else{o.makeItems(q,p,d[p],function(r){l.push(r);c(r,o,q,p)},function(){})}},function(){f(l)})}})}};FW._MultiScraper.prototype=new FW._Base;FW.DelegateTranslator=function(a){return new FW._DelegateTranslator(a)};FW._DelegateTranslator=function(a){for(x in a){this[x]=a[x]}this._translator=Zotero.loadTranslator(this.translatorType);this._translator.setTranslator(this.translatorId);this.makeItems=function(g,d,b,f,c){var e;Zotero.Utilities.HTTP.doGet(d,function(h){this._translator.setHandler("itemDone",function(k,j){e=j;if(b){j.attachments=b}});if(this.preProcess){h=this.preProcess(h)}this._translator.setString(h);this._translator.translate();f(e)},function(){c([e])})}};FW.DelegateTranslator.prototype=new FW._Scraper;FW._StringMagic=function(){this._filters=new Array();this.addFilter=function(a){this._filters.push(a);return this};this.split=function(a){return this.addFilter(function(b){return b.split(a).filter(function(c){return(c!="")})})};this.replace=function(c,b,a){return this.addFilter(function(d){if(d.match(c)){return d.replace(c,b,a)}else{return d}})};this.prepend=function(a){return this.replace(/^/,a)};this.append=function(a){return this.replace(/$/,a)};this.remove=function(b,a){return this.replace(b,"",a)};this.trim=function(){return this.addFilter(function(a){return Zotero.Utilities.trim(a)})};this.trimInternal=function(){return this.addFilter(function(a){return Zotero.Utilities.trimInternal(a)})};this.match=function(a,b){if(!b){b=0}return this.addFilter(function(d){var c=d.match(a);if(c===undefined||c===null){return undefined}else{return c[b]}})};this.cleanAuthor=function(b,a){return this.addFilter(function(c){return Zotero.Utilities.cleanAuthor(c,b,a)})};this.key=function(a){return this.addFilter(function(b){return b[a]})};this.capitalizeTitle=function(){if(arguments.length>0&&arguments[0]==true){return this.addFilter(function(a){return Zotero.Utilities.capitalizeTitle(a,true)})}else{return this.addFilter(function(a){return Zotero.Utilities.capitalizeTitle(a)})}};this.unescapeHTML=function(){return this.addFilter(function(a){return Zotero.Utilities.unescapeHTML(a)})};this.unescape=function(){return this.addFilter(function(a){return unescape(a)})};this._applyFilters=function(c,e){for(i in this._filters){c=flatten(c);c=c.filter(function(a){return((a!==undefined)&&(a!==null))});for(var d=0;d<c.length;d++){try{if((c[d]===undefined)||(c[d]===null)){continue}else{c[d]=this._filters[i](c[d],e)}}catch(b){c[d]=undefined;Zotero.debug("Caught exception "+b+"on filter: "+this._filters[i])}}c=c.filter(function(a){return((a!==undefined)&&(a!==null))})}return c}};FW.PageText=function(){return new FW._PageText()};FW._PageText=function(){this._filters=new Array();this.evaluate=function(c){var b=[c.documentElement.innerHTML];b=this._applyFilters(b,c);if(b.length==0){return false}else{return b}}};FW._PageText.prototype=new FW._StringMagic();FW.Url=function(){return new FW._Url()};FW._Url=function(){this._filters=new Array();this.evaluate=function(d,c){var b=[c];b=this._applyFilters(b,d);if(b.length==0){return false}else{return b}}};FW._Url.prototype=new FW._StringMagic();FW.Xpath=function(a){return new FW._Xpath(a)};FW._Xpath=function(a){this._xpath=a;this._filters=new Array();this.text=function(){var b=function(c){if(typeof c==="object"&&c.textContent){return c.textContent}else{return c}};this.addFilter(b);return this};this.sub=function(b){var c=function(f,e){var d=e.evaluate(b,f,null,XPathResult.ANY_TYPE,null);if(d){return d.iterateNext()}else{return undefined}};this.addFilter(c);return this};this.evaluate=function(f){var e=f.evaluate(this._xpath,f,null,XPathResult.ANY_TYPE,null);var d=e.resultType;var c=new Array();if(d==XPathResult.STRING_TYPE){c.push(e.stringValue)}else{if(d==XPathResult.ORDERED_NODE_ITERATOR_TYPE||d==XPathResult.UNORDERED_NODE_ITERATOR_TYPE){var b;while((b=e.iterateNext())){c.push(b)}}}c=this._applyFilters(c,f);if(c.length==0){return false}else{return c}}};FW._Xpath.prototype=new FW._StringMagic();FW.detectWeb=function(e,b){for(var c in FW._scrapers){var d=FW._scrapers[c];var f=d.evaluateThing(d.itemType,e,b);var a=d.evaluateThing(d.detect,e,b);if(a.length>0&&a[0]){return f}}return undefined};FW.getScraper=function(b,a){var c=FW.detectWeb(b,a);return FW._scrapers.filter(function(d){return(d.evaluateThing(d.itemType,b,a)==c)&&(d.evaluateThing(d.detect,b,a))})[0]};FW.doWeb=function(c,a){var b=FW.getScraper(c,a);b.makeItems(c,a,[],function(f,e,g,d){e.callHook("scraperDone",f,g,d);if(!f.title){f.title=""}f.complete()},function(){Zotero.done()});Zotero.wait()};

function detectWeb(doc, url) { return FW.detectWeb(doc, url); }
function doWeb(doc, url) { return FW.doWeb(doc, url); }

// Articles
FW.Scraper({ 
	itemType         : 'magazineArticle',
	detect           : FW.Xpath('//meta[@name="title"]/@content'),
	title            : FW.Xpath('//div[@class="headline"]/h1').text(),
	creators         : FW.Xpath('//meta[@name="author"]/@content').text().split(',').cleanAuthor("author"),
	date             : FW.Xpath('//div[@class="story-date"]/em').text(),
	abstractNote     : FW.Xpath('//div[@class="teaser"]').text().trim(),
	extra            : FW.Xpath('//meta[@name="source"]/@content').text().prepend("Source of article: "),
	tags             : FW.Xpath('//meta[@name="keywords"]/@content').text().split(",").trim(),
	attachments      : [ {url:FW.Xpath('//div[@class="story_tools_print"]/a').key("href"), type:"text/html", title:"AlterNet Article Snapshot"} ],
	publicationTitle : "AlterNet",
	url              : FW.Url(),
});

// Blogs
FW.Scraper({ 
	itemType         : 'blogPost',
	detect           : FW.Url().match(/blogs\.alternet/),
	title            : FW.Xpath('//div[@class="headline"]/h1').text(),
	creators         : FW.Xpath('//div[@class="byline body_"]/a').text().split(',').cleanAuthor("author"),
	date             : FW.Xpath('//div[@class="byline body_"]').text().match(/(am|pm)\s*(.*)$/, 2).trim(),
	//abstractNote   : FW.Xpath('//
	//extra          : FW.Xpath('//
	//tags           : FW.Xpath('//
	//TODO print version of blog posts are CSS swaps and so would require a workaround to save
	attachments      : [ {url: FW.Url(), type:"text/html", title:"AlterNet Article Snapshot"} ],
	publicationTitle : "AlterNet",
	url              : FW.Url(),
});

/** Search results 
Erik's framework won't work, since the results are in an iframe
This will need to be done the traditional way, or the framework will need to be extended
FW.MultiScraper({ 
	itemType         : "multiple",
	detect           : FW.Url().match(/google\.com.*search_results\.html/),
	titles           : FW.Xpath('//div[@id="res"]//ol/li//h2/a').text(),
	urls             : FW.Xpath('//div[@id="res"]//ol/li//h2/a').key('href').text()
});
//*/
/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "http://www.alternet.org/story/152686/which_bank_is_the_worst_for_america_5_behemoths_that_hold_our_political_system_hostage_/",
		"items": [
			{
				"itemType": "magazineArticle",
				"creators": [
					{
						"firstName": "Sarah",
						"lastName": "Jaffe",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"AlterNet.org",
					"Independent Media",
					"Alternative News",
					"Media Activism",
					"The Drug War"
				],
				"seeAlso": [],
				"attachments": [
					{
						"url": "http://www.alternet.org/module/printversion/152686",
						"title": "AlterNet Article Snapshot",
						"type": "text/html"
					}
				],
				"url": "http://www.alternet.org/story/152686/which_bank_is_the_worst_for_america_5_behemoths_that_hold_our_political_system_hostage_/",
				"abstractNote": "We've ranked the banks based on how shamelessly they game the political process through lobbying, revolving door politics and campaign donations.",
				"date": "October 19, 2011",
				"extra": "Source of article: AlterNet",
				"publicationTitle": "AlterNet",
				"title": "Which Bank Is the Worst for America? 5 Behemoths That Hold Our Political System Hostage",
				"libraryCatalog": "AlterNet",
				"accessDate": "CURRENT_TIMESTAMP",
				"shortTitle": "Which Bank Is the Worst for America?"
			}
		]
	},
	{
		"type": "web",
		"url": "http://blogs.alternet.org/speakeasy/2011/02/12/black-history-month-is-herman-cain-playing-the-race-minstrel-for-cpac/",
		"items": [
			{
				"itemType": "blogPost",
				"creators": [
					{
						"firstName": "Chauncey",
						"lastName": "DeVega",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": [
					{
						"url": "http://blogs.alternet.org/speakeasy/2011/02/12/black-history-month-is-herman-cain-playing-the-race-minstrel-for-cpac/",
						"title": "AlterNet Article Snapshot",
						"type": "text/html"
					}
				],
				"url": "http://blogs.alternet.org/speakeasy/2011/02/12/black-history-month-is-herman-cain-playing-the-race-minstrel-for-cpac/",
				"date": "February 12, 2011",
				"publicationTitle": "AlterNet",
				"title": "Black History Month is Herman Cain Playing the Race Minstrel for CPAC",
				"libraryCatalog": "AlterNet",
				"accessDate": "CURRENT_TIMESTAMP"
			}
		]
	}
]
/** END TEST CASES **/