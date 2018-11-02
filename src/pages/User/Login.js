import React from 'react';
import PropTypes from 'prop-types';
import{Button} from 'antd';
import {connect} from 'dva';

const Login =(props)=> {  
        return (
            <div>
                <p>{props.user.number}</p>
                <p>xx</p>
                <Button onClick={ () => { props.dispatch({ type: 'user/add' }) } }>Add</Button>
                <Button onClick={ () => { props.dispatch({ type: 'user/min' }) } }>Min</Button>
                <Button onClick={ () => { props.dispatch({ type: 'user/name' }) } }>获取用户名</Button>
            </div>
        );
   
}

Login.propTypes = {};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default  connect(mapStateToProps)(Login);

