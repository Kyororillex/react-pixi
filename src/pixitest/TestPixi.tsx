import { BlurFilter , TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text} from '@pixi/react';
import { useMemo } from 'react';

const MyComponent = () => {

    return (

        <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
            <Text
                text="Hello World"
                x={100}
                y={100}
                style={new TextStyle({ fill: 'white' })}
            />
        </Stage>

    )
}

export default MyComponent;
