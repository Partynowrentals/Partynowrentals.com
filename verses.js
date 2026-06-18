(function(){
  var es=(document.documentElement.lang||'').toLowerCase().indexOf('es')===0;
  var EN=[
   ["And let the beauty of the LORD our God be upon us: and establish thou the work of our hands upon us; yea, the work of our hands establish thou it.","Psalm 90:17 (KJV)"],
   ["Commit thy works unto the LORD, and thy thoughts shall be established.","Proverbs 16:3 (KJV)"],
   ["In all labour there is profit: but the talk of the lips tendeth only to penury.","Proverbs 14:23 (KJV)"],
   ["And whatsoever ye do, do it heartily, as to the Lord, and not unto men;","Colossians 3:23 (KJV)"],
   ["Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.","Proverbs 3:5-6 (KJV)"],
   ["Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.","Joshua 1:9 (KJV)"],
   ["Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.","Matthew 25:21 (KJV)"],
   ["I can do all things through Christ which strengtheneth me.","Philippians 4:13 (KJV)"]
  ];
  var ES=[
   ["Y la hermosura de Jehová nuestro Dios sea sobre nosotros, y la obra de nuestras manos confirma sobre nosotros; sí, la obra de nuestras manos confirma.","Salmo 90:17 (RVR1960)"],
   ["Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.","Proverbios 16:3 (RVR1960)"],
   ["En toda labor hay fruto; mas las vanas palabras de los labios empobrecen.","Proverbios 14:23 (RVR1960)"],
   ["Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;","Colosenses 3:23 (RVR1960)"],
   ["Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.","Proverbios 3:5-6 (RVR1960)"],
   ["Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.","Josué 1:9 (RVR1960)"],
   ["Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.","Mateo 25:21 (RVR1960)"],
   ["Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13 (RVR1960)"]
  ];
  var V=es?ES:EN, el=document.getElementById('verse'); if(!el) return;
  var i=Math.floor(Math.random()*V.length);
  function show(){ el.innerHTML='“'+V[i][0]+'” <span class="ref">— '+V[i][1]+'</span>'; }
  show();
  setInterval(function(){ el.style.opacity='0'; setTimeout(function(){ i=(i+1)%V.length; show(); el.style.opacity='1'; },500); },7000);
})();
