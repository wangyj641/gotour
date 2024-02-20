import React, { ReactNode } from 'react';
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../components";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {children}
      </div>
      <Footer />
    </>
  );
};
