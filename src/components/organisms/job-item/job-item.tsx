import { Text, View } from "@tarojs/components";
import Btn from "../../moleculs/btn/btn";
import { Job } from "/types/types";

export interface JobItemProps {
  job: Job;
  onClickBtns: () => void;
}

export const JobItem: React.FC<JobItemProps> = ({ job, onClickBtns }) => {
  return (
    <View key={job.id} className="bg-white shadow-md p-4 rounded-md">
      <View className="flex justify-between items-center mb-2">
        <Text className="text-md font-semibold text-gray-800">{job.title}</Text>
      </View>
      <View className="flex justify-between items-center mb-2">
        <Text className="text-sm text-gray-500">{job.salary}</Text>
      </View>
      <View className="mt-2 flex items-center mb-2">
        <View className="mr-2 w-2 h-2 bg-blue-500 rounded-full" />
        <Text className="text-gray-600 text-xs">{job.description}</Text>
      </View>
      <View className="mt-2 flex items-center mb-2">
        <View className="mr-2 w-2 h-2 bg-red-500 rounded-full" />
        <Text className="text-gray-600 text-xs">{job.location}</Text>
      </View>
      <Btn onClick={onClickBtns} title="Apply" />
    </View>
  );
};
