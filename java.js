// Aguarde até que o documento esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtenha referência ao botão pelo ID
    var meuBotao = document.getElementById("meuBotao");

    // Adicione um ouvinte de evento de clique ao botão
    meuBotao.addEventListener("click", function() {
        // Exiba uma mensagem quando o botão for clicado
        alert("Você clicou no botão!");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var imagem = document.querySelector(".imagem");

    // Adiciona um ouvinte de evento para iniciar a animação quando a imagem for clicada
    imagem.addEventListener("click", function() {
        animarImagem();
    });

    // Função de animação
    function animarImagem() {
        var rotation = 0;

        // Função de atualização de quadro
        function atualizarQuadro() {
            rotation += 2; // Ajusta a velocidade da rotação alterando este valor
            imagem.style.transform = "rotate(" + rotation + "deg)";

            if (rotation < 360) {
                requestAnimationFrame(atualizarQuadro);
            }
        }

        // Inicia a animação
        atualizarQuadro();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var imagemAnimada = document.querySelector(".imagemAnimada");

    // Adiciona um ouvinte de evento para lidar com a animação
    imagemAnimada.addEventListener("mouseover", function() {
        imagemAnimada.classList.add("animar");
    });
});

