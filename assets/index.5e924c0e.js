var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&l(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)n.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))l.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r};import{$ as o,q as c,L as s,I as m,B as d,a as g,r as p,R as u,F as f,b as h,w as x,P as b,H as E,u as w,c as y,d as v,e as k,f as _,S as T,g as I,h as F,i as j}from"./vendor.be097c2e.js";const S=o`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DejaVu Sans Mono", monospace;
}
`,R=c.div`
   z-index: 1;
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-right: 50px;
   padding-left: 50px;

   @media screen and (max-width: 960px) {
      padding-right: 30px;
      padding-left: 30px;
   }
`,C=c.nav`
   background: #101522;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   position: sticky;
   top: 0;
   z-index: 999;
`,$=c(R)`
   display: flex;
   justify-content: space-between;
   height: 80px;

   ${R}
`,P=c(s)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   text-decoration: none;
   font-size: 2rem;
   display: flex;
   align-items: center;
`,z=c(m)`
   margin-right: -0.25rem;
`,B=c(d)`
   margin-left: 0.5rem;
   margin-right: -0.75rem;
`,M=c(g)`
   margin-right: 1rem;
`,A=c.div`
   display: none;

   @media screen and (max-width: 960px) {
      color: white;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`,N=c.div`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;

   @media screen and (max-width: 960px) {
      display: ${({openMobileMenu:e})=>e?"flex":"none"};
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: ${({openMobileMenu:e})=>e?0:"100%"};
      background: #101522;
   }
`,O=c.li`
   height: 80px;
   border-bottom: 2px solid transparent;

   &:hover {
      border-bottom: 4px solid #4b59f7;
      transition: all 0.3s ease;
   }

   @media screen and (max-width: 960px) {
      width: 100%;

      &:hover {
         border: none;
      }
   }
`,q=c(s)`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;

   @media screen and (max-width: 960px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      &:hover {
         color: #4b59f7;
         transition: all 0.3s ease;
      }
   }
`,H=()=>{const[e,t]=p.exports.useState(!1),n=()=>t(!e);return u.createElement(u.Fragment,null,u.createElement(C,null,u.createElement($,null,u.createElement(P,{to:"/home"},u.createElement(z,null),"Soroush",u.createElement(B,null),u.createElement(M,null)),u.createElement(A,{onClick:n},e?u.createElement(f,null):u.createElement(h,null)),u.createElement(N,{onClick:n,openMobileMenu:e},(e=>{let t=0;return e.map((e=>u.createElement(O,{key:t++},u.createElement(q,{to:`/${e.toLowerCase().replace(" ","-")}`},e))))})(["Home","Blog","Projects","Resume","Contact"])))))};var D=x((function({history:e}){return p.exports.useEffect((()=>{const t=e.listen((()=>{window.scrollTo(0,0)}));return()=>{t()}}),[]),null}));const L=c.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   border: none;
   outline: none;
   border-radius: 4px;
   background: ${({disabled:e})=>e?"#c9c9c9":"#4b59f7"};
   white-space: nowrap;
   padding: 12px 64px;
   color: ${({disabled:e})=>e?"#474747":"#fff"};
   font-size: 20px;
   cursor: ${({disabled:e})=>e?"":"pointer"};

   &:hover {
      transition: all 0.3s east-out;
      background: ${({disabled:e})=>e?"#c9c9c9":"#0467fb"};
   }

   @media screen and (max-width: 768px) {
      height: 4rem;
   }
`,W=({url:e,text:t,type:n,disabled:a,sameTab:l})=>{const r=()=>{l?window.open(e,"_self"):window.open(e)};return l&&"submit"!==n?u.createElement(s,{to:e,style:{textDecoration:"none"}},u.createElement(L,{type:"button"},t)):u.createElement(L,{type:n,onClick:e?r:void 0,disabled:a},t)};W.propTypes={text:b.string,type:b.string,url:b.string,disabled:b.bool,sameTab:b.bool},W.defaultProps={type:"button",sameTab:!1};const U=c.div`
   color: #fff;
   padding: ${({verticalPadding:e})=>e}px 0px;
   background: ${({darkTheme:e})=>e?"#101522":"#fff"};
`,Y=c.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   text-align: ${({alignment:e})=>e};
   justify-content: ${({alignment:e})=>"center"===e?"center":""};
   flex-direction: ${({alignment:e})=>{switch(e){case"left":return"row";case"right":return"row-reverse";case"center":return""}}};

   @media screen and (max-width: 768px) {
      text-align: ${({alignment:e})=>"center"===e?"center":"left"};
   }
`,G=c.div`
   margin-bottom: 15px;
   padding-right: 15px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
   }
`,J=c.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 60px;

   @media screen and (max-width: 768px) {
      padding-bottom: 65px;
   }
`,V=c.div`
   margin-bottom: 8px;
   font-size: ${({largeFont:e})=>e?"60px":"48px"};
   color: ${({darkTheme:e})=>e?"#F7F8FA":"#1C2237"};
`,K=c.div`
   color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
   font-size: ${({largeFont:e})=>e?"22px":"18px"};
   letter-spacing: 1.4px;
   margin-bottom: 24px;
`,Q=c.div`
   margin-bottom: 35px;
   font-size: 18px;
   color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
`,X=c.img`
   padding-right: 0;
   border: 0;
   max-width: 100%;
   vertical-align: middle;
   display: inline-block;
   max-height: 500px;
`,Z=({darkTheme:e,alignment:t,header:n,subheader:a,description:l,image:r,alt:i,url:o,buttonText:c,sameTab:s,verticalPadding:m})=>u.createElement(u.Fragment,null,u.createElement(U,{darkTheme:e,verticalPadding:m},u.createElement(R,null,u.createElement(Y,{alignment:t},u.createElement(G,null,u.createElement(J,null,u.createElement(V,{darkTheme:e,largeFont:!r,tabIndex:n?0:-1},n),u.createElement(K,{darkTheme:e,largeFont:!r,tabIndex:a?0:-1},a),u.createElement(Q,{darkTheme:e,largeFont:!r,tabIndex:l?0:-1},l),o&&u.createElement(W,{url:o,text:c,sameTab:s,tabIndex:0}))),r&&u.createElement(G,null,u.createElement(X,{src:r,alt:i,tabIndex:0}))))));Z.propTypes={darkTheme:b.bool,alignment:b.string,header:b.string,subheader:b.string,description:b.string,image:b.string,alt:b.string,url:b.string,buttonText:b.string,sameTab:b.bool,verticalPadding:b.number},Z.defaultProps={verticalPadding:120,sameTab:!1};const ee={darkTheme:!0,alignment:"center",header:"Hello",subheader:"Welcome to my website"},te={darkTheme:!1,alignment:"left",header:"Who Am I?",description:"Hi! My name is Soroush and I am a fullstack web developer at American Express! I graduated in 2019 from UC San Diego with a bachelors in math, after which I moved to New York City to begin my first job as a software developer at Amex. In addition to the web development I do in a professional setting, I enjoy doing game development and machine learning in my free time.",image:"/assets/coding.7d6d00f7.svg",alt:"Me at my desk writing some code."},ne={darkTheme:!0,alignment:"right",header:"What else do I do?",description:"My favorite hobby is probably sleeping in, but outside of that I enjoy playing piano, chess, video games, exercising, studying, and watching YouTube videos. I also used to enjoy hiking and longboarding, until I moved to New York City where those hobbies were replaced with exploring the city and going to restaurants.",image:"/assets/walk.548cbed2.svg",alt:"Me taking a walk outside."},ae={darkTheme:!1,alignment:"center",subheader:"Feel free to check out the other menu items above",description:"If you are hiring, feel free to download my resume below",verticalPadding:60,url:"/soroush_saberan_resume.pdf",buttonText:"Resume"},le=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Homepage")),u.createElement(Z,r({},ee)),u.createElement(Z,r({},te)),u.createElement(Z,r({},ne)),u.createElement(Z,r({},ae))),re=c.div`
   border: 10px solid #101522;
   margin: 40px;
   text-align: center;
   width: 300px;
   overflow: hidden;
   background: #101522;
   border-radius: 15px;

   &:hover {
      box-shadow: 10px 10px 10px 10px gray;
      margin-top: 35px;
      margin-left: 35px;
      transition: all 0.3s ease;
   }

   @media screen and (max-width: 480px) {
      margin: auto;
      width: 80%;
      margin-top: 35px;
      padding: 10px;
      border: 5px solid #101522;

      &:hover {
         box-shadow: none;
         margin: auto;
         margin-top: 35px;
      }
   }
`,ie=c.img`
   width: 100%;
`,oe=c.div`
   margin: auto;
   padding-top: 5px;
   padding-bottom: 5px;
   font-size: 20px;
   width: 100%;
   height: 100%;
   color: white;
`,ce=c.div`
   margin: auto;
   padding-top: 5px;
   padding-bottom: 5px;
   font-size: 14px;
   width: 100%;
   height: 100%;
   color: white;
`,se=({image:e,title:t,description:n,url:a})=>u.createElement(u.Fragment,null,u.createElement(re,null,u.createElement(s,{to:a,style:{textDecoration:"none"}},u.createElement(ie,{src:e}),u.createElement(oe,null,t),u.createElement(ce,null,n))));se.propTypes={image:b.string,title:b.string,description:b.string,url:b.string};const me={title:"A bizarre way of evaluating infinite series",description:"By equating an arbitrary infinite series to a Taylor expansion of some unknown function, can we evaluate the infinite series by finding this unknown function? This is an idea I came up with when studying how Talor expansions work, and this blog post goes into the details of what I uncovered.",image:"/assets/pi.515da8b7.jpg",url:"blog/1"},de=c.div`
   display: inline;
`,ge=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog")),u.createElement(de,null,u.createElement(se,r({},me)))),pe=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Projects"))),ue=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Resume"))),fe=c.input`
   margin: auto;
   display: block;
   width: 100%;
   height: 2.5rem;
   padding-left: 10px;
   padding-right: 10px;
`,he=c.label`
   margin: auto;
   display: block;
   width: 100%;
   margin-bottom: 5px;
   font-size: 22px;
`,xe=c.label`
   margin: auto;
   display: block;
   width: 100%;
   color: red;
   margin-top: 5px;
`,be=e=>{var t=e,{label:n}=t,a=i(t,["label"]);const[l,r]=w(a);return u.createElement(u.Fragment,null,u.createElement(he,null,n),u.createElement(fe,{name:l.name,value:l.value,onChange:l.onChange,onBlur:l.onBlur}),r.touched&&r.error?u.createElement(xe,null,r.error):null)};be.propTypes={label:b.string};const Ee=c.textarea`
   margin: auto;
   display: block;
   width: 100%;
   height: 12rem;
   padding-left: 10px;
   padding-right: 10px;
   padding-top: 10px;
`,we=c.label`
   margin: auto;
   display: block;
   width: 100%;
   margin-bottom: 5px;
   font-size: 22px;
`,ye=c.label`
   margin: auto;
   display: block;
   width: 100%;
   color: red;
   margin-top: 5px;
`,ve=e=>{var t=e,{label:n,rows:a}=t,l=i(t,["label","rows"]);const[r,o]=w(l);return u.createElement(u.Fragment,null,u.createElement(we,null,n),u.createElement(Ee,{name:r.name,value:r.value,onChange:r.onChange,onBlur:r.onBlur,rows:a}),o.touched&&o.error?u.createElement(ye,null,o.error):null)};ve.propTypes={label:b.string,rows:b.number};const ke=e=>{const t={};return e.name.trim()||(t.name="A name is required to submit"),e.subject.trim()||(t.subject="A subject is required to submit"),e.message.trim()||(t.message="A message is required to submit"),t},_e=e=>!!(e.name.trim()&&e.subject.trim()&&e.message.trim());const Te=c.div`
   display: block;
   margin: auto;
   text-align: center;
   color: white;
   padding: 20px;
`,Ie=c.div`
   background: #101522;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
   margin: auto;
`,Fe=c.img`
   padding: 0;
   display: block;
   margin: 0 auto;
   max-height: 100%;
   max-width: 100%;
`;const je=c.div`
   display: block;
   margin: auto;
   text-align: center;
   color: white;
   padding: 20px;
`,Se=c.div`
   background: #101522;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
   margin: auto;
`,Re=c.img`
   padding: 0;
   display: block;
   margin: 0 auto;
   max-height: 100%;
   max-width: 100%;
`,Ce=c(y)`
   display: block;
   text-align: center;
   width: 40%;
   margin: auto;
   padding-top: 2rem;
   padding-bottom: 5rem;

   @media screen and (max-width: 768px) {
      width: 60%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`,$e=c.div`
   background: #101522;
   color: #fff;
   width: 100%;
   margin: auto;
   display: block;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
`,Pe=c.div`
   margin: 50px 0px;
`,ze=()=>{const[e,t]=p.exports.useState("form"),n=e=>{e.preventDefault(),k.sendForm("service_wuk7fha","template_iwcxr0f",e.target,"user_L5iDeh6WPPpM7T9mHslFG").then((e=>{console.log(e.text),t("sent")}),(e=>{console.log(e.text),t("error")}))};return"sent"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Ie,null,u.createElement(Te,null,u.createElement("h1",null,"Sent!"),u.createElement(Fe,{src:"/assets/sent.5c48c0c5.svg"})))):"error"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Se,null,u.createElement(je,null,u.createElement("h1",null,"Oh No! It looks like the email failed to send!"),u.createElement("h3",null,"I'm working on fixing the issue. Until then, you can email me at ssaberan96@gmail.com."),u.createElement(Re,{src:"/assets/error.7aca0d6e.svg"})))):u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Contact Form")),u.createElement(v,{initialValues:{name:"",subject:"",message:""},validate:ke},(({values:e})=>u.createElement($e,null,u.createElement(Ce,{onSubmit:n,autoComplete:"off"},u.createElement("h1",null,"Contact Form"),u.createElement("h3",null,"Send an email to Soroush"),u.createElement(Pe,null,u.createElement(be,{name:"name",label:"Name"})),u.createElement(Pe,null,u.createElement(be,{name:"subject",label:"Subject"})),u.createElement(Pe,null,u.createElement(ve,{name:"message",label:"Message"})),u.createElement(W,{type:"submit",text:"Send",disabled:!_e(e)}))))))},Be=u.createElement("a",{href:"https://en.wikipedia.org/wiki/Basel_problem",target:"_blank",rel:"noreferrer"},"*"),Me=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f",title:"f"}),Ae=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a",title:"a"}),Ne=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}",title:"f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}"}),Oe=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;S",title:"S"}),qe=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}",title:"\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}"}),He=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\;&space;for\\;&space;n&space;\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\; for\\; n \\in \\mathbb{N}"}),De=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x",title:"x"}),Le=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=2",title:"x=2"}),We=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a=1",title:"a=1"}),Ue=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\; for\\; n\\in \\mathbb{N}"}),Ye=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)",title:"f^{(n)}(1)"}),Ge=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}\\cup\\{0\\}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}\\; for\\; n\\in \\mathbb{N}\\cup\\{0\\}"}),Je=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=1",title:"x=1"}),Ve=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}"}),Ke=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}"}),Qe=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n&plus;1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n+1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),Xe=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}"}),Ze=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),et=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow"}),tt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow"}),nt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)\\Rightarrow"}),at=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n&plus;1}=\\frac{ln(1-x)}{x}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n+1}=\\frac{ln(1-x)}{x}\\Rightarrow"}),lt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n&plus;1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n+1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),rt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{(n+1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),it=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n+1}}{(n+1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),ot=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),ct=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),st=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),mt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{\\pi^{2}}{6}",title:"\\frac{\\pi^{2}}{6}"}),dt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-\\frac{\\pi^{2}}{6}",title:"-\\frac{\\pi^{2}}{6}"}),gt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;1=-1",title:"1=-1"}),pt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)"}),ut=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{1}{1-t}",title:"\\frac{1}{1-t}"}),ft=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;0",title:"0"}),ht=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;t",title:"t"}),xt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-ln(1-t)",title:"-ln(1-t)"}),bt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;ln(1-t)",title:"ln(1-t)"}),Et=c.div`
   margin: auto;
   width: 60%;
   padding-top: 30px;
   padding-bottom: 50px;
   background: white;

   @media screen and (max-width: 960px) {
      width: 75%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`,wt=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog Post 1")),u.createElement(Et,null,u.createElement(u.Fragment,null,u.createElement("h1",null,"A bizarre way of evaluating infinite series"),u.createElement("br",null),u.createElement("h4",null,"Posted on July 4th, 2021 by Soroush Saberan"),u.createElement("br",null),u.createElement("hr",null),u.createElement("br",null),u.createElement("p",null,"Given a function ",Me," that is infinitely differentiable around a point ",Ae,", we can derive the Taylor expansion of ",Me," around ",Ae," as follows:"),u.createElement("br",null),u.createElement("p",null,Ne),u.createElement("br",null),u.createElement("p",null,"However, is the reverse also possible to derive? In other words, given an infinite series ",Oe,", can we find a function ",Me," such that the Taylor expansion of ",Me," around some infinitely differentiable point ",Ae," is ",Oe,"? If this is possible, we might be able to use the resulting function to evaluate ",Oe,"."),u.createElement("br",null),u.createElement("p",null,"When investigating this, I decided to use this idea to attempt to solve the famous Basel problem in a new, bizarre way. First proposed in 1650, and solved by Leonhard Eulor in 1734",Be,", the Basel problem asks to evaluate the following:"),u.createElement("br",null),u.createElement("p",null,qe),u.createElement("br",null),u.createElement("p",null,"Lets call this infinite sum ",Oe,". So if we treat ",Oe," as a Taylor expansion of some unknown function ",Me,", then we can write each term in ",Oe," as follows:"),u.createElement("br",null),u.createElement("p",null,He),u.createElement("br",null),u.createElement("p",null,"Our choice for ",De," and ",Ae," is arbitrary, so lets choose values that simplify the problem. If we let ",Le," and ",We,", we get the following:"),u.createElement("br",null),u.createElement("p",null,Ue),u.createElement("br",null),u.createElement("p",null,"Rearranging the terms to isolate ",Ye," gives us:"),u.createElement("br",null),u.createElement("p",null,Ge),u.createElement("br",null),u.createElement("p",null,"So given the requirement above, what is ",Me,"?"),u.createElement("br",null),u.createElement("p",null,"If you take the Taylor expansion of ",Me," centered around ",Je,", you get the following:"),u.createElement("br",null),u.createElement("p",null,Ve),u.createElement("br",null),u.createElement("p",null,"Substituting for ",Ke," yields:"),u.createElement("br",null),u.createElement("p",null,Qe),u.createElement("br",null),u.createElement("p",null,"Now use the formula, ",Xe,". We want to manipulate the left side of this equation until it becomes ",Ze,". Then whatever is on the right side will be ",Me,":"),u.createElement("br",null),u.createElement("p",null,et),u.createElement("br",null),u.createElement("p",null,tt),u.createElement("br",null),u.createElement("p",null,nt),u.createElement("br",null),u.createElement("p",null,at),u.createElement("br",null),u.createElement("p",null,lt),u.createElement("br",null),u.createElement("p",null,rt),u.createElement("br",null),u.createElement("p",null,it),u.createElement("br",null),u.createElement("p",null,ot),u.createElement("br",null),u.createElement("p",null,"So we get that"),u.createElement("br",null),u.createElement("p",null,ct),u.createElement("br",null),u.createElement("p",null,"is the value for ",Me," when ",Le," we were looking for, thus showing that it is possible to derive a function from its Taylor expansion for ",u.createElement("i",null,"some")," series ",Oe," around ",u.createElement("i",null,"some")," infinitely differentiable point (in this case ",We,")."),u.createElement("br",null),u.createElement("p",null,"Except for one not-so-minor detail..."),u.createElement("br",null),u.createElement("p",null,"Assuming I did everything right, if we plug ",Le," into"," ",st,", we should expect to get the answer to the Basel problem, which was confirmed to be ",mt," by Leonhard Eulor in 1734",Be,". However, doing so yields ",dt," for whatever reason, meaning I made a mistake in my math somewhere (or that ",gt," haha). Maybe someday I will revisit this and find where I went wrong."),u.createElement("br",null),u.createElement("hr",null),u.createElement("br",null),u.createElement("p",null,u.createElement("strong",null,"Update on July 18th, 2021:")," After reading this blog post, Khristrian Decastro has pointed out that my mistake was in the step where I say:"),u.createElement("br",null),u.createElement("p",null,tt),u.createElement("br",null),u.createElement("p",null,pt),u.createElement("br",null),u.createElement("p",null,"The integral of ",ut," from ",ft," to ",De," with respect to ",ht," is actually equal to ",xt,", ",u.createElement("i",null,"not")," ",bt,". This is where the erronious negative sign came from in my solution to the Basel problem."))));function yt(){return u.createElement(_,null,u.createElement(S,null),u.createElement(D,null),u.createElement(H,null),u.createElement(T,null,u.createElement(I,{path:"/",to:"/home",exact:!0,component:le}),u.createElement(F,{path:"/home",exact:!0,component:le}),u.createElement(F,{path:"/blog",exact:!0,component:ge}),u.createElement(F,{path:"/projects",exact:!0,component:pe}),u.createElement(F,{path:"/resume",exact:!0,component:ue}),u.createElement(F,{path:"/contact",exact:!0,component:ze}),u.createElement(F,{path:"/blog/1",exact:!0,component:wt})))}j.render(u.createElement(yt,null),document.getElementById("root"));
