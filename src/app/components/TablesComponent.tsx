'use client'
import React, { useState } from "react";
import { Table } from "@mantine/core";

export default function TablesComponent({params}:any) {
  // console.log("params", params);

  function estimateAirQuality(humidity:any, temperature:any, noiseLevel:any) {
    let airQualityScore = 100; 
  
    
    if (humidity > 70) airQualityScore -= (humidity - 70) * 0.5; 
    else if (humidity < 30) airQualityScore -= (30 - humidity) * 0.3;
    
    if (temperature > 20) airQualityScore -= (temperature - 20) * 1.5; 
    else if (temperature < 0) airQualityScore -= (0 - temperature) * 1.2; 
  
    
    if (noiseLevel > 70) airQualityScore -= (noiseLevel - 70) * 2; 
    else if (noiseLevel < 30) airQualityScore += (30 - noiseLevel) * 0.5;
  
    
    airQualityScore = Math.max(0, Math.min(100, airQualityScore));
  
    
    if (airQualityScore >= 80) return { airQuality: "Good", score: airQualityScore };
    if (airQualityScore >= 60) return { airQuality: "Moderate", score: airQualityScore };
    if (airQualityScore >= 40) return { airQuality: "Unhealthy", score: airQualityScore };
    if (airQualityScore >= 20) return { airQuality: "Very Unhealthy", score: airQualityScore };
    return { airQuality: "Hazardous", score: airQualityScore };
  }

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


  let rows:any = [];

  if (params.length !== 0) {
    rows = params.map((param:any, index: number) => {

      const air_qual = estimateAirQuality(param[1], param[0], param[2]); 
      const rating = calculateRating(param[1], param[0], param[2], air_qual.score); 
  
      return (
        <Table.Tr key={index}>
          <Table.Td>{index + 1}</Table.Td>
          <Table.Td>{param[0].toFixed(1)}</Table.Td>
          <Table.Td>{param[1].toFixed(1)}</Table.Td>
          <Table.Td>{param[2].toFixed(1)}</Table.Td>
          <Table.Td>{air_qual.airQuality}</Table.Td>
          <Table.Td>{rating}</Table.Td>
        </Table.Tr>
      )
    });
  }
  

  return (
    <>
      {params.length === 0 ? (
        <div className="text-center py-4 text-xl">No data available</div>
      ) : (
        <div className="overflow-hidden rounded-xl">
          <Table striped highlightOnHover withTableBorder withColumnBorders withRowBorders={false} >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Sensor</Table.Th>
                <Table.Th>Temperature</Table.Th>
                <Table.Th>Humidity</Table.Th>
                <Table.Th>Noise</Table.Th>
                <Table.Th>Air quality</Table.Th>
                <Table.Th>Rating</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      )}
    </>
  );
}
