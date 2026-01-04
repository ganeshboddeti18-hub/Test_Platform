import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { theme } from '../../../shared/ui/theme';
import { FeedItem, Post } from './FeedItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const DUMMY_POSTS: Post[] = [
    {
        id: '1',
        user: {
            name: 'Elena Fisher',
            username: 'elena_travels',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        },
        content: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
        caption: 'Cinque Terre is absolutely magical! 🇮🇹✨ #italy #travel #summer',
        likes: 12450,
        comments: 342,
        time: '2 HOURS AGO',
    },
    {
        id: '2',
        user: {
            name: 'Jake Peralta',
            username: 'jake_nypd',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        },
        content: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
        caption: 'Chilling at the precinct. 🍩 #b99 #coolcoolcool',
        likes: 853,
        comments: 56,
        time: '5 HOURS AGO',
    },
    {
        id: '3',
        user: {
            name: 'Design Daily',
            username: 'design_daily',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        },
        content: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        caption: 'Minimalist architecture is just satisfying. 🏢 #architecture #design',
        likes: 45020,
        comments: 120,
        time: '1 DAY AGO',
    },
];

export const FeedScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }} edges={['top']}>
            <StatusBar barStyle="light-content" />
            <View style={{ paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: '#222', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '800', fontFamily: 'sans-serif-condensed', color: theme.colors.text }}>VYBE</Text>
            </View>
            <FlatList
                data={DUMMY_POSTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FeedItem post={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};
