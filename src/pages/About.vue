<script>
export default {
  name: "About",
};
</script>

<template>

<div class="about">
  <h1>Fabio Carandente</h1>
  <div class="descrizione">
    <p>
      Sono Fabio Carandente, educatore e massaggiatore professionista.
      Oltre alla laurea in Scienze dell'Educazione della Formaizone, ho deciso di intraprendere gli studi
      e diplomarmi nella scuola professionale di massaggi <a href="https://www.diabasi.it/">Diabasi</a>. 
      In seguito alle mie conoscenze nell'ambito del benessere ho ideato delle tecniche tutte mie.É nato cosi
      il metodo <a href="https://www.instagram.com/fabio.carandente/">maydayMASSAGE</a>
    </p>
  </div>  
</div>
<div class="title">
  <img src="../assets/titolo.png" alt="">
</div>
<div class="intervista">
  <img src="../assets/intervista3.png" alt="">
</div>

<div class="intervista">
    <img class="img2" src="../assets/intervista2.png" alt="">
    <a href="https://pinklifemagazine.com/2022/10/27/fabio-carandente-il-massaggiatore-delle-celebrities/"><h6>Link Articolo</h6></a>

</div>

</template>



<style lang="scss" scoped>
.about{
  height: 1300px;
  background-image: url("../assets/1.jpg");
  background-size: cover;
}
h1{
  color: #e1b264;
  text-align: center;
  font-size: 3rem;
  font-family: 'Times New Roman', Times, serif;
}
p{
  font-size: 23px;
  font-family: 'Times New Roman', Times, serif;
  color: bisque;
  padding: 20px;
  text-align: center;
}
a{
      color:#e1b264;
}
a:hover{
  color: #bd9047;
}
.intervista{
  text-align: center;
  background-color: #242424;
  
}
img{
  width: 600px;

}
.img2{
margin-right: 40px;
}
h6{
  padding-bottom: 10px;
}
.title{
  text-align: center;
  background-color: #242424;
}




</style>