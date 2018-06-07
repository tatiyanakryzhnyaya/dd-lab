<template>
  <div class="SideBar">
    <ul class=SideBar__ul>
      <li class="topic "><router-link to="/" class="link" exact>Актуальное</router-link></li>
      <li class="all "><router-link to="/all" class="link" exact>Все мероприятия</router-link></li>
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
    &__ul{
        font-size: 22px;
        margin: 10px 0;
        color: black;
        font-size: 18px;
        display:flex;
        flex-direction: column;
        padding: 40px;
        .link{
          text-decoration: none;
          color:black;
        }
        .link:hover{
          color:#55b2fe;
        }
        .router-link-active{
          color:#55b2fe;
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
</style>
