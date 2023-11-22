import React from "react";
import Card from '../components/procurement-admin/menu/request/card/card'
import Rfq from '../components/procurement-admin/menu/request/RFQ-card/rfq'
import RenderBarChart from "@/charts.jsx/charts";
// import Buttons from "@/components/procurement-admin/menu/request/buttons/buttons";

export default function Home() {
  // <Card />
  // <Buttons />
  return (
    <>
       <Card />
       <RenderBarChart/>
      <Rfq/>
      
    </>
  );
}
