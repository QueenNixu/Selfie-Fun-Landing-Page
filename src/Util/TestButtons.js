import React from 'react';
import { Button } from '../Components/Button/Button';

const TestButtons = () => {
    const styles = ["btn--primary", "btn--outline"];
    const sizes = ["btn--medium", "btn--large"];

    return (
        <div>
            <h1>Button Variations</h1>
            {styles.map((style) => (
                sizes.map((size) => (
                    <div key={`${style}-${size}`} style={{ margin: '10px' }}>
                        <Button btnStyle={style} btnSize={size} onClick={() => alert(`${style} ${size}`)}>
                            {style} {size}
                        </Button>
                    </div>
                ))
            ))}
        </div>
    );
}

export default TestButtons;
