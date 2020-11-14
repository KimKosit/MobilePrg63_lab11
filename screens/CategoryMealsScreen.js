import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
// import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
// import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  // const renderMealItem = (itemData) => {
  //   return (
  //     // <View>
  //     //   <Text>{itemData.item.title}</Text>
  //     // </View>
  //     <MealItem
  //       title={itemData.item.title}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       image={itemData.item.imageUrl}
  //       onSelectMeal={() => {
  //         props.navigation.navigate("MealDetail", { mealId: itemData.item.id });
  //       }}
  //     />
  //   );
  // };

  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
    // <View style={styles.screen}>
    //   <FlatList
    //     style={{ width: "95%" }}
    //     keyExtractor={(item, index) => item.id}
    //     data={displayedMeals}
    //     renderItem={renderMealItem}
    //     // numColumns={2}
    //   />
    // {
    /* <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      /> */
    // }
    // </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //   backgroundColor:
    //     Platform.OS === "android" ? Colors.primaryColor : "white",
    // },
    // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
