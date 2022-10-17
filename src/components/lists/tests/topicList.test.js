import { render, screen, fireEvent  } from '@testing-library/react';
import TopicList from '../topicList';
const mockedList = [
  {
    name: "angular",
    stargazerCount: 101
  },
  {
    name: "react",
    stargazerCount: 1044
  }
]

test('render Topic List', () => {
  render(<TopicList itemlist={mockedList} topic={"angular"}/>);
  const searchedTopic = screen.getByTestId("searchedTopic");
  expect(searchedTopic).toBeInTheDocument();

  const reactTopic = screen.getByText("react");
  expect(reactTopic).toBeInTheDocument();

  const stargezerCount = screen.getByText(/1044/i);
  expect(stargezerCount).toBeInTheDocument();
});

test('render handleSelectTopic', () => {
  const handleSelectTopic = jest.fn()
  render(<TopicList itemlist={mockedList} selectTopic={handleSelectTopic} topic={"react"}/>);
  const searchedTopic = screen.getByText(/matching "react"/i);
  expect(searchedTopic).toBeInTheDocument();

  const reactTopic = screen.getByText("react");
  fireEvent.click(reactTopic)
  const angularTopic = screen.getByText("angular");
  fireEvent.click(angularTopic)
  expect(handleSelectTopic).toHaveBeenCalledTimes(2)
});
