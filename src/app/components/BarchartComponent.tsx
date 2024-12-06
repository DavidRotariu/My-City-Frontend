'use client'
import React, { useState } from "react";
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';

interface ChartTooltipProps {
    label: string;
    payload: Record<string, any>[] | undefined;
  }
  
  function ChartTooltip({ label, payload }: ChartTooltipProps) {
    if (!payload) return null;
  
    return (
      <Paper px="md" py="sm" withBorder shadow="md" radius="md">
        <Text fw={500} mb={5}>
          {label}
        </Text>
        {payload.map((item: any) => (
          <Text key={item.name} c={item.color} fz="sm">
            {item.name}: {item.value}
          </Text>
        ))}
      </Paper>
    );
  }
export default function BarChartComponent() {
    const barchart_data= [
        { month: "April", Temperature: 12, Humidity: 705, Noise: 500 },
        { month: "May", Temperature: 15, Humidity: 710, Noise: 480 },
        { month: "June", Temperature: 20, Humidity: 700, Noise: 490 },
        { month: "July", Temperature: 25, Humidity: 690, Noise: 470 },
        { month: "August", Temperature: 30, Humidity: 680, Noise: 460 },
        { month: "September", Temperature: 18, Humidity: 695, Noise: 475 },
        { month: "October", Temperature: 18, Humidity: 695, Noise: 475 },
        { month: "November", Temperature: 18, Humidity: 695, Noise: 475 },
        { month: "December", Temperature: 18, Humidity: 695, Noise: 475 },
        { month: "January", Temperature: 18, Humidity: 695, Noise: 475 },
      ]

  return (
    <div>
      
        <BarChart
            h={400}
            data={barchart_data}
            dataKey="month"
            tooltipProps={{
                content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
              }}
            cursorFill="rgba(217, 217, 217, 0.5)"
            tickLine="y"
            withBarValueLabel            
            series={[
                { name: 'Temperature',color: 'violet.6' },
                { name: 'Humidity', color: 'blue.6' },
                { name: 'Noise', color: 'teal.6' },
            ]}
            />  

    </div>
  );
}
