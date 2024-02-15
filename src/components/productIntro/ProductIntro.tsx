import styles from "./ProductIntro.module.css";
import React from "react";
import { Typography, Carousel, Image, Rate, Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface PropsType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: string | number;
  pictures: string[];
}

const columns: ColumnsType<RowType> = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: 120,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

interface RowType {
  title: string;
  description: string | number | JSX.Element;
  key: number;
}

export const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  discount,
  rating,
  pictures,
}) => {

  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: "Tour router",
      description: title,
    },
    {
      key: 1,
      title: "Price",
      description: (
        <>
          ${" "}
          <Typography.Text type="danger" strong>
            {price}
          </Typography.Text>
        </>
      ),
    },
    {
      key: 2,
      title: "Limit discount",
      description: discount ? (
        <>
          $ <Typography.Text delete>{price}</Typography.Text>{" "}
          <Typography.Text type="danger" strong>
            $ {discount}
          </Typography.Text>
        </>
      ) : (
        "No discount"
      ),
    },
    {
      key: 2,
      title: "Take coupons",
      description: coupons ? discount : "No discount",
    },
    {
      key: 2,
      title: "Reviews of tour",
      description: (
        <>
          <Rate allowHalf defaultValue={+rating} />
          <Typography.Text style={{ marginLeft: 10 }}>
            {rating} Star
          </Typography.Text>
        </>
      ),
    },
  ];

  return (
    <div className={styles["intro-container"]}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Text>{shortDescription}</Typography.Text>
      <div className={styles["intro-detail-content"]}>
        <Typography.Text style={{ marginLeft: 20 }}>
          $ <span className={styles["intro-detail-strong-text"]}>{price}</span>{" "}
          /per person
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className={styles["intro-detail-strong-text"]}>{rating}</span>{" "}
          points
        </Typography.Text>
      </div>
      <Carousel autoplay slidesToShow={3}>
        {pictures.map((p) => (
          <Image height={150} src={p} />
        ))}
      </Carousel>
      <Table<RowType>
        columns={columns}
        dataSource={tableDataSource}
        size="small"
        bordered={false}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};
