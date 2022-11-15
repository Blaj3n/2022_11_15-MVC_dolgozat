import JatekView from "./JatekView.js";

class KonyvekView {
  constructor(tomb, szuloElem) {
    szuloElem.html(`<div>
                <h1>Id</h1>
                <th>Cím</th>
                <th>Besorolás</th>
                <th>Ár</th>
        </div>`);
    tomb.forEach((jatek) => {
      const jatekom = new JatekView(jatek, this.tbodyElem);
    });
  }
}

export default JatekokView;
