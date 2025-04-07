import { View, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';
import { JobItem } from '/src/components/organisms/job-item/job-item';

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
      url: '/pages/job-detail/job-detail',
    });
  };

  return (
    <View className="bg-gray-100 min-h-screen">
      {/* Job List */}
      <View className="p-4 space-y-4">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} onClickBtns={onClickBtns} />
        ))}
      </View>

      {/* Footer */}
      <View className="mt-12 bg-blue-50 text-white p-4 text-center">
        <Text>© 2025 Upwork Clone. All rights reserved.</Text>
      </View>
    </View>
  );
}