import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Buy() {
  const housesForSale = [
    {
      id: 1,
      name: "Luxurious Seaside Villa",
      price: "$2,500,000",
      description:
        "Experience coastal living at its finest! This stunning seaside villa boasts breathtaking ocean views and exquisite amenities. With 5 bedrooms, 6 bathrooms, a private pool, and direct beach access, this property offers luxury and tranquility.",
      image: "/house1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Modern Downtown Loft",
      price: "$850,000",
      description:
        "Located in the heart of the city, this modern loft offers an urban lifestyle with style. Featuring high ceilings, large windows, and an open floor plan, this 3-bedroom, 2-bathroom loft is perfect for city dwellers.",
      image: "/house2.jpg" ,
    },
    {
      id: 3,
      name: "Mountain View Retreat",
      price: "$1,200,000",
      description:
        "Escape to the serene mountains! This picturesque retreat offers stunning views, spacious interiors, and modern amenities. With 4 bedrooms, 3 bathrooms, and a vast outdoor area, this property is ideal for nature lovers.",
      image: "/house5.jpg",
    },
    {
      id: 4,
      name: "Country Estate",
      price: "$3,800,000",
      description:
        "Nestled in the countryside, this luxurious estate offers an unparalleled living experience. With 7 bedrooms, 8 bathrooms, expansive grounds, a pool, and stunning views, this property is an epitome of elegance and comfort.",
      image: "/house9.jpg",
    },
  ];


  return (
    <>
     <Header />
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Find Your Dream Home</h1>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Explore our collection of houses and apartments available for sale. Whether you're looking for a beachfront villa or a stylish urban loft, we have the perfect property for you.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {housesForSale.map((house) => (
            <div key={house.id} style={{ width: "45%", marginBottom: "20px", borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <img src={house.image} alt={house.name} style={{ width: "100%", height: "250px", objectFit: "cover", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} />
              <div style={{ padding: "20px" }}>
                <h2 style={{ margin: "0", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>{house.name}</h2>
                <p style={{ margin: "0", color: "#555", fontSize: "1rem", marginBottom: "10px" }}>Price: {house.price}</p>
                <p style={{ margin: "0", marginBottom: "20px" }}>{house.description}</p>
                <button style={{ padding: "10px 20px", backgroundColor: "#2ecc71", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Contact a Agent</button>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Buy;

