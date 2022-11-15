class JatekModel {
    #jatekokTomb = [];
  
    constructor() {
      //console.log("KonyvModel");
    }
    adatModosit(adat) {
      console.log("modellben módosít", adat);
    }
    adatTorol(adat) {
      console.log("modellben töröl", adat);
    }
  
    adatBe(vegpont, myCallBack) {
      fetch(vegpont, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.#konyvekTomb = data.konyv;
          console.log(this.#jatekokTomb);
          myCallBack(this.#jatekokTomb);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  
  export default JatekModel;
  