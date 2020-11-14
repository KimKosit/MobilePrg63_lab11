import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = (props) => {
  // console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
      // <TouchableOpacity
      //   style={styles.gridItem}
      //   onPress={() => {
      //     // props.navigation.navigate("CategoryMeals");
      //     // props.navigation.navigate({
      //     //   routeName: "CategoryMeals",
      //     //   params: {
      //     //     categoryId: itemData.item.id,
      //     //   },
      //     // });
      //     props.navigation.navigate("CategoryMeals", {
      //       categoryId: itemData.item.id,
      //     });
      //   }}
      // >
      //   <View>
      //     <Text>{itemData.item.title}</Text>
      //   </View>
      // </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id} // old version
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />

    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go to Meals"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //     }}
    //   />
    // </View>
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal Categories",
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

  // headerStyle: {
  //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  // },
  // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // gridItem: {
  //   flex: 1,
  //   margin: 15,
  //   height: 150,
  // },
});

export default CategoriesScreen;
