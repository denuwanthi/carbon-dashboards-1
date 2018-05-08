/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {FormattedMessage} from 'react-intl';
import {Header} from '../common';

const muiTheme = getMuiTheme(darkBaseTheme);
const styles = {
    navigation: {
        'background-color': '#17262e',
        padding: '10px'
    }
};

export default class DefaultLayout extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header title={this.props.headerTitle} />
                    {this.props.navigationBar ? <div style={styles.navigation}>{this.props.navigationBar}</div> : null}
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

DefaultLayout.defaultProps = {
    headerTitle: <FormattedMessage id='portal.title' defaultMessage='Portal' />,
    navigationBar: null
};

DefaultLayout.propTypes = {
    headerTitle: PropTypes.element,
    navigationBar: PropTypes.element
};