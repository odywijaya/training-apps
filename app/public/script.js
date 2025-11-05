// script.js — sederhana: memuat data dari data.json dan mengisi DOM
async function loadData(){
  try{
    const res = await fetch('data.json');
    if(!res.ok) throw new Error('Gagal memuat data.json: '+res.status);
    const data = await res.json();
    document.getElementById('name').textContent = data.name || 'Nama Anda';
    document.getElementById('headline').textContent = data.headline || '';
    document.getElementById('summary-text').textContent = data.summary || '';

    const expRoot = document.getElementById('experience-list');
    expRoot.innerHTML = '';
    (data.experiences||[]).forEach(e=>{
      const div = document.createElement('div'); div.className='exp-item';
      const title = document.createElement('h3'); title.textContent = e.role || 'Peran';
      const org = document.createElement('div'); org.className='exp-meta'; org.textContent = (e.company ? e.company+' • ' : '') + (e.period||'');
      const desc = document.createElement('p'); desc.textContent = e.description || '';
      div.appendChild(title); div.appendChild(org); if(e.description) div.appendChild(desc);
      expRoot.appendChild(div);
    });

    const eduRoot = document.getElementById('education-list'); eduRoot.innerHTML='';
    (data.education||[]).forEach(ed=>{
      const div = document.createElement('div'); div.className='exp-item';
      const title = document.createElement('h3'); title.textContent = ed.school || 'Institusi';
      const meta = document.createElement('div'); meta.className='exp-meta'; meta.textContent = (ed.degree||'') + (ed.period ? ' • '+ed.period : '');
      div.appendChild(title); div.appendChild(meta); eduRoot.appendChild(div);
    });

    const skillsRoot = document.getElementById('skills-list'); skillsRoot.innerHTML='';
    (data.skills||[]).forEach(s=>{ const span=document.createElement('span'); span.className='chip'; span.textContent=s; skillsRoot.appendChild(span); });

    const contact = document.getElementById('contact-info'); contact.innerHTML='';
    if(data.contact){
      if(data.contact.email) contact.innerHTML += '<strong>Email:</strong> '+escapeHtml(data.contact.email)+'<br/>';
      if(data.contact.website) contact.innerHTML += '<strong>Website:</strong> <a href="'+escapeHtml(data.contact.website)+'" target="_blank">'+escapeHtml(data.contact.website)+'</a>';
      if(data.contact.linkedin) contact.innerHTML += '<br/><strong>LinkedIn:</strong> <a href="'+escapeHtml(data.contact.linkedin)+'" target="_blank">'+escapeHtml(data.contact.linkedin)+'</a>';
    }

  }catch(err){
    console.error(err); document.getElementById('name').textContent='Gagal memuat data';
    document.getElementById('summary-text').textContent = String(err);
  }
}

function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>\"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c])); }

window.addEventListener('load', loadData);
