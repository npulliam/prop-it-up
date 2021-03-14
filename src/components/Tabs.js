import React, { useState } from 'react'; 

const Tabs = (props) => {
    const tabsArr = props.tabs;
    const [activeTab, setActiveTab] = useState(tabsArr[0].content);
    
    const tabClick = (e, content) => {
        console.log(e)
        setActiveTab(content);
    }

    const tabsButtons = tabsArr.map((tab, i) => {
        return <button className="btn btn-dark m-4 col"  key={i} onClick={ (e) => tabClick(e, tab.content) }>{tab.label}</button>
    });

    return (
        <div className="container my-4 p-3">
            <div className="row d-flex">
                {tabsButtons}    
            </div>
            <div className="row card">
                <p>{activeTab}</p>
            </div>
        </div>
    )
}

export default Tabs