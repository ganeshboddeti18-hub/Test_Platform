import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../shared/ui/theme';
import { useAuthStore } from '../features/auth/viewmodels/useAuthStore';

// Screens
import { FeedScreen } from '../features/feed/components/FeedScreen';
import { CameraScreen } from '../features/camera/components/CameraScreen';
import { ProfileScreen } from '../features/profile/components/ProfileScreen';
import { ReelsScreen } from '../features/reels/components/ReelsScreen';
import { MessagesScreen } from '../features/messaging/components/MessagesScreen';
import { View, Text, TouchableOpacity } from 'react-native';

const AuthScreen = ({ navigation }: any) => {
    const login = useAuthStore(state => state.login);
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[theme.typography.h1, { marginBottom: 20 }]}>Welcome to VYBE</Text>
            <TouchableOpacity
                style={{ backgroundColor: theme.colors.primary, padding: 16, borderRadius: theme.borderRadius.m }}
                onPress={() => login({ id: '1', name: 'User', username: 'user' })}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login / Guest</Text>
            </TouchableOpacity>
        </View>
    );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: '#333',
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textSecondary,
            }}
        >
            <Tab.Screen name="Home" component={FeedScreen} />
            <Tab.Screen name="Search" component={FeedScreen} /> {/* Placeholder */}
            <Tab.Screen name="Reels" component={ReelsScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export const AppNavigator = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.background } }}>
                {!isAuthenticated ? (
                    <Stack.Screen name="Auth" component={AuthScreen} />
                ) : (
                    <Stack.Screen name="Main" component={MainTabs} />
                )}
                <Stack.Screen name="Camera" component={CameraScreen} options={{ presentation: 'fullScreenModal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
