// DOM yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupDonationModal(); // Modal fonksiyonunu ekle
    setupFormDownload(); // PDF form indirme fonksiyonu
    // Diğer fonksiyonları çalıştırmadan önce kontrol et
    if (typeof translations !== 'undefined') {
        initializeLanguage();
        setupLanguageSwitcher();
        updatePageTexts();
    }
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
// document.addEventListener('submit', function (e) {
//     const form = e.target;
//     if (form.tagName === 'FORM') {
//         e.preventDefault();

//         // Form verilerini al
//         const formData = new FormData(form);

//         // Basit bir başarı mesajı göster
//         alert(getTranslation('contact.form.success') || 'Mesajınız başarıyla gönderildi!');

//         // Formu temizle
//         form.reset();
//     }
// });

// // Sayfa yüklendiğinde aktif sayfa linkini işaretle
// function setActiveNavLink() {
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//     const navLinks = document.querySelectorAll('.nav-menu a');

//     navLinks.forEach(link => {
//         const href = link.getAttribute('href');
//         if (href === currentPage || (currentPage === '' && href === 'index.html')) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// }

// // Sayfa yüklendiğinde aktif linki ayarla
// document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Mobile Menu Fonksiyonu
function setupMobileMenu() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuIcon && navMenu) {
        // Menu icon'a tıklanınca menüyü aç/kapat
        mobileMenuIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            navMenu.classList.toggle('open');

            // Icon'u değiştir
            if (navMenu.classList.contains('open')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
            } else {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
        });

        // Menü linklerine tıklanınca menüyü kapat
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            });
        });

        // Menü dışına tıklanınca menüyü kapat
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
                navMenu.classList.remove('open');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
        });
    }
}

// Bağış şartları modal fonksiyonu
function setupDonationModal() {
    const modal = document.getElementById('donation-terms-modal');
    const openBtn = document.getElementById('open-donation-terms');
    const closeBtn = document.querySelector('.close-button');

    if (modal && openBtn && closeBtn) {
        // Modal'ı aç ve PDF'i yükle
        openBtn.addEventListener('click', function () {
            const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
            const pdfPath = currentLanguage === 'no' ? 'assets/pdf/taxNo.pdf' : 'assets/pdf/taxTr.pdf';

            // PDF elementlerini ayarla
            const pdfViewer = document.getElementById('pdf-viewer');
            const pdfDownloadLink = document.getElementById('pdf-download-link');
            const pdfOpenNewTab = document.getElementById('pdf-open-new-tab');
            const pdfDownload = document.getElementById('pdf-download');

            if (pdfViewer) {
                pdfViewer.src = pdfPath;
            }

            if (pdfDownloadLink) {
                pdfDownloadLink.href = pdfPath;
            }

            if (pdfOpenNewTab) {
                pdfOpenNewTab.href = pdfPath;
            }

            if (pdfDownload) {
                pdfDownload.href = pdfPath;
                pdfDownload.download = currentLanguage === 'no' ? 'Skattefordeler_Norsk.pdf' : 'Vergi_Avantajlari_Turkce.pdf';
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Arka plan scroll'unu engelle
        });

        // Modal'ı kapat (X butonu)
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Scroll'u geri aç

            // PDF kaynağını temizle
            const pdfViewer = document.getElementById('pdf-viewer');
            if (pdfViewer) {
                pdfViewer.src = '';
            }
        });

        // Modal dışına tıklanınca kapat
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Scroll'u geri aç

                // PDF kaynağını temizle
                const pdfViewer = document.getElementById('pdf-viewer');
                if (pdfViewer) {
                    pdfViewer.src = '';
                }
            }
        });

        // ESC tuşu ile kapat
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Scroll'u geri aç

                // PDF kaynağını temizle
                const pdfViewer = document.getElementById('pdf-viewer');
                if (pdfViewer) {
                    pdfViewer.src = '';
                }
            }
        });
    }
}

// Çocuk bilgileri yönetimi
function setupChildrenManagement() {
    const addChildBtn = document.getElementById('addChildBtn');
    const childrenContainer = document.getElementById('childrenContainer');
    let childCounter = 0;

    if (!addChildBtn || !childrenContainer) return;

    // Çocuk ekle butonu
    addChildBtn.addEventListener('click', function () {
        childCounter++;
        addChildForm(childCounter);
    });

    // Çocuk formu oluştur
    function addChildForm(childNumber) {
        const childDiv = document.createElement('div');
        childDiv.className = 'child-form';
        childDiv.id = `child-${childNumber}`;

        childDiv.innerHTML = `
            <div class="child-header">
                <h4 data-translate="membership.form.children.child.title">Çocuk ${childNumber}</h4>
                <button type="button" class="remove-child-btn" data-child-id="${childNumber}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="childName${childNumber}" data-translate="membership.form.children.name.label">Çocuğun Adı</label>
                    <input type="text" id="childName${childNumber}" name="cocuk_${childNumber}_adi" 
                           data-translate-placeholder="membership.form.children.name.placeholder">
                    <i class="fas fa-baby form-icon"></i>
                </div>
                <div class="form-group">
                    <label for="childSurname${childNumber}" data-translate="membership.form.children.surname.label">Çocuğun Soyadı</label>
                    <input type="text" id="childSurname${childNumber}" name="cocuk_${childNumber}_soyadi" 
                           data-translate-placeholder="membership.form.children.surname.placeholder">
                    <i class="fas fa-baby form-icon"></i>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="childBirthDate${childNumber}" data-translate="membership.form.children.birthDate.label">Doğum Tarihi</label>
                    <input type="date" id="childBirthDate${childNumber}" name="cocuk_${childNumber}_dogum_tarihi">
                    <i class="fas fa-calendar-alt form-icon"></i>
                </div>
                <div class="form-group">
                    <label for="childGender${childNumber}" data-translate="membership.form.children.gender.label">Cinsiyet</label>
                    <select id="childGender${childNumber}" name="cocuk_${childNumber}_cinsiyet">
                        <option value="" data-translate="membership.form.children.gender.select">Seçiniz</option>
                        <option value="Erkek" data-translate="membership.form.children.gender.male">Erkek</option>
                        <option value="Kız" data-translate="membership.form.children.gender.female">Kız</option>
                    </select>
                    <i class="fas fa-venus-mars form-icon"></i>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="childPersonnummer${childNumber}" data-translate="membership.form.children.personnummer.label">Kişi Numarası</label>
                    <input type="text" id="childPersonnummer${childNumber}" name="cocuk_${childNumber}_kisi_numarasi" 
                           pattern="[0-9]{11}" maxlength="11"
                           data-translate-placeholder="membership.form.children.personnummer.placeholder">
                    <i class="fas fa-id-card form-icon"></i>
                </div>
                <div class="form-group">
                    <!-- Empty space for layout symmetry -->
                </div>
            </div>
        `;

        childrenContainer.appendChild(childDiv);

        // Remove button için event listener ekle
        const removeBtn = childDiv.querySelector('.remove-child-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', function () {
                removeChild(childNumber);
            });
        }

        // Yeni eklenen elementlere çeviri uygula
        if (typeof updatePageTexts === 'function') {
            updatePageTexts();
        }
    }

    // Çocuk sil fonksiyonu (local scope)
    function removeChild(childNumber) {
        const childElement = document.getElementById(`child-${childNumber}`);
        if (childElement) {
            childElement.remove();
        }
    }
}

// Sayfa yüklendiğinde çocuk yönetimini başlat
document.addEventListener('DOMContentLoaded', function () {
    setupChildrenManagement();
});

// PDF Form indirme fonksiyonu
function setupFormDownload() {
    const downloadBtn = document.getElementById('downloadFormBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // PDF dosyasını indir
            const link = document.createElement('a');
            link.href = 'assets/pdf/registrationForm.pdf';
            link.download = 'Uyelik_Formu.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // İsteğe bağlı: İndirme başarılı mesajı
            console.log('Üyelik formu indiriliyor...');
        });
    }
}
