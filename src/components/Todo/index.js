import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import TodoHeader from '../TodoHeader';
import CityWrapper from '../CityWrapper';
import TodoFooter from '../TodoFooter';

const Todo = ({
  id,
  name,
  place,
  start,
  end,
  day,
  isChecked,
  isFavorite,
  onToggleFavorite,
  onToggleCheck,
  onToggleDelete,
}) => {
  return (
    <View style={styles.todo}>
      <TodoHeader
        id={id}
        name={name}
        place={place}
        start={start}
        end={end}
        day={day}
        isChecked={isChecked}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        onToggleCheck={onToggleCheck}
        onToggleDelete={onToggleDelete}
      />
      <CityWrapper place={place} isChecked={isChecked} />
      <TodoFooter start={start} end={end} />
    </View>
  );
};

export default Todo;
