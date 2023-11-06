import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './accordion.styles';

interface Props {
  week: string;
  topic: string;
  content: string;
}

export default function Accordion({week, topic, content}: Props) {
  /** State management */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.subContainer}
        onPress={() => setIsOpen(prevState => !prevState)}>
        <View>
          <Text style={styles.headingText}>
            Week {week}: {topic}
          </Text>
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
          <Text style={styles.contentDetailText}>{content}</Text>
        </View>
      )}
    </View>
  );
}
