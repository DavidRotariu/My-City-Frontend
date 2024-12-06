'use client'
import React, { useState } from "react";
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { Accordion } from '@mantine/core';
import TablesComponent from "./TablesComponent";


export default function AccordionComponent({data}:any) {
    
      const items = data.map((item:any) => (
        <Accordion.Item key={item.day_of_year} value={item.day_of_year}>
          <Accordion.Control >{item.day_of_year}</Accordion.Control>
          <Accordion.Panel>
            <TablesComponent params={item.sensors}/>
          </Accordion.Panel>
        </Accordion.Item>
      ));
    

  return (
    <div>
       <Accordion radius="lg" defaultValue="Apples" variant="separated" className="mx-5">
            {items}
        </Accordion>
    </div>
  );
}
