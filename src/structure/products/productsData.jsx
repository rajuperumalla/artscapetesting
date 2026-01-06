import diamond from "../../assets/images/products/diamond.jpg"
import side_table from "../../assets/images/products/side_table.jpg"
import center_table from "../../assets/images/products/center_table.jpg"
import coffee_table from "../../assets/images/products/coffee_table.jpg"
import artscape01 from "../../assets/images/products/singleproduct/artscape1.jpg"
import artscape02 from "../../assets/images/products/singleproduct/artscape.png"
import diamond_front from "../../assets/images/diamond_front_view.jpg"
import diamond_top from "../../assets/images/diamond_top_view.jpg"

const products = [
    {
        id: 1,
        title: "Side Table",
        slug: "side-table",
        image: side_table,
        woodProductImages: [side_table, artscape01, artscape01, artscape01, artscape01],
        metalProductImages: [side_table, artscape02, artscape02, artscape02, artscape02],
        description: "Elegant handcrafted side table. This item is awesome. Very relaxing watching it work. The app iseasy to use and a lot of designs. Gave it to my wife for ananniversary gift. She loves it!",
    },
    {
        id: 2,
        title: "Coffee Table",
        slug: "coffee-table",
        image: coffee_table,
        woodProductImages: [coffee_table, artscape01, artscape01, artscape01, artscape01],
        metalProductImages: [coffee_table, artscape02, artscape02, artscape02, artscape02],
        description: "Premium designer coffee table. This item is awesome. Very relaxing watching it work. The app iseasy to use and a lot of designs. Gave it to my wife for ananniversary gift. She loves it!",
    },
    {
        id: 3,
        title: "Center Table",
        slug: "center-table",
        image: center_table,
        woodProductImages: [center_table, artscape01, artscape01, artscape01, artscape01],
        metalProductImages: [center_table, artscape02, artscape02, artscape02, artscape02],
        description: "Modern center table with artistic finish.  This item is awesome. Very relaxing watching it work. The app iseasy to use and a lot of designs. Gave it to my wife for ananniversary gift. She loves it!",
    },
    {
        id: 4,
        title: "Diamond Series",
        slug: "diamond-series",
        image: diamond,
        productImages: [diamond, diamond_front, diamond_top, artscape01, artscape02],
        description: "Luxury diamond-inspired table series.  This item is awesome. Very relaxing watching it work. The app iseasy to use and a lot of designs. Gave it to my wife for ananniversary gift. She loves it!",
    },
]

export default products
