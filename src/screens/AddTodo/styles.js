import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  textHeader: {
    backgroundColor: colors.white,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  text: {
    marginTop: 35,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  boxWrapper: {
    backgroundColor: colors.darkgrey,
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  box: {
    marginTop: 50,
    backgroundColor: colors.white,
    width: '90%',
    borderWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 5,
  },
  boxHeader: {
    height: 120,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  timeZone: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: 6,
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  surrounder: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: '21%',
  },
  name: {
    height: 35,
    color: colors.darkGrey,
    width: '86%',
    marginHorizontal: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: colors.grey,
    borderWidth: 0.5,
    borderRadius: 3,
    alignItems: 'center',
  },
  addWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: 130,
    backgroundColor: colors.tertiary,
    borderRadius: 50,
    marginVertical: 15,
    height: 45,
  },
  add: {
    fontSize: 18,
    fontWeight: 'normal',
    color: colors.white,
    lineHeight: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: -15,
  },
});

export default styles;
