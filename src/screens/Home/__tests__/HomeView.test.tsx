import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {render, fireEvent, screen} from '@testing-library/react-native';

type ExampleQuestionsBoardProps = {
  questions: string[];
  onSubmit: (obj: {}) => void;
};
function ExampleQuestionsBoard({
  questions,
  onSubmit,
}: ExampleQuestionsBoardProps) {
  const [data, setData] = React.useState({});

  return (
    <ScrollView>
      {questions.map((q, index) => {
        return (
          <View key={q}>
            <Text>{q}</Text>
            <TextInput
              accessibilityLabel="answer input"
              accessibilityHint="input"
              onChangeText={text => {
                setData(state => ({
                  ...state,
                  [index + 1]: {q, a: text},
                }));
              }}
            />
          </View>
        );
      })}
      <TouchableOpacity onPress={() => onSubmit(data)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

describe('test example', () => {
  test('form submits two answers', () => {
    const allQuestions = ['q1', 'q2'];
    const mockFn = jest.fn();

    render(
      <ExampleQuestionsBoard questions={allQuestions} onSubmit={mockFn} />,
    );

    const answerInputs = screen.getAllByLabelText('answer input');

    fireEvent.changeText(answerInputs[0], 'a1');
    fireEvent.changeText(answerInputs[1], 'a2');
    fireEvent.press(screen.getByText('Submit'));

    expect(mockFn).toBeCalledWith({
      '1': {q: 'q1', a: 'a1'},
      '2': {q: 'q2', a: 'a2'},
    });
  });
});
