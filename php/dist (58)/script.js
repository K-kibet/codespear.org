const links = document.getElementsByClassName('nav-link');

for (let link of links) {
  link.addEventListener('click', e => {

    for (let li of links) {
      li.classList.remove('active');
    }

    e.target.classList.add('active');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const codes = document.getElementsByTagName('code');

  for (let code of codes) {
    const transformTags = highlightTag(code.textContent);
    // code.innerHTML = transformTags;
  }

  function highlightTag(propertyName) {
    function tagHighlight(match, p1, p2, p3, p4, p5, p6) {
      if (p1 != undefined) {
        return `<span class="tag">&lt;${p1}</span><span class="tag">&gt;</span>`;
      }
      if (p2 != undefined && p3 != undefined) {
        return `<span class="tag">&lt;${p2}</span><span class="attribute">${p4}</span>=<span class="string">${p5}</span><span class="tag">&gt;</span>`;
      }

      if (p4 != undefined && p5 != undefined) {
        if (p6 != undefined) {
          return `<span class="php">&lt;${p4}</span>${p5}<span class="php">?></span>`;
        }
        return `<span class="php">&lt;${p4}</span>${p5}<span class="php">?></span>`;
      }
    }
    return propertyName.replace(/(?:(?:<(\/?\w+)>|(?:<(\/?\w+)((\s[a-zA-Z-_:@\$]+)=("[a-zA-Z0-1]+"))))|(?:<(\?php)(.+(".*"))\s?\?>))/g, tagHighlight);
  }
});