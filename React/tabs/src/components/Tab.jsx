import React, {useState} from 'react';
import style from "./Tab.module.css"


const Tab = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const tabs = [
        {
            label: "Tab 1",
            content: "Tab 1 content is showing here"
        },
        {
            label: "Tab 2",
            content: "Tab 2 content is showing here"
        },
        {
            label: "Tab 3",
            content: "Tab 3 content is showing here"
        }
    ]

    return (
        <div className={style.container}>
            <header> {/* Select Tab */}
                {tabs.map((tab, i) =>
                    <p key={i} className={currentTab !== i ? style.tab : `${style.tab} ${style.active}`} onClick={() => setCurrentTab(i)}>{tab.label}</p>
                )}
            </header>
            <div> {/* Show Current tab content */}
                <textarea readOnly value={tabs[currentTab].content} cols="30" rows="10" />
            </div>
        </div>
    )
}

export default Tab