import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Main from './src/pages/Main';

export default Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='main' title='Main' component={Main} hideNavBar={true} />
        </Stack>
    </Router>
)