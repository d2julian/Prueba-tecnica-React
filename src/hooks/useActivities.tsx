import { useQuery } from "react-query";
import { ActivityList } from "../types/types";

const url = "http://www.boredapi.com/api/activity/";

const getActivities = async (numberOfActivities: number) => {
  const activities: ActivityList = [];
  let response;
  let data: any;
  while (activities.length < numberOfActivities) {
    response = await fetch(url);
    data = await response.json();
    // Evitar añadir activades duplicadas
    if (!activities.some(({ activity }) => activity === data.activity)) {
      activities.push(data);
    }
  }

  return activities;
};

export default function useActivities(numberOfActivities: number) {
  return useQuery<ActivityList, Error>(["activities", numberOfActivities], () => getActivities(numberOfActivities));
}
