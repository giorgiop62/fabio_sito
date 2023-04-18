<script>
export default {
    name:'AppFooter'
}
</script>

<template>
<footer>
    <div class="logo">
      <img src="logo.png" alt="logo" />
    </div>

    <div class="info">
      <h6>Hai lanciato un MAYDAY, resta in attesa del tuo massaggio d'aiuto</h6>
     <p>realizzato da GiorgioPerez</p>
    </div>

    <div class="social">
      <ul>
        <li><a href="https://www.instagram.com/fabio.carandente/">x</a></li>
        <li><a href="http://"><i class="fa-brands fa-whatsapp"></i><i class="fa-brands fa-whatsapp"></i></a></li>

      </ul>
        

    </div>

</footer>
  
</template>


 <style lang="scss" scoped>
 footer{
    width: 100%;
    height: 100px;
    background-color: #eae4d8;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.info{
  text-align: center;
  color: #954d31;
}
img {
  width: 100px;
}
ul{
  display: flex;
}
li{
  margin-left: 20px;
  list-style-type: none;
}
a{
  text-decoration: none;
  font-size: 20px;

}
th{
  color: brown;
}

    
</style>

