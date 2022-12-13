import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Card>
        <h1>This is my about page</h1>
        <p>v 1.0.0</p>
        <Link to="/">Back Home</Link>
      </Card>
    </div>
  );
}

export default About;
