
<template>
    <h1>{{ greeting }}</h1>
    <button v-bind:title="buttonTitle" @click="changeGreeting">Click de thay doi loi chao</button>
</template>
<script>
    export default{
        data(){
            return {
                greeting: 'Xin chao ban',
                buttonTitle: 'Nhan de thay doi'
            };
        },
        methods:{
            changeGreeting(){
                this.greeting = 'hello guy';
                this.buttonTitle = 'da thay doi'; 
            }
        }
    }
</script>