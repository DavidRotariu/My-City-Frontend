'use client'
import React, { useState } from "react";
import { Table } from "@mantine/core";

export default function TablesComponent() {
  const params:any = [
    { date: "01.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
    { date: "02.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
    { date: "03.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
    { date: "04.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
    { date: "05.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
    { date: "06.12.2024", temperature: 12.011, humidity: 'C', noise: 'Carbon', air_qual: '4', rating: "5" },
  ];
  let rows:any = [];

  if (params.length !== 0) {
    rows = params.map((param:any) => (
      <Table.Tr key={param.date}>
        <Table.Td>{param.date}</Table.Td>
        <Table.Td>{param.temperature}</Table.Td>
        <Table.Td>{param.humidity}</Table.Td>
        <Table.Td>{param.noise}</Table.Td>
        <Table.Td>{param.air_qual}</Table.Td>
        <Table.Td>{param.rating}</Table.Td>
      </Table.Tr>
    ));
  }

  return (
    <>
      {params.length === 0 ? (
        <div className="text-center py-4 text-xl">No data available</div>
      ) : (
        <Table striped highlightOnHover withTableBorder withColumnBorders withRowBorders={false}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Temperature</Table.Th>
              <Table.Th>Humidity</Table.Th>
              <Table.Th>Noise</Table.Th>
              <Table.Th>Air quality</Table.Th>
              <Table.Th>Rating</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      )}
    </>
  );
}
