'use client'
import React, { useState } from "react";
import { Tabs } from '@mantine/core';
import TablesComponent from "./TablesComponent";
import BarChartComponent from "./BarchartComponent";
import LineChartComponent from "./LineChartComponent";

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
                defaultValue="daily"
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
                    <Tabs.Tab
                        onClick={()=>setActiveTab("ratingsM")}
                        value="ratingsM"
                        className={`text-xl py-4 px-8 font-bold bg-red-100 hover:bg-gray-200 rounded-lg `}
                        style={{ fontSize: "1rem", padding: "16px 25px", fontWeight: "bold", backgroundColor: activeTab === "ratingsM" ? "#14b8a6" : ""}}
                    >
                        {"Ratings(M)"}
                    </Tabs.Tab>
                    <Tabs.Tab
                        onClick={()=>setActiveTab("ratingsY")}
                        value="ratingsY"
                        className={`text-xl py-4 px-8 font-bold bg-red-100 hover:bg-gray-200 rounded-lg `}
                        style={{ fontSize: "1rem", padding: "16px 25px", fontWeight: "bold", backgroundColor: activeTab === "ratingsY" ? "#14b8a6" : ""}}
                    >
                        {"Ratings(Y)"}
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

                <Tabs.Panel value="ratingsM">
                    <LineChartComponent/>
                </Tabs.Panel>

                <Tabs.Panel value="ratingsY">
                    <LineChartComponent/>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
  );
}
