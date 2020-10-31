const app = new Vue({
    el: '#user-goal',
    data(){
        return {
            courseGoal:'Finish the course and learn vue',
            vueLink:'https://www.google.com'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){
                return 'Learn Vue'
            }else{
                return 'Master Vue'
            }
        }
    }
   
  })