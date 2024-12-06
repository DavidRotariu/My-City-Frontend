'use client'
import React, { useState } from "react";
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';
import { Accordion } from '@mantine/core';
import TablesComponent from "./TablesComponent";
import TablesYearly from "./TablesYearly";


export default function AccordionYearly() {

        
    

  return (
    <div>
       <Accordion radius="lg" defaultValue="Apples" variant="separated" className="mx-5">
       <Accordion.Item key={2024} value={"2024"}>
          <Accordion.Control >{2024}</Accordion.Control>
          <Accordion.Panel>
            <TablesYearly />
          </Accordion.Panel>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}
