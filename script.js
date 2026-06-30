function gerarRelatorio() {

    const instrutor = document.getElementById("instrutor").value.trim();
    const auxiliares = document.getElementById("auxiliares").value.trim();
    const aprovados = document.getElementById("aprovados").value.trim();
    const reprovados = document.getElementById("reprovados").value.trim();
    const observacoes = document.getElementById("observacoes").value.trim();

    const texto = `RELATÓRIO DE PROMOÇÃO! 🎖️
◈────────────────────────────
👤 Instrutor: ${instrutor || "Não informado"}
👤 Auxiliares: ${auxiliares || "N/A"}
◈─────────────────────────◈

✅ Aprovados:
${aprovados || "Nenhum"}

❌ Reprovados:
${reprovados || "Nenhum"}

◈─────────────────────────◈

📆 Data e hora: (o Discord já mostra)

👀 Observações: ${observacoes || "N/A"}

◈─────────────────────────◈

📸 Comprovações:
`;

    document.getElementById("resultado").value = texto;
}

function copiarRelatorio() {

    const resultado = document.getElementById("resultado");

    if (!resultado.value) {
        alert("Primeiro gere um relatório.");
        return;
    }

    navigator.clipboard.writeText(resultado.value);

    alert("Relatório copiado!");
}
