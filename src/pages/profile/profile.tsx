import { View, Text, Image } from '@tarojs/components';
import { User } from '../../../types/types';
import Btn from '../../components/moleculs/btn/btn';
import Taro from '@tarojs/taro';
import { useSelector } from 'react-redux';
import { RootState } from '/src/reducers';

export default function Profile() {
  // Mock user data - replace with real data later
  const { credit } = useSelector((state: RootState) => state.user);
  const user: User = {
    id: 1,
    name: 'John Doe',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    cvUrl: '/assets/cv.pdf',
    credits: credit,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  };

  const handleUploadCV = () => {
    Taro.chooseMessageFile({
      count: 1,
      type: 'file',
      extension: ['.pdf', '.doc', '.docx'],
      success: function (res) {
        console.log('Selected file:', res.tempFiles[0]);
        // Implement file upload logic here
      }
    });
  };

  const handleViewCV = () => {
    if (!user.cvUrl) {
      Taro.showToast({
        title: 'No CV found',
        icon: 'error'
      });
      return;
    }

    Taro.showLoading({ title: 'Opening CV...' });

    // Download and open PDF file
    Taro.downloadFile({
      url: user.cvUrl,
      success: function (res) {
        const tempFilePath = res.tempFilePath;
        Taro.openDocument({
          filePath: tempFilePath,
          fileType: 'pdf',
          success: function () {
            console.log('File opened successfully');
          },
          fail: function (error) {
            console.error('Failed to open document:', error);
            Taro.showToast({
              title: 'Failed to open CV',
              icon: 'error'
            });
          },
          complete: function () {
            Taro.hideLoading();
          }
        });
      },
      fail: function (error) {
        console.error('Failed to download file:', error);
        Taro.showToast({
          title: 'Failed to download CV',
          icon: 'error'
        });
        Taro.hideLoading();
      }
    });
  };

  const onClickTopUp = () => {
    Taro.tradePay({
      tradeNO: '12345678',
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
    <View className="min-h-screen bg-gray-100 p-4">
      {/* Content */}
      <View className="space-y-4">
        {/* Profile Card */}
        <View className="mb-4">
          {/* Header */}
          <View className="bg-white shadow-md p-4 rounded-md">
            <View className="flex items-center mb-4">
              <Image
                className="w-16 h-16 rounded-full"
                src={user.avatar || ''}
                mode="aspectFill"
              />
              <View className="ml-4">
                <Text className="font-semibold text-gray-800 f-title">{user.name}</Text>
                <View className="flex items-center mt-1">
                  <View className="w-2 h-2 bg-green-500 rounded-full" />
                  <Text className="ml-2 text-gray-500 title-30">
                    {user.credits} credits remaining
                  </Text>
                </View>
                {
                  user.credits <= 0 && (
                    <Btn
                      onClick={onClickTopUp}
                      title="Top Up Credits"
                      type="primary"
                    />
                  )
                }              </View>
            </View>
          </View>

          {/* Skills Card */}
          <View className="bg-white shadow-md p-4 rounded-md mt-4">
            <Text className="font-semibold text-gray-800 mb-3 f-title">Skills</Text>
            <View className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <View
                  key={index}
                  className="bg-blue-50 px-3 py-1 rounded-full"
                >
                  <Text className="text-white title-30">{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* CV Card */}
          <View className="bg-white shadow-md p-4 rounded-md mt-4">
            <Text className="font-semibold text-gray-800 mb-3 f-title">CV Document</Text>
            {user.cvUrl ? (
              <View className="flex items-center justify-between">
                <View className="flex items-center">
                  <View className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <Text className="text-white">📄</Text>
                  </View>
                  <Text className="ml-2 text-gray-600 title-30">{user.cvUrl}</Text>
                </View>
                <Btn
                  onClick={handleViewCV}
                  title="View"
                  type="primary"
                  size="small"
                />
              </View>
            ) : (
              <View className="flex justify-center">
                <Btn
                  onClick={handleUploadCV}
                  title="Upload CV"
                  type="primary"
                />
              </View>
            )}
          </View>

          {/* Credits Info Card */}
          <View className="bg-white shadow-md p-4 rounded-md mt-4 flex flex-col">
            <Text className="font-semibold text-gray-800 mb-2 f-title">Credits Information</Text>
            <Text className="text-gray-600 title-30">
              You have {user.credits} credits remaining. Each job application costs 1 credit.
              Credits refresh at the beginning of each month.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}