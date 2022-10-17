import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
	query Topics($topicName: String!) {
		topic(name: $topicName) {
			name
			relatedTopics(first: 10) {
				id
				name
				stargazerCount
			}
		}
	}
`
