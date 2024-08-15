window.onload = function () {
    document.getElementById('text-area').focus();
};

document.querySelector('textarea').addEventListener('keypress', function (e) {
    const char = String.fromCharCode(e.keyCode || e.which);
    const pattern = /^[a-z\s]+$/;

    if (!pattern.test(char)) {
        e.preventDefault();
        alert("Só é permitido letras minúsculas e sem acento.");
    }
});

function criptografar() {
    const input = document.getElementById('text-area').value;
    const pattern = /^[a-z\s]+$/;

    if (!pattern.test(input)) {
        alert("Só é permitido letras minúsculas e sem acento.");
        document.getElementById('text-area').value = "";
        document.getElementById('text-area').focus();
        e.preventDefault();

    } else {
        let output = input.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        mostrarResultado(output);
        document.getElementById('text-area').value = "";
        document.getElementById('text-area').focus();
    }
}

function descriptografar() {
    const input = document.getElementById('text-area').value;
    const pattern = /^[a-z\s]+$/;

    if (!pattern.test(input)) {
        alert("Só é permitido letras minúsculas e sem acento.");
        document.getElementById('text-area').value = "";
        document.getElementById('text-area').focus();
        e.preventDefault();

    } else {
        let output = input.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        mostrarResultado(output);
        document.getElementById('text-area').value = "";
        document.getElementById('text-area').focus();
    }
}

function mostrarResultado(texto) {
    document.getElementById('resultado-inicial').style.display = 'none';
    document.getElementById('resultado-final').style.display = 'block';
    document.getElementById('resultado-texto').innerText = texto;
}

function copiarTexto() {
    const texto = document.getElementById('resultado-texto').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
    document.getElementById('text-area').focus();
}
