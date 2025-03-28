import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';

export default function JobDetail() {
  const job = {
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
  const onClikBtn = () => {
    Taro.navigateTo({
      url: '/pages/proposal/index',
    });
  }

  return (
    <View className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <View className="bg-white shadow-md p-4 flex justify-between items-center">
        <Text className="text-xl font-bold text-gray-800">{job.title}</Text>
        <Button className="bg-green-500 text-white px-4 py-2 rounded-md">Back to Jobs</Button>
      </View>

      {/* Job Details */}
      <View className="mt-6 bg-white shadow-md p-6 rounded-md">
        <Text className="text-lg font-semibold text-gray-800">Company: {job.company}</Text>
        <Text className="text-gray-600 mt-2">{job.description}</Text>
        <Text className="text-sm text-gray-500 mt-4">Location: {job.location}</Text>
        <Text className="text-sm text-gray-500">Salary: {job.salary}</Text>

        {/* Requirements */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-gray-800">Requirements:</Text>
          <View className="mt-2 space-y-2">
            {job.requirements.map((requirement, index) => (
              <Text key={index} className="text-gray-600">
                - {requirement}
              </Text>
            ))}
          </View>
        </View>

        {/* Apply Button */}
        <Button onClick={onClikBtn} className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg">
          Apply Now
        </Button>
      </View>
    </View>
  );
}