(this["webpackJsonpreact-bit-people"]=this["webpackJsonpreact-bit-people"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),n=i(15),r=i.n(n),o=i(8),c=(i(22),i(10)),u=(i(23),i(24),i(25),function(e){var t=e.indexOf("@")-3,i=[],a=0;return e.split("").forEach((function(e){a<=2||a>=t?i.push(e):3===a&&i.push("..."),a++})),i.join("")}),l=function(e){var t=new Date(e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()+"."},m=i(0),d=function(e){var t=e.user,i=e.index,a="",s="";"female"===t.gender&&(s="female"),0===i&&(a="first");var n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(m.jsxs)("div",{className:"list ".concat(s," ").concat(a),children:[Object(m.jsx)("div",{className:"picture",children:Object(m.jsx)("img",{src:t.picture.medium,alt:"profile"})}),Object(m.jsxs)("div",{className:"data",children:[Object(m.jsxs)("p",{children:[n(t.name.first)," ",n(t.name.last)]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})," email: ",u(t.email)]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"fa fa-birthday-cake","aria-hidden":"true"})," ",l(t.dob.date)]})]})]})},p=(i(27),function(e){var t=e.user,i="";return"female"===t.gender&&(i="female"),Object(m.jsxs)("div",{className:"grid ".concat(i," mt-5"),children:[Object(m.jsx)("div",{className:"gridpicture",children:Object(m.jsx)("img",{src:t.picture.large,alt:"profile"})}),Object(m.jsxs)("div",{className:"griddata",children:[Object(m.jsx)("p",{className:"name",children:t.name.first}),Object(m.jsx)("p",{className:"email",children:u(t.email)}),Object(m.jsxs)("p",{children:["Birth date: ",l(t.dob.date)]})]})]})}),b=i.p+"static/media/loadingScreen.d2f7f41c.gif",h=i.p+"static/media/noUsersImage.aa51650e.png",j=function(e){var t=e.gridView,i=e.users,a=e.inputValue,s=0,n=0;return i&&i.forEach((function(e){"female"===e.gender?n++:s++})),i.length<14&&a.length<1?Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"loadingImage",src:b,alt:"loading..."})}):i.length<1&&a.length>0?Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"noUsersImage",src:h,alt:"no users..."}),Object(m.jsx)("p",{className:"noMatch",children:"We couldnt't find any people matching your search"})]}):t?Object(m.jsxs)("div",{className:"gridmain",children:[Object(m.jsxs)("p",{className:"genderdata mb-0",children:["Male: ",s," Female: ",n]}),i.map((function(e,t){return Object(m.jsx)(p,{user:e,index:t},t)}))]}):Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("p",{className:"genderdata mb-0 ",children:["Male: ",s," Female: ",n]}),i.map((function(e,t){return Object(m.jsx)(d,{user:e,index:t},t)}))]})},f=(i(28),function(e){var t=e.gridView,i=e.onRefresh,a=e.viewChange,s=Object(m.jsx)("i",{className:"gridButton fas fa-grip-horizontal text-light "});return t&&(s=Object(m.jsx)("i",{className:"fas fa-list"})),Object(m.jsx)("header",{children:Object(m.jsx)("nav",{className:"navbar navbar-light header fixed-top",children:Object(m.jsxs)("div",{className:"w-75 container-fluid",children:[Object(m.jsx)(o.b,{className:"bitPeople",to:"/home",children:Object(m.jsx)("span",{className:"navbar-brand mb-0 ms-5 fw-bold fs-1 text-light ",children:"Bit People"})}),Object(m.jsxs)("div",{className:"links",children:[Object(m.jsxs)(o.b,{to:"/about",className:" about text-light m-3 text-light",children:[" ","About"," "]}),Object(m.jsx)("button",{onClick:i,children:Object(m.jsx)("i",{className:"refreshButton fas fa-redo m-3 text-light"})}),Object(m.jsx)("button",{className:"viewChangeButton",onClick:a,children:s})]})]})})})}),g=(i(34),function(e){var t=Math.floor((new Date-e)/1e3),i=t/31536e3;return i>1?" now":(i=t/2592e3)>1?Math.floor(i)+" months ago":(i=t/86400)>1?Math.floor(i)+" days ago":(i=t/3600)>1?Math.floor(i)+" hours ago":(i=t/60)>1?Math.floor(i)+" minutes ago":Math.floor(t)+" seconds ago"}),x=function(){var e=new Date(localStorage.getItem("lastModBitPeople"));return Object(m.jsx)("footer",{className:" navbar text-light fixed-bottom footerColor row ",children:Object(m.jsxs)("div",{className:"w-75 container-fluid",children:[Object(m.jsx)("div",{className:"bitCopyright text-start p-1 mx-5",children:"\xa9 2021 Copyright BIT"}),Object(m.jsxs)("div",{className:"lastModifiedDiv text-end p-1 mx-5 ",children:["Last update: ",g(e)]})]})})},v=i(2),O=(i(35),function(){return Object(m.jsxs)("div",{className:"aboutPage",children:[Object(m.jsx)("h1",{className:"aboutH1",children:"About"}),Object(m.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut enim sequi blanditiis ducimus iure, harum ullam quam iusto fugiat veritatis at repellendus nisi a itaque reprehenderit ab commodi repellat distinctio neque inventore? Cum, laborum? Iure quae maxime illum neque alias inventore veniam recusandae, facere praesentium aut sequi id saepe aliquam soluta magnam ut quasi, libero porro ad ullam cumque necessitatibus et vitae nesciunt! Dolorem incidunt velit omnis ratione dolore eos deleniti ducimus assumenda quia maiores! Facilis nisi ab dolorem hic officiis impedit rem et sequi deleniti exercitationem corporis veniam odio, perspiciatis numquam molestiae ipsam porro. Enim expedita fuga provident! Illo eveniet itaque fugiat a ipsam quidem fuga repudiandae vitae atque nemo accusamus tenetur adipisci sit, dignissimos porro dolore at quia iste et sunt ipsa, vel officia optio saepe? Rem a incidunt molestiae, blanditiis ipsam magnam enim hic omnis debitis sint quam quasi, sit veniam dolorem suscipit voluptatibus fugiat totam repudiandae molestias atque repellat aspernatur obcaecati ipsa necessitatibus. Cum quae necessitatibus natus pariatur veniam animi odit voluptatibus autem atque provident recusandae quisquam a repellat beatae quas qui neque, quia quasi aperiam voluptate, voluptatem accusantium dolores laboriosam? Quis itaque unde ad, eveniet laboriosam est aperiam eaque. Fugiat explicabo soluta atque beatae deserunt."}),Object(m.jsx)("h3",{className:"whatWeDo",children:"What we do"}),Object(m.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis perspiciatis in minima, consequatur reiciendis atque sequi deleniti accusamus voluptatum fugit, voluptates rem hic et blanditiis debitis? Sapiente, accusantium quas aliquid maxime est velit quia dicta quasi iure aperiam, quisquam consequatur tempora, dolorem atque natus odit. Nemo facere aut expedita. Reprehenderit minima inventore perspiciatis quae! Excepturi, voluptates. Eveniet explicabo ipsum animi nihil dolore est maiores natus pariatur fuga sit temporibus, officia vel quisquam adipisci aspernatur aliquam esse fugit! Hic quas cupiditate nemo, molestiae reprehenderit consectetur quibusdam ea corporis, eum eius non laudantium facilis, ducimus rerum. Quidem ipsa excepturi, necessitatibus cum praesentium modi explicabo ea. Odit quidem est voluptatibus ut omnis corrupti, atque error nam natus et praesentium, ipsa in blanditiis. Alias minima perspiciatis veniam autem optio sed, nulla dignissimos, ullam consectetur laboriosam at fugiat earum enim? Saepe iure neque deserunt temporibus repellat quis nostrum sunt ex, voluptatibus hic necessitatibus reiciendis inventore maiores consequatur! Optio maxime suscipit ipsa! Possimus quis officiis, sapiente porro in veniam maxime, debitis praesentium nostrum aliquid magni quo. Excepturi voluptate itaque odit ratione impedit autem aut eum alias ad ipsum, numquam commodi molestias labore. Mollitia necessitatibus quo, consectetur neque quasi fuga, dolorum ex accusamus placeat ipsum soluta. "})]})}),q=(i(36),function(e){var t=e.onChange,i=e.inputValue;return Object(m.jsxs)("div",{className:"mx-5",children:[Object(m.jsx)("i",{className:"fas fa-search"}),Object(m.jsx)("input",{className:"inputField",value:i,onChange:t,id:"searchInput",placeholder:"Search for ...",type:"text"})]})}),N=function(){return fetch("https://randomuser.me/api/?results=15").then((function(e){return e.json()})).then((function(e){return e.results}))};var y=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)([]),r=Object(c.a)(n,2),o=r[0],u=r[1],l=Object(a.useState)(""),d=Object(c.a)(l,2),p=d[0],b=d[1],h=Object(a.useState)([]),g=Object(c.a)(h,2),y=g[0],w=g[1];Object(a.useEffect)((function(){null===localStorage.getItem("reactBitPeopleProject")?N().then((function(e){u(e),w(e),localStorage.setItem("reactBitPeopleProject",JSON.stringify(e))})):(u(JSON.parse(localStorage.getItem("reactBitPeopleProject"))),w(JSON.parse(localStorage.getItem("reactBitPeopleProject"))))}),[]);var I=function(){localStorage.removeItem("reactBitPeopleProject"),N().then((function(e){u(e),w(e),b(""),localStorage.setItem("reactBitPeopleProject",JSON.stringify(e)),localStorage.setItem("lastModBitPeople",document.lastModified)}))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{gridView:i,onRefresh:I,viewChange:function(){s(!i)}}),Object(m.jsx)(q,{inputValue:p,onChange:function(e){b(e.target.value);var t=o.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).toLowerCase().includes(e.target.value.toLowerCase())}));w(t)}}),Object(m.jsxs)(v.d,{children:[Object(m.jsx)(v.b,{exact:!0,path:"/home",component:function(){return Object(m.jsx)(j,{gridView:i,users:y,inputValue:p})}}),Object(m.jsx)(v.b,{exact:!0,path:"/about",component:O}),Object(m.jsx)(v.a,{from:"/",to:"/home"})]}),Object(m.jsx)(x,{onRefresh:I})]})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(y,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d33adbe6.chunk.js.map