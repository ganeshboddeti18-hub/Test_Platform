import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { theme } from '../../../shared/ui/theme';

const { width, height } = Dimensions.get('window');

// Adjust height for bottom tab bar if needed, but Reels are usually full screen 
// overlaying tabs or tabs are translucent. For now, full screen minus tabs.
const SCREEN_HEIGHT = height - 49; // approx tab bar height if not overlay

export interface Reel {
    id: string;
    videoUrl: string;
    user: {
        name: string;
        avatar: string;
    };
    description: string;
    likes: number;
    comments: number;
}

interface ReelItemProps {
    item: Reel;
    isActive: boolean;
}

export const ReelItem = ({ item, isActive }: ReelItemProps) => {
    const videoRef = useRef(null);
    const [paused, setPaused] = useState(!isActive);

    // Toggle pause on tap
    const togglePause = () => setPaused(!paused);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <TouchableOpacity activeOpacity={0.9} onPress={togglePause} style={styles.videoContainer}>
                <Video
                    source={{ uri: item.videoUrl }}
                    ref={videoRef}
                    style={styles.video}
                    resizeMode="cover"
                    repeat
                    paused={!isActive || paused}
                // poster={item.user.avatar} // Placeholder for video thumb
                />
            </TouchableOpacity>

            {/* Overlay Content */}
            <View style={styles.overlay}>
                <View style={styles.bottomSection}>
                    <View style={styles.userInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <FastImage
                                source={{ uri: item.user.avatar }}
                                style={{ width: 36, height: 36, borderRadius: 18, marginRight: 10, borderWidth: 1, borderColor: '#FFF' }}
                            />
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.user.name}</Text>
                            <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: 'white', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2 }}>
                                <Text style={{ color: 'white', fontSize: 12 }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'white', marginBottom: 10 }}>{item.description}</Text>

                        {/* Music Tick/Info */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="musical-notes" size={16} color="white" />
                            <Text style={{ color: 'white', marginLeft: 8 }}>Original Audio - {item.user.name}</Text>
                        </View>
                    </View>

                    <View style={styles.rightActions}>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Ionicons name="heart" size={32} color="white" />
                            <Text style={styles.actionText}>{item.likes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionBtn}>
                            <Ionicons name="chatbubble" size={30} color="white" />
                            <Text style={styles.actionText}>{item.comments}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionBtn}>
                            <Ionicons name="paper-plane" size={30} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionBtn}>
                            <Ionicons name="ellipsis-vertical" size={26} color="white" />
                        </TouchableOpacity>

                        <View style={styles.musicDisc}>
                            <FastImage
                                source={{ uri: item.user.avatar }}
                                style={{ width: 30, height: 30, borderRadius: 15 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height, // Full screen height including tab bar area effectively
        backgroundColor: 'black',
    },
    videoContainer: {
        width: '100%',
        height: '100%',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        paddingBottom: 70, // Space for Bottom Tab
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0,0,0,0.1)', // Slight overlay
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    userInfo: {
        flex: 1,
        paddingRight: 10,
    },
    rightActions: {
        alignItems: 'center',
        gap: 20,
    },
    actionBtn: {
        alignItems: 'center',
        marginBottom: 16,
    },
    actionText: {
        color: 'white',
        fontSize: 12,
        marginTop: 4,
        fontWeight: 'bold',
    },
    musicDisc: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#444',
    }
});
