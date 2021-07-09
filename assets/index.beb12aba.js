var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&l(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)n.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))l.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r};import{$ as o,q as c,L as s,I as m,B as d,a as u,r as g,R as p,F as f,b as h,w as x,P as b,H as E,u as w,c as y,d as v,e as k,f as _,S as T,g as I,h as F,i as j}from"./vendor.c21975a4.js";const R=o`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DejaVu Sans Mono", monospace;
}
`,S=c.div`
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
`,$=c(S)`
   display: flex;
   justify-content: space-between;
   height: 80px;

   ${S}
`,P=c(s)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   text-decoration: none;
   font-size: 2rem;
   display: flex;
   align-items: center;
`,B=c(m)`
   margin-right: -0.25rem;
`,z=c(d)`
   margin-left: 0.5rem;
   margin-right: -0.75rem;
`,M=c(u)`
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
`,H=c(s)`
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
`,q=()=>{const[e,t]=g.exports.useState(!1),n=()=>t(!e);return p.createElement(p.Fragment,null,p.createElement(C,null,p.createElement($,null,p.createElement(P,{to:"/home"},p.createElement(B,null),"Soroush",p.createElement(z,null),p.createElement(M,null)),p.createElement(A,{onClick:n},e?p.createElement(f,null):p.createElement(h,null)),p.createElement(N,{onClick:n,openMobileMenu:e},(e=>{let t=0;return e.map((e=>p.createElement(O,{key:t++},p.createElement(H,{to:`/${e.toLowerCase().replace(" ","-")}`},e))))})(["Home","Blog","Projects","Resume","Contact"])))))};var L=x((function({history:e}){return g.exports.useEffect((()=>{const t=e.listen((()=>{window.scrollTo(0,0)}));return()=>{t()}}),[]),null}));const W=c.button`
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
`,D=({url:e,text:t,type:n,disabled:a,sameTab:l})=>{const r=()=>{l?window.open(e,"_self"):window.open(e)};return l&&"submit"!==n?p.createElement(s,{to:e,style:{textDecoration:"none"}},p.createElement(W,{type:"button"},t)):p.createElement(W,{type:n,onClick:e?r:void 0,disabled:a},t)};D.propTypes={text:b.string,type:b.string,url:b.string,disabled:b.bool,sameTab:b.bool},D.defaultProps={type:"button",sameTab:!1};const Y=c.div`
   color: #fff;
   padding: ${({verticalPadding:e})=>e}px 0px;
   background: ${({darkTheme:e})=>e?"#101522":"#fff"};
`,G=c.div`
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
`,V=c.div`
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
`,U=c.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 60px;

   @media screen and (max-width: 768px) {
      padding-bottom: 65px;
   }
`,J=c.div`
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
`,Z=({darkTheme:e,alignment:t,header:n,subheader:a,description:l,image:r,alt:i,url:o,buttonText:c,sameTab:s,verticalPadding:m})=>p.createElement(p.Fragment,null,p.createElement(Y,{darkTheme:e,verticalPadding:m},p.createElement(S,null,p.createElement(G,{alignment:t},p.createElement(V,null,p.createElement(U,null,p.createElement(J,{darkTheme:e,largeFont:!r,tabIndex:n?0:-1},n),p.createElement(K,{darkTheme:e,largeFont:!r,tabIndex:a?0:-1},a),p.createElement(Q,{darkTheme:e,largeFont:!r,tabIndex:l?0:-1},l),o&&p.createElement(D,{url:o,text:c,sameTab:s,tabIndex:0}))),r&&p.createElement(V,null,p.createElement(X,{src:r,alt:i,tabIndex:0}))))));Z.propTypes={darkTheme:b.bool,alignment:b.string,header:b.string,subheader:b.string,description:b.string,image:b.string,alt:b.string,url:b.string,buttonText:b.string,sameTab:b.bool,verticalPadding:b.number},Z.defaultProps={verticalPadding:120,sameTab:!1};const ee={darkTheme:!0,alignment:"center",header:"Hello",subheader:"Welcome to my website"},te={darkTheme:!1,alignment:"left",header:"Who Am I?",description:"Hi! My name is Soroush and I am a fullstack web developer at American Express! I graduated in 2019 from UC San Diego with a bachelors in math, after which I moved to New York City to begin my first job as a software developer at Amex. In addition to the web development I do in a professional setting, I enjoy doing game development and machine learning in my free time.",image:"/assets/coding.7d6d00f7.svg",alt:"Me at my desk writing some code."},ne={darkTheme:!0,alignment:"right",header:"What else do I do?",description:"My favorite hobby is probably sleeping in, but outside of that I enjoy playing piano, chess, video games, exercising, studying, and watching YouTube videos. I also used to enjoy hiking and longboarding, until I moved to New York City where those hobbies were replaced with exploring the city and going to restaurants.",image:"/assets/walk.548cbed2.svg",alt:"Me taking a walk outside."},ae={darkTheme:!1,alignment:"center",subheader:"Feel free to check out the other menu items above",description:"If you are hiring, feel free to download my resume below",verticalPadding:60,url:"/soroush_saberan_resume.pdf",buttonText:"Resume"},le=()=>p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Homepage")),p.createElement(Z,r({},ee)),p.createElement(Z,r({},te)),p.createElement(Z,r({},ne)),p.createElement(Z,r({},ae)));const re={darkTheme:!0,alignment:"left",header:"Math",subheader:"A bizarre way of evaluating infinite series'",description:"By equating an arbitrary infinite series to a Taylor expansion of some unknown function, can we evaluate the infinite series by finding this unknown function? This is an idea I came up with when studying how Talor expansions work, and this blog post goes into the details of what I uncovered.",image:"/assets/studying_pi.c0c806ab.svg",alt:"A person studying math",url:"blog/1",buttonText:"Read the blog post",sameTab:!0,verticalPadding:20},ie=()=>p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Blog")),p.createElement(Z,r({},re))),oe=()=>p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Projects"))),ce=()=>p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Resume"))),se=c.input`
   margin: auto;
   display: block;
   width: 100%;
   height: 2.5rem;
   padding-left: 10px;
   padding-right: 10px;
`,me=c.label`
   margin: auto;
   display: block;
   width: 100%;
   margin-bottom: 5px;
   font-size: 22px;
`,de=c.label`
   margin: auto;
   display: block;
   width: 100%;
   color: red;
   margin-top: 5px;
`,ue=e=>{var t=e,{label:n}=t,a=i(t,["label"]);const[l,r]=w(a);return p.createElement(p.Fragment,null,p.createElement(me,null,n),p.createElement(se,{name:l.name,value:l.value,onChange:l.onChange,onBlur:l.onBlur}),r.touched&&r.error?p.createElement(de,null,r.error):null)};ue.propTypes={label:b.string};const ge=c.textarea`
   margin: auto;
   display: block;
   width: 100%;
   height: 12rem;
   padding-left: 10px;
   padding-right: 10px;
   padding-top: 10px;
`,pe=c.label`
   margin: auto;
   display: block;
   width: 100%;
   margin-bottom: 5px;
   font-size: 22px;
`,fe=c.label`
   margin: auto;
   display: block;
   width: 100%;
   color: red;
   margin-top: 5px;
`,he=e=>{var t=e,{label:n,rows:a}=t,l=i(t,["label","rows"]);const[r,o]=w(l);return p.createElement(p.Fragment,null,p.createElement(pe,null,n),p.createElement(ge,{name:r.name,value:r.value,onChange:r.onChange,onBlur:r.onBlur,rows:a}),o.touched&&o.error?p.createElement(fe,null,o.error):null)};he.propTypes={label:b.string,rows:b.number};const xe=e=>{const t={};return e.name.trim()||(t.name="A name is required to submit"),e.subject.trim()||(t.subject="A subject is required to submit"),e.message.trim()||(t.message="A message is required to submit"),t},be=e=>!!(e.name.trim()&&e.subject.trim()&&e.message.trim()),Ee=c(y)`
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
`,we=c.div`
   background: #101522;
   color: #fff;
   width: 100%;
   margin: auto;
   display: block;
   background-image: linear-gradient(#164d69, #101522);
   top: 0;
   bottom: 0;
`,ye=c.div`
   margin: 50px 0px;
`,ve=()=>{const[e,t]=g.exports.useState("form"),n=e=>{e.preventDefault(),k.sendForm("service_wuk7fha","template_iwcxr0f",e.target,"user_L5iDeh6WPPpM7T9mHslFG").then((e=>{console.log(e.text),t("sent")}),(e=>{console.log(e.text),t("error")}))};return"sent"===e?p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Email Sent")),p.createElement("h1",null,"Sent!")):"error"===e?p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Error")),p.createElement("h1",null,"Error!")):p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Contact Form")),p.createElement(v,{initialValues:{name:"",subject:"",message:""},validate:xe},(({values:e})=>p.createElement(we,null,p.createElement(Ee,{onSubmit:n,autoComplete:"off"},p.createElement("h1",null,"Contact Form"),p.createElement("h3",null,"Send an email to Soroush"),p.createElement(ye,null,p.createElement(ue,{name:"name",label:"Name"})),p.createElement(ye,null,p.createElement(ue,{name:"subject",label:"Subject"})),p.createElement(ye,null,p.createElement(he,{name:"message",label:"Message"})),p.createElement(D,{type:"submit",text:"Send",disabled:!be(e)}))))))},ke=p.createElement("a",{href:"https://en.wikipedia.org/wiki/Basel_problem",target:"_blank",rel:"noreferrer"},"*"),_e=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f",title:"f"}),Te=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?a",title:"a"}),Ie=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}",title:"f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}"}),Fe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?S",title:"S"}),je=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}",title:"\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}"}),Re=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\;&space;for\\;&space;n&space;\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\; for\\; n \\in \\mathbb{N}"}),Se=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?x",title:"x"}),Ce=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?x=2",title:"x=2"}),$e=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?a=1",title:"a=1"}),Pe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\; for\\; n\\in \\mathbb{N}"}),Be=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)",title:"f^{(n)}(1)"}),ze=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}\\cup\\{0\\}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}\\; for\\; n\\in \\mathbb{N}\\cup\\{0\\}"}),Me=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?x=1",title:"x=1"}),Ae=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}"}),Ne=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}"}),Oe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n&plus;1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n+1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),He=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}"}),qe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),Le=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow"}),We=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow"}),De=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)\\Rightarrow"}),Ye=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n&plus;1}=\\frac{ln(1-x)}{x}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n+1}=\\frac{ln(1-x)}{x}\\Rightarrow"}),Ge=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n&plus;1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n+1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Ve=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{(n+1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Ue=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n+1}}{(n+1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Je=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Ke=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),Qe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),Xe=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{\\pi^{2}}{6}",title:"\\frac{\\pi^{2}}{6}"}),Ze=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?-\\frac{\\pi^{2}}{6}",title:"-\\frac{\\pi^{2}}{6}"}),et=p.createElement("img",{src:"https://latex.codecogs.com/gif.latex?1=-1",title:"1=-1"}),tt=c.div`
   margin: auto;
   width: 60%;
   padding-top: 30px;
   padding-bottom: 50px;
   background: white;

   @media screen and (max-width: 768px) {
      width: 75%;
   }

   @media screen and (max-width: 425px) {
      width: 90%;
   }
`,nt=()=>p.createElement(p.Fragment,null,p.createElement(E,null,p.createElement("title",null,"Blog Post 1")),p.createElement(tt,null,p.createElement(p.Fragment,null,p.createElement("h1",null,"A bizarre way of evaluating infinite series'"),p.createElement("br",null),p.createElement("p",null,"Given a function ",_e," that is infinitely differentiable around a point ",Te,", we can derive the Taylor expansion of ",_e," around ",Te," as follows:"),p.createElement("br",null),p.createElement("p",null,Ie),p.createElement("br",null),p.createElement("p",null,"However, is the reverse also possible to derive? In other words, given an infinite series ",Fe,", can we find a function ",_e," such that the Taylor expansion of ",_e," around some infinitely differentiable point ",Te," is ",Fe,"? If this is possible, we might be able to use the resulting function to evaluate ",Fe,"."),p.createElement("br",null),p.createElement("p",null,"When investigating this, I decided to use this idea to attempt to solve the famous Basel problem in a new, bizarre way. First proposed in 1650, and solved by Leonhard Eulor in 1734",ke,", the Basel problem asks to evaluate the following:"),p.createElement("br",null),p.createElement("p",null,je),p.createElement("br",null),p.createElement("p",null,"Lets call this infinite sum ",Fe,". So if we treat ",Fe," as a Taylor expansion of some unknown function ",_e,", then we can write each term in ",Fe," as follows:"),p.createElement("br",null),p.createElement("p",null,Re),p.createElement("br",null),p.createElement("p",null,"Our choice for ",Se," and ",Te," is arbitrary, so lets choose values that simplify the problem. If we let ",Ce," and ",$e,", we get the following:"),p.createElement("br",null),p.createElement("p",null,Pe),p.createElement("br",null),p.createElement("p",null,"Rearranging the terms to isolate ",Be," gives us:"),p.createElement("br",null),p.createElement("p",null,ze),p.createElement("br",null),p.createElement("p",null,"So given the requirement above, what is ",_e,"?"),p.createElement("br",null),p.createElement("p",null,"If you take the Taylor expansion of ",_e," centered around ",Me,", you get the following:"),p.createElement("br",null),p.createElement("p",null,Ae),p.createElement("br",null),p.createElement("p",null,"Substituting for ",Ne," yields:"),p.createElement("br",null),p.createElement("p",null,Oe),p.createElement("br",null),p.createElement("p",null,"Now use the formula, ",He,". We want to manipulate the left side of this equation until it becomes ",qe,". Then whatever is on the right side will be ",_e,":"),p.createElement("br",null),p.createElement("p",null,Le),p.createElement("br",null),p.createElement("p",null,We),p.createElement("br",null),p.createElement("p",null,De),p.createElement("br",null),p.createElement("p",null,Ye),p.createElement("br",null),p.createElement("p",null,Ge),p.createElement("br",null),p.createElement("p",null,Ve),p.createElement("br",null),p.createElement("p",null,Ue),p.createElement("br",null),p.createElement("p",null,Je),p.createElement("br",null),p.createElement("p",null,"So we get that"),p.createElement("br",null),p.createElement("p",null,Ke),p.createElement("br",null),p.createElement("p",null,"is the value for ",_e," when ",Ce," we were looking for, thus showing that it is possible to derive a function from its Taylor expansion for ",p.createElement("i",null,"some")," series ",Fe," around some infinitely differentiable point (in this case ",$e,")."),p.createElement("br",null),p.createElement("p",null,"Except for one not-so-minor detail..."),p.createElement("br",null),p.createElement("p",null,"Assuming I did everything right, if we plug ",Ce," into"," ",Qe,", we should expect to get the answer to the Basel problem, which was confirmed to be ",Xe," by Leonhard Eulor in 1734",ke,". However, doing so yields ",Ze," for whatever reason, meaning I made a mistake in my math somewhere (or that ",et," haha). Maybe someday I will revisit this and find where I went wrong."))));function at(){return p.createElement(_,null,p.createElement(R,null),p.createElement(L,null),p.createElement(q,null),p.createElement(T,null,p.createElement(I,{path:"/",to:"/home",exact:!0,component:le}),p.createElement(F,{path:"/home",exact:!0,component:le}),p.createElement(F,{path:"/blog",exact:!0,component:ie}),p.createElement(F,{path:"/projects",exact:!0,component:oe}),p.createElement(F,{path:"/resume",exact:!0,component:ce}),p.createElement(F,{path:"/contact",exact:!0,component:ve}),p.createElement(F,{path:"/blog/1",exact:!0,component:nt})))}j.render(p.createElement(at,null),document.getElementById("root"));
