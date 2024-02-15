import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Spin, DatePicker } from "antd";
import {
  Header,
  Footer,
  ProductIntro,
} from "../../components";
import styles from "./DetailPage.module.css";

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('product');
        console.log(data);
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>web site error: {error}</div>;
  }

  return <>
    <Header />
    <div className={styles["page-content"]}>
      <div className={styles["page-intro-container"]}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.pictures}
            />
          </Col>
          <Col span={11}>
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      <div className={styles["product-detail-anchor"]}></div>
      <div id="feature" className={styles["product-detail-container"]}></div>
      <div id="fees" className={styles["product-detail-container"]}></div>
      <div id="notes" className={styles["product-detail-container"]}></div>
      <div id="comments" className={styles["product-detail-container"]}></div>
    </div>
    <Footer />
  </>
};
