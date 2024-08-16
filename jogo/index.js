alert("Bem-vindo(a), vamos começar o jogo! Clique em OK para iniciar.")

let instrução = (alert("Para cada pergunta, escolha a opção certa, e caso isso aconteça, você irá ganhar mais pontos de vida. Você também pode conseguir pontos de empatia a cada boa ação que você realiza. O seu objetivo é competir nas Olímpiadas."))

let vida = 0
alert ("Você tem " + vida  + " pontos de vida.")
let empatia = 0
alert ("Você tem " + empatia  + " pontos de empatia.")

alert ("Você é um(a) jovem morador(a) da Eritreia. A situação no seu país é muito complicada, com guerras civis e falta de liberdade. Escolha a opção certa para mudar de vida:")

let primeiraOpção = prompt("Escreva 'fugir' se você deseja fugir do seu país e buscar uma vida melhor na Suíça.\nEscreva 'continuar' se você deseja continuar na Eritreia e esperar a situação melhorar.")

if (primeiraOpção == "continuar"){
    alert ("A situação do seu país não melhorou. Reconsidere suas escolhas para um futuro melhor!")
    
    primeiraOpção = prompt("Escreva 'fugir' se você deseja fugir do seu país e buscar uma vida melhor na Suíça.\nEscreva 'continuar' se você deseja continuar na Eritreia e esperar a situação melhorar.")

}

alert ("Você chegou na Suíça!")
    vida += 20
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")

    alert ("Você conheceu um treinador de tiro esportivo, e ele te convidou para conhecer um pouco mais sobre esse esporte.")

    let segundaOpção = prompt("Escreva 'sim' se você deseja conhecer mais sobre tiro espotivo.\nEscreva 'não' se você não deseja conhecer mais sobre tiro esportivo.")

    if (segundaOpção == "não"){
        alert ("Essa era uma chance de mudar sua vida. Reconsidere suas escolhas!")
        
        segundaOpção = prompt("Escreva 'sim' se você deseja conhecer mais sobre tiro espotivo.\nEscreva 'não' se você não deseja conhecer mais sobre tiro esportivo.")

    }

    alert ("Um ano se passou, você treinou bastante e se tornou um(a) atirador(a) profissional!")

    vida += 10
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")

    alert ("Seu amigo, que também pratica tiro esportivo, está com dificuldade em acertar o alvo. Ele pede a sua ajuda, escolha a opção certa:")

    let terceiraOpção = prompt("Escreva 'ajudar' se você deseja ajudar seu amigo.\nEscreva 'não ajudar' se você deseja não ajudar seu amigo.")

    if (terceiraOpção == "não ajudar"){
        alert ("Seu amigo ficou triste com você e seus colegas de esporte ficaram com uma má impressão sua. Reconsidere suas escolhas para ser uma pessoa melhor!")
        
        terceiraOpção = prompt("Escreva 'ajudar' se você deseja ajudar seu amigo.\nEscreva 'não ajudar' se você deseja não ajudar seu amigo.")

    }

    alert ("Seu amigo ficou feliz com você por ajudá-lo!")

    vida += 20
    empatia += 50
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")

    alert ("Conforme o tempo passa, mais você se apaixona pelo esporte que você escolheu, tiro esportivo.")

    let quartaOpção = prompt("Escreva 'treinar' se você deseja continuar treinando e se dedicando no tiro esportivo.\nEscreva 'desistir' se você deseja parar de treinar e desistir do tiro esportivo.")

    if (quartaOpção == "desistir"){
        alert ("Você parou de treinar e ficou muito triste, pois tinha muito potencial, mas percebeu isso tarde demais. Reconsidere suas escolhas! ")
        
        quartaOpção = prompt("Escreva 'treinar' se você deseja continuar treinando e se dedicando no tiro esportivo.\nEscreva 'desistir' se você deseja parar de treinar e desistir do tiro esportivo.")

    }

    alert ("Você não desistiu e se tornou um(a) dos melhores atiradores da Suíça! ")

    vida += 10
    empatia += 0
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")
    
    alert ("Seus treinos começaram a ficar mais puxados, sua rotina mais corrida, mas esse esforço valeu a pena, pois você foi chamado(a) para uma competição de tiro esportivo. Escolha a opção certa:") 

    let quintaOpção = prompt("Escreva 'participar' se você deseja participar da competição.\nEscreva 'não participar' se você não deseja participar da competição.")

    if (quintaOpção == "não participar"){
        alert ("Você perdeu uma grande oportunidade. Reconsidere suas escolhas para crescer no esporte!")
        
        quintaOpção = prompt("Escreva 'participar' se você deseja participar da competição.\nEscreva 'não participar' se você não deseja participar da competição.")

    }

    alert ("Você competiu e conseguiu chegar ao pódio em segundo lugar, parabéns!")

    vida += 10
    empatia += 0
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")

    alert ("Um membro da Federação Internacional de Esportes de Tiro viu você competindo e convidou você para fazer um teste para integrar a Equipe Olímpica de Refugiados. Escolha a opção certa:")

    let sextaOpção = prompt("Escreva 'fazer o teste' se você deseja fazer o teste e tentar entrar para a Equipe Olímpica de Refugiados.\nEscreva 'não fazer o teste' se você deseja não fazer o teste e não deseja tentar entrar para a Equipe Olímpica de Refugiados.")

    if (sextaOpção == "não fazer o teste"){
        alert ("Você perdeu uma grande oportunidade de integrar a Equipe Olímpica de Refugiados ao não comparecer ao teste. Reconsidere suas escolhas!")
        
        sextaOpção = prompt("Escreva 'fazer o teste' se você deseja fazer o teste e tentar entrar para a Equipe Olímpica de Refugiados.\nEscreva 'não fazer o teste' se você deseja não fazer o teste e não deseja tentar entrar para a Equipe Olímpica de Refugiados.")

    }

    alert ("Você foi convocado(a) para a Equipe Olímpica de Refugiados, e se classificou para as Olímpiadas de Paris 2024. Você está muito orgulhoso(a) de si mesmo por chegar até aqui e muito ansioso(a) para esse novo desafio!")

    vida += 10
    empatia += 0
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia.")

    let sétimaOpcão = prompt("Escreva 'participar' se você deseja participar das Olímpiadas.\nEscreva 'não participar' se você não deseja participar das Olímpiadas.")

    if (sétimaOpcão == "não participar"){
        alert ("Você não participou das Olímpiadas, e arrependido(a), você viu a equipe alcançar sucesso e aprendeu a lição de que oportunidades não voltam. Reconsidere suas escolhas!")
        
        sétimaOpcão = prompt("Escreva 'participar' se você deseja participar das Olímpiadas.\nEscreva 'não participar' se você não deseja participar das Olímpiadas.")

    }

	alert ("Você decidiu ir para as Olímpiadas, então, treinou bastante durante meses para se preparar. O tempo passou e finalmente os dias mais esperados chegaram, as Olímpiadas começaram.")

	alert ("Você vai para Paris e depois de alguns dias, o dia da sua competição chegou, você está super ansioso(a) para representar a Equipe Olímpica de Refugiados. Boa sorte!")

	alert ("Todos os competidores começaram a se preparar, e você também, até que você vê um dos atletas chorando. A arma dele quebrou! Você se aproxima dele e decide tomar uma decisão. Escolha a opção certa:")

	let oitavaOpção = prompt("Escreva 'ajudar' se você deseja ajudar o seu adversário emprestando uma das armas reservas que você trouxe.\nEscreva 'não ajudar' se você não deseja ajudar o seu adversário, assim, tendo um competidor a menos na competição.")
	
	if (oitavaOpção == "não ajudar"){
		alert ("Você não ajudou seu adversário, e infelizmente, ele foi desclassificado das Olímpiadas. Mesmo pensando que um competidor a menos, é mais uma chance de ganhar, você ficou com a consciência pesada e errou todos os tiros, sendo desclassificado(a) também. Reconsidere suas escolhas se colocando no lugar do próximo!")
		
		oitavaOpção = prompt("Escreva 'ajudar' se você deseja ajudar o seu adversário emprestando uma das armas reservas que você trouxe.\nEscreva 'não ajudar' se você não deseja ajudar o seu adversário, assim, tendo um competidor a menos na competição.")
	}

	alert ("Você ajudou seu adversário e ele é imensamente grato a você. Ambos fizeram uma ótima competicão, você foi classificado(a) para a final, e o atleta que você ajudou ficou em quarto lugar.")

	vida += 10
    empatia += 50
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia")

	alert ("Chegou o dia da grande final da competição de Tiro Esportivo nas Olímpiadas. Você está muito nervoso(a), mas também feliz por conseguir chegar aonde chegou.")

	alert ("Você se prepara, pega a sua arma e olha fixamente para o alvo.")

	let nonaOpção = prompt("Escreva 'direita' se você quer mirar a arma mais para a direita.\nEscreva 'esquerda' se você quer mirar a arma mais a esquerda")

	alert ("POWW")

	alert ("Você acertou bem no meio do alvo e foi o(a) campeã(o) olímpico!")

	alert ("Você está muito feliz, e quando chega a hora de subir no pódio, se lembra de tudo o que já passou, e agradece pelas experiências e pelo aprendizado.")

	vida += 10
    empatia += 0
    alert ("Você tem " + vida  + " pontos de vida.")
    alert ("Você tem " + empatia  + " pontos de empatia")


	alert ("Parabéns atleta! Continue sempre treinando e ajudando o próximo, mas nunca se esqueça das suas origens e de manter a humildade.\nFim de jogo!")
