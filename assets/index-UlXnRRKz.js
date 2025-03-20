var dl=Object.defineProperty;var fl=(i,t,e)=>t in i?dl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var et=(i,t,e)=>fl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="174",pl=0,_o=1,ml=2,Ta=1,ba=2,rn=3,yn=0,we=1,We=2,vn=0,ri=1,xo=2,vo=3,Mo=4,gl=5,Un=100,_l=101,xl=102,vl=103,Ml=104,yl=200,Sl=201,El=202,Tl=203,rs=204,ss=205,bl=206,wl=207,Al=208,Cl=209,Rl=210,Pl=211,Dl=212,Ll=213,Il=214,os=0,as=1,ls=2,li=3,cs=4,hs=5,us=6,ds=7,wa=0,Ul=1,Nl=2,Mn=0,Fl=1,Ol=2,Bl=3,zl=4,Hl=5,kl=6,Vl=7,Aa=300,ci=301,hi=302,fs=303,ps=304,vr=306,ms=1e3,Fn=1001,gs=1002,Ye=1003,Gl=1004,Fi=1005,Ke=1006,Tr=1007,On=1008,cn=1009,Ca=1010,Ra=1011,wi=1012,Ks=1013,Bn=1014,sn=1015,Ci=1016,Zs=1017,js=1018,ui=1020,Pa=35902,Da=1021,La=1022,qe=1023,Ia=1024,Ua=1025,si=1026,di=1027,Na=1028,Js=1029,Fa=1030,Qs=1031,to=1033,sr=33776,or=33777,ar=33778,lr=33779,_s=35840,xs=35841,vs=35842,Ms=35843,ys=36196,Ss=37492,Es=37496,Ts=37808,bs=37809,ws=37810,As=37811,Cs=37812,Rs=37813,Ps=37814,Ds=37815,Ls=37816,Is=37817,Us=37818,Ns=37819,Fs=37820,Os=37821,cr=36492,Bs=36494,zs=36495,Oa=36283,Hs=36284,ks=36285,Vs=36286,Wl=3200,Xl=3201,Ba=0,ql=1,xn="",Fe="srgb",fi="srgb-linear",dr="linear",Kt="srgb",Vn=7680,yo=519,Yl=512,$l=513,Kl=514,za=515,Zl=516,jl=517,Jl=518,Ql=519,So=35044,Eo="300 es",on=2e3,fr=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Gs=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Ut(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function wr(i,t,e){return(1-e)*i+e*t}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,r,s,o,a,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],u=r[6],b=r[1],T=r[4],S=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*x+a*b+l*L,s[3]=o*m+a*T+l*C,s[6]=o*u+a*S+l*A,s[1]=c*x+h*b+d*L,s[4]=c*m+h*T+d*C,s[7]=c*u+h*S+d*A,s[2]=f*x+p*b+g*L,s[5]=f*m+p*T+g*C,s[8]=f*u+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=e*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(r*c-h*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Pt;function Ha(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ec(){const i=pr("canvas");return i.style.display="block",i}const To={};function Dn(i){i in To||(To[i]=!0,console.warn(i))}function nc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ic(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bo=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wo=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sc(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Kt&&(r.r=ln(r.r),r.g=ln(r.g),r.b=ln(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xn?dr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:bo,fromXYZ:wo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:bo,fromXYZ:wo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const Wt=sc();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=pr("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ln(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ac=0;class eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cr(r[o].image)):s.push(Cr(r[o]))}else s=Cr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lc=0;class Ae extends mi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Fn,r=Fn,s=Ke,o=On,a=qe,l=cn,c=Ae.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Ri(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Aa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Aa;Ae.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(p+1)/2,L=(u+1)/2,C=(h+f)/4,A=(d+x)/4,U=(g+m)/4;return T>S&&T>L?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=U/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=U/s),this.set(n,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cc extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ae(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new eo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ka extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hc extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*x,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const L=Math.sqrt(T),C=Math.atan2(L,u*b);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const S=a*b;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,d=d*m+x*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-a*p,t[e+2]=c*g+h*p+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new N,Ao=new Pi;class Di{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ke):ke.fromBufferAttribute(s,o),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(t.matrixWorld),this.union(Oi)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Bi.subVectors(this.max,vi),Wn.subVectors(t.a,vi),Xn.subVectors(t.b,vi),qn.subVectors(t.c,vi),dn.subVectors(Xn,Wn),fn.subVectors(qn,Xn),bn.subVectors(Wn,qn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-bn.z,bn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,bn.z,0,-bn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-bn.y,bn.x,0];return!Pr(e,Wn,Xn,qn,Bi)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,Wn,Xn,qn,Bi))?!1:(zi.crossVectors(dn,fn),e=[zi.x,zi.y,zi.z],Pr(e,Wn,Xn,qn,Bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new N,new N,new N,new N,new N,new N,new N,new N],ke=new N,Oi=new Di,Wn=new N,Xn=new N,qn=new N,dn=new N,fn=new N,bn=new N,vi=new N,Bi=new N,zi=new N,wn=new N;function Pr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wn.fromArray(i,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=t.dot(wn),c=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const uc=new Di,Mi=new N,Dr=new N;class Mr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Mi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Dr)),this.expandByPoint(Mi.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new N,Lr=new N,Hi=new N,pn=new N,Ir=new N,ki=new N,Ur=new N;class Va{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.origin).addScaledVector(this.direction,e),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Lr.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Lr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Hi),a=pn.dot(this.direction),l=-pn.dot(Hi),c=pn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lr).addScaledVector(Hi,f),p}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const n=Qe.dot(this.direction),r=Qe.dot(Qe)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,n,r,s){Ir.subVectors(e,t),ki.subVectors(n,t),Ur.crossVectors(Ir,ki);let o=this.direction.dot(Ur),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const l=a*this.direction.dot(ki.crossVectors(pn,ki));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(pn));if(c<0||l+c>o)return null;const h=-a*pn.dot(Ur);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,h,d,f,p,g,x,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,d,f,p,g,x,m)}set(t,e,n,r,s,o,a,l,c,h,d,f,p,g,x,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Yn.setFromMatrixColumn(t,0).length(),s=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,x=c*d;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dc,t,fc)}lookAt(t,e,n){const r=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),mn.crossVectors(n,Re),mn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),mn.crossVectors(n,Re)),mn.normalize(),Vi.crossVectors(Re,mn),r[0]=mn.x,r[4]=Vi.x,r[8]=Re.x,r[1]=mn.y,r[5]=Vi.y,r[9]=Re.y,r[2]=mn.z,r[6]=Vi.z,r[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],T=n[7],S=n[11],L=n[15],C=r[0],A=r[4],U=r[8],y=r[12],M=r[1],R=r[5],H=r[9],z=r[13],W=r[2],K=r[6],G=r[10],j=r[14],V=r[3],st=r[7],ut=r[11],vt=r[15];return s[0]=o*C+a*M+l*W+c*V,s[4]=o*A+a*R+l*K+c*st,s[8]=o*U+a*H+l*G+c*ut,s[12]=o*y+a*z+l*j+c*vt,s[1]=h*C+d*M+f*W+p*V,s[5]=h*A+d*R+f*K+p*st,s[9]=h*U+d*H+f*G+p*ut,s[13]=h*y+d*z+f*j+p*vt,s[2]=g*C+x*M+m*W+u*V,s[6]=g*A+x*R+m*K+u*st,s[10]=g*U+x*H+m*G+u*ut,s[14]=g*y+x*z+m*j+u*vt,s[3]=b*C+T*M+S*W+L*V,s[7]=b*A+T*R+S*K+L*st,s[11]=b*U+T*H+S*G+L*ut,s[15]=b*y+T*z+S*j+L*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+x*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+u*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],b=d*m*c-x*f*c+x*l*p-a*m*p-d*l*u+a*f*u,T=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,S=h*x*c-g*d*c+g*a*p-o*x*p-h*a*u+o*d*u,L=g*d*l-h*x*l-g*a*f+o*x*f+h*a*m-o*d*m,C=e*b+n*T+r*S+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=b*A,t[1]=(x*f*s-d*m*s-x*r*p+n*m*p+d*r*u-n*f*u)*A,t[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*u+n*l*u)*A,t[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*A,t[4]=T*A,t[5]=(h*m*s-g*f*s+g*r*p-e*m*p-h*r*u+e*f*u)*A,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*u-e*l*u)*A,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*p+e*l*p)*A,t[8]=S*A,t[9]=(g*d*s-h*x*s-g*n*p+e*x*p+h*n*u-e*d*u)*A,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*u+e*a*u)*A,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*p-e*a*p)*A,t[12]=L*A,t[13]=(h*x*r-g*d*r+g*n*f-e*x*f-h*n*m+e*d*m)*A,t[14]=(g*a*r-o*x*r-g*n*l+e*x*l+o*n*m-e*a*m)*A,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,g=s*d,x=o*h,m=o*d,u=a*d,b=l*c,T=l*h,S=l*d,L=n.x,C=n.y,A=n.z;return r[0]=(1-(x+u))*L,r[1]=(p+S)*L,r[2]=(g-T)*L,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+u))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+T)*A,r[9]=(m-b)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const o=Yn.set(r[4],r[5],r[6]).length(),a=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ve.copy(this);const c=1/s,h=1/o,d=1/a;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=on){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let p,g;if(a===on)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=on){const l=this.elements,c=1/(e-t),h=1/(n-r),d=1/(o-s),f=(e+t)*c,p=(n+r)*h;let g,x;if(a===on)g=(o+s)*d,x=-2*d;else if(a===fr)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new N,Ve=new ie,dc=new N(0,0,0),fc=new N(1,1,1),mn=new N,Vi=new N,Re=new N,Co=new ie,Ro=new Pi;class Be{constructor(t=0,e=0,n=0,r=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Co,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Ga{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pc=0;const Po=new N,$n=new Pi,tn=new ie,Gi=new N,yi=new N,mc=new N,gc=new Pi,Do=new N(1,0,0),Lo=new N(0,1,0),Io=new N(0,0,1),Uo={type:"added"},_c={type:"removed"},Kn={type:"childadded",child:null},Nr={type:"childremoved",child:null};class _e extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new N,e=new Be,n=new Pi,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Pt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Do,t)}rotateY(t){return this.rotateOnAxis(Lo,t)}rotateZ(t){return this.rotateOnAxis(Io,t)}translateOnAxis(t,e){return Po.copy(t).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Do,t)}translateY(t){return this.translateOnAxis(Lo,t)}translateZ(t){return this.translateOnAxis(Io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gi.copy(t):Gi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(yi,Gi,this.up):tn.lookAt(Gi,yi,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(tn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uo),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_c),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uo),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,mc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}_e.DEFAULT_UP=new N(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new N,en=new N,Fr=new N,nn=new N,Zn=new N,jn=new N,No=new N,Or=new N,Br=new N,zr=new N,Hr=new oe,kr=new oe,Vr=new oe;class Xe{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ge.subVectors(t,e),r.cross(Ge);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ge.subVectors(r,e),en.subVectors(n,e),Fr.subVectors(t,e);const o=Ge.dot(Ge),a=Ge.dot(en),l=Ge.dot(Fr),c=en.dot(en),h=en.dot(Fr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Hr.setScalar(0),kr.setScalar(0),Vr.setScalar(0),Hr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Vr.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Hr,s.x),o.addScaledVector(kr,s.y),o.addScaledVector(Vr,s.z),o}static isFrontFacing(t,e,n,r){return Ge.subVectors(n,e),en.subVectors(t,e),Ge.cross(en).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ge.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Zn.subVectors(r,n),jn.subVectors(s,n),Or.subVectors(t,n);const l=Zn.dot(Or),c=jn.dot(Or);if(l<=0&&c<=0)return e.copy(n);Br.subVectors(t,r);const h=Zn.dot(Br),d=jn.dot(Br);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zn,o);zr.subVectors(t,s);const p=Zn.dot(zr),g=jn.dot(zr);if(g>=0&&p<=g)return e.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(jn,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return No.subVectors(s,r),a=(d-h)/(d-h+(p-g)),e.copy(r).addScaledVector(No,a);const u=1/(m+x+f);return o=x*u,a=f*u,e.copy(n).addScaledVector(Zn,o).addScaledVector(jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Wt.workingColorSpace){if(t=tc(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Gr(o,s,t+1/3),this.g=Gr(o,s,t),this.b=Gr(o,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Wa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Wt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Ut(Me.r*255,0,255))*65536+Math.round(Ut(Me.g*255,0,255))*256+Math.round(Ut(Me.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,r=Me.g,s=Me.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Fe){Wt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,r=Me.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Wi);const n=wr(gn.h,Wi.h,e),r=wr(gn.s,Wi.s,e),s=wr(gn.l,Wi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Vt;Vt.NAMES=Wa;let xc=0;class Hn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ri,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rs,this.blendDst=ss,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rs&&(n.blendSrc=this.blendSrc),this.blendDst!==ss&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mr extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new N,Xi=new zt;let vc=0;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}}class Xa extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qa extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mc=0;const Ne=new ie,Wr=new _e,Jn=new N,Pe=new Di,Si=new Di,pe=new N;class ye extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ha(t)?qa:Xa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Pe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Pe.min,Si.min),Pe.expandByPoint(pe),pe.addVectors(Pe.max,Si.max),Pe.expandByPoint(pe)):(Pe.expandByPoint(Si.min),Pe.expandByPoint(Si.max))}Pe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pe.fromBufferAttribute(a,c),l&&(Jn.fromBufferAttribute(t,c),pe.add(Jn)),r=Math.max(r,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new N,l[U]=new N;const c=new N,h=new N,d=new N,f=new zt,p=new zt,g=new zt,x=new N,m=new N;function u(U,y,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[U].add(x),a[y].add(x),a[M].add(x),l[U].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){const M=b[U],R=M.start,H=M.count;for(let z=R,W=R+H;z<W;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new N,S=new N,L=new N,C=new N;function A(U){L.fromBufferAttribute(r,U),C.copy(L);const y=a[U];T.copy(y),T.sub(L.multiplyScalar(L.dot(y))).normalize(),S.crossVectors(C,y);const R=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,y=b.length;U<y;++U){const M=b[U],R=M.start,H=M.count;for(let z=R,W=R+H;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new ie,An=new Va,qi=new Mr,Oo=new N,Yi=new N,$i=new N,Ki=new N,Xr=new N,Zi=new N,Bo=new N,ji=new N;class Qt extends _e{constructor(t=new ye,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Zi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Xr.fromBufferAttribute(d,t),o?Zi.addScaledVector(Xr,h):Zi.addScaledVector(Xr.sub(e),h))}e.add(Zi)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),An.copy(t.ray).recast(t.near),!(qi.containsPoint(An.origin)===!1&&(An.intersectSphere(qi,Oo)===null||An.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(Fo.copy(s).invert(),An.copy(t.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,L=T;S<L;S+=3){const C=a.getX(S),A=a.getX(S+1),U=a.getX(S+2);r=Ji(this,u,t,n,c,h,d,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=Ji(this,o,t,n,c,h,d,b,T,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,L=T;S<L;S+=3){const C=S,A=S+1,U=S+2;r=Ji(this,u,t,n,c,h,d,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=m,T=m+1,S=m+2;r=Ji(this,o,t,n,c,h,d,b,T,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function yc(i,t,e,n,r,s,o,a){let l;if(t.side===we?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===yn,a),l===null)return null;ji.copy(a),ji.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ji);return c<e.near||c>e.far?null:{distance:c,point:ji.clone(),object:i}}function Ji(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Yi),i.getVertexPosition(l,$i),i.getVertexPosition(c,Ki);const h=yc(i,t,e,n,Yi,$i,Ki,Bo);if(h){const d=new N;Xe.getBarycoord(Bo,Yi,$i,Ki,d),r&&(h.uv=Xe.getInterpolatedAttribute(r,a,l,c,d,new zt)),s&&(h.uv1=Xe.getInterpolatedAttribute(s,a,l,c,d,new zt)),o&&(h.normal=Xe.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Xe.getNormal(Yi,$i,Ki,f.normal),h.face=f,h.barycoord=d}return h}class Li extends ye{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(x,m,u,b,T,S,L,C,A,U,y){const M=S/A,R=L/U,H=S/2,z=L/2,W=C/2,K=A+1,G=U+1;let j=0,V=0;const st=new N;for(let ut=0;ut<G;ut++){const vt=ut*R-z;for(let It=0;It<K;It++){const Zt=It*M-H;st[x]=Zt*b,st[m]=vt*T,st[u]=W,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[u]=C>0?1:-1,h.push(st.x,st.y,st.z),d.push(It/A),d.push(1-ut/U),j+=1}}for(let ut=0;ut<U;ut++)for(let vt=0;vt<A;vt++){const It=f+vt+K*ut,Zt=f+vt+K*(ut+1),q=f+(vt+1)+K*(ut+1),tt=f+(vt+1)+K*ut;l.push(It,Zt,tt),l.push(Zt,q,tt),V+=6}a.addGroup(p,V,y),p+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=pi(i[e]);for(const r in n)t[r]=n[r]}return t}function Sc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ya(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Ec={clone:pi,merge:Ee};var Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=Sc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $a extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new N,zo=new zt,Ho=new zt;class Oe extends $a{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,zo,Ho),e.subVectors(Ho,zo)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class wc extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oe(Qn,ti,t,e);r.layers=this.layers,this.add(r);const s=new Oe(Qn,ti,t,e);s.layers=this.layers,this.add(s);const o=new Oe(Qn,ti,t,e);o.layers=this.layers,this.add(o);const a=new Oe(Qn,ti,t,e);a.layers=this.layers,this.add(a);const l=new Oe(Qn,ti,t,e);l.layers=this.layers,this.add(l);const c=new Oe(Qn,ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ka extends Ae{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ac extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ka(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:vn});s.uniforms.tEquirect.value=e;const o=new Qt(r,s),a=e.minFilter;return e.minFilter===On&&(e.minFilter=Ke),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class an extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cc={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cc)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rc extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yr=new N,Pc=new N,Dc=new Pt;class Ln{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Yr.subVectors(n,e).cross(Pc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dc.getNormalMatrix(t),r=this.coplanarPoint(Yr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Mr,Qi=new N;class no{constructor(t=new Ln,e=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],u=r[12],b=r[13],T=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,m-p,S-u).normalize(),n[1].setComponents(l+s,f+c,m+p,S+u).normalize(),n[2].setComponents(l+o,f+h,m+g,S+b).normalize(),n[3].setComponents(l-o,f-h,m-g,S-b).normalize(),n[4].setComponents(l-a,f-d,m-x,S-T).normalize(),e===on)n[5].setComponents(l+a,f+d,m+x,S+T).normalize();else if(e===fr)n[5].setComponents(a,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Qi.x=r.normal.x>0?t.max.x:t.min.x,Qi.y=r.normal.y>0?t.max.y:t.min.y,Qi.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ws extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new N,_r=new N,ko=new ie,Ei=new Va,tr=new Mr,$r=new N,Vo=new N;class Go extends _e{constructor(t=new ye,e=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)gr.fromBufferAttribute(e,r-1),_r.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),tr.radius+=s,t.ray.intersectsSphere(tr)===!1)return;ko.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(ko);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=h.getX(x),b=h.getX(x+1),T=er(this,t,Ei,l,u,b,x);T&&e.push(T)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),u=er(this,t,Ei,l,x,m,g-1);u&&e.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=er(this,t,Ei,l,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=er(this,t,Ei,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function er(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(gr.fromBufferAttribute(a,r),_r.fromBufferAttribute(a,s),e.distanceSqToSegment(gr,_r,$r,Vo)>n)return;$r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($r);if(!(c<t.near||c>t.far))return{distance:c,point:Vo.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Za extends Ae{constructor(t,e,n,r,s,o,a,l,c,h=si){if(h!==si&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=Bn),n===void 0&&h===di&&(n=ui),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class io extends ye{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new N,h=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hn extends ye{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let g=0;const x=[],m=n/2;let u=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(p,2));function b(){const S=new N,L=new N;let C=0;const A=(e-t)/n;for(let U=0;U<=s;U++){const y=[],M=U/s,R=M*(e-t)+t;for(let H=0;H<=r;H++){const z=H/r,W=z*l+a,K=Math.sin(W),G=Math.cos(W);L.x=R*K,L.y=-M*n+m,L.z=R*G,d.push(L.x,L.y,L.z),S.set(K,A,G).normalize(),f.push(S.x,S.y,S.z),p.push(z,1-M),y.push(g++)}x.push(y)}for(let U=0;U<r;U++)for(let y=0;y<s;y++){const M=x[y][U],R=x[y+1][U],H=x[y+1][U+1],z=x[y][U+1];(t>0||y!==0)&&(h.push(M,R,z),C+=3),(e>0||y!==s-1)&&(h.push(R,H,z),C+=3)}c.addGroup(u,C,0),u+=C}function T(S){const L=g,C=new zt,A=new N;let U=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let H=1;H<=r;H++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const W=H/r*l+a,K=Math.cos(W),G=Math.sin(W);A.x=y*G,A.y=m*M,A.z=y*K,d.push(A.x,A.y,A.z),f.push(0,M,0),C.x=K*.5+.5,C.y=G*.5*M+.5,p.push(C.x,C.y),g++}for(let H=0;H<r;H++){const z=L+H,W=R+H;S===!0?h.push(W,W+1,z):h.push(W+1,W,z),U+=3}c.addGroup(u,U,S===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ro extends hn{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ro(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ii extends ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=t/a,f=e/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const b=u*f-o;for(let T=0;T<c;T++){const S=T*d-s;g.push(S,-b,0),x.push(0,0,1),m.push(T/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const T=b+c*u,S=b+c*(u+1),L=b+1+c*(u+1),C=b+1+c*u;p.push(T,S,C),p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class so extends ye{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/r,p=new N,g=new zt;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const u=s+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){const m=x*(n+1);for(let u=0;u<n;u++){const b=u+m,T=b,S=b+n+1,L=b+n+2,C=b+1;a.push(T,S,C),a.push(S,L,C)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ai extends ye{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,f=new N,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){const b=[],T=u/n;let S=0;u===0&&o===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const C=L/e;d.x=-t*Math.cos(r+C*s)*Math.sin(o+T*a),d.y=t*Math.cos(o+T*a),d.z=t*Math.sin(r+C*s)*Math.sin(o+T*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+S,1-T),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const T=h[u][b+1],S=h[u][b],L=h[u+1][b],C=h[u+1][b+1];(u!==0||o>0)&&p.push(T,S,C),(u!==n-1||l<Math.PI)&&p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oo extends ye{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new N,d=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(x,m,b),o.push(m,u,b)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class De extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lc extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ic extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ja extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Kr=new ie,Wo=new N,Xo=new N;class Uc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wo),Xo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xo),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ja extends $a{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nc extends Uc{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Oc extends ja{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bc extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function qo(i,t,e,n){const r=zc(n);switch(e){case Da:return i*t;case Ia:return i*t;case Ua:return i*t*2;case Na:return i*t/r.components*r.byteLength;case Js:return i*t/r.components*r.byteLength;case Fa:return i*t*2/r.components*r.byteLength;case Qs:return i*t*2/r.components*r.byteLength;case La:return i*t*3/r.components*r.byteLength;case qe:return i*t*4/r.components*r.byteLength;case to:return i*t*4/r.components*r.byteLength;case sr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xs:case Ms:return Math.max(i,16)*Math.max(t,8)/4;case _s:case vs:return Math.max(i,8)*Math.max(t,8)/2;case ys:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ws:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Is:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Us:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Os:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cr:case Bs:case zs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oa:case Hs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case Vs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zc(i){switch(i){case cn:case Ca:return{byteLength:1,components:1};case wi:case Ra:case Ci:return{byteLength:2,components:1};case Zs:case js:return{byteLength:2,components:4};case Bn:case Ks:case sn:return{byteLength:4,components:1};case Pa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qa(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hc(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$c=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ih=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,su=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ru=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ku=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ad=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ld=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:kc,alphahash_pars_fragment:Vc,alphamap_fragment:Gc,alphamap_pars_fragment:Wc,alphatest_fragment:Xc,alphatest_pars_fragment:qc,aomap_fragment:Yc,aomap_pars_fragment:$c,batching_pars_vertex:Kc,batching_vertex:Zc,begin_vertex:jc,beginnormal_vertex:Jc,bsdfs:Qc,iridescence_fragment:th,bumpmap_pars_fragment:eh,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ih,clipping_planes_pars_vertex:rh,clipping_planes_vertex:sh,color_fragment:oh,color_pars_fragment:ah,color_pars_vertex:lh,color_vertex:ch,common:hh,cube_uv_reflection_fragment:uh,defaultnormal_vertex:dh,displacementmap_pars_vertex:fh,displacementmap_vertex:ph,emissivemap_fragment:mh,emissivemap_pars_fragment:gh,colorspace_fragment:_h,colorspace_pars_fragment:xh,envmap_fragment:vh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:yh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Ih,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:bh,fog_fragment:wh,fog_pars_fragment:Ah,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ph,lights_lambert_pars_fragment:Dh,lights_pars_begin:Lh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Oh,lights_physical_fragment:Bh,lights_physical_pars_fragment:zh,lights_fragment_begin:Hh,lights_fragment_maps:kh,lights_fragment_end:Vh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:Yh,map_pars_fragment:$h,map_particle_fragment:Kh,map_particle_pars_fragment:Zh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Jh,morphinstance_vertex:Qh,morphcolor_vertex:tu,morphnormal_vertex:eu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:ru,normal_fragment_maps:su,normal_pars_fragment:ou,normal_pars_vertex:au,normal_vertex:lu,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:hu,clearcoat_normal_fragment_maps:uu,clearcoat_pars_fragment:du,iridescence_pars_fragment:fu,opaque_fragment:pu,packing:mu,premultiplied_alpha_fragment:gu,project_vertex:_u,dithering_fragment:xu,dithering_pars_fragment:vu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:Eu,shadowmap_vertex:Tu,shadowmask_pars_fragment:bu,skinbase_vertex:wu,skinning_pars_vertex:Au,skinning_vertex:Cu,skinnormal_vertex:Ru,specularmap_fragment:Pu,specularmap_pars_fragment:Du,tonemapping_fragment:Lu,tonemapping_pars_fragment:Iu,transmission_fragment:Uu,transmission_pars_fragment:Nu,uv_pars_fragment:Fu,uv_pars_vertex:Ou,uv_vertex:Bu,worldpos_vertex:zu,background_vert:Hu,background_frag:ku,backgroundCube_vert:Vu,backgroundCube_frag:Gu,cube_vert:Wu,cube_frag:Xu,depth_vert:qu,depth_frag:Yu,distanceRGBA_vert:$u,distanceRGBA_frag:Ku,equirect_vert:Zu,equirect_frag:ju,linedashed_vert:Ju,linedashed_frag:Qu,meshbasic_vert:td,meshbasic_frag:ed,meshlambert_vert:nd,meshlambert_frag:id,meshmatcap_vert:rd,meshmatcap_frag:sd,meshnormal_vert:od,meshnormal_frag:ad,meshphong_vert:ld,meshphong_frag:cd,meshphysical_vert:hd,meshphysical_frag:ud,meshtoon_vert:dd,meshtoon_frag:fd,points_vert:pd,points_frag:md,shadow_vert:gd,shadow_frag:_d,sprite_vert:xd,sprite_frag:vd},nt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},$e={basic:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Ee([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Ee([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Ee([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Ee([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Ee([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Ee([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Ee([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Ee([nt.lights,nt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};$e.physical={uniforms:Ee([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const nr={r:0,b:0,g:0},Rn=new Be,Md=new ie;function yd(i,t,e,n,r,s,o){const a=new Vt(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const L=g(T);L===null?u(a,l):L&&L.isColor&&(u(L,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){const L=g(S);L&&(L.isCubeTexture||L.mapping===vr)?(h===void 0&&(h=new Qt(new Li(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:pi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Rn.copy(S.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Md.makeRotationFromEuler(Rn)),h.material.toneMapped=Wt.getTransfer(L.colorSpace)!==Kt,(d!==L||f!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=L,f=L.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Qt(new Ii(2,2),new Sn({name:"BackgroundMaterial",uniforms:pi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(L.colorSpace)!==Kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,S){T.getRGB(nr,Ya(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,S,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(a,l)},render:x,addToRenderList:m,dispose:b}}function Sd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,R,H,z,W){let K=!1;const G=d(z,H,R);s!==G&&(s=G,c(s.object)),K=p(M,z,H,W),K&&g(M,z,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,R,H,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,R,H){const z=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let K=W[R.id];K===void 0&&(K={},W[R.id]=K);let G=K[z];return G===void 0&&(G=f(l()),K[z]=G),G}function f(M){const R=[],H=[],z=[];for(let W=0;W<e;W++)R[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,H,z){const W=s.attributes,K=R.attributes;let G=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){const ut=W[V];let vt=K[V];if(vt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(M,R,H,z){const W={},K=R.attributes;let G=0;const j=H.getAttributes();for(const V in j)if(j[V].location>=0){let ut=K[V];ut===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),W[V]=vt,G++}s.attributes=W,s.attributesNum=G,s.index=z}function x(){const M=s.newAttributes;for(let R=0,H=M.length;R<H;R++)M[R]=0}function m(M){u(M,0)}function u(M,R){const H=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;H[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==R&&(i.vertexAttribDivisor(M,R),W[M]=R)}function b(){const M=s.newAttributes,R=s.enabledAttributes;for(let H=0,z=R.length;H<z;H++)R[H]!==M[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function T(M,R,H,z,W,K,G){G===!0?i.vertexAttribIPointer(M,R,H,W,K):i.vertexAttribPointer(M,R,H,z,W,K)}function S(M,R,H,z){x();const W=z.attributes,K=H.getAttributes(),G=R.defaultAttributeValues;for(const j in K){const V=K[j];if(V.location>=0){let st=W[j];if(st===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ut=st.normalized,vt=st.itemSize,It=t.get(st);if(It===void 0)continue;const Zt=It.buffer,q=It.type,tt=It.bytesPerElement,gt=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===Ks;if(st.isInterleavedBufferAttribute){const ot=st.data,Et=ot.stride,Xt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)u(V.location+bt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let bt=0;bt<V.locationSize;bt++)T(V.location+bt,vt/V.locationSize,q,ut,Et*tt,(Xt+vt/V.locationSize*bt)*tt,gt)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)u(V.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ot=0;ot<V.locationSize;ot++)T(V.location+ot,vt/V.locationSize,q,ut,vt*tt,vt/V.locationSize*ot*tt,gt)}}else if(G!==void 0){const ut=G[j];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}b()}function L(){U();for(const M in n){const R=n[M];for(const H in R){const z=R[H];for(const W in z)h(z[W].object),delete z[W];delete R[H]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const H in R){const z=R[H];for(const W in z)h(z[W].object),delete z[W];delete R[H]}delete n[M.id]}function A(M){for(const R in n){const H=n[R];if(H[M.id]===void 0)continue;const z=H[M.id];for(const W in z)h(z[W].object),delete z[W];delete H[M.id]}}function U(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Ed(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Td(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function bd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ln,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,T=b*4;let S=u.clippingState||null;l.value=S,S=h(g,f,T,p);for(let L=0;L!==T;++L)S[L]=e[L];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,S=p;T!==x;++T,S+=4)o.copy(d[T]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function wd(i){let t=new WeakMap;function e(o,a){return a===fs?o.mapping=ci:a===ps&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fs||a===ps)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ac(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ni=4,Yo=[.125,.215,.35,.446,.526,.582],Nn=20,Zr=new Ja,$o=new Vt;let jr=null,Jr=0,Qr=0,ts=!1;const In=(1+Math.sqrt(5))/2,ei=1/In,Ko=[new N(-In,ei,0),new N(In,ei,0),new N(-ei,0,In),new N(ei,0,In),new N(0,In,-ei),new N(0,In,ei),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ad=new N;class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Ad}=s;jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Jr,Qr),this._renderer.xr.enabled=ts,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ci,format:qe,colorSpace:fi,depthBuffer:!1},r=jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cd(s)),this._blurMaterial=Rd(s,t,e)}return r}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,r,s){const l=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor($o),d.toneMapping=Mn,d.autoClear=!1;const g=new mr({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),x=new Qt(new Li,g);let m=!1;const u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,m=!0):(g.color.copy($o),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):T===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const S=this._cubeSize;ir(r,T*S,b>2?S:0,S,S),d.setRenderTarget(r),m&&d.render(x,l),d.render(t,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ci||t.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ko[(r-s-1)%Ko.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Nn;m>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const u=[];let b=0;for(let A=0;A<Nn;++A){const U=A/x,y=Math.exp(-U*U/2);u.push(y),A===0?b+=y:A<m&&(b+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const S=this._sizeLods[r],L=3*S*(r>T-ni?r-T+ni:0),C=4*(this._cubeSize-S);ir(e,L,C,3*S,2*S),l.setRenderTarget(e),l.render(d,Zr)}}function Cd(i){const t=[],e=[],n=[];let r=i;const s=i-ni+1+Yo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ni?l=Yo[o-i+ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),T=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,U=C>2?0:-1,y=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(y,x*g*C),T.set(f,m*g*C);const M=[C,C,C,C,C,C];S.set(M,u*g*C)}const L=new ye;L.setAttribute("position",new Ze(b,x)),L.setAttribute("uv",new Ze(T,m)),L.setAttribute("faceIndex",new Ze(S,u)),t.push(L),r>ni&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jo(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Rd(i,t,e){const n=new Float32Array(Nn),r=new N(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Jo(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Qo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fs||l===ps,h=l===ci||l===hi;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Zo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Dn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ld(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let T=0,S=b.length;T<S;T+=3){const L=b[T+0],C=b[T+1],A=b[T+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){const b=g.array;x=g.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const L=T+0,C=T+1,A=T+2;f.push(L,C,C,A,A,L)}}else return;const m=new(Ha(f)?qa:Xa)(f,1);m.version=x;const u=s.get(d);u&&t.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Id(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];e.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ud(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Nd(i,t,e){const n=new WeakMap,r=new oe;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*C*4*d),U=new ka(A,L,C,d);U.type=sn,U.needsUpdate=!0;const y=S*4;for(let R=0;R<d;R++){const H=u[R],z=b[R],W=T[R],K=L*C*4*R;for(let G=0;G<H.count;G++){const j=G*y;g===!0&&(r.fromBufferAttribute(H,G),A[K+j+0]=r.x,A[K+j+1]=r.y,A[K+j+2]=r.z,A[K+j+3]=0),x===!0&&(r.fromBufferAttribute(z,G),A[K+j+4]=r.x,A[K+j+5]=r.y,A[K+j+6]=r.z,A[K+j+7]=0),m===!0&&(r.fromBufferAttribute(W,G),A[K+j+8]=r.x,A[K+j+9]=r.y,A[K+j+10]=r.z,A[K+j+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new zt(L,C)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Fd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const tl=new Ae,ta=new Za(1,1),el=new ka,nl=new hc,il=new Ka,ea=[],na=[],ia=new Float32Array(16),ra=new Float32Array(9),sa=new Float32Array(4);function gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ea[r];if(s===void 0&&(s=new Float32Array(r),ea[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=na[t];e===void 0&&(e=new Int32Array(t),na[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Od(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;sa.set(n),i.uniformMatrix2fv(this.addr,!1,sa),de(e,n)}}function Vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ra.set(n),i.uniformMatrix3fv(this.addr,!1,ra),de(e,n)}}function Gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ia.set(n),i.uniformMatrix4fv(this.addr,!1,ia),de(e,n)}}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ta.compareFunction=za,s=ta):s=tl,e.setTexture2D(t||s,r)}function Qd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||nl,r)}function tf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||il,r)}function ef(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||el,r)}function nf(i){switch(i){case 5126:return Od;case 35664:return Bd;case 35665:return zd;case 35666:return Hd;case 35674:return kd;case 35675:return Vd;case 35676:return Gd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return qd;case 35669:case 35673:return Yd;case 5125:return $d;case 36294:return Kd;case 36295:return Zd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return Qd;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return ef}}function rf(i,t){i.uniform1fv(this.addr,t)}function sf(i,t){const e=gi(t,this.size,2);i.uniform2fv(this.addr,e)}function of(i,t){const e=gi(t,this.size,3);i.uniform3fv(this.addr,e)}function af(i,t){const e=gi(t,this.size,4);i.uniform4fv(this.addr,e)}function lf(i,t){const e=gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cf(i,t){const e=gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hf(i,t){const e=gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uf(i,t){i.uniform1iv(this.addr,t)}function df(i,t){i.uniform2iv(this.addr,t)}function ff(i,t){i.uniform3iv(this.addr,t)}function pf(i,t){i.uniform4iv(this.addr,t)}function mf(i,t){i.uniform1uiv(this.addr,t)}function gf(i,t){i.uniform2uiv(this.addr,t)}function _f(i,t){i.uniform3uiv(this.addr,t)}function xf(i,t){i.uniform4uiv(this.addr,t)}function vf(i,t,e){const n=this.cache,r=t.length,s=yr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||tl,s[o])}function Mf(i,t,e){const n=this.cache,r=t.length,s=yr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nl,s[o])}function yf(i,t,e){const n=this.cache,r=t.length,s=yr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||il,s[o])}function Sf(i,t,e){const n=this.cache,r=t.length,s=yr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||el,s[o])}function Ef(i){switch(i){case 5126:return rf;case 35664:return sf;case 35665:return of;case 35666:return af;case 35674:return lf;case 35675:return cf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Sf}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nf(e.type)}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ef(e.type)}}class wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const es=/(\w+)(\])?(\[|\.)?/g;function oa(i,t){i.seq.push(t),i.map[t.id]=t}function Af(i,t,e){const n=i.name,r=n.length;for(es.lastIndex=0;;){const s=es.exec(n),o=es.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){oa(e,c===void 0?new Tf(a,i,t):new bf(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new wf(a),oa(e,d)),e=d}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Af(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function aa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cf=37297;let Rf=0;function Pf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const la=new Pt;function Df(i){Wt._getMatrix(la,Wt.workingColorSpace,i);const t=`mat3( ${la.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ca(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Pf(i.getShaderSource(t),o)}else return r}function Lf(i,t){const e=Df(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function If(i,t){let e;switch(t){case Fl:e="Linear";break;case Ol:e="Reinhard";break;case Bl:e="Cineon";break;case zl:e="ACESFilmic";break;case kl:e="AgX";break;case Vl:e="Neutral";break;case Hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new N;function Uf(){Wt.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bi).join(`
`)}function Ff(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Of(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bi(i){return i!==""}function ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(i){return i.replace(Bf,Hf)}const zf=new Map;function Hf(i,t){let e=Lt[t];if(e===void 0){const n=zf.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xs(e)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(i){return i.replace(kf,Vf)}function Vf(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ta?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ba?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case hi:t="ENVMAP_TYPE_CUBE";break;case vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function qf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ul:t="ENVMAP_BLENDING_MIX";break;case Nl:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $f(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gf(e),c=Wf(e),h=Xf(e),d=qf(e),f=Yf(e),p=Nf(e),g=Ff(s),x=r.createProgram();let m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bi).join(`
`),u.length>0&&(u+=`
`)):(m=[fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),u=[fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?If("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Lf("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bi).join(`
`)),o=Xs(o),o=ha(o,e),o=ua(o,e),a=Xs(a),a=ha(a,e),a=ua(a,e),o=da(o),a=da(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+m+o,S=b+u+a,L=aa(r,r.VERTEX_SHADER,T),C=aa(r,r.FRAGMENT_SHADER,S);r.attachShader(x,L),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(C).trim();let K=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,C);else{const j=ca(r,L,"vertex"),V=ca(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+j+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(L),r.deleteShader(C),U=new hr(r,x),y=Of(r,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Cf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rf++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let Kf=0;class Zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jf(t),e.set(t,n)),n}}class jf{constructor(t){this.id=Kf++,this.code=t,this.usedTimes=0}}function Jf(i,t,e,n,r,s,o){const a=new Ga,l=new Zf,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,H,z){const W=H.fog,K=z.geometry,G=y.isMeshStandardMaterial?H.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),V=j&&j.mapping===vr?j.image.height:null,st=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=ut!==void 0?ut.length:0;let It=0;K.morphAttributes.position!==void 0&&(It=1),K.morphAttributes.normal!==void 0&&(It=2),K.morphAttributes.color!==void 0&&(It=3);let Zt,q,tt,gt;if(st){const $t=$e[st];Zt=$t.vertexShader,q=$t.fragmentShader}else Zt=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const ot=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Xt=z.isInstancedMesh===!0,bt=z.isBatchedMesh===!0,ae=!!y.map,ne=!!y.matcap,Nt=!!j,w=!!y.aoMap,Le=!!y.lightMap,Ft=!!y.bumpMap,Ot=!!y.normalMap,Mt=!!y.displacementMap,Jt=!!y.emissiveMap,xt=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,Y=y.dispersion>0,Z=y.iridescence>0,X=y.sheen>0,_t=y.transmission>0,at=_&&!!y.anisotropyMap,dt=F&&!!y.clearcoatMap,Ht=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,ft=Z&&!!y.iridescenceMap,Tt=Z&&!!y.iridescenceThicknessMap,wt=X&&!!y.sheenColorMap,pt=X&&!!y.sheenRoughnessMap,Bt=!!y.specularMap,Dt=!!y.specularColorMap,jt=!!y.specularIntensityMap,P=_t&&!!y.transmissionMap,it=_t&&!!y.thicknessMap,k=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,lt=!!y.alphaHash,Rt=!!y.extensions;let re=Mn;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(re=i.toneMapping);const xe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:bt,batchingColor:bt&&z._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&z.instanceColor!==null,instancingMorph:Xt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:ne,envMap:Nt,envMapMode:Nt&&j.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Le,bumpMap:Ft,normalMap:Ot,displacementMap:f&&Mt,emissiveMap:Jt,normalMapObjectSpace:Ot&&y.normalMapType===ql,normalMapTangentSpace:Ot&&y.normalMapType===Ba,metalnessMap:xt,roughnessMap:E,anisotropy:_,anisotropyMap:at,clearcoat:F,clearcoatMap:dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:X,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:Bt,specularColorMap:Dt,specularIntensityMap:jt,transmission:_t,transmissionMap:P,thicknessMap:it,gradientMap:k,opaque:y.transparent===!1&&y.blending===ri&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:lt,combine:y.combine,mapUv:ae&&x(y.map.channel),aoMapUv:w&&x(y.aoMap.channel),lightMapUv:Le&&x(y.lightMap.channel),bumpMapUv:Ft&&x(y.bumpMap.channel),normalMapUv:Ot&&x(y.normalMap.channel),displacementMapUv:Mt&&x(y.displacementMap.channel),emissiveMapUv:Jt&&x(y.emissiveMap.channel),metalnessMapUv:xt&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:at&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(y.sheenRoughnessMap.channel),specularMapUv:Bt&&x(y.specularMap.channel),specularColorMapUv:Dt&&x(y.specularColorMap.channel),specularIntensityMapUv:jt&&x(y.specularIntensityMap.channel),transmissionMapUv:P&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ae||$),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Kt,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===We,flipSided:y.side===we,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&y.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(M,y),T(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=g[y.type];let R;if(M){const H=$e[M];R=Ec.clone(H.uniforms)}else R=y.uniforms;return R}function L(y,M){let R;for(let H=0,z=h.length;H<z;H++){const W=h[H];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new $f(i,M,y,s),h.push(R)),R}function C(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:U}}function Qf(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ma(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,p,g,x,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function a(d,f,p,g,x,m){const u=o(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):e.push(u)}function l(d,f,p,g,x,m){const u=o(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||tp),n.length>1&&n.sort(f||pa),r.length>1&&r.sort(f||pa)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function ep(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ma,i.set(n,[o])):r>=s.length?(o=new ma,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function np(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Vt};break;case"SpotLight":e={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rp=0;function sp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function op(i){const t=new np,e=ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new ie,o=new ie;function a(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,T=0,S=0,L=0,C=0,A=0;c.sort(sp);for(let y=0,M=c.length;y<M;y++){const R=c[y],H=R.color,z=R.intensity,W=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*z,d+=H.g*z,f+=H.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],z);A++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(H).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const j=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,j.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=j.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=K,S++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(H).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,V=e.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[u]=G,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==L||U.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=L,U.numLightProbes=A,n.version=rp++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const T=c[u];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(T.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ga(i){const t=new op(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ap(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new ga(i),t.set(r,[a])):s>=o.length?(a=new ga(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hp(i,t,e){let n=new no;const r=new zt,s=new zt,o=new oe,a=new Lc({depthPacking:Xl}),l=new Ic,c={},h=e.maxTextureSize,d={[yn]:we,[we]:yn,[We]:We},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:lp,fragmentShader:cp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let u=this.type;this.render=function(C,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==rn&&this.type===rn,W=u===rn&&this.type!==rn;for(let K=0,G=C.length;K<G;K++){const j=C[K],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const st=V.getFrameExtents();if(r.multiply(st),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/st.x),r.x=s.x*st.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/st.y),r.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||z===!0||W===!0){const vt=this.type!==rn?{minFilter:Ye,magFilter:Ye}:{};V.map!==null&&V.map.dispose(),V.map=new zn(r.x,r.y,vt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let vt=0;vt<ut;vt++){const It=V.getViewport(vt);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),H.viewport(o),V.updateMatrices(j,vt),n=V.getFrustum(),S(A,U,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===rn&&b(V,U),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,R)};function b(C,A){const U=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,U,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,U,p,x,null)}function T(C,A,U,y){let M=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,z=A.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let K=W[z];K===void 0&&(K=M.clone(),W[z]=K,A.addEventListener("dispose",L)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,y===rn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=U}return M}function S(C,A,U,y,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===rn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=t.update(C),W=C.material;if(Array.isArray(W)){const K=z.groups;for(let G=0,j=K.length;G<j;G++){const V=K[G],st=W[V.materialIndex];if(st&&st.visible){const ut=T(C,st,y,M);C.onBeforeShadow(i,C,A,U,z,ut,V),i.renderBufferDirect(U,null,z,ut,C,V),C.onAfterShadow(i,C,A,U,z,ut,V)}}}else if(W.visible){const K=T(C,W,y,M);C.onBeforeShadow(i,C,A,U,z,K,null),i.renderBufferDirect(U,null,z,K,C,null),C.onAfterShadow(i,C,A,U,z,K,null)}}const H=C.children;for(let z=0,W=H.length;z<W;z++)S(H[z],A,U,y,M)}function L(C){C.target.removeEventListener("dispose",L);for(const U in c){const y=c[U],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const up={[os]:as,[ls]:us,[cs]:ds,[li]:hs,[as]:os,[us]:ls,[ds]:cs,[hs]:li};function dp(i,t){function e(){let P=!1;const it=new oe;let k=null;const $=new oe(0,0,0,0);return{setMask:function(ct){k!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){P=ct},setClear:function(ct,lt,Rt,re,xe){xe===!0&&(ct*=re,lt*=re,Rt*=re),it.set(ct,lt,Rt,re),$.equals(it)===!1&&(i.clearColor(ct,lt,Rt,re),$.copy(it))},reset:function(){P=!1,k=null,$.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,k=null,$=null,ct=null;return{setReversed:function(lt){if(it!==lt){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const re=ct;ct=null,this.setClear(re)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?ot(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(lt){k!==lt&&!P&&(i.depthMask(lt),k=lt)},setFunc:function(lt){if(it&&(lt=up[lt]),$!==lt){switch(lt){case os:i.depthFunc(i.NEVER);break;case as:i.depthFunc(i.ALWAYS);break;case ls:i.depthFunc(i.LESS);break;case li:i.depthFunc(i.LEQUAL);break;case cs:i.depthFunc(i.EQUAL);break;case hs:i.depthFunc(i.GEQUAL);break;case us:i.depthFunc(i.GREATER);break;case ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),i.clearDepth(lt),ct=lt)},reset:function(){P=!1,k=null,$=null,ct=null,it=!1}}}function r(){let P=!1,it=null,k=null,$=null,ct=null,lt=null,Rt=null,re=null,xe=null;return{setTest:function($t){P||($t?ot(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!P&&(i.stencilMask($t),it=$t)},setFunc:function($t,ze,je){(k!==$t||$!==ze||ct!==je)&&(i.stencilFunc($t,ze,je),k=$t,$=ze,ct=je)},setOp:function($t,ze,je){(lt!==$t||Rt!==ze||re!==je)&&(i.stencilOp($t,ze,je),lt=$t,Rt=ze,re=je)},setLocked:function($t){P=$t},setClear:function($t){xe!==$t&&(i.clearStencil($t),xe=$t)},reset:function(){P=!1,it=null,k=null,$=null,ct=null,lt=null,Rt=null,re=null,xe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,T=null,S=null,L=null,C=null,A=new Vt(0,0,0),U=0,y=!1,M=null,R=null,H=null,z=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=j>=2);let st=null,ut={};const vt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Zt=new oe().fromArray(vt),q=new oe().fromArray(It);function tt(P,it,k,$){const ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(P,lt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<k;Rt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(li),Ft(!1),Ot(_o),ot(i.CULL_FACE),w(vn);function ot(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Et(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Xt(P,it){return d[P]!==it?(i.bindFramebuffer(P,it),d[P]=it,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(P,it){let k=p,$=!1;if(P){k=f.get(it),k===void 0&&(k=[],f.set(it,k));const ct=P.textures;if(k.length!==ct.length||k[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Rt=ct.length;lt<Rt;lt++)k[lt]=i.COLOR_ATTACHMENT0+lt;k.length=ct.length,$=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,$=!0);$&&i.drawBuffers(k)}function ae(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const ne={[Un]:i.FUNC_ADD,[_l]:i.FUNC_SUBTRACT,[xl]:i.FUNC_REVERSE_SUBTRACT};ne[vl]=i.MIN,ne[Ml]=i.MAX;const Nt={[yl]:i.ZERO,[Sl]:i.ONE,[El]:i.SRC_COLOR,[rs]:i.SRC_ALPHA,[Rl]:i.SRC_ALPHA_SATURATE,[Al]:i.DST_COLOR,[bl]:i.DST_ALPHA,[Tl]:i.ONE_MINUS_SRC_COLOR,[ss]:i.ONE_MINUS_SRC_ALPHA,[Cl]:i.ONE_MINUS_DST_COLOR,[wl]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Dl]:i.ONE_MINUS_CONSTANT_COLOR,[Ll]:i.CONSTANT_ALPHA,[Il]:i.ONE_MINUS_CONSTANT_ALPHA};function w(P,it,k,$,ct,lt,Rt,re,xe,$t){if(P===vn){x===!0&&(Et(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),P!==gl){if(P!==m||$t!==y){if((u!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),u=Un,S=Un),$t)switch(P){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,L=null,C=null,A.set(0,0,0),U=0,m=P,y=$t}return}ct=ct||it,lt=lt||k,Rt=Rt||$,(it!==u||ct!==S)&&(i.blendEquationSeparate(ne[it],ne[ct]),u=it,S=ct),(k!==b||$!==T||lt!==L||Rt!==C)&&(i.blendFuncSeparate(Nt[k],Nt[$],Nt[lt],Nt[Rt]),b=k,T=$,L=lt,C=Rt),(re.equals(A)===!1||xe!==U)&&(i.blendColor(re.r,re.g,re.b,xe),A.copy(re),U=xe),m=P,y=!1}function Le(P,it){P.side===We?Et(i.CULL_FACE):ot(i.CULL_FACE);let k=P.side===we;it&&(k=!k),Ft(k),P.blending===ri&&P.transparent===!1?w(vn):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const $=P.stencilWrite;a.setTest($),$&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Ot(P){P!==pl?(ot(i.CULL_FACE),P!==R&&(P===_o?i.cullFace(i.BACK):P===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),R=P}function Mt(P){P!==H&&(G&&i.lineWidth(P),H=P)}function Jt(P,it,k){P?(ot(i.POLYGON_OFFSET_FILL),(z!==it||W!==k)&&(i.polygonOffset(it,k),z=it,W=k)):Et(i.POLYGON_OFFSET_FILL)}function xt(P){P?ot(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+K-1),st!==P&&(i.activeTexture(P),st=P)}function _(P,it,k){k===void 0&&(st===null?k=i.TEXTURE0+K-1:k=st);let $=ut[k];$===void 0&&($={type:void 0,texture:void 0},ut[k]=$),($.type!==P||$.texture!==it)&&(st!==k&&(i.activeTexture(k),st=k),i.bindTexture(P,it||gt[P]),$.type=P,$.texture=it)}function F(){const P=ut[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){Zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Zt.copy(P))}function pt(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Bt(P,it){let k=c.get(it);k===void 0&&(k=new WeakMap,c.set(it,k));let $=k.get(P);$===void 0&&($=i.getUniformBlockIndex(it,P.name),k.set(P,$))}function Dt(P,it){const $=c.get(it).get(P);l.get(it)!==$&&(i.uniformBlockBinding(it,$,P.__bindingPointIndex),l.set(it,$))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,T=null,S=null,L=null,C=null,A=new Vt(0,0,0),U=0,y=!1,M=null,R=null,H=null,z=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Et,bindFramebuffer:Xt,drawBuffers:bt,useProgram:ae,setBlending:w,setMaterial:Le,setFlipSided:Ft,setCullFace:Ot,setLineWidth:Mt,setPolygonOffset:Jt,setScissorTest:xt,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Bt,uniformBlockBinding:Dt,texStorage2D:Ht,texStorage3D:Q,texSubImage2D:X,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:wt,viewport:pt,reset:jt}}function fp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):pr("canvas")}function x(E,_,F){let Y=1;const Z=xt(E);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(Y*Z.width),_t=Math.floor(Y*Z.height);d===void 0&&(d=g(X,_t));const at=_?g(X,_t):d;return at.width=X,at.height=_t,at.getContext("2d").drawImage(E,0,0,X,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+_t+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,F,Y,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const _t=Z?dr:Wt.getTransfer(Y);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=_t===Kt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(E,_){let F;return E?_===null||_===Bn||_===ui?F=i.DEPTH24_STENCIL8:_===sn?F=i.DEPTH32F_STENCIL8:_===wi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===ui?F=i.DEPTH_COMPONENT24:_===sn?F=i.DEPTH_COMPONENT32F:_===wi&&(F=i.DEPTH_COMPONENT16),F}function L(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ye&&E.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){const _=E.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&h.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),M(_)}function U(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,Y=f.get(F);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(E),Object.keys(Y).length===0&&f.delete(F)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,Y=f.get(F);delete Y[_.__cacheKey],o.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const X=n.get(F[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(E)}let R=0;function H(){R=0}function z(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){const F=n.get(E);if(E.isVideoTexture&&Mt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function j(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const st={[ms]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[gs]:i.MIRRORED_REPEAT},ut={[Ye]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},vt={[Yl]:i.NEVER,[Ql]:i.ALWAYS,[$l]:i.LESS,[za]:i.LEQUAL,[Kl]:i.EQUAL,[Jl]:i.GEQUAL,[Zl]:i.GREATER,[jl]:i.NOTEQUAL};function It(E,_){if(_.type===sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===Tr||_.magFilter===Fi||_.magFilter===On||_.minFilter===Ke||_.minFilter===Tr||_.minFilter===Fi||_.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ye||_.minFilter!==Fi&&_.minFilter!==On||_.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Zt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));const Y=_.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const X=W(_);if(X!==E.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[X].usedTimes++;const _t=Z[E.__cacheKey];_t!==void 0&&(Z[E.__cacheKey].usedTimes--,_t.usedTimes===0&&y(_)),E.__cacheKey=X,E.__webglTexture=Z[X].texture}return F}function q(E,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Zt(E,_),X=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+F);const _t=n.get(X);if(X.version!==_t.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const at=Wt.getPrimaries(Wt.workingColorSpace),dt=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),Ht=_.colorSpace===xn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Q=x(_.image,!1,r.maxTextureSize);Q=Jt(_,Q);const ft=s.convert(_.format,_.colorSpace),Tt=s.convert(_.type);let wt=T(_.internalFormat,ft,Tt,_.colorSpace,_.isVideoTexture);It(Y,_);let pt;const Bt=_.mipmaps,Dt=_.isVideoTexture!==!0,jt=_t.__version===void 0||Z===!0,P=X.dataReady,it=L(_,Q);if(_.isDepthTexture)wt=S(_.format===di,_.type),jt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ft,Tt,null));else if(_.isDataTexture)if(Bt.length>0){Dt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,wt,Bt[0].width,Bt[0].height);for(let k=0,$=Bt.length;k<$;k++)pt=Bt[k],Dt?P&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,k,wt,pt.width,pt.height,0,ft,Tt,pt.data);_.generateMipmaps=!1}else Dt?(jt&&e.texStorage2D(i.TEXTURE_2D,it,wt,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ft,Tt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Bt[0].width,Bt[0].height,Q.depth);for(let k=0,$=Bt.length;k<$;k++)if(pt=Bt[k],_.format!==qe)if(ft!==null)if(Dt){if(P)if(_.layerUpdates.size>0){const ct=qo(pt.width,pt.height,_.format,_.type);for(const lt of _.layerUpdates){const Rt=pt.data.subarray(lt*ct/pt.data.BYTES_PER_ELEMENT,(lt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,lt,pt.width,pt.height,1,ft,Rt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,wt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,wt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{Dt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,wt,Bt[0].width,Bt[0].height);for(let k=0,$=Bt.length;k<$;k++)pt=Bt[k],_.format!==qe?ft!==null?Dt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?P&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,k,wt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(_.isDataArrayTexture)if(Dt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const k=qo(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ct=Q.data.subarray($*k/Q.data.BYTES_PER_ELEMENT,($+1)*k/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ft,Tt,ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(_.isData3DTexture)Dt?(jt&&e.texStorage3D(i.TEXTURE_3D,it,wt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(_.isFramebufferTexture){if(jt)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,wt,Q.width,Q.height);else{let k=Q.width,$=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,wt,k,$,0,ft,Tt,null),k>>=1,$>>=1}}else if(Bt.length>0){if(Dt&&jt){const k=xt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,k.width,k.height)}for(let k=0,$=Bt.length;k<$;k++)pt=Bt[k],Dt?P&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft,Tt,pt):e.texImage2D(i.TEXTURE_2D,k,wt,ft,Tt,pt);_.generateMipmaps=!1}else if(Dt){if(jt){const k=xt(Q);e.texStorage2D(i.TEXTURE_2D,it,wt,k.width,k.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,wt,ft,Tt,Q);m(_)&&u(Y),_t.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function tt(E,_,F){if(_.image.length!==6)return;const Y=Zt(E,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const _t=Wt.getPrimaries(Wt.workingColorSpace),at=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),dt=_.colorSpace===xn||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Ht&&!Q?ft[$]=x(_.image[$],!0,r.maxCubemapSize):ft[$]=Q?_.image[$].image:_.image[$],ft[$]=Jt(_,ft[$]);const Tt=ft[0],wt=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),Bt=T(_.internalFormat,wt,pt,_.colorSpace),Dt=_.isVideoTexture!==!0,jt=X.__version===void 0||Y===!0,P=Z.dataReady;let it=L(_,Tt);It(i.TEXTURE_CUBE_MAP,_);let k;if(Ht){Dt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Bt,Tt.width,Tt.height);for(let $=0;$<6;$++){k=ft[$].mipmaps;for(let ct=0;ct<k.length;ct++){const lt=k[ct];_.format!==qe?wt!==null?Dt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,wt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Bt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,wt,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Bt,lt.width,lt.height,0,wt,pt,lt.data)}}}else{if(k=_.mipmaps,Dt&&jt){k.length>0&&it++;const $=xt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Dt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,wt,pt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,ft[$].width,ft[$].height,0,wt,pt,ft[$].data);for(let ct=0;ct<k.length;ct++){const Rt=k[ct].image[$].image;Dt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Rt.width,Rt.height,wt,pt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Bt,Rt.width,Rt.height,0,wt,pt,Rt.data)}}else{Dt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,pt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,wt,pt,ft[$]);for(let ct=0;ct<k.length;ct++){const lt=k[ct];Dt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,wt,pt,lt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Bt,wt,pt,lt.image[$])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),X.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function gt(E,_,F,Y,Z,X){const _t=s.convert(F.format,F.colorSpace),at=s.convert(F.type),dt=T(F.internalFormat,_t,at,F.colorSpace),Ht=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!Ht.__hasExternalTextures){const ft=Math.max(1,_.width>>X),Tt=Math.max(1,_.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,dt,ft,Tt,_.depth,0,_t,at,null):e.texImage2D(Z,X,dt,ft,Tt,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,Ft(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=S(_.stencilBuffer,Z),_t=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ft(_);Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,E)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],_t=s.convert(X.format,X.colorSpace),at=s.convert(X.type),dt=T(X.internalFormat,_t,at,X.colorSpace),Ht=Ft(_);F&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,dt,_.width,_.height):Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const Z=Y.__webglTexture,X=Ft(_);if(_.depthTexture.format===si)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===di)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Et(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),ot(_.__webglDepthbuffer[Y],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ot(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(E,_,F){const Y=n.get(E);_!==void 0&&gt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Xt(E)}function ae(E){const _=E.texture,F=n.get(E),Y=n.get(_);E.addEventListener("dispose",A);const Z=E.textures,X=E.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let dt=0;dt<_.mipmaps.length;dt++)F.__webglFramebuffer[at][dt]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,dt=Z.length;at<dt;at++){const Ht=n.get(Z[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ot(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const dt=Z[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Ht=s.convert(dt.format,dt.colorSpace),Q=s.convert(dt.type),ft=T(dt.internalFormat,Ht,Q,dt.colorSpace,E.isXRRenderTarget===!0),Tt=Ft(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),It(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(F.__webglFramebuffer[at][dt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else gt(F.__webglFramebuffer[at],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,dt=Z.length;at<dt;at++){const Ht=Z[at],Q=n.get(Ht);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),It(i.TEXTURE_2D,Ht),gt(F.__webglFramebuffer,E,Ht,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Ht)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),It(at,_),_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(F.__webglFramebuffer[dt],E,_,i.COLOR_ATTACHMENT0,at,dt);else gt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,at,0);m(_)&&u(at),e.unbindTexture()}E.depthBuffer&&Xt(E)}function ne(E){const _=E.textures;for(let F=0,Y=_.length;F<Y;F++){const Z=_[F];if(m(Z)){const X=b(E),_t=n.get(Z).__webglTexture;e.bindTexture(X,_t),u(X),e.unbindTexture()}}}const Nt=[],w=[];function Le(E){if(E.samples>0){if(Ot(E)===!1){const _=E.textures,F=E.width,Y=E.height;let Z=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(E),at=_.length>1;if(at)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Ht=n.get(_[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,i.NEAREST),l===!0&&(Nt.length=0,w.length=0,Nt.push(i.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Nt.push(X),w.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Ht=n.get(_[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ft(E){return Math.min(r.maxSamples,E.samples)}function Ot(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Mt(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Jt(E,_){const F=E.colorSpace,Y=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==fi&&F!==xn&&(Wt.getTransfer(F)===Kt?(Y!==qe||Z!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ot}function pp(i,t){function e(n,r=xn){let s;const o=Wt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===Zs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===js)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ca)return i.BYTE;if(n===Ra)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===Ks)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Da)return i.ALPHA;if(n===La)return i.RGB;if(n===qe)return i.RGBA;if(n===Ia)return i.LUMINANCE;if(n===Ua)return i.LUMINANCE_ALPHA;if(n===si)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Na)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===Fa)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===sr||n===or||n===ar||n===lr)if(o===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_s||n===xs||n===vs||n===Ms)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Ss||n===Es)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ys||n===Ss)return o===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Es)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ts||n===bs||n===ws||n===As||n===Cs||n===Rs||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Ns||n===Fs||n===Os)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ts)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bs)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ws)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===As)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cs)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ps)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ds)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ls)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Is)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Us)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ns)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fs)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Os)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===Bs||n===zs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cr)return o===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Hs||n===ks||n===Vs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===cr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const mp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ae,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:mp,fragmentShader:gp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xp extends mi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const x=new _p,m=e.getContextAttributes();let u=null,b=null;const T=[],S=[],L=new zt;let C=null;const A=new Oe;A.viewport=new oe;const U=new Oe;U.viewport=new oe;const y=[A,U],M=new Bc;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=T[q];return tt===void 0&&(tt=new qr,T[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=T[q];return tt===void 0&&(tt=new qr,T[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=T[q];return tt===void 0&&(tt=new qr,T[q]=tt),tt.getHandSpace()};function z(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const gt=T[tt];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let q=0;q<T.length;q++){const tt=S[q];tt!==null&&(S[q]=null,T[q].disconnect(tt))}R=null,H=null,x.reset(),t.setRenderTarget(u),p=null,f=null,d=null,r=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ot=null,Et=null;m.depth&&(Et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?di:si,ot=m.stencil?ui:Bn);const Xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Xt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new zn(f.textureWidth,f.textureHeight,{format:qe,type:cn,depthTexture:new Za(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new zn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let tt=0;tt<q.removed.length;tt++){const gt=q.removed[tt],ot=S.indexOf(gt);ot>=0&&(S[ot]=null,T[ot].disconnect(gt))}for(let tt=0;tt<q.added.length;tt++){const gt=q.added[tt];let ot=S.indexOf(gt);if(ot===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=S.length){S.push(gt),ot=Xt;break}else if(S[Xt]===null){S[Xt]=gt,ot=Xt;break}if(ot===-1)break}const Et=T[ot];Et&&Et.connect(gt)}}const G=new N,j=new N;function V(q,tt,gt){G.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const ot=G.distanceTo(j),Et=tt.projectionMatrix.elements,Xt=gt.projectionMatrix.elements,bt=Et[14]/(Et[10]-1),ae=Et[14]/(Et[10]+1),ne=(Et[9]+1)/Et[5],Nt=(Et[9]-1)/Et[5],w=(Et[8]-1)/Et[0],Le=(Xt[8]+1)/Xt[0],Ft=bt*w,Ot=bt*Le,Mt=ot/(-w+Le),Jt=Mt*-w;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const xt=bt+Mt,E=ae+Mt,_=Ft-Jt,F=Ot+(ot-Jt),Y=ne*ae/E*xt,Z=Nt*ae/E*xt;q.projectionMatrix.makePerspective(_,F,Y,Z,xt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,gt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),M.near=U.near=A.near=tt,M.far=U.far=A.far=gt,(R!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,H=M.far),A.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|U.layers.mask;const ot=q.parent,Et=M.cameras;st(M,ot);for(let Xt=0;Xt<Et.length;Xt++)st(Et[Xt],ot);Et.length===2?V(M,A,U):M.projectionMatrix.copy(A.projectionMatrix),ut(q,M,ot)};function ut(q,tt,gt){gt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let vt=null;function It(q,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ot=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let bt=0;bt<gt.length;bt++){const ae=gt[bt];let ne=null;if(p!==null)ne=p.getViewport(ae);else{const w=d.getViewSubImage(f,ae);ne=w.viewport,bt===0&&(t.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(b))}let Nt=y[bt];Nt===void 0&&(Nt=new Oe,Nt.layers.enable(bt),Nt.viewport=new oe,y[bt]=Nt),Nt.matrix.fromArray(ae.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ae.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(ne.x,ne.y,ne.width,ne.height),bt===0&&(M.matrix.copy(Nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Nt)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const bt=d.getDepthInformation(gt[0]);bt&&bt.isValid&&bt.texture&&x.init(t,bt,r.renderState)}}for(let gt=0;gt<T.length;gt++){const ot=S[gt],Et=T[gt];ot!==null&&Et!==void 0&&Et.update(ot,tt,c||o)}vt&&vt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Zt=new Qa;Zt.setAnimationLoop(It),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const Pn=new Be,vp=new ie;function Mp(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ya(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,b,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,T):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===we&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===we&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=t.get(u),T=b.envMap,S=b.envMapRotation;T&&(m.envMap.value=T,Pn.copy(S),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(vp.makeRotationFromEuler(Pn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=T*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function yp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function c(b,T){let S=r[b.id];S===void 0&&(g(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",m));const L=T.program;n.updateUBOMapping(b,L);const C=t.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function h(b){const T=d();b.__bindingPointIndex=T;const S=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=r[b.id],S=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,A=S.length;C<A;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,M=U.length;y<M;y++){const R=U[y];if(p(R,C,y,L)===!0){const H=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let K=0;K<z.length;K++){const G=z[K],j=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,S,L){const C=b.value,A=T+"_"+S;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const U=L[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(b){const T=b.uniforms;let S=0;const L=16;for(let A=0,U=T.length;A<U;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,R=y.length;M<R;M++){const H=y[M],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,K=z.length;W<K;W++){const G=z[W],j=x(G),V=S%L,st=V%j.boundary,ut=V+st;S+=st,ut!==0&&L-ut<j.storage&&(S+=L-ut),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=j.storage}}}const C=S%L;return C>0&&(S+=L-C),b.__size=S,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Sp{constructor(t={}){const{canvas:e=ec(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Mn,this.toneMappingExposure=1;const S=this;let L=!1,C=0,A=0,U=null,y=-1,M=null;const R=new oe,H=new oe;let z=null;const W=new Vt(0);let K=0,G=e.width,j=e.height,V=1,st=null,ut=null;const vt=new oe(0,0,G,j),It=new oe(0,0,G,j);let Zt=!1;const q=new no;let tt=!1,gt=!1;this.transmissionResolutionScale=1;const ot=new ie,Et=new ie,Xt=new N,bt=new oe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Nt(){return U===null?V:1}let w=n;function Le(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$s}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),w===null){const D="webgl2";if(w=Le(D,v),w===null)throw Le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ft,Ot,Mt,Jt,xt,E,_,F,Y,Z,X,_t,at,dt,Ht,Q,ft,Tt,wt,pt,Bt,Dt,jt,P;function it(){Ft=new Dd(w),Ft.init(),Dt=new pp(w,Ft),Ot=new Td(w,Ft,t,Dt),Mt=new dp(w,Ft),Ot.reverseDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),Jt=new Ud(w),xt=new Qf,E=new fp(w,Ft,Mt,xt,Ot,Dt,Jt),_=new wd(S),F=new Pd(S),Y=new Hc(w),jt=new Sd(w,Y),Z=new Ld(w,Y,Jt,jt),X=new Fd(w,Z,Y,Jt),wt=new Nd(w,Ot,E),Q=new bd(xt),_t=new Jf(S,_,F,Ft,Ot,jt,Q),at=new Mp(S,xt),dt=new ep,Ht=new ap(Ft),Tt=new yd(S,_,F,Mt,X,p,l),ft=new hp(S,X,Ot),P=new yp(w,Jt,Ot,Mt),pt=new Ed(w,Ft,Jt),Bt=new Id(w,Ft,Jt),Jt.programs=_t.programs,S.capabilities=Ot,S.extensions=Ft,S.properties=xt,S.renderLists=dt,S.shadowMap=ft,S.state=Mt,S.info=Jt}it();const k=new xp(S,w);this.xr=k,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(G,j,!1))},this.getSize=function(v){return v.set(G,j)},this.setSize=function(v,D,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,j=D,e.width=Math.floor(v*V),e.height=Math.floor(D*V),O===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(G*V,j*V).floor()},this.setDrawingBufferSize=function(v,D,O){G=v,j=D,V=O,e.width=Math.floor(v*O),e.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,D,O,B){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,D,O,B),Mt.viewport(R.copy(vt).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(It)},this.setScissor=function(v,D,O,B){v.isVector4?It.set(v.x,v.y,v.z,v.w):It.set(v,D,O,B),Mt.scissor(H.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(v){Mt.setScissorTest(Zt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,O=!0){let B=0;if(v){let I=!1;if(U!==null){const J=U.texture.format;I=J===to||J===Qs||J===Js}if(I){const J=U.texture.type,rt=J===cn||J===Bn||J===wi||J===ui||J===Zs||J===js,ht=Tt.getClearColor(),mt=Tt.getClearAlpha(),At=ht.r,Ct=ht.g,yt=ht.b;rt?(g[0]=At,g[1]=Ct,g[2]=yt,g[3]=mt,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=At,x[1]=Ct,x[2]=yt,x[3]=mt,w.clearBufferiv(w.COLOR,0,x))}else B|=w.COLOR_BUFFER_BIT}D&&(B|=w.DEPTH_BUFFER_BIT),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Tt.dispose(),dt.dispose(),Ht.dispose(),xt.dispose(),_.dispose(),F.dispose(),X.dispose(),jt.dispose(),P.dispose(),_t.dispose(),k.dispose(),k.removeEventListener("sessionstart",co),k.removeEventListener("sessionend",ho),En.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=Jt.autoReset,D=ft.enabled,O=ft.autoUpdate,B=ft.needsUpdate,I=ft.type;it(),Jt.autoReset=v,ft.enabled=D,ft.autoUpdate=O,ft.needsUpdate=B,ft.type=I}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rt(v){const D=v.target;D.removeEventListener("dispose",Rt),re(D)}function re(v){xe(v),xt.remove(v)}function xe(v){const D=xt.get(v).programs;D!==void 0&&(D.forEach(function(O){_t.releaseProgram(O)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,B,I,J){D===null&&(D=ae);const rt=I.isMesh&&I.matrixWorld.determinant()<0,ht=ol(v,D,O,B,I);Mt.setMaterial(B,rt);let mt=O.index,At=1;if(B.wireframe===!0){if(mt=Z.getWireframeAttribute(O),mt===void 0)return;At=2}const Ct=O.drawRange,yt=O.attributes.position;let kt=Ct.start*At,qt=(Ct.start+Ct.count)*At;J!==null&&(kt=Math.max(kt,J.start*At),qt=Math.min(qt,(J.start+J.count)*At)),mt!==null?(kt=Math.max(kt,0),qt=Math.min(qt,mt.count)):yt!=null&&(kt=Math.max(kt,0),qt=Math.min(qt,yt.count));const ce=qt-kt;if(ce<0||ce===1/0)return;jt.setup(I,B,ht,O,mt);let se,Gt=pt;if(mt!==null&&(se=Y.get(mt),Gt=Bt,Gt.setIndex(se)),I.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*Nt()),Gt.setMode(w.LINES)):Gt.setMode(w.TRIANGLES);else if(I.isLine){let St=B.linewidth;St===void 0&&(St=1),Mt.setLineWidth(St*Nt()),I.isLineSegments?Gt.setMode(w.LINES):I.isLineLoop?Gt.setMode(w.LINE_LOOP):Gt.setMode(w.LINE_STRIP)}else I.isPoints?Gt.setMode(w.POINTS):I.isSprite&&Gt.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Dn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Gt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const St=I._multiDrawStarts,ge=I._multiDrawCounts,Yt=I._multiDrawCount,He=mt?Y.get(mt).bytesPerElement:1,kn=xt.get(B).currentProgram.getUniforms();for(let Ce=0;Ce<Yt;Ce++)kn.setValue(w,"_gl_DrawID",Ce),Gt.render(St[Ce]/He,ge[Ce])}else if(I.isInstancedMesh)Gt.renderInstances(kt,ce,I.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ge=Math.min(O.instanceCount,St);Gt.renderInstances(kt,ce,ge)}else Gt.render(kt,ce)};function $t(v,D,O){v.transparent===!0&&v.side===We&&v.forceSinglePass===!1?(v.side=we,v.needsUpdate=!0,Ni(v,D,O),v.side=yn,v.needsUpdate=!0,Ni(v,D,O),v.side=We):Ni(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),u=Ht.get(O),u.init(D),T.push(u),O.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),v!==O&&v.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const B=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let rt=0;rt<J.length;rt++){const ht=J[rt];$t(ht,O,I),B.add(ht)}else $t(J,O,I),B.add(J)}),u=T.pop(),B},this.compileAsync=function(v,D,O=null){const B=this.compile(v,D,O);return new Promise(I=>{function J(){if(B.forEach(function(rt){xt.get(rt).currentProgram.isReady()&&B.delete(rt)}),B.size===0){I(v);return}setTimeout(J,10)}Ft.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let ze=null;function je(v){ze&&ze(v)}function co(){En.stop()}function ho(){En.start()}const En=new Qa;En.setAnimationLoop(je),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(v){ze=v,k.setAnimationLoop(v),v===null?En.stop():En.start()},k.addEventListener("sessionstart",co),k.addEventListener("sessionend",ho),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(D),D=k.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,U),u=Ht.get(v,T.length),u.init(D),T.push(u),Et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),m=dt.get(v,b.length),m.init(),b.push(m),k.enabled===!0&&k.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&Sr(J,D,-1/0,S.sortObjects)}Sr(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ut),ne=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ne&&Tt.addToRenderList(m,v),this.info.render.frame++,tt===!0&&Q.beginShadows();const O=u.state.shadowsArray;ft.render(O,v,D),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(u.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let rt=0,ht=J.length;rt<ht;rt++){const mt=J[rt];fo(B,I,v,mt)}ne&&Tt.render(v);for(let rt=0,ht=J.length;rt<ht;rt++){const mt=J[rt];uo(m,v,mt,mt.viewport)}}else I.length>0&&fo(B,I,v,D),ne&&Tt.render(v),uo(m,v,D);U!==null&&A===0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(S,v,D),jt.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],tt===!0&&Q.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Sr(v,D,O,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){B&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Et);const rt=X.update(v),ht=v.material;ht.visible&&m.push(v,rt,ht,O,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const rt=X.update(v),ht=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),bt.copy(rt.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(Et)),Array.isArray(ht)){const mt=rt.groups;for(let At=0,Ct=mt.length;At<Ct;At++){const yt=mt[At],kt=ht[yt.materialIndex];kt&&kt.visible&&m.push(v,rt,kt,O,bt.z,yt)}}else ht.visible&&m.push(v,rt,ht,O,bt.z,null)}}const J=v.children;for(let rt=0,ht=J.length;rt<ht;rt++)Sr(J[rt],D,O,B)}function uo(v,D,O,B){const I=v.opaque,J=v.transmissive,rt=v.transparent;u.setupLightsView(O),tt===!0&&Q.setGlobalState(S.clippingPlanes,O),B&&Mt.viewport(R.copy(B)),I.length>0&&Ui(I,D,O),J.length>0&&Ui(J,D,O),rt.length>0&&Ui(rt,D,O),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function fo(v,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new zn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ci:cn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const J=u.state.transmissionRenderTarget[B.id],rt=B.viewport||R;J.setSize(rt.z*S.transmissionResolutionScale,rt.w*S.transmissionResolutionScale);const ht=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ne&&Tt.render(O);const mt=S.toneMapping;S.toneMapping=Mn;const At=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),tt===!0&&Q.setGlobalState(S.clippingPlanes,B),Ui(v,O,B),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let yt=0,kt=D.length;yt<kt;yt++){const qt=D[yt],ce=qt.object,se=qt.geometry,Gt=qt.material,St=qt.group;if(Gt.side===We&&ce.layers.test(B.layers)){const ge=Gt.side;Gt.side=we,Gt.needsUpdate=!0,po(ce,O,B,se,Gt,St),Gt.side=ge,Gt.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}S.setRenderTarget(ht),S.setClearColor(W,K),At!==void 0&&(B.viewport=At),S.toneMapping=mt}function Ui(v,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=v.length;I<J;I++){const rt=v[I],ht=rt.object,mt=rt.geometry,At=B===null?rt.material:B,Ct=rt.group;ht.layers.test(O.layers)&&po(ht,D,O,mt,At,Ct)}}function po(v,D,O,B,I,J){v.onBeforeRender(S,D,O,B,I,J),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,D,O,B,v,J),I.transparent===!0&&I.side===We&&I.forceSinglePass===!1?(I.side=we,I.needsUpdate=!0,S.renderBufferDirect(O,D,B,I,v,J),I.side=yn,I.needsUpdate=!0,S.renderBufferDirect(O,D,B,I,v,J),I.side=We):S.renderBufferDirect(O,D,B,I,v,J),v.onAfterRender(S,D,O,B,I,J)}function Ni(v,D,O){D.isScene!==!0&&(D=ae);const B=xt.get(v),I=u.state.lights,J=u.state.shadowsArray,rt=I.state.version,ht=_t.getParameters(v,I.state,J,D,O),mt=_t.getProgramCacheKey(ht);let At=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?F:_).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,At===void 0&&(v.addEventListener("dispose",Rt),At=new Map,B.programs=At);let Ct=At.get(mt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===rt)return go(v,ht),Ct}else ht.uniforms=_t.getUniforms(v),v.onBeforeCompile(ht,S),Ct=_t.acquireProgram(ht,mt),At.set(mt,Ct),B.uniforms=ht.uniforms;const yt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=Q.uniform),go(v,ht),B.needsLights=ll(v),B.lightsStateVersion=rt,B.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function mo(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=hr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function go(v,D){const O=xt.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ol(v,D,O,B,I){D.isScene!==!0&&(D=ae),E.resetTextureUnits();const J=D.fog,rt=B.isMeshStandardMaterial?D.environment:null,ht=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fi,mt=(B.isMeshStandardMaterial?F:_).get(B.envMap||rt),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!O.morphAttributes.position,kt=!!O.morphAttributes.normal,qt=!!O.morphAttributes.color;let ce=Mn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ce=S.toneMapping);const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Gt=se!==void 0?se.length:0,St=xt.get(B),ge=u.state.lights;if(tt===!0&&(gt===!0||v!==M)){const Se=v===M&&B.id===y;Q.setState(B,v,Se)}let Yt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ge.state.version||St.outputColorSpace!==ht||I.isBatchedMesh&&St.batching===!1||!I.isBatchedMesh&&St.batching===!0||I.isBatchedMesh&&St.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&St.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&St.instancing===!1||!I.isInstancedMesh&&St.instancing===!0||I.isSkinnedMesh&&St.skinning===!1||!I.isSkinnedMesh&&St.skinning===!0||I.isInstancedMesh&&St.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&St.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&St.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&St.instancingMorph===!1&&I.morphTexture!==null||St.envMap!==mt||B.fog===!0&&St.fog!==J||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Q.numPlanes||St.numIntersection!==Q.numIntersection)||St.vertexAlphas!==At||St.vertexTangents!==Ct||St.morphTargets!==yt||St.morphNormals!==kt||St.morphColors!==qt||St.toneMapping!==ce||St.morphTargetsCount!==Gt)&&(Yt=!0):(Yt=!0,St.__version=B.version);let He=St.currentProgram;Yt===!0&&(He=Ni(B,D,I));let kn=!1,Ce=!1,_i=!1;const te=He.getUniforms(),Ie=St.uniforms;if(Mt.useProgram(He.program)&&(kn=!0,Ce=!0,_i=!0),B.id!==y&&(y=B.id,Ce=!0),kn||M!==v){Mt.buffers.depth.getReversed()?(ot.copy(v.projectionMatrix),ic(ot),rc(ot),te.setValue(w,"projectionMatrix",ot)):te.setValue(w,"projectionMatrix",v.projectionMatrix),te.setValue(w,"viewMatrix",v.matrixWorldInverse);const Te=te.map.cameraPosition;Te!==void 0&&Te.setValue(w,Xt.setFromMatrixPosition(v.matrixWorld)),Ot.logarithmicDepthBuffer&&te.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ce=!0,_i=!0)}if(I.isSkinnedMesh){te.setOptional(w,I,"bindMatrix"),te.setOptional(w,I,"bindMatrixInverse");const Se=I.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),te.setValue(w,"boneTexture",Se.boneTexture,E))}I.isBatchedMesh&&(te.setOptional(w,I,"batchingTexture"),te.setValue(w,"batchingTexture",I._matricesTexture,E),te.setOptional(w,I,"batchingIdTexture"),te.setValue(w,"batchingIdTexture",I._indirectTexture,E),te.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&te.setValue(w,"batchingColorTexture",I._colorsTexture,E));const Ue=O.morphAttributes;if((Ue.position!==void 0||Ue.normal!==void 0||Ue.color!==void 0)&&wt.update(I,O,He),(Ce||St.receiveShadow!==I.receiveShadow)&&(St.receiveShadow=I.receiveShadow,te.setValue(w,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ie.envMap.value=mt,Ie.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ie.envMapIntensity.value=D.environmentIntensity),Ce&&(te.setValue(w,"toneMappingExposure",S.toneMappingExposure),St.needsLights&&al(Ie,_i),J&&B.fog===!0&&at.refreshFogUniforms(Ie,J),at.refreshMaterialUniforms(Ie,B,V,j,u.state.transmissionRenderTarget[v.id]),hr.upload(w,mo(St),Ie,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(hr.upload(w,mo(St),Ie,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(w,"center",I.center),te.setValue(w,"modelViewMatrix",I.modelViewMatrix),te.setValue(w,"normalMatrix",I.normalMatrix),te.setValue(w,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Se=B.uniformsGroups;for(let Te=0,Er=Se.length;Te<Er;Te++){const Tn=Se[Te];P.update(Tn,He),P.bind(Tn,He)}}return He}function al(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function ll(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,D,O){xt.get(v.texture).__webglTexture=D,xt.get(v.depthTexture).__webglTexture=O;const B=xt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const O=xt.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const cl=w.createFramebuffer();this.setRenderTarget=function(v,D=0,O=0){U=v,C=D,A=O;let B=!0,I=null,J=!1,rt=!1;if(v){const mt=xt.get(v);if(mt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(mt.__hasExternalTextures)E.rebindTextures(v,xt.get(v.texture).__webglTexture,xt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const yt=v.depthTexture;if(mt.__boundDepthTexture!==yt){if(yt!==null&&xt.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const At=v.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(rt=!0);const Ct=xt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?I=Ct[D][O]:I=Ct[D],J=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?I=xt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[O]:I=Ct,R.copy(v.viewport),H.copy(v.scissor),z=v.scissorTest}else R.copy(vt).multiplyScalar(V).floor(),H.copy(It).multiplyScalar(V).floor(),z=Zt;if(O!==0&&(I=cl),Mt.bindFramebuffer(w.FRAMEBUFFER,I)&&B&&Mt.drawBuffers(v,I),Mt.viewport(R),Mt.scissor(H),Mt.setScissorTest(z),J){const mt=xt.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,O)}else if(rt){const mt=xt.get(v.texture),At=D;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,mt.__webglTexture,O,At)}else if(v!==null&&O!==0){const mt=xt.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(v,D,O,B,I,J,rt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){Mt.bindFramebuffer(w.FRAMEBUFFER,ht);try{const mt=v.texture,At=mt.format,Ct=mt.type;if(!Ot.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&O>=0&&O<=v.height-I&&w.readPixels(D,O,B,I,Dt.convert(At),Dt.convert(Ct),J)}finally{const mt=U!==null?xt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,B,I,J,rt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){const mt=v.texture,At=mt.format,Ct=mt.type;if(!Ot.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-B&&O>=0&&O<=v.height-I){Mt.bindFramebuffer(w.FRAMEBUFFER,ht);const yt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.bufferData(w.PIXEL_PACK_BUFFER,J.byteLength,w.STREAM_READ),w.readPixels(D,O,B,I,Dt.convert(At),Dt.convert(Ct),0);const kt=U!==null?xt.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,kt);const qt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await nc(w,qt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,J),w.deleteBuffer(yt),w.deleteSync(qt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,O=0){v.isTexture!==!0&&(Dn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),I=Math.floor(v.image.width*B),J=Math.floor(v.image.height*B),rt=D!==null?D.x:0,ht=D!==null?D.y:0;E.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,rt,ht,I,J),Mt.unbindTexture()};const hl=w.createFramebuffer(),ul=w.createFramebuffer();this.copyTextureToTexture=function(v,D,O=null,B=null,I=0,J=null){v.isTexture!==!0&&(Dn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],D=arguments[2],J=arguments[3]||0,O=null),J===null&&(I!==0?(Dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let rt,ht,mt,At,Ct,yt,kt,qt,ce;const se=v.isCompressedTexture?v.mipmaps[J]:v.image;if(O!==null)rt=O.max.x-O.min.x,ht=O.max.y-O.min.y,mt=O.isBox3?O.max.z-O.min.z:1,At=O.min.x,Ct=O.min.y,yt=O.isBox3?O.min.z:0;else{const Ue=Math.pow(2,-I);rt=Math.floor(se.width*Ue),ht=Math.floor(se.height*Ue),v.isDataArrayTexture?mt=se.depth:v.isData3DTexture?mt=Math.floor(se.depth*Ue):mt=1,At=0,Ct=0,yt=0}B!==null?(kt=B.x,qt=B.y,ce=B.z):(kt=0,qt=0,ce=0);const Gt=Dt.convert(D.format),St=Dt.convert(D.type);let ge;D.isData3DTexture?(E.setTexture3D(D,0),ge=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),ge=w.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),ge=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=w.getParameter(w.UNPACK_ROW_LENGTH),He=w.getParameter(w.UNPACK_IMAGE_HEIGHT),kn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),_i=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,se.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,se.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,At),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,yt);const te=v.isDataArrayTexture||v.isData3DTexture,Ie=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Ue=xt.get(v),Se=xt.get(D),Te=xt.get(Ue.__renderTarget),Er=xt.get(Se.__renderTarget);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,Te.__webglFramebuffer),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Tn=0;Tn<mt;Tn++)te&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(v).__webglTexture,I,yt+Tn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(D).__webglTexture,J,ce+Tn)),w.blitFramebuffer(At,Ct,rt,ht,kt,qt,rt,ht,w.DEPTH_BUFFER_BIT,w.NEAREST);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||xt.has(v)){const Ue=xt.get(v),Se=xt.get(D);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,hl),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,ul);for(let Te=0;Te<mt;Te++)te?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ue.__webglTexture,I,yt+Te):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ue.__webglTexture,I),Ie?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Se.__webglTexture,J,ce+Te):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Se.__webglTexture,J),I!==0?w.blitFramebuffer(At,Ct,rt,ht,kt,qt,rt,ht,w.COLOR_BUFFER_BIT,w.NEAREST):Ie?w.copyTexSubImage3D(ge,J,kt,qt,ce+Te,At,Ct,rt,ht):w.copyTexSubImage2D(ge,J,kt,qt,At,Ct,rt,ht);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ie?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(ge,J,kt,qt,ce,rt,ht,mt,Gt,St,se.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(ge,J,kt,qt,ce,rt,ht,mt,Gt,se.data):w.texSubImage3D(ge,J,kt,qt,ce,rt,ht,mt,Gt,St,se):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,J,kt,qt,rt,ht,Gt,St,se.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,J,kt,qt,se.width,se.height,Gt,se.data):w.texSubImage2D(w.TEXTURE_2D,J,kt,qt,rt,ht,Gt,St,se);w.pixelStorei(w.UNPACK_ROW_LENGTH,Yt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,He),w.pixelStorei(w.UNPACK_SKIP_PIXELS,kn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,_i),J===0&&D.generateMipmaps&&w.generateMipmap(ge),Mt.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O=null,B=null,I=0){return v.isTexture!==!0&&(Dn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],D=arguments[3],I=arguments[4]||0),Dn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,O,B,I)},this.initRenderTarget=function(v){xt.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Mt.unbindTexture()},this.resetState=function(){C=0,A=0,U=null,Mt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Ep{constructor(){et(this,"scene");et(this,"camera");et(this,"renderer");et(this,"width");et(this,"height");this.scene=new Rc,this.scene.background=new Vt(8900331),this.width=window.innerWidth,this.height=window.innerHeight,this.camera=new Oe(75,this.width/this.height,.1,1e3),this.camera.position.set(0,5,15),this.camera.lookAt(0,3,0),this.renderer=new Sp({antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement);const t=new Oc(16777215,.5);this.scene.add(t);const e=new Fc(16777215,.8);e.position.set(1,10,5),e.castShadow=!0,this.scene.add(e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ba}render(){this.renderer.render(this.scene,this.camera)}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}getCamera(){return this.camera}}const ur=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return Math.sqrt(e*e+n*n)},Tp=(i,t)=>{const e=t.x-i.x,n=t.y-i.y;return wp(Math.atan2(n,e))},bp=(i,t,e)=>{const n={x:0,y:0};return e=qs(e),n.x=i.x-t*Math.cos(e),n.y=i.y-t*Math.sin(e),n},qs=i=>i*(Math.PI/180),wp=i=>i*(180/Math.PI),Ap=i=>isNaN(i.buttons)?i.pressure!==0:i.buttons!==0,ns=new Map,_a=i=>{ns.has(i)&&clearTimeout(ns.get(i)),ns.set(i,setTimeout(i,100))},xr=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.addEventListener?i.addEventListener(r,e,!1):i.attachEvent&&i.attachEvent(r,e)},xa=(i,t,e)=>{const n=t.split(/[ ,]+/g);let r;for(let s=0;s<n.length;s+=1)r=n[s],i.removeEventListener?i.removeEventListener(r,e):i.detachEvent&&i.detachEvent(r,e)},rl=i=>(i.preventDefault(),i.type.match(/^touch/)?i.changedTouches:i),va=()=>{const i=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:i,y:t}},Ma=(i,t)=>{t.top||t.right||t.bottom||t.left?(i.style.top=t.top,i.style.right=t.right,i.style.bottom=t.bottom,i.style.left=t.left):(i.style.left=t.x+"px",i.style.top=t.y+"px")},lo=(i,t,e)=>{const n=sl(i);for(let r in n)if(n.hasOwnProperty(r))if(typeof t=="string")n[r]=t+" "+e;else{let s="";for(let o=0,a=t.length;o<a;o+=1)s+=t[o]+" "+e+", ";n[r]=s.slice(0,-2)}return n},Cp=(i,t)=>{const e=sl(i);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},sl=i=>{const t={};return t[i]="",["webkit","Moz","o"].forEach(function(n){t[n+i.charAt(0).toUpperCase()+i.slice(1)]=""}),t},is=(i,t)=>{for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i},Rp=(i,t)=>{const e={};for(let n in i)i.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:i.hasOwnProperty(n)&&(e[n]=i[n]);return e},Ys=(i,t)=>{if(i.length)for(let e=0,n=i.length;e<n;e+=1)t(i[e]);else t(i)},Pp=(i,t,e)=>({x:Math.min(Math.max(i.x,t.x-e),t.x+e),y:Math.min(Math.max(i.y,t.y-e),t.y+e)});var Dp="ontouchstart"in window,Lp=!!window.PointerEvent,Ip=!!window.MSPointerEvent,Ti={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},ii,Ai={};Lp?ii=Ti.pointer:Ip?ii=Ti.MSPointer:Dp?(ii=Ti.touch,Ai=Ti.mouse):ii=Ti.mouse;function un(){}un.prototype.on=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]=e._handlers_[r]||[],e._handlers_[r].push(t);return e};un.prototype.off=function(i,t){var e=this;return e._handlers_=e._handlers_||{},i===void 0?e._handlers_={}:t===void 0?e._handlers_[i]=null:e._handlers_[i]&&e._handlers_[i].indexOf(t)>=0&&e._handlers_[i].splice(e._handlers_[i].indexOf(t),1),e};un.prototype.trigger=function(i,t){var e=this,n=i.split(/[ ,]+/g),r;e._handlers_=e._handlers_||{};for(var s=0;s<n.length;s+=1)r=n[s],e._handlers_[r]&&e._handlers_[r].length&&e._handlers_[r].forEach(function(o){o.call(e,{type:r,target:e},t)})};un.prototype.config=function(i){var t=this;t.options=t.defaults||{},i&&(t.options=Rp(t.options,i))};un.prototype.bindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},xr(i,ii[t],e._domHandlers_[t]),Ai[t]&&xr(i,Ai[t],e._domHandlers_[t]),e};un.prototype.unbindEvt=function(i,t){var e=this;return e._domHandlers_=e._domHandlers_||{},xa(i,ii[t],e._domHandlers_[t]),Ai[t]&&xa(i,Ai[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function fe(i,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=i,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=fe.id,fe.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}fe.prototype=new un;fe.constructor=fe;fe.id=0;fe.prototype.buildEl=function(i){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};fe.prototype.stylize=function(){if(this.options.dataOnly)return this;var i=this.options.fadeTime+"ms",t=Cp("borderRadius","50%"),e=lo("transition","opacity",i),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},is(n.el,e),this.options.shape==="circle"&&is(n.back,t),is(n.front,t),this.applyStyles(n),this};fe.prototype.applyStyles=function(i){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in i[t])this.ui[t].style[e]=i[t][e];return this};fe.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};fe.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};fe.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};fe.prototype.show=function(i){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof i=="function"&&i.call(this)},t.options.fadeTime)),t};fe.prototype.hide=function(i){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof i=="function"&&i.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(i,n)}return t};fe.prototype.setPosition=function(i,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",r={};r.front=lo("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(r),e.applyStyles(s),e.restTimeout=setTimeout(function(){typeof i=="function"&&i.call(e),e.restCallback()},e.options.fadeTime)};fe.prototype.restCallback=function(){var i=this,t={};t.front=lo("transition","none",""),i.applyStyles(t),i.trigger("rested",i.instance)};fe.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};fe.prototype.computeDirection=function(i){var t=i.angle.radian,e=Math.PI/4,n=Math.PI/2,r,s,o;if(t>e&&t<e*3&&!i.lockX?r="up":t>-e&&t<=e&&!i.lockY?r="left":t>-e*3&&t<=-e&&!i.lockX?r="down":i.lockY||(r="right"),i.lockY||(t>-n&&t<n?s="left":s="right"),i.lockX||(t>0?o="up":o="down"),i.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:s,y:o,angle:r},i.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return i;(!c.x||!c.y)&&this.trigger("plain",i),c.x||this.trigger("plain:"+s,i),c.y||this.trigger("plain:"+o,i),c.angle||this.trigger("dir dir:"+r,i)}else this.resetDirection();return i};function le(i,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=i,e.id=le.id,le.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}le.prototype=new un;le.constructor=le;le.id=0;le.prototype.prepareNipples=function(){var i=this,t=i.nipples;t.on=i.on.bind(i),t.off=i.off.bind(i),t.options=i.options,t.destroy=i.destroy.bind(i),t.ids=i.ids,t.id=i.id,t.processOnMove=i.processOnMove.bind(i),t.processOnEnd=i.processOnEnd.bind(i),t.get=function(e){if(e===void 0)return t[0];for(var n=0,r=t.length;n<r;n+=1)if(t[n].identifier===e)return t[n];return!1}};le.prototype.bindings=function(){var i=this;i.bindEvt(i.options.zone,"start"),i.options.zone.style.touchAction="none",i.options.zone.style.msTouchAction="none"};le.prototype.begin=function(){var i=this,t=i.options;if(t.mode==="static"){var e=i.createNipple(t.position,i.manager.getIdentifier());e.add(),i.idles.push(e)}};le.prototype.createNipple=function(i,t){var e=this,n=e.manager.scroll,r={},s=e.options,o={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(i.x&&i.y)r={x:i.x-o.x,y:i.y-o.y};else if(i.top||i.right||i.bottom||i.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=i.top,a.style.right=i.right,a.style.bottom=i.bottom,a.style.left=i.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),r=i,i={x:l.left+n.x,y:l.top+n.y}}var c=new fe(e,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:t,position:i,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Ma(c.ui.el,r),Ma(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};le.prototype.updateBox=function(){var i=this;i.box=i.options.zone.getBoundingClientRect()};le.prototype.bindNipple=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};le.prototype.pressureFn=function(i,t,e){var n=this,r=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var s=i.force||i.pressure||i.webkitForce||0;s!==r&&(t.trigger("pressure",s),n.trigger("pressure "+t.identifier+":pressure",s),r=s)}).bind(n),100)};le.prototype.onstart=function(i){var t=this,e=t.options,n=i;i=rl(i),t.updateBox();var r=function(s){t.actives.length<e.maxNumberOfNipples?t.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[i[0]];a.identifier=o,t.processOnEnd(a)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(s))};return Ys(i,r),t.manager.bindDocument(),!1};le.prototype.processOnStart=function(i){var t=this,e=t.options,n,r=t.manager.getIdentifier(i),s=i.force||i.pressure||i.webkitForce||0,o={x:i.pageX,y:i.pageY},a=t.getOrCreate(r,o);a.identifier!==r&&t.manager.removeIdentifier(a.identifier),a.identifier=r;var l=function(h){h.trigger("start",h),t.trigger("start "+h.id+":start",h),h.show(),s>0&&t.pressureFn(i,h,h.identifier),t.processOnMove(i)};if((n=t.idles.indexOf(a))>=0&&t.idles.splice(n,1),t.actives.push(a),t.ids.push(a.identifier),e.mode!=="semi")l(a);else{var c=ur(o,a.position);if(c<=e.catchDistance)l(a);else{a.destroy(),t.processOnStart(i);return}}return a};le.prototype.getOrCreate=function(i,t){var e=this,n=e.options,r;return/(semi|static)/.test(n.mode)?(r=e.idles[0],r?(e.idles.splice(0,1),r):n.mode==="semi"?e.createNipple(t,i):(console.warn("Coudln't find the needed nipple."),!1)):(r=e.createNipple(t,i),r)};le.prototype.processOnMove=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.scroll;if(!Ap(i)){this.processOnEnd(i);return}if(!r){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var o=r.el.getBoundingClientRect();r.position={x:s.x+o.left,y:s.y+o.top}}r.identifier=n;var a=r.options.size/2,l={x:i.pageX,y:i.pageY};e.lockX&&(l.y=r.position.y),e.lockY&&(l.x=r.position.x);var c=ur(l,r.position),h=Tp(l,r.position),d=qs(h),f=c/a,p={distance:c,position:l},g,x;if(r.options.shape==="circle"?(g=Math.min(c,a),x=bp(r.position,g,h)):(x=Pp(l,r.position,a),g=ur(x,r.position)),e.follow){if(c>a){let T=l.x-x.x,S=l.y-x.y;r.position.x+=T,r.position.y+=S,r.el.style.top=r.position.y-(t.box.top+s.y)+"px",r.el.style.left=r.position.x-(t.box.left+s.x)+"px",c=ur(l,r.position)}}else l=x,c=g;var m=l.x-r.position.x,u=l.y-r.position.y;r.frontPosition={x:m,y:u},e.dataOnly||(r.ui.front.style.transform="translate("+m+"px,"+u+"px)");var b={identifier:r.identifier,position:l,force:f,pressure:i.force||i.pressure||i.webkitForce||0,distance:c,angle:{radian:d,degree:h},vector:{x:m/a,y:-u/a},raw:p,instance:r,lockX:e.lockX,lockY:e.lockY};b=r.computeDirection(b),b.angle={radian:qs(180-h),degree:180-h},r.trigger("move",b),t.trigger("move "+r.id+":move",b)};le.prototype.processOnEnd=function(i){var t=this,e=t.options,n=t.manager.getIdentifier(i),r=t.nipples.get(n),s=t.manager.removeIdentifier(r.identifier);r&&(e.dataOnly||r.hide(function(){e.mode==="dynamic"&&(r.trigger("removed",r),t.trigger("removed "+r.id+":removed",r),t.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(t.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),t.trigger("end "+r.id+":end",r),t.ids.indexOf(r.identifier)>=0&&t.ids.splice(t.ids.indexOf(r.identifier),1),t.actives.indexOf(r)>=0&&t.actives.splice(t.actives.indexOf(r),1),/(semi|static)/.test(e.mode)?t.idles.push(r):t.nipples.indexOf(r)>=0&&t.nipples.splice(t.nipples.indexOf(r),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[s.id]=s.identifier))};le.prototype.onDestroyed=function(i,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};le.prototype.destroy=function(){var i=this;i.unbindEvt(i.options.zone,"start"),i.nipples.forEach(function(e){e.destroy()});for(var t in i.pressureIntervals)i.pressureIntervals.hasOwnProperty(t)&&clearInterval(i.pressureIntervals[t]);i.trigger("destroyed",i.nipples),i.manager.unbindDocument(),i.off()};function me(i){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=va(),t.config(i),t.prepareCollections();var e=function(){var r;t.collections.forEach(function(s){s.forEach(function(o){r=o.el.getBoundingClientRect(),o.position={x:t.scroll.x+r.left,y:t.scroll.y+r.top}})})};xr(window,"resize",function(){_a(e)});var n=function(){t.scroll=va()};return xr(window,"scroll",function(){_a(n)}),t.collections}me.prototype=new un;me.constructor=me;me.prototype.prepareCollections=function(){var i=this;i.collections.create=i.create.bind(i),i.collections.on=i.on.bind(i),i.collections.off=i.off.bind(i),i.collections.destroy=i.destroy.bind(i),i.collections.get=function(t){var e;return i.collections.every(function(n){return e=n.get(t),!e}),e}};me.prototype.create=function(i){return this.createCollection(i)};me.prototype.createCollection=function(i){var t=this,e=new le(t,i);return t.bindCollection(e),t.collections.push(e),e};me.prototype.bindCollection=function(i){var t=this,e,n=function(r,s){e=r.type+" "+s.id+":"+r.type,t.trigger(e,s)};i.on("destroyed",t.onDestroyed.bind(t)),i.on("shown hidden rested dir plain",n),i.on("dir:up dir:right dir:down dir:left",n),i.on("plain:up plain:right plain:down plain:left",n)};me.prototype.bindDocument=function(){var i=this;i.binded||(i.bindEvt(document,"move").bindEvt(document,"end"),i.binded=!0)};me.prototype.unbindDocument=function(i){var t=this;(!Object.keys(t.ids).length||i===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};me.prototype.getIdentifier=function(i){var t;return i?(t=i.identifier===void 0?i.pointerId:i.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};me.prototype.removeIdentifier=function(i){var t={};for(var e in this.ids)if(this.ids[e]===i){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};me.prototype.onmove=function(i){var t=this;return t.onAny("move",i),!1};me.prototype.onend=function(i){var t=this;return t.onAny("end",i),!1};me.prototype.oncancel=function(i){var t=this;return t.onAny("end",i),!1};me.prototype.onAny=function(i,t){var e=this,n,r="processOn"+i.charAt(0).toUpperCase()+i.slice(1);t=rl(t);var s=function(a,l,c){c.ids.indexOf(l)>=0&&(c[r](a),a._found_=!0)},o=function(a){n=e.getIdentifier(a),Ys(e.collections,s.bind(null,a,n)),a._found_||e.removeIdentifier(n)};return Ys(t,o),!1};me.prototype.destroy=function(){var i=this;i.unbindDocument(!0),i.ids={},i.index=0,i.collections.forEach(function(t){t.destroy()}),i.off()};me.prototype.onDestroyed=function(i,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const ya=new me,Up={create:function(i){return ya.create(i)},factory:ya};class Np{constructor(){et(this,"rotationInput");et(this,"currentShape");et(this,"joystick");et(this,"keyState");et(this,"shapeButtons");et(this,"isDrawingMode",!1);et(this,"isDrawing",!1);et(this,"drawnPath",[]);et(this,"drawingCanvas",null);et(this,"drawingContext",null);this.rotationInput=new zt(0,0),this.currentShape="straight",this.keyState={},this.shapeButtons={}}initialize(){this.setupKeyboardControls(),this.createJoystick(),this.createDrawingCanvas()}setupKeyboardControls(){window.addEventListener("keydown",t=>{this.keyState[t.code]=!0,t.code==="KeyD"&&(this.isDrawingMode=!1,this.toggleDrawingMode(),console.log("Drawing mode toggled:",this.isDrawingMode))}),window.addEventListener("keyup",t=>{this.keyState[t.code]=!1})}createJoystick(){const t=document.createElement("div");t.id="joystick-container",t.style.position="absolute",t.style.bottom="100px",t.style.left="100px",t.style.width="120px",t.style.height="120px",document.body.appendChild(t),this.joystick=Up.create({zone:t,mode:"static",position:{left:"50%",top:"50%"},color:"rgba(255, 255, 255, 0.5)",size:120}),this.joystick.on("move",(e,n)=>{const r=n.angle.radian,s=Math.min(1,n.force/50);this.rotationInput.x=Math.cos(r)*s,this.rotationInput.y=Math.sin(r)*s}),this.joystick.on("end",()=>{this.rotationInput.set(0,0)})}createScoreDisplay(){const t=document.createElement("div");t.id="score-display",t.style.position="absolute",t.style.top="20px",t.style.right="20px",t.style.fontSize="24px",t.style.fontWeight="bold",t.style.color="white",t.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",t.textContent="0",document.body.appendChild(t)}createTrickDisplay(){const t=document.createElement("div");t.id="trick-display",t.style.position="absolute",t.style.top="60px",t.style.right="20px",t.style.fontSize="18px",t.style.color="white",t.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",t.textContent="",document.body.appendChild(t)}getRotationInput(){return this.rotationInput.length()<.1&&(this.keyState.ArrowLeft?this.rotationInput.x=-1:this.keyState.ArrowRight&&(this.rotationInput.x=1)),this.rotationInput}getShapeInput(){return this.currentShape}getDrawnPath(){return[...this.drawnPath]}isInDrawingMode(){return this.isDrawingMode}clearDrawnPath(){this.drawnPath=[],this.drawingContext&&this.drawingCanvas&&this.drawingContext.clearRect(0,0,this.drawingCanvas.width,this.drawingCanvas.height)}createDrawingCanvas(){this.drawingCanvas=document.createElement("canvas"),this.drawingCanvas.id="drawing-canvas",this.drawingCanvas.width=window.innerWidth,this.drawingCanvas.height=window.innerHeight,this.drawingCanvas.style.position="absolute",this.drawingCanvas.style.top="0",this.drawingCanvas.style.left="0",this.drawingCanvas.style.pointerEvents="auto",this.drawingCanvas.style.zIndex="10",this.drawingCanvas.style.opacity="1",document.body.appendChild(this.drawingCanvas),this.drawingContext=this.drawingCanvas.getContext("2d",{alpha:!0}),this.drawingContext&&(this.drawingContext.lineWidth=8,this.drawingContext.lineCap="round",this.drawingContext.lineJoin="round",this.drawingContext.strokeStyle="rgb(0, 255, 100)",this.drawingContext.shadowColor="rgb(100, 255, 150)",this.drawingContext.shadowBlur=15,this.drawingContext.shadowOffsetX=0,this.drawingContext.shadowOffsetY=0,console.log("Drawing canvas initialized with bright green line")),this.addDrawingGuideText(),this.drawingCanvas.addEventListener("mousedown",this.handleDrawStart.bind(this)),window.addEventListener("mousemove",this.handleDrawMove.bind(this)),window.addEventListener("mouseup",this.handleDrawEnd.bind(this)),this.drawingCanvas.addEventListener("touchstart",this.handleDrawStart.bind(this),{passive:!1}),window.addEventListener("touchmove",this.handleDrawMove.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDrawEnd.bind(this)),window.addEventListener("resize",this.handleCanvasResize.bind(this))}addDrawingGuideText(){if(!this.drawingContext||!this.drawingCanvas)return;this.drawingContext.save();const t="Draw a shape for the character's limbs";this.drawingContext.font="bold 26px Arial, sans-serif",this.drawingContext.textAlign="center",this.drawingContext.fillStyle="rgba(255, 255, 255, 0.9)",this.drawingContext.shadowColor="rgba(0, 0, 0, 0.8)",this.drawingContext.shadowBlur=5;const e=this.drawingCanvas.width/2,n=50;this.drawingContext.fillText(t,e,n),this.drawingContext.font="normal 18px Arial, sans-serif",this.drawingContext.fillStyle="rgba(230, 230, 230, 0.9)",["1. Draw a continuous line from TOP to BOTTOM","2. Top half becomes arms, bottom half becomes legs","3. Press D key to toggle drawing mode"].forEach((s,o)=>{this.drawingContext.fillText(s,e,n+30+o*25)}),this.drawingContext.restore()}handleDrawStart(t){t.preventDefault(),console.log("Drawing started"),this.isDrawing=!0,this.clearDrawnPath();const e=this.getEventPoint(t);if(e){const n=this.normalizePoint(e);this.drawnPath.push(n),console.log(`First point: (${n.x}, ${n.y})`),this.drawingContext&&(this.drawingContext.clearRect(0,0,this.drawingCanvas.width,this.drawingCanvas.height),this.addDrawingGuideText(),this.drawTorsoTargetGuide(),this.drawingContext.beginPath(),this.drawingContext.moveTo(e.x,e.y),this.drawingContext.beginPath(),this.drawingContext.arc(e.x,e.y,8,0,Math.PI*2),this.drawingContext.fillStyle="rgba(0, 255, 100, 0.7)",this.drawingContext.fill(),this.drawingContext.beginPath(),this.drawingContext.moveTo(e.x,e.y))}}handleDrawMove(t){if(!this.isDrawing)return;t.preventDefault();const e=this.getEventPoint(t);if(e&&this.drawingContext){const n=this.drawnPath.length>0?this.drawnPath[this.drawnPath.length-1]:null,r=this.normalizePoint(e);(!n||Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2))>.01)&&(this.drawnPath.push(r),this.drawingContext.lineTo(e.x,e.y),this.drawingContext.stroke(),this.drawingContext.beginPath(),this.drawingContext.arc(e.x,e.y,3,0,Math.PI*2),this.drawingContext.fillStyle="rgba(100, 255, 150, 0.5)",this.drawingContext.fill(),this.drawingContext.beginPath(),this.drawingContext.moveTo(e.x,e.y))}}handleDrawEnd(t){if(!this.isDrawing)return;if(t.preventDefault(),this.isDrawing=!1,console.log("Drawing ended with path length:",this.drawnPath.length),this.drawingContext&&this.drawingContext.closePath(),this.drawnPath.length<3){console.log("Path too short, clearing"),this.clearDrawnPath(),this.showDrawingFeedback("Draw a longer line!");return}if(this.drawnPath.length<5){const n=this.enrichDrawnPath(this.drawnPath);console.log("Enriched path from",this.drawnPath.length,"to",n.length,"points"),this.drawnPath=n}const e=this.getGameInstance();if(e&&e.character){console.log("Applying finished drawing to character");const n=this.drawnPath.map(s=>({...s}));e.character.applyCustomShape(n)?(console.log("Successfully applied custom shape"),this.showDrawingFeedback("Shape applied!")):(console.log("Failed to apply custom shape"),this.showDrawingFeedback("Draw a clearer shape!"))}else console.log("Could not find game or character instance"),this.showDrawingFeedback("Shape drawn!");setTimeout(()=>{this.clearDrawnPath()},1e3)}getGameInstance(){return window.__gameInstance}enrichDrawnPath(t){if(t.length<2)return t;const e=[];e.push(t[0]);for(let n=0;n<t.length-1;n++){const r=t[n],s=t[n+1];for(let o=1;o<=3;o++){const a=o/4;e.push({x:r.x+(s.x-r.x)*a,y:r.y+(s.y-r.y)*a})}e.push(s)}return e}showDrawingFeedback(t){if(!this.drawingContext||!this.drawingCanvas)return;this.drawingContext.save(),this.drawingContext.fillStyle="rgba(0, 0, 0, 0.2)",this.drawingContext.fillRect(0,0,this.drawingCanvas.width,this.drawingCanvas.height);const e=this.drawingCanvas.width/2,n=this.drawingCanvas.height/2;this.drawingContext.font="bold 32px Arial, sans-serif",this.drawingContext.textAlign="center",this.drawingContext.textBaseline="middle",this.drawingContext.fillStyle="rgba(0, 255, 100, 0.9)",this.drawingContext.shadowColor="black",this.drawingContext.shadowBlur=8,this.drawingContext.fillText(t,e,n),this.drawingContext.restore()}handleCanvasResize(){if(this.drawingCanvas){const t=document.createElement("canvas");t.width=this.drawingCanvas.width,t.height=this.drawingCanvas.height;const e=t.getContext("2d");e&&this.drawingCanvas&&e.drawImage(this.drawingCanvas,0,0),this.drawingCanvas.width=window.innerWidth,this.drawingCanvas.height=window.innerHeight,this.drawingContext&&this.drawingCanvas&&(this.drawingContext.lineWidth=4,this.drawingContext.lineCap="round",this.drawingContext.lineJoin="round",this.drawingContext.strokeStyle="#00ff00",this.drawingContext.shadowColor="rgba(0, 255, 0, 0.8)",this.drawingContext.shadowBlur=8,this.drawingContext.shadowOffsetX=0,this.drawingContext.shadowOffsetY=0,this.drawingContext.drawImage(t,0,0))}}getEventPoint(t){if("touches"in t){if(t.touches.length>0)return{x:t.touches[0].clientX,y:t.touches[0].clientY}}else return{x:t.clientX,y:t.clientY};return null}normalizePoint(t){if(!this.drawingCanvas)return{x:0,y:0};const e=(t.x/this.drawingCanvas.width*2-1)*3,n=-(t.y/this.drawingCanvas.height*2-1)*3;return{x:e,y:n}}displayTrick(t){const e=document.getElementById("trick-display");e&&t&&(e.textContent=`${t.type} (${t.rotation}°)`,e.style.animation="none",e.offsetWidth,e.style.animation="trickPopup 1s ease-out")}toggleDrawingMode(){this.isDrawingMode=!0,console.log("Drawing mode is now always ON for testing"),this.drawingCanvas&&(this.drawingCanvas.style.pointerEvents="auto",this.drawingCanvas.style.opacity="1",this.drawingContext&&(this.clearDrawnPath(),this.addDrawingGuideText(),this.drawTorsoTargetGuide(),this.showDrawingFeedback("Drawing Mode ON - Draw a shape!")))}drawTorsoTargetGuide(){if(!this.drawingContext||!this.drawingCanvas)return;const t=this.drawingCanvas.width/2,e=this.drawingCanvas.height/2,n=60;this.drawingContext.save(),this.drawingContext.beginPath(),this.drawingContext.setLineDash([5,5]),this.drawingContext.arc(t,e,n,0,Math.PI*2),this.drawingContext.strokeStyle="rgba(255, 255, 255, 0.6)",this.drawingContext.lineWidth=2,this.drawingContext.stroke(),this.drawingContext.font="14px Arial, sans-serif",this.drawingContext.textAlign="center",this.drawingContext.fillStyle="rgba(255, 255, 255, 0.8)",this.drawingContext.fillText("Torso",t,e+n+20),this.drawingContext.restore()}}const Fp=9.8,Op=15,Sa=8,Bp=.2;class zp{constructor(){et(this,"gravity");this.gravity=Fp}update(t){}checkCollision(t,e){const n=t.getPosition(),r=e.getPosition(),s=e.getRadius();if(t.getVelocity().y<0){const o=n.x-r.x,a=n.z-r.z;if(Math.sqrt(o*o+a*a)<s&&Math.abs(n.y-r.y)<.5){const c=Math.min(.5,Math.abs(t.getVelocity().y)/20);return e.compress(c),!0}}return!1}calculateLandingQuality(t){const e=t.getRotation();let n=Math.abs(Math.cos(e.z));const r=t.getRotationSpeed()*Bp;return n=Math.max(.1,n-r),n}calculateBounceForce(t){return Sa+(Op-Sa)*t}applyGravity(t,e){t.y-=this.gravity*e}getGravity(){return this.gravity}}const Hp={"half flip":50,flip:100,"tuck flip":150,"pike flip":200,"straddle flip":250},kp=1.5,Vp=5e3,Gp=1.2;class Wp{constructor(){et(this,"score",0);et(this,"highScore",0);et(this,"combo",0);et(this,"lastTrickTime",0);et(this,"lastTrickType","");et(this,"performedTricks",new Set);this.loadHighScore()}loadHighScore(){const t=localStorage.getItem("trampoline-high-score");t&&(this.highScore=parseInt(t,10))}saveHighScore(){localStorage.setItem("trampoline-high-score",this.highScore.toString())}calculatePoints(t,e){let r=(Hp[t.type]||50)*t.difficultyMultiplier;r*=Math.max(.1,e);const s=`${t.type}-${t.shape}`;let o=1;this.performedTricks.has(s)||(o=Gp,this.performedTricks.add(s)),r*=o;const a=Date.now();return a-this.lastTrickTime<Vp&&this.lastTrickType!==t.type?(this.combo++,r*=Math.pow(kp,Math.min(this.combo,3))):this.combo=0,this.lastTrickTime=a,this.lastTrickType=t.type,Math.round(r/10)*10}addPoints(t){this.score+=t,this.score>this.highScore&&(this.highScore=this.score,this.saveHighScore(),this.updateHighScoreDisplay()),this.displayPointsPopup(t)}displayPointsPopup(t){const e=document.createElement("div");e.className="points-popup",e.textContent=`+${t}`,e.style.position="absolute",e.style.color=t>=200?"#FFD700":"white",e.style.fontSize=t>=200?"28px":"24px",e.style.fontWeight="bold",e.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",e.style.userSelect="none",e.style.pointerEvents="none",e.style.top="100px",e.style.right="20px",e.style.opacity="1",e.style.transition="all 1s",document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(-50px)",setTimeout(()=>{document.body.removeChild(e)},1e3)},50)}updateHighScoreDisplay(){const t=document.getElementById("high-score-display");t?t.textContent=`High Score: ${this.highScore}`:this.createHighScoreDisplay()}createHighScoreDisplay(){const t=document.createElement("div");t.id="high-score-display",t.style.position="absolute",t.style.top="50px",t.style.right="20px",t.style.fontSize="16px",t.style.color="white",t.style.textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)",t.textContent=`High Score: ${this.highScore}`,document.body.appendChild(t)}getScore(){return this.score}getHighScore(){return this.highScore}resetScore(){this.score=0,this.combo=0,this.lastTrickTime=0,this.lastTrickType="",this.performedTricks.clear()}}class Xp{constructor(t){et(this,"scene");et(this,"drawnPath",[]);et(this,"pathLine");et(this,"mirroredPathLine");et(this,"torsoVisual");et(this,"limbLines");et(this,"torsoCenter",{x:0,y:1});et(this,"torsoRadius",.4);et(this,"TOLERANCE",.1);et(this,"shoulderPosition",{x:.4,y:1.4});et(this,"hipPosition",{x:.2,y:.5});this.scene=t,this.limbLines=new an,this.scene.add(this.limbLines),this.createTorsoVisual()}createTorsoVisual(){const t=new so(this.torsoRadius-.02,this.torsoRadius,32),e=new mr({color:65280,side:We,transparent:!0,opacity:.3,depthTest:!1});this.torsoVisual=new Qt(t,e),this.torsoVisual.position.set(0,this.torsoCenter.y,.05),this.torsoVisual.rotation.x=Math.PI/2,this.scene.add(this.torsoVisual)}hideTorsoVisual(){this.torsoVisual&&(this.torsoVisual.visible=!1)}showTorsoVisual(){this.torsoVisual&&(this.torsoVisual.visible=!0)}processDrawnShape(t){if(console.log("Processing drawn path of length:",t.length),t.length<3)return console.log("Path too short"),null;const e=this.smoothPath(t),n=[],r=[];n.push({...this.shoulderPosition}),r.push({...this.hipPosition});let s=Number.MAX_VALUE,o=Number.MIN_VALUE;for(const h of e)s=Math.min(s,h.y),o=Math.max(o,h.y);const a=(s+o)/2;console.log(`Drawing vertical range: ${s} to ${o}, mid: ${a}`);for(const h of e)h.y>=a?n.push(h):r.push(h);console.log(`Split into ${n.length} arm points and ${r.length} leg points`),n.length<2&&(console.log("Arm path too short, using default"),n.push({x:this.shoulderPosition.x+.2,y:this.shoulderPosition.y+.3},{x:this.shoulderPosition.x+.4,y:this.shoulderPosition.y+.2})),r.length<2&&(console.log("Leg path too short, using default"),r.push({x:this.hipPosition.x+.1,y:this.hipPosition.y-.5},{x:this.hipPosition.x+.2,y:this.hipPosition.y-1}));const l=[...n,...r],c=l.map(h=>({x:-h.x,y:h.y}));return this.visualizePath(l,c),{leftArmLegPath:l,rightArmLegPath:c}}smoothPath(t){if(t.length<4)return t;const e=[],n=3;e.push(t[0]);for(let r=0;r<t.length;r++){const s=Math.max(0,r-Math.floor(n/2)),o=Math.min(t.length-1,r+Math.floor(n/2));let a=0,l=0,c=0;for(let h=s;h<=o;h++)l+=t[h].x,c+=t[h].y,a++;e.push({x:l/a,y:c/a})}return e.push(t[t.length-1]),e}findTorsoIntersectionPoints(t){let e=-1,n=-1,r=!1;for(let s=0;s<t.length;s++){const o=this.isPointInTorso(t[s]);if(!r&&o)e=s,r=!0;else if(r&&!o){n=s-1;break}}return r&&n===-1&&(n=t.length-1),{torsoEntryIndex:e,torsoExitIndex:n}}clearDrawnPath(){for(this.pathLine&&(this.scene.remove(this.pathLine),this.pathLine.geometry.dispose(),this.pathLine.material.dispose(),this.pathLine=void 0),this.mirroredPathLine&&(this.scene.remove(this.mirroredPathLine),this.mirroredPathLine.geometry.dispose(),this.mirroredPathLine.material.dispose(),this.mirroredPathLine=void 0);this.limbLines.children.length>0;){const t=this.limbLines.children[0];this.limbLines.remove(t),t.geometry.dispose(),t.material.dispose()}}visualizePath(t,e){this.clearDrawnPath();const n=t.map(c=>new N(c.x,c.y,.15)),r=new ye().setFromPoints(n),s=new Ws({color:2293572,linewidth:3,transparent:!0,opacity:.7});this.pathLine=new Go(r,s),this.scene.add(this.pathLine);const o=e.map(c=>new N(c.x,c.y,.15)),a=new ye().setFromPoints(o),l=new Ws({color:4491519,linewidth:3,transparent:!0,opacity:.7});this.mirroredPathLine=new Go(a,l),this.scene.add(this.mirroredPathLine),this.addControlPointSpheres(t,2293572),this.addControlPointSpheres(e,4491519)}addControlPointSpheres(t,e){const n=[0,Math.floor(t.length/3),Math.floor(2*t.length/3),t.length-1];for(const r of n)if(r>=0&&r<t.length){const s=t[r],o=new ai(.04,8,8),a=new mr({color:e,transparent:!0,opacity:.8}),l=new Qt(o,a);l.position.set(s.x,s.y,.15),this.limbLines.add(l)}}simplifyPath(t,e){return t.length<=2?t:this.rdpAlgorithm(t,e)}rdpAlgorithm(t,e){const n=(l,c,h)=>{let d=0,f=0;for(let p=1;p<h.length-1;p++){const g=this.perpendicularDistance(h[p],l,c);g>d&&(d=g,f=p)}return{index:f,distance:d}};if(t.length<=2)return[...t];const r=t[0],s=t[t.length-1],{index:o,distance:a}=n(r,s,t);if(a>e){const l=this.rdpAlgorithm(t.slice(0,o+1),e),c=this.rdpAlgorithm(t.slice(o),e);return[...l.slice(0,-1),...c]}else return[r,s]}perpendicularDistance(t,e,n){const r=n.x-e.x,s=n.y-e.y;if(Math.abs(r)<1e-5)return Math.abs(t.x-e.x);const o=s/r,a=e.y-o*e.x;return Math.abs(o*t.x-t.y+a)/Math.sqrt(o*o+1)}isValidPath(t){return t.length>=3}isPointInTorso(t){const e=t.x-this.torsoCenter.x,n=t.y-this.torsoCenter.y;return Math.sqrt(e*e+n*n)<=this.torsoRadius}createLimbGeometry(t){const n=new ye,r=[],s=[];if(t.length<2)return n;for(let o=0;o<t.length;o++){const a=t[o];let l;o<t.length-1?l={x:t[o+1].x-a.x,y:t[o+1].y-a.y}:l={x:a.x-t[o-1].x,y:a.y-t[o-1].y};const c=Math.sqrt(l.x*l.x+l.y*l.y);c>0&&(l.x/=c,l.y/=c);const h={x:-l.y,y:l.x};r.push(a.x+h.x*.1,a.y+h.y*.1,0,a.x-h.x*.1,a.y-h.y*.1,0)}for(let o=0;o<t.length-1;o++){const a=o*2,l=a+1,c=a+2,h=a+3;s.push(a,l,c),s.push(l,h,c)}return n.setAttribute("position",new ee(r,3)),n.setIndex(s),n.computeVertexNormals(),n}applyLimbPositions(t,e,n,r,s){const o=s.leftArmLegPath,a=s.rightArmLegPath;console.log("Applying limb positions");const l=Math.floor(o.length/2),c=o.slice(0,l+1),h=o.slice(l),d=a.slice(0,l+1),f=a.slice(l);console.log(`Split paths - Arms: ${c.length} points, Legs: ${h.length} points`),console.log("Creating left arm noodle"),this.createNoodleLimb(t,c,4149685,!0),console.log("Creating right arm noodle"),this.createNoodleLimb(e,d,4149685,!0),console.log("Creating left leg noodle"),this.createNoodleLimb(n,h,5025616,!1),console.log("Creating right leg noodle"),this.createNoodleLimb(r,f,5025616,!1),console.log("Noodle limbs created")}clearLimbs(t){for(;t.children.length>0;){const e=t.children[0];t.remove(e),e instanceof Qt&&(e.geometry.dispose(),e.material instanceof Hn&&e.material.dispose())}}createSegmentedLimb(t,e,n,r){console.log(`Creating ${r?"arm":"leg"} with path length: ${e.length}`),this.clearLimbs(t);const s=14;let o=r?e.slice(0,Math.floor(e.length/2)):e.slice(Math.floor(e.length/2));if(console.log(`Filtered path for ${r?"arm":"leg"}: ${o.length} points`),o.length<3||this.isPathTooSimple(o)){console.log(`Creating default ${r?"arm":"leg"} shape`);let l;r?l={x:n.x*.25,y:n.y+.7}:l={x:n.x,y:n.y-1.2};const c={x:n.x+(l.x-n.x)*.3+(r?.1:0),y:n.y+(l.y-n.y)*.3},h={x:n.x+(l.x-n.x)*.7+(r?.05:0),y:n.y+(l.y-n.y)*.7},d=this.createCubicBezierPath(n,c,h,l,s);this.createNoodleLimb(t,d,r?4149685:5025616,r);return}if(o.length>0&&(Math.abs(o[0].x-n.x)>.01||Math.abs(o[0].y-n.y)>.01)&&(console.log(`Adding start point to ${r?"arm":"leg"}`),o=[n,...o]),o.length>3){const l=r?1.5:2;o=this.limitPathLength(o,n,l)}const a=this.resamplePathToEqualSegments(o,s);console.log(`Resampled ${r?"arm":"leg"} path: ${a.length} points`),this.createNoodleLimb(t,a,r?4149685:5025616,r)}createCubicBezierPath(t,e,n,r,s){const o=[];for(let a=0;a<s;a++){const l=a/(s-1),c=1-l,h=c*c,d=h*c,f=l*l,p=f*l,g=d*t.x+3*h*l*e.x+3*c*f*n.x+p*r.x,x=d*t.y+3*h*l*e.y+3*c*f*n.y+p*r.y;o.push({x:g,y:x})}return o}limitPathLength(t,e,n){let r=0;const s=[t[0]];for(let o=1;o<t.length;o++){const a=t[o-1],l=t[o],c=Math.sqrt(Math.pow(l.x-a.x,2)+Math.pow(l.y-a.y,2));if(r+=c,r>n){const h=(n-(r-c))/c,d={x:a.x+(l.x-a.x)*h,y:a.y+(l.y-a.y)*h};s.push(d);break}s.push(l)}return s}createNoodleLimb(t,e,n,r){if(this.clearLimbs(t),e.length<3){console.log("Creating default noodle limb"),this.createDefaultNoodleLimb(t,n,r);return}console.log(`Creating noodle ${r?"arm":"leg"} with ${e.length} points`);const o=this.resamplePathToEqualSegments(e,10+1),a=r?.13:.18;for(let f=0;f<o.length-1;f++){const p=o[f],g=o[f+1],x=f/(o.length-2),m=a*(1-x*.4);this.createSimpleSegment(t,p,g,n,m)}const l=o[o.length-1],c=new ai(r?.08:.13,10,10),h=new De({color:r?16764057:2236962,roughness:.6,metalness:.1}),d=new Qt(c,h);d.position.set(l.x,l.y,0),t.add(d)}createDefaultNoodleLimb(t,e,n){const s=[],o=n?this.shoulderPosition:this.hipPosition;if(n)for(let f=0;f<=10;f++){const p=f/10,g=-Math.PI/4+p*Math.PI/2,x=.8,m=Math.sin(p*Math.PI*4)*.05;s.push({x:o.x+Math.cos(g)*x*p+m,y:o.y+Math.sin(g)*x*p})}else for(let f=0;f<=10;f++){const p=f/10,g=Math.PI/2+p*Math.PI/8,x=1.2,m=Math.sin(p*Math.PI*3)*.05;s.push({x:o.x+Math.cos(g)*x*p+m,y:o.y+Math.sin(g)*x*p})}const a=n?.13:.18;for(let f=0;f<s.length-1;f++){const p=f/(s.length-2),g=a*(1-p*.4);this.createSimpleSegment(t,s[f],s[f+1],e,g)}const l=s[s.length-1],c=new ai(n?.08:.13,10,10),h=new De({color:n?16764057:2236962,roughness:.6,metalness:.1}),d=new Qt(c,h);d.position.set(l.x,l.y,0),t.add(d)}createSimpleSegment(t,e,n,r,s){const o=n.x-e.x,a=n.y-e.y,l=Math.sqrt(o*o+a*a),c=Math.atan2(a,o),h=new hn(s,s,l,10),d=new De({color:r,roughness:.7,metalness:.1}),f=new Qt(h,d);f.castShadow=!0,f.rotation.z=c-Math.PI/2;const p=(e.x+n.x)/2,g=(e.y+n.y)/2;f.position.set(p,g,0),t.add(f)}isPathTooSimple(t){if(t.length<3)return!0;if(t.length>=3){const e=t[0],n=t[t.length-1];let r=0;for(let s=1;s<t.length-1;s++){const o=this.perpendicularDistance(t[s],e,n);r=Math.max(r,o)}return r<.1}return!1}createCurvedPath(t,e,n,r){const s=[];for(let o=0;o<r;o++){const a=o/(r-1),l=(1-a)*(1-a)*t.x+2*(1-a)*a*e.x+a*a*n.x,c=(1-a)*(1-a)*t.y+2*(1-a)*a*e.y+a*a*n.y;s.push({x:l,y:c})}return s}createLimbFromPoints(t,e,n){for(let r=0;r<e.length-1;r++){const s=e[r],o=e[r+1];this.createLimbSegment(t,s,o,n)}}createLimbSegmentWithThickness(t,e,n,r,s){const o=n.x-e.x,a=n.y-e.y,l=Math.sqrt(o*o+a*a),c=Math.atan2(a,o),h=new hn(s,s,l,12),d=new De({color:r,roughness:.6,metalness:.15}),f=new Qt(h,d);f.castShadow=!0,f.rotation.z=c-Math.PI/2;const p=(e.x+n.x)/2,g=(e.y+n.y)/2;f.position.set(p,g,0),t.add(f)}createLimbSegment(t,e,n,r){this.createLimbSegmentWithThickness(t,e,n,r,.15)}generateDefaultShape(){const t=[this.shoulderPosition,{x:.3,y:1.6},{x:.1,y:2},this.hipPosition,{x:.2,y:0},{x:.2,y:-.6}],e=t.map(n=>({x:-n.x,y:n.y}));return{leftArmLegPath:t,rightArmLegPath:e}}resamplePathToEqualSegments(t,e){if(t.length<2)return t;let n=0;for(let l=0;l<t.length-1;l++){const c=t[l+1].x-t[l].x,h=t[l+1].y-t[l].y;n+=Math.sqrt(c*c+h*h)}const r=n/(e-1),s=[t[0]];let o=0,a=0;for(let l=0;l<t.length-1;l++){const c=t[l],h=t[l+1],d=h.x-c.x,f=h.y-c.y,p=Math.sqrt(d*d+f*f);for(;a+p>=(o+1)*r;){const g=((o+1)*r-a)/p,x={x:c.x+g*d,y:c.y+g*f};if(s.push(x),o++,s.length>=e)break}if(a+=p,s.length>=e)break}for(;s.length<e;)s.push(t[t.length-1]);return s}}class Ea{constructor(t){et(this,"scene");et(this,"group");et(this,"body");et(this,"head");et(this,"torso");et(this,"leftArm");et(this,"rightArm");et(this,"leftLeg");et(this,"rightLeg");et(this,"shapeSystem");et(this,"customLimbPositions",null);et(this,"isUsingCustomShape",!1);et(this,"position");et(this,"velocity");et(this,"rotation");et(this,"rotationSpeed");et(this,"targetRotation");et(this,"currentShape");et(this,"lastRotation");et(this,"rotationTotal");et(this,"isInAir");et(this,"currentTrick");this.scene=t,this.group=new an,this.position=new N(0,5,0),this.velocity=new N(0,0,0),this.rotation=new Be(0,0,0),this.rotationSpeed=0,this.targetRotation=new Be(0,0,0),this.currentShape="straight",this.lastRotation=0,this.rotationTotal=0,this.isInAir=!0,this.currentTrick=null,this.shapeSystem=new Xp(t),this.body=new an,this.group.add(this.body),this.createBody(),this.group.position.copy(this.position),this.scene.add(this.group)}createBody(){const t=new ai(.3,32,32),e=new De({color:16766720,roughness:.7,metalness:.1});this.head=new Qt(t,e),this.head.position.y=1.7,this.head.castShadow=!0,this.body.add(this.head);const n=new hn(.3,.4,1,8),r=new De({color:16733986,roughness:.7,metalness:.1});this.torso=new Qt(n,r),this.torso.position.y=1,this.torso.castShadow=!0,this.body.add(this.torso),this.leftArm=this.createLimb(.15,.8,4149685),this.leftArm.position.set(.4,1.4,0),this.body.add(this.leftArm),this.rightArm=this.createLimb(.15,.8,4149685),this.rightArm.position.set(-.4,1.4,0),this.body.add(this.rightArm),this.leftLeg=this.createLimb(.2,.9,5025616),this.leftLeg.position.set(.2,.5,0),this.body.add(this.leftLeg),this.rightLeg=this.createLimb(.2,.9,5025616),this.rightLeg.position.set(-.2,.5,0),this.body.add(this.rightLeg);const s=this.shapeSystem.generateDefaultShape();this.shapeSystem.applyLimbPositions(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg,s)}createLimb(t,e,n){const r=new an,s=new hn(t,t,e,8),o=new De({color:n,roughness:.7,metalness:.1}),a=new Qt(s,o);return a.position.y=-e/2,a.castShadow=!0,r.add(a),r}update(t,e,n){if(this.velocity.y-=9.8*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.position.y<0?(this.position.y=0,this.velocity.y=0,this.isInAir=!1):this.isInAir=!0,this.isInAir){this.rotationSpeed=e.x*5,this.rotation.z+=this.rotationSpeed*t;const s=this.rotation.z-this.lastRotation;this.rotationTotal+=Math.abs(s),this.lastRotation=this.rotation.z,this.detectTrick()}else this.rotationSpeed=0,this.rotationTotal=0;this.group.position.copy(this.position),this.group.rotation.copy(this.rotation)}applyCustomShape(t){console.log("Character received drawn path with length:",t.length);const e=this.shapeSystem.processDrawnShape(t);return e?(console.log("Processed limb positions - applying to character"),this.customLimbPositions=e,this.isUsingCustomShape=!0,this.shapeSystem.applyLimbPositions(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg,e),this.currentShape="custom",!0):(console.log("Failed to process drawn path to limb positions"),!1)}resetToDefaultShape(){this.isUsingCustomShape=!1,this.customLimbPositions=null,this.shapeSystem.clearDrawnPath();const t=this.shapeSystem.generateDefaultShape();this.shapeSystem.applyLimbPositions(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg,t),this.currentShape="straight"}detectTrick(){const t=Math.PI*2,e=Math.PI;if(this.rotationTotal>=t){let n="flip",r=1;switch(this.currentShape){case"tuck":n="tuck flip",r=1.2;break;case"pike":n="pike flip",r=1.5;break;case"straddle":n="straddle flip",r=1.8;break;case"custom":n="custom flip",r=2;break}this.currentTrick={type:n,rotation:Math.floor(this.rotationTotal/(Math.PI*2))*360,shape:this.currentShape,difficultyMultiplier:r},this.rotationTotal=0}else this.rotationTotal>=e&&(this.currentTrick={type:"half flip",rotation:180,shape:this.currentShape,difficultyMultiplier:this.currentShape==="custom"?1:.5})}bounce(t){this.velocity.y=t,this.rotationTotal=0,this.currentTrick=null}getCurrentTrick(){return this.currentTrick}getPosition(){return this.position.clone()}getVelocity(){return this.velocity.clone()}getRotation(){return this.rotation.clone()}getRotationSpeed(){return this.rotationSpeed}showTorsoVisual(){this.shapeSystem.showTorsoVisual()}hideTorsoVisual(){this.shapeSystem.hideTorsoVisual()}}class qp{constructor(t){et(this,"scene");et(this,"frame");et(this,"mat");et(this,"springs");et(this,"animationTime",0);et(this,"isCompressed",!1);et(this,"compressionAmount",0);et(this,"restPosition",0);this.scene=t,this.springs=[],this.frame=new an,this.frame.position.y=0,this.scene.add(this.frame),this.createFrame(),this.mat=this.createMat(),this.frame.add(this.mat),this.createSprings()}createFrame(){const t=new oo(3,.2,16,32),e=new De({color:4473924,roughness:.5,metalness:.7}),n=new Qt(t,e);n.rotation.x=Math.PI/2,n.position.y=0,n.castShadow=!0,n.receiveShadow=!0,this.frame.add(n);const r=new hn(.1,.1,2),s=new De({color:4473924,roughness:.5,metalness:.7});[{x:2.5,z:0},{x:-2.5,z:0},{x:0,z:2.5},{x:0,z:-2.5}].forEach(a=>{const l=new Qt(r,s);l.position.set(a.x,-1,a.z),l.castShadow=!0,this.frame.add(l)})}createMat(){const t=new io(2.8,32),e=new De({color:2201331,roughness:.5,metalness:.1,side:We}),n=new Qt(t,e);return n.rotation.x=Math.PI/2,n.position.y=0,n.castShadow=!0,n.receiveShadow=!0,this.restPosition=n.position.y,n}createSprings(){const t=new hn(.05,.05,.3,8),e=new De({color:13421772,roughness:.5,metalness:.8}),n=16,r=2.8;for(let s=0;s<n;s++){const o=s/n*Math.PI*2,a=Math.cos(o)*r,l=Math.sin(o)*r,c=new Qt(t,e);c.position.set(a,0,l),c.rotation.x=Math.PI/2,this.springs.push(c),this.frame.add(c)}}update(t){this.animationTime+=t,this.isCompressed&&(this.compressionAmount*=.9,this.mat.position.y=this.restPosition-this.compressionAmount,this.updateSprings(),Math.abs(this.compressionAmount)<.01&&(this.isCompressed=!1,this.compressionAmount=0,this.mat.position.y=this.restPosition,this.updateSprings()))}updateSprings(){this.springs.forEach(t=>{t.scale.y=1-this.compressionAmount})}compress(t){this.isCompressed=!0,this.compressionAmount=t,this.mat.position.y=this.restPosition-t,this.updateSprings()}getPosition(){return this.mat.position.clone()}getRadius(){return 2.8}}class Yp{constructor(t){et(this,"scene");et(this,"ground");this.scene=t;const e=new Ii(50,50),n=new De({color:5025616,roughness:.8,metalness:.2});this.ground=new Qt(e,n),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=-2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.addSurroundings()}addSurroundings(){const t=new ro(5,10,4),e=new De({color:6983359,roughness:1,metalness:0});[{x:-20,z:-20},{x:-15,z:-25},{x:-5,z:-22},{x:10,z:-18},{x:20,z:-23}].forEach(r=>{const s=new Qt(t,e);s.position.set(r.x,3,r.z),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s)})}}class $p{constructor(){et(this,"renderer");et(this,"physics");et(this,"inputManager");et(this,"scoreManager");et(this,"character");et(this,"trampoline");et(this,"environment");et(this,"lastTime",0);et(this,"isRunning",!1);et(this,"lastTrick",null);et(this,"lastLandingQuality",0);et(this,"showDebugInfo",!1);this.renderer=new Ep,this.physics=new zp,this.inputManager=new Np,this.scoreManager=new Wp,this.environment=new Yp(this.renderer.scene),this.trampoline=new qp(this.renderer.scene),this.character=new Ea(this.renderer.scene),this.addCssAnimations(),window.__gameInstance=this,console.log("Game instance stored in window.__gameInstance")}start(){this.isRunning=!0,this.lastTime=performance.now(),this.inputManager.initialize(),this.inputManager.createScoreDisplay(),this.inputManager.createTrickDisplay(),this.setupEventListeners(),this.gameLoop()}setupEventListeners(){window.addEventListener("resize",()=>{this.renderer.onResize()}),window.addEventListener("keydown",t=>{t.code==="KeyD"&&(this.showDebugInfo=!this.showDebugInfo,this.updateDebugInfo()),t.code==="KeyR"&&this.resetCharacterPosition()})}resetCharacterPosition(){this.character.bounce(5)}updateDebugInfo(){let t=document.getElementById("debug-info");this.showDebugInfo?t||(t=document.createElement("div"),t.id="debug-info",t.style.position="absolute",t.style.top="10px",t.style.left="10px",t.style.fontSize="12px",t.style.color="white",t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.padding="10px",t.style.fontFamily="monospace",t.style.zIndex="100",document.body.appendChild(t)):t&&document.body.removeChild(t)}addCssAnimations(){const t=document.createElement("style");t.textContent=`
      @keyframes trickPopup {
        0% { transform: scale(0.5); opacity: 0; }
        20% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes pointsPopup {
        0% { transform: translateY(20px); opacity: 0; }
        20% { transform: translateY(-10px); opacity: 1; }
        80% { transform: translateY(-20px); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
      }
    `,document.head.appendChild(t)}gameLoop(){if(!this.isRunning)return;const t=performance.now(),e=Math.min((t-this.lastTime)/1e3,.1);if(this.lastTime=t,this.physics.update(e),this.character.showTorsoVisual(),this.character.update(e,this.inputManager.getRotationInput(),this.inputManager.getShapeInput()),this.character instanceof Ea&&this.character.showTorsoVisual(),this.trampoline.update(e),this.physics.checkCollision(this.character,this.trampoline)){const n=this.physics.calculateLandingQuality(this.character),r=this.physics.calculateBounceForce(n);this.character.bounce(r);const s=this.character.getCurrentTrick();if(s){const o=this.scoreManager.calculatePoints(s,n);this.scoreManager.addPoints(o),document.getElementById("score-display").textContent=this.scoreManager.getScore().toString(),this.inputManager.displayTrick(s),this.lastTrick=s,this.lastLandingQuality=n}}this.showDebugInfo&&this.updateDebugDisplay(),this.renderer.render(),requestAnimationFrame(()=>this.gameLoop())}updateDebugDisplay(){const t=document.getElementById("debug-info");if(!t)return;const e=this.character.getPosition(),n=this.character.getVelocity(),r=this.inputManager.isInDrawingMode(),s=this.inputManager.getDrawnPath().length;let o=`
      Character Position: ${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}<br>
      Character Velocity: ${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)}<br>
      Rotation Speed: ${this.character.getRotationSpeed().toFixed(2)}<br>
      Current Shape: ${this.inputManager.getShapeInput()}<br>
      Drawing Mode: ${r?"Active":"Inactive"}<br>
      Drawn Path Points: ${s}<br>
      FPS: ${(1/(performance.now()-this.lastTime)*1e3).toFixed(1)}<br>
      <br>
      Last Trick: ${this.lastTrick?this.lastTrick.type:"None"}<br>
      Landing Quality: ${this.lastLandingQuality.toFixed(2)}<br>
      Score: ${this.scoreManager.getScore()}<br>
      High Score: ${this.scoreManager.getHighScore()}<br>
    `;t.innerHTML=o}stop(){this.isRunning=!1}restart(){this.scoreManager.resetScore(),this.resetCharacterPosition(),this.inputManager.clearDrawnPath(),this.character.resetToDefaultShape(),this.isRunning||this.start()}showShapeAppliedFeedback(){let t=document.getElementById("shape-feedback");t||(t=document.createElement("div"),t.id="shape-feedback",t.style.position="absolute",t.style.top="40%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.fontSize="28px",t.style.fontWeight="bold",t.style.color="rgba(50, 255, 100, 0.9)",t.style.textShadow="0 0 10px rgba(0, 0, 0, 0.7)",t.style.pointerEvents="none",t.style.zIndex="20",t.style.opacity="0",t.style.transition="opacity 0.2s ease-in-out",document.body.appendChild(t)),t.textContent="Shape Applied!",t.style.opacity="1",setTimeout(()=>{t&&(t.style.opacity="0")},1200)}}window.addEventListener("DOMContentLoaded",()=>{const i=new $p,t=document.getElementById("start-game"),e=document.getElementById("instructions");t&&e&&t.addEventListener("click",()=>{e.style.display="none",i.start()}),setTimeout(()=>{if(document.getElementById("restart-button"))return;const r=document.createElement("button");r.id="restart-button",r.innerText="Restart Game",r.style.position="absolute",r.style.bottom="20px",r.style.left="50%",r.style.transform="translateX(-50%)",r.style.padding="10px 20px",r.style.backgroundColor="#4CAF50",r.style.color="white",r.style.border="none",r.style.borderRadius="5px",r.style.cursor="pointer",r.style.zIndex="30",r.addEventListener("click",()=>{i.restart()}),document.body.appendChild(r)},5e3),window.addEventListener("keydown",r=>{r.key==="Escape"&&e&&(e.style.display="block",i.stop())})});
//# sourceMappingURL=index-UlXnRRKz.js.map
