import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { GraphQLError } from 'graphql';
import '@testing-library/jest-dom';
import TOPICS from '../index';
import { GET_TOPICS } from '../../../graphql/queries';

test('render Topics section with error', async () => {
  const topics = {
    request: {
      query: GET_TOPICS,
      variables: { topicName: 'react' }
    },
    result: {
      errors: [new GraphQLError("Error!")],
    },  
  };
  render(
    <MockedProvider mocks={[topics]}>
      <TOPICS />
    </MockedProvider>
  );

  expect(await screen.findByTestId("loading")).toBeInTheDocument();
  expect(await screen.findByTestId("errorMsg")).toBeInTheDocument();
});

test('render Topics section with data', async () => {
  const topics = {
    request: {
      query: GET_TOPICS,
      variables: { topicName: 'react' }
    },
    result: {
      data: { 
        topic: {
          name: 'react',
          relatedTopics: [
            { id: 'dde2', name: 'angular', stargazerCount: 1234}
          ],
        } 
      }
    },  
  };
  render(
    <MockedProvider mocks={[topics]}>
      <TOPICS />
    </MockedProvider>
  );

  expect(await screen.findByTestId("loading")).toBeInTheDocument();
  expect(await screen.findByTestId("searchedTopic")).toBeInTheDocument();
});
