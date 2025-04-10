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
        <Text className="font-semibold f-title">{job.title}</Text>
        <Text className="text-blue-50 f-title">{job.salary}</Text>
      </View>
      <View className="mt-2 flex items-center mb-2">
        <View className="mr-2 w-2 h-2 bg-blue-500 rounded-full" />
        <Text className="text-gray-600 title-30">{job.description}</Text>
      </View>
      <View className="mt-2 flex items-center mb-2">
        <View className="mr-2 w-2 h-2 bg-red-500 rounded-full" />
        <Text className="text-gray-600 title-30">{job.location}</Text>
      </View>
      <Btn onClick={onClickBtns} title={job.isApplied ? 'Applied' : 'Apply'} disabled={job.isApplied} />
    </View>
  );
};
