import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/TMDB';

export default function HomeScreen() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        const movieData = async () => {
            try {
                setData(await getPopularMovies());
            } catch (error) {
                setErrMessage(error instanceof Error ? error.message : String(error));
            }
            setLoading(false);
        };
        movieData();
    }, []);

    if (loading) return <Text>Loading...</Text>;
    if (errMessage) return <Text>{errMessage}</Text>;

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
