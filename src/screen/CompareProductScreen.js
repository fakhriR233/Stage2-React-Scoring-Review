import React from "react";
import Header from "../components/Header";
import DetailDesc from "../components/ProductDetail/DetailDesc";
import DetailImage from "../components/ProductDetail/DetailImage";
import Card from "react-bootstrap/Card";
import CompareWith from "../components/ProductCompareWith/CompareWith";

function CompareProductScreen() {
  return (
    <div>
      <Header />
      <h1 className="mb-5" style={{ color: "white", textAlign: "center" }}>
        Product Comparison
      </h1>
      <div className="d-flex mx-5">
        <div className="p-3 mx-3 mt-3">
          <div style={Styles.CardSize}>
            <Card className="bg-dark p-3" style={{ height: "50%" }}>
              <DetailImage />
              <DetailDesc />
            </Card>
          </div>
        </div>

        <div className="p-3 mx-3 mt-3">
          <div style={Styles.CardSize}>
            <Card className="bg-dark p-3" style={{ height: "50%" }}>
              <DetailImage />
              <CompareWith />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const Styles = {
  CardSize: {
    width: "480px",
  },
};

export default CompareProductScreen;
