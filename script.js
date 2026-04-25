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

// Tool 3: Color Converter Functionality
const rVal = document.getElementById('r-val');
const gVal = document.getElementById('g-val');
const bVal = document.getElementById('b-val');
const hexOutput = document.getElementById('hex-output');
const colorPreview = document.getElementById('color-preview');

const updateColor = () => {
    const r = Math.min(255, Math.max(0, parseInt(rVal.value) || 0));
    const g = Math.min(255, Math.max(0, parseInt(gVal.value) || 0));
    const b = Math.min(255, Math.max(0, parseInt(bVal.value) || 0));
    
    const hex = "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join("");
    
    hexOutput.value = hex.toUpperCase();
    colorPreview.style.background = hex;
};

[rVal, gVal, bVal].forEach(el => el.addEventListener('input', updateColor));

