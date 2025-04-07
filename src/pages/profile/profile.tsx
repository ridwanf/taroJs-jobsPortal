import { View, Text, Image } from '@tarojs/components';
import { User } from '../../../types/types';
import Btn from '../../components/moleculs/btn/btn';
import Taro from '@tarojs/taro';

export default function Profile() {
  // Mock user data - replace with real data later
  const user: User = {
    id: 1,
    name: 'John Doe',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    cvUrl: '/path/to/cv.pdf',
    credits: 5,
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

  return (
    <View className="bg-gray-100 min-h-screen">
      {/* Header */}
      <View className="bg-blue-50 shadow-md p-4">
        <Text className="text-lg font-bold text-white">Profile</Text>
      </View>

      {/* Content */}
      <View className="space-y-4 p-4">
        {/* Profile Card */}
        <View className="bg-white shadow-md p-4 rounded-md">
          <View className="flex items-center mb-4">
            <Image
              className="w-16 h-16 rounded-full"
              src={user.avatar || ''}
              mode="aspectFill"
            />
            <View className="ml-4">
              <Text className="text-xl font-semibold text-gray-800">{user.name}</Text>
              <View className="flex items-center mt-1">
                <View className="w-2 h-2 bg-green-500 rounded-full" />
                <Text className="ml-2 text-sm text-gray-500">
                  {user.credits} credits remaining
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Skills Card */}
        <View className="bg-white shadow-md p-4 rounded-md">
          <Text className="text-md font-semibold text-gray-800 mb-3">Skills</Text>
          <View className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <View
                key={index}
                className="bg-blue-10 px-3 py-1 rounded-full"
              >
                <Text className="text-sm text-blue-50">{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CV Card */}
        <View className="bg-white shadow-md p-4 rounded-md">
          <Text className="text-md font-semibold text-gray-800 mb-3">CV Document</Text>
          {user.cvUrl ? (
            <View className="flex items-center justify-between">
              <View className="flex items-center">
                <View className="w-8 h-8 bg-blue-10 rounded-full flex items-center justify-center">
                  <Text className="text-blue-50">📄</Text>
                </View>
                <Text className="ml-2 text-gray-600">CV.pdf</Text>
              </View>
              <Btn
                onClick={() => console.log('View CV')}
                title="View"
                type="secondary"
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
        <View className="bg-white shadow-md p-4 rounded-md">
          <Text className="text-md font-semibold text-gray-800 mb-2">Credits Information</Text>
          <Text className="text-gray-600 text-sm">
            You have {user.credits} credits remaining. Each job application costs 1 credit.
            Credits refresh at the beginning of each month.
          </Text>
        </View>
      </View>
    </View>
  );
}