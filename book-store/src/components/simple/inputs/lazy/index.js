import React from 'react';
import PropTypes from 'prop-types';

const LazyInput = (props) => {

    nativeInput = React.createRef();

    componentDidUpdate((prevProps, prevState) => {
        let inp = nativeInput.current;

        if (prevProps.value !== props.value &&
            props.value != inp.value
        ) {
            inp.value = props.value;
        }
    });

    setValue = (value) => {
        nativeInput.current.value = value;
    }

    checkChange = (e) => {
        if (props.value.toString() !== e.target.value) {
            props.onChange(e);
        }
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            checkChange(e);
        }
    }

    return (
        <input {...props.nativeProps}
            defaultValue={props.value}
            onBlur={checkChange}
            onKeyUp={checkEnterKey}
            ref={nativeInput}
        />
    );

}

LazyInput.defaultProps = {
    onChange: function (e) { },
    nativeProps: {}
}

LazyInput.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    nativeProps: PropTypes.object
}

export default LazyInput;