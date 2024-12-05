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
export default function LineChartComponent() {

    const linechart_data=  [
        { date: 'Jan', rating: 0 },
        { date: 'Feb', rating: 2 },
        { date: 'Mar', rating: 5 },
        { date: 'Apr', rating: 7 },
        { date: 'May', rating: 8 },
        { date: 'Jun', rating: 4 },
        { date: 'Jul', rating: 8 },
        { date: 'Aug', rating: 9.5 },
        { date: 'Sep', rating: 5 },
        { date: 'Oct', rating: 6 },
        { date: 'Nov', rating: 2 },
        { date: 'Dec', rating: 0 },
      ];
      

  return (
    <div>
        <LineChart
            h={300}
            data={linechart_data}
            series={[{ name: 'rating', label: 'Avg. Rating' }]}
            dataKey="date"
            type="gradient"
            gradientStops={[
                { offset: 0, color: 'green.7' },
                { offset: 20, color: 'teal.5' },
                { offset: 40, color: 'lime.5' },
                { offset: 70, color: 'yellow.5' },
                { offset: 80, color: 'orange.6' },
                { offset: 100, color: 'red.6' },
            ]}
            strokeWidth={5}
            curveType="natural"
            yAxisProps={{ domain: [0, 10] }}
            valueFormatter={(value) => `${value}`}
            />
    </div>
  );
}
