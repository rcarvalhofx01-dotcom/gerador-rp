// RP Manager v0.1

const gerarBtn = document.getElementById("gerarBtn");
const copiarBtn = document.getElementById("copiarBtn");

if (gerarBtn) {
    gerarBtn.addEventListener("click", gerarRelatorio);
}

if (copiarBtn) {
    copiarBtn.addEventListener("click", copiarRelatorio);
}

function gerarRelatorio() {

    const instrutor = document.getElementById("instrutor").value.trim();
    const auxiliares = document.getElementById("auxiliares").value.trim();
    const aprovados = document.getElementById("aprovados").value.trim();
    const reprovados = document.getElementById("reprovados").value.trim();
    const observacoes = document.getElementById("observacoes").value.trim();

    const relatorio = `RELATÓRIO DE PROMOÇÃO! 🎖️
◈────────────────────────────
👤 Instrutor: ${instrutor || "N/A"}
👤 Auxiliares: ${auxiliares || "N/A"}
◈─────────────────────────◈

✅ Aprovados:
${aprovados || "Nenhum"}

❌ Reprovados:
${reprovados || "Nenhum"}

◈─────────────────────────◈

📆 Data e hora: (o Discord já mostra)

👀 Observações:
${observacoes || "N/A"}

◈─────────────────────────◈

📸 Comprovações:
`;

    document.getElementById("resultado").value = relatorio;
}

function copiarRelatorio() {

    const resultado = document.getElementById("resultado");

    if (resultado.value === "") {
        alert("Gere um relatório primeiro.");
        return;
    }

    navigator.clipboard.writeText(resultado.value);

    alert("Relatório copiado!");
}
