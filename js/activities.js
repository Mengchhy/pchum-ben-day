const translations = {
        en: {
            title: "Pchum Ben Day",
            subtitle: "A Traditional Festival of Cambodia",
            a1: "Home",
            a2: "History",
            a3: "Activities",
            a4: "Gallery",
            heading: "Activities During Pchum Ben Day",
            subheading: "During Pchum Ben, Cambodian people participate in many traditional activities.",
            act1Title: "Visit the Pagoda",
            act1Desc: "People go to the pagoda to make offerings and pray.",
            act2Title: "Offer Food to Monks",
            act2Desc: "Food, fruits, flowers, and other items are prepared to offer to the monks.",
            act3Title: "Pray for Ancestors",
            act3Desc: "People pray for the souls of their ancestors and wish them a better next life.",
            act4Title: "Spend Time with Family",
            act4Desc: "Families gather together and participate in the festival.",
            p3: "Pchum Ben Day - Khmer Culture and Trandition.",
            p5: "People offering food to the monks during Pchum Ben Day."
        },
        km: {
            title: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
            subtitle: "ពិធីបុណ្យប្រពៃណីជាតិខ្មែរ",
            a1: "ទំព័រដើម",
            a2: "ប្រវត្តិ",
            a3: "សកម្មភាព",
            a4: "កម្រងរូបភាព",
            heading: "សកម្មភាពក្នុងអំឡុងពេលបុណ្យភ្ជុំបិណ្ឌ",
            subheading: "ក្នុងអំឡុងពេលភ្ជុំបិណ្ឌ ប្រជាជនកម្ពុជាចូលរួមក្នុងសកម្មភាពប្រពៃណីជាច្រើន។",
            act1Title: "ទៅវត្តអារាម",
            act1Desc: "ប្រជាជនទៅវត្តអារាមដើម្បីធ្វើបុណ្យទាន និងបួងសួង។",
            act2Title: "រៀបចំចង្ហាន់ប្រគេនព្រះសង្ឃ",
            act2Desc: "ចង្ហាន់ ផ្លែឈើ ផ្កា និងទេយ្យវត្ថុផ្សេងៗត្រូវបានរៀបចំប្រគេនព្រះសង្ឃ។",
            act3Title: "បួងសួងដល់បុព្វបុរស",
            act3Desc: "ប្រជាជនបួងសួងដល់វិញ្ញាណក្ខន្ធបុព្វបុរស និងប្រាថ្នាឱ្យពួកគាត់បានទៅកាន់សុគតិភព។",
            act4Title: "ជួបជុំគ្រួសារ",
            act4Desc: "ក្រុមគ្រួសារជួបជុំគ្នា និងចូលរួមក្នុងពិធីបុណ្យយ៉ាងសប្បាយរីករាយ។",
            p3: "ថ្ងៃបុណ្យភ្ជុំបិណ្ឌ - វប្បធម៌ និងប្រពៃណីខ្មែរ",
            p5: "ប្រជាជនយកចង្ហាន់ទៅប្រគេនព្រះសង្ឃក្នុងឱកាស បុណ្យភ្ជុំបិណ្ឌ។"
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

        const items = document.querySelectorAll('.activity-text');
        items[0].querySelector('strong').textContent = translations[lang].act1Title;
        items[0].childNodes[2].textContent = " " + translations[lang].act1Desc;

        items[1].querySelector('strong').textContent = translations[lang].act2Title;
        items[1].childNodes[2].textContent = " " + translations[lang].act2Desc;

        items[2].querySelector('strong').textContent = translations[lang].act3Title;
        items[2].childNodes[2].textContent = " " + translations[lang].act3Desc;

        items[3].querySelector('strong').textContent = translations[lang].act4Title;
        items[3].childNodes[2].textContent = " " + translations[lang].act4Desc;

        document.getElementById('p3').textContent = translations[lang].p3;
        document.getElementById('a1').textContent = translations[lang].a1;
        document.getElementById('a2').textContent = translations[lang].a2;
        document.getElementById('a3').textContent = translations[lang].a3;
        document.getElementById('a4').textContent = translations[lang].a4;
        document.getElementById('p5').textContent = translations[lang].p5;
    }