import { IPluginList } from "./plugin-list.interface";

export interface IAccordian {
    Localization: string;
    CategoyId: number;
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText: string;
    PluginList: IPluginList[];
    ExtraSettings: string;
}