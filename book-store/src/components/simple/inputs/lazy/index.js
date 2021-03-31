import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const LazyInput =  React.forwardRef((props, ref) => {
    
    useEffect(() => {
        const inp = ref.current;

        if (props.value !== inp.value
        ) {
            inp.value = props.value;
        }
    }, [props.value]);

    const setValue = (value) => {
        ref.current.value = value;
    }
    
    const checkChange = (e) => {
        if (props.value.toString() !== e.target.value) {
            props.onChange(e);
        }
    }

    const checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            checkChange(e);
        }
    }

    return (
        <input {...props.nativeProps}
            className={styles.input}
            defaultValue={props.value}
            onBlur={checkChange}
            onKeyUp={checkEnterKey}
            ref={ref}
        />
    );

});

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