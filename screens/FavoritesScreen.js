import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoritesScreen = (props) => {
  // const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  // const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  if (favMeals.length === 0 || favMeals === undefined) {
    return (
      <View style={styles.screen}>
        <Text>There is no favorite meal. Please add some meals.</Text>
      </View>
    );
  }

  return (
    // <View style={styles.screen}>
    //   <Text>The Favorites Screen!</Text>
    // </View>
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
