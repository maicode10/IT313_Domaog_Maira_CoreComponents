# Student Directory Viewer

## The Problem
The IT313 registrar gave a list of students who need academic advising.
This Expo (React Native) app lets an adviser browse the students,
search them by name, and flag a student for advising.

## Component Structure
- **App.js** - the app entry file. It only shows StudentDirectory.
- **StudentDirectory** (parent) - holds the students array and the search
  query in state. It filters the list, renders one StudentCard per student
  inside a ScrollView, and updates a student's flagged state.
- **StudentCard** (child) - shows one student's photo, name, and year level
  using View, Image, and Text. It has a Pressable "Flag for Advising"
  button that changes appearance when pressed and when flagged.

## How to Run
1. Install dependencies: `npm install`
2. Start the app: `npx expo start`
3. Scan the QR code with Expo Go, or press `a` to open an Android emulator.
