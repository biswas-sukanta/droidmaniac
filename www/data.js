const AARTIS = [
    {
        id: 'shiva', emoji: '🔱', audio: 'aarti_audio/Om Jai Shiv Omkara.mp3',
        name: 'Shiv Aarti', nameHi: 'शिव आरती', nameBn: 'শিব আরতি', nameTa: 'சிவ ஆரத்தி', nameTe: 'శివ ఆరతి', nameMr: 'शिव आरती', nameGu: 'શિવ આરતી', nameKn: 'ಶಿವ ಆರತಿ',
        mantra: 'ॐ जय शिव ओंकारा', mantraEn: 'Om Jai Shiv Omkara',
        mantraBn: 'ওম জয় শিব ওমকারা', mantraTa: 'ஓம் ஜெய் சிவ ஓம்காரா', mantraTe: 'ఓం జై శివ ఓంకా', mantraMr: 'ॐ जय शिव ओंकारा', mantraGu: 'ૐ જય શિવ ઓમકારા', mantraKn: 'ಓಂ ಜೈ ಶಿವ ಓಂಕಾರ'
    },
    {
        id: 'hanuman', emoji: '🐒', audio: 'aarti_audio/Shree Hanuman Chalisa.mp3',
        name: 'Hanuman Chalisa', nameHi: 'हनुमान चालीसा', nameBn: 'হনুমান চালিসা', nameTa: 'ஹனுமன் சாலிசா', nameTe: 'హనుమాన్ చాలీసా', nameMr: 'हनुमान चालीसा', nameGu: 'હનુમાન ચાલીસા', nameKn: 'ಹನುಮಾನ್ ಚಾಲೀಸಾ',
        mantra: 'श्री गुरु चरण सरोज रज', mantraEn: 'Shree Guru Charan Saroj Raj',
        mantraBn: 'শ্রী গুরু চরণ সরোজ রাজ', mantraTa: 'ஸ்ரீ குரு சரண் சரோஜ் ராஜ்', mantraTe: 'శ్రీ గురు చరణ్ సరోజ్ రాజ్', mantraMr: 'श्री गुरु चरण सरोज रज', mantraGu: 'શ્રી ગુરુ ચરણ સરોજ રાજ', mantraKn: 'ಶ್ರೀ ಗುರು ಚರಣ್ ಸರೋಜ ರಾಜ್'
    },
    {
        id: 'ganesh', emoji: '🙏', audio: 'aarti_audio/Jai Ganesh Deva Aartil.mp3',
        name: 'Ganesh Aarti', nameHi: 'गणेश आरती', nameBn: 'গণেশ আরতি', nameTa: 'கணேஷ் ஆரத்தி', nameTe: 'గణేష్ ఆరతి', nameMr: 'गणेश आरती', nameGu: 'ગણેશ આરતી', nameKn: 'ಗಣೇಶ ಆರತಿ',
        mantra: 'जय गणेश जय गणेश देवा', mantraEn: 'Jai Ganesh Jai Ganesh Deva',
        mantraBn: 'জয় গণেশ জয় গণেশ দেবা', mantraTa: 'ஜெய் கணேஷ் ஜெய் கணேஷ் தேவா', mantraTe: 'జై గణేష్ జై గణేష్ దేವಾ', mantraMr: 'जय गणेश जय गणेश देवा', mantraGu: 'જય ગણેશ જય ગણેશ દેવા', mantraKn: 'ಜೈ ಗಣೇಶ್ ಜೈ ಗಣೇಶ್ ದೇವಾ'
    },
    {
        id: 'vishnu', emoji: '🧘', audio: 'aarti_audio/Om Jai Jagdish Hare.mp3',
        name: 'Vishnu Aarti', nameHi: 'विष्णु आरती', nameBn: 'বিষ্ণু আরতি', nameTa: 'விஷ்ணு ஆரத்தி', nameTe: 'విష్ణు ఆరతి', nameMr: 'विष्णु आरती', nameGu: 'વિષ્ણુ આરતી', nameKn: 'ವಿಷ್ಣು ಆರತಿ',
        mantra: 'ॐ जय जगदीश हरे', mantraEn: 'Om Jai Jagdish Hare',
        mantraBn: 'ওম জয় জগদীশ হরে', mantraTa: 'ஓம் ஜெய் ஜெகதீஷ் ஹரே', mantraTe: 'ఓం జై జగదీష్ హరే', mantraMr: 'ॐ जय जगदीश हरे', mantraGu: 'ૐ જય જગદીશ હરે', mantraKn: 'ಓಂ ಜೈ ಜಗದೀಶ್ ಹರೇ'
    },
    {
        id: 'lakshmi', emoji: '🪷', audio: 'aarti_audio/Om Jai Laxmi Mata.mp3',
        name: 'Lakshmi Aarti', nameHi: 'लक्ष्मी आरती', nameBn: 'লক্ষ্মী আরতি', nameTa: 'லட்சுமி ஆரத்தி', nameTe: 'లక్ష్మీ ఆరతి', nameMr: 'लक्ष्मी आरती', nameGu: 'લક્ષ્મી આરતી', nameKn: 'ಲಕ್ಷ್ಮಿ ಆರತಿ',
        mantra: 'ॐ जय लक्ष्मी माता', mantraEn: 'Om Jai Lakshmi Mata',
        mantraBn: 'ওম জয় লক্ষ্মী মাতা', mantraTa: 'ஓம் ஜெய் லக்ஷ்மி மாதா', mantraTe: 'ఓం జై లక్ష్మీ మాత', mantraMr: 'ॐ जय लक्ष्मी माता', mantraGu: 'ૐ જય લક્ષ્મી માતા', mantraKn: 'ಓಂ ಜೈ ಲಕ್ಷ್ಮಿ ಮಾತಾ'
    },
    {
        id: 'durga', emoji: '🦁', audio: 'aarti_audio/Durga Devi Aarti.mp3',
        name: 'Durga Aarti', nameHi: 'दुर्गा आरती', nameBn: 'দুর্গা আরতি', nameTa: 'துர்கா ஆரத்தி', nameTe: 'దుర్గా ఆరతి', nameMr: 'दुर्गा आरती', nameGu: 'દુર્ગા આરતી', nameKn: 'ದುರ್ಗಾ ಆರತಿ',
        mantra: 'जय अम्बे गौरी', mantraEn: 'Jai Ambe Gauri',
        mantraBn: 'জয় আম্বে গৌরী', mantraTa: 'ஜெய் அம்பே கௌரி', mantraTe: 'జై అంబ గౌరీ', mantraMr: 'जय अम्बे गौरी', mantraGu: 'જય અંબે ગૌરી', mantraKn: 'ಜೈ ಅಂಬೆ ಗೌರಿ'
    },
    {
        id: 'surya', emoji: '☀️', audio: 'aarti_audio/Om Jai Surya Bhagwan Aarti.mp3',
        name: 'Surya Aarti', nameHi: 'सूर्य आरती', nameBn: 'সূর্য আরতি', nameTa: 'சூர்ய ஆரத்தி', nameTe: 'సూర్య ఆరతి', nameMr: 'सूर्य आरती', nameGu: 'સૂર્ય આરતી', nameKn: 'ಸೂರ್ಯ ಆರತಿ',
        mantra: 'ॐ जय सूर्य भगवान', mantraEn: 'Om Jai Surya Bhagwan',
        mantraBn: 'ওম জয় সূর্য ভগবান', mantraTa: 'ஓம் ஜெய் சூர்ய பகவான்', mantraTe: 'ఓం జై సూర్య భగవాన్', mantraMr: 'ॐ जय सूर्य भगवान', mantraGu: 'ૐ જય સૂર્ય ભગવાન', mantraKn: 'ಓಂ ಜೈ ಸೂರ್ಯ ಭಗವಾನ್'
    },
    {
        id: 'gayatri', emoji: '🕉️', audio: 'aarti_audio/Gayatri Mantra.mp3',
        name: 'Gayatri Mantra', nameHi: 'गायत्री मंत्र', nameBn: 'গায়ত্রী মন্ত্ৰ', nameTa: 'காயத்ரி மந்திரம்', nameTe: 'గాయత్రీ మంత్రం', nameMr: 'गायत्री मंत्र', nameGu: 'ગાયત્રી મંત્ર', nameKn: 'ಗಾಯತ್ರಿ ಮಂತ್ರ',
        mantra: 'ॐ भूर्भुवः स्वः', mantraEn: 'Om Bhur Bhuva Swaha',
        mantraBn: 'ওম ভূর্ভুবঃ স্বঃ', mantraTa: 'ஓம் பூர் புவ ஸ்வாஹா', mantraTe: 'ఓం భూర్భువః స్వః', mantraMr: 'ॐ भूर्भुवः स्वः', mantraGu: 'ૐ ભૂર્ભુવઃ સ્વઃ', mantraKn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ'
    },
    {
        id: 'mrityunjaya', emoji: '🧘', audio: 'aarti_audio/Maha Mrityunjaya Mantra.mp3',
        name: 'Maha Mrityunjaya', nameHi: 'महा मृत्युंजय मंत्र', nameBn: 'মহামৃত্যুঞ্জয় মন্ত্র', nameTa: 'மகா மிருத்யுஞ்சய மந்திரம்', nameTe: 'మహా మృత్యుంజయ మంత్రం', nameMr: 'महा मृत्युंजय मंत्र', nameGu: 'મહા મૃત્યુ જય મંત્ર', nameKn: 'ಮಹಾಮೃತ್ಯುಂಜಯ ಮಂತ್ರ',
        mantra: 'ॐ त्र्यम्बकं यजामहे', mantraEn: 'Om Tryambakam Yajamahe',
        mantraBn: 'ওম ত্র্যম্বকম্ যজামহে', mantraTa: 'ஓம் த்ரயம்பகம் யஜாமஹே', mantraTe: 'ఓం త్రయంబకం యజామహే', mantraMr: 'ॐ त्र्यम्बकं यजामहे', mantraGu: 'ૐ ત્રયંબકમ યજામહે', mantraKn: 'ಓಂ ತ್ರ್ಯಂಬಕಂ ಯಜಾಮಹೇ'
    },
    {
        id: 'harekrishna', emoji: '📿', audio: 'aarti_audio/The Great Mantra.mp3',
        name: 'Hare Krishna', nameHi: 'हरे कृष्ण', nameBn: 'হরে কৃষ্ণ', nameTa: 'ஹரே கிருஷ்ணா', nameTe: 'హరే కృష్ణ', nameMr: 'हरे कृष्ण', nameGu: 'હરે કૃષ્ણ', nameKn: 'ಹರೇ ಕೃಷ್ಣ',
        mantra: 'हरे कृष्ण हरे कृष्ण', mantraEn: 'Hare Krishna Hare Krishna',
        mantraBn: 'হরে কৃষ্ণ হরে কৃষ্ণ', mantraTa: 'ஹரே கிருஷ்ணா ஹரே கிருஷ்ணா', mantraTe: 'హరే కృష్ణ హరే కృష్ణ', mantraMr: 'हरे कृष्ण हरे कृष्ण', mantraGu: 'હરે કૃષ્ણ હરે કૃષ્ણ', mantraKn: 'ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ'
    }
];

// Days in all languages
const DAYS_ALL = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    hi: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    bn: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
    ta: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
    te: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
    mr: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    gu: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'],
    kn: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ']
};

const DAYS = DAYS_ALL.en;
const DAYS_HI = DAYS_ALL.hi; // Keep for backward compatibility if needed, but we will use DAYS_ALL[currentLang]

// Months in all languages
const MONTHS_ALL = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    hi: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
    bn: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    ta: ['ஜனவரி', 'பெப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
    te: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
    mr: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'],
    gu: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'],
    kn: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್']
};

// Tithi names in all languages
const TITHIS_ALL = {
    en: ['Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima', 'Amavasya'],
    hi: ['प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पंचमी', 'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी', 'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा', 'अमावस्या'],
    bn: ['প্রতিপদ', 'দ্বিতীয়া', 'তৃতীয়া', 'চতুর্থী', 'পঞ্চমী', 'ষষ্ঠী', 'সপ্তমী', 'অষ্টমী', 'নবমী', 'দশমী', 'একাদশী', 'দ্বাদশী', 'ত্রয়োদশী', 'চতুর্দশী', 'পূর্ণিমা', 'অমাবস্যা'],
    ta: ['பிரதமை', 'துதியை', 'திருதியை', 'சதுர்த்தி', 'பஞ்சமி', 'சஷ்டி', 'சப்தமி', 'அஷ்டமி', 'நவமி', 'தசமி', 'ஏகாதசி', 'துவாதசி', 'திரயோதசி', 'சதுர்த்தசி', 'பௌர்ணமி', 'அமாவாசை'],
    te: ['పాడ్యమి', 'విదియ', 'తదియ', 'చవితి', 'పంచమి', 'షష్ఠి', 'సప్తమి', 'అష్టమి', 'నవమి', 'దశమి', 'ఏకాదశి', 'ద్వాదశి', 'త్రయోదశి', 'చతుర్దశి', 'పౌర్ణమి', 'అమావాస్య'],
    mr: ['प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पंचमी', 'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी', 'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा', 'अमावस्या'],
    gu: ['પડવો', 'બીજ', 'ત્રીજ', 'ચોથ', 'પાંચમ', 'છઠ', 'સાતમ', 'આઠમ', 'નોમ', 'દશમ', 'અગિયારસ', 'બારસ', 'તેરસ', 'ચૌદસ', 'પૂનમ', 'અમાસ'],
    kn: ['ಪಾಡ್ಯ', 'ಬಿದಿಗೆ', 'ತದಿಗೆ', 'ಚೌತಿ', 'ಪಂಚಮಿ', 'ಷಷ್ಠಿ', 'ಸಪ್ತಮಿ', 'ಅಷ್ಟಮಿ', 'ನವಮಿ', 'ದಶಮಿ', 'ಏಕಾದಶಿ', 'ದ್ವಾದಶಿ', 'ತ್ರಯೋದಸಿ', 'ಚತುರ್ಧಶಿ', 'ಹುಣ್ಣಿಮೆ', 'ಅಮಾವಾಸ್ಯೆ']
};

// Nakshatra names in all languages
const NAKSHATRAS_ALL = {
    en: ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'],
    hi: ['अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी', 'हस्त', 'चित्रा', 'स्वाति', 'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूल', 'पूर्वाषाढ़ा', 'उत्तराषाढ़ा', 'श्रवण', 'धनिष्ठा', 'शतभिषा', 'पूर्वाभाद्रपद', 'उत्तराभाद्रपद', 'रेवती'],
    bn: ['অশ্বিনী', 'ভরণী', 'কৃত্তিকা', 'রোহিণী', 'মৃগশিরা', 'আর্দ্রা', 'পুনর্বসু', 'পুষ্যা', 'অশ্লেষা', 'মঘা', 'পূর্ব ফাল্গুনী', 'উত্তর ফাল্গুনী', 'হস্ত', 'চিত্রা', 'স্বাতী', 'বিশাখা', 'অনুরাধা', 'জ্যেষ্ঠা', 'মূলা', 'পূর্বাষাঢ়া', 'উত্তরাষাঢ়া', 'শ্রবণা', 'ধনিষ্ঠা', 'শতভিষা', 'পূর্ব ভাদ্রপদ', 'উত্তর ভাদ্রপদ', 'রেবতী'],
    ta: ['அசுவினி', 'பரணி', 'கார்த்திகை', 'ரோகிணி', 'மிருகசீரிடம்', 'திருவாதிரை', 'புனர்பூசம்', 'பூசம்', 'ஆயில்யம்', 'மகம்', 'பூரம்', 'உத்திரம்', 'ஹஸ்தம்', 'சித்திரை', 'சுவாதி', 'விசாகம்', 'அனுஷம்', 'கேட்டை', 'மூலம்', 'பூராடம்', 'உத்திராடம்', 'திருவோணம்', 'அவிட்டம்', 'சதயம்', 'பூரட்டாதி', 'உத்திரட்டாதி', 'ரேவதி'],
    te: ['అశ్విని', 'భరణి', 'కృత్తిక', 'రోహిణి', 'మృగశిర', 'ఆర్ద్ర', 'పునర్వసు', 'పుష్యమి', 'ఆశ్లేష', 'మఖ', 'పుబ్బ', 'ఉత్తర', 'హస్త', 'చిత్త', 'స్వాతి', 'విశాఖ', 'అనూరాధ', 'జ్యేష్ఠ', 'మూల', 'పూర్వాషాఢ', 'ఉత్తరాషాఢ', 'శ్రవణం', 'ధనిష్ఠ', 'శతభిషం', 'పూర్వాభాద్ర', 'ఉత్తరాభాద్ర', 'రేవతి'],
    mr: ['अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी', 'हस्त', 'चित्रा', 'स्वाति', 'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूल', 'पूर्वाषाढ़ा', 'उत्तराषाढ़ा', 'श्रवण', 'धनिष्ठा', 'शतभिषा', 'पूर्वाभाद्रपद', 'उत्तराभाद्रपद', 'रेवती'],
    gu: ['અશ્વિની', 'ભરણી', 'કૃત્તિકા', 'રોહિણી', 'મૃગશીર્ષ', 'આર્દ્રા', 'પુનર્વસુ', 'પુષ્ય', 'આશ્લેષા', 'મઘા', 'પૂર્વા ફાલ્ગુની', 'ઉત્તરા ફાલ્ગુની', 'હસ્ત', 'ચિત્રા', 'સ્વાતિ', 'વિશાખા', 'અનુરાધા', 'જ્યેષ્ઠા', 'મૂળ', 'પૂર્વાષાઢા', 'ઉત્તરાષાઢા', 'શ્રવણ', 'ધનિષ્ઠા', 'શતભિષા', 'પૂર્વા ભાદ્રપદ', 'ઉત્તરા ભાદ્રપદ', 'રેવતી'],
    kn: ['ಅಶ್ವಿನಿ', 'ಭರಣಿ', 'ಕೃತ್ತಿಕಾ', 'ರೋಹಿಣಿ', 'ಮೃಗಶಿರ', 'ಆರ್ದ್ರ', 'ಪುನರ್ವಸು', 'ಪುಷ್ಯ', 'ಆಶ್ಲೇಷ', 'ಮಘ', 'ಹುಬ್ಬ', 'ಉತ್ತರ', 'ಹಸ್ತ', 'ಚಿತ್ತ', 'ಸ್ವಾತಿ', 'ವಿಶಾಖ', 'ಅನುರಾಧ', 'ಜ್ಯೇಷ್ಠ', 'ಮೂಲ', 'ಪೂರ್ವಾಷಾಢ', 'ಉತ್ತರಾಷಾಢ', 'ಶ್ರವಣ', 'ಧನಿಷ್ಠ', 'ಶತಭಿಷ', 'ಪೂರ್ವಾಭಾದ್ರ', 'ಉತ್ತರಾಭಾದ್ರ', 'ರೇವತಿ']
};

// Rashi names in all languages
const RASHI_NAMES = {
    en: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    hi: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
    bn: ['মেষ', 'বৃষ', 'মিথুন', 'কর্কট', 'সিংহ', 'কন্যা', 'তুলা', 'বৃশ্চিক', 'ধনু', 'মকর', 'কুম্ভ', 'মীন'],
    ta: ['மேஷம்', 'ரிஷபம்', 'மிதுனம்', 'கடகம்', 'சிம்மம்', 'கன்னி', 'துலாம்', 'விருச்சிகம்', 'தனுசு', 'மகரம்', 'கும்பம்', 'மீனம்'],
    te: ['మేషం', 'వృషభం', 'మిథునం', 'కర్కాటకం', 'సింహం', 'కన్య', 'తుల', 'వృశ్చికం', 'ధనుస్సు', 'మకరం', 'కుంభం', 'మీనం'],
    mr: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
    gu: ['મેષ', 'વૃષભ', 'મિથુન', 'કર્ક', 'સિંહ', 'કન્યા', 'તુલા', 'વૃશ્ચિક', 'ધન', 'મકર', 'કુંભ', 'મીન'],
    kn: ['ಮೇಷ', 'ವೃಷಭ', 'ಮಿಥುನ', 'ಕರ್ಕ', 'ಸಿಂಹ', 'ಕನ್ಯಾ', 'ತುಲಾ', 'ವೃಶ್ಚಿಕ', 'ಧನು', 'ಮಕರ', 'ಕುಂಭ', 'ಮೀನ']
};

const RASHI_EMOJIS = ['🐏', '🐂', '👯', '🦀', '🦁', '👸', '⚖️', '🦂', '🏹', '🐐', '⚱️', '🐟'];

// Horoscope Predictions
const HOROSCOPE_PREDICTIONS = {
    en: [
        "Today brings new opportunities. Stay focused!", "Good health and happiness are yours today.", "Financial gains are likely. Be wise.", "Spend time with family, they need you.", "Success is near, keep working hard.", "Travel is on the cards. Enjoy!", "Avoid arguments and stay calm.", "Creativity will flow today. Use it!", "A surprise awaits you in the evening.", "Spirituality will bring you peace."
    ],
    hi: [
        "आज नए अवसर मिलेंगे। एकाग्र रहें!", "अच्छा स्वास्थ्य और खुशी आज आपकी है।", "धन लाभ की संभावना है। समझदारी से काम लें।", "परिवार के साथ समय बिताएं, उन्हें आपकी जरूरत है।", "सफलता नजदीक है, कड़ी मेहनत करते रहें।", "यात्रा के योग बन रहे हैं। आनंद लें!", "वाद-विवाद से बचें और शांत रहें।", "आज रचनात्मकता बहेगी। इसका उपयोग करें!", "शाम को कोई सरप्राइज आपका इंतजार कर रहा है।", "अध्यात्म आपको शांति देगा।"
    ],
    bn: [
        "আজ নতুন সুযোগ আসবে। মনোযোগী থাকুন!", "সুস্বাস্থ্য এবং সুখ আজ আপনার।", "আর্থিক লাভের সম্ভাবনা রয়েছে। বুদ্ধিমান হোন।", "পরিবারের সাথে সময় কাটান, তাদের আপনাকে প্রয়োজন।", "সাফল্য সন্নিকটে, কঠোর পরিশ্রম করতে থাকুন।", "ভ্রমণের যোগ রয়েছে। উপভোগ করুন!", "তর্ক এড়িয়ে চলুন এবং শান্ত থাকুন।", "সৃজনশীলতা আজ প্রবাহিত হবে। এটি ব্যবহার করুন!", "সন্ধ্যায় একটি সারপ্রাইজ আপনার জন্য অপেক্ষা করছে।", "আধ্যাত্মিকতা আপনাকে শান্তি দেবে।"
    ],
    ta: [
        "இன்று புதிய வாய்ப்புகள் வரும். கவனமாக இருங்கள்!", "நல்ல ஆரோக்கியமும் மகிழ்ச்சியும் இன்று உங்களுடையது.", "நிதி ஆதாயம் கிடைக்க வாய்ப்புள்ளது. புத்திசாலித்தனமாக இருங்கள்.", "குடும்பத்தினருடன் நேரத்தை செலவிடுங்கள், அவர்களுக்கு நீங்கள் தேவை.", "வெற்றி அருகில் உள்ளது, தொடர்ந்து கடினமாக உழைக்கவும்.", "பயணம் செய்ய வாய்ப்புள்ளது. மகிழுங்கள்!", "விவாதங்களைத் தவிர்த்து அமைதியாக இருங்கள்.", "படைப்பாற்றல் இன்று பெருகும். அதைப் பயன்படுத்துங்கள்!", "மாலை உங்களுக்கு ஒரு ஆச்சரியம் காத்திருக்கிறது.", "ஆன்மீகம் உங்களுக்கு அமைதியைத் தரும்."
    ],
    te: [
        "ఈ రోజు కొత్త అవకాశాలు వస్తాయి. ఏకాగ్రతతో ఉండండి!", "మంచి ఆరోగ్యం మరియు ఆనందం ఈ రోజు మీ సొంతం.", "ఆర్థిక లాభాలు వచ్చే అవకాశం ఉంది. తెలివిగా ఉండండి.", "కుటుంబంతో సమయం గడపండి, వారికి మీ అవసరం ఉంది.", "విజయం దగ్గరలో ఉంది, కష్టపడి పనిచేస్తూ ఉండండి.", "ప్రయాణ సూచనలు ఉన్నాయి. ఆనందించండి!", "వాదనలకు దూరంగా ఉండి ప్రశాంతంగా ఉండండి.", "ఈ రోజు సృజనాత్మకత ప్రవహిస్తుంది. దాన్ని ఉపయోగించుకోండి!", "సాయంత్రం మీకు ఒక సర్ప్రైజ్ వేచి ఉంది.", "ఆధ్యాత్మికత మీకు ప్రశాంతతను ఇస్తుంది."
    ],
    mr: [
        "आज नवीन संधी मिळतील. लक्ष केंद्रित करा!", "चांगले आरोग्य आणि आनंद आज तुमचा आहे.", "धनलाभाची शक्यता आहे. शहाणपणाने वागा.", "कुटुंबासोबत वेळ घालवा, त्यांना तुमची गरज आहे.", "य यश जवळ आहे, कठोर परिश्रम करत राहा.", "प्रवासाचे योग आहेत. आनंद घ्या!", "वाद टाळा आणि शांत राहा.", "आज सर्जनशीलता बहरेल. त्याचा वापर करा!", "संध्याकाळी एक सरप्राईझ तुमची वाट पाहत आहे.", "अध्यात्म तुम्हाला शांती देईल."
    ],
    gu: [
        "આજે નવી તકો મળશે. એકાગ્ર રહો!", "સારું સ્વાસ્થ્ય અને સુખ આજે તમારા છે.", "આર્થિક લાભની શક્યતા છે. સમજદારીથી વર્તો.", "પરિવાર સાથે સમય વિતાવો, તેમને તમારી જરૂર છે.", "સફળતા નજીક છે, સખત મહેનત કરતા રહો.", "યાત્રાના યોગ છે. આનંદ માણો!", "દલીલો ટાળો અને શાંત રહો.", "આજે સર્જનાત્મકતા વહેશે. તેનો ઉપયોગ કરો!", "સાંજે એક સરપ્રાઈઝ તમારી રાહ જોઈ રહ્યું છે.", "અધ્યાત્મ તમને શાંતિ આપશે."
    ],
    kn: [
        "ಇಂದು ಹೊಸ ಅವಕಾಶಗಳು ಬರುತ್ತವೆ. ಏಕಾಗ್ರತೆಯಿಂದಿರಿ!", "ಉತ್ತಮ ಆರೋಗ್ಯ ಮತ್ತು ಸಂತೋಷ ಇಂದು ನಿಮ್ಮದಾಗಿದೆ.", "ಆರ್ಥಿಕ ಲಾಭದ ಸಾಧ್ಯತೆಯಿದೆ. ಜಾಣರಾಗಿರಿ.", "ಕುಟುಂಬದೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಿರಿ, ಅವರಿಗೆ ನಿಮ್ಮ ಅಗತ್ಯವಿದೆ.", "ಯಶಸ್ಸು ಹತ್ತಿರದಲ್ಲಿದೆ, ಕಠಿಣ ಪರಿಶ್ರಮ ಮುಂದುವರಿಸಿ.", "ಪ್ರಯಾಣದ ಯೋಗವಿದೆ. ಆನಂದಿಸಿ!", "ವಾದಗಳನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಶಾಂತವಾಗಿರಿ.", "ಇಂದು ಸೃಜನಶೀಲತೆ ಹರಿಯುತ್ತದೆ. ಅದನ್ನು ಬಳಸಿ!", "ಸಾಯಂಕಾಲ ಒಂದು ಆಶ್ಚರ್ಯ ನಿಮಗಾಗಿ ಕಾಯುತ್ತಿದೆ.", "ಆಧ್ಯಾತ್ಮಿಕತೆ ನಿಮಗೆ ಶಾಂತಿಯನ್ನು ನೀಡುತ್ತದೆ."
    ]
};

const DEFAULT_DAY_DEITIES = { 0: 'surya', 1: 'shiva', 2: 'hanuman', 3: 'ganesh', 4: 'vishnu', 5: 'lakshmi', 6: 'durga' };

// Shubh Din - Day-wise Auspicious Guidance
const SHUBH_GUIDANCE = {
    0: { deity: 'Surya', deityHi: 'सूर्य', donate: 'wheat', fast: true, color: 'red', level: 'good', muhurat: '06:30-08:00' },
    1: { deity: 'Shiva', deityHi: 'शिव', donate: 'rice', fast: true, color: 'white', level: 'excellent', muhurat: '05:30-07:00' },
    2: { deity: 'Hanuman', deityHi: 'हनुमान', donate: 'sindoor', fast: true, color: 'red', level: 'good', muhurat: '05:00-06:30' },
    3: { deity: 'Ganesh', deityHi: 'गणेश', donate: 'modak', fast: false, color: 'green', level: 'neutral', muhurat: '07:00-08:30' },
    4: { deity: 'Vishnu', deityHi: 'विष्णु', donate: 'yellowCloth', fast: true, color: 'yellow', level: 'excellent', muhurat: '05:00-06:00' },
    5: { deity: 'Lakshmi', deityHi: 'लक्ष्मी', donate: 'sweets', fast: false, color: 'white', level: 'good', muhurat: '18:00-19:00' },
    6: { deity: 'Durga', deityHi: 'दुर्गा', donate: 'redFlowers', fast: true, color: 'red', level: 'good', muhurat: '05:30-07:00' }
};

// Upcoming Festivals 2026
const FESTIVALS_2026 = [
    { name: 'Maha Shivaratri', nameHi: 'महाशिवरात्रि', date: '2026-02-27', emoji: '🔱' },
    { name: 'Holi', nameHi: 'होली', date: '2026-03-14', emoji: '🎨' },
    { name: 'Ram Navami', nameHi: 'राम नवमी', date: '2026-04-04', emoji: '🏹' },
    { name: 'Hanuman Jayanti', nameHi: 'हनुमान जयंती', date: '2026-04-14', emoji: '🐒' },
    { name: 'Akshaya Tritiya', nameHi: 'अक्षय तृतीया', date: '2026-04-25', emoji: '✨' },
    { name: 'Guru Purnima', nameHi: 'गुरु पूर्णिमा', date: '2026-07-21', emoji: '🙏' },
    { name: 'Raksha Bandhan', nameHi: 'रक्षाबंधन', date: '2026-08-19', emoji: '🎀' },
    { name: 'Janmashtami', nameHi: 'जन्माष्टमी', date: '2026-08-23', emoji: '🎵' },
    { name: 'Ganesh Chaturthi', nameHi: 'गणेश चतुर्थी', date: '2026-08-27', emoji: '🐘' },
    { name: 'Navratri', nameHi: 'नवरात्रि', date: '2026-10-07', emoji: '🪔' },
    { name: 'Dussehra', nameHi: 'दशहरा', date: '2026-10-16', emoji: '🏹' },
    { name: 'Diwali', nameHi: 'दीवाली', date: '2026-11-05', emoji: '🪔' }
];

// Translations for all 8 languages
const TRANSLATIONS = {
    en: { appTitle: 'Subah Ki Aarti', playAarti: 'Play Aarti', collection: 'Aarti Collection', alarm: 'Morning Aarti Alarm', gmCard: 'Good Morning Card', home: 'Home', aarti: 'Aarti', alarmNav: 'Alarm', share: 'Share', panchang: "Today's Panchang", tithi: 'Tithi', day: 'Day', nakshatra: 'Nakshatra', goodMorning: 'Good Morning', jai: 'Jai', settings: 'Settings', langChanged: 'Language Changed', settingsSaved: 'Settings Saved', aartiTime: 'Aarti Time!', playing: 'Playing Aarti...', openingWA: 'Opening WhatsApp...', savingCard: 'Saving card...', settingsTitle: 'App Settings', langLabel: 'Language', alarmLabel: 'Alarm Time', dayLabel: 'Day-wise Aarti', saveClose: 'Save & Close', horoscope: 'Daily Horoscope', rashi: 'Your Rashi', selectRashi: 'Select Rashi', shubhDin: 'Shubh Din', worship: 'Worship', donate: 'Donate', fastToday: 'Fast Today', auspiciousColor: 'Lucky Color', muhurat: 'Shubh Muhurat', upcomingFestivals: 'Upcoming Festivals', daysLeft: 'days left', japa: 'Japa', malaCount: 'Mala', totalRounds: 'Total Rounds', tapToCount: 'Tap to count', longPressReset: 'Long press to reset', malaComplete: 'Mala Complete! 🙏' },
    hi: { appTitle: 'सुबह की आरती', playAarti: 'आरती सुनें', collection: 'आरती संग्रह', alarm: 'सुबह की आरती अलार्म', gmCard: 'गुड मॉर्निंग कार्ड', home: 'होम', aarti: 'आरती', alarmNav: 'अलार्म', share: 'शेयर', panchang: 'आज का पंचांग', tithi: 'तिथि', day: 'वार', nakshatra: 'नक्षत्र', goodMorning: 'शुभ प्रभात', jai: 'जय', settings: 'सेटिंग', langChanged: 'भाषा बदली गई', settingsSaved: 'सेटिंग सेव हो गई', aartiTime: 'आरती का समय!', playing: 'आरती बज रही है...', openingWA: 'व्हाट्सएप खुल रहा है...', savingCard: 'कार्ड सेव हो रहा है...', settingsTitle: 'ऐप सेटिंग', langLabel: 'भाषा', alarmLabel: 'अलार्म का समय', dayLabel: 'दिन के अनुसार आरती', saveClose: 'सेव करें', horoscope: 'दैनिक राशिफल', rashi: 'आपकी राशि', selectRashi: 'राशि चुनें', shubhDin: 'शुभ दिन', worship: 'पूजा', donate: 'दान', fastToday: 'आज व्रत', auspiciousColor: 'शुभ रंग', muhurat: 'शुभ मुहूर्त', upcomingFestivals: 'आने वाले त्योहार', daysLeft: 'दिन बाकी', japa: 'जप', malaCount: 'माला', totalRounds: 'कुल फेरे', tapToCount: 'गिनने के लिए टैप करें', longPressReset: 'रीसेट के लिए लंबे दबाएं', malaComplete: 'माला पूर्ण! 🙏' },
    bn: { appTitle: 'সকালের আরতি', playAarti: 'আরতি শুনুন', collection: 'আরতি সংগ্রহ', alarm: 'সকালের আরতি অ্যালার্ম', gmCard: 'গুড মর্নিং কার্ড', home: 'হোম', aarti: 'আরতি', alarmNav: 'অ্যালার্ম', share: 'শেয়ার', panchang: 'আজকের পঞ্জিকা', tithi: 'তিথি', day: 'বার', nakshatra: 'নক্ষত্র', goodMorning: 'সুপ্রভাত', jai: 'জয়', settings: 'সেটিংস', langChanged: 'ভাষা পরিবর্তন করা হয়েছে', settingsSaved: 'সেটিংস সেভ হয়েছে', aartiTime: 'আরতির সময়!', playing: 'আরতি চলছে...', openingWA: 'হোয়াটসঅ্যাপ খোলা হচ্ছে...', savingCard: 'কার্ড সেভ হচ্ছে...', settingsTitle: 'অ্যাপ সেটিংস', langLabel: 'ভাষা', alarmLabel: 'অ্যালার্ম সময়', dayLabel: 'দিন অনুযায়ী আরতি', saveClose: 'সেভ করুন', horoscope: 'দৈনিক রাশিফল', rashi: 'আপনার রাশি', selectRashi: 'রাশি নির্বাচন করুন', shubhDin: 'শুভ দিন', worship: 'পূজা', donate: 'দান', fastToday: 'আজ উপবাস', auspiciousColor: 'শুভ রঙ', muhurat: 'শুভ মুহূর্ত', upcomingFestivals: 'আসন্ন উৎসব', daysLeft: 'দিন বাকি', japa: 'জপ', malaCount: 'মালা', totalRounds: 'মোট রাউন্ড', tapToCount: 'গণনার জন্য ট্যাপ করুন', longPressReset: 'রিসেট করতে দীর্ঘ টিপুন', malaComplete: 'মালা সম্পূর্ণ! 🙏' },
    ta: { appTitle: 'காலை ஆரத்தி', playAarti: 'ஆரத்தி கேளுங்கள்', collection: 'ஆரத்தி தொகுப்பு', alarm: 'காலை ஆரத்தி அலாரம்', gmCard: 'காலை வணக்கம் அட்டை', home: 'முகப்பு', aarti: 'ஆரத்தி', alarmNav: 'அலாரம்', share: 'பகிர்', panchang: 'இன்றைய பஞ்சாங்கம்', tithi: 'திதி', day: 'நாள்', nakshatra: 'நட்சத்திரம்', goodMorning: 'காலை வணக்கம்', jai: 'ஜெய்', settings: 'அமைப்புகள்', langChanged: 'மொழி மாற்றப்பட்டது', settingsSaved: 'அமைப்புகள் சேமிக்கப்பட்டன', aartiTime: 'ஆரத்தி நேரம்!', playing: 'ஆரத்தி ஒலிக்கிறது...', openingWA: 'WhatsApp திறக்கிறது...', savingCard: 'அட்டை சேமிக்கப்படுகிறது...', settingsTitle: 'செயலி அமைப்புகள்', langLabel: 'மொழி', alarmLabel: 'அலாரம் நேரம்', dayLabel: 'நாள் வாரியாக ஆரத்தி', saveClose: 'சேமி', horoscope: 'தினசரி ராசிபலன்', rashi: 'உங்கள் ராசி', selectRashi: 'ராசியைத் தேர்ந்தெடுக்கவும்', shubhDin: 'நல்ல நாள்', worship: 'வழிபாடு', donate: 'தானம்', fastToday: 'இன்று விரதம்', auspiciousColor: 'நல்ல நிறம்', muhurat: 'நல்ல நேரம்', upcomingFestivals: 'வரவிருக்கும் பண்டிகைகள்', daysLeft: 'நாட்கள் மீதம்', japa: 'ஜபம்', malaCount: 'மாலை', totalRounds: 'மொத்த சுற்றுகள்', tapToCount: 'எண்ணத் தட்டவும்', longPressReset: 'மீட்டமைக்க நீண்ட நேரம் அழுத்தவும்', malaComplete: 'மாலை முடிந்தது! 🙏' },
    te: { appTitle: 'సుభోదయం హారతి', playAarti: 'హారతి వినండి', collection: 'హారతి సేకరణ', alarm: 'ఉదయం హారతి అలారం', gmCard: 'శుభోదయం కార్డ్', home: 'హోమ్', aarti: 'హారతి', alarmNav: 'అలారం', share: 'షేర్', panchang: 'నేటి పంచాంగం', tithi: 'తిథి', day: 'వారం', nakshatra: 'నక్షత్రం', goodMorning: 'శుభోదయం', jai: 'జై', settings: 'సెట్టింగులు', langChanged: 'భాష మార్చబడింది', settingsSaved: 'సెట్టింగులు సేవ్ చేయబడ్డాయి', aartiTime: 'హారతి సమయం!', playing: 'హారతి ప్లే అవుతోంది...', openingWA: 'WhatsApp తెరవబడుతోంది...', savingCard: 'కార్డ్ సేవ్ చేయబడుతోంది...', settingsTitle: 'యాప్ సెట్టింగులు', langLabel: 'భాష', alarmLabel: 'అలారం సమయం', dayLabel: 'రోజువారీ హారతి', saveClose: 'సేవ్ చేయండి', horoscope: 'రోజువారీ రాశిఫలాలు', rashi: 'మీ రాశి', selectRashi: 'రాశిని ఎంచుకోండి', shubhDin: 'శుభ దినం', worship: 'పూజ', donate: 'దానం', fastToday: 'ఈరోజు ఉపవాసం', auspiciousColor: 'శుభ రంగు', muhurat: 'శుభ ముహూర్తం', upcomingFestivals: 'రాబోయే పండుగలు', daysLeft: 'రోజులు మిగిలి ఉన్నాయి', japa: 'జపం', malaCount: 'మాల', totalRounds: 'మొత్తం రౌండ్లు', tapToCount: 'లెక్కించడానికి నొక్కండి', longPressReset: 'రీసెట్ చేయడానికి ఎక్కువసేపు నొక్కండి', malaComplete: 'మాల పూర్తయింది! 🙏' },
    mr: { appTitle: 'सकाळची आरती', playAarti: 'आरती ऐका', collection: 'आरती संग्रह', alarm: 'सकाळची आरती अलार्म', gmCard: 'गुड मॉर्निंग कार्ड', home: 'होम', aarti: 'आरती', alarmNav: 'अलार्म', share: 'शेअर', panchang: 'आजचे पंचांग', tithi: 'तिथी', day: 'वार', nakshatra: 'नक्षत्र', goodMorning: 'शुभ प्रभात', jai: 'जय', settings: 'सेटिंग्ज', langChanged: 'भाषा बदलली', settingsSaved: 'सेटिंग्ज सेव्ह झाली', aartiTime: 'आरतीची वेळ!', playing: 'आरती वाजत आहे...', openingWA: 'व्हॉट्सअॅप उघडत आहे...', savingCard: 'कार्ड सेव्ह होत आहे...', settingsTitle: 'अॅप सेटिंग्ज', langLabel: 'भाषा', alarmLabel: 'अलार्मची वेळ', dayLabel: 'दिवसानुसार आरती', saveClose: 'सेव्ह करा', horoscope: 'दैनिक भविष्य', rashi: 'तुमची राशी', selectRashi: 'राशी निवडा', shubhDin: 'शुभ दिन', worship: 'पूजा', donate: 'दान', fastToday: 'आज उपवास', auspiciousColor: 'शुभ रंग', muhurat: 'शुभ मुहूर्त', upcomingFestivals: 'आगामी सण', daysLeft: 'दिवस शिल्लक', japa: 'जप', malaCount: 'माळ', totalRounds: 'एकूण फेरे', tapToCount: 'मोजण्यासाठी टॅप करा', longPressReset: 'रीसेट करण्यासाठी दीर्घ दाबा', malaComplete: 'माळ पूर्ण! 🙏' },
    gu: { appTitle: 'સવારની આરતી', playAarti: 'આરતી સાંભળો', collection: 'આરતી સંગ્રહ', alarm: 'સવારની આરતી એલાર્મ', gmCard: 'ગુડ મોર્નિંગ કાર્ડ', home: 'હોમ', aarti: 'આરતી', alarmNav: 'એલાર્મ', share: 'શેર', panchang: 'આજનું પંચાંગ', tithi: 'તિથિ', day: 'વાર', nakshatra: 'નક્ષત્ર', goodMorning: 'શુભ સવાર', jai: 'જય', settings: 'સેટિંગ્સ', langChanged: 'ભાષા બદલાઈ ગઈ', settingsSaved: 'સેટિંગ્સ સેવ થઈ', aartiTime: 'આરતીનો સમય!', playing: 'આરતી વાગી રહી છે...', openingWA: 'વ્હોટ્સએપ ખુલી રહ્યું છે...', savingCard: 'કાર્ડ સેવ થઈ રહ્યું છે...', settingsTitle: 'એપ્લિકેશન સેટિંગ્સ', langLabel: 'ભાષા', alarmLabel: 'એલાર્મ સમય', dayLabel: 'દિવસ મુજબ આરતી', saveClose: 'સેવ અને બંધ કરો', horoscope: 'દૈનિક જન્માક્ષર', rashi: 'તમારી રાશિ', selectRashi: 'રાશિ પસંદ કરો', shubhDin: 'શુભ દિવસ', worship: 'પૂજા', donate: 'દાન', fastToday: 'આજે ઉપવાસ', auspiciousColor: 'શુભ રંગ', muhurat: 'શુભ મુહૂર્ત', upcomingFestivals: 'આવનારા તહેવારો', daysLeft: 'દિવસ બાકી', japa: 'જપ', malaCount: 'માળા', totalRounds: 'કુલ રાઉન્ડ', tapToCount: 'ગણવા ટેપ કરો', longPressReset: 'રીસેટ કરવા લાંબુ દબાવો', malaComplete: 'માળા પૂર્ણ! 🙏' },
    kn: { appTitle: 'ಮುಂಜಾನೆ ಆರತಿ', playAarti: 'ಆರತಿ ಕೇಳಿ', collection: 'ಆರತಿ ಸಂಗ್ರಹ', alarm: 'ಬೆಳಗಿನ ಆರತಿ ಅಲಾರಾಂ', gmCard: 'ಗುಡ್ ಮಾರ್ನಿಂಗ್ ಕಾರ್ಡ್', home: 'ಹೋಮ್', aarti: 'ಆರತಿ', alarmNav: 'ಅಲಾರಾಂ', share: 'ಹಂಚಿಕೊಳ್ಳಿ', panchang: 'ಇಂದಿನ ಪಂಚಾಂಗ', tithi: 'ತಿಥಿ', day: 'ವಾರ', nakshatra: 'ನಕ್ಷತ್ರ', goodMorning: 'ಶುಭೋದಯ', jai: 'ಜೈ', settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', langChanged: 'ಭಾಷೆ ಬದಲಾಗಿದೆ', settingsSaved: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಉಳಿಸಲಾಗಿದೆ', aartiTime: 'ಆರತಿ ಸಮಯ!', playing: 'ಆರತಿ ನುಡಿಸುತ್ತಿದೆ...', openingWA: 'WhatsApp ತೆರೆಯಲಾಗುತ್ತಿದೆ...', savingCard: 'ಕಾರ್ಡ್ ಉಳಿಸಲಾಗುತ್ತಿದೆ...', settingsTitle: 'ಅಪ್ಲಿಕೇಶನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು', langLabel: 'ಭಾಷೆ', alarmLabel: 'ಅಲಾರಾಂ ಸಮಯ', dayLabel: 'ದಿನದ ಆರತಿ', saveClose: 'ಉಳಿಸಿ ಮತ್ತು ಮುಚ್ಚಿ', horoscope: 'ದಿನ ಭವಿಷ್ಯ', rashi: 'ನಿಮ್ಮ ರಾಶಿ', selectRashi: 'ರಾಶಿ ಆಯ್ಕೆಮಾಡಿ', shubhDin: 'ಶುಭ ದಿನ', worship: 'ಪೂಜೆ', donate: 'ದಾನ', fastToday: 'ಇಂದು ಉಪವಾಸ', auspiciousColor: 'ಶುಭ ಬಣ್ಣ', muhurat: 'ಶುಭ ಮುಹೂರ್ತ', upcomingFestivals: 'ಮುಂಬರುವ ಹಬ್ಬಗಳು', daysLeft: 'ದಿನಗಳು ಉಳಿದಿವೆ', japa: 'ಜಪ', malaCount: 'ಮಾಲೆ', totalRounds: 'ಒಟ್ಟು ಸುತ್ತುಗಳು', tapToCount: 'ಎಣಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ', longPressReset: 'ಮರುಹೊಂದಿಸಲು ದೀರ್ಘ ಒತ್ತಿರಿ', malaComplete: 'ಮಾಲೆ ಪೂರ್ಣ! 🙏' }
};

// Add Shubh Din Translations dynamically
const SHUBH_EXTENSIONS = {
    en: { shubhSubtitle: "Today's Auspicious Guidance", wheat: 'Wheat', rice: 'Rice', sindoor: 'Sindoor', modak: 'Modak', yellowCloth: 'Yellow Cloth', sweets: 'Sweets', redFlowers: 'Red Flowers', red: 'Red', white: 'White', green: 'Green', yellow: 'Yellow', yes: 'Yes', no: 'No' },
    hi: { shubhSubtitle: "आज का शुभ मार्गदर्शन", wheat: 'गेहूं', rice: 'चावल', sindoor: 'सिंदूर', modak: 'मोदक', yellowCloth: 'पीला वस्त्र', sweets: 'मिठाई', redFlowers: 'लाल फूल', red: 'लाल', white: 'सफेद', green: 'हरा', yellow: 'पीला', yes: 'हाँ', no: 'नहीं' },
    bn: { shubhSubtitle: "আজকের শুভ নির্দেশনা", wheat: 'গম', rice: 'চাল', sindoor: 'সিঁদুর', modak: 'মোদক', yellowCloth: 'হলুদ বস্ত্র', sweets: 'মিষ্টি', redFlowers: 'লাল ফুল', red: 'লাল', white: 'সাদা', green: 'সবুজ', yellow: 'হলুদ', yes: 'হ্যাঁ', no: 'না' },
    ta: { shubhSubtitle: "இன்றைய நல்ல வழிகாட்டுதல்", wheat: 'கோதுமை', rice: 'அரிசி', sindoor: 'குங்குமம்', modak: 'மோதகம்', yellowCloth: 'மஞ்சள் துணி', sweets: 'இனிப்புகள்', redFlowers: 'சிவப்பு மலர்கள்', red: 'சிவப்பு', white: 'வெள்ளை', green: 'பச்சை', yellow: 'மஞ்சள்', yes: 'ஆம்', no: 'இல்லை' },
    te: { shubhSubtitle: "నేటి శుభ మార్గదర్శిని", wheat: 'గోధుమలు', rice: 'బియ్యం', sindoor: 'సింధూరం', modak: 'మోదక్', yellowCloth: 'పసుపు వస్త్రం', sweets: 'స్వీట్లు', redFlowers: 'ఎర్రని పువ్వులు', red: 'ఎరుపు', white: 'తెలుపు', green: 'ఆకుపచ్చ', yellow: 'పసుపు', yes: 'అవును', no: 'కాదు' },
    mr: { shubhSubtitle: "आजचे शुभ मार्गदर्शन", wheat: 'गहू', rice: 'तांदूळ', sindoor: 'सिंदूर', modak: 'मोदक', yellowCloth: 'पिवळे कापड', sweets: 'मिठाई', redFlowers: 'लाल फुले', red: 'लाल', white: 'पांढरा', green: 'हिरवा', yellow: 'पिवळा', yes: 'हो', no: 'नाही' },
    gu: { shubhSubtitle: "આજનુ શુભ માર્ગદર્શન", wheat: 'ઘઉં', rice: 'ચોખા', sindoor: 'સિંદૂર', modak: 'મોદક', yellowCloth: 'પીળું વસ્ત્ર', sweets: 'મીઠાઈ', redFlowers: 'લાલ ફૂલો', red: 'લાલ', white: 'સફેદ', green: 'લીલો', yellow: 'પીળો', yes: 'હા', no: 'ના' },
    kn: { shubhSubtitle: "ಇಂದಿನ ಶುಭ ಮಾರ್ಗದರ್ಶನ", wheat: 'ಗೋಧಿ', rice: 'ಅಕ್ಕಿ', sindoor: 'ಸಿಂಧೂರ', modak: 'ಮೋದಕ', yellowCloth: 'ಹಳದಿ ಬಟ್ಟೆ', sweets: 'ಸಿಹಿತಿಂಡಿಗಳು', redFlowers: 'ಕೆಂಪು ಹೂಗಳು', red: 'ಕೆಂಪು', white: 'ಬಿಳಿ', green: 'ಹಸಿರು', yellow: 'ಹಳದಿ', yes: 'ಹೌದು', no: 'ಇಲ್ಲ' }
};

Object.keys(SHUBH_EXTENSIONS).forEach(lang => {
    if (TRANSLATIONS[lang]) Object.assign(TRANSLATIONS[lang], SHUBH_EXTENSIONS[lang]);
});

