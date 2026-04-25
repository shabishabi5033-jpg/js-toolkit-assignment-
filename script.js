// Tool 1: Text Utility Functionality
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    charCount.textContent = `${text.length} characters`;
    
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = `${words.length} words`;
});

// Tool 2: Password Generator Functionality
const passOutput = document.getElementById('pass-output');
const passLength = document.getElementById('pass-length');
const lengthVal = document.getElementById('length-val');
const genBtn = document.getElementById('gen-btn');
const copyBtn = document.getElementById('copy-pass');

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

passLength.addEventListener('input', () => {
    lengthVal.textContent = passLength.value;
});

genBtn.addEventListener('click', () => {
    let password = "";
    for (let i = 0; i < passLength.value; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passOutput.value = password;
    
    // Feedback animation
    genBtn.style.transform = "scale(0.95)";
    setTimeout(() => genBtn.style.transform = "scale(1)", 100);
});

copyBtn.addEventListener('click', () => {
    if (!passOutput.value) return;
    navigator.clipboard.writeText(passOutput.value);
    
    const originalIcon = copyBtn.textContent;
    copyBtn.textContent = "✅";
    setTimeout(() => copyBtn.textContent = originalIcon, 2000);
});

