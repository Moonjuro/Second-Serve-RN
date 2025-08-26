import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const MENU_WIDTH = Math.min(320, Math.round(screenWidth * 0.78));

export default function HamburgerMenu({ navigation, controlledOpen = null, onChangeOpen = null }) {
  // If parent passes controlledOpen (boolean) this component becomes controlled
  const isControlled = controlledOpen !== null && typeof onChangeOpen === 'function';

  const [openInternal, setOpenInternal] = useState(false);
  const open = isControlled ? controlledOpen : openInternal;

  const anim = useRef(new Animated.Value(open ? 0 : -MENU_WIDTH)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 0 : -MENU_WIDTH,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [open, anim]);

  function setOpen(next) {
    if (isControlled) return onChangeOpen(next);
    setOpenInternal(next);
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'home', screen: 'Home' },
    { id: 'profile', label: 'Profile', icon: 'person', screen: 'Profile' },
    { id: 'settings', label: 'Settings', icon: 'settings', screen: 'Settings' },
    { id: 'help', label: 'Help', icon: 'help-circle', screen: null },
    { id: 'logout', label: 'Log out', icon: 'log-out', screen: null },
  ];

  function handleItemPress(item) {
    setOpen(false);
    if (item.screen && navigation && navigation.navigate) {
      navigation.navigate(item.screen);
    } else {
      console.log('Pressed', item.label);
    }
  }

  return (
    <SafeAreaView style={styles.container} pointerEvents="box-none">
      {/* Menu button */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setOpen(!open)}
        accessibilityLabel={open ? 'Close menu' : 'Open menu'}
      >
        <Ionicons name={open ? 'close' : 'menu'} size={28} />
      </TouchableOpacity>

      {/* Backdrop */}
      {open ? (
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={() => setOpen(false)} />
      ) : null}

      {/* Animated menu */}
      <Animated.View
        style={[
          styles.menu,
          {
            width: MENU_WIDTH,
            transform: [{ translateX: anim }],
          },
        ]}
        pointerEvents={open ? 'auto' : 'none'}
      >
        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>

        <FlatList
          data={menuItems}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuItem} onPress={() => handleItemPress(item)}>
              <Ionicons name={item.icon} size={20} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>v1.0</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 50,
  },
  menuButton: {
    padding: 8,
    marginLeft: 8,
    marginTop: 6,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 40,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 10,
    zIndex: 45,
  },
  menuHeader: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e6e6e6',
  },
  menuTitle: { fontSize: 18, fontWeight: '700' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItemIcon: { marginRight: 12 },
  menuItemText: { fontSize: 16 },
  footer: { padding: 12, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#eee' },
  footerText: { fontSize: 12, color: '#666' },
});
