import { View, Text, Lottie } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';
import { JobItem } from '/src/components/organisms/job-item/job-item';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJob, setLoading } from '/src/actions/job';
import { Job } from '/types/types';

export default function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.job.jobs);
  const isLoading = useSelector((state: any) => state.job.isLoading);
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
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
    <>
      {isLoading && (
        <View className="flex items-center justify-center h-screen">
          <Lottie
            path="/assets/loading.json"
            autoplay
          />
        </View>
      )}

      <View className="bg-gray-100 min-h-screen">
        {/* Job List */}
        <View className="p-4 space-y-4">
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} onClickBtns={() => onClickBtns(job)} />
          ))}
        </View>
      </View>
    </>

  );
}