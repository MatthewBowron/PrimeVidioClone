import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const PrimeHeader: React.FC = () => {
  const menuItems: string[] = ['Movies', 'TV shows', 'Sports', 'Live TV'];

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>
          <Text style={styles.prime}>prime </Text>
          <Text style={styles.video}>video</Text>
        </Text>
        <View style={styles.icons}>
          <MaterialIcons name="cast" size={24} color="white" style={styles.icon} />
          <Ionicons name="person-circle" size={30} color="white" />
        </View>
      </View>

      {/* Menu Row */}
      <View style={styles.menuRow}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item} style={styles.menuButton}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PrimeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  prime: {
    color: 'white',
    fontWeight: 'bold',
  },
  video: {
    color: '#00A8E1',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  menuRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  menuButton: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 14,
  },
});
