/* ============================================================
   THANGAMAGAL — Main site interactions
   Sticky header, mobile nav panel, language dropdown, scroll reveal
   ============================================================ */

// ============================================================
// 🔗 GOOGLE SHEETS WEB APP CONFIGURATION
// Paste your deployed Google Apps Script URL (ends in /exec) below:
// ============================================================
const GOOGLE_SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyD_44xmD1SWW_r4s_MWNtR1ppM6F4GGYq4_OM7kzeHnISveGVYfaL2fNhfxHLX3Y6X/exec';

(function () {
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 12) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const panel = document.querySelector('.mobile-panel');
    if (!toggle || !panel) return;

    function close() {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    function open() {
      panel.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.contains('open');
      isOpen ? close() : open();
    });

    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  function initLangDropdown() {
    document.querySelectorAll('.lang-select-wrap').forEach((wrap) => {
      const btn = wrap.querySelector('.lang-btn');
      const menu = wrap.querySelector('.lang-menu');
      if (!btn || !menu) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains('open');
        document.querySelectorAll('.lang-menu.open').forEach((m) => m.classList.remove('open'));
        document.querySelectorAll('.lang-btn[aria-expanded="true"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          menu.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-menu.open').forEach((m) => m.classList.remove('open'));
      document.querySelectorAll('.lang-btn[aria-expanded="true"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
    });
  }

  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window) || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      items.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => observer.observe(el));
  }

  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((s) => observer.observe(s));
  }

  function initContactForm() {
    const form = document.getElementById('enquiryForm');
    const feedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('cf-submit-btn');
    if (!form || !feedback || !submitBtn) return;

    // Resolve Web App URL from top constant, data-endpoint attribute, or window variable
    const endpointFromAttr = form.getAttribute('data-endpoint') || '';
    const GOOGLE_SCRIPT_URL = 
      (typeof GOOGLE_SHEETS_WEBAPP_URL !== 'undefined' && GOOGLE_SHEETS_WEBAPP_URL && !GOOGLE_SHEETS_WEBAPP_URL.includes('PASTE_YOUR_SCRIPT_ID_HERE'))
        ? GOOGLE_SHEETS_WEBAPP_URL
        : ((endpointFromAttr && !endpointFromAttr.includes('PASTE_YOUR_SCRIPT_ID_HERE')) 
            ? endpointFromAttr 
            : (window.GOOGLE_SHEETS_ENDPOINT || ''));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = (form.querySelector('[name="name"]')?.value || '').trim();
      const phone = (form.querySelector('[name="phone"]')?.value || '').trim();
      const message = (form.querySelector('[name="message"]')?.value || '').trim();

      const isTamil = (document.documentElement.getAttribute('lang') || 'en') === 'ta';

      if (!name || !phone) {
        showFeedback('error', isTamil ? 'தயவுசெய்து உங்கள் பெயர் மற்றும் தொலைபேசி எண்ணை உள்ளிடவும்.' : 'Please enter your name and phone number.');
        return;
      }

      setLoading(true, isTamil);

      if (!GOOGLE_SCRIPT_URL) {
        // Fallback demo response if endpoint is pending deployment
        setTimeout(() => {
          setLoading(false, isTamil);
          showFeedback('success', isTamil
            ? 'நன்றி! உங்கள் தகவல் பதிவு செய்யப்பட்டது. (Demo mode: Google Sheet URL சேர்க்கப்பட்டதும் தானாக Sheets-ல் சேரும்).'
            : 'Thank you! Your enquiry has been received. (Demo mode: Once Google Web App URL is added, leads will save directly to Google Sheets).');
          form.reset();
        }, 600);
        return;
      }

      try {
        const payload = {
          name,
          phone,
          message,
          source: 'Thangamagal Website Contact Form'
        };

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        showFeedback('success', isTamil
          ? 'நன்றி! உங்கள் தகவல் வெற்றிகரமாக பெறப்பட்டது. எங்கள் குழு விரைவில் உங்களை தொடர்பு கொள்ளும்.'
          : 'Thank you! Your enquiry has been sent successfully. Our team will contact you shortly.');
        form.reset();
      } catch (err) {
        showFeedback('error', isTamil
          ? 'மன்னிக்கவும், தகவலை அனுப்புவதில் பிழை ஏற்பட்டது. தயவுசெய்து எங்களை நேரடியாக அழைக்கவும்.'
          : 'Sorry, there was an issue sending your message. Please call us directly.');
      } finally {
        setLoading(false, isTamil);
      }
    });

    function setLoading(isLoading, isTamil) {
      submitBtn.disabled = isLoading;
      submitBtn.style.opacity = isLoading ? '0.7' : '1';
      if (isLoading) {
        showFeedback('loading', isTamil ? 'அனுப்பப்படுகிறது...' : 'Sending your enquiry...');
      }
    }

    function showFeedback(type, text) {
      feedback.className = `form-feedback ${type}`;
      feedback.textContent = text;
      feedback.style.display = 'block';
    }
  }

  function initLiveBranchStatus() {
    const pill = document.getElementById('liveStatusPill');
    const textEl = document.getElementById('liveStatusText');
    if (!pill || !textEl) return;

    function updateStatus() {
      // Calculate IST time (UTC + 5:30)
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utcTime + (3600000 * 5.5));

      const day = istTime.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      const isTamil = (document.documentElement.getAttribute('lang') || 'en') === 'ta';

      let isOpen = false;
      let statusMessage = '';

      if (day >= 1 && day <= 6) {
        // Monday to Saturday: 9:30 AM (570 mins) to 7:30 PM (1170 mins)
        if (timeInMinutes >= 570 && timeInMinutes <= 1170) {
          isOpen = true;
          statusMessage = isTamil ? 'தற்போது இயங்குகிறது • இரவு 7:30 வரை' : 'Open Now • Closes at 7:30 PM';
        } else if (timeInMinutes < 570) {
          statusMessage = isTamil ? 'தற்போது மூடப்பட்டுள்ளது • காலை 9:30 மணிக்கு திறக்கும்' : 'Closed Now • Opens at 9:30 AM';
        } else {
          statusMessage = isTamil ? 'தற்போது மூடப்பட்டுள்ளது • நாளை காலை 9:30 மணிக்கு திறக்கும்' : 'Closed Now • Opens Tomorrow at 9:30 AM';
        }
      } else if (day === 0) {
        // Sunday: 10:00 AM (600 mins) to 2:00 PM (840 mins)
        if (timeInMinutes >= 600 && timeInMinutes <= 840) {
          isOpen = true;
          statusMessage = isTamil ? 'இன்று இயங்குகிறது (ஞாயிறு) • பிற்பகல் 2:00 வரை' : 'Open Today (Sunday) • Closes at 2:00 PM';
        } else {
          statusMessage = isTamil ? 'ஞாயிறு: முன் அனுமதியுடன் • திங்கள் காலை 9:30 திறக்கும்' : 'Sunday: By Appointment • Opens Mon 9:30 AM';
        }
      }

      pill.className = `live-status-pill ${isOpen ? 'open' : 'closed'}`;
      textEl.textContent = statusMessage;
    }

    updateStatus();
    setInterval(updateStatus, 60000);
    document.addEventListener('tgm:langchange', updateStatus);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initLangDropdown();
    initScrollReveal();
    initActiveNavHighlight();
    initContactForm();
    initLiveBranchStatus();
  });
})();


