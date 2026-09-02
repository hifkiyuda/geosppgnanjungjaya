import { LatLngTuple } from "leaflet";

export type PosyanduType = {
  geocode: LatLngTuple;
  name: string;
  alamat: string;
  balita: number;
  bumil: number;
  busui: number;
  rute: string;
};

export const posyandu: PosyanduType[] = [
  {
    geocode: [-7.052582, 108.020663],
    name: "POSYANDU MELATI",
    alamat: "Kp. Kubang RT 003 RW 004",
    balita: 92,
    bumil: 8,
    busui: 18,
    rute: "1",
  },
  {
    geocode: [-7.055381, 108.027222],
    name: "POSYANDU SEJAHTERA",
    alamat: "Kp. Cioray Warung RT 001 RW 007",
    balita: 42,
    bumil: 3,
    busui: 16,
    rute: "2",
  },
  {
    geocode: [-7.052944, 108.026672],
    name: "POSYANDU BINANGKIT",
    alamat: "Kp. Cioray Tengah RT 002 RW 008",
    balita: 32,
    bumil: 4,
    busui: 4,
    rute: "2",
  },
  {
    geocode: [-7.052935, 108.02804],
    name: "POSYANDU ASTER",
    alamat: "Kp. Cioray Tengah RT 002 RW 009",
    balita: 45,
    bumil: 9,
    busui: 10,
    rute: "2",
  },
  {
    geocode: [-7.048151, 108.023886],
    name: "POSYANDU ANGGREK",
    alamat: "Kp. Cipoos RT 002 RW 010",
    balita: 61,
    bumil: 3,
    busui: 13,
    rute: "1",
  },
  {
    geocode: [-7.0466, 108.026541],
    name: "POSYANDU PLAMBOYAN",
    alamat: "Kp. Cioray Hilir RT 002 RW 011",
    balita: 38,
    bumil: 4,
    busui: 15,
    rute: "1",
  },
];
