import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function StudentCard({ id, name, year, photoUrl, flagged, onToggleFlag }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: photoUrl }} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          { backgroundColor: flagged ? '#8B5CF6' : 'white' },
          pressed && { backgroundColor: '#C4B5FD' },
        ]}
      >
        <Text style={[styles.flagText, { color: flagged ? 'white' : '#8B5CF6' }]}>
          {flagged ? '★ Flagged for Advising' : '☆ Flag for Advising'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: 'gray',
  },
  flagButton: {
    borderWidth: 2,
    borderColor: '#8B5CF6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  flagText: {
    fontWeight: 'bold',
  },
});