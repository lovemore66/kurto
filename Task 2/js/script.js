document.getElementById('languageToggle').addEventListener('change', function () {
    const selectedLanguage = this.value;
    window.location.href = selectedLanguage;
});