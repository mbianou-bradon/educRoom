import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './accordion.styles';

export default function Accordion() {
  /** State management */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.subContainer}
        onPress={() => setIsOpen(prevState => !prevState)}>
        <View>
          <Text style={styles.headingText}>Week 1: Accordion</Text>
          <View>
            <Text style={styles.numberOfLessonsText}>5 Lessons</Text>
          </View>
        </View>
        {/* Icon */}
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            transform: [{rotate: isOpen ? '90deg' : '-90deg'}],
          }}>
          &#x2039;
        </Text>
      </Pressable>

      {/* Content */}
      {isOpen && (
        <View style={styles.contentDetailContainer}>
          <Text style={styles.contentDetailText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            facere.
          </Text>
        </View>
      )}
    </View>
  );
}
