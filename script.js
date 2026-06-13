const API_KEY = "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";

async function enviarPergunta() {

  const pergunta =
    document.getElementById("pergunta").value;

  document.getElementById("resposta").innerHTML =
    "Pensando...";

  try {

    const resposta = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          model: "openai/gpt-4o-mini",

          messages: [

            {
              role: "system",
              content:
              "Você é AgroBot, especialista em agricultura, pecuária, sustentabilidade e tecnologia agrícola."
            },

            {
              role: "user",
              content: pergunta
            }

          ]

        })

      }
    );

console.log("Status:", resposta.status);

const dados = await resposta.json();

console.log("Resposta:", dados);

  if (!resposta.ok) {
  document.getElementById("resposta").innerHTML =
    JSON.stringify(dados, null, 2);
  return;
}

document.getElementById("resposta").innerHTML =
  dados.choices[0].message.content;

  }

  catch(erro){

    document.getElementById("resposta").innerHTML =
      "Erro ao conectar.";

    console.log(erro);

  }

}


