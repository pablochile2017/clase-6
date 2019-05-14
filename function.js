
        

        let who = ['the dog','my granma','his turtle','my bird'];
		let what = [' eat',' pissed',' crushed',' broked'];
		let when = [' before the class',' right in time',' when I finished',' during my lunch','while I was praying'];
        
        let Pwho = who.length; 
        let preguntasWho=Math.round(Math.random()*(Pwho-1)); 

        let Pwhat = what.length; 
        let preguntasWhat=Math.round(Math.random()*(Pwhat-1)); 

        let Pwhen = when.length; 
        let preguntasWhen=Math.round(Math.random()*(Pwhen-1)); 

        function mostrarPreguntaWho() { 
        document.write(who[preguntasWho]);};

        function mostrarPreguntaWhat() { 
        document.write(what[preguntasWhat]);};

        function mostrarPreguntaWhen() { 
        document.write(when[preguntasWhen]);};

        
        

