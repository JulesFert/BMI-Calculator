let app = {

    init: function() {
        console.log('Initialisation');
        formElement = document.getElementById('formImc')
        formElement.addEventListener('submit', app.handleFormSubmit)
    },

    handleFormSubmit: function(e) {

        // je bloque le chargement de la page au submit
        e.preventDefault()

        // je récupère la valeur de l'input weight
        const weight = document.getElementById('weight').value

        // je récupère la valeur de l'input size
        const size = document.getElementById('size').value

        // j'effectue le calcul
        const resultImc = weight / (size * size)
        resultImcFixed = resultImc.toFixed(1)
        console.log('Le résultat est :' + resultImc)

        // je vide les deux input
        document.getElementById('weight').value = null
        document.getElementById('size').value = null

        app.displayIMC(resultImcFixed)
    },

    displayIMC: function(result) {

        // je récupère les élements pour afficher l'IMC
        const imcContainer = document.getElementById('imcContainer')
        const imcDescriptionElement = document.getElementById('imcDescription')
        console.log(imcDescriptionElement)

        imcContainer.innerHTML = "Your BMI is " + result

        let description = null
        
        if (result < 16.5) {
            description = "in severe underweight/malnutrition"
        } else if (result >= 16.5 && result < 18.5) {
            description = "underweight"
        } else if (result >= 18.5 && result < 25) {
            description = "of normal weight"
        } else if (result >= 25 && result < 30) {
            description = "overweight"
        } else if (result >= 30) {
            description = "obese"
        }
        
        imcDescriptionElement.innerHTML = "You are " + description;

    }

    }

    

app.init()