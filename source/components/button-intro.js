import React, { Component } from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import styled from "styled-components/native"
import { Button } from "./button"
import { BackgroundColor, NormalLightColor } from "../colors"
import { Check, HandDrawnArrowUp } from "../icons"
import { SizeContext } from "../context"
import { relativeSize, selectCss } from "../helpers"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.context.width}px;
    height: ${props => props.context.height}px;
    background-color: ${BackgroundColor};
`

const Text = styled.Text`
    ${selectCss(
        `font-family: Patrick Hand;`,
        `font-family: patrick_hand_regular;`,
    )};
    color: ${NormalLightColor};
    text-align: center;
`

const InstructionText = styled(Text)`
    font-size: ${props => relativeSize(40, props.context)}px;
    line-height: ${props => relativeSize(64, props.context)}px;
`

const Section = styled.View`
    padding-bottom: 32px;
`

class ButtonIntro extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
    }

    onPress = async () => {
        this.props.onPress()
    }

    render() {
        return (
            <SizeContext.Consumer>
                {context => (
                    <Container context={context}>
                        <Section>
                            <InstructionText context={context}>
                                Every blue thing is a button,
                            </InstructionText>
                            <InstructionText context={context}>
                                but you have to hold it down...
                            </InstructionText>
                        </Section>
                        <Section>
                            <View
                                style={{
                                    transform: [{ rotate: "180deg" }],
                                }}
                            >
                                <HandDrawnArrowUp
                                    width={64}
                                    height={64}
                                    fill={NormalLightColor}
                                />
                            </View>
                        </Section>
                        <Button onPress={this.onPress}>
                            <Check />
                        </Button>
                    </Container>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { ButtonIntro }