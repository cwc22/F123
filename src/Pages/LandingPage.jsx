import React from 'react'
import { TopAppBar, TopAppBarFixedAdjust, TopAppBarSection, TopAppBarRow, 
    TopAppBarTitle } from '@rmwc/top-app-bar'
import { TabBar, Tab } from '@rmwc/tabs'

export const LandingPage = () => {
    console.log('HELLO')

    return (
        <>
            <TopAppBar fixed>
                <TopAppBarRow style={{ backgroundColor: '#E10600'}}>
                <TopAppBarSection>
                    <TopAppBarTitle>F123</TopAppBarTitle>
                </TopAppBarSection>
                    <TabBar style={{ position: 'fixed', width: '50%', marginLeft: '25%', marginTop: '16px', zIndex: '1' }}>
                        <Tab>Predict</Tab>
                        <Tab style={{ color: 'white' }}>Results</Tab>
                    </TabBar>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />

            <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
        </>
    )
}