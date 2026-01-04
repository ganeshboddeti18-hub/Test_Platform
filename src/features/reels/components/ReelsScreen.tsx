import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions, StatusBar } from 'react-native';
import { ReelItem, Reel } from './ReelItem';

const { height } = Dimensions.get('window');

const DUMMY_REELS: Reel[] = [
    {
        id: '1',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        user: {
            name: 'Neon Vibes',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        },
        description: 'Neon lights in Tokyo 🇯🇵 #cyberpunk',
        likes: 5420,
        comments: 112,
    },
    {
        id: '2',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
        user: {
            name: 'Nature Lover',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        },
        description: 'Spring is here! 🌸',
        likes: 2300,
        comments: 45,
    },
    {
        id: '3',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        user: {
            name: 'Surfer Boy',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
        },
        description: 'Morning waves 🌊 #surf',
        likes: 8900,
        comments: 320,
    }
];

export const ReelsScreen = () => {
    const [activeReelId, setActiveReelId] = useState(DUMMY_REELS[0].id);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveReelId(viewableItems[0].item.id);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <FlatList
                data={DUMMY_REELS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ReelItem item={item} isActive={item.id === activeReelId} />
                )}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                snapToInterval={height}
                snapToAlignment="start"
                decelerationRate="fast"
                disableIntervalMomentum
            />
        </View>
    );
};
