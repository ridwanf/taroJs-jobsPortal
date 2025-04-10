import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Btn from '../../components/moleculs/btn/btn';
import { Job } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '/src/reducers';

export default function JobDetail() {
  const { credit } = useSelector((state: RootState) => state.user);
  const job: Job = useSelector((state: RootState) => state.job.job!);

  const onClickBack = () => {
    Taro.navigateBack();
  };

  const onClickApply = () => {
    Taro.navigateTo({
      url: '/pages/proposal/proposal',
    });
  };

  const onClickTopUp = () => {
    Taro.tradePay({
      success: (res) => {
        // Show success message
        Taro.showToast({
          title: JSON.stringify(res),
          icon: 'success',
        });
        console.error(res);

      },
      fail: (err) => {
        // Show error message
        Taro.showToast({
          title: JSON.stringify(err),
          icon: 'none',
        });
        console.error(err);
      }
    })
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

          <View className="mb-4 flex flex-col">
            <Text className="text-md font-semibold text-gray-800 mb-2">Credits</Text>
            <Text className="text-gray-600">{credit} credits remaining</Text>

          </View>

          {credit <= 0 ? (
            <Btn onClick={onClickTopUp} title="Top Up Credits" type="primary" />
          ) : (
            <Btn onClick={onClickApply} title="Apply Now" type="primary" block />
          )}
        </View>
      </View>
    </View>
  );
}