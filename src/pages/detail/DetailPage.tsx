import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin, Row, Col, Divider, DatePicker, Typography, Anchor, Menu } from "antd";
import styles from "./DetailPage.module.css";
import {
  ProductIntro,
  ProductComments,
} from "../../components";
import { getProductDetail } from "../../redux/productDetail/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../layouts/mainLayout";

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams();

  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (touristRouteId) {
      dispatch(getProductDetail(touristRouteId));
    }
  }, [touristRouteId]);

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
    return <div>Website Error: {error}</div>;
  }

  return (
    <MainLayout>
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
              pictures={product.pictures.map((p) => p.url)}
            />
          </Col>
          <Col span={11}>
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      <Anchor className={styles["product-detail-anchor"]}>
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Anchor.Link href="#feature" title="Features"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Anchor.Link href="#fees" title="Fees"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Anchor.Link href="#notes" title="Notes"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Anchor.Link href="#comments" title="Comments"></Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>
      <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>Features</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="fees" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>Fees</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.fees }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="notes" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>Notes</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.notes }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="comments" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>Comments</Typography.Title>
        </Divider>
        <div style={{ margin: 50 }}>
          <ProductComments data={product.comments} />
        </div>
      </div>
    </MainLayout>
  );
};
