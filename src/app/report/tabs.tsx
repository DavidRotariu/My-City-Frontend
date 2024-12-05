'use client'
import { useEffect } from 'react';
import React, { useState } from "react";
import { Tabs } from '@mantine/core';

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("daily");
  useEffect(() => {
    console.log(`Active tab changed to: ${activeTab}`);
    // You can add more logic here based on the activeTab change
  }, [activeTab]);

  return (
    <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Reports</h1>
        <Tabs
            variant="default"
            radius="md"
            orientation="vertical"
              // Use onChange to manage active tab
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
                <div className="p-6">Daily Report Content</div>
            </Tabs.Panel>

            <Tabs.Panel value="monthly">
                <div className="p-6">Monthly Report Content</div>
            </Tabs.Panel>

            <Tabs.Panel value="yearly">
                <div className="p-6">Yearly Report Content</div>
            </Tabs.Panel>
        </Tabs>
    </div>
  );
}
