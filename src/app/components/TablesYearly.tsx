'use client'
import React, { useState } from "react";
import { Table } from "@mantine/core";

export default function TablesYearly() {
  
    
  const params = [
    { sensor: 1, temperature: 20, humidity: 50, noise: 34, air_qual: "Good", rating: 8.33 },
    { sensor: 2, temperature: 19, humidity: 65, noise: 22, air_qual: "Good", rating: 9 },
    { sensor: 3, temperature: 21, humidity: 45, noise: 35, air_qual: "Good", rating: 8.7 },
    { sensor: 4, temperature: 17, humidity: 76, noise: 25, air_qual: "Moderate", rating: 7 },
    { sensor: 5, temperature: 22, humidity: 47, noise: 27, air_qual: "Unhealthy", rating: 6.1 },
  ];

  const rows = params.map((param) => (
    <Table.Tr key={param.sensor}>
      <Table.Td>{param.sensor}</Table.Td>
      <Table.Td>{param.temperature}</Table.Td>
      <Table.Td>{param.humidity}</Table.Td>
      <Table.Td>{param.noise}</Table.Td>
      <Table.Td>{param.air_qual}</Table.Td>
      <Table.Td>{param.rating}</Table.Td>
    </Table.Tr>
  ));

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
