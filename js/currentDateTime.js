// বাংলা সংখ্যায় রূপান্তরের জন্য একটি ফাংশন
function convertToBengali(num) {
    const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => bengaliNumbers[digit]).join('');
}

// সময়ের অংশ (সকাল, দুপুর, বিকাল, সন্ধ্যা, রাত) নির্ধারণের জন্য ফাংশন
function getPeriod(hours) {
    if (hours >= 5 && hours < 12) {
        return 'সকাল';
    } else if (hours >= 12 && hours < 15) {
        return 'দুপুর';
    } else if (hours >= 15 && hours < 18) {
        return 'বিকাল';
    } else if (hours >= 18 && hours < 20) {
        return 'সন্ধ্যা';
    } else {
        return 'রাত';
    }
}

// সময় এবং তারিখ আপডেটের জন্য ফাংশন
function updateTimeDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // সময়ের অংশ নির্ধারণ
    const period = getPeriod(hours);
    const hour12 = hours % 12 || 12;

    // বাংলা মাস নির্ধারণ
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const day = convertToBengali(now.getDate());
    const month = months[now.getMonth()];
    const year = convertToBengali(now.getFullYear());

    // সময় এবং তারিখ প্রদর্শন
    const timeString = `${convertToBengali(hour12)}:${convertToBengali(minutes)}:${convertToBengali(seconds)} ${period}`;
    const dateString = `${day} ${month} ${year}`;
    document.getElementById('timeDate').textContent = `${timeString}, ${dateString}`;
}

// প্রতি সেকেন্ডে আপডেট
setInterval(updateTimeDate, 1000);
updateTimeDate();
