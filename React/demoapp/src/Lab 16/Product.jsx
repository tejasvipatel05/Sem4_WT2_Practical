const productList = [
    {
      productName: "Headphones",
      productPrice: 99.99,
      productCategory: "Electronics",
      productDescription: "High-quality wireless headphones with noise cancellation and a comfortable fit.",
      productBrand: "SoundMax",
      productImage: "https://img.freepik.com/free-photo/black-wireless-headphones-black-surface_417767-115.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid_sidr",
      productRating: 4.5,
    },
    {
      productName: "Smart Watch",
      productPrice: 159.99,
      productCategory: "Wearables",
      productDescription: "A sleek smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
      productBrand: "FitTech",
      productImage: "https://img.freepik.com/premium-photo/partial-view-athletic-young-sportsman-showing-smartwatch-with-blank-screen-running-track_213725-138.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid_sidr",
      productRating: 4.7,
    },
    {
      productName: "Bluetooth Speaker",
      productPrice: 49.99,
      productCategory: "Electronics",
      productDescription: "Portable Bluetooth speaker with superior sound quality and waterproof design.",
      productBrand: "BassBoom",
      productImage:  "https://img.freepik.com/free-photo/view-horizontal-bluetooth-speaker-with-simple-minimal-modern-design_23-2150807999.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid_sidr",
      productRating: 4.3,
    },
];

function Product() {
    return (
        <div className="d-flex">
            {productList.map((Ele, index) => {
                return (
                    <div className="d-flex justify-content-center mx-4 mb-4">
                        <div className="card" style={{ 'width': '18rem' }}>
                            <img src={Ele.productImage} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Name: {Ele.productName}</h5>
                                <p className="card-text">Category: {Ele.productCategory}</p>
                                <p className="card-text">Description: {Ele.productDescription}</p>
                                <p className="card-text">Brand: {Ele.productBrand}</p>
                                <p className="card-text">Rating: {Ele.productRating}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Product;