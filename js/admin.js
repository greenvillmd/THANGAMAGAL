/* ============================================================
   THANGAMAGAL — Admin Portal Logic (Auth & Security Only)
   ============================================================ */

(function () {
  const TGM_AUTH_KEY = 'tgm_admin_hash';
  const TGM_SESSION_KEY = 'tgm_admin_session';
  const DEFAULT_ADMIN_HASH = 'fa4fb6f20159c9bbd21d6126797e5223918bf0f764c9270750e3e537cc747fed';
  const DEFAULT_ADMIN_USER = 'admin';

  // SHA-256 Helper using Web Crypto API
  async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Auth helper methods
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
    return Boolean(sessionStorage.getItem(TGM_SESSION_KEY));
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

  // Toast Notification
  function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toastIcon.textContent = isError ? '⚠️' : '✓';
    toastIcon.className = isError ? 'text-red-400 text-lg' : 'text-gold text-lg';
    toast.classList.remove('translate-y-[-150%]');

    setTimeout(() => {
      toast.classList.add('translate-y-[-150%]');
    }, 3500);
  }

  // Auth UI Switcher
  function checkAuthState() {
    const isLogged = isAdminLoggedIn();
    const loginSection = document.getElementById('login-section');
    const dashSection = document.getElementById('dashboard-section');

    if (isLogged) {
      if (loginSection) loginSection.classList.add('hidden');
      if (dashSection) dashSection.classList.remove('hidden');
    } else {
      if (loginSection) loginSection.classList.remove('hidden');
      if (dashSection) dashSection.classList.add('hidden');
    }
  }

  // Login handler
  async function handleLogin() {
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const errorBox = document.getElementById('login-error');
    const submitBtn = document.getElementById('login-submit-btn');

    if (!usernameInput || !passwordInput) return;

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (errorBox) errorBox.classList.add('hidden');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Verifying credentials...</span>`;
    }

    const isValid = await verifyAdminCredentials(username, password);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Sign In to Dashboard</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;
    }

    if (isValid) {
      passwordInput.value = '';
      showToast('Welcome back, Admin!');
      checkAuthState();
    } else if (errorBox) {
      errorBox.textContent = 'Invalid username or password. (Default: admin / thangamagal@2026)';
      errorBox.classList.remove('hidden');
    }
  }

  function openModal(id) {
    const m = document.getElementById(id);
    if (m) {
      m.classList.remove('hidden');
      m.classList.add('flex');
    }
  }

  function closeModal(id) {
    const m = document.getElementById(id);
    if (m) {
      m.classList.add('hidden');
      m.classList.remove('flex');
    }
  }

  // Init event listeners
  document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();

    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
      });
    }

    // Toggle password visibility
    const togglePwdBtn = document.getElementById('toggle-pwd-btn');
    if (togglePwdBtn) {
      togglePwdBtn.addEventListener('click', () => {
        const pwdInput = document.getElementById('login-password');
        if (pwdInput) {
          pwdInput.type = (pwdInput.type === 'password') ? 'text' : 'password';
        }
      });
    }

    // Logout
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        adminLogout();
        showToast('Logged out successfully.');
        checkAuthState();
      });
    }

    // Open Change Password modal
    const changePwdBtn = document.getElementById('btn-change-pwd');
    if (changePwdBtn) {
      changePwdBtn.addEventListener('click', () => {
        openModal('modal-change-pwd');
      });
    }

    // Change Password Form
    const changePwdForm = document.getElementById('form-change-pwd');
    if (changePwdForm) {
      changePwdForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const oldPwd = document.getElementById('cp-old').value;
        const newPwd = document.getElementById('cp-new').value;
        const confirmPwd = document.getElementById('cp-confirm').value;
        const errBox = document.getElementById('cp-error');

        if (errBox) errBox.classList.add('hidden');
        if (newPwd !== confirmPwd) {
          if (errBox) {
            errBox.textContent = 'New passwords do not match.';
            errBox.classList.remove('hidden');
          }
          return;
        }

        const res = await updateAdminPassword(oldPwd, newPwd);
        if (res.success) {
          changePwdForm.reset();
          closeModal('modal-change-pwd');
          showToast(res.message);
        } else if (errBox) {
          errBox.textContent = res.message;
          errBox.classList.remove('hidden');
        }
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal('modal-change-pwd');
      });
    });

    // Close on backdrop click
    const modal = document.getElementById('modal-change-pwd');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal('modal-change-pwd');
      });
    }
  });
})();
