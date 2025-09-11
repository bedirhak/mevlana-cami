// DOM yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguage();
    setupLanguageSwitcher();
    updatePageTexts();
});

// Dil başlatma
function initializeLanguage() {
    // Sayfanın dilini ayarla
    document.documentElement.lang = currentLanguage;

    // Aktif dil butonunu işaretle
    updateLanguageButtons();
}

// Dil değiştirici butonları ayarla
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });
}

// Dil değiştir
function changeLanguage(newLanguage) {
    if (translations[newLanguage]) {
        currentLanguage = newLanguage;

        // Dili localStorage'a kaydet
        localStorage.setItem('selectedLanguage', newLanguage);

        // Sayfanın dilini güncelle
        document.documentElement.lang = newLanguage;

        // Butonların görünümünü güncelle
        updateLanguageButtons();

        // Sayfa metinlerini güncelle
        updatePageTexts();
    }
}

// Dil butonlarının aktif durumunu güncelle
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        const buttonLang = button.getAttribute('data-lang');
        if (buttonLang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Sayfa metinlerini güncelle
function updatePageTexts() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        const translatedText = getTranslation(translationKey);

        if (translatedText) {
            // HTML içeriği varsa (örn: <br> etiketleri için)
            if (translatedText.includes('<br>')) {
                element.innerHTML = translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });

    // Sayfa başlığını da güncelle
    updatePageTitle();
}

// Sayfa başlığını güncelle
function updatePageTitle() {
    const titleElement = document.querySelector('title[data-translate]');
    if (titleElement) {
        const translationKey = titleElement.getAttribute('data-translate');
        const translatedTitle = getTranslation(translationKey);
        if (translatedTitle) {
            document.title = translatedTitle;
        }
    }
}

// Çeviri metnini getir
function getTranslation(key) {
    const languageTranslations = translations[currentLanguage];
    if (languageTranslations && languageTranslations[key]) {
        return languageTranslations[key];
    }

    // Eğer mevcut dilde çeviri yoksa, varsayılan dili dene
    const defaultTranslations = translations[DEFAULT_LANGUAGE];
    if (defaultTranslations && defaultTranslations[key]) {
        return defaultTranslations[key];
    }

    // Hiç çeviri bulunamazsa anahtarı döndür
    return key;
}

// Form gönderme işlemi (isteğe bağlı)
document.addEventListener('submit', function (e) {
    const form = e.target;
    if (form.tagName === 'FORM') {
        e.preventDefault();

        // Form verilerini al
        const formData = new FormData(form);

        // Basit bir başarı mesajı göster
        alert(getTranslation('contact.form.success') || 'Mesajınız başarıyla gönderildi!');

        // Formu temizle
        form.reset();
    }
});

// Sayfa yüklendiğinde aktif sayfa linkini işaretle
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Sayfa yüklendiğinde aktif linki ayarla
document.addEventListener('DOMContentLoaded', setActiveNavLink);
