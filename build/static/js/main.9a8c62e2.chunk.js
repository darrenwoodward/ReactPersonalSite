(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/img-9.523a89f6.jpg"},,,,,,,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/IMG-Me.3955fb68.JPEG"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/video-1.df15c3e1.mp4"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(21),r=t.n(l),s=t(18),i=(t(28),t(1)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,r=e.buttonSize,s=o.includes(l)?l:o[0],u=m.includes(r)?r:m[0];return c.a.createElement(i.b,{className:"btn-mobile"},c.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(34);var b=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),m=o[0],b=o[1],E=function(){return l(!1)},p=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:E},"TRVL",c.a.createElement("i",{className:"fab fa-typo3"})),c.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},c.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/",className:"nav-links",onClick:E},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:E},"Services")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:E},"Products")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:E},"Sign Up"))),m&&c.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))},E=(t(12),t(7)),p=t(8),f=t(10),d=t(9),v=(t(35),function(e){Object(f.a)(t,e);var a=Object(d.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"cards__item"},c.a.createElement(i.b,{className:"cards__item__link",to:this.props.path},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":this.props.label},c.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:this.props.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},this.props.text)))))}}]),t}(c.a.Component)),N=function(e){Object(f.a)(n,e);var a=Object(d.a)(n);function n(){return Object(E.a)(this,n),a.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"cards"},c.a.createElement("h1",null,"Availible Conversations"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},c.a.createElement(v,{src:t(36),text:"Learn a little bit about who I am",label:"The Basics",path:"/services"}),c.a.createElement(v,{src:t(15),text:"Discover how I was once a VP and CEO at the same time",label:"Work Experience",path:"/services"})),c.a.createElement("ul",{className:"cards__items"},c.a.createElement(v,{src:t(15),text:"Check out a few of the projects that I have worked on",label:"Previous Work",path:"/services"}),c.a.createElement(v,{src:t(15),text:"I have many hobbies and I am very passionate about them. Maybe we even have a few in common",label:"Intrests & Hobbies",path:"/services"})))))}}]),n}(c.a.Component),h=(t(37),function(e){Object(f.a)(n,e);var a=Object(d.a)(n);function n(){return Object(E.a)(this,n),a.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"hero-container"},c.a.createElement("video",{src:t(38),autoPlay:!0,loop:!0,muted:!0}),c.a.createElement("h1",null,"Hey, I'm Darren"),c.a.createElement("p",null,"Thanks for meeting me here"),c.a.createElement("div",{className:"hero-btns"},c.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"Stay awhile and chat"),c.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:console.log("hey")},"Oh, I actually left my oven on")))}}]),n}(c.a.Component)),k=(t(39),function(e){Object(f.a)(t,e);var a=Object(d.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("section",{className:"footer-subscription"},c.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),c.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),c.a.createElement("div",{className:"input-areas"},c.a.createElement("form",null,c.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),c.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),c.a.createElement("div",{className:"footer-links"},c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{className:"footer-link-items"},c.a.createElement("h2",null,"About Us"),c.a.createElement(i.b,{to:"/sign-up"},"How it works"),c.a.createElement(i.b,{to:"/"},"Testimonials"),c.a.createElement(i.b,{to:"/"},"Careers"),c.a.createElement(i.b,{to:"/"},"Investors"),c.a.createElement(i.b,{to:"/"},"Terms of Service")),c.a.createElement("div",{className:"footer-link-items"},c.a.createElement("h2",null,"Contact Us"),c.a.createElement(i.b,{to:"/"},"Contact"),c.a.createElement(i.b,{to:"/"},"Support"),c.a.createElement(i.b,{to:"/"},"Destinations"),c.a.createElement(i.b,{to:"/"},"Sponsorships"))),c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{className:"footer-link-items"},c.a.createElement("h2",null,"Videos"),c.a.createElement(i.b,{to:"/"},"Submit Video"),c.a.createElement(i.b,{to:"/"},"Ambassadors"),c.a.createElement(i.b,{to:"/"},"Agency"),c.a.createElement(i.b,{to:"/"},"Influencer")),c.a.createElement("div",{className:"footer-link-items"},c.a.createElement("h2",null,"Social Media"),c.a.createElement(i.b,{to:"/"},"Instagram"),c.a.createElement(i.b,{to:"/"},"Facebook"),c.a.createElement(i.b,{to:"/"},"Youtube"),c.a.createElement(i.b,{to:"/"},"Twitter")))),c.a.createElement("section",{className:"social-media"},c.a.createElement("div",{className:"social-media-wrap"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(i.b,{to:"/",className:"social-logo"},"TRVL",c.a.createElement("i",{className:"fab fa-typo3"}))),c.a.createElement("small",{className:"website-rights"},"TRVL \xa9 2020"),c.a.createElement("div",{className:"social-icons"},c.a.createElement(i.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},c.a.createElement("i",{className:"fab fa-facebook-f"})),c.a.createElement(i.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},c.a.createElement("i",{className:"fab fa-instagram"})),c.a.createElement(i.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},c.a.createElement("i",{className:"fab fa-youtube"})),c.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},c.a.createElement("i",{className:"fab fa-twitter"})),c.a.createElement(i.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},c.a.createElement("i",{className:"fab fa-linkedin"}))))))}}]),t}(c.a.Component));var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(N,null),c.a.createElement(k,null))},y=t(2);function _(){return c.a.createElement("h1",{className:"services"},"SERVICES")}function w(){return c.a.createElement("h1",{className:"products"},"PRODUCTS")}function S(){return c.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{basename:"/ReactPersonalSite"},c.a.createElement(b,null),c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/",exact:!0,component:g}),c.a.createElement(y.a,{path:"/services",component:_}),c.a.createElement(y.a,{path:"/products",component:w}),c.a.createElement(y.a,{path:"/sign-up",component:S}))))};r.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9a8c62e2.chunk.js.map