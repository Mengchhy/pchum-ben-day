 const translations = {
        en: {
            title: "Pchum Ben Day",
            subtitle: "A Traditional Festival of Cambodia",
            a1: "Home",
            a2: "History",
            a3: "Activities",
            a4: "Gallery",
            heading: "Pchum Ben Gallery",
            subheading: "Here are some pictures related to Pchum Ben Day.",
            item1Title: "Cambodian Temple",
            item1Desc: "People visit the pagoda during Pchum Ben.",
            item2Title: "Monks Receiving Offerings",
            item2Desc: "Food and other items are offered to the monks.",
            item3Title: "Food Offerings",
            item3Desc: "Food, fruits, flowers and incense for ancestors.",
            p3: "Pchum Ben Day - Khmer Culture and Trandition."
        },
        km: {
            title: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
            subtitle: "ពិធីបុណ្យប្រពៃណីជាតិខ្មែរ",
            a1: "ទំព័រដើម",
            a2: "ប្រវត្តិ",
            a3: "សកម្មភាព",
            a4: "កម្រងរូបភាព",
            heading: "កម្រងរូបភាពពិធីបុណ្យភ្ជុំបិណ្ឌ",
            subheading: "នេះជារូបភាពមួយចំនួនដែលទាក់ទងនឹងពិធីបុណ្យភ្ជុំបិណ្ឌ។",
            item1Title: "វត្តអារាមក្នុងប្រទេសកម្ពុជា",
            item1Desc: "ប្រជាជនទៅធ្វើបុណ្យនៅវត្តអារាមក្នុងអំឡុងពេលភ្ជុំបិណ្ឌ។",
            item2Title: "ព្រះសង្ឃទទួលភត្តាហារ",
            item2Desc: "ចង្ហាន់ និងទេយ្យវត្ថុផ្សេងៗត្រូវបានប្រគេនដល់ព្រះសង្ឃ។",
            item3Title: "ការរៀបចំចង្ហាន់ និងទេយ្យវត្ថុ",
            item3Desc: "ចង្ហាន់ ផ្លែឈើ ផ្កា និងធូបទៀន សម្រាប់បូជា និងឧទ្ទិសដល់បុព្វបុរស។",
            p3: "ថ្ងៃបុណ្យភ្ជុំបិណ្ឌ - វប្បធម៌ និងប្រពៃណីខ្មែរ។"
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("preferredLanguage") || "en";
        applyLanguage(savedLang);
    });

    function toggleLanguage(lang) {
        localStorage.setItem("preferredLanguage", lang);
        applyLanguage(lang);
    }

    function applyLanguage(lang) {
        document.querySelector('.header-title h1').textContent = translations[lang].title;
        document.querySelector('.header-title p').textContent = translations[lang].subtitle;
        document.querySelector('.content h2').textContent = translations[lang].heading;
        document.querySelector('.content > p').textContent = translations[lang].subheading;

        const cards = document.querySelectorAll('.gallery-card');

        cards[0].querySelector('.card-title').textContent = translations[lang].item1Title;
        cards[0].querySelector('.card-desc').textContent = translations[lang].item1Desc;

        cards[1].querySelector('.card-title').textContent = translations[lang].item2Title;
        cards[1].querySelector('.card-desc').textContent = translations[lang].item2Desc;

        cards[2].querySelector('.card-title').textContent = translations[lang].item3Title;
        cards[2].querySelector('.card-desc').textContent = translations[lang].item3Desc;

        document.getElementById('p3').textContent = translations[lang].p3;
        document.getElementById('a1').textContent = translations[lang].a1;
        document.getElementById('a2').textContent = translations[lang].a2;
        document.getElementById('a3').textContent = translations[lang].a3;
        document.getElementById('a4').textContent = translations[lang].a4;

    }