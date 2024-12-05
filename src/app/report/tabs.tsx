'use client'
import React, { useState } from "react";
import { Tabs } from '@mantine/core';
import TablesComponent from "./tables";
import BarChartComponent from "./Barchart";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("");
  

  return (
    <div className="p-6">
        <h1 className="text-4xl font-bold mb-7">Reports</h1>
        <div>
            <Tabs
                variant="default"
                radius="md"
                orientation="vertical"
                color="teal"
            >
                <Tabs.List className="flex flex-col gap-4">
                    <Tabs.Tab
                        onClick={()=>setActiveTab("daily")}
                        value="daily"
                        className={`text-xl py-4 px-8 font-bold bg-red-100 hover:bg-gray-200 rounded-lg `}
                        style={{ fontSize: "1rem", padding: "16px 25px", fontWeight: "bold", backgroundColor: activeTab === "daily" ? "#14b8a6" : ""}}
                    >
                        Daily
                    </Tabs.Tab>
                    <Tabs.Tab
                        onClick={()=>setActiveTab("monthly")}
                        value="monthly"
                        className={`text-xl py-4 px-8 font-bold bg-gray-100 hover:bg-gray-200 rounded-lg`}
                        style={{ fontSize: "1rem", padding: "16px 25px", fontWeight: "bold", backgroundColor: activeTab === "monthly" ? "#14b8a6" : ""  }}
                    >
                        Monthly
                    </Tabs.Tab>
                    <Tabs.Tab
                        onClick={()=>setActiveTab("yearly")}
                        value="yearly"
                        className={`text-xl py-4 px-8 font-bold bg-gray-100 hover:bg-gray-200 rounded-lg `}
                        style={{ fontSize: "1rem", padding: "16px 25px", fontWeight: "bold", backgroundColor: activeTab === "yearly" ? "#14b8a6" : ""}}
                    >
                        Yearly
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="daily">
                    <TablesComponent/>
                </Tabs.Panel>

                <Tabs.Panel value="monthly">
                    <BarChartComponent/>
                </Tabs.Panel>

                <Tabs.Panel value="yearly">
                    <BarChartComponent/>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
  );
}
