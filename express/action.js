document.addEventListener('DOMContentLoaded', function () {
    const inputTextContainer = document.getElementById('input-text-container');
    const formInputArea = document.getElementById('input-text');

    document.getElementById('input-text').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const inputText = this.value.trim();
            if (inputText !== '') {
                const newLine = document.createElement('div');
                newLine.className = 'position-relative d-flex align-items-center';

                //checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'form-check-input me-1';
                // text
                const text = document.createElement('span');
                text.textContent = inputText;
                text.className = 'border border-danger d-inline-block px-2 py-1 rounded';
                text.style.width = formInputArea.offsetWidth + 'px';
                text.style.justifyContent = 'center';
                text.style.marginLeft = '6px'
                // checkbox + text
                const checkboxTextContainer = document.createElement('div');
                checkboxTextContainer.className = 'd-flex align-items-center';
                checkboxTextContainer.style.width = formInputArea.offsetWidth + 'px';
                checkboxTextContainer.style.justifyContent = 'center';

                // styling the new line
                newLine.style.width = formInputArea.offsetWidth + 'px';
                inputTextContainer.style.justifyContent = 'center';
                newLine.style.margin = '10px auto';

                checkboxTextContainer.appendChild(checkbox);
                checkboxTextContainer.appendChild(text);

                newLine.appendChild(checkboxTextContainer);

                inputTextContainer.appendChild(newLine);
                this.value = '';
            }
            e.preventDefault();
        }
    });

    document.getElementById('input-text-container').addEventListener('')
});