const translations = {

    en: {
        logoSubtitle: "Rural Awareness Portal",
        home: "Home",
        schemes: "Government Schemes",
        updates: "Latest Updates",
        sanitation: "Sanitation",
        faq: "FAQ",

        welcome: "WELCOME TO GRAMA SEVA",
        heroTitle: "Government Schemes",
        heroTitle2: "Made Simple for Villages",

        heroText:
            "Find government schemes, latest updates and sanitation information in a simple and easy-to-understand format.",

        viewSchemes: "🏛️ View Government Schemes",
        latestUpdates: "🔔 Latest Updates",

        schemeHeading: "Government Schemes",
        schemeDescription:
            "Learn about important schemes related to sanitation and rural development.",

        updatesHeading: "Latest Government Updates",
        sanitationHeading: "Sanitation & Sewage Management",
        faqHeading: "Frequently Asked Questions"
    },


    kn: {
        logoSubtitle: "ಗ್ರಾಮೀಣ ಜಾಗೃತಿ ಪೋರ್ಟಲ್",
        home: "ಮುಖಪುಟ",
        schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        updates: "ಇತ್ತೀಚಿನ ಮಾಹಿತಿ",
        sanitation: "ನೈರ್ಮಲ್ಯ",
        faq: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",

        welcome: "ಗ್ರಾಮ ಸೇವೆಗೆ ಸ್ವಾಗತ",
        heroTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        heroTitle2: "ಗ್ರಾಮಗಳಿಗೆ ಸರಳವಾಗಿ",

        heroText:
            "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಇತ್ತೀಚಿನ ಮಾಹಿತಿ ಮತ್ತು ನೈರ್ಮಲ್ಯ ಸಂಬಂಧಿತ ಮಾಹಿತಿಯನ್ನು ಸರಳವಾಗಿ ತಿಳಿದುಕೊಳ್ಳಿ.",

        viewSchemes: "🏛️ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
        latestUpdates: "🔔 ಇತ್ತೀಚಿನ ಮಾಹಿತಿ",

        schemeHeading: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        schemeDescription:
            "ನೈರ್ಮಲ್ಯ ಮತ್ತು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಮುಖ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",

        updatesHeading: "ಇತ್ತೀಚಿನ ಸರ್ಕಾರಿ ಮಾಹಿತಿ",
        sanitationHeading: "ನೈರ್ಮಲ್ಯ ಮತ್ತು ಒಳಚರಂಡಿ ನಿರ್ವಹಣೆ",
        faqHeading: "ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು"
    },


    hi: {
        logoSubtitle: "ग्रामीण जागरूकता पोर्टल",
        home: "होम",
        schemes: "सरकारी योजनाएं",
        updates: "नवीनतम अपडेट",
        sanitation: "स्वच्छता",
        faq: "सामान्य प्रश्न",

        welcome: "ग्राम सेवा में आपका स्वागत है",
        heroTitle: "सरकारी योजनाएं",
        heroTitle2: "गांवों के लिए आसान",

        heroText:
            "सरकारी योजनाओं, नवीनतम अपडेट और स्वच्छता से जुड़ी जानकारी को सरल भाषा में जानें।",

        viewSchemes: "🏛️ सरकारी योजनाएं देखें",
        latestUpdates: "🔔 नवीनतम अपडेट",

        schemeHeading: "सरकारी योजनाएं",
        schemeDescription:
            "स्वच्छता और ग्रामीण विकास से जुड़ी महत्वपूर्ण योजनाओं के बारे में जानें।",

        updatesHeading: "नवीनतम सरकारी अपडेट",
        sanitationHeading: "स्वच्छता और सीवेज प्रबंधन",
        faqHeading: "अक्सर पूछे जाने वाले प्रश्न"
    }
};


const languageSelector = document.getElementById("language");


languageSelector.addEventListener("change", function () {

    const selectedLanguage = this.value;

    const text = translations[selectedLanguage];

    document.querySelector(".logo small").textContent =
        text.logoSubtitle;

    document.querySelectorAll("nav a")[0].textContent =
        text.home;

    document.querySelectorAll("nav a")[1].textContent =
        text.schemes;

    document.querySelectorAll("nav a")[2].textContent =
        text.updates;

    document.querySelectorAll("nav a")[3].textContent =
        text.sanitation;

    document.querySelectorAll("nav a")[4].textContent =
        text.faq;


    document.querySelector(".welcome").textContent =
        text.welcome;

    document.querySelector(".hero h1").innerHTML =
        text.heroTitle + "<br><span>" +
        text.heroTitle2 + "</span>";

    document.querySelector(".hero p").textContent =
        text.heroText;


    document.querySelector(".primary-btn").textContent =
        text.viewSchemes;

    document.querySelector(".secondary-btn").textContent =
        text.latestUpdates;


    document.querySelector("#schemes .section-heading h2").textContent =
        text.schemeHeading;

    document.querySelector("#schemes .section-heading p").textContent =
        text.schemeDescription;


    document.querySelector("#updates .section-heading h2").textContent =
        text.updatesHeading;

    document.querySelector("#sanitation .section-heading h2").textContent =
        text.sanitationHeading;

    document.querySelector("#faq .section-heading h2").textContent =
        text.faqHeading;
});