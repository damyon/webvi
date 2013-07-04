YUI.add("moodle-editor_webvi-editor",function(e,n){function r(){var e=[];return e.backgroundColor="rgb(90,90,90)",e.statusBackgroundColor="rgb(30,30,30)",e.borderColor="rgb(0,0,0)",e.borderWidth=3,e.paddingWidth=3,e.textColor="rgb(255,255,255)",e.statusTextColor="rgb(255,255,255)",e.editCursorColor="rgb(180,180,255)",e.eolCursorColor="rgb(255,255,180)",e.visualCursorColor="rgb(180,255,180)",e.lineWrapColor="rgb(255,255,0)",e.font="12px monospace",e}function i(e){e.currentTextBuffer=e.currentTextBuffer.replace("\r\n","\n"),e.currentTextBuffer.charAt(e.currentTextBuffer.length-1)!="\n"&&(e.currentTextBuffer+="\n",e.hiddenInput.value=e.currentTextBuffer),lines=e.currentTextBuffer.split("\n"),e.cursorPosition.y>=lines.length-1&&(e.cursorPosition.y=lines.length-2),e.cursorPosition.y<0&&(e.cursorPosition.y=0),e.cursorPosition.x>lines[e.cursorPosition.y].length&&(e.cursorPosition.x=lines[e.cursorPosition.y].length),e.cursorPosition.x<0&&(e.cursorPosition.x=0),X(e)}function s(e){e.cursorPosition.y--,i(e)}function o(e){e.cursorPosition.y++,i(e)}function u(e){e.cursorPosition.x--,i(e)}function a(e){e.currentTextBuffer=e.currentTextBuffer.replace("\r\n","\n"),lines=e.currentTextBuffer.split("\n"),e.cursorPosition.x=lines[e.cursorPosition.y].length,i(e)}function f(e,t){e.currentTextBuffer=e.currentTextBuffer.replace("\r\n","\n"),lines=e.currentTextBuffer.split("\n"),e.cursorPosition.x=0;if(t)while(e.cursorPosition.x<lines[e.cursorPosition.y].length&&lines[e.cursorPosition.y].charAt(e.cursorPosition.x)==" ")e.cursorPosition.x++;i(e)}function l(e,t){lines=t.currentTextBuffer.split("\n");var n=0;for(var r=0;r<e.y;r++)n+=lines[r].length+1;return n+=e.x,n}function c(e){lines=e.currentTextBuffer.split("\n");var t=0;for(var n=0;n<e.cursorPosition.y;n++)t+=lines[n].length+1;return t+=e.cursorPosition.x,t}function h(e){var t=c(e),n=e.currentTextBuffer.substring(t)+"\n"+e.currentTextBuffer.substring(0,t),r=n.search(/[^\w]\w/);while(r-->=0)d(e);i(e)}function p(e){lines=e.currentTextBuffer.split("\n"),e.cursorPosition.x--,e.cursorPosition.x<0&&(e.cursorPosition.y--,e.cursorPosition.y<0&&(e.cursorPosition.y=lines.length-1),e.cursorPosition.x=j(e.cursorPosition.y)),i(e)}function d(e){lines=e.currentTextBuffer.split("\n"),e.cursorPosition.x++,e.cursorPosition.x==lines[e.cursorPosition.y].length+1&&(e.cursorPosition.x=0,e.cursorPosition.y=(e.cursorPosition.y+1)%lines.length),i(e)}function v(e){e.cursorPosition.x++,i(e)}function m(e){lines=e.currentTextBuffer.split("\n"),e.cursorPosition.x=0,e.cursorPosition.y=lines.length-1,i(e)}function g(e,t){lines=t.currentTextBuffer.split("\n"),lineNumber=Math.round(e*lines.length/100),y(lineNumber,t)}function y(e,t){t.cursorPosition.x=0,t.cursorPosition.y=e,i(t)}function b(e,t){this.type=e,this.name=t,this.transitions=[]}function w(e,t,n){this.acceptRule=e,this.nextState=t,this.action=n}function E(e){var t=e.repeatBuffer;t==""&&(t="0");var n=parseInt(t);return n<=0&&(n=1),n}function S(e,t){var n=E(t);switch(e){case"^":f(t,!0);break;case"$":a(t);break;case"h":while(n-->0)u(t);break;case"j":while(n-->0)o(t);break;case"k":while(n-->0)s(t);break;case"l":while(n-->0)v(t);break;case"w":while(n-->0)h(t);break;case"G":t.repeatBuffer==""?m(t):y(n-1,t);break;case"%":g(n,t)}}function x(e,t){var n=E(t);t.lastSearch=e;while(n-->0){var r=c(t),i=t.currentTextBuffer.slice(r+1)+"\n"+t.currentTextBuffer.slice(0,r+1)+t.currentTextBuffer.slice(r+1),s=new RegExp(e.slice(1)),o=-1;if(e.charAt(0)=="/")o=i.search(s);else if(e.charAt(0)=="?")for(var u=0;u<i.length;u++)o=i.slice(i.length-1-u).search(s),o>=0&&(o+=i.length-u-1,u=i.length);if(o<0){t.statusText=e.slice(1)+" not found.";return}while(o-->=0)d(t)}}function T(e){var t=E(e);D(e);while(t-->0){var n=c(e),r=e.currentTextBuffer.charAt(n);r==r.toUpperCase()?r=r.toLowerCase():r=r.toUpperCase();var i=e.currentTextBuffer.slice(0,n)+r+e.currentTextBuffer.slice(n+1);e.currentTextBuffer=i,d(e)}}function N(e,t){var n=c(t);t.simpleInsertBuffer+=e;var r=t.currentTextBuffer.slice(0,n)+e+t.currentTextBuffer.slice(n);t.cursorPosition.x+=e.length,t.currentTextBuffer=r,i(t)}function C(e,t){var n=E(t),r=c(t),s=0;D(t);while(n-->0){var o=t.currentTextBuffer.slice(0,r)+e+t.currentTextBuffer.slice(r);s+=e.length,t.cursorPosition.x+=e.length,t.currentTextBuffer=o}t.statusText="Inserted "+s+" character(s).",i(t)}function k(e){var t=c(e);t--;if(t>=0){var n=e.currentTextBuffer.slice(0,t)+e.currentTextBuffer.slice(t+1);e.cursorPosition.x--;if(e.cursorPosition.x<0){e.cursorPosition.y--;var r=e.currentTextBuffer.split("\n");e.cursorPosition.x=r[e.cursorPosition.y].length}e.currentTextBuffer=n,i(e)}}function L(e){var t=c(e),n=e.currentTextBuffer.slice(0,t)+e.currentTextBuffer.slice(t+1);e.currentTextBuffer=n,i(e)}function A(e,t,n){var r=l(e,n),s=l(t,n),o=c(n);D(n);if(r<s){for(var u=0;u<o-r;u++)p(n);n.copyBuffer=n.currentTextBuffer.slice(r,s);var a=n.currentTextBuffer.slice(0,r)+n.currentTextBuffer.slice(s);n.currentTextBuffer=a,n.statusText="Cut "+(s-r)+" character(s)."}else{for(var u=0;u<o-s;u++)p(n);n.copyBuffer=n.currentTextBuffer.slice(s,r);var a=n.currentTextBuffer.slice(0,s)+n.currentTextBuffer.slice(r);n.currentTextBuffer=a,n.statusText="Cut "+(r-s)+" character(s)."}i(n)}function O(e,t,n){var r=l(e,n),i=l(t,n);r<i?(n.copyBuffer=n.currentTextBuffer.substring(r,i),n.statusText="Copied "+(i-r)+" character(s)."):(n.copyBuffer=n.currentTextBuffer.substring(i,r),n.statusText="Copied "+(r-i)+" character(s).")}function _(e,t){lines=t.currentTextBuffer.split("\n");for(var n=0;n<e&&t.cursorPosition.y+n<lines.length;n++)t.copyBuffer+=lines[t.cursorPosition.y+n]+"\n";t.statusText="Copied "+n+" line(s)"}function D(e){e.undoBuffer.push(e.currentTextBuffer),e.redoBuffer=[]}function P(e){var t=E(e);D(e);while(t-->0){a(e);var n=c(e);if(e.currentTextBuffer[n+1]=="\n"){var r=e.currentTextBuffer.slice(0,n+1)+e.currentTextBuffer.slice(n+2);e.currentTextBuffer=r}}i(e)}function H(e){e.undoBuffer.length>0&&(e.redoBuffer.push(e.currentTextBuffer),e.currentTextBuffer=e.undoBuffer.pop(),e.statusText="Undo"
),i(e)}function B(e){e.redoBuffer.length>0&&(e.undoBuffer.push(e.currentTextBuffer),e.currentTextBuffer=e.redoBuffer.pop(),e.statusText="Redo"),i(e)}function j(e,t){var n=t.currentTextBuffer.split("\n");return n[e].length}function F(){return startState=new b(webvi_FSMSTATESTART,"start"),t=new w(/[0-9]/,startState,function(e,t){t.repeatBuffer+=e}),startState.transitions.push(t),yankStartState=new b(webvi_FSMSTATEMIDDLE,"yank-start"),t=new w(/y/,yankStartState,function(e,t){}),startState.transitions.push(t),t=new w(/[0-9]/,yankStartState,function(e,t){t.repeatBuffer+=e}),yankStartState.transitions.push(t),yankEndState=new b(webvi_FSMSTATEEND,"yank-end"),t=new w(/y/,yankEndState,function(e,t){var n=new Object,r=new Object,i=E(t);r.x=0,r.y=t.cursorPosition.y,n.x=j(t.cursorPosition.y+i-1,t)+1,n.y=t.cursorPosition.y+i-1,O(r,n,t)}),yankStartState.transitions.push(t),t=new w(/[hjkl^$Gw%]/,yankEndState,function(e,t){var n=new Object;n.x=t.cursorPosition.x,n.y=t.cursorPosition.y,S(e,t),O(n,t.cursorPosition,t)}),yankStartState.transitions.push(t),deleteStartState=new b(webvi_FSMSTATEMIDDLE,"delete-start"),t=new w(/[d]/,deleteStartState,function(e,t){}),startState.transitions.push(t),t=new w(/[0-9]/,deleteStartState,function(e,t){t.repeatBuffer+=e}),deleteStartState.transitions.push(t),deleteEndState=new b(webvi_FSMSTATEEND,"delete-end"),t=new w(/[d]/,deleteEndState,function(e,t){var n=new Object,r=new Object,i=E(t);r.x=0,r.y=t.cursorPosition.y,n.x=j(t.cursorPosition.y+i-1,t)+1,n.y=t.cursorPosition.y+i-1,A(r,n,t)}),deleteStartState.transitions.push(t),t=new w(/[hjkl^$Gw%]/,deleteEndState,function(e,t){var n=new Object;n.x=t.cursorPosition.x,n.y=t.cursorPosition.y,S(e,t),A(n,t.cursorPosition,t)}),deleteStartState.transitions.push(t),cutStartState=new b(webvi_FSMSTATEMIDDLE,"cut-start"),t=new w(/[c]/,cutStartState,function(e,t){}),startState.transitions.push(t),t=new w(/[0-9]/,cutStartState,function(e,t){t.repeatBuffer+=e}),cutStartState.transitions.push(t),cutEndState=new b(webvi_FSMSTATEEND,"cut-end"),t=new w(/[c]/,cutEndState,function(e,t){var n=new Object,r=new Object,i=E(t);r.x=0,r.y=t.cursorPosition.y,n.x=j(t.cursorPosition.y+i-1,t)+1,n.y=t.cursorPosition.y+i-1,A(r,n,t),N("\n",t),t.mode=webvi_EDITMODE,t.isSimpleInsert=!0,t.simpleInsertBuffer="",t.statusText="Insert Mode"}),cutStartState.transitions.push(t),t=new w(/[hjkl^$Gw%]/,cutEndState,function(e,t){var n=new Object;n.x=t.cursorPosition.x,n.y=t.cursorPosition.y,S(e,t),A(n,t.cursorPosition,t),t.mode=webvi_EDITMODE,t.isSimpleInsert=!0,t.simpleInsertBuffer="",t.statusText="Insert Mode"}),cutStartState.transitions.push(t),endState=new b(webvi_FSMSTATEEND,"end"),t=new w(/[hjkl^$Gw%]/,endState,function(e,t){S(e,t)}),startState.transitions.push(t),t=new w(/[0-9]/,startState,function(e,t){t.repeatBuffer+=e}),startState.transitions.push(t),t=new w(/x/,endState,function(e,t){var n=new Object,r=E(t);n.x=t.cursorPosition.x+r,n.y=t.cursorPosition.y,A(n,t.cursorPosition,t)}),startState.transitions.push(t),replaceStartState=new b(webvi_FSMSTATEMIDDLE,"replace-start"),t=new w(/r/,replaceStartState,function(e,t){}),startState.transitions.push(t),replaceEndState=new b(webvi_FSMSTATEEND,"replace-end"),t=new w(/./,replaceEndState,function(e,t){var n=new Object,r=E(t);n.x=t.cursorPosition.x+r,n.y=t.cursorPosition.y,A(n,t.cursorPosition,t),C(e,t)}),replaceStartState.transitions.push(t),insertEndState=new b(webvi_FSMSTATEEND,"insert-end"),t=new w(/[ia]/,insertEndState,function(e,t){e=="a"&&v(t),D(t),t.mode=webvi_EDITMODE,t.isSimpleInsert=!0,t.simpleInsertBuffer="",t.statusText="Insert Mode"}),startState.transitions.push(t),pasteEndState=new b(webvi_FSMSTATEEND,"paste-end"),t=new w(/p/,pasteEndState,function(e,t){t.copyBuffer.indexOf("\n")>0&&(t.cursorPosition.x=0,t.cursorPosition.y++),C(t.copyBuffer,t)}),startState.transitions.push(t),undoEndState=new b(webvi_FSMSTATEEND,"undo-end"),t=new w(/u/,undoEndState,function(e,t){H(t)}),startState.transitions.push(t),redoEndState=new b(webvi_FSMSTATEEND,"redo-end"),t=new w(/R/,redoEndState,function(e,t){B(t)}),startState.transitions.push(t),joinEndState=new b(webvi_FSMSTATEEND,"join-end"),t=new w(/J/,joinEndState,function(e,t){P(t)}),startState.transitions.push(t),oEndState=new b(webvi_FSMSTATEEND,"o-end"),t=new w(/o/,oEndState,function(e,t){D(t),o(t),f(t,!1),t.mode=webvi_EDITMODE,N("\n",t),t.isSimpleInsert=!0,t.simpleInsertBuffer="",t.statusText="Insert Mode"}),startState.transitions.push(t),capsEndState=new b(webvi_FSMSTATEEND,"caps-end"),t=new w(/~/,capsEndState,function(e,t){T(t)}),startState.transitions.push(t),repeatSearchEndState=new b(webvi_FSMSTATEEND,"repeat-search-end"),t=new w(/n/,repeatSearchEndState,function(e,t){x(t.lastSearch,t)}),startState.transitions.push(t),startSearchEndState=new b(webvi_FSMSTATEMIDDLE,"start-search-end"),t=new w(/[\/\?]/,startSearchEndState,function(e,t){t.mode=webvi_COMMANDMODE,t.statusText="",t.commandBuffer=e}),startState.transitions.push(t),startState}function I(e,t,n){current=e;for(var r=0;r<t.length;r++){foundTransition=!1;for(var i=0;i<current.transitions.length&&!foundTransition;i++)if(current.transitions[i].acceptRule.test(t.charAt(r))){foundTransition=!0,current.transitions[i].action(t.charAt(r),n),current=current.transitions[i].nextState;continue}if(!foundTransition)return new b(webvi_FSMSTATEERROR,"error")}return current}function q(e){fsm=F(),e.repeatBuffer="",finalState=I(fsm,e.commandBuffer,e),finalState.type==webvi_FSMSTATEERROR&&(e.statusText="Invalid command: "+e.commandBuffer,e.commandBuffer=""),finalState.type==webvi_FSMSTATEEND&&(e.commandBuffer="")}function R(e,t){t.commandBuffer+=e,q(t)}function U(e){var t="",n=e.keyCode;n==0&&(n=e.charCode);if(e.shiftKey){if(n>=65&&n<=90)return String.fromCharCode(n);switch(n){case 192:return"~";case 49:return"!";case 50:return"@";case 51:return"#";case 52:return"$";case 53:return"%";case 54:return"^";case 55:return"&";case 56:return"*";case 57:return"(";case 48:return")";case 189:return"_";case 61:return"+";case 219:return"{";case 221
:return"}";case 220:return"|";case 186:case 59:return":";case 222:return'"';case 188:return"<";case 190:return">";case 191:return"?";case 20:return" ";case 42:return"*";case 187:return"+"}}else{if(n>=65&&n<=90)return String.fromCharCode(n+32);switch(n){case 192:return"`";case 187:case 61:return"=";case 189:return"-";case 219:return"[";case 221:return"]";case 220:return"\\";case 186:case 59:return";";case 222:return"'";case 188:return",";case 190:return".";case 191:return"/";case 111:return"/";case 106:return"*";case 109:return"-";case 107:return"+";case 96:case 48:return"0";case 97:case 49:return"1";case 98:case 50:return"2";case 99:case 51:return"3";case 100:case 52:return"4";case 101:case 53:return"5";case 102:case 54:return"6";case 103:case 55:return"7";case 104:case 56:return"8";case 105:case 57:return"9";case 32:return" "}}return t}function z(e,t){var n=U(e);switch(t.mode){case webvi_VISUALMODE:if(n!="")n=="r"&&e.ctrlKey&&(n="R"),R(n,t);else if(e.keyCode>0)switch(e.keyCode){case 46:R("x",t);break;case 40:R("j",t);break;case 38:R("k",t);break;case 37:case 8:R("h",t);break;case 39:R("l",t)}break;case webvi_EDITMODE:if(n!="")N(n,t);else if(e.keyCode>0)switch(e.keyCode){case 27:t.mode=webvi_VISUALMODE;var r=E(t),i=t.simpleInsertBuffer;while(r-->1)N(i,t);t.statusText="Visual Mode";break;case 46:L(t);break;case 8:k(t);break;case 40:t.isSimpleInsert=!1,o(t),t.statusText="";break;case 38:t.isSimpleInsert=!1,s(t),t.statusText="";break;case 37:t.isSimpleInsert=!1,u(t),t.statusText="";break;case 39:t.isSimpleInsert=!1,v(t),t.statusText="";break;case 13:N("\n",t),o(t),f(t,!1),t.statusText=""}break;case webvi_COMMANDMODE:if(n!="")t.commandBuffer+=n;else if(e.keyCode>0)switch(e.keyCode){case 27:t.mode=webvi_VISUALMODE,t.statusText="Visual Mode",t.commandBuffer="";break;case 13:t.mode=webvi_VISUALMODE,t.statusText="Search: "+t.commandBuffer,x(t.commandBuffer,t),t.commandBuffer="";break;case 37:break;case 39:break;case 8:t.commandBuffer=t.commandBuffer.slice(0,t.commandBuffer.length-2)}}J(t)}function W(e){for(var t=0;t<webvi_stateList.length;t++)if(webvi_stateList[t].canvasNode==e.target){z(e,state);break}e.preventDefault()}function X(e){e.currentTextBuffer=e.currentTextBuffer.replace("\r\n","\n");var t=e.currentTextBuffer.split("\n"),n=0,r=0;for(var i=0;i<e.windowSize.height;i++){e.lineWrap[i]=!1;for(var s=0;s<e.windowSize.width;s++)e.displayBuffer[s][i]=" "}var o=0,u=!1;for(o=0;o<t.length&&r<e.windowSize.height;o++){for(n=0;n<t[o].length;n++)n>0&&n%e.windowSize.width==0&&(e.lineWrap[r]=!0,r++),e.displayBuffer[n%e.windowSize.width][r]=t[o][n],o==e.cursorPosition.y&&n==e.cursorPosition.x&&(e.displayCursorPosition.x=n%e.windowSize.width,e.displayCursorPosition.y=r,u=!0);e.displayBuffer[n%e.windowSize.width][r]="\n",o==e.cursorPosition.y&&n==e.cursorPosition.x&&(e.displayCursorPosition.x=n%e.windowSize.width,e.displayCursorPosition.y=r,u=!0),r++}u||(e.displayCursorPosition.x=n%e.windowSize.width,e.displayCursorPosition.y=r-1)}function V(e,t,n){this.hiddenInput=e,this.canvasNode=t,this.options=new r,this.currentTextBuffer=e.value,this.cursorPosition=new Object,this.cursorPosition.x=0,this.cursorPosition.y=0,this.displayCursorPosition=new Object,this.displayCursorPosition.x=0,this.displayCursorPosition.y=0,this.windowSize=new Object,this.windowSize.width=n.getAttribute("cols"),this.windowSize.height=n.getAttribute("rows")-1,this.mode=webvi_VISUALMODE,this.commandBuffer="",this.copyBuffer="",this.lastSearch="",this.repeatBuffer="",this.characterSize=new Object,this.characterSize.width=(t.getAttribute("width")-this.options.borderWidth*2-this.options.paddingWidth*2)/this.windowSize.width,this.characterSize.height=(t.getAttribute("height")-this.options.borderWidth*2-this.options.paddingWidth*2)/(this.windowSize.height+1),this.statusText="Ready: "+this.currentTextBuffer.split("\n").length+"L, "+this.currentTextBuffer.length+"C",this.undoBuffer=[],this.redoBuffer=[],this.simpleInsertBuffer="",this.isSimpleInsert=!0,this.displayBuffer=new Array(this.windowSize.width);for(var i=0;i<this.windowSize.width;i++)this.displayBuffer[i]=new Array(this.windowSize.height);this.lineWrap=new Array(this.windowSize.height),X(this)}function $(){window.onload=G}function J(e){context=e.canvasNode.getContext("2d"),context.fillStyle=e.options.borderColor,context.fillRect(0,0,e.canvasNode.width,e.canvasNode.height),context.fillStyle=e.options.backgroundColor,context.fillRect(e.options.borderWidth,e.options.borderWidth,e.canvasNode.width-e.options.borderWidth*2,e.canvasNode.height-e.options.borderWidth*2),context.font=e.options.font,context.fillStyle=e.options.textColor;for(var t=0;t<e.windowSize.height;t++){for(var n=0;n<e.windowSize.width;n++)n==e.displayCursorPosition.x&&t==e.displayCursorPosition.y&&e.mode!=webvi_COMMANDMODE?(e.displayBuffer[n][t]=="\n"?context.fillStyle=e.options.eolCursorColor:e.mode==webvi_VISUALMODE?context.fillStyle=e.options.visualCursorColor:e.mode==webvi_EDITMODE&&(context.fillStyle=e.options.editCursorColor),context.fillRect(e.characterSize.width*n+e.options.borderWidth+e.options.paddingWidth,e.characterSize.height*t+e.options.borderWidth+e.options.paddingWidth+4,e.characterSize.width,e.characterSize.height),context.fillStyle=e.options.backgroundColor,context.fillText(e.displayBuffer[n][t],e.characterSize.width*n+e.options.borderWidth+e.options.paddingWidth,e.characterSize.height*(t+1)+e.options.borderWidth+e.options.paddingWidth),context.fillStyle=e.options.textColor):context.fillText(e.displayBuffer[n][t],e.characterSize.width*n+e.options.borderWidth+e.options.paddingWidth,e.characterSize.height*(t+1)+e.options.borderWidth+e.options.paddingWidth);e.lineWrap[t]==1&&(context.strokeStyle=e.options.lineWrapColor,context.lineWidth=e.options.borderWidth,context.beginPath(),context.moveTo(e.canvasNode.width-e.options.borderWidth/2,e.characterSize.height*t+e.options.borderWidth+e.options.paddingWidth+4),context.lineTo(e.canvasNode.width-e.options.borderWidth/2,e.characterSize.height*(t+1)+e.options.borderWidth+
e.options.paddingWidth+1),context.stroke())}context.fillStyle=e.options.statusBackgroundColor,context.fillRect(e.options.borderWidth,e.canvasNode.height-e.options.borderWidth-e.characterSize.height,e.canvasNode.width-e.options.borderWidth*2,e.characterSize.height),context.fillStyle=e.options.statusTextColor,e.mode==webvi_COMMANDMODE?context.fillText(e.commandBuffer,e.options.borderWidth+e.options.paddingWidth,e.canvasNode.height-e.options.borderWidth-e.options.paddingWidth):context.fillText(e.statusText,e.options.borderWidth+e.options.paddingWidth,e.canvasNode.height-e.options.borderWidth-e.options.paddingWidth)}function K(e){return canvasNode=document.createElement("canvas"),widthAttribute=document.createAttribute("width"),widthAttribute.nodeValue=e.clientWidth,canvasNode.setAttributeNode(widthAttribute),heightAttribute=document.createAttribute("height"),heightAttribute.nodeValue=e.clientHeight,canvasNode.setAttributeNode(heightAttribute),tabIndexAttribute=document.createAttribute("tabindex"),tabIndexAttribute.nodeValue=0,canvasNode.setAttributeNode(tabIndexAttribute),canvasNode}function Q(e){return hiddenInput=document.createElement("input"),typeAttribute=document.createAttribute("type"),typeAttribute.nodeValue="hidden",hiddenInput.setAttributeNode(typeAttribute),textareaName=e.getAttribute("name"),nameAttribute=document.createAttribute("name"),nameAttribute.nodeValue=textareaName,hiddenInput.setAttributeNode(nameAttribute),textareaId=e.getAttribute("id"),idAttribute=document.createAttribute("id"),idAttribute.nodeValue=textareaId,hiddenInput.setAttributeNode(idAttribute),textareaValue=e.value,valueAttribute=document.createAttribute("value"),valueAttribute.nodeValue=textareaValue,hiddenInput.setAttributeNode(valueAttribute),hiddenInput}function G(e){textareaNode=document.getElementById(e),hiddenInput=Q(textareaNode),canvas=K(textareaNode),parentEle=textareaNode.parentNode,parentEle.replaceChild(canvas,textareaNode),parentEle.appendChild(hiddenInput),state=new V(hiddenInput,canvas,textareaNode),webvi_stateList.push(state),J(state),canvas.addEventListener("keydown",W,!1)}Array.prototype.clone=function(){var e=new Array;for(var t in this)e[t]=typeof this[t]=="object"?this[t].clone():this[t];return e},webvi_stateList=[],webvi_COMMANDMODE=0,webvi_EDITMODE=1,webvi_VISUALMODE=2,webvi_FSMSTATESTART=0,webvi_FSMSTATEMIDDLE=1,webvi_FSMSTATEEND=2,webvi_FSMSTATEERROR=3,M.editor_webvi=M.editor_webvi||{init:function(e){G(e)}}},"@VERSION@",{requires:["node"]});
