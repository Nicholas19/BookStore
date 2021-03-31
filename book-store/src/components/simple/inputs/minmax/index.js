import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from 'components/simple/inputs/lazy';

const CustomInput = (props) => {
    
    const ref = React.createRef();

    const increase = () => {
        set(props.cnt + 1);
    }

    const decrease = () => {
        set(props.cnt - 1);
    }

    const set = (newCnt) => {
        let cnt = Math.min(Math.max(newCnt, props.min), props.max);
        props.onChange(cnt);
        return cnt;
    }

    const onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = set(isNaN(cnt) ? props.min : cnt);

        if (realCnt.toString() !== e.target.value) {
            ref.current.setValue(realCnt);
        }
    }

    return (
        <div>
            <button
                onClick={decrease}
            >
                -
                </button>
            <AppLazyInput
                nativeProps={{ type: 'text', disabled: props.disabled }}
                value={props.cnt}
                onChange={onChange}
                ref={ref}
            />
            <button
                onClick={increase}
            >
                +
            </button>
        </div>
    );
};

CustomInput.defaultProps = {
    onChange: function (cnt) { }
}

CustomInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default CustomInput;
