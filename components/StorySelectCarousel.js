import React, { useCallback, useState, useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import Dots from 'react-native-dots-pagination'
import images from '../assets/images/StoryCoverImages'

const StorySelectCarousel = props => {
    const storiesJson = require('../data/StoriesCatalogue.json')
    const zeroPrefixer = (id) => {
        let output = ''
        if(String(id).length === 1) {
            output = '00' + String(id)
        } else if(String(id).length === 2) {
            output = '0' + String(id)
        } else {
            output = String(id)
        }
        return output
    }
    const [index, setIndex] = useState(0)
    const indexRef = useRef(index)
    indexRef.current = index
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, [])
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

    const slide = data => {
        return (
            <View
                style={{
                    height: windowHeight,
                    width: windowWidth,
                    alignItems: 'center',
                    padding: 20
                }}>
                <TouchableOpacity 
                    onPress={() => props.nav.navigate('StoryDisplay', {
                                                        storyID: storiesJson[index], 
                                                        title: 'test', 
                                                        storyLocation: String('story' + zeroPrefixer(storiesJson[index].id))})}>
                    <View
                        borderStyle={'solid'}
                        borderColor={'#000000'}
                        borderWidth={5}
                        borderBottomLeftRadius={30}
                        borderBottomRightRadius={40}
                        borderTopRightRadius={10}
                        borderTopLeftRadius={5}
                        backgroundColor={'#000000'}>
                        <Image source={images[data.imgLoc]}
                            style={{ width: windowWidth * 0.4, height: windowHeight * 0.3 }}
                            resizeMode={'stretch'}
                            borderBottomLeftRadius={30}
                            borderBottomRightRadius={40}
                            borderTopRightRadius={10}
                            borderTopLeftRadius={5} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View alignItems={'center'} justifyContent={'center'}>
                <Text style={styles.storyTitle}>{data.title}</Text>
                </View>
                </TouchableOpacity>
                <Text style={styles.storyAuthor}>written by {data.author}</Text>
                <Text style={styles.storyAuthor}>-------------------------------------</Text>
                <Text style={styles.storyDescription}>{data.description}</Text>
                <View flex={1}
                    position={'absolute'}
                    bottom={100}
                >
                    <Dots
                        length={storiesJson.length}
                        active={index}
                        activeDotWidth={12}
                        activeDotHeight={12}
                        passiveDotHeight={6}
                        passiveDotWidth={6}
                        activeColor={'#66ff66'}
                        passiveColor={'#cc6600'} />
                </View>
            </View>
        )
    }

    const carouselOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    }

    const carousel = () => {
        return (
            <View>
                <FlatList
                    data={storiesJson}
                    keyExtractor={item => String(item.id)}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return slide(item)
                    }}
                    onScroll={onScroll}
                    {...carouselOptimizationProps}
                />
            </View>
        )
    }

    return carousel()
}

export default StorySelectCarousel

const styles = StyleSheet.create({
    storyTitle: {
        color: '#EFEFEF',
        fontFamily: 'october',
        fontSize: 30,
        marginBottom: 3
    },
    storyAuthor: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontSize: 20,
        marginBottom: 15
    },
    storyDescription: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 18,
    }
})