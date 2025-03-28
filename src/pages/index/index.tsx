import { View, Text, Button } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';

export default function JobList() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Looking for a skilled React developer to build a responsive web application.',
      location: 'Remote',
      salary: '$3000 - $5000/month',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      description: 'Need a creative designer to create branding materials for our startup.',
      location: 'New York, USA',
      salary: '$2000 - $4000/month',
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Seeking a writer to create engaging blog posts and articles.',
      location: 'Remote',
      salary: '$1500 - $2500/month',
    },
  ];

  const onClickBtns = () => {
    Taro.navigateTo({
      url: '/pages/job-detail/index',
    });
  };

  return (
    <View className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <View className="bg-white shadow-md p-4 flex justify-between items-center">
        <Text className="text-xl font-bold text-gray-800">Job Listings</Text>
        <Button className="bg-green-500 text-white px-4 py-2 rounded-md">Post a Job</Button>
      </View>

      {/* Job List */}
      <View className="mt-6 space-y-4">
        {jobs.map((job) => (
          <View key={job.id} className="bg-white shadow-md p-4 rounded-md">
            <Text className="text-lg font-semibold text-gray-800">{job.title}</Text>
            <Text className="text-gray-600 mt-2">{job.description}</Text>
            <Text className="text-sm text-gray-500 mt-2">Location: {job.location}</Text>
            <Text className="text-sm text-gray-500">Salary: {job.salary}</Text>
            <Button onClick={onClickBtns} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
              Apply Now
            </Button>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View className="mt-12 bg-gray-800 text-white p-4 text-center">
        <Text>© 2025 Upwork Clone. All rights reserved.</Text>
      </View>
    </View>
  );
}