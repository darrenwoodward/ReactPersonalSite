(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{12:function(e,a,t){},22:function(e,a,t){e.exports=t(37)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(20),r=t.n(c),s=t(17),i=(t(27),t(1)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=o.includes(c)?c:o[0],u=m.includes(r)?r:m[0];return l.a.createElement(i.b,{className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(33);var b=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),m=o[0],b=o[1],E=function(){return c(!1)},p=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:E},"TRVL",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:E},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:E},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:E},"Products")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:E},"Sign Up"))),m&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))},E=(t(12),t(7)),p=t(8),v=t(10),f=t(9),d=(t(34),function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:this.props.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":this.props.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:this.props.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},this.props.text)))))}}]),t}(l.a.Component)),h=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Availible Conversations"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(d,{src:"images/img-Me.jpeg",text:"Learn a little bit about who I am",label:"The Basics",path:"/services"}),l.a.createElement(d,{src:"images/img-9.jpg",text:"Discover how I was once a VP and CEO at the same time",label:"Work Experience",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(d,{src:"images/img-2.jpg",text:"Check out a few of the projects that I have worked on",label:"Previous Work",path:"/services"}),l.a.createElement(d,{src:"images/img-3.jpg",text:"I have many hobbies and I am very passionate about them. Maybe we even have a few in common",label:"Intrests & Hobbies",path:"/services"})))))}}]),t}(l.a.Component),k=(t(35),function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Hey, I'm Darren"),l.a.createElement("p",null,"Thanks for meeting me here"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"Stay awhile and chat"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:console.log("hey")},"Oh, I actually left my oven on")))}}]),t}(l.a.Component)),g=(t(36),function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"TRVL",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"TRVL \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))}}]),t}(l.a.Component));var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(h,null),l.a.createElement(g,null))},y=t(2);function _(){return l.a.createElement("h1",{className:"services"},"SERVICES")}function w(){return l.a.createElement("h1",{className:"products"},"PRODUCTS")}function j(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(b,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/",exact:!0,component:N}),l.a.createElement(y.a,{path:"/services",component:_}),l.a.createElement(y.a,{path:"/products",component:w}),l.a.createElement(y.a,{path:"/sign-up",component:j}))))};r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3a25ccfa.chunk.js.map