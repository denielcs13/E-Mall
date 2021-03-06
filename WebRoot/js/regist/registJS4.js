/* SiteCatalyst code version: H.24.1.
Copyright 1996-2011 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

var s_account="vipshop-prd";
var s=s_gi(s_account);
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8";
/* Conversion Config */
s.currencyCode="CNY";
/* Link Tracking Config */
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,apk,sisx";
s.linkInternalFilters="javascript:,vip.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
/* TimeParting Config */
s.dstStart="1/1/2008";
s.dstEnd="1/1/2009";
var tDate = new Date();
s.currentYear = tDate.getFullYear();
/* Plugin Config */
s.usePlugins=true;
function s_doPlugins(s) {

	//Time parting
	var t_hour=s.getTimeParting('h','8'); // Set hour 
	var t_day=s.getTimeParting('d','8'); // Set day
	s.eVar11=t_hour;
	s.eVar12=t_day;
	var date = new Date();
	s.eVar32 = date.getFullYear().toString()+"-"+date.getMonth().toString()+"-"+date.getDate().toString(); //鏃ユ湡
	var index = document.cookie.indexOf("vip_wh="); 
	if(index > -1){
	s.eVar33 = document.cookie.substring(index+7,index+13); //鍒嗕粨
	}
	//External campaign
	if(!s.campaign)
		s.campaign=s.getQueryParam('cmpid');
	 if(s.channel!="璐墿杞﹂〉闈�"){
		s.eVar18=s.channel;
	 }
	//Internal promotion
	if(!s.eVar22)
		s.eVar22=s.getQueryParam('intcmp');
	 //Set new/repeat
	 s.prop5=s.getNewRepeat();
	//Copy props to eVars
	s.eVar1=s.prop1;
	s.eVar2=s.prop2;
	s.eVar4=s.channel;
	s.eVar5=s.prop5;
	s.eVar8=s.prop8;
	s.prop3=document.location.href;
}
s.doPlugins=s_doPlugins;
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/*
 * Plugin: getTimeParting 2.0 - Set timeparting values based on time zone
 */
s.getTimeParting=new Function("t","z",""
+"var s=this,cy;dc=new Date('1/1/2000');"
+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
+"var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"
+"'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
+"var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';"
+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};"
+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
+"if(t=='d'){return dow};if(t=='w'){return dt}}};"
);

/*
 * Plugin: getNewRepeat
 */
s.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="vipshop"
s.trackingServer="vipshop.d2.sc.omtrdc.net"

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.1';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
+"fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
+"s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
+"rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
+"pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
+"(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
+"=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
+"_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
+"x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
+"r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+"oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
+"s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
+"('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
+"ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
+"ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
+"=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
+"(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;var setS_c_il = function(pars){if(window"
+".s_c_il)window.s_c_il[pars[0]].mrq(pars[1]+'')};setTimeout(function(){setS_c_il([s._in, un])},750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
+"s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
+"(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
+"me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
+"=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
+"=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
+"e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
+"=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
+"bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
+"){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v) {if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>="
+"0)){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.in"
+"dexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(s"
+"v){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';e"
+"lse if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}}if(qs"
+"!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType"
+"){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;"
+"if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&"
+"e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL"
+"'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS"
+"erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s"
+".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='"
+"cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els"
+"e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else"
+" if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q"
+"='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=="
+"'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if("
+"b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
+"):'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h."
+"indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if("
+"s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';r"
+"eturn ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],"
+"f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e"
+"){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&"
+"&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/"
+"':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INP"
+"UT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick"
+";if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='IN"
+"PUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o."
+"s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q="
+"'&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=funct"
+"ion(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=fun"
+"ction(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object"
+".prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}re"
+"turn s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick"
+":\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){i"
+"f(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s."
+"visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%1000"
+"0>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring"
+"(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)"
+"m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s"
+"=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl"
+")s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_"
+"i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l"
+"[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+"
+"\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);e"
+"lse s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i]"
+";if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&"
+"&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o."
+"e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}i"
+"f((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\""
+"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)"
+"/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o."
+"defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o"
+".n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;f"
+"or(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va"
+"_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!"
+"s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){va"
+"r s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk="
+"1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1"
+"900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_l"
+"l();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.s"
+"etUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){"
+"}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.in"
+"nerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.of"
+"fsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('"
+"s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if("
+"p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;"
+"s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s."
+"_1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.pa"
+"rentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if"
+"(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'"
+"?t:'o');q+='&pe='+s.pe+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');"
+"x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){i"
+"f(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq"
+"(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code"
+"};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightInc"
+"rementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<"
+"t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype"
+"[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].a"
+"pply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.b"
+"ody;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.ind"
+"exOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf("
+"'Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));els"
+"e s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.s"
+"a(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pa"
+"geURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s."
+"vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType,contextData,lightProfileID,lightStoreForSeconds,lightInc"
+"rementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<="
+"3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage"
+",plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitor"
+"SamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,li"
+"nkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;"
+"if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()





function oit_detail(pageName,oit_channel,prop4,prop2,prop8,prop9,oit_products,eVar14,eVar16)
{
	s.pageName="鍟嗗搧锛�"+pageName;     //椤甸潰鍚嶇О  鍟嗗搧璇︾粏椤�
	s.channel=oit_channel;                                    //鎵€灞為閬撳悕绉�
	s.prop4=prop4 ;                                     //椤甸潰绫诲瀷
	if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
	s.prop8=prop8;                                           //鍟嗗搧鎵€灞炲搧鐗�                          
	s.eVar14=eVar14;                                          //鍟嗗搧鎵€灞炵被鍨�                   
	s.eVar16=eVar16;                                          //鍟嗗搧鍚�
	s.prop9=prop9;                                          //鍟嗗搧鎵€灞炲搧鐗孖D
	s.products=pageName+";"+oit_products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3";        
	s.prop10="30s";                                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop2);alert(s.products);
}
function oit_detail_cart(oit_products_size,oit_products_size_id)
{
	var s=s_gi(s_account);                                                              
	s.linkTrackVars='products,eVar10,events';
	s.linkTrackEvents='scAdd';       
	s.events='scAdd';      
	s.eVar10=oit_products_size_id;       //娉細姝ゅ彉閲忚褰曞昂鐮佷俊鎭€�                                                                    
	s.products='; '+oit_products_size;  //娉細浠呮坊鍔犺嚦璐墿杞︾殑浜у搧鏂瑰彲鍒楀叆products鍙橀噺銆�
	s.eVar10=oit_products_size; //娉細姝ゅ彉閲忚褰曟坊鍔犲埌璐墿杞︾殑浜у搧灏虹爜淇℃伅銆�    
	s.tl(this,'o','ShoppingCart');
   
}

function oit_detail_cart_list(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細鏌ョ湅璐墿杞�"; //椤甸潰鍚嶇О
	s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scView";                    //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}

function oit_detail_cart_list_submit(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
	s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}


function oit_detail_cart_sucess(oit_products_sizes,oit_order_sn,oit_pay_type)
{
	s.pageName="璐墿杞﹂〉闈細璁㈠崟纭椤甸潰"; //椤甸潰鍚嶇О
	s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;  //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
	s.events="purchase";                    //  鍟嗗搧缁撶畻浜嬩欢                                                           
	s.purchaseID=oit_order_sn;            //鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
	s.eVar5=oit_pay_type;                     //璁板綍浠樻鏂瑰紡                                    s.eVar6="UPS"                          //璁板綍蹇€掓柟寮�
	s.prop10="30s";                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
//	alert(s.products);
}

function oit_list(pageName,oit_channel,prop1,prop4,prop2,prop8,prop9)
{
		s.pageName=pageName;				//椤甸潰鍚嶇О 濂冲＋锛歐.S.M
		s.channel=oit_channel;          //鎵€灞為閬撳悕绉�
		s.prop1=prop1;                 //鎵€灞炰簩绾ч閬撳悕绉�
		if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
		s.prop4=prop4;       //椤甸潰绫诲瀷
		s.prop8=prop8;             //鍟嗗搧鎵€灞炲搧鐗�
		s.prop9=prop9;            //鍝佺墝ID                                                           
		s.eVar3="鍟嗗搧鍒楄〃娴忚";      //浜у搧鏌ユ壘鏂规硶锛屽彲鏍规嵁闇€瑕佸湪鈥滈椤碘€濇垨鈥滃唴閮ㄤ績閿€椤甸潰鈥濊缃鍙橀噺鍊间负鈥滈椤典績閿€鈥濇垨鈥滃唴閮ㄤ績閿€鈥�
		s.prop10="30s";               //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop1);alert(s.prop2);alert(s.prop4);alert(s.prop8);alert(s.prop9);
}
function oit_index_two(pageName,oit_channel,prop1,prop4)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		s.channel=oit_channel;                //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		s.prop1=prop1;                  //鎵€灞炰簩绾ч閬撳悕绉�
		s.prop4=prop4;                //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		s.prop10="30s"                    //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
function oit_index_channal(pageName,oit_channel,prop4)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		s.channel=oit_channel;                //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		s.prop4=prop4;                //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		s.prop10="30s";                    //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}

function oit_index(pageName,oit_channel,prop4,prop8)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		s.channel=oit_channel;                //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		s.prop4=prop4;                //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		s.prop8=prop8;          //鍝佺墝
		s.prop10="30s";                  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}


function oit_account(pageName,channel,prop4)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭〉闈㈠悕绉板彲浠ヤ负鈥滆嚜鍔╅€€璐р€濓紝鈥滄垜閭€璇风殑鏈嬪弸鈥�
		s.channel=channel;                 //鎵€灞為閬撳悕绉�
		s.prop4=prop4;               //椤甸潰绫诲瀷
		s.prop10="30s"                      //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//	alert(pageName); 
}

function oit_reg(eVar91)
{	
var s=s_gi(s_account);
s.linkTrackVars='eVar9,events';
s.linkTrackEvents='event1';
s.eVar9=eVar91;//eVar9璁板綍璁垮娉ㄥ唽鏂瑰紡                                                                           
s.events='event1';
s.tl(this,'o','Register Success');	
}
function oit_order_cancel(eVar13)
{	
var s=s_gi(s_account); 
s.linkTrackVars='eVar13,events'; 
s.linkTrackEvents='event4'; 
s.events='event4';
s.eVar13=eVar13; 
s.tl(this,'o','CancelOrder');
}
function oit_order_del(eVar13)
{	
var s=s_gi(s_account); 
s.linkTrackVars='eVar13,events'; 
s.linkTrackEvents='event4'; 
s.events='event4';
s.eVar13=eVar13; 
s.tl(this,'o','DelOrder');
}

function oit_tour_index(pageName,oit_channel,prop4)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		s.channel=oit_channel;                //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		s.prop4=prop4;                //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		s.prop10="30s";                  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
function oit_tour_detail(pageName,channel,prop4,prop2,eVar14,products)
{
	s.pageName=pageName;   //椤甸潰鍚嶇О
	s.channel=channel;                                 //鎵€灞為閬撳悕绉�
	s.prop4=prop4;                                    //椤甸潰绫诲瀷
	s.prop2=prop2;      // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇                        
	s.eVar14=eVar14;                                          //鏃呰鎵€灞炵被鍨嬶細鍛ㄨ竟娓革紝闀块€旀父锛屽晢鍔￠厭搴�
	s.products=";"+products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3" ;       
	s.prop10="30s";                                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
function oit_tour_submit(pageName,channel,prop4,products)
{
s.pageName=pageName;   //椤甸潰鍚嶇О
s.channel=channel;                                 //鎵€灞為閬撳悕绉�
s.prop4=prop4;                                    //椤甸潰绫诲瀷
s.products=";"+products;                 //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
s.events="event5"                      //  璁㈠崟纭
s.prop10="30s"                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
function oit_tour_submit_post(pageName,channel,prop4,products) {
	s.pageName = pageName; 			// 椤甸潰鍚嶇О
	s.channel = channel;        	// 鎵€灞為閬撳悕绉�
	s.prop4 = prop4;          		// 椤甸潰绫诲瀷
	s.products = products;     		// 鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events = "event6";       		// 鍓嶅線浠樻浜嬩欢
	s.prop10 = "30s";              	// 娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
function oit_tour_submit_success(pageName,channel,prop4,products,order_sn,pay_type) {
	s.pageName = pageName; 			// 椤甸潰鍚嶇О
	s.channel = channel;            // 鎵€灞為閬撳悕绉�
	s.prop4 = prop4;				// 椤甸潰绫诲瀷
	s.products = ";"+products;        	// 鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
	s.events = "purchase";          // 鍟嗗搧缁撶畻浜嬩欢                                                           
	s.purchaseID = order_sn;        // 鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
	s.eVar17 = s.purchaseID;        // 璁㈠崟ID璧嬪€肩粰eVar17鍙橀噺                      
	s.eVar6 = pay_type;             // 璁板綍浠樻鏂瑰紡                                                                         
	s.prop10 = "30s";               // 娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}


//**********************************鍞搧鍥�***********************************
function oit_tuan_detail(pageName,oit_channel,prop4,prop2,eVar14,oit_products)
{
	s.pageName="鍞搧鍥細"+pageName;     //椤甸潰鍚嶇О  鍟嗗搧璇︾粏椤�
	s.channel=oit_channel;                                    //鎵€灞為閬撳悕绉�
	s.prop4=prop4 ;                                     //椤甸潰绫诲瀷
	if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍟嗗搧锛屽巻鍙蹭笂绾垮晢鍝侊級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
	s.eVar14=eVar14;                                          //鍟嗗搧鎵€灞炵被鍨�            
	s.products=pageName+";"+oit_products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3";        
	s.prop10="30s";                                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop2);alert(s.products);
}

function oit_tuan_detail_cart(oit_products_size,oit_products_size_id)
{
	var s=s_gi(s_account);                                                              
	s.linkTrackVars='products,eVar10,events';
	s.linkTrackEvents='scAdd';       
	s.events='scAdd';      
	s.eVar10=oit_products_size_id;       //娉細姝ゅ彉閲忚褰曞昂鐮佷俊鎭€�                                                                    
	s.products='; '+oit_products_size;  //娉細浠呮坊鍔犺嚦璐墿杞︾殑浜у搧鏂瑰彲鍒楀叆products鍙橀噺銆�
	s.eVar10=oit_products_size; //娉細姝ゅ彉閲忚褰曟坊鍔犲埌璐墿杞︾殑浜у搧灏虹爜淇℃伅銆�    
	s.tl(this,'o','ShoppingCart');
   
}

function oit_tuan_detail_cart_list(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細鏌ョ湅璐墿杞�"; //椤甸潰鍚嶇О
	s.channel="鍞搧鍥�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scView";                    //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}

function oit_tuan_detail_cart_list_submit(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
	s.channel="鍞搧鍥�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}


function oit_tuan_detail_cart_sucess(oit_products_sizes,oit_order_sn,oit_pay_type,eVar23)
{
	s.pageName="璐墿杞﹂〉闈細璁㈠崟纭椤甸潰"; //椤甸潰鍚嶇О
	referer = document.referrer;
	if(referer == "http://checkout.vip.com/shan/?ind=1"){
	s.channel="鍞搧鍥細渚涘簲鍟嗗彂璐�";
	}else{
	s.channel="鍞搧鍥�";        //鎵€灞為閬撳悕绉�
	}
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;  //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧2ID;鍟嗗搧2鏁伴噺;鍟嗗搧2鎬讳环"锛変骇鍝両D鏍煎紡涓猴細鍝佺墝ID+鍟嗗搧ID+灏虹爜ID
	s.events="purchase";                    //  鍟嗗搧缁撶畻浜嬩欢                                                           
	s.purchaseID=oit_order_sn;            //鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                                                                         
	s.eVar6=oit_pay_type;                     //璁板綍浠樻鏂瑰紡   
	s.eVar23=eVar23;                          //浼犲叆浠ｉ噾鍒搁噾棰�
	s.prop10="30s";                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
//	alert(s.products);
}

function oit_tuan_list(pageName,oit_channel,prop4,prop11)
{
		s.pageName=pageName;				//椤甸潰鍚嶇О 濂冲＋锛歐.S.M
		s.channel="鍞搧鍥�";          //鎵€灞為閬撳悕绉�
		if(prop11==1)
		{
			s.prop11="浠婃棩涓婄嚎鍟嗗搧" ;        // 闇€瑕佹偍鏍规嵁鍟嗗搧灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop11="鍘嗗彶涓婄嚎鍟嗗搧" ; 
		}
		s.prop4=prop4;       //椤甸潰绫诲瀷                                                        
		s.eVar3="鍟嗗搧鍒楄〃娴忚";      //浜у搧鏌ユ壘鏂规硶锛屽彲鏍规嵁闇€瑕佸湪鈥滈椤碘€濇垨鈥滃唴閮ㄤ績閿€椤甸潰鈥濊缃鍙橀噺鍊间负鈥滈椤典績閿€鈥濇垨鈥滃唴閮ㄤ績閿€鈥�
		s.prop10="30s";               //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop1);alert(s.prop2);alert(s.prop4);alert(s.prop8);alert(s.prop9);
}

function oit_tuan_viewAlsoViewed(pageName,eVar21)
{
	s.pageName="鍏宠仈閿€鍞細"+pageName;     //椤甸潰鍚嶇О  鍟嗗搧璇︾粏椤�
	s.eVar21=eVar21; //鏌ョ湅杩囨鍟嗗搧鐨勪汉杩樼湅杩囩殑閾炬帴锛屼紶鍏ュ弬鏁颁负url  
}
//**********************************濂緢鍝�***********************************
function oit_lux_detail(pageName,prop2,prop8,prop9,oit_products,eVar14,eVar16)
{
	s.pageName="濂緢鍝侊細"+pageName;     //椤甸潰鍚嶇О  鍟嗗搧璇︾粏椤�
	s.channel="濂緢鍝�";                                //鎵€灞為閬撳悕绉�
	s.prop4="鍟嗗搧璇︽儏椤甸潰";                                      //椤甸潰绫诲瀷
	if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
	s.prop8=prop8;                                           //鍟嗗搧鎵€灞炲搧鐗�                          
	s.eVar14=eVar14;                                          //鍟嗗搧鎵€灞炵被鍨�                   
	s.eVar16=eVar16;                                          //鍟嗗搧鍚�
	s.prop9=prop9;                                          //鍟嗗搧鎵€灞炲搧鐗孖D
	s.products=pageName+";"+oit_products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3";        
	s.prop10="30s";                                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop2);alert(s.products);
}
function oit_lux_detail_cart(oit_products_size,oit_products_size_id)
{
	var s=s_gi(s_account);                                                              
	s.linkTrackVars='products,eVar10,events';
	s.linkTrackEvents='scAdd';       
	s.events='scAdd';      
	s.eVar10=oit_products_size_id;       //娉細姝ゅ彉閲忚褰曞昂鐮佷俊鎭€�                                                                    
	s.products='; '+oit_products_size;  //娉細浠呮坊鍔犺嚦璐墿杞︾殑浜у搧鏂瑰彲鍒楀叆products鍙橀噺銆�
	s.eVar10=oit_products_size; //娉細姝ゅ彉閲忚褰曟坊鍔犲埌璐墿杞︾殑浜у搧灏虹爜淇℃伅銆�    
	s.tl(this,'o','ShoppingCart');
   
}

function oit_lux_detail_cart_list(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細鏌ョ湅璐墿杞�"; //椤甸潰鍚嶇О
	s.channel="濂緢鍝�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scView";                    //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}

function oit_lux_detail_cart_list_submit(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
	s.channel="濂緢鍝�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	
}


function oit_lux_detail_cart_sucess(oit_products_sizes,oit_order_sn,oit_pay_type,eVar23)
{
	s.pageName="璐墿杞﹂〉闈細璁㈠崟纭椤甸潰"; //椤甸潰鍚嶇О
	s.channel="濂緢鍝�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;  //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
	s.events="purchase";                    //  鍟嗗搧缁撶畻浜嬩欢                                                           
	s.purchaseID=oit_order_sn;            //鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
	s.eVar6=oit_pay_type;                     //璁板綍浠樻鏂瑰紡                                    s.eVar6="UPS"                          //璁板綍蹇€掓柟寮�
	s.prop10="30s";                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	s.eVar23 = eVar23;                       //浼犲叆浠ｉ噾鍒搁噾棰�
//	alert(s.products);
}

function oit_lux_list(pageName,prop4,prop2,prop8,prop9)
{
		s.pageName="濂緢鍝侊細"+pageName;				//椤甸潰鍚嶇О 濂冲＋锛歐.S.M
		s.channel="濂緢鍝�";          //鎵€灞為閬撳悕绉�
		if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
		s.prop4=prop4;       //椤甸潰绫诲瀷
		s.prop8=prop8;             //鍟嗗搧鎵€灞炲搧鐗�
		s.prop9=prop9;            //鍝佺墝ID                                                           
		s.eVar3="鍟嗗搧鍒楄〃娴忚";      //浜у搧鏌ユ壘鏂规硶锛屽彲鏍规嵁闇€瑕佸湪鈥滈椤碘€濇垨鈥滃唴閮ㄤ績閿€椤甸潰鈥濊缃鍙橀噺鍊间负鈥滈椤典績閿€鈥濇垨鈥滃唴閮ㄤ績閿€鈥�
		s.prop10="30s";               //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop1);alert(s.prop2);alert(s.prop4);alert(s.prop8);alert(s.prop9);
}


function oit_lux_index(pageName,oit_channel,prop4,prop8)
{
		s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		s.channel="濂緢鍝�";               //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		s.prop4=prop4;                //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		s.prop8=prop8;          //鍝佺墝
		s.prop10="30s";                  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}

//*******************************************鏂扮増璐墿杞﹂〉闈�******************************************
function oit_detail_cart_list_test(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細鏌ョ湅璐墿杞�"; //椤甸潰鍚嶇О
	s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scView";                    //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	
}

function oit_detail_cart_list_submit_test(oit_products_sizes,eVar23)
{
 s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
 s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
 s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
 s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
 s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
 s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
 s.eVar23=eVar23;  //浼犲叆浠ｉ噾鍒搁噾棰�
}

function oit_detail_cart_sucess_test(oit_products_sizes,oit_order_sn,oit_pay_type)
{
 s.pageName="璐墿杞﹂〉闈細璁㈠崟纭椤甸潰"; //椤甸潰鍚嶇О
 s.channel="鍞搧鐗瑰崠浼�";        //鎵€灞為閬撳悕绉�
 s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
 s.products=oit_products_sizes;  //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
 s.events="purchase";                    //  鍟嗗搧缁撶畻浜嬩欢                                                           
 s.purchaseID=oit_order_sn;            //鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
 s.eVar6=oit_pay_type;                     //璁板綍浠樻鏂瑰紡                                    s.eVar6="UPS"                          //璁板綍蹇€掓柟寮�
 s.prop10="30s";                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�

}

//鐩戞帶娣诲姞鏀惰棌
function oit_fav(eVar24){
   s.eVar24 = "鏀惰棌锛�"+eVar24;
}
//***********************************鏂扮増鏃呮父棰戦亾***********************************************************************
//鏂扮増鏃呮父棰戦亾棣栭〉
function oit_new_tour_index(pageName)
{
		//s.pageName=pageName;             //椤甸潰鍚嶇О锛屽叾浠栭閬撳鈥滈棯璐椤碘€濓紝鈥滄梾琛岄椤碘€濈瓑
		//s.channel="鏃呮父棰戦亾";               //鎵€灞為閬撳悕绉帮紝鍏朵粬棰戦亾鍚嶇О濡傗€滈棯璐€濓紝鈥滄梾琛屸€濈瓑
		//s.prop4="棰戦亾棣栭〉";              //椤甸潰绫诲瀷锛屾墍鏈夐閬撻椤甸兘瀹氫箟涓衡€滈閬撻椤碘€�
		//s.prop10="30s";                  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
//鏃呮父搴﹀亣棰戦亾銆侀厭搴楅閬撱€佷笁浜氶閬撳晢鍝佸垪琛ㄩ〉
function oit_new_tour_list(pageName,eVar14){
s.pageName=pageName;   //浼犲叆鏃呮父搴﹀亣鍟嗗搧鍒楄〃椤垫垨閰掑簵鍟嗗搧鍒楄〃椤垫垨涓変簹鍟嗗搧鍒楄〃椤�
s.channel="鏃呮父棰戦亾"; //
s.prop4="棰戦亾棣栭〉";       
s.prop10="30s"; 
s.eVar14=eVar14;                                          //鏃呰鎵€灞炵被鍨嬶細寰梾琛岋紝闀块€旀父锛岀簿鍝侀厭搴�,鑹洪緳閰掑簵 
}

//鍟嗗搧璇︽儏椤甸潰
function oit_new_tour_detail(pageName,prop2,eVar14,products){
	s.pageName=document.title;                                //椤甸潰鍚嶇О
	s.channel="鏃呮父棰戦亾";                                 //鎵€灞為閬撳悕绉�
	s.prop4="鍟嗗搧璇︽儏椤甸潰";                                    //椤甸潰绫诲瀷
	if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        
		}else{                                          // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇  
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}                                                       
	s.eVar14=eVar14;                                          //鏃呰鎵€灞炵被鍨嬶細寰梾琛岋紝闀块€旀父锛岀簿鍝侀厭搴�,鑹洪緳閰掑簵
	s.products=";"+products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3" ;       
	s.prop10="30s";                                        //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
//璁㈠崟纭椤甸潰
function oit_new_tour_submit(pageName,prop4,products)
{
s.pageName=pageName;   //椤甸潰鍚嶇О
s.channel="鏃呮父棰戦亾";                                 //鎵€灞為閬撳悕绉�
s.prop4=prop4;                                    //椤甸潰绫诲瀷
s.products=";"+products;                 //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
s.events="event5"                      //  璁㈠崟纭
s.prop10="30s"                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
//鐐瑰嚮鎻愪氦璁㈠崟鎸夐挳浜嬩欢
function oit_new_tour_submit_post(pageName,prop4,products) {
	s.pageName = pageName; 			// 椤甸潰鍚嶇О
	s.channel = "鏃呮父棰戦亾";        	// 鎵€灞為閬撳悕绉�
	s.prop4 = prop4;          		// 椤甸潰绫诲瀷
	s.products = products;     		// 鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events = "event6";       		// 鍓嶅線浠樻浜嬩欢
	s.prop10 = "30s";              	// 娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
//鎻愪氦璁㈠崟鎴愬姛椤甸潰
function oit_new_tour_submit_success(pageName,prop4,products,order_sn,pay_type,eVar23) {
	s.pageName = pageName; 			// 椤甸潰鍚嶇О
	s.channel = "鏃呮父棰戦亾";         // 鎵€灞為閬撳悕绉�
	s.prop4 = prop4;				// 椤甸潰绫诲瀷
	s.products = ";"+products;        	// 鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
	s.events = "purchase";          // 鍟嗗搧缁撶畻浜嬩欢                                                           
	s.purchaseID = order_sn;        // 鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
	s.eVar17 = s.purchaseID;        // 璁㈠崟ID璧嬪€肩粰eVar17鍙橀噺                      
	s.eVar6 = pay_type;             // 璁板綍浠樻鏂瑰紡   
	s.eVar23 = eVar23;                // 浠ｉ噾鍒搁噾棰�                                                                      
	s.prop10 = "30s";               // 娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}
//********************************鍞搧鍥緵搴斿晢鍙戣揣***********************
function oit_tuan_detail_supplier(prop11,eVar14,eVar16,oit_products)
{
	s.pageName="鍞搧鍥細"+eVar16;     //椤甸潰鍚嶇О  鍟嗗搧璇︾粏椤�
	s.channel="鍞搧鍥細渚涘簲鍟嗗彂璐�";                                    //鎵€灞為閬撳悕绉�
	s.prop4="鍟嗗搧璇︾粏椤甸潰" ;                                     //椤甸潰绫诲瀷
	if(prop11==1)
		{
			s.prop11="浠婃棩涓婄嚎鍝佺墝" ;        // 闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍟嗗搧锛屽巻鍙蹭笂绾垮晢鍝侊級鍋氬嚭鍒ゆ柇
		}else{
			s.prop11="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
	s.eVar14=eVar14;                                          //鍟嗗搧鎵€灞炵被鍨�
	s.eVar16=eVar16;                                          //鍟嗗搧鍚�
	s.products=";"+oit_products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3";        
	s.prop10="30s";                                         //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	//alert(s.pageName);alert(s.channel);alert(s.prop2);alert(s.products);
}

function oit_tuan_cart_submit_supplier(oit_products_sizes){
	s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
	s.channel="鍞搧鍥細渚涘簲鍟嗗彂璐�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
}


//***********************************************鍞搧灏�*****************************************
function oit_fashion_index(){
	s.pageName="鍞搧灏氶椤�";
	s.channel="鍞搧灏�";
	s.prop4="棣栭〉";
	}

function oit_fashion_brand_list(prop1){
	s.pageName="鍞搧灏氬搧鐗屽垪琛ㄩ〉:"+prop1;
	s.channel="鍞搧灏�";
	s.prop4="鍞搧灏氬搧鐗�";
	s.prop1 = prop1; //鍝佺墝鍒嗙被锛氬叏閮ㄥ搧鐗岋紝鐢峰＋鍝佺墝锛屽コ澹搧鐗岋紝鍎跨鍝佺墝锛屽眳瀹跺搧鐗�
}

function oit_fashion_brand_ending(prop2,prop8,prop9){
	s.pageName = "鍞搧灏�-"+prop8+"-鍟嗗搧鍒楄〃椤�";
	s.channel = "鍞搧灏�";
	if(prop2==1)
		{
			s.prop2="浠婃棩涓婄嚎鍝佺墝" ;        // 鎵€灞炲搧鐗岄閬擄紝闇€瑕佹偍鏍规嵁鍝佺墝灞炴€э紙浠婃棩涓婄嚎鍝佺墝锛屽巻鍙蹭笂绾垮搧鐗岋級鍋氬嚭鍒ゆ柇
		}else{
			s.prop2="鍘嗗彶涓婄嚎鍝佺墝" ; 
		}
	s.prop4="鍞搧灏氬搧鐗�";
	s.prop8=prop8;             //鍟嗗搧鎵€灞炲搧鐗�
	s.prop9=prop9;            //鍝佺墝ID        
}

function oit_fashion_detail(prop8,prop9,eVar14,eVar16,oit_products){
	s.pageName="鍞搧灏�-"+prop8+"-"+eVar16+"-"+"鍟嗗搧璇︽儏椤甸潰"; 
	s.channel="鍞搧灏�";
	s.prop4="鍟嗗搧璇︽儏椤甸潰" ;    //椤甸潰绫诲瀷
	s.prop8=prop8;                                           //鍟嗗搧鎵€灞炲搧鐗�                          
	s.eVar14=eVar14;                                          //鍟嗗搧鎵€灞炵被鍨�                   
	s.eVar16=eVar16;                                          //鍟嗗搧鍚�
	s.prop9=prop9;                                          //鍟嗗搧鎵€灞炲搧鐗孖D
	s.products=";"+oit_products;                                 //浜у搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛�
	s.events="prodView,event3";      
}

function oit_fashion_special_list(){
	s.pageName="鍞搧灏氫笓棰樺垪琛ㄩ〉";
	s.channel="鍞搧灏�";
	s.prop4="鍞搧灏氫笓棰�";
}

function oit_fashion_special_ending(pageName){
	s.pageName = "鍞搧灏�-"+pageName;
	s.channel = "鍞搧灏�";
	s.prop4="鍞搧灏氫笓棰�";
}

function oit_fashion_sort_list(eVar14){
	s.pageName = "鍞搧灏氬垎绫诲晢鍝佸垪琛ㄩ〉";
	s.channel = "鍞搧灏�";
	s.prop4="鍞搧灏氬垎绫�";
	s.eVar14="鍞搧灏�-"+eVar14; //鍟嗗搧鎵€灞炲垎绫�
}

function oit_fashion_cart_view(oit_products_sizes)
{
	s.pageName="璐墿杞﹂〉闈細鏌ョ湅璐墿杞�"; //椤甸潰鍚嶇О
	s.channel="鍞搧灏�";        //鎵€灞為閬撳悕绉�
	s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
	s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
	s.events="scView";                    //  鍟嗗搧缁撶畻浜嬩欢
	s.prop10="30s";  //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
	
}

function oit_fashion_cart_checkout(oit_products_sizes,eVar23)
{
 s.pageName="璐墿杞﹂〉闈細缁撶畻椤甸潰"; //椤甸潰鍚嶇О
 s.channel="鍞搧灏�";        //鎵€灞為閬撳悕绉�
 s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
 s.products=oit_products_sizes;   //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID锛岋紱鍟嗗搧2ID"锛�
 s.events="scCheckout";                   //  鍟嗗搧缁撶畻浜嬩欢
 s.prop10="30s";                          //娉細闇€瑕佹妧鏈悓浜嬪皢椤甸潰鍔犺浇鏃堕棿璧嬪€肩粰姝ゅ彉閲�
 s.eVar23=eVar23;  //浼犲叆浠ｉ噾鍒搁噾棰�
}

function oit_fashion_cart_purchase(oit_products_sizes,oit_order_sn,oit_pay_type,eVar29,eVar31)
{
 s.pageName="璐墿杞﹂〉闈細璁㈠崟纭椤甸潰"; //椤甸潰鍚嶇О
 s.channel="鍞搧灏�";        //鎵€灞為閬撳悕绉�
 s.prop4="璐墿杞﹂〉闈�";         //椤甸潰绫诲瀷
 s.products=oit_products_sizes;  //鍟嗗搧淇℃伅锛堟牸寮忎负s.products=";鍟嗗搧ID;姝や欢鍟嗗搧鏁伴噺;姝や欢鍟嗗搧鎬讳环"锛屽鏋滆喘鐗╄溅涓瓨鍦ㄥ涓骇鍝侊細s.products=";鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环,;鍟嗗搧1ID;鍟嗗搧1鏁伴噺;鍟嗗搧1鎬讳环"锛�
 s.events="purchase";                    //  鍟嗗搧缁撶畻浜嬩欢                                                           
 s.purchaseID=oit_order_sn;            //鎮ㄥ彲浠ヤ娇鐢ㄨ鍗旾D涓烘鍙橀噺璧嬪€�                      
 s.eVar6=oit_pay_type;                     //璁板綍浠樻鏂瑰紡                                  
 s.eVar29=eVar29;                       //璁㈠崟搴斾粯閲戦
 s.eVar31=eVar31;                       //璁㈠崟鍟嗗搧鎬讳欢鏁�

}
s.doPlugins(s);
(function(){
	//淇濊瘉omniture鍦ㄧ晫闈腑鐨勬湁鏁堟€э紝闃叉鐣岄潰涓病鏈夊畾涔塷mniture
	if(typeof(omniture) == "undefined"){
		omniture = {};
	}
	
	//run_t 浠ｈ〃鏄惁鎵ц澶栭儴t()  undefined 鎴栬€� 0 涓虹洿鎺ユ墽琛�
	
	
	//鐗瑰崠浼�:鍝佺墝鍒楄〃椤�
	var vipshop_show = {"s_account" :"vipshoptuan-test" ,"run_t" :"1","eventPro" : function(){
		var s1 = s_gi('vipshoptuan-test');
		var search = document.location.search;
		if (search =="") {
			s1.pageName ="鐗瑰崠浼�:鍝佺墝鍒楄〃椤�-" + omniture.brandId +"-" + omniture.brandName;
		} else {
			s1.pageName ="鐗瑰崠浼�:鍝佺墝鍒楄〃椤碉紙绛涢€夛級-" + omniture.brandId +"-" + omniture.brandName;
		}
		s1.channel ="鐗瑰崠浼�";
		s1.prop8 = omniture.brandName;
		s1.prop4 ="鐗瑰崠浼�:鍝佺墝鍒楄〃椤�";
		s1.prop9 = omniture.brandId;
		s1.events ="event30";
		s1.prop3 = s.prop3;
		s1.eVar11 = s.eVar11;
		s1.eVar12 = s.eVar12;
		s1.eVar32 = s.eVar32;
		s1.eVar33 = s.eVar33;
		s1.eVar22 = s.eVar22;
		s1.prop5 = s.prop5;
		s1.eVar5 = s.eVar5;
		s1.trackInlineStats = true;
		s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
		s1.t();
	}};
	//鍞搧灏�
	var check_out_goods_order = {"s_account" :"vipshopfashion" ,
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"products": s.products,
		"events": s.events,
		"purchaseID": s.purchaseID,
		"eVar6": s.eVar6,
		"eVar29": s.eVar29,
		"eVar31": s.eVar31,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	//鐗瑰崠浼�:璁㈠崟椤电‘璁�
	var checkout_te = {
		"s_account" : 'vipshoptuan-test',
		"pageName":"鐗瑰崠浼�:璁㈠崟椤电‘璁�",
		"channel":"鐗瑰崠浼�",
		"prop4":"鐗瑰崠浼�:璁㈠崟椤电‘璁�",
		"events":"scCheckout,event35",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	//鐗瑰崠浼�:鎴愰兘棣栭〉
	var index_cd = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鎴愰兘棣栭〉',
		"prop4": '鐗瑰崠浼�:鎴愰兘鑰佸棣栭〉',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		},
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鍞搧鍥�: 鍟嗗搧椤�
	var day_detail = {
		"s_account" :"vipshoptuan-test",
		"pageName":"鍞搧鍥�: 鍟嗗搧椤� -" + omniture.productName,
		"channel":"鍞搧鍥�",
		"prop4":"鍞搧鍥㈠晢鍝侀〉",
		"prop2":s.prop2,
		"eVar14":omniture.catName,
		"products":";" + omniture.productId,
		"events":"proView,event3,event28",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鐗瑰崠浼�:涓婃捣濂冲＋棰戦亾棣栭〉
	var sh_women = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣濂冲＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣濂冲＋棰戦亾棣栭〉',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		},
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鐗瑰崠浼�:鍖椾含棣栭〉
	var beijing_vipshop = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含鑰佸棣栭〉',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		},
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var category_vipfashion_q = {
		"s_account" :"vipshopfashion",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"eVar14": s.eVar14,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	//鐗瑰崠浼�:鎴愰兘鍎跨棰戦亾棣栭〉
	var cd_child = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鎴愰兘鍎跨棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鎴愰兘鍎跨棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//濂緢鍝侀椤�
	var lux_vipshop_com = {
		"s_account" :"vipshoptuan-test",
		"pageName":"濂緢鍝侀椤�",
		"channel":"濂緢鍝�",
		"prop4":"棣栭〉",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//omniture_package
	var omniture_package = {
		"s_account" :"vipshoptuan-test",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鐗瑰崠浼�:涓婃捣棣栭〉
	var shanghai_vipshop = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣鑰佸棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:鍖椾含灞呭棰戦亾棣栭〉
	var sd_life = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含灞呭棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含灞呭棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	var cart_goods_vipshop = {
		"s_account" :"vipshoptuan-test",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"products": s.products,
		"events": s.events,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//濂緢鍝�:鎻愪氦璁㈠崟鎴愬姛椤甸潰
	var checkout_vipshop_club_order = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="濂緢鍝�:鎻愪氦璁㈠崟鎴愬姛椤甸潰";
			s1.channel ="濂緢鍝�";
			s1.prop4 ="鎻愪氦璁㈠崟鎴愬姛椤甸潰";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				omn_pro +=";" + omniture.product_ids[i] +";" + omniture.product_nums[i] +";" + (omniture.product_nums[i] * omniture.product_price[i]) +";event17=" + omniture.product_nums[i] +"|event18=" + (omniture.product_nums[i] * omniture.product_price[i]);
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=","
				}
			}
			s1.products = omn_pro;
			s1.events ="purchase,event16,event17,event18";
			s1.purchaseID = omniture.orderId;
			s1.eVar6 = omniture.payType;
			s1.eVar23 = omniture.coupon;
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	//濂緢鍝�:鏌ョ湅璐墿琚�
	var cart_vipshop_com_club = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="濂緢鍝�:鏌ョ湅璐墿琚�";
			s1.channel ="濂緢鍝�";
			s1.prop4 ="鏌ョ湅璐墿琚嬮〉闈�";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				omn_pro +=";" + omniture.product_ids[i];
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=",";
				}
			}
			s1.products = omn_pro;
			s1.events ="scView,event14";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	//鐗瑰崠浼�:骞垮窞棣栭〉 骞垮窞鏂板棣栭〉
	var gz_new_user = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:骞垮窞棣栭〉',
		"prop4": '鐗瑰崠浼�:骞垮窞鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
//www.vip.com/gz_new_visitor.html
//鐗瑰崠浼�:骞垮窞棣栭〉 骞垮窞鏂板棣栭〉
	var gz_new_visitor = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:骞垮窞棣栭〉',
		"prop4": '鐗瑰崠浼�:骞垮窞鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};

	var checkout_vipshop_com_goods = {
		"s_account" :"vipshoptuan-test",
		"pageName": s.pageName,
	   "channel": s.channel,
	   "prop4": s.prop4,
	   "products": s.products,
	   "events": s.events,
	   "eVar23": s.eVar23,
	   "prop3": s.prop3,
	   "eVar11": s.eVar11,
	   "eVar12": s.eVar12,
	   "eVar32": s.eVar32,
	   "eVar33": s.eVar33,
	   "eVar22": s.eVar22,
	   "prop5": s.prop5,
	   "eVar5": s.eVar5,
	   "prop3": s.prop3,
	   "eVar11": s.eVar11,
	   "eVar12": s.eVar12,
	   "eVar32": s.eVar32,
	   "eVar33": s.eVar33,
	   "eVar22": s.eVar22,
	   "prop5": s.prop5,
	   "eVar5": s.eVar5,
	   "trackInlineStats": true,
	   "trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鐗瑰崠浼�:骞垮窞灞呭棰戦亾棣栭〉
	var gz_life_vipshop = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
	   "pageName": '鐗瑰崠浼�:骞垮窞灞呭棰戦亾棣栭〉',
	   "prop4": '鐗瑰崠浼�:骞垮窞灞呭棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',		
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:缇庡棰戦亾棣栭〉
	var shop_vipshop_com_beauty = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:缇庡棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:缇庡棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鐗瑰崠浼�:鍖椾含鍎跨棰戦亾棣栭〉
	var shop_vipshop_com_sd_child = {
		"s_account" : "vipshoptuan-test",
		"channel" :'鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含鍎跨棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含鍎跨棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',		
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:骞垮窞濂冲＋棰戦亾棣栭〉
	var shop_vipshop_com_gz_women = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:骞垮窞濂冲＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:骞垮窞濂冲＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:鍖椾含鏂板棣栭〉
	var shop_vipshop_com_sd_new_user = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//www.vip.com/sd_new_visitor.html
	//鐗瑰崠浼�:鍖椾含鏂板棣栭〉
	var sd_new_visitor = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鍞搧鍥�:纭璁㈠崟淇℃伅
	var checkout_vipshop_com_shan_ind = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鍞搧鍥�:纭璁㈠崟淇℃伅";
			s1.channel ="鍞搧鍥�";
			s1.prop4 ="纭璁㈠崟淇℃伅椤甸潰";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=";" + omniture.product_ids[i] +",";
				} else {
					omn_pro +=";" + omniture.product_ids[i];
				}
			}
			s1.products = omn_pro;
			s1.events ="scCheckout,event21";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	//鐗瑰崠浼�: 鏀粯璺宠浆椤�
	var checkout_vipshop_com_te_order = {

		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鐗瑰崠浼�: 鏀粯璺宠浆椤�";
			s1.channel ="鐗瑰崠浼�";
			s1.prop4 ="鐗瑰崠浼�: 鏀粯璺宠浆椤�";
			var omn_pro = new String();
			var ll = typeof(omniture.product_ids) == "undefined" ? typeof(mars_var) == "undefined" ? "" : mars_var.ord_sn : omniture.product_ids;
			if(typeof(ll) != "undefined"){
				for (i = 0; i < ll.length; i++) {
					if (i < ll.length - 1) {
						omn_pro +=";" + ll[i] +",";
					} else {
						omn_pro +=";" + ll[i];
					}
				}
			}
			s1.products = omn_pro;
			s1.events ="scCheckout,event21";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	//鐗瑰崠浼�:骞垮窞鑰佸棣栭〉
	var shop_vipshop_com_gz = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:骞垮窞棣栭〉',
		"prop4": '鐗瑰崠浼�:骞垮窞鑰佸棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:涓婃捣鍎跨棰戦亾棣栭〉
	var shop_vipshop_com_sh_child = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣鍎跨棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣鍎跨棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:涓婃捣鐢峰＋棰戦亾棣栭〉
	var shop_vipshop_com_sh_men = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣鐢峰＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣鐢峰＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:鎴愰兘灞呭棰戦亾棣栭〉
	var shop_vipshop_com_cd_life = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鎴愰兘灞呭棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鎴愰兘灞呭棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//濂緢鍝�: 纭璁㈠崟淇℃伅
	var checkout_vipshop_com_club = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="濂緢鍝�: 纭璁㈠崟淇℃伅";
			s1.channel ="濂緢鍝�";
			s1.prop4 ="纭璁㈠崟淇℃伅椤甸潰";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				omn_pro +=";" + omniture.product_ids[i];
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=",";
				}
			}
			s1.products = omn_pro;
			s1.events ="scCheckout,event15";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	
	//鍞搧鍥�: 鏀粯璺宠浆椤�
	var checkout_vipshop_com_shan_order = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鍞搧鍥�: 鏀粯璺宠浆椤�";
			s1.channel ="鍞搧鍥�";
			s1.prop4 ="鍞搧鍥㈡敮浠樿烦杞〉";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=";" + omniture.product_ids[i] +";" + omniture.product_nums[i] +";" + (omniture.product_nums[i] * omniture.product_price[i]) +";event23=" + omniture.product_nums[i] +"|event24=" + (omniture.product_nums[i] * omniture.product_price[i]) +","
				} else {
					omn_pro +=";" + omniture.product_ids[i] +";" + omniture.product_nums[i] +";" + (omniture.product_nums[i] * omniture.product_price[i]) +";event23=" + omniture.product_nums[i] +"|event24=" + (omniture.product_nums[i] * omniture.product_price[i])
				}
			}
			s1.products = omn_pro;
			s1.events ="purchase,event22,event23,event24";
			s1.purchaseID = omniture.orderId;
			s1.eVar6 = omniture.payType;
			s1.eVar23 = omniture.coupon;
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	//鍞搧鍥�:璐墿琚嬮〉
	var cart_vipshop_com_shan = {
		"s_account" :"vipshoptuan-test",
		"run_t" :"1",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鍞搧鍥�:璐墿琚嬮〉";
			s1.channel ="鍞搧鍥�";
			s1.prop4 ="鍞搧鍥㈣喘鐗╄椤�";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=";" + omniture.product_ids[i] +",";
				} else {
					omn_pro +=";" + omniture.product_ids[i];
				}
			}
			s1.products = omn_pro;
			s1.events ="scView,event20";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		}
	};
	//鐗瑰崠浼�:鎴愰兘鐢峰＋棰戦亾棣栭〉	
	var shop_vipshop_com_cd_men = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鎴愰兘鐢峰＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鎴愰兘鐢峰＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',		
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//鐗瑰崠浼�:鍖椾含鐢峰＋棰戦亾棣栭〉
	var shop_vipshop_com_sd_men = {
		"s_account" :"vipshoptuan-test",
		"channel":'鐗瑰崠浼�',
		"pageName":'鐗瑰崠浼�:鍖椾含鐢峰＋棰戦亾棣栭〉',
		"prop4":'鐗瑰崠浼�:鍖椾含鐢峰＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var vipfashion_vipshop_com_detail = {
		"s_account" :"vipshoptuan-test",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"prop8": s.prop8,
		"eVar14": s.eVar14,
		"eVar16": s.eVar16,
		"prop9": s.prop9,
		"products": s.products,
		"events": s.events,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			 jQuery("#J_cartAdd_submit").live('click',
				function() {
					if (jQuery("#J_popCart_success").css("display") =="block") {
						s1 = s_gi("vipshopfashion");
						s1.linkTrackEvars ="events";
						if (jQuery(".J_cart_count").text() =="1") {
							s1.linkTrackEvents ="scAdd,scOpen";
							s1.events ="scAdd,scOpen";
						} else {
							s1.linkTrackEvents ="scAdd";
							s1.events ="scAdd";
						}
						s1.tl(this, 'o', 'add cart');
					}
				}
			);
		}
	};
	
	var vipfashion_vipshop_com = {
		"s_account" :"vipshopfashion",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var lux_vipshop_com_show = {
		"s_account" :"vipshoptuan-test",
		"pageName":"濂緢鍝�:" + omniture.brandName +": 鍟嗗搧鍒楄〃椤甸潰",
		"channel":"濂緢鍝�",
		"prop8": omniture.brandName,
		"prop4":"鍟嗗搧鍒楄〃椤甸潰",
		"prop9": omniture.brandId,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var shop_vipshop_com_cd_women = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鎴愰兘濂冲＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鎴愰兘濂冲＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var omniture_global = {
		"s_account" :"vipshoptuan-test",
		"run_t" :"1",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		}
	};
	var shop_vipshop_com_gz_child = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:骞垮窞鍎跨棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:骞垮窞鍎跨棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var vipfashion_vipshop_com_brand_php_channelId = {
		"s_account" :"vipshopfashion",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"prop1": s.prop1,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var shop_vipshop_com_cate = {
		"s_account" :"vipshoptuan-test",
		"pageName":"鐗瑰崠浼�:鍦ㄥ敭鍟嗗搧鍒嗙被",
		"channel":"鐗瑰崠浼�",
		"prop4":"鐗瑰崠浼�:鍦ㄥ敭鍟嗗搧鍒嗙被",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var shop_vipshop_com_sh_new_user = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	//www.vip.com/sh_new_visitor.html
	var sh_new_visitor = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣鏂板棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var shop_vipshop_com_detail = {
		"s_account" :"vipshoptuan-test",
		"pageName":"鐗瑰崠浼�:鍟嗗搧璇︽儏椤�-" + omniture.brandName +"-" + omniture.productName +"-" + omniture.brandId +"-" + omniture.productId,
		"channel":"鐗瑰崠浼�",
		"prop8": omniture.brandName,
		"eVar14": omniture.catName,
		"eVar16": omniture.productName,
		"prop9": omniture.brandId,
		"products":";"+omniture.productId,
		"events":"event3, prodView, event31",
		"prop4" :"鐗瑰崠浼�:鍟嗗搧璇︽儏椤�",
		"prop3" : s.prop3,
		"eVar11" : s.eVar11,
		"eVar12" : s.eVar12,
		"eVar32" : s.eVar32,
		"eVar33" : s.eVar33,
		"eVar22" : s.eVar22,
		"prop5" : s.prop5,
		"eVar5" : s.eVar5,
		"trackInlineStats" : true,
		"trackingServer" : 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			var omn_i = 0;
			function omn_al() {
				omn_i++;
				if (i < 8) {
					setTimeout(function() {
						if (omniture.pop_up_div()) {
							s1 = s_gi("vipshoptuan-test");
							s1.linkTrackEvars ="events,products";
							s1.linkTrackEvents ="scAdd,scOpen,event13";
							s1.events ="scAdd,scOpen,event33";
							s1.t(this, 'o', 'add cart');
							i = 10;
						}
						omn_al();
					},
					500);
				}
			};
			jQuery(document).ready(function() {
				omniture.add_cart_button.eq(0).on('click',
				function() {
					omn_al()
				});
			});
			omniture.previous_product.on('click',
				function() {
					var s1 = s_gi("vipshoptuan-test");
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 ="涓婁竴鍟嗗搧鎸夐挳";
					s1.tl();
				});
				omniture.next_product.on('click',
				function() {
					var s1 = s_gi("vipshoptuan-test");
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 ="涓嬩竴鍟嗗搧鎸夐挳";
					s1.tl();
				});
				var omn_i = 0;
		}
	};
	
	var vipfashion_vipshop_com_show = {
		"s_account" :"vipshopfashion",
		"prop2": s.prop2,
		"prop8": s.prop8,
		"prop9": s.prop9,
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var vipfashion_vipshop_com_category_php = {
		
		"s_account" :"vipshopfashion",
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"eVar14": s.eVar14,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var cart_vipshop_com_te = {
		"s_account" :"vipshoptuan-test",
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鐗瑰崠浼�:璐墿琚嬮〉";
			s1.channel ="鐗瑰崠浼�";
			s1.prop4 ="鐗瑰崠浼�:璐墿琚嬮〉";
			var omn_pro = new String();
			if(typeof(omniture.product_ids) != "undefined"){
				for (i = 0; i < omniture.product_ids.length; i++) {
					omn_pro +=";" + omniture.product_ids[i];
					if (i < omniture.product_ids.length - 1) {
						omn_pro +=",";
					}
				}
			}
			s1.products = omn_pro;
			s1.events ="scView,event32";
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	
	var shop_vipshop_com_sh_life = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:涓婃捣灞呭棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:涓婃捣灞呭棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var shop_vipshop_com_sd_women = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�:鍖椾含濂冲＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�:鍖椾含濂冲＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	var lux_vipshop_com_detail = {
		"s_account" :"vipshoptuan-test",
		"pageName":"濂緢鍝�:" + omniture.brandName +":" + omniture.productName,
		"channel":"濂緢鍝�",
		"prop8": omniture.brandName,
		"eVar14": omniture.catName,
		"eVar16": omniture.productName,
		"prop9": omniture.brandId,
		"products":";"+omniture.productId,
		"events":"event3, prodView",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.add_cart_button.live('click',
			function() {
				if (omniture.pop_up_div()) {
					s1 = s_gi("vipshoptuan-test,vipshop-prd");
					s1.linkTrackEvars ="events,products";
					s1.linkTrackEvents ="scAdd,scOpen,event13";
					s1.events ="scAdd,scOpen,event13";
					s1.tl(this, 'o', 'add cart');
				}
			});
		}
	};
	var shop_vipshop_com_gz_men = {
		"s_account" :"vipshoptuan-test",
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�: 骞垮窞鐢峰＋棰戦亾棣栭〉',
		"prop4": '鐗瑰崠浼�: 骞垮窞鐢峰＋棰戦亾棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	var www_vipshop_com_show = {
		"s_account" :"vipshopte",
		"prop2": s.prop2,
		"prop8": s.prop8,
		"prop9": s.prop9,
		"pageName": s.pageName,
		"channel": s.channel,
		"prop4": s.prop4,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var checkout_vipshop_com_shan = {
		"s_account" :"vipshoptuan-test" ,
		"eventPro" : function(){
			var s1 = s_gi('vipshoptuan-test');
			s1.pageName ="鍞搧鍥�: 纭璁㈠崟椤�";
			s1.channel ="鍞搧鍥�";
			s1.prop4 ="鍞搧鍥㈢‘璁よ鍗曢〉";
			var omn_pro = new String();
			for (i = 0; i < omniture.product_ids.length; i++) {
				if (i < omniture.product_ids.length - 1) {
					omn_pro +=";" + omniture.product_ids[i] +","
				} else {
					omn_pro +=";" + omniture.product_ids[i]
				}
			}
			s1.products = omn_pro;
			if (document.location.search.indexOf('ind=1') > -1) {
				s1.events ="scCheckout,event26"
			} else {
				s1.events ="scCheckout,event21"
			};
			s1.prop3 = s.prop3;
			s1.eVar11 = s.eVar11;
			s1.eVar12 = s.eVar12;
			s1.eVar32 = s.eVar32;
			s1.eVar33 = s.eVar33;
			s1.eVar22 = s.eVar22;
			s1.prop5 = s.prop5;
			s1.eVar5 = s.eVar5;
			s1.trackInlineStats = true;
			s1.trackingServer = 'vipshop.d2.sc.omtrdc.net';
			s1.t();
		},
		"run_t" :"1"
	};
	
	var day_vipshop_com = {
		"s_account" :"vipshoptuan-test" ,
		"eVar21": '鍞搧鍥㈡帓搴�: ' + omniture.sortName,
		"eVar14": '鍞搧鍥㈠垎绫伙細' + omniture.catName,
		"pageName": '鍞搧鍥�: 棰戦亾棣栭〉',
		"channel": '鍞搧鍥�',
		"prop4": '鍞搧鍥㈤椤�',
		"events":"event27",
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var shop_vipshop_com_cd_new_user = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�: 鎴愰兘棣栭〉',
		"prop4": '鐗瑰崠浼�: 鎴愰兘鏂板棣栭〉',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};
	
	//www.vip.com/cd_new_visitor.html
var cd_new_visitor = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鐗瑰崠浼�',
		"pageName": '鐗瑰崠浼�: 鎴愰兘棣栭〉',
		"prop4": '鐗瑰崠浼�: 鎴愰兘鏂板棣栭〉',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net',
		"eventPro" : function(){
			omniture.remind_button.live('click',
			function() {
				if (omniture.is_reminded) {
					var s1 = s_gi('vipshoptuan-test');
					s1.linkTrackVars = 'eVar24';
					s1.eVar24 = '寮€鍞彁閱掓寜閽�';
					s1.tl();
				}
			});
		}
	};

	//鎴戠殑甯愭埛棣栭〉
	var www_vipshop_com_account_index = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭垜鐨勫笎鎴烽椤�',
		"prop4": '鎴戠殑璐︽埛锛氭垜鐨勫笎鎴烽椤�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鎴戠殑甯愭埛棣栭〉
	var www_vipshop_com_account_my_account = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭垜鐨勫笎鎴烽椤�',
		"prop4": '鎴戠殑璐︽埛锛氭垜鐨勫笎鎴烽椤�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	//鎴戠殑璐︽埛锛氭敹浠剁
	var www_vipshop_com_account_inbox = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭敹浠剁',
		"prop4": '鎴戠殑璐︽埛锛氭敹浠剁',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	//鎴戠殑璐︽埛锛氭敹浠剁
	var www_vipshop_com_account_orders = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氳鍗曠鐞�',
		"prop4": '鎴戠殑璐︽埛锛氳鍗曠鐞�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};

	
	var www_vipshop_com_account_orders_act_return_orders = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氳嚜鍔╅€€璐�',
		"prop4": '鎴戠殑璐︽埛锛氳嚜鍔╅€€璐�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};

	//i_vipshop_com_account_index_act_mybrand
	var i_vipshop_com_account_index_act_mybrand = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭垜璐拱杩囩殑鍝佺墝',
		"prop4": '鎴戠殑璐︽埛锛氭垜璐拱杩囩殑鍝佺墝',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var www_vipshop_com_account_friend = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭垜閭€璇风殑鏈嬪弸',
		"prop4": '鎴戠殑璐︽埛锛氭垜閭€璇风殑鏈嬪弸',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};

	var www_vipshop_com_account_share = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氬晢鍝佸垎浜偣璇�',
		"prop4": '鎴戠殑璐︽埛锛氬晢鍝佸垎浜偣璇�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var i_vipshop_com_account_index_php_act_mybind = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氬井鍗氱粦瀹�',
		"prop4": '鎴戠殑璐︽埛锛氬井鍗氱粦瀹�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var www_vipshop_com_account_wallet_surplus = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氫綑棰濇煡璇�',
		"prop4": '鎴戠殑璐︽埛锛氫綑棰濇煡璇�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_wallet_withdraw_last = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭彁鐜颁腑蹇�',
		"prop4": '鎴戠殑璐︽埛锛氭彁鐜颁腑蹇�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_wallet_password = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭彁鐜颁腑蹇�',
		"prop4": '鎴戠殑璐︽埛锛氭彁鐜颁腑蹇�',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_favourable = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氫唬閲戝埜绠＄悊',
		"prop4": '鎴戠殑璐︽埛锛氫唬閲戝埜绠＄悊',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_favourable_lbk = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氱ぜ鍝佸崱绠＄悊',
		"prop4": '鎴戠殑璐︽埛锛氱ぜ鍝佸崱绠＄悊',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var www_vipshop_com_account_vip_card = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氬敮鍝佸崱绠＄悊',
		"prop4": '鎴戠殑璐︽埛锛氬敮鍝佸崱绠＄悊',
		"s_account" :"vipshoptuan-test" ,
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var i_vipshop_com_mysize = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氭垜鐨勫昂鐮佷俊鎭�',
		"prop4": '鎴戠殑璐︽埛锛氭垜鐨勫昂鐮佷俊鎭�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_datum = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氬熀鏈川鏂�',
		"prop4": '鎴戠殑璐︽埛锛氬熀鏈川鏂�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_archies = {

		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氫釜浜烘。妗�',
		"prop4": '鎴戠殑璐︽埛锛氫釜浜烘。妗�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	
	var www_vipshop_com_account_my_foundation = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氱埍蹇冭处鎴�',
		"prop4": '鎴戠殑璐︽埛锛氱埍蹇冭处鎴�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_amend = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氫慨鏀圭櫥褰曞瘑鐮�',
		"prop4": '鎴戠殑璐︽埛锛氫慨鏀圭櫥褰曞瘑鐮�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_marks = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氱Н鍒嗘煡璇�',
		"prop4": '鎴戠殑璐︽埛锛氱Н鍒嗘煡璇�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_account_marks_act_ex = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鎴戠殑璐︽埛椤甸潰',
		"pageName": '鎴戠殑璐︽埛锛氬凡鍏戞崲绀煎搧',
		"prop4": '鎴戠殑璐︽埛锛氬凡鍏戞崲绀煎搧',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var i_vipshop_com_logins = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '娉ㄥ唽/鐧诲綍椤甸潰',
		"pageName": '娉ㄥ唽/鐧诲綍椤甸潰锛氱櫥褰曠晫闈�',
		"prop4": '娉ㄥ唽/鐧诲綍椤甸潰锛氱櫥褰曠晫闈�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var i_vipshop_com_registers = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '娉ㄥ唽/鐧诲綍椤甸潰',
		"pageName": '娉ㄥ唽/鐧诲綍椤甸潰锛屾敞鍐岀晫闈�',
		"prop4": '娉ㄥ唽/鐧诲綍椤甸潰锛氭敞鍐岀晫闈�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_help_center_index = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '甯姪涓績',
		"pageName": '甯姪涓績锛氬府鍔╀腑蹇�-棣栭〉',
		"prop4": '甯姪涓績锛氬府鍔╀腑蹇�-棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_blog = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鍞搧浼氬崥瀹�',
		"pageName": '鍞搧浼氬崥瀹㈤椤�',
		"prop4": '鍞搧浼氬崥瀹㈤椤�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var shop_vipshop_com_brand_date = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鍝佺墝绾︿細',
		"pageName": '鍝佺墝绾︿細锛氶椤�',
		"prop4": '鍝佺墝绾︿細锛氶椤�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var www_vipshop_com_message = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '浼氬憳鐣欒█',
		"pageName": '浼氬憳鐣欒█棣栭〉',
		"prop4": '浼氬憳鐣欒█棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var fashion_vipshop_com_pinpaidaquan = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鍝佺墝澶у叏棣栭〉',
		"pageName": '鏃跺皻浼氬搧鐗屽ぇ鍏ㄩ椤�',
		"prop4": '鏃跺皻浼氬搧鐗屽ぇ鍏ㄩ椤�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var fashion_vipshop_com = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '鏃跺皻浼氶椤�',
		"pageName": '鏃跺皻浼歘鏃跺皻娼祦鍚嶇墝鍩哄湴_鍞搧浼歷ipshop鏃跺皻璧勮缃�',
		"prop4": '鏃跺皻浼歘鏃跺皻娼祦鍚嶇墝鍩哄湴_鍞搧浼歷ipshop鏃跺皻璧勮缃�',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var jf_vipshop_com = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '绉垎鎹㈢ぜ',
		"pageName": '绉垎鎹㈢ぜ棣栭〉',
		"prop4": '绉垎鎹㈢ぜ棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var vipshop_hirede_com_careersite_index = {
		"s_account" :"vipshoptuan-test" ,
		"channel": '浜烘墠鎷涜仒',
		"pageName": '浜烘墠鎷涜仒棣栭〉',
		"prop4": '浜烘墠鎷涜仒棣栭〉',
		"events": 'event29',
		"prop3": s.prop3,
		"eVar11": s.eVar11,
		"eVar12": s.eVar12,
		"eVar32": s.eVar32,
		"eVar33": s.eVar33,
		"eVar22": s.eVar22,
		"prop5": s.prop5,
		"eVar5": s.eVar5,
		"trackInlineStats": true,
		"trackingServer": 'vipshop.d2.sc.omtrdc.net'
	};
	var omnitureObject = {
		"shop.vipshop.com-show-" :vipshop_show,
		"checkout.vipshop.com-goods-order.php" : check_out_goods_order,
		"checkout.vipshop.com-te2-" : checkout_te,
		"shop.vipshop.com-cd.html" : index_cd,
		"day.vipshop.com-detail-" : day_detail,
		"shop.vipshop.com-sh_women.html" : sh_women,
		"shop.vipshop.com-sd.html" : beijing_vipshop,
		"vipfashion.vipshop.com-category.php-q" : category_vipfashion_q,
		"shop.vipshop.com-cd_child.html" : cd_child,
		"lux.vipshop.com-" : lux_vipshop_com,
		"omniture_package" : omniture_package,
		"shop.vipshop.com-sh.html" : shanghai_vipshop,
		"shop.vipshop.com-sd_life.html" : sd_life,
		"cart.vipshop.com-goods-" : cart_goods_vipshop,
		"checkout.vipshop.com-club-order.php" : checkout_vipshop_club_order,
		"cart.vipshop.com-club-" : cart_vipshop_com_club,
		"shop.vipshop.com-gz_new_user.html" : gz_new_user,
		"shop.vipshop.com-gz_new_visitor.html" : gz_new_visitor,
		"checkout.vipshop.com-goods-" : checkout_vipshop_com_goods,
		"shop.vipshop.com-gz_life.html" : gz_life_vipshop,
		"shop.vipshop.com-beauty.php" : shop_vipshop_com_beauty,
		"shop.vipshop.com-sd_child.html" : shop_vipshop_com_sd_child,
		"shop.vipshop.com-gz_women.html" : shop_vipshop_com_gz_women,
		"shop.vipshop.com-sd_new_user.html" : shop_vipshop_com_sd_new_user,
		"shop.vipshop.com-sd_new_visitor.html" : sd_new_visitor,
		"checkout.vipshop.com-shan--ind=" : checkout_vipshop_com_shan_ind,
		"checkout.vipshop.com-te2-order.php" : checkout_vipshop_com_te_order,
		"shop.vipshop.com-gz.html" : shop_vipshop_com_gz,
		"shop.vipshop.com-sh_child.html" : shop_vipshop_com_sh_child,
		"shop.vipshop.com-sh_men.html" : shop_vipshop_com_sh_men,
		"shop.vipshop.com-cd_life.html" : shop_vipshop_com_cd_life,
		"checkout.vipshop.com-club-" : checkout_vipshop_com_club ,
		"checkout.vipshop.com-shan-order.php" : checkout_vipshop_com_shan_order,
		"cart.vipshop.com-shan-" : cart_vipshop_com_shan,
		"shop.vipshop.com-cd_men.html" :shop_vipshop_com_cd_men,
		"shop.vipshop.com-sd_men.html" : shop_vipshop_com_sd_men,
		"vipfashion.vipshop.com-detail-":vipfashion_vipshop_com_detail,
		"vipfashion.vipshop.com-" : vipfashion_vipshop_com,
		"lux.vipshop.com-show-" : lux_vipshop_com_show,
		"shop.vipshop.com-cd_women.html" : shop_vipshop_com_cd_women,
		"omniture_global" : omniture_global,
		"shop.vipshop.com-gz_child.html" : shop_vipshop_com_gz_child,
		"vipfashion.vipshop.com-brand.php-channelId=" : vipfashion_vipshop_com_brand_php_channelId,
		"shop.vipshop.com-cate-" : shop_vipshop_com_cate,
		"shop.vipshop.com-sh_new_user.html" : shop_vipshop_com_sh_new_user,
		"shop.vipshop.com-sh_new_visitor.html" : sh_new_visitor,
		"shop.vipshop.com-detail-" : shop_vipshop_com_detail,
		"vipfashion.vipshop.com-show-" : vipfashion_vipshop_com_show,
		"vipfashion.vipshop.com-category.php" : vipfashion_vipshop_com_category_php,
		"cart.vipshop.com-te2-" : cart_vipshop_com_te,
		"shop.vipshop.com-sh_life.html" : shop_vipshop_com_sh_life,
		"shop.vipshop.com-sd_women.html" : shop_vipshop_com_sd_women,
		"lux.vipshop.com-detail-" : lux_vipshop_com_detail,
		"shop.vipshop.com-gz_men.html" : shop_vipshop_com_gz_men,
		"www.vipshop.com-show-" : www_vipshop_com_show,
		"checkout.vipshop.com-shan-" : checkout_vipshop_com_shan,
		"day.vipshop.com-" : day_vipshop_com,
		"shop.vipshop.com-cd_new_user.html" : shop_vipshop_com_cd_new_user,
		"shop.vipshop.com-cd_new_visitor.html" : cd_new_visitor,
		"www.vipshop.com-account-index.php" : www_vipshop_com_account_index,
		"www.vipshop.com-account-my_account.php" : www_vipshop_com_account_my_account,
		"www.vipshop.com-account-inbox.php" : www_vipshop_com_account_inbox,
		"www.vipshop.com-account-orders.php" : www_vipshop_com_account_orders,
		"www.vipshop.com-account-orders.php-act=return_orders" : www_vipshop_com_account_orders_act_return_orders,
		"i.vipshop.com-account-index.php-act=mybrand.php" : i_vipshop_com_account_index_act_mybrand,
		"www.vipshop.com-account-friend.php" : www_vipshop_com_account_friend,
		"www.vipshop.com-account-share.php" : www_vipshop_com_account_share,
		"i.vipshop.com-account-index.php-act=mybind.php" : i_vipshop_com_account_index_php_act_mybind,
		"www.vipshop.com-account-wallet_surplus.php" : www_vipshop_com_account_wallet_surplus,
		"www.vipshop.com-account-wallet_withdraw_last.php" : www_vipshop_com_account_wallet_withdraw_last,
		"www.vipshop.com-account-wallet_password.php" : www_vipshop_com_account_wallet_password,
		"www.vipshop.com-account-favourable.php" : www_vipshop_com_account_favourable,
		"www.vipshop.com-account-favourable_lbk.php" : www_vipshop_com_account_favourable_lbk,
		"www.vipshop.com-account-vip_card.php" : www_vipshop_com_account_vip_card,
		"i.vipshop.com-mysize.php" : i_vipshop_com_mysize,
		"www.vipshop.com-account-datum.php" : www_vipshop_com_account_datum,
		"www.vipshop.com-account-archies.php" : www_vipshop_com_account_archies,
		"www.vipshop.com-account-my_foundation.php" : www_vipshop_com_account_my_foundation,
		"www.vipshop.com-account-amend.php" : www_vipshop_com_account_amend,
		"www.vipshop.com-account-marks.php" : www_vipshop_com_account_marks,
		"www.vipshop.com-account-marks.php-act=ex" : www_vipshop_com_account_marks_act_ex,
		"i.vipshop.com-logins.php" : i_vipshop_com_logins,
		"i.vipshop.com-registers.php" : i_vipshop_com_registers,
		"www.vipshop.com-help_center-index.php" : www_vipshop_com_help_center_index,
		"www.vipshop.com-blog.php" : www_vipshop_com_blog,
		"shop.vipshop.com-brand_date.php" : shop_vipshop_com_brand_date,
		"www.vipshop.com-message.php" : www_vipshop_com_message,
		"fashion.vipshop.com-pinpaidaquan-" : fashion_vipshop_com_pinpaidaquan,
		"fashion.vipshop.com-" :銆€fashion_vipshop_com,
		"jf.vipshop.com-" : jf_vipshop_com,
		"vipshop.hirede.com-careersite-index" : vipshop_hirede_com_careersite_index
	};
	
	String.prototype.replaceAll = function(s1,s2) {
		return this.replace(new RegExp(s1,"gm"),s2); 
	}
	
	
	var omnitureKey = (document.location.host+document.location.pathname).toLowerCase();
	if(document.location.href.indexOf("http://www.vip.com/tour/tour_orders.php?act=success") > -1 || document.location.href.indexOf("http://www.vip.com/account/orders.php?act=return_orders") > -1 || document.location.href.indexOf("http://i.vip.com/account/index.php?act=mybrand.php") >-1 || document.location.href.indexOf("http://www.vip.com/account/marks.php?act=ex") > -1){
		omnitureKey+=document.location.search;
	}
	
	//鍒ゆ柇鏄惁涓篸etail鎴栬€卻how鐨勭晫闈紝瀵规鍋氭暟瀛楃殑鎴彇
	if(omnitureKey.indexOf("detail") >-1 || omnitureKey.indexOf("show") >-1 || omnitureKey.indexOf("cate") >-1){
		var index = omnitureKey.search(/[0-9]/);
		if(index > -1){
			omnitureKey = omnitureKey.substring(0,index);
		}
	}
	
	omnitureKey = omnitureKey.replaceAll("/","-");
	if(omnitureKey.indexOf("?")>-1){
		omnitureKey = omnitureKey.replace("?","-");
	}    
	if(omnitureKey.indexOf(":") > -1){
		omnitureKey = omnitureKey.replaceAll(":","-");
	}
	//omnitureKey = "www.vip.com-detail-";
	//瀵瑰晢鍝佽鎯呴〉杩涜鍗曠嫭鐨勭壒娈婂鐞嗭紙缇庡鐨勮鎯呴〉涓庢櫘閫氱殑璇︽儏椤电殑url鏄竴鑷寸殑锛屼絾鏄編濡嗘槸涓嶈繘琛屾暟鎹彂閫佺殑锛屾晠灏嗙編濡嗙殑url杩涜杩囨护锛屼笉杩涜鏁版嵁鐨勫彂閫�----->缇庡鐨則itle涓轰竴瀹氫负缇庡寮€澶达紝浣嗘槸title鐨勫唴閮ㄦ湁title灏嗕笉杩涜鎺掗櫎锛�
	if(omnitureKey == "shop.vipshop.com-detail-"){

		if(document.title.indexOf("缇庡") == 0){
			return;
		}
	}
	//鍦╫mnitureObject涓幏鍙栧搴旂殑瀵硅薄
	var omnitureValue = omnitureObject[omnitureKey];
	if(typeof(omnitureValue) =="undefined" || omnitureValue == null){
		return ;
	}	

	//瀵筼mnitureValue杩涜寰幆锛屼慨鏀瑰搴旂殑omniture瀵硅薄鐨勬暟鎹�
	s1 = s_gi(omnitureValue["s_account"]);
	for(var i in omnitureValue) { 
		if (omnitureValue.hasOwnProperty(i)) {
			if(i =="run_t" || i =="eventPro"){
				continue;
			}
			s1[i] = omnitureValue[i];
		}
	}
	if(typeof(omnitureValue.eventPro) !="undefined"){
		//omnitureValue.eventPro();
	}
	//s.t();
	if(typeof(omnitureValue.run_t) =="undefined" || omnitureValue.run_t == 0){
	
		//s1.t();
	}
}());