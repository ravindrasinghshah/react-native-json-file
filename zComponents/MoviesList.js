import React from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import  Colors  from "./shared/Colors";
import customData from './mock-data/movies.json';
class MoviesList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        //  console.log(customData);
        this.setState({
            isLoading: false,
            dataSource: customData
        }, function () { });
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.highlight}>{this.state.dataSource.title}</Text>
                    <Text style={styles.sectionDescription}> {this.state.dataSource.description}    </Text>
                </View>
                <FlatList style={{padding:10,backgroundColor: Colors.white}}
                    data={this.state.dataSource.movies}
                    renderItem={({ item }) => <Text style={styles.sectionTitle}>{item.title},  <Text style={styles.sectionDescription}>{item.releaseYear}</Text></Text>}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        padding:5, margin:5,
        borderBottomWidth:1  ,
        borderBottomColor:Colors.primary   
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',  fontSize: 24,
    }
});


export default MoviesList;  