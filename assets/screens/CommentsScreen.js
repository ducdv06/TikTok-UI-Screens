import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const comments = [
  {
    id: "1",
    user: "martinli_rond",
    text: "How neatly I write the date in my book",
    time: "22h",
    likes: "8098",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "2",
    user: "mayjacobson",
    text: "Now that's a skill very talented",
    time: "22h",
    likes: "8098",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "3",
    user: "zickjohn",
    text: "Doing this would make me so anxious",
    time: "22h",
    likes: "8098",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: "4",
    user: "karennne",
    text: "No pressure",
    time: "22h",
    likes: "8098",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

export default function CommentsScreen({ onClose }) {
  const renderComment = ({ item }) => (
    <View style={styles.commentRow}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />

      <View style={styles.commentContent}>
        <Text style={styles.username}>
          {item.user} <Text style={styles.time}>{item.time}</Text>
        </Text>

        <Text style={styles.commentText}>{item.text}</Text>

        <Text style={styles.reply}>View replies (4)</Text>
      </View>

      <View style={styles.likeBox}>
        <Ionicons name="heart-outline" size={18} color="#999" />
        <Text style={styles.likeText}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.overlay}>
      <View style={styles.sheet}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>579 comments</Text>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Comment list */}
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderComment}
          showsVerticalScrollIndicator={false}
        />

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add comment..."
            placeholderTextColor="#999"
            style={styles.input}
          />
          <Ionicons name="at" size={22} color="#333" />
          <Ionicons
            name="happy-outline"
            size={22}
            color="#333"
            style={{ marginLeft: 12 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  sheet: {
    height: "70%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  header: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  title: {
    fontWeight: "600",
    fontSize: 16,
  },

  closeBtn: {
    position: "absolute",
    right: 16,
  },

  commentRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },

  commentContent: {
    flex: 1,
  },

  username: {
    fontWeight: "600",
    fontSize: 13,
    color: "#222",
  },

  time: {
    color: "#999",
    fontWeight: "400",
  },

  commentText: {
    marginTop: 4,
    fontSize: 14,
    color: "#000",
  },

  reply: {
    marginTop: 6,
    fontSize: 12,
    color: "#999",
  },

  likeBox: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  likeText: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
  },

  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
  },
});
