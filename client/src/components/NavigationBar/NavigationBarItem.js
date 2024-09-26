import {
    HISTORY_ROUTE,
    NEWS_ROUTE,
    NUTRITION_ROUTE, PROGRAM_ROUTE,
    RECORD_ROUTE,
    SETTING_ROUTE,
    TRAINING_ROUTE,
    WEIGHT_ROUTE
} from "../../utils/consts";

export const NavigationBarItem = [
    {
        href:NEWS_ROUTE,
        cName:"newspaper-o",
        title:"News"
    },
    {
        href:PROGRAM_ROUTE,
        cName:"leanpub",
        title:"My program"
    },
    {
        href:NUTRITION_ROUTE,
        cName:"cutlery",
        title:"My nutrition"
    },
    {
        href:WEIGHT_ROUTE,
        cName:"male",
        title:"Weight"
    },
    {
        href:RECORD_ROUTE,
        cName:"trophy",
        title:"Record"
    },
    {
        href:HISTORY_ROUTE,
        cName:"history",
        title:"History"
    },
    {
        href:SETTING_ROUTE,
        cName:"cog",
        title:"Settings"
    },
]
