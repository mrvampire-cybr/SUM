document.addEventListener('DOMContentLoaded', function() {
    const wishes = {
        english: "May Lord Shiva bless you with health, wealth, and prosperity. Happy Maha Shivaratri!",
        hindi: "भगवान शिव आपको स्वास्थ्य, धन और समृद्धि का आशीर्वाद दें। महा शिवरात्रि की शुभकामनाएं!",
        malayalam: "ശിവന്റെ അനുഗ്രഹം നിങ്ങളെ ആരോഗ്യത്തിലും സമൃദ്ധിയിലും സമ്പത്തിലുമാകട്ടെ. മഹാ ശിവരാത്രി ആശംസകൾ!"
    };

    const mantra = {
        english: "Om Namah Shivaya",
        hindi: "ॐ नमः शिवाय",
        malayalam: "ഓം നമ്പ ശിവായ"
    };

    const languageSelect = document.getElementById('language');
    const userNameInput = document.getElementById('user-name');
    const generateWishButton = document.getElementById('generate-wish');
    const wishOutput = document.getElementById('wish-output');
    const shareWishButton = document.getElementById('share-wish');
    const mantraElement = document.getElementById('mantra');
    const chantAudio = document.getElementById('chant-audio');
    const chantButton = document.getElementById('chant-button');
    const chantCountElement = document.getElementById('chant-count');
    const chantNotice = document.getElementById('chant-notice');
    let chantCount = 0;

    generateWishButton.addEventListener('click', function() {
        const selectedLanguage = languageSelect.value;
        const userName = userNameInput.value || "Friend";
        wishOutput.textContent = `${wishes[selectedLanguage]} - ${userName}`;
        mantraElement.textContent = mantra[selectedLanguage];
    });

    shareWishButton.addEventListener('click', function() {
        const wishText = wishOutput.textContent;
        if (wishText) {
            const shareUrl = `${window.location.href}?wish=${encodeURIComponent(wishText)}`;
            navigator.share({
                title: 'Maha Shivaratri Wish',
                text: wishText,
                url: shareUrl
            });
        } else {
            alert('Please generate a wish first.');
        }
    });

    chantButton.addEventListener('click', function() {
        chantCount++;
        chantCountElement.textContent = chantCount;
        if (chantCount >= 108) {
            chantNotice.style.display = 'block';
        }
    });
});
