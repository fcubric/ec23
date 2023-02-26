<template>
    <div class="max-w-md mx-auto">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form action="https://formsubmit.co/f.cubric@gmail.com" method="POST" enctype="multipart/form-data">
          <div class="mb-4">
            <label class="block font-condensed text-gray-700 font-bold mb-2" for="firstName">
              Ime
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Ime"
              v-model="form.firstName"
              name="ime"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-condensed text-gray-700 font-bold mb-2" for="lastName">
              Prezime
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Prezime"
              v-model="form.lastName"
              name="prezime"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-condensed text-gray-700 font-bold mb-2" for="university">
              Fakultet
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="university"
              type="text"
              placeholder="Fakultet"
              v-model="form.university"
              name="fakultet"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block font-condensed text-gray-700 font-bold mb-2" for="phoneNumber">
              Broj telefona
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              placeholder="Broj telefona"
              v-model="form.phoneNumber"
              required
              name="brojTelefona"
            />
          </div>
          <div class="mb-4">
            <label class="block font-condensed text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              v-model="form.email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2 font-condensed" for="teamName">
              Ime tima
            </label>
            <div class="mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              v-model="form.individualno"
              name="individualno"
            />
            <span class="ml-2 text-gray-700 font-condensed">Prijavljujem se individualno (u polje za ime tima ne upisujete ništa)</span>
          </label>
        </div>
            <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="teamName"
    type="text"
    placeholder="Ime tima"
    name="teamname"
    v-model="form.teamName"
    v-bind:disabled="form.individualno"
  />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2 font-condensed" for="teamName">
              Link ka githubu (ili ka vašim projektima)
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="githubLink"
              type="text"
              name="projekti"
              placeholder="Github link"
              v-model="form.githubLink"
              required
            />
        </div>
        <div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 font-condensed" for="cvUpload">
    Upload CV <span v-if="cvFile">- {{ cvFile.name }}</span>
  </label>
  <div class="flex items-center justify-between">
    <input type="file" class="hidden" ref="cvInput" name="cv" @input="handleCVUpload">
    <button type="button" class="font-condensed-dugme text-white px-4 py-2 rounded-lg focus:outline-none" @click="openCVUploadDialog">
      Choose File
    </button>
  </div>
</div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              v-model="form.hackathon"
              name="hakaton"
              
            />
            <span class="ml-2 text-gray-700 font-condensed">Prijavljujem se za hakaton</span>
          </label>
        </div>
        <div class="mb-6">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              v-model="form.predavanja"
              name="konferencija"
            />
            <span class="ml-2 text-gray-700 font-condensed">Prijavljujem se za konferenciju</span>
          </label>
        </div>
        
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              v-model="form.rezim"
              name="rezim"
            />
            <span class="ml-2 text-gray-700 font-condensed">Imam poseban režim ishrane</span>
          </label>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2 font-condensed" for="rezimtext">
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rezimtext"
              type="text"
              name="rezimtext"
              placeholder="Napišite vaš režim ishrane"
              v-model="form.rezimtext"
             :disabled="!form.rezim"
            />
           </div>
        <div class="flex items-center justify-between">
          <!-- <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_cc" value="aleksa.jovanovic03@gmail.com"> -->
          <button
            class=" font-condensed-dugme text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        university: '',
        phoneNumber: '',
        email: '',
        teamName: '',
        githubLink:'',
        hackathon: false,
        predavanja: false,
        individualno:false,
        rezim:false,
        rezimtext:''
      },
      cvFile: null
    };
  },
  methods: {
    handleIndividualnoChange() {
      if (this.form.individualno) {
        this.form.teamName = '';
      }
    },
    openCVUploadDialog() {
      this.$refs.cvInput.click();
    },
    handleCVUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.cvFile = file;
      } else {
        this.resetCVInput();
      }
    },
    resetCVInput() {
      this.cvFile = null;
      this.$refs.cvInput.value = null;
    }
  }
};
</script>

<style>
.font-condensed {
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }

.font-condensed-dugme{
  background-color: #113b60;
  font-family: "Roboto Condensed", sans-serif;
}

.font-condensed-dugme:hover{
  background-color:#3B6B8E;
}
</style>

  