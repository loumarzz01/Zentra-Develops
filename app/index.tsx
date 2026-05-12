// index.tsx

import {
    Inter_400Regular,
    Inter_600SemiBold,
    useFonts,
} from "@expo-google-fonts/inter";
import { FontAwesome, Ionicons } from '@expo/vector-icons';


import { LinearGradient } from 'expo-linear-gradient';
import { View as MotiView } from 'moti';
import { useRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { ResizeMode, Video } from 'expo-av';


export default function Home() {

    

    const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    });

    
    

    const { height, width } = useWindowDimensions();



    const scrollRef = useRef(null);
    const heroRef = useRef(null)
    const aboutMeRef = useRef(null)
    const portfolioRef = useRef(null)

    if (!fontsLoaded) {
        return null; 
    }



    const scrollToSection = (ref) => {
        if  (scrollRef.current && ref.current) {
        const topOffset = ref.current.offsetTop;

        scrollRef.current.scrollTo({
                y: topOffset,
                animated: true,
            });
        }
    };


    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>

            {/* NAVIGATION BAR */}
            <View style={{zIndex: 10, position: 'absolute', top: 30, height: 65, width: 900, flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1f1f1f7c', borderRadius: 99, borderWidth: 1, borderColor: "#5f5f5f", paddingHorizontal: 30}}>
                <TouchableOpacity style={{position: 'absolute', left: 30}}>
                    <Text style={{color: 'white', fontWeight: '500', fontSize: 17}}>Zentra Develops</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', gap: 30 }}>
                    <TouchableOpacity onPress={() => scrollToSection(heroRef)}>
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular'}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollToSection(aboutMeRef)}>
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular'}}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollToSection(portfolioRef)}>
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular'}}>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular'}}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular'}}>Reviews</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ borderRadius: 99, borderWidth: 1, borderColor: "#5f5f5f", width: 100, height: 40, position: 'absolute', right: 13, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'Inter_400Regular'}}>Contact</Text>
                </TouchableOpacity>
            </View>

            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                {/* HERO SECTION */}
                <View ref={heroRef} style={{height: 925, minWidth: 300, justifyContent: 'center', alignItems: 'center', gap: 40}}>
                    <Image resizeMode='cover' source={require('../assets/images/Background4.png')} style={{position: 'absolute', width: "100%", height: "100%"}}/>
                    
                    <View style={{ borderWidth: 1, borderColor: "#ffffff71", gap:2, justifyContent: 'center', flexDirection: 'row', height: 40, padding: 10, backgroundColor: '#ffffff1a', borderRadius: 99, alignItems: 'center'}}>
                        <FontAwesome name="star" size={13} color="#ffffff" />
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular', fontSize: 12}}> Unified Web & Mobile Ecosystems </Text>
                    </View>

                    <Text style={{textAlign: 'center', color: 'white', fontSize: 65, fontFamily: 'Inter_600SemiBold'}}>Engineered for Performance,{"\n"}Designed for Impact.</Text>
                    
                    <Text style={{width: 550, textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Inter_400Regular'}}>I build high-velocity digital platforms that bridge the gap between complex functionality and seamless user experience.</Text>

                    <View style={{gap: 20, flexDirection: 'row'}}>
                        <TouchableOpacity style={{width: 170, height: 57, borderRadius: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
                            <MotiView from={{rotate: '0deg'}} animate={{rotate: '360deg'}} transition={{type: 'timing', duration: 4000, loop: true, easing: (t) => t}} style={{position: 'absolute', width: 300, height: 300}}>
                                <LinearGradient colors={['#00ccff', '#8000ff', '#ff0080']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}/>
                            </MotiView>
                            <Text style={{color: '#ffffff', fontSize: 17, fontFamily: 'Inter_400Regular'}}>Let's talk</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => scrollToSection(portfolioRef)} style={{backgroundColor:'#1f1f1f', width: 170, height: 57, borderRadius: 99, borderWidth: 1, borderColor: "#5f5f5f7a", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ffffff', fontSize: 17, fontFamily: 'Inter_400Regular'}}>My work </Text>
                            <Ionicons name="arrow-down-circle-outline" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ABOUT ME SECTION */}
                <View ref={aboutMeRef} style={{height: 925, minWidth: 300, justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../assets/images/About me bg2.png')} style={{position: 'absolute', width: "100%", height: "100%"}}/>

                    <View style={{ marginBottom: 40, padding: 10, borderWidth: 1, borderColor: "#ffffff71", gap:2, justifyContent: 'center', flexDirection: 'row', height: 40, backgroundColor: '#ffffff1a', borderRadius: 99, alignItems: 'center'}}>
                        <FontAwesome name="star" size={13} color="#ffffff" />
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular', fontSize: 12}}> About me </Text>
                    </View>

                    <Text style={{marginBottom: 70, color: 'white', fontFamily: 'Inter_400Regular', fontSize: 50 }}>Developer & Founder</Text>

                    <View style={{flexDirection: 'row', gap: 70 }}>
                        <View style={{ shadowColor: 'black', shadowOffset: {width: 4, height: 4}, shadowOpacity: 5, shadowRadius: 30, borderColor: '#f1f1f11a', borderWidth: 1, backgroundColor: '#ffffff18', height: 450, width: 450, padding: 25, borderRadius: 30}}>
                            <Text style={{ color: '#f1f1f1', fontSize: 20, fontFamily: 'Inter_400Regular'}}> I’m Louis, the founder of Zentra Develops. I specialise in building high-performance websites and native apps that bridge the gap between complex engineering and premium design.{"\n"}{"\n"}By leveraging the React ecosystem, I deliver engineering-grade architectures optimized for sub-second loading and seamless scalability.{"\n"}{"\n"}My approach turns technical complexity into a competitive advantage, providing data-driven, full-stack solutions that solve real business pain points and elevate your brand's digital presence.</Text>
                        </View>

                        <View style={{shadowColor: 'black', shadowOffset: {width: 4, height: 4}, shadowOpacity: 5, shadowRadius: 30, height: 450, width: 450, borderRadius: 30, overflow: 'hidden', borderColor: '#f1f1f17e', borderWidth: 1}}>
                            <Image resizeMode='cover' source={require('../assets/images/mees.png')} style={{position: 'absolute', width: "100%", height: "100%"}}/>
                        </View>
                    </View>
                </View>

                {/* PORTFOLIO SECTION */}
                <View ref={portfolioRef} style={{height: 925, minWidth: 300, justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../assets/images/Portfolio5.png')} style={{position: 'absolute', width: "100%", height: "100%"}}/>

                    <View style={{ marginBottom: 40, padding: 10, borderWidth: 1, borderColor: "#ffffff71", gap:2, justifyContent: 'center', flexDirection: 'row', height: 40, backgroundColor: '#ffffff1a', borderRadius: 99, alignItems: 'center'}}>
                        <FontAwesome name="star" size={13} color="#ffffff" />
                        <Text style={{color: 'white', fontFamily: 'Inter_400Regular', fontSize: 12}}> My projects </Text>
                    </View>

                    <Text style={{marginBottom: 70, color: 'white', fontFamily: 'Inter_400Regular', fontSize: 50 }}>Check out my latest complete project</Text>

                    <View style={{flexDirection: 'row', gap: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <View href="https://liminal-kappa.vercel.app/" style={{opacity: 0.95, shadowColor: 'black', shadowOffset: {width: 4, height: 4}, shadowOpacity: 5, shadowRadius: 30, height: 450, width: 450, borderRadius: 30, overflow: 'hidden', borderColor: '#ffffff', borderWidth: 1}}>
                            <Image resizeMode='cover' source={require('../assets/images/Liminal.png')} style={{position: 'absolute', width: "100%", height: "100%"}}/>
                        </View>

                        <View style={{opacity: 0.95, shadowColor: 'black', shadowOffset: {width: 4, height: 4}, shadowOpacity: 5, shadowRadius: 30, height: 450, width: 450, borderRadius: 30, overflow: 'hidden', borderColor: '#ffffff', borderWidth: 1}}>
                            <Video
                                style={{width: "100%", height: "100%"}}
                                source={require('../assets/videos/SmileApp video.mp4')}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN}
                                isLooping
                                shouldPlay={true}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}