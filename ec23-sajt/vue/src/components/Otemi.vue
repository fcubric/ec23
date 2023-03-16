<template>
    <div class="flex flex-col mx-auto p-4 max-w-screen-lg lg:max-w-2xl xl:max-w-3xl bg-opacity-30 bg-white omotac">
      <h2 class="text-2xl font-bold text-center mb-4 font-condensed velicinaNaslov" style="color: white;">O temi</h2>
      <p class="text-base  my-3 text-justified font-condensed velicinaTekst" style="color: white;">
        
        Ove godine tema hakatona biće <b>Mobile App Development: Gamification</b>, što predstavlja proces implementacije elemenata i dinamike igara u aplikacije koje sa njima nisu nužno povezane. Pomaže pri povećanju angažmana i omogućuje korisnicima da se fokusiraju na svoje ciljeve tako što dosadnu rutinu pretvara u zabavno iskustvo. Primenom osnovne psihologije, gejmifikovane aplikacije se staraju o tome da motivišu korisnike da ih ponovo koriste dajući im osećaj dostignuća.

      </p>
  </div>
</template>


<script>
export default {
  name: "Otemi",
};
</script>

<style scoped>
  .font-condensed {
    font-family: "Roboto Condensed", sans-serif;
  }

  .omotac {
  border-radius: 10px;
}

@media screen and (min-width: 768px) {
  .omotac {
    width: 40%;
    margin-left: 30%;
  }
}

@media screen and (min-width: 768px) {
  .velicinaNaslov{
    font-size: 3rem; /* 48px */
    line-height: 1;
  }

  .velicinaTekst{
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }
}

</style>