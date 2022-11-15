class JatekView {
  #jatek;
  constructor(jatek, szulojatek) {
    this.#jatek = jatek;
    console.log("JatekView");
    console.log(jatek);
    szulojatek.append(`<li>
                            <a>${jatek.id}</a>
                            <a>${jatek.cim}</a>
                            <a>${jatek.besorolas}</a>
                            <a>${jatek.ar}</a>
          <a><button id="mod${jatek.id}">Módosít</button></a>
          <a><button id="del${jatek.id}">Töröl</button></a>
          </li>`);
    //gombok eseménykezelői
    this.sorjatek = szulojatek.children(":last-child");
    console.log(this.sorjatek);
    this.modositJatek = $(`#mod${jatek.id}`);
    this.torolJatek = $(`#del${jatek.id}`);
    //módosít gomb eseménykezelő
    this.modositJatek.on("click", () => {
      console.log("Módosít a View-ban");
      this.kattintasModositTrigger();
    });
    //töröl gomb eseménykezelő
    this.torolJatek.on("click", () => {
      console.log("Töröl a View-ban");
      this.kattintasTorolTrigger();
    });
  }
  kattintasModositTrigger() {
    console.log("Módosít a triggerben");
    const esemeny = new CustomEvent("modosit", {
      detail: this.#jatek.id,
    });
    window.dispatchEvent(esemeny);
  }
  kattintasTorolTrigger() {
    console.log("Töröl a triggerben");
    const esemeny = new CustomEvent("torol", {
      detail: this.#jatek.id,
    });
    window.dispatchEvent(esemeny);
  }
}

export default JatekView;
