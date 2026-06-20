import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'center',
    marginBottom:12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginTop:12,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 14,
    paddingRight: 16,
  },
  chatHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  chatTime: {
    fontSize: 14,
    color: '#707070',
  },
  chatTimeUnread: {
    color: '#2aa45c',
    fontWeight: '600',
  },
  chatMessageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  chatMessage: {
    fontSize: 14,
    color: '#707070',
    flex: 1,
    paddingRight: 10,
  },
  unreadBadge: {
    backgroundColor: '#019a09',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});