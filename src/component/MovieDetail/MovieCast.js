import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, Text, Image } from "react-native";

import { getImageUrl } from "../../api/url";
import { Styles } from "./Styles";

const MovieCast = ({ credit }) => {
  let cast = credit.cast.sort((a, b) => (a.order > b.order ? 1 : -1));
  cast = credit.cast.slice(0, 10);

  if (cast.length === 0) return null;

  return (
    <View>
      <Text style={Styles.titleText}>Cast</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cast}
        renderItem={({ item }) => Cast(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Cast = (cast) => {
  const imageUrl = getImageUrl(cast.profile_path, "uri", "w185");
  return (
    <View>
      <View style={Styles.castImageContainer}>
        <Image source={imageUrl} style={Styles.castImage} resizeMode={"cover"} />
      </View>
      <Text style={Styles.bottomText} numberOfLines={2}>
        {cast.name}
      </Text>
    </View>
  );
};

export default MovieCast;

MovieCast.propTypes = {
  credit: PropTypes.object,
};
