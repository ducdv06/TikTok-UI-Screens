import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommentsScreen from "./CommentsScreen";

export default function VideoScreen({ image, user, likes }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <ImageBackground source={image} style={styles.container}>
      {/* Right action bar */}
      <View style={styles.rightIcons}>
        {/* Avatar */}
        <TouchableOpacity style={styles.avatarWrapper}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/100?img=5",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        {/* Like */}
        <TouchableOpacity style={styles.iconItem}>
          <Ionicons name="heart" size={32} color="#fff" />
          <Text style={styles.text}>{likes}</Text>
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => setShowComments(true)}
        >
          <Ionicons name="chatbubble" size={32} color="#fff" />
          <Text style={styles.text}>64</Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity style={styles.iconItem}>
          <Ionicons name="arrow-redo" size={32} color="#fff" />
          <Text style={styles.text}>Share</Text>
        </TouchableOpacity>

        {/* Music disc */}
        <TouchableOpacity style={styles.discWrapper}>
          <Image source={require("../img/music1.jpg")} style={styles.disc} />
        </TouchableOpacity>
      </View>

      {/* Bottom text info */}
      <View style={styles.bottomInfo}>
        <Text style={styles.user}>@{user} · 1-28</Text>

        <Text style={styles.caption}>#avicii #wflove</Text>

        <View style={styles.musicRow}>
          <Ionicons name="musical-notes" size={16} color="#fff" />
          <Text style={styles.musicText}>
            Avicii - Waiting For Love (ft...)
          </Text>
        </View>
      </View>

      {/* Comments Modal */}
      <Modal visible={showComments} animationType="slide" transparent>
        <CommentsScreen onClose={() => setShowComments(false)} />
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  rightIcons: {
    position: "absolute",
    right: 12,
    bottom: 150,
    alignItems: "center",
  },

  avatarWrapper: {
    marginBottom: 20,
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#fff",
  },

  plusBadge: {
    position: "absolute",
    bottom: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ff2d55",
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#fff",
    fontWeight: "bold",
  },

  iconItem: {
    alignItems: "center",
    marginBottom: 20,
  },

  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
  },

  discWrapper: {
    marginTop: 8,
  },

  disc: {
    width: 49,
    height: 49,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#333",
  },

  bottomInfo: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  user: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  caption: {
    color: "#fff",
    marginTop: 8,
    fontSize: 14,
  },

  musicRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  musicText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 13,
  },
});
