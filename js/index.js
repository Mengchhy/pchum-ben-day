const translations = {
        en: {
            title: "Pchum Ben Day",
            subtitle: "A Traditional Festival of Cambodia",
            a1: "Home",
            a2: "History",
            a3: "Activities",
            a4: "Gallery",
            heading: "Welcome to Pchum Ben Day",
            p1: "Pchum Ben Day is one of the most important traditional festivals in Cambodia. It is a time for Cambodians to remember and pay respect to their ancestors who have passed away.",
            p2: "During this period, people visit pagodas, make offerings of food, fruits, flowers, and other items to the monks, and pray for the souls of their ancestors.",
            btn: "Learn More About Pchum Ben",
            p3: "Pchum Ben Day - Khmer Culture and Trandition."
        },
        km: {
            title: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
            subtitle: "ពិធីបុណ្យប្រពៃណីជាតិខ្មែរ",
            a1: "ទំព័រដើម",
            a2: "ប្រវត្តិ",
            a3: "សកម្មភាព",
            a4: "កម្រងរូបភាព",
            heading: "សូមស្វាគមន៍មកកាន់ពិធីបុណ្យភ្ជុំបិណ្ឌ",
            p1: "ពិធីបុណ្យភ្ជុំបិណ្ឌ គឺជាពិធីបុណ្យប្រពៃណីជាតិដ៏សំខាន់មួយនៅក្នុងប្រទេសកម្ពុជា។ វាជាពេលវេលាដែលប្រជាជនកម្ពុជានឹកគុណ និងឧទ្ទិសកុសលជូនដល់បុព្វបុរស និងជីដូនជីតាដែលបានចែកឋានទៅ។",
            p2: "ក្នុងអំឡុងពេលនេះ ប្រជាជនតែងតែទៅវត្តអារាម ប្រគេនចង្ហាន់ ផ្លែឈើ ផ្កា និងទេយ្យវត្ថុផ្សេងៗដល់ព្រះសង្ឃ និងបួងសួងសុំសេចក្តីសុខ។",
            btn: "ស្វែងយល់បន្ថែមអំពីបុណ្យភ្ជុំបិណ្ឌ",
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
        document.getElementById('title').textContent = translations[lang].title;
        document.getElementById('subtitle').textContent = translations[lang].subtitle;
        document.getElementById('heading').textContent = translations[lang].heading;
        document.getElementById('p1').textContent = translations[lang].p1;
        document.getElementById('p2').textContent = translations[lang].p2;
        document.getElementById('btn').textContent = translations[lang].btn;
        document.getElementById('p3').textContent = translations[lang].p3;
        document.getElementById('a1').textContent = translations[lang].a1;
        document.getElementById('a2').textContent = translations[lang].a2;
        document.getElementById('a3').textContent = translations[lang].a3;
        document.getElementById('a4').textContent = translations[lang].a4;
    }