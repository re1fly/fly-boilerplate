import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import CardCounter from './CardCounter';


const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    cardCounterContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

function ContentComponent() {
    return (
        <Column>
            <Row className={css(styles.cardsContainer)}
                 wrap f
                 lexGrow={1}
                 horizontal="space-between"
                 breakpoints={{ 768: 'column' }}>
                <Row className={css(styles.cardRow)}
                     wrap flexGrow={1}
                     horizontal="space-between"
                     breakpoints={{ 384: 'column' }}>
                    <CardCounter className={css(styles.cardCounterContainer)}
                                 title="Card 1"
                                 value="0"
                                 doClick={() => alert('Card 1 Clicked')}/>
                    <CardCounter className={css(styles.cardCounterContainer)}
                                 title="Card 2"
                                 value="0"
                                 doClick={() => alert('Card 2 Clicked')} />
                </Row>
                <Row className={css(styles.cardRow)}
                     wrap flexGrow={1}
                     horizontal="space-between"
                     breakpoints={{ 384: 'column' }}>
                    <CardCounter className={css(styles.cardCounterContainer)}
                                 title="Card 3"
                                 value="0"
                                 doClick={() => alert('Card 3 Clicked')}/>
                    <CardCounter className={css(styles.cardCounterContainer)}
                                 title="Card 4"
                                 value="0"
                                 doClick={() => alert('Card 4 Clicked')} />
                </Row>
            </Row>
        </Column>
    );
}

export default ContentComponent;