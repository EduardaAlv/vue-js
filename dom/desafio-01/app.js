new Vue({
    el: '#desafio',
    data:{
        nome: 'Eduarda',
        idade: '21',
        linkImagem: 'https://files.tecnoblog.net/wp-content/uploads/2020/03/google-imagens.jpg'
    },
    methods: {
        idadeMultiplicadaPor3: function() {
            return this.idade * 3
        },
        numeroRandom: function(){
           return Math.random()
        }
    }
})