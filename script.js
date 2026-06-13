const API_KEY = "SUA_CHAVE_AQUI";

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

    const dados = await resposta.json();

    document.getElementById("resposta").innerHTML =
      dados.choices[0].message.content;

  }

  catch(erro){

    document.getElementById("resposta").innerHTML =
      "Erro ao conectar.";

    console.log(erro);

  }

}
