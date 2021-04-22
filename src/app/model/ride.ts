import { Driver } from "./driver";

export interface Ride {
    id?:number;
    driver: Driver;
    date: string;
    km: number;
    description: string;
}