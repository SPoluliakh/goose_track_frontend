"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[137],{4173:function(n,e,t){t.d(e,{u:function(){return x}});var r,o,i,a=t(2791),c=t(4164),s=t(5788),d=t(168),l=t(6444),u=l.ZP.div(r||(r=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),h=l.ZP.div(o||(o=(0,d.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),p=l.ZP.button(i||(i=(0,d.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 8px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),m=t(3329),f=document.querySelector("#modal-root"),x=function(n){var e=n.toggleModal,t=n.children;(0,a.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n);var e=document.querySelector("#menuContainer");null!==e&&void 0!==e&&e.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}}),[e]);return(0,c.createPortal)((0,m.jsx)(u,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,m.jsxs)(h,{children:[t,(0,m.jsx)(p,{type:"button",onClick:e,children:(0,m.jsx)(s.Wj.CloseIcon,{})})]})}),f)}},5435:function(n,e,t){t.d(e,{h:function(){return L}});var r,o,i,a,c,s,d,l,u,h,p,m,f,x,g=t(9230),b=(t(4289),t(168)),y=t(6444),Z=t(1087),w=y.ZP.div(r||(r=(0,b.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),j=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 767px) {\n    justify-content: space-between;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 16px;\n  }\n"]))),v=y.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  background-color: ",";\n\n  color: ",";\n  padding: 8px 12px;\n  border-radius: 8px;\n  height: 100%;\n  min-width: 155px;\n\n  @media screen and (min-width: 768px) {\n    min-width: 173px;\n  }\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white})),k=y.ZP.span(a||(a=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.286;\n\n  text-transform: uppercase;\n\n  color: ",";\n  min-width: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white3})),P=(0,y.ZP)(k)(c||(c=(0,b.Z)(["\n  font-weight: bold;\n"]))),M=y.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.125;\n\n  @media screen and (max-width: 767px) {\n    margin-top: 16px;\n  }\n"]))),D=y.ZP.div(d||(d=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),z=y.ZP.button(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 7px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  color: ",";\n\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  &:disabled {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey9})),S=y.ZP.span(u||(u=(0,b.Z)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n\n  :active,\n  :focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    white-space: normal;\n    width: auto;\n  }\n"]))),Y=y.ZP.button(h||(h=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.1667;\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey})),C=(y.ZP.button(p||(p=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  color: #616161;\n"]))),(0,y.ZP)(Z.OL)(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: ",";\n  padding: 9px 16px;\n  background-color: ",";\n  min-width: 82px;\n  &.active.act {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.navLink}),(function(n){return n.theme.colors.monitorLink}),(function(n){return n.theme.colors.monitorActiveLink}))),H=(0,y.ZP)(C)(f||(f=(0,b.Z)(["\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),W=(0,y.ZP)(C)(x||(x=(0,b.Z)(["\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),I=t(5788),O=t(7689),E=t(3329),L=function(n){var e=n.today,t=n.prevHandler,r=n.nextHandler,o=n.todayHandler,i=n.currentDay,a=(0,g.$G)().t,c=(0,O.TH)().pathname;return e.locale(a("lang")),(0,E.jsxs)(w,{children:[(0,E.jsxs)(j,{children:[(0,E.jsxs)(v,{children:[i&&(0,E.jsx)(k,{children:e.format("D")}),(0,E.jsx)(P,{children:e.format("MMMM")}),(0,E.jsx)(k,{children:e.format("YYYY")})]}),(0,E.jsxs)(D,{children:[(0,E.jsxs)(z,{type:"button",onClick:t,style:{transform:"rotate(180deg)"},children:[(0,E.jsx)(I.Wj.Chevron,{}),(0,E.jsx)(S,{children:"Previous"})]}),(0,E.jsxs)(z,{type:"button",onClick:r,children:[(0,E.jsx)(I.Wj.Chevron,{}),(0,E.jsx)(S,{children:"Next"})]})]}),(0,E.jsx)(Y,{type:"button",onClick:o,children:a("Today")})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(H,{className:c.includes("day")?"":"act",to:"/user/calendar",children:a("Month")}),(0,E.jsx)(W,{className:c.includes("day")?"act":"",to:"/user/calendar/day/".concat(e.format("YYYY-MM-DD")),children:a("Day")})]})]})}},9197:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return we}});var r,o,i,a,c,s,d,l,u,h,p,m,f,x,g,b,y,Z,w,j,v,k,P,M,D,z,S,Y,C=t(3433),H=t(9439),W=t(2426),I=t.n(W),O=(t(4289),t(2791)),E=t(7689),L=t(5435),A=t(168),B=t(6444),F=B.ZP.div(r||(r=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),T=B.ZP.div(o||(o=(0,A.Z)(["\n  padding-top: 16px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),N=B.ZP.div(i||(i=(0,A.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  ","\n  width: 27px;\n  height: 26px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.125;\n  color: ",";\n"])),(function(n){return n.isHeader&&"text-align:center"}),(function(n){return n.theme.colors.black})),G=B.ZP.div(a||(a=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.radii.normal})),R=B.ZP.ul(c||(c=(0,A.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 18px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.286;\n\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 46px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey3})),_=B.ZP.li(s||(s=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n\n  :nth-last-child(1) > span,\n  :nth-last-child(2) > span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),q=t(9230),U=function(){var n=(0,O.useState)(!1),e=(0,H.Z)(n,2),t=e[0],r=e[1];return{isOpenModal:t,toggleModal:function(){r((function(n){return!n}))}}},$=t(5788),K=B.ZP.button(d||(d=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  gap: 8px;\n  margin-top: auto;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  text-align: center;\n\n  color: ",";\n\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black2}),(function(n){return n.theme.colors.blue3}),(function(n){return n.theme.borders.addButton}),(function(n){return n.theme.radii.normal})),V=t(3329),J=function(n){var e=n.onClick,t=(0,q.$G)().t;return(0,V.jsxs)(K,{type:"button",onClick:e,children:[(0,V.jsx)($.Wj.AddIcon,{}),t("Add task")]})},Q=B.ZP.p(l||(l=(0,A.Z)(["\n  margin: 7px 0px 28px 0px;\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.columnHeader})),X=function(n){var e=n.name;return(0,V.jsx)(Q,{children:e})},nn=t(4371),en=B.ZP.article(u||(u=(0,A.Z)(["\n  width: 100%;\n\n  padding-top: 14px;\n  padding-bottom: 18px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.taskCardBackground}),(function(n){return n.theme.borders.tasks}),(function(n){return n.theme.radii.normal})),tn=B.ZP.h3(h||(h=(0,A.Z)(["\n  margin-bottom: 28px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.columnHeader})),rn=B.ZP.div(p||(p=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),on=B.ZP.div(m||(m=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: ","px;\n  height: ","px;\n\n  overflow: hidden;\n\n  border: ",";\n  border-radius: ",";\n\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.avatar}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.white})),an=B.ZP.img(f||(f=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),cn=B.ZP.div(x||(x=(0,A.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.white2}),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.small})),sn=t(1807),dn=t(4911),ln=t(1413),un=t(4173),hn=t(1134),pn=t(9085),mn=B.ZP.form(g||(g=(0,A.Z)(["\n  width: 303px;\n  padding-top: 8px;\n\n  font-family: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 396px;\n    padding-top: 0px;\n  }\n"])),(function(n){return n.theme.fontFamily.main})),fn=B.ZP.span(b||(b=(0,A.Z)(["\n  display: block;\n  width: 100%;\n"]))),xn=B.ZP.span(y||(y=(0,A.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.xs})),gn=B.ZP.input(Z||(Z=(0,A.Z)(["\n  display: block;\n  width: 100%;\n\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  margin-bottom: ","px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: ","px;\n  }\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n  outline: ",";\n\n  border: none;\n  border-radius: ",";\n\n  &::placeholder {\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n\n    color: ",";\n    background-color: ",";\n  }\n\n  &::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n\n  &:disabled {\n    color: ",";\n  }\n"])),(function(n){return"time"===n.type?n.theme.space[0]:n.theme.space[4]}),(function(n){return"time"===n.type?n.theme.space[0]:18}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8}),(function(n){return n.theme.borders.modalInput}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8}),(function(n){return n.theme.colors.disabled})),bn=B.ZP.div(w||(w=(0,A.Z)(["\n  display: flex;\n  gap: 15px;\n\n  width: 100%;\n\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),yn=B.ZP.ul(j||(j=(0,A.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n\n  width: 100%;\n\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),Zn=B.ZP.li(v||(v=(0,A.Z)(["\n  list-style: none;\n"]))),wn=B.ZP.input(k||(k=(0,A.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n\n  &:disabled {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.disabled})),jn=B.ZP.span(P||(P=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: start;\n\n  color: ",";\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n\n  border-radius: ",";\n"])),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.round})),vn=B.ZP.label(M||(M=(0,A.Z)(["\n  display: flex;\n  gap: 6px;\n  align-items: center;\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-transform: capitalize;\n\n  color: ",";\n\n  cursor: pointer;\n\n  :hover {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.colors.grey})),kn=B.ZP.div(D||(D=(0,A.Z)(["\n  display: flex;\n  gap: 14px;\n  width: 100%;\n"]))),Pn=B.ZP.button(z||(z=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  padding: 12px;\n\n  width: 100%;\n\n  text-transform: capitalize;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n  border: none;\n  outline: none;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 15px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return"button"===n.type?n.theme.colors.black1:n.theme.colors.white3}),(function(n){return"button"===n.type?n.theme.colors.grey2:n.theme.colors.blue}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.hoverYellow}),(function(n){return n.theme.colors.blue})),Mn=function(n){var e=n.children,t=n.type,r=n.onClick,o=n.disabled;return(0,V.jsx)(Pn,{type:t,onClick:r,disabled:o,children:e})};!function(n){n.TODO="todo",n.INPROGRESS="inprogress",n.DONE="done"}(S||(S={})),function(n){n.LOW="low",n.MEDIUM="medium",n.HIGH="high"}(Y||(Y={}));var Dn,zn,Sn,Yn,Cn,Hn,Wn,In,On,En,Ln,An,Bn,Fn,Tn,Nn,Gn=[S.TODO,S.INPROGRESS,S.DONE],Rn=[Y.LOW,Y.MEDIUM,Y.HIGH],_n=t(8825),qn=function(n){var e,t,r,o,i,a=n.fieldsData,c=n.toggleModal,s=(0,E.UO)().current,d=null!==a&&void 0!==a&&a.date?a.date:s,l=I()(Date.now()).format("YYYY-MM-DD"),u=localStorage.getItem("i18nextLng"),h=a.title?"edit":"add",p=null!==a&&void 0!==a&&a.start?a.start:I()(Date.now()).format("HH:mm"),m=I()((i=60,Date.now()+60*i*1e3)).format("HH:mm"),f=(0,O.useState)(null!==(e=null===a||void 0===a?void 0:a.title)&&void 0!==e?e:""),x=(0,H.Z)(f,2),g=x[0],b=x[1],y=(0,O.useState)(null!==(t=null===a||void 0===a?void 0:a.start)&&void 0!==t?t:p),Z=(0,H.Z)(y,2),w=Z[0],j=Z[1],v=(0,O.useState)(null!==(r=null===a||void 0===a?void 0:a.end)&&void 0!==r?r:m),k=(0,H.Z)(v,2),P=k[0],M=k[1],D=(0,O.useState)(null!==(o=null===a||void 0===a?void 0:a.priority)&&void 0!==o?o:""),z=(0,H.Z)(D,2),S=z[0],Y=z[1],C=(0,dn.I6)(),W=(0,H.Z)(C,2),L=W[0],A=W[1].isLoading,B=(0,dn._n)(),F=(0,H.Z)(B,2),T=F[0],N=F[1].isLoading,G=(0,hn.cI)(),R=G.register,_=G.handleSubmit,q=function(n,e){return n===l&&e>=p||(n>l||void 0)},U=w<=P,K=function(n){switch(n.target.name){case"title":b(n.target.value);break;case"start":j(n.target.value);break;case"end":M(n.target.value)}};return(0,V.jsxs)(mn,{onSubmit:_((function(n,e){if("edit"===h){if(!q(d,w))return pn.Am.error((0,_n.t)("taskModalMsg.editInPast")),void j(p);if(!U)return pn.Am.error((0,_n.t)("taskModalMsg.endTimeWrong")),void M(m);T((0,ln.Z)((0,ln.Z)({},a),n)),c()}else{if(!q(d,w))return pn.Am.error((0,_n.t)("taskModalMsg.startTimeInPast")),void j(p);if(!U)return pn.Am.error((0,_n.t)("taskModalMsg.endTimeWrong")),void M(m);var t=(0,ln.Z)((0,ln.Z)({},n),{},{status:a.status,date:s});L({data:t,lang:u}),c()}}),(function(n,e){Object.keys(n).forEach((function(e){var t;pn.Am.error("".concat((0,_n.t)("taskModalMsg.Field")," ").concat((0,_n.t)("taskModalMsg.".concat(e))," ").concat(null===(t=n[e])||void 0===t?void 0:t.message))}))})),children:[(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,_n.t)("Title")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({type:"text",placeholder:(0,_n.t)("Enter text")},R("title",{required:(0,_n.t)("taskModalMsg.requared"),maxLength:{value:250,message:(0,_n.t)("taskModalMsg.maxLength")}})),{},{name:"title",value:g,onInput:K}))]}),(0,V.jsxs)(bn,{children:[(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,_n.t)("Start")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({type:"time"},R("start",{required:(0,_n.t)("taskModalMsg.requared")})),{},{value:w,onInput:K}))]}),(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,_n.t)("End")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({},R("end",{required:(0,_n.t)("taskModalMsg.requared")})),{},{type:"time",value:P,onInput:K}))]})]}),(0,V.jsx)(yn,{children:Rn.map((function(n,e){var t=Rn[e]===Rn[0],r=S?Rn[e].includes(S):t;return(0,V.jsx)(Zn,{children:(0,V.jsxs)(vn,{children:[(0,V.jsx)(wn,(0,ln.Z)((0,ln.Z)({},R("priority",{validate:{priority:function(n){return Rn.includes(n)||(0,_n.t)("taskModalMsg.priorityIsNotValid")}}})),{},{type:"radio",value:n,defaultChecked:r,onChange:function(n){return Y(n.target.value)}})),(0,V.jsx)(jn,{name:n,children:r?(0,V.jsx)($.Wj.RadioButtonActive,{}):(0,V.jsx)($.Wj.RadioButton,{})}),(0,_n.t)(n)]})},n)}))}),(0,V.jsxs)(kn,{children:[(0,V.jsxs)(Mn,{type:"submit",disabled:A||N,children:["add"===h?(0,V.jsx)($.Wj.AddIcon,{width:"18px",height:"18px"}):(0,V.jsx)($.Wj.EditIcon,{}),(0,_n.t)(h)]}),"add"===h&&(0,V.jsx)(Mn,{type:"button",onClick:c,children:(0,_n.t)("Cancel")})]})]})},Un=(B.ZP.button(Dn||(Dn=(0,A.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.2);\n  }\n"])),(function(n){return n.theme.colors.navBcg}),(function(n){return n.theme.colors.blue})),B.ZP.h3(zn||(zn=(0,A.Z)(["\n  text-align: center;\n  margin-bottom: 24px;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.grey3}),(function(n){return n.theme.space[5]}))),$n=B.ZP.div(Sn||(Sn=(0,A.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  list-style: none;\n"]))),Kn=B.ZP.button(Yn||(Yn=(0,A.Z)(["\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.hoverBackground})),Vn=(0,B.ZP)(Kn)(Cn||(Cn=(0,A.Z)(["\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.grey2}),(function(n){return n.theme.colors.black4})),Jn=function(n){var e=n.id,t=n.toggleModal,r=(0,q.$G)().t,o=(0,dn.gu)(),i=(0,H.Z)(o,1)[0];return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Un,{children:r("confirm delete")}),(0,V.jsxs)($n,{children:[(0,V.jsx)(Kn,{type:"button",onClick:function(){i(e),t(),"en"===localStorage.getItem("i18nextLng")?pn.Am.success("Yaay, more free time!"):pn.Am.success("\u042e\u0445\u0443, \u0431\u0456\u043b\u044c\u0448\u0435 \u0432\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443!")},children:r("Yes")}),(0,V.jsx)(Vn,{type:"button",onClick:t,children:r("No")})]})]})},Qn=function(n){var e,t=n.status,r=n.data,o=n.btnClicked,i=n.toggleModal;return e=r?(0,ln.Z)((0,ln.Z)({},r),{},{status:t}):{status:t},(0,V.jsx)(un.u,{toggleModal:i,children:"edit"===o||"add"===o?(0,V.jsx)(qn,{fieldsData:e,toggleModal:i}):(0,V.jsx)(Jn,{id:null===r||void 0===r?void 0:r._id,toggleModal:i})})},Xn=(t(7366),t(7467)),ne=B.ZP.button(Hn||(Hn=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),ee=(0,B.ZP)(Xn.Z)(Wn||(Wn=(0,A.Z)(["\n  &-content {\n  }\n"]))),te=B.ZP.ul(In||(In=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n\n  padding-top: 12px;\n  padding-bottom: 14px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]))),re=B.ZP.li(On||(On=(0,A.Z)(["\n  list-style: none;\n  width: 100%;\n"]))),oe=B.ZP.button(En||(En=(0,A.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n  gap: ","px;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover &:not(:disabled) {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-style: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.popup}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.grey4}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l})),ie=t(348),ae=function(n){var e=n.taskData,t=(0,dn._n)(),r=(0,H.Z)(t,2),o=r[0],i=r[1].isLoading,a=(0,ie.a)("screen and (min-width: 768px)"),c=(0,q.$G)().t;return(0,V.jsx)(ee,{trigger:(0,V.jsx)(ne,{children:(0,V.jsx)($.Wj.ArrowCircle,{})}),position:"top center",arrow:!1,offsetY:a?14:27,lockScroll:!0,closeOnDocumentClick:!0,closeOnEscape:!0,contentStyle:{width:"auto",height:a?"90px":"70px",padding:0,borderRadius:"8px",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)"},children:(0,V.jsx)(te,{children:Gn.filter((function(n){return n!==e.status})).map((function(n){var t=n;switch(t){case S.TODO:t=c("To do");break;case S.INPROGRESS:t=c("In progress");break;case S.DONE:t=c("Done");break;default:return null}return(0,V.jsx)(re,{children:(0,V.jsxs)(oe,{onClick:function(){return function(n){var t=(0,ln.Z)((0,ln.Z)({},e),{},{status:n});o(t)}(n)},disabled:i,children:[t," ",(0,V.jsx)($.Wj.ArrowCircle,{width:a?"14px":"12px",height:a?"14px":"12px"})]})},n)}))})})},ce=B.ZP.div(Ln||(Ln=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  gap: 10px;\n"]))),se=B.ZP.button(An||(An=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  color: ",";\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),de=function(n){var e=n.taskData,t=(0,O.useState)(""),r=(0,H.Z)(t,2),o=r[0],i=r[1],a=U(),c=a.isOpenModal,s=a.toggleModal,d=(0,dn._n)(),l=(0,H.Z)(d,2)[1].isLoading,u=function(n){i(n.currentTarget.name),s()};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(ce,{children:[(0,V.jsx)(ae,{taskData:e}),(0,V.jsx)(se,{type:"button",name:"edit",onClick:u,disabled:l,children:(0,V.jsx)($.Wj.EditIcon,{})}),(0,V.jsx)(se,{type:"button",name:"delete",onClick:u,disabled:l,children:(0,V.jsx)($.Wj.Delete,{})})]}),c&&(0,V.jsx)(Qn,{status:e.status,data:e,toggleModal:s,btnClicked:o})]})},le=function(n){var e=n.taskData,t=(0,nn.a)().user.avatarURL;return(0,V.jsxs)(en,{children:[(0,V.jsx)(tn,{children:(0,V.jsx)(sn.default,{text:e.title,length:30,tooltip:"true"})}),(0,V.jsxs)(rn,{children:[(0,V.jsxs)(rn,{children:[(0,V.jsx)(on,{children:t?(0,V.jsx)(an,{src:t,alt:"user"}):(0,V.jsx)($.Wj.UserAvatar,{width:"16px",higth:"16px"})}),(0,V.jsx)(cn,{name:e.priority,children:(0,_n.t)(e.priority)})]}),(0,V.jsx)(de,{taskData:e})]})]})},ue=t(1495),he=(0,B.ZP)(ue.E)(Bn||(Bn=(0,A.Z)(["\n  max-height: 290px;\n\n  margin-bottom: 8;\n\n  @media screen and (min-width: 768px) {\n    max-height: 378px;\n    margin-bottom: ","px;\n\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white})),pe=B.ZP.li(Fn||(Fn=(0,A.Z)(["\n  list-style: none;\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    :not(:last-child) {\n      margin-bottom: 18px;\n    }\n  }\n"]))),me={theme:"os-theme-dark",visibility:"auto",autoHide:"move",autoHideDelay:700,dragScroll:!0},fe=function(n){var e=n.tasks,t=n.status,r=null===e||void 0===e?void 0:e.filter((function(n){return n.status===t}));return(0,V.jsx)(he,{element:"ul",options:{scrollbars:me},children:null===r||void 0===r?void 0:r.map((function(n){return(0,V.jsx)(pe,{children:(0,V.jsx)(le,{taskData:n})},n._id)}))})},xe=B.ZP.li(Tn||(Tn=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 18px 18px 10px 18px;\n  min-width: 335px;\n  width: 100%;\n  max-height: 432px;\n  list-style: none;\n  overflow-y: auto;\n\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  background-color: ",";\n\n  scroll-snap-align: start;\n\n  @media screen and (min-width: 768px) {\n    min-width: 344px;\n    max-height: 568px;\n    padding: 18px 20px 28px 20px;\n  }\n"])),(function(n){return n.theme.colors.white})),ge=function(n){var e=n.name,t=n.tasks,r=n.status,o=U(),i=o.isOpenModal,a=o.toggleModal,c=(0,q.$G)().t,s=e;switch(e){case"todo":e=c("To do");break;case"inprogress":e=c("In progress");break;case"done":e=c("Done");break;default:return null}return(0,V.jsxs)(xe,{children:[(0,V.jsx)(X,{name:e}),(0,V.jsx)(fe,{tasks:t,status:r}),i&&(0,V.jsx)(Qn,{status:s,btnClicked:"add",data:null,toggleModal:a}),(0,V.jsx)(J,{onClick:a})]})},be=t(2092),ye=B.ZP.ul(Nn||(Nn=(0,A.Z)(["\n  display: flex;\n  list-style: none;\n  width: 100%;\n  gap: 16px;\n  min-height: 100%;\n  margin-top: 16px;\n\n  overflow: hidden;\n  overflow-x: auto;\n\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n  }\n"]))),Ze=function(n){var e=n.items,t=n.currentDate,r=(0,dn.mN)(null),o=r.data,i=r.isLoading,a=null===o||void 0===o?void 0:o.filter((function(n){return n.date===t}));return(0,V.jsxs)(V.Fragment,{children:[i&&(0,V.jsx)(be.a,{}),(0,V.jsx)(ye,{children:e.map((function(n){return(0,V.jsx)(ge,{name:n,tasks:a,status:n},n)}))})]})},we=function(){var n=(0,E.UO)().current,e=(0,E.s0)(),t=(0,q.$G)().t;I().updateLocale("en",{day:{dow:1}});var r=(0,O.useState)(I()(n)),o=(0,H.Z)(r,2),i=o[0],a=o[1];i.locale(t("lang"));var c=i.clone().startOf("isoWeek").clone().subtract(1,"day"),s=(0,C.Z)(Array(7)).map((function(){return c.add(1,"day").clone()})),d=function(n){return i.isSame(n,"day")},l=window.innerWidth<768;return(0,V.jsxs)(F,{children:[(0,V.jsx)(L.h,{prevHandler:function(){var n=i.clone().subtract(1,"day");a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD")))},nextHandler:function(){var n=i.clone().add(1,"day");a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD")))},todayHandler:function(){a(I()()),e("/user/calendar/day/".concat(I()().format("YYYY-MM-DD")))},today:i,currentDay:!0}),(0,V.jsxs)(T,{children:[(0,V.jsx)(R,{children:s.map((function(n){return(0,V.jsxs)(_,{children:[(0,V.jsx)("span",{children:n.format(l?"dd":"ddd").toUpperCase()}),(0,V.jsx)(N,{onClick:function(){return function(n){a(I()(n.format("YYYY-MM-DD"))),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD")))}(n)},children:d(n)?(0,V.jsx)(G,{children:n.format("D")}):n.format("D")})]},n.format("DDMMYY"))}))}),(0,V.jsx)(Ze,{items:Gn,currentDate:n})]})]})}}}]);
//# sourceMappingURL=137.d0e0a52a.chunk.js.map