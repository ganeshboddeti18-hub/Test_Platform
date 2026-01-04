import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../shared/ui/theme';

const { width } = Dimensions.get('window');
const CELL_WIDTH = width / 3;

export const ProfileScreen = () => {
    // Dummy images - using specific IDs to ensure availability
    const images = [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    ];

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={{ padding: 16 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FastImage
                            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' }}
                            style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: theme.colors.primary }}
                        />
                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ ...theme.typography.h2, fontSize: 18 }}>54</Text>
                                <Text style={{ color: theme.colors.textSecondary, fontSize: 12 }}>Posts</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ ...theme.typography.h2, fontSize: 18 }}>12.5k</Text>
                                <Text style={{ color: theme.colors.textSecondary, fontSize: 12 }}>Followers</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ ...theme.typography.h2, fontSize: 18 }}>340</Text>
                                <Text style={{ color: theme.colors.textSecondary, fontSize: 12 }}>Following</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={{ ...theme.typography.h2, fontSize: 18, marginTop: 12, color: 'white' }}>Design Daily</Text>
                    <Text style={{ color: theme.colors.textSecondary, marginBottom: 12, lineHeight: 20 }}>
                        Digital Creator 🎨{'\n'}
                        Minimalist architecture & design.{'\n'}
                        Global traveler. 🌍
                    </Text>

                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: theme.colors.surface, padding: 8, borderRadius: 4, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: theme.colors.surface, padding: 8, borderRadius: 4, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>Share Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Tabs Indicator */}
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#222', marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'white' }}>
                        <Ionicons name="grid" size={24} color="white" />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 10 }}>
                        <Ionicons name="person-circle-outline" size={26} color="#666" />
                    </View>
                </View>

                {/* Grid */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {images.map((img, index) => (
                        <View key={index} style={{ width: CELL_WIDTH, height: CELL_WIDTH, padding: 1 }}>
                            <FastImage source={{ uri: img }} style={{ flex: 1, backgroundColor: '#222' }} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
