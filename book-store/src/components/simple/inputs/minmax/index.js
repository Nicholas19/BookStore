import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '~c/inputs/lazy';

const CustomInput = (props) => {

    lazyInput = React.createRef();

    increase = () => {
        set(props.cnt + 1);
    }

    decrease = () => {
        set(props.cnt - 1);
    }

    set = (newCnt) => {
        let cnt = Math.min(Math.max(newCnt, props.min), props.max);
        props.onChange(cnt);
        return cnt;
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = set(isNaN(cnt) ? props.min : cnt);

        if (realCnt.toString() !== e.target.value) {
            lazyInput.current.setValue(realCnt);
        }
    }

    return (
        <div>
            <button
                onClick={decrease}
                disabled={props.disabled}
            >
                -
                </button>
            <AppLazyInput
                nativeProps={{ type: 'text', className: styles.input, disabled: props.disabled }}
                value={props.cnt}
                onChange={onChange}
                ref={lazyInput}
            />
            <button
                onClick={increase}
                disabled={props.disabled}
            >
                +
            </button>
        </div>
    );
}

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
