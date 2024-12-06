'use client'
import React, { useState, useEffect } from "react";
import { Accordion, Tabs } from '@mantine/core';
import TablesComponent from "./TablesComponent";
import BarChartComponent from "./BarchartComponent";
import LineChartComponent from "./LineChartComponent";
import AccordionComponent from "./AccordionComponent";
import AccordionMonthly from "./AccordionMonthly";
import AccordionYearly from "./AccordionYearly";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("");
  const [daily, setDaily] = useState([])
  const [monthly, setMonthly] = useState([])

  useEffect(() => {
    const fetchSensors = async () => {
        try {
            const response = await fetch(`${baseURL}/reports/daily`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDaily(data);
        } catch (error) {
            console.error('There was a problem with fetching daily reports:', error);
        }
    };
    fetchSensors();
}, []);
    useEffect(() => {
        const fetchSensors = async () => {
            try {
                const response = await fetch(`${baseURL}/reports/monthly`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMonthly(data);
            } catch (error) {
                console.error('There was a problem with fetching daily reports:', error);
            }
        };
        fetchSensors();
    }, []);
  
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
                </Tabs.List>

                <Tabs.Panel value="daily">
                    <AccordionComponent data={daily}/>
                </Tabs.Panel>

                <Tabs.Panel value="monthly">
                    <AccordionMonthly data={monthly}/>
                </Tabs.Panel>

                <Tabs.Panel value="yearly">
                    <AccordionYearly />
                </Tabs.Panel>

                <Tabs.Panel value="ratingsM">
                    <LineChartComponent params={monthly}/>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
  );
}
