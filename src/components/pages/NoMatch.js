import React from "react";
import { Icon } from "semantic-ui-react";

import Layout from "../Layout";

import { contentContainer } from "./NoMatch.css";

const NoMatch = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <Icon name="minus circle" size="big" />
        <strong>Page not found!</strong>
      </div>
    </Layout>
  );
};

export default NoMatch;
