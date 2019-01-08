import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ThePrayer = props => (
    <Track
        cues={[
            "00:00",
            "00:07",
            "00:29",
            "00:50",
            "01:06",
            "01:21",
            "01:42",
            "02:02",
            "02:17",
            "02:32",
            "02:52",
        ]}
        music="wonderful_maker_the_prayer"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.ThePrayer />
        </Title>
        <Verse>
            <Line>There’s a longing in my heart</Line>
            <Line>as I kneel before your feet</Line>
            <Line>Hear the whisper of confession</Line>
            <Line>Father, teach me how to pray</Line>
        </Verse>
        <Verse>
            <Line>As I humbly bow to you</Line>
            <Line>knowing that I lay no claim</Line>
            <Line>In your favour and compassion</Line>
            <Line>Father, help me to obey</Line>
        </Verse>
        <Verse name="one">
            <Line>May your name be esteemed</Line>
            <Line>Bring your rule to this earth</Line>
            <Line>Your will be done</Line>
        </Verse>
        <Verse name="two">
            <Line>Feed me daily my bread</Line>
            <Line>and forgive all my sins</Line>
            <Line>as you lead me</Line>
        </Verse>
        <Verse>
            <Line>Should I stumble in my trust</Line>
            <Line>when the pressure steals my breath</Line>
            <Line>would you look to my intentions</Line>
            <Line>Father, lead me in the way</Line>
        </Verse>
        <Verse>
            <Line>May I always bring to mind</Line>
            <Line>all that you have done for me</Line>
            <Line>As I do unto another</Line>
            <Line>Father, burden me with love</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>When I ask you would you give</Line>
            <Line>as I seek you may I find</Line>
            <Line>Give the blessing of your Spirit</Line>
            <Line>Father, how else would I live?</Line>
        </Verse>
        <Verse>
            <Line>There’s a hunger in my soul</Line>
            <Line>only you can satisfy</Line>
            <Line>As I lift my eyes to heaven</Line>
            <Line>Father, hear my humble cry</Line>
        </Verse>
    </Track>
)

export { ThePrayer }
