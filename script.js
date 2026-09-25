/* =========================================================
   CMG WEBSITE — INTERACTIONS
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

}


/* =========================================================
   NAV DROPDOWNS
========================================================= */

const dropdownButtons = document.querySelectorAll(".nav-drop-button");

dropdownButtons.forEach(button => {

  button.addEventListener("click", event => {

    event.stopPropagation();

    const parent = button.closest(".nav-dropdown");

    document.querySelectorAll(".nav-dropdown").forEach(dropdown => {

      if (dropdown !== parent) {
        dropdown.classList.remove("open");
      }

    });

    parent.classList.toggle("open");

  });

});


document.addEventListener("click", () => {

  document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
    dropdown.classList.remove("open");
  });

});


/* =========================================================
   STORY EXPERIENCE
========================================================= */

const storyData = {

  building: {
    title: "YOU'RE BUILDING SOMETHING.",
    text: "At this stage, the decisions you make now can determine how easily the business scales later.",
    path: "GROWTH READINESS",
    pathText: "Let's examine the structure underneath the opportunity before growth creates unnecessary complexity."
  },

  growing: {
    title: "YOU'RE GROWING.",
    text: "Growth can expose weaknesses that were invisible when the business was smaller.",
    path: "GROWTH IMPACT MODEL",
    pathText: "Let's look at capacity, owner dependency, people, and operating systems."
  },

  stuck: {
    title: "YOU FEEL STUCK.",
    text: "When progress slows, the problem is often somewhere beneath the most visible symptom.",
    path: "BUSINESS DIAGNOSTIC",
    pathText: "Let's identify where the system may be creating friction."
  },

  changing: {
    title: "THINGS ARE CHANGING.",
    text: "Change creates pressure across people, processes, leadership, and strategy.",
    path: "CHANGE & REALIGNMENT",
    pathText: "Let's identify what needs to move, what needs to stay, and where the organization is misaligned."
  },

  struggling: {
    title: "YOU'RE STRUGGLING.",
    text: "When the business feels harder than it should, clarity needs to come before another solution.",
    path: "OPERATIONAL IMPACT MODEL",
    pathText: "Let's examine where time, money, and organizational capacity may be leaking."
  },

  reinventing: {
    title: "YOU'RE REINVENTING.",
    text: "Reinvention requires understanding what the business has been, what it is becoming, and what must change.",
    path: "STRATEGIC REALIGNMENT",
    pathText: "Let's map the gap between the current business and the one you're trying to build."
  },

  "looking-ahead": {
    title: "YOU'RE LOOKING AHEAD.",
    text: "The strongest time to examine the business is often before something breaks.",
    path: "GROWTH READINESS",
    pathText: "Let's identify opportunities and risks before they become operational problems."
  },

  exploring: {
    title: "YOU'RE EXPLORING.",
    text: "You don't need to have a problem to start understanding your business differently.",
    path: "CMG DISCOVERY",
    pathText: "Explore the CMG system and find the area that interests you most."
  }

};


const storyButtons = document.querySelectorAll("[data-story]");
const storyResult = document.getElementById("storyResult");

const storyResultTitle = document.getElementById("storyResultTitle");
const storyResultText = document.getElementById("storyResultText");
const storyPathTitle = document.getElementById("storyPathTitle");
const storyPathText = document.getElementById("storyPathText");

const openSimulator = document.getElementById("openSimulator");


storyButtons.forEach(button => {

  button.addEventListener("click", () => {

    const story = button.dataset.story;
    const data = storyData[story];

    if (!data) return;

    storyResultTitle.textContent = data.title;
    storyResultText.textContent = data.text;

    storyPathTitle.textContent = data.path;
    storyPathText.textContent = data.pathText;

    storyResult.classList.remove("hidden");

    storyResult.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


if (openSimulator) {

  openSimulator.addEventListener("click", () => {

    window.location.href = "business-impact.html";

  });

}


/* =========================================================
   BUSINESS IMPACT SIMULATOR
========================================================= */

const revenue = document.getElementById("revenue");
const employees = document.getElementById("employees");
const ownerHours = document.getElementById("ownerHours");
const turnover = document.getElementById("turnover");
const efficiency = document.getElementById("efficiency");

const revenueValue = document.getElementById("revenueValue");
const employeesValue = document.getElementById("employeesValue");
const ownerHoursValue = document.getElementById("ownerHoursValue");
const turnoverValue = document.getElementById("turnoverValue");
const efficiencyValue = document.getElementById("efficiencyValue");

const impactValue = document.getElementById("impactValue");
const ownerResult = document.getElementById("ownerResult");
const efficiencyResult = document.getElementById("efficiencyResult");
const turnoverResult = document.getElementById("turnoverResult");
const revenueResult = document.getElementById("revenueResult");

const opportunityTitle = document.getElementById("opportunityTitle");
const opportunityText = document.getElementById("opportunityText");


function formatCurrency(value) {

  if (value >= 1000000) {
    return "$" + (value / 1000000).toFixed(2) + "M";
  }

  if (value >= 1000) {
    return "$" + Math.round(value / 1000) + "K";
  }

  return "$" + Math.round(value);

}


function updateSimulator() {

  if (!revenue) return;

  const revenueNum = Number(revenue.value);
  const employeeNum = Number(employees.value);
  const ownerNum = Number(ownerHours.value);
  const turnoverNum = Number(turnover.value);
  const efficiencyNum = Number(efficiency.value);


  revenueValue.textContent = formatCurrency(revenueNum);
  employeesValue.textContent = employeeNum;
  ownerHoursValue.textContent = ownerNum + " hrs";
  turnoverValue.textContent = turnoverNum + "%";
  efficiencyValue.textContent = efficiencyNum + "%";


  /*
    Illustrative model.

    These are intentionally NOT presented as promises
    or guaranteed CMG results.
  */

  const efficiencyGain = (100 - efficiencyNum) * 0.32;

  const modeledImpact = Math.max(
    4,
    Math.min(
      38,
      Math.round(
        7 +
        efficiencyGain * 0.55 +
        Math.min(turnoverNum, 40) * 0.12 +
        Math.min(ownerNum - 40, 40) * 0.08
      )
    )
  );


  const modeledOwnerHours = Math.max(
    25,
    Math.round(ownerNum * (1 - modeledImpact / 100 * 0.35))
  );


  const modeledEfficiency = Math.min(
    94,
    Math.round(
      efficiencyNum +
      (100 - efficiencyNum) * 0.35
    )
  );


  const modeledTurnover = Math.max(
    5,
    Math.round(
      turnoverNum * (1 - modeledImpact / 100 * 0.35)
    )
  );


  const modeledRevenue = revenueNum * (1 + modeledImpact / 100);


  impactValue.textContent = modeledImpact + "%";
  ownerResult.textContent = modeledOwnerHours + " hrs";
  efficiencyResult.textContent = modeledEfficiency + "%";
  turnoverResult.textContent = modeledTurnover + "%";
  revenueResult.textContent = formatCurrency(modeledRevenue);


  /*
    Identify the biggest modeled opportunity.
  */

  if (ownerNum >= 65) {

    opportunityTitle.textContent = "OWNER DEPENDENCY";

    opportunityText.textContent =
      "Your inputs suggest that too much of the business may currently depend on your direct involvement. Reducing owner dependency could create meaningful capacity.";

  } else if (efficiencyNum < 50) {

    opportunityTitle.textContent = "OPERATIONAL EFFICIENCY";

    opportunityText.textContent =
      "Your inputs suggest that operating friction may be limiting capacity. Process and system improvements may create room for the business to perform more efficiently.";

  } else if (turnoverNum >= 35) {

    opportunityTitle.textContent = "TEAM STABILITY";

    opportunityText.textContent =
      "Your turnover level may be creating hidden costs and operational disruption. Leadership, retention, and organizational systems may deserve closer examination.";

  } else if (employeeNum >= 50) {

    opportunityTitle.textContent = "SYSTEMS & SCALE";

    opportunityText.textContent =
      "As organizations grow, informal systems can become bottlenecks. Technology, automation, and operating structure may be the next leverage point.";

  } else {

    opportunityTitle.textContent = "BUSINESS ALIGNMENT";

    opportunityText.textContent =
      "Your inputs suggest several potential improvement areas. A deeper diagnostic would help determine which one should be addressed first.";

  }

}


[
  revenue,
  employees,
  ownerHours,
  turnover,
  efficiency
].forEach(input => {

  if (input) {
    input.addEventListener("input", updateSimulator);
  }

});


updateSimulator();


/* =========================================================
   SIMULATOR → CONTACT
========================================================= */

const simulatorContact = document.getElementById("simulatorContact");

if (simulatorContact) {

  simulatorContact.addEventListener("click", () => {

    document.getElementById("conversation").scrollIntoView({
      behavior: "smooth"
    });

  });

}


/* =========================================================
   FRAMEWORK
========================================================= */

const frameworkData = {

  discover: {
    code: "01",
    title: "DISCOVER",
    text: "Understand the business as it actually operates. We examine people, processes, systems, decisions, resources, and the environment around them.",
    note: "FIND THE SIGNAL BENEATH THE NOISE."
  },

  align: {
    code: "02",
    title: "ALIGN",
    text: "Create clarity around priorities, responsibilities, expectations, and the direction the organization is trying to move.",
    note: "GET THE SYSTEM MOVING IN THE SAME DIRECTION."
  },

  analyze: {
    code: "03",
    title: "ANALYZE",
    text: "Identify patterns, bottlenecks, inefficiencies, risks, opportunities, and the underlying causes behind visible problems.",
    note: "UNDERSTAND WHY THE SYSTEM IS BEHAVING THIS WAY."
  },

  realign: {
    code: "04",
    title: "REALIGN",
    text: "Redesign the elements that are creating friction. People, processes, technology, priorities, and systems are brought back into alignment.",
    note: "CHANGE WHAT NEEDS TO CHANGE."
  },

  execute: {
    code: "05",
    title: "EXECUTE",
    text: "Turn strategy into action. Build the systems, accountability, implementation plan, and measurable outcomes required to move forward.",
    note: "MAKE THE CHANGE REAL."
  }

};


const frameworkStages = document.querySelectorAll(".framework-stage");

const frameworkCode = document.getElementById("frameworkCode");
const frameworkTitle = document.getElementById("frameworkTitle");
const frameworkText = document.getElementById("frameworkText");
const frameworkNote = document.getElementById("frameworkNote");


frameworkStages.forEach(stage => {

  stage.addEventListener("click", () => {

    const key = stage.dataset.stage;
    const data = frameworkData[key];

    if (!data) return;

    frameworkStages.forEach(item => {
      item.classList.remove("active");
    });

    stage.classList.add("active");

    frameworkCode.textContent = data.code;
    frameworkTitle.textContent = data.title;
    frameworkText.textContent = data.text;
    frameworkNote.textContent = data.note;

  });

});


/* =========================================================
   POLL
========================================================= */

const pollButtons = document.querySelectorAll("[data-poll]");
const pollResult = document.getElementById("pollResult");


pollButtons.forEach(button => {

  button.addEventListener("click", () => {

    pollButtons.forEach(item => {
      item.disabled = true;
      item.style.opacity = "0.45";
    });

    button.style.opacity = "1";

    if (pollResult) {
      pollResult.classList.remove("hidden");
    }

  });

});


/* =========================================================
   NEWSLETTER
========================================================= */

/* =========================================================
   PROBLEM CARD INTERACTION
========================================================= */

const problemCards = document.querySelectorAll(".problem-card");

problemCards.forEach(card => {

  card.addEventListener("click", () => {

    const simulatorSection = document.getElementById("simulator");

    if (simulatorSection) {

      simulatorSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// Notebook: the five existing framework stages plus established consulting areas.
const chapters = [["discover","Discover","Understand the business as it actually operates. Examine people, processes, decisions, and the environment around them."],["align","Align","Create clarity around priorities, responsibilities, expectations, and the direction the organization is trying to move."],["analyze","Analyze","Identify patterns, bottlenecks, risks, and the underlying causes behind visible problems."],["realign","Realign","Bring people, processes, technology, priorities, and systems back into alignment."],["execute","Execute","Turn strategy into action with accountability, implementation, and measurable outcomes."],["leadership","Leadership","Build clear direction, consistent expectations, and leadership that creates confidence."],["growth","Growth","Examine capacity, owner dependency, and operating structure to support sustainable growth."],["technology","Technology & systems","Connect technology, automation, and practical digital tools to the way your business works."]];
let chapterIndex = 0;
function showChapter(index) {
 chapterIndex = (index + chapters.length) % chapters.length;
 const [slug,title,copy] = chapters[chapterIndex];
 document.getElementById('chapterTitle').textContent = title;
 document.getElementById('chapterText').textContent = copy;
 document.getElementById('chapterCount').textContent = String(chapterIndex+1).padStart(2,'0') + ' / 08';
 const link=document.getElementById('chapterLink'); link.href='consulting.html#'+slug; link.textContent='Explore '+title+' →';
 document.querySelectorAll('[data-chapter]').forEach((b,i)=>b.setAttribute('aria-pressed',i===chapterIndex));
 const paper=document.getElementById('chapterContent');
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches) paper.animate([{opacity:.2,transform:'perspective(900px) rotateY(-9deg)'},{opacity:1,transform:'perspective(900px) rotateY(0deg)'}],{duration:360,easing:'ease-out'});
}
 document.querySelectorAll('[data-chapter]').forEach(b=>b.addEventListener('click',()=>showChapter(Number(b.dataset.chapter))));
 document.getElementById('previousChapter')?.addEventListener('click',()=>showChapter(chapterIndex-1));
 document.getElementById('nextChapter')?.addEventListener('click',()=>showChapter(chapterIndex+1));
 const config=window.CMG_CONFIG || {};
 const audio=document.getElementById('weeklyAudio');
 if(audio && config.audioUrl){audio.src=config.audioUrl;audio.hidden=false;document.getElementById('audioStatus').hidden=true;audio.addEventListener('error',()=>{const status=document.getElementById('audioStatus');status.hidden=false;status.textContent='Audio is temporarily unavailable. Please try again later.';});}
 document.querySelectorAll('.newsletter-form').forEach(form=>{
 const status=form.parentElement.querySelector('.signup-status');
 if(config.newsletterEndpoint) status.textContent='Weekly insights from CMG. Unsubscribe at any time.';
 form.addEventListener('submit',async event=>{
 event.preventDefault(); if(!form.reportValidity())return;
 if(!config.newsletterEndpoint){status.textContent='Signup is not available yet. Your email has not been submitted.';return;}
 const button=form.querySelector('button');button.disabled=true;status.textContent='Submitting…';
 try{const response=await fetch(config.newsletterEndpoint,{method:'POST',body:new URLSearchParams(new FormData(form)),headers:{'Accept':'application/json'}});if(!response.ok)throw new Error('Signup failed');status.textContent='Thank you. Your signup was received.';form.reset();}
 catch{status.textContent='We could not complete your signup. Please try again.';}finally{button.disabled=false;}
 });});
 // Keep navigation state available to keyboards and assistive technology.
 menuToggle?.setAttribute('aria-controls','mainNav');menuToggle?.setAttribute('aria-expanded','false');
 menuToggle?.addEventListener('click',()=>menuToggle.setAttribute('aria-expanded',mainNav.classList.contains('open')));
 const syncNavigation=()=>dropdownButtons.forEach(b=>b.setAttribute('aria-expanded',b.parentElement.classList.contains('open')));
 dropdownButtons.forEach(b=>{b.setAttribute('aria-expanded','false');b.addEventListener('click',syncNavigation);});
 document.addEventListener('click',syncNavigation);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.nav-dropdown.open').forEach(d=>{d.classList.remove('open');d.querySelector('button').focus();});mainNav?.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');syncNavigation();}});
 mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
 document.querySelectorAll('.framework-stage').forEach(b=>{b.setAttribute('aria-pressed',b.classList.contains('active'));b.addEventListener('click',()=>document.querySelectorAll('.framework-stage').forEach(s=>s.setAttribute('aria-pressed',s===b)));});
