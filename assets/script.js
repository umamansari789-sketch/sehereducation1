
function scrollToSection(id){
  var el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}
/* === POPUP === */
setTimeout(function(){document.getElementById('popupBg').classList.add('show')},4000);
function closePopup(){document.getElementById('popupBg').classList.remove('show')}
function bgClick(e) {
  // agar user background pe click kare (content pe nahi)
  if (e.target.id === "popupBg") {
    closePopup();
  }
}
function submitPopup(){
  var n=document.getElementById('pName').value.trim(),p=document.getElementById('pPhone').value.trim();
  if(!n||!p){alert('Please fill required fields.');return}
  document.getElementById('popupFormWrap').style.display='none';
  document.getElementById('popupSuccess').classList.add('show');
  setTimeout(closePopup,3000)
}
/* === MOBILE NAV === */
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open')}
function closeMob(){document.getElementById('mobMenu').classList.remove('open')}
function toggleSub(el){el.parentElement.classList.toggle('open-sub')}
/* === COUNSELLOR SELECTION === */
function selC(name,init,avClass,spec,cardId,bg){
  document.querySelectorAll('.ccard').forEach(function(c){c.classList.remove('selected')});
  document.getElementById(cardId).classList.add('selected');
  var bar=document.getElementById('selBar');bar.classList.add('show');
  var av=document.getElementById('selAvEl');
  av.textContent=init;av.className='sel-av-s '+avClass;av.style.background=bg;
  document.getElementById('selNameEl').textContent=name;
  document.getElementById('selSpecEl').textContent=spec;
  document.getElementById('bookingForm').scrollIntoView({behavior:'smooth',block:'start'});
}
function clearC(){
  document.getElementById('selBar').classList.remove('show');
  document.querySelectorAll('.ccard').forEach(function(c){c.classList.remove('selected')});
}
/* === BOOKING === */
function submitBooking(){
  var n=document.getElementById('bName').value.trim(),e=document.getElementById('bEmail').value.trim(),p=document.getElementById('bPhone').value.trim(),c=document.getElementById('bCourse').value;
  if(!n){alert('Please enter your full name.');return}
  if(!e){alert('Please enter your email.');return}
  if(!p){alert('Please enter your phone number.');return}
  if(!c){alert('Please select your course interest.');return}
  var cn=document.getElementById('selNameEl').textContent||'Any Counsellor';
  alert('✅ Booking Confirmed!\n\nThank you, '+n+'!\nYour free counselling session with '+cn+' has been scheduled.\nA confirmation email will be sent to '+e+' shortly.');
}
function submitInq(){
  var n=document.getElementById('iqName').value.trim(),e=document.getElementById('iqEmail').value.trim();
  if(!n||!e){alert('Please fill in required fields.');return}
  alert('✅ Enquiry Submitted!\n\nThank you, '+n+'! Our team will reply to '+e+' within 24 hours.');
  document.getElementById('iqName').value='';document.getElementById('iqEmail').value='';
}
/* === UNI FILTER === */
function filterU(btn,c){
  document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('active')});
  btn.classList.add('active');
  document.querySelectorAll('.ucard').forEach(function(card){card.style.display=(c==='all'||card.dataset.c===c)?'block':'none'});
}
/* === CHATBOT === */
var botR={
  'uk':'Great choice! 🇬🇧 The UK offers world-class education at Oxford, Cambridge, Manchester and 80+ more. Book a free session with our UK specialist!',
  'canada':'Canada offers PR pathways and great scholarships! 🇨🇦 We partner with 65+ Canadian universities. Book a free counselling session!',
  'australia':'Australia has 2–6 year post-study work rights! 🇦🇺 Monash, Sydney, Melbourne are among our partners. Let\'s connect!',
  'visa':'We have a 98% visa success rate! ✅ Our experts handle all documentation and interview prep. Book a free session!',
  'scholarship':'We help students secure ₹5–50 lakh scholarships! 🎓 Book a free session and we\'ll match scholarships to your profile.',
  'ielts':'We offer structured IELTS coaching with experienced trainers. Most students improve 1–2 bands in 6–8 weeks!',
  'book':'You can book a free session by clicking the "Book Free Session" button in the menu, or call us at +91 98765 43210!',
  'fees':'Fees vary by country: UK (₹18–60L/yr), Canada (₹15–50L/yr), Germany (often FREE!). Our counsellors give detailed breakdowns.',
  'germany':'Germany has ZERO tuition fees at many public universities! 🇩🇪 TU Munich and Humboldt are our top partners.',
  'default':'Thanks for reaching out! 😊 Our expert counsellors can give you personalised guidance. Book a FREE session or call +91 98765 43210.'
};
function toggleChat(){var w=document.getElementById('chatWin'),b=document.getElementById('chatToggleBtn'),o=w.classList.toggle('open');b.textContent=o?'✕':'💬'}
function addMsg(t,r){var m=document.getElementById('chatMsgs'),d=document.createElement('div');d.className='cmsg '+r;d.textContent=t;m.appendChild(d);m.scrollTop=m.scrollHeight}
function qr(t){addMsg(t,'user');setTimeout(function(){var l=t.toLowerCase(),rep=botR['default'];for(var k in botR){if(l.indexOf(k)!==-1){rep=botR[k];break}}addMsg(rep,'bot')},700)}
function sendMsg(){var i=document.getElementById('chatInp'),t=i.value.trim();if(!t)return;addMsg(t,'user');i.value='';setTimeout(function(){var l=t.toLowerCase(),rep=botR['default'];for(var k in botR){if(l.indexOf(k)!==-1){rep=botR[k];break}}addMsg(rep,'bot')},700)}
/* === SCROLL ANIMATIONS === */
var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in')})},{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(function(el){obs.observe(el)});
/* === MIN DATE === */
(function(){var t=new Date(),d=String(t.getDate()).padStart(2,'0'),m=String(t.getMonth()+1).padStart(2,'0'),y=t.getFullYear(),el=document.getElementById('bDate');if(el)el.min=y+'-'+m+'-'+d})();



/* === BLOG FILTER === */
function filterBlog(btn,cat){
  document.querySelectorAll('#blogFilterRow .fbtn').forEach(function(b){b.classList.remove('active')});
  btn.classList.add('active');
  document.querySelectorAll('.blog-post-card').forEach(function(c){c.style.display=(cat==='all'||c.dataset.cat===cat)?'block':'none'});
}

// window.addEventListener("resize", function () {
//   const mobMenu = document.getElementById("mobMenu");

//   // agar screen badi ho gayi (desktop)
//   if (window.innerWidth > 768) {
//     mobMenu.classList.remove("active"); // ya jo class tum use kar rahe ho
//   }
// });

function toggleMob() {
  document.getElementById("mobMenu").classList.toggle("active");
}

function closeMob() {
  document.getElementById("mobMenu").classList.remove("active");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMob();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-menu a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  // Desktop menu
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    let href = link.getAttribute("href");

    // sirf file links check karo (ignore #)
    if (href && !href.startsWith("#")) {
      if (href === currentPage) {
        link.classList.add("active");
      }
    }
  });

  // Mobile menu
  const mobLinks = document.querySelectorAll(".mob-menu a");

  mobLinks.forEach(link => {
    let href = link.getAttribute("href");

    if (href && !href.startsWith("#")) {
      if (href === currentPage) {
        link.classList.add("active");
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    const links = item.querySelectorAll("a");

    links.forEach(link => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      // agar child link match kare
      if (href === currentPage) {
        link.classList.add("active");

        // 🔥 parent nav-item ko bhi active karo
        item.classList.add("active");
      }
    });
  });

  // Mobile menu
  const mobLinks = document.querySelectorAll(".mob-menu a");

  mobLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});