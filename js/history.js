const translations = {
        en: {
            title: "Pchum Ben Day",
            subtitle: "A Traditional Festival of Cambodia",
            a1: "Home",
            a2: "History",
            a3: "Activities",
            a4: "Gallery",
            heading: "History of Pchum Ben Day",
            p1: "Pchum Ben Day (also known as Ancestors' Day) is a traditional Buddhist festival in Cambodia. It has been practiced for many centuries and is an important part of Khmer culture.",
            p2: "According to Buddhist belief, during this period, the gates of the spirit world are opened, and the souls of the deceased can visit the living. People make offerings to the monks and pray for the progress of their ancestors' souls.",
            cap: "People make offerings to the monks at the pagoda.",
            p3: "Pchum Ben Day - Khmer Culture and Trandition."
        },
        km: {
            title: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
            subtitle: "ពិធីបុណ្យប្រពៃណីជាតិខ្មែរ",
            a1: "ទំព័រដើម",
            a2: "ប្រវត្តិ",
            a3: "សកម្មភាព",
            a4: "កម្រងរូបភាព",
            heading: "ប្រវត្តិបុណ្យភ្ជុំបិណ្ឌ",
            p1: "ពិធីបុណ្យភ្ជុំបិណ្ឌ គឺជាពិធីបុណ្យព្រះពុទ្ធសាសនាប្រពៃណីដ៏យូរលង់មួយនៅក្នុងប្រទេសកម្ពុជា ដែលត្រូវបានប្រតិបត្តិតាំងពីច្រើនសតវត្សរ៍មកហើយ។",
            p2: "តាមជំនឿព្រះពុទ្ធសាសនា ក្នុងអំឡុងពេលនេះ ទ្វារនរកត្រូវបានបើក ហើយវិញ្ញាណក្ខន្ធប្រែតអាចមកទទួលកុសលផលបុណ្យពីសាច់ញាតិបាន។",
            cap: "ប្រជាជនធ្វើចង្ហាន់ប្រគេនព្រះសង្ឃនៅវត្តអារាម។",
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
        document.getElementById('heading').textContent = translations[lang].heading;
        document.getElementById('p1').textContent = translations[lang].p1;
        document.getElementById('p2').textContent = translations[lang].p2;
        document.getElementById('cap').textContent = translations[lang].cap;
        document.getElementById('p3').textContent = translations[lang].p3;
        document.getElementById('a1').textContent = translations[lang].a1;
        document.getElementById('a2').textContent = translations[lang].a2;
        document.getElementById('a3').textContent = translations[lang].a3;
        document.getElementById('a4').textContent = translations[lang].a4;
    }