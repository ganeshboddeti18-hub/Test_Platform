import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../shared/ui/theme';

export const CameraScreen = ({ navigation }: any) => {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const isFocused = useIsFocused();
    const camera = useRef<Camera>(null);

    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission]);

    useEffect(() => {
        setIsActive(isFocused);
    }, [isFocused]);

    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Camera Permission</Text>
            </View>
        );
    }

    if (device == null) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Camera Device Found</Text>
            </View>
        );
    }

    const takePhoto = async () => {
        if (camera.current) {
            try {
                const photo = await camera.current.takePhoto();
                console.log(photo.path);
                // Navigate to editor or save
            } catch (e) {
                console.error(e);
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isActive}
                photo={true}
                video={true}
                audio={true}
            />

            {/* Overlays */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Camera</Text>
                <View style={{ width: 30 }} />
            </View>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.btn}>
                    <Ionicons name="images-outline" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={takePhoto} style={styles.captureBtn}>
                    <View style={styles.captureInner} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Ionicons name="camera-reverse-outline" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '50%',
    },
    topBar: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    captureBtn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureInner: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        backgroundColor: 'white',
    },
    btn: {
        padding: 10,
    }
});
