import { Icon, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home" options={{ title: 'Home' }}>
        <Icon sf={{ default: 'house', selected: 'house.fill' }} drawable="custom_home_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role='search'>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="history" options={{ title: 'Receipts' }}>
        <Icon sf={{ default: 'list.clipboard', selected: 'list.clipboard' }} drawable="custom_chat_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile" options={{ title: 'Profile' }}>
        <Icon sf={{ default: 'person', selected: 'person.fill' }} drawable="custom_chat_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}