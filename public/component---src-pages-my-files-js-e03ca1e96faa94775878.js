(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),l=a(136);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"My Site's Files"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"relativePath"),r.a.createElement("th",null,"prettySize"),r.a.createElement("th",null,"extension"),r.a.createElement("th",null,"birthTime"))),r.a.createElement("tbody",null,t.allFile.edges.map(function(e,t){var a=e.node;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a.relativePath),r.a.createElement("td",null,a.prettySize),r.a.createElement("td",null,a.extension),r.a.createElement("td",null,a.birthTime))})))))};var i="3953592347"},134:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},135:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(133),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var o=a(134),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},136:function(e,t,a){"use strict";var n=a(137),r=a(0),l=a.n(r),i=a(135),u=a(140);a(139);t.a=function(e){var t=e.children;return l.a.createElement(i.StaticQuery,{query:"3892401927",render:function(e){return l.a.createElement("body",null,l.a.createElement(u.Section,{large:!0,clasName:"hero is-fullheight",id:"bg"},l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar is-transparent nav-top nav_bg"},l.a.createElement("div",{clasName:"navbar-brand"},l.a.createElement("p",{className:"has-text-white title is-4"},"BeiBei-blog"))),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"title has-text-white center"},l.a.createElement("p",{className:"layout_title_style center"},"李贝贝"))))),t)},data:n})}},137:function(e){e.exports={data:{site:{siteMetadata:{title:"beibei-blog"}}}}},138:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(46),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},139:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-my-files-js-e03ca1e96faa94775878.js.map