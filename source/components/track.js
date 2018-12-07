import React, { Children, Component, cloneElement } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import SoundPlayer from "react-native-sound-player"
import { seconds } from "../helpers"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const ScrollContainer = styled.ScrollView`
    display: flex;
    width: 100%;
    height: 100%;
`

class Track extends Component {
    static propTypes = {
        isAnimating: PropTypes.bool,
        isPlaying: PropTypes.bool,
    }

    static defaultProps = {
        isAnimating: false,
        isPlaying: false,
    }

    componentDidMount() {
        const { music, onFinished, isPlaying } = this.props

        if (isPlaying) {
            SoundPlayer.onFinishedLoading(() => {
                this.startedAt = new Date()
            })

            // TODO
            // we need a better way of waiting
            // for the file to load, so we don't
            // desync the music and words
            SoundPlayer.playSoundFile(music, "mp3")

            if (onFinished) {
                SoundPlayer.onFinishedPlaying(onFinished)
            }
        }

        this.forceUpdateTimer = setInterval(() => {
            const { isPlaying } = this.props

            if (isPlaying) {
                this.forceUpdate()
            }
        }, 250)
    }

    componentDidUpdate(previousProps) {
        const { music, isPlaying, onFinished } = this.props

        if (previousProps.isPlaying && !isPlaying) {
            SoundPlayer.stop()
            SoundPlayer.unmount()

            this.startedAt = undefined
        }

        if (!previousProps.isPlaying && isPlaying) {
            SoundPlayer.onFinishedLoading(() => {
                this.startedAt = new Date()
            })

            // TODO
            // we need a better way of waiting
            // for the file to load, so we don't
            // desync the music and words
            SoundPlayer.playSoundFile(music, "mp3")

            if (onFinished) {
                SoundPlayer.onFinishedPlaying(onFinished)
            }
        }
    }

    componentWillUnmount() {
        const { isPlaying } = this.props

        if (isPlaying) {
            SoundPlayer.stop()
            SoundPlayer.unmount()
        }

        clearTimeout(this.forceUpdateTimer)
    }

    process = () => {
        const { children, cues } = this.props

        const verses = []
        const processed = []

        Children.forEach(children, (child, i) => {
            const props = {
                key: i,
            }

            if (child.type.name === "Verse") {
                processed.push(cloneElement(child, props))
                verses.push(child)
            }

            if (child.type.name === "Repeat") {
                const verse = this.verseFromRepeatOf(child, verses)
                processed.push(cloneElement(verse, props))
            }
        })

        const limits = []

        for (let i = 0; i < cues.length; i++) {
            if (i < cues.length - 1) {
                limits.push([seconds(cues[i]), seconds(cues[i + 1])])
            } else {
                limits.push([seconds(cues[i]), 999999])
            }
        }

        this.processedChildren = processed
        this.processedLimits = limits
    }

    verseFromRepeatOf = (target, verses) => {
        const matching = verses.filter(verse => {
            return verse.props.children[0].props.children === target.props.children
        })

        if (matching.length !== 1) {
            console.error("no single verse found matching repeat")
        }

        return matching[0]
    }

    renderStaticChildren = () => {
        this.process()

        return this.processedChildren
    }

    renderAnimatedChildren = () => {
        this.process()

        if (!this.startedAt) {
            return []
        }

        const children = this.processedChildren
        const limits = this.processedLimits

        const diff = (new Date().getTime() - this.startedAt.getTime()) / 1000

        const shown = []

        for (let i = 0; i < children.length; i++) {
            if (diff >= limits[i][0] && diff < limits[i][1]) {
                shown.push(cloneElement(children[i]))
            }
        }

        return shown
    }

    render() {
        const { isAnimating } = this.props

        if (isAnimating) {
            return <Container>{this.renderAnimatedChildren()}</Container>
        }

        return <ScrollContainer>{this.renderStaticChildren()}</ScrollContainer>
    }
}

export { Track }