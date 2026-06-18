import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  Pressable,
  Alert,
} from 'react-native';

import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

export default function App() {
  const [anonymous, setAnonymous] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  const topics = [
    { name: 'Topic A', percent: 80 },
    { name: 'Topic B', percent: 35 },
    { name: 'Topic C', percent: 65 },
    { name: 'Topic D', percent: 70 },
    { name: 'Topic E', percent: 50 },
  ];

  const getColor = (percent) => {
    if (percent >= 70) return '#22c55e';
    if (percent < 40) return '#ef4444';
    return '#f59e0b';
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        {/* Header */}

        <Text style={styles.title}>ClassPulse</Text>
        <Text style={styles.subtitle}>
          Classroom Feedback Dashboard
        </Text>

        {/* Logo */}

        <View style={styles.logo}>
          <Ionicons
            name="school"
            size={60}
            color="white"
          />
        </View>

        {/* Search */}

        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={22}
            color="gray"
          />

          <TextInput
            placeholder="Search Lecture..."
            style={styles.searchInput}
          />
        </View>

        {/* Cards */}

        <View style={styles.cards}>

          <View style={styles.card}>
            <FontAwesome5
              name="users"
              size={28}
              color="#4f46e5"
            />
            <Text style={styles.cardTitle}>
              Responses
            </Text>
            <Text style={styles.cardValue}>
              128
            </Text>
          </View>

          <View style={styles.card}>
            <Ionicons
              name="speedometer"
              size={28}
              color="#2563eb"
            />
            <Text style={styles.cardTitle}>
              Speed
            </Text>
            <Text style={styles.cardValue}>
              3.6/5
            </Text>
          </View>

          <View style={styles.card}>
            <MaterialIcons
              name="bar-chart"
              size={28}
              color="#10b981"
            />
            <Text style={styles.cardTitle}>
              Difficulty
            </Text>
            <Text style={styles.cardValue}>
              3.4/5
            </Text>
          </View>

        </View>

        {/* Anonymous Feedback */}

        <View style={styles.feedbackCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name="shield-checkmark"
              size={24}
              color="#10b981"
            />

            <Text style={styles.feedbackText}>
              Anonymous Feedback
            </Text>
          </View>

          <Switch
            value={anonymous}
            onValueChange={setAnonymous}
          />
        </View>

        <Text style={styles.status}>
          {anonymous
            ? 'Anonymous Mode ON'
            : 'Anonymous Mode OFF'}
        </Text>

        {/* Topics */}

        <Text style={styles.sectionTitle}>
          Topic Understanding
        </Text>

        {topics.map((topic, index) => (
          <View key={index} style={styles.topicCard}>

            <View style={styles.topicHeader}>
              <Text style={styles.topicName}>
                {topic.name}
              </Text>

              <Text
                style={{
                  color: getColor(topic.percent),
                  fontWeight: 'bold',
                }}
              >
                {topic.percent}%
              </Text>
            </View>

            <View style={styles.progressBackground}>
              <View
                style={{
                  width: `${topic.percent}%`,
                  backgroundColor: getColor(topic.percent),
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </View>

          </View>
        ))}

        {/* Weak Topic Button */}

        <Pressable
          style={styles.button}
          onPress={() =>
            Alert.alert(
              'Weak Topic Detected',
              'Only 35% students understood Topic B.'
            )
          }
        >
          <Ionicons
            name="warning"
            size={20}
            color="white"
          />

          <Text style={styles.buttonText}>
            View Weak Topic
          </Text>
        </Pressable>

      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>

        <Pressable
          style={styles.navItem}
          onPress={() => setActiveTab('Home')}
        >
          <Ionicons
            name="home"
            size={28}
            color={
              activeTab === 'Home'
                ? '#4f46e5'
                : 'gray'
            }
          />

          <Text
            style={{
              color:
                activeTab === 'Home'
                  ? '#4f46e5'
                  : 'gray',
            }}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setActiveTab('Profile')}
        >
          <Ionicons
            name="person-outline"
            size={28}
            color={
              activeTab === 'Profile'
                ? '#4f46e5'
                : 'gray'
            }
          />

          <Text
            style={{
              color:
                activeTab === 'Profile'
                  ? '#4f46e5'
                  : 'gray',
            }}
          >
            Profile
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    padding: 20,
  },

  title: {
    marginTop: 40,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#243b8f',
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
    fontSize: 18,
  },

  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#5b5ef7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    width: '31%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardTitle: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },

  cardValue: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },

  feedbackCard: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  feedbackText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },

  status: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#10b981',
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  topicCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  topicName: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  progressBackground: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
  },

  button: {
    marginTop: 15,
    marginBottom: 100,
    backgroundColor: '#4f46e5',
    padding: 18,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  navItem: {
    alignItems: 'center',
  },
});