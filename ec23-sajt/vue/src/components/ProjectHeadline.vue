<template>
    <div class="flex flex-col mx-auto p-4 max-w-screen-lg lg:max-w-2xl xl:max-w-3xl bg-opacity-30 bg-white omotac">
      <h2 class="text-2xl font-bold text-center mb-4 font-condensed velicinaNaslov" style="color: white;">O projektu</h2>
      <p class="text-base  my-3 text-justified font-condensed velicinaTekst" style="color: white;">
        <b>EESTech Challenge </b> predstavlja internacionalno takmičenje koje organizuje Udruženje studenata elektrotehnike Evrope – Lokalni komitet Beograd (EESTEC LC Belgrade). Projekat za cilj ima pružanje prilika studentima da nadograde svoje znanje iz oblasti elektrotehnike i računarstva, kao i doprinos razvoju njihove profesionalne mreže. 
        <br><br>Sastoji se iz 24-časovnog <b> hakatona </b> i dvodnevne <b> konferencije </b> na temu iz oblasti tehnologije koja je aktuelna te godine. Pobednici lokalnih rundi se takmiče u finalu koje se svake godine održava u različitom evropskom gradu.
        
      </p>
  </div>
</template>


<script>
export default {
  name: "ProjectHeadline",
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