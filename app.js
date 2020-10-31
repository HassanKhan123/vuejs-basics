const app = new Vue({
    el: '#user-goal',
    data(){
        return {
            courseGoalA:'Finish the course and learn vue',
            courseGoalB:'Master vue and building amazing apps',
            vueLink:'https://www.google.com'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){
                return this.courseGoalA
            }else{
                return this.courseGoalB
            }
        }
    }
   
  })