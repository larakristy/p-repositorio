//Início do Script

//Inativa os prefixos do PennController (sem esse comando os códigos não funcionam)
PennController.ResetPrefix(null);
//Define a sequência de telas do experimento
Sequence("Participante", "Instrucoes", randomize("Experimento"), SendResults(), "Final");
//Cria um cabeçalho. Todos os comandos dentro do cabeçalho serão rodados automaticamente antes de cada "trial"
Header(
//Define que todo texto será impresso na tela e que o tamanho da fonte será "1.2em"
         defaultText
            .css("font-size","1.2em")
            .print()
         ,
//Define que toda caixa de texto será impressa na tela e que o tamanho da fonte será "1.2em"
         defaultTextInput
            .css("font-size","1.2em")
            .print()
         ,
//Define que todo botão será impresso na tela, que o tamanho da fonte será "1.2em" e que o participante será obrigado a interagir com ele para prosseguir com o experimento
         defaultButton
            .css("font-size","1.2em")
            .center()
            .print()
            .wait()       
)
