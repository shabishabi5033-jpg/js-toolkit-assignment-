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
