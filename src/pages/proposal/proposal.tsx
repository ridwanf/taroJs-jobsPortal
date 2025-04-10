import { View, Text, Textarea } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Job, Proposal } from '../../../types/types';
import Btn from '../../components/moleculs/btn/btn';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyJob } from '/src/actions/user';
import { updateJobStatus } from '/src/actions/job';
import { RootState } from '/src/reducers';

export default function ProposalPage() {
  const dispatch = useDispatch();
  const job: Job = useSelector((state: RootState) => state.job.job!);
  const [proposal, setProposal] = useState<Proposal>({
    jobId: job?.id || 0,
    content: '',
    status: 'draft'
  });

  const onClickBack = () => {
    Taro.navigateBack();
  };

  const handleSubmit = () => {
    if (!proposal.content.trim()) {
      Taro.showToast({
        title: 'Please write your proposal',
        icon: 'none',
      });
      return;
    }

    // Dispatch both actions: reduce credit and update job status
    dispatch(applyJob());
    dispatch(updateJobStatus(proposal.jobId));

    // Show success message
    Taro.showToast({
      title: 'Proposal submitted successfully!',
      icon: 'success',
    });

    // Navigate back to job list
    setTimeout(() => {
      Taro.reLaunch({
        url: '/pages/index/index',
      });
    }, 1500);
  };

  return (
    <View className="bg-gray-100 min-h-screen">
      {/* Content */}
      <View className="space-y-4 p-4">
        {/* Job Info Card */}
        <View className="bg-white shadow-md p-4 rounded-md flex flex-col">
          <Text className="text-lg font-semibold text-gray-800">{job.title}</Text>
          <Text className="text-sm text-gray-500 mt-2">{job.company}</Text>
        </View>

        {/* Proposal Form Card */}
        <View className="bg-white shadow-md p-4 rounded-md">
          <Text className="text-md font-semibold text-gray-800 mb-2">Your Proposal</Text>
          <Textarea
            className="w-full text-md min-h-[200px] border border-gray-200 rounded-md p-2 mb-4"
            placeholder="Write your proposal here..."
            value={proposal.content}
            onInput={e => setProposal({ ...proposal, content: e.detail.value })}
          />
          <View className="flex space-x-4">
            <View className="flex-1">
              <Btn onClick={onClickBack} title="Back" type="secondary" />
            </View>
            <View className="flex-1">
              <Btn onClick={handleSubmit} title="Submit" type="primary" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}