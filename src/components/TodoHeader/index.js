import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import LikeIcon from '../../assets/images/like.svg';
import UnLikeIcon from '../../assets/images/unlike.svg';
import colors from '../../theme';
import styles from './styles';

const TodoHeader = ({
  id,
  name,
  place,
  day,
  start,
  end,
  isChecked,
  isFavorite,
  onToggleFavorite,
  onToggleCheck,
  onToggleDelete,
}) => {
  const navigation = useNavigation();
  const accronym = (str) => {
    let matches = str.toUpperCase().match(/\b(\w)/g);
    return matches.join('').substring(0, 4);
  };
  return (
    <View style={styles.todoHeader}>
      <View style={styles.info}>
        <Avatar
          title={accronym(name)}
          style={styles.avatar}
          rounded
          size={16}
        />
        <View style={styles.infoInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.day}>{day}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.icon} onPress={onToggleFavorite}>
          {isFavorite ? (
            <LikeIcon fill={colors.tertiary} width={16} height={16} />
          ) : (
            <UnLikeIcon fill={colors.darkGrey} width={16} height={16} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.push('Edit', {
              key: id,
              _name: name,
              _place: place,
              _day: day,
              _start: start,
              _end: end,
              isChecked,
            })
          }
          style={styles.icon}>
          <MaterialCommunityIcons
            name="pencil"
            size={16}
            color={colors.darkGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={onToggleDelete}>
          <MaterialCommunityIcons
            name="trash-can"
            size={16}
            color={colors.darkGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={onToggleCheck}>
          {isChecked ? (
            <MaterialCommunityIcons
              name="clock-check"
              size={16}
              color={colors.primary}
            />
          ) : (
            <MaterialCommunityIcons
              name="clock-check-outline"
              size={16}
              color={colors.darkGrey}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;
