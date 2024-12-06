'use client'
import React, { useState } from "react";
import { Table } from "@mantine/core";

export default function TablesYearly() {
  
    
  const params = [
    { sensor: 1, temperature: 0, humidity: 0, noise: 54, air_qual: "Good", rating: 8.33 },
    { sensor: 2, temperature: 0, humidity: 0, noise: 54, air_qual: "Good", rating: 8.33 },
    { sensor: 3, temperature: 0, humidity: 0, noise: 54, air_qual: "Good", rating: 8.33 },
    { sensor: 4, temperature: 0, humidity: 0, noise: 54, air_qual: "Good", rating: 8.33 },
    { sensor: 5, temperature: 0, humidity: 0, noise: 54, air_qual: "Good", rating: 8.33 },
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
