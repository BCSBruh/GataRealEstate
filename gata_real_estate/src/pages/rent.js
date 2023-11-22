import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const agentInfo = {
  phone: "123-456-7890",
  email: "agent@company.com",
  officeHours: "Monday - Friday, 9 AM - 5 PM",
};

function Rent() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Contact an Agent</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto 20px" }}>
          Looking to rent a house or apartment in Statesboro or Savannah? Our dedicated agents are here to assist you. Feel free to reach out for expert guidance and to schedule property viewings.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "60%", border: "1px solid #ccc", borderRadius: "8px", padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ marginBottom: "20px" }}>Contact Information</h2>
            <p style={{ margin: "10px 0" }}>
              <strong>Phone:</strong> {agentInfo.phone}
            </p>
            <p style={{ margin: "10px 0" }}>
              <strong>Email:</strong> {agentInfo.email}
            </p>
            <p style={{ margin: "10px 0" }}>
              <strong>Office Hours:</strong> {agentInfo.officeHours}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rent;
