import { useQuery } from "react-query";
import { ActivityList } from "../types/types";

const url = "http://www.boredapi.com/api/activity/";

const getActivities = async (numberOfActivities: number) => {
  const activities: ActivityList = [];
  let response;
  let data: any;
  const saveActivities: ActivityList = JSON.parse(localStorage.getItem("Activities") as string);
  if (!saveActivities) {
    while (activities.length < numberOfActivities) {
      response = await fetch(url);
      data = await response.json();
      // Evitar añadir actividades duplicadas
      if (!activities.some(({ key }) => key === data.key)) {
        activities.push(data);
      }
    }
    localStorage.setItem("Activities", JSON.stringify(activities));
    return activities;
  } else {
    return saveActivities;
  }
};

export default function useActivities(numberOfActivities: number) {
  return useQuery<ActivityList, Error>(["activities", numberOfActivities], () => getActivities(numberOfActivities));
}
