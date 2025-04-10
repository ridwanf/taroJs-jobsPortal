import { View, Text, Input } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';
import { JobItem } from '/src/components/organisms/job-item/job-item';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJob } from '/src/actions/job';
import { Job } from '/types/types';

export default function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.job.jobs);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter jobs based on title
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    Taro.getOpenUserInfo({
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.error(err);
      }
    });
  }, []);

  const onClickBtns = (job: Job) => {
    dispatch(setJob(job));
    Taro.navigateTo({
      url: '/pages/job-detail/job-detail',
    });
  };

  return (
    <View className="bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <View className="bg-white p-4 sticky top-0 z-10 shadow-md">
        <Input
          className="bg-gray-100 p-2 rounded-lg w-[80%] mx-auto"
          placeholder="Search job titles..."
          value={searchTerm}
          onInput={e => setSearchTerm(e.detail.value)}
        />
      </View>

      {/* Results Count */}
      <View className="px-4 py-2 border-b border-gray-200">
        <Text className="text-gray-600">
          {filteredJobs.length} jobs found
        </Text>
      </View>

      {/* Job List */}
      <View className="p-4 space-y-4">
        {filteredJobs.map((job) => (
          <JobItem key={job.id} job={job} onClickBtns={() => onClickBtns(job)} />
        ))}
      </View>
    </View>
  );
}