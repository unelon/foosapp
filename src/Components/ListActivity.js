import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { useUser } from '../hooks/useUser';
import { Ionicons } from "@expo/vector-icons";
import { gs } from "../inc/Global";

export const ActivityList = () => {

    const {
        user: { name },
      } = useUser();

    const MYGAMES = {
        1: "Blomsten og Bien", 
        2: "Tinderdysten", 
        3: "TV2 kampen"
    }

    const LABEL = {
        1: "Game finished",
        2: "Achievement",
        3: "New user"
    }
    
    const TEXT = {
        1: " won against ",
        2: " unlocked a new achievement: ",
        3: "A new user has joined this league. Say hello to: "
    }

    const PLAYER = {
        1: "Salma Hayek",
        2: "Viggo Mortensen",
        3: "Adam Sandler",
        4: "Will Smith",
        5: "Halle Berry"
    }

    const BadgeAchievement = () => {
        return <Ionicons name={"flash"} size={32} color="red" />;
    }

    const RESULTS = [
        {
            id: 1,
            label: LABEL[1],
            title: PLAYER[2] + TEXT[1] + PLAYER[4],
            games: "2 - 1",
        },
        {
            id: 1,
            label: LABEL[1],
            title: PLAYER[3] + TEXT[1] + PLAYER[5],
            games: "2 - 1",
        },
        {
            id: 1,
            label: LABEL[1],
            title: PLAYER[4] + TEXT[1] + PLAYER[1],
            games: "2 - 1",
        },
        {
            id: 1,
            label: LABEL[1],
            title: PLAYER[3] + TEXT[1] + PLAYER[2],
            games: "2 - 1",
        },
        {
            id: 1,
            label: LABEL[1],
            title: PLAYER[5] + TEXT[1] + PLAYER[3],
            games: "2 - 1",
        },
    ];

    const Item = ({ title, label, games, achievement }) => (
        <View style={[gs.ps, gs.containerColor, gs.borderRadius, gs.msBot]}>
            <Text style={[gs.textColor1, gs.textsm]}>
                {label}
            </Text>
            <Text style={[gs.textColor1, gs.textbold]}>
                {title}
            </Text>
            <Text style={gs.textColor2}>
                {games}
            </Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} label={item.label} games={item.games} achievement={item.achievement}/>
    );

    return (
        <FlatList 
        data={RESULTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginTop: 10, height: "100%"}}
        />
    );

   
}