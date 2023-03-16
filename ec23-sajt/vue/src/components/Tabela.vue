<template>
    <div class="table-container wd">
        <h2 class="text-3xl font-bold text-center mb-4 font-condensed">Raspored Predavanja</h2>
    <div class=" px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-[#036cad]">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium font-condensed uppercase tracking-wider">
                      Tema
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium font-condensed uppercase tracking-wider">
                      Datum
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium font-condensed uppercase tracking-wider">
                      Vreme
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium font-condensed uppercase tracking-wider">
                      Mesto
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium font-condensed uppercase tracking-wider">
                      Predavac
                    </th>
                  </tr>
                </thead>
                <tbody class=" bg-[#113B60] divide-y divide-gray-200">
                  <tr v-for="(row, index) in rows" :key="index" class="hover:bg-[#036cad] transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap font-condensed">
                      {{ row.tema }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap font-condensed">
                      {{ row.datum }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap font-condensed">
                      {{ row.vreme }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap font-condensed">
                      {{ row.mesto }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap font-condensed">
                      {{ row.predavac }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'Tabela',
    data() {
      return {
        rows: [
          { tema: 'Performansni problemi i rad u realtime okruženju na mobilnim aplikacijama', predavac: 'Dejan Marković',datum:"14.3.2023.", vreme: '14:00 - 15:00', mesto: 'Građevinski fakultet, sala 123' },
          { tema: 'Izrada Tower Defense prototipa za 30 minuta', predavac: 'Zoran Trandafilović',datum:"14.3.2023.", vreme: '15:15 - 16:15', mesto: 'Građevinski fakultet, sala 123' },
          { tema: 'Šta razvoj mobilnih igara može da nas nauči za razvoj boljih proizvoda?', predavac: 'Marko Jevremović',datum:"14.3.2023.", vreme: '16:30 - 17:30', mesto: 'Građevinski fakultet, sala 123' },
          { tema: 'KOME I KAKO? - najvažnija pitanja za razvoj aplikacije kao biznis alata', predavac: 'Jelena Uzelac Vasić',datum:"15.3.2023.", vreme: '12:00 - 13:00', mesto: 'Arhitektonski fakultet, sala 320' },
          { tema: 'Radionica: Izrada trkačke igre', predavac: 'Igor Sabo',datum:"15.3.2023.", vreme: '14:00 - 15:30', mesto: 'Arhitektonski fakultet, sala 320' },
          { tema: 'Edukacione igre', predavac: 'Igor Sabo',datum:"15.3.2023.", vreme: '16:00 - 17:00', mesto: 'Arhitektonski fakultet, sala 320' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    animation: fadein 0.5s;
  }

  .wd{
    width:75%;
    margin-left:12.5%;
  }
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  th {
    text-align: left;
  }
  
  @media screen and (max-width: 640px) {
  

}

  tr:hover {
    background-color: #036cad;
  }
  .font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }

.font-condensed-dugme{
  background-color: white;
  font-family: "Roboto Condensed", sans-serif;
}

.font-condensed-dugme:hover{
  background-color:#3B6B8E;
}
  
  @media (max-width: 640px) {
    table {
      font-size: 0.8rem;
    }
  }
  </style>