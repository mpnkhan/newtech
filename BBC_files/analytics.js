define(function(){if(typeof window.bbcdotcom==="undefined"||typeof bbcdotcom.objects==="undefined"){return{addEventListeners:function(){},callback:function(){},trackEvent:function(){}}}var c=[],f=[];var g=function(l){l.data={videoPlaysAutomatically:true,adLength:0};l.flags.receivedDuration=false;l.flags.playlistStarted=false;l.flags.programStarted=false;l.flags.isPaused=false;l.flags.isSeeking=false;l.flags.adRequestOrPlaybackInProgress=false;l.flags.ended=false;l.flags.playlistEnded=false;l.flags.trackProgramStartOnNextTimeupdate=false;l.flags.previewPlaying=false};var b=function(n){var l=n.player.settings(),m=l.playlistObject.items[l.playlistObject.items.length-1];n.data.mediaType=n.player.kind();n.data.mediaOffset=n.player.currentTime();n.data.mediaLength=n.player.duration();n.data.mediaPlayerName=n.player.name();n.data.adId=null;n.data.mediaId=bbcdotcom.objects("settings.container.0.id")};var i=function(o,q){var n,p,l,m;if(q.flags.previewPlaying){return}if(bbcdotcom.config.isContinuousPlayPage()&&f.length!==0){m=Number(document.getElementsByClassName("vxp-carousel__item--selected")[0].getAttribute("data-index"));p=f[m].media;l={vpid:p.externalId,title:p.altText,duration:p.duration,counterName:p.istatsCounterName}}else{n=q.player.settings();p=n.playlistObject.items[n.playlistObject.items.length-1];l={vpid:p.vpid,title:n.playlistObject.title,duration:p.duration,counterName:n.counterName}}bbcdotcom.pubsub.trigger(o,l)};var d=function(m,n,l){if(typeof bbcdotcom.analytics==="undefined"){return false}b(n);if(l===true){n.data.mediaOffset=0}bbcdotcom.analytics[m](n.data)};var h=function(n){if(typeof COMSCORE==="undefined"){return}var m=(bbcdotcom.objects("bbcdotcom.sections"))?bbcdotcom.sections.getSection():"other";var l=(n==="ad")?"09":"02";COMSCORE.beacon({c1:1,c2:"6035051",c3:m,c4:"",c5:l,c6:"",c15:""})};var j=function(l){if(!l.flags.playlistStarted){l.flags.playlistStarted=true;d("startPlaylist",l)}};var a=function(n,o){var l,m;if(!bbcdotcom.config.isContinuousPlayPage()||f.length===0){return}l=n.url?Number(n.url.replace("playlist_","")):Number(document.getElementsByClassName("vxp-carousel__item--selected")[0].getAttribute("data-index"));m=f[l].advert.adCampaignKeyword;if(m!==bbcdotcom.adverts.keyValues.get("keyword")){if(m===""||m===null||typeof m==="undefined"){bbcdotcom.adverts.keyValues.unset("keyword")}else{bbcdotcom.adverts.keyValues.set("keyword",m)}}};var e=function(m){var l;if(typeof m==="undefined"){return}for(l=0;l<c.length;l++){if(c[l].player===m){return}}var n={player:m,data:{videoPlaysAutomatically:true,bumpVersion:m.bumpVersion},flags:{playlistStarted:false,programStarted:false,isPaused:false,isSeeking:false,adRequestOrPlaybackInProgress:false,ended:false,playlistEnded:false,trackProgramStartOnNextTimeupdate:false,previewPlaying:false}};c.push(n);if(bbcdotcom.config.isContinuousPlayPage()&&document.getElementsByClassName("vxp-playlist-data").length===1){f=JSON.parse(document.getElementsByClassName("vxp-playlist-data")[0].innerHTML||"[]")}n.player.bind("playlistLoading",function(o){});n.player.bind("playlistLoaded",function(p){g(n);n.data.mediaName=p.playlist.title;n.data.hasAds=(p.playlist.hasAds||p.playlist.hasAdvert)||false;a(p,n);var o=p.playlist.items;n.data.isLive=o[o.length-1].live;n.data.kind=o[o.length-1].kind});n.player.bind("userPlay",function(o){n.data.videoPlaysAutomatically=false;i("userPlay",n)});n.player.bind("playing",function(o){j(n);if(!n.flags.programStarted&&!n.flags.adRequestOrPlaybackInProgress){n.flags.programStarted=true;d("startProgramme",n,true);i("startProgramme",n);h();if(n.flags.previewPlaying===true){n.flags.programStarted=false}}if(n.flags.isPaused){n.flags.isPaused=false;d("endPause",n)}});n.player.bind("pause",function(o){b(n);if((n.data.mediaOffset+1)<n.data.mediaLength){n.flags.isPaused=true;d("startPause",n)}});n.player.bind("loadedmetadata",function(o){n.flags.receivedDuration=true;d("duration",n)});n.player.bind("timeupdate",function(o){if(!n.flags.receivedDuration){n.flags.receivedDuration=true;d("duration",n)}if(n.flags.isSeeking){n.flags.isSeeking=false;d("endSeek",n)}});n.player.bind("seeking",function(o){n.flags.isSeeking=true;d("startSeek",n)});n.player.bind("ended",function(o){n.flags.ended=true;d("endProgramme",n);i("endProgramme",n);if(n.flags.playlistEnded){d("endPlaylist",n)}});n.player.bind("playlistEnded",function(o){n.flags.playlistEnded=true;if(n.flags.ended){d("endPlaylist",n)}});n.player.bind("uiinfo",function(o){n.data.uiinfo=o;d("uiinfo",n)});n.player.bind("volumechange",function(o){n.data.volume=o.volume;d("volumeChange",n)});n.player.bind("bbc.smp.plugins.ads.event.AdsPluginExternalEvent.ALL_ADS_COMPLETED",function(o){n.flags.adRequestOrPlaybackInProgress=false});n.player.bind("adsPlugin",function(o){switch(o.id){case"adRequest":n.flags.adRequestOrPlaybackInProgress=true;j(n);d("adRequest",n);break;case"adManagerLoaded":d("adManagerLoaded",n);break;case"adEnded":n.flags.adRequestOrPlaybackInProgress=false;d("endAdvert",n);break;case"adStarted":j(n);d("startAdvert",n);h("ad");break;case"adError":n.flags.adRequestOrPlaybackInProgress=false;break;case"adDuration":n.data.adLength=o.duration*1000;break}});n.player.bind("bbc.smp.plugins.preview",function(o){switch(o.id){case"start":n.flags.previewPlaying=true;d("startPreview",n);break;case"user_stop":case"complete_stop":case"scroll_stop":case"error_stop":n.flags.previewPlaying=false;n.data.previewStoppedReason=o.id;d("endProgramme",n);d("stopPreview",n);break}})};var k=function(l,n){if(typeof bbcdotcom.analytics==="undefined"){return false}var m={},p;var o=c[0];b(o);for(p in o.data){m[p]=o.data[p]}if(typeof n==="object"){for(p in n){m[p]=n[p]}}bbcdotcom.analytics.trackEvent(l,m)};bbcdotcom.objects("bbcdotcom.av.emp.analytics","create");bbcdotcom.av.emp.analytics={addEventListeners:e,callback:d,trackEvent:k};return bbcdotcom.av.emp.analytics});