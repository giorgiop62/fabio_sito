<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="logo.png" alt="logo" />
    </div>
    <div class="link">
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>

            <li>
                <a href="/about">Chi Sono</a> <span>/Intervista</span>
  
            </li>

            <li>
                <a href="/gallery">Massaggi</a>
            </li>

            <li>
                <a href="/collaborazioni">Collaborazioni</a>
            </li>

             <li>
                <a href="/vip">Vip</a>
            </li>
              
           
                <li>
              <a href="/contatti">Contatti</a>
            </li>
        </ul>

    </div>
  </header>
</template>


<style lang="scss" scoped>
header{
    width: 100%;
    height: 100px;
    background-color: #eae4d8;
    display: flex;
    align-items: center;
}

img {
  width: 10  0px;
}
ul{
    display: flex;
    list-style-type: none;

}
a{
    text-decoration: none;
    color: #974d32;
    font-size: 20px;
    margin-left: 60px;
    font-family: 'Times New Roman', Times, serif;
}

a:hover{
  color: #7b4633;
}

span{
  color: #974d32;
}
</style>