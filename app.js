const generalQuotes = [
  "You don't need to have everything figured out. Just take the next good step.",
  "Small progress is still progress. Keep showing up for yourself.",
  "Your past may explain your story, but it does not have to decide your future.",
  "Be patient with the process. Good things take time to grow.",
  "You are allowed to begin again, as many times as you need.",
  "Courage is choosing to continue, even when the next step feels difficult.",
  "Do what you can with what you have, right where you are.",
  "A difficult chapter is not the whole story.",
  "Your effort matters, even when nobody else can see it.",
  "You don't have to be fearless. You just have to keep moving.",
  "Give yourself credit for the battles you face quietly.",
  "One focused step today can make tomorrow feel different.",
  "You are still learning. Don't mistake growth for failure.",
  "Protect your peace and keep your purpose close.",
  "Rest when you need to. Rest is part of the journey.",
  "Let your actions today build the future you hope for.",
  "You can be a work in progress and still be proud of yourself.",
  "Don't compare your beginning to somebody else's middle.",
  "There is strength in asking for help and trying again.",
  "Make room for hope. Better moments can still find you.",
  "Consistency beats waiting for the perfect mood.",
  "You have survived days you once thought would break you.",
  "Take life one step, one choice and one morning at a time.",
  "Your worth is not measured by your productivity.",
  "Keep becoming someone your younger self would feel safe with.",
  "A setback can slow you down without stopping your journey.",
  "You deserve the same patience you give to other people.",
  "Start where you are. The first step does not need to be impressive.",
  "Let today be about progress, not perfection.",
  "There is still good ahead of you. Keep your heart open."
];

const scriptures = [
  ["Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.","Joshua 1:9 · KJV"],
  ["I can do all things through Christ which strengtheneth me.","Philippians 4:13 · KJV"],
  ["The LORD is my shepherd; I shall not want.","Psalm 23:1 · KJV"],
  ["Cast thy burden upon the LORD, and he shall sustain thee.","Psalm 55:22 · KJV"],
  ["God is our refuge and strength, a very present help in trouble.","Psalm 46:1 · KJV"],
  ["Fear thou not; for I am with thee: be not dismayed; for I am thy God.","Isaiah 41:10 · KJV"],
  ["The joy of the LORD is your strength.","Nehemiah 8:10 · KJV"],
  ["Trust in the LORD with all thine heart; and lean not unto thine own understanding.","Proverbs 3:5 · KJV"],
  ["Wait on the LORD: be of good courage, and he shall strengthen thine heart.","Psalm 27:14 · KJV"],
  ["The LORD is nigh unto them that are of a broken heart.","Psalm 34:18 · KJV"],
  ["With God all things are possible.","Matthew 19:26 · KJV"],
  ["Let all your things be done with charity.","1 Corinthians 16:14 · KJV"],
  ["Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.","Philippians 4:6 · KJV"],
  ["And let us not be weary in well doing: for in due season we shall reap, if we faint not.","Galatians 6:9 · KJV"],
  ["The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.","Nahum 1:7 · KJV"],
  ["Commit thy works unto the LORD, and thy thoughts shall be established.","Proverbs 16:3 · KJV"],
  ["When I am afraid, I will trust in thee.","Psalm 56:3 · KJV"],
  ["I will never leave thee, nor forsake thee.","Hebrews 13:5 · KJV"],
  ["Let not your heart be troubled: ye believe in God, believe also in me.","John 14:1 · KJV"],
  ["The LORD shall fight for you, and ye shall hold your peace.","Exodus 14:14 · KJV"],
  ["But they that wait upon the LORD shall renew their strength.","Isaiah 40:31 · KJV"],
  ["Rejoicing in hope; patient in tribulation; continuing instant in prayer.","Romans 12:12 · KJV"],
  ["The LORD is my light and my salvation; whom shall I fear?","Psalm 27:1 · KJV"],
  ["For we walk by faith, not by sight.","2 Corinthians 5:7 · KJV"],
  ["Peace I leave with you, my peace I give unto you.","John 14:27 · KJV"],
  ["Be strong in the Lord, and in the power of his might.","Ephesians 6:10 · KJV"],
  ["The steps of a good man are ordered by the LORD: and he delighteth in his way.","Psalm 37:23 · KJV"],
  ["In all thy ways acknowledge him, and he shall direct thy paths.","Proverbs 3:6 · KJV"],
  ["Let your heart therefore be perfect with the LORD our God.","1 Kings 8:61 · KJV"],
  ["This is the day which the LORD hath made; we will rejoice and be glad in it.","Psalm 118:24 · KJV"]
];

const reflections = [
  "You don't have to solve everything today. Just take the next good step.",
  "Pause for a moment, breathe deeply and give yourself permission to begin again.",
  "Whatever today brings, meet it one moment at a time.",
  "Make space for gratitude, even for the small things.",
  "A little kindness — to yourself or someone else — can change a day."
];

const $ = (id) => document.getElementById(id);
const today = new Date();
const dayNumber = Math.floor(new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 86400000);
const quoteIndex = ((dayNumber % generalQuotes.length) + generalQuotes.length) % generalQuotes.length;
const scriptureIndex = ((dayNumber % scriptures.length) + scriptures.length) % scriptures.length;
let mode = localStorage.getItem("sunset-mode") || "both";
let favorites = JSON.parse(localStorage.getItem("sunset-favorites") || "[]");

$("todayDate").textContent = today.toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});
$("greeting").textContent = today.getHours() < 12 ? "Good morning." : today.getHours() < 17 ? "Good afternoon." : "Good evening.";
$("reflectionText").textContent = reflections[dayNumber % reflections.length];

function render(){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
  const cards=[];
  if(mode==="both"||mode==="general") cards.push(`<article class="quote-card"><div class="card-label">TODAY'S MOTIVATION</div><p class="quote-text">“${generalQuotes[quoteIndex]}”</p><div class="quote-source">A SUNSET daily reminder</div></article>`);
  if(mode==="both"||mode==="christian") cards.push(`<article class="quote-card scripture"><div class="card-label">TODAY'S SCRIPTURE · KING JAMES VERSION</div><p class="quote-text">“${scriptures[scriptureIndex][0]}”</p><div class="quote-source">${scriptures[scriptureIndex][1]}</div></article>`);
  $("cards").innerHTML=cards.join("");
  $("saveButton").textContent = isSaved() ? "♥  Saved to favourites" : "♡  Save today's favourite";
  renderFavorites();
}
function currentItems(){
  const arr=[];
  if(mode==="both"||mode==="general") arr.push({type:"Motivation",text:generalQuotes[quoteIndex],source:"SUNSET"});
  if(mode==="both"||mode==="christian") arr.push({type:"Scripture",text:scriptures[scriptureIndex][0],source:scriptures[scriptureIndex][1]});
  return arr;
}
function isSaved(){const texts=currentItems().map(x=>x.text);return texts.every(t=>favorites.some(f=>f.text===t));}
function renderFavorites(){
  $("favoritesSection").hidden=favorites.length===0;
  $("favoritesList").innerHTML=favorites.map((f,i)=>`<article class="favorite-item"><small>${f.type} · ${f.source}</small><p>“${f.text}”</p><button class="text-button" data-remove="${i}">Remove</button></article>`).join("");
  document.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{favorites.splice(Number(b.dataset.remove),1);persistFavorites();render();}));
}
function persistFavorites(){localStorage.setItem("sunset-favorites",JSON.stringify(favorites));}
function toast(message){$("toast").textContent=message;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2300);}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{mode=b.dataset.mode;localStorage.setItem("sunset-mode",mode);render();}));
$("saveButton").addEventListener("click",()=>{
  const items=currentItems();
  if(isSaved()){toast("Already saved in your favourites.");return;}
  items.forEach(item=>{if(!favorites.some(f=>f.text===item.text))favorites.unshift(item);});
  persistFavorites();render();toast("Saved. Keep this encouragement close.");
});
$("shareButton").addEventListener("click",async()=>{
  const text=currentItems().map(x=>`${x.type}\n“${x.text}”\n${x.source}`).join("\n\n")+"\n\nSUNSET — A brighter tomorrow starts today.";
  if(navigator.share){try{await navigator.share({title:"Today's SUNSET encouragement",text});}catch(e){}}
  else{try{await navigator.clipboard.writeText(text);toast("Today's encouragement copied.");}catch(e){toast("Sharing isn't available in this browser.");}}
});

const modal=$("settingsModal");
$("settingsOpen").addEventListener("click",()=>{modal.hidden=false;});
$("settingsClose").addEventListener("click",()=>{modal.hidden=true;});
modal.addEventListener("click",e=>{if(e.target===modal)modal.hidden=true;});
$("reminderToggle").checked=localStorage.getItem("sunset-reminder")==="on";
$("reminderTime").value=localStorage.getItem("sunset-time")||"06:30";
$("reminderToggle").addEventListener("change",e=>{localStorage.setItem("sunset-reminder",e.target.checked?"on":"off");updateReminderStatus();});
$("reminderTime").addEventListener("change",e=>{localStorage.setItem("sunset-time",e.target.value);updateReminderStatus();});
function updateReminderStatus(){
  const on=$("reminderToggle").checked;
  $("reminderStatus").textContent=on?`Reminder preference saved for ${$("reminderTime").value}. Browser background scheduling is not guaranteed in this first version.`:"Choose a time and enable notifications. Background delivery is not guaranteed in this first version.";
}
$("enableReminder").addEventListener("click",async()=>{
  if(!("Notification" in window)){toast("Notifications are not supported by this browser.");return;}
  const permission=await Notification.requestPermission();
  if(permission==="granted"){
    $("reminderToggle").checked=true;localStorage.setItem("sunset-reminder","on");updateReminderStatus();
    new Notification("SUNSET",{body:"A new day is another chance. Open SUNSET for today's encouragement."});
    toast("Notifications allowed. Reminder preference saved.");
  }else toast("Notification permission wasn't granted.");
});
$("clearFavorites").addEventListener("click",()=>{if(confirm("Clear all saved favourites?")){favorites=[];persistFavorites();render();toast("Favourites cleared.");}});
updateReminderStatus();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
render();
