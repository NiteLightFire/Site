const tabs = document.querySelectorAll('.tab');
const desktopView = document.getElementById('desktopView');
const mobileView = document.getElementById('mobileView');
const mobileIndicator = document.getElementById('mobileIndicator');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const viewType = tab.getAttribute('data-view');
        if (viewType === 'mobile') {
            desktopView.classList.remove('active');
            mobileView.classList.add('active');
            mobileIndicator.classList.remove('hidden');
        } else {
            mobileView.classList.remove('active');
            desktopView.classList.add('active');
            mobileIndicator.classList.add('hidden');
        }
    });
});
function toggleDropdown() {
  const menu = document.getElementById('dropdown');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        header.classList.toggle('active');
        content.classList.toggle('open');
    });
});



const emailInputs = document.querySelectorAll('.email');

emailInputs.forEach((emailInput) => {
    const emailGroup = emailInput.closest('.email-group');
    const errorMessage = emailGroup.querySelector('.error-message');

    const updateValueState = () => {
        const hasValue = emailInput.value.trim() !== '';
        emailGroup.classList.toggle('has-value', hasValue);
    };

    const validate = () => {
        const value = emailInput.value.trim();
        const isValid = !value || validateEmail(value);

        emailGroup.classList.toggle('error', !isValid);

        if (!isValid) {
            errorMessage.textContent = 'Пожалуйста, введите корректный email';
        } else {
            errorMessage.textContent = '';
        }
    };

    emailInput.addEventListener('focus', () => {
        emailGroup.classList.add('focused');
        errorMessage.textContent = '';
        emailGroup.classList.remove('error');
    });

    emailInput.addEventListener('blur', () => {
        emailGroup.classList.remove('focused');
        updateValueState();
        validate();
    });

    emailInput.addEventListener('input', () => {
        updateValueState();
        errorMessage.textContent = '';
        emailGroup.classList.remove('error');
    });
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

if (openModal && modal) {
    openModal.addEventListener("click", () => {
        modal.classList.add("show");
    });
  }
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
  });