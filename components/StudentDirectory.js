import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import StudentCard from './StudentCard';

const starterStudents = [
  { id: 's1', name: 'Ana Cruz', year: '3rd Year', photoUrl: 'https://i.pravatar.cc/100?img=1', flagged: false },
  { id: 's2', name: 'Bea Santos', year: '2nd Year', photoUrl: 'https://i.pravatar.cc/100?img=2', flagged: false },
  { id: 's3', name: 'Cid Ramos', year: '4th Year', photoUrl: 'https://i.pravatar.cc/100?img=3', flagged: false },
  { id: 's4', name: 'Dex Alonzo', year: '1st Year', photoUrl: 'https://i.pravatar.cc/100?img=4', flagged: false },
  { id: 's5', name: 'Eli Tan', year: '3rd Year', photoUrl: 'https://i.pravatar.cc/100?img=5', flagged: false },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(starterStudents);
  const [query, setQuery] = useState('');

  function toggleFlag(id) {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student
      )
    );
  }

  const visibleStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>
      <Text style={styles.subtitle}>{students.length} students this term</Text>

      <TextInput
        style={styles.input}
        placeholder="Search students..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView>
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {visibleStudents.length === 0 && (
          <Text style={styles.empty}>No students found</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#E9D5FF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4C1D95',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B21A8',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  empty: {
    textAlign: 'center',
    color: '#6B21A8',
    marginTop: 20,
  },
});