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
    balita: 101,
    bumil: 9,
    busui: 16,
    rute: "1",
  },
  {
    geocode: [-7.055381, 108.027222],
    name: "POSYANDU SEJAHTERA",
    alamat: "Kp. Cioray Warung RT 001 RW 007",
    balita: 41,
    bumil: 3,
    busui: 17,
    rute: "2",
  },
  {
    geocode: [-7.052944, 108.026672],
    name: "POSYANDU BINANGKIT",
    alamat: "Kp. Cioray Tengah RT 002 RW 008",
    balita: 33,
    bumil: 3,
    busui: 6,
    rute: "2",
  },
  {
    geocode: [-7.052935, 108.02804],
    name: "POSYANDU ASTER",
    alamat: "Kp. Cioray Tengah RT 002 RW 009",
    balita: 47,
    bumil: 10,
    busui: 9,
    rute: "2",
  },
  {
    geocode: [-7.048151, 108.023886],
    name: "POSYANDU ANGGREK",
    alamat: "Kp. Cipoos RT 002 RW 010",
    balita: 60,
    bumil: 5,
    busui: 11,
    rute: "1",
  },
  {
    geocode: [-7.0466, 108.026541],
    name: "POSYANDU PLAMBOYAN",
    alamat: "Kp. Cioray Hilir RT 002 RW 011",
    balita: 39,
    bumil: 2,
    busui: 14,
    rute: "1",
  },
];
