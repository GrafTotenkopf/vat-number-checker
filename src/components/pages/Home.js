import React, { useState } from "react";
import { Divider } from "semantic-ui-react";

import Layout from "../Layout";
import Form from "../Form/Form";
import Datagrid from "../Datagrid/Datagrid";

import { contentContainer } from "./Home.css";

const Home = () => {
  const [data, insertData] = useState([]);

  const onDataInsert = (newData) => {
    insertData((data) => data.concat(newData));
  };

  return (
    <Layout>
      <div className={contentContainer}>
        <Form onDataInsert={onDataInsert} />
        <Divider />
        <Datagrid gridData={data} />
      </div>
    </Layout>
  );
};

export default Home;
