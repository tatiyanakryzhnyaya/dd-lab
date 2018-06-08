<template>
  <div class="SideBar">
    <ul class="ul">
      <li class="topic li "><router-link to="/" class="link" exact>Актуальное</router-link></li>
      <li class="all li "><router-link to="/all" class="link" exact>Все мероприятия</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>
<style lang="scss">
  .SideBar{
    flex-basis:300px;
    .ul{
        font-size: 22px;
        margin: 10px 0;
        color: black;
        font-size: 18px;
        display:flex;
        flex-direction: column;
        padding: 20px;
        .li{
        .link{
          text-decoration: none;
          color: gray;
          font-weight: bold;
          font-size: 20px;
          margin: 5px 0;
         }
        .link:hover{
          color:#55b2fe;
        }
        .router-link-active{
          color:#55b2fe;
        }
      }
    }
    .topic{
        flex-basis:100%;
        display:flex;
        justify-content:center;
    }
    .all{
        flex-basis:100%;
        display:flex;
        justify-content:center;
    }
  }
  @media(max-width: 900px){
  .SideBar{
    flex-basis: 100%;
    display: flex;
    padding: 0 20px;
    margin: 0 40px;
    .ul{
       flex-basis: 100%;
       display: flex;
       flex-direction: row;
       .li{
        flex-basis: auto;
         margin: 0 10px;
         .link{
          text-decoration: none;
          color: gray;
          font-weight: bold;
          font-size: 13px;
         }
        .link:hover{
          color:#55b2fe;
        }
        .router-link-active{
          color:#55b2fe;
        }
       }
    }
  }

}
</style>
