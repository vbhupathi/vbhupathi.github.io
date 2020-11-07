<template>
  <div class="home">
    <div class="content-container">
      <div class="section content-title-group">
        <img alt="profile img" src="../assets/images/person.jpg">
          <div>
            <p>{{name}}</p>
            <p>{{aboutMe}}</p>
          </div>
        </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  name: 'home',
  components: {
    HeaderBar
  },
  data:function(){
     return{
     name: 'Hi, I am Venkata Bhupathi',
     aboutMe: 'I am passionately inquisitive about web & software design and development. I enjoy working in a group to transform business requirements into technical solutions, particularly when I get the chance to apply standards of software engineering and mathematical analysis to the design, development, testing, and evaluation of said software. Currently working, as a Software Developer at Indiana University, on innovative software projects for the High. Educ. industry. Graduated from Central Connecticut State University with a Masters Degree in Computer Information Technology.',
     image:'../assets/images/person.jpg',
     }
}

}
</script>
