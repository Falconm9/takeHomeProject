import React from "react";
import { strings } from "../../res/strings";
const TopicList = ({itemlist, selectTopic, topic }) => {

  const TopicItem = ({information}) => (
    <div style={styles.topicItem} onClick={() => selectTopic(information.name)}>
      <b style={styles.topicName}>{information.name}</b>
      <p>
        <b>{strings.stargazersCount}</b>
        {information.stargazerCount}
      </p>
    </div>
  )

  return(
    <div>
      <div style={styles.totalTopics}>
        <h4 data-testid="searchedTopic">{itemlist.length} Topics matching "{topic}"</h4>
      </div>
      <div>
        {
          itemlist.map((item, index) => (
            <TopicItem key={index} information={item} />
          ))
        }
      </div>
    </div>
  )
}

const styles = {
  totalTopics:{
    alignItems: 'flex-start',
    display: 'flex',
    margin: '0 20%',
  },
  topicItem: {
    outline: "2px solid #c5c6c7",
    margin: '10px 0',
    borderRadius: '3px',
    padding: '10px',
    cursor: 'pointer',
    display: 'inline-block',
    width: '60%'
  },
  topicName: {
    color: '#0000EE'
  }
}


export default  TopicList;