import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../../shared/ui/theme';

export const MessagesScreen = () => (
    <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={theme.typography.h1}>Messages</Text>
    </View>
);
