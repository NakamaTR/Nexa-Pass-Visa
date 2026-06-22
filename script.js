document.querySelectorAll('a').forEach(a=>{
a.onclick=e=>{
document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'})
}
})
