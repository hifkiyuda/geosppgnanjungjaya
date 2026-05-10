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
    geocode: [-7.060043, 108.01321],
    name: "POSYANDU TUNASJAYA",
    alamat: "Kp. Sangkali RT 003 RW 001",
    balita: 44,
    bumil: 6,
    busui: 10,
    rute: "1",
  },
  {
    geocode: [-7.05362, 108.015031],
    name: "POSYANDU DAHLIA",
    alamat: "Kp. Cipatik RT 001 RW 002",
    balita: 58,
    bumil: 7,
    busui: 9,
    rute: "1",
  },
  {
    geocode: [-7.053635, 108.015769],
    name: "POSYANDU MAWAR",
    alamat: "Kp. Cipatik RT 001 RW 003",
    balita: 43,
    bumil: 5,
    busui: 10,
    rute: "1",
  },
  {
    geocode: [-7.052582, 108.020663],
    name: "POSYANDU MELATI",
    alamat: "Kp. Kubang RT 003 RW 004",
    balita: 109,
    bumil: 15,
    busui: 16,
    rute: "2",
  },
  {
    geocode: [-7.053834, 108.022219],
    name: "POSYANDU SEROJA",
    alamat: "Kp. Ibnusina RT002 RW 005",
    balita: 70,
    bumil: 4,
    busui: 18,
    rute: "1",
  },
  {
    geocode: [-7.057697, 108.022517],
    name: "POSYANDU KENANGA",
    alamat: "Kp. Palalangon RT 002 RW 006",
    balita: 39,
    bumil: 8,
    busui: 12,
    rute: "1",
  },
  {
    geocode: [-7.058082, 108.022978],
    name: "POSYANDU MANDIRI",
    alamat: "Kp. Cikambangan RT 001 RW 006",
    balita: 12,
    bumil: 0,
    busui: 2,
    rute: "1",
  },
  {
    geocode: [-7.055381, 108.027222],
    name: "POSYANDU SEJAHTERA",
    alamat: "Kp. Cioray Warung RT 001 RW 007",
    balita: 51,
    bumil: 2,
    busui: 19,
    rute: "2",
  },
  {
    geocode: [-7.052944, 108.026672],
    name: "POSYANDU BINANGKIT",
    alamat: "Kp. Cioray Tengah RT 002 RW 008",
    balita: 37,
    bumil: 4,
    busui: 4,
    rute: "2",
  },
  {
    geocode: [-7.052935, 108.02804],
    name: "POSYANDU ASTER",
    alamat: "Kp. Cioray Tengah RT 002 RW 009",
    balita: 47,
    bumil: 7,
    busui: 8,
    rute: "2",
  },
  {
    geocode: [-7.048151, 108.023886],
    name: "POSYANDU ANGGREK",
    alamat: "Kp. Cipoos RT 002 RW 010",
    balita: 62,
    bumil: 5,
    busui: 13,
    rute: "2",
  },
  {
    geocode: [-7.0466, 108.026541],
    name: "POSYANDU PLAMBOYAN",
    alamat: "Kp. Cioray Hilir RT 002 RW 011",
    balita: 38,
    bumil: 3,
    busui: 14,
    rute: "2",
  },
];
