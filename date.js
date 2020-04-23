
    function getDate (){
        const data = new Date();

        let options = {
            weekday: "long",
            day: "2-digit",
            month: "long"
        }

        let dia = data.toLocaleDateString("pt-BR", options);
    }

    module.exports
    