/** @format */
"use client"

import styles from './charts.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jan",
    yName: "L",
    waterGases: 4000,
    plastics: 2400,
    aquaticLife: 3000,
    chemicalWastes: 2000,
  },
  {
    name: "Feb",
    yName: "L",
    waterGases: 3000,
    plastics: 1398,
    aquaticLife: 2000,
    chemicalWastes: 2780,
  },
  {
    name: "Mar",
    yName: "L",
    waterGases: 2000,
    plastics: 3800,
    aquaticLife: 2780,
    chemicalWastes: 1890,
  },
  {
    name: "Apr",
    yName: "L",
    waterGases: 2780,
    plastics: 3908,
    aquaticLife: 1890,
    chemicalWastes: 2390,
  },
  {
    name: "May",
    yName: "L",
    waterGases: 1890,
    plastics: 4800,
    aquaticLife: 2390,
    chemicalWastes: 3490,
  },
  {
    name: "Jun",
    yName: "L",
    waterGases: 2390,
    plastics: 3800,
    aquaticLife: 3490,
    chemicalWastes: 4300,
  },
  {
    name: "Jul",
    yName: "L",
    waterGases: 3490,
    plastics: 4300,
    aquaticLife: 4800,
    chemicalWastes: 3900,
  },
  {
    name: "Aug",
    yName: "L",
    waterGases: 2780,
    plastics: 3908,
    aquaticLife: 6890,
    chemicalWastes: 2390,
  },
  {
    name: "Sep",
    yName: "L",
    waterGases: 1890,
    plastics: 4400,
    aquaticLife: 2790,
    chemicalWastes: 3490,
  },
  {
    name: "Oct",
    yName: "L",
    waterGases: 3000,
    plastics: 3800,
    aquaticLife: 2780,
    chemicalWastes: 1890,
  },
  {
    name: "Nov",
    yName: "L",
    waterGases: 2480,
    plastics: 3308,
    aquaticLife: 1290,
    chemicalWastes: 2390,
  },
  {
    name: "Dec",
    yName: "L",
    waterGases: 1480,
    plastics: 4308,
    aquaticLife: 1690,
    chemicalWastes: 2390,
  }
];



export default function BarChart() {
  return (
<div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <p className={styles.title}> view the anual report of tests made in different waters.</p>
       <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip contentStyle={{ background:"dark:#151c2c #fff", border:"none" }} />
          <Legend />
          <Line type="monotone" dataKey="waterGases" stroke="#FFA500" name="Water Gases" />
          <Line type="monotone" dataKey="plastics" stroke="#008000" name="Plastics" />
          <Line type="monotone" dataKey="aquaticLife" stroke="#808080" name="Aquatic Life" />
          <Line type="monotone" dataKey="chemicalWastes" stroke="#964B00" name="Chemical Wastes" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
