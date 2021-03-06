import { theme } from '@global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
  },
});
