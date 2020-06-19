import React from "react";
import ResultHistoryItem from "../StyledComponents/ResultsHistoryItem";
import Paragraph from "../StyledComponents/Paragraph";

const ResultsHistory = (props) => {
    let items = props.resultsHistory.length>0?
        props.resultsHistory.map( item => <ResultHistoryItem {...item} key={item.session_id} /> ) :
        (<Paragraph>
            Ваша история пуста. Вы еще ни разу не проходили тест.
        </Paragraph>)
    ;
    return(
      <div>
          {items}
      </div>
    );
};

export default ResultsHistory;