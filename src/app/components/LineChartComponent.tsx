'use client'
import React, { useState } from "react";
import { BarChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { LineChart } from '@mantine/charts';

export default function LineChartComponent({params}:any) {

  function calculateRating(humidity:any, temperature:any, noiseLevel:any, airQualityIndex:any) {
    let rating:any = 10;
  
    
    if (humidity > 70) rating -= (humidity - 70) * 0.05;
    else if (humidity < 30) rating -= (30 - humidity) * 0.03; 
  
    
    if (temperature > 35) rating -= (temperature - 35) * 0.1;
    else if (temperature < 0) rating -= (0 - temperature) * 0.08; 
  
    
    if (noiseLevel > 70) rating -= (noiseLevel - 70) * 0.1; 
    else if (noiseLevel < 30) rating += (30 - noiseLevel) * 0.02;
  

    if (airQualityIndex <= 50) rating += 1;
    else if (airQualityIndex <= 100) rating -= (airQualityIndex - 50) * 0.02;
    else if (airQualityIndex <= 200) rating -= (airQualityIndex - 100) * 0.05; 
    else rating -= (airQualityIndex - 200) * 0.1; 
  
    rating = Math.max(1, Math.min(10, rating.toFixed(1)));
  
    return rating;
  }


    let linechart_data=  [
        { date: 'Jan', rating: 0 },
        { date: 'Feb', rating: 0 },
        { date: 'Mar', rating: 0 },
        { date: 'Apr', rating: 0 },
        { date: 'May', rating: 0 },
        { date: 'Jun', rating: 0 },
        { date: 'Jul', rating: 0 },
        { date: 'Aug', rating: 0 },
        { date: 'Sep', rating: 0 },
        { date: 'Oct', rating: 0 },
        { date: 'Nov', rating: 0 },
        { date: 'Dec', rating: 0 },
      ];

    const min = 0;
    const max = 7;
    for(let i = 0; i < 12; i++)
    {
      let randNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
      linechart_data[i].rating = 9 - randNumber;
    }
    
      

  return (
    <div>
        <LineChart
            h={400}
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
            withPointLabels
            />
    </div>
  );
}
