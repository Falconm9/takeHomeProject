import React, {useState} from "react";
import { useQuery } from '@apollo/client';

import TopicList from "../../components/lists/topicList";
import SearchTextField from "../../components/textfields/searchTextfield";
import LoadingSpin from "../../components/layout/loading";
import ErrorMsg from "../../components/layout/errorMsg";
import { GET_TOPICS } from "../../graphql/queries";


export default function Topics(){
  const [topic, setTopic] = useState('react');
  const { loading, error, data } = useQuery(GET_TOPICS, {variables: {topicName: topic}});   

  const handleSearch = (searchValue) => {
    setTopic(searchValue);
  }

  return(
    <>
      {loading && <LoadingSpin />}
      {error && <ErrorMsg error={error} />}
      {data &&  (
        <div style={stylesTopicsSection}>
          <SearchTextField defaultValue={topic} handleSearch={handleSearch} />
          <TopicList 
            itemlist={data.topic?.relatedTopics || []} 
            selectTopic={setTopic} 
            topic={topic}
          />
        </div>
      )}
    </>
  )
}

const stylesTopicsSection = {
  marginTop: '20px',
  padding: '10px',
}
