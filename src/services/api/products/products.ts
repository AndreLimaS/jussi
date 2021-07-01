import ProductImg from "../../../assets/images//Ellipse.png";

function getproducts() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          img: ProductImg,
          number: "P1",
          name: "Nome do Produto #1",
          describe: "Descrição do produto #1",
          feature: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
          id: 2,
          img: ProductImg,
          number: "P2",
          name: "Nome do Produto #2",
          describe: "Descrição do produto #2",
          feature: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
          id: 3,
          img: ProductImg,
          number: "P3",
          name: "Nome do Produto #3",
          describe: "Descrição do produto #3",
          feature: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
          id: 4,
          img: ProductImg,
          number: "P4",
          name: "Nome do Produto #4",
          describe: "Descrição do produto #4",
          feature: ["Feature 1", "Feature 2", "Feature 3"],
        },
      ]);
    }, 300)
  );
}

export default getproducts;
