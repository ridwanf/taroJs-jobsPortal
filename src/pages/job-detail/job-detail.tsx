import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Btn from '../../components/moleculs/btn/btn';
import { Job } from '../../../types/types';

export default function JobDetail() {
  const job: Job = {
    id: 1,
    title: 'Frontend Developer',
    description: 'We are looking for a skilled React developer to build a responsive web application. You will work closely with our design and backend teams to deliver high-quality features.',
    requirements: [
      'Proficiency in React and JavaScript.',
      'Experience with Tailwind CSS or similar frameworks.',
      'Familiarity with RESTful APIs and state management libraries like Redux.',
    ],
    location: 'Remote',
    salary: '$3000 - $5000/month',
    company: 'Tech Solutions Inc.',
  };

  const onClickBack = () => {
    Taro.navigateBack();
  };

  const onClickApply = () => {
    Taro.navigateTo({
      url: '/pages/proposal/proposal',
    });
  };

  return (
    <View className="bg-gray-100 min-h-screen">
      {/* Job Details */}
      <View className="p-4">
        <View className="bg-white shadow-md p-4 rounded-md">
          <View className="flex mb-4 flex-col">
            <Text className="text-xl font-semibold text-gray-800">{job.title}</Text>
            <Text className="text-lg text-blue-50">{job.salary}</Text>
          </View>

          <View className="mb-4 flex flex-col">
            <Text className="text-md font-semibold text-gray-800 mb-2">Company</Text>
            <Text className="text-gray-600">{job.company}</Text>
          </View>

          <View className="mb-4 flex flex-col">
            <Text className="text-md font-semibold text-gray-800 mb-2">Description</Text>
            <Text className="text-gray-600">{job.description}</Text>
          </View>

          <View className="mb-4 flex flex-col">
            <Text className="text-md font-semibold text-gray-800 mb-2">Requirements</Text>
            <View className="space-y-2">
              {job.requirements?.map((requirement, index) => (
                <View key={index} className="flex items-start">
                  <View className="mt-2 mr-2 w-1.5 h-1.5 bg-blue-50 rounded-full" />
                  <Text className="text-gray-600">{requirement}</Text>
                </View>
              ))}
            </View>
          </View>

          <View className="mb-4 flex flex-col">
            <Text className="text-md font-semibold text-gray-800 mb-2">Location</Text>
            <View className="flex items-center">
              <View className="mr-2 w-2 h-2 bg-red-500 rounded-full" />
              <Text className="text-gray-600">{job.location}</Text>
            </View>
          </View>

          <Btn onClick={onClickApply} title="Apply Now" type="primary" />
        </View>
      </View>
    </View>
  );
}