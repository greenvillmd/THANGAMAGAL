/* ============================================================
   THANGAMAGAL — Continuous Typewriter Animation for Hero Brand Name
   Smooth typing -> Pause -> Smooth backspacing -> Pause -> Repeat Loop
   Supports grapheme clusters for Tamil and English.
   Respects prefers-reduced-motion.
   ============================================================ */

(function () {
  const TYPE_SPEED = 130;      // ms per character forward
  const DELETE_SPEED = 70;     // ms per character backspacing
  const HOLD_COMPLETE = 2600;  // ms to hold the full brand name
  const HOLD_EMPTY = 500;      // ms to pause when deleted before retyping
  const HOLD_INITIAL = 350;    // initial delay on first load

  let timeoutId = null;

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getGraphemes(text, lang) {
    if (!text) return [];
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter(lang || 'en', { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text), s => s.segment);
      } catch (e) {
        // Fallback to Array.from
      }
    }
    return Array.from(text);
  }

  function startContinuousTypewriter(el) {
    if (!el) return;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    const lang = (typeof getStoredLang === 'function') ? getStoredLang() : (document.documentElement.getAttribute('lang') || 'en');
    const fullText = (typeof translations !== 'undefined' && translations[lang] && translations[lang].heroName)
      ? translations[lang].heroName
      : (el.getAttribute('data-typewriter-text') || 'THANGAMAGAL');

    if (prefersReducedMotion()) {
      el.textContent = fullText;
      return;
    }

    const graphemes = getGraphemes(fullText, lang);
    let currentIndex = 0;
    let isDeleting = false;

    // Create text span and persistent blinking cursor
    el.innerHTML = '';
    const textNode = document.createElement('span');
    textNode.className = 'typewriter-text';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    el.appendChild(textNode);
    el.appendChild(cursor);

    function tick() {
      if (!isDeleting) {
        // Typing forward
        currentIndex++;
        textNode.textContent = graphemes.slice(0, currentIndex).join('');

        if (currentIndex >= graphemes.length) {
          // Finished typing full word -> Hold at full length
          isDeleting = true;
          timeoutId = setTimeout(tick, HOLD_COMPLETE);
          return;
        }
        timeoutId = setTimeout(tick, TYPE_SPEED);
      } else {
        // Deleting backward
        currentIndex--;
        textNode.textContent = graphemes.slice(0, currentIndex).join('');

        if (currentIndex <= 0) {
          // Finished deleting -> Switch to typing again after short pause
          isDeleting = false;
          timeoutId = setTimeout(tick, HOLD_EMPTY);
          return;
        }
        timeoutId = setTimeout(tick, DELETE_SPEED);
      }
    }

    timeoutId = setTimeout(tick, HOLD_INITIAL);
  }

  function init() {
    const el = document.querySelector('[data-typewriter]');
    if (!el) return;
    startContinuousTypewriter(el);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Restart smoothly when language changes
  document.addEventListener('tgm:langchange', () => {
    const el = document.querySelector('[data-typewriter]');
    if (el) {
      startContinuousTypewriter(el);
    }
  });
})();
