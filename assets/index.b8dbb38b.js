var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&l(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)n.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))l.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r};import{q as o,I as c,B as s,a as m,L as d,r as p,R as u,F as g,b as x,w as h,$ as f,P as b,H as E,c as w,d as y,G as v,e as k,f as _,u as T,g as I,h as S,i as j,j as F,S as z,k as P,l as C,m as B}from"./vendor.bc03d09b.js";const R=o.nav`
    background: #000f1e;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`,q=o.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
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
`,$=o(d)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`,M=o(c)`
    margin-right: -0.25rem;
`,A=o(s)`
    margin-left: 0.5rem;
    margin-right: -0.75rem;
`,O=o(m)`
    margin-right: 1rem;
`,L=o.div`
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
`,N=o.div`
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
        background: #000f1e;
    }
`,D=o.li`
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
`,H=o(d)`
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
`,W=()=>{const[e,t]=p.exports.useState(!1),n=()=>t(!e);return u.createElement(u.Fragment,null,u.createElement(R,null,u.createElement(q,null,u.createElement($,{to:"/home"},u.createElement(M,null),"Soroush",u.createElement(A,null),u.createElement(O,null)),u.createElement(L,{onClick:n},e?u.createElement(g,null):u.createElement(x,null)),u.createElement(N,{onClick:n,openMobileMenu:e},(e=>{let t=0;return e.map((e=>u.createElement(D,{key:t++},u.createElement(H,{to:`/${e.toLowerCase().replace(" ","-")}`},e))))})(["Home","Blog","Projects","Resume","Contact"])))))};var G=h((function({history:e}){return p.exports.useEffect((()=>{const t=e.listen((()=>{window.scrollTo(0,0)}));return()=>{t()}}),[]),null}));const V=f`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DejaVu Sans Mono", monospace;
}

body {
    background: #222c47;
 }
`,J=o.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 15px;
    background: ${({disabled:e})=>e?"#c9c9c9":"#4b59f7"};
    white-space: nowrap;
    padding: 12px 64px;
    color: ${({disabled:e})=>e?"#474747":"#fff"};
    font-size: 20px;
    cursor: ${({disabled:e})=>e?"":"pointer"};

    &:hover {
        transition: all 0.4s east-out;
        background: ${({disabled:e})=>e?"#c9c9c9":"#0467fb"};
    }

    @media screen and (max-width: 768px) {
        height: 4rem;
    }
`,U=({url:e,text:t,type:n,disabled:a,sameTab:l})=>{const r=()=>{l?window.open(e,"_self"):window.open(e)};return l&&"submit"!==n?u.createElement(d,{to:e,style:{textDecoration:"none"}},u.createElement(J,{type:"button"},t)):u.createElement(J,{type:n,onClick:e?r:void 0,disabled:a},t)};U.propTypes={text:b.string,type:b.string,url:b.string,disabled:b.bool,sameTab:b.bool},U.defaultProps={type:"button",sameTab:!1};const K=o.div`
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
`,Q=o.div`
    color: #fff;
    padding: ${({verticalPadding:e})=>e}px 0px;
    background: ${({darkTheme:e})=>e?"#000f1e":"#fff"};
`,X=o.div`
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
`,Y=o.div`
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
`,Z=o.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`,ee=o.div`
    margin-bottom: 8px;
    font-size: ${({largeFont:e})=>e?"60px":"48px"};
    color: ${({darkTheme:e})=>e?"#F7F8FA":"#1C2237"};
`,te=o.div`
    color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
    font-size: ${({largeFont:e})=>e?"22px":"18px"};
    letter-spacing: 1.4px;
    margin-bottom: 24px;
`,ne=o.div`
    margin-bottom: 35px;
    font-size: 18px;
    color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
`,ae=o.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`,le=({darkTheme:e,alignment:t,header:n,subheader:a,description:l,image:r,alt:i,url:o,buttonText:c,sameTab:s,verticalPadding:m})=>u.createElement(u.Fragment,null,u.createElement(Q,{darkTheme:e,verticalPadding:m},u.createElement(K,null,u.createElement(X,{alignment:t},u.createElement(Y,null,u.createElement(Z,null,u.createElement(ee,{darkTheme:e,largeFont:!r,tabIndex:n?0:-1},n),u.createElement(te,{darkTheme:e,largeFont:!r,tabIndex:a?0:-1},a),u.createElement(ne,{darkTheme:e,largeFont:!r,tabIndex:l?0:-1},l),o&&u.createElement(U,{url:o,text:c,sameTab:s,tabIndex:0}))),r&&u.createElement(Y,null,u.createElement(ae,{src:r,alt:i,tabIndex:0}))))));le.propTypes={darkTheme:b.bool,alignment:b.string,header:b.string,subheader:b.string,description:b.string,image:b.string,alt:b.string,url:b.string,buttonText:b.string,sameTab:b.bool,verticalPadding:b.number},le.defaultProps={verticalPadding:120,sameTab:!1};const re={darkTheme:!0,alignment:"center",header:"Hello",subheader:"Welcome to my website"},ie={darkTheme:!1,alignment:"left",header:"Who Am I?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",image:"/assets/coding.7d6d00f7.svg",alt:"Me at my desk writing some code."},oe={darkTheme:!0,alignment:"right",header:"What do I do?",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",image:"/assets/walk.548cbed2.svg",alt:"Me taking a walk outside."},ce={darkTheme:!1,alignment:"center",subheader:"Feel free to check out the other menu items above",description:"If you are hiring, feel free to view and download my resume below",verticalPadding:60,url:"/resume",buttonText:"Resume",sameTab:!0},se=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Homepage")),u.createElement(le,r({},re)),u.createElement(le,r({},ie)),u.createElement(le,r({},oe)),u.createElement(le,r({},ce))),me=o.div`
    border: 10px solid #000f1e;
    margin: 40px;
    text-align: center;
    width: 300px;
    overflow: hidden;
    background: #000f1e;
    border-radius: 15px;

    @media screen and (max-width: 1440px) {
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-bottom: 20px;
    }

    &:hover {
        background: #000f28;
        border-color: #000f28;
        transition: all 0.4s ease;
    }
`,de=o.img`
    width: 100%;
`,pe=o.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    color: white;
`,ue=o.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    width: 100%;
    height: 100%;
    color: white;
`,ge=({image:e,title:t,description:n,url:a})=>u.createElement(u.Fragment,null,u.createElement(me,null,u.createElement(d,{to:a,style:{textDecoration:"none"}},u.createElement(de,{src:e}),u.createElement(pe,null,t),u.createElement(ue,null,n))));ge.propTypes={image:b.string,title:b.string,description:b.string,url:b.string};const xe=o.table`
    margin: 2rem auto;
`,he=({blogs:e})=>{let t=3;window.screen.width<=1024&&(t=2),window.screen.width<=768&&(t=1);let n=Math.ceil(e.length/t);return u.createElement(xe,null,[...Array(n).keys()].map((()=>u.createElement("tr",null,[...Array(t).keys()].map((()=>{if(0!==e.length){let t=e.shift();return u.createElement("td",null,u.createElement(ge,r({},t)))}}))))))};he.propTypes={blogs:b.array},he.defaultProps={blogs:[]};const fe=o.input`
    margin-top: 40px;
    width: 50%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    max-width: 500px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin-top: 20px;
    }
`,be=o.button`
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 20px;
    background-color: #00ff84;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    transform: translate(0px, 3px);
`,Ee=o.div`
    text-align: center;
`,we=({allItems:e,setResults:t})=>{const n=new w([...e],{keys:[{name:"title",weight:.4},{name:"tags",weight:.4},{name:"description",weight:.2}]});return u.createElement(u.Fragment,null,u.createElement(Ee,null,u.createElement(fe,{type:"text",placeholder:"Search",id:"searchInput",autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&(document.getElementById("searchButton").click(),document.getElementById("searchInput").blur())}}),u.createElement(be,{type:"button",id:"searchButton",onClick:()=>{t(n.search(document.getElementById("searchInput").value).map((e=>e.item)))}},u.createElement(y,null))))};we.propTypes={setResults:b.func,allItems:b.array};const ye={title:"A Bizarre Way Of Evaluating Infinite Series",description:"By equating an arbitrary infinite series to a Taylor expansion of some unknown function, can we evaluate the infinite series by finding this unknown function? This is an idea I came up with when studying how Talor expansions work, and this blog post goes into the details of what I uncovered.",image:"/assets/pi.515da8b7.jpg",url:"blog/1",tags:["math","pi","calculus","series"]},ve={title:"Game Theory Meets Machine Learning: Interpreting Models with Shapley Values",description:"Shapley values are used to evaluate the contribution of players to a payout in a game. A similar concept is used in machine learning, and is called SHAP values.",image:"/assets/shap.505c7ecd.png",url:"blog/2",tags:["math","shap","machine learning","game theory"]},ke=()=>{const e=[ye,ve],[t,n]=p.exports.useState(e);return u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog")),u.createElement(we,{allItems:e,setResults:n}),u.createElement(he,{blogs:t}))},_e=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Projects")));const Te=o.img`
    margin: auto;
    width: 60%;
    max-width: 60rem;
    background: white;
    padding: 40px 60px;
    border-radius: 15px;
    margin-top: 20px;

    @media screen and (max-width: 960px) {
        width: 75%;
        padding: 10px;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
        padding: 5px;
    }
`,Ie=o.div`
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,Se=o.img`
    margin: 20px;
    max-width: 250px;
    transform: scale(${e=>e.scale}, ${e=>e.scale});
    cursor: pointer;

    // prevent image from being highlighted
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`,je=o.div`
    margin: auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
        width: 75%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
    }
`,Fe=o(v)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,ze=o(k)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,Pe=o(_)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,Ce=o.div`
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
`,Be=()=>{window.open("https://www.linkedin.com/in/ssaberan/","_blank").focus()},Re=()=>{window.open("https://github.com/ssaberan","_blank").focus()},qe=()=>{const e=document.createElement("a");e.href="/assets/resume.0369c7a5.jpg",e.download="Soroush_Saberan_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},$e=()=>{const[e,t]=p.exports.useState("1");return u.createElement(Se,{src:"/assets/profile.0c1f39b9.svg",scale:e,onClick:()=>{t("0.98"),setTimeout((()=>{t("1")}),100)}})},Me=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Resume")),u.createElement(Ie,null,u.createElement(je,null,u.createElement($e,null),u.createElement(Ce,null,u.createElement(Fe,{onClick:Be,title:"Open my LinkedIn page in a new tab"}),u.createElement(ze,{onClick:Re,title:"Open my Github page in a new tab"}),u.createElement(Pe,{onClick:qe,title:"Download my resume"}))),u.createElement(Te,{src:"/assets/resume.0369c7a5.jpg",title:"Resume",tabIndex:0}))),Ae=o.input`
    margin: auto;
    display: block;
    width: 100%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 15px;
    border: none;
`,Oe=o.label`
    margin: auto;
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 22px;
`,Le=o.label`
    margin: auto;
    display: block;
    width: 100%;
    color: red;
    margin-top: 5px;
`,Ne=e=>{var t=e,{label:n}=t,a=i(t,["label"]);const[l,r]=T(a);return u.createElement(u.Fragment,null,u.createElement(Oe,null,n),u.createElement(Ae,{name:l.name,value:l.value,onChange:l.onChange,onBlur:l.onBlur}),r.touched&&r.error?u.createElement(Le,null,r.error):null)};Ne.propTypes={label:b.string};const De=o.textarea`
    margin: auto;
    display: block;
    width: 100%;
    height: 12rem;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    border-radius: 15px;
    border: none;
`,He=o.label`
    margin: auto;
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 22px;
`,We=o.label`
    margin: auto;
    display: block;
    width: 100%;
    color: red;
    margin-top: 5px;
`,Ge=e=>{var t=e,{label:n,rows:a}=t,l=i(t,["label","rows"]);const[r,o]=T(l);return u.createElement(u.Fragment,null,u.createElement(He,null,n),u.createElement(De,{name:r.name,value:r.value,onChange:r.onChange,onBlur:r.onBlur,rows:a}),o.touched&&o.error?u.createElement(We,null,o.error):null)};Ge.propTypes={label:b.string,rows:b.number};const Ve=e=>{const t={};return e.name.trim()||(t.name="A name is required to submit"),e.subject.trim()||(t.subject="A subject is required to submit"),e.message.trim()||(t.message="A message is required to submit"),t},Je=e=>!!(e.name.trim()&&e.subject.trim()&&e.message.trim());const Ue=o.div`
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    padding: 20px;
`,Ke=o.img`
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
`;const Qe=o.div`
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    padding: 20px;
`,Xe=o.img`
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
`,Ye=o(I)`
    display: block;
    text-align: center;
    width: 40%;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 5rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        width: 60%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
    }
`,Ze=o.div`
    margin: 50px 0px;
`,et=()=>{const[e,t]=p.exports.useState("form"),n=e=>{e.preventDefault(),j.sendForm("service_wuk7fha","template_iwcxr0f",e.target,"user_L5iDeh6WPPpM7T9mHslFG").then((e=>{console.log(e.text),t("sent")}),(e=>{console.log(e.text),t("error")}))};return"sent"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Ue,null,u.createElement("h1",null,"Sent!"),u.createElement(Ke,{src:"/assets/sent.5c48c0c5.svg"}))):"error"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Qe,null,u.createElement("h1",null,"Oh No! It looks like the email failed to send!"),u.createElement("h3",null,"I'm working on fixing the issue. Until then, you can email me at ssaberan96@gmail.com."),u.createElement(Xe,{src:"/assets/error.7aca0d6e.svg"}))):u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Contact Form")),u.createElement(S,{initialValues:{name:"",subject:"",message:""},validate:Ve},(({values:e})=>u.createElement(Ye,{onSubmit:n,autoComplete:"off"},u.createElement("h1",null,"Contact Form"),u.createElement("h3",null,"Send an email to Soroush"),u.createElement(Ze,null,u.createElement(Ne,{name:"name",label:"Name"})),u.createElement(Ze,null,u.createElement(Ne,{name:"subject",label:"Subject"})),u.createElement(Ze,null,u.createElement(Ge,{name:"message",label:"Message"})),u.createElement(U,{type:"submit",text:"Send",disabled:!Je(e)})))))},tt=u.createElement("a",{href:"https://en.wikipedia.org/wiki/Basel_problem",target:"_blank",rel:"noreferrer"},"*"),nt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f",title:"f"}),at=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a",title:"a"}),lt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a=0",title:"a=0"}),rt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}",title:"f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}"}),it=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;S",title:"S"}),ot=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}",title:"\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}"}),ct=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\;&space;for\\;&space;n&space;\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\; for\\; n \\in \\mathbb{N}"}),st=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x",title:"x"}),mt=u.createElement("img",{src:"https://latex.codecogs.com/svg.image?\\frac{1}{n^{2}}=f^{(n-1)}(0)\\frac{1}{(n-1)!}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}",title:"https://latex.codecogs.com/svg.image?\\frac{1}{n^{2}}=f^{(n-1)}(0)\\frac{1}{(n-1)!}\\; for\\; n\\in \\mathbb{N}"}),dt=u.createElement("img",{src:"https://latex.codecogs.com/svg.image?f^{(n)}(0)",title:"https://latex.codecogs.com/svg.image?f^{(n)}(0)"}),pt=u.createElement("img",{src:"https://latex.codecogs.com/svg.image?f^{(n)}(0)=\\frac{n!}{(n&plus;1)^{2}}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}\\cup\\{0\\}",title:"https://latex.codecogs.com/svg.image?f^{(n)}(0)=\\frac{n!}{(n+1)^{2}}\\; for\\; n\\in \\mathbb{N}\\cup\\{0\\}"}),ut=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=1",title:"x=1"}),gt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=0",title:"x=0"}),xt=u.createElement("img",{src:"https://latex.codecogs.com/svg.image?f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",title:"https://latex.codecogs.com/svg.image?f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}"}),ht=u.createElement("img",{src:"https://latex.codecogs.com/svg.image?\\inline&space;f^{(n)}(0)=\\frac{n!}{(n&plus;1)^{2}}",title:"https://latex.codecogs.com/svg.image?\\inline f^{(n)}(0)=\\frac{n!}{(n+1)^{2}}"}),ft=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n&plus;1)^{2}}}{n!}x^{n}=\\sum_{n=0}^{\\infty}\\frac{x^{n}}{(n&plus;1)^{2}}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n+1)^{2}}}{n!}x^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),bt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}"}),Et=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}\\frac{x^{n}}{(n&plus;1)^{2}}",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{(n+1)^{2}}"}),wt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow"}),yt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow"}),vt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)\\Rightarrow"}),kt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n&plus;1}=\\frac{ln(1-x)}{x}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n+1}=\\frac{ln(1-x)}{x}\\Rightarrow"}),_t=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n&plus;1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n+1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Tt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{(n+1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),It=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n}}{(n&plus;1)^{2}}=\\frac{1}{x}\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{(n+1)^{2}}=\\frac{1}{x}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),St=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\frac{1}{x}\\int_{0}^{x}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x}\\int_{0}^{x}\\frac{ln(1-t)}{t}dt"}),jt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f(x)=\\frac{1}{x}\\int_{0}^{x}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),Ft=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{\\pi^{2}}{6}",title:"\\frac{\\pi^{2}}{6}"}),zt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-\\frac{\\pi^{2}}{6}",title:"-\\frac{\\pi^{2}}{6}"}),Pt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;1=-1",title:"1=-1"}),Ct=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)"}),Bt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{1}{1-t}",title:"\\frac{1}{1-t}"}),Rt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;0",title:"0"}),qt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;t",title:"t"}),$t=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-ln(1-t)",title:"-ln(1-t)"}),Mt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;ln(1-t)",title:"ln(1-t)"}),At=o.div`
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;
    background: white;
    border-radius: 20px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Ot=o.div`
    color: white;
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Lt=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog Post 1")),u.createElement(Ot,null,u.createElement("h1",null,"A bizarre way of evaluating infinite series"),u.createElement("br",null),u.createElement("h3",null,"Posted on July 4th, 2021 by Soroush Saberan")),u.createElement(At,null,u.createElement(u.Fragment,null,u.createElement("p",null,"Given a function ",nt," that is infinitely differentiable around a point ",at,", we can derive the Taylor expansion of ",nt," around ",at," ","as follows:"),u.createElement("br",null),u.createElement("p",null,rt),u.createElement("br",null),u.createElement("p",null,"However, is the reverse also possible to derive? In other words, given an infinite series ",it,", can we find a function ",nt," such that the Taylor expansion of ",nt," around some infinitely differentiable point ",at," is ",it,"? If this is possible, we might be able to use the resulting function to evaluate ",it,"."),u.createElement("br",null),u.createElement("p",null,"When investigating this, I decided to use this idea to attempt to solve the famous Basel problem in a new, bizarre way. First proposed in 1650, and solved by Leonhard Eulor in 1734",tt,", the Basel problem asks to evaluate the following:"),u.createElement("br",null),u.createElement("p",null,ot),u.createElement("br",null),u.createElement("p",null,"Lets call this infinite sum ",it,". So if we treat ",it," as a Taylor expansion of some unknown function ",nt,", then we can write each term in ",it," as follows:"),u.createElement("br",null),u.createElement("p",null,ct),u.createElement("br",null),u.createElement("p",null,"Our choice for ",st," and ",at," is arbitrary, so lets choose values that simplify the problem. If we let ",ut," and ",lt,", we get the following:"),u.createElement("br",null),u.createElement("p",null,mt),u.createElement("br",null),u.createElement("p",null,"Rearranging the terms to isolate ",dt," gives us:"),u.createElement("br",null),u.createElement("p",null,pt),u.createElement("br",null),u.createElement("p",null,"So given the requirement above, what is ",nt,"?"),u.createElement("br",null),u.createElement("p",null,"If you take the Taylor expansion of ",nt," centered around ",gt,", you get the following:"),u.createElement("br",null),u.createElement("p",null,xt),u.createElement("br",null),u.createElement("p",null,"Substituting for ",ht," yields:"),u.createElement("br",null),u.createElement("p",null,ft),u.createElement("br",null),u.createElement("p",null,"Now use the formula, ",bt,". We want to manipulate the left side of this equation until it becomes ",Et,". Then whatever is on the right side will be ",nt,":"),u.createElement("br",null),u.createElement("p",null,wt),u.createElement("br",null),u.createElement("p",null,yt),u.createElement("br",null),u.createElement("p",null,vt),u.createElement("br",null),u.createElement("p",null,kt),u.createElement("br",null),u.createElement("p",null,_t),u.createElement("br",null),u.createElement("p",null,Tt),u.createElement("br",null),u.createElement("p",null,It),u.createElement("br",null),u.createElement("p",null,"So we get that"),u.createElement("br",null),u.createElement("p",null,St),u.createElement("br",null),u.createElement("p",null,"is the value for ",nt," when ",ut," we were looking for, thus showing that it is possible to derive a function from its Taylor expansion for ",u.createElement("i",null,"some")," series ",it," around ",u.createElement("i",null,"some")," ","infinitely differentiable point (in this case ",lt,")."),u.createElement("br",null),u.createElement("p",null,"Except for one not-so-minor detail..."),u.createElement("br",null),u.createElement("p",null,"Assuming I did everything right, if we plug ",ut," into"," ",jt,", we should expect to get the answer to the Basel problem, which was confirmed to be ",Ft," by Leonhard Eulor in 1734",tt,". However, doing so yields"," ",zt," for whatever reason, meaning I made a mistake in my math somewhere (or that ",Pt," haha). Maybe someday I will revisit this and find where I went wrong."),u.createElement("br",null),u.createElement("hr",null),u.createElement("br",null),u.createElement("p",null,u.createElement("strong",null,"Update on July 18th, 2021:")," After reading this blog post, Khristrian Decastro has pointed out that my mistake was in the step where I say:"),u.createElement("br",null),u.createElement("p",null,yt),u.createElement("br",null),u.createElement("p",null,Ct),u.createElement("br",null),u.createElement("p",null,"The integral of ",Bt," from ",Rt," to ",st," with respect to ",qt," ","is actually equal to ",$t,", ",u.createElement("i",null,"not")," ",Mt,". This is where the erronious negative sign came from in my solution to the Basel problem."))));const Nt=o.img`
    display: block;
    margin: auto;
    margin-bottom: 20px;
    max-width: 60rem;
    padding: 40px 60px;
    background: white;
    border-radius: 20px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Dt=o.div`
    color: white;
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Ht=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog Post 2")),u.createElement(Dt,null,u.createElement("h1",null,"Game Theory Meets Machine Learning: Interpreting Models with Shapley Values"),u.createElement("br",null),u.createElement("h3",null,"Posted on January 29th, 2024 by Soroush Saberan")),u.createElement(Nt,{src:"/assets/page1.a4ce300e.jpg",title:"Page 1",tabIndex:0}),u.createElement(Nt,{src:"/assets/page2.3fc9f89a.jpg",title:"Page 2",tabIndex:0}),u.createElement(Nt,{src:"/assets/page3.1b7659a7.jpg",title:"Page 3",tabIndex:0}),u.createElement(Nt,{src:"/assets/page4.1c77bf97.jpg",title:"Page 4",tabIndex:0}),u.createElement(Nt,{src:"/assets/page5.0cb4b5ca.jpg",title:"Page 5",tabIndex:0}));function Wt(){return u.createElement(F,null,u.createElement(V,null),u.createElement(G,null),u.createElement(W,null),u.createElement(z,null,u.createElement(P,{path:"/",to:"/home",exact:!0,component:se}),u.createElement(C,{path:"/home",exact:!0,component:se}),u.createElement(C,{path:"/blog",exact:!0,component:ke}),u.createElement(C,{path:"/projects",exact:!0,component:_e}),u.createElement(C,{path:"/resume",exact:!0,component:Me}),u.createElement(C,{path:"/contact",exact:!0,component:et}),u.createElement(C,{path:"/blog/1",exact:!0,component:Lt}),u.createElement(C,{path:"/blog/2",exact:!0,component:Ht})))}B.render(u.createElement(Wt,null),document.getElementById("root"));
