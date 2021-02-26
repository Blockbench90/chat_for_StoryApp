import React from 'react';
import {Button, Result} from 'antd';

import {useHistory} from 'react-router-dom';
import Block from "../Block/Block";


const CheckEmailInfo = () => {
  const history = useHistory()

    return (
        <div className="verify-block">
            <Block>
                    <Result
                        status='success'
                        title='title'
                        subTitle='message'/>
                <Button type="primary" onClick={() => history.push('/signin')}>
                    Войти
                </Button>
            </Block>
        </div>
    )
};

export default CheckEmailInfo;
