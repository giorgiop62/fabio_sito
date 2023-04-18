<script>
export default {
  name: "Contatti",
};
</script>

<template>
  <div class="contatti">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Contatti:</h5>
        <ul>
          <li>+39 3331924326</li>
          <li>maydaymassage@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Indirizzo:</h5>
        <ul>
          <li>via Filangieri</li>
          <li>Marano</li>
          <li>Lungomare</li>
        </ul>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Social:</h5>
        <ul>
          <li>F</li>
          <li>I</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.contatti {
  display: flex;
  width: 100%;
  height: 700px;
  background-color: #242424;
}
.card {
  height: 200px;
  margin: auto auto;
  background-color: #e1b264;
  border: 2px solid #974d32;


}
li{
    color: #974d32;
    list-style-type: none;
    font-size: 17px;
    

}
.card-title{
          color:#974d32;

}

</style>