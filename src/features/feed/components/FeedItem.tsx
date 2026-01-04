import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../shared/ui/theme';

const { width } = Dimensions.get('window');

export interface Post {
    id: string;
    user: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    caption: string;
    likes: number;
    comments: number;
    time: string;
}

interface FeedItemProps {
    post: Post;
}

export const FeedItem = ({ post }: FeedItemProps) => {
    return (
        <View style={{ marginBottom: 16, backgroundColor: theme.colors.background }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
                <FastImage
                    source={{ uri: post.user.avatar }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: '#333' }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 14 }}>{post.user.name}</Text>
                    <Text style={{ color: theme.colors.textSecondary, fontSize: 12 }}>@{post.user.username}</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={20} color={theme.colors.text} />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <FastImage
                source={{ uri: post.content }}
                style={{ width: width, height: width * 1.25 }}
                resizeMode={FastImage.resizeMode.cover}
            />

            {/* Footer Actions */}
            <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <TouchableOpacity style={{ marginRight: 16 }}>
                        <Ionicons name="heart-outline" size={28} color={theme.colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 16 }}>
                        <Ionicons name="chatbubble-outline" size={26} color={theme.colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 16 }}>
                        <Ionicons name="paper-plane-outline" size={26} color={theme.colors.text} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Ionicons name="bookmark-outline" size={26} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                {/* Likes & Caption */}
                <Text style={{ color: theme.colors.text, fontWeight: '700', marginBottom: 4 }}>
                    {post.likes.toLocaleString()} likes
                </Text>
                <Text style={{ color: theme.colors.text, lineHeight: 20 }}>
                    <Text style={{ fontWeight: '700' }}>{post.user.username} </Text>
                    {post.caption}
                </Text>
                <TouchableOpacity style={{ marginTop: 4 }}>
                    <Text style={{ color: theme.colors.textSecondary }}>
                        View all {post.comments} comments
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: theme.colors.textSecondary, fontSize: 10, marginTop: 4, textTransform: 'uppercase' }}>
                    {post.time}
                </Text>
            </View>
        </View>
    );
};
