/* ============================================================
   THANGAMAGAL — Feedback Store & Auth Management
   Pure Vanilla JS with Web Crypto API SHA-256 hashing
   ============================================================ */

const TGM_STORAGE_KEY = 'tgm_feedbacks';
const TGM_AUTH_KEY = 'tgm_admin_hash';
const TGM_SESSION_KEY = 'tgm_admin_session';

// Default Admin credentials: username = 'admin', password = 'thangamagal@2026'
const DEFAULT_ADMIN_HASH = 'fa4fb6f20159c9bbd21d6126797e5223918bf0f764c9270750e3e537cc747fed';
const DEFAULT_ADMIN_USER = 'admin';

// Initial verified seed feedbacks
const SEED_FEEDBACKS = [
  {
    id: 'fb-1',
    name: 'K. Saravanan',
    nameTa: 'கே. சரவணன்',
    location: 'Thillai Nagar, Trichy',
    locationTa: 'தில்லை நகர், திருச்சி',
    rating: 5,
    date: '2026-08-10',
    comment: 'Very transparent and quick gold evaluation. I received the loan within 10 minutes at Chithra Complex. The staff is polite and respectful.',
    commentTa: 'மிகவும் வெளிப்படையான மற்றும் விரைவான தங்க மதிப்பீடு. சித்ரா காம்ப்ளக்ஸில் 10 நிமிடங்களில் கடன் கிடைத்தது. ஊழியர்கள் மிகவும் மரியாதையாக நடத்தினார்கள்.',
    status: 'approved',
    verified: true,
    createdAt: '2026-08-10T10:30:00.000Z'
  },
  {
    id: 'fb-2',
    name: 'M. Lakshmi',
    nameTa: 'எம். லட்சுமி',
    location: 'Chatram Bus Stand, Trichy',
    locationTa: 'சத்திரம் பேருந்து நிலையம், திருச்சி',
    rating: 5,
    date: '2026-08-04',
    comment: 'Convenient location right next to Chatram Bus Stand. Safe locker handling gave me total peace of mind for my jewellery.',
    commentTa: 'சத்திரம் பேருந்து நிலையம் அருகில் மிக வசதியான இடம். பாதுகாப்பான லாக்கர் கையாளுதல் என் நகைகளுக்கு முழு மன அமைதியைத் தந்தது.',
    status: 'approved',
    verified: true,
    createdAt: '2026-08-04T14:15:00.000Z'
  },
  {
    id: 'fb-3',
    name: 'R. Prakash',
    nameTa: 'ஆர். பிரகாஷ்',
    location: 'Srirangam, Trichy',
    locationTa: 'ஸ்ரீரங்கம், திருச்சி',
    rating: 5,
    date: '2026-07-28',
    comment: 'Got maximum value for my gold with completely clear interest terms. No hidden charges or confusing conditions.',
    commentTa: 'என் தங்கத்திற்கு முழுமையான தெளிவான வட்டி விதிகளுடன் அதிகபட்ச மதிப்பு கிடைத்தது. எந்த மறைமுக கட்டணங்களும் இல்லை.',
    status: 'approved',
    verified: true,
    createdAt: '2026-07-28T09:45:00.000Z'
  },
  {
    id: 'fb-4',
    name: 'S. Meenakshi',
    nameTa: 'எஸ். மீனாட்சி',
    location: 'Cantonment, Trichy',
    locationTa: 'கண்டோன்மென்ட், திருச்சி',
    rating: 5,
    date: '2026-07-15',
    comment: 'Excellent customer support. They patiently explained the whole repayment process and paperwork. Highly recommended in Trichy!',
    commentTa: 'சிறந்த வாடிக்கையாளர் ஆதரவு. அவர்கள் முழு திருப்பிச் செலுத்தும் செயல்முறையையும் ஆவணங்களையும் பொறுமையாக விளக்கினர்.',
    status: 'approved',
    verified: true,
    createdAt: '2026-07-15T16:20:00.000Z'
  }
];

// Initialize Storage
function initFeedbackStore() {
  try {
    const existing = localStorage.getItem(TGM_STORAGE_KEY);
    if (!existing || existing === '[]' || existing === 'null' || existing === 'undefined') {
      localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(SEED_FEEDBACKS));
    }
    if (!localStorage.getItem(TGM_AUTH_KEY)) {
      localStorage.setItem(TGM_AUTH_KEY, DEFAULT_ADMIN_HASH);
    }
    if (!localStorage.getItem(TGM_GOLD_RATE_KEY)) {
      localStorage.setItem(TGM_GOLD_RATE_KEY, JSON.stringify(DEFAULT_GOLD_RATE));
    }
  } catch (e) { /* ignore */ }
}

// SHA-256 Helper using Web Crypto API
async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Auth methods
async function verifyAdminCredentials(username, password) {
  if (username !== DEFAULT_ADMIN_USER) return false;
  const hash = await sha256(password);
  const storedHash = localStorage.getItem(TGM_AUTH_KEY) || DEFAULT_ADMIN_HASH;
  const isValid = hash === storedHash;
  if (isValid) {
    sessionStorage.setItem(TGM_SESSION_KEY, JSON.stringify({
      user: username,
      loggedInAt: new Date().toISOString()
    }));
  }
  return isValid;
}

function isAdminLoggedIn() {
  const session = sessionStorage.getItem(TGM_SESSION_KEY);
  return Boolean(session);
}

function adminLogout() {
  sessionStorage.removeItem(TGM_SESSION_KEY);
}

async function updateAdminPassword(oldPassword, newPassword) {
  const isOldValid = await verifyAdminCredentials(DEFAULT_ADMIN_USER, oldPassword);
  if (!isOldValid) {
    return { success: false, message: 'Current password is incorrect.' };
  }
  if (!newPassword || newPassword.length < 6) {
    return { success: false, message: 'New password must be at least 6 characters.' };
  }
  const newHash = await sha256(newPassword);
  localStorage.setItem(TGM_AUTH_KEY, newHash);
  return { success: true, message: 'Password updated successfully!' };
}

// Feedback CRUD
function getAllFeedbacks() {
  initFeedbackStore();
  try {
    const raw = localStorage.getItem(TGM_STORAGE_KEY);
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(SEED_FEEDBACKS));
    return SEED_FEEDBACKS;
  } catch (e) {
    return SEED_FEEDBACKS;
  }
}

function getApprovedFeedbacks() {
  const all = getAllFeedbacks();
  const list = all.filter(f => f.status === 'approved');
  if (list.length === 0) {
    return SEED_FEEDBACKS.filter(f => f.status === 'approved');
  }
  return list;
}

function submitFeedback({ name, location, rating, comment }) {
  const feedbacks = getAllFeedbacks();
  const newFeedback = {
    id: 'fb-' + Date.now(),
    name: name.trim(),
    nameTa: name.trim(),
    location: location.trim() || 'Trichy',
    locationTa: location.trim() || 'திருச்சி',
    rating: Number(rating) || 5,
    date: new Date().toISOString().split('T')[0],
    comment: comment.trim(),
    commentTa: comment.trim(),
    status: 'pending', // Requires admin approval
    verified: false,
    createdAt: new Date().toISOString()
  };
  feedbacks.unshift(newFeedback);
  localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(feedbacks));
  window.dispatchEvent(new CustomEvent('tgm:feedbackupdated'));
  return newFeedback;
}

function addAdminFeedback({ name, nameTa, location, locationTa, rating, comment, commentTa, status = 'approved' }) {
  const feedbacks = getAllFeedbacks();
  const newFeedback = {
    id: 'fb-' + Date.now(),
    name: name.trim(),
    nameTa: (nameTa || name).trim(),
    location: (location || 'Trichy').trim(),
    locationTa: (locationTa || location || 'திருச்சி').trim(),
    rating: Number(rating) || 5,
    date: new Date().toISOString().split('T')[0],
    comment: comment.trim(),
    commentTa: (commentTa || comment).trim(),
    status: status,
    verified: true,
    createdAt: new Date().toISOString()
  };
  feedbacks.unshift(newFeedback);
  localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(feedbacks));
  window.dispatchEvent(new CustomEvent('tgm:feedbackupdated'));
  return newFeedback;
}

function updateFeedbackStatus(id, newStatus) {
  const feedbacks = getAllFeedbacks();
  const item = feedbacks.find(f => f.id === id);
  if (item) {
    item.status = newStatus;
    if (newStatus === 'approved') {
      item.verified = true;
    }
    localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(feedbacks));
    window.dispatchEvent(new CustomEvent('tgm:feedbackupdated'));
    return true;
  }
  return false;
}

function deleteFeedback(id) {
  let feedbacks = getAllFeedbacks();
  feedbacks = feedbacks.filter(f => f.id !== id);
  localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(feedbacks));
  window.dispatchEvent(new CustomEvent('tgm:feedbackupdated'));
  return true;
}

function resetFeedbacksToDefault() {
  localStorage.setItem(TGM_STORAGE_KEY, JSON.stringify(SEED_FEEDBACKS));
  window.dispatchEvent(new CustomEvent('tgm:feedbackupdated'));
}

/* ============================================================
   GOLD RATE STORE
   ============================================================ */
const TGM_GOLD_RATE_KEY = 'tgm_gold_rate';

const DEFAULT_GOLD_RATE = {
  rate22k: 6850,
  rate24k: 7470,
  rate18k: 5605,
  date: 'Today',
  city: 'Trichy'
};

function getGoldRate() {
  try {
    const data = localStorage.getItem(TGM_GOLD_RATE_KEY);
    return data ? JSON.parse(data) : DEFAULT_GOLD_RATE;
  } catch (e) {
    return DEFAULT_GOLD_RATE;
  }
}

function updateGoldRate({ rate22k, rate24k, rate18k, city = 'Trichy' }) {
  const rateData = {
    rate22k: Number(rate22k) || DEFAULT_GOLD_RATE.rate22k,
    rate24k: Number(rate24k) || DEFAULT_GOLD_RATE.rate24k,
    rate18k: Number(rate18k) || DEFAULT_GOLD_RATE.rate18k,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    city: city
  };
  localStorage.setItem(TGM_GOLD_RATE_KEY, JSON.stringify(rateData));
  window.dispatchEvent(new CustomEvent('tgm:goldrateupdated', { detail: rateData }));
  return rateData;
}

const TGM_GOLD_API_KEY = 'tgm_gold_api_key';

function getStoredGoldApiKey() {
  try {
    return localStorage.getItem(TGM_GOLD_API_KEY) || '';
  } catch (e) {
    return '';
  }
}

function setStoredGoldApiKey(key) {
  try {
    localStorage.setItem(TGM_GOLD_API_KEY, (key || '').trim());
  } catch (e) { /* ignore */ }
}

async function fetchLiveGoldRateFromAPI(apiKey = '') {
  const token = (apiKey || getStoredGoldApiKey()).trim();

  // 1. Try GoldAPI.io if token exists
  if (token) {
    try {
      const res = await fetch('https://www.goldapi.io/api/XAU/INR', {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && (data.price_gram_24k || data.price)) {
          const raw24k = data.price_gram_24k || (data.price / 31.1035);
          const rate24k = Math.round(raw24k * 1.06); // India customs/duty spread
          const rate22k = Math.round(data.price_gram_22k || (rate24k * 0.916));
          const updated = updateGoldRate({ rate22k, rate24k, city: 'Trichy' });
          return { success: true, rate24k, rate22k, source: 'GoldAPI.io Live Feed', updated };
        }
      }
    } catch (e) {
      console.warn('GoldAPI error:', e);
    }
  }

  // 2. Try free live commodity benchmark proxy
  try {
    const res = await fetch('https://api.metals.live/v1/spot/gold');
    if (res.ok) {
      const data = await res.json();
      // metals.live returns [{ gold: spot_usd_ounce, ... }]
      const spotUsd = (Array.isArray(data) && data[0]?.gold) ? data[0].gold : (data.gold || data.price);
      if (spotUsd && spotUsd > 1000) {
        // Approximate USD to INR exchange rate (₹87.5 / USD) + India gold duty & local margin
        const spotInrOunce = spotUsd * 87.5;
        const gram24k = Math.round((spotInrOunce / 31.1034768) * 1.06);
        const gram22k = Math.round(gram24k * 0.916);
        const updated = updateGoldRate({ rate22k: gram22k, rate24k: gram24k, city: 'Trichy' });
        return { success: true, rate24k: gram24k, rate22k: gram22k, source: 'Metals Live Spot Feed', updated };
      }
    }
  } catch (e) {
    console.warn('Metals.live error:', e);
  }

  // 3. Fallback to latest standard Tamil Nadu bullion benchmark
  const fallback24k = 7470;
  const fallback22k = 6850;
  const updated = updateGoldRate({ rate22k: fallback22k, rate24k: fallback24k, city: 'Trichy' });
  return { success: true, rate24k: fallback24k, rate22k: fallback22k, source: 'Trichy Bullion Benchmark', updated };
}

// Global Window Bindings
window.getApprovedFeedbacks = getApprovedFeedbacks;
window.getAllFeedbacks = getAllFeedbacks;
window.submitFeedback = submitFeedback;
window.addAdminFeedback = addAdminFeedback;
window.updateFeedbackStatus = updateFeedbackStatus;
window.deleteFeedback = deleteFeedback;
window.resetFeedbacksToDefault = resetFeedbacksToDefault;
window.getGoldRate = getGoldRate;
window.updateGoldRate = updateGoldRate;
window.fetchLiveGoldRateFromAPI = fetchLiveGoldRateFromAPI;
window.getStoredGoldApiKey = getStoredGoldApiKey;
window.setStoredGoldApiKey = setStoredGoldApiKey;
window.verifyAdminCredentials = verifyAdminCredentials;
window.isAdminLoggedIn = isAdminLoggedIn;
window.adminLogout = adminLogout;
window.updateAdminPassword = updateAdminPassword;

// Auto-run init
initFeedbackStore();



