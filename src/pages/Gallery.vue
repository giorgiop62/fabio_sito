<script>
import foto from "../data/foto";
export default {
  name: "Gallery",

  data() {
    return {
      foto,
    };
  },
};
</script>

<template>
  <div class="container1">
      <h1>Scopri il metodo maydayMassage</h1>
    <div class="box">
    <div class="card" v-for="(immagine,index) in foto" :key="index">
      <img class="card-img-top" :src="immagine.img" alt="2.jpg" />
      <div class="card-body">
        <h5 class="card-title">{{immagine.title}}</h5>
        <p class="card-text">
          {{immagine.description}}
        </p>
      </div>
    </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.container1 {
  height: 700px;
  flex-wrap: wrap;
  background-color: #242424;

}
.box{
  display: flex;
  justify-content: space-around;
  
}
h1 {
  text-align: center;
  color:#e1b264;
  font-family: "Times New Roman", Times, serif;


}
.card {
  width: 300px;
  height: 500px;
  margin-top: 30px;
  border: solid 2px #e1b264;

}

</style>