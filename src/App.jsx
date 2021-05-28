import "./App.css";
import shops from "./data/shops";

const App = () => (
  <div className="App">
    <h1>A list of {shops.length} electonics shops</h1>
    {shops.map((i) => (
      <div className="div-link">
        <a
          key={i.name}
          href={i.link}
          title={i.name}
          target="_blank"
          rel="noreferrer"
          className="App-link"
        >
          {i.name}
        </a>
      </div>
    ))}
    <h1>Notebooks with > 17 inches and > 16GB </h1>
    <a href="https://www.citilink.ru/catalog/noutbuki/?f=discount.any%2Crating.any%2C10659_317b73d1a3%2C4811_3&pf=discount.any%2Crating.any%2C4811_3&sorting=price_asc">
      Citilink
    </a>
    <br />
    <a href="https://www.ozon.ru/category/noutbuki-15692/?diagonallookup=55726&ram=33831&sorting=price">
      OZON
    </a>
    <br />

    <a href="https://www.dns-shop.ru/catalog/17a892f816404e77/noutbuki/?fr[65w]=17.1-17.3&f[676]=26o9">
      DNS
    </a>
    <br />

    <a href="https://www.notik.ru/index/notebooks.htm?srch=true&full=&f117=7177&f9=8344&sortby=price">
      NOTIK
    </a>
    <br />

    <a href="https://www.kns.ru/catalog/noutbuki/_diagonal-displeya_17-dyujmov/_obyom-pamyati_16gb/">
      KNS
    </a>
    <br />

    <a href="https://www.svyaznoy.ru/catalog/notebook/1738?FILTER%5B3455%5D%5B0%5D=7898&FILTER%5B5897%5D%5B0%5D=26492&ORDER_BY=price">
      Связной
    </a>
    <br />

    <a href="https://www.wildberries.ru/catalog/elektronika/noutbuki-pereferiya/noutbuki-ultrabuki?sort=priceup&page=1&f4474=1136028%3B99153&f4710=98508">
      Вилдберриз
    </a>
    <br />

    <a href="https://www.mvideo.ru/noutbuki-planshety-komputery-8/noutbuki-118/f/diagonal-ekrana=17-i-bolee/operativnaya-pamyat=16-gb?sort=price_asc">
      Ноу хау
    </a>
    <br />

    <a href="https://www.eldorado.ru/c/noutbuki/f/16-gb-ozu/?f_1202470=1202500&sort=price">
      Эльдорадо
    </a>
    <br />

    <a href="https://xn----8sb1bezcm.xn--p1ai/catalog/-/noutbuki?sort=priceasc&clauses=4c66d79cab5c9a17">
      Ноу хау
    </a>
    <br />
        <h1>Notebooks with > 17 inches</h1>
https://www.citilink.ru/catalog/noutbuki/?f=discount.any%2Crating.any%2C10659_317b73d1a3%2C10659_317d1a3&pf=discount.any%2Crating.any%2C10659_317b73d1a3&sorting=price_asc
https://www.ozon.ru/category/noutbuki-15692/?diagonallookup=55726%2C36702&sorting=price
https://www.dns-shop.ru/catalog/17a892f816404e77/noutbuki/?fr[65w]=17.1-17.3
https://www.notik.ru/index/notebooks.htm?srch=true&full=&f117=5650&f9=8344&sortby=price
https://www.kns.ru/catalog/noutbuki-17-dyuimov/
https://www.svyaznoy.ru/catalog/notebook/1738?FILTER%5B5897%5D%5B0%5D=26492&ORDER_BY=price
https://www.wildberries.ru/catalog/elektronika/noutbuki-pereferiya/noutbuki-ultrabuki?sort=priceup&page=1&f4474=1136028%3B99153
https://www.mvideo.ru/noutbuki-planshety-komputery-8/noutbuki-118/f/diagonal-ekrana=17-i-bolee?sort=price_asc
https://www.eldorado.ru/c/noutbuki/?f_1202470=1202500&sort=price
https://xn----8sb1bezcm.xn--p1ai/catalog/-/noutbuki?sort=priceasc&clauses=4c66d79c
  </div>
);

export default App;
