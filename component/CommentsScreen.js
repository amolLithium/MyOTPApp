import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const photoOwner = {
  id: 1,
  username: 'photo_owner',
};

const currentUser = {
  id: 2,
  username: 'current_user',
};
const CommentsScreen = () => {
  const [comments, setComments] = useState([]);
  const [replyInput, setReplyInput] = useState('');
  // Function to handle adding a comment
  const addComment = () => {
    // Assuming you have a photo owner user object and a current user object
    const newComment = {
      id: comments.length + 1,
      user: currentUser,
      comment: replyInput,
      replies: [],
    };

    setComments([...comments, newComment]);
    setReplyInput('');
  };

  // Function to handle adding a reply to a comment
  const addReply = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: comment.replies.length + 1,
          user: currentUser,
          comment: replyInput,
        };
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyInput('');
  };

  // Render a single comment item
  const renderCommentItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{item.user.username}</Text>
      <Text style={styles.commentText}>{item.comment}</Text>

      {/* Render replies */}
      {item.replies.length > 0 && (
        <FlatList
          data={item.replies}
          keyExtractor={(reply) => reply.id.toString()}
          renderItem={({ item: reply }) => (
            <View style={styles.replyContainer}>
              <Text style={styles.replyUser}>{reply.user.username}</Text>
              <Text style={styles.replyUser}>{reply.comment}</Text>
            </View>
          )}
        />
      )}

      {/* Reply input field */}
      <View style={styles.replyInputContainer}>
        <TextInput
          style={styles.replyInput}
          placeholder="Reply..."
          placeholderTextColor="black"
          value={replyInput}
          onChangeText={setReplyInput}
        />
        <TouchableOpacity
          style={styles.replyButton}
          onPress={() => addReply(item.id)}
        >
          <Text style={styles.replyButtonText}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Other components */}
      <SvgUri
        uri={require('../assets/react_icon.svg')} // Replace with the actual path to your SVG file
        style={styles.photo}
        width="200"
        height="200"
      />
      {/* Other components */}



      {/* Render comments */}
      <FlatList
        data={comments}
        keyExtractor={(comment) => comment.id.toString()}
        renderItem={renderCommentItem}
      />

      {/* Comment input field */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          placeholderTextColor="black"
          value={replyInput}
          onChangeText={setReplyInput}
        />
        <TouchableOpacity style={styles.commentButton} onPress={addComment}>
          <Text style={styles.commentButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  photo: {
    width: '100%',
    height: 300,
  },
  commentContainer: {
    marginTop: 8,
  },
  commentText: {
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  replyContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  replyUser: {
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  replyInputContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  replyInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  replyButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'center',
  },
  replyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentInputContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  commentInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  commentButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'center',
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default CommentsScreen;
