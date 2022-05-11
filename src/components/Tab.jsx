
import React, {useState} from 'react'

const Tab = (props) => {

    const [tabs, setTabs] = useState([
        {name: "Tab 1", content: "Tab 1 content is showing over here!"},
        {name: "Tab 2", content: "Tab 2 content is showing here."},
        {name: "Tab 3", content: "Tab 3 content is showing right here."}
    ]);
    const [selected, setSelected] = useState(0)

    const clicked = (e, index) => {
        setSelected(index)
        
    }
    return(
        <div>
            {
                tabs.map((tab, index) => {
                    return <div key={index}>
                                <button onClick={(e) => clicked(e, index)}>{tab.name}</button>
                            </div>
                    
                })
            }
            
            <div>
                <h2>{tabs[selected].content}</h2>
            </div>
        </div>
    )
}
export default Tab;