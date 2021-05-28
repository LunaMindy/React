import React, { useState } from "react";

//얘는 컴포넌트아님
const ColorContext = React.createContext({

    color: "yellow",
    setColor: function(color) {} //함수라고 표시만할뿐, 내용이 들어가서 실행할게 아님, 그냥 이대로 충분함
    // setColor: function(color) {this.color = color;} // () => {} 

});

//얘는 컴포넌트 ->props return 값 있어야함
export function ColorContextProvider(props) {
    const [color, setColor] = useState("yellow");
    const value={
        color: color,
        setColor: setColor
/*         color,
        setColor  이렇게 가능*/

    };

    return (
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
}

export default ColorContext;

