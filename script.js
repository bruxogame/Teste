
      // Função para tratar o envio do formulário
      function enviarFormulario(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const formulario = document.getElementById("meuFormulario");
        const nome = formulario.nome.value;
        const numero = formulario.numero.value;

        // Cria um objeto com os dados do formulário
        const dados = {
          nome: nome,
          numero: numero
        };

        // Realiza uma solicitação HTTP POST para enviar os dados
        fetch("http://exemplo.com/enviar-dados", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
          console.log("Dados enviados com sucesso:", data);
          // Faça qualquer ação adicional após o envio dos dados
        })
        .catch(error => {
          console.error("Erro ao enviar os dados:", error);
          // Trate o erro adequadamente
        });
      }

      // Adiciona um ouvinte de evento ao formulário
      const formulario = document.getElementById("meuFormulario");
      formulario.addEventListener("submit", enviarFormulario);
    