// Enfin, Voir si oui ou non tu veux le loader pendant le hover des TV.
// Ajouter du vivant dans les TV animé, un balayage vertical.


export function terminalSkills(subscribeBtnSkills) {
  const indentation = document.getElementById('terminal-indentation');
  const htmlSkillContainer = document.getElementById('red-content');
  const cssSkillContainer = document.getElementById('blue-content');
  const jsSkillContainer = document.getElementById('yellow-content');
  const topLoader = document.getElementById('top-loader');
  const loaderEls = topLoader.querySelectorAll('.circle');
  const minLines = 25;
  indentation.innerHTML = '';


  function countLinesByText(name, text, parentHiddingContainer) {
    const lines = text.split('<br>').length;
    // console.log(`Nombre de lignes pour ${name} : ${lines}`);

    // Lines already exist?
    let linesWrapper = parentHiddingContainer.querySelector('.generated-lines');
    if (linesWrapper) {
      return;
    }

    // wrapper
    linesWrapper = document.createElement('div');
    linesWrapper.className = 'generated-lines';

    for (let i = 0; i < lines; i++) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'line';
      lineDiv.id = `line--${i + 1}-${name.toLowerCase()}`; // ID / bloc
      lineDiv.textContent = 'x';
      linesWrapper.appendChild(lineDiv);
    }

    const targetContent = parentHiddingContainer.querySelector('div');
    parentHiddingContainer.insertBefore(linesWrapper, targetContent);
  }

  function renderIndentationLines(totalLines = minLines) {
    indentation.innerHTML = '';
    for (let i = 1; i <= totalLines; i++) {
      const line = document.createElement('div');
      line.className = 'number-line';
      line.textContent = i;
      indentation.appendChild(line);
    }
  }
  renderIndentationLines();

  const htmlTxt = `
    <span class="txt-green">&lt;!-- HTML skills --&gt;</span><br>
    <br>
    <span class="txt-red">&lt;html</span> <span class="txt-green">lang</span>=<span class="txt-yellow">"fr-FR"</span><span class="txt-red">&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;head&gt;</span><br>
    <span class="spacing"></span><span class="spacing"></span><span class="txt-red">&lt;title&gt;</span>Skills HTML<span class="txt-red">&lt;/title&gt;</span><br>
    <span class="spacing"></span><span class="spacing"></span><span class="txt-red">&lt;meta</span> <span class="txt-green">charset</span>=<span class="txt-yellow">"utf-8"</span><span class="txt-red">&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;/head&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;body&gt;</span><br>
    <span class="spacing"></span><span class="spacing"></span>HTML structure<br>
    <span class="spacing"></span><span class="spacing"></span>SEO<br>
    <span class="spacing"></span><span class="spacing"></span><span class="txt-red">&lt;strong&gt;</span>Aria accessibility<span class="txt-red">&lt;/strong&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;/body&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;footer&gt;</span><br>
    <span class="spacing"></span><span class="txt-red">&lt;/footer&gt;</span><br>
    <span class="txt-red">&lt;/html&gt;</span>
  `;

  const cssTxt = `
  <br>
  <br>
  <span class="txt-green">//-- CSS/SCSS skills --</span><br>
  <br>
  <span class="txt-red">@function</span> <span class="txt-green">render</span>(<span class="txt-purple">$skill</span>, <span class="txt-purple">$xp</span>) {<br>
  <span class="spacing"></span><span class="txt-purple">$used-skills</span>: <span class="txt-purple">$skills</span>*<span class="txt-purple">$xp</span>;<br>
  <span class="spacing"></span> <span class="txt-red">@if</span> (<span class="txt-purple">$used-skills</span> == <span class="txt-blue">300</span>) {<br>
  <span class="spacing"></span><span class="spacing"></span><span class="txt-cyan">object</span>: <span class="txt-blue">100%</span>;<br>
  <span class="spacing"></span><span class="spacing"></span><span class="txt-cyan">css</span>: <span class="txt-blue">100%</span>;<br>
  <span class="spacing"></span><span class="spacing"></span><span class="txt-cyan">mixin</span>: <span class="txt-blue">100%</span>;<br>
  <span class="spacing"></span>}<br>
  }<br>
  <br>
  <span class="txt-red">@mixin</span> <span class="txt-green">my-skills</span>() {<br>
  <span class="spacing"></span><span class="txt-red">@return</span> <span class="txt-green">render</span>(<span class="txt-blue">100</span>,<span class="txt-blue">3</span>);<br>
  }<br>
  <br>
  <span class="txt-orange">.target</span> {<br>
  <span class="spacing"></span><span class="txt-red">@include</span> <span class="txt-green">my-skills</span>;<br>
  }<br>
`;

  const jsTxt = `
  <br>
  <br>
  <span class="txt-green">//-- JS skills --</span><br>
  <br>
  <span class="txt-light-blue">const</span> <span class="txt-dark-cyan">skills</span> = <span class="txt-light-blue">el</span>.<span class="txt-red">querySelectorAll</span>('<span class="txt-gold">js</span>');<br>
  <br>
  <span class="txt-light-blue">function</span> <span class="txt-purple">code</span>() {<br>
  <span class="spacing"></span><span class="txt-light-blue">let</span> <span class="txt-dark-cyan">vanillaJs</span> = <span class="txt-brown">true</span>;<br>
  <span class="spacing"></span><span class="txt-light-blue">let</span> <span class="txt-dark-cyan">drupal</span> = <span class="txt-brown">true</span>;<br>
  <span class="spacing"></span><span class="txt-light-blue">let</span> <span class="txt-dark-cyan">reactJs</span> = <span class="txt-brown">true</span>;<br>
  <span class="spacing"></span><span class="txt-light-blue">let</span> <span class="txt-dark-cyan">learnToOther</span> = <span class="txt-brown">true</span>;<br>
  };<br>
  <br>
  <span class="txt-dark-cyan">skills</span>.<span class="txt-green">forEach</span>((<span class="txt-dark-cyan">skill</span>) => {<br>
  <span class="spacing"></span><span class="txt-dark-cyan">skill</span>.<span class="txt-gold">addEventListener</span>(' <span class="txt-green">learn</span>', <span class="txt-light-blue">fct</span>() => {<br>
  <span class="spacing"></span><span class="spacing"></span><span class="txt-purple">code</span>();<br>
  <span class="spacing"></span>});<br>
  });<br>
`;

  function turnOffLoaders() {
    topLoader.style.opacity = 0;
  }

  subscribeBtnSkills(async states => {

    htmlSkillContainer.innerHTML = '';
    cssSkillContainer.innerHTML = '';
    jsSkillContainer.innerHTML = '';

    let combinedContent = '';

    if (states.redIsOn) {
      htmlSkillContainer.innerHTML = htmlTxt;
      combinedContent += htmlTxt;
      countLinesByText('html', htmlTxt, htmlSkillContainer.parentElement);
      turnOffLoaders();
    }

    if (states.blueIsOn) {
      cssSkillContainer.innerHTML = cssTxt;
      combinedContent += cssTxt;
      countLinesByText('css', cssTxt, cssSkillContainer.parentElement);
      turnOffLoaders();
    }

    if (states.yellowIsOn) {
      jsSkillContainer.innerHTML = jsTxt;
      combinedContent += jsTxt;
      countLinesByText('js', jsTxt, jsSkillContainer.parentElement);
      turnOffLoaders();
    }

    const totalLines = Math.max(combinedContent.split('<br>').length, minLines);

    // remake indentation
    indentation.innerHTML = '';

    renderIndentationLines(totalLines);

    if (!states.redIsOn && !states.blueIsOn && !states.yellowIsOn) {
      document.querySelectorAll('.generated-lines').forEach(wrapper => wrapper.remove());
    }

    // Loaders

    if (states.hoverEl === 'html' && !states.redIsOn) {
      loaderEls.forEach((el) => {
        el.style.setProperty('--loader-color', '#dd3561');
      })
      topLoader.style.opacity = 1;
    } else if (states.hoverEl === 'css'  && !states.blueIsOn) {
      loaderEls.forEach((el) => {
        el.style.setProperty('--loader-color', '#5c65a8');
      })
      topLoader.style.opacity = 1;
    } else if (states.hoverEl === 'js' && !states.yellowIsOn) {
      loaderEls.forEach((el) => {
        el.style.setProperty('--loader-color', '#dfc859');
      })
      topLoader.style.opacity = 1;
    } else {
      turnOffLoaders();
    }
  });
}
