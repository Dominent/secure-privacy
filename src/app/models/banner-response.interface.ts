import { IAccordian } from "./accordian.interface";

export interface IBannerResponse {
    BannerId: number;
    accordian: IAccordian[];
    Created: Date;
    LastUpdated: Date;
}