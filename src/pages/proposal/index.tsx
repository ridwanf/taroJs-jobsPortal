import { View, Text, Textarea, Button } from '@tarojs/components';

export default function Proposal() {
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
  };

  const handleSubmit = () => {
    // Handle proposal submission logic here
    console.log('Proposal submitted!');
  };

  return (
    <View className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <View className="bg-white shadow-md p-4 flex justify-between items-center">
        <Text className="text-xl font-bold text-gray-800">Submit Proposal</Text>
        <Button className="bg-green-500 text-white px-4 py-2 rounded-md">Back to Job</Button>
      </View>

      {/* Job Info */}
      <View className="mt-6 bg-white shadow-md p-6 rounded-md">
        <Text className="text-lg font-semibold text-gray-800">{job.title}</Text>
        <Text className="text-sm text-gray-500 mt-2">Company: {job.company}</Text>
      </View>

      {/* Proposal Form */}
      <View className="mt-6 bg-white shadow-md p-6 rounded-md">
        <Text className="text-lg font-semibold text-gray-800">Your Proposal</Text>
        <Textarea
          className="mt-4 w-full h-32 border border-gray-300 rounded-md p-2"
          placeholder="Write your proposal here..."
        />
        <Button
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg"
          onClick={handleSubmit}
        >
          Submit Proposal
        </Button>
      </View>
    </View>
  );
}